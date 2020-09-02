import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import BCryptHashProvider from './providers/hashProvider/implementations/BCryptHash.provider';
import CreateUserService from './services/CreateUser.service';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [],
  providers: [
    CreateUserService,
    {
      provide: 'HashProvider',
      useClass: BCryptHashProvider,
    },
  ],
})
export default class UsersModule {}
