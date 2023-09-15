"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequest_1 = __importDefault(require("../utils/apiRequest"));
/**
 * Lists the names of all devices (optionally matching criteria)
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    order_by - OPTIONAL Order of results by device name: asc | desc (default asc)
 *
 *    platform - OPTIONAL Filter by OS: ios | android | windows
 *
 *    is_active - OPTIONAL Filter by active or inactive devices: True | False
 *
 *    device_type - OPTIONAL Filter by device type: smartphone | android
 *
 *    page - OPTIONAL For paginating data, which page to grab
 *
 *    per_page - OPTIONAL Number of results to return per page
 *
 * @returns Response from the Hexnode API
 */
async function default_1(inParams) {
    let { apiKey, portal, ...params } = inParams;
    if (params.is_active) {
        params.is_active = 'True';
    }
    else if (params.is_active !== undefined) {
        params.is_active = 'False';
    }
    return await (0, apiRequest_1.default)({ apiKey, endpoint: 'devices/', params, portal });
}
exports.default = default_1;
