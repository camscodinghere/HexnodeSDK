"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequest_1 = __importDefault(require("../utils/apiRequest"));
/**
 * Creates a new user
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    name - The display name for the user
 *
 *    email - The unique email address for the user
 *
 *    phoneno - OPTIONAL The contact number for the user (default null)
 *
 *    password - OPTIONAL Password to set for the user (default null)
 *
 * @returns Response from the Hexnode API
 */
async function default_1(params) {
    let { apiKey, portal, ...user } = params;
    if (!user.phoneno) {
        user.phoneno = null;
    }
    if (!user.password) {
        user.password = null;
    }
    console.log(JSON.stringify(user));
    return await (0, apiRequest_1.default)({ apiKey, portal, endpoint: `users/`, params: [user], method: 'post' });
}
exports.default = default_1;
