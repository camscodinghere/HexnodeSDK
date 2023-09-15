import apiRequest from "../utils/apiRequest";

type Params = {
    apiKey: string,
    portal: string,
    catalogId: string
};

/**
 * Gets details of a specific catalog
 * 
 * ------
 * 
 *    apiKey - Hexnode API key
 * 
 *    portal - Portal name to use for hexnode url
 * 
 *    catalogId - ID of the catalog to get details of
 * 
 * @returns Response from the Hexnode API
 */

export default async function (inParams: Params) {
    let { apiKey, portal, catalogId } = inParams;
    return await apiRequest({apiKey, portal, endpoint: `appcatalogues/${catalogId}/`});
}