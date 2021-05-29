const { db } = require('../../database');
const { BD_TABLE_TASKS } = require('../../const');

/**
 * Get all tasks
 * @returns Promise<Array<ITask>> - Get all tasks
 */
const getAll = async () => {
  const tasks = await db.Tasks;
  return tasks;
};

/**
 * Add a task
 * @param {ITask} task - It's a new task
 * @returns Promise<void>
 */
const addTask = async (board) => {
  await db.addItem(board, BD_TABLE_TASKS);
};

/**
 * Delete a task
 * @param {string} id - Id of the task
 * @returns Promise<ITask> - Remote task
 */
const removeTask = async (id) => {
  const task = await db.removeItem(id, BD_TABLE_TASKS);
  return task;
};

/**
 * Get a task
 * @param {string} id - Id of the task
 * @returns {Promise<ITask>} - Get task by id
 */
const getTask = async (id) => {
  const task = await db.getItem(id, BD_TABLE_TASKS);
  return task;
};

/**
 * Update the task
 * @param {string} id - Id of the task
 * @param {Partial<ITask>} body - Optional task properties to update
 * @returns {Promise<ITask>} - Update the task
 */
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
