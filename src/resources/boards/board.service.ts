import * as boardRepo from './board.memory.repository';
import { IBoard } from '../../entities/board.entity';

/**
 * Service | Get all boards
 * @returns {Promise<Array<IBoard>>} - Get all boards
 * @category BoardService
 */
const getAll = async (): Promise<Array<IBoard>> => boardRepo.getAll();

/**
 * Service | Add a board
 * @param {IBoard} board - It's a new board
 * @returns {Promise<IBoard>}
 * @category BoardService
 */
const addBoard = async (board: IBoard): Promise<IBoard> => boardRepo.addBoard(board);

/**
 * Service | Delete a board
 * @param {string} id - Id of the board
 * @returns {Promise<IBoard>} - Remote board
 * @category BoardService
 */
const removeBoard = async (id: string): Promise<IBoard | undefined> => boardRepo.removeBoard(id);

/**
 * Service | Get a board
 * @param {string} id - Id of the board
 * @returns {Promise<IBoard>} - Get board by id
 * @category BoardService
 */
const getBoard = async (id: string): Promise<IBoard | undefined> => boardRepo.getBoard(id);

/**
 * Service | Update the board
 * @param {string} id - Id of the board
 * @param {Partial<IBoard>} body - Optional board properties to update
 * @returns {Promise<IBoard>} - Update the board
 * @category BoardService
 */
const updateBoard = async (id: string, body: Partial<IBoard>): Promise<IBoard | undefined> =>
    boardRepo.updateBoard(id, body);

export { getAll, addBoard, removeBoard, getBoard, updateBoard };
