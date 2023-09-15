"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequest_1 = __importDefault(require("../utils/apiRequest"));
/**
 * Lists all policies (default max first 100)
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    page - OPTIONAL For paginating data, which page to grab
 *
 *    per_page - OPTIONAL Number of results to return per page
 *
 * @returns Response from the Hexnode API
 */
async function default_1(inParams) {
    let { apiKey, portal, ...params } = inParams;
    return await (0, apiRequest_1.default)({ apiKey, portal, endpoint: 'policy/', params });
}
exports.default = default_1;
