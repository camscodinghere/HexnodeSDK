"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HexnodeDevices_1 = __importDefault(require("./HexnodeDevices"));
const HexnodeUsers_1 = __importDefault(require("./HexnodeUsers"));
const HexnodeGroups_1 = __importDefault(require("./HexnodeGroups"));
const HexnodePolicies_1 = __importDefault(require("./HexnodePolicies"));
const HexnodeApps_1 = __importDefault(require("./HexnodeApps"));
class HexnodeClient {
    apiKey;
    portal;
    devices;
    users;
    groups;
    policies;
    apps;
    constructor(apiKey, portal) {
        this.apiKey = apiKey;
        this.portal = portal;
        this.devices = new HexnodeDevices_1.default(this.apiKey, this.portal);
        this.users = new HexnodeUsers_1.default(this.apiKey, this.portal);
        this.groups = new HexnodeGroups_1.default(this.apiKey, this.portal);
        this.policies = new HexnodePolicies_1.default(this.apiKey, this.portal);
        this.apps = new HexnodeApps_1.default(this.apiKey, this.portal);
    }
}
exports.default = HexnodeClient;
