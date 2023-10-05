import express from 'express'
import bodyParser from 'body-parser'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerOptions from '../swaggerOptions.json'

import apiRoutes from './routes'
import { errorHandler } from './middleware/error-handler/error-handler'

const app = express()
// swagger
const specs = swaggerJsdoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

// Body-parser
app.use(bodyParser.json())

// App
app.use('/api', apiRoutes)

// Error handling middleware

app.use(errorHandler)

app.listen('3000', () => { console.log('Server is running on port 3000') })
