import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'John@gmail.com' })
  email: string;

  @ApiProperty({ example: 'John123' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        name: 'John',
        surname: 'Vick',
        userId: 3,
        email: 'john@gmail.com',
      },
    },
  })
  user: {
    name: string;
    surname: string;
    userId: number;
    password: string;
  };

  @ApiProperty({ example: 'Авторизація Успішна' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'Сесія закінчена' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 'John' })
  name: string;

  @ApiProperty({ example: 'Vick' })
  surname: string;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'john@gmail.com' })
  email: string;
}

export class SignupResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'John' })
  name: string;

  @ApiProperty({ example: 'Vick' })
  surname: string;

  @ApiProperty({
    example: '$2b$10$90H0Hn.6Nx0SbrHQCX2xeeYjq.02nS5VpkIIwFAtDtCHEqHK',
  })
  password: string;

  @ApiProperty({ example: 'john@gmail.com' })
  email: string;

  @ApiProperty({ example: '2023-03-17T17:23:33.502Z' })
  updatedAt: string;

  @ApiProperty({ example: '2023-03-17T17:23:33.502Z' })
  createdAt: string;
}
