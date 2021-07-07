import { randomUUID } from 'crypto';
import { IUser, IUserStrip } from '../users/interfaces/user.interface';

export class User implements IUser {
    id: string;
    name: string;
    login: string;
    password: string;

    constructor({
        id = randomUUID(), 
        name = 'name', 
        login = 'login',
        password = '12345',
    }: IUser) {
        this.id = id;
        this.name = name;
        this.login = login; 
        this.password = password;
    }

    static toResponse(user: IUser): IUserStrip {
        const { id, name, login } = user;
        return { id, name, login };
    }
}
