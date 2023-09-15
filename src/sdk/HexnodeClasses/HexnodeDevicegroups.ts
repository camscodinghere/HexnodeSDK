import * as _devicegroups from '../devicegroups';

export default class HexnodeDevicegroups {
    private apiKey: string;
    private portal: string;

    constructor(apiKey: string, portal: string) {
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
    listAll(params: object) {
        // @ts-ignore
        return _devicegroups.listAll({apiKey:this.apiKey, portal:this.portal, ...params});
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
    createGroup(params: object) {
        // @ts-ignore
        return _devicegroups.createGroup({apiKey:this.apiKey, portal:this.portal, ...params});
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
        return _devicegroups.getDetails({apiKey:this.apiKey, portal:this.portal, ...params});
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
    updateGroup(params: object) {
        // @ts-ignore
        return _devicegroups.updateGroup({apiKey:this.apiKey, portal:this.portal, ...params});
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
    editDevices(params: object) {
        // @ts-ignore
        return _devicegroups.editDevices({apiKey:this.apiKey, portal:this.portal, ...params});
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
        return _devicegroups.deleteGroup({apiKey:this.apiKey, portal:this.portal, ...params});
    }
}