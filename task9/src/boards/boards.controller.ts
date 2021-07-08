import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Logger,
  HttpException,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
export class BoardsController {
  private readonly logger = new Logger(BoardsController.name);

  constructor(private readonly boardsService: BoardsService) {}

  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    const board = this.boardsService.create(createBoardDto);
    if (board) {
      return board;
    }
    this.logger.error('a board was not created');
    throw new HttpException(
      'Internal server error!!!',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  @Get()
  findAll() {
    const boards = this.boardsService.findAll();
    if (Array.isArray(boards)) {
      return boards;
    }
    this.logger.error('Internal server error');
    throw new HttpException(
      'Internal server error!!!',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const board = this.boardsService.findOne(id);
    if (board) {
      return board;
    }
    this.logger.error('Board not found');
    throw new HttpException('Board not found!!!', HttpStatus.NOT_FOUND);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    const board = this.boardsService.update(id, updateBoardDto);
    if (board) {
      return board;
    }
    this.logger.error('Board not found');
    throw new HttpException('Board not found!!!', HttpStatus.NOT_FOUND);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const isDelete = this.boardsService.remove(id);
    if (isDelete) {
      this.logger.log('remove a board');
    } else {
      this.logger.log('board not found');
      throw new HttpException('Board not found!!!', HttpStatus.NOT_FOUND);
    }
  }
}
