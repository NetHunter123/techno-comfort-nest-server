import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProducerDto {
  @ApiProperty({ example: 'Asus' })
  @IsNotEmpty()
  readonly producer_name: string;
}
