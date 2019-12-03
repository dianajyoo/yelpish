import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import commentRouter from './routes/commentRouter';
import restaurantRouter from './routes/restaurantRouter';
import userRouter from './routes/userRouter';

const app = express();
const router = express.Router();

// configure app to use bodyParser() to get data from POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.use('/', (req, res) => {
  res.json({ message: "Test API" });
})

commentRouter(app);
restaurantRouter(app);
userRouter(app);

export default app;