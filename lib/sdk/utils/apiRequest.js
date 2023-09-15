"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios').default;
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
async function default_1(inParams) {
    const { endpoint, apiKey, method = 'get', params = {}, portal } = inParams;
    const baseURL = `https://${portal}.hexnodemdm.com/api/v1/`;
    const requestConfig = {
        baseURL,
        method,
        url: endpoint,
        headers: {
            Authorization: apiKey
        }
    };
    if (method === 'get') {
        requestConfig.params = params;
    }
    else {
        requestConfig.data = params;
    }
    let response = { status: 'unknown', data: {} };
    try {
        response = await axios.request(requestConfig);
    }
    catch (e) {
        if (e.response) {
            response = e.response;
        }
        else {
            response = { status: 400, data: { error: 'No response' } };
        }
    }
    return { status: response.status, data: response.data };
}
exports.default = default_1;
