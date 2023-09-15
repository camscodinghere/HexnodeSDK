import apiRequest from "../utils/apiRequest";

type Params = {
    apiKey: string,
    portal: string,
    name: string,
    email: string,
    phoneno?: number|null,
    password?: string|null
};

/**
 * Creates a new user
 * 
 * ------
 * 
 *    apiKey - Hexnode API key
 * 
 *    portal - Portal name to use for hexnode url
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
    let { apiKey, portal, ...user } = params;
    if (!user.phoneno) {user.phoneno=null;}
    if (!user.password) {user.password=null;}
    console.log(JSON.stringify(user));
    return await apiRequest({apiKey, portal, endpoint: `users/`, params:[user], method:'post'});
}