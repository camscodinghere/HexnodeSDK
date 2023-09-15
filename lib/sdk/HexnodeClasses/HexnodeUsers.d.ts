export default class HexnodeUsers {
    private apiKey;
    private portal;
    constructor(apiKey: string, portal: string);
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
    createUser(params: object): Promise<{
        status: any;
        data: any;
    }>;
    /**
     * Deletes a specific user
     *
     * ------
     *
     *    userId - ID of the user to delete
     *
     * @returns Response from the Hexnode API
     */
    deleteUser(params: object): Promise<{
        status: any;
        data: any;
    }>;
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
    editUser(params: object): Promise<{
        status: any;
        data: any;
    }>;
    /**
     * Gets the details of a specific user
     *
     * ------
     *
     *    userId - ID of the user to retrieve details for
     *
     * @returns Response from the Hexnode API
     */
    getDetails(params: object): Promise<{
        status: any;
        data: any;
    }>;
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
    listAll(params: object): Promise<{
        status: any;
        data: any;
    }>;
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
    sendEnrollmentRequest(params: object): Promise<{
        status: any;
        data: any;
    }>;
}
