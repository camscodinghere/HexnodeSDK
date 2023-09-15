import HexnodeUsergroups from "./HexnodeUsergroups";
import HexnodeDevicegroups from "./HexnodeDevicegroups";
import HexnodeAppgroups from "./HexnodeAppgroups";
import HexnodeAppcatalogues from "./HexnodeAppcatalogues";

export default class HexnodeGroups {
    private apiKey: string;
    private portal: string;
    users;
    devices;
    apps;
    appcatalogues;

    constructor(apiKey: string, portal: string) {
        this.apiKey = apiKey;
        this.portal = portal;
        this.users = new HexnodeUsergroups(this.apiKey, this.portal);
        this.devices = new HexnodeDevicegroups(this.apiKey, this.portal);
        this.apps = new HexnodeAppgroups(this.apiKey, this.portal);
        this.appcatalogues = new HexnodeAppcatalogues(this.apiKey, this.portal);
    }
}