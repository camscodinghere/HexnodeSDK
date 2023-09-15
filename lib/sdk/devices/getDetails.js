"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequest_1 = __importDefault(require("../utils/apiRequest"));
/**
 * Gets the complete details for a specific device ID
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    deviceId - The ID of the device to retrieve the details of
 *
 * @returns Response from the Hexnode API
 */
async function default_1(params) {
    let { apiKey, portal, deviceId } = params;
    return await (0, apiRequest_1.default)({ apiKey, endpoint: `devices/${deviceId}/`, portal });
}
exports.default = default_1;
