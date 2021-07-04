import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { UserDto } from "../dto/user.dto";

export interface IUser {
    id: string;
    name: string;
    login: string;
    password: string;
}

export interface IUserStrip {
    id: string;
    name: string;
    login: string;
}

export class UserEntity {
    id: string;
    name: string;
    login: string;
    password: string;
}

type Item = UserEntity; // | ITask | IBoard;
type Nullable<T> = T | null;

export interface UserStorage {
    addItem: (createUserDto: CreateUserDto) => UserEntity;
    getAll: (table: string) => UserEntity[];    
    removeItem: (id: string, table: string) => Nullable<Item>;
    getItem: (id: string, table: string) => UserEntity;
    updateItem: (id: string, updateUserDto: UpdateUserDto, table: string) => UserEntity;    
}
