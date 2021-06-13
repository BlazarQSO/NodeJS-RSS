import { db } from '../../database';
import { BD_TABLE_BOARDS, STATUS_CODE } from '../../const';
import { IBoard } from './board.model';
import { ApiError } from '../../utils/apiError';
import { logger } from '../../utils/logger';

/**
 * Repo | Get all boards
 * @returns {Promise<Array<IBoard>>} - Get all boards
 * @category BoardRepo
 */
const getAll = async (): Promise<Array<IBoard>> => {
    const boards = await db.Boards;
    return boards;
};

/**
 * Repo | Add a board
 * @param {IBoard} board - It's a new board
 * @returns {Promise<IBoard>}
 * @category BoardRepo
 */
const addBoard = async (board: IBoard): Promise<IBoard> => {
    const newBoard = (await db.addItem(board, BD_TABLE_BOARDS)) as IBoard;
    return newBoard;
};

/**
 * Repo | Delete a board
 * @param {string} id - Id of the board
 * @returns {Promise<IBoard>} - Remote board
 * @category BoardRepo
 */
const removeBoard = async (id: string): Promise<IBoard | undefined> => {
    try {
        const board = (await db.removeItem(id, BD_TABLE_BOARDS)) as IBoard;
        if (!board) {
            throw new ApiError(`The board with id ${id} was not found`, STATUS_CODE.NOT_FOUND);
        }
        return board;
    } catch (err) {
        logger.error(err.message);
    }
    return undefined;
};

/**
 * Repo | Get a board
 * @param {string} id - Id of the board
 * @returns {Promise<IBoard>} - Get board by id
 * @category BoardRepo
 */
const getBoard = async (id: string): Promise<IBoard | undefined> => {
    try {
        const board = (await db.getItem(id, BD_TABLE_BOARDS)) as IBoard;
        if (!board) {
            throw new ApiError(`The board with id ${id} was not found`, STATUS_CODE.NOT_FOUND);
        }
        return board;
    } catch (err) {
        logger.error(err.message);
    }
    return undefined;
};

/**
 * Repo | Update the board
 * @param {string} id - Id of the board
 * @param {Partial<IBoard>} body - Optional board properties to update
 * @returns {Promise<IBoard>} - Update the board
 * @category BoardRepo
 */
const updateBoard = async (id: string, body: Partial<IBoard>): Promise<IBoard | undefined> => {
    try {
        const board = (await db.updateItem(id, body, BD_TABLE_BOARDS)) as IBoard;
        if (!board) {
            throw new ApiError(`The board with id ${id} was not found`, STATUS_CODE.NOT_FOUND);
        }
        return board;
    } catch (err) {
        logger.error(err.message);
    }
    return undefined;
};

export { getAll, addBoard, removeBoard, getBoard, updateBoard };
