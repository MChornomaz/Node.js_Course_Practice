import { type Request, type Response } from 'express'
import { genreService } from './genre'
import { ApiErrors } from '../../enums/API-errors.enum'

const createGenreController = async (req: Request, res: Response): Promise<void> => {
    const genre = req.body.name

    try {
        const createdGenre = await genreService.create(genre)
        if (createdGenre !== null) {
            res.status(200).json({ createdGenre })
        } else {
            res.status(409).json({ error: ApiErrors.ALREADY_EXISTS })
        }
    } catch (error) {
        res.status(500).json({ error })
    }
}

const findGenreByIdController = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    console.log(req.params.id)
    if (id !== undefined) {
        try {
            const genre = await genreService.findByID(id)
            if (genre !== null) {
                res.status(200).json({ genre })
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

const findAllGenresController = async (req: Request, res: Response): Promise<void> => {
    try {
        const genres = await genreService.findAll()
        res.status(200).json({ genres })
    } catch (error) {
        res.status(500).json({ error })
    }
}

const updateGenreController = async (req: Request, res: Response): Promise<void> => {
    const { id, data } = req.body
    try {
        const genre = await genreService.update(id, data)
        if (genre !== null) {
            res.status(200).json({ genre, status: 'Success' })
        } else {
            res.status(404).json({ error: ApiErrors.NOT_FOUND })
        }
    } catch (error) {
        res.status(500).json({ error })
    }
}

const deleteGenreController = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    console.log(id)
    if (id !== undefined) {
        try {
            const genre = await genreService.delete(id)
            if (genre !== null) {
                res.status(200).json({ genre })
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

export {
    createGenreController,
    findGenreByIdController,
    findAllGenresController,
    updateGenreController,
    deleteGenreController
}
