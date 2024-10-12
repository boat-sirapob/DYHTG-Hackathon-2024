import { config } from 'dotenv';
config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Routes imports
import { AIRoutes } from './routes/ai.js';
import { TestRoutes } from './routes/test.js';
import { IndexRoutes } from './routes/index.js';
import { SongRoutes } from './routes/song.js';

// Setup express
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup routes
app.use('/ai', AIRoutes);
app.use('/test', TestRoutes);
app.use('/index', IndexRoutes);
app.use('/song', SongRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
