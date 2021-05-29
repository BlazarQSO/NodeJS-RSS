const boardRepo = require('./board.memory.repository');
const Board = require('./board.model');

/**
 * Service | Get all boards
 * @returns {Promise<Array<IBoard>>} - Get all boards
 * @category BoardService
 */
const getAll = async () => boardRepo.getAll();

/**
 * Service | Add a board
 * @param {IBoard} board - It's a new board
 * @returns {Promise<IBoard>}
 * @category BoardService
 */
const addBoard = async (board) => boardRepo.addBoard(new Board(board));

/**
 * Service | Delete a board
 * @param {string} id - Id of the board
 * @returns {Promise<IBoard>} - Remote board
 * @category BoardService
 */
const removeBoard = async (id) => boardRepo.removeBoard(id);

/**
 * Service | Get a board
 * @param {string} id - Id of the board
 * @returns {Promise<IBoard>} - Get board by id
 * @category BoardService
 */
const getBoard = async (id) => boardRepo.getBoard(id);

/**
 * Service | Update the board
 * @param {string} id - Id of the board
 * @param {Partial<IBoard>} body - Optional board properties to update
 * @returns {Promise<IBoard>} - Update the board
 * @category BoardService
 */
const updateBoard = async (id, body) => boardRepo.updateBoard(id, body);

module.exports = {
    getAll,
    addBoard,
    removeBoard,
    getBoard,
    updateBoard,
};
