// src/routes/auth.routes.js
const express = require('express');
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected route example
router.get('/dashboard', authMiddleware.protect, (req, res) => {
  res.json({
    status: 'success',
    data: {
      message: 'Welcome to your dashboard!',
      user: req.user
    }
  });
});

module.exports = router;