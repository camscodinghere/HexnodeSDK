import * as _policies from '../policies';

export default class HexnodePolicies {
    private apiKey: string;
    private portal: string;

    constructor(apiKey: string, portal: string) {
        this.apiKey = apiKey;
        this.portal = portal;
    }

    /**
     * Lists all policies (default max first 100)
     * 
     * ------
     * 
     *    page - OPTIONAL For paginating data, which page to grab
     * 
     *    per_page - OPTIONAL Number of results to return per page
     * 
     * @returns Response from the Hexnode API
     */
    listAll(params: object = {}) {
        // @ts-ignore
        return _policies.listAll({apiKey:this.apiKey, portal:this.portal, ...params});
    }

    /**
     * Creates a new policy
     * 
     * ------
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
    createPolicy(params: object) {
        // @ts-ignore
        return _policies.createPolicy({apiKey:this.apiKey, portal:this.portal, ...params});
    }

    /**
     * Gets the complete details for a specific policy ID
     * 
     * ------
     * 
     *    policyId - The ID of the policy to retrieve the details of
     * 
     * @returns Response from the Hexnode API
     */
    getDetails(params: object) {
        // @ts-ignore
        return _policies.getDetails({apiKey:this.apiKey, portal:this.portal, ...params});
    }

    /**
     * Edits an existing policy
     * 
     * ------
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
    editPolicy(params: object) {
        // @ts-ignore
        return _policies.editPolicy({apiKey:this.apiKey, portal:this.portal, ...params});
    }

    /**
     * Archives a specific policy, dissociating it from all devices
     * 
     * ------
     * 
     *    policyId - ID of the policy to archive
     * 
     * @returns Response from the Hexnode API
     */
    archivePolicy(params: object) {
        // @ts-ignore
        return _policies.archivePolicy({apiKey:this.apiKey, portal:this.portal, ...params});
    }
}