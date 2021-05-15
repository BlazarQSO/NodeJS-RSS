const { db } = require('../../database');

const getAll = async () => {
  const users = await db.Users;
  return users;
};

const addUser = async (user) => {
  const users = await db.addUser(user);
  return users;
};

const removeUser = async (id) => {
  await db.removeUser(id);
};

const getUser = async (id) => {
  const user = await db.getUser(id);
  return user;
};

const updateUser = async (id, body) => {
  const user = await db.updateUser(id, body);
  return user;
}

module.exports = {
  getAll,
  addUser,
  removeUser,
  getUser,
  updateUser,
};
