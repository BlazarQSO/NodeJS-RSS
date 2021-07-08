import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { Database } from 'src/store/storage';
import { TasksModule } from 'src/tasks/tasks.module';

@Module({
  controllers: [BoardsController],
  providers: [
    BoardsService,
    {
      provide: 'IStorage',
      useClass: Database,
    },
  ],
  imports: [TasksModule],
})
export class BoardsModule {}
