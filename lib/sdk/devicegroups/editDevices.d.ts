type Params = {
    apiKey: string;
    portal: string;
    groupId: string;
    add_devices?: number[];
    remove_devices?: number[];
};
/**
 * Adds or removes devices from group
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    groupId - ID of the group to be updated
 *
 *    add_devices - Array of device ID's to add to the group
 *
 *    remove_devices - Array of device ID's to remove from the group
 *
 * @returns Response from the Hexnode API
 */
export default function (inParams: Params): Promise<{
    status: any;
    data: any;
}>;
export {};
