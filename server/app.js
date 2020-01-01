import express from 'express';
import mongoose from './db/mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import commentRouter from './routes/commentRouter';
import favoriteRouter from './routes/favoriteRouter';
import userRouter from './routes/userRouter';
import { registerUser, verifyUser } from './routes/authRouter';

const app = express();

// connect mongoose to mongoDB
mongoose();

app.use(cors());

// configure app to use bodyParser() to get data from POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', registerUser);
app.use('/api/auth', verifyUser);

commentRouter(app);
favoriteRouter(app);
userRouter(app);

export default app;