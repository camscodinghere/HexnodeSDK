import apiRequest from "../utils/apiRequest";

type Params = {
    apiKey: string,
    portal: string,
    name: string,
    app_type: 'store' | 'web',
    platform: 'ios' | 'android',
    price?: string,
    category: string,
    vendor?: string,
    icon: string,
    average_user_rating?: string,
    content_rating?: string,
    remove_with_mdm?: boolean,
    prevent_backup?: boolean,
    identifier?: string,
    appstore_id?: number,
    version?: string,
    bundle_size?: number,
    description?: string,
    primaryGenreId?: number,
    appstore_url?: string,
    webapp_url?: string
};

/**
 * Adds an app to the application list
 * 
 * ------
 * 
 *    apiKey - Hexnode API key
 * 
 *    portal - Portal name to use for hexnode url
 * 
 *    name - Name of the app
 * 
 *    app_type - Type of app: store | web
 * 
 *    platform - ios for App Store, android for Play Store
 * 
 *    price - OPTIONAL price of the app as written (EX. $5 or Free)
 * 
 *    category - Category for the app
 * 
 *    vendor - OPTIONAL App vendor
 * 
 *    icon - URL to icon or Base64 encoded icon data
 * 
 *    average_user_rating - OPTIONAL (EX. 3 out of 5)
 * 
 *    content_rating - OPTIONAL
 * 
 *    remove_with_mdm - OPTIONAL
 * 
 *    prevent_backup - OPTIONAL
 * 
 * IF app_type is set to 'store' and platform is 'ios':
 * 
 *    identifier - App identifier
 * 
 *    appstore_id - App Store ID of the app
 * 
 *    version - The app version
 * 
 *    bundle_size - Size of the app
 * 
 *    description - App description
 * 
 *    primaryGenreId - ID of app genre
 * 
 *    appstore_url - URL for the app in App Store
 * 
 * IF app_type is set to 'store' and platform is 'android':
 * 
 *    identifier - App identifier
 * 
 *    version - The app version
 * 
 *    bundle_size - Size of the app
 * 
 * IF app_type is set to 'web':
 * 
 *    webapp_url - URL of the web app
 * 
 * @returns Response from the Hexnode API
 */

export default async function (inParams: Params) {
    let { apiKey, portal, ...params } = inParams;
    return await apiRequest({apiKey, endpoint: 'applications/', params, portal, method:'post'});
}