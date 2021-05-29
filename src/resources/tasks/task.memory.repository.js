const { db } = require('../../database');
const { BD_TABLE_TASKS } = require('../../const');

/**
 * Repo | Get all tasks
 * @returns {Promise<Array<ITask>>} - Get all tasks
 * @category TaskRepo
 */
const getAll = async () => {
  const tasks = await db.Tasks;
  return tasks;
};

/**
 * Repo | Add a task
 * @param {ITask} task - It's a new task
 * @returns {Promise<void>}
 * @category TaskRepo
 */
const addTask = async (task) => {
  await db.addItem(task, BD_TABLE_TASKS);
};

/**
 * Repo | Delete a task
 * @param {string} id - Id of the task
 * @returns {Promise<ITask>} - Remote task
 * @category TaskRepo
 */
const removeTask = async (id) => {
  const task = await db.removeItem(id, BD_TABLE_TASKS);
  return task;
};

/**
 * Repo | Get a task
 * @param {string} id - Id of the task
 * @returns {Promise<ITask>} - Get task by id
 * @category TaskRepo
 */
const getTask = async (id) => {
  const task = await db.getItem(id, BD_TABLE_TASKS);
  return task;
};

/**
 * Repo | Update the task
 * @param {string} id - Id of the task
 * @param {Partial<ITask>} body - Optional task properties to update
 * @returns {Promise<ITask>} - Update the task
 * @category TaskRepo
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
