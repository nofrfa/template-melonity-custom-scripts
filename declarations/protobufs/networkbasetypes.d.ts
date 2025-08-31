import { ENetworkDisconnectionReason } from "./network_connection";
export declare const protobufPackage = "";
export declare enum SignonState_t {
    SIGNONSTATE_NONE = 0,
    SIGNONSTATE_CHALLENGE = 1,
    SIGNONSTATE_CONNECTED = 2,
    SIGNONSTATE_NEW = 3,
    SIGNONSTATE_PRESPAWN = 4,
    SIGNONSTATE_SPAWN = 5,
    SIGNONSTATE_FULL = 6,
    SIGNONSTATE_CHANGELEVEL = 7,
    UNRECOGNIZED = -1
}
export declare function signonState_tFromJSON(object: any): SignonState_t;
export declare function signonState_tToJSON(object: SignonState_t): string;
export declare enum NET_Messages {
    net_NOP = 0,
    net_Disconnect = 1,
    net_SplitScreenUser = 3,
    net_Tick = 4,
    net_StringCmd = 5,
    net_SetConVar = 6,
    net_SignonState = 7,
    net_SpawnGroup_Load = 8,
    net_SpawnGroup_ManifestUpdate = 9,
    net_SpawnGroup_SetCreationTick = 11,
    net_SpawnGroup_Unload = 12,
    net_SpawnGroup_LoadCompleted = 13,
    net_DebugOverlay = 15,
    UNRECOGNIZED = -1
}
export declare function nET_MessagesFromJSON(object: any): NET_Messages;
export declare function nET_MessagesToJSON(object: NET_Messages): string;
export declare enum SpawnGroupFlags_t {
    SPAWN_GROUP_LOAD_ENTITIES_FROM_SAVE = 1,
    SPAWN_GROUP_DONT_SPAWN_ENTITIES = 2,
    SPAWN_GROUP_SYNCHRONOUS_SPAWN = 4,
    SPAWN_GROUP_IS_INITIAL_SPAWN_GROUP = 8,
    SPAWN_GROUP_CREATE_CLIENT_ONLY_ENTITIES = 16,
    SPAWN_GROUP_BLOCK_UNTIL_LOADED = 64,
    SPAWN_GROUP_LOAD_STREAMING_DATA = 128,
    SPAWN_GROUP_CREATE_NEW_SCENE_WORLD = 256,
    UNRECOGNIZED = -1
}
export declare function spawnGroupFlags_tFromJSON(object: any): SpawnGroupFlags_t;
export declare function spawnGroupFlags_tToJSON(object: SpawnGroupFlags_t): string;
export interface CMsgVector {
    x: number;
    y: number;
    z: number;
    w: number;
}
export interface CMsgVector2D {
    x: number;
    y: number;
}
export interface CMsgQAngle {
    x: number;
    y: number;
    z: number;
}
export interface CMsgQuaternion {
    x: number;
    y: number;
    z: number;
    w: number;
}
export interface CMsgTransform {
    position: CMsgVector | undefined;
    scale: number;
    orientation: CMsgQuaternion | undefined;
}
export interface CMsgRGBA {
    r: number;
    g: number;
    b: number;
    a: number;
}
export interface CMsgPlayerInfo {
    name: string;
    xuid: string;
    userid: number;
    steamid: string;
    fakeplayer: boolean;
    ishltv: boolean;
}
export interface CEntityMsg {
    target_entity: number;
}
export interface CMsg_CVars {
    cvars: CMsg_CVars_CVar[];
}
export interface CMsg_CVars_CVar {
    name: string;
    value: string;
}
export interface CNETMsg_NOP {
}
export interface CNETMsg_SplitScreenUser {
    slot: number;
}
export interface CNETMsg_Disconnect {
    reason: ENetworkDisconnectionReason;
}
export interface CNETMsg_Tick {
    tick: number;
    host_frametime: number;
    host_frametime_std_deviation: number;
    host_computationtime: number;
    host_computationtime_std_deviation: number;
    host_framestarttime_std_deviation: number;
    host_loss: number;
    host_unfiltered_frametime: number;
    hltv_replay_flags: number;
}
export interface CNETMsg_StringCmd {
    command: string;
}
export interface CNETMsg_SetConVar {
    convars: CMsg_CVars | undefined;
}
export interface CNETMsg_SignonState {
    signon_state: SignonState_t;
    spawn_count: number;
    num_server_players: number;
    players_networkids: string[];
    map_name: string;
    addons: string;
}
export interface CSVCMsg_GameEvent {
    event_name: string;
    eventid: number;
    keys: CSVCMsg_GameEvent_key_t[];
}
export interface CSVCMsg_GameEvent_key_t {
    type: number;
    val_string: string;
    val_float: number;
    val_long: number;
    val_short: number;
    val_byte: number;
    val_bool: boolean;
    val_uint64: string;
}
export interface CSVCMsgList_GameEvents {
    events: CSVCMsgList_GameEvents_event_t[];
}
export interface CSVCMsgList_GameEvents_event_t {
    tick: number;
    event: CSVCMsg_GameEvent | undefined;
}
export interface CNETMsg_SpawnGroup_Load {
    worldname: string;
    entitylumpname: string;
    entityfiltername: string;
    spawngrouphandle: number;
    spawngroupownerhandle: number;
    world_offset_pos: CMsgVector | undefined;
    world_offset_angle: CMsgQAngle | undefined;
    spawngroupmanifest: string;
    flags: number;
    tickcount: number;
    manifestincomplete: boolean;
    localnamefixup: string;
    parentnamefixup: string;
    manifestloadpriority: number;
    worldgroupid: number;
    creationsequence: number;
    savegamefilename: string;
    spawngroupparenthandle: number;
    leveltransition: boolean;
    worldgroupname: string;
}
export interface CNETMsg_SpawnGroup_ManifestUpdate {
    spawngrouphandle: number;
    spawngroupmanifest: string;
    manifestincomplete: boolean;
}
export interface CNETMsg_SpawnGroup_SetCreationTick {
    spawngrouphandle: number;
    tickcount: number;
    creationsequence: number;
}
export interface CNETMsg_SpawnGroup_Unload {
    spawngrouphandle: number;
    flags: number;
    tickcount: number;
}
export interface CNETMsg_SpawnGroup_LoadCompleted {
    spawngrouphandle: number;
}
export interface CSVCMsg_GameSessionConfiguration {
    is_multiplayer: boolean;
    is_loadsavegame: boolean;
    is_background_map: boolean;
    is_headless: boolean;
    min_client_limit: number;
    max_client_limit: number;
    max_clients: number;
    tick_interval: number;
    hostname: string;
    savegamename: string;
    s1_mapname: string;
    gamemode: string;
    server_ip_address: string;
    data: string;
    is_localonly: boolean;
    no_steam_server: boolean;
    is_transition: boolean;
    previouslevel: string;
    landmarkname: string;
}
export interface CNETMsg_DebugOverlay {
    etype: number;
    vectors: CMsgVector[];
    colors: CMsgRGBA[];
    dimensions: number[];
    times: number[];
    bools: boolean[];
    uint64s: string[];
}
export declare const CMsgVector: {
    fromJSON(object: any): CMsgVector;
    toJSON(message: CMsgVector): unknown;
    create<I extends {
        x?: number;
        y?: number;
        z?: number;
        w?: number;
    } & {
        x?: number;
        y?: number;
        z?: number;
        w?: number;
    } & { [K in Exclude<keyof I, keyof CMsgVector>]: never; }>(base?: I): CMsgVector;
    fromPartial<I_1 extends {
        x?: number;
        y?: number;
        z?: number;
        w?: number;
    } & {
        x?: number;
        y?: number;
        z?: number;
        w?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgVector>]: never; }>(object: I_1): CMsgVector;
};
export declare const CMsgVector2D: {
    fromJSON(object: any): CMsgVector2D;
    toJSON(message: CMsgVector2D): unknown;
    create<I extends {
        x?: number;
        y?: number;
    } & {
        x?: number;
        y?: number;
    } & { [K in Exclude<keyof I, keyof CMsgVector2D>]: never; }>(base?: I): CMsgVector2D;
    fromPartial<I_1 extends {
        x?: number;
        y?: number;
    } & {
        x?: number;
        y?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgVector2D>]: never; }>(object: I_1): CMsgVector2D;
};
export declare const CMsgQAngle: {
    fromJSON(object: any): CMsgQAngle;
    toJSON(message: CMsgQAngle): unknown;
    create<I extends {
        x?: number;
        y?: number;
        z?: number;
    } & {
        x?: number;
        y?: number;
        z?: number;
    } & { [K in Exclude<keyof I, keyof CMsgQAngle>]: never; }>(base?: I): CMsgQAngle;
    fromPartial<I_1 extends {
        x?: number;
        y?: number;
        z?: number;
    } & {
        x?: number;
        y?: number;
        z?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgQAngle>]: never; }>(object: I_1): CMsgQAngle;
};
export declare const CMsgQuaternion: {
    fromJSON(object: any): CMsgQuaternion;
    toJSON(message: CMsgQuaternion): unknown;
    create<I extends {
        x?: number;
        y?: number;
        z?: number;
        w?: number;
    } & {
        x?: number;
        y?: number;
        z?: number;
        w?: number;
    } & { [K in Exclude<keyof I, keyof CMsgQuaternion>]: never; }>(base?: I): CMsgQuaternion;
    fromPartial<I_1 extends {
        x?: number;
        y?: number;
        z?: number;
        w?: number;
    } & {
        x?: number;
        y?: number;
        z?: number;
        w?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgQuaternion>]: never; }>(object: I_1): CMsgQuaternion;
};
export declare const CMsgTransform: {
    fromJSON(object: any): CMsgTransform;
    toJSON(message: CMsgTransform): unknown;
    create<I extends {
        position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        scale?: number;
        orientation?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
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
        scale?: number;
        orientation?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_1 in Exclude<keyof I["orientation"], keyof CMsgQuaternion>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgTransform>]: never; }>(base?: I): CMsgTransform;
    fromPartial<I_1 extends {
        position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        scale?: number;
        orientation?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
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
        } & { [K_3 in Exclude<keyof I_1["position"], keyof CMsgVector>]: never; };
        scale?: number;
        orientation?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_4 in Exclude<keyof I_1["orientation"], keyof CMsgQuaternion>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgTransform>]: never; }>(object: I_1): CMsgTransform;
};
export declare const CMsgRGBA: {
    fromJSON(object: any): CMsgRGBA;
    toJSON(message: CMsgRGBA): unknown;
    create<I extends {
        r?: number;
        g?: number;
        b?: number;
        a?: number;
    } & {
        r?: number;
        g?: number;
        b?: number;
        a?: number;
    } & { [K in Exclude<keyof I, keyof CMsgRGBA>]: never; }>(base?: I): CMsgRGBA;
    fromPartial<I_1 extends {
        r?: number;
        g?: number;
        b?: number;
        a?: number;
    } & {
        r?: number;
        g?: number;
        b?: number;
        a?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgRGBA>]: never; }>(object: I_1): CMsgRGBA;
};
export declare const CMsgPlayerInfo: {
    fromJSON(object: any): CMsgPlayerInfo;
    toJSON(message: CMsgPlayerInfo): unknown;
    create<I extends {
        name?: string;
        xuid?: string;
        userid?: number;
        steamid?: string;
        fakeplayer?: boolean;
        ishltv?: boolean;
    } & {
        name?: string;
        xuid?: string;
        userid?: number;
        steamid?: string;
        fakeplayer?: boolean;
        ishltv?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgPlayerInfo>]: never; }>(base?: I): CMsgPlayerInfo;
    fromPartial<I_1 extends {
        name?: string;
        xuid?: string;
        userid?: number;
        steamid?: string;
        fakeplayer?: boolean;
        ishltv?: boolean;
    } & {
        name?: string;
        xuid?: string;
        userid?: number;
        steamid?: string;
        fakeplayer?: boolean;
        ishltv?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgPlayerInfo>]: never; }>(object: I_1): CMsgPlayerInfo;
};
export declare const CEntityMsg: {
    fromJSON(object: any): CEntityMsg;
    toJSON(message: CEntityMsg): unknown;
    create<I extends {
        target_entity?: number;
    } & {
        target_entity?: number;
    } & { [K in Exclude<keyof I, "target_entity">]: never; }>(base?: I): CEntityMsg;
    fromPartial<I_1 extends {
        target_entity?: number;
    } & {
        target_entity?: number;
    } & { [K_1 in Exclude<keyof I_1, "target_entity">]: never; }>(object: I_1): CEntityMsg;
};
export declare const CMsg_CVars: {
    fromJSON(object: any): CMsg_CVars;
    toJSON(message: CMsg_CVars): unknown;
    create<I extends {
        cvars?: {
            name?: string;
            value?: string;
        }[];
    } & {
        cvars?: {
            name?: string;
            value?: string;
        }[] & ({
            name?: string;
            value?: string;
        } & {
            name?: string;
            value?: string;
        } & { [K in Exclude<keyof I["cvars"][number], keyof CMsg_CVars_CVar>]: never; })[] & { [K_1 in Exclude<keyof I["cvars"], keyof {
            name?: string;
            value?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "cvars">]: never; }>(base?: I): CMsg_CVars;
    fromPartial<I_1 extends {
        cvars?: {
            name?: string;
            value?: string;
        }[];
    } & {
        cvars?: {
            name?: string;
            value?: string;
        }[] & ({
            name?: string;
            value?: string;
        } & {
            name?: string;
            value?: string;
        } & { [K_3 in Exclude<keyof I_1["cvars"][number], keyof CMsg_CVars_CVar>]: never; })[] & { [K_4 in Exclude<keyof I_1["cvars"], keyof {
            name?: string;
            value?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "cvars">]: never; }>(object: I_1): CMsg_CVars;
};
export declare const CMsg_CVars_CVar: {
    fromJSON(object: any): CMsg_CVars_CVar;
    toJSON(message: CMsg_CVars_CVar): unknown;
    create<I extends {
        name?: string;
        value?: string;
    } & {
        name?: string;
        value?: string;
    } & { [K in Exclude<keyof I, keyof CMsg_CVars_CVar>]: never; }>(base?: I): CMsg_CVars_CVar;
    fromPartial<I_1 extends {
        name?: string;
        value?: string;
    } & {
        name?: string;
        value?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsg_CVars_CVar>]: never; }>(object: I_1): CMsg_CVars_CVar;
};
export declare const CNETMsg_NOP: {
    fromJSON(_: any): CNETMsg_NOP;
    toJSON(_: CNETMsg_NOP): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CNETMsg_NOP;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CNETMsg_NOP;
};
export declare const CNETMsg_SplitScreenUser: {
    fromJSON(object: any): CNETMsg_SplitScreenUser;
    toJSON(message: CNETMsg_SplitScreenUser): unknown;
    create<I extends {
        slot?: number;
    } & {
        slot?: number;
    } & { [K in Exclude<keyof I, "slot">]: never; }>(base?: I): CNETMsg_SplitScreenUser;
    fromPartial<I_1 extends {
        slot?: number;
    } & {
        slot?: number;
    } & { [K_1 in Exclude<keyof I_1, "slot">]: never; }>(object: I_1): CNETMsg_SplitScreenUser;
};
export declare const CNETMsg_Disconnect: {
    fromJSON(object: any): CNETMsg_Disconnect;
    toJSON(message: CNETMsg_Disconnect): unknown;
    create<I extends {
        reason?: ENetworkDisconnectionReason;
    } & {
        reason?: ENetworkDisconnectionReason;
    } & { [K in Exclude<keyof I, "reason">]: never; }>(base?: I): CNETMsg_Disconnect;
    fromPartial<I_1 extends {
        reason?: ENetworkDisconnectionReason;
    } & {
        reason?: ENetworkDisconnectionReason;
    } & { [K_1 in Exclude<keyof I_1, "reason">]: never; }>(object: I_1): CNETMsg_Disconnect;
};
export declare const CNETMsg_Tick: {
    fromJSON(object: any): CNETMsg_Tick;
    toJSON(message: CNETMsg_Tick): unknown;
    create<I extends {
        tick?: number;
        host_frametime?: number;
        host_frametime_std_deviation?: number;
        host_computationtime?: number;
        host_computationtime_std_deviation?: number;
        host_framestarttime_std_deviation?: number;
        host_loss?: number;
        host_unfiltered_frametime?: number;
        hltv_replay_flags?: number;
    } & {
        tick?: number;
        host_frametime?: number;
        host_frametime_std_deviation?: number;
        host_computationtime?: number;
        host_computationtime_std_deviation?: number;
        host_framestarttime_std_deviation?: number;
        host_loss?: number;
        host_unfiltered_frametime?: number;
        hltv_replay_flags?: number;
    } & { [K in Exclude<keyof I, keyof CNETMsg_Tick>]: never; }>(base?: I): CNETMsg_Tick;
    fromPartial<I_1 extends {
        tick?: number;
        host_frametime?: number;
        host_frametime_std_deviation?: number;
        host_computationtime?: number;
        host_computationtime_std_deviation?: number;
        host_framestarttime_std_deviation?: number;
        host_loss?: number;
        host_unfiltered_frametime?: number;
        hltv_replay_flags?: number;
    } & {
        tick?: number;
        host_frametime?: number;
        host_frametime_std_deviation?: number;
        host_computationtime?: number;
        host_computationtime_std_deviation?: number;
        host_framestarttime_std_deviation?: number;
        host_loss?: number;
        host_unfiltered_frametime?: number;
        hltv_replay_flags?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CNETMsg_Tick>]: never; }>(object: I_1): CNETMsg_Tick;
};
export declare const CNETMsg_StringCmd: {
    fromJSON(object: any): CNETMsg_StringCmd;
    toJSON(message: CNETMsg_StringCmd): unknown;
    create<I extends {
        command?: string;
    } & {
        command?: string;
    } & { [K in Exclude<keyof I, "command">]: never; }>(base?: I): CNETMsg_StringCmd;
    fromPartial<I_1 extends {
        command?: string;
    } & {
        command?: string;
    } & { [K_1 in Exclude<keyof I_1, "command">]: never; }>(object: I_1): CNETMsg_StringCmd;
};
export declare const CNETMsg_SetConVar: {
    fromJSON(object: any): CNETMsg_SetConVar;
    toJSON(message: CNETMsg_SetConVar): unknown;
    create<I extends {
        convars?: {
            cvars?: {
                name?: string;
                value?: string;
            }[];
        };
    } & {
        convars?: {
            cvars?: {
                name?: string;
                value?: string;
            }[];
        } & {
            cvars?: {
                name?: string;
                value?: string;
            }[] & ({
                name?: string;
                value?: string;
            } & {
                name?: string;
                value?: string;
            } & { [K in Exclude<keyof I["convars"]["cvars"][number], keyof CMsg_CVars_CVar>]: never; })[] & { [K_1 in Exclude<keyof I["convars"]["cvars"], keyof {
                name?: string;
                value?: string;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["convars"], "cvars">]: never; };
    } & { [K_3 in Exclude<keyof I, "convars">]: never; }>(base?: I): CNETMsg_SetConVar;
    fromPartial<I_1 extends {
        convars?: {
            cvars?: {
                name?: string;
                value?: string;
            }[];
        };
    } & {
        convars?: {
            cvars?: {
                name?: string;
                value?: string;
            }[];
        } & {
            cvars?: {
                name?: string;
                value?: string;
            }[] & ({
                name?: string;
                value?: string;
            } & {
                name?: string;
                value?: string;
            } & { [K_4 in Exclude<keyof I_1["convars"]["cvars"][number], keyof CMsg_CVars_CVar>]: never; })[] & { [K_5 in Exclude<keyof I_1["convars"]["cvars"], keyof {
                name?: string;
                value?: string;
            }[]>]: never; };
        } & { [K_6 in Exclude<keyof I_1["convars"], "cvars">]: never; };
    } & { [K_7 in Exclude<keyof I_1, "convars">]: never; }>(object: I_1): CNETMsg_SetConVar;
};
export declare const CNETMsg_SignonState: {
    fromJSON(object: any): CNETMsg_SignonState;
    toJSON(message: CNETMsg_SignonState): unknown;
    create<I extends {
        signon_state?: SignonState_t;
        spawn_count?: number;
        num_server_players?: number;
        players_networkids?: string[];
        map_name?: string;
        addons?: string;
    } & {
        signon_state?: SignonState_t;
        spawn_count?: number;
        num_server_players?: number;
        players_networkids?: string[] & string[] & { [K in Exclude<keyof I["players_networkids"], keyof string[]>]: never; };
        map_name?: string;
        addons?: string;
    } & { [K_1 in Exclude<keyof I, keyof CNETMsg_SignonState>]: never; }>(base?: I): CNETMsg_SignonState;
    fromPartial<I_1 extends {
        signon_state?: SignonState_t;
        spawn_count?: number;
        num_server_players?: number;
        players_networkids?: string[];
        map_name?: string;
        addons?: string;
    } & {
        signon_state?: SignonState_t;
        spawn_count?: number;
        num_server_players?: number;
        players_networkids?: string[] & string[] & { [K_2 in Exclude<keyof I_1["players_networkids"], keyof string[]>]: never; };
        map_name?: string;
        addons?: string;
    } & { [K_3 in Exclude<keyof I_1, keyof CNETMsg_SignonState>]: never; }>(object: I_1): CNETMsg_SignonState;
};
export declare const CSVCMsg_GameEvent: {
    fromJSON(object: any): CSVCMsg_GameEvent;
    toJSON(message: CSVCMsg_GameEvent): unknown;
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
        } & { [K in Exclude<keyof I["keys"][number], keyof CSVCMsg_GameEvent_key_t>]: never; })[] & { [K_1 in Exclude<keyof I["keys"], keyof {
            type?: number;
            val_string?: string;
            val_float?: number;
            val_long?: number;
            val_short?: number;
            val_byte?: number;
            val_bool?: boolean;
            val_uint64?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CSVCMsg_GameEvent>]: never; }>(base?: I): CSVCMsg_GameEvent;
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
        } & { [K_3 in Exclude<keyof I_1["keys"][number], keyof CSVCMsg_GameEvent_key_t>]: never; })[] & { [K_4 in Exclude<keyof I_1["keys"], keyof {
            type?: number;
            val_string?: string;
            val_float?: number;
            val_long?: number;
            val_short?: number;
            val_byte?: number;
            val_bool?: boolean;
            val_uint64?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CSVCMsg_GameEvent>]: never; }>(object: I_1): CSVCMsg_GameEvent;
};
export declare const CSVCMsg_GameEvent_key_t: {
    fromJSON(object: any): CSVCMsg_GameEvent_key_t;
    toJSON(message: CSVCMsg_GameEvent_key_t): unknown;
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
    } & { [K in Exclude<keyof I, keyof CSVCMsg_GameEvent_key_t>]: never; }>(base?: I): CSVCMsg_GameEvent_key_t;
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
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_GameEvent_key_t>]: never; }>(object: I_1): CSVCMsg_GameEvent_key_t;
};
export declare const CSVCMsgList_GameEvents: {
    fromJSON(object: any): CSVCMsgList_GameEvents;
    toJSON(message: CSVCMsgList_GameEvents): unknown;
    create<I extends {
        events?: {
            tick?: number;
            event?: {
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
            };
        }[];
    } & {
        events?: {
            tick?: number;
            event?: {
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
            };
        }[] & ({
            tick?: number;
            event?: {
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
            };
        } & {
            tick?: number;
            event?: {
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
                } & { [K in Exclude<keyof I["events"][number]["event"]["keys"][number], keyof CSVCMsg_GameEvent_key_t>]: never; })[] & { [K_1 in Exclude<keyof I["events"][number]["event"]["keys"], keyof {
                    type?: number;
                    val_string?: string;
                    val_float?: number;
                    val_long?: number;
                    val_short?: number;
                    val_byte?: number;
                    val_bool?: boolean;
                    val_uint64?: string;
                }[]>]: never; };
            } & { [K_2 in Exclude<keyof I["events"][number]["event"], keyof CSVCMsg_GameEvent>]: never; };
        } & { [K_3 in Exclude<keyof I["events"][number], keyof CSVCMsgList_GameEvents_event_t>]: never; })[] & { [K_4 in Exclude<keyof I["events"], keyof {
            tick?: number;
            event?: {
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
            };
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I, "events">]: never; }>(base?: I): CSVCMsgList_GameEvents;
    fromPartial<I_1 extends {
        events?: {
            tick?: number;
            event?: {
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
            };
        }[];
    } & {
        events?: {
            tick?: number;
            event?: {
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
            };
        }[] & ({
            tick?: number;
            event?: {
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
            };
        } & {
            tick?: number;
            event?: {
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
                } & { [K_6 in Exclude<keyof I_1["events"][number]["event"]["keys"][number], keyof CSVCMsg_GameEvent_key_t>]: never; })[] & { [K_7 in Exclude<keyof I_1["events"][number]["event"]["keys"], keyof {
                    type?: number;
                    val_string?: string;
                    val_float?: number;
                    val_long?: number;
                    val_short?: number;
                    val_byte?: number;
                    val_bool?: boolean;
                    val_uint64?: string;
                }[]>]: never; };
            } & { [K_8 in Exclude<keyof I_1["events"][number]["event"], keyof CSVCMsg_GameEvent>]: never; };
        } & { [K_9 in Exclude<keyof I_1["events"][number], keyof CSVCMsgList_GameEvents_event_t>]: never; })[] & { [K_10 in Exclude<keyof I_1["events"], keyof {
            tick?: number;
            event?: {
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
            };
        }[]>]: never; };
    } & { [K_11 in Exclude<keyof I_1, "events">]: never; }>(object: I_1): CSVCMsgList_GameEvents;
};
export declare const CSVCMsgList_GameEvents_event_t: {
    fromJSON(object: any): CSVCMsgList_GameEvents_event_t;
    toJSON(message: CSVCMsgList_GameEvents_event_t): unknown;
    create<I extends {
        tick?: number;
        event?: {
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
        };
    } & {
        tick?: number;
        event?: {
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
            } & { [K in Exclude<keyof I["event"]["keys"][number], keyof CSVCMsg_GameEvent_key_t>]: never; })[] & { [K_1 in Exclude<keyof I["event"]["keys"], keyof {
                type?: number;
                val_string?: string;
                val_float?: number;
                val_long?: number;
                val_short?: number;
                val_byte?: number;
                val_bool?: boolean;
                val_uint64?: string;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["event"], keyof CSVCMsg_GameEvent>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof CSVCMsgList_GameEvents_event_t>]: never; }>(base?: I): CSVCMsgList_GameEvents_event_t;
    fromPartial<I_1 extends {
        tick?: number;
        event?: {
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
        };
    } & {
        tick?: number;
        event?: {
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
            } & { [K_4 in Exclude<keyof I_1["event"]["keys"][number], keyof CSVCMsg_GameEvent_key_t>]: never; })[] & { [K_5 in Exclude<keyof I_1["event"]["keys"], keyof {
                type?: number;
                val_string?: string;
                val_float?: number;
                val_long?: number;
                val_short?: number;
                val_byte?: number;
                val_bool?: boolean;
                val_uint64?: string;
            }[]>]: never; };
        } & { [K_6 in Exclude<keyof I_1["event"], keyof CSVCMsg_GameEvent>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof CSVCMsgList_GameEvents_event_t>]: never; }>(object: I_1): CSVCMsgList_GameEvents_event_t;
};
export declare const CNETMsg_SpawnGroup_Load: {
    fromJSON(object: any): CNETMsg_SpawnGroup_Load;
    toJSON(message: CNETMsg_SpawnGroup_Load): unknown;
    create<I extends {
        worldname?: string;
        entitylumpname?: string;
        entityfiltername?: string;
        spawngrouphandle?: number;
        spawngroupownerhandle?: number;
        world_offset_pos?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        world_offset_angle?: {
            x?: number;
            y?: number;
            z?: number;
        };
        spawngroupmanifest?: string;
        flags?: number;
        tickcount?: number;
        manifestincomplete?: boolean;
        localnamefixup?: string;
        parentnamefixup?: string;
        manifestloadpriority?: number;
        worldgroupid?: number;
        creationsequence?: number;
        savegamefilename?: string;
        spawngroupparenthandle?: number;
        leveltransition?: boolean;
        worldgroupname?: string;
    } & {
        worldname?: string;
        entitylumpname?: string;
        entityfiltername?: string;
        spawngrouphandle?: number;
        spawngroupownerhandle?: number;
        world_offset_pos?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["world_offset_pos"], keyof CMsgVector>]: never; };
        world_offset_angle?: {
            x?: number;
            y?: number;
            z?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
        } & { [K_1 in Exclude<keyof I["world_offset_angle"], keyof CMsgQAngle>]: never; };
        spawngroupmanifest?: string;
        flags?: number;
        tickcount?: number;
        manifestincomplete?: boolean;
        localnamefixup?: string;
        parentnamefixup?: string;
        manifestloadpriority?: number;
        worldgroupid?: number;
        creationsequence?: number;
        savegamefilename?: string;
        spawngroupparenthandle?: number;
        leveltransition?: boolean;
        worldgroupname?: string;
    } & { [K_2 in Exclude<keyof I, keyof CNETMsg_SpawnGroup_Load>]: never; }>(base?: I): CNETMsg_SpawnGroup_Load;
    fromPartial<I_1 extends {
        worldname?: string;
        entitylumpname?: string;
        entityfiltername?: string;
        spawngrouphandle?: number;
        spawngroupownerhandle?: number;
        world_offset_pos?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        world_offset_angle?: {
            x?: number;
            y?: number;
            z?: number;
        };
        spawngroupmanifest?: string;
        flags?: number;
        tickcount?: number;
        manifestincomplete?: boolean;
        localnamefixup?: string;
        parentnamefixup?: string;
        manifestloadpriority?: number;
        worldgroupid?: number;
        creationsequence?: number;
        savegamefilename?: string;
        spawngroupparenthandle?: number;
        leveltransition?: boolean;
        worldgroupname?: string;
    } & {
        worldname?: string;
        entitylumpname?: string;
        entityfiltername?: string;
        spawngrouphandle?: number;
        spawngroupownerhandle?: number;
        world_offset_pos?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_3 in Exclude<keyof I_1["world_offset_pos"], keyof CMsgVector>]: never; };
        world_offset_angle?: {
            x?: number;
            y?: number;
            z?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
        } & { [K_4 in Exclude<keyof I_1["world_offset_angle"], keyof CMsgQAngle>]: never; };
        spawngroupmanifest?: string;
        flags?: number;
        tickcount?: number;
        manifestincomplete?: boolean;
        localnamefixup?: string;
        parentnamefixup?: string;
        manifestloadpriority?: number;
        worldgroupid?: number;
        creationsequence?: number;
        savegamefilename?: string;
        spawngroupparenthandle?: number;
        leveltransition?: boolean;
        worldgroupname?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof CNETMsg_SpawnGroup_Load>]: never; }>(object: I_1): CNETMsg_SpawnGroup_Load;
};
export declare const CNETMsg_SpawnGroup_ManifestUpdate: {
    fromJSON(object: any): CNETMsg_SpawnGroup_ManifestUpdate;
    toJSON(message: CNETMsg_SpawnGroup_ManifestUpdate): unknown;
    create<I extends {
        spawngrouphandle?: number;
        spawngroupmanifest?: string;
        manifestincomplete?: boolean;
    } & {
        spawngrouphandle?: number;
        spawngroupmanifest?: string;
        manifestincomplete?: boolean;
    } & { [K in Exclude<keyof I, keyof CNETMsg_SpawnGroup_ManifestUpdate>]: never; }>(base?: I): CNETMsg_SpawnGroup_ManifestUpdate;
    fromPartial<I_1 extends {
        spawngrouphandle?: number;
        spawngroupmanifest?: string;
        manifestincomplete?: boolean;
    } & {
        spawngrouphandle?: number;
        spawngroupmanifest?: string;
        manifestincomplete?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CNETMsg_SpawnGroup_ManifestUpdate>]: never; }>(object: I_1): CNETMsg_SpawnGroup_ManifestUpdate;
};
export declare const CNETMsg_SpawnGroup_SetCreationTick: {
    fromJSON(object: any): CNETMsg_SpawnGroup_SetCreationTick;
    toJSON(message: CNETMsg_SpawnGroup_SetCreationTick): unknown;
    create<I extends {
        spawngrouphandle?: number;
        tickcount?: number;
        creationsequence?: number;
    } & {
        spawngrouphandle?: number;
        tickcount?: number;
        creationsequence?: number;
    } & { [K in Exclude<keyof I, keyof CNETMsg_SpawnGroup_SetCreationTick>]: never; }>(base?: I): CNETMsg_SpawnGroup_SetCreationTick;
    fromPartial<I_1 extends {
        spawngrouphandle?: number;
        tickcount?: number;
        creationsequence?: number;
    } & {
        spawngrouphandle?: number;
        tickcount?: number;
        creationsequence?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CNETMsg_SpawnGroup_SetCreationTick>]: never; }>(object: I_1): CNETMsg_SpawnGroup_SetCreationTick;
};
export declare const CNETMsg_SpawnGroup_Unload: {
    fromJSON(object: any): CNETMsg_SpawnGroup_Unload;
    toJSON(message: CNETMsg_SpawnGroup_Unload): unknown;
    create<I extends {
        spawngrouphandle?: number;
        flags?: number;
        tickcount?: number;
    } & {
        spawngrouphandle?: number;
        flags?: number;
        tickcount?: number;
    } & { [K in Exclude<keyof I, keyof CNETMsg_SpawnGroup_Unload>]: never; }>(base?: I): CNETMsg_SpawnGroup_Unload;
    fromPartial<I_1 extends {
        spawngrouphandle?: number;
        flags?: number;
        tickcount?: number;
    } & {
        spawngrouphandle?: number;
        flags?: number;
        tickcount?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CNETMsg_SpawnGroup_Unload>]: never; }>(object: I_1): CNETMsg_SpawnGroup_Unload;
};
export declare const CNETMsg_SpawnGroup_LoadCompleted: {
    fromJSON(object: any): CNETMsg_SpawnGroup_LoadCompleted;
    toJSON(message: CNETMsg_SpawnGroup_LoadCompleted): unknown;
    create<I extends {
        spawngrouphandle?: number;
    } & {
        spawngrouphandle?: number;
    } & { [K in Exclude<keyof I, "spawngrouphandle">]: never; }>(base?: I): CNETMsg_SpawnGroup_LoadCompleted;
    fromPartial<I_1 extends {
        spawngrouphandle?: number;
    } & {
        spawngrouphandle?: number;
    } & { [K_1 in Exclude<keyof I_1, "spawngrouphandle">]: never; }>(object: I_1): CNETMsg_SpawnGroup_LoadCompleted;
};
export declare const CSVCMsg_GameSessionConfiguration: {
    fromJSON(object: any): CSVCMsg_GameSessionConfiguration;
    toJSON(message: CSVCMsg_GameSessionConfiguration): unknown;
    create<I extends {
        is_multiplayer?: boolean;
        is_loadsavegame?: boolean;
        is_background_map?: boolean;
        is_headless?: boolean;
        min_client_limit?: number;
        max_client_limit?: number;
        max_clients?: number;
        tick_interval?: number;
        hostname?: string;
        savegamename?: string;
        s1_mapname?: string;
        gamemode?: string;
        server_ip_address?: string;
        data?: string;
        is_localonly?: boolean;
        no_steam_server?: boolean;
        is_transition?: boolean;
        previouslevel?: string;
        landmarkname?: string;
    } & {
        is_multiplayer?: boolean;
        is_loadsavegame?: boolean;
        is_background_map?: boolean;
        is_headless?: boolean;
        min_client_limit?: number;
        max_client_limit?: number;
        max_clients?: number;
        tick_interval?: number;
        hostname?: string;
        savegamename?: string;
        s1_mapname?: string;
        gamemode?: string;
        server_ip_address?: string;
        data?: string;
        is_localonly?: boolean;
        no_steam_server?: boolean;
        is_transition?: boolean;
        previouslevel?: string;
        landmarkname?: string;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_GameSessionConfiguration>]: never; }>(base?: I): CSVCMsg_GameSessionConfiguration;
    fromPartial<I_1 extends {
        is_multiplayer?: boolean;
        is_loadsavegame?: boolean;
        is_background_map?: boolean;
        is_headless?: boolean;
        min_client_limit?: number;
        max_client_limit?: number;
        max_clients?: number;
        tick_interval?: number;
        hostname?: string;
        savegamename?: string;
        s1_mapname?: string;
        gamemode?: string;
        server_ip_address?: string;
        data?: string;
        is_localonly?: boolean;
        no_steam_server?: boolean;
        is_transition?: boolean;
        previouslevel?: string;
        landmarkname?: string;
    } & {
        is_multiplayer?: boolean;
        is_loadsavegame?: boolean;
        is_background_map?: boolean;
        is_headless?: boolean;
        min_client_limit?: number;
        max_client_limit?: number;
        max_clients?: number;
        tick_interval?: number;
        hostname?: string;
        savegamename?: string;
        s1_mapname?: string;
        gamemode?: string;
        server_ip_address?: string;
        data?: string;
        is_localonly?: boolean;
        no_steam_server?: boolean;
        is_transition?: boolean;
        previouslevel?: string;
        landmarkname?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_GameSessionConfiguration>]: never; }>(object: I_1): CSVCMsg_GameSessionConfiguration;
};
export declare const CNETMsg_DebugOverlay: {
    fromJSON(object: any): CNETMsg_DebugOverlay;
    toJSON(message: CNETMsg_DebugOverlay): unknown;
    create<I extends {
        etype?: number;
        vectors?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        }[];
        colors?: {
            r?: number;
            g?: number;
            b?: number;
            a?: number;
        }[];
        dimensions?: number[];
        times?: number[];
        bools?: boolean[];
        uint64s?: string[];
    } & {
        etype?: number;
        vectors?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        }[] & ({
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["vectors"][number], keyof CMsgVector>]: never; })[] & { [K_1 in Exclude<keyof I["vectors"], keyof {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        }[]>]: never; };
        colors?: {
            r?: number;
            g?: number;
            b?: number;
            a?: number;
        }[] & ({
            r?: number;
            g?: number;
            b?: number;
            a?: number;
        } & {
            r?: number;
            g?: number;
            b?: number;
            a?: number;
        } & { [K_2 in Exclude<keyof I["colors"][number], keyof CMsgRGBA>]: never; })[] & { [K_3 in Exclude<keyof I["colors"], keyof {
            r?: number;
            g?: number;
            b?: number;
            a?: number;
        }[]>]: never; };
        dimensions?: number[] & number[] & { [K_4 in Exclude<keyof I["dimensions"], keyof number[]>]: never; };
        times?: number[] & number[] & { [K_5 in Exclude<keyof I["times"], keyof number[]>]: never; };
        bools?: boolean[] & boolean[] & { [K_6 in Exclude<keyof I["bools"], keyof boolean[]>]: never; };
        uint64s?: string[] & string[] & { [K_7 in Exclude<keyof I["uint64s"], keyof string[]>]: never; };
    } & { [K_8 in Exclude<keyof I, keyof CNETMsg_DebugOverlay>]: never; }>(base?: I): CNETMsg_DebugOverlay;
    fromPartial<I_1 extends {
        etype?: number;
        vectors?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        }[];
        colors?: {
            r?: number;
            g?: number;
            b?: number;
            a?: number;
        }[];
        dimensions?: number[];
        times?: number[];
        bools?: boolean[];
        uint64s?: string[];
    } & {
        etype?: number;
        vectors?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        }[] & ({
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_9 in Exclude<keyof I_1["vectors"][number], keyof CMsgVector>]: never; })[] & { [K_10 in Exclude<keyof I_1["vectors"], keyof {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        }[]>]: never; };
        colors?: {
            r?: number;
            g?: number;
            b?: number;
            a?: number;
        }[] & ({
            r?: number;
            g?: number;
            b?: number;
            a?: number;
        } & {
            r?: number;
            g?: number;
            b?: number;
            a?: number;
        } & { [K_11 in Exclude<keyof I_1["colors"][number], keyof CMsgRGBA>]: never; })[] & { [K_12 in Exclude<keyof I_1["colors"], keyof {
            r?: number;
            g?: number;
            b?: number;
            a?: number;
        }[]>]: never; };
        dimensions?: number[] & number[] & { [K_13 in Exclude<keyof I_1["dimensions"], keyof number[]>]: never; };
        times?: number[] & number[] & { [K_14 in Exclude<keyof I_1["times"], keyof number[]>]: never; };
        bools?: boolean[] & boolean[] & { [K_15 in Exclude<keyof I_1["bools"], keyof boolean[]>]: never; };
        uint64s?: string[] & string[] & { [K_16 in Exclude<keyof I_1["uint64s"], keyof string[]>]: never; };
    } & { [K_17 in Exclude<keyof I_1, keyof CNETMsg_DebugOverlay>]: never; }>(object: I_1): CNETMsg_DebugOverlay;
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
