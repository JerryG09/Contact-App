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

function deleteUser(req: express.Request, res: express.Response) {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(data => {
      if (data.n === 0) {
        return res.status(404).json({
          message: 'Contact not found',
        });
      }

      return res.status(200).json({
        success: true,
        message: 'contact removed successfully',
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    });
}

function login(req: express.Request, res: express.Response) {
  const { email, password } = req.body;

  User.find({ email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: 'Authorization failed',
        });
      }
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Authorization failed',
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0].id,
            },
            'secret',
            {
              expiresIn: '1h',
            },
          );
          return res.status(200).json({
            message: 'Authorization successful',
            token,
          });
        }
        return res.status(401).json({
          message: 'Authorization failed',
        });
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    });
}

export { signUp, login, deleteUser };
