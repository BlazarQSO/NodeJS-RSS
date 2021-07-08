import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

export interface ITask {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string | null;
  columnId: string | null;
}

export class TaskEntity {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string | null;
  columnId: string | null;
}

export interface TaskStorage {
  addItem: (createUserDto: CreateTaskDto, table: string) => TaskEntity;
  getAll: (table: string) => TaskEntity[];
  removeItem: (id: string, table: string) => boolean;
  getItem: (id: string, table: string) => TaskEntity;
  updateItem: (
    id: string,
    updateUserDto: UpdateTaskDto,
    table: string,
  ) => TaskEntity;
}
