import joi from '@hapi/joi';

const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

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

const contactSchema = joi.object({
  firstName: joi
    .string()
    .min(1)
    .max(255)
    .trim()
    .lowercase()
    .required(),
  lastName: joi
    .string()
    .min(1)
    .max(255)
    .trim()
    .lowercase()
    .required(),
  email: joi
    .string()
    .email()
    .lowercase()
    .regex(emailRegex)
    .allow(''),
  phone: joi
    .string()
    .min(11)
    .max(14)
    .pattern(phoneRegex),
  company: joi
    .string()
    .trim()
    .allow(''),
});

const editContactSchema = joi.object({
  firstName: joi
    .string()
    .min(1)
    .max(255)
    .trim()
    .lowercase(),
  lastName: joi.ref('firstName'),
  email: joi
    .string()
    .email()
    .lowercase()
    .pattern(emailRegex)
    .allow(''),
  phone: joi
    .string()
    .min(11)
    .max(14)
    .pattern(phoneRegex),
  company: joi
    .string()
    .trim()
    .allow(''),
});

export { contactSchema, editContactSchema }
