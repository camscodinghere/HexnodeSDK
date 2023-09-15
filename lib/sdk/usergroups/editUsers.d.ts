type Params = {
    apiKey: string;
    portal: string;
    groupId: string;
    add_users?: number[];
    remove_users?: number[];
};
/**
 * Adds or removes users from group
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    groupId - ID of the group to be updated
 *
 *    add_users - Array of user ID's to add to the group
 *
 *    remove_users - Array of user ID's to remove from the group
 *
 * @returns Response from the Hexnode API
 */
export default function (inParams: Params): Promise<{
    status: any;
    data: any;
}>;
export {};
