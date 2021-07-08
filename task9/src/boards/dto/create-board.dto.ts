import { Length } from 'class-validator';

export class CreateBoardDto {
    id: string;

    @Length(3, 50)
    title: string;
}
