import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import ActivitiesRepository from '../infra/typeorm/repositories/Activities.repository';

@Injectable()
class DeleteActivityService {
  constructor(
    @InjectRepository(ActivitiesRepository)
    private activitiesRepository: ActivitiesRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    await this.activitiesRepository.delete(id);
  }
}

export default DeleteActivityService;
