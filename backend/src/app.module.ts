import {
  Module,
  MiddlewareConsumer,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import * as typeORMCOnfig from '@config/typeorm';
import UsersModule from './modules/users/users.module';
import ActivitiesModule from './modules/activities/activities.module';
import RateLimiterMiddleware from './shared/infra/http/middlewares/RateLimiter.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env.production'],
    }),
    TypeOrmModule.forRoot(typeORMCOnfig),
    UsersModule,
    ActivitiesModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RateLimiterMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
