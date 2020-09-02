import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import InsertActivityService from './services/InsertActivity.service';
import GetActivitiesService from './services/GetActivities.service';
import DeleteActivityService from './services/DeleteActivity.service';
import ActivityController from './infra/http/controllers/Activity.controller';
import ActivitiesRepository from './infra/typeorm/repositories/Activities.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ActivitiesRepository])],
  controllers: [ActivityController],
  providers: [
    InsertActivityService,
    GetActivitiesService,
    DeleteActivityService,
  ],
})
export default class ActivitiesModule {}
