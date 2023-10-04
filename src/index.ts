import express, { type Request, type Response, type NextFunction } from 'express'
import bodyParser from 'body-parser'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerOptions from '../swaggerOptions.json'

import apiRoutes from './routes'

import { HttpError } from './errors/http-error'
import { ApiErrors } from './enums/API-errors.enum'

const app = express()
// swagger
const specs = swaggerJsdoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

// Body-parser
app.use(bodyParser.json())

// App
app.use('/api', apiRoutes)

// Error handling middleware

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    const serverError = new HttpError(ApiErrors.SERVER_ERROR, 500)
    res.status(500).json({ error: serverError })
    next(err)
})

app.listen('3000', () => { console.log('Server is running on port 3000') })
