import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { mainRouter } from './routes/mainRouter.js';
import { createRoles, initializeAdmin } from './libs/intialSetup.js';

const app = express();
createRoles();
initializeAdmin();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/v1', mainRouter);

export default app;
