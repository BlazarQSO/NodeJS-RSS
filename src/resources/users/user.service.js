const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();

const addUser = (user) => usersRepo.addUser(new User(user));

const removeUser = (id) => usersRepo.removeUser(id);

const getUser = (id) => usersRepo.getUser(id);

const updateUser = (id, body) => usersRepo.updateUser(id, body);

module.exports = {
    getAll,
    addUser,
    removeUser,
    getUser,
    updateUser,
};
