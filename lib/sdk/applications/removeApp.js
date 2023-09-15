"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequest_1 = __importDefault(require("../utils/apiRequest"));
/**
 * Removes app from Hexnode MDM and any devices it has been deployed on from a policy
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    appId - ID of the app to remove
 *
 * @returns Response from the Hexnode API
 */
async function default_1(inParams) {
    let { apiKey, portal, appId } = inParams;
    return await (0, apiRequest_1.default)({ apiKey, portal, endpoint: `applications/${appId}/`, method: 'delete' });
}
exports.default = default_1;
