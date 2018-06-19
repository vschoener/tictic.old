import app from './bootstrap';
import { logger } from './logger/index';

app.stop().then(() => app.start())
.catch((e) => {
  logger.log('error', e);
});
