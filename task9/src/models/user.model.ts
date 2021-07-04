import { IUser, IUserStrip } from '../users/interfaces/user.interface';

export class User implements IUser {
    id: string;
    name: string;
    login: string;
    password: string;

    constructor({
        id = String(Date.now()), name, login, password,
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
