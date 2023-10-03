const getHealthCheckResponse = (req, res, next) => {
    const responseTest = 'Server is running!'

    res.status(200).json({ data: responseTest })
}

module.exports = getHealthCheckResponse
