type Params = {
    apiKey: string;
    portal: string;
    catalogId: string;
    name: string;
    description: string;
    apps?: number[];
    app_groups?: number[];
};
/**
 * Updates an existing device catalog
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    catalogId - ID of the catalog to be updated
 *
 *    name - New catalog name
 *
 *    description - New description for the catalog
 *
 *    apps - OPTIONAL New list of app IDs to replace old one
 *
 *    app_groups - OPTIONAL New list of app group IDs to replace old one
 *
 * @returns Response from the Hexnode API
 */
export default function (inParams: Params): Promise<{
    status: any;
    data: any;
}>;
export {};
