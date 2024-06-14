import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from 'src/products/entities/product.entity';
import { IProductsQuery, Filter } from 'src/products/types';
import { Producer } from 'src/producers/entities/producer.entity';
import { Op, Sequelize } from 'sequelize';
import { Category } from 'src/categories/entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  async getMinMaxPrice(
    whereConditions,
  ): Promise<{ minPrice: any; maxPrice: any }> {
    const response = await this.productModel.findAndCountAll({
      where: {
        [Op.and]: whereConditions,
      },

      include: [
        {
          model: Producer,
          as: 'producer',
          where: { id: Sequelize.col('Product.producerId') },
        },
        {
          model: Category,
          as: 'category',
          where: { id: Sequelize.col('Product.categoryId') },
        },
      ],
    });

    const prices = response.rows.map((row) => row.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    return {
      minPrice,
      maxPrice,
    };
  }

  async getCategoryProducts(
    category: number | string,
    query: IProductsQuery,
  ): Promise<{ count: number; rows: Product[] }> {
    // const totalRecords = this.productModel.count();
    const limit = +query.limit;
    const pageNumber = +query.pageNumber;
    const offset = limit * (pageNumber - 1);
    let orderByPrice = null;

    switch (query.order) {
      case 'cheap':
        orderByPrice = [['price', 'ASC']];
        break;
      case 'expensive':
        orderByPrice = [['price', 'DESC']];
        break;
    }

    const response = await this.productModel.findAndCountAll({
      limit,
      offset,
      where: { categoryId: category },
      order: orderByPrice,
      include: [
        {
          model: Producer,
          as: 'producer',
          where: { id: Sequelize.col('Product.producerId') },
        },
        {
          model: Category,
          as: 'category',
          where: { id: Sequelize.col('Product.categoryId') },
        },
      ],
    });
    // console.log("paginateAndFilter response", response)
    return { ...response };
  }

  async getProductsPaginationAndFilter(
    query: IProductsQuery,
  ): Promise<{ count: number; rows: Product[]; meta: object }> {
    const parseFilters = (query: IProductsQuery): Filter[] => {
      const filters: Filter[] = [];
      for (const key in query) {
        if (key !== 'limit' && key !== 'pageNumber' && key !== 'order') {
          console.log('query[key]', `${query[key]}`.split(','), '\n\n\n');
          filters.push({ field: key, value: `${query[key]}`.split(',') });
        }
      }
      return filters;
    };
    const applyFilters = (filters: Filter[]) => {
      const whereConditions: any[] = [];

      filters.forEach((filter) => {
        if (filter.field === 'producer') {
          // Фільтр по виробнику буде доданий до include
          return;
        }

        if (filter.field === 'category') {
          // Фільтр по виробнику буде доданий до include
          return;
        }

        if (filter.field === 'price') {
          console.log('\n\n\nfilter.value\n\n\n', filter.value);
          const queryMinPrice = +filter.value[0] || minPrice;
          const queryMaxPrice = +filter.value[1] || maxPrice;

          whereConditions.push({
            price: {
              [Op.between]: [queryMinPrice, queryMaxPrice], // Фільтрація за діапазоном цін
            },
          });
          return;
        }

        if (Array.isArray(filter.value)) {
          const orConditions = filter.value.map((value) => {
            return Sequelize.literal(
              `JSON_CONTAINS(product_characteristics, '{"fieldKey": "${filter.field}", "value": "${value}"}', '$')`,
            );
          });
          whereConditions.push({
            [Op.or]: orConditions,
          });
        } else {
          console.log('\n\n\nє одне\n\n\n');
          whereConditions.push(
            Sequelize.literal(
              `JSON_CONTAINS(product_characteristics, '{"fieldKey": "${filter.field}", "value": "${filter.value}"}', '$')`,
            ),
          );
        }
      });

      return whereConditions;
    };

    const filters = parseFilters(query);
    const whereConditions = applyFilters(filters);

    const limit = +query.limit;
    const pageNumber = +query.pageNumber;
    const offset = limit * (pageNumber - 1);

    let category;
    if (query.category) {
      category = `${query.category}`.split(',').map(Number);
    } else {
      category = Sequelize.col('Product.categoryId');
    }
    let producer;
    if (query.producer) {
      producer = `${query.producer}`.split(',').map(Number);
    } else {
      producer = Sequelize.col('Product.producerId');
    }

    console.log('\n\n\ncategory__producer\n\n\n', producer, category);
    let orderByPrice = null;
    switch (query.order) {
      case 'cheapest':
        orderByPrice = [['price', 'ASC']];
        break;
      case 'expensive':
        orderByPrice = [['price', 'DESC']];
        break;
      default:
        orderByPrice = null;
        break;
    }
    const response = await this.productModel.findAndCountAll({
      limit,
      offset,
      where: {
        [Op.and]: whereConditions,
      },
      order: orderByPrice,
      include: [
        {
          model: Producer,
          as: 'producer',
          where: {
            id: producer,
          },
        },
        {
          model: Category,
          as: 'category',
          // where: category || {
          //   id: Sequelize.col('Product.categoryId'),
          // },
          where: { id: category },
        },
      ],
    });

    const { minPrice, maxPrice } = await this.getMinMaxPrice(whereConditions);

    const { count } = response;
    const totalPages = Math.ceil(count / limit);

    return {
      ...response,
      meta: { price: { min: minPrice, max: maxPrice }, pages: totalPages },
    };
  }

  async paginateAndFilter(
    query: IProductsQuery,
  ): Promise<{ count: number; rows: Product[] }> {
    const totalRecords = this.productModel.count();
    const limit = +query.limit;
    const pageNumber = +query.pageNumber;

    const offset = limit * (pageNumber - 1);

    // if (offset >= totalRecords) {
    //   // Зменшення ліміту та перерахунок офсету для відображення залишкових записів
    //   // limit = totalRecords % limit;
    //   offset = totalRecords - limit;
    // }

    const response = await this.productModel.findAndCountAll({
      limit,
      offset,
      include: [
        {
          model: Producer,
          as: 'producer',
          where: { id: Sequelize.col('Product.producerId') },
        },
        {
          model: Category,
          as: 'category',
          where: { id: Sequelize.col('Product.categoryId') },
        },
      ],
    });
    // console.log("paginateAndFilter response", response)
    return { ...response };
  }

  async bestsellers(): Promise<{ count: number; rows: Product[] }> {
    const response = await this.productModel.findAndCountAll({
      where: {
        bestseller: true,
      },
      include: [
        {
          model: Producer,
          as: 'producer',
          where: { id: Sequelize.col('Product.producerId') },
        },
        {
          model: Category,
          as: 'category',
          where: { id: Sequelize.col('Product.categoryId') },
        },
      ],
    });

    return {
      count: response.count,
      rows: response.rows,
    };
  }

  async new(): Promise<{ count: number; rows: Product[] }> {
    return this.productModel.findAndCountAll({
      where: { new: true },
      include: [
        {
          model: Producer,
          as: 'producer',
          where: { id: Sequelize.col('Product.producerId') },
        },
        {
          model: Category,
          as: 'category',
          where: { id: Sequelize.col('Product.categoryId') },
        },
      ],
    });
  }

  async findOne(
    vendor_code: number | string,
  ): Promise<Product | { msg: string }> {
    const resp = this.productModel.findOne({
      where: { vendor_code },
      include: [
        {
          model: Producer,
          as: 'producer',
          where: { id: Sequelize.col('Product.producerId') },
        },
        {
          model: Category,
          as: 'category',
          where: { id: Sequelize.col('Product.categoryId') },
        },
      ],
    });
    return resp || { msg: 'Такого продукту немає' };
  }

  async searchByString(
    str: string,
  ): Promise<{ count: number; rows: Product[] }> {
    return this.productModel.findAndCountAll({
      limit: 10,
      where: { product_name: { [Op.like]: `%${str}%` } },
      include: [
        {
          model: Producer,
          as: 'producer',
          where: { id: Sequelize.col('Product.producerId') },
        },
        {
          model: Category,
          as: 'category',
          where: { id: Sequelize.col('Product.categoryId') },
        },
      ],
    });
  }

  async findOneByName(product_name: string): Promise<Product> {
    return this.productModel.findOne({
      where: { product_name },
      include: [
        {
          model: Producer,
          as: 'producer',
          where: { id: Sequelize.col('Product.producerId') },
        },
        {
          model: Category,
          as: 'category',
          where: { id: Sequelize.col('Product.categoryId') },
        },
      ],
    });
  }

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all products`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
