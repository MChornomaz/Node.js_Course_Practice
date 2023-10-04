"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheckRoute = void 0;
const express_1 = __importDefault(require("express"));
const API_paths_enum_1 = require("../../enums/API-paths.enum");
const health_check_controller_1 = require("../../controllers/health-check/health-check.controller");
const router = express_1.default.Router();
exports.healthCheckRoute = router;
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
router.get(API_paths_enum_1.APIPaths.HEALTH_CHECK, health_check_controller_1.getHealthCheckResponse);
