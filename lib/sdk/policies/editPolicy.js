"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequest_1 = __importDefault(require("../utils/apiRequest"));
/**
 * Edits an existing policy
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    policyId - ID of the policy to edit
 *
 *    name - Policy name
 *
 *    description - Policy description
 *
 *    ios - OPTIONAL Object, see link for details
 *
 *    https://www.hexnode.com/mobile-device-management/developers/policies/ios-policies/
 *
 *    android - OPTIONAL Object, see link for details
 *
 *    https://www.hexnode.com/mobile-device-management/developers/policies/android-policies/
 *
 *    app_management - OPTIONAL Can contain the keys: [whitelist_apps, blacklist_apps, mandatory_apps, catalogs]
 * where the value of the first 3 listed keys (if present) is of the format:
 *
 *    {
 *
 *      app: Array of app IDs to add to policy
 *      group: Array of app group IDs to add to policy
 *
 *    }
 *
 *    EXAMPLE
 *
 *      app_management : {
 *          whitelist_apps : { app : [1], group : [0, 11] }
 *      }
 *
 *    general_settings - OPTIONAL of the format
 *
 *    {
 *
 *      location_settings : {
 *          trackingdisabled : boolean
 *          interval_minutes : number (integer)
 *      }
 *
 *    }
 *
 *    policy_targets - OPTIONAL Can contain keys: [users, devices, usergroups, devicegroups]
 * where the value of each is an array of IDs
 *
 * @returns Response from the Hexnode API
 */
async function default_1(inParams) {
    let { apiKey, portal, policyId, ...params } = inParams;
    return await (0, apiRequest_1.default)({ apiKey, portal, endpoint: `policy/${policyId}/`, params, method: 'put' });
}
exports.default = default_1;
