import express , {Request , Response , NextFunction} from 'express'

const app = express()
const server = express.Router()

server.get('/', (req : Request, res: Response) => {
  res.send('Hello World!')
})

export default server