const faker = require('faker');

class User {
  constructor({
    id = faker.datatype.uuid(),
    name = faker.name.findName(),
    login = faker.internet.userName(),
    password = faker.internet.password(),
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
