export class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      this.isOperational = true;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    
    res.status(statusCode).render('error', {
      title: 'Error',
      statusCode,
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
  };