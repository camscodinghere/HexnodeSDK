"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequest_1 = __importDefault(require("../utils/apiRequest"));
/**
 * Adds or removes users from group
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    groupId - ID of the group to be updated
 *
 *    add_users - Array of user ID's to add to the group
 *
 *    remove_users - Array of user ID's to remove from the group
 *
 * @returns Response from the Hexnode API
 */
async function default_1(inParams) {
    let { apiKey, portal, groupId, add_users = [], remove_users = [] } = inParams;
    return await (0, apiRequest_1.default)({ apiKey, portal, endpoint: `usergroups/${groupId}/`, params: [{ add_users, remove_users }], method: 'post' });
}
exports.default = default_1;
