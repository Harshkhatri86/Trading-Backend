import Joi from 'joi';

export const registerValidationSchema = Joi.object({
  userName: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({
      'string.min': 'Username must be at least 3 characters long',
      'string.max': 'Username must not be more than 30 characters long',
      'string.empty': 'Username cannot be empty',
      'any.required': 'Username is required'
    }),
  password: Joi.string()
    .min(8)
    .required()
    .messages({
      'string.min': 'Password must be at least 8 characters long',
      'string.empty': 'Password cannot be empty',
      'any.required': 'Password is required'
    }),
  name: Joi.string()
    .required()
    .messages({
      'string.empty': 'Name cannot be empty',
      'any.required': 'Name is required'
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'Invalid email format',
      'string.empty': 'Email cannot be empty',
      'any.required': 'Email is required'
    }),
  phoneNo: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      'string.pattern.base': 'Phone number must be 10 digits long',
      'string.empty': 'Phone number cannot be empty',
      'any.required': 'Phone number is required'
    }),
});
