import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const options: TypeOrmModuleOptions = {
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'luizalabs',
  entities: [
    path.resolve(
      __dirname,
      '..',
      'modules',
      '**',
      'infra',
      'typeorm',
      'entities',
      '*.entity{.ts,.js}',
    ),
  ],
  migrations: [
    path.resolve(
      __dirname,
      '..',
      'shared',
      'infra',
      'typeorm',
      'migrations',
      '*.ts',
    ),
  ],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
};

module.exports = options;
