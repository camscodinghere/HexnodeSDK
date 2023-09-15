import * as _appgroups from '../appgroups';

export default class HexnodeAppgroups {
    private apiKey: string;
    private portal: string;

    constructor(apiKey: string, portal: string) {
        this.apiKey = apiKey;
        this.portal = portal;
    }

    /**
     * Lists all app groups (default max first 100)
     * 
     * ------
     * 
     *    order_by - Order results by app name (default asc)
     * 
     *    page - OPTIONAL For paginating data, which page to grab
     * 
     *    per_page - OPTIONAL Number of results to return per page
     * 
     * @returns Response from the Hexnode API
     */
    listAll(params: object) {
        // @ts-ignore
        return _appgroups.listAll({apiKey:this.apiKey, portal:this.portal, ...params});
    }

    /**
     * Creates a new app group
     * 
     * ------
     * 
     *    groupname - The name of the group to create
     * 
     *    description - Description for the group
     * 
     *    apps - OPTIONAL App IDs to add to group
     * 
     * @returns Response from the Hexnode API
     */
    createGroup(params: object) {
        // @ts-ignore
        return _appgroups.createGroup({apiKey:this.apiKey, portal:this.portal, ...params});
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
    getDetails(params: object) {
        // @ts-ignore
        return _appgroups.getDetails({apiKey:this.apiKey, portal:this.portal, ...params});
    }

    /**
     * Updates an existing device group
     * 
     * ------
     * 
     *    groupId - ID of the group to be updated
     * 
     *    name - New group name
     * 
     *    description - New description for the group
     * 
     *    apps - OPTIONAL New list of app IDs to replace old one
     * 
     * @returns Response from the Hexnode API
     */
    updateGroup(params: object) {
        // @ts-ignore
        return _appgroups.updateGroup({apiKey:this.apiKey, portal:this.portal, ...params});
    }

    /**
     * Adds or removes apps from group
     * 
     * ------
     * 
     *    groupId - ID of the group to be updated
     * 
     *    add_apps - Array of app ID's to add to the group
     * 
     *    remove_apps - Array of app ID's to remove from the group
     * 
     * @returns Response from the Hexnode API
     */
    editApps(params: object) {
        // @ts-ignore
        return _appgroups.editApps({apiKey:this.apiKey, portal:this.portal, ...params});
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
    deleteGroup(params: object) {
        // @ts-ignore
        return _appgroups.deleteGroup({apiKey:this.apiKey, portal:this.portal, ...params});
    }
}