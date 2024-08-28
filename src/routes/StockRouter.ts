import express from 'express';
import { validation } from '../helper';
import { stockValidation } from '../helper/StockValidation';
import { createStock } from '../controller/StockController';

const router = express.Router() ; 

router.post("/" , validation(stockValidation) , createStock)

export default router