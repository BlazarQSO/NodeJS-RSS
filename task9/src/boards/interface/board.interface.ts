import { CreateBoardDto } from '../dto/create-board.dto';
import { UpdateBoardDto } from '../dto/update-board.dto';

export interface IColumn {
    id: string;
    title: string;
    order: number;
}

export interface IBoard {
    id: string;
    title: string;
    columns: Array<IColumn>;
}

export class BoardEntity {
    id: string;
    title: string;
}

export interface BoardStorage {
    addItem: (createUserDto: CreateBoardDto, table: string) => BoardEntity;
    getAll: (table: string) => BoardEntity[];    
    removeItem: (id: string, table: string) => boolean;
    getItem: (id: string, table: string) => BoardEntity;
    updateItem: (id: string, updateUserDto: UpdateBoardDto, table: string) => BoardEntity;    
}
