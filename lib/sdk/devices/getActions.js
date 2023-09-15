"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequest_1 = __importDefault(require("../utils/apiRequest"));
/**
 * Gets the status of all actions associated with a specific device ID (default max first 100)
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    deviceId - The ID of the device to retrieve the details of
 *
 *    page - OPTIONAL For paginating data, which page to grab
 *
 *    per_page - OPTIONAL Number of results to return per page
 *
 * @returns Response from the Hexnode API
 */
async function default_1(inParams) {
    let { apiKey, portal, deviceId, ...params } = inParams;
    return await (0, apiRequest_1.default)({ apiKey, endpoint: `devices/${deviceId}/action_status/`, params, portal });
}
exports.default = default_1;
