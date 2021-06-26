import { User } from '../../entities/user.entity';
import { IUser } from '../../entities/user.entity';
import { getRepository } from 'typeorm';

/**
 * Repo | Get all users
 * @returns {Promise<Array<IUser>>} - Get all users
 * @category UserRepo
 */
const getAll = async (): Promise<Array<IUser>> => {
    const db = getRepository(User);    
    return await db.find();
};

/**
 * Repo | Add a user
 * @param {IUser} user - It's a new user
 * @returns {Promise<IUser>}
 * @category UserRepo
 */
const addUser = async (user: IUser): Promise<IUser> => {
    const db = getRepository(User); 
    const newUser = db.create(user);
    const savedUser = db.save(newUser);
    return savedUser;
};

/**
 * Repo | Delete a user
 * @param {string} id - Id of the user
 * @returns {Promise<IUser>} - Remote user
 * @category UserRepo
 */
const removeUser = async (id: string): Promise<IUser | undefined> => {
    const db = getRepository(User); 
    const deleted = await db.delete(id);
    if (deleted.affected) {        
        return deleted.raw;
    }
    return;
};

/**
 * Repo | Get a user
 * @param {string} id - Id of the user
 * @returns {Promise<IUser>} - Get user by id
 * @category UserRepo
 */
const getUser = async (id: string): Promise<IUser | undefined> => {
    const db = getRepository(User);    
    return await db.findOne(id);
};

/**
 * Repo | Update the user
 * @param {string} id - Id of the user
 * @param {Partial<IUser>} body - Optional user properties to update
 * @returns {Promise<IUser>} - Update the user
 * @category UserRepo
 */
const updateUser = async (id: string, body: Partial<IUser>): Promise<IUser | undefined> => {
    const db = getRepository(User);
    const user = await db.findOne(id);
    if (user === undefined) {
        return; 
    }

    const update = await db.update(id, body);
    return update.raw;
};

export { getAll, addUser, removeUser, getUser, updateUser };
