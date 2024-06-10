import { getOsEnv , toBool , toNumber } from "../../utils/env";

type DBType = "mysql" & string ; 

export interface IDBConfig{
    type: DBType ; 
    mysql :{
        user : string; 
        password : string ; 
        db:string ;
        host : string ; 
        port : number ;  
    }
    enableLog : boolean ; 
}


export default{
    type : getOsEnv("DB_TYPE" , false) || "mysql" , 
    mysql : {
        user : getOsEnv("DB_USER") , 
        password : getOsEnv("DB_PASS") , 
        db : getOsEnv("DB_NAME"), 
        host : getOsEnv("DB_HOST") , 
        port : toNumber(getOsEnv("DB_PORT"))
    }, 
    enableLog : toBool(getOsEnv("DB_ENABLE_LOGGING"))
} as IDBConfig