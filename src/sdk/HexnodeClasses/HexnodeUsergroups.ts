import * as _usergroups from '../usergroups';

export default class HexnodeUsergroups {
    private apiKey: string;
    private portal: string;

    constructor(apiKey: string, portal: string) {
        this.apiKey = apiKey;
        this.portal = portal;
    }

    /**
     * Lists all user groups
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
        return _usergroups.listAll({apiKey:this.apiKey, portal:this.portal, ...params});
    }

    /**
     * Creates a new user group
     * 
     * ------
     * 
     *    groupname - The name of the group to create
     * 
     *    description - Description for the group
     * 
     *    users - OPTIONAL Array of enrolled user ID's to add to group
     * 
     * @returns Response from the Hexnode API
     */
    createGroup(params: object) {
        // @ts-ignore
        return _usergroups.createGroup({apiKey:this.apiKey, portal:this.portal, ...params});
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
        return _usergroups.getDetails({apiKey:this.apiKey, portal:this.portal, ...params});
    }

    /**
     * Updates an existing user group
     * 
     * ------
     * 
     *    groupId - ID of the group to be updated
     * 
     *    groupname - New group name
     * 
     *    description - New description for the group
     * 
     *    users - OPTIONAL New list of users to replace old one
     * 
     * @returns Response from the Hexnode API
     */
    updateGroup(params: object) {
        // @ts-ignore
        return _usergroups.updateGroup({apiKey:this.apiKey, portal:this.portal, ...params});
    }

    /**
     * Adds or removes users from group
     * 
     * ------
     * 
     *    groupId - ID of the group to be updated
     * 
     *    add_users - Array of user ID's to add to the group
     * 
     *    remove_users - Array of user ID's to remove from the group
     * 
     * @returns Response from the Hexnode API
     */
    editUsers(params: object) {
        // @ts-ignore
        return _usergroups.editUsers({apiKey:this.apiKey, portal:this.portal, ...params});
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
        return _usergroups.deleteGroup({apiKey:this.apiKey, portal:this.portal, ...params});
    }
}