import Router, { Request } from 'express';
import * as taskService from './task.service';
import { STATUS_CODE } from '../../const';

const router = Router.Router({ mergeParams: true });

interface IGetBoarderId extends Request {
    params: {
        boardId: string;
    };
}

/**
 * Router | Get all tasks
 * @name Router - Get all tasks
 * @route {GET} /boards/:boardId/tasks/
 * @category TaskRouter
 */
router.route('/').get(async (_req, res) => {
    const tasks = await taskService.getAll();
    res.status(STATUS_CODE.OK).send(tasks);
});

/**
 * Router | Add a task
 * @name Router - Add a task
 * @route {POST} /boards/:boardId/tasks/
 * @category TaskRouter
 */
router.route('/').post(async (req: IGetBoarderId, res) => {
    if (req.params.boardId) {
        req.body.boardId = req.params.boardId;
    }
    const task = await taskService.addTask(req.body);
    res.status(STATUS_CODE.CREATED).send(task);
});

/**
 * Router | Delete a task
 * @name Router - Delete a task by id
 * @route {DELETE} /boards/:boardId/tasks/:id
 * @category TaskRouter
 */
router.route('/:id').delete(async (req, res) => {
    await taskService.removeTask(req.params.id);
    res.sendStatus(STATUS_CODE.NO_CONTENT);
});

/**
 * Router | Get a task
 * @name Router - Get a task by id
 * @route {GET} /boards/:boardId/tasks/:id
 * @category TaskRouter
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
 * Router | Update a task
 * @name Router - Update a task by id
 * @route {PUT} /boards/:boardId/tasks/:id
 * @category TaskRouter
 */
router.route('/:id').put(async (req, res) => {
    const task = await taskService.updateTask(req.params.id, req.body);
    res.status(STATUS_CODE.OK).send(task);
});

export default router;
