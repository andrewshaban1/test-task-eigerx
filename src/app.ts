// Having app initialization in a separate file will allow to use it with a testing library such as Supertest
import express, { Application } from 'express';

import router from './routes';

const app: Application = express();

app.use(express.json());
app.use(router);

export default app;
