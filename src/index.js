const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerOptions = require('../swaggerOptions')
const HttpError = require('./errors/http-error')
const ApiErrors = require('./constants/API-errors')

const apiRoutes = require('./routes/index')

const app = express()
// swagger
const specs = swaggerJsdoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

// Body-parser
app.use(bodyParser.json())

// App
app.use('/api', apiRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
    const serverError = new HttpError(ApiErrors.SERVER_ERROR, 500)
    res.status(500).json({ error: serverError })
    next(err)
})

app.listen('3000', () => console.log('Server is running on port 3000'))
