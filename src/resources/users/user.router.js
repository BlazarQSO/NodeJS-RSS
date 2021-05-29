const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const { STATUS_CODE } = require('../../const');

/**
 * Router | Get all users
 * @name Router - Get all users
 * @route {GET} /users/
 * @category UserRouter
 */
router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

/**
 * Router | Add a user
 * @name Router - Add a user
 * @route {POST} /users/
 * @category UserRouter
 */
router.route('/').post(async (req, res) => {
  const user = await usersService.addUser(req.body);
  res.status(STATUS_CODE.CREATED).send(User.toResponse(user));
});

/**
 * Router | Delete a user
 * @name Router - Delete a user by id
 * @route {DELETE} /users/:id
 * @category UserRouter
 */
router.route('/:id').delete(async (req, res) => {
  await usersService.removeUser(req.params.id);
  res.sendStatus(STATUS_CODE.NO_CONTENT);
});

/**
 * Router | Get a user
 * @name Router - Get a user by id
 * @route {GET} /users/:id
 * @category UserRouter
 */
router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUser(req.params.id);
  res.status(STATUS_CODE.OK).send(User.toResponse(user));
});

/**
 * Router | Update a user
 * @name Router - Update a user by id
 * @route {PUT} /users/:id
 * @category UserRouter
 */
router.route('/:id').put(async (req, res) => {
  const user = await usersService.updateUser(req.params.id, req.body);
  res.status(STATUS_CODE.OK).send(User.toResponse(user));
});

module.exports = router;
