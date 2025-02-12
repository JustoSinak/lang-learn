import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import path from 'path';
import { protect as authMiddleware } from './middleware/auth.middleware.js';

import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');
// app.set('views', path.join(new URL(import.meta.url).pathname, 'views'));





app.set('views', path.join(__dirname, 'views'));


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(path.join(new URL(import.meta.url).pathname, 'public')));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Basic Route
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/dashboard', authMiddleware, async (req, res) => { 
  try {
      const progress = await Progress.findOne({ userId: req.user._id });
      res.render('dashboard', { 
          user: req.user,
          progress: progress || {
              vocabularyProgress: { wordsLearned: 0 },
              streakDays: 0
          }
      });
  } catch (error) {
      res.status(500).redirect('/');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
