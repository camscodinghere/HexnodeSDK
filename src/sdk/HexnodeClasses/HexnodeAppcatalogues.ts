import * as _appcatalogues from '../appcatalogues';

export default class HexnodeAppcatalogues {
    private apiKey: string;
    private portal: string;

    constructor(apiKey: string, portal: string) {
        this.apiKey = apiKey;
        this.portal = portal;
    }

    /**
     * Lists all app catalogues (default max first 100)
     * 
     * ------
     * 
     *    order_by - OPTIONAL Order results by app name (default asc)
     * 
     *    page - OPTIONAL For paginating data, which page to grab
     * 
     *    per_page - OPTIONAL Number of results to return per page
     * 
     * @returns Response from the Hexnode API
     */
    listAll(params: object = {}) {
        // @ts-ignore
        return _appcatalogues.listAll({apiKey:this.apiKey, portal:this.portal, ...params});
    }

    /**
     * Creates a new app catalog
     * 
     * ------
     * 
     *    catalogname - The name of the catalog to create
     * 
     *    description - Description for the catalog
     * 
     *    apps - OPTIONAL App IDs to add to catalog
     * 
     *    app_groups - OPTIONAL App group IDs to add to catalog
     * 
     * @returns Response from the Hexnode API
     */
    createCatalog(params: object) {
        // @ts-ignore
        return _appcatalogues.createCatalog({apiKey:this.apiKey, portal:this.portal, ...params});
    }

    /**
     * Gets details of a specific catalog
     * 
     * ------
     * 
     *    catalogId - ID of the catalog to get details of
     * 
     * @returns Response from the Hexnode API
     */
    getDetails(params: object) {
        // @ts-ignore
        return _appcatalogues.getDetails({apiKey:this.apiKey, portal:this.portal, ...params});
    }

    /**
     * Updates an existing device catalog
     * 
     * ------
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
    updateCatalog(params: object) {
        // @ts-ignore
        return _appcatalogues.updateCatalog({apiKey:this.apiKey, portal:this.portal, ...params});
    }

    /**
     * Adds or removes apps from catalog
     * 
     * ------
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
    editCatalog(params: object) {
        // @ts-ignore
        return _appcatalogues.editCatalog({apiKey:this.apiKey, portal:this.portal, ...params});
    }

    /**
     * Deletes a specific catalog
     * 
     * ------
     * 
     *    catalogId - ID of the catalog to delete
     * 
     * @returns Response from the Hexnode API
     */
    deleteCatalog(params: object) {
        // @ts-ignore
        return _appcatalogues.deleteCatalog({apiKey:this.apiKey, portal:this.portal, ...params});
    }
}