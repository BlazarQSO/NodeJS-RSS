import { NextFunction, Request, Response } from 'express';
import { finished } from 'stream';
import { logger } from './logger';

export const logging = (req: Request, res: Response, next: NextFunction): void => {
    const { method, url, params, query, body } = req;
    const start = Date.now();

    next();

    finished(res, () => {
        const ms = Date.now() - start;
        const { statusCode } = res;
        const methodStatusDuration = `Method: ${method}, Status Code: ${statusCode}, Duration: ${ms},`;
        const bodyUrlLog = `body: ${JSON.stringify(body)}, url: ${url},`;
        const paramsQuery = `params: ${JSON.stringify(params)}, query: ${JSON.stringify(query)}`;
        logger.info(`${methodStatusDuration} ${bodyUrlLog} ${paramsQuery}`);
    });
};
