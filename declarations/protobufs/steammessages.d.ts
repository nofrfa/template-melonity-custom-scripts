export declare const protobufPackage = "";
export declare enum EGCPlatform {
    k_eGCPlatform_None = 0,
    k_eGCPlatform_PC = 1,
    k_eGCPlatform_Mac = 2,
    k_eGCPlatform_Linux = 3,
    k_eGCPlatform_Android = 4,
    k_eGCPlatform_iOS = 5,
    UNRECOGNIZED = -1
}
export declare function eGCPlatformFromJSON(object: any): EGCPlatform;
export declare function eGCPlatformToJSON(object: EGCPlatform): string;
export declare enum GCProtoBufMsgSrc {
    GCProtoBufMsgSrc_Unspecified = 0,
    GCProtoBufMsgSrc_FromSystem = 1,
    GCProtoBufMsgSrc_FromSteamID = 2,
    GCProtoBufMsgSrc_FromGC = 3,
    GCProtoBufMsgSrc_ReplySystem = 4,
    GCProtoBufMsgSrc_SpoofedSteamID = 5,
    UNRECOGNIZED = -1
}
export declare function gCProtoBufMsgSrcFromJSON(object: any): GCProtoBufMsgSrc;
export declare function gCProtoBufMsgSrcToJSON(object: GCProtoBufMsgSrc): string;
export interface CMsgProtoBufHeader {
    client_steam_id: string;
    client_session_id: number;
    source_app_id: number;
    job_id_source: string;
    job_id_target: string;
    target_job_name: string;
    eresult: number;
    error_message: string;
    gc_msg_src: GCProtoBufMsgSrc;
    gc_dir_index_source: number;
}
export interface CGCSystemMsg_GetAccountDetails {
    steamid: string;
    appid: number;
}
export interface CGCSystemMsg_GetAccountDetails_Response {
    eresult_deprecated: number;
    account_name: string;
    persona_name: string;
    is_profile_created: boolean;
    is_profile_public: boolean;
    is_inventory_public: boolean;
    is_vac_banned: boolean;
    is_cyber_cafe: boolean;
    is_school_account: boolean;
    is_limited: boolean;
    is_subscribed: boolean;
    package: number;
    is_free_trial_account: boolean;
    free_trial_expiration: number;
    is_low_violence: boolean;
    is_account_locked_down: boolean;
    is_community_banned: boolean;
    is_trade_banned: boolean;
    trade_ban_expiration: number;
    accountid: number;
    suspension_end_time: number;
    currency: string;
    steam_level: number;
    friend_count: number;
    account_creation_time: number;
    is_steamguard_enabled: boolean;
    is_phone_verified: boolean;
    is_two_factor_auth_enabled: boolean;
    two_factor_enabled_time: number;
    phone_verification_time: number;
    phone_id: string;
    is_phone_identifying: boolean;
    rt_identity_linked: number;
    rt_birth_date: number;
    txn_country_code: string;
    has_accepted_china_ssa: boolean;
    is_banned_steam_china: boolean;
}
export interface CIPLocationInfo {
    ip: number;
    latitude: number;
    longitude: number;
    country: string;
    state: string;
    city: string;
}
export interface CGCMsgGetIPLocationResponse {
    infos: CIPLocationInfo[];
}
export declare const CMsgProtoBufHeader: {
    fromJSON(object: any): CMsgProtoBufHeader;
    toJSON(message: CMsgProtoBufHeader): unknown;
    create<I extends {
        client_steam_id?: string;
        client_session_id?: number;
        source_app_id?: number;
        job_id_source?: string;
        job_id_target?: string;
        target_job_name?: string;
        eresult?: number;
        error_message?: string;
        gc_msg_src?: GCProtoBufMsgSrc;
        gc_dir_index_source?: number;
    } & {
        client_steam_id?: string;
        client_session_id?: number;
        source_app_id?: number;
        job_id_source?: string;
        job_id_target?: string;
        target_job_name?: string;
        eresult?: number;
        error_message?: string;
        gc_msg_src?: GCProtoBufMsgSrc;
        gc_dir_index_source?: number;
    } & { [K in Exclude<keyof I, keyof CMsgProtoBufHeader>]: never; }>(base?: I): CMsgProtoBufHeader;
    fromPartial<I_1 extends {
        client_steam_id?: string;
        client_session_id?: number;
        source_app_id?: number;
        job_id_source?: string;
        job_id_target?: string;
        target_job_name?: string;
        eresult?: number;
        error_message?: string;
        gc_msg_src?: GCProtoBufMsgSrc;
        gc_dir_index_source?: number;
    } & {
        client_steam_id?: string;
        client_session_id?: number;
        source_app_id?: number;
        job_id_source?: string;
        job_id_target?: string;
        target_job_name?: string;
        eresult?: number;
        error_message?: string;
        gc_msg_src?: GCProtoBufMsgSrc;
        gc_dir_index_source?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgProtoBufHeader>]: never; }>(object: I_1): CMsgProtoBufHeader;
};
export declare const CGCSystemMsg_GetAccountDetails: {
    fromJSON(object: any): CGCSystemMsg_GetAccountDetails;
    toJSON(message: CGCSystemMsg_GetAccountDetails): unknown;
    create<I extends {
        steamid?: string;
        appid?: number;
    } & {
        steamid?: string;
        appid?: number;
    } & { [K in Exclude<keyof I, keyof CGCSystemMsg_GetAccountDetails>]: never; }>(base?: I): CGCSystemMsg_GetAccountDetails;
    fromPartial<I_1 extends {
        steamid?: string;
        appid?: number;
    } & {
        steamid?: string;
        appid?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CGCSystemMsg_GetAccountDetails>]: never; }>(object: I_1): CGCSystemMsg_GetAccountDetails;
};
export declare const CGCSystemMsg_GetAccountDetails_Response: {
    fromJSON(object: any): CGCSystemMsg_GetAccountDetails_Response;
    toJSON(message: CGCSystemMsg_GetAccountDetails_Response): unknown;
    create<I extends {
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
    } & { [K in Exclude<keyof I, keyof CGCSystemMsg_GetAccountDetails_Response>]: never; }>(base?: I): CGCSystemMsg_GetAccountDetails_Response;
    fromPartial<I_1 extends {
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
    } & { [K_1 in Exclude<keyof I_1, keyof CGCSystemMsg_GetAccountDetails_Response>]: never; }>(object: I_1): CGCSystemMsg_GetAccountDetails_Response;
};
export declare const CIPLocationInfo: {
    fromJSON(object: any): CIPLocationInfo;
    toJSON(message: CIPLocationInfo): unknown;
    create<I extends {
        ip?: number;
        latitude?: number;
        longitude?: number;
        country?: string;
        state?: string;
        city?: string;
    } & {
        ip?: number;
        latitude?: number;
        longitude?: number;
        country?: string;
        state?: string;
        city?: string;
    } & { [K in Exclude<keyof I, keyof CIPLocationInfo>]: never; }>(base?: I): CIPLocationInfo;
    fromPartial<I_1 extends {
        ip?: number;
        latitude?: number;
        longitude?: number;
        country?: string;
        state?: string;
        city?: string;
    } & {
        ip?: number;
        latitude?: number;
        longitude?: number;
        country?: string;
        state?: string;
        city?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CIPLocationInfo>]: never; }>(object: I_1): CIPLocationInfo;
};
export declare const CGCMsgGetIPLocationResponse: {
    fromJSON(object: any): CGCMsgGetIPLocationResponse;
    toJSON(message: CGCMsgGetIPLocationResponse): unknown;
    create<I extends {
        infos?: {
            ip?: number;
            latitude?: number;
            longitude?: number;
            country?: string;
            state?: string;
            city?: string;
        }[];
    } & {
        infos?: {
            ip?: number;
            latitude?: number;
            longitude?: number;
            country?: string;
            state?: string;
            city?: string;
        }[] & ({
            ip?: number;
            latitude?: number;
            longitude?: number;
            country?: string;
            state?: string;
            city?: string;
        } & {
            ip?: number;
            latitude?: number;
            longitude?: number;
            country?: string;
            state?: string;
            city?: string;
        } & { [K in Exclude<keyof I["infos"][number], keyof CIPLocationInfo>]: never; })[] & { [K_1 in Exclude<keyof I["infos"], keyof {
            ip?: number;
            latitude?: number;
            longitude?: number;
            country?: string;
            state?: string;
            city?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "infos">]: never; }>(base?: I): CGCMsgGetIPLocationResponse;
    fromPartial<I_1 extends {
        infos?: {
            ip?: number;
            latitude?: number;
            longitude?: number;
            country?: string;
            state?: string;
            city?: string;
        }[];
    } & {
        infos?: {
            ip?: number;
            latitude?: number;
            longitude?: number;
            country?: string;
            state?: string;
            city?: string;
        }[] & ({
            ip?: number;
            latitude?: number;
            longitude?: number;
            country?: string;
            state?: string;
            city?: string;
        } & {
            ip?: number;
            latitude?: number;
            longitude?: number;
            country?: string;
            state?: string;
            city?: string;
        } & { [K_3 in Exclude<keyof I_1["infos"][number], keyof CIPLocationInfo>]: never; })[] & { [K_4 in Exclude<keyof I_1["infos"], keyof {
            ip?: number;
            latitude?: number;
            longitude?: number;
            country?: string;
            state?: string;
            city?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "infos">]: never; }>(object: I_1): CGCMsgGetIPLocationResponse;
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
