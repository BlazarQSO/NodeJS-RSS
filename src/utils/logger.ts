import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
    level: 'silly',
    format: format.combine(format.colorize(), format.cli(), format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' })),
    transports: [
        new transports.Console(),
        new transports.File({
            filename: `${__dirname}/../../logs/error.log`,
            level: 'error',
            format: format.combine(format.uncolorize(), format.json()),
        }),
        new transports.File({
            filename: `${__dirname}/../../logs/info.log`,
            format: format.printf((info) => `${new Date().toISOString()} ${info.message}`),
        }),
    ],
});
