type Params = {
    apiKey: string;
    portal: string;
    policyId: string;
};
/**
 * Archives a specific policy, dissociating it from all devices
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    policyId - ID of the policy to archive
 *
 * @returns Response from the Hexnode API
 */
export default function (inParams: Params): Promise<{
    status: any;
    data: any;
}>;
export {};
