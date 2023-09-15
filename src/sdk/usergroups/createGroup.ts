import apiRequest from "../utils/apiRequest";

type Params = {
    apiKey: string,
    portal: string,
    groupname: string,
    description: string,
    users?: number[]
};

/**
 * Creates a new user group
 * 
 * ------
 * 
 *    apiKey - Hexnode API key
 * 
 *    portal - Portal name to use for hexnode url
 * 
 *    groupname - The name of the group to create
 * 
 *    description - Description for the group
 * 
 *    users - OPTIONAL Array of enrolled user ID's to add to group
 * 
 * @returns Response from the Hexnode API
 */

export default async function (inParams: Params) {
    let { apiKey, portal, ...params } = inParams;
    return await apiRequest({apiKey, portal, endpoint: 'usergroups/', params:[params], method:'post'});
}