const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const { DEFAULT_COUNT_USERS, NOT_EXIST_USER } = require('../const');

class Database {
    constructor(count = 3) {
        this.Users = [];
        this.Boards = [];
        this.Tasks = [];
        this.initDatabase(count);
    }

    initDatabase(count) {
        for (let i = 0; i < count; i += 1) {
            this.Users.push(new User());
            this.Boards.push(new Board());
        }
    }

    addItem(user, table) {
        this[table].push(user);
        return user;
    }

    removeItem(id, table) {
        this.foundItem(id, table);

        this[table] = this[table].filter((item) => item.id !== id);
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
            throw new Error(NOT_EXIST_USER);
        }

        return found;
    }
}

module.exports = {
    db: new Database(DEFAULT_COUNT_USERS),
}
