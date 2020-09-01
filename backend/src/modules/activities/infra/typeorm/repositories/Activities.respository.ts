import { EntityRepository, AbstractRepository } from 'typeorm';

import IActivitiesRepository from '@modules/activities/repositories/IActivities.repository';
import ICreateActivityDTO from '@modules/activities/dtos/ICreateActivity.dto';

import Activity from '../entities/Activity.entity';

@EntityRepository(Activity)
class ActivitiesRepository
  extends AbstractRepository<Activity>
  implements IActivitiesRepository {
  public async findByUserId(user_id: string): Promise<Activity[]> {
    const activities = await this.repository.find({
      where: {
        user_id,
      },
    });

    return activities;
  }

  public async create(activityData: ICreateActivityDTO): Promise<Activity> {
    const activity = this.repository.create(activityData);

    await this.repository.save(activity);

    return activity;
  }

  public async delete(id: string): Promise<void> {
    this.repository.delete(id);
  }
}

export default ActivitiesRepository;
