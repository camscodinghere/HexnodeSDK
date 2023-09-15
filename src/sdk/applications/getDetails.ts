import apiRequest from "../utils/apiRequest";

type Params = {
    apiKey: string,
    portal: string,
    appId: string
}

/**
 * Gets the complete details for a specific app ID
 * 
 * ------
 * 
 *    apiKey - Hexnode API key
 * 
 *    portal - Portal name to use for hexnode url
 * 
 *    appId - The Hexnode ID of the app to retrieve the details of
 * 
 * @returns Response from the Hexnode API
 */

export default async function (params: Params) {
    let { apiKey, portal, appId } = params;
    return await apiRequest({apiKey, endpoint:`applications/${appId}/`, portal});
}