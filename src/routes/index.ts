import { Router } from 'express'
import { healthCheckRoute } from './health-check/health-check.route'
import { postTestRoute } from './post-test/post-test.route'
import { APIPaths } from '../enums/API-paths.enum'

const router = Router()

router.get(APIPaths.HEALTH_CHECK, healthCheckRoute)
router.post(APIPaths.POST_TEST, postTestRoute)

export default router
