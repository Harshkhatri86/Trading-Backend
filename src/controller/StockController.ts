import { Request, Response } from "express";
import { CommonErrorMessage } from "../utils/lib/error";
import { Stock } from "../models";

export const createStock = async (req : Request , res : Response) =>{
    const {stock_name , company_name , quantity , current_price} = req.body ; 
    try{
        await Stock.create({
            stock_name , company_name , quantity , current_price
        })
        res.status(201).json({message : "Stock created successfully"})
    }
    catch(error){
        res.status(500).json({message : CommonErrorMessage.internalServerError})
    }
}