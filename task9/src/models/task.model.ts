import { randomUUID } from 'crypto';

export interface ITask {
  id: string;
  title: string;
  order: number;
  description: string;
  userId?: string | null;
  boardId?: string | null;
  columnId?: string | null;
}

export class Task implements ITask {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string | null;
  columnId: string | null;

  constructor({
    id = randomUUID(),
    title = 'title',
    order = Date.now(),
    description = 'description',
    userId = null,
    boardId = randomUUID(),
    columnId = randomUUID(),
  }: ITask) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}
