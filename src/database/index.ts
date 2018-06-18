import { Sequelize, ISequelizeUriConfig, Model } from 'sequelize-typescript';
import { logger } from '../logger/index';
import User from '../api/v1/user/user.model';

/**
 * Class
 */
export default class Database {
  config: ISequelizeUriConfig;
  sequelize: Sequelize;

  constructor(config: ISequelizeUriConfig) {
    this.config = config;
  }

  /**
   * Get ORM models
   */
  get models(): Array<typeof Model> {
    const models: Array<typeof Model> = [
      User
    ];

    return models;
  }

  /**
   * Connect to the database
   */
  async connect(): Promise<void> {
    logger.log('info', 'Connecting to Database...');
    this.sequelize = new Sequelize(this.config);

    // Wanted to use `modelPaths` with a glob/path inclusion but it doesn't work
    this.sequelize.addModels(this.models);
    await this.sequelize.authenticate();
    logger.log('info', 'Connected to the database');
  }
}

