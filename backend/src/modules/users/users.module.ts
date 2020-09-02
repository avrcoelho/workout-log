import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import jwtConfig from '@config/jwt';
import BCryptHashProvider from './providers/hashProvider/implementations/BCryptHash.provider';
import CreateUserService from './services/CreateUser.service';
import AuthService from './services/Auth.service';
import AuthController from './infra/http/controllers/Auth.controller';
import UsersRepository from './infra/typeorm/repositories/Users.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersRepository]),
    JwtModule.register({
      secret: jwtConfig.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    CreateUserService,
    AuthService,
    {
      provide: 'HashProvider',
      useClass: BCryptHashProvider,
    },
  ],
})
export default class UsersModule {}
