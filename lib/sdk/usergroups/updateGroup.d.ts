type Params = {
    apiKey: string;
    portal: string;
    groupId: string;
    groupname: string;
    description: string;
    users?: number[];
};
/**
 * Updates an existing user group
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    groupId - ID of the group to be updated
 *
 *    groupname - New group name
 *
 *    description - New description for the group
 *
 *    users - OPTIONAL New list of users to replace old one
 *
 * @returns Response from the Hexnode API
 */
export default function (inParams: Params): Promise<{
    status: any;
    data: any;
}>;
export {};
