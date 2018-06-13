import * as appRoot from 'app-root-path';
import * as winston from 'winston';
import { Logger } from 'winston';
import { Options } from 'morgan';
import * as fs from 'fs';

const dirLogs = `${appRoot}/logs`;

// It's call during initialization, we can block the thread
if (!fs.existsSync(dirLogs)) {
  fs.mkdirSync(dirLogs);
}
// define the custom settings for each transport (file, console)
const options = {
  file: {
    level: 'info',
    filename: `${dirLogs}/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

// Keep it simple to focus on the need first
// I think Logger should send logs to a logger service
export const logger = new Logger({
  level: 'info',
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

export const morganOption: Options = {
  stream: {
    write: function (message: string) {
        logger.info(message.trim());
    }
  }
}
