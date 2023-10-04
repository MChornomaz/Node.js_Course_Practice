import express from 'express'
import { APIPaths } from '../../enums/API-paths.enum'
import { getHealthCheckResponse } from '../../controllers/health-check/health-check.controller'

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
router.get(APIPaths.HEALTH_CHECK, getHealthCheckResponse)

export { router as healthCheckRoute }
