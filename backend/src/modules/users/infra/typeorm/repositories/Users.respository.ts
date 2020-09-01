import { EntityRepository, AbstractRepository } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsers.repository';

import User from '../entities/User.entity';

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
}

export default UsersRepository;
