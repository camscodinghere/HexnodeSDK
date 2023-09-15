type Params = {
    apiKey: string;
    portal: string;
    appId: string;
    name: string;
    app_type: 'web';
    webapp_url: string;
    category: string;
    icon: string;
};
/**
 * Update an existing web app in the Hexnode repository
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    appId - The Hexnode ID of the app to update
 *
 *    name - Name of the app
 *
 *    app_type - Must be 'web'
 *
 *    webapp_url - URL of the web app
 *
 *    category - App category
 *
 *    icon - URL to icon or Base64 encoded icon data
 *
 * @returns Response from the Hexnode API
 */
export default function (params: Params): Promise<{
    status: any;
    data: any;
}>;
export {};
