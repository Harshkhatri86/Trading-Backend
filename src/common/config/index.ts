import { IDBConfig } from "./db";

import { IStorageConfig } from "./storage";
import path from "path";
import { toNumber } from "../../utils/env";

export interface IConfig {
  isProduction: boolean;
  isTest: boolean;
  isDevelopment: boolean;
  rootPath: string;
  seederFolderPath: string;
  db: IDBConfig;
  FEDomain: string;
  storage: IStorageConfig;
  storageType: any;
  limitFileSize: number;
  limitFileCount: number;
}

export { StorageType } from "./storage";

export default {
  isProduction: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "test",
  isDevelopment: process.env.NODE_ENV === "development",
  db: require("./db").default,
  storage: require("./storage").default,
  rootPath : path.resolve(`${__dirname}/../../../`), 
  seederFolderPath : "db/seeder" , 
  FEDomain : process.env.FRONTEND_DOMAIN  , 
  limitFileSize : toNumber(process.env.LIMIT_FILE_SIZE || "") , 
  limitFileCount : toNumber(process.env.LIMIT_FILE_COUNT || "") 
} as IConfig;
