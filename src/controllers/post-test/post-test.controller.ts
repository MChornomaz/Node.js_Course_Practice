import { type Request, type Response } from 'express'
import { HttpError } from '../../errors/http-error'
import { ApiErrors } from '../../enums/API-errors.enum'

// made just for test purpose as an optional task #6.

const getPostTestResponse = (req: Request, res: Response): void => {
    const requestText: string | undefined = req.body.text

    if (requestText === undefined || requestText === null) {
        throw new HttpError(
            ApiErrors.BAD_REQUEST,
            400
        )
    }

    res.status(200).json({ data: requestText })
}

export { getPostTestResponse }
