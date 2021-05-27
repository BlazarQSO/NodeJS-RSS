const { db } = require('../../database');
const { BD_TABLE_BOARDS } = require('../../const');

const getAll = async () => {
  const boards = await db.Boards;
  return boards;
};

const addBoard = async (board) => {
  const boards = await db.addItem(board, BD_TABLE_BOARDS);
  return boards;
};

const removeBoard = async (id) => {
  await db.removeItem(id, BD_TABLE_BOARDS);
};

const getBoard = async (id) => {
  const board = await db.getItem(id, BD_TABLE_BOARDS);
  return board;
};

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
