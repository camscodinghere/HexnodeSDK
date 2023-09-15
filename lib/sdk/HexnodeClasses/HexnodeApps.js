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
const _apps = __importStar(require("../applications"));
class HexnodeApps {
    apiKey;
    portal;
    constructor(apiKey, portal) {
        this.apiKey = apiKey;
        this.portal = portal;
    }
    /**
     * Lists the names of all apps (optionally matching criteria)
     *
     * ------
     *
     *    order_by - OPTIONAL Order of results by app name: asc | desc (default asc)
     *
     *    platform - OPTIONAL Filter by OS: ios | android
     *
     *    app_type - OPTIONAL Filter by app type: store | web | enterprise
     *
     *    page - OPTIONAL For paginating data, which page to grab
     *
     *    per_page - OPTIONAL Number of results to return per page
     *
     * @returns Response from the Hexnode API
     */
    listAll(params) {
        // @ts-ignore
        return _apps.listAll({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Searches for apps on platform specific store
     *
     * ------
     *
     *    keyword - Name of the app/keyword to search
     *
     *    platform - ios for App Store, android for Play Store
     *
     *    country - OPTIONAL ISO alpha-2 code (ex. us,ca)
     *
     * @returns Response from the Hexnode API
     */
    searchApp(params) {
        // @ts-ignore
        return _apps.searchApp({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Adds an app to the application list
     *
     * ------
     *
     *    name - Name of the app
     *
     *    app_type - Type of app: store | web
     *
     *    platform - ios for App Store, android for Play Store
     *
     *    price - OPTIONAL price of the app as written (EX. $5 or Free)
     *
     *    category - Category for the app
     *
     *    vendor - OPTIONAL App vendor
     *
     *    icon - URL to icon or Base64 encoded icon data
     *
     *    average_user_rating - OPTIONAL (EX. 3 out of 5)
     *
     *    content_rating - OPTIONAL
     *
     *    remove_with_mdm - OPTIONAL
     *
     *    prevent_backup - OPTIONAL
     *
     * IF app_type is set to 'store' and platform is 'ios':
     *
     *    identifier - App identifier
     *
     *    appstore_id - App Store ID of the app
     *
     *    version - The app version
     *
     *    bundle_size - Size of the app
     *
     *    description - App description
     *
     *    primaryGenreId - ID of app genre
     *
     *    appstore_url - URL for the app in App Store
     *
     * IF app_type is set to 'store' and platform is 'android':
     *
     *    identifier - App identifier
     *
     *    version - The app version
     *
     *    bundle_size - Size of the app
     *
     * IF app_type is set to 'web':
     *
     *    webapp_url - URL of the web app
     *
     * @returns Response from the Hexnode API
     */
    addApp(params) {
        // @ts-ignore
        return _apps.addApp({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Gets the complete details for a specific app ID
     *
     * ------
     *
     *    appId - The Hexnode ID of the app to retrieve the details of
     *
     * @returns Response from the Hexnode API
     */
    getDetails(params) {
        // @ts-ignore
        return _apps.getDetails({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Update an existing web app in the Hexnode repository
     *
     * ------
     *
     *    appId - The Hexnode ID of the app to update
     *
     *    name - Name of the app
     *
     *    app_type - Must be 'web'
     *
     *    webapp_url - URL of the web app
     *
     *    category - App category
     *
     *    icon - URL to icon or Base64 encoded icon data
     *
     * @returns Response from the Hexnode API
     */
    updateWebApp(params) {
        // @ts-ignore
        return _apps.updateWebApp({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
    /**
     * Removes app from Hexnode MDM and any devices deployed on from a policy
     *
     * ------
     *
     *    appId - ID of the app to remove
     *
     * @returns Response from the Hexnode API
     */
    removeApp(params) {
        // @ts-ignore
        return _apps.removeApp({ apiKey: this.apiKey, portal: this.portal, ...params });
    }
}
exports.default = HexnodeApps;
