const boardRepo = require('./board.memory.repository');
const Board = require('./board.model');

const getAll = () => boardRepo.getAll();

const addBoard = (board) => boardRepo.addBoard(new Board(board));

const removeBoard = (id) => boardRepo.removeBoard(id);

const getBoard = (id) => boardRepo.getBoard(id);

const updateBoard = (id, body) => boardRepo.updateBoard(id, body);

module.exports = {
    getAll,
    addBoard,
    removeBoard,
    getBoard,
    updateBoard,
};
