/**
 * Default count users
 * @type {number}
 */
const DEFAULT_COUNT_USERS = 5;
/**
 * DB table users
 * @type {string}
 */
const BD_TABLE_USERS = 'Users';
/**
 * DB table boards
 * @type {string}
 */
const BD_TABLE_BOARDS = 'Boards';
/**
 * DB table tasks
 * @type {string}
 */
const BD_TABLE_TASKS = 'Tasks';

/**
 * Status code of HTTP requests
 * @type {Object} STATUS_CODE
 * @property {number} OK - OK
 * @property {number} CREATED - Created
 * @property {number} NO_CONTENT - No Content
 * @property {number} NOT_FOUND - Not Found
 * @property {number} INTERNAL_SERVER_ERROR - Internal Server Error
 */
const STATUS_CODE = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
}

module.exports = {
    DEFAULT_COUNT_USERS,
    BD_TABLE_USERS,
    BD_TABLE_BOARDS,
    BD_TABLE_TASKS,
    STATUS_CODE,
}
