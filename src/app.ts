/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "^next$" }] */
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as express from 'express';
import * as http from 'http';
import { Application, Request, Response } from 'express';
import * as errorHandler from 'errorhandler';
import { AppConfig } from './config/index';
import router from './api/index';
import { logger, morganOption } from './logger/index';
import passport from './api/passport';
import Database from './database/index';

/**
 * In Node App, I always see everything in app.js without a class / object aspect but I feel it could be improve
 * that way if it's not overkill
 */
class App {
  expressApp: Application;
  config: AppConfig;
  server: http.Server|null;
  database: Database;

  constructor(
    expressApp: Application,
    config: AppConfig,
  ) {
    this.expressApp = expressApp;
    this.config = config;
  }

  init() {
    this.initializeExpress();
    this.database = new Database(this.config.database);
  }

  // Should be private method
  initializeExpress() {
    // Attach basics Middleware

    if (this.config.env === 'dev') {
      this.expressApp.use(errorHandler());
    }

    // Body parser
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));

    // Cors
    this.expressApp.use(cors());

    // Logging
    this.expressApp.use(morgan('combined', morganOption));

    this.expressApp.use(passport.initialize());

    // Api docs
    this.expressApp.use('/apidoc', express.static('apidoc'));

    // Attach app routes
    this.expressApp.use(router);

    this.attachRoutingIssueMiddleware();
  }

  /**
   * Handle any problem with routes
   * @returns {App}
   */
  attachRoutingIssueMiddleware(): App {
    // TODO: Idea, we could improve this using custom Error object and manage each type here
    this.expressApp.use((req: Request, res: Response) => {
      const error = new Error('Resource not found');
      res.status(404);
      return this.responseError(res, error);
    });

    this.expressApp.use((error: Error, req: Request, res: Response, next: any) => {
      res.status(500);
      return this.responseError(res, error);
    });

    return this;
  }

  /**
   * @param {e.Response} res
   * @param {Error} error
   * @returns {e.Response}
   */
  responseError(res: Response, error: Error): Response {
    const result: any = {
      message: error.message,
      stack: '',
    };

    if (['dev', 'test'].indexOf(this.config.env) >= 0) {
      logger.log('error', error.message);
      if (error.stack) {
        logger.log('error', error.stack);
      }
      result.stack = error.stack;
    }

    return res.json(result);
  }

  async start(): Promise<http.Server> {
    await this.database.connect();
    this.server = http.createServer(this.expressApp);
    this.server.listen(this.config.api.port);
    logger.log('info', `✔ Server running on port ${this.config.api.port}`);

    return this.server;
  }

  async stop(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!this.server) {
        resolve();
        return ;
      }
      this.server.close((err: Error) => {
        if (err) {
          reject(err);
        }
        this.server = null;
        resolve();
      });
    });
  }

  getExpressApp(): Application {
    return this.expressApp;
  }

  getServer(): http.Server|null {
    return this.server;
  }
}

export default App;
