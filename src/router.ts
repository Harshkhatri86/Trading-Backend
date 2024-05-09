import express , {Request , Response } from 'express'
import AuthRouter from './routes/AuthRouter'

const app = express()
const server = express.Router()

server.get('/', (req : Request, res: Response) => {
  res.send('Hello World!')
})

server.use("/v1/auth" , AuthRouter) ; 

export default server