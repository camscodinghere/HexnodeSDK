import apiRequest from "../utils/apiRequest";

type Params = {
    apiKey: string,
    portal: string,
    policyId: number
}

/**
 * Gets the complete details for a specific policy ID
 * 
 * ------
 * 
 *    apiKey - Hexnode API key
 * 
 *    portal - Portal name to use for hexnode url
 * 
 *    policyId - The ID of the policy to retrieve the details of
 * 
 * @returns Response from the Hexnode API
 */

export default async function (params: Params) {
    let { apiKey, portal, policyId } = params;
    return await apiRequest({apiKey, endpoint:`policy/${policyId}/`, portal});
}