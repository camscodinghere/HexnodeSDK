import apiRequest from "../utils/apiRequest";

type Params = {
    apiKey: string,
    portal: string,
    order_by?: string,
    platform?: string,
    is_active?: boolean | string,
    device_type?: string,
    page?: number,
    per_page?: number
};

/**
 * Lists the names of all devices (optionally matching criteria)
 * 
 * ------
 * 
 *    apiKey - Hexnode API key
 * 
 *    portal - Portal name to use for hexnode url
 * 
 *    order_by - OPTIONAL Order of results by device name: asc | desc (default asc)
 * 
 *    platform - OPTIONAL Filter by OS: ios | android | windows
 * 
 *    is_active - OPTIONAL Filter by active or inactive devices: True | False
 * 
 *    device_type - OPTIONAL Filter by device type: smartphone | android
 * 
 *    page - OPTIONAL For paginating data, which page to grab
 * 
 *    per_page - OPTIONAL Number of results to return per page
 * 
 * @returns Response from the Hexnode API
 */

export default async function (inParams: Params) {
    let { apiKey, portal, ...params } = inParams;
    if (params.is_active) {params.is_active='True'} else if (params.is_active !== undefined) {params.is_active='False'}
    return await apiRequest({apiKey, endpoint: 'devices/', params, portal});
}