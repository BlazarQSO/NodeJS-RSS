const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const { STATUS_CODE } = require('../../const');

/**
 * Get all users
 * @name Get all users
 * @route {GET} /users/
 */
router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

/**
 * Add a user
 * @name Add a user
 * @route {POST} /users/
 */
router.route('/').post(async (req, res) => {
  const user = await usersService.addUser(req.body);
  res.status(STATUS_CODE.CREATED).send(User.toResponse(user));
});

/**
 * Delete a user
 * @name Delete a user by id
 * @route {DELETE} /users/:id
 */
router.route('/:id').delete(async (req, res) => {
  await usersService.removeUser(req.params.id);
  res.sendStatus(STATUS_CODE.NO_CONTENT);
});

/**
 * Get a user
 * @name Get a user by id
 * @route {GET} /users/:id
 */
router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUser(req.params.id);
  res.status(STATUS_CODE.OK).send(User.toResponse(user));
});

/**
 * Update a user
 * @name Update a user by id
 * @route {PUT} /users/:id
 */
router.route('/:id').put(async (req, res) => {
  const user = await usersService.updateUser(req.params.id, req.body);
  res.status(STATUS_CODE.OK).send(User.toResponse(user));
});

module.exports = router;
