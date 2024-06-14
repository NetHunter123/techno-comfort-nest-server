import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import {
  CategoryProductsPaginateResponse,
  GetBestsellersResponse,
  GetByNameRequest,
  GetByNameResponse,
  GetNewResponse,
  PaginateAndFilterResponse,
  SearchRequest,
  SearchResponse,
} from 'src/products/types';
import { FindOneResponse } from 'src/products/types';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @ApiOkResponse({ type: PaginateAndFilterResponse })
  @Get('')
  getProductsPaginationAndFilter(@Query() query) {
    return this.productsService.getProductsPaginationAndFilter(query);
  }

  @ApiOkResponse({ type: PaginateAndFilterResponse })
  @Get('all')
  paginationAndFilter(@Query() query) {
    return this.productsService.paginateAndFilter(query);
  }

  @ApiOkResponse({ type: CategoryProductsPaginateResponse })
  @Get('category/:category')
  getCategoryProducts(@Param('category') category: string, @Query() query) {
    return this.productsService.getCategoryProducts(+category, query);
  }

  @ApiOkResponse({ type: FindOneResponse })
  @Get('find/:vendor_code')
  getOne(@Param('vendor_code') vendor_code: string) {
    return this.productsService.findOne(+vendor_code);
  }

  @ApiOkResponse({ type: GetBestsellersResponse })
  @Get('bestsellers')
  getBestseller() {
    return this.productsService.bestsellers();
  }

  @ApiOkResponse({ type: GetNewResponse })
  @Get('new')
  new() {
    return this.productsService.new();
  }

  @ApiOkResponse({ type: SearchResponse })
  @ApiBody({ type: SearchRequest })
  @Post('search')
  search(@Body() { search }: { search: string }) {
    return this.productsService.searchByString(search);
  }

  @ApiOkResponse({ type: GetByNameResponse })
  @ApiBody({ type: GetByNameRequest })
  @Post('name')
  getByName(@Body() { name }: { name: string }) {
    return this.productsService.findOneByName(name);
  }
}
