const faker = require('faker');

/**
 * Column Interface
 * @typedef IColumn
 * @property {string} id - Id of the column
 * @property {string} title - Title of the column
 * @property {number} order - Order of the column
 */

/**
 * Board Interface
 * @typedef IBoard
 * @property {string} id - Id of the board
 * @property {string} title - Title of the board.
 * @property {Array<IColumn>} columns - Columns of the board.
*/

/**
 * Creates a new Board.
 * @class
 */
class Board {
  /**
    * Create a Board.
    * @param {IBoard} IBoard - Information about the board
  */
  constructor({
    /**
     * @property {string} id - Id of the board
     */
    id = faker.datatype.uuid(),
    /**
     * @property {string} title - Title of the board
     */
    title = faker.name.title(),
    /**
     * @property {Array<IColumn>} columns - Columns of the board
     */
    columns = [{
      id: faker.datatype.uuid(),
      title: faker.name.title(),
      order: faker.datatype.number(),
    }],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
