type Params = {
    apiKey: string;
    portal: string;
    keyword: string;
    platform: string;
    country?: string;
};
/**
 * Searches for apps on platform specific store
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    keyword - Name of the app/keyword to search
 *
 *    platform - ios for App Store, android for Play Store
 *
 *    country - OPTIONAL ISO alpha-2 code (ex. us,ca)
 *
 * @returns Response from the Hexnode API
 */
export default function (inParams: Params): Promise<{
    status: any;
    data: any;
}>;
export {};
