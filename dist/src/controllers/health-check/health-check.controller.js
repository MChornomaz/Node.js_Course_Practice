"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHealthCheckResponse = void 0;
const getHealthCheckResponse = (req, res) => {
    const responseTest = 'Server is running!';
    res.status(200).json({ data: responseTest });
};
exports.getHealthCheckResponse = getHealthCheckResponse;
