import { getRepository } from 'typeorm';
import { IBoard, Board } from '../../entities/board.entity';

/**
 * Repo | Get all boards
 * @returns {Promise<Array<IBoard>>} - Get all boards
 * @category BoardRepo
 */
const getAll = async (): Promise<Array<IBoard>> => {
    const db = getRepository(Board);    
    return await db.find();
};

/**
 * Repo | Add a board
 * @param {IBoard} board - It's a new board
 * @returns {Promise<IBoard>}
 * @category BoardRepo
 */
const addBoard = async (board: IBoard): Promise<IBoard> => {
    const db = getRepository(Board); 
    const newBoard = db.create(board);
    const savedBoard = db.save(newBoard);
    return savedBoard;
};

/**
 * Repo | Delete a board
 * @param {string} id - Id of the board
 * @returns {Promise<IBoard>} - Remote board
 * @category BoardRepo
 */
const removeBoard = async (id: string): Promise<IBoard | undefined> => {
    const db = getRepository(Board); 
    const deleted = await db.delete(id);
    if (deleted.affected) {        
        return deleted.raw;
    }
    return;
};

/**
 * Repo | Get a board
 * @param {string} id - Id of the board
 * @returns {Promise<IBoard>} - Get board by id
 * @category BoardRepo
 */
const getBoard = async (id: string): Promise<IBoard | undefined> => {
    const db = getRepository(Board);    
    return await db.findOne(id);
};

/**
 * Repo | Update the board
 * @param {string} id - Id of the board
 * @param {Partial<IBoard>} body - Optional board properties to update
 * @returns {Promise<IBoard>} - Update the board
 * @category BoardRepo
 */
const updateBoard = async (id: string, body: Partial<IBoard>): Promise<IBoard | undefined> => {
    const db = getRepository(Board);
    const user = await db.findOne(id);
    if (user === undefined) {
        return; 
    }

    const update = await db.update(id, body);
    return update.raw;
};

export { getAll, addBoard, removeBoard, getBoard, updateBoard };
