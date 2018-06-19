import * as dotenv from 'dotenv';
import * as appRoot from 'app-root-path';
import { ISequelizeUriConfig } from 'sequelize-typescript';

dotenv.config({ path: `${appRoot.path}/.env` });

export type ApiServerConfig = {
  port: number;
}

export type AppConfig = {
  api: ApiServerConfig;
  env: string;
  database: ISequelizeUriConfig;
}

const env: string = process.env.ENV || 'development';

//  About new Buffer deprecated in Node 10:
// https://nodesource.com/blog/understanding-the-buffer-deprecation-in-node-js-10/
const appConfig: AppConfig = {
  api: {
    // Avoid typescript error '||' doesn't seems to help
    port: process.env.EXPRESS_PORT ? parseInt(process.env.EXPRESS_PORT) : 8080,
  },
  env,
  database: {
    url: process.env.DATABASE_URL || "postgres://user:pass@postgres:5432/tictic",
    //modelPaths: [ `${appRoot.path}/**/*.model.ts` ]
  }
};

export default appConfig;

