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
const health_check_route_1 = require("./routes/health-check/health-check.route");
const post_test_route_1 = require("./routes/post-test//post-test.route");
const app = (0, express_1.default)();
// swagger
const specs = (0, swagger_jsdoc_1.default)(swaggerOptions_json_1.default);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
// Body-parser
app.use(body_parser_1.default.json());
// App
app.use(health_check_route_1.healthCheckRoute);
app.use(post_test_route_1.postTestRoute);
app.listen('3000', () => console.log('Server is running on port 3000'));
