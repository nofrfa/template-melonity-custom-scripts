import { CExtraMsgBlock } from "./gcsdk_gcmessages";
import { EGCPlatform } from "./steammessages";
export declare const protobufPackage = "";
export declare enum EGCBaseMsg {
    k_EMsgGCReplicateConVars = 4002,
    k_EMsgGCConVarUpdated = 4003,
    k_EMsgGCInviteToParty = 4501,
    k_EMsgGCInvitationCreated = 4502,
    k_EMsgGCPartyInviteResponse = 4503,
    k_EMsgGCKickFromParty = 4504,
    k_EMsgGCLeaveParty = 4505,
    k_EMsgGCServerAvailable = 4506,
    k_EMsgGCClientConnectToServer = 4507,
    k_EMsgGCGameServerInfo = 4508,
    k_EMsgGCLANServerAvailable = 4511,
    k_EMsgGCInviteToLobby = 4512,
    k_EMsgGCLobbyInviteResponse = 4513,
    k_EMsgGCToClientPollFileRequest = 4514,
    k_EMsgGCToClientPollFileResponse = 4515,
    k_EMsgGCToGCPerformManualOp = 4516,
    k_EMsgGCToGCPerformManualOpCompleted = 4517,
    k_EMsgGCToGCReloadServerRegionSettings = 4518,
    k_EMsgGCAdditionalWelcomeMsgList = 4519,
    k_EMsgGCToClientApplyRemoteConVars = 4520,
    k_EMsgGCToServerApplyRemoteConVars = 4521,
    k_EMsgClientToGCIntegrityStatus = 4522,
    k_EMsgClientToGCAggregateMetrics = 4523,
    k_EMsgGCToClientAggregateMetricsBackoff = 4524,
    UNRECOGNIZED = -1
}
export declare function eGCBaseMsgFromJSON(object: any): EGCBaseMsg;
export declare function eGCBaseMsgToJSON(object: EGCBaseMsg): string;
export declare enum ECustomGameInstallStatus {
    k_ECustomGameInstallStatus_Unknown = 0,
    k_ECustomGameInstallStatus_Ready = 1,
    k_ECustomGameInstallStatus_Busy = 2,
    k_ECustomGameInstallStatus_FailedGeneric = 101,
    k_ECustomGameInstallStatus_FailedInternalError = 102,
    k_ECustomGameInstallStatus_RequestedTimestampTooOld = 103,
    k_ECustomGameInstallStatus_RequestedTimestampTooNew = 104,
    k_ECustomGameInstallStatus_CRCMismatch = 105,
    k_ECustomGameInstallStatus_FailedSteam = 106,
    k_ECustomGameInstallStatus_FailedCanceled = 107,
    UNRECOGNIZED = -1
}
export declare function eCustomGameInstallStatusFromJSON(object: any): ECustomGameInstallStatus;
export declare function eCustomGameInstallStatusToJSON(object: ECustomGameInstallStatus): string;
export interface CGCStorePurchaseInit_LineItem {
    item_def_id: number;
    quantity: number;
    cost_in_local_currency: number;
    purchase_type: number;
    source_reference_id: string;
}
export interface CMsgGCStorePurchaseInit {
    country: string;
    language: number;
    currency: number;
    line_items: CGCStorePurchaseInit_LineItem[];
}
export interface CMsgGCStorePurchaseInitResponse {
    result: number;
    txn_id: string;
}
export interface CMsgClientPingData {
    relay_codes: number[];
    relay_pings: number[];
    region_codes: number[];
    region_pings: number[];
    region_ping_failed_bitmask: number;
}
export interface CMsgInviteToParty {
    steam_id: string;
    client_version: number;
    team_id: number;
    as_coach: boolean;
    ping_data: CMsgClientPingData | undefined;
}
export interface CMsgInviteToLobby {
    steam_id: string;
    client_version: number;
}
export interface CMsgInvitationCreated {
    group_id: string;
    steam_id: string;
    user_offline: boolean;
}
export interface CMsgPartyInviteResponse {
    party_id: string;
    accept: boolean;
    client_version: number;
    ping_data: CMsgClientPingData | undefined;
}
export interface CMsgLobbyInviteResponse {
    lobby_id: string;
    accept: boolean;
    client_version: number;
    custom_game_crc: string;
    custom_game_timestamp: number;
}
export interface CMsgKickFromParty {
    steam_id: string;
}
export interface CMsgLeaveParty {
}
export interface CMsgCustomGameInstallStatus {
    status: ECustomGameInstallStatus;
    message: string;
    latest_timestamp_from_steam: number;
}
export interface CMsgServerAvailable {
    custom_game_install_status: CMsgCustomGameInstallStatus | undefined;
}
export interface CMsgLANServerAvailable {
    lobby_id: string;
}
export interface CSOEconGameAccountClient {
    additional_backpack_slots: number;
    trial_account: boolean;
    eligible_for_online_play: boolean;
    need_to_choose_most_helpful_friend: boolean;
    in_coaches_list: boolean;
    trade_ban_expiration: number;
    duel_ban_expiration: number;
    made_first_purchase: boolean;
}
export interface CMsgApplyStrangePart {
    strange_part_item_id: string;
    item_item_id: string;
}
export interface CMsgApplyPennantUpgrade {
    upgrade_item_id: string;
    pennant_item_id: string;
}
export interface CMsgApplyEggEssence {
    essence_item_id: string;
    egg_item_id: string;
}
export interface CSOEconItemAttribute {
    def_index: number;
    value: number;
    value_bytes: string;
}
export interface CSOEconItemEquipped {
    new_class: number;
    new_slot: number;
}
export interface CSOEconItem {
    id: string;
    account_id: number;
    inventory: number;
    def_index: number;
    quantity: number;
    level: number;
    quality: number;
    flags: number;
    origin: number;
    attribute: CSOEconItemAttribute[];
    interior_item: CSOEconItem | undefined;
    style: number;
    original_id: string;
    equipped_state: CSOEconItemEquipped[];
}
export interface CMsgSortItems {
    sort_type: number;
}
export interface CMsgConVarValue {
    name: string;
    value: string;
}
export interface CMsgReplicateConVars {
    convars: CMsgConVarValue[];
}
export interface CMsgItemAcknowledged {
    account_id: number;
    inventory: number;
    def_index: number;
    quality: number;
    rarity: number;
    origin: number;
}
export interface CMsgSetItemPositions {
    item_positions: CMsgSetItemPositions_ItemPosition[];
}
export interface CMsgSetItemPositions_ItemPosition {
    item_id: string;
    position: number;
}
export interface CMsgGCStorePurchaseCancel {
    txn_id: string;
}
export interface CMsgGCStorePurchaseCancelResponse {
    result: number;
}
export interface CMsgGCStorePurchaseFinalize {
    txn_id: string;
}
export interface CMsgGCStorePurchaseFinalizeResponse {
    result: number;
    item_ids: string[];
}
export interface CMsgGCToGCBannedWordListUpdated {
    group_id: number;
}
export interface CMsgGCToGCDirtySDOCache {
    sdo_type: number;
    key_uint64: string;
}
export interface CMsgSDONoMemcached {
}
export interface CMsgGCToGCUpdateSQLKeyValue {
    key_name: string;
}
export interface CMsgGCServerVersionUpdated {
    server_version: number;
}
export interface CMsgGCClientVersionUpdated {
    client_version: number;
}
export interface CMsgGCToGCWebAPIAccountChanged {
}
export interface CMsgExtractGems {
    tool_item_id: string;
    item_item_id: string;
    item_socket_id: number;
}
export interface CMsgExtractGemsResponse {
    item_id: string;
    response: CMsgExtractGemsResponse_EExtractGems;
}
export declare enum CMsgExtractGemsResponse_EExtractGems {
    k_ExtractGems_Succeeded = 0,
    k_ExtractGems_Failed_ToolIsInvalid = 1,
    k_ExtractGems_Failed_ItemIsInvalid = 2,
    k_ExtractGems_Failed_ToolCannotRemoveGem = 3,
    k_ExtractGems_Failed_FailedToRemoveGem = 4,
    UNRECOGNIZED = -1
}
export declare function cMsgExtractGemsResponse_EExtractGemsFromJSON(object: any): CMsgExtractGemsResponse_EExtractGems;
export declare function cMsgExtractGemsResponse_EExtractGemsToJSON(object: CMsgExtractGemsResponse_EExtractGems): string;
export interface CMsgAddSocket {
    tool_item_id: string;
    item_item_id: string;
    unusual: boolean;
}
export interface CMsgAddSocketResponse {
    item_id: string;
    updated_socket_index: number[];
    response: CMsgAddSocketResponse_EAddSocket;
}
export declare enum CMsgAddSocketResponse_EAddSocket {
    k_AddSocket_Succeeded = 0,
    k_AddSocket_Failed_ToolIsInvalid = 1,
    k_AddSocket_Failed_ItemCannotBeSocketed = 2,
    k_AddSocket_Failed_FailedToAddSocket = 3,
    UNRECOGNIZED = -1
}
export declare function cMsgAddSocketResponse_EAddSocketFromJSON(object: any): CMsgAddSocketResponse_EAddSocket;
export declare function cMsgAddSocketResponse_EAddSocketToJSON(object: CMsgAddSocketResponse_EAddSocket): string;
export interface CMsgAddItemToSocketData {
    gem_item_id: string;
    socket_index: number;
}
export interface CMsgAddItemToSocket {
    item_item_id: string;
    gems_to_socket: CMsgAddItemToSocketData[];
}
export interface CMsgAddItemToSocketResponse {
    item_item_id: string;
    updated_socket_index: number[];
    response: CMsgAddItemToSocketResponse_EAddGem;
}
export declare enum CMsgAddItemToSocketResponse_EAddGem {
    k_AddGem_Succeeded = 0,
    k_AddGem_Failed_GemIsInvalid = 1,
    k_AddGem_Failed_ItemIsInvalid = 2,
    k_AddGem_Failed_FailedToAddGem = 3,
    k_AddGem_Failed_InvalidGemTypeForSocket = 4,
    k_AddGem_Failed_InvalidGemTypeForHero = 5,
    k_AddGem_Failed_InvalidGemTypeForSlot = 6,
    k_AddGem_Failed_SocketContainsUnremovableGem = 7,
    UNRECOGNIZED = -1
}
export declare function cMsgAddItemToSocketResponse_EAddGemFromJSON(object: any): CMsgAddItemToSocketResponse_EAddGem;
export declare function cMsgAddItemToSocketResponse_EAddGemToJSON(object: CMsgAddItemToSocketResponse_EAddGem): string;
export interface CMsgResetStrangeGemCount {
    item_item_id: string;
    socket_index: number;
}
export interface CMsgResetStrangeGemCountResponse {
    response: CMsgResetStrangeGemCountResponse_EResetGem;
}
export declare enum CMsgResetStrangeGemCountResponse_EResetGem {
    k_ResetGem_Succeeded = 0,
    k_ResetGem_Failed_FailedToResetGem = 1,
    k_ResetGem_Failed_ItemIsInvalid = 2,
    k_ResetGem_Failed_InvalidSocketId = 3,
    k_ResetGem_Failed_SocketCannotBeReset = 4,
    UNRECOGNIZED = -1
}
export declare function cMsgResetStrangeGemCountResponse_EResetGemFromJSON(object: any): CMsgResetStrangeGemCountResponse_EResetGem;
export declare function cMsgResetStrangeGemCountResponse_EResetGemToJSON(object: CMsgResetStrangeGemCountResponse_EResetGem): string;
export interface CMsgGCToClientPollFileRequest {
    file_name: string;
    client_version: number;
    poll_id: number;
}
export interface CMsgGCToClientPollFileResponse {
    poll_id: number;
    file_size: number;
    file_crc: number;
}
export interface CMsgGCToGCPerformManualOp {
    op_id: string;
    group_code: number;
}
export interface CMsgGCToGCPerformManualOpCompleted {
    success: boolean;
    source_gc: number;
}
export interface CMsgGCToGCReloadServerRegionSettings {
}
export interface CMsgGCAdditionalWelcomeMsgList {
    welcome_messages: CExtraMsgBlock[];
}
export interface CMsgApplyRemoteConVars {
    con_vars: CMsgApplyRemoteConVars_ConVar[];
}
export interface CMsgApplyRemoteConVars_ConVar {
    name: string;
    value: string;
    version_min: number;
    version_max: number;
    platform: EGCPlatform;
}
export interface CMsgGCToClientApplyRemoteConVars {
    msg: CMsgApplyRemoteConVars | undefined;
}
export interface CMsgGCToServerApplyRemoteConVars {
    msg: CMsgApplyRemoteConVars | undefined;
}
export interface CMsgClientToGCIntegrityStatus {
    report: string;
    secure_allowed: boolean;
    diagnostics: CMsgClientToGCIntegrityStatus_keyvalue[];
}
export interface CMsgClientToGCIntegrityStatus_keyvalue {
    id: number;
    extended: number;
    value: string;
    string_value: string;
}
export interface CMsgClientToGCAggregateMetrics {
    metrics: CMsgClientToGCAggregateMetrics_SingleMetric[];
}
export interface CMsgClientToGCAggregateMetrics_SingleMetric {
    metric_name: string;
    metric_count: number;
}
export interface CMsgGCToClientAggregateMetricsBackoff {
    upload_rate_modifier: number;
}
export declare const CGCStorePurchaseInit_LineItem: {
    fromJSON(object: any): CGCStorePurchaseInit_LineItem;
    toJSON(message: CGCStorePurchaseInit_LineItem): unknown;
    create<I extends {
        item_def_id?: number;
        quantity?: number;
        cost_in_local_currency?: number;
        purchase_type?: number;
        source_reference_id?: string;
    } & {
        item_def_id?: number;
        quantity?: number;
        cost_in_local_currency?: number;
        purchase_type?: number;
        source_reference_id?: string;
    } & { [K in Exclude<keyof I, keyof CGCStorePurchaseInit_LineItem>]: never; }>(base?: I): CGCStorePurchaseInit_LineItem;
    fromPartial<I_1 extends {
        item_def_id?: number;
        quantity?: number;
        cost_in_local_currency?: number;
        purchase_type?: number;
        source_reference_id?: string;
    } & {
        item_def_id?: number;
        quantity?: number;
        cost_in_local_currency?: number;
        purchase_type?: number;
        source_reference_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CGCStorePurchaseInit_LineItem>]: never; }>(object: I_1): CGCStorePurchaseInit_LineItem;
};
export declare const CMsgGCStorePurchaseInit: {
    fromJSON(object: any): CMsgGCStorePurchaseInit;
    toJSON(message: CMsgGCStorePurchaseInit): unknown;
    create<I extends {
        country?: string;
        language?: number;
        currency?: number;
        line_items?: {
            item_def_id?: number;
            quantity?: number;
            cost_in_local_currency?: number;
            purchase_type?: number;
            source_reference_id?: string;
        }[];
    } & {
        country?: string;
        language?: number;
        currency?: number;
        line_items?: {
            item_def_id?: number;
            quantity?: number;
            cost_in_local_currency?: number;
            purchase_type?: number;
            source_reference_id?: string;
        }[] & ({
            item_def_id?: number;
            quantity?: number;
            cost_in_local_currency?: number;
            purchase_type?: number;
            source_reference_id?: string;
        } & {
            item_def_id?: number;
            quantity?: number;
            cost_in_local_currency?: number;
            purchase_type?: number;
            source_reference_id?: string;
        } & { [K in Exclude<keyof I["line_items"][number], keyof CGCStorePurchaseInit_LineItem>]: never; })[] & { [K_1 in Exclude<keyof I["line_items"], keyof {
            item_def_id?: number;
            quantity?: number;
            cost_in_local_currency?: number;
            purchase_type?: number;
            source_reference_id?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgGCStorePurchaseInit>]: never; }>(base?: I): CMsgGCStorePurchaseInit;
    fromPartial<I_1 extends {
        country?: string;
        language?: number;
        currency?: number;
        line_items?: {
            item_def_id?: number;
            quantity?: number;
            cost_in_local_currency?: number;
            purchase_type?: number;
            source_reference_id?: string;
        }[];
    } & {
        country?: string;
        language?: number;
        currency?: number;
        line_items?: {
            item_def_id?: number;
            quantity?: number;
            cost_in_local_currency?: number;
            purchase_type?: number;
            source_reference_id?: string;
        }[] & ({
            item_def_id?: number;
            quantity?: number;
            cost_in_local_currency?: number;
            purchase_type?: number;
            source_reference_id?: string;
        } & {
            item_def_id?: number;
            quantity?: number;
            cost_in_local_currency?: number;
            purchase_type?: number;
            source_reference_id?: string;
        } & { [K_3 in Exclude<keyof I_1["line_items"][number], keyof CGCStorePurchaseInit_LineItem>]: never; })[] & { [K_4 in Exclude<keyof I_1["line_items"], keyof {
            item_def_id?: number;
            quantity?: number;
            cost_in_local_currency?: number;
            purchase_type?: number;
            source_reference_id?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgGCStorePurchaseInit>]: never; }>(object: I_1): CMsgGCStorePurchaseInit;
};
export declare const CMsgGCStorePurchaseInitResponse: {
    fromJSON(object: any): CMsgGCStorePurchaseInitResponse;
    toJSON(message: CMsgGCStorePurchaseInitResponse): unknown;
    create<I extends {
        result?: number;
        txn_id?: string;
    } & {
        result?: number;
        txn_id?: string;
    } & { [K in Exclude<keyof I, keyof CMsgGCStorePurchaseInitResponse>]: never; }>(base?: I): CMsgGCStorePurchaseInitResponse;
    fromPartial<I_1 extends {
        result?: number;
        txn_id?: string;
    } & {
        result?: number;
        txn_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCStorePurchaseInitResponse>]: never; }>(object: I_1): CMsgGCStorePurchaseInitResponse;
};
export declare const CMsgClientPingData: {
    fromJSON(object: any): CMsgClientPingData;
    toJSON(message: CMsgClientPingData): unknown;
    create<I extends {
        relay_codes?: number[];
        relay_pings?: number[];
        region_codes?: number[];
        region_pings?: number[];
        region_ping_failed_bitmask?: number;
    } & {
        relay_codes?: number[] & number[] & { [K in Exclude<keyof I["relay_codes"], keyof number[]>]: never; };
        relay_pings?: number[] & number[] & { [K_1 in Exclude<keyof I["relay_pings"], keyof number[]>]: never; };
        region_codes?: number[] & number[] & { [K_2 in Exclude<keyof I["region_codes"], keyof number[]>]: never; };
        region_pings?: number[] & number[] & { [K_3 in Exclude<keyof I["region_pings"], keyof number[]>]: never; };
        region_ping_failed_bitmask?: number;
    } & { [K_4 in Exclude<keyof I, keyof CMsgClientPingData>]: never; }>(base?: I): CMsgClientPingData;
    fromPartial<I_1 extends {
        relay_codes?: number[];
        relay_pings?: number[];
        region_codes?: number[];
        region_pings?: number[];
        region_ping_failed_bitmask?: number;
    } & {
        relay_codes?: number[] & number[] & { [K_5 in Exclude<keyof I_1["relay_codes"], keyof number[]>]: never; };
        relay_pings?: number[] & number[] & { [K_6 in Exclude<keyof I_1["relay_pings"], keyof number[]>]: never; };
        region_codes?: number[] & number[] & { [K_7 in Exclude<keyof I_1["region_codes"], keyof number[]>]: never; };
        region_pings?: number[] & number[] & { [K_8 in Exclude<keyof I_1["region_pings"], keyof number[]>]: never; };
        region_ping_failed_bitmask?: number;
    } & { [K_9 in Exclude<keyof I_1, keyof CMsgClientPingData>]: never; }>(object: I_1): CMsgClientPingData;
};
export declare const CMsgInviteToParty: {
    fromJSON(object: any): CMsgInviteToParty;
    toJSON(message: CMsgInviteToParty): unknown;
    create<I extends {
        steam_id?: string;
        client_version?: number;
        team_id?: number;
        as_coach?: boolean;
        ping_data?: {
            relay_codes?: number[];
            relay_pings?: number[];
            region_codes?: number[];
            region_pings?: number[];
            region_ping_failed_bitmask?: number;
        };
    } & {
        steam_id?: string;
        client_version?: number;
        team_id?: number;
        as_coach?: boolean;
        ping_data?: {
            relay_codes?: number[];
            relay_pings?: number[];
            region_codes?: number[];
            region_pings?: number[];
            region_ping_failed_bitmask?: number;
        } & {
            relay_codes?: number[] & number[] & { [K in Exclude<keyof I["ping_data"]["relay_codes"], keyof number[]>]: never; };
            relay_pings?: number[] & number[] & { [K_1 in Exclude<keyof I["ping_data"]["relay_pings"], keyof number[]>]: never; };
            region_codes?: number[] & number[] & { [K_2 in Exclude<keyof I["ping_data"]["region_codes"], keyof number[]>]: never; };
            region_pings?: number[] & number[] & { [K_3 in Exclude<keyof I["ping_data"]["region_pings"], keyof number[]>]: never; };
            region_ping_failed_bitmask?: number;
        } & { [K_4 in Exclude<keyof I["ping_data"], keyof CMsgClientPingData>]: never; };
    } & { [K_5 in Exclude<keyof I, keyof CMsgInviteToParty>]: never; }>(base?: I): CMsgInviteToParty;
    fromPartial<I_1 extends {
        steam_id?: string;
        client_version?: number;
        team_id?: number;
        as_coach?: boolean;
        ping_data?: {
            relay_codes?: number[];
            relay_pings?: number[];
            region_codes?: number[];
            region_pings?: number[];
            region_ping_failed_bitmask?: number;
        };
    } & {
        steam_id?: string;
        client_version?: number;
        team_id?: number;
        as_coach?: boolean;
        ping_data?: {
            relay_codes?: number[];
            relay_pings?: number[];
            region_codes?: number[];
            region_pings?: number[];
            region_ping_failed_bitmask?: number;
        } & {
            relay_codes?: number[] & number[] & { [K_6 in Exclude<keyof I_1["ping_data"]["relay_codes"], keyof number[]>]: never; };
            relay_pings?: number[] & number[] & { [K_7 in Exclude<keyof I_1["ping_data"]["relay_pings"], keyof number[]>]: never; };
            region_codes?: number[] & number[] & { [K_8 in Exclude<keyof I_1["ping_data"]["region_codes"], keyof number[]>]: never; };
            region_pings?: number[] & number[] & { [K_9 in Exclude<keyof I_1["ping_data"]["region_pings"], keyof number[]>]: never; };
            region_ping_failed_bitmask?: number;
        } & { [K_10 in Exclude<keyof I_1["ping_data"], keyof CMsgClientPingData>]: never; };
    } & { [K_11 in Exclude<keyof I_1, keyof CMsgInviteToParty>]: never; }>(object: I_1): CMsgInviteToParty;
};
export declare const CMsgInviteToLobby: {
    fromJSON(object: any): CMsgInviteToLobby;
    toJSON(message: CMsgInviteToLobby): unknown;
    create<I extends {
        steam_id?: string;
        client_version?: number;
    } & {
        steam_id?: string;
        client_version?: number;
    } & { [K in Exclude<keyof I, keyof CMsgInviteToLobby>]: never; }>(base?: I): CMsgInviteToLobby;
    fromPartial<I_1 extends {
        steam_id?: string;
        client_version?: number;
    } & {
        steam_id?: string;
        client_version?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgInviteToLobby>]: never; }>(object: I_1): CMsgInviteToLobby;
};
export declare const CMsgInvitationCreated: {
    fromJSON(object: any): CMsgInvitationCreated;
    toJSON(message: CMsgInvitationCreated): unknown;
    create<I extends {
        group_id?: string;
        steam_id?: string;
        user_offline?: boolean;
    } & {
        group_id?: string;
        steam_id?: string;
        user_offline?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgInvitationCreated>]: never; }>(base?: I): CMsgInvitationCreated;
    fromPartial<I_1 extends {
        group_id?: string;
        steam_id?: string;
        user_offline?: boolean;
    } & {
        group_id?: string;
        steam_id?: string;
        user_offline?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgInvitationCreated>]: never; }>(object: I_1): CMsgInvitationCreated;
};
export declare const CMsgPartyInviteResponse: {
    fromJSON(object: any): CMsgPartyInviteResponse;
    toJSON(message: CMsgPartyInviteResponse): unknown;
    create<I extends {
        party_id?: string;
        accept?: boolean;
        client_version?: number;
        ping_data?: {
            relay_codes?: number[];
            relay_pings?: number[];
            region_codes?: number[];
            region_pings?: number[];
            region_ping_failed_bitmask?: number;
        };
    } & {
        party_id?: string;
        accept?: boolean;
        client_version?: number;
        ping_data?: {
            relay_codes?: number[];
            relay_pings?: number[];
            region_codes?: number[];
            region_pings?: number[];
            region_ping_failed_bitmask?: number;
        } & {
            relay_codes?: number[] & number[] & { [K in Exclude<keyof I["ping_data"]["relay_codes"], keyof number[]>]: never; };
            relay_pings?: number[] & number[] & { [K_1 in Exclude<keyof I["ping_data"]["relay_pings"], keyof number[]>]: never; };
            region_codes?: number[] & number[] & { [K_2 in Exclude<keyof I["ping_data"]["region_codes"], keyof number[]>]: never; };
            region_pings?: number[] & number[] & { [K_3 in Exclude<keyof I["ping_data"]["region_pings"], keyof number[]>]: never; };
            region_ping_failed_bitmask?: number;
        } & { [K_4 in Exclude<keyof I["ping_data"], keyof CMsgClientPingData>]: never; };
    } & { [K_5 in Exclude<keyof I, keyof CMsgPartyInviteResponse>]: never; }>(base?: I): CMsgPartyInviteResponse;
    fromPartial<I_1 extends {
        party_id?: string;
        accept?: boolean;
        client_version?: number;
        ping_data?: {
            relay_codes?: number[];
            relay_pings?: number[];
            region_codes?: number[];
            region_pings?: number[];
            region_ping_failed_bitmask?: number;
        };
    } & {
        party_id?: string;
        accept?: boolean;
        client_version?: number;
        ping_data?: {
            relay_codes?: number[];
            relay_pings?: number[];
            region_codes?: number[];
            region_pings?: number[];
            region_ping_failed_bitmask?: number;
        } & {
            relay_codes?: number[] & number[] & { [K_6 in Exclude<keyof I_1["ping_data"]["relay_codes"], keyof number[]>]: never; };
            relay_pings?: number[] & number[] & { [K_7 in Exclude<keyof I_1["ping_data"]["relay_pings"], keyof number[]>]: never; };
            region_codes?: number[] & number[] & { [K_8 in Exclude<keyof I_1["ping_data"]["region_codes"], keyof number[]>]: never; };
            region_pings?: number[] & number[] & { [K_9 in Exclude<keyof I_1["ping_data"]["region_pings"], keyof number[]>]: never; };
            region_ping_failed_bitmask?: number;
        } & { [K_10 in Exclude<keyof I_1["ping_data"], keyof CMsgClientPingData>]: never; };
    } & { [K_11 in Exclude<keyof I_1, keyof CMsgPartyInviteResponse>]: never; }>(object: I_1): CMsgPartyInviteResponse;
};
export declare const CMsgLobbyInviteResponse: {
    fromJSON(object: any): CMsgLobbyInviteResponse;
    toJSON(message: CMsgLobbyInviteResponse): unknown;
    create<I extends {
        lobby_id?: string;
        accept?: boolean;
        client_version?: number;
        custom_game_crc?: string;
        custom_game_timestamp?: number;
    } & {
        lobby_id?: string;
        accept?: boolean;
        client_version?: number;
        custom_game_crc?: string;
        custom_game_timestamp?: number;
    } & { [K in Exclude<keyof I, keyof CMsgLobbyInviteResponse>]: never; }>(base?: I): CMsgLobbyInviteResponse;
    fromPartial<I_1 extends {
        lobby_id?: string;
        accept?: boolean;
        client_version?: number;
        custom_game_crc?: string;
        custom_game_timestamp?: number;
    } & {
        lobby_id?: string;
        accept?: boolean;
        client_version?: number;
        custom_game_crc?: string;
        custom_game_timestamp?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgLobbyInviteResponse>]: never; }>(object: I_1): CMsgLobbyInviteResponse;
};
export declare const CMsgKickFromParty: {
    fromJSON(object: any): CMsgKickFromParty;
    toJSON(message: CMsgKickFromParty): unknown;
    create<I extends {
        steam_id?: string;
    } & {
        steam_id?: string;
    } & { [K in Exclude<keyof I, "steam_id">]: never; }>(base?: I): CMsgKickFromParty;
    fromPartial<I_1 extends {
        steam_id?: string;
    } & {
        steam_id?: string;
    } & { [K_1 in Exclude<keyof I_1, "steam_id">]: never; }>(object: I_1): CMsgKickFromParty;
};
export declare const CMsgLeaveParty: {
    fromJSON(_: any): CMsgLeaveParty;
    toJSON(_: CMsgLeaveParty): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgLeaveParty;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgLeaveParty;
};
export declare const CMsgCustomGameInstallStatus: {
    fromJSON(object: any): CMsgCustomGameInstallStatus;
    toJSON(message: CMsgCustomGameInstallStatus): unknown;
    create<I extends {
        status?: ECustomGameInstallStatus;
        message?: string;
        latest_timestamp_from_steam?: number;
    } & {
        status?: ECustomGameInstallStatus;
        message?: string;
        latest_timestamp_from_steam?: number;
    } & { [K in Exclude<keyof I, keyof CMsgCustomGameInstallStatus>]: never; }>(base?: I): CMsgCustomGameInstallStatus;
    fromPartial<I_1 extends {
        status?: ECustomGameInstallStatus;
        message?: string;
        latest_timestamp_from_steam?: number;
    } & {
        status?: ECustomGameInstallStatus;
        message?: string;
        latest_timestamp_from_steam?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgCustomGameInstallStatus>]: never; }>(object: I_1): CMsgCustomGameInstallStatus;
};
export declare const CMsgServerAvailable: {
    fromJSON(object: any): CMsgServerAvailable;
    toJSON(message: CMsgServerAvailable): unknown;
    create<I extends {
        custom_game_install_status?: {
            status?: ECustomGameInstallStatus;
            message?: string;
            latest_timestamp_from_steam?: number;
        };
    } & {
        custom_game_install_status?: {
            status?: ECustomGameInstallStatus;
            message?: string;
            latest_timestamp_from_steam?: number;
        } & {
            status?: ECustomGameInstallStatus;
            message?: string;
            latest_timestamp_from_steam?: number;
        } & { [K in Exclude<keyof I["custom_game_install_status"], keyof CMsgCustomGameInstallStatus>]: never; };
    } & { [K_1 in Exclude<keyof I, "custom_game_install_status">]: never; }>(base?: I): CMsgServerAvailable;
    fromPartial<I_1 extends {
        custom_game_install_status?: {
            status?: ECustomGameInstallStatus;
            message?: string;
            latest_timestamp_from_steam?: number;
        };
    } & {
        custom_game_install_status?: {
            status?: ECustomGameInstallStatus;
            message?: string;
            latest_timestamp_from_steam?: number;
        } & {
            status?: ECustomGameInstallStatus;
            message?: string;
            latest_timestamp_from_steam?: number;
        } & { [K_2 in Exclude<keyof I_1["custom_game_install_status"], keyof CMsgCustomGameInstallStatus>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "custom_game_install_status">]: never; }>(object: I_1): CMsgServerAvailable;
};
export declare const CMsgLANServerAvailable: {
    fromJSON(object: any): CMsgLANServerAvailable;
    toJSON(message: CMsgLANServerAvailable): unknown;
    create<I extends {
        lobby_id?: string;
    } & {
        lobby_id?: string;
    } & { [K in Exclude<keyof I, "lobby_id">]: never; }>(base?: I): CMsgLANServerAvailable;
    fromPartial<I_1 extends {
        lobby_id?: string;
    } & {
        lobby_id?: string;
    } & { [K_1 in Exclude<keyof I_1, "lobby_id">]: never; }>(object: I_1): CMsgLANServerAvailable;
};
export declare const CSOEconGameAccountClient: {
    fromJSON(object: any): CSOEconGameAccountClient;
    toJSON(message: CSOEconGameAccountClient): unknown;
    create<I extends {
        additional_backpack_slots?: number;
        trial_account?: boolean;
        eligible_for_online_play?: boolean;
        need_to_choose_most_helpful_friend?: boolean;
        in_coaches_list?: boolean;
        trade_ban_expiration?: number;
        duel_ban_expiration?: number;
        made_first_purchase?: boolean;
    } & {
        additional_backpack_slots?: number;
        trial_account?: boolean;
        eligible_for_online_play?: boolean;
        need_to_choose_most_helpful_friend?: boolean;
        in_coaches_list?: boolean;
        trade_ban_expiration?: number;
        duel_ban_expiration?: number;
        made_first_purchase?: boolean;
    } & { [K in Exclude<keyof I, keyof CSOEconGameAccountClient>]: never; }>(base?: I): CSOEconGameAccountClient;
    fromPartial<I_1 extends {
        additional_backpack_slots?: number;
        trial_account?: boolean;
        eligible_for_online_play?: boolean;
        need_to_choose_most_helpful_friend?: boolean;
        in_coaches_list?: boolean;
        trade_ban_expiration?: number;
        duel_ban_expiration?: number;
        made_first_purchase?: boolean;
    } & {
        additional_backpack_slots?: number;
        trial_account?: boolean;
        eligible_for_online_play?: boolean;
        need_to_choose_most_helpful_friend?: boolean;
        in_coaches_list?: boolean;
        trade_ban_expiration?: number;
        duel_ban_expiration?: number;
        made_first_purchase?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CSOEconGameAccountClient>]: never; }>(object: I_1): CSOEconGameAccountClient;
};
export declare const CMsgApplyStrangePart: {
    fromJSON(object: any): CMsgApplyStrangePart;
    toJSON(message: CMsgApplyStrangePart): unknown;
    create<I extends {
        strange_part_item_id?: string;
        item_item_id?: string;
    } & {
        strange_part_item_id?: string;
        item_item_id?: string;
    } & { [K in Exclude<keyof I, keyof CMsgApplyStrangePart>]: never; }>(base?: I): CMsgApplyStrangePart;
    fromPartial<I_1 extends {
        strange_part_item_id?: string;
        item_item_id?: string;
    } & {
        strange_part_item_id?: string;
        item_item_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgApplyStrangePart>]: never; }>(object: I_1): CMsgApplyStrangePart;
};
export declare const CMsgApplyPennantUpgrade: {
    fromJSON(object: any): CMsgApplyPennantUpgrade;
    toJSON(message: CMsgApplyPennantUpgrade): unknown;
    create<I extends {
        upgrade_item_id?: string;
        pennant_item_id?: string;
    } & {
        upgrade_item_id?: string;
        pennant_item_id?: string;
    } & { [K in Exclude<keyof I, keyof CMsgApplyPennantUpgrade>]: never; }>(base?: I): CMsgApplyPennantUpgrade;
    fromPartial<I_1 extends {
        upgrade_item_id?: string;
        pennant_item_id?: string;
    } & {
        upgrade_item_id?: string;
        pennant_item_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgApplyPennantUpgrade>]: never; }>(object: I_1): CMsgApplyPennantUpgrade;
};
export declare const CMsgApplyEggEssence: {
    fromJSON(object: any): CMsgApplyEggEssence;
    toJSON(message: CMsgApplyEggEssence): unknown;
    create<I extends {
        essence_item_id?: string;
        egg_item_id?: string;
    } & {
        essence_item_id?: string;
        egg_item_id?: string;
    } & { [K in Exclude<keyof I, keyof CMsgApplyEggEssence>]: never; }>(base?: I): CMsgApplyEggEssence;
    fromPartial<I_1 extends {
        essence_item_id?: string;
        egg_item_id?: string;
    } & {
        essence_item_id?: string;
        egg_item_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgApplyEggEssence>]: never; }>(object: I_1): CMsgApplyEggEssence;
};
export declare const CSOEconItemAttribute: {
    fromJSON(object: any): CSOEconItemAttribute;
    toJSON(message: CSOEconItemAttribute): unknown;
    create<I extends {
        def_index?: number;
        value?: number;
        value_bytes?: string;
    } & {
        def_index?: number;
        value?: number;
        value_bytes?: string;
    } & { [K in Exclude<keyof I, keyof CSOEconItemAttribute>]: never; }>(base?: I): CSOEconItemAttribute;
    fromPartial<I_1 extends {
        def_index?: number;
        value?: number;
        value_bytes?: string;
    } & {
        def_index?: number;
        value?: number;
        value_bytes?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CSOEconItemAttribute>]: never; }>(object: I_1): CSOEconItemAttribute;
};
export declare const CSOEconItemEquipped: {
    fromJSON(object: any): CSOEconItemEquipped;
    toJSON(message: CSOEconItemEquipped): unknown;
    create<I extends {
        new_class?: number;
        new_slot?: number;
    } & {
        new_class?: number;
        new_slot?: number;
    } & { [K in Exclude<keyof I, keyof CSOEconItemEquipped>]: never; }>(base?: I): CSOEconItemEquipped;
    fromPartial<I_1 extends {
        new_class?: number;
        new_slot?: number;
    } & {
        new_class?: number;
        new_slot?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CSOEconItemEquipped>]: never; }>(object: I_1): CSOEconItemEquipped;
};
export declare const CSOEconItem: {
    fromJSON(object: any): CSOEconItem;
    toJSON(message: CSOEconItem): unknown;
    create<I extends {
        id?: string;
        account_id?: number;
        inventory?: number;
        def_index?: number;
        quantity?: number;
        level?: number;
        quality?: number;
        flags?: number;
        origin?: number;
        attribute?: {
            def_index?: number;
            value?: number;
            value_bytes?: string;
        }[];
        interior_item?: any;
        style?: number;
        original_id?: string;
        equipped_state?: {
            new_class?: number;
            new_slot?: number;
        }[];
    } & {
        id?: string;
        account_id?: number;
        inventory?: number;
        def_index?: number;
        quantity?: number;
        level?: number;
        quality?: number;
        flags?: number;
        origin?: number;
        attribute?: {
            def_index?: number;
            value?: number;
            value_bytes?: string;
        }[] & ({
            def_index?: number;
            value?: number;
            value_bytes?: string;
        } & {
            def_index?: number;
            value?: number;
            value_bytes?: string;
        } & { [K in Exclude<keyof I["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_1 in Exclude<keyof I["attribute"], keyof {
            def_index?: number;
            value?: number;
            value_bytes?: string;
        }[]>]: never; };
        interior_item?: {
            id?: string;
            account_id?: number;
            inventory?: number;
            def_index?: number;
            quantity?: number;
            level?: number;
            quality?: number;
            flags?: number;
            origin?: number;
            attribute?: {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            }[];
            interior_item?: any;
            style?: number;
            original_id?: string;
            equipped_state?: {
                new_class?: number;
                new_slot?: number;
            }[];
        } & {
            id?: string;
            account_id?: number;
            inventory?: number;
            def_index?: number;
            quantity?: number;
            level?: number;
            quality?: number;
            flags?: number;
            origin?: number;
            attribute?: {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            }[] & ({
                def_index?: number;
                value?: number;
                value_bytes?: string;
            } & {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            } & { [K_2 in Exclude<keyof I["interior_item"]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_3 in Exclude<keyof I["interior_item"]["attribute"], keyof {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            }[]>]: never; };
            interior_item?: {
                id?: string;
                account_id?: number;
                inventory?: number;
                def_index?: number;
                quantity?: number;
                level?: number;
                quality?: number;
                flags?: number;
                origin?: number;
                attribute?: {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[];
                interior_item?: any;
                style?: number;
                original_id?: string;
                equipped_state?: {
                    new_class?: number;
                    new_slot?: number;
                }[];
            } & {
                id?: string;
                account_id?: number;
                inventory?: number;
                def_index?: number;
                quantity?: number;
                level?: number;
                quality?: number;
                flags?: number;
                origin?: number;
                attribute?: {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[] & ({
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                } & {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                } & { [K_4 in Exclude<keyof I["interior_item"]["interior_item"]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_5 in Exclude<keyof I["interior_item"]["interior_item"]["attribute"], keyof {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[]>]: never; };
                interior_item?: {
                    id?: string;
                    account_id?: number;
                    inventory?: number;
                    def_index?: number;
                    quantity?: number;
                    level?: number;
                    quality?: number;
                    flags?: number;
                    origin?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    interior_item?: any;
                    style?: number;
                    original_id?: string;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                } & {
                    id?: string;
                    account_id?: number;
                    inventory?: number;
                    def_index?: number;
                    quantity?: number;
                    level?: number;
                    quality?: number;
                    flags?: number;
                    origin?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[] & ({
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    } & {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    } & { [K_6 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_7 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["attribute"], keyof {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[]>]: never; };
                    interior_item?: {
                        id?: string;
                        account_id?: number;
                        inventory?: number;
                        def_index?: number;
                        quantity?: number;
                        level?: number;
                        quality?: number;
                        flags?: number;
                        origin?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        interior_item?: any;
                        style?: number;
                        original_id?: string;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    } & {
                        id?: string;
                        account_id?: number;
                        inventory?: number;
                        def_index?: number;
                        quantity?: number;
                        level?: number;
                        quality?: number;
                        flags?: number;
                        origin?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[] & ({
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        } & {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        } & { [K_8 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_9 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"], keyof {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[]>]: never; };
                        interior_item?: {
                            id?: string;
                            account_id?: number;
                            inventory?: number;
                            def_index?: number;
                            quantity?: number;
                            level?: number;
                            quality?: number;
                            flags?: number;
                            origin?: number;
                            attribute?: {
                                def_index?: number;
                                value?: number;
                                value_bytes?: string;
                            }[];
                            interior_item?: any;
                            style?: number;
                            original_id?: string;
                            equipped_state?: {
                                new_class?: number;
                                new_slot?: number;
                            }[];
                        } & {
                            id?: string;
                            account_id?: number;
                            inventory?: number;
                            def_index?: number;
                            quantity?: number;
                            level?: number;
                            quality?: number;
                            flags?: number;
                            origin?: number;
                            attribute?: {
                                def_index?: number;
                                value?: number;
                                value_bytes?: string;
                            }[] & ({
                                def_index?: number;
                                value?: number;
                                value_bytes?: string;
                            } & {
                                def_index?: number;
                                value?: number;
                                value_bytes?: string;
                            } & { [K_10 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_11 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"], keyof {
                                def_index?: number;
                                value?: number;
                                value_bytes?: string;
                            }[]>]: never; };
                            interior_item?: {
                                id?: string;
                                account_id?: number;
                                inventory?: number;
                                def_index?: number;
                                quantity?: number;
                                level?: number;
                                quality?: number;
                                flags?: number;
                                origin?: number;
                                attribute?: {
                                    def_index?: number;
                                    value?: number;
                                    value_bytes?: string;
                                }[];
                                interior_item?: any;
                                style?: number;
                                original_id?: string;
                                equipped_state?: {
                                    new_class?: number;
                                    new_slot?: number;
                                }[];
                            } & {
                                id?: string;
                                account_id?: number;
                                inventory?: number;
                                def_index?: number;
                                quantity?: number;
                                level?: number;
                                quality?: number;
                                flags?: number;
                                origin?: number;
                                attribute?: {
                                    def_index?: number;
                                    value?: number;
                                    value_bytes?: string;
                                }[] & ({
                                    def_index?: number;
                                    value?: number;
                                    value_bytes?: string;
                                } & {
                                    def_index?: number;
                                    value?: number;
                                    value_bytes?: string;
                                } & { [K_12 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_13 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"], keyof {
                                    def_index?: number;
                                    value?: number;
                                    value_bytes?: string;
                                }[]>]: never; };
                                interior_item?: {
                                    id?: string;
                                    account_id?: number;
                                    inventory?: number;
                                    def_index?: number;
                                    quantity?: number;
                                    level?: number;
                                    quality?: number;
                                    flags?: number;
                                    origin?: number;
                                    attribute?: {
                                        def_index?: number;
                                        value?: number;
                                        value_bytes?: string;
                                    }[];
                                    interior_item?: any;
                                    style?: number;
                                    original_id?: string;
                                    equipped_state?: {
                                        new_class?: number;
                                        new_slot?: number;
                                    }[];
                                } & {
                                    id?: string;
                                    account_id?: number;
                                    inventory?: number;
                                    def_index?: number;
                                    quantity?: number;
                                    level?: number;
                                    quality?: number;
                                    flags?: number;
                                    origin?: number;
                                    attribute?: {
                                        def_index?: number;
                                        value?: number;
                                        value_bytes?: string;
                                    }[] & ({
                                        def_index?: number;
                                        value?: number;
                                        value_bytes?: string;
                                    } & {
                                        def_index?: number;
                                        value?: number;
                                        value_bytes?: string;
                                    } & { [K_14 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_15 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"], keyof {
                                        def_index?: number;
                                        value?: number;
                                        value_bytes?: string;
                                    }[]>]: never; };
                                    interior_item?: {
                                        id?: string;
                                        account_id?: number;
                                        inventory?: number;
                                        def_index?: number;
                                        quantity?: number;
                                        level?: number;
                                        quality?: number;
                                        flags?: number;
                                        origin?: number;
                                        attribute?: {
                                            def_index?: number;
                                            value?: number;
                                            value_bytes?: string;
                                        }[];
                                        interior_item?: any;
                                        style?: number;
                                        original_id?: string;
                                        equipped_state?: {
                                            new_class?: number;
                                            new_slot?: number;
                                        }[];
                                    } & {
                                        id?: string;
                                        account_id?: number;
                                        inventory?: number;
                                        def_index?: number;
                                        quantity?: number;
                                        level?: number;
                                        quality?: number;
                                        flags?: number;
                                        origin?: number;
                                        attribute?: {
                                            def_index?: number;
                                            value?: number;
                                            value_bytes?: string;
                                        }[] & ({
                                            def_index?: number;
                                            value?: number;
                                            value_bytes?: string;
                                        } & {
                                            def_index?: number;
                                            value?: number;
                                            value_bytes?: string;
                                        } & { [K_16 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_17 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"], keyof {
                                            def_index?: number;
                                            value?: number;
                                            value_bytes?: string;
                                        }[]>]: never; };
                                        interior_item?: {
                                            id?: string;
                                            account_id?: number;
                                            inventory?: number;
                                            def_index?: number;
                                            quantity?: number;
                                            level?: number;
                                            quality?: number;
                                            flags?: number;
                                            origin?: number;
                                            attribute?: {
                                                def_index?: number;
                                                value?: number;
                                                value_bytes?: string;
                                            }[];
                                            interior_item?: any;
                                            style?: number;
                                            original_id?: string;
                                            equipped_state?: {
                                                new_class?: number;
                                                new_slot?: number;
                                            }[];
                                        } & {
                                            id?: string;
                                            account_id?: number;
                                            inventory?: number;
                                            def_index?: number;
                                            quantity?: number;
                                            level?: number;
                                            quality?: number;
                                            flags?: number;
                                            origin?: number;
                                            attribute?: {
                                                def_index?: number;
                                                value?: number;
                                                value_bytes?: string;
                                            }[] & ({
                                                def_index?: number;
                                                value?: number;
                                                value_bytes?: string;
                                            } & {
                                                def_index?: number;
                                                value?: number;
                                                value_bytes?: string;
                                            } & { [K_18 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_19 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"], keyof {
                                                def_index?: number;
                                                value?: number;
                                                value_bytes?: string;
                                            }[]>]: never; };
                                            interior_item?: {
                                                id?: string;
                                                account_id?: number;
                                                inventory?: number;
                                                def_index?: number;
                                                quantity?: number;
                                                level?: number;
                                                quality?: number;
                                                flags?: number;
                                                origin?: number;
                                                attribute?: {
                                                    def_index?: number;
                                                    value?: number;
                                                    value_bytes?: string;
                                                }[];
                                                interior_item?: any;
                                                style?: number;
                                                original_id?: string;
                                                equipped_state?: {
                                                    new_class?: number;
                                                    new_slot?: number;
                                                }[];
                                            } & {
                                                id?: string;
                                                account_id?: number;
                                                inventory?: number;
                                                def_index?: number;
                                                quantity?: number;
                                                level?: number;
                                                quality?: number;
                                                flags?: number;
                                                origin?: number;
                                                attribute?: {
                                                    def_index?: number;
                                                    value?: number;
                                                    value_bytes?: string;
                                                }[] & ({
                                                    def_index?: number;
                                                    value?: number;
                                                    value_bytes?: string;
                                                } & any & { [K_20 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_21 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"], keyof {
                                                    def_index?: number;
                                                    value?: number;
                                                    value_bytes?: string;
                                                }[]>]: never; };
                                                interior_item?: {
                                                    id?: string;
                                                    account_id?: number;
                                                    inventory?: number;
                                                    def_index?: number;
                                                    quantity?: number;
                                                    level?: number;
                                                    quality?: number;
                                                    flags?: number;
                                                    origin?: number;
                                                    attribute?: {
                                                        def_index?: number;
                                                        value?: number;
                                                        value_bytes?: string;
                                                    }[];
                                                    interior_item?: any;
                                                    style?: number;
                                                    original_id?: string;
                                                    equipped_state?: {
                                                        new_class?: number;
                                                        new_slot?: number;
                                                    }[];
                                                } & any & { [K_22 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"], keyof CSOEconItem>]: never; };
                                                style?: number;
                                                original_id?: string;
                                                equipped_state?: {
                                                    new_class?: number;
                                                    new_slot?: number;
                                                }[] & ({
                                                    new_class?: number;
                                                    new_slot?: number;
                                                } & any & { [K_23 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_24 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"], keyof {
                                                    new_class?: number;
                                                    new_slot?: number;
                                                }[]>]: never; };
                                            } & { [K_25 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"], keyof CSOEconItem>]: never; };
                                            style?: number;
                                            original_id?: string;
                                            equipped_state?: {
                                                new_class?: number;
                                                new_slot?: number;
                                            }[] & ({
                                                new_class?: number;
                                                new_slot?: number;
                                            } & {
                                                new_class?: number;
                                                new_slot?: number;
                                            } & { [K_26 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_27 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"], keyof {
                                                new_class?: number;
                                                new_slot?: number;
                                            }[]>]: never; };
                                        } & { [K_28 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"], keyof CSOEconItem>]: never; };
                                        style?: number;
                                        original_id?: string;
                                        equipped_state?: {
                                            new_class?: number;
                                            new_slot?: number;
                                        }[] & ({
                                            new_class?: number;
                                            new_slot?: number;
                                        } & {
                                            new_class?: number;
                                            new_slot?: number;
                                        } & { [K_29 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_30 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"], keyof {
                                            new_class?: number;
                                            new_slot?: number;
                                        }[]>]: never; };
                                    } & { [K_31 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"], keyof CSOEconItem>]: never; };
                                    style?: number;
                                    original_id?: string;
                                    equipped_state?: {
                                        new_class?: number;
                                        new_slot?: number;
                                    }[] & ({
                                        new_class?: number;
                                        new_slot?: number;
                                    } & {
                                        new_class?: number;
                                        new_slot?: number;
                                    } & { [K_32 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_33 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"], keyof {
                                        new_class?: number;
                                        new_slot?: number;
                                    }[]>]: never; };
                                } & { [K_34 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"], keyof CSOEconItem>]: never; };
                                style?: number;
                                original_id?: string;
                                equipped_state?: {
                                    new_class?: number;
                                    new_slot?: number;
                                }[] & ({
                                    new_class?: number;
                                    new_slot?: number;
                                } & {
                                    new_class?: number;
                                    new_slot?: number;
                                } & { [K_35 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_36 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"], keyof {
                                    new_class?: number;
                                    new_slot?: number;
                                }[]>]: never; };
                            } & { [K_37 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"], keyof CSOEconItem>]: never; };
                            style?: number;
                            original_id?: string;
                            equipped_state?: {
                                new_class?: number;
                                new_slot?: number;
                            }[] & ({
                                new_class?: number;
                                new_slot?: number;
                            } & {
                                new_class?: number;
                                new_slot?: number;
                            } & { [K_38 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_39 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"], keyof {
                                new_class?: number;
                                new_slot?: number;
                            }[]>]: never; };
                        } & { [K_40 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"], keyof CSOEconItem>]: never; };
                        style?: number;
                        original_id?: string;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[] & ({
                            new_class?: number;
                            new_slot?: number;
                        } & {
                            new_class?: number;
                            new_slot?: number;
                        } & { [K_41 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_42 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"], keyof {
                            new_class?: number;
                            new_slot?: number;
                        }[]>]: never; };
                    } & { [K_43 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["interior_item"], keyof CSOEconItem>]: never; };
                    style?: number;
                    original_id?: string;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[] & ({
                        new_class?: number;
                        new_slot?: number;
                    } & {
                        new_class?: number;
                        new_slot?: number;
                    } & { [K_44 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_45 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"]["equipped_state"], keyof {
                        new_class?: number;
                        new_slot?: number;
                    }[]>]: never; };
                } & { [K_46 in Exclude<keyof I["interior_item"]["interior_item"]["interior_item"], keyof CSOEconItem>]: never; };
                style?: number;
                original_id?: string;
                equipped_state?: {
                    new_class?: number;
                    new_slot?: number;
                }[] & ({
                    new_class?: number;
                    new_slot?: number;
                } & {
                    new_class?: number;
                    new_slot?: number;
                } & { [K_47 in Exclude<keyof I["interior_item"]["interior_item"]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_48 in Exclude<keyof I["interior_item"]["interior_item"]["equipped_state"], keyof {
                    new_class?: number;
                    new_slot?: number;
                }[]>]: never; };
            } & { [K_49 in Exclude<keyof I["interior_item"]["interior_item"], keyof CSOEconItem>]: never; };
            style?: number;
            original_id?: string;
            equipped_state?: {
                new_class?: number;
                new_slot?: number;
            }[] & ({
                new_class?: number;
                new_slot?: number;
            } & {
                new_class?: number;
                new_slot?: number;
            } & { [K_50 in Exclude<keyof I["interior_item"]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_51 in Exclude<keyof I["interior_item"]["equipped_state"], keyof {
                new_class?: number;
                new_slot?: number;
            }[]>]: never; };
        } & { [K_52 in Exclude<keyof I["interior_item"], keyof CSOEconItem>]: never; };
        style?: number;
        original_id?: string;
        equipped_state?: {
            new_class?: number;
            new_slot?: number;
        }[] & ({
            new_class?: number;
            new_slot?: number;
        } & {
            new_class?: number;
            new_slot?: number;
        } & { [K_53 in Exclude<keyof I["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_54 in Exclude<keyof I["equipped_state"], keyof {
            new_class?: number;
            new_slot?: number;
        }[]>]: never; };
    } & { [K_55 in Exclude<keyof I, keyof CSOEconItem>]: never; }>(base?: I): CSOEconItem;
    fromPartial<I_1 extends {
        id?: string;
        account_id?: number;
        inventory?: number;
        def_index?: number;
        quantity?: number;
        level?: number;
        quality?: number;
        flags?: number;
        origin?: number;
        attribute?: {
            def_index?: number;
            value?: number;
            value_bytes?: string;
        }[];
        interior_item?: any;
        style?: number;
        original_id?: string;
        equipped_state?: {
            new_class?: number;
            new_slot?: number;
        }[];
    } & {
        id?: string;
        account_id?: number;
        inventory?: number;
        def_index?: number;
        quantity?: number;
        level?: number;
        quality?: number;
        flags?: number;
        origin?: number;
        attribute?: {
            def_index?: number;
            value?: number;
            value_bytes?: string;
        }[] & ({
            def_index?: number;
            value?: number;
            value_bytes?: string;
        } & {
            def_index?: number;
            value?: number;
            value_bytes?: string;
        } & { [K_56 in Exclude<keyof I_1["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_57 in Exclude<keyof I_1["attribute"], keyof {
            def_index?: number;
            value?: number;
            value_bytes?: string;
        }[]>]: never; };
        interior_item?: {
            id?: string;
            account_id?: number;
            inventory?: number;
            def_index?: number;
            quantity?: number;
            level?: number;
            quality?: number;
            flags?: number;
            origin?: number;
            attribute?: {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            }[];
            interior_item?: any;
            style?: number;
            original_id?: string;
            equipped_state?: {
                new_class?: number;
                new_slot?: number;
            }[];
        } & {
            id?: string;
            account_id?: number;
            inventory?: number;
            def_index?: number;
            quantity?: number;
            level?: number;
            quality?: number;
            flags?: number;
            origin?: number;
            attribute?: {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            }[] & ({
                def_index?: number;
                value?: number;
                value_bytes?: string;
            } & {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            } & { [K_58 in Exclude<keyof I_1["interior_item"]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_59 in Exclude<keyof I_1["interior_item"]["attribute"], keyof {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            }[]>]: never; };
            interior_item?: {
                id?: string;
                account_id?: number;
                inventory?: number;
                def_index?: number;
                quantity?: number;
                level?: number;
                quality?: number;
                flags?: number;
                origin?: number;
                attribute?: {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[];
                interior_item?: any;
                style?: number;
                original_id?: string;
                equipped_state?: {
                    new_class?: number;
                    new_slot?: number;
                }[];
            } & {
                id?: string;
                account_id?: number;
                inventory?: number;
                def_index?: number;
                quantity?: number;
                level?: number;
                quality?: number;
                flags?: number;
                origin?: number;
                attribute?: {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[] & ({
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                } & {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                } & { [K_60 in Exclude<keyof I_1["interior_item"]["interior_item"]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_61 in Exclude<keyof I_1["interior_item"]["interior_item"]["attribute"], keyof {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[]>]: never; };
                interior_item?: {
                    id?: string;
                    account_id?: number;
                    inventory?: number;
                    def_index?: number;
                    quantity?: number;
                    level?: number;
                    quality?: number;
                    flags?: number;
                    origin?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    interior_item?: any;
                    style?: number;
                    original_id?: string;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                } & {
                    id?: string;
                    account_id?: number;
                    inventory?: number;
                    def_index?: number;
                    quantity?: number;
                    level?: number;
                    quality?: number;
                    flags?: number;
                    origin?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[] & ({
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    } & {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    } & { [K_62 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_63 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["attribute"], keyof {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[]>]: never; };
                    interior_item?: {
                        id?: string;
                        account_id?: number;
                        inventory?: number;
                        def_index?: number;
                        quantity?: number;
                        level?: number;
                        quality?: number;
                        flags?: number;
                        origin?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        interior_item?: any;
                        style?: number;
                        original_id?: string;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    } & {
                        id?: string;
                        account_id?: number;
                        inventory?: number;
                        def_index?: number;
                        quantity?: number;
                        level?: number;
                        quality?: number;
                        flags?: number;
                        origin?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[] & ({
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        } & {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        } & { [K_64 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_65 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"], keyof {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[]>]: never; };
                        interior_item?: {
                            id?: string;
                            account_id?: number;
                            inventory?: number;
                            def_index?: number;
                            quantity?: number;
                            level?: number;
                            quality?: number;
                            flags?: number;
                            origin?: number;
                            attribute?: {
                                def_index?: number;
                                value?: number;
                                value_bytes?: string;
                            }[];
                            interior_item?: any;
                            style?: number;
                            original_id?: string;
                            equipped_state?: {
                                new_class?: number;
                                new_slot?: number;
                            }[];
                        } & {
                            id?: string;
                            account_id?: number;
                            inventory?: number;
                            def_index?: number;
                            quantity?: number;
                            level?: number;
                            quality?: number;
                            flags?: number;
                            origin?: number;
                            attribute?: {
                                def_index?: number;
                                value?: number;
                                value_bytes?: string;
                            }[] & ({
                                def_index?: number;
                                value?: number;
                                value_bytes?: string;
                            } & {
                                def_index?: number;
                                value?: number;
                                value_bytes?: string;
                            } & { [K_66 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_67 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"], keyof {
                                def_index?: number;
                                value?: number;
                                value_bytes?: string;
                            }[]>]: never; };
                            interior_item?: {
                                id?: string;
                                account_id?: number;
                                inventory?: number;
                                def_index?: number;
                                quantity?: number;
                                level?: number;
                                quality?: number;
                                flags?: number;
                                origin?: number;
                                attribute?: {
                                    def_index?: number;
                                    value?: number;
                                    value_bytes?: string;
                                }[];
                                interior_item?: any;
                                style?: number;
                                original_id?: string;
                                equipped_state?: {
                                    new_class?: number;
                                    new_slot?: number;
                                }[];
                            } & {
                                id?: string;
                                account_id?: number;
                                inventory?: number;
                                def_index?: number;
                                quantity?: number;
                                level?: number;
                                quality?: number;
                                flags?: number;
                                origin?: number;
                                attribute?: {
                                    def_index?: number;
                                    value?: number;
                                    value_bytes?: string;
                                }[] & ({
                                    def_index?: number;
                                    value?: number;
                                    value_bytes?: string;
                                } & {
                                    def_index?: number;
                                    value?: number;
                                    value_bytes?: string;
                                } & { [K_68 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_69 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"], keyof {
                                    def_index?: number;
                                    value?: number;
                                    value_bytes?: string;
                                }[]>]: never; };
                                interior_item?: {
                                    id?: string;
                                    account_id?: number;
                                    inventory?: number;
                                    def_index?: number;
                                    quantity?: number;
                                    level?: number;
                                    quality?: number;
                                    flags?: number;
                                    origin?: number;
                                    attribute?: {
                                        def_index?: number;
                                        value?: number;
                                        value_bytes?: string;
                                    }[];
                                    interior_item?: any;
                                    style?: number;
                                    original_id?: string;
                                    equipped_state?: {
                                        new_class?: number;
                                        new_slot?: number;
                                    }[];
                                } & {
                                    id?: string;
                                    account_id?: number;
                                    inventory?: number;
                                    def_index?: number;
                                    quantity?: number;
                                    level?: number;
                                    quality?: number;
                                    flags?: number;
                                    origin?: number;
                                    attribute?: {
                                        def_index?: number;
                                        value?: number;
                                        value_bytes?: string;
                                    }[] & ({
                                        def_index?: number;
                                        value?: number;
                                        value_bytes?: string;
                                    } & {
                                        def_index?: number;
                                        value?: number;
                                        value_bytes?: string;
                                    } & { [K_70 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_71 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"], keyof {
                                        def_index?: number;
                                        value?: number;
                                        value_bytes?: string;
                                    }[]>]: never; };
                                    interior_item?: {
                                        id?: string;
                                        account_id?: number;
                                        inventory?: number;
                                        def_index?: number;
                                        quantity?: number;
                                        level?: number;
                                        quality?: number;
                                        flags?: number;
                                        origin?: number;
                                        attribute?: {
                                            def_index?: number;
                                            value?: number;
                                            value_bytes?: string;
                                        }[];
                                        interior_item?: any;
                                        style?: number;
                                        original_id?: string;
                                        equipped_state?: {
                                            new_class?: number;
                                            new_slot?: number;
                                        }[];
                                    } & {
                                        id?: string;
                                        account_id?: number;
                                        inventory?: number;
                                        def_index?: number;
                                        quantity?: number;
                                        level?: number;
                                        quality?: number;
                                        flags?: number;
                                        origin?: number;
                                        attribute?: {
                                            def_index?: number;
                                            value?: number;
                                            value_bytes?: string;
                                        }[] & ({
                                            def_index?: number;
                                            value?: number;
                                            value_bytes?: string;
                                        } & {
                                            def_index?: number;
                                            value?: number;
                                            value_bytes?: string;
                                        } & { [K_72 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_73 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"], keyof {
                                            def_index?: number;
                                            value?: number;
                                            value_bytes?: string;
                                        }[]>]: never; };
                                        interior_item?: {
                                            id?: string;
                                            account_id?: number;
                                            inventory?: number;
                                            def_index?: number;
                                            quantity?: number;
                                            level?: number;
                                            quality?: number;
                                            flags?: number;
                                            origin?: number;
                                            attribute?: {
                                                def_index?: number;
                                                value?: number;
                                                value_bytes?: string;
                                            }[];
                                            interior_item?: any;
                                            style?: number;
                                            original_id?: string;
                                            equipped_state?: {
                                                new_class?: number;
                                                new_slot?: number;
                                            }[];
                                        } & {
                                            id?: string;
                                            account_id?: number;
                                            inventory?: number;
                                            def_index?: number;
                                            quantity?: number;
                                            level?: number;
                                            quality?: number;
                                            flags?: number;
                                            origin?: number;
                                            attribute?: {
                                                def_index?: number;
                                                value?: number;
                                                value_bytes?: string;
                                            }[] & ({
                                                def_index?: number;
                                                value?: number;
                                                value_bytes?: string;
                                            } & {
                                                def_index?: number;
                                                value?: number;
                                                value_bytes?: string;
                                            } & { [K_74 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_75 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"], keyof {
                                                def_index?: number;
                                                value?: number;
                                                value_bytes?: string;
                                            }[]>]: never; };
                                            interior_item?: {
                                                id?: string;
                                                account_id?: number;
                                                inventory?: number;
                                                def_index?: number;
                                                quantity?: number;
                                                level?: number;
                                                quality?: number;
                                                flags?: number;
                                                origin?: number;
                                                attribute?: {
                                                    def_index?: number;
                                                    value?: number;
                                                    value_bytes?: string;
                                                }[];
                                                interior_item?: any;
                                                style?: number;
                                                original_id?: string;
                                                equipped_state?: {
                                                    new_class?: number;
                                                    new_slot?: number;
                                                }[];
                                            } & {
                                                id?: string;
                                                account_id?: number;
                                                inventory?: number;
                                                def_index?: number;
                                                quantity?: number;
                                                level?: number;
                                                quality?: number;
                                                flags?: number;
                                                origin?: number;
                                                attribute?: {
                                                    def_index?: number;
                                                    value?: number;
                                                    value_bytes?: string;
                                                }[] & ({
                                                    def_index?: number;
                                                    value?: number;
                                                    value_bytes?: string;
                                                } & any & { [K_76 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_77 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["attribute"], keyof {
                                                    def_index?: number;
                                                    value?: number;
                                                    value_bytes?: string;
                                                }[]>]: never; };
                                                interior_item?: {
                                                    id?: string;
                                                    account_id?: number;
                                                    inventory?: number;
                                                    def_index?: number;
                                                    quantity?: number;
                                                    level?: number;
                                                    quality?: number;
                                                    flags?: number;
                                                    origin?: number;
                                                    attribute?: {
                                                        def_index?: number;
                                                        value?: number;
                                                        value_bytes?: string;
                                                    }[];
                                                    interior_item?: any;
                                                    style?: number;
                                                    original_id?: string;
                                                    equipped_state?: {
                                                        new_class?: number;
                                                        new_slot?: number;
                                                    }[];
                                                } & any & { [K_78 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"], keyof CSOEconItem>]: never; };
                                                style?: number;
                                                original_id?: string;
                                                equipped_state?: {
                                                    new_class?: number;
                                                    new_slot?: number;
                                                }[] & ({
                                                    new_class?: number;
                                                    new_slot?: number;
                                                } & any & { [K_79 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_80 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"], keyof {
                                                    new_class?: number;
                                                    new_slot?: number;
                                                }[]>]: never; };
                                            } & { [K_81 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"], keyof CSOEconItem>]: never; };
                                            style?: number;
                                            original_id?: string;
                                            equipped_state?: {
                                                new_class?: number;
                                                new_slot?: number;
                                            }[] & ({
                                                new_class?: number;
                                                new_slot?: number;
                                            } & {
                                                new_class?: number;
                                                new_slot?: number;
                                            } & { [K_82 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_83 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"], keyof {
                                                new_class?: number;
                                                new_slot?: number;
                                            }[]>]: never; };
                                        } & { [K_84 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"], keyof CSOEconItem>]: never; };
                                        style?: number;
                                        original_id?: string;
                                        equipped_state?: {
                                            new_class?: number;
                                            new_slot?: number;
                                        }[] & ({
                                            new_class?: number;
                                            new_slot?: number;
                                        } & {
                                            new_class?: number;
                                            new_slot?: number;
                                        } & { [K_85 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_86 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"], keyof {
                                            new_class?: number;
                                            new_slot?: number;
                                        }[]>]: never; };
                                    } & { [K_87 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"], keyof CSOEconItem>]: never; };
                                    style?: number;
                                    original_id?: string;
                                    equipped_state?: {
                                        new_class?: number;
                                        new_slot?: number;
                                    }[] & ({
                                        new_class?: number;
                                        new_slot?: number;
                                    } & {
                                        new_class?: number;
                                        new_slot?: number;
                                    } & { [K_88 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_89 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"], keyof {
                                        new_class?: number;
                                        new_slot?: number;
                                    }[]>]: never; };
                                } & { [K_90 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"], keyof CSOEconItem>]: never; };
                                style?: number;
                                original_id?: string;
                                equipped_state?: {
                                    new_class?: number;
                                    new_slot?: number;
                                }[] & ({
                                    new_class?: number;
                                    new_slot?: number;
                                } & {
                                    new_class?: number;
                                    new_slot?: number;
                                } & { [K_91 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_92 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"], keyof {
                                    new_class?: number;
                                    new_slot?: number;
                                }[]>]: never; };
                            } & { [K_93 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"], keyof CSOEconItem>]: never; };
                            style?: number;
                            original_id?: string;
                            equipped_state?: {
                                new_class?: number;
                                new_slot?: number;
                            }[] & ({
                                new_class?: number;
                                new_slot?: number;
                            } & {
                                new_class?: number;
                                new_slot?: number;
                            } & { [K_94 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_95 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"], keyof {
                                new_class?: number;
                                new_slot?: number;
                            }[]>]: never; };
                        } & { [K_96 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["interior_item"], keyof CSOEconItem>]: never; };
                        style?: number;
                        original_id?: string;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[] & ({
                            new_class?: number;
                            new_slot?: number;
                        } & {
                            new_class?: number;
                            new_slot?: number;
                        } & { [K_97 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_98 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"]["equipped_state"], keyof {
                            new_class?: number;
                            new_slot?: number;
                        }[]>]: never; };
                    } & { [K_99 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["interior_item"], keyof CSOEconItem>]: never; };
                    style?: number;
                    original_id?: string;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[] & ({
                        new_class?: number;
                        new_slot?: number;
                    } & {
                        new_class?: number;
                        new_slot?: number;
                    } & { [K_100 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_101 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"]["equipped_state"], keyof {
                        new_class?: number;
                        new_slot?: number;
                    }[]>]: never; };
                } & { [K_102 in Exclude<keyof I_1["interior_item"]["interior_item"]["interior_item"], keyof CSOEconItem>]: never; };
                style?: number;
                original_id?: string;
                equipped_state?: {
                    new_class?: number;
                    new_slot?: number;
                }[] & ({
                    new_class?: number;
                    new_slot?: number;
                } & {
                    new_class?: number;
                    new_slot?: number;
                } & { [K_103 in Exclude<keyof I_1["interior_item"]["interior_item"]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_104 in Exclude<keyof I_1["interior_item"]["interior_item"]["equipped_state"], keyof {
                    new_class?: number;
                    new_slot?: number;
                }[]>]: never; };
            } & { [K_105 in Exclude<keyof I_1["interior_item"]["interior_item"], keyof CSOEconItem>]: never; };
            style?: number;
            original_id?: string;
            equipped_state?: {
                new_class?: number;
                new_slot?: number;
            }[] & ({
                new_class?: number;
                new_slot?: number;
            } & {
                new_class?: number;
                new_slot?: number;
            } & { [K_106 in Exclude<keyof I_1["interior_item"]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_107 in Exclude<keyof I_1["interior_item"]["equipped_state"], keyof {
                new_class?: number;
                new_slot?: number;
            }[]>]: never; };
        } & { [K_108 in Exclude<keyof I_1["interior_item"], keyof CSOEconItem>]: never; };
        style?: number;
        original_id?: string;
        equipped_state?: {
            new_class?: number;
            new_slot?: number;
        }[] & ({
            new_class?: number;
            new_slot?: number;
        } & {
            new_class?: number;
            new_slot?: number;
        } & { [K_109 in Exclude<keyof I_1["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_110 in Exclude<keyof I_1["equipped_state"], keyof {
            new_class?: number;
            new_slot?: number;
        }[]>]: never; };
    } & { [K_111 in Exclude<keyof I_1, keyof CSOEconItem>]: never; }>(object: I_1): CSOEconItem;
};
export declare const CMsgSortItems: {
    fromJSON(object: any): CMsgSortItems;
    toJSON(message: CMsgSortItems): unknown;
    create<I extends {
        sort_type?: number;
    } & {
        sort_type?: number;
    } & { [K in Exclude<keyof I, "sort_type">]: never; }>(base?: I): CMsgSortItems;
    fromPartial<I_1 extends {
        sort_type?: number;
    } & {
        sort_type?: number;
    } & { [K_1 in Exclude<keyof I_1, "sort_type">]: never; }>(object: I_1): CMsgSortItems;
};
export declare const CMsgConVarValue: {
    fromJSON(object: any): CMsgConVarValue;
    toJSON(message: CMsgConVarValue): unknown;
    create<I extends {
        name?: string;
        value?: string;
    } & {
        name?: string;
        value?: string;
    } & { [K in Exclude<keyof I, keyof CMsgConVarValue>]: never; }>(base?: I): CMsgConVarValue;
    fromPartial<I_1 extends {
        name?: string;
        value?: string;
    } & {
        name?: string;
        value?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgConVarValue>]: never; }>(object: I_1): CMsgConVarValue;
};
export declare const CMsgReplicateConVars: {
    fromJSON(object: any): CMsgReplicateConVars;
    toJSON(message: CMsgReplicateConVars): unknown;
    create<I extends {
        convars?: {
            name?: string;
            value?: string;
        }[];
    } & {
        convars?: {
            name?: string;
            value?: string;
        }[] & ({
            name?: string;
            value?: string;
        } & {
            name?: string;
            value?: string;
        } & { [K in Exclude<keyof I["convars"][number], keyof CMsgConVarValue>]: never; })[] & { [K_1 in Exclude<keyof I["convars"], keyof {
            name?: string;
            value?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "convars">]: never; }>(base?: I): CMsgReplicateConVars;
    fromPartial<I_1 extends {
        convars?: {
            name?: string;
            value?: string;
        }[];
    } & {
        convars?: {
            name?: string;
            value?: string;
        }[] & ({
            name?: string;
            value?: string;
        } & {
            name?: string;
            value?: string;
        } & { [K_3 in Exclude<keyof I_1["convars"][number], keyof CMsgConVarValue>]: never; })[] & { [K_4 in Exclude<keyof I_1["convars"], keyof {
            name?: string;
            value?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "convars">]: never; }>(object: I_1): CMsgReplicateConVars;
};
export declare const CMsgItemAcknowledged: {
    fromJSON(object: any): CMsgItemAcknowledged;
    toJSON(message: CMsgItemAcknowledged): unknown;
    create<I extends {
        account_id?: number;
        inventory?: number;
        def_index?: number;
        quality?: number;
        rarity?: number;
        origin?: number;
    } & {
        account_id?: number;
        inventory?: number;
        def_index?: number;
        quality?: number;
        rarity?: number;
        origin?: number;
    } & { [K in Exclude<keyof I, keyof CMsgItemAcknowledged>]: never; }>(base?: I): CMsgItemAcknowledged;
    fromPartial<I_1 extends {
        account_id?: number;
        inventory?: number;
        def_index?: number;
        quality?: number;
        rarity?: number;
        origin?: number;
    } & {
        account_id?: number;
        inventory?: number;
        def_index?: number;
        quality?: number;
        rarity?: number;
        origin?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgItemAcknowledged>]: never; }>(object: I_1): CMsgItemAcknowledged;
};
export declare const CMsgSetItemPositions: {
    fromJSON(object: any): CMsgSetItemPositions;
    toJSON(message: CMsgSetItemPositions): unknown;
    create<I extends {
        item_positions?: {
            item_id?: string;
            position?: number;
        }[];
    } & {
        item_positions?: {
            item_id?: string;
            position?: number;
        }[] & ({
            item_id?: string;
            position?: number;
        } & {
            item_id?: string;
            position?: number;
        } & { [K in Exclude<keyof I["item_positions"][number], keyof CMsgSetItemPositions_ItemPosition>]: never; })[] & { [K_1 in Exclude<keyof I["item_positions"], keyof {
            item_id?: string;
            position?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "item_positions">]: never; }>(base?: I): CMsgSetItemPositions;
    fromPartial<I_1 extends {
        item_positions?: {
            item_id?: string;
            position?: number;
        }[];
    } & {
        item_positions?: {
            item_id?: string;
            position?: number;
        }[] & ({
            item_id?: string;
            position?: number;
        } & {
            item_id?: string;
            position?: number;
        } & { [K_3 in Exclude<keyof I_1["item_positions"][number], keyof CMsgSetItemPositions_ItemPosition>]: never; })[] & { [K_4 in Exclude<keyof I_1["item_positions"], keyof {
            item_id?: string;
            position?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "item_positions">]: never; }>(object: I_1): CMsgSetItemPositions;
};
export declare const CMsgSetItemPositions_ItemPosition: {
    fromJSON(object: any): CMsgSetItemPositions_ItemPosition;
    toJSON(message: CMsgSetItemPositions_ItemPosition): unknown;
    create<I extends {
        item_id?: string;
        position?: number;
    } & {
        item_id?: string;
        position?: number;
    } & { [K in Exclude<keyof I, keyof CMsgSetItemPositions_ItemPosition>]: never; }>(base?: I): CMsgSetItemPositions_ItemPosition;
    fromPartial<I_1 extends {
        item_id?: string;
        position?: number;
    } & {
        item_id?: string;
        position?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgSetItemPositions_ItemPosition>]: never; }>(object: I_1): CMsgSetItemPositions_ItemPosition;
};
export declare const CMsgGCStorePurchaseCancel: {
    fromJSON(object: any): CMsgGCStorePurchaseCancel;
    toJSON(message: CMsgGCStorePurchaseCancel): unknown;
    create<I extends {
        txn_id?: string;
    } & {
        txn_id?: string;
    } & { [K in Exclude<keyof I, "txn_id">]: never; }>(base?: I): CMsgGCStorePurchaseCancel;
    fromPartial<I_1 extends {
        txn_id?: string;
    } & {
        txn_id?: string;
    } & { [K_1 in Exclude<keyof I_1, "txn_id">]: never; }>(object: I_1): CMsgGCStorePurchaseCancel;
};
export declare const CMsgGCStorePurchaseCancelResponse: {
    fromJSON(object: any): CMsgGCStorePurchaseCancelResponse;
    toJSON(message: CMsgGCStorePurchaseCancelResponse): unknown;
    create<I extends {
        result?: number;
    } & {
        result?: number;
    } & { [K in Exclude<keyof I, "result">]: never; }>(base?: I): CMsgGCStorePurchaseCancelResponse;
    fromPartial<I_1 extends {
        result?: number;
    } & {
        result?: number;
    } & { [K_1 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CMsgGCStorePurchaseCancelResponse;
};
export declare const CMsgGCStorePurchaseFinalize: {
    fromJSON(object: any): CMsgGCStorePurchaseFinalize;
    toJSON(message: CMsgGCStorePurchaseFinalize): unknown;
    create<I extends {
        txn_id?: string;
    } & {
        txn_id?: string;
    } & { [K in Exclude<keyof I, "txn_id">]: never; }>(base?: I): CMsgGCStorePurchaseFinalize;
    fromPartial<I_1 extends {
        txn_id?: string;
    } & {
        txn_id?: string;
    } & { [K_1 in Exclude<keyof I_1, "txn_id">]: never; }>(object: I_1): CMsgGCStorePurchaseFinalize;
};
export declare const CMsgGCStorePurchaseFinalizeResponse: {
    fromJSON(object: any): CMsgGCStorePurchaseFinalizeResponse;
    toJSON(message: CMsgGCStorePurchaseFinalizeResponse): unknown;
    create<I extends {
        result?: number;
        item_ids?: string[];
    } & {
        result?: number;
        item_ids?: string[] & string[] & { [K in Exclude<keyof I["item_ids"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CMsgGCStorePurchaseFinalizeResponse>]: never; }>(base?: I): CMsgGCStorePurchaseFinalizeResponse;
    fromPartial<I_1 extends {
        result?: number;
        item_ids?: string[];
    } & {
        result?: number;
        item_ids?: string[] & string[] & { [K_2 in Exclude<keyof I_1["item_ids"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgGCStorePurchaseFinalizeResponse>]: never; }>(object: I_1): CMsgGCStorePurchaseFinalizeResponse;
};
export declare const CMsgGCToGCBannedWordListUpdated: {
    fromJSON(object: any): CMsgGCToGCBannedWordListUpdated;
    toJSON(message: CMsgGCToGCBannedWordListUpdated): unknown;
    create<I extends {
        group_id?: number;
    } & {
        group_id?: number;
    } & { [K in Exclude<keyof I, "group_id">]: never; }>(base?: I): CMsgGCToGCBannedWordListUpdated;
    fromPartial<I_1 extends {
        group_id?: number;
    } & {
        group_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "group_id">]: never; }>(object: I_1): CMsgGCToGCBannedWordListUpdated;
};
export declare const CMsgGCToGCDirtySDOCache: {
    fromJSON(object: any): CMsgGCToGCDirtySDOCache;
    toJSON(message: CMsgGCToGCDirtySDOCache): unknown;
    create<I extends {
        sdo_type?: number;
        key_uint64?: string;
    } & {
        sdo_type?: number;
        key_uint64?: string;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCDirtySDOCache>]: never; }>(base?: I): CMsgGCToGCDirtySDOCache;
    fromPartial<I_1 extends {
        sdo_type?: number;
        key_uint64?: string;
    } & {
        sdo_type?: number;
        key_uint64?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCDirtySDOCache>]: never; }>(object: I_1): CMsgGCToGCDirtySDOCache;
};
export declare const CMsgSDONoMemcached: {
    fromJSON(_: any): CMsgSDONoMemcached;
    toJSON(_: CMsgSDONoMemcached): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgSDONoMemcached;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgSDONoMemcached;
};
export declare const CMsgGCToGCUpdateSQLKeyValue: {
    fromJSON(object: any): CMsgGCToGCUpdateSQLKeyValue;
    toJSON(message: CMsgGCToGCUpdateSQLKeyValue): unknown;
    create<I extends {
        key_name?: string;
    } & {
        key_name?: string;
    } & { [K in Exclude<keyof I, "key_name">]: never; }>(base?: I): CMsgGCToGCUpdateSQLKeyValue;
    fromPartial<I_1 extends {
        key_name?: string;
    } & {
        key_name?: string;
    } & { [K_1 in Exclude<keyof I_1, "key_name">]: never; }>(object: I_1): CMsgGCToGCUpdateSQLKeyValue;
};
export declare const CMsgGCServerVersionUpdated: {
    fromJSON(object: any): CMsgGCServerVersionUpdated;
    toJSON(message: CMsgGCServerVersionUpdated): unknown;
    create<I extends {
        server_version?: number;
    } & {
        server_version?: number;
    } & { [K in Exclude<keyof I, "server_version">]: never; }>(base?: I): CMsgGCServerVersionUpdated;
    fromPartial<I_1 extends {
        server_version?: number;
    } & {
        server_version?: number;
    } & { [K_1 in Exclude<keyof I_1, "server_version">]: never; }>(object: I_1): CMsgGCServerVersionUpdated;
};
export declare const CMsgGCClientVersionUpdated: {
    fromJSON(object: any): CMsgGCClientVersionUpdated;
    toJSON(message: CMsgGCClientVersionUpdated): unknown;
    create<I extends {
        client_version?: number;
    } & {
        client_version?: number;
    } & { [K in Exclude<keyof I, "client_version">]: never; }>(base?: I): CMsgGCClientVersionUpdated;
    fromPartial<I_1 extends {
        client_version?: number;
    } & {
        client_version?: number;
    } & { [K_1 in Exclude<keyof I_1, "client_version">]: never; }>(object: I_1): CMsgGCClientVersionUpdated;
};
export declare const CMsgGCToGCWebAPIAccountChanged: {
    fromJSON(_: any): CMsgGCToGCWebAPIAccountChanged;
    toJSON(_: CMsgGCToGCWebAPIAccountChanged): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgGCToGCWebAPIAccountChanged;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgGCToGCWebAPIAccountChanged;
};
export declare const CMsgExtractGems: {
    fromJSON(object: any): CMsgExtractGems;
    toJSON(message: CMsgExtractGems): unknown;
    create<I extends {
        tool_item_id?: string;
        item_item_id?: string;
        item_socket_id?: number;
    } & {
        tool_item_id?: string;
        item_item_id?: string;
        item_socket_id?: number;
    } & { [K in Exclude<keyof I, keyof CMsgExtractGems>]: never; }>(base?: I): CMsgExtractGems;
    fromPartial<I_1 extends {
        tool_item_id?: string;
        item_item_id?: string;
        item_socket_id?: number;
    } & {
        tool_item_id?: string;
        item_item_id?: string;
        item_socket_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgExtractGems>]: never; }>(object: I_1): CMsgExtractGems;
};
export declare const CMsgExtractGemsResponse: {
    fromJSON(object: any): CMsgExtractGemsResponse;
    toJSON(message: CMsgExtractGemsResponse): unknown;
    create<I extends {
        item_id?: string;
        response?: CMsgExtractGemsResponse_EExtractGems;
    } & {
        item_id?: string;
        response?: CMsgExtractGemsResponse_EExtractGems;
    } & { [K in Exclude<keyof I, keyof CMsgExtractGemsResponse>]: never; }>(base?: I): CMsgExtractGemsResponse;
    fromPartial<I_1 extends {
        item_id?: string;
        response?: CMsgExtractGemsResponse_EExtractGems;
    } & {
        item_id?: string;
        response?: CMsgExtractGemsResponse_EExtractGems;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgExtractGemsResponse>]: never; }>(object: I_1): CMsgExtractGemsResponse;
};
export declare const CMsgAddSocket: {
    fromJSON(object: any): CMsgAddSocket;
    toJSON(message: CMsgAddSocket): unknown;
    create<I extends {
        tool_item_id?: string;
        item_item_id?: string;
        unusual?: boolean;
    } & {
        tool_item_id?: string;
        item_item_id?: string;
        unusual?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgAddSocket>]: never; }>(base?: I): CMsgAddSocket;
    fromPartial<I_1 extends {
        tool_item_id?: string;
        item_item_id?: string;
        unusual?: boolean;
    } & {
        tool_item_id?: string;
        item_item_id?: string;
        unusual?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgAddSocket>]: never; }>(object: I_1): CMsgAddSocket;
};
export declare const CMsgAddSocketResponse: {
    fromJSON(object: any): CMsgAddSocketResponse;
    toJSON(message: CMsgAddSocketResponse): unknown;
    create<I extends {
        item_id?: string;
        updated_socket_index?: number[];
        response?: CMsgAddSocketResponse_EAddSocket;
    } & {
        item_id?: string;
        updated_socket_index?: number[] & number[] & { [K in Exclude<keyof I["updated_socket_index"], keyof number[]>]: never; };
        response?: CMsgAddSocketResponse_EAddSocket;
    } & { [K_1 in Exclude<keyof I, keyof CMsgAddSocketResponse>]: never; }>(base?: I): CMsgAddSocketResponse;
    fromPartial<I_1 extends {
        item_id?: string;
        updated_socket_index?: number[];
        response?: CMsgAddSocketResponse_EAddSocket;
    } & {
        item_id?: string;
        updated_socket_index?: number[] & number[] & { [K_2 in Exclude<keyof I_1["updated_socket_index"], keyof number[]>]: never; };
        response?: CMsgAddSocketResponse_EAddSocket;
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgAddSocketResponse>]: never; }>(object: I_1): CMsgAddSocketResponse;
};
export declare const CMsgAddItemToSocketData: {
    fromJSON(object: any): CMsgAddItemToSocketData;
    toJSON(message: CMsgAddItemToSocketData): unknown;
    create<I extends {
        gem_item_id?: string;
        socket_index?: number;
    } & {
        gem_item_id?: string;
        socket_index?: number;
    } & { [K in Exclude<keyof I, keyof CMsgAddItemToSocketData>]: never; }>(base?: I): CMsgAddItemToSocketData;
    fromPartial<I_1 extends {
        gem_item_id?: string;
        socket_index?: number;
    } & {
        gem_item_id?: string;
        socket_index?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgAddItemToSocketData>]: never; }>(object: I_1): CMsgAddItemToSocketData;
};
export declare const CMsgAddItemToSocket: {
    fromJSON(object: any): CMsgAddItemToSocket;
    toJSON(message: CMsgAddItemToSocket): unknown;
    create<I extends {
        item_item_id?: string;
        gems_to_socket?: {
            gem_item_id?: string;
            socket_index?: number;
        }[];
    } & {
        item_item_id?: string;
        gems_to_socket?: {
            gem_item_id?: string;
            socket_index?: number;
        }[] & ({
            gem_item_id?: string;
            socket_index?: number;
        } & {
            gem_item_id?: string;
            socket_index?: number;
        } & { [K in Exclude<keyof I["gems_to_socket"][number], keyof CMsgAddItemToSocketData>]: never; })[] & { [K_1 in Exclude<keyof I["gems_to_socket"], keyof {
            gem_item_id?: string;
            socket_index?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgAddItemToSocket>]: never; }>(base?: I): CMsgAddItemToSocket;
    fromPartial<I_1 extends {
        item_item_id?: string;
        gems_to_socket?: {
            gem_item_id?: string;
            socket_index?: number;
        }[];
    } & {
        item_item_id?: string;
        gems_to_socket?: {
            gem_item_id?: string;
            socket_index?: number;
        }[] & ({
            gem_item_id?: string;
            socket_index?: number;
        } & {
            gem_item_id?: string;
            socket_index?: number;
        } & { [K_3 in Exclude<keyof I_1["gems_to_socket"][number], keyof CMsgAddItemToSocketData>]: never; })[] & { [K_4 in Exclude<keyof I_1["gems_to_socket"], keyof {
            gem_item_id?: string;
            socket_index?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgAddItemToSocket>]: never; }>(object: I_1): CMsgAddItemToSocket;
};
export declare const CMsgAddItemToSocketResponse: {
    fromJSON(object: any): CMsgAddItemToSocketResponse;
    toJSON(message: CMsgAddItemToSocketResponse): unknown;
    create<I extends {
        item_item_id?: string;
        updated_socket_index?: number[];
        response?: CMsgAddItemToSocketResponse_EAddGem;
    } & {
        item_item_id?: string;
        updated_socket_index?: number[] & number[] & { [K in Exclude<keyof I["updated_socket_index"], keyof number[]>]: never; };
        response?: CMsgAddItemToSocketResponse_EAddGem;
    } & { [K_1 in Exclude<keyof I, keyof CMsgAddItemToSocketResponse>]: never; }>(base?: I): CMsgAddItemToSocketResponse;
    fromPartial<I_1 extends {
        item_item_id?: string;
        updated_socket_index?: number[];
        response?: CMsgAddItemToSocketResponse_EAddGem;
    } & {
        item_item_id?: string;
        updated_socket_index?: number[] & number[] & { [K_2 in Exclude<keyof I_1["updated_socket_index"], keyof number[]>]: never; };
        response?: CMsgAddItemToSocketResponse_EAddGem;
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgAddItemToSocketResponse>]: never; }>(object: I_1): CMsgAddItemToSocketResponse;
};
export declare const CMsgResetStrangeGemCount: {
    fromJSON(object: any): CMsgResetStrangeGemCount;
    toJSON(message: CMsgResetStrangeGemCount): unknown;
    create<I extends {
        item_item_id?: string;
        socket_index?: number;
    } & {
        item_item_id?: string;
        socket_index?: number;
    } & { [K in Exclude<keyof I, keyof CMsgResetStrangeGemCount>]: never; }>(base?: I): CMsgResetStrangeGemCount;
    fromPartial<I_1 extends {
        item_item_id?: string;
        socket_index?: number;
    } & {
        item_item_id?: string;
        socket_index?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgResetStrangeGemCount>]: never; }>(object: I_1): CMsgResetStrangeGemCount;
};
export declare const CMsgResetStrangeGemCountResponse: {
    fromJSON(object: any): CMsgResetStrangeGemCountResponse;
    toJSON(message: CMsgResetStrangeGemCountResponse): unknown;
    create<I extends {
        response?: CMsgResetStrangeGemCountResponse_EResetGem;
    } & {
        response?: CMsgResetStrangeGemCountResponse_EResetGem;
    } & { [K in Exclude<keyof I, "response">]: never; }>(base?: I): CMsgResetStrangeGemCountResponse;
    fromPartial<I_1 extends {
        response?: CMsgResetStrangeGemCountResponse_EResetGem;
    } & {
        response?: CMsgResetStrangeGemCountResponse_EResetGem;
    } & { [K_1 in Exclude<keyof I_1, "response">]: never; }>(object: I_1): CMsgResetStrangeGemCountResponse;
};
export declare const CMsgGCToClientPollFileRequest: {
    fromJSON(object: any): CMsgGCToClientPollFileRequest;
    toJSON(message: CMsgGCToClientPollFileRequest): unknown;
    create<I extends {
        file_name?: string;
        client_version?: number;
        poll_id?: number;
    } & {
        file_name?: string;
        client_version?: number;
        poll_id?: number;
    } & { [K in Exclude<keyof I, keyof CMsgGCToClientPollFileRequest>]: never; }>(base?: I): CMsgGCToClientPollFileRequest;
    fromPartial<I_1 extends {
        file_name?: string;
        client_version?: number;
        poll_id?: number;
    } & {
        file_name?: string;
        client_version?: number;
        poll_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToClientPollFileRequest>]: never; }>(object: I_1): CMsgGCToClientPollFileRequest;
};
export declare const CMsgGCToClientPollFileResponse: {
    fromJSON(object: any): CMsgGCToClientPollFileResponse;
    toJSON(message: CMsgGCToClientPollFileResponse): unknown;
    create<I extends {
        poll_id?: number;
        file_size?: number;
        file_crc?: number;
    } & {
        poll_id?: number;
        file_size?: number;
        file_crc?: number;
    } & { [K in Exclude<keyof I, keyof CMsgGCToClientPollFileResponse>]: never; }>(base?: I): CMsgGCToClientPollFileResponse;
    fromPartial<I_1 extends {
        poll_id?: number;
        file_size?: number;
        file_crc?: number;
    } & {
        poll_id?: number;
        file_size?: number;
        file_crc?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToClientPollFileResponse>]: never; }>(object: I_1): CMsgGCToClientPollFileResponse;
};
export declare const CMsgGCToGCPerformManualOp: {
    fromJSON(object: any): CMsgGCToGCPerformManualOp;
    toJSON(message: CMsgGCToGCPerformManualOp): unknown;
    create<I extends {
        op_id?: string;
        group_code?: number;
    } & {
        op_id?: string;
        group_code?: number;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCPerformManualOp>]: never; }>(base?: I): CMsgGCToGCPerformManualOp;
    fromPartial<I_1 extends {
        op_id?: string;
        group_code?: number;
    } & {
        op_id?: string;
        group_code?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCPerformManualOp>]: never; }>(object: I_1): CMsgGCToGCPerformManualOp;
};
export declare const CMsgGCToGCPerformManualOpCompleted: {
    fromJSON(object: any): CMsgGCToGCPerformManualOpCompleted;
    toJSON(message: CMsgGCToGCPerformManualOpCompleted): unknown;
    create<I extends {
        success?: boolean;
        source_gc?: number;
    } & {
        success?: boolean;
        source_gc?: number;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCPerformManualOpCompleted>]: never; }>(base?: I): CMsgGCToGCPerformManualOpCompleted;
    fromPartial<I_1 extends {
        success?: boolean;
        source_gc?: number;
    } & {
        success?: boolean;
        source_gc?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCPerformManualOpCompleted>]: never; }>(object: I_1): CMsgGCToGCPerformManualOpCompleted;
};
export declare const CMsgGCToGCReloadServerRegionSettings: {
    fromJSON(_: any): CMsgGCToGCReloadServerRegionSettings;
    toJSON(_: CMsgGCToGCReloadServerRegionSettings): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgGCToGCReloadServerRegionSettings;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgGCToGCReloadServerRegionSettings;
};
export declare const CMsgGCAdditionalWelcomeMsgList: {
    fromJSON(object: any): CMsgGCAdditionalWelcomeMsgList;
    toJSON(message: CMsgGCAdditionalWelcomeMsgList): unknown;
    create<I extends {
        welcome_messages?: {
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        }[];
    } & {
        welcome_messages?: {
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        }[] & ({
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        } & {
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        } & { [K in Exclude<keyof I["welcome_messages"][number], keyof CExtraMsgBlock>]: never; })[] & { [K_1 in Exclude<keyof I["welcome_messages"], keyof {
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "welcome_messages">]: never; }>(base?: I): CMsgGCAdditionalWelcomeMsgList;
    fromPartial<I_1 extends {
        welcome_messages?: {
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        }[];
    } & {
        welcome_messages?: {
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        }[] & ({
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        } & {
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        } & { [K_3 in Exclude<keyof I_1["welcome_messages"][number], keyof CExtraMsgBlock>]: never; })[] & { [K_4 in Exclude<keyof I_1["welcome_messages"], keyof {
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "welcome_messages">]: never; }>(object: I_1): CMsgGCAdditionalWelcomeMsgList;
};
export declare const CMsgApplyRemoteConVars: {
    fromJSON(object: any): CMsgApplyRemoteConVars;
    toJSON(message: CMsgApplyRemoteConVars): unknown;
    create<I extends {
        con_vars?: {
            name?: string;
            value?: string;
            version_min?: number;
            version_max?: number;
            platform?: EGCPlatform;
        }[];
    } & {
        con_vars?: {
            name?: string;
            value?: string;
            version_min?: number;
            version_max?: number;
            platform?: EGCPlatform;
        }[] & ({
            name?: string;
            value?: string;
            version_min?: number;
            version_max?: number;
            platform?: EGCPlatform;
        } & {
            name?: string;
            value?: string;
            version_min?: number;
            version_max?: number;
            platform?: EGCPlatform;
        } & { [K in Exclude<keyof I["con_vars"][number], keyof CMsgApplyRemoteConVars_ConVar>]: never; })[] & { [K_1 in Exclude<keyof I["con_vars"], keyof {
            name?: string;
            value?: string;
            version_min?: number;
            version_max?: number;
            platform?: EGCPlatform;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "con_vars">]: never; }>(base?: I): CMsgApplyRemoteConVars;
    fromPartial<I_1 extends {
        con_vars?: {
            name?: string;
            value?: string;
            version_min?: number;
            version_max?: number;
            platform?: EGCPlatform;
        }[];
    } & {
        con_vars?: {
            name?: string;
            value?: string;
            version_min?: number;
            version_max?: number;
            platform?: EGCPlatform;
        }[] & ({
            name?: string;
            value?: string;
            version_min?: number;
            version_max?: number;
            platform?: EGCPlatform;
        } & {
            name?: string;
            value?: string;
            version_min?: number;
            version_max?: number;
            platform?: EGCPlatform;
        } & { [K_3 in Exclude<keyof I_1["con_vars"][number], keyof CMsgApplyRemoteConVars_ConVar>]: never; })[] & { [K_4 in Exclude<keyof I_1["con_vars"], keyof {
            name?: string;
            value?: string;
            version_min?: number;
            version_max?: number;
            platform?: EGCPlatform;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "con_vars">]: never; }>(object: I_1): CMsgApplyRemoteConVars;
};
export declare const CMsgApplyRemoteConVars_ConVar: {
    fromJSON(object: any): CMsgApplyRemoteConVars_ConVar;
    toJSON(message: CMsgApplyRemoteConVars_ConVar): unknown;
    create<I extends {
        name?: string;
        value?: string;
        version_min?: number;
        version_max?: number;
        platform?: EGCPlatform;
    } & {
        name?: string;
        value?: string;
        version_min?: number;
        version_max?: number;
        platform?: EGCPlatform;
    } & { [K in Exclude<keyof I, keyof CMsgApplyRemoteConVars_ConVar>]: never; }>(base?: I): CMsgApplyRemoteConVars_ConVar;
    fromPartial<I_1 extends {
        name?: string;
        value?: string;
        version_min?: number;
        version_max?: number;
        platform?: EGCPlatform;
    } & {
        name?: string;
        value?: string;
        version_min?: number;
        version_max?: number;
        platform?: EGCPlatform;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgApplyRemoteConVars_ConVar>]: never; }>(object: I_1): CMsgApplyRemoteConVars_ConVar;
};
export declare const CMsgGCToClientApplyRemoteConVars: {
    fromJSON(object: any): CMsgGCToClientApplyRemoteConVars;
    toJSON(message: CMsgGCToClientApplyRemoteConVars): unknown;
    create<I extends {
        msg?: {
            con_vars?: {
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            }[];
        };
    } & {
        msg?: {
            con_vars?: {
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            }[];
        } & {
            con_vars?: {
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            }[] & ({
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            } & {
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            } & { [K in Exclude<keyof I["msg"]["con_vars"][number], keyof CMsgApplyRemoteConVars_ConVar>]: never; })[] & { [K_1 in Exclude<keyof I["msg"]["con_vars"], keyof {
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["msg"], "con_vars">]: never; };
    } & { [K_3 in Exclude<keyof I, "msg">]: never; }>(base?: I): CMsgGCToClientApplyRemoteConVars;
    fromPartial<I_1 extends {
        msg?: {
            con_vars?: {
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            }[];
        };
    } & {
        msg?: {
            con_vars?: {
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            }[];
        } & {
            con_vars?: {
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            }[] & ({
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            } & {
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            } & { [K_4 in Exclude<keyof I_1["msg"]["con_vars"][number], keyof CMsgApplyRemoteConVars_ConVar>]: never; })[] & { [K_5 in Exclude<keyof I_1["msg"]["con_vars"], keyof {
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            }[]>]: never; };
        } & { [K_6 in Exclude<keyof I_1["msg"], "con_vars">]: never; };
    } & { [K_7 in Exclude<keyof I_1, "msg">]: never; }>(object: I_1): CMsgGCToClientApplyRemoteConVars;
};
export declare const CMsgGCToServerApplyRemoteConVars: {
    fromJSON(object: any): CMsgGCToServerApplyRemoteConVars;
    toJSON(message: CMsgGCToServerApplyRemoteConVars): unknown;
    create<I extends {
        msg?: {
            con_vars?: {
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            }[];
        };
    } & {
        msg?: {
            con_vars?: {
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            }[];
        } & {
            con_vars?: {
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            }[] & ({
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            } & {
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            } & { [K in Exclude<keyof I["msg"]["con_vars"][number], keyof CMsgApplyRemoteConVars_ConVar>]: never; })[] & { [K_1 in Exclude<keyof I["msg"]["con_vars"], keyof {
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["msg"], "con_vars">]: never; };
    } & { [K_3 in Exclude<keyof I, "msg">]: never; }>(base?: I): CMsgGCToServerApplyRemoteConVars;
    fromPartial<I_1 extends {
        msg?: {
            con_vars?: {
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            }[];
        };
    } & {
        msg?: {
            con_vars?: {
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            }[];
        } & {
            con_vars?: {
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            }[] & ({
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            } & {
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            } & { [K_4 in Exclude<keyof I_1["msg"]["con_vars"][number], keyof CMsgApplyRemoteConVars_ConVar>]: never; })[] & { [K_5 in Exclude<keyof I_1["msg"]["con_vars"], keyof {
                name?: string;
                value?: string;
                version_min?: number;
                version_max?: number;
                platform?: EGCPlatform;
            }[]>]: never; };
        } & { [K_6 in Exclude<keyof I_1["msg"], "con_vars">]: never; };
    } & { [K_7 in Exclude<keyof I_1, "msg">]: never; }>(object: I_1): CMsgGCToServerApplyRemoteConVars;
};
export declare const CMsgClientToGCIntegrityStatus: {
    fromJSON(object: any): CMsgClientToGCIntegrityStatus;
    toJSON(message: CMsgClientToGCIntegrityStatus): unknown;
    create<I extends {
        report?: string;
        secure_allowed?: boolean;
        diagnostics?: {
            id?: number;
            extended?: number;
            value?: string;
            string_value?: string;
        }[];
    } & {
        report?: string;
        secure_allowed?: boolean;
        diagnostics?: {
            id?: number;
            extended?: number;
            value?: string;
            string_value?: string;
        }[] & ({
            id?: number;
            extended?: number;
            value?: string;
            string_value?: string;
        } & {
            id?: number;
            extended?: number;
            value?: string;
            string_value?: string;
        } & { [K in Exclude<keyof I["diagnostics"][number], keyof CMsgClientToGCIntegrityStatus_keyvalue>]: never; })[] & { [K_1 in Exclude<keyof I["diagnostics"], keyof {
            id?: number;
            extended?: number;
            value?: string;
            string_value?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgClientToGCIntegrityStatus>]: never; }>(base?: I): CMsgClientToGCIntegrityStatus;
    fromPartial<I_1 extends {
        report?: string;
        secure_allowed?: boolean;
        diagnostics?: {
            id?: number;
            extended?: number;
            value?: string;
            string_value?: string;
        }[];
    } & {
        report?: string;
        secure_allowed?: boolean;
        diagnostics?: {
            id?: number;
            extended?: number;
            value?: string;
            string_value?: string;
        }[] & ({
            id?: number;
            extended?: number;
            value?: string;
            string_value?: string;
        } & {
            id?: number;
            extended?: number;
            value?: string;
            string_value?: string;
        } & { [K_3 in Exclude<keyof I_1["diagnostics"][number], keyof CMsgClientToGCIntegrityStatus_keyvalue>]: never; })[] & { [K_4 in Exclude<keyof I_1["diagnostics"], keyof {
            id?: number;
            extended?: number;
            value?: string;
            string_value?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgClientToGCIntegrityStatus>]: never; }>(object: I_1): CMsgClientToGCIntegrityStatus;
};
export declare const CMsgClientToGCIntegrityStatus_keyvalue: {
    fromJSON(object: any): CMsgClientToGCIntegrityStatus_keyvalue;
    toJSON(message: CMsgClientToGCIntegrityStatus_keyvalue): unknown;
    create<I extends {
        id?: number;
        extended?: number;
        value?: string;
        string_value?: string;
    } & {
        id?: number;
        extended?: number;
        value?: string;
        string_value?: string;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCIntegrityStatus_keyvalue>]: never; }>(base?: I): CMsgClientToGCIntegrityStatus_keyvalue;
    fromPartial<I_1 extends {
        id?: number;
        extended?: number;
        value?: string;
        string_value?: string;
    } & {
        id?: number;
        extended?: number;
        value?: string;
        string_value?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCIntegrityStatus_keyvalue>]: never; }>(object: I_1): CMsgClientToGCIntegrityStatus_keyvalue;
};
export declare const CMsgClientToGCAggregateMetrics: {
    fromJSON(object: any): CMsgClientToGCAggregateMetrics;
    toJSON(message: CMsgClientToGCAggregateMetrics): unknown;
    create<I extends {
        metrics?: {
            metric_name?: string;
            metric_count?: number;
        }[];
    } & {
        metrics?: {
            metric_name?: string;
            metric_count?: number;
        }[] & ({
            metric_name?: string;
            metric_count?: number;
        } & {
            metric_name?: string;
            metric_count?: number;
        } & { [K in Exclude<keyof I["metrics"][number], keyof CMsgClientToGCAggregateMetrics_SingleMetric>]: never; })[] & { [K_1 in Exclude<keyof I["metrics"], keyof {
            metric_name?: string;
            metric_count?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "metrics">]: never; }>(base?: I): CMsgClientToGCAggregateMetrics;
    fromPartial<I_1 extends {
        metrics?: {
            metric_name?: string;
            metric_count?: number;
        }[];
    } & {
        metrics?: {
            metric_name?: string;
            metric_count?: number;
        }[] & ({
            metric_name?: string;
            metric_count?: number;
        } & {
            metric_name?: string;
            metric_count?: number;
        } & { [K_3 in Exclude<keyof I_1["metrics"][number], keyof CMsgClientToGCAggregateMetrics_SingleMetric>]: never; })[] & { [K_4 in Exclude<keyof I_1["metrics"], keyof {
            metric_name?: string;
            metric_count?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "metrics">]: never; }>(object: I_1): CMsgClientToGCAggregateMetrics;
};
export declare const CMsgClientToGCAggregateMetrics_SingleMetric: {
    fromJSON(object: any): CMsgClientToGCAggregateMetrics_SingleMetric;
    toJSON(message: CMsgClientToGCAggregateMetrics_SingleMetric): unknown;
    create<I extends {
        metric_name?: string;
        metric_count?: number;
    } & {
        metric_name?: string;
        metric_count?: number;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCAggregateMetrics_SingleMetric>]: never; }>(base?: I): CMsgClientToGCAggregateMetrics_SingleMetric;
    fromPartial<I_1 extends {
        metric_name?: string;
        metric_count?: number;
    } & {
        metric_name?: string;
        metric_count?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCAggregateMetrics_SingleMetric>]: never; }>(object: I_1): CMsgClientToGCAggregateMetrics_SingleMetric;
};
export declare const CMsgGCToClientAggregateMetricsBackoff: {
    fromJSON(object: any): CMsgGCToClientAggregateMetricsBackoff;
    toJSON(message: CMsgGCToClientAggregateMetricsBackoff): unknown;
    create<I extends {
        upload_rate_modifier?: number;
    } & {
        upload_rate_modifier?: number;
    } & { [K in Exclude<keyof I, "upload_rate_modifier">]: never; }>(base?: I): CMsgGCToClientAggregateMetricsBackoff;
    fromPartial<I_1 extends {
        upload_rate_modifier?: number;
    } & {
        upload_rate_modifier?: number;
    } & { [K_1 in Exclude<keyof I_1, "upload_rate_modifier">]: never; }>(object: I_1): CMsgGCToClientAggregateMetricsBackoff;
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
