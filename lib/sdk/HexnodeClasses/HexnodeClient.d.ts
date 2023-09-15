import HexnodeDevices from "./HexnodeDevices";
import HexnodeUsers from "./HexnodeUsers";
import HexnodeGroups from "./HexnodeGroups";
import HexnodePolicies from "./HexnodePolicies";
import HexnodeApps from "./HexnodeApps";
export default class HexnodeClient {
    private apiKey;
    private portal;
    devices: HexnodeDevices;
    users: HexnodeUsers;
    groups: HexnodeGroups;
    policies: HexnodePolicies;
    apps: HexnodeApps;
    constructor(apiKey: string, portal: string);
}
