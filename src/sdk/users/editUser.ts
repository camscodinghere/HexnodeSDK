import apiRequest from "../utils/apiRequest";

type Params = {
    apiKey: string,
    portal: string,
    userId: string,
    name: string,
    email: string,
    phoneno?: number,
    password?: string
};

/**
 * Edits user details
 * 
 * ------
 * 
 *    apiKey - Hexnode API key
 * 
 *    portal - Portal name to use for hexnode url
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

export default async function (params: Params) {
    let { apiKey, portal, userId, ...user } = params;
    return await apiRequest({apiKey, portal, endpoint: `users/${userId}/`, params:user, method:'put'});
}