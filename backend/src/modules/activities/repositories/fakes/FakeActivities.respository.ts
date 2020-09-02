import { EntityRepository, AbstractRepository } from 'typeorm';
import { uuid } from 'uuidv4';

import IActivitiesRepository from '@modules/activities/repositories/IActivities.repository';
import IInsertActivityDTO from '@modules/activities/dtos/IInsertActivity.dto';
import Activity from '../../infra/typeorm/entities/Activity.entity';

@EntityRepository(Activity)
class FakeActivitiesRepository
  extends AbstractRepository<Activity>
  implements IActivitiesRepository {
  private activities: Activity[] = [];

  public async findByUserId(user_id: string): Promise<Activity[]> {
    const activities = this.activities.filter(
      (activity) => activity.user_id === user_id,
    );

    return activities;
  }

  public async create(data: IInsertActivityDTO): Promise<Activity> {
    const activity = new Activity();

    Object.assign(activity, { id: uuid() }, data);

    this.activities.push(activity);

    return activity;
  }

  public async delete(id: string): Promise<void> {
    this.activities.filter((activity) => activity.id !== id);
  }
}

export default FakeActivitiesRepository;
