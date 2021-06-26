import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { DB_TABLE_TASKS } from '../const';
import { Board } from './board.entity';
import { User } from './user.entity';

/**
 * Task Interface
 * @typedef ITask
 * @property {string} id - Id of the task
 * @property {string} title - Title of the task
 * @property {number} order - Order of the task
 * @property {string} description - Description of the task
 * @property {string} userId - User id
 * @property {string} boardId - Board id
 * @property {string} columnId - Column id
 */
export interface ITask {
    id: string;
    title: string;
    order: number;
    description: string;
    userId: string | null;
    boardId: string | null;
    columnId: string | null;
}

/**
 * Creates a new Task.
 * @class
 */
@Entity(DB_TABLE_TASKS)
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('varchar', { length: 25 })
    title!: string;

    @Column('integer')
    order!: number;
    
    @Column('varchar', { length: 25 })
    description!: string;

    @ManyToOne(() => User, (user) => user.id, {
        nullable: true,
        onDelete: 'SET NULL',
    })
    
    @JoinColumn({ name: 'userId' })
    userId: string | null = null;
    
    @ManyToOne(() => Board, (board) => board.id, {
        nullable: true,
        onDelete: 'CASCADE',
    })
    
    @JoinColumn({ name: 'boardId' })
    boardId: string | null = null;
    
    @Column('varchar', {nullable: true})
    columnId: string | null = null;
}
