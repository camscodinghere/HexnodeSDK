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
const _devices = __importStar(require("../devices"));
class HexnodeDevices {
    apiKey;
    portal;
    constructor(apiKey, portal) {
        this.apiKey = apiKey;
        this.portal = portal;
    }
    /**
     * Gets the status of all actions associated with a specific device ID (default max first 100)
     *
     * ------
     *
     *    deviceId - The ID of the device to retrieve the details of
     *
     *    page - OPTIONAL For paginating data, which page to grab
     *
     *    per_page - OPTIONAL Number of results to return per page
     *
     * @returns Response from the Hexnode API
     */
    getActions(params) {
        // @ts-ignore
        return _devices.getActions({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Gets all applications associated with a specific device ID (default max first 100)
     *
     * ------
     *
     *    deviceId - The ID of the device to retrieve the details of
     *
     *    page - OPTIONAL For paginating data, which page to grab
     *
     *    per_page - OPTIONAL Number of results to return per page
     *
     * @returns Response from the Hexnode API
     */
    getApps(params) {
        // @ts-ignore
        return _devices.getApps({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Gets the complete details for a specific device ID
     *
     * ------
     *
     *    deviceId - The ID of the device to retrieve the details of
     *
     * @returns Response from the Hexnode API
     */
    getDetails(params) {
        // @ts-ignore
        return _devices.getDetails({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Gets all locations associated with a specific device ID (default max first 100)
     *
     * ------
     *
     *    deviceId - The ID of the device to retrieve the details of
     *
     *    page - OPTIONAL For paginating data, which page to grab
     *
     *    per_page - OPTIONAL Number of results to return per page
     *
     * @returns Response from the Hexnode API
     */
    getLocations(params) {
        // @ts-ignore
        return _devices.getLocations({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Gets all policies associated with a specific device ID (default max first 100)
     *
     * ------
     *
     *    deviceId - The ID of the device to retrieve the details of
     *
     *    page - OPTIONAL For paginating data, which page to grab
     *
     *    per_page - OPTIONAL Number of results to return per page
     *
     * @returns Response from the Hexnode API
     */
    getPolicies(params) {
        // @ts-ignore
        return _devices.getPolicies({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Lists the names of all devices (optionally matching criteria)
     *
     * ------
     *
     *    order_by - OPTIONAL Order of results by device name: asc | desc (default asc)
     *
     *    platform - OPTIONAL Filter by OS: ios | android | windows
     *
     *    is_active - OPTIONAL Filter by active or inactive devices: True | False
     *
     *    device_type - OPTIONAL Filter by device type: smartphone | android
     *
     *    page - OPTIONAL For paginating data, which page to grab
     *
     *    per_page - OPTIONAL Number of results to return per page
     *
     * @returns Response from the Hexnode API
     */
    listAll(params) {
        // @ts-ignore
        return _devices.listAll({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
}
exports.default = HexnodeDevices;
