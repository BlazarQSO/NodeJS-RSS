const router = require('express').Router();
// const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.status(200).send(boards);
});

// router.route('/').post(async (req, res) => {
//   const user = await boardService.addUser(req.body);
//   res.status(201).send(User.toResponse(user));
// });

// router.route('/:id').delete(async (req, res) => {
//   await boardService.removeUser(req.params.id);
//   res.sendStatus(200);
// });

// router.route('/:id').get(async (req, res) => {
//   const user = await boardService.getUser(req.params.id);
//   res.status(200).send(User.toResponse(user));
// });

// router.route('/:id').put(async (req, res) => {
//   const user = await boardService.updateUser(req.params.id, req.body);
//   res.status(200).send(User.toResponse(user));
// });

module.exports = router;
