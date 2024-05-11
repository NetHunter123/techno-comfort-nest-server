import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  //функція валідації користувача
  async validateUser(email: string, password: string) {
    // перевірка чи данний користува зареєстрований, або простими словами пошук його в базі данних
    // console.log("test")
    const user = await this.usersService.findOne({ where: { email: email } });
    //якщо наявний користувач уже не зареєстрований то видається помилка з відповідним текстом
    // Invalid credentials
    // console.log("validateUser, auth.service")
    if (!user) {
      throw new UnauthorizedException('Недійсні облікові дані');
    }
    // перевірка на правельність введеного паролю, перевіряє введений пароль з паролем найденого користувача
    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      throw new UnauthorizedException('Недійсні облікові дані');
    }
    // якщо дві перевірки пройдені повертається обєкт з даними про користувача
    if (user && passwordValid) {
      return {
        name: user.name,
        surname: user.surname,
        userId: user.id,
        email: user.email,
      };
    }

    return null;
  }

  // create(createAuthDto: CreateAuthDto) {
  //     return 'This action adds a new auth';
  // }
  //
  // findAll() {
  //     return `This action returns all auth`;
  // }
  //
  // findOne(id: number) {
  //     return `This action returns a #${id} auth`;
  // }
  //
  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //     return `This action updates a #${id} auth`;
  // }
  //
  // remove(id: number) {
  //     return `This action removes a #${id} auth`;
  // }
}
