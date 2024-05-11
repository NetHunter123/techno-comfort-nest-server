import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Sequelize } from 'sequelize';
import { Category } from 'src/categories/entities/category.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category)
    private categoryModel: typeof Category,
  ) {}
  // create(createCategoryDto: CreateCategoryDto) {
  //   return 'This action adds a new categories';
  // }

  findAlsl() {
    return `This action returns all categories`;
  }

  async findAll() {
    return this.categoryModel.findAndCountAll();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} categories`;
  // }
  //
  // update(id: number, updateCategoryDto: UpdateCategoryDto) {
  //   return `This action updates a #${id} categories`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} categories`;
  // }
}
