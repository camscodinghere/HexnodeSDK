"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeApp = exports.updateWebApp = exports.getDetails = exports.addApp = exports.searchApp = exports.listAll = void 0;
const listAll_1 = __importDefault(require("./listAll"));
exports.listAll = listAll_1.default;
const searchApp_1 = __importDefault(require("./searchApp"));
exports.searchApp = searchApp_1.default;
const addApp_1 = __importDefault(require("./addApp"));
exports.addApp = addApp_1.default;
const getDetails_1 = __importDefault(require("./getDetails"));
exports.getDetails = getDetails_1.default;
const updateWebApp_1 = __importDefault(require("./updateWebApp"));
exports.updateWebApp = updateWebApp_1.default;
const removeApp_1 = __importDefault(require("./removeApp"));
exports.removeApp = removeApp_1.default;
