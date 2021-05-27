const { db } = require('../../database');
const { BD_TABLE_USERS } = require('../../const');

const getAll = async () => {
  const users = await db.Users;
  return users;
};

const addUser = async (user) => {
  const users = await db.addItem(user, BD_TABLE_USERS);
  return users;
};

const removeUser = async (id) => {
  await db.removeItem(id, BD_TABLE_USERS);
};

const getUser = async (id) => {
  const user = await db.getItem(id, BD_TABLE_USERS);
  return user;
};

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
