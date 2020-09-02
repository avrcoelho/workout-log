import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import UsersRepository from '../infra/typeorm/repositories/Users.repository';
import IHashProvider from '../providers/hashProvider/models/IHash.provider';

import ICreateUserDTO from '../dtos/ICreateUser.dto';

@Injectable()
class CreateUserService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,

    @Inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ fullname, email, password }: ICreateUserDTO) {
    const checkUserExists = await this.usersRepository.findByEmail(
      email.toLowerCase(),
    );

    if (checkUserExists) {
      throw new BadRequestException('E-mail address already registered');
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
