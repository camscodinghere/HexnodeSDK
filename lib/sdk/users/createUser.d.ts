type Params = {
    apiKey: string;
    portal: string;
    name: string;
    email: string;
    phoneno?: number | null;
    password?: string | null;
};
/**
 * Creates a new user
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    name - The display name for the user
 *
 *    email - The unique email address for the user
 *
 *    phoneno - OPTIONAL The contact number for the user (default null)
 *
 *    password - OPTIONAL Password to set for the user (default null)
 *
 * @returns Response from the Hexnode API
 */
export default function (params: Params): Promise<{
    status: any;
    data: any;
}>;
export {};
