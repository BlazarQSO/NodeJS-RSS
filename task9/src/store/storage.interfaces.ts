import { CreateBoardDto } from 'src/boards/dto/create-board.dto';
import { UpdateBoardDto } from 'src/boards/dto/update-board.dto';
import { IBoard, ITask } from 'src/models';
import { CreateTaskDto } from 'src/tasks/dto/create-task.dto';
import { UpdateTaskDto } from 'src/tasks/dto/update-task.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { UserEntity } from 'src/users/interfaces/user.interface';

type StorageCreateDto = CreateTaskDto | CreateBoardDto | CreateUserDto;
type StorageUpdateDto = UpdateUserDto | UpdateBoardDto | UpdateTaskDto;
type Entity = UserEntity | IBoard | ITask;

export interface IStorage {
  addItem: (createUserDto: StorageCreateDto, table: string) => Entity;
  getAll: (table: string) => Entity[];
  removeItem: (id: string, table: string) => boolean;
  getItem: (id: string, table: string) => Entity;
  removeDependencies: (id: string, table: string) => void;
  updateItem: (
    id: string,
    updateUserDto: StorageUpdateDto,
    table: string,
  ) => Entity;
}
