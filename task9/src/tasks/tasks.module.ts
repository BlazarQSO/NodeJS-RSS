import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Database } from 'src/store/storage';

@Module({
  controllers: [TasksController],
  providers: [TasksService,{
    provide: 'TaskStorage',
    useClass: Database,
  }]
})
export class TasksModule {}
