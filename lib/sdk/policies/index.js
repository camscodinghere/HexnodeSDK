"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.archivePolicy = exports.editPolicy = exports.getDetails = exports.createPolicy = exports.listAll = void 0;
const listAll_1 = __importDefault(require("./listAll"));
exports.listAll = listAll_1.default;
const createPolicy_1 = __importDefault(require("./createPolicy"));
exports.createPolicy = createPolicy_1.default;
const getDetails_1 = __importDefault(require("./getDetails"));
exports.getDetails = getDetails_1.default;
const editPolicy_1 = __importDefault(require("./editPolicy"));
exports.editPolicy = editPolicy_1.default;
const archivePolicy_1 = __importDefault(require("./archivePolicy"));
exports.archivePolicy = archivePolicy_1.default;
