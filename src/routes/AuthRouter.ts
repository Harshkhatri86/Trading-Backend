import express from 'express'
import { Login , Register} from '../controller/AuthController';
import { validation } from '../helper';
import { userValidationSchema } from '../helper/LoginValidation';
import { registerValidationSchema } from '../helper/RegisterValidation';

const router = express.Router() ; 


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

router.post("/register" , validation(registerValidationSchema), Register )




/**
 * @swagger
 * /v1/auth/login:
 *   post:
 *     summary: Log in a user
 *     description: Endpoint for user login
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         description: User credentials for login
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             userName:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       '200':
 *         description: Logged in successfully
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: integer
 *               example: 200
 *             message:
 *               type: string
 *               example: logged in successfully
 *             data:
 *               $ref: '#/definitions/User'
 *       '401':
 *         description: Unauthorized - Invalid password
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: integer
 *               example: 401
 *             errorMessage:
 *               type: string
 *               example: Invalid password
 *       '404':
 *         description: User not found
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: integer
 *               example: 404
 *             errorMessage:
 *               type: string
 *               example: User does not exist
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

router.post("/login" , validation(userValidationSchema), Login ) ; 


export default router