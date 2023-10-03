const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerOptions = require('./swaggerOptions')

const healthCheckRoute = require('./src/routes/health-check/health-check.route')
const postTestRoute = require('./src/routes/post-test/post-test.route')

const app = express()
// swagger
const specs = swaggerJsdoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

// Body-parser
app.use(bodyParser.json())

// App
app.use(healthCheckRoute)
app.use(postTestRoute)

app.listen('3000', () => console.log('Server is running on port 3000'))
