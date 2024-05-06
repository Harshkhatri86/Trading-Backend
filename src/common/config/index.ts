import path from "path";
import db from "../../models";
import { IDBConfig } from "./db";

export interface  IConfig{
    isProduction : boolean ; 
    isTest : boolean ; 
    isDevelopment : boolean ; 
    rootpath : string ; 
    seederFolderPath : string ; 
    db: IDBConfig ; 
}

export default{
    isProduction : process.env.NODE_ENV === "production",
    isTest : process.env.NODE_ENV === "test" , 
    isDevelopment : process.env.NODE_ENV === "development", 
    db : require('./db').default ,
    rootpath : path.resolve(`${__dirname}/../../../`), 
    seederFolderPath : "db/seeder"
}as IConfig