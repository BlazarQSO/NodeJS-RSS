const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');
const {
    DEFAULT_COUNT_USERS,
    BD_TABLE_USERS,
    BD_TABLE_BOARDS,
} = require('../const');

class Database {
    constructor(count = 0) {
        this.Users = [];
        this.Boards = [];
        this.Tasks = [];
        this.initDatabase(count);
    }

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

    addItem(user, table) {
        this[table].push(user);
    }

    removeItem(id, table) {
        if (this.foundItem(id, table)) {
            this[table] = this[table].filter((item) => item.id !== id);
            this.removeDependencies(id, table);
        };
    }

    getItem(id, table) {
        return this.foundItem(id, table);
    }

    updateItem(id, body, table) {
        this.foundItem(id, table);

        const index = this[table].findIndex((item) => item.id === id);
        const updated = { ...this[table][index], id, ...body };
        this[table][index] = updated;

        return updated;
    }

    foundItem(id, table) {
        const found = this[table].find((item) => item.id === id);
        if (!found) {
            return false;
        }

        return found;
    }

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
