"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
exports.api = express_1.default.Router();
exports.api.get('/home', controllers_1.apiV1Controller.getHome);
exports.api.get('/top100', controllers_1.apiV1Controller.getTop100);
exports.api.get('/new-release-chart', controllers_1.apiV1Controller.getNewReleaseChart);
exports.api.get('/chart-home', controllers_1.apiV1Controller.getChartHome);
exports.api.get('/artist/:name', controllers_1.apiV1Controller.getArtist);
// param {id, page, count}
exports.api.get('/list-artist-song/:id', controllers_1.apiV1Controller.getListArtistSong);
exports.api.get('/search', controllers_1.apiV1Controller.search);
exports.api.get('/detail-playlist/:id', controllers_1.apiV1Controller.getDetailPlaylist);
exports.api.get('/info-song/:id', controllers_1.apiV1Controller.getInfoSong);
exports.api.get('/song/:id', controllers_1.apiV1Controller.getSong);
exports.api.get('/lyric/:id', controllers_1.apiV1Controller.getLyric);
exports.api.get('/list-mv/id', controllers_1.apiV1Controller.getListMV);
exports.api.get('/category-mv/id', controllers_1.apiV1Controller.getCategoryMV);
exports.api.get('/mv/:id', controllers_1.apiV1Controller.getMV);
