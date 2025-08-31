import { CMsgVector } from "./networkbasetypes";
export declare const protobufPackage = "";
export declare enum EBaseGameEvents {
    GE_VDebugGameSessionIDEvent = 200,
    GE_PlaceDecalEvent = 201,
    GE_ClearWorldDecalsEvent = 202,
    GE_ClearEntityDecalsEvent = 203,
    GE_ClearDecalsForSkeletonInstanceEvent = 204,
    GE_Source1LegacyGameEventList = 205,
    GE_Source1LegacyListenEvents = 206,
    GE_Source1LegacyGameEvent = 207,
    GE_SosStartSoundEvent = 208,
    GE_SosStopSoundEvent = 209,
    GE_SosSetSoundEventParams = 210,
    GE_SosSetLibraryStackFields = 211,
    GE_SosStopSoundEventHash = 212,
    UNRECOGNIZED = -1
}
export declare function eBaseGameEventsFromJSON(object: any): EBaseGameEvents;
export declare function eBaseGameEventsToJSON(object: EBaseGameEvents): string;
export interface CMsgVDebugGameSessionIDEvent {
    clientid: number;
    gamesessionid: string;
}
export interface CMsgPlaceDecalEvent {
    position: CMsgVector | undefined;
    normal: CMsgVector | undefined;
    saxis: CMsgVector | undefined;
    decalmaterialindex: number;
    flags: number;
    color: number;
    width: number;
    height: number;
    depth: number;
    entityhandleindex: number;
    skeletoninstancehash: number;
    boneindex: number;
    translucenthit: boolean;
    is_adjacent: boolean;
}
export interface CMsgClearWorldDecalsEvent {
    flagstoclear: number;
}
export interface CMsgClearEntityDecalsEvent {
    flagstoclear: number;
}
export interface CMsgClearDecalsForSkeletonInstanceEvent {
    flagstoclear: number;
    entityhandleindex: number;
    skeletoninstancehash: number;
}
export interface CMsgSource1LegacyGameEventList {
    descriptors: CMsgSource1LegacyGameEventList_descriptor_t[];
}
export interface CMsgSource1LegacyGameEventList_key_t {
    type: number;
    name: string;
}
export interface CMsgSource1LegacyGameEventList_descriptor_t {
    eventid: number;
    name: string;
    keys: CMsgSource1LegacyGameEventList_key_t[];
}
export interface CMsgSource1LegacyListenEvents {
    playerslot: number;
    eventarraybits: number[];
}
export interface CMsgSource1LegacyGameEvent {
    event_name: string;
    eventid: number;
    keys: CMsgSource1LegacyGameEvent_key_t[];
    server_tick: number;
    passthrough: number;
}
export interface CMsgSource1LegacyGameEvent_key_t {
    type: number;
    val_string: string;
    val_float: number;
    val_long: number;
    val_short: number;
    val_byte: number;
    val_bool: boolean;
    val_uint64: string;
}
export interface CMsgSosStartSoundEvent {
    soundevent_guid: number;
    soundevent_hash: number;
    source_entity_index: number;
    seed: number;
    packed_params: string;
    start_time: number;
}
export interface CMsgSosStopSoundEvent {
    soundevent_guid: number;
}
export interface CMsgSosStopSoundEventHash {
    soundevent_hash: number;
    source_entity_index: number;
}
export interface CMsgSosSetSoundEventParams {
    soundevent_guid: number;
    packed_params: string;
}
export interface CMsgSosSetLibraryStackFields {
    stack_hash: number;
    packed_fields: string;
}
export declare const CMsgVDebugGameSessionIDEvent: {
    fromJSON(object: any): CMsgVDebugGameSessionIDEvent;
    toJSON(message: CMsgVDebugGameSessionIDEvent): unknown;
    create<I extends {
        clientid?: number;
        gamesessionid?: string;
    } & {
        clientid?: number;
        gamesessionid?: string;
    } & { [K in Exclude<keyof I, keyof CMsgVDebugGameSessionIDEvent>]: never; }>(base?: I): CMsgVDebugGameSessionIDEvent;
    fromPartial<I_1 extends {
        clientid?: number;
        gamesessionid?: string;
    } & {
        clientid?: number;
        gamesessionid?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgVDebugGameSessionIDEvent>]: never; }>(object: I_1): CMsgVDebugGameSessionIDEvent;
};
export declare const CMsgPlaceDecalEvent: {
    fromJSON(object: any): CMsgPlaceDecalEvent;
    toJSON(message: CMsgPlaceDecalEvent): unknown;
    create<I extends {
        position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        normal?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        saxis?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        decalmaterialindex?: number;
        flags?: number;
        color?: number;
        width?: number;
        height?: number;
        depth?: number;
        entityhandleindex?: number;
        skeletoninstancehash?: number;
        boneindex?: number;
        translucenthit?: boolean;
        is_adjacent?: boolean;
    } & {
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
        } & { [K in Exclude<keyof I["position"], keyof CMsgVector>]: never; };
        normal?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_1 in Exclude<keyof I["normal"], keyof CMsgVector>]: never; };
        saxis?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_2 in Exclude<keyof I["saxis"], keyof CMsgVector>]: never; };
        decalmaterialindex?: number;
        flags?: number;
        color?: number;
        width?: number;
        height?: number;
        depth?: number;
        entityhandleindex?: number;
        skeletoninstancehash?: number;
        boneindex?: number;
        translucenthit?: boolean;
        is_adjacent?: boolean;
    } & { [K_3 in Exclude<keyof I, keyof CMsgPlaceDecalEvent>]: never; }>(base?: I): CMsgPlaceDecalEvent;
    fromPartial<I_1 extends {
        position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        normal?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        saxis?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        decalmaterialindex?: number;
        flags?: number;
        color?: number;
        width?: number;
        height?: number;
        depth?: number;
        entityhandleindex?: number;
        skeletoninstancehash?: number;
        boneindex?: number;
        translucenthit?: boolean;
        is_adjacent?: boolean;
    } & {
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
        normal?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_5 in Exclude<keyof I_1["normal"], keyof CMsgVector>]: never; };
        saxis?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_6 in Exclude<keyof I_1["saxis"], keyof CMsgVector>]: never; };
        decalmaterialindex?: number;
        flags?: number;
        color?: number;
        width?: number;
        height?: number;
        depth?: number;
        entityhandleindex?: number;
        skeletoninstancehash?: number;
        boneindex?: number;
        translucenthit?: boolean;
        is_adjacent?: boolean;
    } & { [K_7 in Exclude<keyof I_1, keyof CMsgPlaceDecalEvent>]: never; }>(object: I_1): CMsgPlaceDecalEvent;
};
export declare const CMsgClearWorldDecalsEvent: {
    fromJSON(object: any): CMsgClearWorldDecalsEvent;
    toJSON(message: CMsgClearWorldDecalsEvent): unknown;
    create<I extends {
        flagstoclear?: number;
    } & {
        flagstoclear?: number;
    } & { [K in Exclude<keyof I, "flagstoclear">]: never; }>(base?: I): CMsgClearWorldDecalsEvent;
    fromPartial<I_1 extends {
        flagstoclear?: number;
    } & {
        flagstoclear?: number;
    } & { [K_1 in Exclude<keyof I_1, "flagstoclear">]: never; }>(object: I_1): CMsgClearWorldDecalsEvent;
};
export declare const CMsgClearEntityDecalsEvent: {
    fromJSON(object: any): CMsgClearEntityDecalsEvent;
    toJSON(message: CMsgClearEntityDecalsEvent): unknown;
    create<I extends {
        flagstoclear?: number;
    } & {
        flagstoclear?: number;
    } & { [K in Exclude<keyof I, "flagstoclear">]: never; }>(base?: I): CMsgClearEntityDecalsEvent;
    fromPartial<I_1 extends {
        flagstoclear?: number;
    } & {
        flagstoclear?: number;
    } & { [K_1 in Exclude<keyof I_1, "flagstoclear">]: never; }>(object: I_1): CMsgClearEntityDecalsEvent;
};
export declare const CMsgClearDecalsForSkeletonInstanceEvent: {
    fromJSON(object: any): CMsgClearDecalsForSkeletonInstanceEvent;
    toJSON(message: CMsgClearDecalsForSkeletonInstanceEvent): unknown;
    create<I extends {
        flagstoclear?: number;
        entityhandleindex?: number;
        skeletoninstancehash?: number;
    } & {
        flagstoclear?: number;
        entityhandleindex?: number;
        skeletoninstancehash?: number;
    } & { [K in Exclude<keyof I, keyof CMsgClearDecalsForSkeletonInstanceEvent>]: never; }>(base?: I): CMsgClearDecalsForSkeletonInstanceEvent;
    fromPartial<I_1 extends {
        flagstoclear?: number;
        entityhandleindex?: number;
        skeletoninstancehash?: number;
    } & {
        flagstoclear?: number;
        entityhandleindex?: number;
        skeletoninstancehash?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClearDecalsForSkeletonInstanceEvent>]: never; }>(object: I_1): CMsgClearDecalsForSkeletonInstanceEvent;
};
export declare const CMsgSource1LegacyGameEventList: {
    fromJSON(object: any): CMsgSource1LegacyGameEventList;
    toJSON(message: CMsgSource1LegacyGameEventList): unknown;
    create<I extends {
        descriptors?: {
            eventid?: number;
            name?: string;
            keys?: {
                type?: number;
                name?: string;
            }[];
        }[];
    } & {
        descriptors?: {
            eventid?: number;
            name?: string;
            keys?: {
                type?: number;
                name?: string;
            }[];
        }[] & ({
            eventid?: number;
            name?: string;
            keys?: {
                type?: number;
                name?: string;
            }[];
        } & {
            eventid?: number;
            name?: string;
            keys?: {
                type?: number;
                name?: string;
            }[] & ({
                type?: number;
                name?: string;
            } & {
                type?: number;
                name?: string;
            } & { [K in Exclude<keyof I["descriptors"][number]["keys"][number], keyof CMsgSource1LegacyGameEventList_key_t>]: never; })[] & { [K_1 in Exclude<keyof I["descriptors"][number]["keys"], keyof {
                type?: number;
                name?: string;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["descriptors"][number], keyof CMsgSource1LegacyGameEventList_descriptor_t>]: never; })[] & { [K_3 in Exclude<keyof I["descriptors"], keyof {
            eventid?: number;
            name?: string;
            keys?: {
                type?: number;
                name?: string;
            }[];
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, "descriptors">]: never; }>(base?: I): CMsgSource1LegacyGameEventList;
    fromPartial<I_1 extends {
        descriptors?: {
            eventid?: number;
            name?: string;
            keys?: {
                type?: number;
                name?: string;
            }[];
        }[];
    } & {
        descriptors?: {
            eventid?: number;
            name?: string;
            keys?: {
                type?: number;
                name?: string;
            }[];
        }[] & ({
            eventid?: number;
            name?: string;
            keys?: {
                type?: number;
                name?: string;
            }[];
        } & {
            eventid?: number;
            name?: string;
            keys?: {
                type?: number;
                name?: string;
            }[] & ({
                type?: number;
                name?: string;
            } & {
                type?: number;
                name?: string;
            } & { [K_5 in Exclude<keyof I_1["descriptors"][number]["keys"][number], keyof CMsgSource1LegacyGameEventList_key_t>]: never; })[] & { [K_6 in Exclude<keyof I_1["descriptors"][number]["keys"], keyof {
                type?: number;
                name?: string;
            }[]>]: never; };
        } & { [K_7 in Exclude<keyof I_1["descriptors"][number], keyof CMsgSource1LegacyGameEventList_descriptor_t>]: never; })[] & { [K_8 in Exclude<keyof I_1["descriptors"], keyof {
            eventid?: number;
            name?: string;
            keys?: {
                type?: number;
                name?: string;
            }[];
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "descriptors">]: never; }>(object: I_1): CMsgSource1LegacyGameEventList;
};
export declare const CMsgSource1LegacyGameEventList_key_t: {
    fromJSON(object: any): CMsgSource1LegacyGameEventList_key_t;
    toJSON(message: CMsgSource1LegacyGameEventList_key_t): unknown;
    create<I extends {
        type?: number;
        name?: string;
    } & {
        type?: number;
        name?: string;
    } & { [K in Exclude<keyof I, keyof CMsgSource1LegacyGameEventList_key_t>]: never; }>(base?: I): CMsgSource1LegacyGameEventList_key_t;
    fromPartial<I_1 extends {
        type?: number;
        name?: string;
    } & {
        type?: number;
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgSource1LegacyGameEventList_key_t>]: never; }>(object: I_1): CMsgSource1LegacyGameEventList_key_t;
};
export declare const CMsgSource1LegacyGameEventList_descriptor_t: {
    fromJSON(object: any): CMsgSource1LegacyGameEventList_descriptor_t;
    toJSON(message: CMsgSource1LegacyGameEventList_descriptor_t): unknown;
    create<I extends {
        eventid?: number;
        name?: string;
        keys?: {
            type?: number;
            name?: string;
        }[];
    } & {
        eventid?: number;
        name?: string;
        keys?: {
            type?: number;
            name?: string;
        }[] & ({
            type?: number;
            name?: string;
        } & {
            type?: number;
            name?: string;
        } & { [K in Exclude<keyof I["keys"][number], keyof CMsgSource1LegacyGameEventList_key_t>]: never; })[] & { [K_1 in Exclude<keyof I["keys"], keyof {
            type?: number;
            name?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgSource1LegacyGameEventList_descriptor_t>]: never; }>(base?: I): CMsgSource1LegacyGameEventList_descriptor_t;
    fromPartial<I_1 extends {
        eventid?: number;
        name?: string;
        keys?: {
            type?: number;
            name?: string;
        }[];
    } & {
        eventid?: number;
        name?: string;
        keys?: {
            type?: number;
            name?: string;
        }[] & ({
            type?: number;
            name?: string;
        } & {
            type?: number;
            name?: string;
        } & { [K_3 in Exclude<keyof I_1["keys"][number], keyof CMsgSource1LegacyGameEventList_key_t>]: never; })[] & { [K_4 in Exclude<keyof I_1["keys"], keyof {
            type?: number;
            name?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgSource1LegacyGameEventList_descriptor_t>]: never; }>(object: I_1): CMsgSource1LegacyGameEventList_descriptor_t;
};
export declare const CMsgSource1LegacyListenEvents: {
    fromJSON(object: any): CMsgSource1LegacyListenEvents;
    toJSON(message: CMsgSource1LegacyListenEvents): unknown;
    create<I extends {
        playerslot?: number;
        eventarraybits?: number[];
    } & {
        playerslot?: number;
        eventarraybits?: number[] & number[] & { [K in Exclude<keyof I["eventarraybits"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CMsgSource1LegacyListenEvents>]: never; }>(base?: I): CMsgSource1LegacyListenEvents;
    fromPartial<I_1 extends {
        playerslot?: number;
        eventarraybits?: number[];
    } & {
        playerslot?: number;
        eventarraybits?: number[] & number[] & { [K_2 in Exclude<keyof I_1["eventarraybits"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgSource1LegacyListenEvents>]: never; }>(object: I_1): CMsgSource1LegacyListenEvents;
};
export declare const CMsgSource1LegacyGameEvent: {
    fromJSON(object: any): CMsgSource1LegacyGameEvent;
    toJSON(message: CMsgSource1LegacyGameEvent): unknown;
    create<I extends {
        event_name?: string;
        eventid?: number;
        keys?: {
            type?: number;
            val_string?: string;
            val_float?: number;
            val_long?: number;
            val_short?: number;
            val_byte?: number;
            val_bool?: boolean;
            val_uint64?: string;
        }[];
        server_tick?: number;
        passthrough?: number;
    } & {
        event_name?: string;
        eventid?: number;
        keys?: {
            type?: number;
            val_string?: string;
            val_float?: number;
            val_long?: number;
            val_short?: number;
            val_byte?: number;
            val_bool?: boolean;
            val_uint64?: string;
        }[] & ({
            type?: number;
            val_string?: string;
            val_float?: number;
            val_long?: number;
            val_short?: number;
            val_byte?: number;
            val_bool?: boolean;
            val_uint64?: string;
        } & {
            type?: number;
            val_string?: string;
            val_float?: number;
            val_long?: number;
            val_short?: number;
            val_byte?: number;
            val_bool?: boolean;
            val_uint64?: string;
        } & { [K in Exclude<keyof I["keys"][number], keyof CMsgSource1LegacyGameEvent_key_t>]: never; })[] & { [K_1 in Exclude<keyof I["keys"], keyof {
            type?: number;
            val_string?: string;
            val_float?: number;
            val_long?: number;
            val_short?: number;
            val_byte?: number;
            val_bool?: boolean;
            val_uint64?: string;
        }[]>]: never; };
        server_tick?: number;
        passthrough?: number;
    } & { [K_2 in Exclude<keyof I, keyof CMsgSource1LegacyGameEvent>]: never; }>(base?: I): CMsgSource1LegacyGameEvent;
    fromPartial<I_1 extends {
        event_name?: string;
        eventid?: number;
        keys?: {
            type?: number;
            val_string?: string;
            val_float?: number;
            val_long?: number;
            val_short?: number;
            val_byte?: number;
            val_bool?: boolean;
            val_uint64?: string;
        }[];
        server_tick?: number;
        passthrough?: number;
    } & {
        event_name?: string;
        eventid?: number;
        keys?: {
            type?: number;
            val_string?: string;
            val_float?: number;
            val_long?: number;
            val_short?: number;
            val_byte?: number;
            val_bool?: boolean;
            val_uint64?: string;
        }[] & ({
            type?: number;
            val_string?: string;
            val_float?: number;
            val_long?: number;
            val_short?: number;
            val_byte?: number;
            val_bool?: boolean;
            val_uint64?: string;
        } & {
            type?: number;
            val_string?: string;
            val_float?: number;
            val_long?: number;
            val_short?: number;
            val_byte?: number;
            val_bool?: boolean;
            val_uint64?: string;
        } & { [K_3 in Exclude<keyof I_1["keys"][number], keyof CMsgSource1LegacyGameEvent_key_t>]: never; })[] & { [K_4 in Exclude<keyof I_1["keys"], keyof {
            type?: number;
            val_string?: string;
            val_float?: number;
            val_long?: number;
            val_short?: number;
            val_byte?: number;
            val_bool?: boolean;
            val_uint64?: string;
        }[]>]: never; };
        server_tick?: number;
        passthrough?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgSource1LegacyGameEvent>]: never; }>(object: I_1): CMsgSource1LegacyGameEvent;
};
export declare const CMsgSource1LegacyGameEvent_key_t: {
    fromJSON(object: any): CMsgSource1LegacyGameEvent_key_t;
    toJSON(message: CMsgSource1LegacyGameEvent_key_t): unknown;
    create<I extends {
        type?: number;
        val_string?: string;
        val_float?: number;
        val_long?: number;
        val_short?: number;
        val_byte?: number;
        val_bool?: boolean;
        val_uint64?: string;
    } & {
        type?: number;
        val_string?: string;
        val_float?: number;
        val_long?: number;
        val_short?: number;
        val_byte?: number;
        val_bool?: boolean;
        val_uint64?: string;
    } & { [K in Exclude<keyof I, keyof CMsgSource1LegacyGameEvent_key_t>]: never; }>(base?: I): CMsgSource1LegacyGameEvent_key_t;
    fromPartial<I_1 extends {
        type?: number;
        val_string?: string;
        val_float?: number;
        val_long?: number;
        val_short?: number;
        val_byte?: number;
        val_bool?: boolean;
        val_uint64?: string;
    } & {
        type?: number;
        val_string?: string;
        val_float?: number;
        val_long?: number;
        val_short?: number;
        val_byte?: number;
        val_bool?: boolean;
        val_uint64?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgSource1LegacyGameEvent_key_t>]: never; }>(object: I_1): CMsgSource1LegacyGameEvent_key_t;
};
export declare const CMsgSosStartSoundEvent: {
    fromJSON(object: any): CMsgSosStartSoundEvent;
    toJSON(message: CMsgSosStartSoundEvent): unknown;
    create<I extends {
        soundevent_guid?: number;
        soundevent_hash?: number;
        source_entity_index?: number;
        seed?: number;
        packed_params?: string;
        start_time?: number;
    } & {
        soundevent_guid?: number;
        soundevent_hash?: number;
        source_entity_index?: number;
        seed?: number;
        packed_params?: string;
        start_time?: number;
    } & { [K in Exclude<keyof I, keyof CMsgSosStartSoundEvent>]: never; }>(base?: I): CMsgSosStartSoundEvent;
    fromPartial<I_1 extends {
        soundevent_guid?: number;
        soundevent_hash?: number;
        source_entity_index?: number;
        seed?: number;
        packed_params?: string;
        start_time?: number;
    } & {
        soundevent_guid?: number;
        soundevent_hash?: number;
        source_entity_index?: number;
        seed?: number;
        packed_params?: string;
        start_time?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgSosStartSoundEvent>]: never; }>(object: I_1): CMsgSosStartSoundEvent;
};
export declare const CMsgSosStopSoundEvent: {
    fromJSON(object: any): CMsgSosStopSoundEvent;
    toJSON(message: CMsgSosStopSoundEvent): unknown;
    create<I extends {
        soundevent_guid?: number;
    } & {
        soundevent_guid?: number;
    } & { [K in Exclude<keyof I, "soundevent_guid">]: never; }>(base?: I): CMsgSosStopSoundEvent;
    fromPartial<I_1 extends {
        soundevent_guid?: number;
    } & {
        soundevent_guid?: number;
    } & { [K_1 in Exclude<keyof I_1, "soundevent_guid">]: never; }>(object: I_1): CMsgSosStopSoundEvent;
};
export declare const CMsgSosStopSoundEventHash: {
    fromJSON(object: any): CMsgSosStopSoundEventHash;
    toJSON(message: CMsgSosStopSoundEventHash): unknown;
    create<I extends {
        soundevent_hash?: number;
        source_entity_index?: number;
    } & {
        soundevent_hash?: number;
        source_entity_index?: number;
    } & { [K in Exclude<keyof I, keyof CMsgSosStopSoundEventHash>]: never; }>(base?: I): CMsgSosStopSoundEventHash;
    fromPartial<I_1 extends {
        soundevent_hash?: number;
        source_entity_index?: number;
    } & {
        soundevent_hash?: number;
        source_entity_index?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgSosStopSoundEventHash>]: never; }>(object: I_1): CMsgSosStopSoundEventHash;
};
export declare const CMsgSosSetSoundEventParams: {
    fromJSON(object: any): CMsgSosSetSoundEventParams;
    toJSON(message: CMsgSosSetSoundEventParams): unknown;
    create<I extends {
        soundevent_guid?: number;
        packed_params?: string;
    } & {
        soundevent_guid?: number;
        packed_params?: string;
    } & { [K in Exclude<keyof I, keyof CMsgSosSetSoundEventParams>]: never; }>(base?: I): CMsgSosSetSoundEventParams;
    fromPartial<I_1 extends {
        soundevent_guid?: number;
        packed_params?: string;
    } & {
        soundevent_guid?: number;
        packed_params?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgSosSetSoundEventParams>]: never; }>(object: I_1): CMsgSosSetSoundEventParams;
};
export declare const CMsgSosSetLibraryStackFields: {
    fromJSON(object: any): CMsgSosSetLibraryStackFields;
    toJSON(message: CMsgSosSetLibraryStackFields): unknown;
    create<I extends {
        stack_hash?: number;
        packed_fields?: string;
    } & {
        stack_hash?: number;
        packed_fields?: string;
    } & { [K in Exclude<keyof I, keyof CMsgSosSetLibraryStackFields>]: never; }>(base?: I): CMsgSosSetLibraryStackFields;
    fromPartial<I_1 extends {
        stack_hash?: number;
        packed_fields?: string;
    } & {
        stack_hash?: number;
        packed_fields?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgSosSetLibraryStackFields>]: never; }>(object: I_1): CMsgSosSetLibraryStackFields;
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
