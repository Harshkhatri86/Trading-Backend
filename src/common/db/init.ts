import { Sequelize } from "sequelize";
import config from "../config";

export const sequelizeConnection = new Sequelize(
  config.db.mysql.db,
  config.db.mysql.user,
  config.db.mysql.password,
  {
    port: config.db.mysql.port,
    host: config.db.mysql.host,
    dialect: "mysql",
    dialectOptions: { decimalNumbers: true  },
    pool :{
        min : 0 , 
        max: 5 , 
        acquire : 60000 , 
        idle : 10000
    }, 
    logging : config.db.enableLog
  }
);


export const connectDB = async () =>{
    try{
        await sequelizeConnection.authenticate() ; 
        console.log(
            `
            ------------------------------------------------
                    Database Connected Successfully
            ------------------------------------------------
            `
        )
    }
    catch(error : any){
        throw new Error(error)
    }
}