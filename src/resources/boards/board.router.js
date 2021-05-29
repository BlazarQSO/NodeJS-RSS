const router = require('express').Router();
const boardService = require('./board.service');
const { STATUS_CODE } = require('../../const');

/**
 * Router | Get all boards
 * @name Router - Get all boards
 * @route {GET} /boards/
 * @category BoardRouter
 */
router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.status(STATUS_CODE.OK).send(boards);
});

/**
 * Router | Add a board
 * @name Router - Add a board
 * @route {POST} /boards/
 * @category BoardRouter
 */
router.route('/').post(async (req, res) => {
  const board = await boardService.addBoard(req.body);
  res.status(STATUS_CODE.CREATED).send(board);
});

/**
 * Router | Delete a board
 * @name Router - Delete a board by id
 * @route {DELETE} /boards/:id
 * @category BoardRouter
 */
router.route('/:id').delete(async (req, res) => {
  await boardService.removeBoard(req.params.id);
  res.sendStatus(STATUS_CODE.NO_CONTENT);
});

/**
 * Router | Get a board
 * @name Router - Get a board by id
 * @route {GET} /boards/:id
 * @category BoardRouter
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
 * Router | Update a board
 * @name Router - Update a board by id
 * @route {PUT} /boards/:id
 * @category BoardRouter
 */
router.route('/:id').put(async (req, res) => {
  const board = await boardService.updateBoard(req.params.id, req.body);
  res.status(STATUS_CODE.OK).send(board);
});

module.exports = router;
