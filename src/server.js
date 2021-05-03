import express from 'express';
import router from './routes';
import config from 'config';
import Log from './utils/Log';
import process from 'process';

const log = Log('server.js');
const api = express();

api.use(router);

const { port } = config.app;

api.listen(port, () => {
    log.info(`${process.env.NODE_ENV} :: server started on port ${port}`);
});
