"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const phoneRegex = /^(\+?234[789][01]\d{8})$|^(0[789][01]\d{8})$/;
// const contactValidator = Joi.object().keys({
//   name: Joi.string().alphanum().min(3).max(30).required(),
//   phone: Joi.string().regex(phoneRegex).required(),
//   email: Joi.string().email().regex(emailRegex).required(),
//   company: Joi.string().min(3).max(30).required()
// })
// const userValidator = Joi.object().keys({
//   password: Joi.string().regex(passwordRegex).required(),
//   password_confirmation: Joi.any().equal(Joi.ref('password')).required(),
//   email: Joi.string().email().regex(emailRegex)
// })
const contactSchema = joi_1.default.object({
    firstName: joi_1.default
        .string()
        .min(1)
        .max(255)
        .trim()
        .lowercase()
        .required(),
    lastName: joi_1.default
        .string()
        .min(1)
        .max(255)
        .trim()
        .lowercase()
        .required(),
    email: joi_1.default
        .string()
        .email()
        .lowercase()
        .regex(emailRegex)
        .allow(''),
    phone: joi_1.default
        .string()
        .min(11)
        .max(14)
        .pattern(phoneRegex),
    company: joi_1.default
        .string()
        .trim()
        .allow(''),
});
exports.contactSchema = contactSchema;
const editContactSchema = joi_1.default.object({
    firstName: joi_1.default
        .string()
        .min(1)
        .max(255)
        .trim()
        .lowercase(),
    lastName: joi_1.default
        .string()
        .min(1)
        .max(255)
        .trim()
        .lowercase(),
    email: joi_1.default
        .string()
        .email()
        .lowercase()
        .pattern(emailRegex)
        .allow(''),
    phone: joi_1.default
        .string()
        .min(11)
        .max(14)
        .pattern(phoneRegex),
    company: joi_1.default
        .string()
        .trim()
        .allow(''),
});
exports.editContactSchema = editContactSchema;
//# sourceMappingURL=contact.js.map