"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequest_1 = __importDefault(require("../utils/apiRequest"));
/**
 * Gets the details of a specific user
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    userId - ID of the user to retrieve details for
 *
 * @returns Response from the Hexnode API
 */
async function default_1(params) {
    let { apiKey, portal, userId } = params;
    return await (0, apiRequest_1.default)({ apiKey, portal, endpoint: `users/${userId}/` });
}
exports.default = default_1;
