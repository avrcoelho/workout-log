import { Injectable, Inject, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import UsersRepository from '../infra/typeorm/repositories/Users.repository';
import IHashProvider from '../providers/hashProvider/models/IHash.provider';
import ICreateUserDTO from '../dtos/ICreateUser.dto';
import User from '../infra/typeorm/entities/User.entity';

@Injectable()
class CreateUserService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,

    @Inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    fullname,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(
      email.toLowerCase(),
    );

    if (checkUserExists) {
      throw new HttpException('E-mail address already registered', 409);
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      fullname,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
