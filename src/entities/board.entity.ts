import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { DB_TABLE_BOARDS } from '../const';

/**
 * Column Interface
 * @typedef IColumn
 * @property {string} id - Id of the column
 * @property {string} title - Title of the column
 * @property {number} order - Order of the column
 */
export interface IColumn {
    id: string;
    title: string;
    order: number;
}

/**
 * Board Interface
 * @typedef IBoard
 * @property {string} id - Id of the board
 * @property {string} title - Title of the board.
 * @property {Array<IColumn>} columns - Columns of the board.
 */
export interface IBoard {
    id: string;
    title: string;
    columns: Array<IColumn>;
}

/**
 * Creates a new Board.
 * @class
 */
@Entity(DB_TABLE_BOARDS)
export class Board {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
  
    @Column('varchar', {length: 25})
    title!: string;
  
    @Column({type: 'json', nullable: true})
    columns!: IColumn[]; 
}
