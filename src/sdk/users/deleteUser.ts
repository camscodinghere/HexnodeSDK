import apiRequest from "../utils/apiRequest";

type Params = {
    apiKey: string,
    portal: string,
    userId: string
};

/**
 * Deletes a specific user
 * 
 * ------
 * 
 *    apiKey - Hexnode API key
 * 
 *    portal - Portal name to use for hexnode url
 * 
 *    userId - ID of the user to delete
 * 
 * @returns Response from the Hexnode API
 */

export default async function (params: Params) {
    let { apiKey, portal, userId } = params;
    return await apiRequest({apiKey, endpoint: `users/${userId}/`, method: 'delete', portal});
}