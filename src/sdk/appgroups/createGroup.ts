import apiRequest from "../utils/apiRequest";

type Params = {
    apiKey: string,
    portal: string,
    name: string,
    description: string,
    apps?: number[]
};

/**
 * Creates a new app group
 * 
 * ------
 * 
 *    apiKey - Hexnode API key
 * 
 *    portal - Portal name to use for hexnode url
 * 
 *    name - The name of the group to create
 * 
 *    description - Description for the group
 * 
 *    apps - OPTIONAL App IDs to add to group
 * 
 * @returns Response from the Hexnode API
 */

export default async function (inParams: Params) {
    let { apiKey, portal, ...params } = inParams;
    return await apiRequest({apiKey, portal, endpoint: 'appgroups/', params:[params], method:'post'});
}