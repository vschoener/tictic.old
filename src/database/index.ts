import { Sequelize } from 'sequelize-typescript';
import { DbConfig } from '../config/index';
import { logger } from '../logger/index';

/**
 * Class
 */
export default class Database {
  config: DbConfig;
  sequelize: Sequelize;

  constructor(config: DbConfig) {
    this.config = config;
  }

  /**
   * Connect to the database
   */
  async connect(): Promise<void> {
    logger.log('info', 'Connecting to Database...');
    this.sequelize = new Sequelize(this.config.uri);
    await this.sequelize.authenticate();
    logger.log('info', 'Connected to the database');
  }
}

