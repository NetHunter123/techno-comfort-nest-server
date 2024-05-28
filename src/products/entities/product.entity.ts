import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Producer } from 'src/producers/entities/producer.entity';
import { Category } from 'src/categories/entities/category.entity';

@Table
export class Product extends Model {
  @ForeignKey(() => Producer)
  @Column
  producerId: number;

  @BelongsTo(() => Producer)
  producer: Producer;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;

  @Unique
  @Column
  product_name: string;

  @Unique
  @Column
  vendor_code: number;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.TEXT)
  product_characteristics: string;

  @Column(DataType.TEXT)
  images: string;

  @Column
  bestseller: boolean;

  @Column
  new: boolean;

  @Column(DataType.DECIMAL(10, 2))
  price: number;

  @Column({ defaultValue: 0 })
  in_stock: number;
}
