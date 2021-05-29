const router = require('express').Router();
const boardService = require('./board.service');
const { STATUS_CODE } = require('../../const');

/**
 * Get all boards
 * @name Get all boards
 * @route {GET} /boards/
 */
router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.status(STATUS_CODE.OK).send(boards);
});

/**
 * Add a board
 * @name Add a board
 * @route {POST} /boards/
 */
router.route('/').post(async (req, res) => {
  const board = await boardService.addBoard(req.body);
  res.status(STATUS_CODE.CREATED).send(board);
});

/**
 * Delete a board
 * @name Delete a board by id
 * @route {DELETE} /boards/:id
 */
router.route('/:id').delete(async (req, res) => {
  await boardService.removeBoard(req.params.id);
  res.sendStatus(STATUS_CODE.NO_CONTENT);
});

/**
 * Get a board
 * @name Get a board by id
 * @route {GET} /boards/:id
 */
router.route('/:id').get(async (req, res) => {
  const board = await boardService.getBoard(req.params.id);
  if (board) {
    await res.status(STATUS_CODE.OK).send(board);
  } else {
    res.sendStatus(STATUS_CODE.NOT_FOUND);
  }
});

/**
 * Update a board
 * @name Update a board by id
 * @route {PUT} /boards/:id
 */
router.route('/:id').put(async (req, res) => {
  const board = await boardService.updateBoard(req.params.id, req.body);
  res.status(STATUS_CODE.OK).send(board);
});

module.exports = router;
