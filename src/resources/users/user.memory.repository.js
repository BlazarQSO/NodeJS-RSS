const { db } = require('../../database');
const { BD_TABLE_USERS } = require('../../const');

/**
 * Get all users
 * @returns Promise<Array<IUser>> - Get all users
 */
const getAll = async () => {
  const users = await db.Users;
  return users;
};

/**
 * Add a user
 * @param {IUser} user - It's a new user
 * @returns Promise<void>
 */
const addUser = async (user) => {
  await db.addItem(user, BD_TABLE_USERS);
};

/**
 * Delete a user
 * @param {string} id - Id of the user
 * @returns Promise<IUser> - Remote user
 */
const removeUser = async (id) => {
  const user = await db.removeItem(id, BD_TABLE_USERS);
  return user;
};

/**
 * Get a user
 * @param {string} id - Id of the user
 * @returns {Promise<IUser>} - Get user by id
 */
const getUser = async (id) => {
  const user = await db.getItem(id, BD_TABLE_USERS);
  return user;
};

/**
 * Update the user
 * @param {string} id - Id of the user
 * @param {Partial<IUser>} body - Optional user properties to update
 * @returns {Promise<IUser>} - Update the user
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
