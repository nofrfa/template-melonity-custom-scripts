export declare const protobufPackage = "";
export declare enum EGCEconBaseMsg {
    k_EMsgGCGenericResult = 2579,
    UNRECOGNIZED = -1
}
export declare function eGCEconBaseMsgFromJSON(object: any): EGCEconBaseMsg;
export declare function eGCEconBaseMsgToJSON(object: EGCEconBaseMsg): string;
export declare enum EGCMsgResponse {
    k_EGCMsgResponseOK = 0,
    k_EGCMsgResponseDenied = 1,
    k_EGCMsgResponseServerError = 2,
    k_EGCMsgResponseTimeout = 3,
    k_EGCMsgResponseInvalid = 4,
    k_EGCMsgResponseNoMatch = 5,
    k_EGCMsgResponseUnknownError = 6,
    k_EGCMsgResponseNotLoggedOn = 7,
    k_EGCMsgFailedToCreate = 8,
    UNRECOGNIZED = -1
}
export declare function eGCMsgResponseFromJSON(object: any): EGCMsgResponse;
export declare function eGCMsgResponseToJSON(object: EGCMsgResponse): string;
export declare enum EGCMsgUseItemResponse {
    k_EGCMsgUseItemResponse_ItemUsed = 0,
    k_EGCMsgUseItemResponse_GiftNoOtherPlayers = 1,
    k_EGCMsgUseItemResponse_ServerError = 2,
    k_EGCMsgUseItemResponse_MiniGameAlreadyStarted = 3,
    k_EGCMsgUseItemResponse_ItemUsed_ItemsGranted = 4,
    k_EGCMsgUseItemResponse_DropRateBonusAlreadyGranted = 5,
    k_EGCMsgUseItemResponse_NotInLowPriorityPool = 6,
    k_EGCMsgUseItemResponse_NotHighEnoughLevel = 7,
    k_EGCMsgUseItemResponse_EventNotActive = 8,
    k_EGCMsgUseItemResponse_ItemUsed_EventPointsGranted = 9,
    k_EGCMsgUseItemResponse_MissingRequirement = 10,
    k_EGCMsgUseItemResponse_EmoticonUnlock_NoNew = 11,
    k_EGCMsgUseItemResponse_EmoticonUnlock_Complete = 12,
    k_EGCMsgUseItemResponse_ItemUsed_Compendium = 13,
    UNRECOGNIZED = -1
}
export declare function eGCMsgUseItemResponseFromJSON(object: any): EGCMsgUseItemResponse;
export declare function eGCMsgUseItemResponseToJSON(object: EGCMsgUseItemResponse): string;
export interface CMsgGenericResult {
    eresult: number;
    debug_message: string;
}
export declare const CMsgGenericResult: {
    fromJSON(object: any): CMsgGenericResult;
    toJSON(message: CMsgGenericResult): unknown;
    create<I extends {
        eresult?: number;
        debug_message?: string;
    } & {
        eresult?: number;
        debug_message?: string;
    } & { [K in Exclude<keyof I, keyof CMsgGenericResult>]: never; }>(base?: I): CMsgGenericResult;
    fromPartial<I_1 extends {
        eresult?: number;
        debug_message?: string;
    } & {
        eresult?: number;
        debug_message?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGenericResult>]: never; }>(object: I_1): CMsgGenericResult;
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
