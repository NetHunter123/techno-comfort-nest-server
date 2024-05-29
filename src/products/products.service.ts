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
  ): Promise<{ count: number; rows: Product[] }> {
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
          whereConditions.push({
            price: {
              [Op.eq]: filter.value,
            },
          });
          return;
        }

        // const value =
        //   typeof filter.value === 'string' ? filter.value : filter.value;

        if (Array.isArray(filter.value)) {
          console.log('\n\n\nє array\n\n\n');
          // whereConditions.push(
          //   Sequelize.literal(
          //     `JSON_CONTAINS(product_characteristics, '{"fieldKey": "${filter.field}", "value": "${filter.value}"}', '$')`,
          //   ),
          // );
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

        // if (Array.isArray(filter.value)) {
        //   whereConditions.push({
        //     product_characteristics: {
        //       [Op.or]: filter.value.map((value) => ({
        //         product_characteristics: {
        //           [Op.like]: `%{"fieldKey": "${filter.field}", "value": "${value}"}%`,
        //         },
        //       })),
        //       // [Op.contains]: JSON.stringify([
        //       //   { key: filter.field, value: { [Op.or]: value } },
        //       // ]),
        //       // [Op.or]: value.map((v) => ({ key: filter.field, value: v })),
        //     },
        //   });
        // } else {
        //   // const searchValue = `{"fieldKey": "${filter.field}", "value": "${filter.value}"}`;
        //   whereConditions.push({
        //     // product_characteristics: {
        //     //   [Op.like]: `%${searchValue}%`,
        //     //   // `{\"fieldKey\": \"ram\", \"value\": \"8GB\"}`
        //     // },
        //     // {\"field\":\"Оперативна пам'ять\",\"fieldKey\":\"ram\",\"value\":\"8GB\"}
        //     product_characteristics: {
        //       [Op.contains]: JSON.stringify({
        //         field: "Оперативна пам'ять",
        //         fieldKey: filter.field,
        //         value,
        //       }),
        //     },
        //   });
        // }
      });

      return whereConditions;
    };

    const filters = parseFilters(query);
    const whereConditions = applyFilters(filters);

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
      where: {
        [Op.and]: whereConditions,
      },
      // order: [[query.order, 'ASC']],
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

    return { ...response };
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

  async findOne(id: number | string): Promise<Product> {
    return this.productModel.findOne({
      where: { id },
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
