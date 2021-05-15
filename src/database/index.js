const User = require('../resources/users/user.model');
const { DEFAULT_COUNT_USERS, NOT_EXIST_USER } = require('../const');

class Database {
    constructor(count = 3) {
        this.Users = [];
        this.initDatabase(count);
    }

    initDatabase(count) {
        this.initUsers(count);
    }

    initUsers(count) {
        for (let i = 0; i < count; i += 1) {
            this.Users.push(new User());
        }
    }

    addUser(user) {
        this.Users.push(user);
        return user;
    }

    removeUser(id) {
        this.foundUser(id);

        this.Users = this.Users.filter((user) => user.id !== id);
    }

    getUser(id) {
        return this.foundUser(id);
    }

    updateUser(id, body) {
        this.foundUser(id);

        const index = this.Users.findIndex((user) => user.id === id);
        const updatedUser = { ...this.Users[index], id, ...body };
        this.Users[index] = updatedUser;
        return updatedUser;
    }

    foundUser(id) {
        const foundUser = this.Users.find((user) => user.id === id);
        if (!foundUser) {
            throw new Error(NOT_EXIST_USER);
        }
        return foundUser;
    }
}

module.exports = {
    db: new Database(DEFAULT_COUNT_USERS),
}
