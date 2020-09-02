import { BadRequestException } from '@nestjs/common';

import FakeUserRepository from '../../repositories/fakes/FakeUser.repository';
import FakeHashProvider from '../../providers/hashProvider/fakes/FakeHash.provider';
import CreateUserService from '../CreateUser.service';

let fakeUserRepository: FakeUserRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;

describe('CreateUserService', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();
    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUserService(fakeUserRepository, fakeHashProvider);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      fullname: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456789',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not create be able to create a new user with same email from another', async () => {
    await createUser.execute({
      fullname: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456789',
    });

    await expect(
      createUser.execute({
        fullname: 'John Doe',

        email: 'johndoe@example.com',
        password: '123456789',
      }),
    ).rejects.toBeInstanceOf(BadRequestException);
  });
});
