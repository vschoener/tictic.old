import app from './bootstrap';
import { logger } from './logger/index';

app.stop().then(() => app.start())
.catch((e) => {
  logger.log('error', e);
});

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    app.stop();
  });
}
