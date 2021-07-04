import faker from 'faker';

export interface ITask {
    id: string;
    title: string;
    order: number;
    description: string;
    userId: string | null;
    boardId: string | null;
    columnId: string | null;
}

export class Task {
    id: string;
    title: string;
    order: number;
    description: string;
    userId: string | null;
    boardId: string | null;
    columnId: string | null;

    constructor({
        id = faker.datatype.uuid(),
        title = faker.name.title(),
        order = faker.datatype.number(),
        description = faker.commerce.productDescription(),
        userId = null,
        boardId = faker.datatype.uuid(),
        columnId = faker.datatype.uuid(),
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
