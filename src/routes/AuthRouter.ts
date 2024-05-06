import express from 'express'
import { LoginRouter } from '../controller/AuthController';

const router = express.Router() ; 


router.post("/login" , LoginRouter )

export default router