const { db } = require('../../database');
const { BD_TABLE_BOARDS } = require('../../const');

/**
 * Get all boards
 * @returns Promise<Array<IBoard>> - Get all boards
 */
const getAll = async () => {
  const boards = await db.Boards;
  return boards;
};

/**
 * Add a board
 * @param {IBoard} board - It's a new board
 * @returns Promise<void>
 */
const addBoard = async (board) => {
  await db.addItem(board, BD_TABLE_BOARDS);
};

/**
 * Delete a board
 * @param {string} id - Id of the board
 * @returns Promise<IBoard> - Remote board
 */
const removeBoard = async (id) => {
  const board = await db.removeItem(id, BD_TABLE_BOARDS);
  return board;
};

/**
 * Get a board
 * @param {string} id - Id of the board
 * @returns {Promise<IBoard>} - Get board by id
 */
const getBoard = async (id) => {
  const board = await db.getItem(id, BD_TABLE_BOARDS);
  return board;
};

/**
 * Update the boardRepo
 * @param {string} id - Id of the board
 * @param {Partial<IBoard>} body - Optional board properties to update
 * @returns {Promise<IBoard>} - Update the board
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
