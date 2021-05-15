const router = require('express').Router({mergeParams: true});
const taskService = require('./task.service');
const { STATUS_CODE } = require('../../const');

router.route('/').get(async (req, res) => {
  const tasks = await taskService.getAll();
  res.status(STATUS_CODE.OK).send(tasks);
});

router.route('/').post(async (req, res) => {
  if (req.params.boardId) {
    req.body.boardId = req.params.boardId;
  }
  const task = await taskService.addTask(req.body);
  res.status(STATUS_CODE.CREATED).send(task);
});

router.route('/:id').delete(async (req, res) => {
  await taskService.removeTask(req.params.id);
  res.sendStatus(STATUS_CODE.NO_CONTENT);
});

router.route('/:id').get(async (req, res) => {
  const task = await taskService.getTask(req.params.id);
  if (task) {
    res.status(STATUS_CODE.OK).send(task);
  } else {
    res.sendStatus(STATUS_CODE.NOT_FOUND);
  }
});

router.route('/:id').put(async (req, res) => {
  const task = await taskService.updateTask(req.params.id, req.body);
  res.status(STATUS_CODE.OK).send(task);
});

module.exports = router;
