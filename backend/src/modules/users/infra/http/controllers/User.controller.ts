import { Controller, Post, Body } from '@nestjs/common';
import { classToClass } from 'class-transformer';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

import CreateUserDTO from '../dtos/CreateUser.dto';
import CreateUserService from '../../../services/CreateUser.service';

@Controller('users')
class UserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  @ApiOperation({
    summary: 'Create user',
    tags: ['User'],
  })
  @ApiBody({ type: CreateUserDTO })
  async create(@Body() body: CreateUserDTO) {
    const { fullname, email, password } = body;

    const user = await this.createUserService.execute({
      fullname,
      email,
      password,
    });

    return classToClass(user);
  }
}

export default UserController;
