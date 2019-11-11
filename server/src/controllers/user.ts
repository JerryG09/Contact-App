import User from '../models/user';
import express from 'express';

// import * as Joi from '@hapi/joi';
// import { ValidatedRequest, ValidatedRequestSchema, createValidator } from 'express-joi-validation'


import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
// const validator = createValidator()

function signUp(req: express.Request, res: express.Response) {
  const { email, password, confirm_password } = req.body;

  if ( password !== confirm_password ) {
    res.status(404).json({
      message: "password and confirm_password does not match"
    })

    return;
  }

  User.find({ email }).then(user => {
    if (user.length >= 1) {
      res.status(409).json({
        message: 'email exist',
      });
    } else {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err,
          });
        } else {
          const user = new User({
            email,
            password: hash,
          });
          return user
            .save()
            .then(result => {
              console.log(result);
              res.status(201).json({
                message: 'User created successfully',
              });
            })
            .catch(err => {
              console.error(err);
              res.status(500).json({
                error: err,
              });
            });
        }
      });
    }
  });
}

export { signUp, login, deleteUser };
