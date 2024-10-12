import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { config } from 'dotenv';
config();

import { AI } from './ai/main.js';

const app = express();
const port = 3000;
const ai = new AI();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/test/ai', async (req, res) => {
  try {
    const response = await ai.generateResponse("Say Hello world");
    res.json({ message: response });
  }
  catch (error) {
    res.json({ message: error, error: true });
  }
});
