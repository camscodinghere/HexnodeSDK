import apiRequest from "../utils/apiRequest";

type Params = {
    apiKey: string,
    portal: string,
    catalogId: string,
    add_apps?: number[],
    remove_apps?: number[],
    add_groups?: number[],
    remove_groups?: number[],
};

/**
 * Adds or removes apps from catalog
 * 
 * ------
 * 
 *    apiKey - Hexnode API key
 * 
 *    portal - Portal name to use for hexnode url
 * 
 *    catalogId - ID of the catalog to be updated
 * 
 *    add_apps - Array of app ID's to add to the catalog
 * 
 *    remove_apps - Array of app ID's to remove from the catalog
 * 
 *    add_groups - Array of app group ID's to add to the catalog
 * 
 *    remove_groups - Array of app group ID's to remove from the catalog
 * 
 * @returns Response from the Hexnode API
 */

export default async function (inParams: Params) {
    let { apiKey, portal, catalogId, add_apps=[], remove_apps=[] } = inParams;
    return await apiRequest({apiKey, portal, endpoint: `appcatalogues/${catalogId}/`, params:[{add_apps,remove_apps}], method:'post'});
}