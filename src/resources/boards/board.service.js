const boardRepo = require('./board.memory.repository');
const Board = require('./board.model');

/**
 * @module Board
 * Get all boards
 * @returns Promise<Array<IBoard>> - Get all boards
 */
const getAll = async () => boardRepo.getAll();

/**
 * Add a board
 * @param {IBoard} board - It's a new board
 * @returns Promise<void>
 */
const addBoard = async (board) => boardRepo.addBoard(new Board(board));

/**
 * Delete a board
 * @param {string} id - Id of the board
 * @returns Promise<IBoard> - Remote board
 * */
const removeBoard = async (id) => boardRepo.removeBoard(id);

/**
 * Get a board
 * @param {string} id - Id of the board
 * @returns {Promise<IBoard>} - Get board by id
 */
const getBoard = async (id) => boardRepo.getBoard(id);

/**
 * Update the board
 * @param {string} id - Id of the board
 * @param {Partial<IBoard>} body - Optional board properties to update
 * @returns {Promise<IBoard>} - Update the board
 */
const updateBoard = async (id, body) => boardRepo.updateBoard(id, body);

module.exports = {
    getAll,
    addBoard,
    removeBoard,
    getBoard,
    updateBoard,
};
