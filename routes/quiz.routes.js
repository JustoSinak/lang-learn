const express = require('express');
const quizController = require('../controllers/quiz.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.use(authMiddleware.protect);

router.route('/')
  .get(quizController.getQuizzes)
  .post(quizController.createQuiz);

module.exports = router;