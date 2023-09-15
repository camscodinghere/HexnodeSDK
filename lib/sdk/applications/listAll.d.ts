type Params = {
    apiKey: string;
    portal: string;
    order_by?: 'asc' | 'desc';
    platform?: string;
    app_type?: 'store' | 'web' | 'enterprise';
    page?: number;
    per_page?: number;
};
/**
 * Lists the names of all apps (optionally matching criteria)
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    order_by - OPTIONAL Order of results by app name: asc | desc (default asc)
 *
 *    platform - OPTIONAL Filter by OS: ios | android
 *
 *    app_type - OPTIONAL Filter by app type: store | web | enterprise
 *
 *    page - OPTIONAL For paginating data, which page to grab
 *
 *    per_page - OPTIONAL Number of results to return per page
 *
 * @returns Response from the Hexnode API
 */
export default function (inParams: Params): Promise<{
    status: any;
    data: any;
}>;
export {};
