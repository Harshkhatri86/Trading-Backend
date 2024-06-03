import express from "express";
import { uploadSingle } from "../controller/StorageController";
import { verifyToken } from "../utils/Authentication/jwt";

const router = express.Router();
/**
 * @swagger
 * tags:
 *  name: Storage
 *  description: Operations related to Storage
 */
/**
 * @swagger
 * /v1/storage/upload:
 *   post:
 *     summary: Upload files
 *     description: Endpoint to upload files - Swagger v2.0 only single upload and does not support multiple uploads - Use Postman to test multiple uploads
 *     tags:
 *       - Storage
 *     parameters:
 *       - in: header
 *         name: user-id
 *         description: User id
 *         required: true
 *         schema:
 *           type: string
 *       - in : header
 *         name: authorization
 *         description: token 
 *         required : true 
 *         type : string  
 *       - in: formData
 *         name: uploads
 *         description: uploads
 *         required: true
 *         type: file
 *     responses:
 *       '201':
 *         description: Files uploaded successfully
 *       '409':
 *         description: Conflict, files already exist
 *       '500':
 *         description: Internal server error
 */

router.post("/upload", verifyToken, uploadSingle);

export default router;
