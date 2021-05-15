const boardRepo = require('./board.memory.repository');
const Board = require('./board.model');

const getAll = () => boardRepo.getAll();

const addUser = (board) => boardRepo.addUser(new Board(board));

const removeUser = (id) => boardRepo.removeUser(id);

const getUser = (id) => boardRepo.getUser(id);

const updateUser = (id, body) => boardRepo.updateUser(id, body);

module.exports = {
    getAll,
    addUser,
    removeUser,
    getUser,
    updateUser,
};
