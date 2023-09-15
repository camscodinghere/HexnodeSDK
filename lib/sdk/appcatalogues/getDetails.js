"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequest_1 = __importDefault(require("../utils/apiRequest"));
/**
 * Gets details of a specific catalog
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    catalogId - ID of the catalog to get details of
 *
 * @returns Response from the Hexnode API
 */
async function default_1(inParams) {
    let { apiKey, portal, catalogId } = inParams;
    return await (0, apiRequest_1.default)({ apiKey, portal, endpoint: `appcatalogues/${catalogId}/` });
}
exports.default = default_1;
