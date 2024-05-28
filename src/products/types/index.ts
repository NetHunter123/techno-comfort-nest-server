import { ApiProperty } from '@nestjs/swagger';
import { faker } from '@faker-js/faker';

// extends Record<string, string | number | boolean>
export interface IProductsQuery
  extends Record<string, string | number | boolean | object> {
  limit: string;
  order: string;
  pageNumber: string;
  price?: {
    min?: number;
    max?: number;
  };
  // [key: string]: string;
}

export interface Filter {
  field: string;
  value: any;
}

class GetProduct {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  producerId: number;

  @ApiProperty({ example: 1 })
  categoryId: number;

  @ApiProperty({ example: faker.lorem.sentence(2) })
  product_name: string;

  @ApiProperty({ example: 26826 })
  vendor_code: number;

  @ApiProperty({ example: faker.lorem.sentence(15) })
  description: string;

  @ApiProperty({
    example: JSON.stringify(
      [...Array(5)].map(() => {
        return { key: faker.lorem.sentence(1), value: faker.lorem.sentence(8) };
      }),
    ),
  })
  product_characteristics: string;

  @ApiProperty({
    example:
      '["https://loremflickr.com/640/480/gadgets?lock=7793010978848768?random=33112","https://loremflickr.com/640/480/gadgets?lock=112502599843840?random=198768077164","https://loremflickr.com/640/480/gadgets?lock=537061406801920?random=28321","https://loremflickr.com/640/480/gadgets?lock=5198261929377792?random=55266429499217","https://loremflickr.com/640/480/gadgets?lock=348366940667904?random=641584071","https://loremflickr.com/640/480/gadgets?lock=7488180878049280?random=385743","https://loremflickr.com/640/480/gadgets?lock=7771101291610112?random=88983"]',
  })
  images: string;

  @ApiProperty({ example: true })
  bestseller: boolean;

  @ApiProperty({ example: false })
  new: boolean;

  @ApiProperty({ example: 1604.0 })
  price: number;

  @ApiProperty({ example: 5 })
  in_stock: number;

  @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
  updatedAt: string;

  @ApiProperty({
    example: {
      id: 2,
      producer_name: 'Asus',
      createdAt: '2024-04-04T14:14:20.000Z',
      updatedAt: '2024-04-04T14:14:20.000Z',
    },
  })
  producer: object;

  @ApiProperty({
    example: {
      id: 1,
      category_name: "Комп'ютери",
      description:
        'Aedificium correptius venustas bis delibero appono autus creo ab sustineo porro quam tolero cubicularis basium thesis.',
      createdAt: '2024-04-04T14:14:23.000Z',
      updatedAt: '2024-04-04T14:14:23.000Z',
    },
  })
  category: object;
}

export class getProductsPaginationAndFilter {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: GetProduct, isArray: true })
  rows: GetProduct;
}

export class PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: GetProduct, isArray: true })
  rows: GetProduct;
}
export class CategoryProductsPaginateResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: GetProduct, isArray: true })
  rows: GetProduct;
}

export class FindOneResponse extends GetProduct {}

export class Bestsellers extends GetProduct {
  @ApiProperty({ example: true })
  bestseller: boolean;
}

export class GetBestsellersResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: GetProduct, isArray: true })
  rows: Bestsellers;
}

export class NewParts extends GetProduct {
  @ApiProperty({ example: true })
  new: boolean;
}
export class GetNewResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: GetProduct, isArray: true })
  rows: NewParts;
}

export class SearchRequest {
  @ApiProperty({ example: 'r' })
  search: string;
}

export class SearchByLetterResponse extends GetProduct {
  @ApiProperty({ example: 'Provident incidunt.' })
  name: string;
}

export class SearchResponse extends PaginateAndFilterResponse {
  @ApiProperty({ type: SearchByLetterResponse, isArray: true })
  rows: SearchByLetterResponse;
}

export class GetByNameResponse extends GetProduct {
  @ApiProperty({ example: 'Provident incidunt.' })
  name: string;
}

export class GetByNameRequest {
  @ApiProperty({ example: 'Provident incidunt.' })
  name: string;
}
