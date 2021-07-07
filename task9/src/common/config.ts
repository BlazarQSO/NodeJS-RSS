import * as dotenv from 'dotenv'
import * as path from 'path';

dotenv.config({
    path: path.join(__dirname, '../../.env'),
});

const { PORT, USE_FASTIFY } = process.env;

export { PORT, USE_FASTIFY };
