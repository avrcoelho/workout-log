import { EntityRepository, AbstractRepository } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsers.repository';

import User from '../entities/User.entity';
import ICreateUserDTO from '../../../dtos/ICreateUser.dto';

@EntityRepository(User)
class UsersRepository
  extends AbstractRepository<User>
  implements IUsersRepository {
  public async findByEmail(email: string): Promise<User | undefined> {
    const activities = await this.repository.findOne({
      where: {
        email,
      },
    });

    return activities;
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = this.repository.create(data);

    await this.repository.save(user);

    return user;
  }
}

export default UsersRepository;
