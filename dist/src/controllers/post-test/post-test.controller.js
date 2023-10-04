"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostTestResponse = void 0;
const http_error_1 = require("../../errors/http-error");
const API_errors_enum_1 = require("../../enums/API-errors.enum");
// made just for test purpose as an optional task #6.
const getPostTestResponse = (req, res) => {
    const requestText = req.body.text;
    if (requestText === undefined || requestText === null) {
        const error = new http_error_1.HttpError(API_errors_enum_1.ApiErrors.BAD_REQUEST, 400);
        return res.json({ error });
    }
    return res.status(200).json({ data: requestText });
};
exports.getPostTestResponse = getPostTestResponse;
