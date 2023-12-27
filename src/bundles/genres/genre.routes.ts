import express from 'express'
import { APIPaths } from '../../enums/API-paths.enum'
import {
    createGenreController,
    findGenreByIdController,
    findAllGenresController,
    updateGenreController,
    deleteGenreController
} from './genre.controller'
import { body, check } from 'express-validator'

const router = express.Router()

/**
 * @swagger
 * /api/genre:
 *   post:
 *     summary: Create a new genre
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: Action
 */

router.post(
    APIPaths.GENRE,
    check('name').trim().notEmpty(),
    createGenreController
)

/**
 * @swagger
 * /api/genre/{genreId}:
 *   get:
 *     summary: Get genre by ID
 *     parameters:
 *       - name: genreId
 *         in: path
 *         description: The ID of the genre
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: Action
 *       404:
 *         description: Genre not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Genre not found
 */

router.get(APIPaths.GENRE_ID, findGenreByIdController)

/**
 * @swagger
 * /api/genre:
 *   get:
 *     summary: Get all genres
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: Action
 */
router.get(APIPaths.GENRE, findAllGenresController)

/**
 * @swagger
 * /api/genre:
 *   patch:
 *     summary: Update genre by ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               data:
 *                 type: string
 *             required:
 *               - id
 *               - data
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
 *                   example: Action
 *       404:
 *         description: Genre not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Genre not found
 */

router.patch(
    APIPaths.GENRE,
    [
        body('id').notEmpty(),
        body('data').trim().notEmpty()
    ],
    updateGenreController)

/**
 * @swagger
 * /api/genre/{genreId}:
 *   delete:
 *     summary: Delete genre by ID
 *     parameters:
 *       - name: genreId
 *         in: path
 *         description: The ID of the genre
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: Action
 *       404:
 *         description: Genre not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Genre not found
 */

router.delete(APIPaths.GENRE_ID, deleteGenreController)

export { router as genreRoute }
