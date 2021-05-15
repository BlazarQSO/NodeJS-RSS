const router = require('express').Router({mergeParams: true});
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await taskService.getAll();
  res.status(200).send(tasks);
});

router.route('/').post(async (req, res) => {
  if (req.params.boardId) {
    req.body.boardId = req.params.boardId;
  }
  const task = await taskService.addTask(req.body);
  res.status(201).send(task);
});

router.route('/:id').delete(async (req, res) => {
  await taskService.removeTask(req.params.id);
  res.sendStatus(204);
});

router.route('/:id').get(async (req, res) => {
  const task = await taskService.getTask(req.params.id);
  if (task) {
    res.status(200).send(task);
  } else {
    res.status(404);
  }
});

router.route('/:id').put(async (req, res) => {
  const task = await taskService.updateTask(req.params.id, req.body);
  res.status(200).send(task);
});

module.exports = router;
