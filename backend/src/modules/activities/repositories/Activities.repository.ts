import Activity from '../infra/typeorm/entities/Activity.entity';
import ICreateActivityDTO from '../dtos/ICreateActivity.dto';

export default interface IActivitiesRepository {
  create(data: ICreateActivityDTO): Promise<Activity>;
  findByUserId(user_id: string): Promise<Activity[]>;
  delete(id: string): Promise<void>;
}
