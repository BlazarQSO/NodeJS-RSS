const { db } = require('../../database');

const getAll = async () => {
  const boards = await db.Boards;
  return boards;
};

const addBoard = async (user) => {
  const boards = await db.addItem(user);
  return boards;
};

const removeBoard = async (id) => {
  await db.removeItem(id);
};

const getBoard = async (id) => {
  const board = await db.getItem(id);
  return board;
};

const updateBoard = async (id, body) => {
  const board = await db.updateItem(id, body);
  return board;
}

module.exports = {
  getAll,
  addBoard,
  removeBoard,
  getBoard,
  updateBoard,
};
