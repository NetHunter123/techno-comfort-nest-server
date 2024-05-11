import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from 'src/products/entities/product.entity';
import { IProductsQuery } from 'src/products/types';
import { Producer } from 'src/producers/entities/producer.entity';
import {Op, Sequelize} from 'sequelize';
import { Category } from 'src/categories/entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

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
