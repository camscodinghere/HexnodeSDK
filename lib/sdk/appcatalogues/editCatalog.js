"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequest_1 = __importDefault(require("../utils/apiRequest"));
/**
 * Adds or removes apps from catalog
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    catalogId - ID of the catalog to be updated
 *
 *    add_apps - Array of app ID's to add to the catalog
 *
 *    remove_apps - Array of app ID's to remove from the catalog
 *
 *    add_groups - Array of app group ID's to add to the catalog
 *
 *    remove_groups - Array of app group ID's to remove from the catalog
 *
 * @returns Response from the Hexnode API
 */
async function default_1(inParams) {
    let { apiKey, portal, catalogId, add_apps = [], remove_apps = [] } = inParams;
    return await (0, apiRequest_1.default)({ apiKey, portal, endpoint: `appcatalogues/${catalogId}/`, params: [{ add_apps, remove_apps }], method: 'post' });
}
exports.default = default_1;
