"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http_error_1 = require("../../errors/http-error");
const API_errors_enum_1 = require("../../enums/API-errors.enum");
const errorHandler = (err, req, res, next) => {
    const serverError = new http_error_1.HttpError(API_errors_enum_1.ApiErrors.SERVER_ERROR, 500);
    res.status(500).json({ error: serverError });
    next(err);
};
exports.errorHandler = errorHandler;
