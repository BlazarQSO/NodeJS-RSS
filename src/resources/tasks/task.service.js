const taskRepo = require('./task.memory.repository');
const Task = require('./task.model');

/**
 * Get all tasks
 * @returns Promise<Array<ITask>> - Get all tasks
 */
const getAll = async () => taskRepo.getAll();

/**
 * Add a task
 * @param {ITask} task - It's a new task
 * @returns Promise<void>
 */
const addTask = async (task) => taskRepo.addTask(new Task(task));

/**
 * Delete a task
 * @param {string} id - Id of the task
 * @returns Promise<ITask> - Remote task
 */
const removeTask = async (id) => taskRepo.removeTask(id);

/**
 * Get a task
 * @param {string} id - Id of the task
 * @returns {Promise<ITask>} - Get task by id
 */
const getTask = async (id) => taskRepo.getTask(id);

/**
 * Update the task
 * @param {string} id - Id of the task
 * @param {Partial<ITask>} body - Optional task properties to update
 * @returns {Promise<ITask>} - Update the task
 */
const updateTask = async (id, body) => taskRepo.updateTask(id, body);

module.exports = {
    getAll,
    addTask,
    removeTask,
    getTask,
    updateTask,
};
