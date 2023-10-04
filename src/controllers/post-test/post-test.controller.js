const HttpError = require('../../errors/http-error')
const ApiErrors = require('../../constants/API-errors')

// made just for test purpose as an optional task #6.

const getPostTestResponse = (req, res, next) => {
    console.log(req.body)
    const requestText = req.body.text

    if (!requestText) {
        const error = new HttpError(
            ApiErrors.BAD_REQUEST,
            400
        )
        return res.json({ error })
    }

    res.status(200).json({ data: requestText })
}

module.exports = getPostTestResponse
