const { db } = require('../../database');
const { BD_TABLE_TASKS } = require('../../const');

const getAll = async () => {
  const tasks = await db.Tasks;
  return tasks;
};

const addTask = async (board) => {
  const tasks = await db.addItem(board, BD_TABLE_TASKS);
  return tasks;
};

const removeTask = async (id) => {
  await db.removeItem(id, BD_TABLE_TASKS);
};

const getTask = async (id) => {
  const task = await db.getItem(id, BD_TABLE_TASKS);
  return task;
};

const updateTask = async (id, body) => {
  const task = await db.updateItem(id, body, BD_TABLE_TASKS);
  return task;
}

module.exports = {
  getAll,
  addTask,
  removeTask,
  getTask,
  updateTask,
};
