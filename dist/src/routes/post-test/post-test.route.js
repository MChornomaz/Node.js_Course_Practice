"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTestRoute = void 0;
const express_1 = __importDefault(require("express"));
const API_paths_enum_1 = require("../../enums/API-paths.enum");
const post_test_controller_1 = require("../../controllers/post-test/post-test.controller");
const router = express_1.default.Router();
exports.postTestRoute = router;
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
router.post(API_paths_enum_1.APIPaths.POST_TEST, post_test_controller_1.getPostTestResponse);
