"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequest_1 = __importDefault(require("../utils/apiRequest"));
/**
 * Gets the complete details for a specific policy ID
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    policyId - The ID of the policy to retrieve the details of
 *
 * @returns Response from the Hexnode API
 */
async function default_1(params) {
    let { apiKey, portal, policyId } = params;
    return await (0, apiRequest_1.default)({ apiKey, endpoint: `policy/${policyId}/`, portal });
}
exports.default = default_1;
