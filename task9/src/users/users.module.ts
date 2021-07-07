import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Database } from 'src/store/storage';

@Module({
  controllers: [UsersController],
  providers: [UsersService, {
    provide: 'UserStorage',
    useClass: Database,
  }]
})
export class UsersModule {}
