import { Request , Response } from "express";
import Joi from "joi";

export const stockValidation = Joi.object({
    stock_name : Joi.string().required().min(3).max(15).messages({
        'string.min': 'Stock name must be at least 3 characters long',
        'string.max': 'Stock name must not be more than 15 characters long',
        'string.empty': 'Stock name cannot be empty',
        'any.required': 'Stock name is required'
      }),
      company_name : Joi.string().required().min(3).messages({
        'string.min': 'Company name must be at least 3 characters long',
        'string.empty': 'Company name cannot be empty',
        'any.required': 'Company name is required'
      }),
      current_price : Joi.number().min(1).required(),
      quantity : Joi.number().min(1).required()
})