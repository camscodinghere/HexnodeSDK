"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequest_1 = __importDefault(require("../utils/apiRequest"));
/**
 * Update an existing web app in the Hexnode repository
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    appId - The Hexnode ID of the app to update
 *
 *    name - Name of the app
 *
 *    app_type - Must be 'web'
 *
 *    webapp_url - URL of the web app
 *
 *    category - App category
 *
 *    icon - URL to icon or Base64 encoded icon data
 *
 * @returns Response from the Hexnode API
 */
async function default_1(params) {
    let { apiKey, portal, appId } = params;
    return await (0, apiRequest_1.default)({ apiKey, endpoint: `applications/${appId}/`, portal, method: 'put' });
}
exports.default = default_1;
