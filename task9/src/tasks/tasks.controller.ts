import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Logger,
  HttpStatus,
  HttpException,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('boards/:boardId/tasks')
export class TasksController {
  private readonly logger = new Logger(TasksController.name);

  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Param('boardId') boardId, @Body() createTaskDto: CreateTaskDto) {
    createTaskDto.boardId = boardId;

    const task = this.tasksService.create(createTaskDto);
    if (task) {
      return task;
    }
    this.logger.error('A task was not created');
    throw new HttpException(
      'Internal server error!!!',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  @Get()
  findAll() {
    const tasks = this.tasksService.findAll();
    if (Array.isArray(tasks)) {
      return tasks;
    }
    this.logger.error('Internal server error');
    throw new HttpException(
      'Internal server error!!!',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const task = this.tasksService.findOne(id);
    if (task) {
      return task;
    }
    this.logger.error('Task not found');
    throw new HttpException('Task not found!!!', HttpStatus.NOT_FOUND);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    const task = this.tasksService.update(id, updateTaskDto);
    if (task) {
      return task;
    }
    this.logger.error('User not found');
    throw new HttpException('User not found!!!', HttpStatus.NOT_FOUND);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const isDelete = this.tasksService.remove(id);
    if (isDelete) {
      this.logger.log('remove a task');
    } else {
      this.logger.log('task not found');
      throw new HttpException('Task not found!!!', HttpStatus.NOT_FOUND);
    }
  }
}
