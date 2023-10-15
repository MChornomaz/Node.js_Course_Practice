import { HttpError } from '../../errors/http-error'
import { type Request, type Response, type NextFunction } from 'express'
import { ApiErrors } from '../../enums/API-errors.enum'

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
    if (err instanceof HttpError) {
        res.status(err.code).json({ error: err.message })
    } else {
        res.status(500).json({ error: ApiErrors.SERVER_ERROR })
    }
}

export { errorHandler }
