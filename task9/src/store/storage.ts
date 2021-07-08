import {
  DEFAULT_COUNT_USERS,
  BD_TABLE_USERS,
  BD_TABLE_BOARDS,
  BD_TABLE_TASKS,
} from '../const';
import { Injectable } from '@nestjs/common';
import { IUser, UserEntity } from 'src/users/interfaces/user.interface';
import { Board, IBoard, ITask, Task, User } from 'src/models';

type Item = UserEntity | ITask | IBoard;
type Nullable<T> = T | null;

type Tables =
  | typeof BD_TABLE_USERS
  | typeof BD_TABLE_BOARDS
  | typeof BD_TABLE_TASKS;
type Items = ITask & IBoard & UserEntity;

@Injectable()
class Database {
  Users: Array<UserEntity> = [];
  Boards: Array<IBoard> = [];
  Tasks: Array<ITask> = [];

  constructor() {
    this.initDatabase(DEFAULT_COUNT_USERS);
  }

  initDatabase(count: number) {
    for (let i = 0; i < count; i += 1) {
      this.Users.push(new User({} as UserEntity));
      this.Boards.push(new Board({} as IBoard));
      this.Tasks.push(
        new Task({
          userId: this.Users[i]?.id || null,
          boardId: this.Boards[i]?.id || null,
          columnId: this.Boards[i]?.columns[0]?.id || null,
        } as ITask),
      );
    }
  }

  getAll(table: string) {
    return this[table as Tables];
  }

  addItem(itemDto: Item, table: string): Item {
    let item: Item;
    switch (table) {
      case BD_TABLE_USERS:
        item = new User(itemDto as IUser);
        break;
      case BD_TABLE_TASKS:
        item = new Task(itemDto as ITask);
        break;
      case BD_TABLE_BOARDS:
        item = new Board(itemDto as IBoard);
        break;
    }
    this[table as Tables].push(item as Items);
    return item;
  }

  removeItem(id: string, table: string): boolean {
    if (this.foundItem(id, table)) {
      this[table as Tables] = (this[table as Tables] as Array<Item>).filter(
        (item: Item) => item.id !== id,
      ) as Array<Items>;
      this.removeDependencies(id, table);
      return true;
    }
    return false;
  }

  getItem(id: string, table: string): Item {
    return this.foundItem(id, table);
  }

  updateItem(id: string, body: Item, table: string): Item {
    const index = this[table as Tables].findIndex(
      (item: Item) => item.id === id,
    );
    const updated = { ...this[table as Tables][index], id, ...body };
    this[table as Tables][index] = updated as Item;

    return updated;
  }

  foundItem(id: string, table: string): Nullable<Item> {
    const found = (this[table as Tables] as Array<Items>).find(
      (item: Item) => item.id === id,
    );
    if (found) {
      return found as Item;
    }

    return null;
  }

  removeDependencies(id: string, table: string) {
    switch (table) {
      case BD_TABLE_USERS:
        this.Tasks.forEach((task) => {
          if (task.userId === id) {
            task.userId = null;
          }
        });
        break;
      case BD_TABLE_BOARDS:
        this.Tasks = this.Tasks.filter((task) => task.boardId !== id);
        break;
      default:
        break;
    }
  }
}

export { Database };
