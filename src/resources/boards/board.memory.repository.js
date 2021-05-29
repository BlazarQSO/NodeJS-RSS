const { db } = require('../../database');
const { BD_TABLE_BOARDS } = require('../../const');

/**
 * Repo | Get all boards
 * @returns {Promise<Array<IBoard>>} - Get all boards
 * @category BoardRepo
 */
const getAll = async () => {
  const boards = await db.Boards;
  return boards;
};

/**
 * Repo | Add a board
 * @param {IBoard} board - It's a new board
 * @returns {Promise<IBoard>}
 * @category BoardRepo
 */
const addBoard = async (board) => {
  const newBoard = await db.addItem(board, BD_TABLE_BOARDS);
  return newBoard;
};

/**
 * Repo | Delete a board
 * @param {string} id - Id of the board
 * @returns {Promise<IBoard>} - Remote board
 * @category BoardRepo
 */
const removeBoard = async (id) => {
  const board = await db.removeItem(id, BD_TABLE_BOARDS);
  return board;
};

/**
 * Repo | Get a board
 * @param {string} id - Id of the board
 * @returns {Promise<IBoard>} - Get board by id
 * @category BoardRepo
 */
const getBoard = async (id) => {
  const board = await db.getItem(id, BD_TABLE_BOARDS);
  return board;
};

/**
 * Repo | Update the board
 * @param {string} id - Id of the board
 * @param {Partial<IBoard>} body - Optional board properties to update
 * @returns {Promise<IBoard>} - Update the board
 * @category BoardRepo
 */
const updateBoard = async (id, body) => {
  const board = await db.updateItem(id, body, BD_TABLE_BOARDS);
  return board;
}

module.exports = {
  getAll,
  addBoard,
  removeBoard,
  getBoard,
  updateBoard,
};
