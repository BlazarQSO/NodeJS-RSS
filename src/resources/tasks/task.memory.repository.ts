import { db } from '../../database';
import { BD_TABLE_TASKS, STATUS_CODE } from '../../const';
import { ITask } from './task.model';
import { ApiError } from '../../utils/apiError';
import { logger } from '../../utils/logger';

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
const removeTask = async (id: string): Promise<ITask | undefined> => {
    try {
        const task = (await db.removeItem(id, BD_TABLE_TASKS)) as ITask;
        if (!task) {
            throw new ApiError(`The task with id ${id} was not found`, STATUS_CODE.NOT_FOUND);
        }
        return task;
    } catch (err) {
        logger.error(err.message);
    }
    return undefined;
};

/**
 * Repo | Get a task
 * @param {string} id - Id of the task
 * @returns {Promise<ITask>} - Get task by id
 * @category TaskRepo
 */
const getTask = async (id: string): Promise<ITask | undefined> => {
    try {
        const task = (await db.getItem(id, BD_TABLE_TASKS)) as ITask;
        if (!task) {
            throw new ApiError(`The task with id ${id} was not found`, STATUS_CODE.NOT_FOUND);
        }
        return task;
    } catch (err) {
        logger.error(err.message);
    }
    return undefined;
};

/**
 * Repo | Update the task
 * @param {string} id - Id of the task
 * @param {Partial<ITask>} body - Optional task properties to update
 * @returns {Promise<ITask>} - Update the task
 * @category TaskRepo
 */
const updateTask = async (id: string, body: Partial<ITask>): Promise<ITask | undefined> => {
    try {
        const task = (await db.updateItem(id, body, BD_TABLE_TASKS)) as ITask;
        if (!task) {
            throw new ApiError(`The task with id ${id} was not found`, STATUS_CODE.NOT_FOUND);
        }
        return task;
    } catch (err) {
        logger.error(err.message);
    }
    return undefined;
};

export { getAll, addTask, removeTask, getTask, updateTask };
