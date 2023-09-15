"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGroup = exports.editApps = exports.updateGroup = exports.getDetails = exports.createGroup = exports.listAll = void 0;
const listAll_1 = __importDefault(require("./listAll"));
exports.listAll = listAll_1.default;
const createGroup_1 = __importDefault(require("./createGroup"));
exports.createGroup = createGroup_1.default;
const getDetails_1 = __importDefault(require("./getDetails"));
exports.getDetails = getDetails_1.default;
const updateGroup_1 = __importDefault(require("./updateGroup"));
exports.updateGroup = updateGroup_1.default;
const editApps_1 = __importDefault(require("./editApps"));
exports.editApps = editApps_1.default;
const deleteGroup_1 = __importDefault(require("./deleteGroup"));
exports.deleteGroup = deleteGroup_1.default;
