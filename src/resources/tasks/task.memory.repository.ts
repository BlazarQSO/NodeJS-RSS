import { db } from '../../database';
import { BD_TABLE_TASKS } from '../../const';
import { ITask } from './task.model';

/**
 * Repo | Get all tasks
 * @returns {Promise<Array<ITask>>} - Get all tasks
 * @category TaskRepo
 */
const getAll = async (): Promise<Array<ITask>> => {
    const tasks = await db.Tasks;
    return tasks;
};

/**
 * Repo | Add a task
 * @param {ITask} task - It's a new task
 * @returns {Promise<ITask>}
 * @category TaskRepo
 */
const addTask = async (task: ITask): Promise<ITask> => {
    const newTask = (await db.addItem(task, BD_TABLE_TASKS)) as ITask;
    return newTask;
};

/**
 * Repo | Delete a task
 * @param {string} id - Id of the task
 * @returns {Promise<ITask>} - Remote task
 * @category TaskRepo
 */
const removeTask = async (id: string): Promise<ITask> => {
    const task = (await db.removeItem(id, BD_TABLE_TASKS)) as ITask;
    return task;
};

/**
 * Repo | Get a task
 * @param {string} id - Id of the task
 * @returns {Promise<ITask>} - Get task by id
 * @category TaskRepo
 */
const getTask = async (id: string): Promise<ITask> => {
    const task = (await db.getItem(id, BD_TABLE_TASKS)) as ITask;
    return task;
};

/**
 * Repo | Update the task
 * @param {string} id - Id of the task
 * @param {Partial<ITask>} body - Optional task properties to update
 * @returns {Promise<ITask>} - Update the task
 * @category TaskRepo
 */
const updateTask = async (id: string, body: Partial<ITask>): Promise<ITask> => {
    const task = (await db.updateItem(id, body, BD_TABLE_TASKS)) as ITask;
    return task;
};

export { getAll, addTask, removeTask, getTask, updateTask };
