const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

/**
 * Service | Get all Users
 * @returns {Promise<Array<IUser>>} - Get all users
 * @category UserService
 */
const getAll = async () => usersRepo.getAll();

/**
 * Service | Add a user
 * @param {IUser} user - It's a new user
 * @returns {Promise<void>}
 * @category UserService
 */
const addUser = async (user) => usersRepo.addUser(new User(user));

/**
 * Service | Delete a user
 * @param {string} id - Id of the user
 * @returns {Promise<IUser>} - Remote user
 * @category UserService
 */
const removeUser = async (id) => usersRepo.removeUser(id);

/**
 * Service | Get a user
 * @param {string} id - Id of the user
 * @returns {Promise<IUser>} - Get user by id
 * @category UserService
 */
const getUser = async (id) => usersRepo.getUser(id);

/**
 * Service | Update the user
 * @param {string} id - Id of the user
 * @param {Partial<IUser>} body - Optional user properties to update
 * @returns {Promise<IUser>} - Update the user
 * @category UserService
 */
const updateUser = async (id, body) => usersRepo.updateUser(id, body);

module.exports = {
    getAll,
    addUser,
    removeUser,
    getUser,
    updateUser,
};
