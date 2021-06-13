import { IUser, User } from '../resources/users/user.model';
import { IBoard, Board } from '../resources/boards/board.model';
import { ITask, Task } from '../resources/tasks/task.model';
import { DEFAULT_COUNT_USERS, BD_TABLE_USERS, BD_TABLE_BOARDS, BD_TABLE_TASKS } from '../const';

/**
 * Item type
 * @typedef Item
 * @property {IUser|ITask|IBoard} item - Item of the database
 */
type Item = IUser | ITask | IBoard;
type Nullable<T> = T | null;

type Tables = typeof BD_TABLE_USERS | typeof BD_TABLE_BOARDS | typeof BD_TABLE_TASKS;
type Items = ITask & IBoard & IUser;

/**
 * Creates a new Database
 * @class
 */
class Database {
    Users: Array<IUser>;
    Boards: Array<IBoard>;
    Tasks: Array<ITask>;

    /**
     * Create a database - constructor.
     * @param {number} count - Count items of the database
     */
    constructor(count = 0) {
        /**
         * @property {Array<IUser>} Users - DB of the users
         */
        this.Users = [];
        /**
         * @property {Array<IBoard>} Boards - DB of the boards
         */
        this.Boards = [];
        /**
         * @property {Array<ITask>} Tasks - DB of the tasks
         */
        this.Tasks = [];
        this.initDatabase(count);
    }

    /**
     * Initial the database
     * @property {Function} initDatabase - DB of the tasks
     * @returns {void}
     */
    initDatabase(count: number) {
        for (let i = 0; i < count; i += 1) {
            this.Users.push(new User({} as IUser));
            this.Boards.push(new Board({} as IBoard));
            this.Tasks.push(
                new Task({
                    userId: this.Users[i]?.id || null,
                    boardId: this.Boards[i]?.id || null,
                    columnId: this.Boards[i]?.columns[0]?.id || null,
                } as ITask)
            );
        }
    }

    /**
     * Add item in the database
     * @property {Function} addItem - Add Item
     * @param {Item} item - Item of the database
     * @param {string} table - Table name of the database
     * @returns {Item}
     */
    addItem(item: Item, table: string): Item {
        this[table as Tables].push(item as Items);
        return item;
    }

    /**
     * Remove item from the database
     * @property {Function} removeItem - Remove Item by id
     * @param {string} id - Id of the Item.
     * @param {string} table - Table name of the database
     * @returns {Item}
     */
    removeItem(id: string, table: string): Nullable<Item> {
        if (this.foundItem(id, table)) {
            this[table as Tables] = (this[table as Tables] as Array<Item>).filter(
                (item: Item) => item.id !== id
            ) as Array<Items>;
            this.removeDependencies(id, table);
        }
        return null;
    }

    /**
     * Get Item from the database
     * @property {Function} getItem - Get Item
     * @param {string} id - Id of the Item.
     * @param {string} table - Table name of the database
     * @returns {Item} Item by id
     */
    getItem(id: string, table: string) {
        return this.foundItem(id, table);
    }

    /**
     * Update Item in the database
     * @property {Function} updateItem - Update Item
     * @param {string} id - Id of the Item.
     * @param {Partial<Item>} body - Id of the Item.
     * @param {string} table - Table name of the database
     * @returns {Item} Updated Item
     */
    updateItem(id: string, body: Partial<Item>, table: string) {
        this.foundItem(id, table);

        const index = this[table as Tables].findIndex((item: Item) => item.id === id);
        const updated = { ...this[table as Tables][index], id, ...body };
        this[table as Tables][index] = updated as Item;

        return updated;
    }

    /**
     * Found Item from the database
     * @property {Function} foundItem - Found Item
     * @param {string} id - Id of the Item.
     * @param {string} table - Table name of the database
     * @returns {Item} Found Item
     */
    foundItem(id: string, table: string): Nullable<Item> {
        const found = (this[table as Tables] as Array<Items>).find((item: Item) => item.id === id);
        if (found) {
            return found as Item;
        }

        return null;
    }

    /**
     * Remove dependencies from the database
     * @property {Function} removeDependencies - Remove dependencies from the database
     * @param {string} id - Id of the Item.
     * @param {string} table - Table name of the database
     * @returns {void}
     */
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

const db = new Database(DEFAULT_COUNT_USERS);
export { db, Item };
