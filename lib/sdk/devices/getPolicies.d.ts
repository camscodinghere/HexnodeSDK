type Params = {
    apiKey: string;
    portal: string;
    deviceId: string;
    page?: number;
    per_page?: number;
};
/**
 * Gets all policies associated with a specific device ID (default max first 100)
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    deviceId - The ID of the device to retrieve the details of
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
