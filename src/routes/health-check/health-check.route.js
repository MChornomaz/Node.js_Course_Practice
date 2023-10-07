const express = require('express')
const ApiPaths = require('../../constants/API-paths')
const healthCheckController = require('../../controllers/health-check/health-check.controller')

const router = express.Router()

/**
 * @swagger
 * /api/health-check:
 *   get:
 *     summary: Server running test
 *     responses:
 *       200:
 *         description: Successful request. Server works properly.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   example: "Server is running!"
 */
router.get(ApiPaths.HEALTH_CHECK, healthCheckController)

module.exports = router
