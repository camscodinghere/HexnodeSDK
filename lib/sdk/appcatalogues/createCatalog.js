"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequest_1 = __importDefault(require("../utils/apiRequest"));
/**
 * Creates a new app catalog
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    name - The name of the catalog to create
 *
 *    description - Description for the catalog
 *
 *    apps - OPTIONAL App IDs to add to catalog
 *
 *    app_groups - OPTIONAL App group IDs to add to catalog
 *
 * @returns Response from the Hexnode API
 */
async function default_1(inParams) {
    let { apiKey, portal, ...params } = inParams;
    return await (0, apiRequest_1.default)({ apiKey, portal, endpoint: 'appcatalogues/', params: [params], method: 'post' });
}
exports.default = default_1;
