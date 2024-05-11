import {
  Column,
  DataType,
  HasMany,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Product } from 'src/products/entities/product.entity';

@Table
export class Category extends Model {
  @Unique
  @Column
  category_name: string;

  @Unique
  @Column
  category_value: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.TEXT)
  filters: string;

  @HasMany(() => Product)
  products: Product[];
}
