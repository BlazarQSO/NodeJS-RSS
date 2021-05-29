const router = require('express').Router({mergeParams: true});
const taskService = require('./task.service');
const { STATUS_CODE } = require('../../const');

/**
 * Get all tasks
 * @name Get all tasks
 * @route {GET} /boards/:boardId/tasks/
 */
router.route('/').get(async (req, res) => {
  const tasks = await taskService.getAll();
  res.status(STATUS_CODE.OK).send(tasks);
});

/**
 * Add a task
 * @name Add a task
 * @route {POST} /boards/:boardId/tasks/
 */
router.route('/').post(async (req, res) => {
  if (req.params.boardId) {
    req.body.boardId = req.params.boardId;
  }
  const task = await taskService.addTask(req.body);
  res.status(STATUS_CODE.CREATED).send(task);
});

/**
 * Delete a task
 * @name Delete a task by id
 * @route {DELETE} /boards/:boardId/tasks/:id
 */
router.route('/:id').delete(async (req, res) => {
  await taskService.removeTask(req.params.id);
  res.sendStatus(STATUS_CODE.NO_CONTENT);
});

/**
 * Get a task
 * @name Get a task by id
 * @route {GET} /boards/:boardId/tasks/:id
 */
router.route('/:id').get(async (req, res) => {
  const task = await taskService.getTask(req.params.id);
  if (task) {
    res.status(STATUS_CODE.OK).send(task);
  } else {
    res.sendStatus(STATUS_CODE.NOT_FOUND);
  }
});

/**
 * Update a task
 * @name Update a task by id
 * @route {PUT} /boards/:boardId/tasks/:id
 */
router.route('/:id').put(async (req, res) => {
  const task = await taskService.updateTask(req.params.id, req.body);
  res.status(STATUS_CODE.OK).send(task);
});

module.exports = router;
