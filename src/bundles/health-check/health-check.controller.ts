import { type Request, type Response } from 'express'

const getHealthCheckController = (req: Request, res: Response): void => {
    const responseTest = 'Server is running!'
    res.status(200).json({ data: responseTest })
}

export { getHealthCheckController }
