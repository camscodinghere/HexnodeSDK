"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequest_1 = __importDefault(require("../utils/apiRequest"));
/**
 * Searches for apps on platform specific store
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    keyword - Name of the app/keyword to search
 *
 *    platform - ios for App Store, android for Play Store
 *
 *    country - OPTIONAL ISO alpha-2 code (ex. us,ca)
 *
 * @returns Response from the Hexnode API
 */
async function default_1(inParams) {
    let { apiKey, portal, ...params } = inParams;
    return await (0, apiRequest_1.default)({ apiKey, endpoint: 'applications/searchapp/', params, portal });
}
exports.default = default_1;
