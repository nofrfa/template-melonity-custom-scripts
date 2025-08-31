import { ELeagueRegion, Fantasy_Roles } from "./dota_shared_enums";
export declare const protobufPackage = "";
export declare enum ETeamInviteResult {
    TEAM_INVITE_SUCCESS = 0,
    TEAM_INVITE_FAILURE_INVITE_REJECTED = 1,
    TEAM_INVITE_FAILURE_INVITE_TIMEOUT = 2,
    TEAM_INVITE_ERROR_TEAM_AT_MEMBER_LIMIT = 3,
    TEAM_INVITE_ERROR_TEAM_LOCKED = 4,
    TEAM_INVITE_ERROR_INVITEE_NOT_AVAILABLE = 5,
    TEAM_INVITE_ERROR_INVITEE_BUSY = 6,
    TEAM_INVITE_ERROR_INVITEE_ALREADY_MEMBER = 7,
    TEAM_INVITE_ERROR_INVITEE_AT_TEAM_LIMIT = 8,
    TEAM_INVITE_ERROR_INVITEE_INSUFFICIENT_PLAY_TIME = 9,
    TEAM_INVITE_ERROR_INVITER_INVALID_ACCOUNT_TYPE = 10,
    TEAM_INVITE_ERROR_INVITER_NOT_ADMIN = 11,
    TEAM_INVITE_ERROR_INCORRECT_USER_RESPONDED = 12,
    TEAM_INVITE_ERROR_UNSPECIFIED = 13,
    UNRECOGNIZED = -1
}
export declare function eTeamInviteResultFromJSON(object: any): ETeamInviteResult;
export declare function eTeamInviteResultToJSON(object: ETeamInviteResult): string;
export interface CMsgDOTATeamInfo {
    members: CMsgDOTATeamInfo_Member[];
    team_id: number;
    name: string;
    tag: string;
    time_created: number;
    pro: boolean;
    pickup_team: boolean;
    ugc_logo: string;
    ugc_base_logo: string;
    ugc_banner_logo: string;
    ugc_sponsor_logo: string;
    country_code: string;
    url: string;
    wins: number;
    losses: number;
    games_played_total: number;
    games_played_matchmaking: number;
    url_logo: string;
    registered_member_account_ids: number[];
    coach_account_id: number;
    audit_entries: CMsgDOTATeamInfo_AuditEntry[];
    region: ELeagueRegion;
    abbreviation: string;
    member_stats: CMsgDOTATeamInfo_MemberStats[];
    team_stats: CMsgDOTATeamInfo_TeamStats | undefined;
    dpc_results: CMsgDOTATeamInfo_DPCResult[];
    color_primary: string;
    color_secondary: string;
    team_captain: number;
}
export interface CMsgDOTATeamInfo_HeroStats {
    hero_id: number;
    picks: number;
    wins: number;
    bans: number;
    avg_kills: number;
    avg_deaths: number;
    avg_assists: number;
    avg_gpm: number;
    avg_xpm: number;
}
export interface CMsgDOTATeamInfo_MemberStats {
    account_id: number;
    wins_with_team: number;
    losses_with_team: number;
    top_heroes: CMsgDOTATeamInfo_HeroStats[];
    avg_kills: number;
    avg_deaths: number;
    avg_assists: number;
}
export interface CMsgDOTATeamInfo_TeamStats {
    played_heroes: CMsgDOTATeamInfo_HeroStats[];
    farming: number;
    fighting: number;
    versatility: number;
    avg_kills: number;
    avg_deaths: number;
    avg_duration: number;
}
export interface CMsgDOTATeamInfo_DPCResult {
    league_id: number;
    standing: number;
    points: number;
    earnings: number;
    timestamp: number;
}
export interface CMsgDOTATeamInfo_Member {
    account_id: number;
    time_joined: number;
    admin: boolean;
    pro_name: string;
    role: Fantasy_Roles;
    real_name: string;
}
export interface CMsgDOTATeamInfo_AuditEntry {
    audit_action: number;
    timestamp: number;
    account_id: number;
}
export interface CMsgDOTATeamsInfo {
    league_id: number;
    teams: CMsgDOTATeamInfo[];
}
export interface CMsgDOTATeamInfoList {
    teams: CMsgDOTATeamInfo[];
}
export interface CMsgDOTAMyTeamInfoRequest {
}
export interface CMsgDOTACreateTeam {
    name: string;
    tag: string;
    logo: string;
    base_logo: string;
    banner_logo: string;
    sponsor_logo: string;
    country_code: string;
    url: string;
    pickup_team: boolean;
    abbreviation: string;
}
export interface CMsgDOTACreateTeamResponse {
    result: CMsgDOTACreateTeamResponse_Result;
    team_id: number;
}
export declare enum CMsgDOTACreateTeamResponse_Result {
    INVALID = -1,
    SUCCESS = 0,
    NAME_EMPTY = 1,
    NAME_BAD_CHARACTERS = 2,
    NAME_TAKEN = 3,
    NAME_TOO_LONG = 4,
    TAG_EMPTY = 5,
    TAG_BAD_CHARACTERS = 6,
    TAG_TAKEN = 7,
    TAG_TOO_LONG = 8,
    CREATOR_BUSY = 9,
    UNSPECIFIED_ERROR = 10,
    CREATOR_TEAM_LIMIT_REACHED = 11,
    NO_LOGO = 12,
    CREATOR_TEAM_CREATION_COOLDOWN = 13,
    LOGO_UPLOAD_FAILED = 14,
    NAME_CHANGED_TOO_RECENTLY = 15,
    CREATOR_INSUFFICIENT_LEVEL = 16,
    INVALID_ACCOUNT_TYPE = 17,
    UNRECOGNIZED = -1
}
export declare function cMsgDOTACreateTeamResponse_ResultFromJSON(object: any): CMsgDOTACreateTeamResponse_Result;
export declare function cMsgDOTACreateTeamResponse_ResultToJSON(object: CMsgDOTACreateTeamResponse_Result): string;
export interface CMsgDOTAEditTeamDetails {
    team_id: number;
    name: string;
    tag: string;
    logo: string;
    base_logo: string;
    banner_logo: string;
    sponsor_logo: string;
    country_code: string;
    url: string;
    in_use_by_party: boolean;
    abbreviation: string;
}
export interface CMsgDOTAEditTeamDetailsResponse {
    result: CMsgDOTAEditTeamDetailsResponse_Result;
}
export declare enum CMsgDOTAEditTeamDetailsResponse_Result {
    SUCCESS = 0,
    FAILURE_INVALID_ACCOUNT_TYPE = 1,
    FAILURE_NOT_MEMBER = 2,
    FAILURE_TEAM_LOCKED = 3,
    FAILURE_UNSPECIFIED_ERROR = 4,
    UNRECOGNIZED = -1
}
export declare function cMsgDOTAEditTeamDetailsResponse_ResultFromJSON(object: any): CMsgDOTAEditTeamDetailsResponse_Result;
export declare function cMsgDOTAEditTeamDetailsResponse_ResultToJSON(object: CMsgDOTAEditTeamDetailsResponse_Result): string;
export interface CMsgDOTATeamInvite_InviterToGC {
    account_id: number;
    team_id: number;
}
export interface CMsgDOTATeamInvite_GCImmediateResponseToInviter {
    result: ETeamInviteResult;
    invitee_name: string;
    required_play_time: number;
}
export interface CMsgDOTATeamInvite_GCRequestToInvitee {
    inviter_account_id: number;
    team_name: string;
    team_tag: string;
    logo: string;
}
export interface CMsgDOTATeamInvite_InviteeResponseToGC {
    result: ETeamInviteResult;
}
export interface CMsgDOTATeamInvite_GCResponseToInviter {
    result: ETeamInviteResult;
    invitee_name: string;
}
export interface CMsgDOTATeamInvite_GCResponseToInvitee {
    result: ETeamInviteResult;
    team_name: string;
}
export interface CMsgDOTAKickTeamMember {
    account_id: number;
    team_id: number;
}
export interface CMsgDOTAKickTeamMemberResponse {
    result: CMsgDOTAKickTeamMemberResponse_Result;
}
export declare enum CMsgDOTAKickTeamMemberResponse_Result {
    SUCCESS = 0,
    FAILURE_INVALID_ACCOUNT_TYPE = 1,
    FAILURE_KICKER_NOT_ADMIN = 2,
    FAILURE_KICKEE_NOT_MEMBER = 3,
    FAILURE_TEAM_LOCKED = 4,
    FAILURE_UNSPECIFIED_ERROR = 5,
    UNRECOGNIZED = -1
}
export declare function cMsgDOTAKickTeamMemberResponse_ResultFromJSON(object: any): CMsgDOTAKickTeamMemberResponse_Result;
export declare function cMsgDOTAKickTeamMemberResponse_ResultToJSON(object: CMsgDOTAKickTeamMemberResponse_Result): string;
export interface CMsgDOTATransferTeamAdmin {
    new_admin_account_id: number;
    team_id: number;
}
export interface CMsgDOTATransferTeamAdminResponse {
    result: CMsgDOTATransferTeamAdminResponse_Result;
}
export declare enum CMsgDOTATransferTeamAdminResponse_Result {
    SUCCESS = 0,
    FAILURE_INVALID_ACCOUNT_TYPE = 1,
    FAILURE_NOT_ADMIN = 2,
    FAILURE_SAME_ACCOUNT = 3,
    FAILURE_NOT_MEMBER = 4,
    FAILURE_UNSPECIFIED_ERROR = 5,
    UNRECOGNIZED = -1
}
export declare function cMsgDOTATransferTeamAdminResponse_ResultFromJSON(object: any): CMsgDOTATransferTeamAdminResponse_Result;
export declare function cMsgDOTATransferTeamAdminResponse_ResultToJSON(object: CMsgDOTATransferTeamAdminResponse_Result): string;
export interface CMsgDOTALeaveTeam {
    team_id: number;
}
export interface CMsgDOTALeaveTeamResponse {
    result: CMsgDOTALeaveTeamResponse_Result;
}
export declare enum CMsgDOTALeaveTeamResponse_Result {
    SUCCESS = 0,
    FAILURE_NOT_MEMBER = 1,
    FAILURE_TEAM_LOCKED = 2,
    FAILURE_UNSPECIFIED_ERROR = 3,
    UNRECOGNIZED = -1
}
export declare function cMsgDOTALeaveTeamResponse_ResultFromJSON(object: any): CMsgDOTALeaveTeamResponse_Result;
export declare function cMsgDOTALeaveTeamResponse_ResultToJSON(object: CMsgDOTALeaveTeamResponse_Result): string;
export interface CMsgDOTABetaParticipation {
    access_rights: number;
}
export declare const CMsgDOTATeamInfo: {
    fromJSON(object: any): CMsgDOTATeamInfo;
    toJSON(message: CMsgDOTATeamInfo): unknown;
    create<I extends {
        members?: {
            account_id?: number;
            time_joined?: number;
            admin?: boolean;
            pro_name?: string;
            role?: Fantasy_Roles;
            real_name?: string;
        }[];
        team_id?: number;
        name?: string;
        tag?: string;
        time_created?: number;
        pro?: boolean;
        pickup_team?: boolean;
        ugc_logo?: string;
        ugc_base_logo?: string;
        ugc_banner_logo?: string;
        ugc_sponsor_logo?: string;
        country_code?: string;
        url?: string;
        wins?: number;
        losses?: number;
        games_played_total?: number;
        games_played_matchmaking?: number;
        url_logo?: string;
        registered_member_account_ids?: number[];
        coach_account_id?: number;
        audit_entries?: {
            audit_action?: number;
            timestamp?: number;
            account_id?: number;
        }[];
        region?: ELeagueRegion;
        abbreviation?: string;
        member_stats?: {
            account_id?: number;
            wins_with_team?: number;
            losses_with_team?: number;
            top_heroes?: {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            }[];
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
        }[];
        team_stats?: {
            played_heroes?: {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            }[];
            farming?: number;
            fighting?: number;
            versatility?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_duration?: number;
        };
        dpc_results?: {
            league_id?: number;
            standing?: number;
            points?: number;
            earnings?: number;
            timestamp?: number;
        }[];
        color_primary?: string;
        color_secondary?: string;
        team_captain?: number;
    } & {
        members?: {
            account_id?: number;
            time_joined?: number;
            admin?: boolean;
            pro_name?: string;
            role?: Fantasy_Roles;
            real_name?: string;
        }[] & ({
            account_id?: number;
            time_joined?: number;
            admin?: boolean;
            pro_name?: string;
            role?: Fantasy_Roles;
            real_name?: string;
        } & {
            account_id?: number;
            time_joined?: number;
            admin?: boolean;
            pro_name?: string;
            role?: Fantasy_Roles;
            real_name?: string;
        } & { [K in Exclude<keyof I["members"][number], keyof CMsgDOTATeamInfo_Member>]: never; })[] & { [K_1 in Exclude<keyof I["members"], keyof {
            account_id?: number;
            time_joined?: number;
            admin?: boolean;
            pro_name?: string;
            role?: Fantasy_Roles;
            real_name?: string;
        }[]>]: never; };
        team_id?: number;
        name?: string;
        tag?: string;
        time_created?: number;
        pro?: boolean;
        pickup_team?: boolean;
        ugc_logo?: string;
        ugc_base_logo?: string;
        ugc_banner_logo?: string;
        ugc_sponsor_logo?: string;
        country_code?: string;
        url?: string;
        wins?: number;
        losses?: number;
        games_played_total?: number;
        games_played_matchmaking?: number;
        url_logo?: string;
        registered_member_account_ids?: number[] & number[] & { [K_2 in Exclude<keyof I["registered_member_account_ids"], keyof number[]>]: never; };
        coach_account_id?: number;
        audit_entries?: {
            audit_action?: number;
            timestamp?: number;
            account_id?: number;
        }[] & ({
            audit_action?: number;
            timestamp?: number;
            account_id?: number;
        } & {
            audit_action?: number;
            timestamp?: number;
            account_id?: number;
        } & { [K_3 in Exclude<keyof I["audit_entries"][number], keyof CMsgDOTATeamInfo_AuditEntry>]: never; })[] & { [K_4 in Exclude<keyof I["audit_entries"], keyof {
            audit_action?: number;
            timestamp?: number;
            account_id?: number;
        }[]>]: never; };
        region?: ELeagueRegion;
        abbreviation?: string;
        member_stats?: {
            account_id?: number;
            wins_with_team?: number;
            losses_with_team?: number;
            top_heroes?: {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            }[];
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
        }[] & ({
            account_id?: number;
            wins_with_team?: number;
            losses_with_team?: number;
            top_heroes?: {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            }[];
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
        } & {
            account_id?: number;
            wins_with_team?: number;
            losses_with_team?: number;
            top_heroes?: {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            }[] & ({
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            } & {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            } & { [K_5 in Exclude<keyof I["member_stats"][number]["top_heroes"][number], keyof CMsgDOTATeamInfo_HeroStats>]: never; })[] & { [K_6 in Exclude<keyof I["member_stats"][number]["top_heroes"], keyof {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            }[]>]: never; };
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
        } & { [K_7 in Exclude<keyof I["member_stats"][number], keyof CMsgDOTATeamInfo_MemberStats>]: never; })[] & { [K_8 in Exclude<keyof I["member_stats"], keyof {
            account_id?: number;
            wins_with_team?: number;
            losses_with_team?: number;
            top_heroes?: {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            }[];
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
        }[]>]: never; };
        team_stats?: {
            played_heroes?: {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            }[];
            farming?: number;
            fighting?: number;
            versatility?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_duration?: number;
        } & {
            played_heroes?: {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            }[] & ({
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            } & {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            } & { [K_9 in Exclude<keyof I["team_stats"]["played_heroes"][number], keyof CMsgDOTATeamInfo_HeroStats>]: never; })[] & { [K_10 in Exclude<keyof I["team_stats"]["played_heroes"], keyof {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            }[]>]: never; };
            farming?: number;
            fighting?: number;
            versatility?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_duration?: number;
        } & { [K_11 in Exclude<keyof I["team_stats"], keyof CMsgDOTATeamInfo_TeamStats>]: never; };
        dpc_results?: {
            league_id?: number;
            standing?: number;
            points?: number;
            earnings?: number;
            timestamp?: number;
        }[] & ({
            league_id?: number;
            standing?: number;
            points?: number;
            earnings?: number;
            timestamp?: number;
        } & {
            league_id?: number;
            standing?: number;
            points?: number;
            earnings?: number;
            timestamp?: number;
        } & { [K_12 in Exclude<keyof I["dpc_results"][number], keyof CMsgDOTATeamInfo_DPCResult>]: never; })[] & { [K_13 in Exclude<keyof I["dpc_results"], keyof {
            league_id?: number;
            standing?: number;
            points?: number;
            earnings?: number;
            timestamp?: number;
        }[]>]: never; };
        color_primary?: string;
        color_secondary?: string;
        team_captain?: number;
    } & { [K_14 in Exclude<keyof I, keyof CMsgDOTATeamInfo>]: never; }>(base?: I): CMsgDOTATeamInfo;
    fromPartial<I_1 extends {
        members?: {
            account_id?: number;
            time_joined?: number;
            admin?: boolean;
            pro_name?: string;
            role?: Fantasy_Roles;
            real_name?: string;
        }[];
        team_id?: number;
        name?: string;
        tag?: string;
        time_created?: number;
        pro?: boolean;
        pickup_team?: boolean;
        ugc_logo?: string;
        ugc_base_logo?: string;
        ugc_banner_logo?: string;
        ugc_sponsor_logo?: string;
        country_code?: string;
        url?: string;
        wins?: number;
        losses?: number;
        games_played_total?: number;
        games_played_matchmaking?: number;
        url_logo?: string;
        registered_member_account_ids?: number[];
        coach_account_id?: number;
        audit_entries?: {
            audit_action?: number;
            timestamp?: number;
            account_id?: number;
        }[];
        region?: ELeagueRegion;
        abbreviation?: string;
        member_stats?: {
            account_id?: number;
            wins_with_team?: number;
            losses_with_team?: number;
            top_heroes?: {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            }[];
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
        }[];
        team_stats?: {
            played_heroes?: {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            }[];
            farming?: number;
            fighting?: number;
            versatility?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_duration?: number;
        };
        dpc_results?: {
            league_id?: number;
            standing?: number;
            points?: number;
            earnings?: number;
            timestamp?: number;
        }[];
        color_primary?: string;
        color_secondary?: string;
        team_captain?: number;
    } & {
        members?: {
            account_id?: number;
            time_joined?: number;
            admin?: boolean;
            pro_name?: string;
            role?: Fantasy_Roles;
            real_name?: string;
        }[] & ({
            account_id?: number;
            time_joined?: number;
            admin?: boolean;
            pro_name?: string;
            role?: Fantasy_Roles;
            real_name?: string;
        } & {
            account_id?: number;
            time_joined?: number;
            admin?: boolean;
            pro_name?: string;
            role?: Fantasy_Roles;
            real_name?: string;
        } & { [K_15 in Exclude<keyof I_1["members"][number], keyof CMsgDOTATeamInfo_Member>]: never; })[] & { [K_16 in Exclude<keyof I_1["members"], keyof {
            account_id?: number;
            time_joined?: number;
            admin?: boolean;
            pro_name?: string;
            role?: Fantasy_Roles;
            real_name?: string;
        }[]>]: never; };
        team_id?: number;
        name?: string;
        tag?: string;
        time_created?: number;
        pro?: boolean;
        pickup_team?: boolean;
        ugc_logo?: string;
        ugc_base_logo?: string;
        ugc_banner_logo?: string;
        ugc_sponsor_logo?: string;
        country_code?: string;
        url?: string;
        wins?: number;
        losses?: number;
        games_played_total?: number;
        games_played_matchmaking?: number;
        url_logo?: string;
        registered_member_account_ids?: number[] & number[] & { [K_17 in Exclude<keyof I_1["registered_member_account_ids"], keyof number[]>]: never; };
        coach_account_id?: number;
        audit_entries?: {
            audit_action?: number;
            timestamp?: number;
            account_id?: number;
        }[] & ({
            audit_action?: number;
            timestamp?: number;
            account_id?: number;
        } & {
            audit_action?: number;
            timestamp?: number;
            account_id?: number;
        } & { [K_18 in Exclude<keyof I_1["audit_entries"][number], keyof CMsgDOTATeamInfo_AuditEntry>]: never; })[] & { [K_19 in Exclude<keyof I_1["audit_entries"], keyof {
            audit_action?: number;
            timestamp?: number;
            account_id?: number;
        }[]>]: never; };
        region?: ELeagueRegion;
        abbreviation?: string;
        member_stats?: {
            account_id?: number;
            wins_with_team?: number;
            losses_with_team?: number;
            top_heroes?: {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            }[];
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
        }[] & ({
            account_id?: number;
            wins_with_team?: number;
            losses_with_team?: number;
            top_heroes?: {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            }[];
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
        } & {
            account_id?: number;
            wins_with_team?: number;
            losses_with_team?: number;
            top_heroes?: {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            }[] & ({
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            } & {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            } & { [K_20 in Exclude<keyof I_1["member_stats"][number]["top_heroes"][number], keyof CMsgDOTATeamInfo_HeroStats>]: never; })[] & { [K_21 in Exclude<keyof I_1["member_stats"][number]["top_heroes"], keyof {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            }[]>]: never; };
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
        } & { [K_22 in Exclude<keyof I_1["member_stats"][number], keyof CMsgDOTATeamInfo_MemberStats>]: never; })[] & { [K_23 in Exclude<keyof I_1["member_stats"], keyof {
            account_id?: number;
            wins_with_team?: number;
            losses_with_team?: number;
            top_heroes?: {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            }[];
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
        }[]>]: never; };
        team_stats?: {
            played_heroes?: {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            }[];
            farming?: number;
            fighting?: number;
            versatility?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_duration?: number;
        } & {
            played_heroes?: {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            }[] & ({
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            } & {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            } & { [K_24 in Exclude<keyof I_1["team_stats"]["played_heroes"][number], keyof CMsgDOTATeamInfo_HeroStats>]: never; })[] & { [K_25 in Exclude<keyof I_1["team_stats"]["played_heroes"], keyof {
                hero_id?: number;
                picks?: number;
                wins?: number;
                bans?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
                avg_gpm?: number;
                avg_xpm?: number;
            }[]>]: never; };
            farming?: number;
            fighting?: number;
            versatility?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_duration?: number;
        } & { [K_26 in Exclude<keyof I_1["team_stats"], keyof CMsgDOTATeamInfo_TeamStats>]: never; };
        dpc_results?: {
            league_id?: number;
            standing?: number;
            points?: number;
            earnings?: number;
            timestamp?: number;
        }[] & ({
            league_id?: number;
            standing?: number;
            points?: number;
            earnings?: number;
            timestamp?: number;
        } & {
            league_id?: number;
            standing?: number;
            points?: number;
            earnings?: number;
            timestamp?: number;
        } & { [K_27 in Exclude<keyof I_1["dpc_results"][number], keyof CMsgDOTATeamInfo_DPCResult>]: never; })[] & { [K_28 in Exclude<keyof I_1["dpc_results"], keyof {
            league_id?: number;
            standing?: number;
            points?: number;
            earnings?: number;
            timestamp?: number;
        }[]>]: never; };
        color_primary?: string;
        color_secondary?: string;
        team_captain?: number;
    } & { [K_29 in Exclude<keyof I_1, keyof CMsgDOTATeamInfo>]: never; }>(object: I_1): CMsgDOTATeamInfo;
};
export declare const CMsgDOTATeamInfo_HeroStats: {
    fromJSON(object: any): CMsgDOTATeamInfo_HeroStats;
    toJSON(message: CMsgDOTATeamInfo_HeroStats): unknown;
    create<I extends {
        hero_id?: number;
        picks?: number;
        wins?: number;
        bans?: number;
        avg_kills?: number;
        avg_deaths?: number;
        avg_assists?: number;
        avg_gpm?: number;
        avg_xpm?: number;
    } & {
        hero_id?: number;
        picks?: number;
        wins?: number;
        bans?: number;
        avg_kills?: number;
        avg_deaths?: number;
        avg_assists?: number;
        avg_gpm?: number;
        avg_xpm?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTATeamInfo_HeroStats>]: never; }>(base?: I): CMsgDOTATeamInfo_HeroStats;
    fromPartial<I_1 extends {
        hero_id?: number;
        picks?: number;
        wins?: number;
        bans?: number;
        avg_kills?: number;
        avg_deaths?: number;
        avg_assists?: number;
        avg_gpm?: number;
        avg_xpm?: number;
    } & {
        hero_id?: number;
        picks?: number;
        wins?: number;
        bans?: number;
        avg_kills?: number;
        avg_deaths?: number;
        avg_assists?: number;
        avg_gpm?: number;
        avg_xpm?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTATeamInfo_HeroStats>]: never; }>(object: I_1): CMsgDOTATeamInfo_HeroStats;
};
export declare const CMsgDOTATeamInfo_MemberStats: {
    fromJSON(object: any): CMsgDOTATeamInfo_MemberStats;
    toJSON(message: CMsgDOTATeamInfo_MemberStats): unknown;
    create<I extends {
        account_id?: number;
        wins_with_team?: number;
        losses_with_team?: number;
        top_heroes?: {
            hero_id?: number;
            picks?: number;
            wins?: number;
            bans?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
            avg_gpm?: number;
            avg_xpm?: number;
        }[];
        avg_kills?: number;
        avg_deaths?: number;
        avg_assists?: number;
    } & {
        account_id?: number;
        wins_with_team?: number;
        losses_with_team?: number;
        top_heroes?: {
            hero_id?: number;
            picks?: number;
            wins?: number;
            bans?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
            avg_gpm?: number;
            avg_xpm?: number;
        }[] & ({
            hero_id?: number;
            picks?: number;
            wins?: number;
            bans?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
            avg_gpm?: number;
            avg_xpm?: number;
        } & {
            hero_id?: number;
            picks?: number;
            wins?: number;
            bans?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
            avg_gpm?: number;
            avg_xpm?: number;
        } & { [K in Exclude<keyof I["top_heroes"][number], keyof CMsgDOTATeamInfo_HeroStats>]: never; })[] & { [K_1 in Exclude<keyof I["top_heroes"], keyof {
            hero_id?: number;
            picks?: number;
            wins?: number;
            bans?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
            avg_gpm?: number;
            avg_xpm?: number;
        }[]>]: never; };
        avg_kills?: number;
        avg_deaths?: number;
        avg_assists?: number;
    } & { [K_2 in Exclude<keyof I, keyof CMsgDOTATeamInfo_MemberStats>]: never; }>(base?: I): CMsgDOTATeamInfo_MemberStats;
    fromPartial<I_1 extends {
        account_id?: number;
        wins_with_team?: number;
        losses_with_team?: number;
        top_heroes?: {
            hero_id?: number;
            picks?: number;
            wins?: number;
            bans?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
            avg_gpm?: number;
            avg_xpm?: number;
        }[];
        avg_kills?: number;
        avg_deaths?: number;
        avg_assists?: number;
    } & {
        account_id?: number;
        wins_with_team?: number;
        losses_with_team?: number;
        top_heroes?: {
            hero_id?: number;
            picks?: number;
            wins?: number;
            bans?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
            avg_gpm?: number;
            avg_xpm?: number;
        }[] & ({
            hero_id?: number;
            picks?: number;
            wins?: number;
            bans?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
            avg_gpm?: number;
            avg_xpm?: number;
        } & {
            hero_id?: number;
            picks?: number;
            wins?: number;
            bans?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
            avg_gpm?: number;
            avg_xpm?: number;
        } & { [K_3 in Exclude<keyof I_1["top_heroes"][number], keyof CMsgDOTATeamInfo_HeroStats>]: never; })[] & { [K_4 in Exclude<keyof I_1["top_heroes"], keyof {
            hero_id?: number;
            picks?: number;
            wins?: number;
            bans?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
            avg_gpm?: number;
            avg_xpm?: number;
        }[]>]: never; };
        avg_kills?: number;
        avg_deaths?: number;
        avg_assists?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgDOTATeamInfo_MemberStats>]: never; }>(object: I_1): CMsgDOTATeamInfo_MemberStats;
};
export declare const CMsgDOTATeamInfo_TeamStats: {
    fromJSON(object: any): CMsgDOTATeamInfo_TeamStats;
    toJSON(message: CMsgDOTATeamInfo_TeamStats): unknown;
    create<I extends {
        played_heroes?: {
            hero_id?: number;
            picks?: number;
            wins?: number;
            bans?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
            avg_gpm?: number;
            avg_xpm?: number;
        }[];
        farming?: number;
        fighting?: number;
        versatility?: number;
        avg_kills?: number;
        avg_deaths?: number;
        avg_duration?: number;
    } & {
        played_heroes?: {
            hero_id?: number;
            picks?: number;
            wins?: number;
            bans?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
            avg_gpm?: number;
            avg_xpm?: number;
        }[] & ({
            hero_id?: number;
            picks?: number;
            wins?: number;
            bans?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
            avg_gpm?: number;
            avg_xpm?: number;
        } & {
            hero_id?: number;
            picks?: number;
            wins?: number;
            bans?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
            avg_gpm?: number;
            avg_xpm?: number;
        } & { [K in Exclude<keyof I["played_heroes"][number], keyof CMsgDOTATeamInfo_HeroStats>]: never; })[] & { [K_1 in Exclude<keyof I["played_heroes"], keyof {
            hero_id?: number;
            picks?: number;
            wins?: number;
            bans?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
            avg_gpm?: number;
            avg_xpm?: number;
        }[]>]: never; };
        farming?: number;
        fighting?: number;
        versatility?: number;
        avg_kills?: number;
        avg_deaths?: number;
        avg_duration?: number;
    } & { [K_2 in Exclude<keyof I, keyof CMsgDOTATeamInfo_TeamStats>]: never; }>(base?: I): CMsgDOTATeamInfo_TeamStats;
    fromPartial<I_1 extends {
        played_heroes?: {
            hero_id?: number;
            picks?: number;
            wins?: number;
            bans?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
            avg_gpm?: number;
            avg_xpm?: number;
        }[];
        farming?: number;
        fighting?: number;
        versatility?: number;
        avg_kills?: number;
        avg_deaths?: number;
        avg_duration?: number;
    } & {
        played_heroes?: {
            hero_id?: number;
            picks?: number;
            wins?: number;
            bans?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
            avg_gpm?: number;
            avg_xpm?: number;
        }[] & ({
            hero_id?: number;
            picks?: number;
            wins?: number;
            bans?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
            avg_gpm?: number;
            avg_xpm?: number;
        } & {
            hero_id?: number;
            picks?: number;
            wins?: number;
            bans?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
            avg_gpm?: number;
            avg_xpm?: number;
        } & { [K_3 in Exclude<keyof I_1["played_heroes"][number], keyof CMsgDOTATeamInfo_HeroStats>]: never; })[] & { [K_4 in Exclude<keyof I_1["played_heroes"], keyof {
            hero_id?: number;
            picks?: number;
            wins?: number;
            bans?: number;
            avg_kills?: number;
            avg_deaths?: number;
            avg_assists?: number;
            avg_gpm?: number;
            avg_xpm?: number;
        }[]>]: never; };
        farming?: number;
        fighting?: number;
        versatility?: number;
        avg_kills?: number;
        avg_deaths?: number;
        avg_duration?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgDOTATeamInfo_TeamStats>]: never; }>(object: I_1): CMsgDOTATeamInfo_TeamStats;
};
export declare const CMsgDOTATeamInfo_DPCResult: {
    fromJSON(object: any): CMsgDOTATeamInfo_DPCResult;
    toJSON(message: CMsgDOTATeamInfo_DPCResult): unknown;
    create<I extends {
        league_id?: number;
        standing?: number;
        points?: number;
        earnings?: number;
        timestamp?: number;
    } & {
        league_id?: number;
        standing?: number;
        points?: number;
        earnings?: number;
        timestamp?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTATeamInfo_DPCResult>]: never; }>(base?: I): CMsgDOTATeamInfo_DPCResult;
    fromPartial<I_1 extends {
        league_id?: number;
        standing?: number;
        points?: number;
        earnings?: number;
        timestamp?: number;
    } & {
        league_id?: number;
        standing?: number;
        points?: number;
        earnings?: number;
        timestamp?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTATeamInfo_DPCResult>]: never; }>(object: I_1): CMsgDOTATeamInfo_DPCResult;
};
export declare const CMsgDOTATeamInfo_Member: {
    fromJSON(object: any): CMsgDOTATeamInfo_Member;
    toJSON(message: CMsgDOTATeamInfo_Member): unknown;
    create<I extends {
        account_id?: number;
        time_joined?: number;
        admin?: boolean;
        pro_name?: string;
        role?: Fantasy_Roles;
        real_name?: string;
    } & {
        account_id?: number;
        time_joined?: number;
        admin?: boolean;
        pro_name?: string;
        role?: Fantasy_Roles;
        real_name?: string;
    } & { [K in Exclude<keyof I, keyof CMsgDOTATeamInfo_Member>]: never; }>(base?: I): CMsgDOTATeamInfo_Member;
    fromPartial<I_1 extends {
        account_id?: number;
        time_joined?: number;
        admin?: boolean;
        pro_name?: string;
        role?: Fantasy_Roles;
        real_name?: string;
    } & {
        account_id?: number;
        time_joined?: number;
        admin?: boolean;
        pro_name?: string;
        role?: Fantasy_Roles;
        real_name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTATeamInfo_Member>]: never; }>(object: I_1): CMsgDOTATeamInfo_Member;
};
export declare const CMsgDOTATeamInfo_AuditEntry: {
    fromJSON(object: any): CMsgDOTATeamInfo_AuditEntry;
    toJSON(message: CMsgDOTATeamInfo_AuditEntry): unknown;
    create<I extends {
        audit_action?: number;
        timestamp?: number;
        account_id?: number;
    } & {
        audit_action?: number;
        timestamp?: number;
        account_id?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTATeamInfo_AuditEntry>]: never; }>(base?: I): CMsgDOTATeamInfo_AuditEntry;
    fromPartial<I_1 extends {
        audit_action?: number;
        timestamp?: number;
        account_id?: number;
    } & {
        audit_action?: number;
        timestamp?: number;
        account_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTATeamInfo_AuditEntry>]: never; }>(object: I_1): CMsgDOTATeamInfo_AuditEntry;
};
export declare const CMsgDOTATeamsInfo: {
    fromJSON(object: any): CMsgDOTATeamsInfo;
    toJSON(message: CMsgDOTATeamsInfo): unknown;
    create<I extends {
        league_id?: number;
        teams?: {
            members?: {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[];
            team_id?: number;
            name?: string;
            tag?: string;
            time_created?: number;
            pro?: boolean;
            pickup_team?: boolean;
            ugc_logo?: string;
            ugc_base_logo?: string;
            ugc_banner_logo?: string;
            ugc_sponsor_logo?: string;
            country_code?: string;
            url?: string;
            wins?: number;
            losses?: number;
            games_played_total?: number;
            games_played_matchmaking?: number;
            url_logo?: string;
            registered_member_account_ids?: number[];
            coach_account_id?: number;
            audit_entries?: {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[];
            region?: ELeagueRegion;
            abbreviation?: string;
            member_stats?: {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[];
            team_stats?: {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            };
            dpc_results?: {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[];
            color_primary?: string;
            color_secondary?: string;
            team_captain?: number;
        }[];
    } & {
        league_id?: number;
        teams?: {
            members?: {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[];
            team_id?: number;
            name?: string;
            tag?: string;
            time_created?: number;
            pro?: boolean;
            pickup_team?: boolean;
            ugc_logo?: string;
            ugc_base_logo?: string;
            ugc_banner_logo?: string;
            ugc_sponsor_logo?: string;
            country_code?: string;
            url?: string;
            wins?: number;
            losses?: number;
            games_played_total?: number;
            games_played_matchmaking?: number;
            url_logo?: string;
            registered_member_account_ids?: number[];
            coach_account_id?: number;
            audit_entries?: {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[];
            region?: ELeagueRegion;
            abbreviation?: string;
            member_stats?: {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[];
            team_stats?: {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            };
            dpc_results?: {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[];
            color_primary?: string;
            color_secondary?: string;
            team_captain?: number;
        }[] & ({
            members?: {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[];
            team_id?: number;
            name?: string;
            tag?: string;
            time_created?: number;
            pro?: boolean;
            pickup_team?: boolean;
            ugc_logo?: string;
            ugc_base_logo?: string;
            ugc_banner_logo?: string;
            ugc_sponsor_logo?: string;
            country_code?: string;
            url?: string;
            wins?: number;
            losses?: number;
            games_played_total?: number;
            games_played_matchmaking?: number;
            url_logo?: string;
            registered_member_account_ids?: number[];
            coach_account_id?: number;
            audit_entries?: {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[];
            region?: ELeagueRegion;
            abbreviation?: string;
            member_stats?: {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[];
            team_stats?: {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            };
            dpc_results?: {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[];
            color_primary?: string;
            color_secondary?: string;
            team_captain?: number;
        } & {
            members?: {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[] & ({
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            } & {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            } & { [K in Exclude<keyof I["teams"][number]["members"][number], keyof CMsgDOTATeamInfo_Member>]: never; })[] & { [K_1 in Exclude<keyof I["teams"][number]["members"], keyof {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[]>]: never; };
            team_id?: number;
            name?: string;
            tag?: string;
            time_created?: number;
            pro?: boolean;
            pickup_team?: boolean;
            ugc_logo?: string;
            ugc_base_logo?: string;
            ugc_banner_logo?: string;
            ugc_sponsor_logo?: string;
            country_code?: string;
            url?: string;
            wins?: number;
            losses?: number;
            games_played_total?: number;
            games_played_matchmaking?: number;
            url_logo?: string;
            registered_member_account_ids?: number[] & number[] & { [K_2 in Exclude<keyof I["teams"][number]["registered_member_account_ids"], keyof number[]>]: never; };
            coach_account_id?: number;
            audit_entries?: {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[] & ({
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            } & {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            } & { [K_3 in Exclude<keyof I["teams"][number]["audit_entries"][number], keyof CMsgDOTATeamInfo_AuditEntry>]: never; })[] & { [K_4 in Exclude<keyof I["teams"][number]["audit_entries"], keyof {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[]>]: never; };
            region?: ELeagueRegion;
            abbreviation?: string;
            member_stats?: {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[] & ({
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            } & {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[] & ({
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                } & {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                } & { [K_5 in Exclude<keyof I["teams"][number]["member_stats"][number]["top_heroes"][number], keyof CMsgDOTATeamInfo_HeroStats>]: never; })[] & { [K_6 in Exclude<keyof I["teams"][number]["member_stats"][number]["top_heroes"], keyof {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[]>]: never; };
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            } & { [K_7 in Exclude<keyof I["teams"][number]["member_stats"][number], keyof CMsgDOTATeamInfo_MemberStats>]: never; })[] & { [K_8 in Exclude<keyof I["teams"][number]["member_stats"], keyof {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[]>]: never; };
            team_stats?: {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            } & {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[] & ({
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                } & {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                } & { [K_9 in Exclude<keyof I["teams"][number]["team_stats"]["played_heroes"][number], keyof CMsgDOTATeamInfo_HeroStats>]: never; })[] & { [K_10 in Exclude<keyof I["teams"][number]["team_stats"]["played_heroes"], keyof {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[]>]: never; };
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            } & { [K_11 in Exclude<keyof I["teams"][number]["team_stats"], keyof CMsgDOTATeamInfo_TeamStats>]: never; };
            dpc_results?: {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[] & ({
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            } & {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            } & { [K_12 in Exclude<keyof I["teams"][number]["dpc_results"][number], keyof CMsgDOTATeamInfo_DPCResult>]: never; })[] & { [K_13 in Exclude<keyof I["teams"][number]["dpc_results"], keyof {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[]>]: never; };
            color_primary?: string;
            color_secondary?: string;
            team_captain?: number;
        } & { [K_14 in Exclude<keyof I["teams"][number], keyof CMsgDOTATeamInfo>]: never; })[] & { [K_15 in Exclude<keyof I["teams"], keyof {
            members?: {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[];
            team_id?: number;
            name?: string;
            tag?: string;
            time_created?: number;
            pro?: boolean;
            pickup_team?: boolean;
            ugc_logo?: string;
            ugc_base_logo?: string;
            ugc_banner_logo?: string;
            ugc_sponsor_logo?: string;
            country_code?: string;
            url?: string;
            wins?: number;
            losses?: number;
            games_played_total?: number;
            games_played_matchmaking?: number;
            url_logo?: string;
            registered_member_account_ids?: number[];
            coach_account_id?: number;
            audit_entries?: {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[];
            region?: ELeagueRegion;
            abbreviation?: string;
            member_stats?: {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[];
            team_stats?: {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            };
            dpc_results?: {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[];
            color_primary?: string;
            color_secondary?: string;
            team_captain?: number;
        }[]>]: never; };
    } & { [K_16 in Exclude<keyof I, keyof CMsgDOTATeamsInfo>]: never; }>(base?: I): CMsgDOTATeamsInfo;
    fromPartial<I_1 extends {
        league_id?: number;
        teams?: {
            members?: {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[];
            team_id?: number;
            name?: string;
            tag?: string;
            time_created?: number;
            pro?: boolean;
            pickup_team?: boolean;
            ugc_logo?: string;
            ugc_base_logo?: string;
            ugc_banner_logo?: string;
            ugc_sponsor_logo?: string;
            country_code?: string;
            url?: string;
            wins?: number;
            losses?: number;
            games_played_total?: number;
            games_played_matchmaking?: number;
            url_logo?: string;
            registered_member_account_ids?: number[];
            coach_account_id?: number;
            audit_entries?: {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[];
            region?: ELeagueRegion;
            abbreviation?: string;
            member_stats?: {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[];
            team_stats?: {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            };
            dpc_results?: {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[];
            color_primary?: string;
            color_secondary?: string;
            team_captain?: number;
        }[];
    } & {
        league_id?: number;
        teams?: {
            members?: {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[];
            team_id?: number;
            name?: string;
            tag?: string;
            time_created?: number;
            pro?: boolean;
            pickup_team?: boolean;
            ugc_logo?: string;
            ugc_base_logo?: string;
            ugc_banner_logo?: string;
            ugc_sponsor_logo?: string;
            country_code?: string;
            url?: string;
            wins?: number;
            losses?: number;
            games_played_total?: number;
            games_played_matchmaking?: number;
            url_logo?: string;
            registered_member_account_ids?: number[];
            coach_account_id?: number;
            audit_entries?: {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[];
            region?: ELeagueRegion;
            abbreviation?: string;
            member_stats?: {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[];
            team_stats?: {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            };
            dpc_results?: {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[];
            color_primary?: string;
            color_secondary?: string;
            team_captain?: number;
        }[] & ({
            members?: {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[];
            team_id?: number;
            name?: string;
            tag?: string;
            time_created?: number;
            pro?: boolean;
            pickup_team?: boolean;
            ugc_logo?: string;
            ugc_base_logo?: string;
            ugc_banner_logo?: string;
            ugc_sponsor_logo?: string;
            country_code?: string;
            url?: string;
            wins?: number;
            losses?: number;
            games_played_total?: number;
            games_played_matchmaking?: number;
            url_logo?: string;
            registered_member_account_ids?: number[];
            coach_account_id?: number;
            audit_entries?: {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[];
            region?: ELeagueRegion;
            abbreviation?: string;
            member_stats?: {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[];
            team_stats?: {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            };
            dpc_results?: {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[];
            color_primary?: string;
            color_secondary?: string;
            team_captain?: number;
        } & {
            members?: {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[] & ({
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            } & {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            } & { [K_17 in Exclude<keyof I_1["teams"][number]["members"][number], keyof CMsgDOTATeamInfo_Member>]: never; })[] & { [K_18 in Exclude<keyof I_1["teams"][number]["members"], keyof {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[]>]: never; };
            team_id?: number;
            name?: string;
            tag?: string;
            time_created?: number;
            pro?: boolean;
            pickup_team?: boolean;
            ugc_logo?: string;
            ugc_base_logo?: string;
            ugc_banner_logo?: string;
            ugc_sponsor_logo?: string;
            country_code?: string;
            url?: string;
            wins?: number;
            losses?: number;
            games_played_total?: number;
            games_played_matchmaking?: number;
            url_logo?: string;
            registered_member_account_ids?: number[] & number[] & { [K_19 in Exclude<keyof I_1["teams"][number]["registered_member_account_ids"], keyof number[]>]: never; };
            coach_account_id?: number;
            audit_entries?: {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[] & ({
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            } & {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            } & { [K_20 in Exclude<keyof I_1["teams"][number]["audit_entries"][number], keyof CMsgDOTATeamInfo_AuditEntry>]: never; })[] & { [K_21 in Exclude<keyof I_1["teams"][number]["audit_entries"], keyof {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[]>]: never; };
            region?: ELeagueRegion;
            abbreviation?: string;
            member_stats?: {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[] & ({
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            } & {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[] & ({
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                } & {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                } & { [K_22 in Exclude<keyof I_1["teams"][number]["member_stats"][number]["top_heroes"][number], keyof CMsgDOTATeamInfo_HeroStats>]: never; })[] & { [K_23 in Exclude<keyof I_1["teams"][number]["member_stats"][number]["top_heroes"], keyof {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[]>]: never; };
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            } & { [K_24 in Exclude<keyof I_1["teams"][number]["member_stats"][number], keyof CMsgDOTATeamInfo_MemberStats>]: never; })[] & { [K_25 in Exclude<keyof I_1["teams"][number]["member_stats"], keyof {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[]>]: never; };
            team_stats?: {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            } & {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[] & ({
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                } & {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                } & { [K_26 in Exclude<keyof I_1["teams"][number]["team_stats"]["played_heroes"][number], keyof CMsgDOTATeamInfo_HeroStats>]: never; })[] & { [K_27 in Exclude<keyof I_1["teams"][number]["team_stats"]["played_heroes"], keyof {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[]>]: never; };
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            } & { [K_28 in Exclude<keyof I_1["teams"][number]["team_stats"], keyof CMsgDOTATeamInfo_TeamStats>]: never; };
            dpc_results?: {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[] & ({
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            } & {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            } & { [K_29 in Exclude<keyof I_1["teams"][number]["dpc_results"][number], keyof CMsgDOTATeamInfo_DPCResult>]: never; })[] & { [K_30 in Exclude<keyof I_1["teams"][number]["dpc_results"], keyof {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[]>]: never; };
            color_primary?: string;
            color_secondary?: string;
            team_captain?: number;
        } & { [K_31 in Exclude<keyof I_1["teams"][number], keyof CMsgDOTATeamInfo>]: never; })[] & { [K_32 in Exclude<keyof I_1["teams"], keyof {
            members?: {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[];
            team_id?: number;
            name?: string;
            tag?: string;
            time_created?: number;
            pro?: boolean;
            pickup_team?: boolean;
            ugc_logo?: string;
            ugc_base_logo?: string;
            ugc_banner_logo?: string;
            ugc_sponsor_logo?: string;
            country_code?: string;
            url?: string;
            wins?: number;
            losses?: number;
            games_played_total?: number;
            games_played_matchmaking?: number;
            url_logo?: string;
            registered_member_account_ids?: number[];
            coach_account_id?: number;
            audit_entries?: {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[];
            region?: ELeagueRegion;
            abbreviation?: string;
            member_stats?: {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[];
            team_stats?: {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            };
            dpc_results?: {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[];
            color_primary?: string;
            color_secondary?: string;
            team_captain?: number;
        }[]>]: never; };
    } & { [K_33 in Exclude<keyof I_1, keyof CMsgDOTATeamsInfo>]: never; }>(object: I_1): CMsgDOTATeamsInfo;
};
export declare const CMsgDOTATeamInfoList: {
    fromJSON(object: any): CMsgDOTATeamInfoList;
    toJSON(message: CMsgDOTATeamInfoList): unknown;
    create<I extends {
        teams?: {
            members?: {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[];
            team_id?: number;
            name?: string;
            tag?: string;
            time_created?: number;
            pro?: boolean;
            pickup_team?: boolean;
            ugc_logo?: string;
            ugc_base_logo?: string;
            ugc_banner_logo?: string;
            ugc_sponsor_logo?: string;
            country_code?: string;
            url?: string;
            wins?: number;
            losses?: number;
            games_played_total?: number;
            games_played_matchmaking?: number;
            url_logo?: string;
            registered_member_account_ids?: number[];
            coach_account_id?: number;
            audit_entries?: {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[];
            region?: ELeagueRegion;
            abbreviation?: string;
            member_stats?: {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[];
            team_stats?: {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            };
            dpc_results?: {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[];
            color_primary?: string;
            color_secondary?: string;
            team_captain?: number;
        }[];
    } & {
        teams?: {
            members?: {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[];
            team_id?: number;
            name?: string;
            tag?: string;
            time_created?: number;
            pro?: boolean;
            pickup_team?: boolean;
            ugc_logo?: string;
            ugc_base_logo?: string;
            ugc_banner_logo?: string;
            ugc_sponsor_logo?: string;
            country_code?: string;
            url?: string;
            wins?: number;
            losses?: number;
            games_played_total?: number;
            games_played_matchmaking?: number;
            url_logo?: string;
            registered_member_account_ids?: number[];
            coach_account_id?: number;
            audit_entries?: {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[];
            region?: ELeagueRegion;
            abbreviation?: string;
            member_stats?: {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[];
            team_stats?: {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            };
            dpc_results?: {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[];
            color_primary?: string;
            color_secondary?: string;
            team_captain?: number;
        }[] & ({
            members?: {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[];
            team_id?: number;
            name?: string;
            tag?: string;
            time_created?: number;
            pro?: boolean;
            pickup_team?: boolean;
            ugc_logo?: string;
            ugc_base_logo?: string;
            ugc_banner_logo?: string;
            ugc_sponsor_logo?: string;
            country_code?: string;
            url?: string;
            wins?: number;
            losses?: number;
            games_played_total?: number;
            games_played_matchmaking?: number;
            url_logo?: string;
            registered_member_account_ids?: number[];
            coach_account_id?: number;
            audit_entries?: {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[];
            region?: ELeagueRegion;
            abbreviation?: string;
            member_stats?: {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[];
            team_stats?: {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            };
            dpc_results?: {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[];
            color_primary?: string;
            color_secondary?: string;
            team_captain?: number;
        } & {
            members?: {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[] & ({
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            } & {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            } & { [K in Exclude<keyof I["teams"][number]["members"][number], keyof CMsgDOTATeamInfo_Member>]: never; })[] & { [K_1 in Exclude<keyof I["teams"][number]["members"], keyof {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[]>]: never; };
            team_id?: number;
            name?: string;
            tag?: string;
            time_created?: number;
            pro?: boolean;
            pickup_team?: boolean;
            ugc_logo?: string;
            ugc_base_logo?: string;
            ugc_banner_logo?: string;
            ugc_sponsor_logo?: string;
            country_code?: string;
            url?: string;
            wins?: number;
            losses?: number;
            games_played_total?: number;
            games_played_matchmaking?: number;
            url_logo?: string;
            registered_member_account_ids?: number[] & number[] & { [K_2 in Exclude<keyof I["teams"][number]["registered_member_account_ids"], keyof number[]>]: never; };
            coach_account_id?: number;
            audit_entries?: {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[] & ({
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            } & {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            } & { [K_3 in Exclude<keyof I["teams"][number]["audit_entries"][number], keyof CMsgDOTATeamInfo_AuditEntry>]: never; })[] & { [K_4 in Exclude<keyof I["teams"][number]["audit_entries"], keyof {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[]>]: never; };
            region?: ELeagueRegion;
            abbreviation?: string;
            member_stats?: {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[] & ({
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            } & {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[] & ({
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                } & {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                } & { [K_5 in Exclude<keyof I["teams"][number]["member_stats"][number]["top_heroes"][number], keyof CMsgDOTATeamInfo_HeroStats>]: never; })[] & { [K_6 in Exclude<keyof I["teams"][number]["member_stats"][number]["top_heroes"], keyof {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[]>]: never; };
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            } & { [K_7 in Exclude<keyof I["teams"][number]["member_stats"][number], keyof CMsgDOTATeamInfo_MemberStats>]: never; })[] & { [K_8 in Exclude<keyof I["teams"][number]["member_stats"], keyof {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[]>]: never; };
            team_stats?: {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            } & {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[] & ({
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                } & {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                } & { [K_9 in Exclude<keyof I["teams"][number]["team_stats"]["played_heroes"][number], keyof CMsgDOTATeamInfo_HeroStats>]: never; })[] & { [K_10 in Exclude<keyof I["teams"][number]["team_stats"]["played_heroes"], keyof {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[]>]: never; };
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            } & { [K_11 in Exclude<keyof I["teams"][number]["team_stats"], keyof CMsgDOTATeamInfo_TeamStats>]: never; };
            dpc_results?: {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[] & ({
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            } & {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            } & { [K_12 in Exclude<keyof I["teams"][number]["dpc_results"][number], keyof CMsgDOTATeamInfo_DPCResult>]: never; })[] & { [K_13 in Exclude<keyof I["teams"][number]["dpc_results"], keyof {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[]>]: never; };
            color_primary?: string;
            color_secondary?: string;
            team_captain?: number;
        } & { [K_14 in Exclude<keyof I["teams"][number], keyof CMsgDOTATeamInfo>]: never; })[] & { [K_15 in Exclude<keyof I["teams"], keyof {
            members?: {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[];
            team_id?: number;
            name?: string;
            tag?: string;
            time_created?: number;
            pro?: boolean;
            pickup_team?: boolean;
            ugc_logo?: string;
            ugc_base_logo?: string;
            ugc_banner_logo?: string;
            ugc_sponsor_logo?: string;
            country_code?: string;
            url?: string;
            wins?: number;
            losses?: number;
            games_played_total?: number;
            games_played_matchmaking?: number;
            url_logo?: string;
            registered_member_account_ids?: number[];
            coach_account_id?: number;
            audit_entries?: {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[];
            region?: ELeagueRegion;
            abbreviation?: string;
            member_stats?: {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[];
            team_stats?: {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            };
            dpc_results?: {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[];
            color_primary?: string;
            color_secondary?: string;
            team_captain?: number;
        }[]>]: never; };
    } & { [K_16 in Exclude<keyof I, "teams">]: never; }>(base?: I): CMsgDOTATeamInfoList;
    fromPartial<I_1 extends {
        teams?: {
            members?: {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[];
            team_id?: number;
            name?: string;
            tag?: string;
            time_created?: number;
            pro?: boolean;
            pickup_team?: boolean;
            ugc_logo?: string;
            ugc_base_logo?: string;
            ugc_banner_logo?: string;
            ugc_sponsor_logo?: string;
            country_code?: string;
            url?: string;
            wins?: number;
            losses?: number;
            games_played_total?: number;
            games_played_matchmaking?: number;
            url_logo?: string;
            registered_member_account_ids?: number[];
            coach_account_id?: number;
            audit_entries?: {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[];
            region?: ELeagueRegion;
            abbreviation?: string;
            member_stats?: {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[];
            team_stats?: {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            };
            dpc_results?: {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[];
            color_primary?: string;
            color_secondary?: string;
            team_captain?: number;
        }[];
    } & {
        teams?: {
            members?: {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[];
            team_id?: number;
            name?: string;
            tag?: string;
            time_created?: number;
            pro?: boolean;
            pickup_team?: boolean;
            ugc_logo?: string;
            ugc_base_logo?: string;
            ugc_banner_logo?: string;
            ugc_sponsor_logo?: string;
            country_code?: string;
            url?: string;
            wins?: number;
            losses?: number;
            games_played_total?: number;
            games_played_matchmaking?: number;
            url_logo?: string;
            registered_member_account_ids?: number[];
            coach_account_id?: number;
            audit_entries?: {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[];
            region?: ELeagueRegion;
            abbreviation?: string;
            member_stats?: {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[];
            team_stats?: {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            };
            dpc_results?: {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[];
            color_primary?: string;
            color_secondary?: string;
            team_captain?: number;
        }[] & ({
            members?: {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[];
            team_id?: number;
            name?: string;
            tag?: string;
            time_created?: number;
            pro?: boolean;
            pickup_team?: boolean;
            ugc_logo?: string;
            ugc_base_logo?: string;
            ugc_banner_logo?: string;
            ugc_sponsor_logo?: string;
            country_code?: string;
            url?: string;
            wins?: number;
            losses?: number;
            games_played_total?: number;
            games_played_matchmaking?: number;
            url_logo?: string;
            registered_member_account_ids?: number[];
            coach_account_id?: number;
            audit_entries?: {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[];
            region?: ELeagueRegion;
            abbreviation?: string;
            member_stats?: {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[];
            team_stats?: {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            };
            dpc_results?: {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[];
            color_primary?: string;
            color_secondary?: string;
            team_captain?: number;
        } & {
            members?: {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[] & ({
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            } & {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            } & { [K_17 in Exclude<keyof I_1["teams"][number]["members"][number], keyof CMsgDOTATeamInfo_Member>]: never; })[] & { [K_18 in Exclude<keyof I_1["teams"][number]["members"], keyof {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[]>]: never; };
            team_id?: number;
            name?: string;
            tag?: string;
            time_created?: number;
            pro?: boolean;
            pickup_team?: boolean;
            ugc_logo?: string;
            ugc_base_logo?: string;
            ugc_banner_logo?: string;
            ugc_sponsor_logo?: string;
            country_code?: string;
            url?: string;
            wins?: number;
            losses?: number;
            games_played_total?: number;
            games_played_matchmaking?: number;
            url_logo?: string;
            registered_member_account_ids?: number[] & number[] & { [K_19 in Exclude<keyof I_1["teams"][number]["registered_member_account_ids"], keyof number[]>]: never; };
            coach_account_id?: number;
            audit_entries?: {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[] & ({
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            } & {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            } & { [K_20 in Exclude<keyof I_1["teams"][number]["audit_entries"][number], keyof CMsgDOTATeamInfo_AuditEntry>]: never; })[] & { [K_21 in Exclude<keyof I_1["teams"][number]["audit_entries"], keyof {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[]>]: never; };
            region?: ELeagueRegion;
            abbreviation?: string;
            member_stats?: {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[] & ({
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            } & {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[] & ({
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                } & {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                } & { [K_22 in Exclude<keyof I_1["teams"][number]["member_stats"][number]["top_heroes"][number], keyof CMsgDOTATeamInfo_HeroStats>]: never; })[] & { [K_23 in Exclude<keyof I_1["teams"][number]["member_stats"][number]["top_heroes"], keyof {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[]>]: never; };
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            } & { [K_24 in Exclude<keyof I_1["teams"][number]["member_stats"][number], keyof CMsgDOTATeamInfo_MemberStats>]: never; })[] & { [K_25 in Exclude<keyof I_1["teams"][number]["member_stats"], keyof {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[]>]: never; };
            team_stats?: {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            } & {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[] & ({
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                } & {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                } & { [K_26 in Exclude<keyof I_1["teams"][number]["team_stats"]["played_heroes"][number], keyof CMsgDOTATeamInfo_HeroStats>]: never; })[] & { [K_27 in Exclude<keyof I_1["teams"][number]["team_stats"]["played_heroes"], keyof {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[]>]: never; };
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            } & { [K_28 in Exclude<keyof I_1["teams"][number]["team_stats"], keyof CMsgDOTATeamInfo_TeamStats>]: never; };
            dpc_results?: {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[] & ({
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            } & {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            } & { [K_29 in Exclude<keyof I_1["teams"][number]["dpc_results"][number], keyof CMsgDOTATeamInfo_DPCResult>]: never; })[] & { [K_30 in Exclude<keyof I_1["teams"][number]["dpc_results"], keyof {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[]>]: never; };
            color_primary?: string;
            color_secondary?: string;
            team_captain?: number;
        } & { [K_31 in Exclude<keyof I_1["teams"][number], keyof CMsgDOTATeamInfo>]: never; })[] & { [K_32 in Exclude<keyof I_1["teams"], keyof {
            members?: {
                account_id?: number;
                time_joined?: number;
                admin?: boolean;
                pro_name?: string;
                role?: Fantasy_Roles;
                real_name?: string;
            }[];
            team_id?: number;
            name?: string;
            tag?: string;
            time_created?: number;
            pro?: boolean;
            pickup_team?: boolean;
            ugc_logo?: string;
            ugc_base_logo?: string;
            ugc_banner_logo?: string;
            ugc_sponsor_logo?: string;
            country_code?: string;
            url?: string;
            wins?: number;
            losses?: number;
            games_played_total?: number;
            games_played_matchmaking?: number;
            url_logo?: string;
            registered_member_account_ids?: number[];
            coach_account_id?: number;
            audit_entries?: {
                audit_action?: number;
                timestamp?: number;
                account_id?: number;
            }[];
            region?: ELeagueRegion;
            abbreviation?: string;
            member_stats?: {
                account_id?: number;
                wins_with_team?: number;
                losses_with_team?: number;
                top_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                avg_kills?: number;
                avg_deaths?: number;
                avg_assists?: number;
            }[];
            team_stats?: {
                played_heroes?: {
                    hero_id?: number;
                    picks?: number;
                    wins?: number;
                    bans?: number;
                    avg_kills?: number;
                    avg_deaths?: number;
                    avg_assists?: number;
                    avg_gpm?: number;
                    avg_xpm?: number;
                }[];
                farming?: number;
                fighting?: number;
                versatility?: number;
                avg_kills?: number;
                avg_deaths?: number;
                avg_duration?: number;
            };
            dpc_results?: {
                league_id?: number;
                standing?: number;
                points?: number;
                earnings?: number;
                timestamp?: number;
            }[];
            color_primary?: string;
            color_secondary?: string;
            team_captain?: number;
        }[]>]: never; };
    } & { [K_33 in Exclude<keyof I_1, "teams">]: never; }>(object: I_1): CMsgDOTATeamInfoList;
};
export declare const CMsgDOTAMyTeamInfoRequest: {
    fromJSON(_: any): CMsgDOTAMyTeamInfoRequest;
    toJSON(_: CMsgDOTAMyTeamInfoRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgDOTAMyTeamInfoRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgDOTAMyTeamInfoRequest;
};
export declare const CMsgDOTACreateTeam: {
    fromJSON(object: any): CMsgDOTACreateTeam;
    toJSON(message: CMsgDOTACreateTeam): unknown;
    create<I extends {
        name?: string;
        tag?: string;
        logo?: string;
        base_logo?: string;
        banner_logo?: string;
        sponsor_logo?: string;
        country_code?: string;
        url?: string;
        pickup_team?: boolean;
        abbreviation?: string;
    } & {
        name?: string;
        tag?: string;
        logo?: string;
        base_logo?: string;
        banner_logo?: string;
        sponsor_logo?: string;
        country_code?: string;
        url?: string;
        pickup_team?: boolean;
        abbreviation?: string;
    } & { [K in Exclude<keyof I, keyof CMsgDOTACreateTeam>]: never; }>(base?: I): CMsgDOTACreateTeam;
    fromPartial<I_1 extends {
        name?: string;
        tag?: string;
        logo?: string;
        base_logo?: string;
        banner_logo?: string;
        sponsor_logo?: string;
        country_code?: string;
        url?: string;
        pickup_team?: boolean;
        abbreviation?: string;
    } & {
        name?: string;
        tag?: string;
        logo?: string;
        base_logo?: string;
        banner_logo?: string;
        sponsor_logo?: string;
        country_code?: string;
        url?: string;
        pickup_team?: boolean;
        abbreviation?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTACreateTeam>]: never; }>(object: I_1): CMsgDOTACreateTeam;
};
export declare const CMsgDOTACreateTeamResponse: {
    fromJSON(object: any): CMsgDOTACreateTeamResponse;
    toJSON(message: CMsgDOTACreateTeamResponse): unknown;
    create<I extends {
        result?: CMsgDOTACreateTeamResponse_Result;
        team_id?: number;
    } & {
        result?: CMsgDOTACreateTeamResponse_Result;
        team_id?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTACreateTeamResponse>]: never; }>(base?: I): CMsgDOTACreateTeamResponse;
    fromPartial<I_1 extends {
        result?: CMsgDOTACreateTeamResponse_Result;
        team_id?: number;
    } & {
        result?: CMsgDOTACreateTeamResponse_Result;
        team_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTACreateTeamResponse>]: never; }>(object: I_1): CMsgDOTACreateTeamResponse;
};
export declare const CMsgDOTAEditTeamDetails: {
    fromJSON(object: any): CMsgDOTAEditTeamDetails;
    toJSON(message: CMsgDOTAEditTeamDetails): unknown;
    create<I extends {
        team_id?: number;
        name?: string;
        tag?: string;
        logo?: string;
        base_logo?: string;
        banner_logo?: string;
        sponsor_logo?: string;
        country_code?: string;
        url?: string;
        in_use_by_party?: boolean;
        abbreviation?: string;
    } & {
        team_id?: number;
        name?: string;
        tag?: string;
        logo?: string;
        base_logo?: string;
        banner_logo?: string;
        sponsor_logo?: string;
        country_code?: string;
        url?: string;
        in_use_by_party?: boolean;
        abbreviation?: string;
    } & { [K in Exclude<keyof I, keyof CMsgDOTAEditTeamDetails>]: never; }>(base?: I): CMsgDOTAEditTeamDetails;
    fromPartial<I_1 extends {
        team_id?: number;
        name?: string;
        tag?: string;
        logo?: string;
        base_logo?: string;
        banner_logo?: string;
        sponsor_logo?: string;
        country_code?: string;
        url?: string;
        in_use_by_party?: boolean;
        abbreviation?: string;
    } & {
        team_id?: number;
        name?: string;
        tag?: string;
        logo?: string;
        base_logo?: string;
        banner_logo?: string;
        sponsor_logo?: string;
        country_code?: string;
        url?: string;
        in_use_by_party?: boolean;
        abbreviation?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTAEditTeamDetails>]: never; }>(object: I_1): CMsgDOTAEditTeamDetails;
};
export declare const CMsgDOTAEditTeamDetailsResponse: {
    fromJSON(object: any): CMsgDOTAEditTeamDetailsResponse;
    toJSON(message: CMsgDOTAEditTeamDetailsResponse): unknown;
    create<I extends {
        result?: CMsgDOTAEditTeamDetailsResponse_Result;
    } & {
        result?: CMsgDOTAEditTeamDetailsResponse_Result;
    } & { [K in Exclude<keyof I, "result">]: never; }>(base?: I): CMsgDOTAEditTeamDetailsResponse;
    fromPartial<I_1 extends {
        result?: CMsgDOTAEditTeamDetailsResponse_Result;
    } & {
        result?: CMsgDOTAEditTeamDetailsResponse_Result;
    } & { [K_1 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CMsgDOTAEditTeamDetailsResponse;
};
export declare const CMsgDOTATeamInvite_InviterToGC: {
    fromJSON(object: any): CMsgDOTATeamInvite_InviterToGC;
    toJSON(message: CMsgDOTATeamInvite_InviterToGC): unknown;
    create<I extends {
        account_id?: number;
        team_id?: number;
    } & {
        account_id?: number;
        team_id?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTATeamInvite_InviterToGC>]: never; }>(base?: I): CMsgDOTATeamInvite_InviterToGC;
    fromPartial<I_1 extends {
        account_id?: number;
        team_id?: number;
    } & {
        account_id?: number;
        team_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTATeamInvite_InviterToGC>]: never; }>(object: I_1): CMsgDOTATeamInvite_InviterToGC;
};
export declare const CMsgDOTATeamInvite_GCImmediateResponseToInviter: {
    fromJSON(object: any): CMsgDOTATeamInvite_GCImmediateResponseToInviter;
    toJSON(message: CMsgDOTATeamInvite_GCImmediateResponseToInviter): unknown;
    create<I extends {
        result?: ETeamInviteResult;
        invitee_name?: string;
        required_play_time?: number;
    } & {
        result?: ETeamInviteResult;
        invitee_name?: string;
        required_play_time?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTATeamInvite_GCImmediateResponseToInviter>]: never; }>(base?: I): CMsgDOTATeamInvite_GCImmediateResponseToInviter;
    fromPartial<I_1 extends {
        result?: ETeamInviteResult;
        invitee_name?: string;
        required_play_time?: number;
    } & {
        result?: ETeamInviteResult;
        invitee_name?: string;
        required_play_time?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTATeamInvite_GCImmediateResponseToInviter>]: never; }>(object: I_1): CMsgDOTATeamInvite_GCImmediateResponseToInviter;
};
export declare const CMsgDOTATeamInvite_GCRequestToInvitee: {
    fromJSON(object: any): CMsgDOTATeamInvite_GCRequestToInvitee;
    toJSON(message: CMsgDOTATeamInvite_GCRequestToInvitee): unknown;
    create<I extends {
        inviter_account_id?: number;
        team_name?: string;
        team_tag?: string;
        logo?: string;
    } & {
        inviter_account_id?: number;
        team_name?: string;
        team_tag?: string;
        logo?: string;
    } & { [K in Exclude<keyof I, keyof CMsgDOTATeamInvite_GCRequestToInvitee>]: never; }>(base?: I): CMsgDOTATeamInvite_GCRequestToInvitee;
    fromPartial<I_1 extends {
        inviter_account_id?: number;
        team_name?: string;
        team_tag?: string;
        logo?: string;
    } & {
        inviter_account_id?: number;
        team_name?: string;
        team_tag?: string;
        logo?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTATeamInvite_GCRequestToInvitee>]: never; }>(object: I_1): CMsgDOTATeamInvite_GCRequestToInvitee;
};
export declare const CMsgDOTATeamInvite_InviteeResponseToGC: {
    fromJSON(object: any): CMsgDOTATeamInvite_InviteeResponseToGC;
    toJSON(message: CMsgDOTATeamInvite_InviteeResponseToGC): unknown;
    create<I extends {
        result?: ETeamInviteResult;
    } & {
        result?: ETeamInviteResult;
    } & { [K in Exclude<keyof I, "result">]: never; }>(base?: I): CMsgDOTATeamInvite_InviteeResponseToGC;
    fromPartial<I_1 extends {
        result?: ETeamInviteResult;
    } & {
        result?: ETeamInviteResult;
    } & { [K_1 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CMsgDOTATeamInvite_InviteeResponseToGC;
};
export declare const CMsgDOTATeamInvite_GCResponseToInviter: {
    fromJSON(object: any): CMsgDOTATeamInvite_GCResponseToInviter;
    toJSON(message: CMsgDOTATeamInvite_GCResponseToInviter): unknown;
    create<I extends {
        result?: ETeamInviteResult;
        invitee_name?: string;
    } & {
        result?: ETeamInviteResult;
        invitee_name?: string;
    } & { [K in Exclude<keyof I, keyof CMsgDOTATeamInvite_GCResponseToInviter>]: never; }>(base?: I): CMsgDOTATeamInvite_GCResponseToInviter;
    fromPartial<I_1 extends {
        result?: ETeamInviteResult;
        invitee_name?: string;
    } & {
        result?: ETeamInviteResult;
        invitee_name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTATeamInvite_GCResponseToInviter>]: never; }>(object: I_1): CMsgDOTATeamInvite_GCResponseToInviter;
};
export declare const CMsgDOTATeamInvite_GCResponseToInvitee: {
    fromJSON(object: any): CMsgDOTATeamInvite_GCResponseToInvitee;
    toJSON(message: CMsgDOTATeamInvite_GCResponseToInvitee): unknown;
    create<I extends {
        result?: ETeamInviteResult;
        team_name?: string;
    } & {
        result?: ETeamInviteResult;
        team_name?: string;
    } & { [K in Exclude<keyof I, keyof CMsgDOTATeamInvite_GCResponseToInvitee>]: never; }>(base?: I): CMsgDOTATeamInvite_GCResponseToInvitee;
    fromPartial<I_1 extends {
        result?: ETeamInviteResult;
        team_name?: string;
    } & {
        result?: ETeamInviteResult;
        team_name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTATeamInvite_GCResponseToInvitee>]: never; }>(object: I_1): CMsgDOTATeamInvite_GCResponseToInvitee;
};
export declare const CMsgDOTAKickTeamMember: {
    fromJSON(object: any): CMsgDOTAKickTeamMember;
    toJSON(message: CMsgDOTAKickTeamMember): unknown;
    create<I extends {
        account_id?: number;
        team_id?: number;
    } & {
        account_id?: number;
        team_id?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTAKickTeamMember>]: never; }>(base?: I): CMsgDOTAKickTeamMember;
    fromPartial<I_1 extends {
        account_id?: number;
        team_id?: number;
    } & {
        account_id?: number;
        team_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTAKickTeamMember>]: never; }>(object: I_1): CMsgDOTAKickTeamMember;
};
export declare const CMsgDOTAKickTeamMemberResponse: {
    fromJSON(object: any): CMsgDOTAKickTeamMemberResponse;
    toJSON(message: CMsgDOTAKickTeamMemberResponse): unknown;
    create<I extends {
        result?: CMsgDOTAKickTeamMemberResponse_Result;
    } & {
        result?: CMsgDOTAKickTeamMemberResponse_Result;
    } & { [K in Exclude<keyof I, "result">]: never; }>(base?: I): CMsgDOTAKickTeamMemberResponse;
    fromPartial<I_1 extends {
        result?: CMsgDOTAKickTeamMemberResponse_Result;
    } & {
        result?: CMsgDOTAKickTeamMemberResponse_Result;
    } & { [K_1 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CMsgDOTAKickTeamMemberResponse;
};
export declare const CMsgDOTATransferTeamAdmin: {
    fromJSON(object: any): CMsgDOTATransferTeamAdmin;
    toJSON(message: CMsgDOTATransferTeamAdmin): unknown;
    create<I extends {
        new_admin_account_id?: number;
        team_id?: number;
    } & {
        new_admin_account_id?: number;
        team_id?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTATransferTeamAdmin>]: never; }>(base?: I): CMsgDOTATransferTeamAdmin;
    fromPartial<I_1 extends {
        new_admin_account_id?: number;
        team_id?: number;
    } & {
        new_admin_account_id?: number;
        team_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTATransferTeamAdmin>]: never; }>(object: I_1): CMsgDOTATransferTeamAdmin;
};
export declare const CMsgDOTATransferTeamAdminResponse: {
    fromJSON(object: any): CMsgDOTATransferTeamAdminResponse;
    toJSON(message: CMsgDOTATransferTeamAdminResponse): unknown;
    create<I extends {
        result?: CMsgDOTATransferTeamAdminResponse_Result;
    } & {
        result?: CMsgDOTATransferTeamAdminResponse_Result;
    } & { [K in Exclude<keyof I, "result">]: never; }>(base?: I): CMsgDOTATransferTeamAdminResponse;
    fromPartial<I_1 extends {
        result?: CMsgDOTATransferTeamAdminResponse_Result;
    } & {
        result?: CMsgDOTATransferTeamAdminResponse_Result;
    } & { [K_1 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CMsgDOTATransferTeamAdminResponse;
};
export declare const CMsgDOTALeaveTeam: {
    fromJSON(object: any): CMsgDOTALeaveTeam;
    toJSON(message: CMsgDOTALeaveTeam): unknown;
    create<I extends {
        team_id?: number;
    } & {
        team_id?: number;
    } & { [K in Exclude<keyof I, "team_id">]: never; }>(base?: I): CMsgDOTALeaveTeam;
    fromPartial<I_1 extends {
        team_id?: number;
    } & {
        team_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "team_id">]: never; }>(object: I_1): CMsgDOTALeaveTeam;
};
export declare const CMsgDOTALeaveTeamResponse: {
    fromJSON(object: any): CMsgDOTALeaveTeamResponse;
    toJSON(message: CMsgDOTALeaveTeamResponse): unknown;
    create<I extends {
        result?: CMsgDOTALeaveTeamResponse_Result;
    } & {
        result?: CMsgDOTALeaveTeamResponse_Result;
    } & { [K in Exclude<keyof I, "result">]: never; }>(base?: I): CMsgDOTALeaveTeamResponse;
    fromPartial<I_1 extends {
        result?: CMsgDOTALeaveTeamResponse_Result;
    } & {
        result?: CMsgDOTALeaveTeamResponse_Result;
    } & { [K_1 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CMsgDOTALeaveTeamResponse;
};
export declare const CMsgDOTABetaParticipation: {
    fromJSON(object: any): CMsgDOTABetaParticipation;
    toJSON(message: CMsgDOTABetaParticipation): unknown;
    create<I extends {
        access_rights?: number;
    } & {
        access_rights?: number;
    } & { [K in Exclude<keyof I, "access_rights">]: never; }>(base?: I): CMsgDOTABetaParticipation;
    fromPartial<I_1 extends {
        access_rights?: number;
    } & {
        access_rights?: number;
    } & { [K_1 in Exclude<keyof I_1, "access_rights">]: never; }>(object: I_1): CMsgDOTABetaParticipation;
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
