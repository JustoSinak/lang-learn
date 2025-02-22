// src/routes/auth.routes.js
import express from 'express';
import { register, login, logout } from '../controllers/auth.controller.js';
import { protect } from '../middleware/auth.middleware.js';
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);


// Protected route example
// router.get('/dashboard', authMiddleware.protect, (req, res) => {
//   res.json({
//     status: 'success',
//     data: {
//       message: 'Welcome to your dashboard!',
//       user: req.user
//     }
//   });
// });

export default router;