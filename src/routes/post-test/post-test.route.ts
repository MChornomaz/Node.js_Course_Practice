import express from 'express'
import { APIPaths } from '../../enums/API-paths.enum'
import { getPostTestResponse } from '../../controllers/post-test/post-test.controller'

const router = express.Router()
/**
 * @swagger
 * /api/post-test:
 *   post:
 *     summary: Test POST request
 *     description: Endpoint to test POST request. Should receive a 'text' field in the request body.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 description: Text to be echoed back in the response.
 *           example:
 *             text: "Hello, World!"
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   description: Echoed text from the request.
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating missing 'text' field in the request.
 */

router.post(APIPaths.POST_TEST, getPostTestResponse)

export { router as postTestRoute }
