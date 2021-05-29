const { db } = require('../../database');
const { BD_TABLE_USERS } = require('../../const');

/**
 * Repo | Get all users
 * @returns {Promise<Array<IUser>>} - Get all users
 * @category UserRepo
 */
const getAll = async () => {
  const users = await db.Users;
  return users;
};

/**
 * Repo | Add a user
 * @param {IUser} user - It's a new user
 * @returns {Promise<IUser>}
 * @category UserRepo
 */
const addUser = async (user) => {
  const newUser = await db.addItem(user, BD_TABLE_USERS);
  return newUser;
};

/**
 * Repo | Delete a user
 * @param {string} id - Id of the user
 * @returns {Promise<IUser>} - Remote user
 * @category UserRepo
 */
const removeUser = async (id) => {
  const user = await db.removeItem(id, BD_TABLE_USERS);
  return user;
};

/**
 * Repo | Get a user
 * @param {string} id - Id of the user
 * @returns {Promise<IUser>} - Get user by id
 * @category UserRepo
 */
const getUser = async (id) => {
  const user = await db.getItem(id, BD_TABLE_USERS);
  return user;
};

/**
 * Repo | Update the user
 * @param {string} id - Id of the user
 * @param {Partial<IUser>} body - Optional user properties to update
 * @returns {Promise<IUser>} - Update the user
 * @category UserRepo
 */
const updateUser = async (id, body) => {
  const user = await db.updateItem(id, body, BD_TABLE_USERS);
  return user;
}

module.exports = {
  getAll,
  addUser,
  removeUser,
  getUser,
  updateUser,
};
