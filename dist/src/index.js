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
const error_handler_1 = require("./middleware/error-handler/error-handler");
const app = (0, express_1.default)();
// swagger
const specs = (0, swagger_jsdoc_1.default)(swaggerOptions_json_1.default);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
// Body-parser
app.use(body_parser_1.default.json());
// App
app.use('/api', routes_1.default);
// Error handling middleware
app.use(error_handler_1.errorHandler);
app.listen('3000', () => { console.log('Server is running on port 3000'); });
