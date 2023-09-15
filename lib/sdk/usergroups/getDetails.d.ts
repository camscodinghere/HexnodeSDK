type Params = {
    apiKey: string;
    portal: string;
    groupId: string;
};
/**
 * Gets details of a specific group
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    groupId - ID of the group to get details of
 *
 * @returns Response from the Hexnode API
 */
export default function (inParams: Params): Promise<{
    status: any;
    data: any;
}>;
export {};
