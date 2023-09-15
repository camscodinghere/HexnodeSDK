import apiRequest from "../utils/apiRequest";

type Params = {
    apiKey: string,
    portal: string,
    name: string,
    description: string,
    apps?: number[],
    app_groups?: number[]
};

/**
 * Creates a new app catalog
 * 
 * ------
 * 
 *    apiKey - Hexnode API key
 * 
 *    portal - Portal name to use for hexnode url
 * 
 *    name - The name of the catalog to create
 * 
 *    description - Description for the catalog
 * 
 *    apps - OPTIONAL App IDs to add to catalog
 * 
 *    app_groups - OPTIONAL App group IDs to add to catalog
 * 
 * @returns Response from the Hexnode API
 */

export default async function (inParams: Params) {
    let { apiKey, portal, ...params } = inParams;
    return await apiRequest({apiKey, portal, endpoint: 'appcatalogues/', params:[params], method:'post'});
}