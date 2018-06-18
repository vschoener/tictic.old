import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as appRoot from 'app-root-path';
import { ISequelizeUriConfig } from 'sequelize-typescript';

dotenv.config({ path: `${appRoot.path}/.env` });

export type ApiServerConfig = {
  port: string;
}

export type AppConfig = {
  api: ApiServerConfig;
  env: string;
  database: ISequelizeUriConfig;
}

//  About new Buffer deprecated in Node 10:
// https://nodesource.com/blog/understanding-the-buffer-deprecation-in-node-js-10/
const appConfig: AppConfig = {
  api: {
    port: process.env.EXPRESS_PORT || '8000',
  },
  env: process.env.ENV || 'development',
  database: {
    url: process.env.DATABASE_URL || 'postgres://user:pass@example.com:5432/dbname',
    //modelPaths: [ `${appRoot.path}/**/*.model.ts` ]
  }
};

export default appConfig;

