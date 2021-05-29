const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

/**
 * Get all Users
 * @returns Promise<Array<IUser>> - Get all users
 */
const getAll = async () => usersRepo.getAll();

/**
 * Add a user
 * @param {IUser} user - It's a new user
 * @returns Promise<void>
 */
const addUser = async (user) => usersRepo.addUser(new User(user));

/**
 * Delete a user
 * @param {string} id - Id of the user
 * @returns Promise<IUser> - Remote user
 */
const removeUser = async (id) => usersRepo.removeUser(id);

/**
 * Get a user
 * @param {string} id - Id of the user
 * @returns {Promise<IUser>} - Get user by id
 */
const getUser = async (id) => usersRepo.getUser(id);

/**
 * Update the user
 * @param {string} id - Id of the user
 * @param {Partial<IUser>} body - Optional user properties to update
 * @returns {Promise<IUser>} - Update the user
 */
const updateUser = async (id, body) => usersRepo.updateUser(id, body);

module.exports = {
    getAll,
    addUser,
    removeUser,
    getUser,
    updateUser,
};
