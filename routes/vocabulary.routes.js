const express = require('express');
const vocabularyController = require('../controllers/vocabulary.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.use(authMiddleware.protect);

router.route('/')
  .get(vocabularyController.getWords)
  .post(vocabularyController.createWord);

module.exports = router;