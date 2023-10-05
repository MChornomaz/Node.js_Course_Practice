const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerOptions = require('../swaggerOptions')
const errorHandler = require('./middleware/error-handler/error-handler')

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
app.use(errorHandler)

app.listen('3000', () => console.log('Server is running on port 3000'))
