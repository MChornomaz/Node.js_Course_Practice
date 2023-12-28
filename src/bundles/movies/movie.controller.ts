import { type Request, type Response } from 'express'
import { type IMovieData, movieService } from './movie'
import { ApiErrors } from '../../enums/API-errors.enum'

const createMovieController = async (req: Request, res: Response): Promise<void> => {
    const { title, director, description, releaseDate, genre } = req.body
    const movie: IMovieData = {
        title: title as string,
        director: director as string,
        description: description as string,
        releaseDate: releaseDate as Date,
        genre: genre as string[]
    }

    try {
        const createdMovie = await movieService.create(movie)
        if (createdMovie !== null) {
            res.status(200).json({ createdMovie })
        } else {
            res.status(409).json({ error: ApiErrors.ALREADY_EXISTS })
        }
    } catch (error) {
        res.status(500).json({ error })
    }
}

const findMovieByIdController = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id

    if (id !== undefined) {
        try {
            const movie = await movieService.findByID(id)
            if (movie !== null) {
                res.status(200).json({ movie })
            } else {
                res.status(404).json({ error: ApiErrors.NOT_FOUND })
            }
        } catch (error) {
            res.status(500).json({ error })
        }
    } else {
        res.status(400).json({ error: ApiErrors.BAD_REQUEST })
    }
}

const findAllMoviesController = async (req: Request, res: Response): Promise<void> => {
    try {
        const movies = await movieService.findAll()
        res.status(200).json({ movies })
    } catch (error) {
        res.status(500).json({ error })
    }
}

const updateMovieController = async (req: Request, res: Response): Promise<void> => {
    const { id, data } = req.body
    const { title, director, description, releaseDate, genres } = data

    const movie: Partial<IMovieData> = {} // Use Partial to allow undefined values

    if (title !== undefined) {
        movie.title = title as string
    }

    if (director !== undefined) {
        movie.director = director as string
    }

    if (description !== undefined) {
        movie.description = description as string
    }

    if (releaseDate !== undefined) {
        movie.releaseDate = releaseDate as Date
    }

    if (genres !== undefined) {
        movie.genre = genres as string[]
    }

    try {
        const newMovie = await movieService.update(id, movie as IMovieData)
        if (newMovie !== null) {
            res.status(200).json({ newMovie, status: 'Success' })
        } else {
            res.status(404).json({ error: ApiErrors.NOT_FOUND })
        }
    } catch (error) {
        res.status(500).json({ error })
    }
}

const deleteMovieController = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id

    if (id !== undefined) {
        try {
            const movie = await movieService.delete(id)
            if (movie !== null) {
                res.status(200).json({ movie })
            } else {
                res.status(404).json({ error: ApiErrors.NOT_FOUND })
            }
        } catch (error) {
            res.status(500).json({ error })
        }
    } else {
        res.status(400).json({ error: ApiErrors.BAD_REQUEST })
    }
}

const findMovieByGenreController = async (req: Request, res: Response): Promise<void> => {
    const genre = req.params.genre

    if (genre !== undefined) {
        try {
            const movie = await movieService.findByGenre(genre)
            res.status(200).json({ movie })
        } catch (error) {
            res.status(500).json({ error })
        }
    } else {
        res.status(400).json({ error: ApiErrors.BAD_REQUEST })
    }
}

export {
    createMovieController,
    findMovieByIdController,
    findAllMoviesController,
    updateMovieController,
    deleteMovieController,
    findMovieByGenreController
}
