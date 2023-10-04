"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
class HttpError extends Error {
    constructor(message, errorCode) {
        super();
        this.code = errorCode;
        this.message = message;
    }
}
exports.HttpError = HttpError;
