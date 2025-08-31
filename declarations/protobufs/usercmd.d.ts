import { CMsgQAngle } from "./networkbasetypes";
export declare const protobufPackage = "";
export interface CInButtonStatePB {
    buttonstate1: string;
    buttonstate2: string;
    buttonstate3: string;
}
export interface CSubtickMoveStep {
    button: string;
    pressed: boolean;
    when: number;
}
export interface CBaseUserCmdPB {
    command_number: number;
    tick_count: number;
    buttons_pb: CInButtonStatePB | undefined;
    viewangles: CMsgQAngle | undefined;
    forwardmove: number;
    leftmove: number;
    upmove: number;
    impulse: number;
    weaponselect: number;
    random_seed: number;
    mousedx: number;
    mousedy: number;
    hasbeenpredicted: boolean;
    pawn_entity_handle: number;
    subtick_moves: CSubtickMoveStep[];
    move_crc: string;
}
export interface CUserCmdBasePB {
    base: CBaseUserCmdPB | undefined;
}
export declare const CInButtonStatePB: {
    fromJSON(object: any): CInButtonStatePB;
    toJSON(message: CInButtonStatePB): unknown;
    create<I extends {
        buttonstate1?: string;
        buttonstate2?: string;
        buttonstate3?: string;
    } & {
        buttonstate1?: string;
        buttonstate2?: string;
        buttonstate3?: string;
    } & { [K in Exclude<keyof I, keyof CInButtonStatePB>]: never; }>(base?: I): CInButtonStatePB;
    fromPartial<I_1 extends {
        buttonstate1?: string;
        buttonstate2?: string;
        buttonstate3?: string;
    } & {
        buttonstate1?: string;
        buttonstate2?: string;
        buttonstate3?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CInButtonStatePB>]: never; }>(object: I_1): CInButtonStatePB;
};
export declare const CSubtickMoveStep: {
    fromJSON(object: any): CSubtickMoveStep;
    toJSON(message: CSubtickMoveStep): unknown;
    create<I extends {
        button?: string;
        pressed?: boolean;
        when?: number;
    } & {
        button?: string;
        pressed?: boolean;
        when?: number;
    } & { [K in Exclude<keyof I, keyof CSubtickMoveStep>]: never; }>(base?: I): CSubtickMoveStep;
    fromPartial<I_1 extends {
        button?: string;
        pressed?: boolean;
        when?: number;
    } & {
        button?: string;
        pressed?: boolean;
        when?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CSubtickMoveStep>]: never; }>(object: I_1): CSubtickMoveStep;
};
export declare const CBaseUserCmdPB: {
    fromJSON(object: any): CBaseUserCmdPB;
    toJSON(message: CBaseUserCmdPB): unknown;
    create<I extends {
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
        } & { [K in Exclude<keyof I["buttons_pb"], keyof CInButtonStatePB>]: never; };
        viewangles?: {
            x?: number;
            y?: number;
            z?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
        } & { [K_1 in Exclude<keyof I["viewangles"], keyof CMsgQAngle>]: never; };
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
        } & { [K_2 in Exclude<keyof I["subtick_moves"][number], keyof CSubtickMoveStep>]: never; })[] & { [K_3 in Exclude<keyof I["subtick_moves"], keyof {
            button?: string;
            pressed?: boolean;
            when?: number;
        }[]>]: never; };
        move_crc?: string;
    } & { [K_4 in Exclude<keyof I, keyof CBaseUserCmdPB>]: never; }>(base?: I): CBaseUserCmdPB;
    fromPartial<I_1 extends {
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
        } & { [K_5 in Exclude<keyof I_1["buttons_pb"], keyof CInButtonStatePB>]: never; };
        viewangles?: {
            x?: number;
            y?: number;
            z?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
        } & { [K_6 in Exclude<keyof I_1["viewangles"], keyof CMsgQAngle>]: never; };
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
        } & { [K_7 in Exclude<keyof I_1["subtick_moves"][number], keyof CSubtickMoveStep>]: never; })[] & { [K_8 in Exclude<keyof I_1["subtick_moves"], keyof {
            button?: string;
            pressed?: boolean;
            when?: number;
        }[]>]: never; };
        move_crc?: string;
    } & { [K_9 in Exclude<keyof I_1, keyof CBaseUserCmdPB>]: never; }>(object: I_1): CBaseUserCmdPB;
};
export declare const CUserCmdBasePB: {
    fromJSON(object: any): CUserCmdBasePB;
    toJSON(message: CUserCmdBasePB): unknown;
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
            } & { [K in Exclude<keyof I["base"]["buttons_pb"], keyof CInButtonStatePB>]: never; };
            viewangles?: {
                x?: number;
                y?: number;
                z?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
            } & { [K_1 in Exclude<keyof I["base"]["viewangles"], keyof CMsgQAngle>]: never; };
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
            } & { [K_2 in Exclude<keyof I["base"]["subtick_moves"][number], keyof CSubtickMoveStep>]: never; })[] & { [K_3 in Exclude<keyof I["base"]["subtick_moves"], keyof {
                button?: string;
                pressed?: boolean;
                when?: number;
            }[]>]: never; };
            move_crc?: string;
        } & { [K_4 in Exclude<keyof I["base"], keyof CBaseUserCmdPB>]: never; };
    } & { [K_5 in Exclude<keyof I, "base">]: never; }>(base?: I): CUserCmdBasePB;
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
            } & { [K_6 in Exclude<keyof I_1["base"]["buttons_pb"], keyof CInButtonStatePB>]: never; };
            viewangles?: {
                x?: number;
                y?: number;
                z?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
            } & { [K_7 in Exclude<keyof I_1["base"]["viewangles"], keyof CMsgQAngle>]: never; };
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
            } & { [K_8 in Exclude<keyof I_1["base"]["subtick_moves"][number], keyof CSubtickMoveStep>]: never; })[] & { [K_9 in Exclude<keyof I_1["base"]["subtick_moves"], keyof {
                button?: string;
                pressed?: boolean;
                when?: number;
            }[]>]: never; };
            move_crc?: string;
        } & { [K_10 in Exclude<keyof I_1["base"], keyof CBaseUserCmdPB>]: never; };
    } & { [K_11 in Exclude<keyof I_1, "base">]: never; }>(object: I_1): CUserCmdBasePB;
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
