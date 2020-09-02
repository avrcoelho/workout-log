import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';

import FakeUserRepository from '@modules/users/repositories/fakes/FakeUser.repository';
import FakeHashProvider from '@modules/users/providers/hashProvider/fakes/FakeHash.provider';
import AuthService from '../Auth.service';

let fakeUserRepository: FakeUserRepository;
let fakeHashProvider: FakeHashProvider;
let authService: AuthService;
let jwtService: JwtService;

describe('AuthService', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();
    fakeHashProvider = new FakeHashProvider();
    fakeHashProvider = new FakeHashProvider();
    jwtService = new JwtService({
      secret: 'test',
      signOptions: { expiresIn: '1d' },
    });

    authService = new AuthService(
      fakeUserRepository,
      fakeHashProvider,
      jwtService,
    );
  });

  it('should be able to generate token', async () => {
    await fakeUserRepository.create({
      fullname: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456789',
    });

    const token = await authService.execute({
      email: 'johndoe@example.com',
      password: '123456789',
    });

    expect(token).toHaveProperty('token');
  });

  it('should be able don´t found user', async () => {
    await expect(
      authService.execute({
        email: 'johndoe@example.com',
        password: '123456789',
      }),
    ).rejects.toBeInstanceOf(UnauthorizedException);

    await fakeUserRepository.create({
      fullname: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456789',
    });

    await expect(
      authService.execute({
        email: 'johndoe@example.com',
        password: '12345678',
      }),
    ).rejects.toBeInstanceOf(UnauthorizedException);
  });
});
