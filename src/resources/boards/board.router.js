const router = require('express').Router();
const boardService = require('./board.service');
const { STATUS_CODE } = require('../../const');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.status(STATUS_CODE.OK).send(boards);
});

router.route('/').post(async (req, res) => {
  const board = await boardService.addBoard(req.body);
  res.status(STATUS_CODE.CREATED).send(board);
});

router.route('/:id').delete(async (req, res) => {
  await boardService.removeBoard(req.params.id);
  res.sendStatus(STATUS_CODE.NO_CONTENT);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardService.getBoard(req.params.id);
  if (board) {
    await res.status(STATUS_CODE.OK).send(board);
  } else {
    res.sendStatus(STATUS_CODE.NOT_FOUND);
  }
});

router.route('/:id').put(async (req, res) => {
  const board = await boardService.updateBoard(req.params.id, req.body);
  res.status(STATUS_CODE.OK).send(board);
});

module.exports = router;
