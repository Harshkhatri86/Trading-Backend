import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { User } from "../models";

const Login = async (req: Request, res: Response) => {
  try {
    const {userName , password } = req.body ; 
    const trimmedUserName = userName.trim() ; 
    const isExistingUser = await User.findOne({where :{userName : trimmedUserName}}) ;
    
    if(!isExistingUser){
      res.status(404).json({status : 404 , errorMesssage : 'User does not exist'}) ; 
      return ; 
    }

    const comparePassword = await bcrypt.compare(password , isExistingUser.password); 
    if(!comparePassword){
      res.status(401).json({ status : 401, errorMessage: "Invalid password" });
      return;
    } 

    const data = isExistingUser as any ; 
    data.password = undefined
    res.status(200).json({status : 200 , message: "logged in successfully", data });
  } catch (error) {
    res.status(500).json({ status : 500 , errorMessage : `Internal Server Error ${error}`})
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
