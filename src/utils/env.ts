import { join } from "path";
import log from "./logger";
require("dotenv").config() ; 

export function getOsEnv(key: string, required = true): string {
  if(typeof process.env[key] === 'undefined' && required){
      throw new Error(`Environment variable ${key} is not set`)
  }
  return process.env[key] as string
}

export function toNumber(value: string) {
  return parseInt(value, 10);
}

export function toBool(value: string) {
  return value === "true";
}
