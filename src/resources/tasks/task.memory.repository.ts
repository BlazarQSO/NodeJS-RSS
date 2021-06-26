import { getRepository } from 'typeorm';
import { ITask, Task } from '../../entities/task.entity';

/**
 * Repo | Get all tasks
 * @returns {Promise<Array<ITask>>} - Get all tasks
 * @category TaskRepo
 */
const getAll = async (): Promise<Array<ITask>> => {
    const db = getRepository(Task);    
    return await db.find();
};

/**
 * Repo | Add a task
 * @param {ITask} task - It's a new task
 * @returns {Promise<ITask>}
 * @category TaskRepo
 */
const addTask = async (task: ITask): Promise<ITask> => {
    const db = getRepository(Task); 
    const newTask = db.create(task);
    const savedTask = db.save(newTask);
    return savedTask;
};

/**
 * Repo | Delete a task
 * @param {string} id - Id of the task
 * @returns {Promise<ITask>} - Remote task
 * @category TaskRepo
 */
const removeTask = async (id: string): Promise<ITask | undefined> => {
    const db = getRepository(Task); 
    const deleted = await db.delete(id);
    if (deleted.affected) {        
        return deleted.raw;
    }
    return;
};

/**
 * Repo | Get a task
 * @param {string} id - Id of the task
 * @returns {Promise<ITask>} - Get task by id
 * @category TaskRepo
 */
const getTask = async (id: string): Promise<ITask | undefined> => {
    const db = getRepository(Task);    
    return await db.findOne(id);
};

/**
 * Repo | Update the task
 * @param {string} id - Id of the task
 * @param {Partial<ITask>} body - Optional task properties to update
 * @returns {Promise<ITask>} - Update the task
 * @category TaskRepo
 */
const updateTask = async (id: string, body: Partial<ITask>): Promise<ITask | undefined> => {
    const db = getRepository(Task);
    const user = await db.findOne(id);
    if (user === undefined) {
        return; 
    }

    const update = await db.update(id, body);
    return update.raw;
};

export { getAll, addTask, removeTask, getTask, updateTask };
