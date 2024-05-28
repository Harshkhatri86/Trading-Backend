import { Request, Response, NextFunction } from "express";
import { CommonErrorMessage } from "../utils/lib/error/Error-Message";

export const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const isSwaggerRoute = req.path.startsWith("/docs");

    if (!isSwaggerRoute) {
      res.status(404).json({ message: "Route not found" });
    }
  } catch (error) {
    res.status(500).json({
      messsage: CommonErrorMessage.internalServerError,
    });
  }
  next();
};
