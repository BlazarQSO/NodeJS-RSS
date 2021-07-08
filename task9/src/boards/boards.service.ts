import { Inject, Injectable, Logger } from '@nestjs/common';
import { BD_TABLE_BOARDS } from 'src/const';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardEntity, BoardStorage } from './interface/board.interface';

@Injectable()
export class BoardsService {
  private readonly logger = new Logger(BoardsService.name);
  
  constructor(@Inject('BoardStorage') private storage: BoardStorage) {}  
  
  create(createBoardDto: CreateBoardDto): BoardEntity {
    this.logger.log('add a new board');
    return this.storage.addItem(createBoardDto, BD_TABLE_BOARDS) as BoardEntity;
  }

  findAll(): BoardEntity[] {
    this.logger.log('get all users');
    return this.storage.getAll(BD_TABLE_BOARDS) as BoardEntity[];
  }

  findOne(id: string): BoardEntity {
    this.logger.log('find a board by id');
    return this.storage.getItem(id, BD_TABLE_BOARDS) as BoardEntity;
  }

  update(id: string, updateBoardDto: UpdateBoardDto): BoardEntity {
    this.logger.log('update a board');
    return this.storage.updateItem(id, updateBoardDto, BD_TABLE_BOARDS) as BoardEntity;
  }

  remove(id: string) {
    this.logger.warn('remove a board');
    return this.storage.removeItem(id, BD_TABLE_BOARDS);  
  }
}
