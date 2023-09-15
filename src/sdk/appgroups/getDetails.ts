import apiRequest from "../utils/apiRequest";

type Params = {
    apiKey: string,
    portal: string,
    groupId: string
};

/**
 * Gets details of a specific group
 * 
 * ------
 * 
 *    apiKey - Hexnode API key
 * 
 *    portal - Portal name to use for hexnode url
 * 
 *    groupId - ID of the group to get details of
 * 
 * @returns Response from the Hexnode API
 */

export default async function (inParams: Params) {
    let { apiKey, portal, groupId } = inParams;
    return await apiRequest({apiKey, portal, endpoint: `appgroups/${groupId}/`});
}