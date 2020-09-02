import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import jwtConfig from '@config/jwt';
import BCryptHashProvider from './providers/hashProvider/implementations/BCryptHash.provider';
import CreateUserService from './services/CreateUser.service';
import AuthService from './services/Auth.service';
import AuthController from './infra/http/controllers/Auth.controller';
import UserController from './infra/http/controllers/User.controller';
import UsersRepository from './infra/typeorm/repositories/Users.repository';
import JwtStrategy from './strategies/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersRepository]),
    JwtModule.register({
      secret: jwtConfig.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController, UserController],
  providers: [
    JwtStrategy,
    CreateUserService,
    AuthService,
    {
      provide: 'HashProvider',
      useClass: BCryptHashProvider,
    },
  ],
})
export default class UsersModule {}
