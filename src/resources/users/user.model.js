const faker = require('faker');

/**
 * User Interface
 * @typedef IUser
 * @property {string} id - Id of the user
 * @property {string} name - Name of the user
 * @property {string} login - Login of the user
 * @property {string} password - Password of the user
*/

/**
 * User Interface without password
 * @typedef IUserStrip
 * @property {string} id - Id of the user
 * @property {string} name - Name of the user
 * @property {string} login - Login of the user
*/

/**
 * Creates a new User.
 * @class
 */
class User {
  /**
    * Create a User - constructor.
    * @param {IUser} IUser - Information about the user
  */
  constructor({
    id = faker.datatype.uuid(),
    name = faker.name.findName(),
    login = faker.internet.userName(),
    password = faker.internet.password(),
  } = {}) {
    /**
     * @property {string} id - User id
     */
    this.id = id;
    /**
     * @property {string} name - User name
     */
    this.name = name;
    /**
     * @property {string} login - Login of the user
     */
    this.login = login;
    /**
     * @property {string} password - Password of the user
     */
    this.password = password;
  }

  /**
   * Strip password
   * @property {Function} toResponse - Strip password from the user
   * @param {IUser} user - Current user
   * @returns {IUserStrip} - User without password
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
