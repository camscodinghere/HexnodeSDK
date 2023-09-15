"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequest_1 = __importDefault(require("../utils/apiRequest"));
/**
 * Creates a new device group
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    groupname - The name of the group to create
 *
 *    description - Description for the group
 *
 *    devices - OPTIONAL Array of enrolled device ID's to add to group
 *
 * @returns Response from the Hexnode API
 */
async function default_1(inParams) {
    let { apiKey, portal, ...params } = inParams;
    return await (0, apiRequest_1.default)({ apiKey, portal, endpoint: 'devicegroups/', params: [params], method: 'post' });
}
exports.default = default_1;
