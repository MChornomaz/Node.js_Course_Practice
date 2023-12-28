import express from 'express'
import { APIPaths } from '../../enums/API-paths.enum'

import { body, check } from 'express-validator'
import {
    createMovieController,
    deleteMovieController,
    findAllMoviesController,
    findMovieByGenreController,
    findMovieByIdController,
    updateMovieController
} from './movie.controller'

const router = express.Router()

/**
 * @swagger
 * /api/movies:
 *   post:
 *     summary: Create a new movie
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               director:
 *                 type: string
 *               description:
 *                 type: string
 *               releaseDate:
 *                 type: string
 *                 format: date
 *               genre:
 *                 type: array
 *                 items:
 *                   type: string
 *             required:
 *               - title
 *               - director
 *               - description
 *               - releaseDate
 *               - genre
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: Action
 */

router.post(
    APIPaths.MOVIES,
    [
        check('title').trim().notEmpty().isString(),
        check('director').trim().notEmpty().isString(),
        check('description').trim().notEmpty().isString(),
        check('releaseDate').trim().notEmpty().isISO8601()
    ],
    createMovieController
)

/**
 * @swagger
 * /api/movies/{movieId}:
 *   get:
 *     summary: Get movie by ID
 *     parameters:
 *       - name: movieId
 *         in: path
 *         description: The ID of the movie
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
 *         description: Movie not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Movie not found
 */

router.get(APIPaths.MOVIES_ID, findMovieByIdController)

/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Get all movies
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
router.get(APIPaths.MOVIES, findAllMoviesController)

/**
 * @swagger
 * /api/movies:
 *   patch:
 *     summary: Update movie by ID
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
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   director:
 *                     type: string
 *                   description:
 *                     type: string
 *                   releaseDate:
 *                     type: string
 *                     format: date
 *                   genre:
 *                     type: array
 *                     items:
 *                       type: string
 *                 minProperties: 1
 *             required:
 *               - id
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: Action
 */

router.patch(
    APIPaths.MOVIES,
    [
        body('id').notEmpty(),
        body('data').isObject()
    ],
    updateMovieController
)

/**
 * @swagger
 * /api/movies/{id}:
 *   delete:
 *     summary: Delete movie by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the movie
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
 *         description: Movie not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Movie not found
 */

router.delete(APIPaths.MOVIES_ID, deleteMovieController)

/**
 * @swagger
 * /api/movies/genre/{genre}:
 *   get:
 *     summary: Get movies by genre
 *     parameters:
 *       - name: genre
 *         in: path
 *         description: Genre of the movie
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
 */

router.get(APIPaths.MOVIES_BY_GENRE, findMovieByGenreController)

export { router as movieRoute }
