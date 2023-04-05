import express, { Application } from 'express';
import { config } from 'dotenv';
import cors from 'cors';

const app: Application = express();

config();
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello');
});

export default app;
