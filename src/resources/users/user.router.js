const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.addUser(req.body);
  res.status(201).send(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  await usersService.removeUser(req.params.id);
  res.sendStatus(200);
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUser(req.params.id);
  res.status(200).send(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.updateUser(req.params.id, req.body);
  res.status(200).send(User.toResponse(user));
});

module.exports = router;
