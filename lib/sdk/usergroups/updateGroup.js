"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequest_1 = __importDefault(require("../utils/apiRequest"));
/**
 * Updates an existing user group
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    groupId - ID of the group to be updated
 *
 *    groupname - New group name
 *
 *    description - New description for the group
 *
 *    users - OPTIONAL New list of users to replace old one
 *
 * @returns Response from the Hexnode API
 */
async function default_1(inParams) {
    let { apiKey, portal, groupId, ...params } = inParams;
    return await (0, apiRequest_1.default)({ apiKey, portal, endpoint: `usergroups/${groupId}/`, params: [params], method: 'put' });
}
exports.default = default_1;
