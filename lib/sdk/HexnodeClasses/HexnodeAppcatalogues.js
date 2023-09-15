"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _appcatalogues = __importStar(require("../appcatalogues"));
class HexnodeAppcatalogues {
    apiKey;
    portal;
    constructor(apiKey, portal) {
        this.apiKey = apiKey;
        this.portal = portal;
    }
    /**
     * Lists all app catalogues (default max first 100)
     *
     * ------
     *
     *    order_by - OPTIONAL Order results by app name (default asc)
     *
     *    page - OPTIONAL For paginating data, which page to grab
     *
     *    per_page - OPTIONAL Number of results to return per page
     *
     * @returns Response from the Hexnode API
     */
    listAll(params = {}) {
        // @ts-ignore
        return _appcatalogues.listAll({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Creates a new app catalog
     *
     * ------
     *
     *    catalogname - The name of the catalog to create
     *
     *    description - Description for the catalog
     *
     *    apps - OPTIONAL App IDs to add to catalog
     *
     *    app_groups - OPTIONAL App group IDs to add to catalog
     *
     * @returns Response from the Hexnode API
     */
    createCatalog(params) {
        // @ts-ignore
        return _appcatalogues.createCatalog({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Gets details of a specific catalog
     *
     * ------
     *
     *    catalogId - ID of the catalog to get details of
     *
     * @returns Response from the Hexnode API
     */
    getDetails(params) {
        // @ts-ignore
        return _appcatalogues.getDetails({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Updates an existing device catalog
     *
     * ------
     *
     *    catalogId - ID of the catalog to be updated
     *
     *    name - New catalog name
     *
     *    description - New description for the catalog
     *
     *    apps - OPTIONAL New list of app IDs to replace old one
     *
     *    app_groups - OPTIONAL New list of app group IDs to replace old one
     *
     * @returns Response from the Hexnode API
     */
    updateCatalog(params) {
        // @ts-ignore
        return _appcatalogues.updateCatalog({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Adds or removes apps from catalog
     *
     * ------
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
    editCatalog(params) {
        // @ts-ignore
        return _appcatalogues.editCatalog({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Deletes a specific catalog
     *
     * ------
     *
     *    catalogId - ID of the catalog to delete
     *
     * @returns Response from the Hexnode API
     */
    deleteCatalog(params) {
        // @ts-ignore
        return _appcatalogues.deleteCatalog({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
}
exports.default = HexnodeAppcatalogues;
