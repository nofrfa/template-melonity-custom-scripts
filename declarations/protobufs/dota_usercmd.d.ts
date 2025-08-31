import { CMsgVector } from "./networkbasetypes";
import { CBaseUserCmdPB } from "./usercmd";
export declare const protobufPackage = "";
export interface CDota2UserCmdPB {
    base: CBaseUserCmdPB | undefined;
    spectator_query_unit_entindex: number;
    crosshairtrace: CMsgVector | undefined;
    cameraposition_x: number;
    cameraposition_y: number;
    clickbehavior: number;
    statspanel: number;
    shoppanel: number;
    stats_dropdown: number;
    stats_dropdown_sort: number;
}
export declare const CDota2UserCmdPB: {
    fromJSON(object: any): CDota2UserCmdPB;
    toJSON(message: CDota2UserCmdPB): unknown;
    create<I extends {
        base?: {
            command_number?: number;
            tick_count?: number;
            buttons_pb?: {
                buttonstate1?: string;
                buttonstate2?: string;
                buttonstate3?: string;
            };
            viewangles?: {
                x?: number;
                y?: number;
                z?: number;
            };
            forwardmove?: number;
            leftmove?: number;
            upmove?: number;
            impulse?: number;
            weaponselect?: number;
            random_seed?: number;
            mousedx?: number;
            mousedy?: number;
            hasbeenpredicted?: boolean;
            pawn_entity_handle?: number;
            subtick_moves?: {
                button?: string;
                pressed?: boolean;
                when?: number;
            }[];
            move_crc?: string;
        };
        spectator_query_unit_entindex?: number;
        crosshairtrace?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        cameraposition_x?: number;
        cameraposition_y?: number;
        clickbehavior?: number;
        statspanel?: number;
        shoppanel?: number;
        stats_dropdown?: number;
        stats_dropdown_sort?: number;
    } & {
        base?: {
            command_number?: number;
            tick_count?: number;
            buttons_pb?: {
                buttonstate1?: string;
                buttonstate2?: string;
                buttonstate3?: string;
            };
            viewangles?: {
                x?: number;
                y?: number;
                z?: number;
            };
            forwardmove?: number;
            leftmove?: number;
            upmove?: number;
            impulse?: number;
            weaponselect?: number;
            random_seed?: number;
            mousedx?: number;
            mousedy?: number;
            hasbeenpredicted?: boolean;
            pawn_entity_handle?: number;
            subtick_moves?: {
                button?: string;
                pressed?: boolean;
                when?: number;
            }[];
            move_crc?: string;
        } & {
            command_number?: number;
            tick_count?: number;
            buttons_pb?: {
                buttonstate1?: string;
                buttonstate2?: string;
                buttonstate3?: string;
            } & {
                buttonstate1?: string;
                buttonstate2?: string;
                buttonstate3?: string;
            } & { [K in Exclude<keyof I["base"]["buttons_pb"], keyof import("./usercmd").CInButtonStatePB>]: never; };
            viewangles?: {
                x?: number;
                y?: number;
                z?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
            } & { [K_1 in Exclude<keyof I["base"]["viewangles"], keyof import("./networkbasetypes").CMsgQAngle>]: never; };
            forwardmove?: number;
            leftmove?: number;
            upmove?: number;
            impulse?: number;
            weaponselect?: number;
            random_seed?: number;
            mousedx?: number;
            mousedy?: number;
            hasbeenpredicted?: boolean;
            pawn_entity_handle?: number;
            subtick_moves?: {
                button?: string;
                pressed?: boolean;
                when?: number;
            }[] & ({
                button?: string;
                pressed?: boolean;
                when?: number;
            } & {
                button?: string;
                pressed?: boolean;
                when?: number;
            } & { [K_2 in Exclude<keyof I["base"]["subtick_moves"][number], keyof import("./usercmd").CSubtickMoveStep>]: never; })[] & { [K_3 in Exclude<keyof I["base"]["subtick_moves"], keyof {
                button?: string;
                pressed?: boolean;
                when?: number;
            }[]>]: never; };
            move_crc?: string;
        } & { [K_4 in Exclude<keyof I["base"], keyof CBaseUserCmdPB>]: never; };
        spectator_query_unit_entindex?: number;
        crosshairtrace?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_5 in Exclude<keyof I["crosshairtrace"], keyof CMsgVector>]: never; };
        cameraposition_x?: number;
        cameraposition_y?: number;
        clickbehavior?: number;
        statspanel?: number;
        shoppanel?: number;
        stats_dropdown?: number;
        stats_dropdown_sort?: number;
    } & { [K_6 in Exclude<keyof I, keyof CDota2UserCmdPB>]: never; }>(base?: I): CDota2UserCmdPB;
    fromPartial<I_1 extends {
        base?: {
            command_number?: number;
            tick_count?: number;
            buttons_pb?: {
                buttonstate1?: string;
                buttonstate2?: string;
                buttonstate3?: string;
            };
            viewangles?: {
                x?: number;
                y?: number;
                z?: number;
            };
            forwardmove?: number;
            leftmove?: number;
            upmove?: number;
            impulse?: number;
            weaponselect?: number;
            random_seed?: number;
            mousedx?: number;
            mousedy?: number;
            hasbeenpredicted?: boolean;
            pawn_entity_handle?: number;
            subtick_moves?: {
                button?: string;
                pressed?: boolean;
                when?: number;
            }[];
            move_crc?: string;
        };
        spectator_query_unit_entindex?: number;
        crosshairtrace?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        cameraposition_x?: number;
        cameraposition_y?: number;
        clickbehavior?: number;
        statspanel?: number;
        shoppanel?: number;
        stats_dropdown?: number;
        stats_dropdown_sort?: number;
    } & {
        base?: {
            command_number?: number;
            tick_count?: number;
            buttons_pb?: {
                buttonstate1?: string;
                buttonstate2?: string;
                buttonstate3?: string;
            };
            viewangles?: {
                x?: number;
                y?: number;
                z?: number;
            };
            forwardmove?: number;
            leftmove?: number;
            upmove?: number;
            impulse?: number;
            weaponselect?: number;
            random_seed?: number;
            mousedx?: number;
            mousedy?: number;
            hasbeenpredicted?: boolean;
            pawn_entity_handle?: number;
            subtick_moves?: {
                button?: string;
                pressed?: boolean;
                when?: number;
            }[];
            move_crc?: string;
        } & {
            command_number?: number;
            tick_count?: number;
            buttons_pb?: {
                buttonstate1?: string;
                buttonstate2?: string;
                buttonstate3?: string;
            } & {
                buttonstate1?: string;
                buttonstate2?: string;
                buttonstate3?: string;
            } & { [K_7 in Exclude<keyof I_1["base"]["buttons_pb"], keyof import("./usercmd").CInButtonStatePB>]: never; };
            viewangles?: {
                x?: number;
                y?: number;
                z?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
            } & { [K_8 in Exclude<keyof I_1["base"]["viewangles"], keyof import("./networkbasetypes").CMsgQAngle>]: never; };
            forwardmove?: number;
            leftmove?: number;
            upmove?: number;
            impulse?: number;
            weaponselect?: number;
            random_seed?: number;
            mousedx?: number;
            mousedy?: number;
            hasbeenpredicted?: boolean;
            pawn_entity_handle?: number;
            subtick_moves?: {
                button?: string;
                pressed?: boolean;
                when?: number;
            }[] & ({
                button?: string;
                pressed?: boolean;
                when?: number;
            } & {
                button?: string;
                pressed?: boolean;
                when?: number;
            } & { [K_9 in Exclude<keyof I_1["base"]["subtick_moves"][number], keyof import("./usercmd").CSubtickMoveStep>]: never; })[] & { [K_10 in Exclude<keyof I_1["base"]["subtick_moves"], keyof {
                button?: string;
                pressed?: boolean;
                when?: number;
            }[]>]: never; };
            move_crc?: string;
        } & { [K_11 in Exclude<keyof I_1["base"], keyof CBaseUserCmdPB>]: never; };
        spectator_query_unit_entindex?: number;
        crosshairtrace?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_12 in Exclude<keyof I_1["crosshairtrace"], keyof CMsgVector>]: never; };
        cameraposition_x?: number;
        cameraposition_y?: number;
        clickbehavior?: number;
        statspanel?: number;
        shoppanel?: number;
        stats_dropdown?: number;
        stats_dropdown_sort?: number;
    } & { [K_13 in Exclude<keyof I_1, keyof CDota2UserCmdPB>]: never; }>(object: I_1): CDota2UserCmdPB;
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
