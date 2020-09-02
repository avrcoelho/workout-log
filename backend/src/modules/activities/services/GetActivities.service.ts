import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import ActivitiesRepository from '../infra/typeorm/repositories/Activities.repository';
import Activity from '../infra/typeorm/entities/Activity.entity';

@Injectable()
class GetActivitiesService {
  constructor(
    @InjectRepository(ActivitiesRepository)
    private activitiesRepository: ActivitiesRepository,
  ) {}

  public async execute(user_id: string): Promise<Activity[]> {
    const activities = await this.activitiesRepository.findByUserId(user_id);

    return activities;
  }
}

export default GetActivitiesService;
