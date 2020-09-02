import User from '../infra/typeorm/entities/User.entity';
import ICreateUserDTO from '../dtos/ICreateUser.dto';

export default interface IUsersRepository {
  findByEmail(user_id: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
}
