import { ormConfig } from './ormconfig';
import { getConnection, createConnection } from 'typeorm';
import { logger } from '../utils/logger';

export const connectToDB = async (): Promise<void> => {
    let connection;

    try {
        connection = getConnection();
    } catch(err) {
        logger.error(err);
    }
    
    try {
        if(connection) {
            if (!connection.isConnected) {
                await connection.connect();
            }
        } else {
            await createConnection(ormConfig);
        }
        logger.info('DB successfully connected!');
    } catch(err) {
        logger.error(err);
    }
};

export const tryDBConnect = async (app: () => void): Promise<void> => {
    try {
      await connectToDB();
      app();      
      logger.info('Start app!');
    } catch (err) {
      logger.error(err);
    }
};
