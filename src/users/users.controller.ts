/* global RequestInit */

import {Body, Controller, Header, HttpCode, HttpStatus, Inject, Post, UseGuards, Request, Get} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {LocalAuthGuard} from "src/auth/local.auth,guard";
import {AuthenticatedGuard} from "src/auth/authenticated.guard";
import {ApiBody, ApiOkResponse} from "@nestjs/swagger";
import {
  LoginCheckResponse,
  LoginUserRequest,
  LoginUserResponse,
  LogoutUserResponse,
  SignupResponse
} from "src/users/types";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @ApiOkResponse({type: SignupResponse})
  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-Type', 'application/json')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiBody({type: LoginUserRequest})
  @ApiOkResponse({type: LoginUserResponse})
  @Post('/login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  login(@Request() req) {
    return {user: req.user, msg: 'Авторизація Успішна'};
  }

  // @ApiBody({type: LoginUserRequest})
  @ApiOkResponse({type: LoginCheckResponse})
  @Get('/login-check')
  @UseGuards(AuthenticatedGuard)
  loginCheck(@Request() req) {
    return req.user;
  }

  @ApiOkResponse({type: LogoutUserResponse})
  @Get('/logout')
  logout(@Request() req) {
    req.session.destroy()
    return {msg: "Сесія закінчена"}
  }

  // login() {
  //   return "hello mfc"
  // }


  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
