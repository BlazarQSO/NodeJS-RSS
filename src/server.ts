import { PORT } from './common/config';
import app from './app';
import { logger } from './utils/logger';
import { tryDBConnect } from './common/connectToDB';

tryDBConnect(() => {
    app.listen(PORT, () => {
        logger.info(`App is running on http://localhost:${PORT}`);
    });
});

/**
 * @file Root file
 * @author Siarhei Iukou (Sergey Ivkov)
 */
