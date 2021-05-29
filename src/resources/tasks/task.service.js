const taskRepo = require('./task.memory.repository');
const Task = require('./task.model');

/**
 * Service | Get all tasks
 * @returns {Promise<Array<ITask>>} - Get all tasks
 * @category TaskService
 */
const getAll = async () => taskRepo.getAll();

/**
 * Service | Add a task
 * @param {ITask} task - It's a new task
 * @returns {Promise<ITask>}
 * @category TaskService
 */
const addTask = async (task) => taskRepo.addTask(new Task(task));

/**
 * Service | Delete a task
 * @param {string} id - Id of the task
 * @returns {Promise<ITask>} - Remote task
 * @category TaskService
 */
const removeTask = async (id) => taskRepo.removeTask(id);

/**
 * Service | Get a task
 * @param {string} id - Id of the task
 * @returns {Promise<ITask>} - Get task by id
 * @category TaskService
 */
const getTask = async (id) => taskRepo.getTask(id);

/**
 * Service | Update the task
 * @param {string} id - Id of the task
 * @param {Partial<ITask>} body - Optional task properties to update
 * @returns {Promise<ITask>} - Update the task
 * @category TaskService
 */
const updateTask = async (id, body) => taskRepo.updateTask(id, body);

module.exports = {
    getAll,
    addTask,
    removeTask,
    getTask,
    updateTask,
};
