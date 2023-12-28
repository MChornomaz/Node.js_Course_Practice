import express, { type NextFunction, type Request, type Response } from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerOptions from '../swaggerOptions.json'

import { genreRoute } from './bundles/genres/genre'
import { movieRoute } from './bundles/movies/movie'
import { healthCheckRoute } from './bundles/health-check/health-check'
import { errorHandler } from './middleware/error-handler/error-handler'
import { validationResult } from 'express-validator'

const app = express()
// swagger
const specs = swaggerJsdoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

// Body-parser
app.use(bodyParser.json())

// App
app.use('/api', healthCheckRoute)
app.use('/api', genreRoute)
app.use('/api', movieRoute)

// Error handling middleware

app.use(errorHandler)

// validation middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    next()
})

mongoose.connect('mongodb+srv://chornomazmaksym:0Q3MWkrPlcr3f6TL@cluster0.pxceqhn.mongodb.net/movie_db?retryWrites=true&w=majority')
    .then(() => {
        app.listen('3000', () => { console.log('Server is running on port 3000') })
    })
    .catch(err => { console.log(err) })
