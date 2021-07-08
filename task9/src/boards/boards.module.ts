import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { Database } from 'src/store/storage';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService, {
    provide: 'BoardStorage',
    useClass: Database,
  }]
})
export class BoardsModule {}
