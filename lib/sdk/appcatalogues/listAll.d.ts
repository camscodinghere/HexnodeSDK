type Params = {
    apiKey: string;
    portal: string;
    order_by?: 'asc' | 'desc';
    page?: number;
    per_page?: number;
};
/**
 * Lists all app catalogues (default max first 100)
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    order_by - OPTIONAL Order results by app catalog name (default asc)
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
