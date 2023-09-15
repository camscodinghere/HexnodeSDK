import apiRequest from "../utils/apiRequest";

type Params = {
    apiKey: string,
    portal: string,
    groupId: string,
    name: string,
    description: string,
    apps?: number[]
};

/**
 * Updates an existing device group
 * 
 * ------
 * 
 *    apiKey - Hexnode API key
 * 
 *    portal - Portal name to use for hexnode url
 * 
 *    groupId - ID of the group to be updated
 * 
 *    name - New group name
 * 
 *    description - New description for the group
 * 
 *    apps - OPTIONAL New list of app IDs to replace old one
 * 
 * @returns Response from the Hexnode API
 */

export default async function (inParams: Params) {
    let { apiKey, portal, groupId, ...params } = inParams;
    return await apiRequest({apiKey, portal, endpoint: `appgroups/${groupId}/`, params:[params], method:'put'});
}