type Params = {
    apiKey: string;
    portal: string;
    userId: string;
};
/**
 * Deletes a specific user
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    userId - ID of the user to delete
 *
 * @returns Response from the Hexnode API
 */
export default function (params: Params): Promise<{
    status: any;
    data: any;
}>;
export {};
