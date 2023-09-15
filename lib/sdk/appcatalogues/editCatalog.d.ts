type Params = {
    apiKey: string;
    portal: string;
    catalogId: string;
    add_apps?: number[];
    remove_apps?: number[];
    add_groups?: number[];
    remove_groups?: number[];
};
/**
 * Adds or removes apps from catalog
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    catalogId - ID of the catalog to be updated
 *
 *    add_apps - Array of app ID's to add to the catalog
 *
 *    remove_apps - Array of app ID's to remove from the catalog
 *
 *    add_groups - Array of app group ID's to add to the catalog
 *
 *    remove_groups - Array of app group ID's to remove from the catalog
 *
 * @returns Response from the Hexnode API
 */
export default function (inParams: Params): Promise<{
    status: any;
    data: any;
}>;
export {};
