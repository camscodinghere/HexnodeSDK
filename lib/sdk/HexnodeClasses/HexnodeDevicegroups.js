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
const _devicegroups = __importStar(require("../devicegroups"));
class HexnodeDevicegroups {
    apiKey;
    portal;
    constructor(apiKey, portal) {
        this.apiKey = apiKey;
        this.portal = portal;
    }
    /**
     * Lists all device groups (default max first 100)
     *
     * ------
     *
     *    page - OPTIONAL For paginating data, which page to grab
     *
     *    per_page - OPTIONAL Number of results to return per page
     *
     * @returns Response from the Hexnode API
     */
    listAll(params = {}) {
        // @ts-ignore
        return _devicegroups.listAll({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Creates a new device group
     *
     * ------
     *
     *    groupname - The name of the group to create
     *
     *    description - Description for the group
     *
     *    devices - OPTIONAL Array of enrolled device ID's to add to group
     *
     * @returns Response from the Hexnode API
     */
    createGroup(params) {
        // @ts-ignore
        return _devicegroups.createGroup({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Gets details of a specific group
     *
     * ------
     *
     *    groupId - ID of the group to get details of
     *
     * @returns Response from the Hexnode API
     */
    getDetails(params) {
        // @ts-ignore
        return _devicegroups.getDetails({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Updates an existing device group
     *
     * ------
     *
     *    groupId - ID of the group to be updated
     *
     *    groupname - New group name
     *
     *    description - New description for the group
     *
     *    devices - OPTIONAL New list of devices to replace old one
     *
     * @returns Response from the Hexnode API
     */
    updateGroup(params) {
        // @ts-ignore
        return _devicegroups.updateGroup({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Adds or removes devices from group
     *
     * ------
     *
     *    groupId - ID of the group to be updated
     *
     *    add_devices - Array of device ID's to add to the group
     *
     *    remove_devices - Array of device ID's to remove from the group
     *
     * @returns Response from the Hexnode API
     */
    editDevices(params) {
        // @ts-ignore
        return _devicegroups.editDevices({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Deletes a specific group
     *
     * ------
     *
     *    groupId - ID of the group to delete
     *
     * @returns Response from the Hexnode API
     */
    deleteGroup(params) {
        // @ts-ignore
        return _devicegroups.deleteGroup({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
}
exports.default = HexnodeDevicegroups;
