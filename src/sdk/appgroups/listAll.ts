import apiRequest from "../utils/apiRequest";

type Params = {
    apiKey: string,
    portal: string,
    order_by?: 'asc' | 'desc'
    page?: number,
    per_page?: number
};

/**
 * Lists all app groups (default max first 100)
 * 
 * ------
 * 
 *    apiKey - Hexnode API key
 * 
 *    portal - Portal name to use for hexnode url
 * 
 *    order_by - Order results by app name (default asc)
 * 
 *    page - OPTIONAL For paginating data, which page to grab
 * 
 *    per_page - OPTIONAL Number of results to return per page
 * 
 * @returns Response from the Hexnode API
 */

export default async function (inParams: Params) {
    let { apiKey, portal, ...params } = inParams;
    return await apiRequest({apiKey, portal, endpoint: 'appgroups/', params});
}