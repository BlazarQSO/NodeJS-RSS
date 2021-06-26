import { ConnectionOptions } from 'typeorm';

export const ormConfig: ConnectionOptions = {
  type: 'postgres',
  name: 'connection',
  synchronize: false,
  host: process.env['POSTGRES_HOST'],
  port: Number(process.env['POSTGRES_PORT']),
  database: process.env['POSTGRES_DB'],
  username: process.env['POSTGRES_USER'],
  password: process.env['POSTGRES_PASSWORD'],
};
