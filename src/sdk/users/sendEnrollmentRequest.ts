import apiRequest from "../utils/apiRequest";

type Params = {
    apiKey: string,
    portal: string,
    userId: string,
    ownership: string
};

/**
 * Sends a user an enrollment request
 * 
 * ------
 * 
 *    apiKey - Hexnode API key
 * 
 *    portal - Portal name to use for hexnode url
 * 
 *    userId - ID of the user to send to
 * 
 *    ownership - Specify the type of ownership: personal | corporate | user_choice
 * 
 * @returns Response from the Hexnode API
 */

export default async function (params: Params) {
    let { apiKey, portal, userId, ownership } = params;
    return await apiRequest({apiKey, portal, endpoint: `users/${userId}/send_request/`, params:[{ownership}], method: 'post'});
}