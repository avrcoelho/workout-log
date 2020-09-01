import User from '../infra/typeorm/entities/User.entity';

export default interface IUsersRepository {
  findByEmail(user_id: string): Promise<User | undefined>;
}
