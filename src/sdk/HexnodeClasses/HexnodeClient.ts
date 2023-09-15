import HexnodeDevices from "./HexnodeDevices";
import HexnodeUsers from "./HexnodeUsers";
import HexnodeGroups from "./HexnodeGroups";
import HexnodePolicies from "./HexnodePolicies";
import HexnodeApps from "./HexnodeApps";

export default class HexnodeClient {
    private apiKey: string;
    private portal: string;
    devices;
    users;
    groups;
    policies;
    apps;

    constructor(apiKey: string, portal: string) {
        this.apiKey = apiKey;
        this.portal = portal;
        this.devices = new HexnodeDevices(this.apiKey, this.portal);
        this.users = new HexnodeUsers(this.apiKey, this.portal);
        this.groups = new HexnodeGroups(this.apiKey, this.portal);
        this.policies = new HexnodePolicies(this.apiKey, this.portal);
        this.apps = new HexnodeApps(this.apiKey, this.portal);
    }
}