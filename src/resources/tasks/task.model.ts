import faker from 'faker';

/**
 * Task Interface
 * @typedef ITask
 * @property {string} id - Id of the task
 * @property {string} title - Title of the task
 * @property {number} order - Order of the task
 * @property {string} description - Description of the task
 * @property {string} userId - User id
 * @property {string} boardId - Board id
 * @property {string} columnId - Column id
 */
export interface ITask {
    id: string;
    title: string;
    order: number;
    description: string;
    userId: string | null;
    boardId: string | null;
    columnId: string | null;
}

/**
 * Creates a new Task.
 * @class
 */
export class Task {
    id: string;
    title: string;
    order: number;
    description: string;
    userId: string | null;
    boardId: string | null;
    columnId: string | null;

    /**
     * Create a Task - constructor
     * @param {ITask} ITask - Information about the task
     */
    constructor({
        id = faker.datatype.uuid(),
        title = faker.name.title(),
        order = faker.datatype.number(),
        description = faker.commerce.productDescription(),
        userId = null,
        boardId = faker.datatype.uuid(),
        columnId = faker.datatype.uuid(),
    }: ITask) {
        /**
         * @property {string} id - Task id
         */
        this.id = id;
        /**
         * @property {string} title - Title of the task
         */
        this.title = title;
        /**
         * @property {number} order - Order of the task
         */
        this.order = order;
        /**
         * @property {string} description - Description of the task
         */
        this.description = description;
        /**
         * @property {string} userId - User id
         */
        this.userId = userId;
        /**
         * @property {string} boardId - Board id
         */
        this.boardId = boardId;
        /**
         * @property {string} columnId - Column id
         */
        this.columnId = columnId;
    }
}
