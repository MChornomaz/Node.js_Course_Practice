import express from 'express'
import { APIPaths } from '../../enums/API-paths.enum'
import { getHealthCheckController } from './health-check'

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
router.get(APIPaths.HEALTH_CHECK, getHealthCheckController)

export { router as healthCheckRoute }
