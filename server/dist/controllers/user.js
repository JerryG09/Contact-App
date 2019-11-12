"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
// import * as Joi from '@hapi/joi';
// import { ValidatedRequest, ValidatedRequestSchema, createValidator } from 'express-joi-validation'
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const validator = createValidator()
function signUp(req, res) {
    const { email, password, confirm_password } = req.body;
    if (password !== confirm_password) {
        res.status(404).json({
            message: "password and confirm_password does not match"
        });
        return;
    }
    user_1.default.find({ email }).then(user => {
        if (user.length >= 1) {
            res.status(409).json({
                message: 'email exist',
            });
        }
        else {
            bcrypt_1.default.hash(password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err,
                    });
                }
                else {
                    const user = new user_1.default({
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
exports.signUp = signUp;
function deleteUser(req, res) {
    user_1.default.remove({ _id: req.params.userId })
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
exports.deleteUser = deleteUser;
function login(req, res) {
    const { email, password } = req.body;
    user_1.default.find({ email })
        .exec()
        .then(user => {
        if (user.length < 1) {
            return res.status(401).json({
                message: 'Authorization failed',
            });
        }
        bcrypt_1.default.compare(password, user[0].password, (err, result) => {
            if (err) {
                return res.status(401).json({
                    message: 'Authorization failed',
                });
            }
            if (result) {
                const token = jsonwebtoken_1.default.sign({
                    email: user[0].email,
                    userId: user[0].id,
                }, 'secret', {
                    expiresIn: '1h',
                });
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
exports.login = login;
//# sourceMappingURL=user.js.map