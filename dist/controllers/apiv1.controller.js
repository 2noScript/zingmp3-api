"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiV1Controller = void 0;
const express_1 = require("express");
const utils_1 = require("../utils");
class ApiV1 {
    constructor() {
        this.getDetailPlaylist = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield utils_1.ZingMp3.getDetailPlaylist(req.params.id);
            res.send(data);
        });
        this.getSong = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield utils_1.ZingMp3.getSong(req.params.id);
            res.send(data);
        });
        this.getInfoSong = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield utils_1.ZingMp3.getInfoSong(req.params.id);
            res.send(data);
        });
        this.getLyric = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield utils_1.ZingMp3.getLyric(req.params.id);
            res.send(data);
        });
        this.getArtist = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield utils_1.ZingMp3.getArtist(req.params.name);
            res.send(data);
        });
        this.getListArtistSong = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { page, count } = req.query;
            const data = yield utils_1.ZingMp3.getListArtistSong(req.params.id, page + '', count + '');
            res.send(data);
        });
        this.search = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { key } = req.query;
            const data = yield utils_1.ZingMp3.search(key + '');
            res.send(data);
        });
        this.getChartHome = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield utils_1.ZingMp3.getChartHome();
            res.send(data);
        });
        this.getNewReleaseChart = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield utils_1.ZingMp3.getNewReleaseChart();
            res.send(data);
        });
        this.getHome = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield utils_1.ZingMp3.getHome();
            res.send(data);
        });
        this.getTop100 = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield utils_1.ZingMp3.getTop100();
            res.send(data);
        });
        this.getListMV = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { page, count } = req.query;
            const data = yield utils_1.ZingMp3.getListMV(req.params.id, page + '', express_1.query + '');
            res.send(data);
        });
        this.getCategoryMV = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield utils_1.ZingMp3.getCategoryMV(req.params.id);
            res.send(data);
        });
        this.getMV = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield utils_1.ZingMp3.getVideo(req.params.id);
            res.send(data);
        });
    }
}
exports.apiV1Controller = new ApiV1();
