import * as _devices from '../devices';

export default class HexnodeDevices {
    private apiKey: string;
    private portal: string;

    constructor(apiKey: string, portal: string) {
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
    getActions(params: object) {
        // @ts-ignore
        return _devices.getActions({apiKey:this.apiKey, portal:this.portal, ...params});
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
    getApps(params: object) {
        // @ts-ignore
        return _devices.getApps({apiKey:this.apiKey, portal:this.portal, ...params});
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
    getDetails(params: object) {
        // @ts-ignore
        return _devices.getDetails({apiKey:this.apiKey, portal:this.portal, ...params});
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
    getLocations(params: object) {
        // @ts-ignore
        return _devices.getLocations({apiKey:this.apiKey, portal:this.portal, ...params});
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
    getPolicies(params: object) {
        // @ts-ignore
        return _devices.getPolicies({apiKey:this.apiKey, portal:this.portal, ...params});
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
    listAll(params: object) {
        // @ts-ignore
        return _devices.listAll({apiKey:this.apiKey, portal:this.portal, ...params});
    }
}