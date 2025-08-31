import { CMsgClientPingData } from "./base_gcmessages";
import { EDOTAGroupMergeResult } from "./dota_client_enums";
import { CLobbyTeamDetails, LobbyDotaPauseSetting, LobbyDotaTVDelay } from "./dota_gcmessages_common_lobby";
import { CDOTAClientHardwareSpecs, DOTA_CM_PICK, DOTA_GameMode, DOTA_GC_TEAM, DOTABotDifficulty, DOTAJoinLobbyResult, DOTALobbyReadyState, DOTALobbyVisibility, DOTASelectionPriorityRules, MatchLanguages, MatchType } from "./dota_shared_enums";
export declare const protobufPackage = "";
export declare enum EStartFindingMatchResult {
    k_EStartFindingMatchResult_Invalid = 0,
    k_EStartFindingMatchResult_OK = 1,
    k_EStartFindingMatchResult_AlreadySearching = 2,
    k_EStartFindingMatchResult_FailGeneric = 100,
    k_EStartFindingMatchResult_FailedIgnore = 101,
    k_EStartFindingMatchResult_MatchmakingDisabled = 102,
    k_EStartFindingMatchResult_RegionOffline = 103,
    k_EStartFindingMatchResult_MatchmakingCooldown = 104,
    k_EStartFindingMatchResult_ClientOutOfDate = 105,
    k_EStartFindingMatchResult_CompetitiveNoLowPriority = 106,
    k_EStartFindingMatchResult_CompetitiveNotUnlocked = 107,
    k_EStartFindingMatchResult_GameModeNotUnlocked = 108,
    k_EStartFindingMatchResult_CompetitiveNotEnoughPlayTime = 109,
    k_EStartFindingMatchResult_MissingInitialSkill = 110,
    k_EStartFindingMatchResult_CompetitiveRankSpreadTooLarge = 111,
    k_EStartFindingMatchResult_MemberAlreadyInLobby = 112,
    k_EStartFindingMatchResult_MemberNotVACVerified = 113,
    k_EStartFindingMatchResult_WeekendTourneyBadPartySize = 114,
    k_EStartFindingMatchResult_WeekendTourneyTeamBuyInTooSmall = 115,
    k_EStartFindingMatchResult_WeekendTourneyIndividualBuyInTooLarge = 116,
    k_EStartFindingMatchResult_WeekendTourneyTeamBuyInTooLarge = 117,
    k_EStartFindingMatchResult_MemberMissingEventOwnership = 118,
    k_EStartFindingMatchResult_WeekendTourneyNotUnlocked = 119,
    k_EStartFindingMatchResult_WeekendTourneyRecentParticipation = 120,
    k_EStartFindingMatchResult_MemberMissingAnchoredPhoneNumber = 121,
    k_EStartFindingMatchResult_NotMemberOfClan = 122,
    k_EStartFindingMatchResult_CoachesChallengeBadPartySize = 123,
    k_EStartFindingMatchResult_CoachesChallengeRequirementsNotMet = 124,
    k_EStartFindingMatchResult_InvalidRoleSelections = 125,
    k_EStartFindingMatchResult_PhoneNumberDiscrepancy = 126,
    k_EStartFindingMatchResult_NoQueuePoints = 127,
    k_EStartFindingMatchResult_MemberMissingGauntletFlag = 128,
    k_EStartFindingMatchResult_MemberGauntletTooRecent = 129,
    k_EStartFindingMatchResult_DifficultyNotUnlocked = 130,
    k_EStartFindingMatchResult_CoachesNotAllowedInParty = 131,
    k_EStartFindingMatchResult_MatchmakingBusy = 132,
    k_EStartFindingMatchResult_SteamChinaBanned = 133,
    k_EStartFindingMatchResult_SteamChinaInvalidMixedParty = 134,
    UNRECOGNIZED = -1
}
export declare function eStartFindingMatchResultFromJSON(object: any): EStartFindingMatchResult;
export declare function eStartFindingMatchResultToJSON(object: EStartFindingMatchResult): string;
export interface CMsgStartFindingMatch {
    key: string;
    matchgroups: number;
    client_version: number;
    game_modes: number;
    match_type: MatchType;
    matchlanguages: number;
    team_id: number;
    game_language_enum: MatchLanguages;
    game_language_name: string;
    ping_data: CMsgClientPingData | undefined;
    region_select_flags: number;
    solo_queue: boolean;
    steam_clan_account_id: number;
    is_challenge_match: boolean;
    lane_selection_flags: number;
    high_priority_disabled: boolean;
    disable_experimental_gameplay: boolean;
    custom_game_difficulty_mask: number;
    bot_difficulty_mask: number;
    bot_script_index_mask: number;
}
export interface CMsgStartFindingMatchResult {
    legacy_generic_eresult: number;
    result: EStartFindingMatchResult;
    error_token: string;
    debug_message: string;
    responsible_party_members: string[];
    result_metadata: number;
}
export interface CMsgStopFindingMatch {
    accept_cooldown: boolean;
}
export interface CMsgPartyBuilderOptions {
    additional_slots: number;
    match_type: MatchType;
    matchgroups: number;
    client_version: number;
    language: MatchLanguages;
}
export interface CMsgReadyUp {
    state: DOTALobbyReadyState;
    ready_up_key: string;
    hardware_specs: CDOTAClientHardwareSpecs | undefined;
}
export interface CMsgReadyUpStatus {
    lobby_id: string;
    accepted_ids: number[];
    declined_ids: number[];
}
export interface CMsgAbandonCurrentGame {
}
export interface CMsgLobbyScenarioSave {
    version: number;
    data: string;
}
export interface CMsgPracticeLobbySetDetails {
    lobby_id: string;
    game_name: string;
    team_details: CLobbyTeamDetails[];
    server_region: number;
    game_mode: number;
    cm_pick: DOTA_CM_PICK;
    bot_difficulty_radiant: DOTABotDifficulty;
    allow_cheats: boolean;
    fill_with_bots: boolean;
    intro_mode: boolean;
    allow_spectating: boolean;
    pass_key: string;
    leagueid: number;
    penalty_level_radiant: number;
    penalty_level_dire: number;
    load_game_id: number;
    series_type: number;
    radiant_series_wins: number;
    dire_series_wins: number;
    allchat: boolean;
    dota_tv_delay: LobbyDotaTVDelay;
    lan: boolean;
    custom_game_mode: string;
    custom_map_name: string;
    custom_difficulty: number;
    custom_game_id: string;
    custom_min_players: number;
    custom_max_players: number;
    visibility: DOTALobbyVisibility;
    custom_game_crc: string;
    custom_game_timestamp: number;
    previous_match_override: string;
    pause_setting: LobbyDotaPauseSetting;
    bot_difficulty_dire: DOTABotDifficulty;
    bot_radiant: string;
    bot_dire: string;
    selection_priority_rules: DOTASelectionPriorityRules;
    custom_game_penalties: boolean;
    lan_host_ping_location: string;
    league_node_id: number;
    requested_hero_ids: number[];
    scenario_save: CMsgLobbyScenarioSave | undefined;
    ability_draft_specific_details: CMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails | undefined;
}
export interface CMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails {
    shuffle_draft_order: boolean;
}
export interface CMsgPracticeLobbyCreate {
    search_key: string;
    pass_key: string;
    client_version: number;
    lobby_details: CMsgPracticeLobbySetDetails | undefined;
    save_game: CMsgPracticeLobbyCreate_SaveGame | undefined;
}
export interface CMsgPracticeLobbyCreate_SaveGame {
    data: string;
    version: number;
    steam_id: string;
    signature: string;
}
export interface CMsgPracticeLobbySetTeamSlot {
    team: DOTA_GC_TEAM;
    slot: number;
    bot_difficulty: DOTABotDifficulty;
}
export interface CMsgPracticeLobbySetCoach {
    team: DOTA_GC_TEAM;
}
export interface CMsgPracticeLobbyJoinBroadcastChannel {
    channel: number;
    preferred_description: string;
    preferred_country_code: string;
    preferred_language_code: string;
}
export interface CMsgPracticeLobbyCloseBroadcastChannel {
    channel: number;
}
export interface CMsgPracticeLobbyToggleBroadcastChannelCameramanStatus {
}
export interface CMsgPracticeLobbyKick {
    account_id: number;
}
export interface CMsgPracticeLobbyKickFromTeam {
    account_id: number;
}
export interface CMsgPracticeLobbyLeave {
}
export interface CMsgPracticeLobbyLaunch {
    client_version: number;
}
export interface CMsgApplyTeamToPracticeLobby {
    team_id: number;
}
export interface CMsgPracticeLobbyList {
    pass_key: string;
    region: number;
    game_mode: DOTA_GameMode;
}
export interface CMsgPracticeLobbyListResponseEntry {
    id: string;
    members: CMsgPracticeLobbyListResponseEntry_CLobbyMember[];
    requires_pass_key: boolean;
    leader_account_id: number;
    name: string;
    custom_game_mode: string;
    game_mode: DOTA_GameMode;
    friend_present: boolean;
    players: number;
    custom_map_name: string;
    max_player_count: number;
    server_region: number;
    league_id: number;
    lan_host_ping_location: string;
    min_player_count: number;
    penalties_enabled: boolean;
}
export interface CMsgPracticeLobbyListResponseEntry_CLobbyMember {
    account_id: number;
    player_name: string;
}
export interface CMsgPracticeLobbyListResponse {
    lobbies: CMsgPracticeLobbyListResponseEntry[];
}
export interface CMsgLobbyList {
    server_region: number;
    game_mode: DOTA_GameMode;
}
export interface CMsgLobbyListResponse {
    lobbies: CMsgPracticeLobbyListResponseEntry[];
}
export interface CMsgPracticeLobbyJoin {
    lobby_id: string;
    client_version: number;
    pass_key: string;
    custom_game_crc: string;
    custom_game_timestamp: number;
}
export interface CMsgPracticeLobbyJoinResponse {
    result: DOTAJoinLobbyResult;
}
export interface CMsgFriendPracticeLobbyListRequest {
    friends: number[];
}
export interface CMsgFriendPracticeLobbyListResponse {
    lobbies: CMsgPracticeLobbyListResponseEntry[];
}
export interface CMsgJoinableCustomGameModesRequest {
    server_region: number;
}
export interface CMsgJoinableCustomGameModesResponseEntry {
    custom_game_id: string;
    lobby_count: number;
    player_count: number;
}
export interface CMsgJoinableCustomGameModesResponse {
    game_modes: CMsgJoinableCustomGameModesResponseEntry[];
}
export interface CMsgJoinableCustomLobbiesRequest {
    server_region: number;
    custom_game_id: string;
}
export interface CMsgJoinableCustomLobbiesResponseEntry {
    lobby_id: string;
    custom_game_id: string;
    lobby_name: string;
    member_count: number;
    leader_account_id: number;
    leader_name: string;
    custom_map_name: string;
    max_player_count: number;
    server_region: number;
    has_pass_key: boolean;
    lan_host_ping_location: string;
    lobby_creation_time: number;
    custom_game_timestamp: number;
    custom_game_crc: string;
    min_player_count: number;
    penalties_enabled: boolean;
}
export interface CMsgJoinableCustomLobbiesResponse {
    lobbies: CMsgJoinableCustomLobbiesResponseEntry[];
}
export interface CMsgQuickJoinCustomLobby {
    legacy_server_region: number;
    custom_game_id: string;
    client_version: number;
    create_lobby_details: CMsgPracticeLobbySetDetails | undefined;
    allow_any_map: boolean;
    legacy_region_pings: CMsgQuickJoinCustomLobby_LegacyRegionPing[];
    ping_data: CMsgClientPingData | undefined;
}
export interface CMsgQuickJoinCustomLobby_LegacyRegionPing {
    server_region: number;
    ping: number;
    region_code: number;
}
export interface CMsgQuickJoinCustomLobbyResponse {
    result: DOTAJoinLobbyResult;
}
export interface CMsgBotGameCreate {
    search_key: string;
    client_version: number;
    difficulty_radiant: DOTABotDifficulty;
    team: DOTA_GC_TEAM;
    game_mode: number;
    difficulty_dire: DOTABotDifficulty;
}
export interface CMsgDOTAPartyMemberSetCoach {
    wants_coach: boolean;
}
export interface CMsgDOTASetGroupLeader {
    new_leader_steamid: string;
}
export interface CMsgDOTACancelGroupInvites {
    invited_steamids: string[];
    invited_groupids: string[];
}
export interface CMsgDOTASetGroupOpenStatus {
    open: boolean;
}
export interface CMsgDOTAGroupMergeInvite {
    other_group_id: string;
}
export interface CMsgDOTAGroupMergeResponse {
    initiator_group_id: string;
    accept: boolean;
}
export interface CMsgDOTAGroupMergeReply {
    result: EDOTAGroupMergeResult;
}
export interface CMsgSpectatorLobbyGameDetails {
    language: number;
    match_id: string;
    server_steam_id: string;
    stream_url: string;
    stream_name: string;
    league_id: number;
    series_type: number;
    series_game: number;
    radiant_team: CMsgSpectatorLobbyGameDetails_Team | undefined;
    dire_team: CMsgSpectatorLobbyGameDetails_Team | undefined;
}
export interface CMsgSpectatorLobbyGameDetails_Team {
    team_id: number;
    team_name: string;
    team_logo: string;
}
export interface CMsgSetSpectatorLobbyDetails {
    lobby_id: string;
    lobby_name: string;
    pass_key: string;
    game_details: CMsgSpectatorLobbyGameDetails | undefined;
}
export interface CMsgCreateSpectatorLobby {
    client_version: number;
    details: CMsgSetSpectatorLobbyDetails | undefined;
}
export interface CMsgSpectatorLobbyList {
}
export interface CMsgSpectatorLobbyListResponse {
    lobbies: CMsgSpectatorLobbyListResponse_SpectatorLobby[];
}
export interface CMsgSpectatorLobbyListResponse_SpectatorLobby {
    lobby_id: string;
    game_name: string;
    requires_pass_key: boolean;
    leader_account_id: number;
    member_count: number;
    game_details: CMsgSpectatorLobbyGameDetails | undefined;
}
export interface CMsgClientToGCRequestSteamDatagramTicket {
    server_steam_id: string;
}
export interface CMsgClientToGCRequestSteamDatagramTicketResponse {
    serialized_ticket: string;
    message: string;
}
export interface CMsgGCToClientSteamDatagramTicket {
    legacy_time_expiry: number;
    legacy_authorized_steam_id: string;
    legacy_authorized_public_ip: number;
    legacy_gameserver_steam_id: string;
    legacy_gameserver_net_id: string;
    legacy_signature: string;
    legacy_app_id: number;
    legacy_extra_fields: Uint8Array[];
    serialized_ticket: string;
}
export interface CMsgGCToClientRequestLaneSelection {
}
export interface CMsgGCToClientRequestLaneSelectionResponse {
    lane_selection_flags: number;
    high_priority_disabled: boolean;
}
export interface CMsgGCToClientRequestMMInfo {
}
export interface CMsgClientToGCMMInfo {
    lane_selection_flags: number;
    high_priority_disabled: boolean;
}
export declare const CMsgStartFindingMatch: {
    fromJSON(object: any): CMsgStartFindingMatch;
    toJSON(message: CMsgStartFindingMatch): unknown;
    create<I extends {
        key?: string;
        matchgroups?: number;
        client_version?: number;
        game_modes?: number;
        match_type?: MatchType;
        matchlanguages?: number;
        team_id?: number;
        game_language_enum?: MatchLanguages;
        game_language_name?: string;
        ping_data?: {
            relay_codes?: number[];
            relay_pings?: number[];
            region_codes?: number[];
            region_pings?: number[];
            region_ping_failed_bitmask?: number;
        };
        region_select_flags?: number;
        solo_queue?: boolean;
        steam_clan_account_id?: number;
        is_challenge_match?: boolean;
        lane_selection_flags?: number;
        high_priority_disabled?: boolean;
        disable_experimental_gameplay?: boolean;
        custom_game_difficulty_mask?: number;
        bot_difficulty_mask?: number;
        bot_script_index_mask?: number;
    } & {
        key?: string;
        matchgroups?: number;
        client_version?: number;
        game_modes?: number;
        match_type?: MatchType;
        matchlanguages?: number;
        team_id?: number;
        game_language_enum?: MatchLanguages;
        game_language_name?: string;
        ping_data?: {
            relay_codes?: number[];
            relay_pings?: number[];
            region_codes?: number[];
            region_pings?: number[];
            region_ping_failed_bitmask?: number;
        } & {
            relay_codes?: number[] & number[] & { [K in Exclude<keyof I["ping_data"]["relay_codes"], keyof number[]>]: never; };
            relay_pings?: number[] & number[] & { [K_1 in Exclude<keyof I["ping_data"]["relay_pings"], keyof number[]>]: never; };
            region_codes?: number[] & number[] & { [K_2 in Exclude<keyof I["ping_data"]["region_codes"], keyof number[]>]: never; };
            region_pings?: number[] & number[] & { [K_3 in Exclude<keyof I["ping_data"]["region_pings"], keyof number[]>]: never; };
            region_ping_failed_bitmask?: number;
        } & { [K_4 in Exclude<keyof I["ping_data"], keyof CMsgClientPingData>]: never; };
        region_select_flags?: number;
        solo_queue?: boolean;
        steam_clan_account_id?: number;
        is_challenge_match?: boolean;
        lane_selection_flags?: number;
        high_priority_disabled?: boolean;
        disable_experimental_gameplay?: boolean;
        custom_game_difficulty_mask?: number;
        bot_difficulty_mask?: number;
        bot_script_index_mask?: number;
    } & { [K_5 in Exclude<keyof I, keyof CMsgStartFindingMatch>]: never; }>(base?: I): CMsgStartFindingMatch;
    fromPartial<I_1 extends {
        key?: string;
        matchgroups?: number;
        client_version?: number;
        game_modes?: number;
        match_type?: MatchType;
        matchlanguages?: number;
        team_id?: number;
        game_language_enum?: MatchLanguages;
        game_language_name?: string;
        ping_data?: {
            relay_codes?: number[];
            relay_pings?: number[];
            region_codes?: number[];
            region_pings?: number[];
            region_ping_failed_bitmask?: number;
        };
        region_select_flags?: number;
        solo_queue?: boolean;
        steam_clan_account_id?: number;
        is_challenge_match?: boolean;
        lane_selection_flags?: number;
        high_priority_disabled?: boolean;
        disable_experimental_gameplay?: boolean;
        custom_game_difficulty_mask?: number;
        bot_difficulty_mask?: number;
        bot_script_index_mask?: number;
    } & {
        key?: string;
        matchgroups?: number;
        client_version?: number;
        game_modes?: number;
        match_type?: MatchType;
        matchlanguages?: number;
        team_id?: number;
        game_language_enum?: MatchLanguages;
        game_language_name?: string;
        ping_data?: {
            relay_codes?: number[];
            relay_pings?: number[];
            region_codes?: number[];
            region_pings?: number[];
            region_ping_failed_bitmask?: number;
        } & {
            relay_codes?: number[] & number[] & { [K_6 in Exclude<keyof I_1["ping_data"]["relay_codes"], keyof number[]>]: never; };
            relay_pings?: number[] & number[] & { [K_7 in Exclude<keyof I_1["ping_data"]["relay_pings"], keyof number[]>]: never; };
            region_codes?: number[] & number[] & { [K_8 in Exclude<keyof I_1["ping_data"]["region_codes"], keyof number[]>]: never; };
            region_pings?: number[] & number[] & { [K_9 in Exclude<keyof I_1["ping_data"]["region_pings"], keyof number[]>]: never; };
            region_ping_failed_bitmask?: number;
        } & { [K_10 in Exclude<keyof I_1["ping_data"], keyof CMsgClientPingData>]: never; };
        region_select_flags?: number;
        solo_queue?: boolean;
        steam_clan_account_id?: number;
        is_challenge_match?: boolean;
        lane_selection_flags?: number;
        high_priority_disabled?: boolean;
        disable_experimental_gameplay?: boolean;
        custom_game_difficulty_mask?: number;
        bot_difficulty_mask?: number;
        bot_script_index_mask?: number;
    } & { [K_11 in Exclude<keyof I_1, keyof CMsgStartFindingMatch>]: never; }>(object: I_1): CMsgStartFindingMatch;
};
export declare const CMsgStartFindingMatchResult: {
    fromJSON(object: any): CMsgStartFindingMatchResult;
    toJSON(message: CMsgStartFindingMatchResult): unknown;
    create<I extends {
        legacy_generic_eresult?: number;
        result?: EStartFindingMatchResult;
        error_token?: string;
        debug_message?: string;
        responsible_party_members?: string[];
        result_metadata?: number;
    } & {
        legacy_generic_eresult?: number;
        result?: EStartFindingMatchResult;
        error_token?: string;
        debug_message?: string;
        responsible_party_members?: string[] & string[] & { [K in Exclude<keyof I["responsible_party_members"], keyof string[]>]: never; };
        result_metadata?: number;
    } & { [K_1 in Exclude<keyof I, keyof CMsgStartFindingMatchResult>]: never; }>(base?: I): CMsgStartFindingMatchResult;
    fromPartial<I_1 extends {
        legacy_generic_eresult?: number;
        result?: EStartFindingMatchResult;
        error_token?: string;
        debug_message?: string;
        responsible_party_members?: string[];
        result_metadata?: number;
    } & {
        legacy_generic_eresult?: number;
        result?: EStartFindingMatchResult;
        error_token?: string;
        debug_message?: string;
        responsible_party_members?: string[] & string[] & { [K_2 in Exclude<keyof I_1["responsible_party_members"], keyof string[]>]: never; };
        result_metadata?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgStartFindingMatchResult>]: never; }>(object: I_1): CMsgStartFindingMatchResult;
};
export declare const CMsgStopFindingMatch: {
    fromJSON(object: any): CMsgStopFindingMatch;
    toJSON(message: CMsgStopFindingMatch): unknown;
    create<I extends {
        accept_cooldown?: boolean;
    } & {
        accept_cooldown?: boolean;
    } & { [K in Exclude<keyof I, "accept_cooldown">]: never; }>(base?: I): CMsgStopFindingMatch;
    fromPartial<I_1 extends {
        accept_cooldown?: boolean;
    } & {
        accept_cooldown?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "accept_cooldown">]: never; }>(object: I_1): CMsgStopFindingMatch;
};
export declare const CMsgPartyBuilderOptions: {
    fromJSON(object: any): CMsgPartyBuilderOptions;
    toJSON(message: CMsgPartyBuilderOptions): unknown;
    create<I extends {
        additional_slots?: number;
        match_type?: MatchType;
        matchgroups?: number;
        client_version?: number;
        language?: MatchLanguages;
    } & {
        additional_slots?: number;
        match_type?: MatchType;
        matchgroups?: number;
        client_version?: number;
        language?: MatchLanguages;
    } & { [K in Exclude<keyof I, keyof CMsgPartyBuilderOptions>]: never; }>(base?: I): CMsgPartyBuilderOptions;
    fromPartial<I_1 extends {
        additional_slots?: number;
        match_type?: MatchType;
        matchgroups?: number;
        client_version?: number;
        language?: MatchLanguages;
    } & {
        additional_slots?: number;
        match_type?: MatchType;
        matchgroups?: number;
        client_version?: number;
        language?: MatchLanguages;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgPartyBuilderOptions>]: never; }>(object: I_1): CMsgPartyBuilderOptions;
};
export declare const CMsgReadyUp: {
    fromJSON(object: any): CMsgReadyUp;
    toJSON(message: CMsgReadyUp): unknown;
    create<I extends {
        state?: DOTALobbyReadyState;
        ready_up_key?: string;
        hardware_specs?: {
            logical_processors?: number;
            cpu_cycles_per_second?: string;
            total_physical_memory?: string;
            is_64_bit_os?: boolean;
            upload_measurement?: string;
            prefer_not_host?: boolean;
        };
    } & {
        state?: DOTALobbyReadyState;
        ready_up_key?: string;
        hardware_specs?: {
            logical_processors?: number;
            cpu_cycles_per_second?: string;
            total_physical_memory?: string;
            is_64_bit_os?: boolean;
            upload_measurement?: string;
            prefer_not_host?: boolean;
        } & {
            logical_processors?: number;
            cpu_cycles_per_second?: string;
            total_physical_memory?: string;
            is_64_bit_os?: boolean;
            upload_measurement?: string;
            prefer_not_host?: boolean;
        } & { [K in Exclude<keyof I["hardware_specs"], keyof CDOTAClientHardwareSpecs>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CMsgReadyUp>]: never; }>(base?: I): CMsgReadyUp;
    fromPartial<I_1 extends {
        state?: DOTALobbyReadyState;
        ready_up_key?: string;
        hardware_specs?: {
            logical_processors?: number;
            cpu_cycles_per_second?: string;
            total_physical_memory?: string;
            is_64_bit_os?: boolean;
            upload_measurement?: string;
            prefer_not_host?: boolean;
        };
    } & {
        state?: DOTALobbyReadyState;
        ready_up_key?: string;
        hardware_specs?: {
            logical_processors?: number;
            cpu_cycles_per_second?: string;
            total_physical_memory?: string;
            is_64_bit_os?: boolean;
            upload_measurement?: string;
            prefer_not_host?: boolean;
        } & {
            logical_processors?: number;
            cpu_cycles_per_second?: string;
            total_physical_memory?: string;
            is_64_bit_os?: boolean;
            upload_measurement?: string;
            prefer_not_host?: boolean;
        } & { [K_2 in Exclude<keyof I_1["hardware_specs"], keyof CDOTAClientHardwareSpecs>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgReadyUp>]: never; }>(object: I_1): CMsgReadyUp;
};
export declare const CMsgReadyUpStatus: {
    fromJSON(object: any): CMsgReadyUpStatus;
    toJSON(message: CMsgReadyUpStatus): unknown;
    create<I extends {
        lobby_id?: string;
        accepted_ids?: number[];
        declined_ids?: number[];
    } & {
        lobby_id?: string;
        accepted_ids?: number[] & number[] & { [K in Exclude<keyof I["accepted_ids"], keyof number[]>]: never; };
        declined_ids?: number[] & number[] & { [K_1 in Exclude<keyof I["declined_ids"], keyof number[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgReadyUpStatus>]: never; }>(base?: I): CMsgReadyUpStatus;
    fromPartial<I_1 extends {
        lobby_id?: string;
        accepted_ids?: number[];
        declined_ids?: number[];
    } & {
        lobby_id?: string;
        accepted_ids?: number[] & number[] & { [K_3 in Exclude<keyof I_1["accepted_ids"], keyof number[]>]: never; };
        declined_ids?: number[] & number[] & { [K_4 in Exclude<keyof I_1["declined_ids"], keyof number[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgReadyUpStatus>]: never; }>(object: I_1): CMsgReadyUpStatus;
};
export declare const CMsgAbandonCurrentGame: {
    fromJSON(_: any): CMsgAbandonCurrentGame;
    toJSON(_: CMsgAbandonCurrentGame): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgAbandonCurrentGame;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgAbandonCurrentGame;
};
export declare const CMsgLobbyScenarioSave: {
    fromJSON(object: any): CMsgLobbyScenarioSave;
    toJSON(message: CMsgLobbyScenarioSave): unknown;
    create<I extends {
        version?: number;
        data?: string;
    } & {
        version?: number;
        data?: string;
    } & { [K in Exclude<keyof I, keyof CMsgLobbyScenarioSave>]: never; }>(base?: I): CMsgLobbyScenarioSave;
    fromPartial<I_1 extends {
        version?: number;
        data?: string;
    } & {
        version?: number;
        data?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgLobbyScenarioSave>]: never; }>(object: I_1): CMsgLobbyScenarioSave;
};
export declare const CMsgPracticeLobbySetDetails: {
    fromJSON(object: any): CMsgPracticeLobbySetDetails;
    toJSON(message: CMsgPracticeLobbySetDetails): unknown;
    create<I extends {
        lobby_id?: string;
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
        server_region?: number;
        game_mode?: number;
        cm_pick?: DOTA_CM_PICK;
        bot_difficulty_radiant?: DOTABotDifficulty;
        allow_cheats?: boolean;
        fill_with_bots?: boolean;
        intro_mode?: boolean;
        allow_spectating?: boolean;
        pass_key?: string;
        leagueid?: number;
        penalty_level_radiant?: number;
        penalty_level_dire?: number;
        load_game_id?: number;
        series_type?: number;
        radiant_series_wins?: number;
        dire_series_wins?: number;
        allchat?: boolean;
        dota_tv_delay?: LobbyDotaTVDelay;
        lan?: boolean;
        custom_game_mode?: string;
        custom_map_name?: string;
        custom_difficulty?: number;
        custom_game_id?: string;
        custom_min_players?: number;
        custom_max_players?: number;
        visibility?: DOTALobbyVisibility;
        custom_game_crc?: string;
        custom_game_timestamp?: number;
        previous_match_override?: string;
        pause_setting?: LobbyDotaPauseSetting;
        bot_difficulty_dire?: DOTABotDifficulty;
        bot_radiant?: string;
        bot_dire?: string;
        selection_priority_rules?: DOTASelectionPriorityRules;
        custom_game_penalties?: boolean;
        lan_host_ping_location?: string;
        league_node_id?: number;
        requested_hero_ids?: number[];
        scenario_save?: {
            version?: number;
            data?: string;
        };
        ability_draft_specific_details?: {
            shuffle_draft_order?: boolean;
        };
    } & {
        lobby_id?: string;
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
        } & { [K in Exclude<keyof I["team_details"][number], keyof CLobbyTeamDetails>]: never; })[] & { [K_1 in Exclude<keyof I["team_details"], keyof {
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
        server_region?: number;
        game_mode?: number;
        cm_pick?: DOTA_CM_PICK;
        bot_difficulty_radiant?: DOTABotDifficulty;
        allow_cheats?: boolean;
        fill_with_bots?: boolean;
        intro_mode?: boolean;
        allow_spectating?: boolean;
        pass_key?: string;
        leagueid?: number;
        penalty_level_radiant?: number;
        penalty_level_dire?: number;
        load_game_id?: number;
        series_type?: number;
        radiant_series_wins?: number;
        dire_series_wins?: number;
        allchat?: boolean;
        dota_tv_delay?: LobbyDotaTVDelay;
        lan?: boolean;
        custom_game_mode?: string;
        custom_map_name?: string;
        custom_difficulty?: number;
        custom_game_id?: string;
        custom_min_players?: number;
        custom_max_players?: number;
        visibility?: DOTALobbyVisibility;
        custom_game_crc?: string;
        custom_game_timestamp?: number;
        previous_match_override?: string;
        pause_setting?: LobbyDotaPauseSetting;
        bot_difficulty_dire?: DOTABotDifficulty;
        bot_radiant?: string;
        bot_dire?: string;
        selection_priority_rules?: DOTASelectionPriorityRules;
        custom_game_penalties?: boolean;
        lan_host_ping_location?: string;
        league_node_id?: number;
        requested_hero_ids?: number[] & number[] & { [K_2 in Exclude<keyof I["requested_hero_ids"], keyof number[]>]: never; };
        scenario_save?: {
            version?: number;
            data?: string;
        } & {
            version?: number;
            data?: string;
        } & { [K_3 in Exclude<keyof I["scenario_save"], keyof CMsgLobbyScenarioSave>]: never; };
        ability_draft_specific_details?: {
            shuffle_draft_order?: boolean;
        } & {
            shuffle_draft_order?: boolean;
        } & { [K_4 in Exclude<keyof I["ability_draft_specific_details"], "shuffle_draft_order">]: never; };
    } & { [K_5 in Exclude<keyof I, keyof CMsgPracticeLobbySetDetails>]: never; }>(base?: I): CMsgPracticeLobbySetDetails;
    fromPartial<I_1 extends {
        lobby_id?: string;
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
        server_region?: number;
        game_mode?: number;
        cm_pick?: DOTA_CM_PICK;
        bot_difficulty_radiant?: DOTABotDifficulty;
        allow_cheats?: boolean;
        fill_with_bots?: boolean;
        intro_mode?: boolean;
        allow_spectating?: boolean;
        pass_key?: string;
        leagueid?: number;
        penalty_level_radiant?: number;
        penalty_level_dire?: number;
        load_game_id?: number;
        series_type?: number;
        radiant_series_wins?: number;
        dire_series_wins?: number;
        allchat?: boolean;
        dota_tv_delay?: LobbyDotaTVDelay;
        lan?: boolean;
        custom_game_mode?: string;
        custom_map_name?: string;
        custom_difficulty?: number;
        custom_game_id?: string;
        custom_min_players?: number;
        custom_max_players?: number;
        visibility?: DOTALobbyVisibility;
        custom_game_crc?: string;
        custom_game_timestamp?: number;
        previous_match_override?: string;
        pause_setting?: LobbyDotaPauseSetting;
        bot_difficulty_dire?: DOTABotDifficulty;
        bot_radiant?: string;
        bot_dire?: string;
        selection_priority_rules?: DOTASelectionPriorityRules;
        custom_game_penalties?: boolean;
        lan_host_ping_location?: string;
        league_node_id?: number;
        requested_hero_ids?: number[];
        scenario_save?: {
            version?: number;
            data?: string;
        };
        ability_draft_specific_details?: {
            shuffle_draft_order?: boolean;
        };
    } & {
        lobby_id?: string;
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
        } & { [K_6 in Exclude<keyof I_1["team_details"][number], keyof CLobbyTeamDetails>]: never; })[] & { [K_7 in Exclude<keyof I_1["team_details"], keyof {
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
        server_region?: number;
        game_mode?: number;
        cm_pick?: DOTA_CM_PICK;
        bot_difficulty_radiant?: DOTABotDifficulty;
        allow_cheats?: boolean;
        fill_with_bots?: boolean;
        intro_mode?: boolean;
        allow_spectating?: boolean;
        pass_key?: string;
        leagueid?: number;
        penalty_level_radiant?: number;
        penalty_level_dire?: number;
        load_game_id?: number;
        series_type?: number;
        radiant_series_wins?: number;
        dire_series_wins?: number;
        allchat?: boolean;
        dota_tv_delay?: LobbyDotaTVDelay;
        lan?: boolean;
        custom_game_mode?: string;
        custom_map_name?: string;
        custom_difficulty?: number;
        custom_game_id?: string;
        custom_min_players?: number;
        custom_max_players?: number;
        visibility?: DOTALobbyVisibility;
        custom_game_crc?: string;
        custom_game_timestamp?: number;
        previous_match_override?: string;
        pause_setting?: LobbyDotaPauseSetting;
        bot_difficulty_dire?: DOTABotDifficulty;
        bot_radiant?: string;
        bot_dire?: string;
        selection_priority_rules?: DOTASelectionPriorityRules;
        custom_game_penalties?: boolean;
        lan_host_ping_location?: string;
        league_node_id?: number;
        requested_hero_ids?: number[] & number[] & { [K_8 in Exclude<keyof I_1["requested_hero_ids"], keyof number[]>]: never; };
        scenario_save?: {
            version?: number;
            data?: string;
        } & {
            version?: number;
            data?: string;
        } & { [K_9 in Exclude<keyof I_1["scenario_save"], keyof CMsgLobbyScenarioSave>]: never; };
        ability_draft_specific_details?: {
            shuffle_draft_order?: boolean;
        } & {
            shuffle_draft_order?: boolean;
        } & { [K_10 in Exclude<keyof I_1["ability_draft_specific_details"], "shuffle_draft_order">]: never; };
    } & { [K_11 in Exclude<keyof I_1, keyof CMsgPracticeLobbySetDetails>]: never; }>(object: I_1): CMsgPracticeLobbySetDetails;
};
export declare const CMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails: {
    fromJSON(object: any): CMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails;
    toJSON(message: CMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails): unknown;
    create<I extends {
        shuffle_draft_order?: boolean;
    } & {
        shuffle_draft_order?: boolean;
    } & { [K in Exclude<keyof I, "shuffle_draft_order">]: never; }>(base?: I): CMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails;
    fromPartial<I_1 extends {
        shuffle_draft_order?: boolean;
    } & {
        shuffle_draft_order?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "shuffle_draft_order">]: never; }>(object: I_1): CMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails;
};
export declare const CMsgPracticeLobbyCreate: {
    fromJSON(object: any): CMsgPracticeLobbyCreate;
    toJSON(message: CMsgPracticeLobbyCreate): unknown;
    create<I extends {
        search_key?: string;
        pass_key?: string;
        client_version?: number;
        lobby_details?: {
            lobby_id?: string;
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
            server_region?: number;
            game_mode?: number;
            cm_pick?: DOTA_CM_PICK;
            bot_difficulty_radiant?: DOTABotDifficulty;
            allow_cheats?: boolean;
            fill_with_bots?: boolean;
            intro_mode?: boolean;
            allow_spectating?: boolean;
            pass_key?: string;
            leagueid?: number;
            penalty_level_radiant?: number;
            penalty_level_dire?: number;
            load_game_id?: number;
            series_type?: number;
            radiant_series_wins?: number;
            dire_series_wins?: number;
            allchat?: boolean;
            dota_tv_delay?: LobbyDotaTVDelay;
            lan?: boolean;
            custom_game_mode?: string;
            custom_map_name?: string;
            custom_difficulty?: number;
            custom_game_id?: string;
            custom_min_players?: number;
            custom_max_players?: number;
            visibility?: DOTALobbyVisibility;
            custom_game_crc?: string;
            custom_game_timestamp?: number;
            previous_match_override?: string;
            pause_setting?: LobbyDotaPauseSetting;
            bot_difficulty_dire?: DOTABotDifficulty;
            bot_radiant?: string;
            bot_dire?: string;
            selection_priority_rules?: DOTASelectionPriorityRules;
            custom_game_penalties?: boolean;
            lan_host_ping_location?: string;
            league_node_id?: number;
            requested_hero_ids?: number[];
            scenario_save?: {
                version?: number;
                data?: string;
            };
            ability_draft_specific_details?: {
                shuffle_draft_order?: boolean;
            };
        };
        save_game?: {
            data?: string;
            version?: number;
            steam_id?: string;
            signature?: string;
        };
    } & {
        search_key?: string;
        pass_key?: string;
        client_version?: number;
        lobby_details?: {
            lobby_id?: string;
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
            server_region?: number;
            game_mode?: number;
            cm_pick?: DOTA_CM_PICK;
            bot_difficulty_radiant?: DOTABotDifficulty;
            allow_cheats?: boolean;
            fill_with_bots?: boolean;
            intro_mode?: boolean;
            allow_spectating?: boolean;
            pass_key?: string;
            leagueid?: number;
            penalty_level_radiant?: number;
            penalty_level_dire?: number;
            load_game_id?: number;
            series_type?: number;
            radiant_series_wins?: number;
            dire_series_wins?: number;
            allchat?: boolean;
            dota_tv_delay?: LobbyDotaTVDelay;
            lan?: boolean;
            custom_game_mode?: string;
            custom_map_name?: string;
            custom_difficulty?: number;
            custom_game_id?: string;
            custom_min_players?: number;
            custom_max_players?: number;
            visibility?: DOTALobbyVisibility;
            custom_game_crc?: string;
            custom_game_timestamp?: number;
            previous_match_override?: string;
            pause_setting?: LobbyDotaPauseSetting;
            bot_difficulty_dire?: DOTABotDifficulty;
            bot_radiant?: string;
            bot_dire?: string;
            selection_priority_rules?: DOTASelectionPriorityRules;
            custom_game_penalties?: boolean;
            lan_host_ping_location?: string;
            league_node_id?: number;
            requested_hero_ids?: number[];
            scenario_save?: {
                version?: number;
                data?: string;
            };
            ability_draft_specific_details?: {
                shuffle_draft_order?: boolean;
            };
        } & {
            lobby_id?: string;
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
            } & { [K in Exclude<keyof I["lobby_details"]["team_details"][number], keyof CLobbyTeamDetails>]: never; })[] & { [K_1 in Exclude<keyof I["lobby_details"]["team_details"], keyof {
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
            server_region?: number;
            game_mode?: number;
            cm_pick?: DOTA_CM_PICK;
            bot_difficulty_radiant?: DOTABotDifficulty;
            allow_cheats?: boolean;
            fill_with_bots?: boolean;
            intro_mode?: boolean;
            allow_spectating?: boolean;
            pass_key?: string;
            leagueid?: number;
            penalty_level_radiant?: number;
            penalty_level_dire?: number;
            load_game_id?: number;
            series_type?: number;
            radiant_series_wins?: number;
            dire_series_wins?: number;
            allchat?: boolean;
            dota_tv_delay?: LobbyDotaTVDelay;
            lan?: boolean;
            custom_game_mode?: string;
            custom_map_name?: string;
            custom_difficulty?: number;
            custom_game_id?: string;
            custom_min_players?: number;
            custom_max_players?: number;
            visibility?: DOTALobbyVisibility;
            custom_game_crc?: string;
            custom_game_timestamp?: number;
            previous_match_override?: string;
            pause_setting?: LobbyDotaPauseSetting;
            bot_difficulty_dire?: DOTABotDifficulty;
            bot_radiant?: string;
            bot_dire?: string;
            selection_priority_rules?: DOTASelectionPriorityRules;
            custom_game_penalties?: boolean;
            lan_host_ping_location?: string;
            league_node_id?: number;
            requested_hero_ids?: number[] & number[] & { [K_2 in Exclude<keyof I["lobby_details"]["requested_hero_ids"], keyof number[]>]: never; };
            scenario_save?: {
                version?: number;
                data?: string;
            } & {
                version?: number;
                data?: string;
            } & { [K_3 in Exclude<keyof I["lobby_details"]["scenario_save"], keyof CMsgLobbyScenarioSave>]: never; };
            ability_draft_specific_details?: {
                shuffle_draft_order?: boolean;
            } & {
                shuffle_draft_order?: boolean;
            } & { [K_4 in Exclude<keyof I["lobby_details"]["ability_draft_specific_details"], "shuffle_draft_order">]: never; };
        } & { [K_5 in Exclude<keyof I["lobby_details"], keyof CMsgPracticeLobbySetDetails>]: never; };
        save_game?: {
            data?: string;
            version?: number;
            steam_id?: string;
            signature?: string;
        } & {
            data?: string;
            version?: number;
            steam_id?: string;
            signature?: string;
        } & { [K_6 in Exclude<keyof I["save_game"], keyof CMsgPracticeLobbyCreate_SaveGame>]: never; };
    } & { [K_7 in Exclude<keyof I, keyof CMsgPracticeLobbyCreate>]: never; }>(base?: I): CMsgPracticeLobbyCreate;
    fromPartial<I_1 extends {
        search_key?: string;
        pass_key?: string;
        client_version?: number;
        lobby_details?: {
            lobby_id?: string;
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
            server_region?: number;
            game_mode?: number;
            cm_pick?: DOTA_CM_PICK;
            bot_difficulty_radiant?: DOTABotDifficulty;
            allow_cheats?: boolean;
            fill_with_bots?: boolean;
            intro_mode?: boolean;
            allow_spectating?: boolean;
            pass_key?: string;
            leagueid?: number;
            penalty_level_radiant?: number;
            penalty_level_dire?: number;
            load_game_id?: number;
            series_type?: number;
            radiant_series_wins?: number;
            dire_series_wins?: number;
            allchat?: boolean;
            dota_tv_delay?: LobbyDotaTVDelay;
            lan?: boolean;
            custom_game_mode?: string;
            custom_map_name?: string;
            custom_difficulty?: number;
            custom_game_id?: string;
            custom_min_players?: number;
            custom_max_players?: number;
            visibility?: DOTALobbyVisibility;
            custom_game_crc?: string;
            custom_game_timestamp?: number;
            previous_match_override?: string;
            pause_setting?: LobbyDotaPauseSetting;
            bot_difficulty_dire?: DOTABotDifficulty;
            bot_radiant?: string;
            bot_dire?: string;
            selection_priority_rules?: DOTASelectionPriorityRules;
            custom_game_penalties?: boolean;
            lan_host_ping_location?: string;
            league_node_id?: number;
            requested_hero_ids?: number[];
            scenario_save?: {
                version?: number;
                data?: string;
            };
            ability_draft_specific_details?: {
                shuffle_draft_order?: boolean;
            };
        };
        save_game?: {
            data?: string;
            version?: number;
            steam_id?: string;
            signature?: string;
        };
    } & {
        search_key?: string;
        pass_key?: string;
        client_version?: number;
        lobby_details?: {
            lobby_id?: string;
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
            server_region?: number;
            game_mode?: number;
            cm_pick?: DOTA_CM_PICK;
            bot_difficulty_radiant?: DOTABotDifficulty;
            allow_cheats?: boolean;
            fill_with_bots?: boolean;
            intro_mode?: boolean;
            allow_spectating?: boolean;
            pass_key?: string;
            leagueid?: number;
            penalty_level_radiant?: number;
            penalty_level_dire?: number;
            load_game_id?: number;
            series_type?: number;
            radiant_series_wins?: number;
            dire_series_wins?: number;
            allchat?: boolean;
            dota_tv_delay?: LobbyDotaTVDelay;
            lan?: boolean;
            custom_game_mode?: string;
            custom_map_name?: string;
            custom_difficulty?: number;
            custom_game_id?: string;
            custom_min_players?: number;
            custom_max_players?: number;
            visibility?: DOTALobbyVisibility;
            custom_game_crc?: string;
            custom_game_timestamp?: number;
            previous_match_override?: string;
            pause_setting?: LobbyDotaPauseSetting;
            bot_difficulty_dire?: DOTABotDifficulty;
            bot_radiant?: string;
            bot_dire?: string;
            selection_priority_rules?: DOTASelectionPriorityRules;
            custom_game_penalties?: boolean;
            lan_host_ping_location?: string;
            league_node_id?: number;
            requested_hero_ids?: number[];
            scenario_save?: {
                version?: number;
                data?: string;
            };
            ability_draft_specific_details?: {
                shuffle_draft_order?: boolean;
            };
        } & {
            lobby_id?: string;
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
            } & { [K_8 in Exclude<keyof I_1["lobby_details"]["team_details"][number], keyof CLobbyTeamDetails>]: never; })[] & { [K_9 in Exclude<keyof I_1["lobby_details"]["team_details"], keyof {
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
            server_region?: number;
            game_mode?: number;
            cm_pick?: DOTA_CM_PICK;
            bot_difficulty_radiant?: DOTABotDifficulty;
            allow_cheats?: boolean;
            fill_with_bots?: boolean;
            intro_mode?: boolean;
            allow_spectating?: boolean;
            pass_key?: string;
            leagueid?: number;
            penalty_level_radiant?: number;
            penalty_level_dire?: number;
            load_game_id?: number;
            series_type?: number;
            radiant_series_wins?: number;
            dire_series_wins?: number;
            allchat?: boolean;
            dota_tv_delay?: LobbyDotaTVDelay;
            lan?: boolean;
            custom_game_mode?: string;
            custom_map_name?: string;
            custom_difficulty?: number;
            custom_game_id?: string;
            custom_min_players?: number;
            custom_max_players?: number;
            visibility?: DOTALobbyVisibility;
            custom_game_crc?: string;
            custom_game_timestamp?: number;
            previous_match_override?: string;
            pause_setting?: LobbyDotaPauseSetting;
            bot_difficulty_dire?: DOTABotDifficulty;
            bot_radiant?: string;
            bot_dire?: string;
            selection_priority_rules?: DOTASelectionPriorityRules;
            custom_game_penalties?: boolean;
            lan_host_ping_location?: string;
            league_node_id?: number;
            requested_hero_ids?: number[] & number[] & { [K_10 in Exclude<keyof I_1["lobby_details"]["requested_hero_ids"], keyof number[]>]: never; };
            scenario_save?: {
                version?: number;
                data?: string;
            } & {
                version?: number;
                data?: string;
            } & { [K_11 in Exclude<keyof I_1["lobby_details"]["scenario_save"], keyof CMsgLobbyScenarioSave>]: never; };
            ability_draft_specific_details?: {
                shuffle_draft_order?: boolean;
            } & {
                shuffle_draft_order?: boolean;
            } & { [K_12 in Exclude<keyof I_1["lobby_details"]["ability_draft_specific_details"], "shuffle_draft_order">]: never; };
        } & { [K_13 in Exclude<keyof I_1["lobby_details"], keyof CMsgPracticeLobbySetDetails>]: never; };
        save_game?: {
            data?: string;
            version?: number;
            steam_id?: string;
            signature?: string;
        } & {
            data?: string;
            version?: number;
            steam_id?: string;
            signature?: string;
        } & { [K_14 in Exclude<keyof I_1["save_game"], keyof CMsgPracticeLobbyCreate_SaveGame>]: never; };
    } & { [K_15 in Exclude<keyof I_1, keyof CMsgPracticeLobbyCreate>]: never; }>(object: I_1): CMsgPracticeLobbyCreate;
};
export declare const CMsgPracticeLobbyCreate_SaveGame: {
    fromJSON(object: any): CMsgPracticeLobbyCreate_SaveGame;
    toJSON(message: CMsgPracticeLobbyCreate_SaveGame): unknown;
    create<I extends {
        data?: string;
        version?: number;
        steam_id?: string;
        signature?: string;
    } & {
        data?: string;
        version?: number;
        steam_id?: string;
        signature?: string;
    } & { [K in Exclude<keyof I, keyof CMsgPracticeLobbyCreate_SaveGame>]: never; }>(base?: I): CMsgPracticeLobbyCreate_SaveGame;
    fromPartial<I_1 extends {
        data?: string;
        version?: number;
        steam_id?: string;
        signature?: string;
    } & {
        data?: string;
        version?: number;
        steam_id?: string;
        signature?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgPracticeLobbyCreate_SaveGame>]: never; }>(object: I_1): CMsgPracticeLobbyCreate_SaveGame;
};
export declare const CMsgPracticeLobbySetTeamSlot: {
    fromJSON(object: any): CMsgPracticeLobbySetTeamSlot;
    toJSON(message: CMsgPracticeLobbySetTeamSlot): unknown;
    create<I extends {
        team?: DOTA_GC_TEAM;
        slot?: number;
        bot_difficulty?: DOTABotDifficulty;
    } & {
        team?: DOTA_GC_TEAM;
        slot?: number;
        bot_difficulty?: DOTABotDifficulty;
    } & { [K in Exclude<keyof I, keyof CMsgPracticeLobbySetTeamSlot>]: never; }>(base?: I): CMsgPracticeLobbySetTeamSlot;
    fromPartial<I_1 extends {
        team?: DOTA_GC_TEAM;
        slot?: number;
        bot_difficulty?: DOTABotDifficulty;
    } & {
        team?: DOTA_GC_TEAM;
        slot?: number;
        bot_difficulty?: DOTABotDifficulty;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgPracticeLobbySetTeamSlot>]: never; }>(object: I_1): CMsgPracticeLobbySetTeamSlot;
};
export declare const CMsgPracticeLobbySetCoach: {
    fromJSON(object: any): CMsgPracticeLobbySetCoach;
    toJSON(message: CMsgPracticeLobbySetCoach): unknown;
    create<I extends {
        team?: DOTA_GC_TEAM;
    } & {
        team?: DOTA_GC_TEAM;
    } & { [K in Exclude<keyof I, "team">]: never; }>(base?: I): CMsgPracticeLobbySetCoach;
    fromPartial<I_1 extends {
        team?: DOTA_GC_TEAM;
    } & {
        team?: DOTA_GC_TEAM;
    } & { [K_1 in Exclude<keyof I_1, "team">]: never; }>(object: I_1): CMsgPracticeLobbySetCoach;
};
export declare const CMsgPracticeLobbyJoinBroadcastChannel: {
    fromJSON(object: any): CMsgPracticeLobbyJoinBroadcastChannel;
    toJSON(message: CMsgPracticeLobbyJoinBroadcastChannel): unknown;
    create<I extends {
        channel?: number;
        preferred_description?: string;
        preferred_country_code?: string;
        preferred_language_code?: string;
    } & {
        channel?: number;
        preferred_description?: string;
        preferred_country_code?: string;
        preferred_language_code?: string;
    } & { [K in Exclude<keyof I, keyof CMsgPracticeLobbyJoinBroadcastChannel>]: never; }>(base?: I): CMsgPracticeLobbyJoinBroadcastChannel;
    fromPartial<I_1 extends {
        channel?: number;
        preferred_description?: string;
        preferred_country_code?: string;
        preferred_language_code?: string;
    } & {
        channel?: number;
        preferred_description?: string;
        preferred_country_code?: string;
        preferred_language_code?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgPracticeLobbyJoinBroadcastChannel>]: never; }>(object: I_1): CMsgPracticeLobbyJoinBroadcastChannel;
};
export declare const CMsgPracticeLobbyCloseBroadcastChannel: {
    fromJSON(object: any): CMsgPracticeLobbyCloseBroadcastChannel;
    toJSON(message: CMsgPracticeLobbyCloseBroadcastChannel): unknown;
    create<I extends {
        channel?: number;
    } & {
        channel?: number;
    } & { [K in Exclude<keyof I, "channel">]: never; }>(base?: I): CMsgPracticeLobbyCloseBroadcastChannel;
    fromPartial<I_1 extends {
        channel?: number;
    } & {
        channel?: number;
    } & { [K_1 in Exclude<keyof I_1, "channel">]: never; }>(object: I_1): CMsgPracticeLobbyCloseBroadcastChannel;
};
export declare const CMsgPracticeLobbyToggleBroadcastChannelCameramanStatus: {
    fromJSON(_: any): CMsgPracticeLobbyToggleBroadcastChannelCameramanStatus;
    toJSON(_: CMsgPracticeLobbyToggleBroadcastChannelCameramanStatus): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgPracticeLobbyToggleBroadcastChannelCameramanStatus;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgPracticeLobbyToggleBroadcastChannelCameramanStatus;
};
export declare const CMsgPracticeLobbyKick: {
    fromJSON(object: any): CMsgPracticeLobbyKick;
    toJSON(message: CMsgPracticeLobbyKick): unknown;
    create<I extends {
        account_id?: number;
    } & {
        account_id?: number;
    } & { [K in Exclude<keyof I, "account_id">]: never; }>(base?: I): CMsgPracticeLobbyKick;
    fromPartial<I_1 extends {
        account_id?: number;
    } & {
        account_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "account_id">]: never; }>(object: I_1): CMsgPracticeLobbyKick;
};
export declare const CMsgPracticeLobbyKickFromTeam: {
    fromJSON(object: any): CMsgPracticeLobbyKickFromTeam;
    toJSON(message: CMsgPracticeLobbyKickFromTeam): unknown;
    create<I extends {
        account_id?: number;
    } & {
        account_id?: number;
    } & { [K in Exclude<keyof I, "account_id">]: never; }>(base?: I): CMsgPracticeLobbyKickFromTeam;
    fromPartial<I_1 extends {
        account_id?: number;
    } & {
        account_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "account_id">]: never; }>(object: I_1): CMsgPracticeLobbyKickFromTeam;
};
export declare const CMsgPracticeLobbyLeave: {
    fromJSON(_: any): CMsgPracticeLobbyLeave;
    toJSON(_: CMsgPracticeLobbyLeave): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgPracticeLobbyLeave;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgPracticeLobbyLeave;
};
export declare const CMsgPracticeLobbyLaunch: {
    fromJSON(object: any): CMsgPracticeLobbyLaunch;
    toJSON(message: CMsgPracticeLobbyLaunch): unknown;
    create<I extends {
        client_version?: number;
    } & {
        client_version?: number;
    } & { [K in Exclude<keyof I, "client_version">]: never; }>(base?: I): CMsgPracticeLobbyLaunch;
    fromPartial<I_1 extends {
        client_version?: number;
    } & {
        client_version?: number;
    } & { [K_1 in Exclude<keyof I_1, "client_version">]: never; }>(object: I_1): CMsgPracticeLobbyLaunch;
};
export declare const CMsgApplyTeamToPracticeLobby: {
    fromJSON(object: any): CMsgApplyTeamToPracticeLobby;
    toJSON(message: CMsgApplyTeamToPracticeLobby): unknown;
    create<I extends {
        team_id?: number;
    } & {
        team_id?: number;
    } & { [K in Exclude<keyof I, "team_id">]: never; }>(base?: I): CMsgApplyTeamToPracticeLobby;
    fromPartial<I_1 extends {
        team_id?: number;
    } & {
        team_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "team_id">]: never; }>(object: I_1): CMsgApplyTeamToPracticeLobby;
};
export declare const CMsgPracticeLobbyList: {
    fromJSON(object: any): CMsgPracticeLobbyList;
    toJSON(message: CMsgPracticeLobbyList): unknown;
    create<I extends {
        pass_key?: string;
        region?: number;
        game_mode?: DOTA_GameMode;
    } & {
        pass_key?: string;
        region?: number;
        game_mode?: DOTA_GameMode;
    } & { [K in Exclude<keyof I, keyof CMsgPracticeLobbyList>]: never; }>(base?: I): CMsgPracticeLobbyList;
    fromPartial<I_1 extends {
        pass_key?: string;
        region?: number;
        game_mode?: DOTA_GameMode;
    } & {
        pass_key?: string;
        region?: number;
        game_mode?: DOTA_GameMode;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgPracticeLobbyList>]: never; }>(object: I_1): CMsgPracticeLobbyList;
};
export declare const CMsgPracticeLobbyListResponseEntry: {
    fromJSON(object: any): CMsgPracticeLobbyListResponseEntry;
    toJSON(message: CMsgPracticeLobbyListResponseEntry): unknown;
    create<I extends {
        id?: string;
        members?: {
            account_id?: number;
            player_name?: string;
        }[];
        requires_pass_key?: boolean;
        leader_account_id?: number;
        name?: string;
        custom_game_mode?: string;
        game_mode?: DOTA_GameMode;
        friend_present?: boolean;
        players?: number;
        custom_map_name?: string;
        max_player_count?: number;
        server_region?: number;
        league_id?: number;
        lan_host_ping_location?: string;
        min_player_count?: number;
        penalties_enabled?: boolean;
    } & {
        id?: string;
        members?: {
            account_id?: number;
            player_name?: string;
        }[] & ({
            account_id?: number;
            player_name?: string;
        } & {
            account_id?: number;
            player_name?: string;
        } & { [K in Exclude<keyof I["members"][number], keyof CMsgPracticeLobbyListResponseEntry_CLobbyMember>]: never; })[] & { [K_1 in Exclude<keyof I["members"], keyof {
            account_id?: number;
            player_name?: string;
        }[]>]: never; };
        requires_pass_key?: boolean;
        leader_account_id?: number;
        name?: string;
        custom_game_mode?: string;
        game_mode?: DOTA_GameMode;
        friend_present?: boolean;
        players?: number;
        custom_map_name?: string;
        max_player_count?: number;
        server_region?: number;
        league_id?: number;
        lan_host_ping_location?: string;
        min_player_count?: number;
        penalties_enabled?: boolean;
    } & { [K_2 in Exclude<keyof I, keyof CMsgPracticeLobbyListResponseEntry>]: never; }>(base?: I): CMsgPracticeLobbyListResponseEntry;
    fromPartial<I_1 extends {
        id?: string;
        members?: {
            account_id?: number;
            player_name?: string;
        }[];
        requires_pass_key?: boolean;
        leader_account_id?: number;
        name?: string;
        custom_game_mode?: string;
        game_mode?: DOTA_GameMode;
        friend_present?: boolean;
        players?: number;
        custom_map_name?: string;
        max_player_count?: number;
        server_region?: number;
        league_id?: number;
        lan_host_ping_location?: string;
        min_player_count?: number;
        penalties_enabled?: boolean;
    } & {
        id?: string;
        members?: {
            account_id?: number;
            player_name?: string;
        }[] & ({
            account_id?: number;
            player_name?: string;
        } & {
            account_id?: number;
            player_name?: string;
        } & { [K_3 in Exclude<keyof I_1["members"][number], keyof CMsgPracticeLobbyListResponseEntry_CLobbyMember>]: never; })[] & { [K_4 in Exclude<keyof I_1["members"], keyof {
            account_id?: number;
            player_name?: string;
        }[]>]: never; };
        requires_pass_key?: boolean;
        leader_account_id?: number;
        name?: string;
        custom_game_mode?: string;
        game_mode?: DOTA_GameMode;
        friend_present?: boolean;
        players?: number;
        custom_map_name?: string;
        max_player_count?: number;
        server_region?: number;
        league_id?: number;
        lan_host_ping_location?: string;
        min_player_count?: number;
        penalties_enabled?: boolean;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgPracticeLobbyListResponseEntry>]: never; }>(object: I_1): CMsgPracticeLobbyListResponseEntry;
};
export declare const CMsgPracticeLobbyListResponseEntry_CLobbyMember: {
    fromJSON(object: any): CMsgPracticeLobbyListResponseEntry_CLobbyMember;
    toJSON(message: CMsgPracticeLobbyListResponseEntry_CLobbyMember): unknown;
    create<I extends {
        account_id?: number;
        player_name?: string;
    } & {
        account_id?: number;
        player_name?: string;
    } & { [K in Exclude<keyof I, keyof CMsgPracticeLobbyListResponseEntry_CLobbyMember>]: never; }>(base?: I): CMsgPracticeLobbyListResponseEntry_CLobbyMember;
    fromPartial<I_1 extends {
        account_id?: number;
        player_name?: string;
    } & {
        account_id?: number;
        player_name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgPracticeLobbyListResponseEntry_CLobbyMember>]: never; }>(object: I_1): CMsgPracticeLobbyListResponseEntry_CLobbyMember;
};
export declare const CMsgPracticeLobbyListResponse: {
    fromJSON(object: any): CMsgPracticeLobbyListResponse;
    toJSON(message: CMsgPracticeLobbyListResponse): unknown;
    create<I extends {
        lobbies?: {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[];
    } & {
        lobbies?: {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[] & ({
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        } & {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[] & ({
                account_id?: number;
                player_name?: string;
            } & {
                account_id?: number;
                player_name?: string;
            } & { [K in Exclude<keyof I["lobbies"][number]["members"][number], keyof CMsgPracticeLobbyListResponseEntry_CLobbyMember>]: never; })[] & { [K_1 in Exclude<keyof I["lobbies"][number]["members"], keyof {
                account_id?: number;
                player_name?: string;
            }[]>]: never; };
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        } & { [K_2 in Exclude<keyof I["lobbies"][number], keyof CMsgPracticeLobbyListResponseEntry>]: never; })[] & { [K_3 in Exclude<keyof I["lobbies"], keyof {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, "lobbies">]: never; }>(base?: I): CMsgPracticeLobbyListResponse;
    fromPartial<I_1 extends {
        lobbies?: {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[];
    } & {
        lobbies?: {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[] & ({
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        } & {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[] & ({
                account_id?: number;
                player_name?: string;
            } & {
                account_id?: number;
                player_name?: string;
            } & { [K_5 in Exclude<keyof I_1["lobbies"][number]["members"][number], keyof CMsgPracticeLobbyListResponseEntry_CLobbyMember>]: never; })[] & { [K_6 in Exclude<keyof I_1["lobbies"][number]["members"], keyof {
                account_id?: number;
                player_name?: string;
            }[]>]: never; };
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        } & { [K_7 in Exclude<keyof I_1["lobbies"][number], keyof CMsgPracticeLobbyListResponseEntry>]: never; })[] & { [K_8 in Exclude<keyof I_1["lobbies"], keyof {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "lobbies">]: never; }>(object: I_1): CMsgPracticeLobbyListResponse;
};
export declare const CMsgLobbyList: {
    fromJSON(object: any): CMsgLobbyList;
    toJSON(message: CMsgLobbyList): unknown;
    create<I extends {
        server_region?: number;
        game_mode?: DOTA_GameMode;
    } & {
        server_region?: number;
        game_mode?: DOTA_GameMode;
    } & { [K in Exclude<keyof I, keyof CMsgLobbyList>]: never; }>(base?: I): CMsgLobbyList;
    fromPartial<I_1 extends {
        server_region?: number;
        game_mode?: DOTA_GameMode;
    } & {
        server_region?: number;
        game_mode?: DOTA_GameMode;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgLobbyList>]: never; }>(object: I_1): CMsgLobbyList;
};
export declare const CMsgLobbyListResponse: {
    fromJSON(object: any): CMsgLobbyListResponse;
    toJSON(message: CMsgLobbyListResponse): unknown;
    create<I extends {
        lobbies?: {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[];
    } & {
        lobbies?: {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[] & ({
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        } & {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[] & ({
                account_id?: number;
                player_name?: string;
            } & {
                account_id?: number;
                player_name?: string;
            } & { [K in Exclude<keyof I["lobbies"][number]["members"][number], keyof CMsgPracticeLobbyListResponseEntry_CLobbyMember>]: never; })[] & { [K_1 in Exclude<keyof I["lobbies"][number]["members"], keyof {
                account_id?: number;
                player_name?: string;
            }[]>]: never; };
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        } & { [K_2 in Exclude<keyof I["lobbies"][number], keyof CMsgPracticeLobbyListResponseEntry>]: never; })[] & { [K_3 in Exclude<keyof I["lobbies"], keyof {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, "lobbies">]: never; }>(base?: I): CMsgLobbyListResponse;
    fromPartial<I_1 extends {
        lobbies?: {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[];
    } & {
        lobbies?: {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[] & ({
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        } & {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[] & ({
                account_id?: number;
                player_name?: string;
            } & {
                account_id?: number;
                player_name?: string;
            } & { [K_5 in Exclude<keyof I_1["lobbies"][number]["members"][number], keyof CMsgPracticeLobbyListResponseEntry_CLobbyMember>]: never; })[] & { [K_6 in Exclude<keyof I_1["lobbies"][number]["members"], keyof {
                account_id?: number;
                player_name?: string;
            }[]>]: never; };
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        } & { [K_7 in Exclude<keyof I_1["lobbies"][number], keyof CMsgPracticeLobbyListResponseEntry>]: never; })[] & { [K_8 in Exclude<keyof I_1["lobbies"], keyof {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "lobbies">]: never; }>(object: I_1): CMsgLobbyListResponse;
};
export declare const CMsgPracticeLobbyJoin: {
    fromJSON(object: any): CMsgPracticeLobbyJoin;
    toJSON(message: CMsgPracticeLobbyJoin): unknown;
    create<I extends {
        lobby_id?: string;
        client_version?: number;
        pass_key?: string;
        custom_game_crc?: string;
        custom_game_timestamp?: number;
    } & {
        lobby_id?: string;
        client_version?: number;
        pass_key?: string;
        custom_game_crc?: string;
        custom_game_timestamp?: number;
    } & { [K in Exclude<keyof I, keyof CMsgPracticeLobbyJoin>]: never; }>(base?: I): CMsgPracticeLobbyJoin;
    fromPartial<I_1 extends {
        lobby_id?: string;
        client_version?: number;
        pass_key?: string;
        custom_game_crc?: string;
        custom_game_timestamp?: number;
    } & {
        lobby_id?: string;
        client_version?: number;
        pass_key?: string;
        custom_game_crc?: string;
        custom_game_timestamp?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgPracticeLobbyJoin>]: never; }>(object: I_1): CMsgPracticeLobbyJoin;
};
export declare const CMsgPracticeLobbyJoinResponse: {
    fromJSON(object: any): CMsgPracticeLobbyJoinResponse;
    toJSON(message: CMsgPracticeLobbyJoinResponse): unknown;
    create<I extends {
        result?: DOTAJoinLobbyResult;
    } & {
        result?: DOTAJoinLobbyResult;
    } & { [K in Exclude<keyof I, "result">]: never; }>(base?: I): CMsgPracticeLobbyJoinResponse;
    fromPartial<I_1 extends {
        result?: DOTAJoinLobbyResult;
    } & {
        result?: DOTAJoinLobbyResult;
    } & { [K_1 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CMsgPracticeLobbyJoinResponse;
};
export declare const CMsgFriendPracticeLobbyListRequest: {
    fromJSON(object: any): CMsgFriendPracticeLobbyListRequest;
    toJSON(message: CMsgFriendPracticeLobbyListRequest): unknown;
    create<I extends {
        friends?: number[];
    } & {
        friends?: number[] & number[] & { [K in Exclude<keyof I["friends"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, "friends">]: never; }>(base?: I): CMsgFriendPracticeLobbyListRequest;
    fromPartial<I_1 extends {
        friends?: number[];
    } & {
        friends?: number[] & number[] & { [K_2 in Exclude<keyof I_1["friends"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "friends">]: never; }>(object: I_1): CMsgFriendPracticeLobbyListRequest;
};
export declare const CMsgFriendPracticeLobbyListResponse: {
    fromJSON(object: any): CMsgFriendPracticeLobbyListResponse;
    toJSON(message: CMsgFriendPracticeLobbyListResponse): unknown;
    create<I extends {
        lobbies?: {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[];
    } & {
        lobbies?: {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[] & ({
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        } & {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[] & ({
                account_id?: number;
                player_name?: string;
            } & {
                account_id?: number;
                player_name?: string;
            } & { [K in Exclude<keyof I["lobbies"][number]["members"][number], keyof CMsgPracticeLobbyListResponseEntry_CLobbyMember>]: never; })[] & { [K_1 in Exclude<keyof I["lobbies"][number]["members"], keyof {
                account_id?: number;
                player_name?: string;
            }[]>]: never; };
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        } & { [K_2 in Exclude<keyof I["lobbies"][number], keyof CMsgPracticeLobbyListResponseEntry>]: never; })[] & { [K_3 in Exclude<keyof I["lobbies"], keyof {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, "lobbies">]: never; }>(base?: I): CMsgFriendPracticeLobbyListResponse;
    fromPartial<I_1 extends {
        lobbies?: {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[];
    } & {
        lobbies?: {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[] & ({
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        } & {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[] & ({
                account_id?: number;
                player_name?: string;
            } & {
                account_id?: number;
                player_name?: string;
            } & { [K_5 in Exclude<keyof I_1["lobbies"][number]["members"][number], keyof CMsgPracticeLobbyListResponseEntry_CLobbyMember>]: never; })[] & { [K_6 in Exclude<keyof I_1["lobbies"][number]["members"], keyof {
                account_id?: number;
                player_name?: string;
            }[]>]: never; };
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        } & { [K_7 in Exclude<keyof I_1["lobbies"][number], keyof CMsgPracticeLobbyListResponseEntry>]: never; })[] & { [K_8 in Exclude<keyof I_1["lobbies"], keyof {
            id?: string;
            members?: {
                account_id?: number;
                player_name?: string;
            }[];
            requires_pass_key?: boolean;
            leader_account_id?: number;
            name?: string;
            custom_game_mode?: string;
            game_mode?: DOTA_GameMode;
            friend_present?: boolean;
            players?: number;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            league_id?: number;
            lan_host_ping_location?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "lobbies">]: never; }>(object: I_1): CMsgFriendPracticeLobbyListResponse;
};
export declare const CMsgJoinableCustomGameModesRequest: {
    fromJSON(object: any): CMsgJoinableCustomGameModesRequest;
    toJSON(message: CMsgJoinableCustomGameModesRequest): unknown;
    create<I extends {
        server_region?: number;
    } & {
        server_region?: number;
    } & { [K in Exclude<keyof I, "server_region">]: never; }>(base?: I): CMsgJoinableCustomGameModesRequest;
    fromPartial<I_1 extends {
        server_region?: number;
    } & {
        server_region?: number;
    } & { [K_1 in Exclude<keyof I_1, "server_region">]: never; }>(object: I_1): CMsgJoinableCustomGameModesRequest;
};
export declare const CMsgJoinableCustomGameModesResponseEntry: {
    fromJSON(object: any): CMsgJoinableCustomGameModesResponseEntry;
    toJSON(message: CMsgJoinableCustomGameModesResponseEntry): unknown;
    create<I extends {
        custom_game_id?: string;
        lobby_count?: number;
        player_count?: number;
    } & {
        custom_game_id?: string;
        lobby_count?: number;
        player_count?: number;
    } & { [K in Exclude<keyof I, keyof CMsgJoinableCustomGameModesResponseEntry>]: never; }>(base?: I): CMsgJoinableCustomGameModesResponseEntry;
    fromPartial<I_1 extends {
        custom_game_id?: string;
        lobby_count?: number;
        player_count?: number;
    } & {
        custom_game_id?: string;
        lobby_count?: number;
        player_count?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgJoinableCustomGameModesResponseEntry>]: never; }>(object: I_1): CMsgJoinableCustomGameModesResponseEntry;
};
export declare const CMsgJoinableCustomGameModesResponse: {
    fromJSON(object: any): CMsgJoinableCustomGameModesResponse;
    toJSON(message: CMsgJoinableCustomGameModesResponse): unknown;
    create<I extends {
        game_modes?: {
            custom_game_id?: string;
            lobby_count?: number;
            player_count?: number;
        }[];
    } & {
        game_modes?: {
            custom_game_id?: string;
            lobby_count?: number;
            player_count?: number;
        }[] & ({
            custom_game_id?: string;
            lobby_count?: number;
            player_count?: number;
        } & {
            custom_game_id?: string;
            lobby_count?: number;
            player_count?: number;
        } & { [K in Exclude<keyof I["game_modes"][number], keyof CMsgJoinableCustomGameModesResponseEntry>]: never; })[] & { [K_1 in Exclude<keyof I["game_modes"], keyof {
            custom_game_id?: string;
            lobby_count?: number;
            player_count?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "game_modes">]: never; }>(base?: I): CMsgJoinableCustomGameModesResponse;
    fromPartial<I_1 extends {
        game_modes?: {
            custom_game_id?: string;
            lobby_count?: number;
            player_count?: number;
        }[];
    } & {
        game_modes?: {
            custom_game_id?: string;
            lobby_count?: number;
            player_count?: number;
        }[] & ({
            custom_game_id?: string;
            lobby_count?: number;
            player_count?: number;
        } & {
            custom_game_id?: string;
            lobby_count?: number;
            player_count?: number;
        } & { [K_3 in Exclude<keyof I_1["game_modes"][number], keyof CMsgJoinableCustomGameModesResponseEntry>]: never; })[] & { [K_4 in Exclude<keyof I_1["game_modes"], keyof {
            custom_game_id?: string;
            lobby_count?: number;
            player_count?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "game_modes">]: never; }>(object: I_1): CMsgJoinableCustomGameModesResponse;
};
export declare const CMsgJoinableCustomLobbiesRequest: {
    fromJSON(object: any): CMsgJoinableCustomLobbiesRequest;
    toJSON(message: CMsgJoinableCustomLobbiesRequest): unknown;
    create<I extends {
        server_region?: number;
        custom_game_id?: string;
    } & {
        server_region?: number;
        custom_game_id?: string;
    } & { [K in Exclude<keyof I, keyof CMsgJoinableCustomLobbiesRequest>]: never; }>(base?: I): CMsgJoinableCustomLobbiesRequest;
    fromPartial<I_1 extends {
        server_region?: number;
        custom_game_id?: string;
    } & {
        server_region?: number;
        custom_game_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgJoinableCustomLobbiesRequest>]: never; }>(object: I_1): CMsgJoinableCustomLobbiesRequest;
};
export declare const CMsgJoinableCustomLobbiesResponseEntry: {
    fromJSON(object: any): CMsgJoinableCustomLobbiesResponseEntry;
    toJSON(message: CMsgJoinableCustomLobbiesResponseEntry): unknown;
    create<I extends {
        lobby_id?: string;
        custom_game_id?: string;
        lobby_name?: string;
        member_count?: number;
        leader_account_id?: number;
        leader_name?: string;
        custom_map_name?: string;
        max_player_count?: number;
        server_region?: number;
        has_pass_key?: boolean;
        lan_host_ping_location?: string;
        lobby_creation_time?: number;
        custom_game_timestamp?: number;
        custom_game_crc?: string;
        min_player_count?: number;
        penalties_enabled?: boolean;
    } & {
        lobby_id?: string;
        custom_game_id?: string;
        lobby_name?: string;
        member_count?: number;
        leader_account_id?: number;
        leader_name?: string;
        custom_map_name?: string;
        max_player_count?: number;
        server_region?: number;
        has_pass_key?: boolean;
        lan_host_ping_location?: string;
        lobby_creation_time?: number;
        custom_game_timestamp?: number;
        custom_game_crc?: string;
        min_player_count?: number;
        penalties_enabled?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgJoinableCustomLobbiesResponseEntry>]: never; }>(base?: I): CMsgJoinableCustomLobbiesResponseEntry;
    fromPartial<I_1 extends {
        lobby_id?: string;
        custom_game_id?: string;
        lobby_name?: string;
        member_count?: number;
        leader_account_id?: number;
        leader_name?: string;
        custom_map_name?: string;
        max_player_count?: number;
        server_region?: number;
        has_pass_key?: boolean;
        lan_host_ping_location?: string;
        lobby_creation_time?: number;
        custom_game_timestamp?: number;
        custom_game_crc?: string;
        min_player_count?: number;
        penalties_enabled?: boolean;
    } & {
        lobby_id?: string;
        custom_game_id?: string;
        lobby_name?: string;
        member_count?: number;
        leader_account_id?: number;
        leader_name?: string;
        custom_map_name?: string;
        max_player_count?: number;
        server_region?: number;
        has_pass_key?: boolean;
        lan_host_ping_location?: string;
        lobby_creation_time?: number;
        custom_game_timestamp?: number;
        custom_game_crc?: string;
        min_player_count?: number;
        penalties_enabled?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgJoinableCustomLobbiesResponseEntry>]: never; }>(object: I_1): CMsgJoinableCustomLobbiesResponseEntry;
};
export declare const CMsgJoinableCustomLobbiesResponse: {
    fromJSON(object: any): CMsgJoinableCustomLobbiesResponse;
    toJSON(message: CMsgJoinableCustomLobbiesResponse): unknown;
    create<I extends {
        lobbies?: {
            lobby_id?: string;
            custom_game_id?: string;
            lobby_name?: string;
            member_count?: number;
            leader_account_id?: number;
            leader_name?: string;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            has_pass_key?: boolean;
            lan_host_ping_location?: string;
            lobby_creation_time?: number;
            custom_game_timestamp?: number;
            custom_game_crc?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[];
    } & {
        lobbies?: {
            lobby_id?: string;
            custom_game_id?: string;
            lobby_name?: string;
            member_count?: number;
            leader_account_id?: number;
            leader_name?: string;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            has_pass_key?: boolean;
            lan_host_ping_location?: string;
            lobby_creation_time?: number;
            custom_game_timestamp?: number;
            custom_game_crc?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[] & ({
            lobby_id?: string;
            custom_game_id?: string;
            lobby_name?: string;
            member_count?: number;
            leader_account_id?: number;
            leader_name?: string;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            has_pass_key?: boolean;
            lan_host_ping_location?: string;
            lobby_creation_time?: number;
            custom_game_timestamp?: number;
            custom_game_crc?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        } & {
            lobby_id?: string;
            custom_game_id?: string;
            lobby_name?: string;
            member_count?: number;
            leader_account_id?: number;
            leader_name?: string;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            has_pass_key?: boolean;
            lan_host_ping_location?: string;
            lobby_creation_time?: number;
            custom_game_timestamp?: number;
            custom_game_crc?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        } & { [K in Exclude<keyof I["lobbies"][number], keyof CMsgJoinableCustomLobbiesResponseEntry>]: never; })[] & { [K_1 in Exclude<keyof I["lobbies"], keyof {
            lobby_id?: string;
            custom_game_id?: string;
            lobby_name?: string;
            member_count?: number;
            leader_account_id?: number;
            leader_name?: string;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            has_pass_key?: boolean;
            lan_host_ping_location?: string;
            lobby_creation_time?: number;
            custom_game_timestamp?: number;
            custom_game_crc?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "lobbies">]: never; }>(base?: I): CMsgJoinableCustomLobbiesResponse;
    fromPartial<I_1 extends {
        lobbies?: {
            lobby_id?: string;
            custom_game_id?: string;
            lobby_name?: string;
            member_count?: number;
            leader_account_id?: number;
            leader_name?: string;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            has_pass_key?: boolean;
            lan_host_ping_location?: string;
            lobby_creation_time?: number;
            custom_game_timestamp?: number;
            custom_game_crc?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[];
    } & {
        lobbies?: {
            lobby_id?: string;
            custom_game_id?: string;
            lobby_name?: string;
            member_count?: number;
            leader_account_id?: number;
            leader_name?: string;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            has_pass_key?: boolean;
            lan_host_ping_location?: string;
            lobby_creation_time?: number;
            custom_game_timestamp?: number;
            custom_game_crc?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[] & ({
            lobby_id?: string;
            custom_game_id?: string;
            lobby_name?: string;
            member_count?: number;
            leader_account_id?: number;
            leader_name?: string;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            has_pass_key?: boolean;
            lan_host_ping_location?: string;
            lobby_creation_time?: number;
            custom_game_timestamp?: number;
            custom_game_crc?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        } & {
            lobby_id?: string;
            custom_game_id?: string;
            lobby_name?: string;
            member_count?: number;
            leader_account_id?: number;
            leader_name?: string;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            has_pass_key?: boolean;
            lan_host_ping_location?: string;
            lobby_creation_time?: number;
            custom_game_timestamp?: number;
            custom_game_crc?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        } & { [K_3 in Exclude<keyof I_1["lobbies"][number], keyof CMsgJoinableCustomLobbiesResponseEntry>]: never; })[] & { [K_4 in Exclude<keyof I_1["lobbies"], keyof {
            lobby_id?: string;
            custom_game_id?: string;
            lobby_name?: string;
            member_count?: number;
            leader_account_id?: number;
            leader_name?: string;
            custom_map_name?: string;
            max_player_count?: number;
            server_region?: number;
            has_pass_key?: boolean;
            lan_host_ping_location?: string;
            lobby_creation_time?: number;
            custom_game_timestamp?: number;
            custom_game_crc?: string;
            min_player_count?: number;
            penalties_enabled?: boolean;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "lobbies">]: never; }>(object: I_1): CMsgJoinableCustomLobbiesResponse;
};
export declare const CMsgQuickJoinCustomLobby: {
    fromJSON(object: any): CMsgQuickJoinCustomLobby;
    toJSON(message: CMsgQuickJoinCustomLobby): unknown;
    create<I extends {
        legacy_server_region?: number;
        custom_game_id?: string;
        client_version?: number;
        create_lobby_details?: {
            lobby_id?: string;
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
            server_region?: number;
            game_mode?: number;
            cm_pick?: DOTA_CM_PICK;
            bot_difficulty_radiant?: DOTABotDifficulty;
            allow_cheats?: boolean;
            fill_with_bots?: boolean;
            intro_mode?: boolean;
            allow_spectating?: boolean;
            pass_key?: string;
            leagueid?: number;
            penalty_level_radiant?: number;
            penalty_level_dire?: number;
            load_game_id?: number;
            series_type?: number;
            radiant_series_wins?: number;
            dire_series_wins?: number;
            allchat?: boolean;
            dota_tv_delay?: LobbyDotaTVDelay;
            lan?: boolean;
            custom_game_mode?: string;
            custom_map_name?: string;
            custom_difficulty?: number;
            custom_game_id?: string;
            custom_min_players?: number;
            custom_max_players?: number;
            visibility?: DOTALobbyVisibility;
            custom_game_crc?: string;
            custom_game_timestamp?: number;
            previous_match_override?: string;
            pause_setting?: LobbyDotaPauseSetting;
            bot_difficulty_dire?: DOTABotDifficulty;
            bot_radiant?: string;
            bot_dire?: string;
            selection_priority_rules?: DOTASelectionPriorityRules;
            custom_game_penalties?: boolean;
            lan_host_ping_location?: string;
            league_node_id?: number;
            requested_hero_ids?: number[];
            scenario_save?: {
                version?: number;
                data?: string;
            };
            ability_draft_specific_details?: {
                shuffle_draft_order?: boolean;
            };
        };
        allow_any_map?: boolean;
        legacy_region_pings?: {
            server_region?: number;
            ping?: number;
            region_code?: number;
        }[];
        ping_data?: {
            relay_codes?: number[];
            relay_pings?: number[];
            region_codes?: number[];
            region_pings?: number[];
            region_ping_failed_bitmask?: number;
        };
    } & {
        legacy_server_region?: number;
        custom_game_id?: string;
        client_version?: number;
        create_lobby_details?: {
            lobby_id?: string;
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
            server_region?: number;
            game_mode?: number;
            cm_pick?: DOTA_CM_PICK;
            bot_difficulty_radiant?: DOTABotDifficulty;
            allow_cheats?: boolean;
            fill_with_bots?: boolean;
            intro_mode?: boolean;
            allow_spectating?: boolean;
            pass_key?: string;
            leagueid?: number;
            penalty_level_radiant?: number;
            penalty_level_dire?: number;
            load_game_id?: number;
            series_type?: number;
            radiant_series_wins?: number;
            dire_series_wins?: number;
            allchat?: boolean;
            dota_tv_delay?: LobbyDotaTVDelay;
            lan?: boolean;
            custom_game_mode?: string;
            custom_map_name?: string;
            custom_difficulty?: number;
            custom_game_id?: string;
            custom_min_players?: number;
            custom_max_players?: number;
            visibility?: DOTALobbyVisibility;
            custom_game_crc?: string;
            custom_game_timestamp?: number;
            previous_match_override?: string;
            pause_setting?: LobbyDotaPauseSetting;
            bot_difficulty_dire?: DOTABotDifficulty;
            bot_radiant?: string;
            bot_dire?: string;
            selection_priority_rules?: DOTASelectionPriorityRules;
            custom_game_penalties?: boolean;
            lan_host_ping_location?: string;
            league_node_id?: number;
            requested_hero_ids?: number[];
            scenario_save?: {
                version?: number;
                data?: string;
            };
            ability_draft_specific_details?: {
                shuffle_draft_order?: boolean;
            };
        } & {
            lobby_id?: string;
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
            } & { [K in Exclude<keyof I["create_lobby_details"]["team_details"][number], keyof CLobbyTeamDetails>]: never; })[] & { [K_1 in Exclude<keyof I["create_lobby_details"]["team_details"], keyof {
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
            server_region?: number;
            game_mode?: number;
            cm_pick?: DOTA_CM_PICK;
            bot_difficulty_radiant?: DOTABotDifficulty;
            allow_cheats?: boolean;
            fill_with_bots?: boolean;
            intro_mode?: boolean;
            allow_spectating?: boolean;
            pass_key?: string;
            leagueid?: number;
            penalty_level_radiant?: number;
            penalty_level_dire?: number;
            load_game_id?: number;
            series_type?: number;
            radiant_series_wins?: number;
            dire_series_wins?: number;
            allchat?: boolean;
            dota_tv_delay?: LobbyDotaTVDelay;
            lan?: boolean;
            custom_game_mode?: string;
            custom_map_name?: string;
            custom_difficulty?: number;
            custom_game_id?: string;
            custom_min_players?: number;
            custom_max_players?: number;
            visibility?: DOTALobbyVisibility;
            custom_game_crc?: string;
            custom_game_timestamp?: number;
            previous_match_override?: string;
            pause_setting?: LobbyDotaPauseSetting;
            bot_difficulty_dire?: DOTABotDifficulty;
            bot_radiant?: string;
            bot_dire?: string;
            selection_priority_rules?: DOTASelectionPriorityRules;
            custom_game_penalties?: boolean;
            lan_host_ping_location?: string;
            league_node_id?: number;
            requested_hero_ids?: number[] & number[] & { [K_2 in Exclude<keyof I["create_lobby_details"]["requested_hero_ids"], keyof number[]>]: never; };
            scenario_save?: {
                version?: number;
                data?: string;
            } & {
                version?: number;
                data?: string;
            } & { [K_3 in Exclude<keyof I["create_lobby_details"]["scenario_save"], keyof CMsgLobbyScenarioSave>]: never; };
            ability_draft_specific_details?: {
                shuffle_draft_order?: boolean;
            } & {
                shuffle_draft_order?: boolean;
            } & { [K_4 in Exclude<keyof I["create_lobby_details"]["ability_draft_specific_details"], "shuffle_draft_order">]: never; };
        } & { [K_5 in Exclude<keyof I["create_lobby_details"], keyof CMsgPracticeLobbySetDetails>]: never; };
        allow_any_map?: boolean;
        legacy_region_pings?: {
            server_region?: number;
            ping?: number;
            region_code?: number;
        }[] & ({
            server_region?: number;
            ping?: number;
            region_code?: number;
        } & {
            server_region?: number;
            ping?: number;
            region_code?: number;
        } & { [K_6 in Exclude<keyof I["legacy_region_pings"][number], keyof CMsgQuickJoinCustomLobby_LegacyRegionPing>]: never; })[] & { [K_7 in Exclude<keyof I["legacy_region_pings"], keyof {
            server_region?: number;
            ping?: number;
            region_code?: number;
        }[]>]: never; };
        ping_data?: {
            relay_codes?: number[];
            relay_pings?: number[];
            region_codes?: number[];
            region_pings?: number[];
            region_ping_failed_bitmask?: number;
        } & {
            relay_codes?: number[] & number[] & { [K_8 in Exclude<keyof I["ping_data"]["relay_codes"], keyof number[]>]: never; };
            relay_pings?: number[] & number[] & { [K_9 in Exclude<keyof I["ping_data"]["relay_pings"], keyof number[]>]: never; };
            region_codes?: number[] & number[] & { [K_10 in Exclude<keyof I["ping_data"]["region_codes"], keyof number[]>]: never; };
            region_pings?: number[] & number[] & { [K_11 in Exclude<keyof I["ping_data"]["region_pings"], keyof number[]>]: never; };
            region_ping_failed_bitmask?: number;
        } & { [K_12 in Exclude<keyof I["ping_data"], keyof CMsgClientPingData>]: never; };
    } & { [K_13 in Exclude<keyof I, keyof CMsgQuickJoinCustomLobby>]: never; }>(base?: I): CMsgQuickJoinCustomLobby;
    fromPartial<I_1 extends {
        legacy_server_region?: number;
        custom_game_id?: string;
        client_version?: number;
        create_lobby_details?: {
            lobby_id?: string;
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
            server_region?: number;
            game_mode?: number;
            cm_pick?: DOTA_CM_PICK;
            bot_difficulty_radiant?: DOTABotDifficulty;
            allow_cheats?: boolean;
            fill_with_bots?: boolean;
            intro_mode?: boolean;
            allow_spectating?: boolean;
            pass_key?: string;
            leagueid?: number;
            penalty_level_radiant?: number;
            penalty_level_dire?: number;
            load_game_id?: number;
            series_type?: number;
            radiant_series_wins?: number;
            dire_series_wins?: number;
            allchat?: boolean;
            dota_tv_delay?: LobbyDotaTVDelay;
            lan?: boolean;
            custom_game_mode?: string;
            custom_map_name?: string;
            custom_difficulty?: number;
            custom_game_id?: string;
            custom_min_players?: number;
            custom_max_players?: number;
            visibility?: DOTALobbyVisibility;
            custom_game_crc?: string;
            custom_game_timestamp?: number;
            previous_match_override?: string;
            pause_setting?: LobbyDotaPauseSetting;
            bot_difficulty_dire?: DOTABotDifficulty;
            bot_radiant?: string;
            bot_dire?: string;
            selection_priority_rules?: DOTASelectionPriorityRules;
            custom_game_penalties?: boolean;
            lan_host_ping_location?: string;
            league_node_id?: number;
            requested_hero_ids?: number[];
            scenario_save?: {
                version?: number;
                data?: string;
            };
            ability_draft_specific_details?: {
                shuffle_draft_order?: boolean;
            };
        };
        allow_any_map?: boolean;
        legacy_region_pings?: {
            server_region?: number;
            ping?: number;
            region_code?: number;
        }[];
        ping_data?: {
            relay_codes?: number[];
            relay_pings?: number[];
            region_codes?: number[];
            region_pings?: number[];
            region_ping_failed_bitmask?: number;
        };
    } & {
        legacy_server_region?: number;
        custom_game_id?: string;
        client_version?: number;
        create_lobby_details?: {
            lobby_id?: string;
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
            server_region?: number;
            game_mode?: number;
            cm_pick?: DOTA_CM_PICK;
            bot_difficulty_radiant?: DOTABotDifficulty;
            allow_cheats?: boolean;
            fill_with_bots?: boolean;
            intro_mode?: boolean;
            allow_spectating?: boolean;
            pass_key?: string;
            leagueid?: number;
            penalty_level_radiant?: number;
            penalty_level_dire?: number;
            load_game_id?: number;
            series_type?: number;
            radiant_series_wins?: number;
            dire_series_wins?: number;
            allchat?: boolean;
            dota_tv_delay?: LobbyDotaTVDelay;
            lan?: boolean;
            custom_game_mode?: string;
            custom_map_name?: string;
            custom_difficulty?: number;
            custom_game_id?: string;
            custom_min_players?: number;
            custom_max_players?: number;
            visibility?: DOTALobbyVisibility;
            custom_game_crc?: string;
            custom_game_timestamp?: number;
            previous_match_override?: string;
            pause_setting?: LobbyDotaPauseSetting;
            bot_difficulty_dire?: DOTABotDifficulty;
            bot_radiant?: string;
            bot_dire?: string;
            selection_priority_rules?: DOTASelectionPriorityRules;
            custom_game_penalties?: boolean;
            lan_host_ping_location?: string;
            league_node_id?: number;
            requested_hero_ids?: number[];
            scenario_save?: {
                version?: number;
                data?: string;
            };
            ability_draft_specific_details?: {
                shuffle_draft_order?: boolean;
            };
        } & {
            lobby_id?: string;
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
            } & { [K_14 in Exclude<keyof I_1["create_lobby_details"]["team_details"][number], keyof CLobbyTeamDetails>]: never; })[] & { [K_15 in Exclude<keyof I_1["create_lobby_details"]["team_details"], keyof {
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
            server_region?: number;
            game_mode?: number;
            cm_pick?: DOTA_CM_PICK;
            bot_difficulty_radiant?: DOTABotDifficulty;
            allow_cheats?: boolean;
            fill_with_bots?: boolean;
            intro_mode?: boolean;
            allow_spectating?: boolean;
            pass_key?: string;
            leagueid?: number;
            penalty_level_radiant?: number;
            penalty_level_dire?: number;
            load_game_id?: number;
            series_type?: number;
            radiant_series_wins?: number;
            dire_series_wins?: number;
            allchat?: boolean;
            dota_tv_delay?: LobbyDotaTVDelay;
            lan?: boolean;
            custom_game_mode?: string;
            custom_map_name?: string;
            custom_difficulty?: number;
            custom_game_id?: string;
            custom_min_players?: number;
            custom_max_players?: number;
            visibility?: DOTALobbyVisibility;
            custom_game_crc?: string;
            custom_game_timestamp?: number;
            previous_match_override?: string;
            pause_setting?: LobbyDotaPauseSetting;
            bot_difficulty_dire?: DOTABotDifficulty;
            bot_radiant?: string;
            bot_dire?: string;
            selection_priority_rules?: DOTASelectionPriorityRules;
            custom_game_penalties?: boolean;
            lan_host_ping_location?: string;
            league_node_id?: number;
            requested_hero_ids?: number[] & number[] & { [K_16 in Exclude<keyof I_1["create_lobby_details"]["requested_hero_ids"], keyof number[]>]: never; };
            scenario_save?: {
                version?: number;
                data?: string;
            } & {
                version?: number;
                data?: string;
            } & { [K_17 in Exclude<keyof I_1["create_lobby_details"]["scenario_save"], keyof CMsgLobbyScenarioSave>]: never; };
            ability_draft_specific_details?: {
                shuffle_draft_order?: boolean;
            } & {
                shuffle_draft_order?: boolean;
            } & { [K_18 in Exclude<keyof I_1["create_lobby_details"]["ability_draft_specific_details"], "shuffle_draft_order">]: never; };
        } & { [K_19 in Exclude<keyof I_1["create_lobby_details"], keyof CMsgPracticeLobbySetDetails>]: never; };
        allow_any_map?: boolean;
        legacy_region_pings?: {
            server_region?: number;
            ping?: number;
            region_code?: number;
        }[] & ({
            server_region?: number;
            ping?: number;
            region_code?: number;
        } & {
            server_region?: number;
            ping?: number;
            region_code?: number;
        } & { [K_20 in Exclude<keyof I_1["legacy_region_pings"][number], keyof CMsgQuickJoinCustomLobby_LegacyRegionPing>]: never; })[] & { [K_21 in Exclude<keyof I_1["legacy_region_pings"], keyof {
            server_region?: number;
            ping?: number;
            region_code?: number;
        }[]>]: never; };
        ping_data?: {
            relay_codes?: number[];
            relay_pings?: number[];
            region_codes?: number[];
            region_pings?: number[];
            region_ping_failed_bitmask?: number;
        } & {
            relay_codes?: number[] & number[] & { [K_22 in Exclude<keyof I_1["ping_data"]["relay_codes"], keyof number[]>]: never; };
            relay_pings?: number[] & number[] & { [K_23 in Exclude<keyof I_1["ping_data"]["relay_pings"], keyof number[]>]: never; };
            region_codes?: number[] & number[] & { [K_24 in Exclude<keyof I_1["ping_data"]["region_codes"], keyof number[]>]: never; };
            region_pings?: number[] & number[] & { [K_25 in Exclude<keyof I_1["ping_data"]["region_pings"], keyof number[]>]: never; };
            region_ping_failed_bitmask?: number;
        } & { [K_26 in Exclude<keyof I_1["ping_data"], keyof CMsgClientPingData>]: never; };
    } & { [K_27 in Exclude<keyof I_1, keyof CMsgQuickJoinCustomLobby>]: never; }>(object: I_1): CMsgQuickJoinCustomLobby;
};
export declare const CMsgQuickJoinCustomLobby_LegacyRegionPing: {
    fromJSON(object: any): CMsgQuickJoinCustomLobby_LegacyRegionPing;
    toJSON(message: CMsgQuickJoinCustomLobby_LegacyRegionPing): unknown;
    create<I extends {
        server_region?: number;
        ping?: number;
        region_code?: number;
    } & {
        server_region?: number;
        ping?: number;
        region_code?: number;
    } & { [K in Exclude<keyof I, keyof CMsgQuickJoinCustomLobby_LegacyRegionPing>]: never; }>(base?: I): CMsgQuickJoinCustomLobby_LegacyRegionPing;
    fromPartial<I_1 extends {
        server_region?: number;
        ping?: number;
        region_code?: number;
    } & {
        server_region?: number;
        ping?: number;
        region_code?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgQuickJoinCustomLobby_LegacyRegionPing>]: never; }>(object: I_1): CMsgQuickJoinCustomLobby_LegacyRegionPing;
};
export declare const CMsgQuickJoinCustomLobbyResponse: {
    fromJSON(object: any): CMsgQuickJoinCustomLobbyResponse;
    toJSON(message: CMsgQuickJoinCustomLobbyResponse): unknown;
    create<I extends {
        result?: DOTAJoinLobbyResult;
    } & {
        result?: DOTAJoinLobbyResult;
    } & { [K in Exclude<keyof I, "result">]: never; }>(base?: I): CMsgQuickJoinCustomLobbyResponse;
    fromPartial<I_1 extends {
        result?: DOTAJoinLobbyResult;
    } & {
        result?: DOTAJoinLobbyResult;
    } & { [K_1 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CMsgQuickJoinCustomLobbyResponse;
};
export declare const CMsgBotGameCreate: {
    fromJSON(object: any): CMsgBotGameCreate;
    toJSON(message: CMsgBotGameCreate): unknown;
    create<I extends {
        search_key?: string;
        client_version?: number;
        difficulty_radiant?: DOTABotDifficulty;
        team?: DOTA_GC_TEAM;
        game_mode?: number;
        difficulty_dire?: DOTABotDifficulty;
    } & {
        search_key?: string;
        client_version?: number;
        difficulty_radiant?: DOTABotDifficulty;
        team?: DOTA_GC_TEAM;
        game_mode?: number;
        difficulty_dire?: DOTABotDifficulty;
    } & { [K in Exclude<keyof I, keyof CMsgBotGameCreate>]: never; }>(base?: I): CMsgBotGameCreate;
    fromPartial<I_1 extends {
        search_key?: string;
        client_version?: number;
        difficulty_radiant?: DOTABotDifficulty;
        team?: DOTA_GC_TEAM;
        game_mode?: number;
        difficulty_dire?: DOTABotDifficulty;
    } & {
        search_key?: string;
        client_version?: number;
        difficulty_radiant?: DOTABotDifficulty;
        team?: DOTA_GC_TEAM;
        game_mode?: number;
        difficulty_dire?: DOTABotDifficulty;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgBotGameCreate>]: never; }>(object: I_1): CMsgBotGameCreate;
};
export declare const CMsgDOTAPartyMemberSetCoach: {
    fromJSON(object: any): CMsgDOTAPartyMemberSetCoach;
    toJSON(message: CMsgDOTAPartyMemberSetCoach): unknown;
    create<I extends {
        wants_coach?: boolean;
    } & {
        wants_coach?: boolean;
    } & { [K in Exclude<keyof I, "wants_coach">]: never; }>(base?: I): CMsgDOTAPartyMemberSetCoach;
    fromPartial<I_1 extends {
        wants_coach?: boolean;
    } & {
        wants_coach?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "wants_coach">]: never; }>(object: I_1): CMsgDOTAPartyMemberSetCoach;
};
export declare const CMsgDOTASetGroupLeader: {
    fromJSON(object: any): CMsgDOTASetGroupLeader;
    toJSON(message: CMsgDOTASetGroupLeader): unknown;
    create<I extends {
        new_leader_steamid?: string;
    } & {
        new_leader_steamid?: string;
    } & { [K in Exclude<keyof I, "new_leader_steamid">]: never; }>(base?: I): CMsgDOTASetGroupLeader;
    fromPartial<I_1 extends {
        new_leader_steamid?: string;
    } & {
        new_leader_steamid?: string;
    } & { [K_1 in Exclude<keyof I_1, "new_leader_steamid">]: never; }>(object: I_1): CMsgDOTASetGroupLeader;
};
export declare const CMsgDOTACancelGroupInvites: {
    fromJSON(object: any): CMsgDOTACancelGroupInvites;
    toJSON(message: CMsgDOTACancelGroupInvites): unknown;
    create<I extends {
        invited_steamids?: string[];
        invited_groupids?: string[];
    } & {
        invited_steamids?: string[] & string[] & { [K in Exclude<keyof I["invited_steamids"], keyof string[]>]: never; };
        invited_groupids?: string[] & string[] & { [K_1 in Exclude<keyof I["invited_groupids"], keyof string[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgDOTACancelGroupInvites>]: never; }>(base?: I): CMsgDOTACancelGroupInvites;
    fromPartial<I_1 extends {
        invited_steamids?: string[];
        invited_groupids?: string[];
    } & {
        invited_steamids?: string[] & string[] & { [K_3 in Exclude<keyof I_1["invited_steamids"], keyof string[]>]: never; };
        invited_groupids?: string[] & string[] & { [K_4 in Exclude<keyof I_1["invited_groupids"], keyof string[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgDOTACancelGroupInvites>]: never; }>(object: I_1): CMsgDOTACancelGroupInvites;
};
export declare const CMsgDOTASetGroupOpenStatus: {
    fromJSON(object: any): CMsgDOTASetGroupOpenStatus;
    toJSON(message: CMsgDOTASetGroupOpenStatus): unknown;
    create<I extends {
        open?: boolean;
    } & {
        open?: boolean;
    } & { [K in Exclude<keyof I, "open">]: never; }>(base?: I): CMsgDOTASetGroupOpenStatus;
    fromPartial<I_1 extends {
        open?: boolean;
    } & {
        open?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "open">]: never; }>(object: I_1): CMsgDOTASetGroupOpenStatus;
};
export declare const CMsgDOTAGroupMergeInvite: {
    fromJSON(object: any): CMsgDOTAGroupMergeInvite;
    toJSON(message: CMsgDOTAGroupMergeInvite): unknown;
    create<I extends {
        other_group_id?: string;
    } & {
        other_group_id?: string;
    } & { [K in Exclude<keyof I, "other_group_id">]: never; }>(base?: I): CMsgDOTAGroupMergeInvite;
    fromPartial<I_1 extends {
        other_group_id?: string;
    } & {
        other_group_id?: string;
    } & { [K_1 in Exclude<keyof I_1, "other_group_id">]: never; }>(object: I_1): CMsgDOTAGroupMergeInvite;
};
export declare const CMsgDOTAGroupMergeResponse: {
    fromJSON(object: any): CMsgDOTAGroupMergeResponse;
    toJSON(message: CMsgDOTAGroupMergeResponse): unknown;
    create<I extends {
        initiator_group_id?: string;
        accept?: boolean;
    } & {
        initiator_group_id?: string;
        accept?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgDOTAGroupMergeResponse>]: never; }>(base?: I): CMsgDOTAGroupMergeResponse;
    fromPartial<I_1 extends {
        initiator_group_id?: string;
        accept?: boolean;
    } & {
        initiator_group_id?: string;
        accept?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTAGroupMergeResponse>]: never; }>(object: I_1): CMsgDOTAGroupMergeResponse;
};
export declare const CMsgDOTAGroupMergeReply: {
    fromJSON(object: any): CMsgDOTAGroupMergeReply;
    toJSON(message: CMsgDOTAGroupMergeReply): unknown;
    create<I extends {
        result?: EDOTAGroupMergeResult;
    } & {
        result?: EDOTAGroupMergeResult;
    } & { [K in Exclude<keyof I, "result">]: never; }>(base?: I): CMsgDOTAGroupMergeReply;
    fromPartial<I_1 extends {
        result?: EDOTAGroupMergeResult;
    } & {
        result?: EDOTAGroupMergeResult;
    } & { [K_1 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CMsgDOTAGroupMergeReply;
};
export declare const CMsgSpectatorLobbyGameDetails: {
    fromJSON(object: any): CMsgSpectatorLobbyGameDetails;
    toJSON(message: CMsgSpectatorLobbyGameDetails): unknown;
    create<I extends {
        language?: number;
        match_id?: string;
        server_steam_id?: string;
        stream_url?: string;
        stream_name?: string;
        league_id?: number;
        series_type?: number;
        series_game?: number;
        radiant_team?: {
            team_id?: number;
            team_name?: string;
            team_logo?: string;
        };
        dire_team?: {
            team_id?: number;
            team_name?: string;
            team_logo?: string;
        };
    } & {
        language?: number;
        match_id?: string;
        server_steam_id?: string;
        stream_url?: string;
        stream_name?: string;
        league_id?: number;
        series_type?: number;
        series_game?: number;
        radiant_team?: {
            team_id?: number;
            team_name?: string;
            team_logo?: string;
        } & {
            team_id?: number;
            team_name?: string;
            team_logo?: string;
        } & { [K in Exclude<keyof I["radiant_team"], keyof CMsgSpectatorLobbyGameDetails_Team>]: never; };
        dire_team?: {
            team_id?: number;
            team_name?: string;
            team_logo?: string;
        } & {
            team_id?: number;
            team_name?: string;
            team_logo?: string;
        } & { [K_1 in Exclude<keyof I["dire_team"], keyof CMsgSpectatorLobbyGameDetails_Team>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgSpectatorLobbyGameDetails>]: never; }>(base?: I): CMsgSpectatorLobbyGameDetails;
    fromPartial<I_1 extends {
        language?: number;
        match_id?: string;
        server_steam_id?: string;
        stream_url?: string;
        stream_name?: string;
        league_id?: number;
        series_type?: number;
        series_game?: number;
        radiant_team?: {
            team_id?: number;
            team_name?: string;
            team_logo?: string;
        };
        dire_team?: {
            team_id?: number;
            team_name?: string;
            team_logo?: string;
        };
    } & {
        language?: number;
        match_id?: string;
        server_steam_id?: string;
        stream_url?: string;
        stream_name?: string;
        league_id?: number;
        series_type?: number;
        series_game?: number;
        radiant_team?: {
            team_id?: number;
            team_name?: string;
            team_logo?: string;
        } & {
            team_id?: number;
            team_name?: string;
            team_logo?: string;
        } & { [K_3 in Exclude<keyof I_1["radiant_team"], keyof CMsgSpectatorLobbyGameDetails_Team>]: never; };
        dire_team?: {
            team_id?: number;
            team_name?: string;
            team_logo?: string;
        } & {
            team_id?: number;
            team_name?: string;
            team_logo?: string;
        } & { [K_4 in Exclude<keyof I_1["dire_team"], keyof CMsgSpectatorLobbyGameDetails_Team>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgSpectatorLobbyGameDetails>]: never; }>(object: I_1): CMsgSpectatorLobbyGameDetails;
};
export declare const CMsgSpectatorLobbyGameDetails_Team: {
    fromJSON(object: any): CMsgSpectatorLobbyGameDetails_Team;
    toJSON(message: CMsgSpectatorLobbyGameDetails_Team): unknown;
    create<I extends {
        team_id?: number;
        team_name?: string;
        team_logo?: string;
    } & {
        team_id?: number;
        team_name?: string;
        team_logo?: string;
    } & { [K in Exclude<keyof I, keyof CMsgSpectatorLobbyGameDetails_Team>]: never; }>(base?: I): CMsgSpectatorLobbyGameDetails_Team;
    fromPartial<I_1 extends {
        team_id?: number;
        team_name?: string;
        team_logo?: string;
    } & {
        team_id?: number;
        team_name?: string;
        team_logo?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgSpectatorLobbyGameDetails_Team>]: never; }>(object: I_1): CMsgSpectatorLobbyGameDetails_Team;
};
export declare const CMsgSetSpectatorLobbyDetails: {
    fromJSON(object: any): CMsgSetSpectatorLobbyDetails;
    toJSON(message: CMsgSetSpectatorLobbyDetails): unknown;
    create<I extends {
        lobby_id?: string;
        lobby_name?: string;
        pass_key?: string;
        game_details?: {
            language?: number;
            match_id?: string;
            server_steam_id?: string;
            stream_url?: string;
            stream_name?: string;
            league_id?: number;
            series_type?: number;
            series_game?: number;
            radiant_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            };
            dire_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            };
        };
    } & {
        lobby_id?: string;
        lobby_name?: string;
        pass_key?: string;
        game_details?: {
            language?: number;
            match_id?: string;
            server_steam_id?: string;
            stream_url?: string;
            stream_name?: string;
            league_id?: number;
            series_type?: number;
            series_game?: number;
            radiant_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            };
            dire_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            };
        } & {
            language?: number;
            match_id?: string;
            server_steam_id?: string;
            stream_url?: string;
            stream_name?: string;
            league_id?: number;
            series_type?: number;
            series_game?: number;
            radiant_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            } & {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            } & { [K in Exclude<keyof I["game_details"]["radiant_team"], keyof CMsgSpectatorLobbyGameDetails_Team>]: never; };
            dire_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            } & {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            } & { [K_1 in Exclude<keyof I["game_details"]["dire_team"], keyof CMsgSpectatorLobbyGameDetails_Team>]: never; };
        } & { [K_2 in Exclude<keyof I["game_details"], keyof CMsgSpectatorLobbyGameDetails>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof CMsgSetSpectatorLobbyDetails>]: never; }>(base?: I): CMsgSetSpectatorLobbyDetails;
    fromPartial<I_1 extends {
        lobby_id?: string;
        lobby_name?: string;
        pass_key?: string;
        game_details?: {
            language?: number;
            match_id?: string;
            server_steam_id?: string;
            stream_url?: string;
            stream_name?: string;
            league_id?: number;
            series_type?: number;
            series_game?: number;
            radiant_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            };
            dire_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            };
        };
    } & {
        lobby_id?: string;
        lobby_name?: string;
        pass_key?: string;
        game_details?: {
            language?: number;
            match_id?: string;
            server_steam_id?: string;
            stream_url?: string;
            stream_name?: string;
            league_id?: number;
            series_type?: number;
            series_game?: number;
            radiant_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            };
            dire_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            };
        } & {
            language?: number;
            match_id?: string;
            server_steam_id?: string;
            stream_url?: string;
            stream_name?: string;
            league_id?: number;
            series_type?: number;
            series_game?: number;
            radiant_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            } & {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            } & { [K_4 in Exclude<keyof I_1["game_details"]["radiant_team"], keyof CMsgSpectatorLobbyGameDetails_Team>]: never; };
            dire_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            } & {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            } & { [K_5 in Exclude<keyof I_1["game_details"]["dire_team"], keyof CMsgSpectatorLobbyGameDetails_Team>]: never; };
        } & { [K_6 in Exclude<keyof I_1["game_details"], keyof CMsgSpectatorLobbyGameDetails>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof CMsgSetSpectatorLobbyDetails>]: never; }>(object: I_1): CMsgSetSpectatorLobbyDetails;
};
export declare const CMsgCreateSpectatorLobby: {
    fromJSON(object: any): CMsgCreateSpectatorLobby;
    toJSON(message: CMsgCreateSpectatorLobby): unknown;
    create<I extends {
        client_version?: number;
        details?: {
            lobby_id?: string;
            lobby_name?: string;
            pass_key?: string;
            game_details?: {
                language?: number;
                match_id?: string;
                server_steam_id?: string;
                stream_url?: string;
                stream_name?: string;
                league_id?: number;
                series_type?: number;
                series_game?: number;
                radiant_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
                dire_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
            };
        };
    } & {
        client_version?: number;
        details?: {
            lobby_id?: string;
            lobby_name?: string;
            pass_key?: string;
            game_details?: {
                language?: number;
                match_id?: string;
                server_steam_id?: string;
                stream_url?: string;
                stream_name?: string;
                league_id?: number;
                series_type?: number;
                series_game?: number;
                radiant_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
                dire_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
            };
        } & {
            lobby_id?: string;
            lobby_name?: string;
            pass_key?: string;
            game_details?: {
                language?: number;
                match_id?: string;
                server_steam_id?: string;
                stream_url?: string;
                stream_name?: string;
                league_id?: number;
                series_type?: number;
                series_game?: number;
                radiant_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
                dire_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
            } & {
                language?: number;
                match_id?: string;
                server_steam_id?: string;
                stream_url?: string;
                stream_name?: string;
                league_id?: number;
                series_type?: number;
                series_game?: number;
                radiant_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                } & {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                } & { [K in Exclude<keyof I["details"]["game_details"]["radiant_team"], keyof CMsgSpectatorLobbyGameDetails_Team>]: never; };
                dire_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                } & {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                } & { [K_1 in Exclude<keyof I["details"]["game_details"]["dire_team"], keyof CMsgSpectatorLobbyGameDetails_Team>]: never; };
            } & { [K_2 in Exclude<keyof I["details"]["game_details"], keyof CMsgSpectatorLobbyGameDetails>]: never; };
        } & { [K_3 in Exclude<keyof I["details"], keyof CMsgSetSpectatorLobbyDetails>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof CMsgCreateSpectatorLobby>]: never; }>(base?: I): CMsgCreateSpectatorLobby;
    fromPartial<I_1 extends {
        client_version?: number;
        details?: {
            lobby_id?: string;
            lobby_name?: string;
            pass_key?: string;
            game_details?: {
                language?: number;
                match_id?: string;
                server_steam_id?: string;
                stream_url?: string;
                stream_name?: string;
                league_id?: number;
                series_type?: number;
                series_game?: number;
                radiant_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
                dire_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
            };
        };
    } & {
        client_version?: number;
        details?: {
            lobby_id?: string;
            lobby_name?: string;
            pass_key?: string;
            game_details?: {
                language?: number;
                match_id?: string;
                server_steam_id?: string;
                stream_url?: string;
                stream_name?: string;
                league_id?: number;
                series_type?: number;
                series_game?: number;
                radiant_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
                dire_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
            };
        } & {
            lobby_id?: string;
            lobby_name?: string;
            pass_key?: string;
            game_details?: {
                language?: number;
                match_id?: string;
                server_steam_id?: string;
                stream_url?: string;
                stream_name?: string;
                league_id?: number;
                series_type?: number;
                series_game?: number;
                radiant_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
                dire_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
            } & {
                language?: number;
                match_id?: string;
                server_steam_id?: string;
                stream_url?: string;
                stream_name?: string;
                league_id?: number;
                series_type?: number;
                series_game?: number;
                radiant_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                } & {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                } & { [K_5 in Exclude<keyof I_1["details"]["game_details"]["radiant_team"], keyof CMsgSpectatorLobbyGameDetails_Team>]: never; };
                dire_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                } & {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                } & { [K_6 in Exclude<keyof I_1["details"]["game_details"]["dire_team"], keyof CMsgSpectatorLobbyGameDetails_Team>]: never; };
            } & { [K_7 in Exclude<keyof I_1["details"]["game_details"], keyof CMsgSpectatorLobbyGameDetails>]: never; };
        } & { [K_8 in Exclude<keyof I_1["details"], keyof CMsgSetSpectatorLobbyDetails>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof CMsgCreateSpectatorLobby>]: never; }>(object: I_1): CMsgCreateSpectatorLobby;
};
export declare const CMsgSpectatorLobbyList: {
    fromJSON(_: any): CMsgSpectatorLobbyList;
    toJSON(_: CMsgSpectatorLobbyList): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgSpectatorLobbyList;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgSpectatorLobbyList;
};
export declare const CMsgSpectatorLobbyListResponse: {
    fromJSON(object: any): CMsgSpectatorLobbyListResponse;
    toJSON(message: CMsgSpectatorLobbyListResponse): unknown;
    create<I extends {
        lobbies?: {
            lobby_id?: string;
            game_name?: string;
            requires_pass_key?: boolean;
            leader_account_id?: number;
            member_count?: number;
            game_details?: {
                language?: number;
                match_id?: string;
                server_steam_id?: string;
                stream_url?: string;
                stream_name?: string;
                league_id?: number;
                series_type?: number;
                series_game?: number;
                radiant_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
                dire_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
            };
        }[];
    } & {
        lobbies?: {
            lobby_id?: string;
            game_name?: string;
            requires_pass_key?: boolean;
            leader_account_id?: number;
            member_count?: number;
            game_details?: {
                language?: number;
                match_id?: string;
                server_steam_id?: string;
                stream_url?: string;
                stream_name?: string;
                league_id?: number;
                series_type?: number;
                series_game?: number;
                radiant_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
                dire_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
            };
        }[] & ({
            lobby_id?: string;
            game_name?: string;
            requires_pass_key?: boolean;
            leader_account_id?: number;
            member_count?: number;
            game_details?: {
                language?: number;
                match_id?: string;
                server_steam_id?: string;
                stream_url?: string;
                stream_name?: string;
                league_id?: number;
                series_type?: number;
                series_game?: number;
                radiant_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
                dire_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
            };
        } & {
            lobby_id?: string;
            game_name?: string;
            requires_pass_key?: boolean;
            leader_account_id?: number;
            member_count?: number;
            game_details?: {
                language?: number;
                match_id?: string;
                server_steam_id?: string;
                stream_url?: string;
                stream_name?: string;
                league_id?: number;
                series_type?: number;
                series_game?: number;
                radiant_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
                dire_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
            } & {
                language?: number;
                match_id?: string;
                server_steam_id?: string;
                stream_url?: string;
                stream_name?: string;
                league_id?: number;
                series_type?: number;
                series_game?: number;
                radiant_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                } & {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                } & { [K in Exclude<keyof I["lobbies"][number]["game_details"]["radiant_team"], keyof CMsgSpectatorLobbyGameDetails_Team>]: never; };
                dire_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                } & {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                } & { [K_1 in Exclude<keyof I["lobbies"][number]["game_details"]["dire_team"], keyof CMsgSpectatorLobbyGameDetails_Team>]: never; };
            } & { [K_2 in Exclude<keyof I["lobbies"][number]["game_details"], keyof CMsgSpectatorLobbyGameDetails>]: never; };
        } & { [K_3 in Exclude<keyof I["lobbies"][number], keyof CMsgSpectatorLobbyListResponse_SpectatorLobby>]: never; })[] & { [K_4 in Exclude<keyof I["lobbies"], keyof {
            lobby_id?: string;
            game_name?: string;
            requires_pass_key?: boolean;
            leader_account_id?: number;
            member_count?: number;
            game_details?: {
                language?: number;
                match_id?: string;
                server_steam_id?: string;
                stream_url?: string;
                stream_name?: string;
                league_id?: number;
                series_type?: number;
                series_game?: number;
                radiant_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
                dire_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
            };
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I, "lobbies">]: never; }>(base?: I): CMsgSpectatorLobbyListResponse;
    fromPartial<I_1 extends {
        lobbies?: {
            lobby_id?: string;
            game_name?: string;
            requires_pass_key?: boolean;
            leader_account_id?: number;
            member_count?: number;
            game_details?: {
                language?: number;
                match_id?: string;
                server_steam_id?: string;
                stream_url?: string;
                stream_name?: string;
                league_id?: number;
                series_type?: number;
                series_game?: number;
                radiant_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
                dire_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
            };
        }[];
    } & {
        lobbies?: {
            lobby_id?: string;
            game_name?: string;
            requires_pass_key?: boolean;
            leader_account_id?: number;
            member_count?: number;
            game_details?: {
                language?: number;
                match_id?: string;
                server_steam_id?: string;
                stream_url?: string;
                stream_name?: string;
                league_id?: number;
                series_type?: number;
                series_game?: number;
                radiant_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
                dire_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
            };
        }[] & ({
            lobby_id?: string;
            game_name?: string;
            requires_pass_key?: boolean;
            leader_account_id?: number;
            member_count?: number;
            game_details?: {
                language?: number;
                match_id?: string;
                server_steam_id?: string;
                stream_url?: string;
                stream_name?: string;
                league_id?: number;
                series_type?: number;
                series_game?: number;
                radiant_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
                dire_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
            };
        } & {
            lobby_id?: string;
            game_name?: string;
            requires_pass_key?: boolean;
            leader_account_id?: number;
            member_count?: number;
            game_details?: {
                language?: number;
                match_id?: string;
                server_steam_id?: string;
                stream_url?: string;
                stream_name?: string;
                league_id?: number;
                series_type?: number;
                series_game?: number;
                radiant_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
                dire_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
            } & {
                language?: number;
                match_id?: string;
                server_steam_id?: string;
                stream_url?: string;
                stream_name?: string;
                league_id?: number;
                series_type?: number;
                series_game?: number;
                radiant_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                } & {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                } & { [K_6 in Exclude<keyof I_1["lobbies"][number]["game_details"]["radiant_team"], keyof CMsgSpectatorLobbyGameDetails_Team>]: never; };
                dire_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                } & {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                } & { [K_7 in Exclude<keyof I_1["lobbies"][number]["game_details"]["dire_team"], keyof CMsgSpectatorLobbyGameDetails_Team>]: never; };
            } & { [K_8 in Exclude<keyof I_1["lobbies"][number]["game_details"], keyof CMsgSpectatorLobbyGameDetails>]: never; };
        } & { [K_9 in Exclude<keyof I_1["lobbies"][number], keyof CMsgSpectatorLobbyListResponse_SpectatorLobby>]: never; })[] & { [K_10 in Exclude<keyof I_1["lobbies"], keyof {
            lobby_id?: string;
            game_name?: string;
            requires_pass_key?: boolean;
            leader_account_id?: number;
            member_count?: number;
            game_details?: {
                language?: number;
                match_id?: string;
                server_steam_id?: string;
                stream_url?: string;
                stream_name?: string;
                league_id?: number;
                series_type?: number;
                series_game?: number;
                radiant_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
                dire_team?: {
                    team_id?: number;
                    team_name?: string;
                    team_logo?: string;
                };
            };
        }[]>]: never; };
    } & { [K_11 in Exclude<keyof I_1, "lobbies">]: never; }>(object: I_1): CMsgSpectatorLobbyListResponse;
};
export declare const CMsgSpectatorLobbyListResponse_SpectatorLobby: {
    fromJSON(object: any): CMsgSpectatorLobbyListResponse_SpectatorLobby;
    toJSON(message: CMsgSpectatorLobbyListResponse_SpectatorLobby): unknown;
    create<I extends {
        lobby_id?: string;
        game_name?: string;
        requires_pass_key?: boolean;
        leader_account_id?: number;
        member_count?: number;
        game_details?: {
            language?: number;
            match_id?: string;
            server_steam_id?: string;
            stream_url?: string;
            stream_name?: string;
            league_id?: number;
            series_type?: number;
            series_game?: number;
            radiant_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            };
            dire_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            };
        };
    } & {
        lobby_id?: string;
        game_name?: string;
        requires_pass_key?: boolean;
        leader_account_id?: number;
        member_count?: number;
        game_details?: {
            language?: number;
            match_id?: string;
            server_steam_id?: string;
            stream_url?: string;
            stream_name?: string;
            league_id?: number;
            series_type?: number;
            series_game?: number;
            radiant_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            };
            dire_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            };
        } & {
            language?: number;
            match_id?: string;
            server_steam_id?: string;
            stream_url?: string;
            stream_name?: string;
            league_id?: number;
            series_type?: number;
            series_game?: number;
            radiant_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            } & {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            } & { [K in Exclude<keyof I["game_details"]["radiant_team"], keyof CMsgSpectatorLobbyGameDetails_Team>]: never; };
            dire_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            } & {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            } & { [K_1 in Exclude<keyof I["game_details"]["dire_team"], keyof CMsgSpectatorLobbyGameDetails_Team>]: never; };
        } & { [K_2 in Exclude<keyof I["game_details"], keyof CMsgSpectatorLobbyGameDetails>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof CMsgSpectatorLobbyListResponse_SpectatorLobby>]: never; }>(base?: I): CMsgSpectatorLobbyListResponse_SpectatorLobby;
    fromPartial<I_1 extends {
        lobby_id?: string;
        game_name?: string;
        requires_pass_key?: boolean;
        leader_account_id?: number;
        member_count?: number;
        game_details?: {
            language?: number;
            match_id?: string;
            server_steam_id?: string;
            stream_url?: string;
            stream_name?: string;
            league_id?: number;
            series_type?: number;
            series_game?: number;
            radiant_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            };
            dire_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            };
        };
    } & {
        lobby_id?: string;
        game_name?: string;
        requires_pass_key?: boolean;
        leader_account_id?: number;
        member_count?: number;
        game_details?: {
            language?: number;
            match_id?: string;
            server_steam_id?: string;
            stream_url?: string;
            stream_name?: string;
            league_id?: number;
            series_type?: number;
            series_game?: number;
            radiant_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            };
            dire_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            };
        } & {
            language?: number;
            match_id?: string;
            server_steam_id?: string;
            stream_url?: string;
            stream_name?: string;
            league_id?: number;
            series_type?: number;
            series_game?: number;
            radiant_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            } & {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            } & { [K_4 in Exclude<keyof I_1["game_details"]["radiant_team"], keyof CMsgSpectatorLobbyGameDetails_Team>]: never; };
            dire_team?: {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            } & {
                team_id?: number;
                team_name?: string;
                team_logo?: string;
            } & { [K_5 in Exclude<keyof I_1["game_details"]["dire_team"], keyof CMsgSpectatorLobbyGameDetails_Team>]: never; };
        } & { [K_6 in Exclude<keyof I_1["game_details"], keyof CMsgSpectatorLobbyGameDetails>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof CMsgSpectatorLobbyListResponse_SpectatorLobby>]: never; }>(object: I_1): CMsgSpectatorLobbyListResponse_SpectatorLobby;
};
export declare const CMsgClientToGCRequestSteamDatagramTicket: {
    fromJSON(object: any): CMsgClientToGCRequestSteamDatagramTicket;
    toJSON(message: CMsgClientToGCRequestSteamDatagramTicket): unknown;
    create<I extends {
        server_steam_id?: string;
    } & {
        server_steam_id?: string;
    } & { [K in Exclude<keyof I, "server_steam_id">]: never; }>(base?: I): CMsgClientToGCRequestSteamDatagramTicket;
    fromPartial<I_1 extends {
        server_steam_id?: string;
    } & {
        server_steam_id?: string;
    } & { [K_1 in Exclude<keyof I_1, "server_steam_id">]: never; }>(object: I_1): CMsgClientToGCRequestSteamDatagramTicket;
};
export declare const CMsgClientToGCRequestSteamDatagramTicketResponse: {
    fromJSON(object: any): CMsgClientToGCRequestSteamDatagramTicketResponse;
    toJSON(message: CMsgClientToGCRequestSteamDatagramTicketResponse): unknown;
    create<I extends {
        serialized_ticket?: string;
        message?: string;
    } & {
        serialized_ticket?: string;
        message?: string;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCRequestSteamDatagramTicketResponse>]: never; }>(base?: I): CMsgClientToGCRequestSteamDatagramTicketResponse;
    fromPartial<I_1 extends {
        serialized_ticket?: string;
        message?: string;
    } & {
        serialized_ticket?: string;
        message?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCRequestSteamDatagramTicketResponse>]: never; }>(object: I_1): CMsgClientToGCRequestSteamDatagramTicketResponse;
};
export declare const CMsgGCToClientSteamDatagramTicket: {
    fromJSON(object: any): CMsgGCToClientSteamDatagramTicket;
    toJSON(message: CMsgGCToClientSteamDatagramTicket): unknown;
    create<I extends {
        legacy_time_expiry?: number;
        legacy_authorized_steam_id?: string;
        legacy_authorized_public_ip?: number;
        legacy_gameserver_steam_id?: string;
        legacy_gameserver_net_id?: string;
        legacy_signature?: string;
        legacy_app_id?: number;
        legacy_extra_fields?: Uint8Array[];
        serialized_ticket?: string;
    } & {
        legacy_time_expiry?: number;
        legacy_authorized_steam_id?: string;
        legacy_authorized_public_ip?: number;
        legacy_gameserver_steam_id?: string;
        legacy_gameserver_net_id?: string;
        legacy_signature?: string;
        legacy_app_id?: number;
        legacy_extra_fields?: Uint8Array[] & Uint8Array[] & { [K in Exclude<keyof I["legacy_extra_fields"], keyof Uint8Array[]>]: never; };
        serialized_ticket?: string;
    } & { [K_1 in Exclude<keyof I, keyof CMsgGCToClientSteamDatagramTicket>]: never; }>(base?: I): CMsgGCToClientSteamDatagramTicket;
    fromPartial<I_1 extends {
        legacy_time_expiry?: number;
        legacy_authorized_steam_id?: string;
        legacy_authorized_public_ip?: number;
        legacy_gameserver_steam_id?: string;
        legacy_gameserver_net_id?: string;
        legacy_signature?: string;
        legacy_app_id?: number;
        legacy_extra_fields?: Uint8Array[];
        serialized_ticket?: string;
    } & {
        legacy_time_expiry?: number;
        legacy_authorized_steam_id?: string;
        legacy_authorized_public_ip?: number;
        legacy_gameserver_steam_id?: string;
        legacy_gameserver_net_id?: string;
        legacy_signature?: string;
        legacy_app_id?: number;
        legacy_extra_fields?: Uint8Array[] & Uint8Array[] & { [K_2 in Exclude<keyof I_1["legacy_extra_fields"], keyof Uint8Array[]>]: never; };
        serialized_ticket?: string;
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgGCToClientSteamDatagramTicket>]: never; }>(object: I_1): CMsgGCToClientSteamDatagramTicket;
};
export declare const CMsgGCToClientRequestLaneSelection: {
    fromJSON(_: any): CMsgGCToClientRequestLaneSelection;
    toJSON(_: CMsgGCToClientRequestLaneSelection): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgGCToClientRequestLaneSelection;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgGCToClientRequestLaneSelection;
};
export declare const CMsgGCToClientRequestLaneSelectionResponse: {
    fromJSON(object: any): CMsgGCToClientRequestLaneSelectionResponse;
    toJSON(message: CMsgGCToClientRequestLaneSelectionResponse): unknown;
    create<I extends {
        lane_selection_flags?: number;
        high_priority_disabled?: boolean;
    } & {
        lane_selection_flags?: number;
        high_priority_disabled?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgGCToClientRequestLaneSelectionResponse>]: never; }>(base?: I): CMsgGCToClientRequestLaneSelectionResponse;
    fromPartial<I_1 extends {
        lane_selection_flags?: number;
        high_priority_disabled?: boolean;
    } & {
        lane_selection_flags?: number;
        high_priority_disabled?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToClientRequestLaneSelectionResponse>]: never; }>(object: I_1): CMsgGCToClientRequestLaneSelectionResponse;
};
export declare const CMsgGCToClientRequestMMInfo: {
    fromJSON(_: any): CMsgGCToClientRequestMMInfo;
    toJSON(_: CMsgGCToClientRequestMMInfo): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgGCToClientRequestMMInfo;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgGCToClientRequestMMInfo;
};
export declare const CMsgClientToGCMMInfo: {
    fromJSON(object: any): CMsgClientToGCMMInfo;
    toJSON(message: CMsgClientToGCMMInfo): unknown;
    create<I extends {
        lane_selection_flags?: number;
        high_priority_disabled?: boolean;
    } & {
        lane_selection_flags?: number;
        high_priority_disabled?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCMMInfo>]: never; }>(base?: I): CMsgClientToGCMMInfo;
    fromPartial<I_1 extends {
        lane_selection_flags?: number;
        high_priority_disabled?: boolean;
    } & {
        lane_selection_flags?: number;
        high_priority_disabled?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCMMInfo>]: never; }>(object: I_1): CMsgClientToGCMMInfo;
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
