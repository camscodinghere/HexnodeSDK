type Params = {
    apiKey: string;
    portal: string;
    appId: string;
};
/**
 * Removes app from Hexnode MDM and any devices it has been deployed on from a policy
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    appId - ID of the app to remove
 *
 * @returns Response from the Hexnode API
 */
export default function (inParams: Params): Promise<{
    status: any;
    data: any;
}>;
export {};
