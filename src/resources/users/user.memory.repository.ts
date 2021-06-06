import { db } from '../../database/index';
import { BD_TABLE_USERS, STATUS_CODE } from '../../const';
import { IUser } from './user.model';
import { ApiError } from '../../utils/apiError';
import { logger } from '../../utils/logger';

/**
 * Repo | Get all users
 * @returns {Promise<Array<IUser>>} - Get all users
 * @category UserRepo
 */
const getAll = async (): Promise<Array<IUser>> => {
    const users = await db.Users;
    return users;
};

/**
 * Repo | Add a user
 * @param {IUser} user - It's a new user
 * @returns {Promise<IUser>}
 * @category UserRepo
 */
const addUser = async (user: IUser): Promise<IUser> => {
    const newUser = (await db.addItem(user, BD_TABLE_USERS)) as IUser;
    return newUser;
};

/**
 * Repo | Delete a user
 * @param {string} id - Id of the user
 * @returns {Promise<IUser>} - Remote user
 * @category UserRepo
 */
const removeUser = async (id: string): Promise<IUser | undefined> => {
    try {
        const user = (await db.removeItem(id, BD_TABLE_USERS)) as IUser;
        if (!user) {
            throw new ApiError(`The user with id ${id} was not found`, STATUS_CODE.NOT_FOUND);
        }
        return user;
    } catch (err) {
        logger.error(err.message);
    }
    return undefined;
};

/**
 * Repo | Get a user
 * @param {string} id - Id of the user
 * @returns {Promise<IUser>} - Get user by id
 * @category UserRepo
 */
const getUser = async (id: string): Promise<IUser | undefined> => {
    try {
        const user = (await db.getItem(id, BD_TABLE_USERS)) as IUser;
        if (!user) {
            throw new ApiError(`The user with id ${id} was not found`, STATUS_CODE.NOT_FOUND);
        }
        return user;
    } catch (err) {
        logger.error(err.message);
    }
    return undefined;
};

/**
 * Repo | Update the user
 * @param {string} id - Id of the user
 * @param {Partial<IUser>} body - Optional user properties to update
 * @returns {Promise<IUser>} - Update the user
 * @category UserRepo
 */
const updateUser = async (id: string, body: Partial<IUser>): Promise<IUser | undefined> => {
    try {
        const user = (await db.updateItem(id, body, BD_TABLE_USERS)) as IUser;
        return user;
    } catch (err) {
        logger.error(err.message);
    }
    return undefined;
};

export { getAll, addUser, removeUser, getUser, updateUser };
