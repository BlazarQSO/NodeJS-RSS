import faker from 'faker';

/**
 * Column Interface
 * @typedef IColumn
 * @property {string} id - Id of the column
 * @property {string} title - Title of the column
 * @property {number} order - Order of the column
 */
export interface IColumn {
    id: string;
    title: string;
    order: number;
}

/**
 * Board Interface
 * @typedef IBoard
 * @property {string} id - Id of the board
 * @property {string} title - Title of the board.
 * @property {Array<IColumn>} columns - Columns of the board.
 */
export interface IBoard {
    id: string;
    title: string;
    columns: Array<IColumn>;
}

/**
 * Creates a new Board.
 * @class
 */
export class Board {
    id: string;
    title: string;
    columns: Array<IColumn>;

    /**
     * Create a Board - constructor.
     * @param {IBoard} IBoard - Information about the board
     */
    constructor(
        { id, title, columns }: IBoard = {
            id: faker.datatype.uuid(),
            title: faker.name.title(),
            columns: [
                {
                    id: faker.datatype.uuid(),
                    title: faker.name.title(),
                    order: faker.datatype.number(),
                },
            ],
        }
    ) {
        /**
         * @property {string} id - Id of the board
         */
        this.id = id;
        /**
         * @property {string} title - Title of the board
         */
        this.title = title;
        /**
         * @property {Array<IColumn>} columns - Columns of the board
         */
        this.columns = columns;
    }
}
