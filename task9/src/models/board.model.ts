import faker from 'faker';

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
        id = faker.datatype.uuid(),
        title = faker.name.title(),
        columns = [
            {
                id: faker.datatype.uuid(),
                title: faker.name.title(),
                order: faker.datatype.number(),
            },
        ],
    }: IBoard) {        
        this.id = id;        
        this.title = title;        
        this.columns = columns;
    }
}
