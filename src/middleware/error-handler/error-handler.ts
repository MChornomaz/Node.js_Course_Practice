import { HttpError } from '../../errors/http-error'
import { type Request, type Response, type NextFunction } from 'express'
import { ApiErrors } from '../../enums/API-errors.enum'

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
    const serverError = new HttpError(ApiErrors.SERVER_ERROR, 500)
    res.status(500).json({ error: serverError })
    next(err)
}

export { errorHandler }
