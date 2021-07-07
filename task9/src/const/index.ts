 const DEFAULT_COUNT_USERS = 3;

 const BD_TABLE_USERS = 'Users';

 const BD_TABLE_BOARDS = 'Boards';

 const BD_TABLE_TASKS = 'Tasks';
 
 const STATUS_CODE = {
     OK: 200,
     CREATED: 201,
     NO_CONTENT: 204,
     BAD_REQUEST: 400,
     NOT_FOUND: 404,
     INTERNAL_SERVER_ERROR: 500,
 };
 
 export const INTERNAL_ERROR = 'something went wrong';
 
 export { DEFAULT_COUNT_USERS, BD_TABLE_USERS, BD_TABLE_BOARDS, BD_TABLE_TASKS, STATUS_CODE };
 