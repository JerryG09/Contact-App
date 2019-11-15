import jwt from 'jsonwebtoken';
import express from 'express';

export const checkAuth = (req: express.Request, res: express.Response,next: express.NextFunction) => {
  try {
    const token: string = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'secret');
    
    req.body.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: 'Token Authorization failed',
    });
  }
};
