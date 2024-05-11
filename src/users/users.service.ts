import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  findOne(filter: { where: { id?: string; email?: string } }): Promise<User> {
    return this.userModel.findOne({ ...filter });
  }

  //завдання функції create реєструвати нового користувача вона приймає аргумент createUserDto з типом CreateUserDto DTO - Data Transfer Object,
  //але спочатку перед створенням потрібно перевірити чи данний користува уже створений в бд

  async create(
    createUserDto: CreateUserDto,
  ): Promise<User | { warningMessage: string }> {
    //створення новий екземпряр користувача
    const user = new User();
    //перевірка чи наявний користувач уже зареєстрований
    const existUser = await this.findOne({
      where: { email: createUserDto.email },
    });
    //якщо наявний користувач уже зареєстрований то видається помилка з відповідним текстом
    // This email already exist
    if (existUser)
      throw new BadRequestException('Даний email уже зареєстровано!');

    // хешування паролю з допомогою бібліотеки bcrypt
    const hashedPassword = bcrypt.hash(createUserDto.password, 10);

    // на повнення екземпляру класу потрібними данними
    user.name = createUserDto.name;
    user.surname = createUserDto.surname;
    user.email = createUserDto.email;
    user.password = await hashedPassword;

    // запис даних про нового користувача в базу данних
    return user.save();
  }

  findAll() {
    return `This action returns all users`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
