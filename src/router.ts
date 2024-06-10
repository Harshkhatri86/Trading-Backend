import express , {Request , Response } from 'express'
import AuthRouter from './routes/AuthRouter'
import StorageRouter from './routes/StorageRoute'
import StockRouter from './routes/StockRouter'

const app = express()
const server = express.Router()

server.get('/', (req : Request, res: Response) => {
  res.send('Hello World!')
})

server.use("/v1/auth" , AuthRouter) ; 
server.use("/v1/storage" , StorageRouter); 
server.use("/v1/stock" , StockRouter) ; 


export default server