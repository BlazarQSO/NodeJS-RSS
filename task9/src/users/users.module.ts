import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Database } from 'src/store/storage';
import { TasksModule } from 'src/tasks/tasks.module';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'IStorage',
      useClass: Database,
    },
  ],
  imports: [TasksModule]
})
export class UsersModule {}
