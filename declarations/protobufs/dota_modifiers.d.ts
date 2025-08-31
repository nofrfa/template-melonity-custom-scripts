import { CMsgVector } from "./networkbasetypes";
export declare const protobufPackage = "";
export declare enum DOTA_MODIFIER_ENTRY_TYPE {
    DOTA_MODIFIER_ENTRY_TYPE_ACTIVE = 1,
    DOTA_MODIFIER_ENTRY_TYPE_REMOVED = 2,
    UNRECOGNIZED = -1
}
export declare function dOTA_MODIFIER_ENTRY_TYPEFromJSON(object: any): DOTA_MODIFIER_ENTRY_TYPE;
export declare function dOTA_MODIFIER_ENTRY_TYPEToJSON(object: DOTA_MODIFIER_ENTRY_TYPE): string;
export interface CDOTAModifierBuffTableEntry {
    entry_type: DOTA_MODIFIER_ENTRY_TYPE;
    parent: number;
    index: number;
    serial_num: number;
    modifier_class: number;
    ability_level: number;
    stack_count: number;
    creation_time: number;
    duration: number;
    caster: number;
    ability: number;
    armor: number;
    fade_time: number;
    subtle: boolean;
    channel_time: number;
    v_start: CMsgVector | undefined;
    v_end: CMsgVector | undefined;
    portal_loop_appear: string;
    portal_loop_disappear: string;
    hero_loop_appear: string;
    hero_loop_disappear: string;
    movement_speed: number;
    aura: boolean;
    activity: number;
    damage: number;
    range: number;
    dd_modifier_index: number;
    dd_ability_id: number;
    illusion_label: string;
    active: boolean;
    player_ids: string;
    lua_name: string;
    attack_speed: number;
    aura_owner: number;
    bonus_all_stats: number;
    bonus_health: number;
    bonus_mana: number;
    custom_entity: number;
}
export interface CDOTALuaModifierEntry {
    modifier_type: number;
    modifier_filename: string;
}
export declare const CDOTAModifierBuffTableEntry: {
    fromJSON(object: any): CDOTAModifierBuffTableEntry;
    toJSON(message: CDOTAModifierBuffTableEntry): unknown;
    create<I extends {
        entry_type?: DOTA_MODIFIER_ENTRY_TYPE;
        parent?: number;
        index?: number;
        serial_num?: number;
        modifier_class?: number;
        ability_level?: number;
        stack_count?: number;
        creation_time?: number;
        duration?: number;
        caster?: number;
        ability?: number;
        armor?: number;
        fade_time?: number;
        subtle?: boolean;
        channel_time?: number;
        v_start?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        v_end?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        portal_loop_appear?: string;
        portal_loop_disappear?: string;
        hero_loop_appear?: string;
        hero_loop_disappear?: string;
        movement_speed?: number;
        aura?: boolean;
        activity?: number;
        damage?: number;
        range?: number;
        dd_modifier_index?: number;
        dd_ability_id?: number;
        illusion_label?: string;
        active?: boolean;
        player_ids?: string;
        lua_name?: string;
        attack_speed?: number;
        aura_owner?: number;
        bonus_all_stats?: number;
        bonus_health?: number;
        bonus_mana?: number;
        custom_entity?: number;
    } & {
        entry_type?: DOTA_MODIFIER_ENTRY_TYPE;
        parent?: number;
        index?: number;
        serial_num?: number;
        modifier_class?: number;
        ability_level?: number;
        stack_count?: number;
        creation_time?: number;
        duration?: number;
        caster?: number;
        ability?: number;
        armor?: number;
        fade_time?: number;
        subtle?: boolean;
        channel_time?: number;
        v_start?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["v_start"], keyof CMsgVector>]: never; };
        v_end?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_1 in Exclude<keyof I["v_end"], keyof CMsgVector>]: never; };
        portal_loop_appear?: string;
        portal_loop_disappear?: string;
        hero_loop_appear?: string;
        hero_loop_disappear?: string;
        movement_speed?: number;
        aura?: boolean;
        activity?: number;
        damage?: number;
        range?: number;
        dd_modifier_index?: number;
        dd_ability_id?: number;
        illusion_label?: string;
        active?: boolean;
        player_ids?: string;
        lua_name?: string;
        attack_speed?: number;
        aura_owner?: number;
        bonus_all_stats?: number;
        bonus_health?: number;
        bonus_mana?: number;
        custom_entity?: number;
    } & { [K_2 in Exclude<keyof I, keyof CDOTAModifierBuffTableEntry>]: never; }>(base?: I): CDOTAModifierBuffTableEntry;
    fromPartial<I_1 extends {
        entry_type?: DOTA_MODIFIER_ENTRY_TYPE;
        parent?: number;
        index?: number;
        serial_num?: number;
        modifier_class?: number;
        ability_level?: number;
        stack_count?: number;
        creation_time?: number;
        duration?: number;
        caster?: number;
        ability?: number;
        armor?: number;
        fade_time?: number;
        subtle?: boolean;
        channel_time?: number;
        v_start?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        v_end?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        portal_loop_appear?: string;
        portal_loop_disappear?: string;
        hero_loop_appear?: string;
        hero_loop_disappear?: string;
        movement_speed?: number;
        aura?: boolean;
        activity?: number;
        damage?: number;
        range?: number;
        dd_modifier_index?: number;
        dd_ability_id?: number;
        illusion_label?: string;
        active?: boolean;
        player_ids?: string;
        lua_name?: string;
        attack_speed?: number;
        aura_owner?: number;
        bonus_all_stats?: number;
        bonus_health?: number;
        bonus_mana?: number;
        custom_entity?: number;
    } & {
        entry_type?: DOTA_MODIFIER_ENTRY_TYPE;
        parent?: number;
        index?: number;
        serial_num?: number;
        modifier_class?: number;
        ability_level?: number;
        stack_count?: number;
        creation_time?: number;
        duration?: number;
        caster?: number;
        ability?: number;
        armor?: number;
        fade_time?: number;
        subtle?: boolean;
        channel_time?: number;
        v_start?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_3 in Exclude<keyof I_1["v_start"], keyof CMsgVector>]: never; };
        v_end?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_4 in Exclude<keyof I_1["v_end"], keyof CMsgVector>]: never; };
        portal_loop_appear?: string;
        portal_loop_disappear?: string;
        hero_loop_appear?: string;
        hero_loop_disappear?: string;
        movement_speed?: number;
        aura?: boolean;
        activity?: number;
        damage?: number;
        range?: number;
        dd_modifier_index?: number;
        dd_ability_id?: number;
        illusion_label?: string;
        active?: boolean;
        player_ids?: string;
        lua_name?: string;
        attack_speed?: number;
        aura_owner?: number;
        bonus_all_stats?: number;
        bonus_health?: number;
        bonus_mana?: number;
        custom_entity?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CDOTAModifierBuffTableEntry>]: never; }>(object: I_1): CDOTAModifierBuffTableEntry;
};
export declare const CDOTALuaModifierEntry: {
    fromJSON(object: any): CDOTALuaModifierEntry;
    toJSON(message: CDOTALuaModifierEntry): unknown;
    create<I extends {
        modifier_type?: number;
        modifier_filename?: string;
    } & {
        modifier_type?: number;
        modifier_filename?: string;
    } & { [K in Exclude<keyof I, keyof CDOTALuaModifierEntry>]: never; }>(base?: I): CDOTALuaModifierEntry;
    fromPartial<I_1 extends {
        modifier_type?: number;
        modifier_filename?: string;
    } & {
        modifier_type?: number;
        modifier_filename?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTALuaModifierEntry>]: never; }>(object: I_1): CDOTALuaModifierEntry;
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
