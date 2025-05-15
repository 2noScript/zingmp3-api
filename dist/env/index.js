"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION = exports.WEB_API = exports.SECRET_KEY = exports.API_KEY = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5008;
exports.API_KEY = (_b = process.env.API_KEY) !== null && _b !== void 0 ? _b : '88265e23d4284f25963e6eedac8fbfa3';
exports.SECRET_KEY = (_c = process.env.SECRET_KEY) !== null && _c !== void 0 ? _c : '2aa2d1c561e809b267f3638c4a307aab';
exports.WEB_API = process.env.WEB_API || 'https://zingmp3.vn';
exports.VERSION = process.env.VERSION || '1.8.38';
