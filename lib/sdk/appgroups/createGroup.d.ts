type Params = {
    apiKey: string;
    portal: string;
    name: string;
    description: string;
    apps?: number[];
};
/**
 * Creates a new app group
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    name - The name of the group to create
 *
 *    description - Description for the group
 *
 *    apps - OPTIONAL App IDs to add to group
 *
 * @returns Response from the Hexnode API
 */
export default function (inParams: Params): Promise<{
    status: any;
    data: any;
}>;
export {};
