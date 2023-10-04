"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOptions_json_1 = __importDefault(require("../swaggerOptions.json"));
const routes_1 = __importDefault(require("./routes"));
const http_error_1 = require("./errors/http-error");
const API_errors_enum_1 = require("./enums/API-errors.enum");
const app = (0, express_1.default)();
// swagger
const specs = (0, swagger_jsdoc_1.default)(swaggerOptions_json_1.default);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
// Body-parser
app.use(body_parser_1.default.json());
// App
app.use('/api', routes_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    const serverError = new http_error_1.HttpError(API_errors_enum_1.ApiErrors.SERVER_ERROR, 500);
    res.status(500).json({ error: serverError });
    next(err);
});
app.listen('3000', () => { console.log('Server is running on port 3000'); });
