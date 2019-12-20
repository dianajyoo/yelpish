import express from 'express';
import mongoose from './db/mongoose';
import bodyParser from 'body-parser';

import commentRouter from './routes/commentRouter';
import restaurantRouter from './routes/restaurantRouter';
import userRouter from './routes/userRouter';
import { registerUser, verifyUser } from './routes/authRouter';

const app = express();

// connect mongoose to mongoDB
mongoose();

// configure app to use bodyParser() to get data from POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', registerUser);
app.use('/api/auth', verifyUser);

commentRouter(app);
restaurantRouter(app);
userRouter(app);

export default app;