import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { User } from "../models";

const Login = (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "logged in successfully" });
  } catch (error) {
    console.log(`Error in login controller`);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: `${error}` });
  }
};

const Register = async ( req : Request , res : Response) =>{
  try{
    const {userName , password , name , email , phoneNo} = req.body

    const existingUserEmail = await User.findOne({where : {email}})
    
    if(existingUserEmail){
      res.status(409).json({status : 409 , errorMessage : `User email already exist`})
      return ; 
    }

    const existingUserPhoneNo = await User.findOne({where : {phoneNo}}) ; 

    if(existingUserPhoneNo){
      res.status(409).json({status : 409 , errorMessage : `User phone number already exist`})
      return ; 
    }
    
    const hashPassword = await bcrypt.hash(password , 10); 

    await User.create({
      email, 
      phoneNo, 
      password : hashPassword , 
      userName, 
      name,
    })
    res.status(201).json({status : 201 , message : "Registration Successful"})
  }
  catch(error : any){
    res.status(500).json({ status : 500 , errorMessage : `Internal Server Error ${error}`})
  }
}

export { Login , Register };
