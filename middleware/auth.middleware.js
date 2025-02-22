// src/middleware/auth.middleware.js
// const jwt = require('jsonwebtoken');
// const User = require('../models/user.model');

// exports.protect = async (req, res, next) => {
//   try {
//     // Get token from header
//     let token;
//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//       token = req.headers.authorization.split(' ')[1];
//     }

//     if (!token) {
//       return res.status(401).json({
//         status: 'error',
//         message: 'You are not logged in. Please log in to get access.'
//       });
//     }

//     // Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Check if user still exists
//     const user = await User.findById(decoded.id);
//     if (!user) {
//       return res.status(401).json({
//         status: 'error',
//         message: 'The user belonging to this token no longer exists.'
//       });
//     }

//     // Grant access to protected route
//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).json({
//       status: 'error',
//       message: 'Invalid token. Please log in again.'
//     });
//   }
// };

import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const protect = async (req, res, next) => {
  try {
    // let token;
    // if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    //   token = req.headers.authorization.split(' ')[1];
    // }
    const token = req.cookies.jwt;

    // if (!token) {
    //   return res.status(401).json({
    //     status: 'error',
    //     message: 'You are not logged in. Please log in to get access.'
    //   });
    // }
    if (!token) {
      return res.status(401).redirect('/login'); // Redirect to login if no token
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        status: 'error',
        message: 'The user belonging to this token no longer exists.'
      });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).redirect('/login');
  }
};