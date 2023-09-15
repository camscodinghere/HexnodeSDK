const axios = require('axios').default;

type Params = {
    endpoint: string,
    apiKey: string,
    portal: string,
    method?: 'get' | 'post' | 'put' | 'delete',
    params?: any,
}

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


export default async function (inParams: Params) {
    const { endpoint, apiKey, method='get', params={}, portal} = inParams;
    const baseURL = `https://${portal}.hexnodemdm.com/api/v1/`;

    const requestConfig: any = {
        baseURL,
        method,
        url: endpoint,
        headers: {
            Authorization: apiKey
        }
    };

    if (method === 'get') {requestConfig.params = params;} else {requestConfig.data = params;}

    let response: any = {status:'unknown', data:{}};
    try {
        response = await axios.request(requestConfig);
    } catch (e: any) {
        if (e.response) {
            response = e.response;
        } else {
            response = {status:400, data:{error: 'No response'}};
        }
    }

    return {status:response.status, data:response.data};
}