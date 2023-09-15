type Params = {
    apiKey: string;
    portal: string;
    deviceId: string;
};
/**
 * Gets the complete details for a specific device ID
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    deviceId - The ID of the device to retrieve the details of
 *
 * @returns Response from the Hexnode API
 */
export default function (params: Params): Promise<{
    status: any;
    data: any;
}>;
export {};
