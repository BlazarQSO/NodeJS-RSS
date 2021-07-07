import { IsNumber, Length } from 'class-validator';

export class CreateTaskDto {
    id: string;

    @Length(3, 50)
    title: string;
    
    @IsNumber()    
    order: string;
    
    @Length(3, 120)
    description: string;

    set boardId(id: string) {
        this.boardId = id;
    }
}
