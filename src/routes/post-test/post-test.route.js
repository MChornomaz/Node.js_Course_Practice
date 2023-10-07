const express = require('express')
const ApiPaths = require('../../constants/API-paths')
const getPostTestResponse = require('../../controllers/post-test/post-test.controller')

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

router.post(ApiPaths.POST_TEST, getPostTestResponse)

module.exports = router
