import * as usersRepo from './user.memory.repository';
import { IUser, User } from './user.model';

/**
 * Service | Get all Users
 * @returns {Promise<Array<IUser>>} - Get all users
 * @category UserService
 */
const getAll = async (): Promise<Array<IUser>> => usersRepo.getAll();

/**
 * Service | Add a user
 * @param {IUser} user - It's a new user
 * @returns {Promise<IUser>} - Return a new user
 * @category UserService
 */
const addUser = async (user: IUser): Promise<IUser> => usersRepo.addUser(new User(user));

/**
 * Service | Delete a user
 * @param {string} id - Id of the user
 * @returns {Promise<IUser>} - Remote user
 * @category UserService
 */
const removeUser = async (id: string): Promise<IUser | undefined> => usersRepo.removeUser(id);

/**
 * Service | Get a user
 * @param {string} id - Id of the user
 * @returns {Promise<IUser>} - Get user by id
 * @category UserService
 */
const getUser = async (id: string): Promise<IUser | undefined> => usersRepo.getUser(id);

/**
 * Service | Update the user
 * @param {string} id - Id of the user
 * @param {Partial<IUser>} body - Optional user properties to update
 * @returns {Promise<IUser>} - Update the user
 * @category UserService
 */
const updateUser = async (id: string, body: Partial<IUser>): Promise<IUser | undefined> =>
    usersRepo.updateUser(id, body);

export { getAll, addUser, removeUser, getUser, updateUser };
