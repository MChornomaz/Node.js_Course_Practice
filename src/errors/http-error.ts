class HttpError extends Error {
    code: number

    constructor (message: string, errorCode: number) {
        super()
        this.code = errorCode
        this.message = message
    }
}

export { HttpError }
