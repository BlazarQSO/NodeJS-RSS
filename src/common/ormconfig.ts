import { ConnectionOptions } from 'typeorm';
import { User, Task, Board } from '../entities';

export const ormConfig: ConnectionOptions = {
  type: 'postgres',    
  host: process.env['POSTGRES_HOST'],
  port: Number(process.env['POSTGRES_PORT']),
  database: process.env['POSTGRES_DB'],
  username: process.env['POSTGRES_USER'],
  password: process.env['POSTGRES_PASSWORD'],
  logging: false,
  migrationsRun: false,
  synchronize: false,
  dropSchema: false,
  entities: [User, Board, Task],  
  migrations: ['./src/migrations/**/*.ts'],  
  cli: {
    migrationsDir: 'src/migrations',
  },  
};
