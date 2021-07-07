import { randomUUID } from 'crypto';

export interface IColumn {
    id: string;
    title: string;
    order: number;
}

export interface IBoard {
    id: string;
    title: string;
    columns: Array<IColumn>;
}

export class Board implements IBoard {
    id: string;
    title: string;
    columns: Array<IColumn>;

    constructor({
        id = randomUUID(),
        title = 'title',
        columns = [
            {
                id: randomUUID(),
                title: 'title',
                order: Date.now(),
            },
        ],
    }: IBoard) {        
        this.id = id;        
        this.title = title;        
        this.columns = columns;
    }
}
