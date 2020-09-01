import Activity from '../infra/typeorm/entities/Activity.entity';

export default interface IActivitiesRepository {
  findByEmail(email: string): Promise<Activity | undefined>;
}
