import { Column, HasMany, Model, Table, Unique } from 'sequelize-typescript';
import { Product } from 'src/products/entities/product.entity';

@Table
export class Producer extends Model {
  @Unique
  @Column
  producer_name: string;

  @HasMany(() => Product)
  products: Product[];
}
