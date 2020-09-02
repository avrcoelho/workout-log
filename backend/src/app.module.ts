import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import UsersModule from './modules/users/users.module';
import ActivitiesModule from './modules/activities/activities.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, ActivitiesModule],
})
export class AppModule {}
