import apiRequest from "../utils/apiRequest";

type Params = {
    apiKey: string,
    portal: string,
    groupId: string,
    add_devices?: number[],
    remove_devices?: number[],
};

/**
 * Adds or removes devices from group
 * 
 * ------
 * 
 *    apiKey - Hexnode API key
 * 
 *    portal - Portal name to use for hexnode url
 * 
 *    groupId - ID of the group to be updated
 * 
 *    add_devices - Array of device ID's to add to the group
 * 
 *    remove_devices - Array of device ID's to remove from the group
 * 
 * @returns Response from the Hexnode API
 */

export default async function (inParams: Params) {
    let { apiKey, portal, groupId, add_devices=[], remove_devices=[] } = inParams;
    return await apiRequest({apiKey, portal, endpoint: `devicegroups/${groupId}/`, params:[{add_devices,remove_devices}], method:'post'});
}