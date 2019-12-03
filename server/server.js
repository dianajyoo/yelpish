import express from 'express';

const app = express();
const router = express.Router();
const port = process.env.PORT || '3000';

// access server via localhost:3000/api/
app.use('/api', router);

app.listen(port);
console.log(`Listening on port ${port}!`);