"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION = exports.WEB_API = exports.SECRET_KEY = exports.API_KEY = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = process.env.PORT;
exports.API_KEY = process.env.API_KEY;
exports.SECRET_KEY = process.env.SECRET_KEY;
exports.WEB_API = process.env.WEB_API;
exports.VERSION = process.env.VERSION;
