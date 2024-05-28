import jwt from "jsonwebtoken";
import { getOsEnv } from "../env";
require("dotenv").config();


const secret = getOsEnv("JWT_SECRET");

export function createJWTToken(userName : string, password : string, expiresIn = "1h") {
  return jwt.sign({ userName, password }, secret, { expiresIn });
}

export function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    throw new Error("Invalid token");
  }
}
