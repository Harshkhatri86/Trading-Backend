"use strict";

import { Sequelize , DataTypes , Model} from "sequelize";
import { sequelizeConnection } from "../common/db/init";

interface StockAttributes{
    id : string ; 
    stock_name : string ; 
    company_name : string; 
    current_price : string ; 
    quantity : string; 
    created_at?: Date;
    updated_at?: Date;
}

class Stock extends Model<StockAttributes> implements StockAttributes{
    public id!: string;
    public stock_name!: string;
    public company_name!: string;
    public current_price!: string;
    public quantity!: string;
    public created_at!: Date;
    public updated_at!: Date;
    static associate(){

    }
}

Stock.init({
    id :{
        type : DataTypes.UUID , 
        defaultValue : DataTypes.UUIDV4, 
        primaryKey : true, 
        allowNull: false
    }, 
    stock_name : {
        type : DataTypes.CHAR(15), 
        unique : true , 
        allowNull : false,
        validate :{
            isNull : false, 
            isAlphanumeric : false, 
            isAlpha : true, 
            min : 3
        } 
    }, 
    company_name :{
        type : DataTypes.STRING(255), 
        allowNull : false, 
        unique : true
    }, 
    current_price :{
        type : DataTypes.INTEGER, 
        allowNull : false, 
        validate:{
            min : 0, 
            isNonNegative(value : number){
                if(value < 0){
                    throw new Error("Current Price Cannot Be Negative")
                }
            }
        }
    },
    quantity :{
        type : DataTypes.INTEGER, 
        allowNull : false, 
        validate:{
            min : 0, 
            isNonNegative(value : number){
                if(value < 0){
                    throw new Error("Current Price Cannot Be Negative")
                }
            }
        }
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue:  DataTypes.NOW,
        onUpdate: 'CASCADE', // Automatically update the field on update
      },
},
{
    sequelize : sequelizeConnection, 
    timestamps : true,
    modelName : "Stock" ,
    tableName : "Stocks" ,
    createdAt: "created_at",
    updatedAt: "updated_at",
})


export default Stock ;