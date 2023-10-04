declare class HttpError extends Error {
    code: number;
    constructor(message: string, errorCode: number);
}
export { HttpError };
