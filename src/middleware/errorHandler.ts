import { NextFunction, Request, Response } from 'express';
import { INTERNAL_ERROR, STATUS_CODE } from '../const';
import { ApiError } from '../utils/apiError';
import { logger } from '../utils/logger';

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction): void => {
    logger.error(err);

    if (err instanceof ApiError) {
        res.status(err.statusCode).json(err.message);
        return;
    }

    res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(INTERNAL_ERROR);
};
