import * as _users from '../users';

export default class HexnodeUsers {
    private apiKey: string;
    private portal: string;

    constructor(apiKey: string, portal: string) {
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
    createUser(params: object) {
        // @ts-ignore
        return _users.createUser({apiKey:this.apiKey, portal:this.portal, ...params});
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
    deleteUser(params: object) {
        // @ts-ignore
        return _users.deleteUser({apiKey:this.apiKey, portal:this.portal, ...params});
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
    editUser(params: object) {
        // @ts-ignore
        return _users.editUser({apiKey:this.apiKey, portal:this.portal, ...params});
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
    getDetails(params: object) {
        // @ts-ignore
        return _users.getDetails({apiKey:this.apiKey, portal:this.portal, ...params});
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
    listAll(params: object) {
        // @ts-ignore
        return _users.listAll({apiKey:this.apiKey, portal:this.portal, ...params});
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
    sendEnrollmentRequest(params: object) {
        // @ts-ignore
        return _users.listAll({apiKey:this.apiKey, portal:this.portal, ...params});
    }
}