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
const allowedOrigins = [
  'http://localhost:3000', // For local development
  'https://aipractice.kasitphoom.com' // Production domain
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin, such as mobile apps or curl
    if (!origin) return callback(null, true);

    // Check if the origin is in the allowed list
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
}));
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
