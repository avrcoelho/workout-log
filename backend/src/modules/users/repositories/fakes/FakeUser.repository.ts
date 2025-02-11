import { EntityRepository, AbstractRepository } from 'typeorm';
import { uuid } from 'uuidv4';

import IUserRepository from '@modules/users/repositories/IUsers.repository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUser.dto';

import User from '../../infra/typeorm/entities/User.entity';

@EntityRepository(User)
class FakeUsersRepository
  extends AbstractRepository<User>
  implements IUserRepository {
  private users: User[] = [];

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find((user) => user.email === email);

    return findUser;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid() }, userData);

    this.users.push(user);

    return user;
  }
}

export default FakeUsersRepository;
