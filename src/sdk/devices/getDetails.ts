import apiRequest from "../utils/apiRequest";

type Params = {
    apiKey: string,
    portal: string,
    deviceId: string
}

/**
 * Gets the complete details for a specific device ID
 * 
 * ------
 * 
 *    apiKey - Hexnode API key
 * 
 *    portal - Portal name to use for hexnode url
 * 
 *    deviceId - The ID of the device to retrieve the details of
 * 
 * @returns Response from the Hexnode API
 */

export default async function (params: Params) {
    let { apiKey, portal, deviceId } = params;
    return await apiRequest({apiKey, endpoint:`devices/${deviceId}/`, portal});
}