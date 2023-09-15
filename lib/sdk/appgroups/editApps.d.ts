type Params = {
    apiKey: string;
    portal: string;
    groupId: string;
    add_apps?: number[];
    remove_apps?: number[];
};
/**
 * Adds or removes apps from group
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    groupId - ID of the group to be updated
 *
 *    add_apps - Array of app ID's to add to the group
 *
 *    remove_apps - Array of app ID's to remove from the group
 *
 * @returns Response from the Hexnode API
 */
export default function (inParams: Params): Promise<{
    status: any;
    data: any;
}>;
export {};
