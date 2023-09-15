"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HexnodeUsergroups_1 = __importDefault(require("./HexnodeUsergroups"));
const HexnodeDevicegroups_1 = __importDefault(require("./HexnodeDevicegroups"));
const HexnodeAppgroups_1 = __importDefault(require("./HexnodeAppgroups"));
const HexnodeAppcatalogues_1 = __importDefault(require("./HexnodeAppcatalogues"));
class HexnodeGroups {
    apiKey;
    portal;
    users;
    devices;
    apps;
    appcatalogues;
    constructor(apiKey, portal) {
        this.apiKey = apiKey;
        this.portal = portal;
        this.users = new HexnodeUsergroups_1.default(this.apiKey, this.portal);
        this.devices = new HexnodeDevicegroups_1.default(this.apiKey, this.portal);
        this.apps = new HexnodeAppgroups_1.default(this.apiKey, this.portal);
        this.appcatalogues = new HexnodeAppcatalogues_1.default(this.apiKey, this.portal);
    }
}
exports.default = HexnodeGroups;
