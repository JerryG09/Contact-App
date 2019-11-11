import * as Joi from '@hapi/joi';

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const phoneRegex = /\+?234[789][01]\d{8}|0[789][01]\d{8}/;

const contactValidator = Joi.object().keys({
  name: Joi.string().alphanum().min(3).max(30).required(),
  phone: Joi.string().regex(phoneRegex).required(),
  email: Joi.string().email().regex(emailRegex).required(),
  company: Joi.string().min(3).max(30).required()
})

const userValidator = Joi.object().keys({
  password: Joi.string().regex(passwordRegex).required(),
  password_confirmation: Joi.any().equal(Joi.ref('password')).required(),
  email: Joi.string().email().regex(emailRegex)
})

export { contactValidator, userValidator }
