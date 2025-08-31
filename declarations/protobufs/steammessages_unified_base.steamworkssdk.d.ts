export declare const protobufPackage = "";
export declare enum EProtoExecutionSite {
    k_EProtoExecutionSiteUnknown = 0,
    k_EProtoExecutionSiteSteamClient = 3,
    UNRECOGNIZED = -1
}
export declare function eProtoExecutionSiteFromJSON(object: any): EProtoExecutionSite;
export declare function eProtoExecutionSiteToJSON(object: EProtoExecutionSite): string;
