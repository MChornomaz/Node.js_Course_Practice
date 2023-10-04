const healthCheckRoute = require('./health-check/health-check.route')
const postTestRoute = require('./post-test/post-test.route')
const Router = require('express')
const ApiPaths = require('../constants/API-paths')

const router = Router()

router.get(ApiPaths.HEALTH_CHECK, healthCheckRoute)
router.post(ApiPaths.POST_TEST, postTestRoute)

module.exports = router
