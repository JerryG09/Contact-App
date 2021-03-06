import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from "cors"

const app = express();

app.use(cors())

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import contactRouter from './routes/contacts'




// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/contacts', contactRouter)

// catch 404 and forward to error handler
app.use(function(_req, _res, next) {
  next(createError(404));
});

interface ExpressError extends Error {
  status: number
}

// error handler
app.use(function(
  err: ExpressError,
  req: Request,
  res: Response,
  _next: NextFunction
  ) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
