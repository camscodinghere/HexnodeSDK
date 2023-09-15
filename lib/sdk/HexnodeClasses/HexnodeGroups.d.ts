import HexnodeUsergroups from "./HexnodeUsergroups";
import HexnodeDevicegroups from "./HexnodeDevicegroups";
import HexnodeAppgroups from "./HexnodeAppgroups";
import HexnodeAppcatalogues from "./HexnodeAppcatalogues";
export default class HexnodeGroups {
    private apiKey;
    private portal;
    users: HexnodeUsergroups;
    devices: HexnodeDevicegroups;
    apps: HexnodeAppgroups;
    appcatalogues: HexnodeAppcatalogues;
    constructor(apiKey: string, portal: string);
}
