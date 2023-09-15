import apiRequest from "../utils/apiRequest";

type Params = {
    apiKey: string,
    portal: string,
    groupId: string,
    groupname: string,
    description: string,
    devices?: number[]
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
 *    groupname - New group name
 * 
 *    description - New description for the group
 * 
 *    devices - OPTIONAL New list of devices to replace old one
 * 
 * @returns Response from the Hexnode API
 */

export default async function (inParams: Params) {
    let { apiKey, portal, groupId, ...params } = inParams;
    return await apiRequest({apiKey, portal, endpoint: `devicegroups/${groupId}/`, params:[params], method:'put'});
}