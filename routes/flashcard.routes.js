const express = require('express');
const flashcardController = require('../controllers/flashcard.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.use(authMiddleware.protect);

router.route('/')
  .get(flashcardController.getFlashcards)
  .post(flashcardController.createFlashcard);

module.exports = router;