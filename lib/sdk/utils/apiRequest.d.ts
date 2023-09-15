type Params = {
    endpoint: string;
    apiKey: string;
    portal: string;
    method?: 'get' | 'post' | 'put' | 'delete';
    params?: any;
};
/**
 *  endpoint - The endpoint to access
 *
 *  apiKey - The API key to access the HexnodeMDM API
 *
 *  method - OPTIONAL Http method to use for axios request 'post' or 'get', default 'get'
 *
 *  params - OPTIONAL Parameters to pass to the selected endpoint
 *
 * @returns Response from the Hexnode API
 */
export default function (inParams: Params): Promise<{
    status: any;
    data: any;
}>;
export {};
