const HttpError = require('../../errors/http-error')
const ApiErrors = require('../../constants/API-errors')

module.exports = (err, req, res, next) => {
    const serverError = new HttpError(ApiErrors.SERVER_ERROR, 500)
    res.status(500).json({ error: serverError })
    next(err)
}
