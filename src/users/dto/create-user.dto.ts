import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: 'Carter' })
  @IsNotEmpty()
  readonly surname: string;

  @ApiProperty({ example: 'John@gmail.com' })
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ example: 'John123' })
  @IsNotEmpty()
  readonly password: string;
}
