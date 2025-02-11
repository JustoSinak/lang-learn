import express from 'express';
import { protect } from '../middleware/auth.js';
const router = express.Router();

// Protected route example
router.post('/', protect, async (req, res) => {
  const { word, definition } = req.body;
  const flashcard = new Flashcard({ word, definition, userId: req.user.id });
  await flashcard.save();
  res.status(201).json(flashcard);
});