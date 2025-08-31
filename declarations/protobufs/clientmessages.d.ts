export declare const protobufPackage = "";
export declare enum EBaseClientMessages {
    CM_CustomGameEvent = 280,
    CM_CustomGameEventBounce = 281,
    CM_ClientUIEvent = 282,
    CM_DevPaletteVisibilityChanged = 283,
    CM_WorldUIControllerHasPanelChanged = 284,
    CM_RotateAnchor = 285,
    CM_MAX_BASE = 300,
    UNRECOGNIZED = -1
}
export declare function eBaseClientMessagesFromJSON(object: any): EBaseClientMessages;
export declare function eBaseClientMessagesToJSON(object: EBaseClientMessages): string;
export declare enum EClientUIEvent {
    EClientUIEvent_Invalid = 0,
    EClientUIEvent_DialogFinished = 1,
    EClientUIEvent_FireOutput = 2,
    UNRECOGNIZED = -1
}
export declare function eClientUIEventFromJSON(object: any): EClientUIEvent;
export declare function eClientUIEventToJSON(object: EClientUIEvent): string;
export interface CClientMsg_CustomGameEvent {
    event_name: string;
    data: string;
}
export interface CClientMsg_CustomGameEventBounce {
    event_name: string;
    data: string;
    player_slot: number;
}
export interface CClientMsg_ClientUIEvent {
    event: EClientUIEvent;
    ent_ehandle: number;
    client_ehandle: number;
    data1: string;
    data2: string;
}
export interface CClientMsg_DevPaletteVisibilityChangedEvent {
    visible: boolean;
}
export interface CClientMsg_WorldUIControllerHasPanelChangedEvent {
    has_panel: boolean;
    client_ehandle: number;
    literal_hand_type: number;
}
export interface CClientMsg_RotateAnchor {
    angle: number;
}
export declare const CClientMsg_CustomGameEvent: {
    fromJSON(object: any): CClientMsg_CustomGameEvent;
    toJSON(message: CClientMsg_CustomGameEvent): unknown;
    create<I extends {
        event_name?: string;
        data?: string;
    } & {
        event_name?: string;
        data?: string;
    } & { [K in Exclude<keyof I, keyof CClientMsg_CustomGameEvent>]: never; }>(base?: I): CClientMsg_CustomGameEvent;
    fromPartial<I_1 extends {
        event_name?: string;
        data?: string;
    } & {
        event_name?: string;
        data?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CClientMsg_CustomGameEvent>]: never; }>(object: I_1): CClientMsg_CustomGameEvent;
};
export declare const CClientMsg_CustomGameEventBounce: {
    fromJSON(object: any): CClientMsg_CustomGameEventBounce;
    toJSON(message: CClientMsg_CustomGameEventBounce): unknown;
    create<I extends {
        event_name?: string;
        data?: string;
        player_slot?: number;
    } & {
        event_name?: string;
        data?: string;
        player_slot?: number;
    } & { [K in Exclude<keyof I, keyof CClientMsg_CustomGameEventBounce>]: never; }>(base?: I): CClientMsg_CustomGameEventBounce;
    fromPartial<I_1 extends {
        event_name?: string;
        data?: string;
        player_slot?: number;
    } & {
        event_name?: string;
        data?: string;
        player_slot?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CClientMsg_CustomGameEventBounce>]: never; }>(object: I_1): CClientMsg_CustomGameEventBounce;
};
export declare const CClientMsg_ClientUIEvent: {
    fromJSON(object: any): CClientMsg_ClientUIEvent;
    toJSON(message: CClientMsg_ClientUIEvent): unknown;
    create<I extends {
        event?: EClientUIEvent;
        ent_ehandle?: number;
        client_ehandle?: number;
        data1?: string;
        data2?: string;
    } & {
        event?: EClientUIEvent;
        ent_ehandle?: number;
        client_ehandle?: number;
        data1?: string;
        data2?: string;
    } & { [K in Exclude<keyof I, keyof CClientMsg_ClientUIEvent>]: never; }>(base?: I): CClientMsg_ClientUIEvent;
    fromPartial<I_1 extends {
        event?: EClientUIEvent;
        ent_ehandle?: number;
        client_ehandle?: number;
        data1?: string;
        data2?: string;
    } & {
        event?: EClientUIEvent;
        ent_ehandle?: number;
        client_ehandle?: number;
        data1?: string;
        data2?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CClientMsg_ClientUIEvent>]: never; }>(object: I_1): CClientMsg_ClientUIEvent;
};
export declare const CClientMsg_DevPaletteVisibilityChangedEvent: {
    fromJSON(object: any): CClientMsg_DevPaletteVisibilityChangedEvent;
    toJSON(message: CClientMsg_DevPaletteVisibilityChangedEvent): unknown;
    create<I extends {
        visible?: boolean;
    } & {
        visible?: boolean;
    } & { [K in Exclude<keyof I, "visible">]: never; }>(base?: I): CClientMsg_DevPaletteVisibilityChangedEvent;
    fromPartial<I_1 extends {
        visible?: boolean;
    } & {
        visible?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "visible">]: never; }>(object: I_1): CClientMsg_DevPaletteVisibilityChangedEvent;
};
export declare const CClientMsg_WorldUIControllerHasPanelChangedEvent: {
    fromJSON(object: any): CClientMsg_WorldUIControllerHasPanelChangedEvent;
    toJSON(message: CClientMsg_WorldUIControllerHasPanelChangedEvent): unknown;
    create<I extends {
        has_panel?: boolean;
        client_ehandle?: number;
        literal_hand_type?: number;
    } & {
        has_panel?: boolean;
        client_ehandle?: number;
        literal_hand_type?: number;
    } & { [K in Exclude<keyof I, keyof CClientMsg_WorldUIControllerHasPanelChangedEvent>]: never; }>(base?: I): CClientMsg_WorldUIControllerHasPanelChangedEvent;
    fromPartial<I_1 extends {
        has_panel?: boolean;
        client_ehandle?: number;
        literal_hand_type?: number;
    } & {
        has_panel?: boolean;
        client_ehandle?: number;
        literal_hand_type?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CClientMsg_WorldUIControllerHasPanelChangedEvent>]: never; }>(object: I_1): CClientMsg_WorldUIControllerHasPanelChangedEvent;
};
export declare const CClientMsg_RotateAnchor: {
    fromJSON(object: any): CClientMsg_RotateAnchor;
    toJSON(message: CClientMsg_RotateAnchor): unknown;
    create<I extends {
        angle?: number;
    } & {
        angle?: number;
    } & { [K in Exclude<keyof I, "angle">]: never; }>(base?: I): CClientMsg_RotateAnchor;
    fromPartial<I_1 extends {
        angle?: number;
    } & {
        angle?: number;
    } & { [K_1 in Exclude<keyof I_1, "angle">]: never; }>(object: I_1): CClientMsg_RotateAnchor;
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
