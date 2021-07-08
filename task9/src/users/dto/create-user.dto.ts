import { Length } from 'class-validator';

export class CreateUserDto {
    id: string;

    @Length(3, 50)
    name: string;

    @Length(3, 50)    
    login: string;

    @Length(3, 50)
    password: string;
}
