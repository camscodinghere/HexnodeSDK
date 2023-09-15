"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequest_1 = __importDefault(require("../utils/apiRequest"));
/**
 * Archives a specific policy, dissociating it from all devices
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    policyId - ID of the policy to archive
 *
 * @returns Response from the Hexnode API
 */
async function default_1(inParams) {
    let { apiKey, portal, policyId } = inParams;
    return await (0, apiRequest_1.default)({ apiKey, portal, endpoint: `policy/${policyId}/`, method: 'delete' });
}
exports.default = default_1;
