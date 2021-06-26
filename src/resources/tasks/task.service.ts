import * as taskRepo from './task.memory.repository';
import { ITask } from '../../entities/task.entity';

/**
 * Service | Get all tasks
 * @returns {Promise<Array<ITask>>} - Get all tasks
 * @category TaskService
 */
const getAll = async (): Promise<Array<ITask>> => taskRepo.getAll();

/**
 * Service | Add a task
 * @param {ITask} task - It's a new task
 * @returns {Promise<ITask>}
 * @category TaskService
 */
const addTask = async (task: ITask): Promise<ITask> => taskRepo.addTask(task);

/**
 * Service | Delete a task
 * @param {string} id - Id of the task
 * @returns {Promise<ITask>} - Remote task
 * @category TaskService
 */
const removeTask = async (id: string): Promise<ITask | undefined> => taskRepo.removeTask(id);

/**
 * Service | Get a task
 * @param {string} id - Id of the task
 * @returns {Promise<ITask>} - Get task by id
 * @category TaskService
 */
const getTask = async (id: string): Promise<ITask | undefined> => taskRepo.getTask(id);

/**
 * Service | Update the task
 * @param {string} id - Id of the task
 * @param {Partial<ITask>} body - Optional task properties to update
 * @returns {Promise<ITask>} - Update the task
 * @category TaskService
 */
const updateTask = async (id: string, body: Partial<ITask>): Promise<ITask | undefined> =>
    taskRepo.updateTask(id, body);

export { getAll, addTask, removeTask, getTask, updateTask };
