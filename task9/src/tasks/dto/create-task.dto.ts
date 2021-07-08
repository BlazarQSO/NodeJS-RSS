import { IsNumber, Length } from 'class-validator';

export class CreateTaskDto {
  id: string;

  @Length(3, 50)
  title: string;

  @IsNumber()
  order: number;

  @Length(3, 120)
  description: string;

  boardId: string;
}
