import express from 'express'
import { Login , Register} from '../controller/AuthController';

const router = express.Router() ; 


router.post("/login" , Login ) ; 


/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       userName:
 *         type: string
 *       password:
 *         type: string
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       phoneNo:
 *         type: string
 *     required:
 *       - userName
 *       - password
 *       - name
 *       - email
 *       - phoneNo
 */

/**
 * @swagger
 * /v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Endpoint for registering a new user
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         description: User registration details
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       '201':
 *         description: Registration successful
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: integer
 *               example: 201
 *             message:
 *               type: string
 *               example: Registration Successful
 *       '409':
 *         description: Conflict - User already exists with provided email or phone number
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: integer
 *               example: 409
 *             errorMessage:
 *               type: string
 *               example: User email already exists
 *       '500':
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: integer
 *               example: 500
 *             errorMessage:
 *               type: string
 *               example: Internal Server Error
 */

router.post("/register" , Register )

export default router