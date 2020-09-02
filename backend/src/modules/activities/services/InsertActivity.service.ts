import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import ActivitiesRepository from '../infra/typeorm/repositories/Activities.repository';
import IInsertActivityDTO from '../dtos/IInsertActivity.dto';
import Activity from '../infra/typeorm/entities/Activity.entity';

@Injectable()
class InsertActivityService {
  constructor(
    @InjectRepository(ActivitiesRepository)
    private activitiesRepository: ActivitiesRepository,
  ) {}

  public async execute({
    user_id,
    time,
    date,
    type,
  }: IInsertActivityDTO): Promise<Activity> {
    const activity = await this.activitiesRepository.create({
      user_id,
      time,
      date,
      type,
    });

    return activity;
  }
}

export default InsertActivityService;
