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
import {ApiBody, ApiOkResponse} from "@nestjs/swagger";
import {
  GetBestsellersResponse, GetByNameRequest, GetByNameResponse,
  GetNewResponse,
  PaginateAndFilterResponse,
  SearchRequest,
  SearchResponse
} from "src/products/types";
import {FindOneResponse} from "src/products/types";

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOkResponse({ type: PaginateAndFilterResponse })
  @Get()
  paginationAndFilter(@Query() query) {
    return this.productsService.paginateAndFilter(query);
  }

  @ApiOkResponse({ type: FindOneResponse })
  @Get('find/:id')
  getOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
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

  //----------------------------------------------------------
  // @Post()
  // create(@Body() createProductDto: CreateProductDto) {
  //   return this.productsService.create(createProductDto);
  // }
  //
  // @Get()
  // findAll() {
  //   return this.productsService.findAll();
  // }
  //
  //
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productsService.update(+id, updateProductDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productsService.remove(+id);
  // }
}
