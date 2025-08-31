import { CGCSystemMsg_GetAccountDetails_Response } from "./steammessages";
import { CMsgSteamLearnHMACKeys } from "./steammessages_steamlearn.steamworkssdk";
export declare const protobufPackage = "";
export declare enum ESourceEngine {
    k_ESE_Source1 = 0,
    k_ESE_Source2 = 1,
    UNRECOGNIZED = -1
}
export declare function eSourceEngineFromJSON(object: any): ESourceEngine;
export declare function eSourceEngineToJSON(object: ESourceEngine): string;
export declare enum PartnerAccountType {
    PARTNER_NONE = 0,
    PARTNER_PERFECT_WORLD = 1,
    PARTNER_INVALID = 3,
    UNRECOGNIZED = -1
}
export declare function partnerAccountTypeFromJSON(object: any): PartnerAccountType;
export declare function partnerAccountTypeToJSON(object: PartnerAccountType): string;
export declare enum GCConnectionStatus {
    GCConnectionStatus_HAVE_SESSION = 0,
    GCConnectionStatus_GC_GOING_DOWN = 1,
    GCConnectionStatus_NO_SESSION = 2,
    GCConnectionStatus_NO_SESSION_IN_LOGON_QUEUE = 3,
    GCConnectionStatus_NO_STEAM = 4,
    GCConnectionStatus_SUSPENDED = 5,
    GCConnectionStatus_STEAM_GOING_DOWN = 6,
    UNRECOGNIZED = -1
}
export declare function gCConnectionStatusFromJSON(object: any): GCConnectionStatus;
export declare function gCConnectionStatusToJSON(object: GCConnectionStatus): string;
export interface CExtraMsgBlock {
    msg_type: number;
    contents: string;
    msg_key: string;
    is_compressed: boolean;
}
export interface CMsgGCAssertJobData {
    message_type: string;
    message_data: string;
}
export interface CMsgGCConCommand {
    command: string;
}
export interface CMsgSDOAssert {
    sdo_type: number;
    requests: CMsgSDOAssert_Request[];
}
export interface CMsgSDOAssert_Request {
    key: string[];
    requesting_job: string;
}
export interface CMsgSOIDOwner {
    type: number;
    id: string;
}
export interface CMsgSOSingleObject {
    type_id: number;
    object_data: string;
    version: string;
    owner_soid: CMsgSOIDOwner | undefined;
    service_id: number;
}
export interface CMsgSOMultipleObjects {
    objects_modified: CMsgSOMultipleObjects_SingleObject[];
    version: string;
    objects_added: CMsgSOMultipleObjects_SingleObject[];
    objects_removed: CMsgSOMultipleObjects_SingleObject[];
    owner_soid: CMsgSOIDOwner | undefined;
    service_id: number;
}
export interface CMsgSOMultipleObjects_SingleObject {
    type_id: number;
    object_data: string;
}
export interface CMsgSOCacheSubscribed {
    objects: CMsgSOCacheSubscribed_SubscribedType[];
    version: string;
    owner_soid: CMsgSOIDOwner | undefined;
    service_id: number;
    service_list: number[];
    sync_version: string;
}
export interface CMsgSOCacheSubscribed_SubscribedType {
    type_id: number;
    object_data: Uint8Array[];
}
export interface CMsgSOCacheSubscribedUpToDate {
    version: string;
    owner_soid: CMsgSOIDOwner | undefined;
    service_id: number;
    service_list: number[];
    sync_version: string;
}
export interface CMsgSOCacheUnsubscribed {
    owner_soid: CMsgSOIDOwner | undefined;
}
export interface CMsgSOCacheSubscriptionCheck {
    version: string;
    owner_soid: CMsgSOIDOwner | undefined;
    service_id: number;
    service_list: number[];
    sync_version: string;
}
export interface CMsgSOCacheSubscriptionRefresh {
    owner_soid: CMsgSOIDOwner | undefined;
}
export interface CMsgSOCacheVersion {
    version: string;
}
export interface CMsgGCMultiplexMessage {
    msgtype: number;
    payload: string;
    steamids: string[];
}
export interface CMsgGCToGCSubGCStarting {
    dir_index: number;
}
export interface CGCToGCMsgMasterAck {
    dir_index: number;
    machine_name: string;
    process_name: string;
    directory: CGCToGCMsgMasterAck_Process[];
}
export interface CGCToGCMsgMasterAck_Process {
    dir_index: number;
    type_instances: number[];
}
export interface CGCToGCMsgMasterAck_Response {
    eresult: number;
}
export interface CMsgGCToGCUniverseStartup {
    is_initial_startup: boolean;
}
export interface CMsgGCToGCUniverseStartupResponse {
    eresult: number;
}
export interface CGCToGCMsgMasterStartupComplete {
    gc_info: CGCToGCMsgMasterStartupComplete_GCInfo[];
}
export interface CGCToGCMsgMasterStartupComplete_GCInfo {
    dir_index: number;
    machine_name: string;
}
export interface CGCToGCMsgRouted {
    msg_type: number;
    sender_id: string;
    net_message: string;
}
export interface CGCToGCMsgRoutedReply {
    msg_type: number;
    net_message: string;
}
export interface CMsgGCUpdateSubGCSessionInfo {
    updates: CMsgGCUpdateSubGCSessionInfo_CMsgUpdate[];
}
export interface CMsgGCUpdateSubGCSessionInfo_CMsgUpdate {
    steamid: string;
    ip: number;
    trusted: boolean;
}
export interface CMsgGCRequestSubGCSessionInfo {
    steamid: string;
}
export interface CMsgGCRequestSubGCSessionInfoResponse {
    ip: number;
    trusted: boolean;
    port: number;
    success: boolean;
}
export interface CMsgSOCacheHaveVersion {
    soid: CMsgSOIDOwner | undefined;
    version: string;
    service_id: number;
    cached_file_version: number;
}
export interface CMsgClientHello {
    version: number;
    socache_have_versions: CMsgSOCacheHaveVersion[];
    client_session_need: number;
    client_launcher: PartnerAccountType;
    secret_key: string;
    client_language: number;
    engine: ESourceEngine;
    steamdatagram_login: string;
    platform_id: number;
    game_msg: string;
    os_type: number;
    render_system: number;
    render_system_req: number;
    screen_width: number;
    screen_height: number;
    screen_refresh: number;
    render_width: number;
    render_height: number;
    swap_width: number;
    swap_height: number;
    is_steam_china: boolean;
    is_steam_china_client: boolean;
    platform_name: string;
}
export interface CMsgClientWelcome {
    version: number;
    game_data: string;
    outofdate_subscribed_caches: CMsgSOCacheSubscribed[];
    uptodate_subscribed_caches: CMsgSOCacheSubscriptionCheck[];
    location: CMsgClientWelcome_Location | undefined;
    save_game_key: string;
    gc_socache_file_version: number;
    txn_country_code: string;
    game_data2: string;
    rtime32_gc_welcome_timestamp: number;
    currency: number;
    balance: number;
    balance_url: string;
    has_accepted_china_ssa: boolean;
    is_banned_steam_china: boolean;
    additional_welcome_msgs: CExtraMsgBlock | undefined;
    steam_learn_hmac_keys: CMsgSteamLearnHMACKeys | undefined;
}
export interface CMsgClientWelcome_Location {
    latitude: number;
    longitude: number;
    country: string;
}
export interface CMsgConnectionStatus {
    status: GCConnectionStatus;
    client_session_need: number;
    queue_position: number;
    queue_size: number;
    wait_seconds: number;
    estimated_wait_seconds_remaining: number;
}
export interface CMsgGCToGCSOCacheSubscribe {
    subscriber: string;
    subscribe_to_id: string;
    sync_version: string;
    have_versions: CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions[];
    subscribe_to_type: number;
}
export interface CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions {
    service_id: number;
    version: string;
}
export interface CMsgGCToGCSOCacheUnsubscribe {
    subscriber: string;
    unsubscribe_from_id: string;
    unsubscribe_from_type: number;
}
export interface CMsgGCClientPing {
}
export interface CMsgGCToGCForwardAccountDetails {
    steamid: string;
    account_details: CGCSystemMsg_GetAccountDetails_Response | undefined;
    age_seconds: number;
}
export interface CMsgGCToGCLoadSessionSOCache {
    account_id: number;
    forward_account_details: CMsgGCToGCForwardAccountDetails | undefined;
}
export interface CMsgGCToGCLoadSessionSOCacheResponse {
}
export interface CMsgGCToGCUpdateSessionStats {
    user_sessions: number;
    server_sessions: number;
    in_logon_surge: boolean;
}
export interface CMsgGCToClientRequestDropped {
}
export interface CWorkshop_PopulateItemDescriptions_Request {
    appid: number;
    languages: CWorkshop_PopulateItemDescriptions_Request_ItemDescriptionsLanguageBlock[];
}
export interface CWorkshop_PopulateItemDescriptions_Request_SingleItemDescription {
    gameitemid: number;
    item_description: string;
}
export interface CWorkshop_PopulateItemDescriptions_Request_ItemDescriptionsLanguageBlock {
    language: string;
    descriptions: CWorkshop_PopulateItemDescriptions_Request_SingleItemDescription[];
}
export interface CWorkshop_GetContributors_Request {
    appid: number;
    gameitemid: number;
}
export interface CWorkshop_GetContributors_Response {
    contributors: string[];
}
export interface CWorkshop_SetItemPaymentRules_Request {
    appid: number;
    gameitemid: number;
    associated_workshop_files: CWorkshop_SetItemPaymentRules_Request_WorkshopItemPaymentRule[];
    partner_accounts: CWorkshop_SetItemPaymentRules_Request_PartnerItemPaymentRule[];
    validate_only: boolean;
    make_workshop_files_subscribable: boolean;
    associated_workshop_file_for_direct_payments: CWorkshop_SetItemPaymentRules_Request_WorkshopDirectPaymentRule | undefined;
}
export interface CWorkshop_SetItemPaymentRules_Request_WorkshopItemPaymentRule {
    workshop_file_id: string;
    revenue_percentage: number;
    rule_description: string;
    rule_type: number;
}
export interface CWorkshop_SetItemPaymentRules_Request_WorkshopDirectPaymentRule {
    workshop_file_id: string;
    rule_description: string;
}
export interface CWorkshop_SetItemPaymentRules_Request_PartnerItemPaymentRule {
    account_id: number;
    revenue_percentage: number;
    rule_description: string;
}
export interface CWorkshop_SetItemPaymentRules_Response {
    validation_errors: string[];
}
export interface CCommunity_ClanAnnouncementInfo {
    gid: string;
    clanid: string;
    posterid: string;
    headline: string;
    posttime: number;
    updatetime: number;
    body: string;
    commentcount: number;
    tags: string[];
    language: number;
    hidden: boolean;
    forum_topic_id: string;
}
export interface CCommunity_GetClanAnnouncements_Request {
    steamid: string;
    offset: number;
    count: number;
    maxchars: number;
    strip_html: boolean;
    required_tags: string[];
    require_no_tags: boolean;
    language_preference: number[];
    hidden_only: boolean;
    only_gid: boolean;
    rtime_oldest_date: number;
    include_hidden: boolean;
    include_partner_events: boolean;
}
export interface CCommunity_GetClanAnnouncements_Response {
    maxchars: number;
    strip_html: boolean;
    announcements: CCommunity_ClanAnnouncementInfo[];
}
export interface CBroadcast_PostGameDataFrame_Request {
    appid: number;
    steamid: string;
    broadcast_id: string;
    frame_data: string;
}
export interface CMsgSerializedSOCache {
    file_version: number;
    caches: CMsgSerializedSOCache_Cache[];
    gc_socache_file_version: number;
}
export interface CMsgSerializedSOCache_TypeCache {
    type: number;
    objects: Uint8Array[];
    service_id: number;
}
export interface CMsgSerializedSOCache_Cache {
    type: number;
    id: string;
    versions: CMsgSerializedSOCache_Cache_Version[];
    type_caches: CMsgSerializedSOCache_TypeCache[];
}
export interface CMsgSerializedSOCache_Cache_Version {
    service: number;
    version: string;
}
export interface CMsgGCToClientPollConvarRequest {
    convar_name: string;
    poll_id: number;
}
export interface CMsgGCToClientPollConvarResponse {
    poll_id: number;
    convar_value: string;
}
export interface CGCMsgCompressedMsgToClient {
    msg_id: number;
    compressed_msg: string;
}
export interface CMsgGCToGCMasterBroadcastMessage {
    users_per_second: number;
    send_to_users: boolean;
    send_to_servers: boolean;
    msg_id: number;
    msg_data: string;
}
export interface CMsgGCToGCMasterSubscribeToCache {
    soid_type: number;
    soid_id: string;
    account_ids: number[];
    steam_ids: string[];
}
export interface CMsgGCToGCMasterSubscribeToCacheResponse {
}
export interface CMsgGCToGCMasterSubscribeToCacheAsync {
    subscribe_msg: CMsgGCToGCMasterSubscribeToCache | undefined;
}
export interface CMsgGCToGCMasterUnsubscribeFromCache {
    soid_type: number;
    soid_id: string;
    account_ids: number[];
    steam_ids: string[];
}
export interface CMsgGCToGCMasterDestroyCache {
    soid_type: number;
    soid_id: string;
}
export declare const CExtraMsgBlock: {
    fromJSON(object: any): CExtraMsgBlock;
    toJSON(message: CExtraMsgBlock): unknown;
    create<I extends {
        msg_type?: number;
        contents?: string;
        msg_key?: string;
        is_compressed?: boolean;
    } & {
        msg_type?: number;
        contents?: string;
        msg_key?: string;
        is_compressed?: boolean;
    } & { [K in Exclude<keyof I, keyof CExtraMsgBlock>]: never; }>(base?: I): CExtraMsgBlock;
    fromPartial<I_1 extends {
        msg_type?: number;
        contents?: string;
        msg_key?: string;
        is_compressed?: boolean;
    } & {
        msg_type?: number;
        contents?: string;
        msg_key?: string;
        is_compressed?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CExtraMsgBlock>]: never; }>(object: I_1): CExtraMsgBlock;
};
export declare const CMsgGCAssertJobData: {
    fromJSON(object: any): CMsgGCAssertJobData;
    toJSON(message: CMsgGCAssertJobData): unknown;
    create<I extends {
        message_type?: string;
        message_data?: string;
    } & {
        message_type?: string;
        message_data?: string;
    } & { [K in Exclude<keyof I, keyof CMsgGCAssertJobData>]: never; }>(base?: I): CMsgGCAssertJobData;
    fromPartial<I_1 extends {
        message_type?: string;
        message_data?: string;
    } & {
        message_type?: string;
        message_data?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCAssertJobData>]: never; }>(object: I_1): CMsgGCAssertJobData;
};
export declare const CMsgGCConCommand: {
    fromJSON(object: any): CMsgGCConCommand;
    toJSON(message: CMsgGCConCommand): unknown;
    create<I extends {
        command?: string;
    } & {
        command?: string;
    } & { [K in Exclude<keyof I, "command">]: never; }>(base?: I): CMsgGCConCommand;
    fromPartial<I_1 extends {
        command?: string;
    } & {
        command?: string;
    } & { [K_1 in Exclude<keyof I_1, "command">]: never; }>(object: I_1): CMsgGCConCommand;
};
export declare const CMsgSDOAssert: {
    fromJSON(object: any): CMsgSDOAssert;
    toJSON(message: CMsgSDOAssert): unknown;
    create<I extends {
        sdo_type?: number;
        requests?: {
            key?: string[];
            requesting_job?: string;
        }[];
    } & {
        sdo_type?: number;
        requests?: {
            key?: string[];
            requesting_job?: string;
        }[] & ({
            key?: string[];
            requesting_job?: string;
        } & {
            key?: string[] & string[] & { [K in Exclude<keyof I["requests"][number]["key"], keyof string[]>]: never; };
            requesting_job?: string;
        } & { [K_1 in Exclude<keyof I["requests"][number], keyof CMsgSDOAssert_Request>]: never; })[] & { [K_2 in Exclude<keyof I["requests"], keyof {
            key?: string[];
            requesting_job?: string;
        }[]>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof CMsgSDOAssert>]: never; }>(base?: I): CMsgSDOAssert;
    fromPartial<I_1 extends {
        sdo_type?: number;
        requests?: {
            key?: string[];
            requesting_job?: string;
        }[];
    } & {
        sdo_type?: number;
        requests?: {
            key?: string[];
            requesting_job?: string;
        }[] & ({
            key?: string[];
            requesting_job?: string;
        } & {
            key?: string[] & string[] & { [K_4 in Exclude<keyof I_1["requests"][number]["key"], keyof string[]>]: never; };
            requesting_job?: string;
        } & { [K_5 in Exclude<keyof I_1["requests"][number], keyof CMsgSDOAssert_Request>]: never; })[] & { [K_6 in Exclude<keyof I_1["requests"], keyof {
            key?: string[];
            requesting_job?: string;
        }[]>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof CMsgSDOAssert>]: never; }>(object: I_1): CMsgSDOAssert;
};
export declare const CMsgSDOAssert_Request: {
    fromJSON(object: any): CMsgSDOAssert_Request;
    toJSON(message: CMsgSDOAssert_Request): unknown;
    create<I extends {
        key?: string[];
        requesting_job?: string;
    } & {
        key?: string[] & string[] & { [K in Exclude<keyof I["key"], keyof string[]>]: never; };
        requesting_job?: string;
    } & { [K_1 in Exclude<keyof I, keyof CMsgSDOAssert_Request>]: never; }>(base?: I): CMsgSDOAssert_Request;
    fromPartial<I_1 extends {
        key?: string[];
        requesting_job?: string;
    } & {
        key?: string[] & string[] & { [K_2 in Exclude<keyof I_1["key"], keyof string[]>]: never; };
        requesting_job?: string;
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgSDOAssert_Request>]: never; }>(object: I_1): CMsgSDOAssert_Request;
};
export declare const CMsgSOIDOwner: {
    fromJSON(object: any): CMsgSOIDOwner;
    toJSON(message: CMsgSOIDOwner): unknown;
    create<I extends {
        type?: number;
        id?: string;
    } & {
        type?: number;
        id?: string;
    } & { [K in Exclude<keyof I, keyof CMsgSOIDOwner>]: never; }>(base?: I): CMsgSOIDOwner;
    fromPartial<I_1 extends {
        type?: number;
        id?: string;
    } & {
        type?: number;
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgSOIDOwner>]: never; }>(object: I_1): CMsgSOIDOwner;
};
export declare const CMsgSOSingleObject: {
    fromJSON(object: any): CMsgSOSingleObject;
    toJSON(message: CMsgSOSingleObject): unknown;
    create<I extends {
        type_id?: number;
        object_data?: string;
        version?: string;
        owner_soid?: {
            type?: number;
            id?: string;
        };
        service_id?: number;
    } & {
        type_id?: number;
        object_data?: string;
        version?: string;
        owner_soid?: {
            type?: number;
            id?: string;
        } & {
            type?: number;
            id?: string;
        } & { [K in Exclude<keyof I["owner_soid"], keyof CMsgSOIDOwner>]: never; };
        service_id?: number;
    } & { [K_1 in Exclude<keyof I, keyof CMsgSOSingleObject>]: never; }>(base?: I): CMsgSOSingleObject;
    fromPartial<I_1 extends {
        type_id?: number;
        object_data?: string;
        version?: string;
        owner_soid?: {
            type?: number;
            id?: string;
        };
        service_id?: number;
    } & {
        type_id?: number;
        object_data?: string;
        version?: string;
        owner_soid?: {
            type?: number;
            id?: string;
        } & {
            type?: number;
            id?: string;
        } & { [K_2 in Exclude<keyof I_1["owner_soid"], keyof CMsgSOIDOwner>]: never; };
        service_id?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgSOSingleObject>]: never; }>(object: I_1): CMsgSOSingleObject;
};
export declare const CMsgSOMultipleObjects: {
    fromJSON(object: any): CMsgSOMultipleObjects;
    toJSON(message: CMsgSOMultipleObjects): unknown;
    create<I extends {
        objects_modified?: {
            type_id?: number;
            object_data?: string;
        }[];
        version?: string;
        objects_added?: {
            type_id?: number;
            object_data?: string;
        }[];
        objects_removed?: {
            type_id?: number;
            object_data?: string;
        }[];
        owner_soid?: {
            type?: number;
            id?: string;
        };
        service_id?: number;
    } & {
        objects_modified?: {
            type_id?: number;
            object_data?: string;
        }[] & ({
            type_id?: number;
            object_data?: string;
        } & {
            type_id?: number;
            object_data?: string;
        } & { [K in Exclude<keyof I["objects_modified"][number], keyof CMsgSOMultipleObjects_SingleObject>]: never; })[] & { [K_1 in Exclude<keyof I["objects_modified"], keyof {
            type_id?: number;
            object_data?: string;
        }[]>]: never; };
        version?: string;
        objects_added?: {
            type_id?: number;
            object_data?: string;
        }[] & ({
            type_id?: number;
            object_data?: string;
        } & {
            type_id?: number;
            object_data?: string;
        } & { [K_2 in Exclude<keyof I["objects_added"][number], keyof CMsgSOMultipleObjects_SingleObject>]: never; })[] & { [K_3 in Exclude<keyof I["objects_added"], keyof {
            type_id?: number;
            object_data?: string;
        }[]>]: never; };
        objects_removed?: {
            type_id?: number;
            object_data?: string;
        }[] & ({
            type_id?: number;
            object_data?: string;
        } & {
            type_id?: number;
            object_data?: string;
        } & { [K_4 in Exclude<keyof I["objects_removed"][number], keyof CMsgSOMultipleObjects_SingleObject>]: never; })[] & { [K_5 in Exclude<keyof I["objects_removed"], keyof {
            type_id?: number;
            object_data?: string;
        }[]>]: never; };
        owner_soid?: {
            type?: number;
            id?: string;
        } & {
            type?: number;
            id?: string;
        } & { [K_6 in Exclude<keyof I["owner_soid"], keyof CMsgSOIDOwner>]: never; };
        service_id?: number;
    } & { [K_7 in Exclude<keyof I, keyof CMsgSOMultipleObjects>]: never; }>(base?: I): CMsgSOMultipleObjects;
    fromPartial<I_1 extends {
        objects_modified?: {
            type_id?: number;
            object_data?: string;
        }[];
        version?: string;
        objects_added?: {
            type_id?: number;
            object_data?: string;
        }[];
        objects_removed?: {
            type_id?: number;
            object_data?: string;
        }[];
        owner_soid?: {
            type?: number;
            id?: string;
        };
        service_id?: number;
    } & {
        objects_modified?: {
            type_id?: number;
            object_data?: string;
        }[] & ({
            type_id?: number;
            object_data?: string;
        } & {
            type_id?: number;
            object_data?: string;
        } & { [K_8 in Exclude<keyof I_1["objects_modified"][number], keyof CMsgSOMultipleObjects_SingleObject>]: never; })[] & { [K_9 in Exclude<keyof I_1["objects_modified"], keyof {
            type_id?: number;
            object_data?: string;
        }[]>]: never; };
        version?: string;
        objects_added?: {
            type_id?: number;
            object_data?: string;
        }[] & ({
            type_id?: number;
            object_data?: string;
        } & {
            type_id?: number;
            object_data?: string;
        } & { [K_10 in Exclude<keyof I_1["objects_added"][number], keyof CMsgSOMultipleObjects_SingleObject>]: never; })[] & { [K_11 in Exclude<keyof I_1["objects_added"], keyof {
            type_id?: number;
            object_data?: string;
        }[]>]: never; };
        objects_removed?: {
            type_id?: number;
            object_data?: string;
        }[] & ({
            type_id?: number;
            object_data?: string;
        } & {
            type_id?: number;
            object_data?: string;
        } & { [K_12 in Exclude<keyof I_1["objects_removed"][number], keyof CMsgSOMultipleObjects_SingleObject>]: never; })[] & { [K_13 in Exclude<keyof I_1["objects_removed"], keyof {
            type_id?: number;
            object_data?: string;
        }[]>]: never; };
        owner_soid?: {
            type?: number;
            id?: string;
        } & {
            type?: number;
            id?: string;
        } & { [K_14 in Exclude<keyof I_1["owner_soid"], keyof CMsgSOIDOwner>]: never; };
        service_id?: number;
    } & { [K_15 in Exclude<keyof I_1, keyof CMsgSOMultipleObjects>]: never; }>(object: I_1): CMsgSOMultipleObjects;
};
export declare const CMsgSOMultipleObjects_SingleObject: {
    fromJSON(object: any): CMsgSOMultipleObjects_SingleObject;
    toJSON(message: CMsgSOMultipleObjects_SingleObject): unknown;
    create<I extends {
        type_id?: number;
        object_data?: string;
    } & {
        type_id?: number;
        object_data?: string;
    } & { [K in Exclude<keyof I, keyof CMsgSOMultipleObjects_SingleObject>]: never; }>(base?: I): CMsgSOMultipleObjects_SingleObject;
    fromPartial<I_1 extends {
        type_id?: number;
        object_data?: string;
    } & {
        type_id?: number;
        object_data?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgSOMultipleObjects_SingleObject>]: never; }>(object: I_1): CMsgSOMultipleObjects_SingleObject;
};
export declare const CMsgSOCacheSubscribed: {
    fromJSON(object: any): CMsgSOCacheSubscribed;
    toJSON(message: CMsgSOCacheSubscribed): unknown;
    create<I extends {
        objects?: {
            type_id?: number;
            object_data?: Uint8Array[];
        }[];
        version?: string;
        owner_soid?: {
            type?: number;
            id?: string;
        };
        service_id?: number;
        service_list?: number[];
        sync_version?: string;
    } & {
        objects?: {
            type_id?: number;
            object_data?: Uint8Array[];
        }[] & ({
            type_id?: number;
            object_data?: Uint8Array[];
        } & {
            type_id?: number;
            object_data?: Uint8Array[] & Uint8Array[] & { [K in Exclude<keyof I["objects"][number]["object_data"], keyof Uint8Array[]>]: never; };
        } & { [K_1 in Exclude<keyof I["objects"][number], keyof CMsgSOCacheSubscribed_SubscribedType>]: never; })[] & { [K_2 in Exclude<keyof I["objects"], keyof {
            type_id?: number;
            object_data?: Uint8Array[];
        }[]>]: never; };
        version?: string;
        owner_soid?: {
            type?: number;
            id?: string;
        } & {
            type?: number;
            id?: string;
        } & { [K_3 in Exclude<keyof I["owner_soid"], keyof CMsgSOIDOwner>]: never; };
        service_id?: number;
        service_list?: number[] & number[] & { [K_4 in Exclude<keyof I["service_list"], keyof number[]>]: never; };
        sync_version?: string;
    } & { [K_5 in Exclude<keyof I, keyof CMsgSOCacheSubscribed>]: never; }>(base?: I): CMsgSOCacheSubscribed;
    fromPartial<I_1 extends {
        objects?: {
            type_id?: number;
            object_data?: Uint8Array[];
        }[];
        version?: string;
        owner_soid?: {
            type?: number;
            id?: string;
        };
        service_id?: number;
        service_list?: number[];
        sync_version?: string;
    } & {
        objects?: {
            type_id?: number;
            object_data?: Uint8Array[];
        }[] & ({
            type_id?: number;
            object_data?: Uint8Array[];
        } & {
            type_id?: number;
            object_data?: Uint8Array[] & Uint8Array[] & { [K_6 in Exclude<keyof I_1["objects"][number]["object_data"], keyof Uint8Array[]>]: never; };
        } & { [K_7 in Exclude<keyof I_1["objects"][number], keyof CMsgSOCacheSubscribed_SubscribedType>]: never; })[] & { [K_8 in Exclude<keyof I_1["objects"], keyof {
            type_id?: number;
            object_data?: Uint8Array[];
        }[]>]: never; };
        version?: string;
        owner_soid?: {
            type?: number;
            id?: string;
        } & {
            type?: number;
            id?: string;
        } & { [K_9 in Exclude<keyof I_1["owner_soid"], keyof CMsgSOIDOwner>]: never; };
        service_id?: number;
        service_list?: number[] & number[] & { [K_10 in Exclude<keyof I_1["service_list"], keyof number[]>]: never; };
        sync_version?: string;
    } & { [K_11 in Exclude<keyof I_1, keyof CMsgSOCacheSubscribed>]: never; }>(object: I_1): CMsgSOCacheSubscribed;
};
export declare const CMsgSOCacheSubscribed_SubscribedType: {
    fromJSON(object: any): CMsgSOCacheSubscribed_SubscribedType;
    toJSON(message: CMsgSOCacheSubscribed_SubscribedType): unknown;
    create<I extends {
        type_id?: number;
        object_data?: Uint8Array[];
    } & {
        type_id?: number;
        object_data?: Uint8Array[] & Uint8Array[] & { [K in Exclude<keyof I["object_data"], keyof Uint8Array[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CMsgSOCacheSubscribed_SubscribedType>]: never; }>(base?: I): CMsgSOCacheSubscribed_SubscribedType;
    fromPartial<I_1 extends {
        type_id?: number;
        object_data?: Uint8Array[];
    } & {
        type_id?: number;
        object_data?: Uint8Array[] & Uint8Array[] & { [K_2 in Exclude<keyof I_1["object_data"], keyof Uint8Array[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgSOCacheSubscribed_SubscribedType>]: never; }>(object: I_1): CMsgSOCacheSubscribed_SubscribedType;
};
export declare const CMsgSOCacheSubscribedUpToDate: {
    fromJSON(object: any): CMsgSOCacheSubscribedUpToDate;
    toJSON(message: CMsgSOCacheSubscribedUpToDate): unknown;
    create<I extends {
        version?: string;
        owner_soid?: {
            type?: number;
            id?: string;
        };
        service_id?: number;
        service_list?: number[];
        sync_version?: string;
    } & {
        version?: string;
        owner_soid?: {
            type?: number;
            id?: string;
        } & {
            type?: number;
            id?: string;
        } & { [K in Exclude<keyof I["owner_soid"], keyof CMsgSOIDOwner>]: never; };
        service_id?: number;
        service_list?: number[] & number[] & { [K_1 in Exclude<keyof I["service_list"], keyof number[]>]: never; };
        sync_version?: string;
    } & { [K_2 in Exclude<keyof I, keyof CMsgSOCacheSubscribedUpToDate>]: never; }>(base?: I): CMsgSOCacheSubscribedUpToDate;
    fromPartial<I_1 extends {
        version?: string;
        owner_soid?: {
            type?: number;
            id?: string;
        };
        service_id?: number;
        service_list?: number[];
        sync_version?: string;
    } & {
        version?: string;
        owner_soid?: {
            type?: number;
            id?: string;
        } & {
            type?: number;
            id?: string;
        } & { [K_3 in Exclude<keyof I_1["owner_soid"], keyof CMsgSOIDOwner>]: never; };
        service_id?: number;
        service_list?: number[] & number[] & { [K_4 in Exclude<keyof I_1["service_list"], keyof number[]>]: never; };
        sync_version?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgSOCacheSubscribedUpToDate>]: never; }>(object: I_1): CMsgSOCacheSubscribedUpToDate;
};
export declare const CMsgSOCacheUnsubscribed: {
    fromJSON(object: any): CMsgSOCacheUnsubscribed;
    toJSON(message: CMsgSOCacheUnsubscribed): unknown;
    create<I extends {
        owner_soid?: {
            type?: number;
            id?: string;
        };
    } & {
        owner_soid?: {
            type?: number;
            id?: string;
        } & {
            type?: number;
            id?: string;
        } & { [K in Exclude<keyof I["owner_soid"], keyof CMsgSOIDOwner>]: never; };
    } & { [K_1 in Exclude<keyof I, "owner_soid">]: never; }>(base?: I): CMsgSOCacheUnsubscribed;
    fromPartial<I_1 extends {
        owner_soid?: {
            type?: number;
            id?: string;
        };
    } & {
        owner_soid?: {
            type?: number;
            id?: string;
        } & {
            type?: number;
            id?: string;
        } & { [K_2 in Exclude<keyof I_1["owner_soid"], keyof CMsgSOIDOwner>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "owner_soid">]: never; }>(object: I_1): CMsgSOCacheUnsubscribed;
};
export declare const CMsgSOCacheSubscriptionCheck: {
    fromJSON(object: any): CMsgSOCacheSubscriptionCheck;
    toJSON(message: CMsgSOCacheSubscriptionCheck): unknown;
    create<I extends {
        version?: string;
        owner_soid?: {
            type?: number;
            id?: string;
        };
        service_id?: number;
        service_list?: number[];
        sync_version?: string;
    } & {
        version?: string;
        owner_soid?: {
            type?: number;
            id?: string;
        } & {
            type?: number;
            id?: string;
        } & { [K in Exclude<keyof I["owner_soid"], keyof CMsgSOIDOwner>]: never; };
        service_id?: number;
        service_list?: number[] & number[] & { [K_1 in Exclude<keyof I["service_list"], keyof number[]>]: never; };
        sync_version?: string;
    } & { [K_2 in Exclude<keyof I, keyof CMsgSOCacheSubscriptionCheck>]: never; }>(base?: I): CMsgSOCacheSubscriptionCheck;
    fromPartial<I_1 extends {
        version?: string;
        owner_soid?: {
            type?: number;
            id?: string;
        };
        service_id?: number;
        service_list?: number[];
        sync_version?: string;
    } & {
        version?: string;
        owner_soid?: {
            type?: number;
            id?: string;
        } & {
            type?: number;
            id?: string;
        } & { [K_3 in Exclude<keyof I_1["owner_soid"], keyof CMsgSOIDOwner>]: never; };
        service_id?: number;
        service_list?: number[] & number[] & { [K_4 in Exclude<keyof I_1["service_list"], keyof number[]>]: never; };
        sync_version?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgSOCacheSubscriptionCheck>]: never; }>(object: I_1): CMsgSOCacheSubscriptionCheck;
};
export declare const CMsgSOCacheSubscriptionRefresh: {
    fromJSON(object: any): CMsgSOCacheSubscriptionRefresh;
    toJSON(message: CMsgSOCacheSubscriptionRefresh): unknown;
    create<I extends {
        owner_soid?: {
            type?: number;
            id?: string;
        };
    } & {
        owner_soid?: {
            type?: number;
            id?: string;
        } & {
            type?: number;
            id?: string;
        } & { [K in Exclude<keyof I["owner_soid"], keyof CMsgSOIDOwner>]: never; };
    } & { [K_1 in Exclude<keyof I, "owner_soid">]: never; }>(base?: I): CMsgSOCacheSubscriptionRefresh;
    fromPartial<I_1 extends {
        owner_soid?: {
            type?: number;
            id?: string;
        };
    } & {
        owner_soid?: {
            type?: number;
            id?: string;
        } & {
            type?: number;
            id?: string;
        } & { [K_2 in Exclude<keyof I_1["owner_soid"], keyof CMsgSOIDOwner>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "owner_soid">]: never; }>(object: I_1): CMsgSOCacheSubscriptionRefresh;
};
export declare const CMsgSOCacheVersion: {
    fromJSON(object: any): CMsgSOCacheVersion;
    toJSON(message: CMsgSOCacheVersion): unknown;
    create<I extends {
        version?: string;
    } & {
        version?: string;
    } & { [K in Exclude<keyof I, "version">]: never; }>(base?: I): CMsgSOCacheVersion;
    fromPartial<I_1 extends {
        version?: string;
    } & {
        version?: string;
    } & { [K_1 in Exclude<keyof I_1, "version">]: never; }>(object: I_1): CMsgSOCacheVersion;
};
export declare const CMsgGCMultiplexMessage: {
    fromJSON(object: any): CMsgGCMultiplexMessage;
    toJSON(message: CMsgGCMultiplexMessage): unknown;
    create<I extends {
        msgtype?: number;
        payload?: string;
        steamids?: string[];
    } & {
        msgtype?: number;
        payload?: string;
        steamids?: string[] & string[] & { [K in Exclude<keyof I["steamids"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CMsgGCMultiplexMessage>]: never; }>(base?: I): CMsgGCMultiplexMessage;
    fromPartial<I_1 extends {
        msgtype?: number;
        payload?: string;
        steamids?: string[];
    } & {
        msgtype?: number;
        payload?: string;
        steamids?: string[] & string[] & { [K_2 in Exclude<keyof I_1["steamids"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgGCMultiplexMessage>]: never; }>(object: I_1): CMsgGCMultiplexMessage;
};
export declare const CMsgGCToGCSubGCStarting: {
    fromJSON(object: any): CMsgGCToGCSubGCStarting;
    toJSON(message: CMsgGCToGCSubGCStarting): unknown;
    create<I extends {
        dir_index?: number;
    } & {
        dir_index?: number;
    } & { [K in Exclude<keyof I, "dir_index">]: never; }>(base?: I): CMsgGCToGCSubGCStarting;
    fromPartial<I_1 extends {
        dir_index?: number;
    } & {
        dir_index?: number;
    } & { [K_1 in Exclude<keyof I_1, "dir_index">]: never; }>(object: I_1): CMsgGCToGCSubGCStarting;
};
export declare const CGCToGCMsgMasterAck: {
    fromJSON(object: any): CGCToGCMsgMasterAck;
    toJSON(message: CGCToGCMsgMasterAck): unknown;
    create<I extends {
        dir_index?: number;
        machine_name?: string;
        process_name?: string;
        directory?: {
            dir_index?: number;
            type_instances?: number[];
        }[];
    } & {
        dir_index?: number;
        machine_name?: string;
        process_name?: string;
        directory?: {
            dir_index?: number;
            type_instances?: number[];
        }[] & ({
            dir_index?: number;
            type_instances?: number[];
        } & {
            dir_index?: number;
            type_instances?: number[] & number[] & { [K in Exclude<keyof I["directory"][number]["type_instances"], keyof number[]>]: never; };
        } & { [K_1 in Exclude<keyof I["directory"][number], keyof CGCToGCMsgMasterAck_Process>]: never; })[] & { [K_2 in Exclude<keyof I["directory"], keyof {
            dir_index?: number;
            type_instances?: number[];
        }[]>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof CGCToGCMsgMasterAck>]: never; }>(base?: I): CGCToGCMsgMasterAck;
    fromPartial<I_1 extends {
        dir_index?: number;
        machine_name?: string;
        process_name?: string;
        directory?: {
            dir_index?: number;
            type_instances?: number[];
        }[];
    } & {
        dir_index?: number;
        machine_name?: string;
        process_name?: string;
        directory?: {
            dir_index?: number;
            type_instances?: number[];
        }[] & ({
            dir_index?: number;
            type_instances?: number[];
        } & {
            dir_index?: number;
            type_instances?: number[] & number[] & { [K_4 in Exclude<keyof I_1["directory"][number]["type_instances"], keyof number[]>]: never; };
        } & { [K_5 in Exclude<keyof I_1["directory"][number], keyof CGCToGCMsgMasterAck_Process>]: never; })[] & { [K_6 in Exclude<keyof I_1["directory"], keyof {
            dir_index?: number;
            type_instances?: number[];
        }[]>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof CGCToGCMsgMasterAck>]: never; }>(object: I_1): CGCToGCMsgMasterAck;
};
export declare const CGCToGCMsgMasterAck_Process: {
    fromJSON(object: any): CGCToGCMsgMasterAck_Process;
    toJSON(message: CGCToGCMsgMasterAck_Process): unknown;
    create<I extends {
        dir_index?: number;
        type_instances?: number[];
    } & {
        dir_index?: number;
        type_instances?: number[] & number[] & { [K in Exclude<keyof I["type_instances"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CGCToGCMsgMasterAck_Process>]: never; }>(base?: I): CGCToGCMsgMasterAck_Process;
    fromPartial<I_1 extends {
        dir_index?: number;
        type_instances?: number[];
    } & {
        dir_index?: number;
        type_instances?: number[] & number[] & { [K_2 in Exclude<keyof I_1["type_instances"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CGCToGCMsgMasterAck_Process>]: never; }>(object: I_1): CGCToGCMsgMasterAck_Process;
};
export declare const CGCToGCMsgMasterAck_Response: {
    fromJSON(object: any): CGCToGCMsgMasterAck_Response;
    toJSON(message: CGCToGCMsgMasterAck_Response): unknown;
    create<I extends {
        eresult?: number;
    } & {
        eresult?: number;
    } & { [K in Exclude<keyof I, "eresult">]: never; }>(base?: I): CGCToGCMsgMasterAck_Response;
    fromPartial<I_1 extends {
        eresult?: number;
    } & {
        eresult?: number;
    } & { [K_1 in Exclude<keyof I_1, "eresult">]: never; }>(object: I_1): CGCToGCMsgMasterAck_Response;
};
export declare const CMsgGCToGCUniverseStartup: {
    fromJSON(object: any): CMsgGCToGCUniverseStartup;
    toJSON(message: CMsgGCToGCUniverseStartup): unknown;
    create<I extends {
        is_initial_startup?: boolean;
    } & {
        is_initial_startup?: boolean;
    } & { [K in Exclude<keyof I, "is_initial_startup">]: never; }>(base?: I): CMsgGCToGCUniverseStartup;
    fromPartial<I_1 extends {
        is_initial_startup?: boolean;
    } & {
        is_initial_startup?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "is_initial_startup">]: never; }>(object: I_1): CMsgGCToGCUniverseStartup;
};
export declare const CMsgGCToGCUniverseStartupResponse: {
    fromJSON(object: any): CMsgGCToGCUniverseStartupResponse;
    toJSON(message: CMsgGCToGCUniverseStartupResponse): unknown;
    create<I extends {
        eresult?: number;
    } & {
        eresult?: number;
    } & { [K in Exclude<keyof I, "eresult">]: never; }>(base?: I): CMsgGCToGCUniverseStartupResponse;
    fromPartial<I_1 extends {
        eresult?: number;
    } & {
        eresult?: number;
    } & { [K_1 in Exclude<keyof I_1, "eresult">]: never; }>(object: I_1): CMsgGCToGCUniverseStartupResponse;
};
export declare const CGCToGCMsgMasterStartupComplete: {
    fromJSON(object: any): CGCToGCMsgMasterStartupComplete;
    toJSON(message: CGCToGCMsgMasterStartupComplete): unknown;
    create<I extends {
        gc_info?: {
            dir_index?: number;
            machine_name?: string;
        }[];
    } & {
        gc_info?: {
            dir_index?: number;
            machine_name?: string;
        }[] & ({
            dir_index?: number;
            machine_name?: string;
        } & {
            dir_index?: number;
            machine_name?: string;
        } & { [K in Exclude<keyof I["gc_info"][number], keyof CGCToGCMsgMasterStartupComplete_GCInfo>]: never; })[] & { [K_1 in Exclude<keyof I["gc_info"], keyof {
            dir_index?: number;
            machine_name?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "gc_info">]: never; }>(base?: I): CGCToGCMsgMasterStartupComplete;
    fromPartial<I_1 extends {
        gc_info?: {
            dir_index?: number;
            machine_name?: string;
        }[];
    } & {
        gc_info?: {
            dir_index?: number;
            machine_name?: string;
        }[] & ({
            dir_index?: number;
            machine_name?: string;
        } & {
            dir_index?: number;
            machine_name?: string;
        } & { [K_3 in Exclude<keyof I_1["gc_info"][number], keyof CGCToGCMsgMasterStartupComplete_GCInfo>]: never; })[] & { [K_4 in Exclude<keyof I_1["gc_info"], keyof {
            dir_index?: number;
            machine_name?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "gc_info">]: never; }>(object: I_1): CGCToGCMsgMasterStartupComplete;
};
export declare const CGCToGCMsgMasterStartupComplete_GCInfo: {
    fromJSON(object: any): CGCToGCMsgMasterStartupComplete_GCInfo;
    toJSON(message: CGCToGCMsgMasterStartupComplete_GCInfo): unknown;
    create<I extends {
        dir_index?: number;
        machine_name?: string;
    } & {
        dir_index?: number;
        machine_name?: string;
    } & { [K in Exclude<keyof I, keyof CGCToGCMsgMasterStartupComplete_GCInfo>]: never; }>(base?: I): CGCToGCMsgMasterStartupComplete_GCInfo;
    fromPartial<I_1 extends {
        dir_index?: number;
        machine_name?: string;
    } & {
        dir_index?: number;
        machine_name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CGCToGCMsgMasterStartupComplete_GCInfo>]: never; }>(object: I_1): CGCToGCMsgMasterStartupComplete_GCInfo;
};
export declare const CGCToGCMsgRouted: {
    fromJSON(object: any): CGCToGCMsgRouted;
    toJSON(message: CGCToGCMsgRouted): unknown;
    create<I extends {
        msg_type?: number;
        sender_id?: string;
        net_message?: string;
    } & {
        msg_type?: number;
        sender_id?: string;
        net_message?: string;
    } & { [K in Exclude<keyof I, keyof CGCToGCMsgRouted>]: never; }>(base?: I): CGCToGCMsgRouted;
    fromPartial<I_1 extends {
        msg_type?: number;
        sender_id?: string;
        net_message?: string;
    } & {
        msg_type?: number;
        sender_id?: string;
        net_message?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CGCToGCMsgRouted>]: never; }>(object: I_1): CGCToGCMsgRouted;
};
export declare const CGCToGCMsgRoutedReply: {
    fromJSON(object: any): CGCToGCMsgRoutedReply;
    toJSON(message: CGCToGCMsgRoutedReply): unknown;
    create<I extends {
        msg_type?: number;
        net_message?: string;
    } & {
        msg_type?: number;
        net_message?: string;
    } & { [K in Exclude<keyof I, keyof CGCToGCMsgRoutedReply>]: never; }>(base?: I): CGCToGCMsgRoutedReply;
    fromPartial<I_1 extends {
        msg_type?: number;
        net_message?: string;
    } & {
        msg_type?: number;
        net_message?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CGCToGCMsgRoutedReply>]: never; }>(object: I_1): CGCToGCMsgRoutedReply;
};
export declare const CMsgGCUpdateSubGCSessionInfo: {
    fromJSON(object: any): CMsgGCUpdateSubGCSessionInfo;
    toJSON(message: CMsgGCUpdateSubGCSessionInfo): unknown;
    create<I extends {
        updates?: {
            steamid?: string;
            ip?: number;
            trusted?: boolean;
        }[];
    } & {
        updates?: {
            steamid?: string;
            ip?: number;
            trusted?: boolean;
        }[] & ({
            steamid?: string;
            ip?: number;
            trusted?: boolean;
        } & {
            steamid?: string;
            ip?: number;
            trusted?: boolean;
        } & { [K in Exclude<keyof I["updates"][number], keyof CMsgGCUpdateSubGCSessionInfo_CMsgUpdate>]: never; })[] & { [K_1 in Exclude<keyof I["updates"], keyof {
            steamid?: string;
            ip?: number;
            trusted?: boolean;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "updates">]: never; }>(base?: I): CMsgGCUpdateSubGCSessionInfo;
    fromPartial<I_1 extends {
        updates?: {
            steamid?: string;
            ip?: number;
            trusted?: boolean;
        }[];
    } & {
        updates?: {
            steamid?: string;
            ip?: number;
            trusted?: boolean;
        }[] & ({
            steamid?: string;
            ip?: number;
            trusted?: boolean;
        } & {
            steamid?: string;
            ip?: number;
            trusted?: boolean;
        } & { [K_3 in Exclude<keyof I_1["updates"][number], keyof CMsgGCUpdateSubGCSessionInfo_CMsgUpdate>]: never; })[] & { [K_4 in Exclude<keyof I_1["updates"], keyof {
            steamid?: string;
            ip?: number;
            trusted?: boolean;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "updates">]: never; }>(object: I_1): CMsgGCUpdateSubGCSessionInfo;
};
export declare const CMsgGCUpdateSubGCSessionInfo_CMsgUpdate: {
    fromJSON(object: any): CMsgGCUpdateSubGCSessionInfo_CMsgUpdate;
    toJSON(message: CMsgGCUpdateSubGCSessionInfo_CMsgUpdate): unknown;
    create<I extends {
        steamid?: string;
        ip?: number;
        trusted?: boolean;
    } & {
        steamid?: string;
        ip?: number;
        trusted?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgGCUpdateSubGCSessionInfo_CMsgUpdate>]: never; }>(base?: I): CMsgGCUpdateSubGCSessionInfo_CMsgUpdate;
    fromPartial<I_1 extends {
        steamid?: string;
        ip?: number;
        trusted?: boolean;
    } & {
        steamid?: string;
        ip?: number;
        trusted?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCUpdateSubGCSessionInfo_CMsgUpdate>]: never; }>(object: I_1): CMsgGCUpdateSubGCSessionInfo_CMsgUpdate;
};
export declare const CMsgGCRequestSubGCSessionInfo: {
    fromJSON(object: any): CMsgGCRequestSubGCSessionInfo;
    toJSON(message: CMsgGCRequestSubGCSessionInfo): unknown;
    create<I extends {
        steamid?: string;
    } & {
        steamid?: string;
    } & { [K in Exclude<keyof I, "steamid">]: never; }>(base?: I): CMsgGCRequestSubGCSessionInfo;
    fromPartial<I_1 extends {
        steamid?: string;
    } & {
        steamid?: string;
    } & { [K_1 in Exclude<keyof I_1, "steamid">]: never; }>(object: I_1): CMsgGCRequestSubGCSessionInfo;
};
export declare const CMsgGCRequestSubGCSessionInfoResponse: {
    fromJSON(object: any): CMsgGCRequestSubGCSessionInfoResponse;
    toJSON(message: CMsgGCRequestSubGCSessionInfoResponse): unknown;
    create<I extends {
        ip?: number;
        trusted?: boolean;
        port?: number;
        success?: boolean;
    } & {
        ip?: number;
        trusted?: boolean;
        port?: number;
        success?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgGCRequestSubGCSessionInfoResponse>]: never; }>(base?: I): CMsgGCRequestSubGCSessionInfoResponse;
    fromPartial<I_1 extends {
        ip?: number;
        trusted?: boolean;
        port?: number;
        success?: boolean;
    } & {
        ip?: number;
        trusted?: boolean;
        port?: number;
        success?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCRequestSubGCSessionInfoResponse>]: never; }>(object: I_1): CMsgGCRequestSubGCSessionInfoResponse;
};
export declare const CMsgSOCacheHaveVersion: {
    fromJSON(object: any): CMsgSOCacheHaveVersion;
    toJSON(message: CMsgSOCacheHaveVersion): unknown;
    create<I extends {
        soid?: {
            type?: number;
            id?: string;
        };
        version?: string;
        service_id?: number;
        cached_file_version?: number;
    } & {
        soid?: {
            type?: number;
            id?: string;
        } & {
            type?: number;
            id?: string;
        } & { [K in Exclude<keyof I["soid"], keyof CMsgSOIDOwner>]: never; };
        version?: string;
        service_id?: number;
        cached_file_version?: number;
    } & { [K_1 in Exclude<keyof I, keyof CMsgSOCacheHaveVersion>]: never; }>(base?: I): CMsgSOCacheHaveVersion;
    fromPartial<I_1 extends {
        soid?: {
            type?: number;
            id?: string;
        };
        version?: string;
        service_id?: number;
        cached_file_version?: number;
    } & {
        soid?: {
            type?: number;
            id?: string;
        } & {
            type?: number;
            id?: string;
        } & { [K_2 in Exclude<keyof I_1["soid"], keyof CMsgSOIDOwner>]: never; };
        version?: string;
        service_id?: number;
        cached_file_version?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgSOCacheHaveVersion>]: never; }>(object: I_1): CMsgSOCacheHaveVersion;
};
export declare const CMsgClientHello: {
    fromJSON(object: any): CMsgClientHello;
    toJSON(message: CMsgClientHello): unknown;
    create<I extends {
        version?: number;
        socache_have_versions?: {
            soid?: {
                type?: number;
                id?: string;
            };
            version?: string;
            service_id?: number;
            cached_file_version?: number;
        }[];
        client_session_need?: number;
        client_launcher?: PartnerAccountType;
        secret_key?: string;
        client_language?: number;
        engine?: ESourceEngine;
        steamdatagram_login?: string;
        platform_id?: number;
        game_msg?: string;
        os_type?: number;
        render_system?: number;
        render_system_req?: number;
        screen_width?: number;
        screen_height?: number;
        screen_refresh?: number;
        render_width?: number;
        render_height?: number;
        swap_width?: number;
        swap_height?: number;
        is_steam_china?: boolean;
        is_steam_china_client?: boolean;
        platform_name?: string;
    } & {
        version?: number;
        socache_have_versions?: {
            soid?: {
                type?: number;
                id?: string;
            };
            version?: string;
            service_id?: number;
            cached_file_version?: number;
        }[] & ({
            soid?: {
                type?: number;
                id?: string;
            };
            version?: string;
            service_id?: number;
            cached_file_version?: number;
        } & {
            soid?: {
                type?: number;
                id?: string;
            } & {
                type?: number;
                id?: string;
            } & { [K in Exclude<keyof I["socache_have_versions"][number]["soid"], keyof CMsgSOIDOwner>]: never; };
            version?: string;
            service_id?: number;
            cached_file_version?: number;
        } & { [K_1 in Exclude<keyof I["socache_have_versions"][number], keyof CMsgSOCacheHaveVersion>]: never; })[] & { [K_2 in Exclude<keyof I["socache_have_versions"], keyof {
            soid?: {
                type?: number;
                id?: string;
            };
            version?: string;
            service_id?: number;
            cached_file_version?: number;
        }[]>]: never; };
        client_session_need?: number;
        client_launcher?: PartnerAccountType;
        secret_key?: string;
        client_language?: number;
        engine?: ESourceEngine;
        steamdatagram_login?: string;
        platform_id?: number;
        game_msg?: string;
        os_type?: number;
        render_system?: number;
        render_system_req?: number;
        screen_width?: number;
        screen_height?: number;
        screen_refresh?: number;
        render_width?: number;
        render_height?: number;
        swap_width?: number;
        swap_height?: number;
        is_steam_china?: boolean;
        is_steam_china_client?: boolean;
        platform_name?: string;
    } & { [K_3 in Exclude<keyof I, keyof CMsgClientHello>]: never; }>(base?: I): CMsgClientHello;
    fromPartial<I_1 extends {
        version?: number;
        socache_have_versions?: {
            soid?: {
                type?: number;
                id?: string;
            };
            version?: string;
            service_id?: number;
            cached_file_version?: number;
        }[];
        client_session_need?: number;
        client_launcher?: PartnerAccountType;
        secret_key?: string;
        client_language?: number;
        engine?: ESourceEngine;
        steamdatagram_login?: string;
        platform_id?: number;
        game_msg?: string;
        os_type?: number;
        render_system?: number;
        render_system_req?: number;
        screen_width?: number;
        screen_height?: number;
        screen_refresh?: number;
        render_width?: number;
        render_height?: number;
        swap_width?: number;
        swap_height?: number;
        is_steam_china?: boolean;
        is_steam_china_client?: boolean;
        platform_name?: string;
    } & {
        version?: number;
        socache_have_versions?: {
            soid?: {
                type?: number;
                id?: string;
            };
            version?: string;
            service_id?: number;
            cached_file_version?: number;
        }[] & ({
            soid?: {
                type?: number;
                id?: string;
            };
            version?: string;
            service_id?: number;
            cached_file_version?: number;
        } & {
            soid?: {
                type?: number;
                id?: string;
            } & {
                type?: number;
                id?: string;
            } & { [K_4 in Exclude<keyof I_1["socache_have_versions"][number]["soid"], keyof CMsgSOIDOwner>]: never; };
            version?: string;
            service_id?: number;
            cached_file_version?: number;
        } & { [K_5 in Exclude<keyof I_1["socache_have_versions"][number], keyof CMsgSOCacheHaveVersion>]: never; })[] & { [K_6 in Exclude<keyof I_1["socache_have_versions"], keyof {
            soid?: {
                type?: number;
                id?: string;
            };
            version?: string;
            service_id?: number;
            cached_file_version?: number;
        }[]>]: never; };
        client_session_need?: number;
        client_launcher?: PartnerAccountType;
        secret_key?: string;
        client_language?: number;
        engine?: ESourceEngine;
        steamdatagram_login?: string;
        platform_id?: number;
        game_msg?: string;
        os_type?: number;
        render_system?: number;
        render_system_req?: number;
        screen_width?: number;
        screen_height?: number;
        screen_refresh?: number;
        render_width?: number;
        render_height?: number;
        swap_width?: number;
        swap_height?: number;
        is_steam_china?: boolean;
        is_steam_china_client?: boolean;
        platform_name?: string;
    } & { [K_7 in Exclude<keyof I_1, keyof CMsgClientHello>]: never; }>(object: I_1): CMsgClientHello;
};
export declare const CMsgClientWelcome: {
    fromJSON(object: any): CMsgClientWelcome;
    toJSON(message: CMsgClientWelcome): unknown;
    create<I extends {
        version?: number;
        game_data?: string;
        outofdate_subscribed_caches?: {
            objects?: {
                type_id?: number;
                object_data?: Uint8Array[];
            }[];
            version?: string;
            owner_soid?: {
                type?: number;
                id?: string;
            };
            service_id?: number;
            service_list?: number[];
            sync_version?: string;
        }[];
        uptodate_subscribed_caches?: {
            version?: string;
            owner_soid?: {
                type?: number;
                id?: string;
            };
            service_id?: number;
            service_list?: number[];
            sync_version?: string;
        }[];
        location?: {
            latitude?: number;
            longitude?: number;
            country?: string;
        };
        save_game_key?: string;
        gc_socache_file_version?: number;
        txn_country_code?: string;
        game_data2?: string;
        rtime32_gc_welcome_timestamp?: number;
        currency?: number;
        balance?: number;
        balance_url?: string;
        has_accepted_china_ssa?: boolean;
        is_banned_steam_china?: boolean;
        additional_welcome_msgs?: {
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        };
        steam_learn_hmac_keys?: {
            register_data_source_key?: string;
            cache_data_keys?: {
                data_source_id?: number;
                version?: number;
                key?: string;
            }[];
            snapshot_project_keys?: {
                project_id?: number;
                published_version?: number;
                key?: string;
            }[];
        };
    } & {
        version?: number;
        game_data?: string;
        outofdate_subscribed_caches?: {
            objects?: {
                type_id?: number;
                object_data?: Uint8Array[];
            }[];
            version?: string;
            owner_soid?: {
                type?: number;
                id?: string;
            };
            service_id?: number;
            service_list?: number[];
            sync_version?: string;
        }[] & ({
            objects?: {
                type_id?: number;
                object_data?: Uint8Array[];
            }[];
            version?: string;
            owner_soid?: {
                type?: number;
                id?: string;
            };
            service_id?: number;
            service_list?: number[];
            sync_version?: string;
        } & {
            objects?: {
                type_id?: number;
                object_data?: Uint8Array[];
            }[] & ({
                type_id?: number;
                object_data?: Uint8Array[];
            } & {
                type_id?: number;
                object_data?: Uint8Array[] & Uint8Array[] & { [K in Exclude<keyof I["outofdate_subscribed_caches"][number]["objects"][number]["object_data"], keyof Uint8Array[]>]: never; };
            } & { [K_1 in Exclude<keyof I["outofdate_subscribed_caches"][number]["objects"][number], keyof CMsgSOCacheSubscribed_SubscribedType>]: never; })[] & { [K_2 in Exclude<keyof I["outofdate_subscribed_caches"][number]["objects"], keyof {
                type_id?: number;
                object_data?: Uint8Array[];
            }[]>]: never; };
            version?: string;
            owner_soid?: {
                type?: number;
                id?: string;
            } & {
                type?: number;
                id?: string;
            } & { [K_3 in Exclude<keyof I["outofdate_subscribed_caches"][number]["owner_soid"], keyof CMsgSOIDOwner>]: never; };
            service_id?: number;
            service_list?: number[] & number[] & { [K_4 in Exclude<keyof I["outofdate_subscribed_caches"][number]["service_list"], keyof number[]>]: never; };
            sync_version?: string;
        } & { [K_5 in Exclude<keyof I["outofdate_subscribed_caches"][number], keyof CMsgSOCacheSubscribed>]: never; })[] & { [K_6 in Exclude<keyof I["outofdate_subscribed_caches"], keyof {
            objects?: {
                type_id?: number;
                object_data?: Uint8Array[];
            }[];
            version?: string;
            owner_soid?: {
                type?: number;
                id?: string;
            };
            service_id?: number;
            service_list?: number[];
            sync_version?: string;
        }[]>]: never; };
        uptodate_subscribed_caches?: {
            version?: string;
            owner_soid?: {
                type?: number;
                id?: string;
            };
            service_id?: number;
            service_list?: number[];
            sync_version?: string;
        }[] & ({
            version?: string;
            owner_soid?: {
                type?: number;
                id?: string;
            };
            service_id?: number;
            service_list?: number[];
            sync_version?: string;
        } & {
            version?: string;
            owner_soid?: {
                type?: number;
                id?: string;
            } & {
                type?: number;
                id?: string;
            } & { [K_7 in Exclude<keyof I["uptodate_subscribed_caches"][number]["owner_soid"], keyof CMsgSOIDOwner>]: never; };
            service_id?: number;
            service_list?: number[] & number[] & { [K_8 in Exclude<keyof I["uptodate_subscribed_caches"][number]["service_list"], keyof number[]>]: never; };
            sync_version?: string;
        } & { [K_9 in Exclude<keyof I["uptodate_subscribed_caches"][number], keyof CMsgSOCacheSubscriptionCheck>]: never; })[] & { [K_10 in Exclude<keyof I["uptodate_subscribed_caches"], keyof {
            version?: string;
            owner_soid?: {
                type?: number;
                id?: string;
            };
            service_id?: number;
            service_list?: number[];
            sync_version?: string;
        }[]>]: never; };
        location?: {
            latitude?: number;
            longitude?: number;
            country?: string;
        } & {
            latitude?: number;
            longitude?: number;
            country?: string;
        } & { [K_11 in Exclude<keyof I["location"], keyof CMsgClientWelcome_Location>]: never; };
        save_game_key?: string;
        gc_socache_file_version?: number;
        txn_country_code?: string;
        game_data2?: string;
        rtime32_gc_welcome_timestamp?: number;
        currency?: number;
        balance?: number;
        balance_url?: string;
        has_accepted_china_ssa?: boolean;
        is_banned_steam_china?: boolean;
        additional_welcome_msgs?: {
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        } & {
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        } & { [K_12 in Exclude<keyof I["additional_welcome_msgs"], keyof CExtraMsgBlock>]: never; };
        steam_learn_hmac_keys?: {
            register_data_source_key?: string;
            cache_data_keys?: {
                data_source_id?: number;
                version?: number;
                key?: string;
            }[];
            snapshot_project_keys?: {
                project_id?: number;
                published_version?: number;
                key?: string;
            }[];
        } & {
            register_data_source_key?: string;
            cache_data_keys?: {
                data_source_id?: number;
                version?: number;
                key?: string;
            }[] & ({
                data_source_id?: number;
                version?: number;
                key?: string;
            } & {
                data_source_id?: number;
                version?: number;
                key?: string;
            } & { [K_13 in Exclude<keyof I["steam_learn_hmac_keys"]["cache_data_keys"][number], keyof import("./steammessages_steamlearn.steamworkssdk").CMsgSteamLearnHMACKeys_CacheDataKeys>]: never; })[] & { [K_14 in Exclude<keyof I["steam_learn_hmac_keys"]["cache_data_keys"], keyof {
                data_source_id?: number;
                version?: number;
                key?: string;
            }[]>]: never; };
            snapshot_project_keys?: {
                project_id?: number;
                published_version?: number;
                key?: string;
            }[] & ({
                project_id?: number;
                published_version?: number;
                key?: string;
            } & {
                project_id?: number;
                published_version?: number;
                key?: string;
            } & { [K_15 in Exclude<keyof I["steam_learn_hmac_keys"]["snapshot_project_keys"][number], keyof import("./steammessages_steamlearn.steamworkssdk").CMsgSteamLearnHMACKeys_SnapshotProjectKeys>]: never; })[] & { [K_16 in Exclude<keyof I["steam_learn_hmac_keys"]["snapshot_project_keys"], keyof {
                project_id?: number;
                published_version?: number;
                key?: string;
            }[]>]: never; };
        } & { [K_17 in Exclude<keyof I["steam_learn_hmac_keys"], keyof CMsgSteamLearnHMACKeys>]: never; };
    } & { [K_18 in Exclude<keyof I, keyof CMsgClientWelcome>]: never; }>(base?: I): CMsgClientWelcome;
    fromPartial<I_1 extends {
        version?: number;
        game_data?: string;
        outofdate_subscribed_caches?: {
            objects?: {
                type_id?: number;
                object_data?: Uint8Array[];
            }[];
            version?: string;
            owner_soid?: {
                type?: number;
                id?: string;
            };
            service_id?: number;
            service_list?: number[];
            sync_version?: string;
        }[];
        uptodate_subscribed_caches?: {
            version?: string;
            owner_soid?: {
                type?: number;
                id?: string;
            };
            service_id?: number;
            service_list?: number[];
            sync_version?: string;
        }[];
        location?: {
            latitude?: number;
            longitude?: number;
            country?: string;
        };
        save_game_key?: string;
        gc_socache_file_version?: number;
        txn_country_code?: string;
        game_data2?: string;
        rtime32_gc_welcome_timestamp?: number;
        currency?: number;
        balance?: number;
        balance_url?: string;
        has_accepted_china_ssa?: boolean;
        is_banned_steam_china?: boolean;
        additional_welcome_msgs?: {
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        };
        steam_learn_hmac_keys?: {
            register_data_source_key?: string;
            cache_data_keys?: {
                data_source_id?: number;
                version?: number;
                key?: string;
            }[];
            snapshot_project_keys?: {
                project_id?: number;
                published_version?: number;
                key?: string;
            }[];
        };
    } & {
        version?: number;
        game_data?: string;
        outofdate_subscribed_caches?: {
            objects?: {
                type_id?: number;
                object_data?: Uint8Array[];
            }[];
            version?: string;
            owner_soid?: {
                type?: number;
                id?: string;
            };
            service_id?: number;
            service_list?: number[];
            sync_version?: string;
        }[] & ({
            objects?: {
                type_id?: number;
                object_data?: Uint8Array[];
            }[];
            version?: string;
            owner_soid?: {
                type?: number;
                id?: string;
            };
            service_id?: number;
            service_list?: number[];
            sync_version?: string;
        } & {
            objects?: {
                type_id?: number;
                object_data?: Uint8Array[];
            }[] & ({
                type_id?: number;
                object_data?: Uint8Array[];
            } & {
                type_id?: number;
                object_data?: Uint8Array[] & Uint8Array[] & { [K_19 in Exclude<keyof I_1["outofdate_subscribed_caches"][number]["objects"][number]["object_data"], keyof Uint8Array[]>]: never; };
            } & { [K_20 in Exclude<keyof I_1["outofdate_subscribed_caches"][number]["objects"][number], keyof CMsgSOCacheSubscribed_SubscribedType>]: never; })[] & { [K_21 in Exclude<keyof I_1["outofdate_subscribed_caches"][number]["objects"], keyof {
                type_id?: number;
                object_data?: Uint8Array[];
            }[]>]: never; };
            version?: string;
            owner_soid?: {
                type?: number;
                id?: string;
            } & {
                type?: number;
                id?: string;
            } & { [K_22 in Exclude<keyof I_1["outofdate_subscribed_caches"][number]["owner_soid"], keyof CMsgSOIDOwner>]: never; };
            service_id?: number;
            service_list?: number[] & number[] & { [K_23 in Exclude<keyof I_1["outofdate_subscribed_caches"][number]["service_list"], keyof number[]>]: never; };
            sync_version?: string;
        } & { [K_24 in Exclude<keyof I_1["outofdate_subscribed_caches"][number], keyof CMsgSOCacheSubscribed>]: never; })[] & { [K_25 in Exclude<keyof I_1["outofdate_subscribed_caches"], keyof {
            objects?: {
                type_id?: number;
                object_data?: Uint8Array[];
            }[];
            version?: string;
            owner_soid?: {
                type?: number;
                id?: string;
            };
            service_id?: number;
            service_list?: number[];
            sync_version?: string;
        }[]>]: never; };
        uptodate_subscribed_caches?: {
            version?: string;
            owner_soid?: {
                type?: number;
                id?: string;
            };
            service_id?: number;
            service_list?: number[];
            sync_version?: string;
        }[] & ({
            version?: string;
            owner_soid?: {
                type?: number;
                id?: string;
            };
            service_id?: number;
            service_list?: number[];
            sync_version?: string;
        } & {
            version?: string;
            owner_soid?: {
                type?: number;
                id?: string;
            } & {
                type?: number;
                id?: string;
            } & { [K_26 in Exclude<keyof I_1["uptodate_subscribed_caches"][number]["owner_soid"], keyof CMsgSOIDOwner>]: never; };
            service_id?: number;
            service_list?: number[] & number[] & { [K_27 in Exclude<keyof I_1["uptodate_subscribed_caches"][number]["service_list"], keyof number[]>]: never; };
            sync_version?: string;
        } & { [K_28 in Exclude<keyof I_1["uptodate_subscribed_caches"][number], keyof CMsgSOCacheSubscriptionCheck>]: never; })[] & { [K_29 in Exclude<keyof I_1["uptodate_subscribed_caches"], keyof {
            version?: string;
            owner_soid?: {
                type?: number;
                id?: string;
            };
            service_id?: number;
            service_list?: number[];
            sync_version?: string;
        }[]>]: never; };
        location?: {
            latitude?: number;
            longitude?: number;
            country?: string;
        } & {
            latitude?: number;
            longitude?: number;
            country?: string;
        } & { [K_30 in Exclude<keyof I_1["location"], keyof CMsgClientWelcome_Location>]: never; };
        save_game_key?: string;
        gc_socache_file_version?: number;
        txn_country_code?: string;
        game_data2?: string;
        rtime32_gc_welcome_timestamp?: number;
        currency?: number;
        balance?: number;
        balance_url?: string;
        has_accepted_china_ssa?: boolean;
        is_banned_steam_china?: boolean;
        additional_welcome_msgs?: {
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        } & {
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        } & { [K_31 in Exclude<keyof I_1["additional_welcome_msgs"], keyof CExtraMsgBlock>]: never; };
        steam_learn_hmac_keys?: {
            register_data_source_key?: string;
            cache_data_keys?: {
                data_source_id?: number;
                version?: number;
                key?: string;
            }[];
            snapshot_project_keys?: {
                project_id?: number;
                published_version?: number;
                key?: string;
            }[];
        } & {
            register_data_source_key?: string;
            cache_data_keys?: {
                data_source_id?: number;
                version?: number;
                key?: string;
            }[] & ({
                data_source_id?: number;
                version?: number;
                key?: string;
            } & {
                data_source_id?: number;
                version?: number;
                key?: string;
            } & { [K_32 in Exclude<keyof I_1["steam_learn_hmac_keys"]["cache_data_keys"][number], keyof import("./steammessages_steamlearn.steamworkssdk").CMsgSteamLearnHMACKeys_CacheDataKeys>]: never; })[] & { [K_33 in Exclude<keyof I_1["steam_learn_hmac_keys"]["cache_data_keys"], keyof {
                data_source_id?: number;
                version?: number;
                key?: string;
            }[]>]: never; };
            snapshot_project_keys?: {
                project_id?: number;
                published_version?: number;
                key?: string;
            }[] & ({
                project_id?: number;
                published_version?: number;
                key?: string;
            } & {
                project_id?: number;
                published_version?: number;
                key?: string;
            } & { [K_34 in Exclude<keyof I_1["steam_learn_hmac_keys"]["snapshot_project_keys"][number], keyof import("./steammessages_steamlearn.steamworkssdk").CMsgSteamLearnHMACKeys_SnapshotProjectKeys>]: never; })[] & { [K_35 in Exclude<keyof I_1["steam_learn_hmac_keys"]["snapshot_project_keys"], keyof {
                project_id?: number;
                published_version?: number;
                key?: string;
            }[]>]: never; };
        } & { [K_36 in Exclude<keyof I_1["steam_learn_hmac_keys"], keyof CMsgSteamLearnHMACKeys>]: never; };
    } & { [K_37 in Exclude<keyof I_1, keyof CMsgClientWelcome>]: never; }>(object: I_1): CMsgClientWelcome;
};
export declare const CMsgClientWelcome_Location: {
    fromJSON(object: any): CMsgClientWelcome_Location;
    toJSON(message: CMsgClientWelcome_Location): unknown;
    create<I extends {
        latitude?: number;
        longitude?: number;
        country?: string;
    } & {
        latitude?: number;
        longitude?: number;
        country?: string;
    } & { [K in Exclude<keyof I, keyof CMsgClientWelcome_Location>]: never; }>(base?: I): CMsgClientWelcome_Location;
    fromPartial<I_1 extends {
        latitude?: number;
        longitude?: number;
        country?: string;
    } & {
        latitude?: number;
        longitude?: number;
        country?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientWelcome_Location>]: never; }>(object: I_1): CMsgClientWelcome_Location;
};
export declare const CMsgConnectionStatus: {
    fromJSON(object: any): CMsgConnectionStatus;
    toJSON(message: CMsgConnectionStatus): unknown;
    create<I extends {
        status?: GCConnectionStatus;
        client_session_need?: number;
        queue_position?: number;
        queue_size?: number;
        wait_seconds?: number;
        estimated_wait_seconds_remaining?: number;
    } & {
        status?: GCConnectionStatus;
        client_session_need?: number;
        queue_position?: number;
        queue_size?: number;
        wait_seconds?: number;
        estimated_wait_seconds_remaining?: number;
    } & { [K in Exclude<keyof I, keyof CMsgConnectionStatus>]: never; }>(base?: I): CMsgConnectionStatus;
    fromPartial<I_1 extends {
        status?: GCConnectionStatus;
        client_session_need?: number;
        queue_position?: number;
        queue_size?: number;
        wait_seconds?: number;
        estimated_wait_seconds_remaining?: number;
    } & {
        status?: GCConnectionStatus;
        client_session_need?: number;
        queue_position?: number;
        queue_size?: number;
        wait_seconds?: number;
        estimated_wait_seconds_remaining?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgConnectionStatus>]: never; }>(object: I_1): CMsgConnectionStatus;
};
export declare const CMsgGCToGCSOCacheSubscribe: {
    fromJSON(object: any): CMsgGCToGCSOCacheSubscribe;
    toJSON(message: CMsgGCToGCSOCacheSubscribe): unknown;
    create<I extends {
        subscriber?: string;
        subscribe_to_id?: string;
        sync_version?: string;
        have_versions?: {
            service_id?: number;
            version?: string;
        }[];
        subscribe_to_type?: number;
    } & {
        subscriber?: string;
        subscribe_to_id?: string;
        sync_version?: string;
        have_versions?: {
            service_id?: number;
            version?: string;
        }[] & ({
            service_id?: number;
            version?: string;
        } & {
            service_id?: number;
            version?: string;
        } & { [K in Exclude<keyof I["have_versions"][number], keyof CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions>]: never; })[] & { [K_1 in Exclude<keyof I["have_versions"], keyof {
            service_id?: number;
            version?: string;
        }[]>]: never; };
        subscribe_to_type?: number;
    } & { [K_2 in Exclude<keyof I, keyof CMsgGCToGCSOCacheSubscribe>]: never; }>(base?: I): CMsgGCToGCSOCacheSubscribe;
    fromPartial<I_1 extends {
        subscriber?: string;
        subscribe_to_id?: string;
        sync_version?: string;
        have_versions?: {
            service_id?: number;
            version?: string;
        }[];
        subscribe_to_type?: number;
    } & {
        subscriber?: string;
        subscribe_to_id?: string;
        sync_version?: string;
        have_versions?: {
            service_id?: number;
            version?: string;
        }[] & ({
            service_id?: number;
            version?: string;
        } & {
            service_id?: number;
            version?: string;
        } & { [K_3 in Exclude<keyof I_1["have_versions"][number], keyof CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions>]: never; })[] & { [K_4 in Exclude<keyof I_1["have_versions"], keyof {
            service_id?: number;
            version?: string;
        }[]>]: never; };
        subscribe_to_type?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgGCToGCSOCacheSubscribe>]: never; }>(object: I_1): CMsgGCToGCSOCacheSubscribe;
};
export declare const CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions: {
    fromJSON(object: any): CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions;
    toJSON(message: CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions): unknown;
    create<I extends {
        service_id?: number;
        version?: string;
    } & {
        service_id?: number;
        version?: string;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions>]: never; }>(base?: I): CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions;
    fromPartial<I_1 extends {
        service_id?: number;
        version?: string;
    } & {
        service_id?: number;
        version?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions>]: never; }>(object: I_1): CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions;
};
export declare const CMsgGCToGCSOCacheUnsubscribe: {
    fromJSON(object: any): CMsgGCToGCSOCacheUnsubscribe;
    toJSON(message: CMsgGCToGCSOCacheUnsubscribe): unknown;
    create<I extends {
        subscriber?: string;
        unsubscribe_from_id?: string;
        unsubscribe_from_type?: number;
    } & {
        subscriber?: string;
        unsubscribe_from_id?: string;
        unsubscribe_from_type?: number;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCSOCacheUnsubscribe>]: never; }>(base?: I): CMsgGCToGCSOCacheUnsubscribe;
    fromPartial<I_1 extends {
        subscriber?: string;
        unsubscribe_from_id?: string;
        unsubscribe_from_type?: number;
    } & {
        subscriber?: string;
        unsubscribe_from_id?: string;
        unsubscribe_from_type?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCSOCacheUnsubscribe>]: never; }>(object: I_1): CMsgGCToGCSOCacheUnsubscribe;
};
export declare const CMsgGCClientPing: {
    fromJSON(_: any): CMsgGCClientPing;
    toJSON(_: CMsgGCClientPing): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgGCClientPing;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgGCClientPing;
};
export declare const CMsgGCToGCForwardAccountDetails: {
    fromJSON(object: any): CMsgGCToGCForwardAccountDetails;
    toJSON(message: CMsgGCToGCForwardAccountDetails): unknown;
    create<I extends {
        steamid?: string;
        account_details?: {
            eresult_deprecated?: number;
            account_name?: string;
            persona_name?: string;
            is_profile_created?: boolean;
            is_profile_public?: boolean;
            is_inventory_public?: boolean;
            is_vac_banned?: boolean;
            is_cyber_cafe?: boolean;
            is_school_account?: boolean;
            is_limited?: boolean;
            is_subscribed?: boolean;
            package?: number;
            is_free_trial_account?: boolean;
            free_trial_expiration?: number;
            is_low_violence?: boolean;
            is_account_locked_down?: boolean;
            is_community_banned?: boolean;
            is_trade_banned?: boolean;
            trade_ban_expiration?: number;
            accountid?: number;
            suspension_end_time?: number;
            currency?: string;
            steam_level?: number;
            friend_count?: number;
            account_creation_time?: number;
            is_steamguard_enabled?: boolean;
            is_phone_verified?: boolean;
            is_two_factor_auth_enabled?: boolean;
            two_factor_enabled_time?: number;
            phone_verification_time?: number;
            phone_id?: string;
            is_phone_identifying?: boolean;
            rt_identity_linked?: number;
            rt_birth_date?: number;
            txn_country_code?: string;
            has_accepted_china_ssa?: boolean;
            is_banned_steam_china?: boolean;
        };
        age_seconds?: number;
    } & {
        steamid?: string;
        account_details?: {
            eresult_deprecated?: number;
            account_name?: string;
            persona_name?: string;
            is_profile_created?: boolean;
            is_profile_public?: boolean;
            is_inventory_public?: boolean;
            is_vac_banned?: boolean;
            is_cyber_cafe?: boolean;
            is_school_account?: boolean;
            is_limited?: boolean;
            is_subscribed?: boolean;
            package?: number;
            is_free_trial_account?: boolean;
            free_trial_expiration?: number;
            is_low_violence?: boolean;
            is_account_locked_down?: boolean;
            is_community_banned?: boolean;
            is_trade_banned?: boolean;
            trade_ban_expiration?: number;
            accountid?: number;
            suspension_end_time?: number;
            currency?: string;
            steam_level?: number;
            friend_count?: number;
            account_creation_time?: number;
            is_steamguard_enabled?: boolean;
            is_phone_verified?: boolean;
            is_two_factor_auth_enabled?: boolean;
            two_factor_enabled_time?: number;
            phone_verification_time?: number;
            phone_id?: string;
            is_phone_identifying?: boolean;
            rt_identity_linked?: number;
            rt_birth_date?: number;
            txn_country_code?: string;
            has_accepted_china_ssa?: boolean;
            is_banned_steam_china?: boolean;
        } & {
            eresult_deprecated?: number;
            account_name?: string;
            persona_name?: string;
            is_profile_created?: boolean;
            is_profile_public?: boolean;
            is_inventory_public?: boolean;
            is_vac_banned?: boolean;
            is_cyber_cafe?: boolean;
            is_school_account?: boolean;
            is_limited?: boolean;
            is_subscribed?: boolean;
            package?: number;
            is_free_trial_account?: boolean;
            free_trial_expiration?: number;
            is_low_violence?: boolean;
            is_account_locked_down?: boolean;
            is_community_banned?: boolean;
            is_trade_banned?: boolean;
            trade_ban_expiration?: number;
            accountid?: number;
            suspension_end_time?: number;
            currency?: string;
            steam_level?: number;
            friend_count?: number;
            account_creation_time?: number;
            is_steamguard_enabled?: boolean;
            is_phone_verified?: boolean;
            is_two_factor_auth_enabled?: boolean;
            two_factor_enabled_time?: number;
            phone_verification_time?: number;
            phone_id?: string;
            is_phone_identifying?: boolean;
            rt_identity_linked?: number;
            rt_birth_date?: number;
            txn_country_code?: string;
            has_accepted_china_ssa?: boolean;
            is_banned_steam_china?: boolean;
        } & { [K in Exclude<keyof I["account_details"], keyof CGCSystemMsg_GetAccountDetails_Response>]: never; };
        age_seconds?: number;
    } & { [K_1 in Exclude<keyof I, keyof CMsgGCToGCForwardAccountDetails>]: never; }>(base?: I): CMsgGCToGCForwardAccountDetails;
    fromPartial<I_1 extends {
        steamid?: string;
        account_details?: {
            eresult_deprecated?: number;
            account_name?: string;
            persona_name?: string;
            is_profile_created?: boolean;
            is_profile_public?: boolean;
            is_inventory_public?: boolean;
            is_vac_banned?: boolean;
            is_cyber_cafe?: boolean;
            is_school_account?: boolean;
            is_limited?: boolean;
            is_subscribed?: boolean;
            package?: number;
            is_free_trial_account?: boolean;
            free_trial_expiration?: number;
            is_low_violence?: boolean;
            is_account_locked_down?: boolean;
            is_community_banned?: boolean;
            is_trade_banned?: boolean;
            trade_ban_expiration?: number;
            accountid?: number;
            suspension_end_time?: number;
            currency?: string;
            steam_level?: number;
            friend_count?: number;
            account_creation_time?: number;
            is_steamguard_enabled?: boolean;
            is_phone_verified?: boolean;
            is_two_factor_auth_enabled?: boolean;
            two_factor_enabled_time?: number;
            phone_verification_time?: number;
            phone_id?: string;
            is_phone_identifying?: boolean;
            rt_identity_linked?: number;
            rt_birth_date?: number;
            txn_country_code?: string;
            has_accepted_china_ssa?: boolean;
            is_banned_steam_china?: boolean;
        };
        age_seconds?: number;
    } & {
        steamid?: string;
        account_details?: {
            eresult_deprecated?: number;
            account_name?: string;
            persona_name?: string;
            is_profile_created?: boolean;
            is_profile_public?: boolean;
            is_inventory_public?: boolean;
            is_vac_banned?: boolean;
            is_cyber_cafe?: boolean;
            is_school_account?: boolean;
            is_limited?: boolean;
            is_subscribed?: boolean;
            package?: number;
            is_free_trial_account?: boolean;
            free_trial_expiration?: number;
            is_low_violence?: boolean;
            is_account_locked_down?: boolean;
            is_community_banned?: boolean;
            is_trade_banned?: boolean;
            trade_ban_expiration?: number;
            accountid?: number;
            suspension_end_time?: number;
            currency?: string;
            steam_level?: number;
            friend_count?: number;
            account_creation_time?: number;
            is_steamguard_enabled?: boolean;
            is_phone_verified?: boolean;
            is_two_factor_auth_enabled?: boolean;
            two_factor_enabled_time?: number;
            phone_verification_time?: number;
            phone_id?: string;
            is_phone_identifying?: boolean;
            rt_identity_linked?: number;
            rt_birth_date?: number;
            txn_country_code?: string;
            has_accepted_china_ssa?: boolean;
            is_banned_steam_china?: boolean;
        } & {
            eresult_deprecated?: number;
            account_name?: string;
            persona_name?: string;
            is_profile_created?: boolean;
            is_profile_public?: boolean;
            is_inventory_public?: boolean;
            is_vac_banned?: boolean;
            is_cyber_cafe?: boolean;
            is_school_account?: boolean;
            is_limited?: boolean;
            is_subscribed?: boolean;
            package?: number;
            is_free_trial_account?: boolean;
            free_trial_expiration?: number;
            is_low_violence?: boolean;
            is_account_locked_down?: boolean;
            is_community_banned?: boolean;
            is_trade_banned?: boolean;
            trade_ban_expiration?: number;
            accountid?: number;
            suspension_end_time?: number;
            currency?: string;
            steam_level?: number;
            friend_count?: number;
            account_creation_time?: number;
            is_steamguard_enabled?: boolean;
            is_phone_verified?: boolean;
            is_two_factor_auth_enabled?: boolean;
            two_factor_enabled_time?: number;
            phone_verification_time?: number;
            phone_id?: string;
            is_phone_identifying?: boolean;
            rt_identity_linked?: number;
            rt_birth_date?: number;
            txn_country_code?: string;
            has_accepted_china_ssa?: boolean;
            is_banned_steam_china?: boolean;
        } & { [K_2 in Exclude<keyof I_1["account_details"], keyof CGCSystemMsg_GetAccountDetails_Response>]: never; };
        age_seconds?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgGCToGCForwardAccountDetails>]: never; }>(object: I_1): CMsgGCToGCForwardAccountDetails;
};
export declare const CMsgGCToGCLoadSessionSOCache: {
    fromJSON(object: any): CMsgGCToGCLoadSessionSOCache;
    toJSON(message: CMsgGCToGCLoadSessionSOCache): unknown;
    create<I extends {
        account_id?: number;
        forward_account_details?: {
            steamid?: string;
            account_details?: {
                eresult_deprecated?: number;
                account_name?: string;
                persona_name?: string;
                is_profile_created?: boolean;
                is_profile_public?: boolean;
                is_inventory_public?: boolean;
                is_vac_banned?: boolean;
                is_cyber_cafe?: boolean;
                is_school_account?: boolean;
                is_limited?: boolean;
                is_subscribed?: boolean;
                package?: number;
                is_free_trial_account?: boolean;
                free_trial_expiration?: number;
                is_low_violence?: boolean;
                is_account_locked_down?: boolean;
                is_community_banned?: boolean;
                is_trade_banned?: boolean;
                trade_ban_expiration?: number;
                accountid?: number;
                suspension_end_time?: number;
                currency?: string;
                steam_level?: number;
                friend_count?: number;
                account_creation_time?: number;
                is_steamguard_enabled?: boolean;
                is_phone_verified?: boolean;
                is_two_factor_auth_enabled?: boolean;
                two_factor_enabled_time?: number;
                phone_verification_time?: number;
                phone_id?: string;
                is_phone_identifying?: boolean;
                rt_identity_linked?: number;
                rt_birth_date?: number;
                txn_country_code?: string;
                has_accepted_china_ssa?: boolean;
                is_banned_steam_china?: boolean;
            };
            age_seconds?: number;
        };
    } & {
        account_id?: number;
        forward_account_details?: {
            steamid?: string;
            account_details?: {
                eresult_deprecated?: number;
                account_name?: string;
                persona_name?: string;
                is_profile_created?: boolean;
                is_profile_public?: boolean;
                is_inventory_public?: boolean;
                is_vac_banned?: boolean;
                is_cyber_cafe?: boolean;
                is_school_account?: boolean;
                is_limited?: boolean;
                is_subscribed?: boolean;
                package?: number;
                is_free_trial_account?: boolean;
                free_trial_expiration?: number;
                is_low_violence?: boolean;
                is_account_locked_down?: boolean;
                is_community_banned?: boolean;
                is_trade_banned?: boolean;
                trade_ban_expiration?: number;
                accountid?: number;
                suspension_end_time?: number;
                currency?: string;
                steam_level?: number;
                friend_count?: number;
                account_creation_time?: number;
                is_steamguard_enabled?: boolean;
                is_phone_verified?: boolean;
                is_two_factor_auth_enabled?: boolean;
                two_factor_enabled_time?: number;
                phone_verification_time?: number;
                phone_id?: string;
                is_phone_identifying?: boolean;
                rt_identity_linked?: number;
                rt_birth_date?: number;
                txn_country_code?: string;
                has_accepted_china_ssa?: boolean;
                is_banned_steam_china?: boolean;
            };
            age_seconds?: number;
        } & {
            steamid?: string;
            account_details?: {
                eresult_deprecated?: number;
                account_name?: string;
                persona_name?: string;
                is_profile_created?: boolean;
                is_profile_public?: boolean;
                is_inventory_public?: boolean;
                is_vac_banned?: boolean;
                is_cyber_cafe?: boolean;
                is_school_account?: boolean;
                is_limited?: boolean;
                is_subscribed?: boolean;
                package?: number;
                is_free_trial_account?: boolean;
                free_trial_expiration?: number;
                is_low_violence?: boolean;
                is_account_locked_down?: boolean;
                is_community_banned?: boolean;
                is_trade_banned?: boolean;
                trade_ban_expiration?: number;
                accountid?: number;
                suspension_end_time?: number;
                currency?: string;
                steam_level?: number;
                friend_count?: number;
                account_creation_time?: number;
                is_steamguard_enabled?: boolean;
                is_phone_verified?: boolean;
                is_two_factor_auth_enabled?: boolean;
                two_factor_enabled_time?: number;
                phone_verification_time?: number;
                phone_id?: string;
                is_phone_identifying?: boolean;
                rt_identity_linked?: number;
                rt_birth_date?: number;
                txn_country_code?: string;
                has_accepted_china_ssa?: boolean;
                is_banned_steam_china?: boolean;
            } & {
                eresult_deprecated?: number;
                account_name?: string;
                persona_name?: string;
                is_profile_created?: boolean;
                is_profile_public?: boolean;
                is_inventory_public?: boolean;
                is_vac_banned?: boolean;
                is_cyber_cafe?: boolean;
                is_school_account?: boolean;
                is_limited?: boolean;
                is_subscribed?: boolean;
                package?: number;
                is_free_trial_account?: boolean;
                free_trial_expiration?: number;
                is_low_violence?: boolean;
                is_account_locked_down?: boolean;
                is_community_banned?: boolean;
                is_trade_banned?: boolean;
                trade_ban_expiration?: number;
                accountid?: number;
                suspension_end_time?: number;
                currency?: string;
                steam_level?: number;
                friend_count?: number;
                account_creation_time?: number;
                is_steamguard_enabled?: boolean;
                is_phone_verified?: boolean;
                is_two_factor_auth_enabled?: boolean;
                two_factor_enabled_time?: number;
                phone_verification_time?: number;
                phone_id?: string;
                is_phone_identifying?: boolean;
                rt_identity_linked?: number;
                rt_birth_date?: number;
                txn_country_code?: string;
                has_accepted_china_ssa?: boolean;
                is_banned_steam_china?: boolean;
            } & { [K in Exclude<keyof I["forward_account_details"]["account_details"], keyof CGCSystemMsg_GetAccountDetails_Response>]: never; };
            age_seconds?: number;
        } & { [K_1 in Exclude<keyof I["forward_account_details"], keyof CMsgGCToGCForwardAccountDetails>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgGCToGCLoadSessionSOCache>]: never; }>(base?: I): CMsgGCToGCLoadSessionSOCache;
    fromPartial<I_1 extends {
        account_id?: number;
        forward_account_details?: {
            steamid?: string;
            account_details?: {
                eresult_deprecated?: number;
                account_name?: string;
                persona_name?: string;
                is_profile_created?: boolean;
                is_profile_public?: boolean;
                is_inventory_public?: boolean;
                is_vac_banned?: boolean;
                is_cyber_cafe?: boolean;
                is_school_account?: boolean;
                is_limited?: boolean;
                is_subscribed?: boolean;
                package?: number;
                is_free_trial_account?: boolean;
                free_trial_expiration?: number;
                is_low_violence?: boolean;
                is_account_locked_down?: boolean;
                is_community_banned?: boolean;
                is_trade_banned?: boolean;
                trade_ban_expiration?: number;
                accountid?: number;
                suspension_end_time?: number;
                currency?: string;
                steam_level?: number;
                friend_count?: number;
                account_creation_time?: number;
                is_steamguard_enabled?: boolean;
                is_phone_verified?: boolean;
                is_two_factor_auth_enabled?: boolean;
                two_factor_enabled_time?: number;
                phone_verification_time?: number;
                phone_id?: string;
                is_phone_identifying?: boolean;
                rt_identity_linked?: number;
                rt_birth_date?: number;
                txn_country_code?: string;
                has_accepted_china_ssa?: boolean;
                is_banned_steam_china?: boolean;
            };
            age_seconds?: number;
        };
    } & {
        account_id?: number;
        forward_account_details?: {
            steamid?: string;
            account_details?: {
                eresult_deprecated?: number;
                account_name?: string;
                persona_name?: string;
                is_profile_created?: boolean;
                is_profile_public?: boolean;
                is_inventory_public?: boolean;
                is_vac_banned?: boolean;
                is_cyber_cafe?: boolean;
                is_school_account?: boolean;
                is_limited?: boolean;
                is_subscribed?: boolean;
                package?: number;
                is_free_trial_account?: boolean;
                free_trial_expiration?: number;
                is_low_violence?: boolean;
                is_account_locked_down?: boolean;
                is_community_banned?: boolean;
                is_trade_banned?: boolean;
                trade_ban_expiration?: number;
                accountid?: number;
                suspension_end_time?: number;
                currency?: string;
                steam_level?: number;
                friend_count?: number;
                account_creation_time?: number;
                is_steamguard_enabled?: boolean;
                is_phone_verified?: boolean;
                is_two_factor_auth_enabled?: boolean;
                two_factor_enabled_time?: number;
                phone_verification_time?: number;
                phone_id?: string;
                is_phone_identifying?: boolean;
                rt_identity_linked?: number;
                rt_birth_date?: number;
                txn_country_code?: string;
                has_accepted_china_ssa?: boolean;
                is_banned_steam_china?: boolean;
            };
            age_seconds?: number;
        } & {
            steamid?: string;
            account_details?: {
                eresult_deprecated?: number;
                account_name?: string;
                persona_name?: string;
                is_profile_created?: boolean;
                is_profile_public?: boolean;
                is_inventory_public?: boolean;
                is_vac_banned?: boolean;
                is_cyber_cafe?: boolean;
                is_school_account?: boolean;
                is_limited?: boolean;
                is_subscribed?: boolean;
                package?: number;
                is_free_trial_account?: boolean;
                free_trial_expiration?: number;
                is_low_violence?: boolean;
                is_account_locked_down?: boolean;
                is_community_banned?: boolean;
                is_trade_banned?: boolean;
                trade_ban_expiration?: number;
                accountid?: number;
                suspension_end_time?: number;
                currency?: string;
                steam_level?: number;
                friend_count?: number;
                account_creation_time?: number;
                is_steamguard_enabled?: boolean;
                is_phone_verified?: boolean;
                is_two_factor_auth_enabled?: boolean;
                two_factor_enabled_time?: number;
                phone_verification_time?: number;
                phone_id?: string;
                is_phone_identifying?: boolean;
                rt_identity_linked?: number;
                rt_birth_date?: number;
                txn_country_code?: string;
                has_accepted_china_ssa?: boolean;
                is_banned_steam_china?: boolean;
            } & {
                eresult_deprecated?: number;
                account_name?: string;
                persona_name?: string;
                is_profile_created?: boolean;
                is_profile_public?: boolean;
                is_inventory_public?: boolean;
                is_vac_banned?: boolean;
                is_cyber_cafe?: boolean;
                is_school_account?: boolean;
                is_limited?: boolean;
                is_subscribed?: boolean;
                package?: number;
                is_free_trial_account?: boolean;
                free_trial_expiration?: number;
                is_low_violence?: boolean;
                is_account_locked_down?: boolean;
                is_community_banned?: boolean;
                is_trade_banned?: boolean;
                trade_ban_expiration?: number;
                accountid?: number;
                suspension_end_time?: number;
                currency?: string;
                steam_level?: number;
                friend_count?: number;
                account_creation_time?: number;
                is_steamguard_enabled?: boolean;
                is_phone_verified?: boolean;
                is_two_factor_auth_enabled?: boolean;
                two_factor_enabled_time?: number;
                phone_verification_time?: number;
                phone_id?: string;
                is_phone_identifying?: boolean;
                rt_identity_linked?: number;
                rt_birth_date?: number;
                txn_country_code?: string;
                has_accepted_china_ssa?: boolean;
                is_banned_steam_china?: boolean;
            } & { [K_3 in Exclude<keyof I_1["forward_account_details"]["account_details"], keyof CGCSystemMsg_GetAccountDetails_Response>]: never; };
            age_seconds?: number;
        } & { [K_4 in Exclude<keyof I_1["forward_account_details"], keyof CMsgGCToGCForwardAccountDetails>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgGCToGCLoadSessionSOCache>]: never; }>(object: I_1): CMsgGCToGCLoadSessionSOCache;
};
export declare const CMsgGCToGCLoadSessionSOCacheResponse: {
    fromJSON(_: any): CMsgGCToGCLoadSessionSOCacheResponse;
    toJSON(_: CMsgGCToGCLoadSessionSOCacheResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgGCToGCLoadSessionSOCacheResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgGCToGCLoadSessionSOCacheResponse;
};
export declare const CMsgGCToGCUpdateSessionStats: {
    fromJSON(object: any): CMsgGCToGCUpdateSessionStats;
    toJSON(message: CMsgGCToGCUpdateSessionStats): unknown;
    create<I extends {
        user_sessions?: number;
        server_sessions?: number;
        in_logon_surge?: boolean;
    } & {
        user_sessions?: number;
        server_sessions?: number;
        in_logon_surge?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCUpdateSessionStats>]: never; }>(base?: I): CMsgGCToGCUpdateSessionStats;
    fromPartial<I_1 extends {
        user_sessions?: number;
        server_sessions?: number;
        in_logon_surge?: boolean;
    } & {
        user_sessions?: number;
        server_sessions?: number;
        in_logon_surge?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCUpdateSessionStats>]: never; }>(object: I_1): CMsgGCToGCUpdateSessionStats;
};
export declare const CMsgGCToClientRequestDropped: {
    fromJSON(_: any): CMsgGCToClientRequestDropped;
    toJSON(_: CMsgGCToClientRequestDropped): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgGCToClientRequestDropped;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgGCToClientRequestDropped;
};
export declare const CWorkshop_PopulateItemDescriptions_Request: {
    fromJSON(object: any): CWorkshop_PopulateItemDescriptions_Request;
    toJSON(message: CWorkshop_PopulateItemDescriptions_Request): unknown;
    create<I extends {
        appid?: number;
        languages?: {
            language?: string;
            descriptions?: {
                gameitemid?: number;
                item_description?: string;
            }[];
        }[];
    } & {
        appid?: number;
        languages?: {
            language?: string;
            descriptions?: {
                gameitemid?: number;
                item_description?: string;
            }[];
        }[] & ({
            language?: string;
            descriptions?: {
                gameitemid?: number;
                item_description?: string;
            }[];
        } & {
            language?: string;
            descriptions?: {
                gameitemid?: number;
                item_description?: string;
            }[] & ({
                gameitemid?: number;
                item_description?: string;
            } & {
                gameitemid?: number;
                item_description?: string;
            } & { [K in Exclude<keyof I["languages"][number]["descriptions"][number], keyof CWorkshop_PopulateItemDescriptions_Request_SingleItemDescription>]: never; })[] & { [K_1 in Exclude<keyof I["languages"][number]["descriptions"], keyof {
                gameitemid?: number;
                item_description?: string;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["languages"][number], keyof CWorkshop_PopulateItemDescriptions_Request_ItemDescriptionsLanguageBlock>]: never; })[] & { [K_3 in Exclude<keyof I["languages"], keyof {
            language?: string;
            descriptions?: {
                gameitemid?: number;
                item_description?: string;
            }[];
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof CWorkshop_PopulateItemDescriptions_Request>]: never; }>(base?: I): CWorkshop_PopulateItemDescriptions_Request;
    fromPartial<I_1 extends {
        appid?: number;
        languages?: {
            language?: string;
            descriptions?: {
                gameitemid?: number;
                item_description?: string;
            }[];
        }[];
    } & {
        appid?: number;
        languages?: {
            language?: string;
            descriptions?: {
                gameitemid?: number;
                item_description?: string;
            }[];
        }[] & ({
            language?: string;
            descriptions?: {
                gameitemid?: number;
                item_description?: string;
            }[];
        } & {
            language?: string;
            descriptions?: {
                gameitemid?: number;
                item_description?: string;
            }[] & ({
                gameitemid?: number;
                item_description?: string;
            } & {
                gameitemid?: number;
                item_description?: string;
            } & { [K_5 in Exclude<keyof I_1["languages"][number]["descriptions"][number], keyof CWorkshop_PopulateItemDescriptions_Request_SingleItemDescription>]: never; })[] & { [K_6 in Exclude<keyof I_1["languages"][number]["descriptions"], keyof {
                gameitemid?: number;
                item_description?: string;
            }[]>]: never; };
        } & { [K_7 in Exclude<keyof I_1["languages"][number], keyof CWorkshop_PopulateItemDescriptions_Request_ItemDescriptionsLanguageBlock>]: never; })[] & { [K_8 in Exclude<keyof I_1["languages"], keyof {
            language?: string;
            descriptions?: {
                gameitemid?: number;
                item_description?: string;
            }[];
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof CWorkshop_PopulateItemDescriptions_Request>]: never; }>(object: I_1): CWorkshop_PopulateItemDescriptions_Request;
};
export declare const CWorkshop_PopulateItemDescriptions_Request_SingleItemDescription: {
    fromJSON(object: any): CWorkshop_PopulateItemDescriptions_Request_SingleItemDescription;
    toJSON(message: CWorkshop_PopulateItemDescriptions_Request_SingleItemDescription): unknown;
    create<I extends {
        gameitemid?: number;
        item_description?: string;
    } & {
        gameitemid?: number;
        item_description?: string;
    } & { [K in Exclude<keyof I, keyof CWorkshop_PopulateItemDescriptions_Request_SingleItemDescription>]: never; }>(base?: I): CWorkshop_PopulateItemDescriptions_Request_SingleItemDescription;
    fromPartial<I_1 extends {
        gameitemid?: number;
        item_description?: string;
    } & {
        gameitemid?: number;
        item_description?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CWorkshop_PopulateItemDescriptions_Request_SingleItemDescription>]: never; }>(object: I_1): CWorkshop_PopulateItemDescriptions_Request_SingleItemDescription;
};
export declare const CWorkshop_PopulateItemDescriptions_Request_ItemDescriptionsLanguageBlock: {
    fromJSON(object: any): CWorkshop_PopulateItemDescriptions_Request_ItemDescriptionsLanguageBlock;
    toJSON(message: CWorkshop_PopulateItemDescriptions_Request_ItemDescriptionsLanguageBlock): unknown;
    create<I extends {
        language?: string;
        descriptions?: {
            gameitemid?: number;
            item_description?: string;
        }[];
    } & {
        language?: string;
        descriptions?: {
            gameitemid?: number;
            item_description?: string;
        }[] & ({
            gameitemid?: number;
            item_description?: string;
        } & {
            gameitemid?: number;
            item_description?: string;
        } & { [K in Exclude<keyof I["descriptions"][number], keyof CWorkshop_PopulateItemDescriptions_Request_SingleItemDescription>]: never; })[] & { [K_1 in Exclude<keyof I["descriptions"], keyof {
            gameitemid?: number;
            item_description?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CWorkshop_PopulateItemDescriptions_Request_ItemDescriptionsLanguageBlock>]: never; }>(base?: I): CWorkshop_PopulateItemDescriptions_Request_ItemDescriptionsLanguageBlock;
    fromPartial<I_1 extends {
        language?: string;
        descriptions?: {
            gameitemid?: number;
            item_description?: string;
        }[];
    } & {
        language?: string;
        descriptions?: {
            gameitemid?: number;
            item_description?: string;
        }[] & ({
            gameitemid?: number;
            item_description?: string;
        } & {
            gameitemid?: number;
            item_description?: string;
        } & { [K_3 in Exclude<keyof I_1["descriptions"][number], keyof CWorkshop_PopulateItemDescriptions_Request_SingleItemDescription>]: never; })[] & { [K_4 in Exclude<keyof I_1["descriptions"], keyof {
            gameitemid?: number;
            item_description?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CWorkshop_PopulateItemDescriptions_Request_ItemDescriptionsLanguageBlock>]: never; }>(object: I_1): CWorkshop_PopulateItemDescriptions_Request_ItemDescriptionsLanguageBlock;
};
export declare const CWorkshop_GetContributors_Request: {
    fromJSON(object: any): CWorkshop_GetContributors_Request;
    toJSON(message: CWorkshop_GetContributors_Request): unknown;
    create<I extends {
        appid?: number;
        gameitemid?: number;
    } & {
        appid?: number;
        gameitemid?: number;
    } & { [K in Exclude<keyof I, keyof CWorkshop_GetContributors_Request>]: never; }>(base?: I): CWorkshop_GetContributors_Request;
    fromPartial<I_1 extends {
        appid?: number;
        gameitemid?: number;
    } & {
        appid?: number;
        gameitemid?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CWorkshop_GetContributors_Request>]: never; }>(object: I_1): CWorkshop_GetContributors_Request;
};
export declare const CWorkshop_GetContributors_Response: {
    fromJSON(object: any): CWorkshop_GetContributors_Response;
    toJSON(message: CWorkshop_GetContributors_Response): unknown;
    create<I extends {
        contributors?: string[];
    } & {
        contributors?: string[] & string[] & { [K in Exclude<keyof I["contributors"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, "contributors">]: never; }>(base?: I): CWorkshop_GetContributors_Response;
    fromPartial<I_1 extends {
        contributors?: string[];
    } & {
        contributors?: string[] & string[] & { [K_2 in Exclude<keyof I_1["contributors"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "contributors">]: never; }>(object: I_1): CWorkshop_GetContributors_Response;
};
export declare const CWorkshop_SetItemPaymentRules_Request: {
    fromJSON(object: any): CWorkshop_SetItemPaymentRules_Request;
    toJSON(message: CWorkshop_SetItemPaymentRules_Request): unknown;
    create<I extends {
        appid?: number;
        gameitemid?: number;
        associated_workshop_files?: {
            workshop_file_id?: string;
            revenue_percentage?: number;
            rule_description?: string;
            rule_type?: number;
        }[];
        partner_accounts?: {
            account_id?: number;
            revenue_percentage?: number;
            rule_description?: string;
        }[];
        validate_only?: boolean;
        make_workshop_files_subscribable?: boolean;
        associated_workshop_file_for_direct_payments?: {
            workshop_file_id?: string;
            rule_description?: string;
        };
    } & {
        appid?: number;
        gameitemid?: number;
        associated_workshop_files?: {
            workshop_file_id?: string;
            revenue_percentage?: number;
            rule_description?: string;
            rule_type?: number;
        }[] & ({
            workshop_file_id?: string;
            revenue_percentage?: number;
            rule_description?: string;
            rule_type?: number;
        } & {
            workshop_file_id?: string;
            revenue_percentage?: number;
            rule_description?: string;
            rule_type?: number;
        } & { [K in Exclude<keyof I["associated_workshop_files"][number], keyof CWorkshop_SetItemPaymentRules_Request_WorkshopItemPaymentRule>]: never; })[] & { [K_1 in Exclude<keyof I["associated_workshop_files"], keyof {
            workshop_file_id?: string;
            revenue_percentage?: number;
            rule_description?: string;
            rule_type?: number;
        }[]>]: never; };
        partner_accounts?: {
            account_id?: number;
            revenue_percentage?: number;
            rule_description?: string;
        }[] & ({
            account_id?: number;
            revenue_percentage?: number;
            rule_description?: string;
        } & {
            account_id?: number;
            revenue_percentage?: number;
            rule_description?: string;
        } & { [K_2 in Exclude<keyof I["partner_accounts"][number], keyof CWorkshop_SetItemPaymentRules_Request_PartnerItemPaymentRule>]: never; })[] & { [K_3 in Exclude<keyof I["partner_accounts"], keyof {
            account_id?: number;
            revenue_percentage?: number;
            rule_description?: string;
        }[]>]: never; };
        validate_only?: boolean;
        make_workshop_files_subscribable?: boolean;
        associated_workshop_file_for_direct_payments?: {
            workshop_file_id?: string;
            rule_description?: string;
        } & {
            workshop_file_id?: string;
            rule_description?: string;
        } & { [K_4 in Exclude<keyof I["associated_workshop_file_for_direct_payments"], keyof CWorkshop_SetItemPaymentRules_Request_WorkshopDirectPaymentRule>]: never; };
    } & { [K_5 in Exclude<keyof I, keyof CWorkshop_SetItemPaymentRules_Request>]: never; }>(base?: I): CWorkshop_SetItemPaymentRules_Request;
    fromPartial<I_1 extends {
        appid?: number;
        gameitemid?: number;
        associated_workshop_files?: {
            workshop_file_id?: string;
            revenue_percentage?: number;
            rule_description?: string;
            rule_type?: number;
        }[];
        partner_accounts?: {
            account_id?: number;
            revenue_percentage?: number;
            rule_description?: string;
        }[];
        validate_only?: boolean;
        make_workshop_files_subscribable?: boolean;
        associated_workshop_file_for_direct_payments?: {
            workshop_file_id?: string;
            rule_description?: string;
        };
    } & {
        appid?: number;
        gameitemid?: number;
        associated_workshop_files?: {
            workshop_file_id?: string;
            revenue_percentage?: number;
            rule_description?: string;
            rule_type?: number;
        }[] & ({
            workshop_file_id?: string;
            revenue_percentage?: number;
            rule_description?: string;
            rule_type?: number;
        } & {
            workshop_file_id?: string;
            revenue_percentage?: number;
            rule_description?: string;
            rule_type?: number;
        } & { [K_6 in Exclude<keyof I_1["associated_workshop_files"][number], keyof CWorkshop_SetItemPaymentRules_Request_WorkshopItemPaymentRule>]: never; })[] & { [K_7 in Exclude<keyof I_1["associated_workshop_files"], keyof {
            workshop_file_id?: string;
            revenue_percentage?: number;
            rule_description?: string;
            rule_type?: number;
        }[]>]: never; };
        partner_accounts?: {
            account_id?: number;
            revenue_percentage?: number;
            rule_description?: string;
        }[] & ({
            account_id?: number;
            revenue_percentage?: number;
            rule_description?: string;
        } & {
            account_id?: number;
            revenue_percentage?: number;
            rule_description?: string;
        } & { [K_8 in Exclude<keyof I_1["partner_accounts"][number], keyof CWorkshop_SetItemPaymentRules_Request_PartnerItemPaymentRule>]: never; })[] & { [K_9 in Exclude<keyof I_1["partner_accounts"], keyof {
            account_id?: number;
            revenue_percentage?: number;
            rule_description?: string;
        }[]>]: never; };
        validate_only?: boolean;
        make_workshop_files_subscribable?: boolean;
        associated_workshop_file_for_direct_payments?: {
            workshop_file_id?: string;
            rule_description?: string;
        } & {
            workshop_file_id?: string;
            rule_description?: string;
        } & { [K_10 in Exclude<keyof I_1["associated_workshop_file_for_direct_payments"], keyof CWorkshop_SetItemPaymentRules_Request_WorkshopDirectPaymentRule>]: never; };
    } & { [K_11 in Exclude<keyof I_1, keyof CWorkshop_SetItemPaymentRules_Request>]: never; }>(object: I_1): CWorkshop_SetItemPaymentRules_Request;
};
export declare const CWorkshop_SetItemPaymentRules_Request_WorkshopItemPaymentRule: {
    fromJSON(object: any): CWorkshop_SetItemPaymentRules_Request_WorkshopItemPaymentRule;
    toJSON(message: CWorkshop_SetItemPaymentRules_Request_WorkshopItemPaymentRule): unknown;
    create<I extends {
        workshop_file_id?: string;
        revenue_percentage?: number;
        rule_description?: string;
        rule_type?: number;
    } & {
        workshop_file_id?: string;
        revenue_percentage?: number;
        rule_description?: string;
        rule_type?: number;
    } & { [K in Exclude<keyof I, keyof CWorkshop_SetItemPaymentRules_Request_WorkshopItemPaymentRule>]: never; }>(base?: I): CWorkshop_SetItemPaymentRules_Request_WorkshopItemPaymentRule;
    fromPartial<I_1 extends {
        workshop_file_id?: string;
        revenue_percentage?: number;
        rule_description?: string;
        rule_type?: number;
    } & {
        workshop_file_id?: string;
        revenue_percentage?: number;
        rule_description?: string;
        rule_type?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CWorkshop_SetItemPaymentRules_Request_WorkshopItemPaymentRule>]: never; }>(object: I_1): CWorkshop_SetItemPaymentRules_Request_WorkshopItemPaymentRule;
};
export declare const CWorkshop_SetItemPaymentRules_Request_WorkshopDirectPaymentRule: {
    fromJSON(object: any): CWorkshop_SetItemPaymentRules_Request_WorkshopDirectPaymentRule;
    toJSON(message: CWorkshop_SetItemPaymentRules_Request_WorkshopDirectPaymentRule): unknown;
    create<I extends {
        workshop_file_id?: string;
        rule_description?: string;
    } & {
        workshop_file_id?: string;
        rule_description?: string;
    } & { [K in Exclude<keyof I, keyof CWorkshop_SetItemPaymentRules_Request_WorkshopDirectPaymentRule>]: never; }>(base?: I): CWorkshop_SetItemPaymentRules_Request_WorkshopDirectPaymentRule;
    fromPartial<I_1 extends {
        workshop_file_id?: string;
        rule_description?: string;
    } & {
        workshop_file_id?: string;
        rule_description?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CWorkshop_SetItemPaymentRules_Request_WorkshopDirectPaymentRule>]: never; }>(object: I_1): CWorkshop_SetItemPaymentRules_Request_WorkshopDirectPaymentRule;
};
export declare const CWorkshop_SetItemPaymentRules_Request_PartnerItemPaymentRule: {
    fromJSON(object: any): CWorkshop_SetItemPaymentRules_Request_PartnerItemPaymentRule;
    toJSON(message: CWorkshop_SetItemPaymentRules_Request_PartnerItemPaymentRule): unknown;
    create<I extends {
        account_id?: number;
        revenue_percentage?: number;
        rule_description?: string;
    } & {
        account_id?: number;
        revenue_percentage?: number;
        rule_description?: string;
    } & { [K in Exclude<keyof I, keyof CWorkshop_SetItemPaymentRules_Request_PartnerItemPaymentRule>]: never; }>(base?: I): CWorkshop_SetItemPaymentRules_Request_PartnerItemPaymentRule;
    fromPartial<I_1 extends {
        account_id?: number;
        revenue_percentage?: number;
        rule_description?: string;
    } & {
        account_id?: number;
        revenue_percentage?: number;
        rule_description?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CWorkshop_SetItemPaymentRules_Request_PartnerItemPaymentRule>]: never; }>(object: I_1): CWorkshop_SetItemPaymentRules_Request_PartnerItemPaymentRule;
};
export declare const CWorkshop_SetItemPaymentRules_Response: {
    fromJSON(object: any): CWorkshop_SetItemPaymentRules_Response;
    toJSON(message: CWorkshop_SetItemPaymentRules_Response): unknown;
    create<I extends {
        validation_errors?: string[];
    } & {
        validation_errors?: string[] & string[] & { [K in Exclude<keyof I["validation_errors"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, "validation_errors">]: never; }>(base?: I): CWorkshop_SetItemPaymentRules_Response;
    fromPartial<I_1 extends {
        validation_errors?: string[];
    } & {
        validation_errors?: string[] & string[] & { [K_2 in Exclude<keyof I_1["validation_errors"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "validation_errors">]: never; }>(object: I_1): CWorkshop_SetItemPaymentRules_Response;
};
export declare const CCommunity_ClanAnnouncementInfo: {
    fromJSON(object: any): CCommunity_ClanAnnouncementInfo;
    toJSON(message: CCommunity_ClanAnnouncementInfo): unknown;
    create<I extends {
        gid?: string;
        clanid?: string;
        posterid?: string;
        headline?: string;
        posttime?: number;
        updatetime?: number;
        body?: string;
        commentcount?: number;
        tags?: string[];
        language?: number;
        hidden?: boolean;
        forum_topic_id?: string;
    } & {
        gid?: string;
        clanid?: string;
        posterid?: string;
        headline?: string;
        posttime?: number;
        updatetime?: number;
        body?: string;
        commentcount?: number;
        tags?: string[] & string[] & { [K in Exclude<keyof I["tags"], keyof string[]>]: never; };
        language?: number;
        hidden?: boolean;
        forum_topic_id?: string;
    } & { [K_1 in Exclude<keyof I, keyof CCommunity_ClanAnnouncementInfo>]: never; }>(base?: I): CCommunity_ClanAnnouncementInfo;
    fromPartial<I_1 extends {
        gid?: string;
        clanid?: string;
        posterid?: string;
        headline?: string;
        posttime?: number;
        updatetime?: number;
        body?: string;
        commentcount?: number;
        tags?: string[];
        language?: number;
        hidden?: boolean;
        forum_topic_id?: string;
    } & {
        gid?: string;
        clanid?: string;
        posterid?: string;
        headline?: string;
        posttime?: number;
        updatetime?: number;
        body?: string;
        commentcount?: number;
        tags?: string[] & string[] & { [K_2 in Exclude<keyof I_1["tags"], keyof string[]>]: never; };
        language?: number;
        hidden?: boolean;
        forum_topic_id?: string;
    } & { [K_3 in Exclude<keyof I_1, keyof CCommunity_ClanAnnouncementInfo>]: never; }>(object: I_1): CCommunity_ClanAnnouncementInfo;
};
export declare const CCommunity_GetClanAnnouncements_Request: {
    fromJSON(object: any): CCommunity_GetClanAnnouncements_Request;
    toJSON(message: CCommunity_GetClanAnnouncements_Request): unknown;
    create<I extends {
        steamid?: string;
        offset?: number;
        count?: number;
        maxchars?: number;
        strip_html?: boolean;
        required_tags?: string[];
        require_no_tags?: boolean;
        language_preference?: number[];
        hidden_only?: boolean;
        only_gid?: boolean;
        rtime_oldest_date?: number;
        include_hidden?: boolean;
        include_partner_events?: boolean;
    } & {
        steamid?: string;
        offset?: number;
        count?: number;
        maxchars?: number;
        strip_html?: boolean;
        required_tags?: string[] & string[] & { [K in Exclude<keyof I["required_tags"], keyof string[]>]: never; };
        require_no_tags?: boolean;
        language_preference?: number[] & number[] & { [K_1 in Exclude<keyof I["language_preference"], keyof number[]>]: never; };
        hidden_only?: boolean;
        only_gid?: boolean;
        rtime_oldest_date?: number;
        include_hidden?: boolean;
        include_partner_events?: boolean;
    } & { [K_2 in Exclude<keyof I, keyof CCommunity_GetClanAnnouncements_Request>]: never; }>(base?: I): CCommunity_GetClanAnnouncements_Request;
    fromPartial<I_1 extends {
        steamid?: string;
        offset?: number;
        count?: number;
        maxchars?: number;
        strip_html?: boolean;
        required_tags?: string[];
        require_no_tags?: boolean;
        language_preference?: number[];
        hidden_only?: boolean;
        only_gid?: boolean;
        rtime_oldest_date?: number;
        include_hidden?: boolean;
        include_partner_events?: boolean;
    } & {
        steamid?: string;
        offset?: number;
        count?: number;
        maxchars?: number;
        strip_html?: boolean;
        required_tags?: string[] & string[] & { [K_3 in Exclude<keyof I_1["required_tags"], keyof string[]>]: never; };
        require_no_tags?: boolean;
        language_preference?: number[] & number[] & { [K_4 in Exclude<keyof I_1["language_preference"], keyof number[]>]: never; };
        hidden_only?: boolean;
        only_gid?: boolean;
        rtime_oldest_date?: number;
        include_hidden?: boolean;
        include_partner_events?: boolean;
    } & { [K_5 in Exclude<keyof I_1, keyof CCommunity_GetClanAnnouncements_Request>]: never; }>(object: I_1): CCommunity_GetClanAnnouncements_Request;
};
export declare const CCommunity_GetClanAnnouncements_Response: {
    fromJSON(object: any): CCommunity_GetClanAnnouncements_Response;
    toJSON(message: CCommunity_GetClanAnnouncements_Response): unknown;
    create<I extends {
        maxchars?: number;
        strip_html?: boolean;
        announcements?: {
            gid?: string;
            clanid?: string;
            posterid?: string;
            headline?: string;
            posttime?: number;
            updatetime?: number;
            body?: string;
            commentcount?: number;
            tags?: string[];
            language?: number;
            hidden?: boolean;
            forum_topic_id?: string;
        }[];
    } & {
        maxchars?: number;
        strip_html?: boolean;
        announcements?: {
            gid?: string;
            clanid?: string;
            posterid?: string;
            headline?: string;
            posttime?: number;
            updatetime?: number;
            body?: string;
            commentcount?: number;
            tags?: string[];
            language?: number;
            hidden?: boolean;
            forum_topic_id?: string;
        }[] & ({
            gid?: string;
            clanid?: string;
            posterid?: string;
            headline?: string;
            posttime?: number;
            updatetime?: number;
            body?: string;
            commentcount?: number;
            tags?: string[];
            language?: number;
            hidden?: boolean;
            forum_topic_id?: string;
        } & {
            gid?: string;
            clanid?: string;
            posterid?: string;
            headline?: string;
            posttime?: number;
            updatetime?: number;
            body?: string;
            commentcount?: number;
            tags?: string[] & string[] & { [K in Exclude<keyof I["announcements"][number]["tags"], keyof string[]>]: never; };
            language?: number;
            hidden?: boolean;
            forum_topic_id?: string;
        } & { [K_1 in Exclude<keyof I["announcements"][number], keyof CCommunity_ClanAnnouncementInfo>]: never; })[] & { [K_2 in Exclude<keyof I["announcements"], keyof {
            gid?: string;
            clanid?: string;
            posterid?: string;
            headline?: string;
            posttime?: number;
            updatetime?: number;
            body?: string;
            commentcount?: number;
            tags?: string[];
            language?: number;
            hidden?: boolean;
            forum_topic_id?: string;
        }[]>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof CCommunity_GetClanAnnouncements_Response>]: never; }>(base?: I): CCommunity_GetClanAnnouncements_Response;
    fromPartial<I_1 extends {
        maxchars?: number;
        strip_html?: boolean;
        announcements?: {
            gid?: string;
            clanid?: string;
            posterid?: string;
            headline?: string;
            posttime?: number;
            updatetime?: number;
            body?: string;
            commentcount?: number;
            tags?: string[];
            language?: number;
            hidden?: boolean;
            forum_topic_id?: string;
        }[];
    } & {
        maxchars?: number;
        strip_html?: boolean;
        announcements?: {
            gid?: string;
            clanid?: string;
            posterid?: string;
            headline?: string;
            posttime?: number;
            updatetime?: number;
            body?: string;
            commentcount?: number;
            tags?: string[];
            language?: number;
            hidden?: boolean;
            forum_topic_id?: string;
        }[] & ({
            gid?: string;
            clanid?: string;
            posterid?: string;
            headline?: string;
            posttime?: number;
            updatetime?: number;
            body?: string;
            commentcount?: number;
            tags?: string[];
            language?: number;
            hidden?: boolean;
            forum_topic_id?: string;
        } & {
            gid?: string;
            clanid?: string;
            posterid?: string;
            headline?: string;
            posttime?: number;
            updatetime?: number;
            body?: string;
            commentcount?: number;
            tags?: string[] & string[] & { [K_4 in Exclude<keyof I_1["announcements"][number]["tags"], keyof string[]>]: never; };
            language?: number;
            hidden?: boolean;
            forum_topic_id?: string;
        } & { [K_5 in Exclude<keyof I_1["announcements"][number], keyof CCommunity_ClanAnnouncementInfo>]: never; })[] & { [K_6 in Exclude<keyof I_1["announcements"], keyof {
            gid?: string;
            clanid?: string;
            posterid?: string;
            headline?: string;
            posttime?: number;
            updatetime?: number;
            body?: string;
            commentcount?: number;
            tags?: string[];
            language?: number;
            hidden?: boolean;
            forum_topic_id?: string;
        }[]>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof CCommunity_GetClanAnnouncements_Response>]: never; }>(object: I_1): CCommunity_GetClanAnnouncements_Response;
};
export declare const CBroadcast_PostGameDataFrame_Request: {
    fromJSON(object: any): CBroadcast_PostGameDataFrame_Request;
    toJSON(message: CBroadcast_PostGameDataFrame_Request): unknown;
    create<I extends {
        appid?: number;
        steamid?: string;
        broadcast_id?: string;
        frame_data?: string;
    } & {
        appid?: number;
        steamid?: string;
        broadcast_id?: string;
        frame_data?: string;
    } & { [K in Exclude<keyof I, keyof CBroadcast_PostGameDataFrame_Request>]: never; }>(base?: I): CBroadcast_PostGameDataFrame_Request;
    fromPartial<I_1 extends {
        appid?: number;
        steamid?: string;
        broadcast_id?: string;
        frame_data?: string;
    } & {
        appid?: number;
        steamid?: string;
        broadcast_id?: string;
        frame_data?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CBroadcast_PostGameDataFrame_Request>]: never; }>(object: I_1): CBroadcast_PostGameDataFrame_Request;
};
export declare const CMsgSerializedSOCache: {
    fromJSON(object: any): CMsgSerializedSOCache;
    toJSON(message: CMsgSerializedSOCache): unknown;
    create<I extends {
        file_version?: number;
        caches?: {
            type?: number;
            id?: string;
            versions?: {
                service?: number;
                version?: string;
            }[];
            type_caches?: {
                type?: number;
                objects?: Uint8Array[];
                service_id?: number;
            }[];
        }[];
        gc_socache_file_version?: number;
    } & {
        file_version?: number;
        caches?: {
            type?: number;
            id?: string;
            versions?: {
                service?: number;
                version?: string;
            }[];
            type_caches?: {
                type?: number;
                objects?: Uint8Array[];
                service_id?: number;
            }[];
        }[] & ({
            type?: number;
            id?: string;
            versions?: {
                service?: number;
                version?: string;
            }[];
            type_caches?: {
                type?: number;
                objects?: Uint8Array[];
                service_id?: number;
            }[];
        } & {
            type?: number;
            id?: string;
            versions?: {
                service?: number;
                version?: string;
            }[] & ({
                service?: number;
                version?: string;
            } & {
                service?: number;
                version?: string;
            } & { [K in Exclude<keyof I["caches"][number]["versions"][number], keyof CMsgSerializedSOCache_Cache_Version>]: never; })[] & { [K_1 in Exclude<keyof I["caches"][number]["versions"], keyof {
                service?: number;
                version?: string;
            }[]>]: never; };
            type_caches?: {
                type?: number;
                objects?: Uint8Array[];
                service_id?: number;
            }[] & ({
                type?: number;
                objects?: Uint8Array[];
                service_id?: number;
            } & {
                type?: number;
                objects?: Uint8Array[] & Uint8Array[] & { [K_2 in Exclude<keyof I["caches"][number]["type_caches"][number]["objects"], keyof Uint8Array[]>]: never; };
                service_id?: number;
            } & { [K_3 in Exclude<keyof I["caches"][number]["type_caches"][number], keyof CMsgSerializedSOCache_TypeCache>]: never; })[] & { [K_4 in Exclude<keyof I["caches"][number]["type_caches"], keyof {
                type?: number;
                objects?: Uint8Array[];
                service_id?: number;
            }[]>]: never; };
        } & { [K_5 in Exclude<keyof I["caches"][number], keyof CMsgSerializedSOCache_Cache>]: never; })[] & { [K_6 in Exclude<keyof I["caches"], keyof {
            type?: number;
            id?: string;
            versions?: {
                service?: number;
                version?: string;
            }[];
            type_caches?: {
                type?: number;
                objects?: Uint8Array[];
                service_id?: number;
            }[];
        }[]>]: never; };
        gc_socache_file_version?: number;
    } & { [K_7 in Exclude<keyof I, keyof CMsgSerializedSOCache>]: never; }>(base?: I): CMsgSerializedSOCache;
    fromPartial<I_1 extends {
        file_version?: number;
        caches?: {
            type?: number;
            id?: string;
            versions?: {
                service?: number;
                version?: string;
            }[];
            type_caches?: {
                type?: number;
                objects?: Uint8Array[];
                service_id?: number;
            }[];
        }[];
        gc_socache_file_version?: number;
    } & {
        file_version?: number;
        caches?: {
            type?: number;
            id?: string;
            versions?: {
                service?: number;
                version?: string;
            }[];
            type_caches?: {
                type?: number;
                objects?: Uint8Array[];
                service_id?: number;
            }[];
        }[] & ({
            type?: number;
            id?: string;
            versions?: {
                service?: number;
                version?: string;
            }[];
            type_caches?: {
                type?: number;
                objects?: Uint8Array[];
                service_id?: number;
            }[];
        } & {
            type?: number;
            id?: string;
            versions?: {
                service?: number;
                version?: string;
            }[] & ({
                service?: number;
                version?: string;
            } & {
                service?: number;
                version?: string;
            } & { [K_8 in Exclude<keyof I_1["caches"][number]["versions"][number], keyof CMsgSerializedSOCache_Cache_Version>]: never; })[] & { [K_9 in Exclude<keyof I_1["caches"][number]["versions"], keyof {
                service?: number;
                version?: string;
            }[]>]: never; };
            type_caches?: {
                type?: number;
                objects?: Uint8Array[];
                service_id?: number;
            }[] & ({
                type?: number;
                objects?: Uint8Array[];
                service_id?: number;
            } & {
                type?: number;
                objects?: Uint8Array[] & Uint8Array[] & { [K_10 in Exclude<keyof I_1["caches"][number]["type_caches"][number]["objects"], keyof Uint8Array[]>]: never; };
                service_id?: number;
            } & { [K_11 in Exclude<keyof I_1["caches"][number]["type_caches"][number], keyof CMsgSerializedSOCache_TypeCache>]: never; })[] & { [K_12 in Exclude<keyof I_1["caches"][number]["type_caches"], keyof {
                type?: number;
                objects?: Uint8Array[];
                service_id?: number;
            }[]>]: never; };
        } & { [K_13 in Exclude<keyof I_1["caches"][number], keyof CMsgSerializedSOCache_Cache>]: never; })[] & { [K_14 in Exclude<keyof I_1["caches"], keyof {
            type?: number;
            id?: string;
            versions?: {
                service?: number;
                version?: string;
            }[];
            type_caches?: {
                type?: number;
                objects?: Uint8Array[];
                service_id?: number;
            }[];
        }[]>]: never; };
        gc_socache_file_version?: number;
    } & { [K_15 in Exclude<keyof I_1, keyof CMsgSerializedSOCache>]: never; }>(object: I_1): CMsgSerializedSOCache;
};
export declare const CMsgSerializedSOCache_TypeCache: {
    fromJSON(object: any): CMsgSerializedSOCache_TypeCache;
    toJSON(message: CMsgSerializedSOCache_TypeCache): unknown;
    create<I extends {
        type?: number;
        objects?: Uint8Array[];
        service_id?: number;
    } & {
        type?: number;
        objects?: Uint8Array[] & Uint8Array[] & { [K in Exclude<keyof I["objects"], keyof Uint8Array[]>]: never; };
        service_id?: number;
    } & { [K_1 in Exclude<keyof I, keyof CMsgSerializedSOCache_TypeCache>]: never; }>(base?: I): CMsgSerializedSOCache_TypeCache;
    fromPartial<I_1 extends {
        type?: number;
        objects?: Uint8Array[];
        service_id?: number;
    } & {
        type?: number;
        objects?: Uint8Array[] & Uint8Array[] & { [K_2 in Exclude<keyof I_1["objects"], keyof Uint8Array[]>]: never; };
        service_id?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgSerializedSOCache_TypeCache>]: never; }>(object: I_1): CMsgSerializedSOCache_TypeCache;
};
export declare const CMsgSerializedSOCache_Cache: {
    fromJSON(object: any): CMsgSerializedSOCache_Cache;
    toJSON(message: CMsgSerializedSOCache_Cache): unknown;
    create<I extends {
        type?: number;
        id?: string;
        versions?: {
            service?: number;
            version?: string;
        }[];
        type_caches?: {
            type?: number;
            objects?: Uint8Array[];
            service_id?: number;
        }[];
    } & {
        type?: number;
        id?: string;
        versions?: {
            service?: number;
            version?: string;
        }[] & ({
            service?: number;
            version?: string;
        } & {
            service?: number;
            version?: string;
        } & { [K in Exclude<keyof I["versions"][number], keyof CMsgSerializedSOCache_Cache_Version>]: never; })[] & { [K_1 in Exclude<keyof I["versions"], keyof {
            service?: number;
            version?: string;
        }[]>]: never; };
        type_caches?: {
            type?: number;
            objects?: Uint8Array[];
            service_id?: number;
        }[] & ({
            type?: number;
            objects?: Uint8Array[];
            service_id?: number;
        } & {
            type?: number;
            objects?: Uint8Array[] & Uint8Array[] & { [K_2 in Exclude<keyof I["type_caches"][number]["objects"], keyof Uint8Array[]>]: never; };
            service_id?: number;
        } & { [K_3 in Exclude<keyof I["type_caches"][number], keyof CMsgSerializedSOCache_TypeCache>]: never; })[] & { [K_4 in Exclude<keyof I["type_caches"], keyof {
            type?: number;
            objects?: Uint8Array[];
            service_id?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I, keyof CMsgSerializedSOCache_Cache>]: never; }>(base?: I): CMsgSerializedSOCache_Cache;
    fromPartial<I_1 extends {
        type?: number;
        id?: string;
        versions?: {
            service?: number;
            version?: string;
        }[];
        type_caches?: {
            type?: number;
            objects?: Uint8Array[];
            service_id?: number;
        }[];
    } & {
        type?: number;
        id?: string;
        versions?: {
            service?: number;
            version?: string;
        }[] & ({
            service?: number;
            version?: string;
        } & {
            service?: number;
            version?: string;
        } & { [K_6 in Exclude<keyof I_1["versions"][number], keyof CMsgSerializedSOCache_Cache_Version>]: never; })[] & { [K_7 in Exclude<keyof I_1["versions"], keyof {
            service?: number;
            version?: string;
        }[]>]: never; };
        type_caches?: {
            type?: number;
            objects?: Uint8Array[];
            service_id?: number;
        }[] & ({
            type?: number;
            objects?: Uint8Array[];
            service_id?: number;
        } & {
            type?: number;
            objects?: Uint8Array[] & Uint8Array[] & { [K_8 in Exclude<keyof I_1["type_caches"][number]["objects"], keyof Uint8Array[]>]: never; };
            service_id?: number;
        } & { [K_9 in Exclude<keyof I_1["type_caches"][number], keyof CMsgSerializedSOCache_TypeCache>]: never; })[] & { [K_10 in Exclude<keyof I_1["type_caches"], keyof {
            type?: number;
            objects?: Uint8Array[];
            service_id?: number;
        }[]>]: never; };
    } & { [K_11 in Exclude<keyof I_1, keyof CMsgSerializedSOCache_Cache>]: never; }>(object: I_1): CMsgSerializedSOCache_Cache;
};
export declare const CMsgSerializedSOCache_Cache_Version: {
    fromJSON(object: any): CMsgSerializedSOCache_Cache_Version;
    toJSON(message: CMsgSerializedSOCache_Cache_Version): unknown;
    create<I extends {
        service?: number;
        version?: string;
    } & {
        service?: number;
        version?: string;
    } & { [K in Exclude<keyof I, keyof CMsgSerializedSOCache_Cache_Version>]: never; }>(base?: I): CMsgSerializedSOCache_Cache_Version;
    fromPartial<I_1 extends {
        service?: number;
        version?: string;
    } & {
        service?: number;
        version?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgSerializedSOCache_Cache_Version>]: never; }>(object: I_1): CMsgSerializedSOCache_Cache_Version;
};
export declare const CMsgGCToClientPollConvarRequest: {
    fromJSON(object: any): CMsgGCToClientPollConvarRequest;
    toJSON(message: CMsgGCToClientPollConvarRequest): unknown;
    create<I extends {
        convar_name?: string;
        poll_id?: number;
    } & {
        convar_name?: string;
        poll_id?: number;
    } & { [K in Exclude<keyof I, keyof CMsgGCToClientPollConvarRequest>]: never; }>(base?: I): CMsgGCToClientPollConvarRequest;
    fromPartial<I_1 extends {
        convar_name?: string;
        poll_id?: number;
    } & {
        convar_name?: string;
        poll_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToClientPollConvarRequest>]: never; }>(object: I_1): CMsgGCToClientPollConvarRequest;
};
export declare const CMsgGCToClientPollConvarResponse: {
    fromJSON(object: any): CMsgGCToClientPollConvarResponse;
    toJSON(message: CMsgGCToClientPollConvarResponse): unknown;
    create<I extends {
        poll_id?: number;
        convar_value?: string;
    } & {
        poll_id?: number;
        convar_value?: string;
    } & { [K in Exclude<keyof I, keyof CMsgGCToClientPollConvarResponse>]: never; }>(base?: I): CMsgGCToClientPollConvarResponse;
    fromPartial<I_1 extends {
        poll_id?: number;
        convar_value?: string;
    } & {
        poll_id?: number;
        convar_value?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToClientPollConvarResponse>]: never; }>(object: I_1): CMsgGCToClientPollConvarResponse;
};
export declare const CGCMsgCompressedMsgToClient: {
    fromJSON(object: any): CGCMsgCompressedMsgToClient;
    toJSON(message: CGCMsgCompressedMsgToClient): unknown;
    create<I extends {
        msg_id?: number;
        compressed_msg?: string;
    } & {
        msg_id?: number;
        compressed_msg?: string;
    } & { [K in Exclude<keyof I, keyof CGCMsgCompressedMsgToClient>]: never; }>(base?: I): CGCMsgCompressedMsgToClient;
    fromPartial<I_1 extends {
        msg_id?: number;
        compressed_msg?: string;
    } & {
        msg_id?: number;
        compressed_msg?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CGCMsgCompressedMsgToClient>]: never; }>(object: I_1): CGCMsgCompressedMsgToClient;
};
export declare const CMsgGCToGCMasterBroadcastMessage: {
    fromJSON(object: any): CMsgGCToGCMasterBroadcastMessage;
    toJSON(message: CMsgGCToGCMasterBroadcastMessage): unknown;
    create<I extends {
        users_per_second?: number;
        send_to_users?: boolean;
        send_to_servers?: boolean;
        msg_id?: number;
        msg_data?: string;
    } & {
        users_per_second?: number;
        send_to_users?: boolean;
        send_to_servers?: boolean;
        msg_id?: number;
        msg_data?: string;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCMasterBroadcastMessage>]: never; }>(base?: I): CMsgGCToGCMasterBroadcastMessage;
    fromPartial<I_1 extends {
        users_per_second?: number;
        send_to_users?: boolean;
        send_to_servers?: boolean;
        msg_id?: number;
        msg_data?: string;
    } & {
        users_per_second?: number;
        send_to_users?: boolean;
        send_to_servers?: boolean;
        msg_id?: number;
        msg_data?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCMasterBroadcastMessage>]: never; }>(object: I_1): CMsgGCToGCMasterBroadcastMessage;
};
export declare const CMsgGCToGCMasterSubscribeToCache: {
    fromJSON(object: any): CMsgGCToGCMasterSubscribeToCache;
    toJSON(message: CMsgGCToGCMasterSubscribeToCache): unknown;
    create<I extends {
        soid_type?: number;
        soid_id?: string;
        account_ids?: number[];
        steam_ids?: string[];
    } & {
        soid_type?: number;
        soid_id?: string;
        account_ids?: number[] & number[] & { [K in Exclude<keyof I["account_ids"], keyof number[]>]: never; };
        steam_ids?: string[] & string[] & { [K_1 in Exclude<keyof I["steam_ids"], keyof string[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgGCToGCMasterSubscribeToCache>]: never; }>(base?: I): CMsgGCToGCMasterSubscribeToCache;
    fromPartial<I_1 extends {
        soid_type?: number;
        soid_id?: string;
        account_ids?: number[];
        steam_ids?: string[];
    } & {
        soid_type?: number;
        soid_id?: string;
        account_ids?: number[] & number[] & { [K_3 in Exclude<keyof I_1["account_ids"], keyof number[]>]: never; };
        steam_ids?: string[] & string[] & { [K_4 in Exclude<keyof I_1["steam_ids"], keyof string[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgGCToGCMasterSubscribeToCache>]: never; }>(object: I_1): CMsgGCToGCMasterSubscribeToCache;
};
export declare const CMsgGCToGCMasterSubscribeToCacheResponse: {
    fromJSON(_: any): CMsgGCToGCMasterSubscribeToCacheResponse;
    toJSON(_: CMsgGCToGCMasterSubscribeToCacheResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgGCToGCMasterSubscribeToCacheResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgGCToGCMasterSubscribeToCacheResponse;
};
export declare const CMsgGCToGCMasterSubscribeToCacheAsync: {
    fromJSON(object: any): CMsgGCToGCMasterSubscribeToCacheAsync;
    toJSON(message: CMsgGCToGCMasterSubscribeToCacheAsync): unknown;
    create<I extends {
        subscribe_msg?: {
            soid_type?: number;
            soid_id?: string;
            account_ids?: number[];
            steam_ids?: string[];
        };
    } & {
        subscribe_msg?: {
            soid_type?: number;
            soid_id?: string;
            account_ids?: number[];
            steam_ids?: string[];
        } & {
            soid_type?: number;
            soid_id?: string;
            account_ids?: number[] & number[] & { [K in Exclude<keyof I["subscribe_msg"]["account_ids"], keyof number[]>]: never; };
            steam_ids?: string[] & string[] & { [K_1 in Exclude<keyof I["subscribe_msg"]["steam_ids"], keyof string[]>]: never; };
        } & { [K_2 in Exclude<keyof I["subscribe_msg"], keyof CMsgGCToGCMasterSubscribeToCache>]: never; };
    } & { [K_3 in Exclude<keyof I, "subscribe_msg">]: never; }>(base?: I): CMsgGCToGCMasterSubscribeToCacheAsync;
    fromPartial<I_1 extends {
        subscribe_msg?: {
            soid_type?: number;
            soid_id?: string;
            account_ids?: number[];
            steam_ids?: string[];
        };
    } & {
        subscribe_msg?: {
            soid_type?: number;
            soid_id?: string;
            account_ids?: number[];
            steam_ids?: string[];
        } & {
            soid_type?: number;
            soid_id?: string;
            account_ids?: number[] & number[] & { [K_4 in Exclude<keyof I_1["subscribe_msg"]["account_ids"], keyof number[]>]: never; };
            steam_ids?: string[] & string[] & { [K_5 in Exclude<keyof I_1["subscribe_msg"]["steam_ids"], keyof string[]>]: never; };
        } & { [K_6 in Exclude<keyof I_1["subscribe_msg"], keyof CMsgGCToGCMasterSubscribeToCache>]: never; };
    } & { [K_7 in Exclude<keyof I_1, "subscribe_msg">]: never; }>(object: I_1): CMsgGCToGCMasterSubscribeToCacheAsync;
};
export declare const CMsgGCToGCMasterUnsubscribeFromCache: {
    fromJSON(object: any): CMsgGCToGCMasterUnsubscribeFromCache;
    toJSON(message: CMsgGCToGCMasterUnsubscribeFromCache): unknown;
    create<I extends {
        soid_type?: number;
        soid_id?: string;
        account_ids?: number[];
        steam_ids?: string[];
    } & {
        soid_type?: number;
        soid_id?: string;
        account_ids?: number[] & number[] & { [K in Exclude<keyof I["account_ids"], keyof number[]>]: never; };
        steam_ids?: string[] & string[] & { [K_1 in Exclude<keyof I["steam_ids"], keyof string[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgGCToGCMasterUnsubscribeFromCache>]: never; }>(base?: I): CMsgGCToGCMasterUnsubscribeFromCache;
    fromPartial<I_1 extends {
        soid_type?: number;
        soid_id?: string;
        account_ids?: number[];
        steam_ids?: string[];
    } & {
        soid_type?: number;
        soid_id?: string;
        account_ids?: number[] & number[] & { [K_3 in Exclude<keyof I_1["account_ids"], keyof number[]>]: never; };
        steam_ids?: string[] & string[] & { [K_4 in Exclude<keyof I_1["steam_ids"], keyof string[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgGCToGCMasterUnsubscribeFromCache>]: never; }>(object: I_1): CMsgGCToGCMasterUnsubscribeFromCache;
};
export declare const CMsgGCToGCMasterDestroyCache: {
    fromJSON(object: any): CMsgGCToGCMasterDestroyCache;
    toJSON(message: CMsgGCToGCMasterDestroyCache): unknown;
    create<I extends {
        soid_type?: number;
        soid_id?: string;
    } & {
        soid_type?: number;
        soid_id?: string;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCMasterDestroyCache>]: never; }>(base?: I): CMsgGCToGCMasterDestroyCache;
    fromPartial<I_1 extends {
        soid_type?: number;
        soid_id?: string;
    } & {
        soid_type?: number;
        soid_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCMasterDestroyCache>]: never; }>(object: I_1): CMsgGCToGCMasterDestroyCache;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
