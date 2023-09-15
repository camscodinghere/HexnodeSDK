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
const _users = __importStar(require("../users"));
class HexnodeUsers {
    apiKey;
    portal;
    constructor(apiKey, portal) {
        this.apiKey = apiKey;
        this.portal = portal;
    }
    /**
     * Creates a new user
     *
     * ------
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
    createUser(params) {
        // @ts-ignore
        return _users.createUser({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Deletes a specific user
     *
     * ------
     *
     *    userId - ID of the user to delete
     *
     * @returns Response from the Hexnode API
     */
    deleteUser(params) {
        // @ts-ignore
        return _users.deleteUser({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Edits user details
     *
     * ------
     *
     *    userId - ID of the user to edit
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
    editUser(params) {
        // @ts-ignore
        return _users.editUser({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Gets the details of a specific user
     *
     * ------
     *
     *    userId - ID of the user to retrieve details for
     *
     * @returns Response from the Hexnode API
     */
    getDetails(params) {
        // @ts-ignore
        return _users.getDetails({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Lists all users (optionally matching criteria)
     *
     * ------
     *
     *    order_by - OPTIONAL Order of results by device name: asc | desc (default asc)
     *
     *    user_type - OPTIONAL Filter by user from local or active directory
     *
     *    enrollment_status - OPTIONAL enrolled | unenrolled
     *
     *    page - OPTIONAL For paginating data, which page to grab
     *
     *    per_page - OPTIONAL Number of results to return per page
     *
     * @returns Response from the Hexnode API
     */
    listAll(params) {
        // @ts-ignore
        return _users.listAll({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Sends a user an enrollment request
     *
     * ------
     *
     *    userId - ID of the user to send to
     *
     *    ownership - Specify the type of ownership: personal | corporate | user_choice
     *
     * @returns Response from the Hexnode API
     */
    sendEnrollmentRequest(params) {
        // @ts-ignore
        return _users.listAll({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
}
exports.default = HexnodeUsers;
