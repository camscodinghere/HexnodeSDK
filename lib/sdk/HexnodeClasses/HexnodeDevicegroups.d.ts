export default class HexnodeDevicegroups {
    private apiKey;
    private portal;
    constructor(apiKey: string, portal: string);
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
    listAll(params: object): Promise<{
        status: any;
        data: any;
    }>;
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
    createGroup(params: object): Promise<{
        status: any;
        data: any;
    }>;
    /**
     * Gets details of a specific group
     *
     * ------
     *
     *    groupId - ID of the group to get details of
     *
     * @returns Response from the Hexnode API
     */
    getDetails(params: object): Promise<{
        status: any;
        data: any;
    }>;
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
    updateGroup(params: object): Promise<{
        status: any;
        data: any;
    }>;
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
    editDevices(params: object): Promise<{
        status: any;
        data: any;
    }>;
    /**
     * Deletes a specific group
     *
     * ------
     *
     *    groupId - ID of the group to delete
     *
     * @returns Response from the Hexnode API
     */
    deleteGroup(params: object): Promise<{
        status: any;
        data: any;
    }>;
}
