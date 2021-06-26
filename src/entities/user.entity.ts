import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { DB_TABLE_USERS } from '../const';

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
@Entity(DB_TABLE_USERS)
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('varchar', { length: 25 })
    name!: string;

    @Column({ unique: true })
    login!: string;

    @Column('varchar', { length: 25 })
    password!: string;
    
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
