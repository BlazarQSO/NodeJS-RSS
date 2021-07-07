import { IsAlphanumeric, Length } from 'class-validator';

export class CreateUserDto {
    id: string;

    @Length(3, 20)
    name: string;

    @IsAlphanumeric()
    @Length(3, 20)    
    login: string;

    @Length(3, 20)
    password: string;
}
