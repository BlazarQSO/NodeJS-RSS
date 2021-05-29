const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');
const {
    DEFAULT_COUNT_USERS,
    BD_TABLE_USERS,
    BD_TABLE_BOARDS,
} = require('../const');

/**
 * Item type
 * @typedef Item
 * @property {IUser|ITask|IBoard} item - Item of the database
 */

/**
 * Creates a new Database
 * @class
 */
class Database {
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
        * @property {Array<IBoards>} Boards - DB of the boards
        */
        this.Boards = [];
        /**
        * @property {Array<ITasks>} Tasks - DB of the tasks
        */
        this.Tasks = [];
        this.initDatabase(count);
    }

    /**
    * Initial the database
    * @property {Function} initDatabase - DB of the tasks
    * @returns {void}
    */
    initDatabase(count) {
        for (let i = 0; i < count; i += 1) {
            this.Users.push(new User());
            this.Boards.push(new Board());
            this.Tasks.push(new Task({
                userId: this.Users[i].id,
                boardId: this.Boards[i].id,
                columnId: this.Boards[i].columns[0].id,
            }));
        }
    }

    /**
    * Add item in the database
    * @property {Function} addItem - Add Item
    * @param {Item} item - Item of the database
    * @param {string} table - Table name of the database
    * @returns {void}
    */
    addItem(item, table) {
        this[table].push(item);
    }

    /**
    * Remove item from the database
    * @property {Function} removeItem - Remove Item by id
    * @param {string} id - Id of the Item.
    * @param {string} table - Table name of the database
    * @returns {void}
    */
    removeItem(id, table) {
        if (this.foundItem(id, table)) {
            this[table] = this[table].filter((item) => item.id !== id);
            this.removeDependencies(id, table);
        };
    }

    /**
    * Get Item from the database
    * @property {Function} getItem - Get Item
    * @param {string} id - Id of the Item.
    * @param {string} table - Table name of the database
    * @returns {Item} Item by id
    */
    getItem(id, table) {
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
    updateItem(id, body, table) {
        this.foundItem(id, table);

        const index = this[table].findIndex((item) => item.id === id);
        const updated = { ...this[table][index], id, ...body };
        this[table][index] = updated;

        return updated;
    }

    /**
    * Found Item from the database
    * @property {Function} foundItem - Found Item
    * @param {string} id - Id of the Item.
    * @param {string} table - Table name of the database
    * @returns {Item} Found Item
    */
    foundItem(id, table) {
        const found = this[table].find((item) => item.id === id);
        if (!found) {
            return false;
        }

        return found;
    }

    /**
    * Remove dependencies from the database
    * @property {Function} removeDependencies - Remove dependencies from the database
    * @param {string} id - Id of the Item.
    * @param {string} table - Table name of the database
    * @returns {void}
    */
    removeDependencies(id, table) {
        switch (table) {
            case BD_TABLE_USERS:
                for (let i = 0; i < this.Tasks.length; i += 1) {
                    if (this.Tasks[i].userId === id) {
                        this.Tasks[i].userId = null;
                    }
                }
                break;
            case BD_TABLE_BOARDS:
                this.Tasks = this.Tasks.filter((task) => task.boardId !== id);
                break;
            default:
                break;
        }
    }
}

module.exports = {
    db: new Database(DEFAULT_COUNT_USERS),
}
