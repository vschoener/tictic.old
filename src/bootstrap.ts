import * as express from 'express';
import App from './app';
import appConfig from './config/index';

const app = new App(express(), appConfig);
app.init();

export default app;
