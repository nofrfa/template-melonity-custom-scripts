import { CMsgVector } from "./networkbasetypes";
export declare const protobufPackage = "";
export declare enum EPingSource {
    k_ePingSource_Default = 0,
    k_ePingSource_Warning = 1,
    k_ePingSource_Wheel = 2,
    k_ePingSource_System = 3,
    UNRECOGNIZED = -1
}
export declare function ePingSourceFromJSON(object: any): EPingSource;
export declare function ePingSourceToJSON(object: EPingSource): string;
export declare enum EDOTAStatPopupTypes {
    k_EDOTA_SPT_Textline = 0,
    k_EDOTA_SPT_Basic = 1,
    k_EDOTA_SPT_Poll = 2,
    k_EDOTA_SPT_Grid = 3,
    k_EDOTA_SPT_DualImage = 4,
    k_EDOTA_SPT_Movie = 5,
    UNRECOGNIZED = -1
}
export declare function eDOTAStatPopupTypesFromJSON(object: any): EDOTAStatPopupTypes;
export declare function eDOTAStatPopupTypesToJSON(object: EDOTAStatPopupTypes): string;
export declare enum dotaunitorder_t {
    DOTA_UNIT_ORDER_NONE = 0,
    DOTA_UNIT_ORDER_MOVE_TO_POSITION = 1,
    DOTA_UNIT_ORDER_MOVE_TO_TARGET = 2,
    DOTA_UNIT_ORDER_ATTACK_MOVE = 3,
    DOTA_UNIT_ORDER_ATTACK_TARGET = 4,
    DOTA_UNIT_ORDER_CAST_POSITION = 5,
    DOTA_UNIT_ORDER_CAST_TARGET = 6,
    DOTA_UNIT_ORDER_CAST_TARGET_TREE = 7,
    DOTA_UNIT_ORDER_CAST_NO_TARGET = 8,
    DOTA_UNIT_ORDER_CAST_TOGGLE = 9,
    DOTA_UNIT_ORDER_HOLD_POSITION = 10,
    DOTA_UNIT_ORDER_TRAIN_ABILITY = 11,
    DOTA_UNIT_ORDER_DROP_ITEM = 12,
    DOTA_UNIT_ORDER_GIVE_ITEM = 13,
    DOTA_UNIT_ORDER_PICKUP_ITEM = 14,
    DOTA_UNIT_ORDER_PICKUP_RUNE = 15,
    DOTA_UNIT_ORDER_PURCHASE_ITEM = 16,
    DOTA_UNIT_ORDER_SELL_ITEM = 17,
    DOTA_UNIT_ORDER_DISASSEMBLE_ITEM = 18,
    DOTA_UNIT_ORDER_MOVE_ITEM = 19,
    DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO = 20,
    DOTA_UNIT_ORDER_STOP = 21,
    DOTA_UNIT_ORDER_TAUNT = 22,
    DOTA_UNIT_ORDER_BUYBACK = 23,
    DOTA_UNIT_ORDER_GLYPH = 24,
    DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH = 25,
    DOTA_UNIT_ORDER_CAST_RUNE = 26,
    DOTA_UNIT_ORDER_PING_ABILITY = 27,
    DOTA_UNIT_ORDER_MOVE_TO_DIRECTION = 28,
    DOTA_UNIT_ORDER_PATROL = 29,
    DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION = 30,
    DOTA_UNIT_ORDER_RADAR = 31,
    DOTA_UNIT_ORDER_SET_ITEM_COMBINE_LOCK = 32,
    DOTA_UNIT_ORDER_CONTINUE = 33,
    DOTA_UNIT_ORDER_VECTOR_TARGET_CANCELED = 34,
    DOTA_UNIT_ORDER_CAST_RIVER_PAINT = 35,
    DOTA_UNIT_ORDER_PREGAME_ADJUST_ITEM_ASSIGNMENT = 36,
    DOTA_UNIT_ORDER_DROP_ITEM_AT_FOUNTAIN = 37,
    DOTA_UNIT_ORDER_TAKE_ITEM_FROM_NEUTRAL_ITEM_STASH = 38,
    DOTA_UNIT_ORDER_MOVE_RELATIVE = 39,
    UNRECOGNIZED = -1
}
export declare function dotaunitorder_tFromJSON(object: any): dotaunitorder_t;
export declare function dotaunitorder_tToJSON(object: dotaunitorder_t): string;
export declare enum EDOTAVersusScenePlayerBehavior {
    VS_PLAYER_BEHAVIOR_PLAY_ACTIVITY = 1,
    VS_PLAYER_BEHAVIOR_CHAT_WHEEL = 2,
    VS_PLAYER_BEHAVIOR_PLAYBACK_RATE = 3,
    UNRECOGNIZED = -1
}
export declare function eDOTAVersusScenePlayerBehaviorFromJSON(object: any): EDOTAVersusScenePlayerBehavior;
export declare function eDOTAVersusScenePlayerBehaviorToJSON(object: EDOTAVersusScenePlayerBehavior): string;
export interface CDOTAMsg_LocationPing {
    x: number;
    y: number;
    target: number;
    direct_ping: boolean;
    type: number;
    ping_source: EPingSource;
}
export interface CDOTAMsg_ItemAlert {
    x: number;
    y: number;
    item_ability_id: number;
}
export interface CDOTAMsg_MapLine {
    x: number;
    y: number;
    initial: boolean;
}
export interface CDOTAMsg_WorldLine {
    x: number;
    y: number;
    z: number;
    initial: boolean;
    end: boolean;
}
export interface CDOTAMsg_SendStatPopup {
    style: EDOTAStatPopupTypes;
    stat_strings: string[];
    stat_images: number[];
    stat_image_types: number[];
    duration: number;
    use_html: boolean;
    movie_name: string;
}
export interface CDOTAMsg_DismissAllStatPopups {
    time_delay: number;
}
export interface CDOTAMsg_CoachHUDPing {
    x: number;
    y: number;
    tgtpath: string;
}
export interface CDOTAMsg_UnitOrder {
    order_type: dotaunitorder_t;
    units: number[];
    target_index: number;
    ability_index: number;
    position: CMsgVector | undefined;
    sequence_number: number;
    flags: number;
}
export interface VersusScene_PlayActivity {
    activities: VersusScene_PlayActivity_ActivityInfo[];
    playback_rate: number;
}
export interface VersusScene_PlayActivity_ActivityInfo {
    activity: string;
    disable_auto_kill: boolean;
    force_looping: boolean;
}
export interface VersusScene_ChatWheel {
    chat_message_id: number;
    emoticon_id: number;
}
export interface VersusScene_PlaybackRate {
    rate: number;
}
export declare const CDOTAMsg_LocationPing: {
    fromJSON(object: any): CDOTAMsg_LocationPing;
    toJSON(message: CDOTAMsg_LocationPing): unknown;
    create<I extends {
        x?: number;
        y?: number;
        target?: number;
        direct_ping?: boolean;
        type?: number;
        ping_source?: EPingSource;
    } & {
        x?: number;
        y?: number;
        target?: number;
        direct_ping?: boolean;
        type?: number;
        ping_source?: EPingSource;
    } & { [K in Exclude<keyof I, keyof CDOTAMsg_LocationPing>]: never; }>(base?: I): CDOTAMsg_LocationPing;
    fromPartial<I_1 extends {
        x?: number;
        y?: number;
        target?: number;
        direct_ping?: boolean;
        type?: number;
        ping_source?: EPingSource;
    } & {
        x?: number;
        y?: number;
        target?: number;
        direct_ping?: boolean;
        type?: number;
        ping_source?: EPingSource;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMsg_LocationPing>]: never; }>(object: I_1): CDOTAMsg_LocationPing;
};
export declare const CDOTAMsg_ItemAlert: {
    fromJSON(object: any): CDOTAMsg_ItemAlert;
    toJSON(message: CDOTAMsg_ItemAlert): unknown;
    create<I extends {
        x?: number;
        y?: number;
        item_ability_id?: number;
    } & {
        x?: number;
        y?: number;
        item_ability_id?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAMsg_ItemAlert>]: never; }>(base?: I): CDOTAMsg_ItemAlert;
    fromPartial<I_1 extends {
        x?: number;
        y?: number;
        item_ability_id?: number;
    } & {
        x?: number;
        y?: number;
        item_ability_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMsg_ItemAlert>]: never; }>(object: I_1): CDOTAMsg_ItemAlert;
};
export declare const CDOTAMsg_MapLine: {
    fromJSON(object: any): CDOTAMsg_MapLine;
    toJSON(message: CDOTAMsg_MapLine): unknown;
    create<I extends {
        x?: number;
        y?: number;
        initial?: boolean;
    } & {
        x?: number;
        y?: number;
        initial?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAMsg_MapLine>]: never; }>(base?: I): CDOTAMsg_MapLine;
    fromPartial<I_1 extends {
        x?: number;
        y?: number;
        initial?: boolean;
    } & {
        x?: number;
        y?: number;
        initial?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMsg_MapLine>]: never; }>(object: I_1): CDOTAMsg_MapLine;
};
export declare const CDOTAMsg_WorldLine: {
    fromJSON(object: any): CDOTAMsg_WorldLine;
    toJSON(message: CDOTAMsg_WorldLine): unknown;
    create<I extends {
        x?: number;
        y?: number;
        z?: number;
        initial?: boolean;
        end?: boolean;
    } & {
        x?: number;
        y?: number;
        z?: number;
        initial?: boolean;
        end?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAMsg_WorldLine>]: never; }>(base?: I): CDOTAMsg_WorldLine;
    fromPartial<I_1 extends {
        x?: number;
        y?: number;
        z?: number;
        initial?: boolean;
        end?: boolean;
    } & {
        x?: number;
        y?: number;
        z?: number;
        initial?: boolean;
        end?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMsg_WorldLine>]: never; }>(object: I_1): CDOTAMsg_WorldLine;
};
export declare const CDOTAMsg_SendStatPopup: {
    fromJSON(object: any): CDOTAMsg_SendStatPopup;
    toJSON(message: CDOTAMsg_SendStatPopup): unknown;
    create<I extends {
        style?: EDOTAStatPopupTypes;
        stat_strings?: string[];
        stat_images?: number[];
        stat_image_types?: number[];
        duration?: number;
        use_html?: boolean;
        movie_name?: string;
    } & {
        style?: EDOTAStatPopupTypes;
        stat_strings?: string[] & string[] & { [K in Exclude<keyof I["stat_strings"], keyof string[]>]: never; };
        stat_images?: number[] & number[] & { [K_1 in Exclude<keyof I["stat_images"], keyof number[]>]: never; };
        stat_image_types?: number[] & number[] & { [K_2 in Exclude<keyof I["stat_image_types"], keyof number[]>]: never; };
        duration?: number;
        use_html?: boolean;
        movie_name?: string;
    } & { [K_3 in Exclude<keyof I, keyof CDOTAMsg_SendStatPopup>]: never; }>(base?: I): CDOTAMsg_SendStatPopup;
    fromPartial<I_1 extends {
        style?: EDOTAStatPopupTypes;
        stat_strings?: string[];
        stat_images?: number[];
        stat_image_types?: number[];
        duration?: number;
        use_html?: boolean;
        movie_name?: string;
    } & {
        style?: EDOTAStatPopupTypes;
        stat_strings?: string[] & string[] & { [K_4 in Exclude<keyof I_1["stat_strings"], keyof string[]>]: never; };
        stat_images?: number[] & number[] & { [K_5 in Exclude<keyof I_1["stat_images"], keyof number[]>]: never; };
        stat_image_types?: number[] & number[] & { [K_6 in Exclude<keyof I_1["stat_image_types"], keyof number[]>]: never; };
        duration?: number;
        use_html?: boolean;
        movie_name?: string;
    } & { [K_7 in Exclude<keyof I_1, keyof CDOTAMsg_SendStatPopup>]: never; }>(object: I_1): CDOTAMsg_SendStatPopup;
};
export declare const CDOTAMsg_DismissAllStatPopups: {
    fromJSON(object: any): CDOTAMsg_DismissAllStatPopups;
    toJSON(message: CDOTAMsg_DismissAllStatPopups): unknown;
    create<I extends {
        time_delay?: number;
    } & {
        time_delay?: number;
    } & { [K in Exclude<keyof I, "time_delay">]: never; }>(base?: I): CDOTAMsg_DismissAllStatPopups;
    fromPartial<I_1 extends {
        time_delay?: number;
    } & {
        time_delay?: number;
    } & { [K_1 in Exclude<keyof I_1, "time_delay">]: never; }>(object: I_1): CDOTAMsg_DismissAllStatPopups;
};
export declare const CDOTAMsg_CoachHUDPing: {
    fromJSON(object: any): CDOTAMsg_CoachHUDPing;
    toJSON(message: CDOTAMsg_CoachHUDPing): unknown;
    create<I extends {
        x?: number;
        y?: number;
        tgtpath?: string;
    } & {
        x?: number;
        y?: number;
        tgtpath?: string;
    } & { [K in Exclude<keyof I, keyof CDOTAMsg_CoachHUDPing>]: never; }>(base?: I): CDOTAMsg_CoachHUDPing;
    fromPartial<I_1 extends {
        x?: number;
        y?: number;
        tgtpath?: string;
    } & {
        x?: number;
        y?: number;
        tgtpath?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMsg_CoachHUDPing>]: never; }>(object: I_1): CDOTAMsg_CoachHUDPing;
};
export declare const CDOTAMsg_UnitOrder: {
    fromJSON(object: any): CDOTAMsg_UnitOrder;
    toJSON(message: CDOTAMsg_UnitOrder): unknown;
    create<I extends {
        order_type?: dotaunitorder_t;
        units?: number[];
        target_index?: number;
        ability_index?: number;
        position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        sequence_number?: number;
        flags?: number;
    } & {
        order_type?: dotaunitorder_t;
        units?: number[] & number[] & { [K in Exclude<keyof I["units"], keyof number[]>]: never; };
        target_index?: number;
        ability_index?: number;
        position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_1 in Exclude<keyof I["position"], keyof CMsgVector>]: never; };
        sequence_number?: number;
        flags?: number;
    } & { [K_2 in Exclude<keyof I, keyof CDOTAMsg_UnitOrder>]: never; }>(base?: I): CDOTAMsg_UnitOrder;
    fromPartial<I_1 extends {
        order_type?: dotaunitorder_t;
        units?: number[];
        target_index?: number;
        ability_index?: number;
        position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        sequence_number?: number;
        flags?: number;
    } & {
        order_type?: dotaunitorder_t;
        units?: number[] & number[] & { [K_3 in Exclude<keyof I_1["units"], keyof number[]>]: never; };
        target_index?: number;
        ability_index?: number;
        position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_4 in Exclude<keyof I_1["position"], keyof CMsgVector>]: never; };
        sequence_number?: number;
        flags?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CDOTAMsg_UnitOrder>]: never; }>(object: I_1): CDOTAMsg_UnitOrder;
};
export declare const VersusScene_PlayActivity: {
    fromJSON(object: any): VersusScene_PlayActivity;
    toJSON(message: VersusScene_PlayActivity): unknown;
    create<I extends {
        activities?: {
            activity?: string;
            disable_auto_kill?: boolean;
            force_looping?: boolean;
        }[];
        playback_rate?: number;
    } & {
        activities?: {
            activity?: string;
            disable_auto_kill?: boolean;
            force_looping?: boolean;
        }[] & ({
            activity?: string;
            disable_auto_kill?: boolean;
            force_looping?: boolean;
        } & {
            activity?: string;
            disable_auto_kill?: boolean;
            force_looping?: boolean;
        } & { [K in Exclude<keyof I["activities"][number], keyof VersusScene_PlayActivity_ActivityInfo>]: never; })[] & { [K_1 in Exclude<keyof I["activities"], keyof {
            activity?: string;
            disable_auto_kill?: boolean;
            force_looping?: boolean;
        }[]>]: never; };
        playback_rate?: number;
    } & { [K_2 in Exclude<keyof I, keyof VersusScene_PlayActivity>]: never; }>(base?: I): VersusScene_PlayActivity;
    fromPartial<I_1 extends {
        activities?: {
            activity?: string;
            disable_auto_kill?: boolean;
            force_looping?: boolean;
        }[];
        playback_rate?: number;
    } & {
        activities?: {
            activity?: string;
            disable_auto_kill?: boolean;
            force_looping?: boolean;
        }[] & ({
            activity?: string;
            disable_auto_kill?: boolean;
            force_looping?: boolean;
        } & {
            activity?: string;
            disable_auto_kill?: boolean;
            force_looping?: boolean;
        } & { [K_3 in Exclude<keyof I_1["activities"][number], keyof VersusScene_PlayActivity_ActivityInfo>]: never; })[] & { [K_4 in Exclude<keyof I_1["activities"], keyof {
            activity?: string;
            disable_auto_kill?: boolean;
            force_looping?: boolean;
        }[]>]: never; };
        playback_rate?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof VersusScene_PlayActivity>]: never; }>(object: I_1): VersusScene_PlayActivity;
};
export declare const VersusScene_PlayActivity_ActivityInfo: {
    fromJSON(object: any): VersusScene_PlayActivity_ActivityInfo;
    toJSON(message: VersusScene_PlayActivity_ActivityInfo): unknown;
    create<I extends {
        activity?: string;
        disable_auto_kill?: boolean;
        force_looping?: boolean;
    } & {
        activity?: string;
        disable_auto_kill?: boolean;
        force_looping?: boolean;
    } & { [K in Exclude<keyof I, keyof VersusScene_PlayActivity_ActivityInfo>]: never; }>(base?: I): VersusScene_PlayActivity_ActivityInfo;
    fromPartial<I_1 extends {
        activity?: string;
        disable_auto_kill?: boolean;
        force_looping?: boolean;
    } & {
        activity?: string;
        disable_auto_kill?: boolean;
        force_looping?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof VersusScene_PlayActivity_ActivityInfo>]: never; }>(object: I_1): VersusScene_PlayActivity_ActivityInfo;
};
export declare const VersusScene_ChatWheel: {
    fromJSON(object: any): VersusScene_ChatWheel;
    toJSON(message: VersusScene_ChatWheel): unknown;
    create<I extends {
        chat_message_id?: number;
        emoticon_id?: number;
    } & {
        chat_message_id?: number;
        emoticon_id?: number;
    } & { [K in Exclude<keyof I, keyof VersusScene_ChatWheel>]: never; }>(base?: I): VersusScene_ChatWheel;
    fromPartial<I_1 extends {
        chat_message_id?: number;
        emoticon_id?: number;
    } & {
        chat_message_id?: number;
        emoticon_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof VersusScene_ChatWheel>]: never; }>(object: I_1): VersusScene_ChatWheel;
};
export declare const VersusScene_PlaybackRate: {
    fromJSON(object: any): VersusScene_PlaybackRate;
    toJSON(message: VersusScene_PlaybackRate): unknown;
    create<I extends {
        rate?: number;
    } & {
        rate?: number;
    } & { [K in Exclude<keyof I, "rate">]: never; }>(base?: I): VersusScene_PlaybackRate;
    fromPartial<I_1 extends {
        rate?: number;
    } & {
        rate?: number;
    } & { [K_1 in Exclude<keyof I_1, "rate">]: never; }>(object: I_1): VersusScene_PlaybackRate;
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
