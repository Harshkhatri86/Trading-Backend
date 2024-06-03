import { Schema } from "joi";
import { Request, Response } from "express";

export const validation =
  (schema: Schema) => (req: Request, res: Response, next: any) => {
    try {
      // Validate request body against projectSchema
      const { error } = schema.validate(req.body);
      if (error) {
        throw new Error(error.details[0].message);
      }
      // If validation succeeds, proceed to the next middleware or route handler
      next();
    } catch (error: any) {
      res
        .status(400)
        .json({ message: "validation error", error: error.message });
    }
  };
