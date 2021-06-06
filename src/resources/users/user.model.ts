import faker from 'faker';

/**
 * User Interface
 * @typedef IUser
 * @property {string} id - Id of the user
 * @property {string} name - Name of the user
 * @property {string} login - Login of the user
 * @property {string} password - Password of the user
 */
export interface IUser {
    id: string;
    name: string;
    login: string;
    password: string;
}

/**
 * User Interface without password
 * @typedef IUserStrip
 * @property {string} id - Id of the user
 * @property {string} name - Name of the user
 * @property {string} login - Login of the user
 */
interface IUserStrip {
    id: string;
    name: string;
    login: string;
}

/**
 * Creates a new User.
 * @class
 */
export class User {
    id: string;
    name: string;
    login: string;
    password: string;

    /**
     * Create a User - constructor.
     * @param {IUser} IUser - Information about the user
     */
    constructor({
        id = faker.datatype.uuid(),
        name = faker.name.findName(),
        login = faker.internet.userName(),
        password = faker.internet.password(),
    }: IUser) {
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
    static toResponse(user: IUser): IUserStrip {
        const { id, name, login } = user;
        return { id, name, login };
    }
}
