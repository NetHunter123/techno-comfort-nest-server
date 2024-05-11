import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Asus' })
  @IsNotEmpty()
  readonly producer_name: string;
}
