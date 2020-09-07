import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';

dotenv.config({
  path: path.resolve(__dirname, '..', '..', `.env.${process.env.NODE_ENV}`),
});

const options: TypeOrmModuleOptions = {
  name: 'default',
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
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
