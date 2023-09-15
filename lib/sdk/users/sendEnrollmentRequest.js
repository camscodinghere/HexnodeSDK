"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequest_1 = __importDefault(require("../utils/apiRequest"));
/**
 * Sends a user an enrollment request
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    userId - ID of the user to send to
 *
 *    ownership - Specify the type of ownership: personal | corporate | user_choice
 *
 * @returns Response from the Hexnode API
 */
async function default_1(params) {
    let { apiKey, portal, userId, ownership } = params;
    return await (0, apiRequest_1.default)({ apiKey, portal, endpoint: `users/${userId}/send_request/`, params: [{ ownership }], method: 'post' });
}
exports.default = default_1;
