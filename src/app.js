import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { mainRouter } from './routes/mainRouter.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/v1', mainRouter);

export default app;
