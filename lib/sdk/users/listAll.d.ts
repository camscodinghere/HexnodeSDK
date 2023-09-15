type Params = {
    apiKey: string;
    portal: string;
    order_by?: string;
    user_type?: string;
    enrollment_status?: string;
    page?: number;
    per_page?: number;
};
/**
 * Lists all users (optionally matching criteria)
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    order_by - OPTIONAL Order of results by device name: asc | desc (default asc)
 *
 *    user_type - OPTIONAL Filter by user from local or active directory
 *
 *    enrollment_status - OPTIONAL enrolled | unenrolled
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
