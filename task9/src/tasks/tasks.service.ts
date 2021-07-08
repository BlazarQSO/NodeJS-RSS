import { Inject, Injectable, Logger } from '@nestjs/common';
import { BD_TABLE_TASKS } from 'src/const';
import { IStorage } from 'src/store/storage.interfaces';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskEntity } from './interface/task.interface';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(@Inject('IStorage') private storage: IStorage) {}

  create(createTaskDto: CreateTaskDto): TaskEntity {
    this.logger.log('add a new task');
    return this.storage.addItem(createTaskDto, BD_TABLE_TASKS) as TaskEntity;
  }

  findAll(): TaskEntity[] {
    this.logger.log('get all tasks');
    return this.storage.getAll(BD_TABLE_TASKS) as TaskEntity[];
  }

  findOne(id: string): TaskEntity {
    this.logger.log('find a task by id');
    return this.storage.getItem(id, BD_TABLE_TASKS) as TaskEntity;
  }

  update(id: string, updateTaskDto: UpdateTaskDto): TaskEntity {
    this.logger.log('update a task');
    return this.storage.updateItem(
      id,
      updateTaskDto,
      BD_TABLE_TASKS,
    ) as TaskEntity;
  }

  remove(id: string): boolean {
    this.logger.warn('remove a task');
    return this.storage.removeItem(id, BD_TABLE_TASKS);
  }

  removeDependencies(id: string, table: string) {
    this.storage.removeDependencies(id, table);
  }
}
