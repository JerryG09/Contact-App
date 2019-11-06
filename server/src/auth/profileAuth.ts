import express from 'express';

export const authLogMiddleware = (req: express.Request, _res: express.Response, next: express.NextFunction) => {
    const authToken = req.headers.authorization;

    if (authToken) {
        console.log("This request was authenticated")
    }

    next()
}

export const authMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const authValue = req.headers.authorization;
    if (!authValue) {
      res.status(401).json({ message: 'Please authenticate yourself' });

      return;
    }

    if (authValue !== 'I am authenticated') {
      res.status(401).json({ message: 'You are not authenticated' });

      return;
    }

    next();
  }
