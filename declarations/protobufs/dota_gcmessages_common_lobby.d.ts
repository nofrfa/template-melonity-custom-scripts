import { CDOTASaveGame, CMsgPendingEventAward, DOTA_CM_PICK, DOTA_GameState, DOTA_GC_TEAM, DOTABotDifficulty, DOTALeaverStatus_t, DOTALobbyVisibility, DOTASelectionPriorityChoice, DOTASelectionPriorityRules, EDOTAMMRBoostType, EEvent, EMatchOutcome, MatchType } from "./dota_shared_enums";
export declare const protobufPackage = "";
export declare enum ELobbyMemberCoachRequestState {
    k_eLobbyMemberCoachRequestState_None = 0,
    k_eLobbyMemberCoachRequestState_Accepted = 1,
    k_eLobbyMemberCoachRequestState_Rejected = 2,
    UNRECOGNIZED = -1
}
export declare function eLobbyMemberCoachRequestStateFromJSON(object: any): ELobbyMemberCoachRequestState;
export declare function eLobbyMemberCoachRequestStateToJSON(object: ELobbyMemberCoachRequestState): string;
export declare enum LobbyDotaTVDelay {
    LobbyDotaTV_10 = 0,
    LobbyDotaTV_120 = 1,
    LobbyDotaTV_300 = 2,
    LobbyDotaTV_900 = 3,
    UNRECOGNIZED = -1
}
export declare function lobbyDotaTVDelayFromJSON(object: any): LobbyDotaTVDelay;
export declare function lobbyDotaTVDelayToJSON(object: LobbyDotaTVDelay): string;
export declare enum LobbyDotaPauseSetting {
    LobbyDotaPauseSetting_Unlimited = 0,
    LobbyDotaPauseSetting_Limited = 1,
    LobbyDotaPauseSetting_Disabled = 2,
    UNRECOGNIZED = -1
}
export declare function lobbyDotaPauseSettingFromJSON(object: any): LobbyDotaPauseSetting;
export declare function lobbyDotaPauseSettingToJSON(object: LobbyDotaPauseSetting): string;
export interface CMsgLobbyCoachFriendRequest {
    coach_account_id: number;
    player_account_id: number;
    request_state: ELobbyMemberCoachRequestState;
}
export interface CMsgLobbyPlayerPlusSubscriptionData {
    hero_badges: CMsgLobbyPlayerPlusSubscriptionData_HeroBadge[];
}
export interface CMsgLobbyPlayerPlusSubscriptionData_HeroBadge {
    hero_id: number;
    hero_badge_xp: number;
}
export interface CMsgLobbyEventPoints {
    event_id: number;
    account_points: CMsgLobbyEventPoints_AccountPoints[];
}
export interface CMsgLobbyEventPoints_PeriodicResourceData {
    periodic_resource_id: number;
    remaining: number;
    max: number;
}
export interface CMsgLobbyEventPoints_NetworkedEventAction {
    action_id: number;
    times_granted: number;
}
export interface CMsgLobbyEventPoints_AccountPoints {
    account_id: number;
    normal_points: number;
    premium_points: number;
    owned: boolean;
    active_effects_mask: string;
    wager_streak: number;
    event_game_custom_actions: CMsgLobbyEventPoints_NetworkedEventAction[];
    tip_amount_index: number;
    active_event_season_id: number;
    teleport_fx_level: number;
    networked_event_actions: CMsgLobbyEventPoints_NetworkedEventAction[];
    periodic_resources: CMsgLobbyEventPoints_PeriodicResourceData[];
}
export interface CMsgLobbyEventGameData {
    game_seed: number;
    event_window_start_time: number;
}
export interface CSODOTALobbyInvite {
    group_id: string;
    sender_id: string;
    sender_name: string;
    members: CSODOTALobbyInvite_LobbyMember[];
    custom_game_id: string;
    invite_gid: string;
    custom_game_crc: string;
    custom_game_timestamp: number;
}
export interface CSODOTALobbyInvite_LobbyMember {
    name: string;
    steam_id: string;
}
export interface CSODOTALobbyMember {
    id: string;
    hero_id: number;
    team: DOTA_GC_TEAM;
    name: string;
    slot: number;
    party_id: string;
    meta_level: number;
    meta_xp: number;
    meta_xp_awarded: number;
    leaver_status: DOTALeaverStatus_t;
    leaver_actions: number;
    channel: number;
    disabled_hero_id: number[];
    enabled_hero_id: number[];
    coach_team: DOTA_GC_TEAM;
    coached_account_ids: number[];
    coach_rating: number;
    pwrd_cyber_cafe_id: number;
    pwrd_cyber_cafe_name: string;
    disabled_random_hero_bits: number[];
    rank_change: number;
    cameraman: boolean;
    custom_game_product_ids: number[];
    search_match_type: MatchType;
    favorite_team_packed: string;
    is_plus_subscriber: boolean;
    lane_selection_flags: number;
    can_earn_rewards: boolean;
    live_spectator_team: DOTA_GC_TEAM;
    was_mvp_last_game: boolean;
    pending_awards: CMsgPendingEventAward[];
    pending_awards_on_victory: CMsgPendingEventAward[];
    rank_mmr_boost_type: EDOTAMMRBoostType;
    queue_point_adjustment: number;
    rank_tier: number;
    title: number;
    guild_id: number;
    reports_available: number;
    is_steam_china: boolean;
    live_spectator_account_id: number;
    comms_reports_available: number;
}
export interface CSODOTAServerLobbyMember {
}
export interface CSODOTAStaticLobbyMember {
}
export interface CSODOTAServerStaticLobbyMember {
}
export interface CLobbyTeamDetails {
    team_name: string;
    team_tag: string;
    team_id: number;
    team_logo: string;
    team_base_logo: string;
    team_banner_logo: string;
    team_complete: boolean;
    rank: number;
    rank_change: number;
    is_home_team: boolean;
    is_challenge_match: boolean;
    challenge_match_token_account: string;
    team_logo_url: string;
    team_abbreviation: string;
}
export interface CLobbyGuildDetails {
    guild_id: number;
    guild_primary_color: number;
    guild_secondary_color: number;
    guild_pattern: number;
    guild_logo: string;
    guild_points: number;
    guild_event: number;
    guild_flags: number;
    team_for_guild: DOTA_GC_TEAM;
    guild_tag: string;
    guild_weekly_percentile: number;
}
export interface CLobbyTimedRewardDetails {
    item_def_index: number;
    is_supply_crate: boolean;
    is_timed_drop: boolean;
    account_id: number;
    origin: number;
}
export interface CLobbyBroadcastChannelInfo {
    channel_id: number;
    country_code: string;
    description: string;
    language_code: string;
}
export interface CLobbyGuildChallenge {
    guild_id: number;
    event_id: EEvent;
    challenge_instance_id: number;
    challenge_parameter: number;
    challenge_timestamp: number;
    challenge_period_serial: number;
    challenge_progress_at_start: number;
    eligible_account_ids: number[];
}
export interface CSODOTALobby {
    lobby_id: string;
    all_members: CSODOTALobbyMember[];
    member_indices: number[];
    left_member_indices: number[];
    free_member_indices: number[];
    leader_id: string;
    server_id: string;
    game_mode: number;
    pending_invites: string[];
    state: CSODOTALobby_State;
    connect: string;
    lobby_type: CSODOTALobby_LobbyType;
    allow_cheats: boolean;
    fill_with_bots: boolean;
    intro_mode: boolean;
    game_name: string;
    team_details: CLobbyTeamDetails[];
    tutorial_lesson: number;
    tournament_id: number;
    tournament_game_id: number;
    server_region: number;
    game_state: DOTA_GameState;
    num_spectators: number;
    matchgroup: number;
    cm_pick: DOTA_CM_PICK;
    match_id: string;
    allow_spectating: boolean;
    bot_difficulty_radiant: DOTABotDifficulty;
    timed_reward_details: CLobbyTimedRewardDetails[];
    pass_key: string;
    leagueid: number;
    penalty_level_radiant: number;
    penalty_level_dire: number;
    load_game_id: number;
    series_type: number;
    radiant_series_wins: number;
    dire_series_wins: number;
    loot_generated: number;
    loot_awarded: number;
    allchat: boolean;
    dota_tv_delay: LobbyDotaTVDelay;
    custom_game_mode: string;
    custom_map_name: string;
    custom_difficulty: number;
    lan: boolean;
    broadcast_channel_info: CLobbyBroadcastChannelInfo[];
    first_leaver_accountid: number;
    series_id: number;
    low_priority: boolean;
    extra_messages: CSODOTALobby_CExtraMsg[];
    save_game: CDOTASaveGame | undefined;
    first_blood_happened: boolean;
    match_outcome: EMatchOutcome;
    mass_disconnect: boolean;
    custom_game_id: string;
    custom_min_players: number;
    custom_max_players: number;
    visibility: DOTALobbyVisibility;
    custom_game_crc: string;
    custom_game_auto_created_lobby: boolean;
    custom_game_timestamp: number;
    previous_series_matches: string[];
    previous_match_override: string;
    game_start_time: number;
    pause_setting: LobbyDotaPauseSetting;
    weekend_tourney_division_id: number;
    weekend_tourney_skill_level: number;
    weekend_tourney_bracket_round: number;
    bot_difficulty_dire: DOTABotDifficulty;
    bot_radiant: string;
    bot_dire: string;
    event_progression_enabled: EEvent[];
    selection_priority_rules: DOTASelectionPriorityRules;
    series_previous_selection_priority_team_id: number;
    series_current_selection_priority_team_id: number;
    series_current_priority_team_choice: DOTASelectionPriorityChoice;
    series_current_non_priority_team_choice: DOTASelectionPriorityChoice;
    series_current_selection_priority_used_coin_toss: boolean;
    current_primary_event: EEvent;
    emergency_disabled_hero_ids: number[];
    custom_game_private_key: string;
    custom_game_penalties: boolean;
    lan_host_ping_location: string;
    league_node_id: number;
    match_duration: number;
    league_phase: number;
    record_detailed_stats: boolean;
    experimental_gameplay_enabled: boolean;
    guild_challenges: CLobbyGuildChallenge[];
    guild_details: CLobbyGuildDetails[];
    lobby_event_points: CMsgLobbyEventPoints[];
    requested_hero_ids: number[];
    coach_friend_requests: CMsgLobbyCoachFriendRequest[];
    is_in_steam_china: boolean;
    with_scenario_save: boolean;
    lobby_creation_time: number;
    event_game_definition: string;
    extra_startup_messages: CSODOTALobby_CExtraMsg[];
}
export declare enum CSODOTALobby_State {
    UI = 0,
    READYUP = 4,
    SERVERSETUP = 1,
    RUN = 2,
    POSTGAME = 3,
    NOTREADY = 5,
    SERVERASSIGN = 6,
    UNRECOGNIZED = -1
}
export declare function cSODOTALobby_StateFromJSON(object: any): CSODOTALobby_State;
export declare function cSODOTALobby_StateToJSON(object: CSODOTALobby_State): string;
export declare enum CSODOTALobby_LobbyType {
    INVALID = -1,
    CASUAL_MATCH = 0,
    PRACTICE = 1,
    COOP_BOT_MATCH = 4,
    COMPETITIVE_MATCH = 7,
    WEEKEND_TOURNEY = 9,
    LOCAL_BOT_MATCH = 10,
    SPECTATOR = 11,
    EVENT_MATCH = 12,
    NEW_PLAYER_POOL = 14,
    FEATURED_GAMEMODE = 15,
    UNRECOGNIZED = -1
}
export declare function cSODOTALobby_LobbyTypeFromJSON(object: any): CSODOTALobby_LobbyType;
export declare function cSODOTALobby_LobbyTypeToJSON(object: CSODOTALobby_LobbyType): string;
export interface CSODOTALobby_CExtraMsg {
    id: number;
    contents: string;
}
export interface CSODOTAServerLobby {
    all_members: CSODOTAServerLobbyMember[];
}
export interface CSODOTAStaticLobby {
    all_members: CSODOTAStaticLobbyMember[];
}
export interface CSODOTAServerStaticLobby {
    all_members: CSODOTAServerStaticLobbyMember[];
}
export interface CMsgAdditionalLobbyStartupAccountData {
    account_id: number;
    plus_data: CMsgLobbyPlayerPlusSubscriptionData | undefined;
    unlocked_chat_wheel_message_ranges: CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange[];
    unlocked_ping_wheel_message_ranges: CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange[];
}
export interface CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange {
    message_id_start: number;
    message_id_end: number;
}
export interface CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange {
    message_id_start: number;
    message_id_end: number;
}
export interface CMsgLobbyInitializationComplete {
}
export interface CMsgLobbyPlaytestDetails {
    json: string;
}
export interface CMsgLocalServerGuildData {
    guild_id: number;
    event_id: EEvent;
    guild_points: number;
    guild_logo: string;
    guild_primary_color: number;
    guild_secondary_color: number;
    guild_pattern: number;
    guild_flags: number;
    guild_weekly_percentile: number;
}
export interface CMsgLocalServerFakeLobbyData {
    account_id: number;
    event_points: CMsgLobbyEventPoints[];
    is_plus_subscriber: boolean;
    primary_event_id: number;
    favorite_team: number;
    favorite_team_quality: number;
    guild_info: CMsgLocalServerGuildData | undefined;
    teleport_fx_level: number;
    additional_data: CMsgAdditionalLobbyStartupAccountData | undefined;
}
export declare const CMsgLobbyCoachFriendRequest: {
    fromJSON(object: any): CMsgLobbyCoachFriendRequest;
    toJSON(message: CMsgLobbyCoachFriendRequest): unknown;
    create<I extends {
        coach_account_id?: number;
        player_account_id?: number;
        request_state?: ELobbyMemberCoachRequestState;
    } & {
        coach_account_id?: number;
        player_account_id?: number;
        request_state?: ELobbyMemberCoachRequestState;
    } & { [K in Exclude<keyof I, keyof CMsgLobbyCoachFriendRequest>]: never; }>(base?: I): CMsgLobbyCoachFriendRequest;
    fromPartial<I_1 extends {
        coach_account_id?: number;
        player_account_id?: number;
        request_state?: ELobbyMemberCoachRequestState;
    } & {
        coach_account_id?: number;
        player_account_id?: number;
        request_state?: ELobbyMemberCoachRequestState;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgLobbyCoachFriendRequest>]: never; }>(object: I_1): CMsgLobbyCoachFriendRequest;
};
export declare const CMsgLobbyPlayerPlusSubscriptionData: {
    fromJSON(object: any): CMsgLobbyPlayerPlusSubscriptionData;
    toJSON(message: CMsgLobbyPlayerPlusSubscriptionData): unknown;
    create<I extends {
        hero_badges?: {
            hero_id?: number;
            hero_badge_xp?: number;
        }[];
    } & {
        hero_badges?: {
            hero_id?: number;
            hero_badge_xp?: number;
        }[] & ({
            hero_id?: number;
            hero_badge_xp?: number;
        } & {
            hero_id?: number;
            hero_badge_xp?: number;
        } & { [K in Exclude<keyof I["hero_badges"][number], keyof CMsgLobbyPlayerPlusSubscriptionData_HeroBadge>]: never; })[] & { [K_1 in Exclude<keyof I["hero_badges"], keyof {
            hero_id?: number;
            hero_badge_xp?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "hero_badges">]: never; }>(base?: I): CMsgLobbyPlayerPlusSubscriptionData;
    fromPartial<I_1 extends {
        hero_badges?: {
            hero_id?: number;
            hero_badge_xp?: number;
        }[];
    } & {
        hero_badges?: {
            hero_id?: number;
            hero_badge_xp?: number;
        }[] & ({
            hero_id?: number;
            hero_badge_xp?: number;
        } & {
            hero_id?: number;
            hero_badge_xp?: number;
        } & { [K_3 in Exclude<keyof I_1["hero_badges"][number], keyof CMsgLobbyPlayerPlusSubscriptionData_HeroBadge>]: never; })[] & { [K_4 in Exclude<keyof I_1["hero_badges"], keyof {
            hero_id?: number;
            hero_badge_xp?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "hero_badges">]: never; }>(object: I_1): CMsgLobbyPlayerPlusSubscriptionData;
};
export declare const CMsgLobbyPlayerPlusSubscriptionData_HeroBadge: {
    fromJSON(object: any): CMsgLobbyPlayerPlusSubscriptionData_HeroBadge;
    toJSON(message: CMsgLobbyPlayerPlusSubscriptionData_HeroBadge): unknown;
    create<I extends {
        hero_id?: number;
        hero_badge_xp?: number;
    } & {
        hero_id?: number;
        hero_badge_xp?: number;
    } & { [K in Exclude<keyof I, keyof CMsgLobbyPlayerPlusSubscriptionData_HeroBadge>]: never; }>(base?: I): CMsgLobbyPlayerPlusSubscriptionData_HeroBadge;
    fromPartial<I_1 extends {
        hero_id?: number;
        hero_badge_xp?: number;
    } & {
        hero_id?: number;
        hero_badge_xp?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgLobbyPlayerPlusSubscriptionData_HeroBadge>]: never; }>(object: I_1): CMsgLobbyPlayerPlusSubscriptionData_HeroBadge;
};
export declare const CMsgLobbyEventPoints: {
    fromJSON(object: any): CMsgLobbyEventPoints;
    toJSON(message: CMsgLobbyEventPoints): unknown;
    create<I extends {
        event_id?: number;
        account_points?: {
            account_id?: number;
            normal_points?: number;
            premium_points?: number;
            owned?: boolean;
            active_effects_mask?: string;
            wager_streak?: number;
            event_game_custom_actions?: {
                action_id?: number;
                times_granted?: number;
            }[];
            tip_amount_index?: number;
            active_event_season_id?: number;
            teleport_fx_level?: number;
            networked_event_actions?: {
                action_id?: number;
                times_granted?: number;
            }[];
            periodic_resources?: {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[];
        }[];
    } & {
        event_id?: number;
        account_points?: {
            account_id?: number;
            normal_points?: number;
            premium_points?: number;
            owned?: boolean;
            active_effects_mask?: string;
            wager_streak?: number;
            event_game_custom_actions?: {
                action_id?: number;
                times_granted?: number;
            }[];
            tip_amount_index?: number;
            active_event_season_id?: number;
            teleport_fx_level?: number;
            networked_event_actions?: {
                action_id?: number;
                times_granted?: number;
            }[];
            periodic_resources?: {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[];
        }[] & ({
            account_id?: number;
            normal_points?: number;
            premium_points?: number;
            owned?: boolean;
            active_effects_mask?: string;
            wager_streak?: number;
            event_game_custom_actions?: {
                action_id?: number;
                times_granted?: number;
            }[];
            tip_amount_index?: number;
            active_event_season_id?: number;
            teleport_fx_level?: number;
            networked_event_actions?: {
                action_id?: number;
                times_granted?: number;
            }[];
            periodic_resources?: {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[];
        } & {
            account_id?: number;
            normal_points?: number;
            premium_points?: number;
            owned?: boolean;
            active_effects_mask?: string;
            wager_streak?: number;
            event_game_custom_actions?: {
                action_id?: number;
                times_granted?: number;
            }[] & ({
                action_id?: number;
                times_granted?: number;
            } & {
                action_id?: number;
                times_granted?: number;
            } & { [K in Exclude<keyof I["account_points"][number]["event_game_custom_actions"][number], keyof CMsgLobbyEventPoints_NetworkedEventAction>]: never; })[] & { [K_1 in Exclude<keyof I["account_points"][number]["event_game_custom_actions"], keyof {
                action_id?: number;
                times_granted?: number;
            }[]>]: never; };
            tip_amount_index?: number;
            active_event_season_id?: number;
            teleport_fx_level?: number;
            networked_event_actions?: {
                action_id?: number;
                times_granted?: number;
            }[] & ({
                action_id?: number;
                times_granted?: number;
            } & {
                action_id?: number;
                times_granted?: number;
            } & { [K_2 in Exclude<keyof I["account_points"][number]["networked_event_actions"][number], keyof CMsgLobbyEventPoints_NetworkedEventAction>]: never; })[] & { [K_3 in Exclude<keyof I["account_points"][number]["networked_event_actions"], keyof {
                action_id?: number;
                times_granted?: number;
            }[]>]: never; };
            periodic_resources?: {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[] & ({
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            } & {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            } & { [K_4 in Exclude<keyof I["account_points"][number]["periodic_resources"][number], keyof CMsgLobbyEventPoints_PeriodicResourceData>]: never; })[] & { [K_5 in Exclude<keyof I["account_points"][number]["periodic_resources"], keyof {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[]>]: never; };
        } & { [K_6 in Exclude<keyof I["account_points"][number], keyof CMsgLobbyEventPoints_AccountPoints>]: never; })[] & { [K_7 in Exclude<keyof I["account_points"], keyof {
            account_id?: number;
            normal_points?: number;
            premium_points?: number;
            owned?: boolean;
            active_effects_mask?: string;
            wager_streak?: number;
            event_game_custom_actions?: {
                action_id?: number;
                times_granted?: number;
            }[];
            tip_amount_index?: number;
            active_event_season_id?: number;
            teleport_fx_level?: number;
            networked_event_actions?: {
                action_id?: number;
                times_granted?: number;
            }[];
            periodic_resources?: {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[];
        }[]>]: never; };
    } & { [K_8 in Exclude<keyof I, keyof CMsgLobbyEventPoints>]: never; }>(base?: I): CMsgLobbyEventPoints;
    fromPartial<I_1 extends {
        event_id?: number;
        account_points?: {
            account_id?: number;
            normal_points?: number;
            premium_points?: number;
            owned?: boolean;
            active_effects_mask?: string;
            wager_streak?: number;
            event_game_custom_actions?: {
                action_id?: number;
                times_granted?: number;
            }[];
            tip_amount_index?: number;
            active_event_season_id?: number;
            teleport_fx_level?: number;
            networked_event_actions?: {
                action_id?: number;
                times_granted?: number;
            }[];
            periodic_resources?: {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[];
        }[];
    } & {
        event_id?: number;
        account_points?: {
            account_id?: number;
            normal_points?: number;
            premium_points?: number;
            owned?: boolean;
            active_effects_mask?: string;
            wager_streak?: number;
            event_game_custom_actions?: {
                action_id?: number;
                times_granted?: number;
            }[];
            tip_amount_index?: number;
            active_event_season_id?: number;
            teleport_fx_level?: number;
            networked_event_actions?: {
                action_id?: number;
                times_granted?: number;
            }[];
            periodic_resources?: {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[];
        }[] & ({
            account_id?: number;
            normal_points?: number;
            premium_points?: number;
            owned?: boolean;
            active_effects_mask?: string;
            wager_streak?: number;
            event_game_custom_actions?: {
                action_id?: number;
                times_granted?: number;
            }[];
            tip_amount_index?: number;
            active_event_season_id?: number;
            teleport_fx_level?: number;
            networked_event_actions?: {
                action_id?: number;
                times_granted?: number;
            }[];
            periodic_resources?: {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[];
        } & {
            account_id?: number;
            normal_points?: number;
            premium_points?: number;
            owned?: boolean;
            active_effects_mask?: string;
            wager_streak?: number;
            event_game_custom_actions?: {
                action_id?: number;
                times_granted?: number;
            }[] & ({
                action_id?: number;
                times_granted?: number;
            } & {
                action_id?: number;
                times_granted?: number;
            } & { [K_9 in Exclude<keyof I_1["account_points"][number]["event_game_custom_actions"][number], keyof CMsgLobbyEventPoints_NetworkedEventAction>]: never; })[] & { [K_10 in Exclude<keyof I_1["account_points"][number]["event_game_custom_actions"], keyof {
                action_id?: number;
                times_granted?: number;
            }[]>]: never; };
            tip_amount_index?: number;
            active_event_season_id?: number;
            teleport_fx_level?: number;
            networked_event_actions?: {
                action_id?: number;
                times_granted?: number;
            }[] & ({
                action_id?: number;
                times_granted?: number;
            } & {
                action_id?: number;
                times_granted?: number;
            } & { [K_11 in Exclude<keyof I_1["account_points"][number]["networked_event_actions"][number], keyof CMsgLobbyEventPoints_NetworkedEventAction>]: never; })[] & { [K_12 in Exclude<keyof I_1["account_points"][number]["networked_event_actions"], keyof {
                action_id?: number;
                times_granted?: number;
            }[]>]: never; };
            periodic_resources?: {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[] & ({
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            } & {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            } & { [K_13 in Exclude<keyof I_1["account_points"][number]["periodic_resources"][number], keyof CMsgLobbyEventPoints_PeriodicResourceData>]: never; })[] & { [K_14 in Exclude<keyof I_1["account_points"][number]["periodic_resources"], keyof {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[]>]: never; };
        } & { [K_15 in Exclude<keyof I_1["account_points"][number], keyof CMsgLobbyEventPoints_AccountPoints>]: never; })[] & { [K_16 in Exclude<keyof I_1["account_points"], keyof {
            account_id?: number;
            normal_points?: number;
            premium_points?: number;
            owned?: boolean;
            active_effects_mask?: string;
            wager_streak?: number;
            event_game_custom_actions?: {
                action_id?: number;
                times_granted?: number;
            }[];
            tip_amount_index?: number;
            active_event_season_id?: number;
            teleport_fx_level?: number;
            networked_event_actions?: {
                action_id?: number;
                times_granted?: number;
            }[];
            periodic_resources?: {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[];
        }[]>]: never; };
    } & { [K_17 in Exclude<keyof I_1, keyof CMsgLobbyEventPoints>]: never; }>(object: I_1): CMsgLobbyEventPoints;
};
export declare const CMsgLobbyEventPoints_PeriodicResourceData: {
    fromJSON(object: any): CMsgLobbyEventPoints_PeriodicResourceData;
    toJSON(message: CMsgLobbyEventPoints_PeriodicResourceData): unknown;
    create<I extends {
        periodic_resource_id?: number;
        remaining?: number;
        max?: number;
    } & {
        periodic_resource_id?: number;
        remaining?: number;
        max?: number;
    } & { [K in Exclude<keyof I, keyof CMsgLobbyEventPoints_PeriodicResourceData>]: never; }>(base?: I): CMsgLobbyEventPoints_PeriodicResourceData;
    fromPartial<I_1 extends {
        periodic_resource_id?: number;
        remaining?: number;
        max?: number;
    } & {
        periodic_resource_id?: number;
        remaining?: number;
        max?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgLobbyEventPoints_PeriodicResourceData>]: never; }>(object: I_1): CMsgLobbyEventPoints_PeriodicResourceData;
};
export declare const CMsgLobbyEventPoints_NetworkedEventAction: {
    fromJSON(object: any): CMsgLobbyEventPoints_NetworkedEventAction;
    toJSON(message: CMsgLobbyEventPoints_NetworkedEventAction): unknown;
    create<I extends {
        action_id?: number;
        times_granted?: number;
    } & {
        action_id?: number;
        times_granted?: number;
    } & { [K in Exclude<keyof I, keyof CMsgLobbyEventPoints_NetworkedEventAction>]: never; }>(base?: I): CMsgLobbyEventPoints_NetworkedEventAction;
    fromPartial<I_1 extends {
        action_id?: number;
        times_granted?: number;
    } & {
        action_id?: number;
        times_granted?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgLobbyEventPoints_NetworkedEventAction>]: never; }>(object: I_1): CMsgLobbyEventPoints_NetworkedEventAction;
};
export declare const CMsgLobbyEventPoints_AccountPoints: {
    fromJSON(object: any): CMsgLobbyEventPoints_AccountPoints;
    toJSON(message: CMsgLobbyEventPoints_AccountPoints): unknown;
    create<I extends {
        account_id?: number;
        normal_points?: number;
        premium_points?: number;
        owned?: boolean;
        active_effects_mask?: string;
        wager_streak?: number;
        event_game_custom_actions?: {
            action_id?: number;
            times_granted?: number;
        }[];
        tip_amount_index?: number;
        active_event_season_id?: number;
        teleport_fx_level?: number;
        networked_event_actions?: {
            action_id?: number;
            times_granted?: number;
        }[];
        periodic_resources?: {
            periodic_resource_id?: number;
            remaining?: number;
            max?: number;
        }[];
    } & {
        account_id?: number;
        normal_points?: number;
        premium_points?: number;
        owned?: boolean;
        active_effects_mask?: string;
        wager_streak?: number;
        event_game_custom_actions?: {
            action_id?: number;
            times_granted?: number;
        }[] & ({
            action_id?: number;
            times_granted?: number;
        } & {
            action_id?: number;
            times_granted?: number;
        } & { [K in Exclude<keyof I["event_game_custom_actions"][number], keyof CMsgLobbyEventPoints_NetworkedEventAction>]: never; })[] & { [K_1 in Exclude<keyof I["event_game_custom_actions"], keyof {
            action_id?: number;
            times_granted?: number;
        }[]>]: never; };
        tip_amount_index?: number;
        active_event_season_id?: number;
        teleport_fx_level?: number;
        networked_event_actions?: {
            action_id?: number;
            times_granted?: number;
        }[] & ({
            action_id?: number;
            times_granted?: number;
        } & {
            action_id?: number;
            times_granted?: number;
        } & { [K_2 in Exclude<keyof I["networked_event_actions"][number], keyof CMsgLobbyEventPoints_NetworkedEventAction>]: never; })[] & { [K_3 in Exclude<keyof I["networked_event_actions"], keyof {
            action_id?: number;
            times_granted?: number;
        }[]>]: never; };
        periodic_resources?: {
            periodic_resource_id?: number;
            remaining?: number;
            max?: number;
        }[] & ({
            periodic_resource_id?: number;
            remaining?: number;
            max?: number;
        } & {
            periodic_resource_id?: number;
            remaining?: number;
            max?: number;
        } & { [K_4 in Exclude<keyof I["periodic_resources"][number], keyof CMsgLobbyEventPoints_PeriodicResourceData>]: never; })[] & { [K_5 in Exclude<keyof I["periodic_resources"], keyof {
            periodic_resource_id?: number;
            remaining?: number;
            max?: number;
        }[]>]: never; };
    } & { [K_6 in Exclude<keyof I, keyof CMsgLobbyEventPoints_AccountPoints>]: never; }>(base?: I): CMsgLobbyEventPoints_AccountPoints;
    fromPartial<I_1 extends {
        account_id?: number;
        normal_points?: number;
        premium_points?: number;
        owned?: boolean;
        active_effects_mask?: string;
        wager_streak?: number;
        event_game_custom_actions?: {
            action_id?: number;
            times_granted?: number;
        }[];
        tip_amount_index?: number;
        active_event_season_id?: number;
        teleport_fx_level?: number;
        networked_event_actions?: {
            action_id?: number;
            times_granted?: number;
        }[];
        periodic_resources?: {
            periodic_resource_id?: number;
            remaining?: number;
            max?: number;
        }[];
    } & {
        account_id?: number;
        normal_points?: number;
        premium_points?: number;
        owned?: boolean;
        active_effects_mask?: string;
        wager_streak?: number;
        event_game_custom_actions?: {
            action_id?: number;
            times_granted?: number;
        }[] & ({
            action_id?: number;
            times_granted?: number;
        } & {
            action_id?: number;
            times_granted?: number;
        } & { [K_7 in Exclude<keyof I_1["event_game_custom_actions"][number], keyof CMsgLobbyEventPoints_NetworkedEventAction>]: never; })[] & { [K_8 in Exclude<keyof I_1["event_game_custom_actions"], keyof {
            action_id?: number;
            times_granted?: number;
        }[]>]: never; };
        tip_amount_index?: number;
        active_event_season_id?: number;
        teleport_fx_level?: number;
        networked_event_actions?: {
            action_id?: number;
            times_granted?: number;
        }[] & ({
            action_id?: number;
            times_granted?: number;
        } & {
            action_id?: number;
            times_granted?: number;
        } & { [K_9 in Exclude<keyof I_1["networked_event_actions"][number], keyof CMsgLobbyEventPoints_NetworkedEventAction>]: never; })[] & { [K_10 in Exclude<keyof I_1["networked_event_actions"], keyof {
            action_id?: number;
            times_granted?: number;
        }[]>]: never; };
        periodic_resources?: {
            periodic_resource_id?: number;
            remaining?: number;
            max?: number;
        }[] & ({
            periodic_resource_id?: number;
            remaining?: number;
            max?: number;
        } & {
            periodic_resource_id?: number;
            remaining?: number;
            max?: number;
        } & { [K_11 in Exclude<keyof I_1["periodic_resources"][number], keyof CMsgLobbyEventPoints_PeriodicResourceData>]: never; })[] & { [K_12 in Exclude<keyof I_1["periodic_resources"], keyof {
            periodic_resource_id?: number;
            remaining?: number;
            max?: number;
        }[]>]: never; };
    } & { [K_13 in Exclude<keyof I_1, keyof CMsgLobbyEventPoints_AccountPoints>]: never; }>(object: I_1): CMsgLobbyEventPoints_AccountPoints;
};
export declare const CMsgLobbyEventGameData: {
    fromJSON(object: any): CMsgLobbyEventGameData;
    toJSON(message: CMsgLobbyEventGameData): unknown;
    create<I extends {
        game_seed?: number;
        event_window_start_time?: number;
    } & {
        game_seed?: number;
        event_window_start_time?: number;
    } & { [K in Exclude<keyof I, keyof CMsgLobbyEventGameData>]: never; }>(base?: I): CMsgLobbyEventGameData;
    fromPartial<I_1 extends {
        game_seed?: number;
        event_window_start_time?: number;
    } & {
        game_seed?: number;
        event_window_start_time?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgLobbyEventGameData>]: never; }>(object: I_1): CMsgLobbyEventGameData;
};
export declare const CSODOTALobbyInvite: {
    fromJSON(object: any): CSODOTALobbyInvite;
    toJSON(message: CSODOTALobbyInvite): unknown;
    create<I extends {
        group_id?: string;
        sender_id?: string;
        sender_name?: string;
        members?: {
            name?: string;
            steam_id?: string;
        }[];
        custom_game_id?: string;
        invite_gid?: string;
        custom_game_crc?: string;
        custom_game_timestamp?: number;
    } & {
        group_id?: string;
        sender_id?: string;
        sender_name?: string;
        members?: {
            name?: string;
            steam_id?: string;
        }[] & ({
            name?: string;
            steam_id?: string;
        } & {
            name?: string;
            steam_id?: string;
        } & { [K in Exclude<keyof I["members"][number], keyof CSODOTALobbyInvite_LobbyMember>]: never; })[] & { [K_1 in Exclude<keyof I["members"], keyof {
            name?: string;
            steam_id?: string;
        }[]>]: never; };
        custom_game_id?: string;
        invite_gid?: string;
        custom_game_crc?: string;
        custom_game_timestamp?: number;
    } & { [K_2 in Exclude<keyof I, keyof CSODOTALobbyInvite>]: never; }>(base?: I): CSODOTALobbyInvite;
    fromPartial<I_1 extends {
        group_id?: string;
        sender_id?: string;
        sender_name?: string;
        members?: {
            name?: string;
            steam_id?: string;
        }[];
        custom_game_id?: string;
        invite_gid?: string;
        custom_game_crc?: string;
        custom_game_timestamp?: number;
    } & {
        group_id?: string;
        sender_id?: string;
        sender_name?: string;
        members?: {
            name?: string;
            steam_id?: string;
        }[] & ({
            name?: string;
            steam_id?: string;
        } & {
            name?: string;
            steam_id?: string;
        } & { [K_3 in Exclude<keyof I_1["members"][number], keyof CSODOTALobbyInvite_LobbyMember>]: never; })[] & { [K_4 in Exclude<keyof I_1["members"], keyof {
            name?: string;
            steam_id?: string;
        }[]>]: never; };
        custom_game_id?: string;
        invite_gid?: string;
        custom_game_crc?: string;
        custom_game_timestamp?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CSODOTALobbyInvite>]: never; }>(object: I_1): CSODOTALobbyInvite;
};
export declare const CSODOTALobbyInvite_LobbyMember: {
    fromJSON(object: any): CSODOTALobbyInvite_LobbyMember;
    toJSON(message: CSODOTALobbyInvite_LobbyMember): unknown;
    create<I extends {
        name?: string;
        steam_id?: string;
    } & {
        name?: string;
        steam_id?: string;
    } & { [K in Exclude<keyof I, keyof CSODOTALobbyInvite_LobbyMember>]: never; }>(base?: I): CSODOTALobbyInvite_LobbyMember;
    fromPartial<I_1 extends {
        name?: string;
        steam_id?: string;
    } & {
        name?: string;
        steam_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CSODOTALobbyInvite_LobbyMember>]: never; }>(object: I_1): CSODOTALobbyInvite_LobbyMember;
};
export declare const CSODOTALobbyMember: {
    fromJSON(object: any): CSODOTALobbyMember;
    toJSON(message: CSODOTALobbyMember): unknown;
    create<I extends {
        id?: string;
        hero_id?: number;
        team?: DOTA_GC_TEAM;
        name?: string;
        slot?: number;
        party_id?: string;
        meta_level?: number;
        meta_xp?: number;
        meta_xp_awarded?: number;
        leaver_status?: DOTALeaverStatus_t;
        leaver_actions?: number;
        channel?: number;
        disabled_hero_id?: number[];
        enabled_hero_id?: number[];
        coach_team?: DOTA_GC_TEAM;
        coached_account_ids?: number[];
        coach_rating?: number;
        pwrd_cyber_cafe_id?: number;
        pwrd_cyber_cafe_name?: string;
        disabled_random_hero_bits?: number[];
        rank_change?: number;
        cameraman?: boolean;
        custom_game_product_ids?: number[];
        search_match_type?: MatchType;
        favorite_team_packed?: string;
        is_plus_subscriber?: boolean;
        lane_selection_flags?: number;
        can_earn_rewards?: boolean;
        live_spectator_team?: DOTA_GC_TEAM;
        was_mvp_last_game?: boolean;
        pending_awards?: {
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        }[];
        pending_awards_on_victory?: {
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        }[];
        rank_mmr_boost_type?: EDOTAMMRBoostType;
        queue_point_adjustment?: number;
        rank_tier?: number;
        title?: number;
        guild_id?: number;
        reports_available?: number;
        is_steam_china?: boolean;
        live_spectator_account_id?: number;
        comms_reports_available?: number;
    } & {
        id?: string;
        hero_id?: number;
        team?: DOTA_GC_TEAM;
        name?: string;
        slot?: number;
        party_id?: string;
        meta_level?: number;
        meta_xp?: number;
        meta_xp_awarded?: number;
        leaver_status?: DOTALeaverStatus_t;
        leaver_actions?: number;
        channel?: number;
        disabled_hero_id?: number[] & number[] & { [K in Exclude<keyof I["disabled_hero_id"], keyof number[]>]: never; };
        enabled_hero_id?: number[] & number[] & { [K_1 in Exclude<keyof I["enabled_hero_id"], keyof number[]>]: never; };
        coach_team?: DOTA_GC_TEAM;
        coached_account_ids?: number[] & number[] & { [K_2 in Exclude<keyof I["coached_account_ids"], keyof number[]>]: never; };
        coach_rating?: number;
        pwrd_cyber_cafe_id?: number;
        pwrd_cyber_cafe_name?: string;
        disabled_random_hero_bits?: number[] & number[] & { [K_3 in Exclude<keyof I["disabled_random_hero_bits"], keyof number[]>]: never; };
        rank_change?: number;
        cameraman?: boolean;
        custom_game_product_ids?: number[] & number[] & { [K_4 in Exclude<keyof I["custom_game_product_ids"], keyof number[]>]: never; };
        search_match_type?: MatchType;
        favorite_team_packed?: string;
        is_plus_subscriber?: boolean;
        lane_selection_flags?: number;
        can_earn_rewards?: boolean;
        live_spectator_team?: DOTA_GC_TEAM;
        was_mvp_last_game?: boolean;
        pending_awards?: {
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        }[] & ({
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        } & {
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        } & { [K_5 in Exclude<keyof I["pending_awards"][number], keyof CMsgPendingEventAward>]: never; })[] & { [K_6 in Exclude<keyof I["pending_awards"], keyof {
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        }[]>]: never; };
        pending_awards_on_victory?: {
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        }[] & ({
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        } & {
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        } & { [K_7 in Exclude<keyof I["pending_awards_on_victory"][number], keyof CMsgPendingEventAward>]: never; })[] & { [K_8 in Exclude<keyof I["pending_awards_on_victory"], keyof {
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        }[]>]: never; };
        rank_mmr_boost_type?: EDOTAMMRBoostType;
        queue_point_adjustment?: number;
        rank_tier?: number;
        title?: number;
        guild_id?: number;
        reports_available?: number;
        is_steam_china?: boolean;
        live_spectator_account_id?: number;
        comms_reports_available?: number;
    } & { [K_9 in Exclude<keyof I, keyof CSODOTALobbyMember>]: never; }>(base?: I): CSODOTALobbyMember;
    fromPartial<I_1 extends {
        id?: string;
        hero_id?: number;
        team?: DOTA_GC_TEAM;
        name?: string;
        slot?: number;
        party_id?: string;
        meta_level?: number;
        meta_xp?: number;
        meta_xp_awarded?: number;
        leaver_status?: DOTALeaverStatus_t;
        leaver_actions?: number;
        channel?: number;
        disabled_hero_id?: number[];
        enabled_hero_id?: number[];
        coach_team?: DOTA_GC_TEAM;
        coached_account_ids?: number[];
        coach_rating?: number;
        pwrd_cyber_cafe_id?: number;
        pwrd_cyber_cafe_name?: string;
        disabled_random_hero_bits?: number[];
        rank_change?: number;
        cameraman?: boolean;
        custom_game_product_ids?: number[];
        search_match_type?: MatchType;
        favorite_team_packed?: string;
        is_plus_subscriber?: boolean;
        lane_selection_flags?: number;
        can_earn_rewards?: boolean;
        live_spectator_team?: DOTA_GC_TEAM;
        was_mvp_last_game?: boolean;
        pending_awards?: {
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        }[];
        pending_awards_on_victory?: {
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        }[];
        rank_mmr_boost_type?: EDOTAMMRBoostType;
        queue_point_adjustment?: number;
        rank_tier?: number;
        title?: number;
        guild_id?: number;
        reports_available?: number;
        is_steam_china?: boolean;
        live_spectator_account_id?: number;
        comms_reports_available?: number;
    } & {
        id?: string;
        hero_id?: number;
        team?: DOTA_GC_TEAM;
        name?: string;
        slot?: number;
        party_id?: string;
        meta_level?: number;
        meta_xp?: number;
        meta_xp_awarded?: number;
        leaver_status?: DOTALeaverStatus_t;
        leaver_actions?: number;
        channel?: number;
        disabled_hero_id?: number[] & number[] & { [K_10 in Exclude<keyof I_1["disabled_hero_id"], keyof number[]>]: never; };
        enabled_hero_id?: number[] & number[] & { [K_11 in Exclude<keyof I_1["enabled_hero_id"], keyof number[]>]: never; };
        coach_team?: DOTA_GC_TEAM;
        coached_account_ids?: number[] & number[] & { [K_12 in Exclude<keyof I_1["coached_account_ids"], keyof number[]>]: never; };
        coach_rating?: number;
        pwrd_cyber_cafe_id?: number;
        pwrd_cyber_cafe_name?: string;
        disabled_random_hero_bits?: number[] & number[] & { [K_13 in Exclude<keyof I_1["disabled_random_hero_bits"], keyof number[]>]: never; };
        rank_change?: number;
        cameraman?: boolean;
        custom_game_product_ids?: number[] & number[] & { [K_14 in Exclude<keyof I_1["custom_game_product_ids"], keyof number[]>]: never; };
        search_match_type?: MatchType;
        favorite_team_packed?: string;
        is_plus_subscriber?: boolean;
        lane_selection_flags?: number;
        can_earn_rewards?: boolean;
        live_spectator_team?: DOTA_GC_TEAM;
        was_mvp_last_game?: boolean;
        pending_awards?: {
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        }[] & ({
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        } & {
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        } & { [K_15 in Exclude<keyof I_1["pending_awards"][number], keyof CMsgPendingEventAward>]: never; })[] & { [K_16 in Exclude<keyof I_1["pending_awards"], keyof {
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        }[]>]: never; };
        pending_awards_on_victory?: {
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        }[] & ({
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        } & {
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        } & { [K_17 in Exclude<keyof I_1["pending_awards_on_victory"][number], keyof CMsgPendingEventAward>]: never; })[] & { [K_18 in Exclude<keyof I_1["pending_awards_on_victory"], keyof {
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        }[]>]: never; };
        rank_mmr_boost_type?: EDOTAMMRBoostType;
        queue_point_adjustment?: number;
        rank_tier?: number;
        title?: number;
        guild_id?: number;
        reports_available?: number;
        is_steam_china?: boolean;
        live_spectator_account_id?: number;
        comms_reports_available?: number;
    } & { [K_19 in Exclude<keyof I_1, keyof CSODOTALobbyMember>]: never; }>(object: I_1): CSODOTALobbyMember;
};
export declare const CSODOTAServerLobbyMember: {
    fromJSON(_: any): CSODOTAServerLobbyMember;
    toJSON(_: CSODOTAServerLobbyMember): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CSODOTAServerLobbyMember;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CSODOTAServerLobbyMember;
};
export declare const CSODOTAStaticLobbyMember: {
    fromJSON(_: any): CSODOTAStaticLobbyMember;
    toJSON(_: CSODOTAStaticLobbyMember): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CSODOTAStaticLobbyMember;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CSODOTAStaticLobbyMember;
};
export declare const CSODOTAServerStaticLobbyMember: {
    fromJSON(_: any): CSODOTAServerStaticLobbyMember;
    toJSON(_: CSODOTAServerStaticLobbyMember): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CSODOTAServerStaticLobbyMember;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CSODOTAServerStaticLobbyMember;
};
export declare const CLobbyTeamDetails: {
    fromJSON(object: any): CLobbyTeamDetails;
    toJSON(message: CLobbyTeamDetails): unknown;
    create<I extends {
        team_name?: string;
        team_tag?: string;
        team_id?: number;
        team_logo?: string;
        team_base_logo?: string;
        team_banner_logo?: string;
        team_complete?: boolean;
        rank?: number;
        rank_change?: number;
        is_home_team?: boolean;
        is_challenge_match?: boolean;
        challenge_match_token_account?: string;
        team_logo_url?: string;
        team_abbreviation?: string;
    } & {
        team_name?: string;
        team_tag?: string;
        team_id?: number;
        team_logo?: string;
        team_base_logo?: string;
        team_banner_logo?: string;
        team_complete?: boolean;
        rank?: number;
        rank_change?: number;
        is_home_team?: boolean;
        is_challenge_match?: boolean;
        challenge_match_token_account?: string;
        team_logo_url?: string;
        team_abbreviation?: string;
    } & { [K in Exclude<keyof I, keyof CLobbyTeamDetails>]: never; }>(base?: I): CLobbyTeamDetails;
    fromPartial<I_1 extends {
        team_name?: string;
        team_tag?: string;
        team_id?: number;
        team_logo?: string;
        team_base_logo?: string;
        team_banner_logo?: string;
        team_complete?: boolean;
        rank?: number;
        rank_change?: number;
        is_home_team?: boolean;
        is_challenge_match?: boolean;
        challenge_match_token_account?: string;
        team_logo_url?: string;
        team_abbreviation?: string;
    } & {
        team_name?: string;
        team_tag?: string;
        team_id?: number;
        team_logo?: string;
        team_base_logo?: string;
        team_banner_logo?: string;
        team_complete?: boolean;
        rank?: number;
        rank_change?: number;
        is_home_team?: boolean;
        is_challenge_match?: boolean;
        challenge_match_token_account?: string;
        team_logo_url?: string;
        team_abbreviation?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CLobbyTeamDetails>]: never; }>(object: I_1): CLobbyTeamDetails;
};
export declare const CLobbyGuildDetails: {
    fromJSON(object: any): CLobbyGuildDetails;
    toJSON(message: CLobbyGuildDetails): unknown;
    create<I extends {
        guild_id?: number;
        guild_primary_color?: number;
        guild_secondary_color?: number;
        guild_pattern?: number;
        guild_logo?: string;
        guild_points?: number;
        guild_event?: number;
        guild_flags?: number;
        team_for_guild?: DOTA_GC_TEAM;
        guild_tag?: string;
        guild_weekly_percentile?: number;
    } & {
        guild_id?: number;
        guild_primary_color?: number;
        guild_secondary_color?: number;
        guild_pattern?: number;
        guild_logo?: string;
        guild_points?: number;
        guild_event?: number;
        guild_flags?: number;
        team_for_guild?: DOTA_GC_TEAM;
        guild_tag?: string;
        guild_weekly_percentile?: number;
    } & { [K in Exclude<keyof I, keyof CLobbyGuildDetails>]: never; }>(base?: I): CLobbyGuildDetails;
    fromPartial<I_1 extends {
        guild_id?: number;
        guild_primary_color?: number;
        guild_secondary_color?: number;
        guild_pattern?: number;
        guild_logo?: string;
        guild_points?: number;
        guild_event?: number;
        guild_flags?: number;
        team_for_guild?: DOTA_GC_TEAM;
        guild_tag?: string;
        guild_weekly_percentile?: number;
    } & {
        guild_id?: number;
        guild_primary_color?: number;
        guild_secondary_color?: number;
        guild_pattern?: number;
        guild_logo?: string;
        guild_points?: number;
        guild_event?: number;
        guild_flags?: number;
        team_for_guild?: DOTA_GC_TEAM;
        guild_tag?: string;
        guild_weekly_percentile?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CLobbyGuildDetails>]: never; }>(object: I_1): CLobbyGuildDetails;
};
export declare const CLobbyTimedRewardDetails: {
    fromJSON(object: any): CLobbyTimedRewardDetails;
    toJSON(message: CLobbyTimedRewardDetails): unknown;
    create<I extends {
        item_def_index?: number;
        is_supply_crate?: boolean;
        is_timed_drop?: boolean;
        account_id?: number;
        origin?: number;
    } & {
        item_def_index?: number;
        is_supply_crate?: boolean;
        is_timed_drop?: boolean;
        account_id?: number;
        origin?: number;
    } & { [K in Exclude<keyof I, keyof CLobbyTimedRewardDetails>]: never; }>(base?: I): CLobbyTimedRewardDetails;
    fromPartial<I_1 extends {
        item_def_index?: number;
        is_supply_crate?: boolean;
        is_timed_drop?: boolean;
        account_id?: number;
        origin?: number;
    } & {
        item_def_index?: number;
        is_supply_crate?: boolean;
        is_timed_drop?: boolean;
        account_id?: number;
        origin?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CLobbyTimedRewardDetails>]: never; }>(object: I_1): CLobbyTimedRewardDetails;
};
export declare const CLobbyBroadcastChannelInfo: {
    fromJSON(object: any): CLobbyBroadcastChannelInfo;
    toJSON(message: CLobbyBroadcastChannelInfo): unknown;
    create<I extends {
        channel_id?: number;
        country_code?: string;
        description?: string;
        language_code?: string;
    } & {
        channel_id?: number;
        country_code?: string;
        description?: string;
        language_code?: string;
    } & { [K in Exclude<keyof I, keyof CLobbyBroadcastChannelInfo>]: never; }>(base?: I): CLobbyBroadcastChannelInfo;
    fromPartial<I_1 extends {
        channel_id?: number;
        country_code?: string;
        description?: string;
        language_code?: string;
    } & {
        channel_id?: number;
        country_code?: string;
        description?: string;
        language_code?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CLobbyBroadcastChannelInfo>]: never; }>(object: I_1): CLobbyBroadcastChannelInfo;
};
export declare const CLobbyGuildChallenge: {
    fromJSON(object: any): CLobbyGuildChallenge;
    toJSON(message: CLobbyGuildChallenge): unknown;
    create<I extends {
        guild_id?: number;
        event_id?: EEvent;
        challenge_instance_id?: number;
        challenge_parameter?: number;
        challenge_timestamp?: number;
        challenge_period_serial?: number;
        challenge_progress_at_start?: number;
        eligible_account_ids?: number[];
    } & {
        guild_id?: number;
        event_id?: EEvent;
        challenge_instance_id?: number;
        challenge_parameter?: number;
        challenge_timestamp?: number;
        challenge_period_serial?: number;
        challenge_progress_at_start?: number;
        eligible_account_ids?: number[] & number[] & { [K in Exclude<keyof I["eligible_account_ids"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CLobbyGuildChallenge>]: never; }>(base?: I): CLobbyGuildChallenge;
    fromPartial<I_1 extends {
        guild_id?: number;
        event_id?: EEvent;
        challenge_instance_id?: number;
        challenge_parameter?: number;
        challenge_timestamp?: number;
        challenge_period_serial?: number;
        challenge_progress_at_start?: number;
        eligible_account_ids?: number[];
    } & {
        guild_id?: number;
        event_id?: EEvent;
        challenge_instance_id?: number;
        challenge_parameter?: number;
        challenge_timestamp?: number;
        challenge_period_serial?: number;
        challenge_progress_at_start?: number;
        eligible_account_ids?: number[] & number[] & { [K_2 in Exclude<keyof I_1["eligible_account_ids"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CLobbyGuildChallenge>]: never; }>(object: I_1): CLobbyGuildChallenge;
};
export declare const CSODOTALobby: {
    fromJSON(object: any): CSODOTALobby;
    toJSON(message: CSODOTALobby): unknown;
    create<I extends {
        lobby_id?: string;
        all_members?: {
            id?: string;
            hero_id?: number;
            team?: DOTA_GC_TEAM;
            name?: string;
            slot?: number;
            party_id?: string;
            meta_level?: number;
            meta_xp?: number;
            meta_xp_awarded?: number;
            leaver_status?: DOTALeaverStatus_t;
            leaver_actions?: number;
            channel?: number;
            disabled_hero_id?: number[];
            enabled_hero_id?: number[];
            coach_team?: DOTA_GC_TEAM;
            coached_account_ids?: number[];
            coach_rating?: number;
            pwrd_cyber_cafe_id?: number;
            pwrd_cyber_cafe_name?: string;
            disabled_random_hero_bits?: number[];
            rank_change?: number;
            cameraman?: boolean;
            custom_game_product_ids?: number[];
            search_match_type?: MatchType;
            favorite_team_packed?: string;
            is_plus_subscriber?: boolean;
            lane_selection_flags?: number;
            can_earn_rewards?: boolean;
            live_spectator_team?: DOTA_GC_TEAM;
            was_mvp_last_game?: boolean;
            pending_awards?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
            pending_awards_on_victory?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
            rank_mmr_boost_type?: EDOTAMMRBoostType;
            queue_point_adjustment?: number;
            rank_tier?: number;
            title?: number;
            guild_id?: number;
            reports_available?: number;
            is_steam_china?: boolean;
            live_spectator_account_id?: number;
            comms_reports_available?: number;
        }[];
        member_indices?: number[];
        left_member_indices?: number[];
        free_member_indices?: number[];
        leader_id?: string;
        server_id?: string;
        game_mode?: number;
        pending_invites?: string[];
        state?: CSODOTALobby_State;
        connect?: string;
        lobby_type?: CSODOTALobby_LobbyType;
        allow_cheats?: boolean;
        fill_with_bots?: boolean;
        intro_mode?: boolean;
        game_name?: string;
        team_details?: {
            team_name?: string;
            team_tag?: string;
            team_id?: number;
            team_logo?: string;
            team_base_logo?: string;
            team_banner_logo?: string;
            team_complete?: boolean;
            rank?: number;
            rank_change?: number;
            is_home_team?: boolean;
            is_challenge_match?: boolean;
            challenge_match_token_account?: string;
            team_logo_url?: string;
            team_abbreviation?: string;
        }[];
        tutorial_lesson?: number;
        tournament_id?: number;
        tournament_game_id?: number;
        server_region?: number;
        game_state?: DOTA_GameState;
        num_spectators?: number;
        matchgroup?: number;
        cm_pick?: DOTA_CM_PICK;
        match_id?: string;
        allow_spectating?: boolean;
        bot_difficulty_radiant?: DOTABotDifficulty;
        timed_reward_details?: {
            item_def_index?: number;
            is_supply_crate?: boolean;
            is_timed_drop?: boolean;
            account_id?: number;
            origin?: number;
        }[];
        pass_key?: string;
        leagueid?: number;
        penalty_level_radiant?: number;
        penalty_level_dire?: number;
        load_game_id?: number;
        series_type?: number;
        radiant_series_wins?: number;
        dire_series_wins?: number;
        loot_generated?: number;
        loot_awarded?: number;
        allchat?: boolean;
        dota_tv_delay?: LobbyDotaTVDelay;
        custom_game_mode?: string;
        custom_map_name?: string;
        custom_difficulty?: number;
        lan?: boolean;
        broadcast_channel_info?: {
            channel_id?: number;
            country_code?: string;
            description?: string;
            language_code?: string;
        }[];
        first_leaver_accountid?: number;
        series_id?: number;
        low_priority?: boolean;
        extra_messages?: {
            id?: number;
            contents?: string;
        }[];
        save_game?: {
            match_id?: string;
            save_time?: number;
            players?: {
                team?: DOTA_GC_TEAM;
                name?: string;
                hero?: string;
            }[];
            save_instances?: {
                game_time?: number;
                team1_score?: number;
                team2_score?: number;
                player_positions?: {
                    x?: number;
                    y?: number;
                }[];
                save_id?: number;
                save_time?: number;
            }[];
        };
        first_blood_happened?: boolean;
        match_outcome?: EMatchOutcome;
        mass_disconnect?: boolean;
        custom_game_id?: string;
        custom_min_players?: number;
        custom_max_players?: number;
        visibility?: DOTALobbyVisibility;
        custom_game_crc?: string;
        custom_game_auto_created_lobby?: boolean;
        custom_game_timestamp?: number;
        previous_series_matches?: string[];
        previous_match_override?: string;
        game_start_time?: number;
        pause_setting?: LobbyDotaPauseSetting;
        weekend_tourney_division_id?: number;
        weekend_tourney_skill_level?: number;
        weekend_tourney_bracket_round?: number;
        bot_difficulty_dire?: DOTABotDifficulty;
        bot_radiant?: string;
        bot_dire?: string;
        event_progression_enabled?: EEvent[];
        selection_priority_rules?: DOTASelectionPriorityRules;
        series_previous_selection_priority_team_id?: number;
        series_current_selection_priority_team_id?: number;
        series_current_priority_team_choice?: DOTASelectionPriorityChoice;
        series_current_non_priority_team_choice?: DOTASelectionPriorityChoice;
        series_current_selection_priority_used_coin_toss?: boolean;
        current_primary_event?: EEvent;
        emergency_disabled_hero_ids?: number[];
        custom_game_private_key?: string;
        custom_game_penalties?: boolean;
        lan_host_ping_location?: string;
        league_node_id?: number;
        match_duration?: number;
        league_phase?: number;
        record_detailed_stats?: boolean;
        experimental_gameplay_enabled?: boolean;
        guild_challenges?: {
            guild_id?: number;
            event_id?: EEvent;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            challenge_timestamp?: number;
            challenge_period_serial?: number;
            challenge_progress_at_start?: number;
            eligible_account_ids?: number[];
        }[];
        guild_details?: {
            guild_id?: number;
            guild_primary_color?: number;
            guild_secondary_color?: number;
            guild_pattern?: number;
            guild_logo?: string;
            guild_points?: number;
            guild_event?: number;
            guild_flags?: number;
            team_for_guild?: DOTA_GC_TEAM;
            guild_tag?: string;
            guild_weekly_percentile?: number;
        }[];
        lobby_event_points?: {
            event_id?: number;
            account_points?: {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
        }[];
        requested_hero_ids?: number[];
        coach_friend_requests?: {
            coach_account_id?: number;
            player_account_id?: number;
            request_state?: ELobbyMemberCoachRequestState;
        }[];
        is_in_steam_china?: boolean;
        with_scenario_save?: boolean;
        lobby_creation_time?: number;
        event_game_definition?: string;
        extra_startup_messages?: {
            id?: number;
            contents?: string;
        }[];
    } & {
        lobby_id?: string;
        all_members?: {
            id?: string;
            hero_id?: number;
            team?: DOTA_GC_TEAM;
            name?: string;
            slot?: number;
            party_id?: string;
            meta_level?: number;
            meta_xp?: number;
            meta_xp_awarded?: number;
            leaver_status?: DOTALeaverStatus_t;
            leaver_actions?: number;
            channel?: number;
            disabled_hero_id?: number[];
            enabled_hero_id?: number[];
            coach_team?: DOTA_GC_TEAM;
            coached_account_ids?: number[];
            coach_rating?: number;
            pwrd_cyber_cafe_id?: number;
            pwrd_cyber_cafe_name?: string;
            disabled_random_hero_bits?: number[];
            rank_change?: number;
            cameraman?: boolean;
            custom_game_product_ids?: number[];
            search_match_type?: MatchType;
            favorite_team_packed?: string;
            is_plus_subscriber?: boolean;
            lane_selection_flags?: number;
            can_earn_rewards?: boolean;
            live_spectator_team?: DOTA_GC_TEAM;
            was_mvp_last_game?: boolean;
            pending_awards?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
            pending_awards_on_victory?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
            rank_mmr_boost_type?: EDOTAMMRBoostType;
            queue_point_adjustment?: number;
            rank_tier?: number;
            title?: number;
            guild_id?: number;
            reports_available?: number;
            is_steam_china?: boolean;
            live_spectator_account_id?: number;
            comms_reports_available?: number;
        }[] & ({
            id?: string;
            hero_id?: number;
            team?: DOTA_GC_TEAM;
            name?: string;
            slot?: number;
            party_id?: string;
            meta_level?: number;
            meta_xp?: number;
            meta_xp_awarded?: number;
            leaver_status?: DOTALeaverStatus_t;
            leaver_actions?: number;
            channel?: number;
            disabled_hero_id?: number[];
            enabled_hero_id?: number[];
            coach_team?: DOTA_GC_TEAM;
            coached_account_ids?: number[];
            coach_rating?: number;
            pwrd_cyber_cafe_id?: number;
            pwrd_cyber_cafe_name?: string;
            disabled_random_hero_bits?: number[];
            rank_change?: number;
            cameraman?: boolean;
            custom_game_product_ids?: number[];
            search_match_type?: MatchType;
            favorite_team_packed?: string;
            is_plus_subscriber?: boolean;
            lane_selection_flags?: number;
            can_earn_rewards?: boolean;
            live_spectator_team?: DOTA_GC_TEAM;
            was_mvp_last_game?: boolean;
            pending_awards?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
            pending_awards_on_victory?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
            rank_mmr_boost_type?: EDOTAMMRBoostType;
            queue_point_adjustment?: number;
            rank_tier?: number;
            title?: number;
            guild_id?: number;
            reports_available?: number;
            is_steam_china?: boolean;
            live_spectator_account_id?: number;
            comms_reports_available?: number;
        } & {
            id?: string;
            hero_id?: number;
            team?: DOTA_GC_TEAM;
            name?: string;
            slot?: number;
            party_id?: string;
            meta_level?: number;
            meta_xp?: number;
            meta_xp_awarded?: number;
            leaver_status?: DOTALeaverStatus_t;
            leaver_actions?: number;
            channel?: number;
            disabled_hero_id?: number[] & number[] & { [K in Exclude<keyof I["all_members"][number]["disabled_hero_id"], keyof number[]>]: never; };
            enabled_hero_id?: number[] & number[] & { [K_1 in Exclude<keyof I["all_members"][number]["enabled_hero_id"], keyof number[]>]: never; };
            coach_team?: DOTA_GC_TEAM;
            coached_account_ids?: number[] & number[] & { [K_2 in Exclude<keyof I["all_members"][number]["coached_account_ids"], keyof number[]>]: never; };
            coach_rating?: number;
            pwrd_cyber_cafe_id?: number;
            pwrd_cyber_cafe_name?: string;
            disabled_random_hero_bits?: number[] & number[] & { [K_3 in Exclude<keyof I["all_members"][number]["disabled_random_hero_bits"], keyof number[]>]: never; };
            rank_change?: number;
            cameraman?: boolean;
            custom_game_product_ids?: number[] & number[] & { [K_4 in Exclude<keyof I["all_members"][number]["custom_game_product_ids"], keyof number[]>]: never; };
            search_match_type?: MatchType;
            favorite_team_packed?: string;
            is_plus_subscriber?: boolean;
            lane_selection_flags?: number;
            can_earn_rewards?: boolean;
            live_spectator_team?: DOTA_GC_TEAM;
            was_mvp_last_game?: boolean;
            pending_awards?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[] & ({
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            } & {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            } & { [K_5 in Exclude<keyof I["all_members"][number]["pending_awards"][number], keyof CMsgPendingEventAward>]: never; })[] & { [K_6 in Exclude<keyof I["all_members"][number]["pending_awards"], keyof {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[]>]: never; };
            pending_awards_on_victory?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[] & ({
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            } & {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            } & { [K_7 in Exclude<keyof I["all_members"][number]["pending_awards_on_victory"][number], keyof CMsgPendingEventAward>]: never; })[] & { [K_8 in Exclude<keyof I["all_members"][number]["pending_awards_on_victory"], keyof {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[]>]: never; };
            rank_mmr_boost_type?: EDOTAMMRBoostType;
            queue_point_adjustment?: number;
            rank_tier?: number;
            title?: number;
            guild_id?: number;
            reports_available?: number;
            is_steam_china?: boolean;
            live_spectator_account_id?: number;
            comms_reports_available?: number;
        } & { [K_9 in Exclude<keyof I["all_members"][number], keyof CSODOTALobbyMember>]: never; })[] & { [K_10 in Exclude<keyof I["all_members"], keyof {
            id?: string;
            hero_id?: number;
            team?: DOTA_GC_TEAM;
            name?: string;
            slot?: number;
            party_id?: string;
            meta_level?: number;
            meta_xp?: number;
            meta_xp_awarded?: number;
            leaver_status?: DOTALeaverStatus_t;
            leaver_actions?: number;
            channel?: number;
            disabled_hero_id?: number[];
            enabled_hero_id?: number[];
            coach_team?: DOTA_GC_TEAM;
            coached_account_ids?: number[];
            coach_rating?: number;
            pwrd_cyber_cafe_id?: number;
            pwrd_cyber_cafe_name?: string;
            disabled_random_hero_bits?: number[];
            rank_change?: number;
            cameraman?: boolean;
            custom_game_product_ids?: number[];
            search_match_type?: MatchType;
            favorite_team_packed?: string;
            is_plus_subscriber?: boolean;
            lane_selection_flags?: number;
            can_earn_rewards?: boolean;
            live_spectator_team?: DOTA_GC_TEAM;
            was_mvp_last_game?: boolean;
            pending_awards?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
            pending_awards_on_victory?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
            rank_mmr_boost_type?: EDOTAMMRBoostType;
            queue_point_adjustment?: number;
            rank_tier?: number;
            title?: number;
            guild_id?: number;
            reports_available?: number;
            is_steam_china?: boolean;
            live_spectator_account_id?: number;
            comms_reports_available?: number;
        }[]>]: never; };
        member_indices?: number[] & number[] & { [K_11 in Exclude<keyof I["member_indices"], keyof number[]>]: never; };
        left_member_indices?: number[] & number[] & { [K_12 in Exclude<keyof I["left_member_indices"], keyof number[]>]: never; };
        free_member_indices?: number[] & number[] & { [K_13 in Exclude<keyof I["free_member_indices"], keyof number[]>]: never; };
        leader_id?: string;
        server_id?: string;
        game_mode?: number;
        pending_invites?: string[] & string[] & { [K_14 in Exclude<keyof I["pending_invites"], keyof string[]>]: never; };
        state?: CSODOTALobby_State;
        connect?: string;
        lobby_type?: CSODOTALobby_LobbyType;
        allow_cheats?: boolean;
        fill_with_bots?: boolean;
        intro_mode?: boolean;
        game_name?: string;
        team_details?: {
            team_name?: string;
            team_tag?: string;
            team_id?: number;
            team_logo?: string;
            team_base_logo?: string;
            team_banner_logo?: string;
            team_complete?: boolean;
            rank?: number;
            rank_change?: number;
            is_home_team?: boolean;
            is_challenge_match?: boolean;
            challenge_match_token_account?: string;
            team_logo_url?: string;
            team_abbreviation?: string;
        }[] & ({
            team_name?: string;
            team_tag?: string;
            team_id?: number;
            team_logo?: string;
            team_base_logo?: string;
            team_banner_logo?: string;
            team_complete?: boolean;
            rank?: number;
            rank_change?: number;
            is_home_team?: boolean;
            is_challenge_match?: boolean;
            challenge_match_token_account?: string;
            team_logo_url?: string;
            team_abbreviation?: string;
        } & {
            team_name?: string;
            team_tag?: string;
            team_id?: number;
            team_logo?: string;
            team_base_logo?: string;
            team_banner_logo?: string;
            team_complete?: boolean;
            rank?: number;
            rank_change?: number;
            is_home_team?: boolean;
            is_challenge_match?: boolean;
            challenge_match_token_account?: string;
            team_logo_url?: string;
            team_abbreviation?: string;
        } & { [K_15 in Exclude<keyof I["team_details"][number], keyof CLobbyTeamDetails>]: never; })[] & { [K_16 in Exclude<keyof I["team_details"], keyof {
            team_name?: string;
            team_tag?: string;
            team_id?: number;
            team_logo?: string;
            team_base_logo?: string;
            team_banner_logo?: string;
            team_complete?: boolean;
            rank?: number;
            rank_change?: number;
            is_home_team?: boolean;
            is_challenge_match?: boolean;
            challenge_match_token_account?: string;
            team_logo_url?: string;
            team_abbreviation?: string;
        }[]>]: never; };
        tutorial_lesson?: number;
        tournament_id?: number;
        tournament_game_id?: number;
        server_region?: number;
        game_state?: DOTA_GameState;
        num_spectators?: number;
        matchgroup?: number;
        cm_pick?: DOTA_CM_PICK;
        match_id?: string;
        allow_spectating?: boolean;
        bot_difficulty_radiant?: DOTABotDifficulty;
        timed_reward_details?: {
            item_def_index?: number;
            is_supply_crate?: boolean;
            is_timed_drop?: boolean;
            account_id?: number;
            origin?: number;
        }[] & ({
            item_def_index?: number;
            is_supply_crate?: boolean;
            is_timed_drop?: boolean;
            account_id?: number;
            origin?: number;
        } & {
            item_def_index?: number;
            is_supply_crate?: boolean;
            is_timed_drop?: boolean;
            account_id?: number;
            origin?: number;
        } & { [K_17 in Exclude<keyof I["timed_reward_details"][number], keyof CLobbyTimedRewardDetails>]: never; })[] & { [K_18 in Exclude<keyof I["timed_reward_details"], keyof {
            item_def_index?: number;
            is_supply_crate?: boolean;
            is_timed_drop?: boolean;
            account_id?: number;
            origin?: number;
        }[]>]: never; };
        pass_key?: string;
        leagueid?: number;
        penalty_level_radiant?: number;
        penalty_level_dire?: number;
        load_game_id?: number;
        series_type?: number;
        radiant_series_wins?: number;
        dire_series_wins?: number;
        loot_generated?: number;
        loot_awarded?: number;
        allchat?: boolean;
        dota_tv_delay?: LobbyDotaTVDelay;
        custom_game_mode?: string;
        custom_map_name?: string;
        custom_difficulty?: number;
        lan?: boolean;
        broadcast_channel_info?: {
            channel_id?: number;
            country_code?: string;
            description?: string;
            language_code?: string;
        }[] & ({
            channel_id?: number;
            country_code?: string;
            description?: string;
            language_code?: string;
        } & {
            channel_id?: number;
            country_code?: string;
            description?: string;
            language_code?: string;
        } & { [K_19 in Exclude<keyof I["broadcast_channel_info"][number], keyof CLobbyBroadcastChannelInfo>]: never; })[] & { [K_20 in Exclude<keyof I["broadcast_channel_info"], keyof {
            channel_id?: number;
            country_code?: string;
            description?: string;
            language_code?: string;
        }[]>]: never; };
        first_leaver_accountid?: number;
        series_id?: number;
        low_priority?: boolean;
        extra_messages?: {
            id?: number;
            contents?: string;
        }[] & ({
            id?: number;
            contents?: string;
        } & {
            id?: number;
            contents?: string;
        } & { [K_21 in Exclude<keyof I["extra_messages"][number], keyof CSODOTALobby_CExtraMsg>]: never; })[] & { [K_22 in Exclude<keyof I["extra_messages"], keyof {
            id?: number;
            contents?: string;
        }[]>]: never; };
        save_game?: {
            match_id?: string;
            save_time?: number;
            players?: {
                team?: DOTA_GC_TEAM;
                name?: string;
                hero?: string;
            }[];
            save_instances?: {
                game_time?: number;
                team1_score?: number;
                team2_score?: number;
                player_positions?: {
                    x?: number;
                    y?: number;
                }[];
                save_id?: number;
                save_time?: number;
            }[];
        } & {
            match_id?: string;
            save_time?: number;
            players?: {
                team?: DOTA_GC_TEAM;
                name?: string;
                hero?: string;
            }[] & ({
                team?: DOTA_GC_TEAM;
                name?: string;
                hero?: string;
            } & {
                team?: DOTA_GC_TEAM;
                name?: string;
                hero?: string;
            } & { [K_23 in Exclude<keyof I["save_game"]["players"][number], keyof import("./dota_shared_enums").CDOTASaveGame_Player>]: never; })[] & { [K_24 in Exclude<keyof I["save_game"]["players"], keyof {
                team?: DOTA_GC_TEAM;
                name?: string;
                hero?: string;
            }[]>]: never; };
            save_instances?: {
                game_time?: number;
                team1_score?: number;
                team2_score?: number;
                player_positions?: {
                    x?: number;
                    y?: number;
                }[];
                save_id?: number;
                save_time?: number;
            }[] & ({
                game_time?: number;
                team1_score?: number;
                team2_score?: number;
                player_positions?: {
                    x?: number;
                    y?: number;
                }[];
                save_id?: number;
                save_time?: number;
            } & {
                game_time?: number;
                team1_score?: number;
                team2_score?: number;
                player_positions?: {
                    x?: number;
                    y?: number;
                }[] & ({
                    x?: number;
                    y?: number;
                } & {
                    x?: number;
                    y?: number;
                } & { [K_25 in Exclude<keyof I["save_game"]["save_instances"][number]["player_positions"][number], keyof import("./dota_shared_enums").CDOTASaveGame_SaveInstance_PlayerPositions>]: never; })[] & { [K_26 in Exclude<keyof I["save_game"]["save_instances"][number]["player_positions"], keyof {
                    x?: number;
                    y?: number;
                }[]>]: never; };
                save_id?: number;
                save_time?: number;
            } & { [K_27 in Exclude<keyof I["save_game"]["save_instances"][number], keyof import("./dota_shared_enums").CDOTASaveGame_SaveInstance>]: never; })[] & { [K_28 in Exclude<keyof I["save_game"]["save_instances"], keyof {
                game_time?: number;
                team1_score?: number;
                team2_score?: number;
                player_positions?: {
                    x?: number;
                    y?: number;
                }[];
                save_id?: number;
                save_time?: number;
            }[]>]: never; };
        } & { [K_29 in Exclude<keyof I["save_game"], keyof CDOTASaveGame>]: never; };
        first_blood_happened?: boolean;
        match_outcome?: EMatchOutcome;
        mass_disconnect?: boolean;
        custom_game_id?: string;
        custom_min_players?: number;
        custom_max_players?: number;
        visibility?: DOTALobbyVisibility;
        custom_game_crc?: string;
        custom_game_auto_created_lobby?: boolean;
        custom_game_timestamp?: number;
        previous_series_matches?: string[] & string[] & { [K_30 in Exclude<keyof I["previous_series_matches"], keyof string[]>]: never; };
        previous_match_override?: string;
        game_start_time?: number;
        pause_setting?: LobbyDotaPauseSetting;
        weekend_tourney_division_id?: number;
        weekend_tourney_skill_level?: number;
        weekend_tourney_bracket_round?: number;
        bot_difficulty_dire?: DOTABotDifficulty;
        bot_radiant?: string;
        bot_dire?: string;
        event_progression_enabled?: EEvent[] & EEvent[] & { [K_31 in Exclude<keyof I["event_progression_enabled"], keyof EEvent[]>]: never; };
        selection_priority_rules?: DOTASelectionPriorityRules;
        series_previous_selection_priority_team_id?: number;
        series_current_selection_priority_team_id?: number;
        series_current_priority_team_choice?: DOTASelectionPriorityChoice;
        series_current_non_priority_team_choice?: DOTASelectionPriorityChoice;
        series_current_selection_priority_used_coin_toss?: boolean;
        current_primary_event?: EEvent;
        emergency_disabled_hero_ids?: number[] & number[] & { [K_32 in Exclude<keyof I["emergency_disabled_hero_ids"], keyof number[]>]: never; };
        custom_game_private_key?: string;
        custom_game_penalties?: boolean;
        lan_host_ping_location?: string;
        league_node_id?: number;
        match_duration?: number;
        league_phase?: number;
        record_detailed_stats?: boolean;
        experimental_gameplay_enabled?: boolean;
        guild_challenges?: {
            guild_id?: number;
            event_id?: EEvent;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            challenge_timestamp?: number;
            challenge_period_serial?: number;
            challenge_progress_at_start?: number;
            eligible_account_ids?: number[];
        }[] & ({
            guild_id?: number;
            event_id?: EEvent;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            challenge_timestamp?: number;
            challenge_period_serial?: number;
            challenge_progress_at_start?: number;
            eligible_account_ids?: number[];
        } & {
            guild_id?: number;
            event_id?: EEvent;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            challenge_timestamp?: number;
            challenge_period_serial?: number;
            challenge_progress_at_start?: number;
            eligible_account_ids?: number[] & number[] & { [K_33 in Exclude<keyof I["guild_challenges"][number]["eligible_account_ids"], keyof number[]>]: never; };
        } & { [K_34 in Exclude<keyof I["guild_challenges"][number], keyof CLobbyGuildChallenge>]: never; })[] & { [K_35 in Exclude<keyof I["guild_challenges"], keyof {
            guild_id?: number;
            event_id?: EEvent;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            challenge_timestamp?: number;
            challenge_period_serial?: number;
            challenge_progress_at_start?: number;
            eligible_account_ids?: number[];
        }[]>]: never; };
        guild_details?: {
            guild_id?: number;
            guild_primary_color?: number;
            guild_secondary_color?: number;
            guild_pattern?: number;
            guild_logo?: string;
            guild_points?: number;
            guild_event?: number;
            guild_flags?: number;
            team_for_guild?: DOTA_GC_TEAM;
            guild_tag?: string;
            guild_weekly_percentile?: number;
        }[] & ({
            guild_id?: number;
            guild_primary_color?: number;
            guild_secondary_color?: number;
            guild_pattern?: number;
            guild_logo?: string;
            guild_points?: number;
            guild_event?: number;
            guild_flags?: number;
            team_for_guild?: DOTA_GC_TEAM;
            guild_tag?: string;
            guild_weekly_percentile?: number;
        } & {
            guild_id?: number;
            guild_primary_color?: number;
            guild_secondary_color?: number;
            guild_pattern?: number;
            guild_logo?: string;
            guild_points?: number;
            guild_event?: number;
            guild_flags?: number;
            team_for_guild?: DOTA_GC_TEAM;
            guild_tag?: string;
            guild_weekly_percentile?: number;
        } & { [K_36 in Exclude<keyof I["guild_details"][number], keyof CLobbyGuildDetails>]: never; })[] & { [K_37 in Exclude<keyof I["guild_details"], keyof {
            guild_id?: number;
            guild_primary_color?: number;
            guild_secondary_color?: number;
            guild_pattern?: number;
            guild_logo?: string;
            guild_points?: number;
            guild_event?: number;
            guild_flags?: number;
            team_for_guild?: DOTA_GC_TEAM;
            guild_tag?: string;
            guild_weekly_percentile?: number;
        }[]>]: never; };
        lobby_event_points?: {
            event_id?: number;
            account_points?: {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
        }[] & ({
            event_id?: number;
            account_points?: {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
        } & {
            event_id?: number;
            account_points?: {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[] & ({
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            } & {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[] & ({
                    action_id?: number;
                    times_granted?: number;
                } & {
                    action_id?: number;
                    times_granted?: number;
                } & { [K_38 in Exclude<keyof I["lobby_event_points"][number]["account_points"][number]["event_game_custom_actions"][number], keyof CMsgLobbyEventPoints_NetworkedEventAction>]: never; })[] & { [K_39 in Exclude<keyof I["lobby_event_points"][number]["account_points"][number]["event_game_custom_actions"], keyof {
                    action_id?: number;
                    times_granted?: number;
                }[]>]: never; };
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[] & ({
                    action_id?: number;
                    times_granted?: number;
                } & {
                    action_id?: number;
                    times_granted?: number;
                } & { [K_40 in Exclude<keyof I["lobby_event_points"][number]["account_points"][number]["networked_event_actions"][number], keyof CMsgLobbyEventPoints_NetworkedEventAction>]: never; })[] & { [K_41 in Exclude<keyof I["lobby_event_points"][number]["account_points"][number]["networked_event_actions"], keyof {
                    action_id?: number;
                    times_granted?: number;
                }[]>]: never; };
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[] & ({
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                } & {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                } & { [K_42 in Exclude<keyof I["lobby_event_points"][number]["account_points"][number]["periodic_resources"][number], keyof CMsgLobbyEventPoints_PeriodicResourceData>]: never; })[] & { [K_43 in Exclude<keyof I["lobby_event_points"][number]["account_points"][number]["periodic_resources"], keyof {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[]>]: never; };
            } & { [K_44 in Exclude<keyof I["lobby_event_points"][number]["account_points"][number], keyof CMsgLobbyEventPoints_AccountPoints>]: never; })[] & { [K_45 in Exclude<keyof I["lobby_event_points"][number]["account_points"], keyof {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[]>]: never; };
        } & { [K_46 in Exclude<keyof I["lobby_event_points"][number], keyof CMsgLobbyEventPoints>]: never; })[] & { [K_47 in Exclude<keyof I["lobby_event_points"], keyof {
            event_id?: number;
            account_points?: {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
        }[]>]: never; };
        requested_hero_ids?: number[] & number[] & { [K_48 in Exclude<keyof I["requested_hero_ids"], keyof number[]>]: never; };
        coach_friend_requests?: {
            coach_account_id?: number;
            player_account_id?: number;
            request_state?: ELobbyMemberCoachRequestState;
        }[] & ({
            coach_account_id?: number;
            player_account_id?: number;
            request_state?: ELobbyMemberCoachRequestState;
        } & {
            coach_account_id?: number;
            player_account_id?: number;
            request_state?: ELobbyMemberCoachRequestState;
        } & { [K_49 in Exclude<keyof I["coach_friend_requests"][number], keyof CMsgLobbyCoachFriendRequest>]: never; })[] & { [K_50 in Exclude<keyof I["coach_friend_requests"], keyof {
            coach_account_id?: number;
            player_account_id?: number;
            request_state?: ELobbyMemberCoachRequestState;
        }[]>]: never; };
        is_in_steam_china?: boolean;
        with_scenario_save?: boolean;
        lobby_creation_time?: number;
        event_game_definition?: string;
        extra_startup_messages?: {
            id?: number;
            contents?: string;
        }[] & ({
            id?: number;
            contents?: string;
        } & {
            id?: number;
            contents?: string;
        } & { [K_51 in Exclude<keyof I["extra_startup_messages"][number], keyof CSODOTALobby_CExtraMsg>]: never; })[] & { [K_52 in Exclude<keyof I["extra_startup_messages"], keyof {
            id?: number;
            contents?: string;
        }[]>]: never; };
    } & { [K_53 in Exclude<keyof I, keyof CSODOTALobby>]: never; }>(base?: I): CSODOTALobby;
    fromPartial<I_1 extends {
        lobby_id?: string;
        all_members?: {
            id?: string;
            hero_id?: number;
            team?: DOTA_GC_TEAM;
            name?: string;
            slot?: number;
            party_id?: string;
            meta_level?: number;
            meta_xp?: number;
            meta_xp_awarded?: number;
            leaver_status?: DOTALeaverStatus_t;
            leaver_actions?: number;
            channel?: number;
            disabled_hero_id?: number[];
            enabled_hero_id?: number[];
            coach_team?: DOTA_GC_TEAM;
            coached_account_ids?: number[];
            coach_rating?: number;
            pwrd_cyber_cafe_id?: number;
            pwrd_cyber_cafe_name?: string;
            disabled_random_hero_bits?: number[];
            rank_change?: number;
            cameraman?: boolean;
            custom_game_product_ids?: number[];
            search_match_type?: MatchType;
            favorite_team_packed?: string;
            is_plus_subscriber?: boolean;
            lane_selection_flags?: number;
            can_earn_rewards?: boolean;
            live_spectator_team?: DOTA_GC_TEAM;
            was_mvp_last_game?: boolean;
            pending_awards?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
            pending_awards_on_victory?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
            rank_mmr_boost_type?: EDOTAMMRBoostType;
            queue_point_adjustment?: number;
            rank_tier?: number;
            title?: number;
            guild_id?: number;
            reports_available?: number;
            is_steam_china?: boolean;
            live_spectator_account_id?: number;
            comms_reports_available?: number;
        }[];
        member_indices?: number[];
        left_member_indices?: number[];
        free_member_indices?: number[];
        leader_id?: string;
        server_id?: string;
        game_mode?: number;
        pending_invites?: string[];
        state?: CSODOTALobby_State;
        connect?: string;
        lobby_type?: CSODOTALobby_LobbyType;
        allow_cheats?: boolean;
        fill_with_bots?: boolean;
        intro_mode?: boolean;
        game_name?: string;
        team_details?: {
            team_name?: string;
            team_tag?: string;
            team_id?: number;
            team_logo?: string;
            team_base_logo?: string;
            team_banner_logo?: string;
            team_complete?: boolean;
            rank?: number;
            rank_change?: number;
            is_home_team?: boolean;
            is_challenge_match?: boolean;
            challenge_match_token_account?: string;
            team_logo_url?: string;
            team_abbreviation?: string;
        }[];
        tutorial_lesson?: number;
        tournament_id?: number;
        tournament_game_id?: number;
        server_region?: number;
        game_state?: DOTA_GameState;
        num_spectators?: number;
        matchgroup?: number;
        cm_pick?: DOTA_CM_PICK;
        match_id?: string;
        allow_spectating?: boolean;
        bot_difficulty_radiant?: DOTABotDifficulty;
        timed_reward_details?: {
            item_def_index?: number;
            is_supply_crate?: boolean;
            is_timed_drop?: boolean;
            account_id?: number;
            origin?: number;
        }[];
        pass_key?: string;
        leagueid?: number;
        penalty_level_radiant?: number;
        penalty_level_dire?: number;
        load_game_id?: number;
        series_type?: number;
        radiant_series_wins?: number;
        dire_series_wins?: number;
        loot_generated?: number;
        loot_awarded?: number;
        allchat?: boolean;
        dota_tv_delay?: LobbyDotaTVDelay;
        custom_game_mode?: string;
        custom_map_name?: string;
        custom_difficulty?: number;
        lan?: boolean;
        broadcast_channel_info?: {
            channel_id?: number;
            country_code?: string;
            description?: string;
            language_code?: string;
        }[];
        first_leaver_accountid?: number;
        series_id?: number;
        low_priority?: boolean;
        extra_messages?: {
            id?: number;
            contents?: string;
        }[];
        save_game?: {
            match_id?: string;
            save_time?: number;
            players?: {
                team?: DOTA_GC_TEAM;
                name?: string;
                hero?: string;
            }[];
            save_instances?: {
                game_time?: number;
                team1_score?: number;
                team2_score?: number;
                player_positions?: {
                    x?: number;
                    y?: number;
                }[];
                save_id?: number;
                save_time?: number;
            }[];
        };
        first_blood_happened?: boolean;
        match_outcome?: EMatchOutcome;
        mass_disconnect?: boolean;
        custom_game_id?: string;
        custom_min_players?: number;
        custom_max_players?: number;
        visibility?: DOTALobbyVisibility;
        custom_game_crc?: string;
        custom_game_auto_created_lobby?: boolean;
        custom_game_timestamp?: number;
        previous_series_matches?: string[];
        previous_match_override?: string;
        game_start_time?: number;
        pause_setting?: LobbyDotaPauseSetting;
        weekend_tourney_division_id?: number;
        weekend_tourney_skill_level?: number;
        weekend_tourney_bracket_round?: number;
        bot_difficulty_dire?: DOTABotDifficulty;
        bot_radiant?: string;
        bot_dire?: string;
        event_progression_enabled?: EEvent[];
        selection_priority_rules?: DOTASelectionPriorityRules;
        series_previous_selection_priority_team_id?: number;
        series_current_selection_priority_team_id?: number;
        series_current_priority_team_choice?: DOTASelectionPriorityChoice;
        series_current_non_priority_team_choice?: DOTASelectionPriorityChoice;
        series_current_selection_priority_used_coin_toss?: boolean;
        current_primary_event?: EEvent;
        emergency_disabled_hero_ids?: number[];
        custom_game_private_key?: string;
        custom_game_penalties?: boolean;
        lan_host_ping_location?: string;
        league_node_id?: number;
        match_duration?: number;
        league_phase?: number;
        record_detailed_stats?: boolean;
        experimental_gameplay_enabled?: boolean;
        guild_challenges?: {
            guild_id?: number;
            event_id?: EEvent;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            challenge_timestamp?: number;
            challenge_period_serial?: number;
            challenge_progress_at_start?: number;
            eligible_account_ids?: number[];
        }[];
        guild_details?: {
            guild_id?: number;
            guild_primary_color?: number;
            guild_secondary_color?: number;
            guild_pattern?: number;
            guild_logo?: string;
            guild_points?: number;
            guild_event?: number;
            guild_flags?: number;
            team_for_guild?: DOTA_GC_TEAM;
            guild_tag?: string;
            guild_weekly_percentile?: number;
        }[];
        lobby_event_points?: {
            event_id?: number;
            account_points?: {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
        }[];
        requested_hero_ids?: number[];
        coach_friend_requests?: {
            coach_account_id?: number;
            player_account_id?: number;
            request_state?: ELobbyMemberCoachRequestState;
        }[];
        is_in_steam_china?: boolean;
        with_scenario_save?: boolean;
        lobby_creation_time?: number;
        event_game_definition?: string;
        extra_startup_messages?: {
            id?: number;
            contents?: string;
        }[];
    } & {
        lobby_id?: string;
        all_members?: {
            id?: string;
            hero_id?: number;
            team?: DOTA_GC_TEAM;
            name?: string;
            slot?: number;
            party_id?: string;
            meta_level?: number;
            meta_xp?: number;
            meta_xp_awarded?: number;
            leaver_status?: DOTALeaverStatus_t;
            leaver_actions?: number;
            channel?: number;
            disabled_hero_id?: number[];
            enabled_hero_id?: number[];
            coach_team?: DOTA_GC_TEAM;
            coached_account_ids?: number[];
            coach_rating?: number;
            pwrd_cyber_cafe_id?: number;
            pwrd_cyber_cafe_name?: string;
            disabled_random_hero_bits?: number[];
            rank_change?: number;
            cameraman?: boolean;
            custom_game_product_ids?: number[];
            search_match_type?: MatchType;
            favorite_team_packed?: string;
            is_plus_subscriber?: boolean;
            lane_selection_flags?: number;
            can_earn_rewards?: boolean;
            live_spectator_team?: DOTA_GC_TEAM;
            was_mvp_last_game?: boolean;
            pending_awards?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
            pending_awards_on_victory?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
            rank_mmr_boost_type?: EDOTAMMRBoostType;
            queue_point_adjustment?: number;
            rank_tier?: number;
            title?: number;
            guild_id?: number;
            reports_available?: number;
            is_steam_china?: boolean;
            live_spectator_account_id?: number;
            comms_reports_available?: number;
        }[] & ({
            id?: string;
            hero_id?: number;
            team?: DOTA_GC_TEAM;
            name?: string;
            slot?: number;
            party_id?: string;
            meta_level?: number;
            meta_xp?: number;
            meta_xp_awarded?: number;
            leaver_status?: DOTALeaverStatus_t;
            leaver_actions?: number;
            channel?: number;
            disabled_hero_id?: number[];
            enabled_hero_id?: number[];
            coach_team?: DOTA_GC_TEAM;
            coached_account_ids?: number[];
            coach_rating?: number;
            pwrd_cyber_cafe_id?: number;
            pwrd_cyber_cafe_name?: string;
            disabled_random_hero_bits?: number[];
            rank_change?: number;
            cameraman?: boolean;
            custom_game_product_ids?: number[];
            search_match_type?: MatchType;
            favorite_team_packed?: string;
            is_plus_subscriber?: boolean;
            lane_selection_flags?: number;
            can_earn_rewards?: boolean;
            live_spectator_team?: DOTA_GC_TEAM;
            was_mvp_last_game?: boolean;
            pending_awards?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
            pending_awards_on_victory?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
            rank_mmr_boost_type?: EDOTAMMRBoostType;
            queue_point_adjustment?: number;
            rank_tier?: number;
            title?: number;
            guild_id?: number;
            reports_available?: number;
            is_steam_china?: boolean;
            live_spectator_account_id?: number;
            comms_reports_available?: number;
        } & {
            id?: string;
            hero_id?: number;
            team?: DOTA_GC_TEAM;
            name?: string;
            slot?: number;
            party_id?: string;
            meta_level?: number;
            meta_xp?: number;
            meta_xp_awarded?: number;
            leaver_status?: DOTALeaverStatus_t;
            leaver_actions?: number;
            channel?: number;
            disabled_hero_id?: number[] & number[] & { [K_54 in Exclude<keyof I_1["all_members"][number]["disabled_hero_id"], keyof number[]>]: never; };
            enabled_hero_id?: number[] & number[] & { [K_55 in Exclude<keyof I_1["all_members"][number]["enabled_hero_id"], keyof number[]>]: never; };
            coach_team?: DOTA_GC_TEAM;
            coached_account_ids?: number[] & number[] & { [K_56 in Exclude<keyof I_1["all_members"][number]["coached_account_ids"], keyof number[]>]: never; };
            coach_rating?: number;
            pwrd_cyber_cafe_id?: number;
            pwrd_cyber_cafe_name?: string;
            disabled_random_hero_bits?: number[] & number[] & { [K_57 in Exclude<keyof I_1["all_members"][number]["disabled_random_hero_bits"], keyof number[]>]: never; };
            rank_change?: number;
            cameraman?: boolean;
            custom_game_product_ids?: number[] & number[] & { [K_58 in Exclude<keyof I_1["all_members"][number]["custom_game_product_ids"], keyof number[]>]: never; };
            search_match_type?: MatchType;
            favorite_team_packed?: string;
            is_plus_subscriber?: boolean;
            lane_selection_flags?: number;
            can_earn_rewards?: boolean;
            live_spectator_team?: DOTA_GC_TEAM;
            was_mvp_last_game?: boolean;
            pending_awards?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[] & ({
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            } & {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            } & { [K_59 in Exclude<keyof I_1["all_members"][number]["pending_awards"][number], keyof CMsgPendingEventAward>]: never; })[] & { [K_60 in Exclude<keyof I_1["all_members"][number]["pending_awards"], keyof {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[]>]: never; };
            pending_awards_on_victory?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[] & ({
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            } & {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            } & { [K_61 in Exclude<keyof I_1["all_members"][number]["pending_awards_on_victory"][number], keyof CMsgPendingEventAward>]: never; })[] & { [K_62 in Exclude<keyof I_1["all_members"][number]["pending_awards_on_victory"], keyof {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[]>]: never; };
            rank_mmr_boost_type?: EDOTAMMRBoostType;
            queue_point_adjustment?: number;
            rank_tier?: number;
            title?: number;
            guild_id?: number;
            reports_available?: number;
            is_steam_china?: boolean;
            live_spectator_account_id?: number;
            comms_reports_available?: number;
        } & { [K_63 in Exclude<keyof I_1["all_members"][number], keyof CSODOTALobbyMember>]: never; })[] & { [K_64 in Exclude<keyof I_1["all_members"], keyof {
            id?: string;
            hero_id?: number;
            team?: DOTA_GC_TEAM;
            name?: string;
            slot?: number;
            party_id?: string;
            meta_level?: number;
            meta_xp?: number;
            meta_xp_awarded?: number;
            leaver_status?: DOTALeaverStatus_t;
            leaver_actions?: number;
            channel?: number;
            disabled_hero_id?: number[];
            enabled_hero_id?: number[];
            coach_team?: DOTA_GC_TEAM;
            coached_account_ids?: number[];
            coach_rating?: number;
            pwrd_cyber_cafe_id?: number;
            pwrd_cyber_cafe_name?: string;
            disabled_random_hero_bits?: number[];
            rank_change?: number;
            cameraman?: boolean;
            custom_game_product_ids?: number[];
            search_match_type?: MatchType;
            favorite_team_packed?: string;
            is_plus_subscriber?: boolean;
            lane_selection_flags?: number;
            can_earn_rewards?: boolean;
            live_spectator_team?: DOTA_GC_TEAM;
            was_mvp_last_game?: boolean;
            pending_awards?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
            pending_awards_on_victory?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
            rank_mmr_boost_type?: EDOTAMMRBoostType;
            queue_point_adjustment?: number;
            rank_tier?: number;
            title?: number;
            guild_id?: number;
            reports_available?: number;
            is_steam_china?: boolean;
            live_spectator_account_id?: number;
            comms_reports_available?: number;
        }[]>]: never; };
        member_indices?: number[] & number[] & { [K_65 in Exclude<keyof I_1["member_indices"], keyof number[]>]: never; };
        left_member_indices?: number[] & number[] & { [K_66 in Exclude<keyof I_1["left_member_indices"], keyof number[]>]: never; };
        free_member_indices?: number[] & number[] & { [K_67 in Exclude<keyof I_1["free_member_indices"], keyof number[]>]: never; };
        leader_id?: string;
        server_id?: string;
        game_mode?: number;
        pending_invites?: string[] & string[] & { [K_68 in Exclude<keyof I_1["pending_invites"], keyof string[]>]: never; };
        state?: CSODOTALobby_State;
        connect?: string;
        lobby_type?: CSODOTALobby_LobbyType;
        allow_cheats?: boolean;
        fill_with_bots?: boolean;
        intro_mode?: boolean;
        game_name?: string;
        team_details?: {
            team_name?: string;
            team_tag?: string;
            team_id?: number;
            team_logo?: string;
            team_base_logo?: string;
            team_banner_logo?: string;
            team_complete?: boolean;
            rank?: number;
            rank_change?: number;
            is_home_team?: boolean;
            is_challenge_match?: boolean;
            challenge_match_token_account?: string;
            team_logo_url?: string;
            team_abbreviation?: string;
        }[] & ({
            team_name?: string;
            team_tag?: string;
            team_id?: number;
            team_logo?: string;
            team_base_logo?: string;
            team_banner_logo?: string;
            team_complete?: boolean;
            rank?: number;
            rank_change?: number;
            is_home_team?: boolean;
            is_challenge_match?: boolean;
            challenge_match_token_account?: string;
            team_logo_url?: string;
            team_abbreviation?: string;
        } & {
            team_name?: string;
            team_tag?: string;
            team_id?: number;
            team_logo?: string;
            team_base_logo?: string;
            team_banner_logo?: string;
            team_complete?: boolean;
            rank?: number;
            rank_change?: number;
            is_home_team?: boolean;
            is_challenge_match?: boolean;
            challenge_match_token_account?: string;
            team_logo_url?: string;
            team_abbreviation?: string;
        } & { [K_69 in Exclude<keyof I_1["team_details"][number], keyof CLobbyTeamDetails>]: never; })[] & { [K_70 in Exclude<keyof I_1["team_details"], keyof {
            team_name?: string;
            team_tag?: string;
            team_id?: number;
            team_logo?: string;
            team_base_logo?: string;
            team_banner_logo?: string;
            team_complete?: boolean;
            rank?: number;
            rank_change?: number;
            is_home_team?: boolean;
            is_challenge_match?: boolean;
            challenge_match_token_account?: string;
            team_logo_url?: string;
            team_abbreviation?: string;
        }[]>]: never; };
        tutorial_lesson?: number;
        tournament_id?: number;
        tournament_game_id?: number;
        server_region?: number;
        game_state?: DOTA_GameState;
        num_spectators?: number;
        matchgroup?: number;
        cm_pick?: DOTA_CM_PICK;
        match_id?: string;
        allow_spectating?: boolean;
        bot_difficulty_radiant?: DOTABotDifficulty;
        timed_reward_details?: {
            item_def_index?: number;
            is_supply_crate?: boolean;
            is_timed_drop?: boolean;
            account_id?: number;
            origin?: number;
        }[] & ({
            item_def_index?: number;
            is_supply_crate?: boolean;
            is_timed_drop?: boolean;
            account_id?: number;
            origin?: number;
        } & {
            item_def_index?: number;
            is_supply_crate?: boolean;
            is_timed_drop?: boolean;
            account_id?: number;
            origin?: number;
        } & { [K_71 in Exclude<keyof I_1["timed_reward_details"][number], keyof CLobbyTimedRewardDetails>]: never; })[] & { [K_72 in Exclude<keyof I_1["timed_reward_details"], keyof {
            item_def_index?: number;
            is_supply_crate?: boolean;
            is_timed_drop?: boolean;
            account_id?: number;
            origin?: number;
        }[]>]: never; };
        pass_key?: string;
        leagueid?: number;
        penalty_level_radiant?: number;
        penalty_level_dire?: number;
        load_game_id?: number;
        series_type?: number;
        radiant_series_wins?: number;
        dire_series_wins?: number;
        loot_generated?: number;
        loot_awarded?: number;
        allchat?: boolean;
        dota_tv_delay?: LobbyDotaTVDelay;
        custom_game_mode?: string;
        custom_map_name?: string;
        custom_difficulty?: number;
        lan?: boolean;
        broadcast_channel_info?: {
            channel_id?: number;
            country_code?: string;
            description?: string;
            language_code?: string;
        }[] & ({
            channel_id?: number;
            country_code?: string;
            description?: string;
            language_code?: string;
        } & {
            channel_id?: number;
            country_code?: string;
            description?: string;
            language_code?: string;
        } & { [K_73 in Exclude<keyof I_1["broadcast_channel_info"][number], keyof CLobbyBroadcastChannelInfo>]: never; })[] & { [K_74 in Exclude<keyof I_1["broadcast_channel_info"], keyof {
            channel_id?: number;
            country_code?: string;
            description?: string;
            language_code?: string;
        }[]>]: never; };
        first_leaver_accountid?: number;
        series_id?: number;
        low_priority?: boolean;
        extra_messages?: {
            id?: number;
            contents?: string;
        }[] & ({
            id?: number;
            contents?: string;
        } & {
            id?: number;
            contents?: string;
        } & { [K_75 in Exclude<keyof I_1["extra_messages"][number], keyof CSODOTALobby_CExtraMsg>]: never; })[] & { [K_76 in Exclude<keyof I_1["extra_messages"], keyof {
            id?: number;
            contents?: string;
        }[]>]: never; };
        save_game?: {
            match_id?: string;
            save_time?: number;
            players?: {
                team?: DOTA_GC_TEAM;
                name?: string;
                hero?: string;
            }[];
            save_instances?: {
                game_time?: number;
                team1_score?: number;
                team2_score?: number;
                player_positions?: {
                    x?: number;
                    y?: number;
                }[];
                save_id?: number;
                save_time?: number;
            }[];
        } & {
            match_id?: string;
            save_time?: number;
            players?: {
                team?: DOTA_GC_TEAM;
                name?: string;
                hero?: string;
            }[] & ({
                team?: DOTA_GC_TEAM;
                name?: string;
                hero?: string;
            } & {
                team?: DOTA_GC_TEAM;
                name?: string;
                hero?: string;
            } & { [K_77 in Exclude<keyof I_1["save_game"]["players"][number], keyof import("./dota_shared_enums").CDOTASaveGame_Player>]: never; })[] & { [K_78 in Exclude<keyof I_1["save_game"]["players"], keyof {
                team?: DOTA_GC_TEAM;
                name?: string;
                hero?: string;
            }[]>]: never; };
            save_instances?: {
                game_time?: number;
                team1_score?: number;
                team2_score?: number;
                player_positions?: {
                    x?: number;
                    y?: number;
                }[];
                save_id?: number;
                save_time?: number;
            }[] & ({
                game_time?: number;
                team1_score?: number;
                team2_score?: number;
                player_positions?: {
                    x?: number;
                    y?: number;
                }[];
                save_id?: number;
                save_time?: number;
            } & {
                game_time?: number;
                team1_score?: number;
                team2_score?: number;
                player_positions?: {
                    x?: number;
                    y?: number;
                }[] & ({
                    x?: number;
                    y?: number;
                } & {
                    x?: number;
                    y?: number;
                } & { [K_79 in Exclude<keyof I_1["save_game"]["save_instances"][number]["player_positions"][number], keyof import("./dota_shared_enums").CDOTASaveGame_SaveInstance_PlayerPositions>]: never; })[] & { [K_80 in Exclude<keyof I_1["save_game"]["save_instances"][number]["player_positions"], keyof {
                    x?: number;
                    y?: number;
                }[]>]: never; };
                save_id?: number;
                save_time?: number;
            } & { [K_81 in Exclude<keyof I_1["save_game"]["save_instances"][number], keyof import("./dota_shared_enums").CDOTASaveGame_SaveInstance>]: never; })[] & { [K_82 in Exclude<keyof I_1["save_game"]["save_instances"], keyof {
                game_time?: number;
                team1_score?: number;
                team2_score?: number;
                player_positions?: {
                    x?: number;
                    y?: number;
                }[];
                save_id?: number;
                save_time?: number;
            }[]>]: never; };
        } & { [K_83 in Exclude<keyof I_1["save_game"], keyof CDOTASaveGame>]: never; };
        first_blood_happened?: boolean;
        match_outcome?: EMatchOutcome;
        mass_disconnect?: boolean;
        custom_game_id?: string;
        custom_min_players?: number;
        custom_max_players?: number;
        visibility?: DOTALobbyVisibility;
        custom_game_crc?: string;
        custom_game_auto_created_lobby?: boolean;
        custom_game_timestamp?: number;
        previous_series_matches?: string[] & string[] & { [K_84 in Exclude<keyof I_1["previous_series_matches"], keyof string[]>]: never; };
        previous_match_override?: string;
        game_start_time?: number;
        pause_setting?: LobbyDotaPauseSetting;
        weekend_tourney_division_id?: number;
        weekend_tourney_skill_level?: number;
        weekend_tourney_bracket_round?: number;
        bot_difficulty_dire?: DOTABotDifficulty;
        bot_radiant?: string;
        bot_dire?: string;
        event_progression_enabled?: EEvent[] & EEvent[] & { [K_85 in Exclude<keyof I_1["event_progression_enabled"], keyof EEvent[]>]: never; };
        selection_priority_rules?: DOTASelectionPriorityRules;
        series_previous_selection_priority_team_id?: number;
        series_current_selection_priority_team_id?: number;
        series_current_priority_team_choice?: DOTASelectionPriorityChoice;
        series_current_non_priority_team_choice?: DOTASelectionPriorityChoice;
        series_current_selection_priority_used_coin_toss?: boolean;
        current_primary_event?: EEvent;
        emergency_disabled_hero_ids?: number[] & number[] & { [K_86 in Exclude<keyof I_1["emergency_disabled_hero_ids"], keyof number[]>]: never; };
        custom_game_private_key?: string;
        custom_game_penalties?: boolean;
        lan_host_ping_location?: string;
        league_node_id?: number;
        match_duration?: number;
        league_phase?: number;
        record_detailed_stats?: boolean;
        experimental_gameplay_enabled?: boolean;
        guild_challenges?: {
            guild_id?: number;
            event_id?: EEvent;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            challenge_timestamp?: number;
            challenge_period_serial?: number;
            challenge_progress_at_start?: number;
            eligible_account_ids?: number[];
        }[] & ({
            guild_id?: number;
            event_id?: EEvent;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            challenge_timestamp?: number;
            challenge_period_serial?: number;
            challenge_progress_at_start?: number;
            eligible_account_ids?: number[];
        } & {
            guild_id?: number;
            event_id?: EEvent;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            challenge_timestamp?: number;
            challenge_period_serial?: number;
            challenge_progress_at_start?: number;
            eligible_account_ids?: number[] & number[] & { [K_87 in Exclude<keyof I_1["guild_challenges"][number]["eligible_account_ids"], keyof number[]>]: never; };
        } & { [K_88 in Exclude<keyof I_1["guild_challenges"][number], keyof CLobbyGuildChallenge>]: never; })[] & { [K_89 in Exclude<keyof I_1["guild_challenges"], keyof {
            guild_id?: number;
            event_id?: EEvent;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            challenge_timestamp?: number;
            challenge_period_serial?: number;
            challenge_progress_at_start?: number;
            eligible_account_ids?: number[];
        }[]>]: never; };
        guild_details?: {
            guild_id?: number;
            guild_primary_color?: number;
            guild_secondary_color?: number;
            guild_pattern?: number;
            guild_logo?: string;
            guild_points?: number;
            guild_event?: number;
            guild_flags?: number;
            team_for_guild?: DOTA_GC_TEAM;
            guild_tag?: string;
            guild_weekly_percentile?: number;
        }[] & ({
            guild_id?: number;
            guild_primary_color?: number;
            guild_secondary_color?: number;
            guild_pattern?: number;
            guild_logo?: string;
            guild_points?: number;
            guild_event?: number;
            guild_flags?: number;
            team_for_guild?: DOTA_GC_TEAM;
            guild_tag?: string;
            guild_weekly_percentile?: number;
        } & {
            guild_id?: number;
            guild_primary_color?: number;
            guild_secondary_color?: number;
            guild_pattern?: number;
            guild_logo?: string;
            guild_points?: number;
            guild_event?: number;
            guild_flags?: number;
            team_for_guild?: DOTA_GC_TEAM;
            guild_tag?: string;
            guild_weekly_percentile?: number;
        } & { [K_90 in Exclude<keyof I_1["guild_details"][number], keyof CLobbyGuildDetails>]: never; })[] & { [K_91 in Exclude<keyof I_1["guild_details"], keyof {
            guild_id?: number;
            guild_primary_color?: number;
            guild_secondary_color?: number;
            guild_pattern?: number;
            guild_logo?: string;
            guild_points?: number;
            guild_event?: number;
            guild_flags?: number;
            team_for_guild?: DOTA_GC_TEAM;
            guild_tag?: string;
            guild_weekly_percentile?: number;
        }[]>]: never; };
        lobby_event_points?: {
            event_id?: number;
            account_points?: {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
        }[] & ({
            event_id?: number;
            account_points?: {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
        } & {
            event_id?: number;
            account_points?: {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[] & ({
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            } & {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[] & ({
                    action_id?: number;
                    times_granted?: number;
                } & {
                    action_id?: number;
                    times_granted?: number;
                } & { [K_92 in Exclude<keyof I_1["lobby_event_points"][number]["account_points"][number]["event_game_custom_actions"][number], keyof CMsgLobbyEventPoints_NetworkedEventAction>]: never; })[] & { [K_93 in Exclude<keyof I_1["lobby_event_points"][number]["account_points"][number]["event_game_custom_actions"], keyof {
                    action_id?: number;
                    times_granted?: number;
                }[]>]: never; };
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[] & ({
                    action_id?: number;
                    times_granted?: number;
                } & {
                    action_id?: number;
                    times_granted?: number;
                } & { [K_94 in Exclude<keyof I_1["lobby_event_points"][number]["account_points"][number]["networked_event_actions"][number], keyof CMsgLobbyEventPoints_NetworkedEventAction>]: never; })[] & { [K_95 in Exclude<keyof I_1["lobby_event_points"][number]["account_points"][number]["networked_event_actions"], keyof {
                    action_id?: number;
                    times_granted?: number;
                }[]>]: never; };
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[] & ({
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                } & {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                } & { [K_96 in Exclude<keyof I_1["lobby_event_points"][number]["account_points"][number]["periodic_resources"][number], keyof CMsgLobbyEventPoints_PeriodicResourceData>]: never; })[] & { [K_97 in Exclude<keyof I_1["lobby_event_points"][number]["account_points"][number]["periodic_resources"], keyof {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[]>]: never; };
            } & { [K_98 in Exclude<keyof I_1["lobby_event_points"][number]["account_points"][number], keyof CMsgLobbyEventPoints_AccountPoints>]: never; })[] & { [K_99 in Exclude<keyof I_1["lobby_event_points"][number]["account_points"], keyof {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[]>]: never; };
        } & { [K_100 in Exclude<keyof I_1["lobby_event_points"][number], keyof CMsgLobbyEventPoints>]: never; })[] & { [K_101 in Exclude<keyof I_1["lobby_event_points"], keyof {
            event_id?: number;
            account_points?: {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
        }[]>]: never; };
        requested_hero_ids?: number[] & number[] & { [K_102 in Exclude<keyof I_1["requested_hero_ids"], keyof number[]>]: never; };
        coach_friend_requests?: {
            coach_account_id?: number;
            player_account_id?: number;
            request_state?: ELobbyMemberCoachRequestState;
        }[] & ({
            coach_account_id?: number;
            player_account_id?: number;
            request_state?: ELobbyMemberCoachRequestState;
        } & {
            coach_account_id?: number;
            player_account_id?: number;
            request_state?: ELobbyMemberCoachRequestState;
        } & { [K_103 in Exclude<keyof I_1["coach_friend_requests"][number], keyof CMsgLobbyCoachFriendRequest>]: never; })[] & { [K_104 in Exclude<keyof I_1["coach_friend_requests"], keyof {
            coach_account_id?: number;
            player_account_id?: number;
            request_state?: ELobbyMemberCoachRequestState;
        }[]>]: never; };
        is_in_steam_china?: boolean;
        with_scenario_save?: boolean;
        lobby_creation_time?: number;
        event_game_definition?: string;
        extra_startup_messages?: {
            id?: number;
            contents?: string;
        }[] & ({
            id?: number;
            contents?: string;
        } & {
            id?: number;
            contents?: string;
        } & { [K_105 in Exclude<keyof I_1["extra_startup_messages"][number], keyof CSODOTALobby_CExtraMsg>]: never; })[] & { [K_106 in Exclude<keyof I_1["extra_startup_messages"], keyof {
            id?: number;
            contents?: string;
        }[]>]: never; };
    } & { [K_107 in Exclude<keyof I_1, keyof CSODOTALobby>]: never; }>(object: I_1): CSODOTALobby;
};
export declare const CSODOTALobby_CExtraMsg: {
    fromJSON(object: any): CSODOTALobby_CExtraMsg;
    toJSON(message: CSODOTALobby_CExtraMsg): unknown;
    create<I extends {
        id?: number;
        contents?: string;
    } & {
        id?: number;
        contents?: string;
    } & { [K in Exclude<keyof I, keyof CSODOTALobby_CExtraMsg>]: never; }>(base?: I): CSODOTALobby_CExtraMsg;
    fromPartial<I_1 extends {
        id?: number;
        contents?: string;
    } & {
        id?: number;
        contents?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CSODOTALobby_CExtraMsg>]: never; }>(object: I_1): CSODOTALobby_CExtraMsg;
};
export declare const CSODOTAServerLobby: {
    fromJSON(object: any): CSODOTAServerLobby;
    toJSON(message: CSODOTAServerLobby): unknown;
    create<I extends {
        all_members?: {}[];
    } & {
        all_members?: {}[] & ({} & {} & { [K in Exclude<keyof I["all_members"][number], never>]: never; })[] & { [K_1 in Exclude<keyof I["all_members"], keyof {}[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "all_members">]: never; }>(base?: I): CSODOTAServerLobby;
    fromPartial<I_1 extends {
        all_members?: {}[];
    } & {
        all_members?: {}[] & ({} & {} & { [K_3 in Exclude<keyof I_1["all_members"][number], never>]: never; })[] & { [K_4 in Exclude<keyof I_1["all_members"], keyof {}[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "all_members">]: never; }>(object: I_1): CSODOTAServerLobby;
};
export declare const CSODOTAStaticLobby: {
    fromJSON(object: any): CSODOTAStaticLobby;
    toJSON(message: CSODOTAStaticLobby): unknown;
    create<I extends {
        all_members?: {}[];
    } & {
        all_members?: {}[] & ({} & {} & { [K in Exclude<keyof I["all_members"][number], never>]: never; })[] & { [K_1 in Exclude<keyof I["all_members"], keyof {}[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "all_members">]: never; }>(base?: I): CSODOTAStaticLobby;
    fromPartial<I_1 extends {
        all_members?: {}[];
    } & {
        all_members?: {}[] & ({} & {} & { [K_3 in Exclude<keyof I_1["all_members"][number], never>]: never; })[] & { [K_4 in Exclude<keyof I_1["all_members"], keyof {}[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "all_members">]: never; }>(object: I_1): CSODOTAStaticLobby;
};
export declare const CSODOTAServerStaticLobby: {
    fromJSON(object: any): CSODOTAServerStaticLobby;
    toJSON(message: CSODOTAServerStaticLobby): unknown;
    create<I extends {
        all_members?: {}[];
    } & {
        all_members?: {}[] & ({} & {} & { [K in Exclude<keyof I["all_members"][number], never>]: never; })[] & { [K_1 in Exclude<keyof I["all_members"], keyof {}[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "all_members">]: never; }>(base?: I): CSODOTAServerStaticLobby;
    fromPartial<I_1 extends {
        all_members?: {}[];
    } & {
        all_members?: {}[] & ({} & {} & { [K_3 in Exclude<keyof I_1["all_members"][number], never>]: never; })[] & { [K_4 in Exclude<keyof I_1["all_members"], keyof {}[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "all_members">]: never; }>(object: I_1): CSODOTAServerStaticLobby;
};
export declare const CMsgAdditionalLobbyStartupAccountData: {
    fromJSON(object: any): CMsgAdditionalLobbyStartupAccountData;
    toJSON(message: CMsgAdditionalLobbyStartupAccountData): unknown;
    create<I extends {
        account_id?: number;
        plus_data?: {
            hero_badges?: {
                hero_id?: number;
                hero_badge_xp?: number;
            }[];
        };
        unlocked_chat_wheel_message_ranges?: {
            message_id_start?: number;
            message_id_end?: number;
        }[];
        unlocked_ping_wheel_message_ranges?: {
            message_id_start?: number;
            message_id_end?: number;
        }[];
    } & {
        account_id?: number;
        plus_data?: {
            hero_badges?: {
                hero_id?: number;
                hero_badge_xp?: number;
            }[];
        } & {
            hero_badges?: {
                hero_id?: number;
                hero_badge_xp?: number;
            }[] & ({
                hero_id?: number;
                hero_badge_xp?: number;
            } & {
                hero_id?: number;
                hero_badge_xp?: number;
            } & { [K in Exclude<keyof I["plus_data"]["hero_badges"][number], keyof CMsgLobbyPlayerPlusSubscriptionData_HeroBadge>]: never; })[] & { [K_1 in Exclude<keyof I["plus_data"]["hero_badges"], keyof {
                hero_id?: number;
                hero_badge_xp?: number;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["plus_data"], "hero_badges">]: never; };
        unlocked_chat_wheel_message_ranges?: {
            message_id_start?: number;
            message_id_end?: number;
        }[] & ({
            message_id_start?: number;
            message_id_end?: number;
        } & {
            message_id_start?: number;
            message_id_end?: number;
        } & { [K_3 in Exclude<keyof I["unlocked_chat_wheel_message_ranges"][number], keyof CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange>]: never; })[] & { [K_4 in Exclude<keyof I["unlocked_chat_wheel_message_ranges"], keyof {
            message_id_start?: number;
            message_id_end?: number;
        }[]>]: never; };
        unlocked_ping_wheel_message_ranges?: {
            message_id_start?: number;
            message_id_end?: number;
        }[] & ({
            message_id_start?: number;
            message_id_end?: number;
        } & {
            message_id_start?: number;
            message_id_end?: number;
        } & { [K_5 in Exclude<keyof I["unlocked_ping_wheel_message_ranges"][number], keyof CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange>]: never; })[] & { [K_6 in Exclude<keyof I["unlocked_ping_wheel_message_ranges"], keyof {
            message_id_start?: number;
            message_id_end?: number;
        }[]>]: never; };
    } & { [K_7 in Exclude<keyof I, keyof CMsgAdditionalLobbyStartupAccountData>]: never; }>(base?: I): CMsgAdditionalLobbyStartupAccountData;
    fromPartial<I_1 extends {
        account_id?: number;
        plus_data?: {
            hero_badges?: {
                hero_id?: number;
                hero_badge_xp?: number;
            }[];
        };
        unlocked_chat_wheel_message_ranges?: {
            message_id_start?: number;
            message_id_end?: number;
        }[];
        unlocked_ping_wheel_message_ranges?: {
            message_id_start?: number;
            message_id_end?: number;
        }[];
    } & {
        account_id?: number;
        plus_data?: {
            hero_badges?: {
                hero_id?: number;
                hero_badge_xp?: number;
            }[];
        } & {
            hero_badges?: {
                hero_id?: number;
                hero_badge_xp?: number;
            }[] & ({
                hero_id?: number;
                hero_badge_xp?: number;
            } & {
                hero_id?: number;
                hero_badge_xp?: number;
            } & { [K_8 in Exclude<keyof I_1["plus_data"]["hero_badges"][number], keyof CMsgLobbyPlayerPlusSubscriptionData_HeroBadge>]: never; })[] & { [K_9 in Exclude<keyof I_1["plus_data"]["hero_badges"], keyof {
                hero_id?: number;
                hero_badge_xp?: number;
            }[]>]: never; };
        } & { [K_10 in Exclude<keyof I_1["plus_data"], "hero_badges">]: never; };
        unlocked_chat_wheel_message_ranges?: {
            message_id_start?: number;
            message_id_end?: number;
        }[] & ({
            message_id_start?: number;
            message_id_end?: number;
        } & {
            message_id_start?: number;
            message_id_end?: number;
        } & { [K_11 in Exclude<keyof I_1["unlocked_chat_wheel_message_ranges"][number], keyof CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange>]: never; })[] & { [K_12 in Exclude<keyof I_1["unlocked_chat_wheel_message_ranges"], keyof {
            message_id_start?: number;
            message_id_end?: number;
        }[]>]: never; };
        unlocked_ping_wheel_message_ranges?: {
            message_id_start?: number;
            message_id_end?: number;
        }[] & ({
            message_id_start?: number;
            message_id_end?: number;
        } & {
            message_id_start?: number;
            message_id_end?: number;
        } & { [K_13 in Exclude<keyof I_1["unlocked_ping_wheel_message_ranges"][number], keyof CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange>]: never; })[] & { [K_14 in Exclude<keyof I_1["unlocked_ping_wheel_message_ranges"], keyof {
            message_id_start?: number;
            message_id_end?: number;
        }[]>]: never; };
    } & { [K_15 in Exclude<keyof I_1, keyof CMsgAdditionalLobbyStartupAccountData>]: never; }>(object: I_1): CMsgAdditionalLobbyStartupAccountData;
};
export declare const CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange: {
    fromJSON(object: any): CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange;
    toJSON(message: CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange): unknown;
    create<I extends {
        message_id_start?: number;
        message_id_end?: number;
    } & {
        message_id_start?: number;
        message_id_end?: number;
    } & { [K in Exclude<keyof I, keyof CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange>]: never; }>(base?: I): CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange;
    fromPartial<I_1 extends {
        message_id_start?: number;
        message_id_end?: number;
    } & {
        message_id_start?: number;
        message_id_end?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange>]: never; }>(object: I_1): CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange;
};
export declare const CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange: {
    fromJSON(object: any): CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange;
    toJSON(message: CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange): unknown;
    create<I extends {
        message_id_start?: number;
        message_id_end?: number;
    } & {
        message_id_start?: number;
        message_id_end?: number;
    } & { [K in Exclude<keyof I, keyof CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange>]: never; }>(base?: I): CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange;
    fromPartial<I_1 extends {
        message_id_start?: number;
        message_id_end?: number;
    } & {
        message_id_start?: number;
        message_id_end?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange>]: never; }>(object: I_1): CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange;
};
export declare const CMsgLobbyInitializationComplete: {
    fromJSON(_: any): CMsgLobbyInitializationComplete;
    toJSON(_: CMsgLobbyInitializationComplete): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgLobbyInitializationComplete;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgLobbyInitializationComplete;
};
export declare const CMsgLobbyPlaytestDetails: {
    fromJSON(object: any): CMsgLobbyPlaytestDetails;
    toJSON(message: CMsgLobbyPlaytestDetails): unknown;
    create<I extends {
        json?: string;
    } & {
        json?: string;
    } & { [K in Exclude<keyof I, "json">]: never; }>(base?: I): CMsgLobbyPlaytestDetails;
    fromPartial<I_1 extends {
        json?: string;
    } & {
        json?: string;
    } & { [K_1 in Exclude<keyof I_1, "json">]: never; }>(object: I_1): CMsgLobbyPlaytestDetails;
};
export declare const CMsgLocalServerGuildData: {
    fromJSON(object: any): CMsgLocalServerGuildData;
    toJSON(message: CMsgLocalServerGuildData): unknown;
    create<I extends {
        guild_id?: number;
        event_id?: EEvent;
        guild_points?: number;
        guild_logo?: string;
        guild_primary_color?: number;
        guild_secondary_color?: number;
        guild_pattern?: number;
        guild_flags?: number;
        guild_weekly_percentile?: number;
    } & {
        guild_id?: number;
        event_id?: EEvent;
        guild_points?: number;
        guild_logo?: string;
        guild_primary_color?: number;
        guild_secondary_color?: number;
        guild_pattern?: number;
        guild_flags?: number;
        guild_weekly_percentile?: number;
    } & { [K in Exclude<keyof I, keyof CMsgLocalServerGuildData>]: never; }>(base?: I): CMsgLocalServerGuildData;
    fromPartial<I_1 extends {
        guild_id?: number;
        event_id?: EEvent;
        guild_points?: number;
        guild_logo?: string;
        guild_primary_color?: number;
        guild_secondary_color?: number;
        guild_pattern?: number;
        guild_flags?: number;
        guild_weekly_percentile?: number;
    } & {
        guild_id?: number;
        event_id?: EEvent;
        guild_points?: number;
        guild_logo?: string;
        guild_primary_color?: number;
        guild_secondary_color?: number;
        guild_pattern?: number;
        guild_flags?: number;
        guild_weekly_percentile?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgLocalServerGuildData>]: never; }>(object: I_1): CMsgLocalServerGuildData;
};
export declare const CMsgLocalServerFakeLobbyData: {
    fromJSON(object: any): CMsgLocalServerFakeLobbyData;
    toJSON(message: CMsgLocalServerFakeLobbyData): unknown;
    create<I extends {
        account_id?: number;
        event_points?: {
            event_id?: number;
            account_points?: {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
        }[];
        is_plus_subscriber?: boolean;
        primary_event_id?: number;
        favorite_team?: number;
        favorite_team_quality?: number;
        guild_info?: {
            guild_id?: number;
            event_id?: EEvent;
            guild_points?: number;
            guild_logo?: string;
            guild_primary_color?: number;
            guild_secondary_color?: number;
            guild_pattern?: number;
            guild_flags?: number;
            guild_weekly_percentile?: number;
        };
        teleport_fx_level?: number;
        additional_data?: {
            account_id?: number;
            plus_data?: {
                hero_badges?: {
                    hero_id?: number;
                    hero_badge_xp?: number;
                }[];
            };
            unlocked_chat_wheel_message_ranges?: {
                message_id_start?: number;
                message_id_end?: number;
            }[];
            unlocked_ping_wheel_message_ranges?: {
                message_id_start?: number;
                message_id_end?: number;
            }[];
        };
    } & {
        account_id?: number;
        event_points?: {
            event_id?: number;
            account_points?: {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
        }[] & ({
            event_id?: number;
            account_points?: {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
        } & {
            event_id?: number;
            account_points?: {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[] & ({
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            } & {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[] & ({
                    action_id?: number;
                    times_granted?: number;
                } & {
                    action_id?: number;
                    times_granted?: number;
                } & { [K in Exclude<keyof I["event_points"][number]["account_points"][number]["event_game_custom_actions"][number], keyof CMsgLobbyEventPoints_NetworkedEventAction>]: never; })[] & { [K_1 in Exclude<keyof I["event_points"][number]["account_points"][number]["event_game_custom_actions"], keyof {
                    action_id?: number;
                    times_granted?: number;
                }[]>]: never; };
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[] & ({
                    action_id?: number;
                    times_granted?: number;
                } & {
                    action_id?: number;
                    times_granted?: number;
                } & { [K_2 in Exclude<keyof I["event_points"][number]["account_points"][number]["networked_event_actions"][number], keyof CMsgLobbyEventPoints_NetworkedEventAction>]: never; })[] & { [K_3 in Exclude<keyof I["event_points"][number]["account_points"][number]["networked_event_actions"], keyof {
                    action_id?: number;
                    times_granted?: number;
                }[]>]: never; };
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[] & ({
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                } & {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                } & { [K_4 in Exclude<keyof I["event_points"][number]["account_points"][number]["periodic_resources"][number], keyof CMsgLobbyEventPoints_PeriodicResourceData>]: never; })[] & { [K_5 in Exclude<keyof I["event_points"][number]["account_points"][number]["periodic_resources"], keyof {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[]>]: never; };
            } & { [K_6 in Exclude<keyof I["event_points"][number]["account_points"][number], keyof CMsgLobbyEventPoints_AccountPoints>]: never; })[] & { [K_7 in Exclude<keyof I["event_points"][number]["account_points"], keyof {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[]>]: never; };
        } & { [K_8 in Exclude<keyof I["event_points"][number], keyof CMsgLobbyEventPoints>]: never; })[] & { [K_9 in Exclude<keyof I["event_points"], keyof {
            event_id?: number;
            account_points?: {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
        }[]>]: never; };
        is_plus_subscriber?: boolean;
        primary_event_id?: number;
        favorite_team?: number;
        favorite_team_quality?: number;
        guild_info?: {
            guild_id?: number;
            event_id?: EEvent;
            guild_points?: number;
            guild_logo?: string;
            guild_primary_color?: number;
            guild_secondary_color?: number;
            guild_pattern?: number;
            guild_flags?: number;
            guild_weekly_percentile?: number;
        } & {
            guild_id?: number;
            event_id?: EEvent;
            guild_points?: number;
            guild_logo?: string;
            guild_primary_color?: number;
            guild_secondary_color?: number;
            guild_pattern?: number;
            guild_flags?: number;
            guild_weekly_percentile?: number;
        } & { [K_10 in Exclude<keyof I["guild_info"], keyof CMsgLocalServerGuildData>]: never; };
        teleport_fx_level?: number;
        additional_data?: {
            account_id?: number;
            plus_data?: {
                hero_badges?: {
                    hero_id?: number;
                    hero_badge_xp?: number;
                }[];
            };
            unlocked_chat_wheel_message_ranges?: {
                message_id_start?: number;
                message_id_end?: number;
            }[];
            unlocked_ping_wheel_message_ranges?: {
                message_id_start?: number;
                message_id_end?: number;
            }[];
        } & {
            account_id?: number;
            plus_data?: {
                hero_badges?: {
                    hero_id?: number;
                    hero_badge_xp?: number;
                }[];
            } & {
                hero_badges?: {
                    hero_id?: number;
                    hero_badge_xp?: number;
                }[] & ({
                    hero_id?: number;
                    hero_badge_xp?: number;
                } & {
                    hero_id?: number;
                    hero_badge_xp?: number;
                } & { [K_11 in Exclude<keyof I["additional_data"]["plus_data"]["hero_badges"][number], keyof CMsgLobbyPlayerPlusSubscriptionData_HeroBadge>]: never; })[] & { [K_12 in Exclude<keyof I["additional_data"]["plus_data"]["hero_badges"], keyof {
                    hero_id?: number;
                    hero_badge_xp?: number;
                }[]>]: never; };
            } & { [K_13 in Exclude<keyof I["additional_data"]["plus_data"], "hero_badges">]: never; };
            unlocked_chat_wheel_message_ranges?: {
                message_id_start?: number;
                message_id_end?: number;
            }[] & ({
                message_id_start?: number;
                message_id_end?: number;
            } & {
                message_id_start?: number;
                message_id_end?: number;
            } & { [K_14 in Exclude<keyof I["additional_data"]["unlocked_chat_wheel_message_ranges"][number], keyof CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange>]: never; })[] & { [K_15 in Exclude<keyof I["additional_data"]["unlocked_chat_wheel_message_ranges"], keyof {
                message_id_start?: number;
                message_id_end?: number;
            }[]>]: never; };
            unlocked_ping_wheel_message_ranges?: {
                message_id_start?: number;
                message_id_end?: number;
            }[] & ({
                message_id_start?: number;
                message_id_end?: number;
            } & {
                message_id_start?: number;
                message_id_end?: number;
            } & { [K_16 in Exclude<keyof I["additional_data"]["unlocked_ping_wheel_message_ranges"][number], keyof CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange>]: never; })[] & { [K_17 in Exclude<keyof I["additional_data"]["unlocked_ping_wheel_message_ranges"], keyof {
                message_id_start?: number;
                message_id_end?: number;
            }[]>]: never; };
        } & { [K_18 in Exclude<keyof I["additional_data"], keyof CMsgAdditionalLobbyStartupAccountData>]: never; };
    } & { [K_19 in Exclude<keyof I, keyof CMsgLocalServerFakeLobbyData>]: never; }>(base?: I): CMsgLocalServerFakeLobbyData;
    fromPartial<I_1 extends {
        account_id?: number;
        event_points?: {
            event_id?: number;
            account_points?: {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
        }[];
        is_plus_subscriber?: boolean;
        primary_event_id?: number;
        favorite_team?: number;
        favorite_team_quality?: number;
        guild_info?: {
            guild_id?: number;
            event_id?: EEvent;
            guild_points?: number;
            guild_logo?: string;
            guild_primary_color?: number;
            guild_secondary_color?: number;
            guild_pattern?: number;
            guild_flags?: number;
            guild_weekly_percentile?: number;
        };
        teleport_fx_level?: number;
        additional_data?: {
            account_id?: number;
            plus_data?: {
                hero_badges?: {
                    hero_id?: number;
                    hero_badge_xp?: number;
                }[];
            };
            unlocked_chat_wheel_message_ranges?: {
                message_id_start?: number;
                message_id_end?: number;
            }[];
            unlocked_ping_wheel_message_ranges?: {
                message_id_start?: number;
                message_id_end?: number;
            }[];
        };
    } & {
        account_id?: number;
        event_points?: {
            event_id?: number;
            account_points?: {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
        }[] & ({
            event_id?: number;
            account_points?: {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
        } & {
            event_id?: number;
            account_points?: {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[] & ({
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            } & {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[] & ({
                    action_id?: number;
                    times_granted?: number;
                } & {
                    action_id?: number;
                    times_granted?: number;
                } & { [K_20 in Exclude<keyof I_1["event_points"][number]["account_points"][number]["event_game_custom_actions"][number], keyof CMsgLobbyEventPoints_NetworkedEventAction>]: never; })[] & { [K_21 in Exclude<keyof I_1["event_points"][number]["account_points"][number]["event_game_custom_actions"], keyof {
                    action_id?: number;
                    times_granted?: number;
                }[]>]: never; };
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[] & ({
                    action_id?: number;
                    times_granted?: number;
                } & {
                    action_id?: number;
                    times_granted?: number;
                } & { [K_22 in Exclude<keyof I_1["event_points"][number]["account_points"][number]["networked_event_actions"][number], keyof CMsgLobbyEventPoints_NetworkedEventAction>]: never; })[] & { [K_23 in Exclude<keyof I_1["event_points"][number]["account_points"][number]["networked_event_actions"], keyof {
                    action_id?: number;
                    times_granted?: number;
                }[]>]: never; };
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[] & ({
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                } & {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                } & { [K_24 in Exclude<keyof I_1["event_points"][number]["account_points"][number]["periodic_resources"][number], keyof CMsgLobbyEventPoints_PeriodicResourceData>]: never; })[] & { [K_25 in Exclude<keyof I_1["event_points"][number]["account_points"][number]["periodic_resources"], keyof {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[]>]: never; };
            } & { [K_26 in Exclude<keyof I_1["event_points"][number]["account_points"][number], keyof CMsgLobbyEventPoints_AccountPoints>]: never; })[] & { [K_27 in Exclude<keyof I_1["event_points"][number]["account_points"], keyof {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[]>]: never; };
        } & { [K_28 in Exclude<keyof I_1["event_points"][number], keyof CMsgLobbyEventPoints>]: never; })[] & { [K_29 in Exclude<keyof I_1["event_points"], keyof {
            event_id?: number;
            account_points?: {
                account_id?: number;
                normal_points?: number;
                premium_points?: number;
                owned?: boolean;
                active_effects_mask?: string;
                wager_streak?: number;
                event_game_custom_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                tip_amount_index?: number;
                active_event_season_id?: number;
                teleport_fx_level?: number;
                networked_event_actions?: {
                    action_id?: number;
                    times_granted?: number;
                }[];
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
        }[]>]: never; };
        is_plus_subscriber?: boolean;
        primary_event_id?: number;
        favorite_team?: number;
        favorite_team_quality?: number;
        guild_info?: {
            guild_id?: number;
            event_id?: EEvent;
            guild_points?: number;
            guild_logo?: string;
            guild_primary_color?: number;
            guild_secondary_color?: number;
            guild_pattern?: number;
            guild_flags?: number;
            guild_weekly_percentile?: number;
        } & {
            guild_id?: number;
            event_id?: EEvent;
            guild_points?: number;
            guild_logo?: string;
            guild_primary_color?: number;
            guild_secondary_color?: number;
            guild_pattern?: number;
            guild_flags?: number;
            guild_weekly_percentile?: number;
        } & { [K_30 in Exclude<keyof I_1["guild_info"], keyof CMsgLocalServerGuildData>]: never; };
        teleport_fx_level?: number;
        additional_data?: {
            account_id?: number;
            plus_data?: {
                hero_badges?: {
                    hero_id?: number;
                    hero_badge_xp?: number;
                }[];
            };
            unlocked_chat_wheel_message_ranges?: {
                message_id_start?: number;
                message_id_end?: number;
            }[];
            unlocked_ping_wheel_message_ranges?: {
                message_id_start?: number;
                message_id_end?: number;
            }[];
        } & {
            account_id?: number;
            plus_data?: {
                hero_badges?: {
                    hero_id?: number;
                    hero_badge_xp?: number;
                }[];
            } & {
                hero_badges?: {
                    hero_id?: number;
                    hero_badge_xp?: number;
                }[] & ({
                    hero_id?: number;
                    hero_badge_xp?: number;
                } & {
                    hero_id?: number;
                    hero_badge_xp?: number;
                } & { [K_31 in Exclude<keyof I_1["additional_data"]["plus_data"]["hero_badges"][number], keyof CMsgLobbyPlayerPlusSubscriptionData_HeroBadge>]: never; })[] & { [K_32 in Exclude<keyof I_1["additional_data"]["plus_data"]["hero_badges"], keyof {
                    hero_id?: number;
                    hero_badge_xp?: number;
                }[]>]: never; };
            } & { [K_33 in Exclude<keyof I_1["additional_data"]["plus_data"], "hero_badges">]: never; };
            unlocked_chat_wheel_message_ranges?: {
                message_id_start?: number;
                message_id_end?: number;
            }[] & ({
                message_id_start?: number;
                message_id_end?: number;
            } & {
                message_id_start?: number;
                message_id_end?: number;
            } & { [K_34 in Exclude<keyof I_1["additional_data"]["unlocked_chat_wheel_message_ranges"][number], keyof CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange>]: never; })[] & { [K_35 in Exclude<keyof I_1["additional_data"]["unlocked_chat_wheel_message_ranges"], keyof {
                message_id_start?: number;
                message_id_end?: number;
            }[]>]: never; };
            unlocked_ping_wheel_message_ranges?: {
                message_id_start?: number;
                message_id_end?: number;
            }[] & ({
                message_id_start?: number;
                message_id_end?: number;
            } & {
                message_id_start?: number;
                message_id_end?: number;
            } & { [K_36 in Exclude<keyof I_1["additional_data"]["unlocked_ping_wheel_message_ranges"][number], keyof CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange>]: never; })[] & { [K_37 in Exclude<keyof I_1["additional_data"]["unlocked_ping_wheel_message_ranges"], keyof {
                message_id_start?: number;
                message_id_end?: number;
            }[]>]: never; };
        } & { [K_38 in Exclude<keyof I_1["additional_data"], keyof CMsgAdditionalLobbyStartupAccountData>]: never; };
    } & { [K_39 in Exclude<keyof I_1, keyof CMsgLocalServerFakeLobbyData>]: never; }>(object: I_1): CMsgLocalServerFakeLobbyData;
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
