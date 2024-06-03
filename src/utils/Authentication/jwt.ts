import jwt from "jsonwebtoken";
import { getOsEnv } from "../env";
import { NextFunction, Request, Response } from "express";
import { CommonErrorMessage } from "../lib/error";
require("dotenv").config();


const secret = getOsEnv("JWT_SECRET");

export function createJWTToken(userName : string, password : string, expiresIn = "1h") {
  return jwt.sign({ userName, password }, secret, { expiresIn });
}

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  try {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
      const bearerToken = bearerHeader.split(' ')[1];
      jwt.verify(bearerToken, secret, (err, authData: any) => {
        if (err) {
          res.status(403).json({ message: "Forbidden" });
        } else {
          req.userId = authData.id; // Assuming JWT contains user ID
          next();
        }
      });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch {
    res.status(500).json(CommonErrorMessage.internalServerError);
  }
}