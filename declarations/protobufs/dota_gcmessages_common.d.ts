import { CMsgPendingEventAward, DOTA_GameMode, DOTA_GC_TEAM, EEvent, ELeaguePhase, ELeagueRegion, EMatchOutcome } from "./dota_shared_enums";
export declare const protobufPackage = "";
export declare enum ESpecialPingValue {
    k_ESpecialPingValue_NoData = 16382,
    k_ESpecialPingValue_Failed = 16383,
    UNRECOGNIZED = -1
}
export declare function eSpecialPingValueFromJSON(object: any): ESpecialPingValue;
export declare function eSpecialPingValueToJSON(object: ESpecialPingValue): string;
export declare enum EDOTAGCSessionNeed {
    k_EDOTAGCSessionNeed_Unknown = 0,
    k_EDOTAGCSessionNeed_UserNoSessionNeeded = 100,
    k_EDOTAGCSessionNeed_UserInOnlineGame = 101,
    k_EDOTAGCSessionNeed_UserInLocalGame = 102,
    k_EDOTAGCSessionNeed_UserInUIWasConnected = 103,
    k_EDOTAGCSessionNeed_UserInUINeverConnected = 104,
    k_EDOTAGCSessionNeed_UserTutorials = 105,
    k_EDOTAGCSessionNeed_UserInUIWasConnectedIdle = 106,
    k_EDOTAGCSessionNeed_UserInUINeverConnectedIdle = 107,
    k_EDOTAGCSessionNeed_GameServerOnline = 200,
    k_EDOTAGCSessionNeed_GameServerLocal = 201,
    k_EDOTAGCSessionNeed_GameServerIdle = 202,
    k_EDOTAGCSessionNeed_GameServerRelay = 203,
    k_EDOTAGCSessionNeed_GameServerLocalUpload = 204,
    UNRECOGNIZED = -1
}
export declare function eDOTAGCSessionNeedFromJSON(object: any): EDOTAGCSessionNeed;
export declare function eDOTAGCSessionNeedToJSON(object: EDOTAGCSessionNeed): string;
export declare enum DOTA_TournamentEvents {
    TE_FIRST_BLOOD = 0,
    TE_GAME_END = 1,
    TE_MULTI_KILL = 2,
    TE_HERO_DENY = 3,
    TE_AEGIS_DENY = 4,
    TE_AEGIS_STOLEN = 5,
    TE_GODLIKE = 6,
    TE_COURIER_KILL = 7,
    TE_ECHOSLAM = 8,
    TE_RAPIER = 9,
    TE_EARLY_ROSHAN = 10,
    TE_BLACK_HOLE = 11,
    UNRECOGNIZED = -1
}
export declare function dOTA_TournamentEventsFromJSON(object: any): DOTA_TournamentEvents;
export declare function dOTA_TournamentEventsToJSON(object: DOTA_TournamentEvents): string;
export declare enum EBroadcastTimelineEvent {
    EBroadcastTimelineEvent_MatchStarted = 1,
    EBroadcastTimelineEvent_GameStateChanged = 2,
    EBroadcastTimelineEvent_TowerDeath = 3,
    EBroadcastTimelineEvent_BarracksDeath = 4,
    EBroadcastTimelineEvent_AncientDeath = 5,
    EBroadcastTimelineEvent_RoshanDeath = 6,
    EBroadcastTimelineEvent_HeroDeath = 7,
    EBroadcastTimelineEvent_TeamFight = 8,
    EBroadcastTimelineEvent_FirstBlood = 9,
    UNRECOGNIZED = -1
}
export declare function eBroadcastTimelineEventFromJSON(object: any): EBroadcastTimelineEvent;
export declare function eBroadcastTimelineEventToJSON(object: EBroadcastTimelineEvent): string;
export declare enum ECustomGameWhitelistState {
    CUSTOM_GAME_WHITELIST_STATE_UNKNOWN = 0,
    CUSTOM_GAME_WHITELIST_STATE_APPROVED = 1,
    CUSTOM_GAME_WHITELIST_STATE_REJECTED = 2,
    UNRECOGNIZED = -1
}
export declare function eCustomGameWhitelistStateFromJSON(object: any): ECustomGameWhitelistState;
export declare function eCustomGameWhitelistStateToJSON(object: ECustomGameWhitelistState): string;
export declare enum EDOTATriviaQuestionCategory {
    k_EDOTATriviaQuestionCategory_AbilityIcon = 0,
    k_EDOTATriviaQuestionCategory_AbilityCooldown = 1,
    k_EDOTATriviaQuestionCategory_HeroAttributes = 2,
    k_EDOTATriviaQuestionCategory_HeroMovementSpeed = 3,
    k_EDOTATriviaQuestionCategory_TalentTree = 4,
    k_EDOTATriviaQuestionCategory_HeroStats = 5,
    k_EDOTATriviaQuestionCategory_ItemPrice = 6,
    k_EDOTATriviaQuestionCategory_AbilitySound = 7,
    k_EDOTATriviaQuestionCategory_InvokerSpells = 8,
    k_EDOTATriviaQuestionCategory_AbilityManaCost = 9,
    k_EDOTATriviaQuestionCategory_HeroAttackSound = 10,
    k_EDOTATriviaQuestionCategory_AbilityName = 11,
    k_EDOTATriviaQuestionCategory_ItemComponents = 12,
    k_EDOTATriviaQuestionCategory_ItemLore = 13,
    k_EDOTATriviaQuestionCategory_ItemPassives = 14,
    k_EDOTATriviaQuestionCategory_STATIC_QUESTIONS_END = 15,
    k_EDOTATriviaQuestionCategory_DYNAMIC_QUESTIONS_START = 99,
    k_EDOTATriviaQuestionCategory_Dynamic_ItemBuild = 100,
    UNRECOGNIZED = -1
}
export declare function eDOTATriviaQuestionCategoryFromJSON(object: any): EDOTATriviaQuestionCategory;
export declare function eDOTATriviaQuestionCategoryToJSON(object: EDOTATriviaQuestionCategory): string;
export declare enum EOverwatchConviction {
    k_EOverwatchConviction_None = 0,
    k_EOverwatchConviction_NotGuilty = 1,
    k_EOverwatchConviction_GuiltUnclear = 2,
    k_EOverwatchConviction_Guilty = 3,
    UNRECOGNIZED = -1
}
export declare function eOverwatchConvictionFromJSON(object: any): EOverwatchConviction;
export declare function eOverwatchConvictionToJSON(object: EOverwatchConviction): string;
export declare enum EHeroRelicRarity {
    HERO_RELIC_RARITY_INVALID = -1,
    HERO_RELIC_RARITY_COMMON = 0,
    HERO_RELIC_RARITY_RARE = 1,
    UNRECOGNIZED = -1
}
export declare function eHeroRelicRarityFromJSON(object: any): EHeroRelicRarity;
export declare function eHeroRelicRarityToJSON(object: EHeroRelicRarity): string;
export declare enum EStickerbookAuditAction {
    STICKERBOOK_AUDIT_CREATE_PAGE = 0,
    STICKERBOOK_AUDIT_DELETE_PAGE = 1,
    STICKERBOOK_AUDIT_STICK_STICKERS = 2,
    STICKERBOOK_AUDIT_REPLACE_STICKERS = 3,
    STICKERBOOK_AUDIT_HERO_STICKER = 4,
    UNRECOGNIZED = -1
}
export declare function eStickerbookAuditActionFromJSON(object: any): EStickerbookAuditAction;
export declare function eStickerbookAuditActionToJSON(object: EStickerbookAuditAction): string;
export declare enum EStickerbookPageType {
    STICKER_PAGE_GENERIC = 0,
    STICKER_PAGE_TEAM = 1,
    STICKER_PAGE_TALENT = 2,
    UNRECOGNIZED = -1
}
export declare function eStickerbookPageTypeFromJSON(object: any): EStickerbookPageType;
export declare function eStickerbookPageTypeToJSON(object: EStickerbookPageType): string;
export interface CSODOTAGameAccountClient {
    account_id: number;
    wins: number;
    losses: number;
    xp: number;
    level: number;
    initial_skill: number;
    leaver_count: number;
    secondary_leaver_count: number;
    low_priority_until_date: number;
    prevent_text_chat_until_date: number;
    prevent_voice_until_date: number;
    prevent_public_text_chat_until_date: number;
    prevent_new_player_chat_until_date: number;
    last_abandoned_game_date: number;
    last_secondary_abandoned_game_date: number;
    leaver_penalty_count: number;
    completed_game_streak: number;
    account_disabled_until_date: number;
    account_disabled_count: number;
    match_disabled_until_date: number;
    match_disabled_count: number;
    shutdownlawterminatetimestamp: number;
    low_priority_games_remaining: number;
    competitive_rank: number;
    competitive_calibration_games_remaining: number;
    recruitment_level: number;
    has_new_notifications: boolean;
    is_league_admin: boolean;
    casual_games_played: number;
    solo_competitive_games_played: number;
    party_competitive_games_played: number;
    casual_1v1_games_played: number;
    curr_all_hero_challenge_id: number;
    play_time_points: number;
    account_flags: number;
    play_time_level: number;
    player_behavior_seq_num_last_report: number;
    player_behavior_score_last_report: number;
    player_behavior_report_old_data: boolean;
    tourney_skill_level: number;
    tourney_recent_participation_date: number;
    anchored_phone_number_id: string;
    ranked_matchmaking_ban_until_date: number;
    recent_game_time_1: number;
    recent_game_time_2: number;
    recent_game_time_3: number;
    favorite_team_packed: string;
    recent_report_time: number;
    custom_game_disabled_until_date: number;
    recent_win_time_1: number;
    recent_win_time_2: number;
    recent_win_time_3: number;
    coach_rating: number;
    queue_points: number;
    role_handicaps: CSODOTAGameAccountClient_RoleHandicap[];
    event_mode_recent_time: number;
    mmr_recalibration_time: number;
}
export interface CSODOTAGameAccountClient_RoleHandicap {
    role: number;
    handicap: number;
}
export interface CSODOTAGameAccountPlus {
    account_id: number;
    original_start_date: number;
    plus_flags: number;
    plus_status: number;
    prepaid_time_start: number;
    prepaid_time_balance: number;
    next_payment_date: number;
    steam_agreement_id: string;
}
export interface CMsgLobbyFeaturedGamemodeProgress {
    accounts: CMsgLobbyFeaturedGamemodeProgress_AccountProgress[];
}
export interface CMsgLobbyFeaturedGamemodeProgress_AccountProgress {
    account_id: number;
    current_value: number;
    max_value: number;
}
export interface CMsgBattleCupVictory {
    account_id: number;
    win_date: number;
    valid_until: number;
    skill_level: number;
    tournament_id: number;
    division_id: number;
    team_id: number;
    streak: number;
    trophy_id: number;
}
export interface CMsgLobbyBattleCupVictoryList {
    winners: CMsgBattleCupVictory[];
}
export interface CMsgDOTABroadcastNotification {
    message: string;
}
export interface CProtoItemHeroStatue {
    hero_id: number;
    status_effect_index: number;
    sequence_name: string;
    cycle: number;
    wearable: number[];
    inscription: string;
    style: number[];
    tournament_drop: boolean;
}
export interface CMatchPlayerAbilityUpgrade {
    ability: number;
    time: number;
}
export interface CMatchPlayerTimedStats {
    time: number;
    kills: number;
    deaths: number;
    assists: number;
    net_worth: number;
    xp: number;
    last_hits: number;
    denies: number;
    bounty_rune_gold: number;
    range_creep_upgrade_gold: number;
    observer_wards_dewarded: number;
    reliable_gold_earned: number;
    gold_loss_prevented: number;
    hero_kill_gold: number;
    creep_kill_gold: number;
    building_gold: number;
    other_gold: number;
    comeback_gold: number;
    experimental_gold: number;
    experimental2_gold: number;
    creep_deny_gold: number;
    tp_scrolls_purchased_1: number;
    tp_scrolls_purchased_2: number;
    tp_scrolls_purchased_3: number;
    tp_scrolls_purchased_4: number;
    tp_scrolls_purchased_5: number;
    neutral_gold: number;
    courier_gold: number;
    roshan_gold: number;
    income_gold: number;
    custom_stats_1: number;
    custom_stats_2: number;
    custom_stats_3: number;
    custom_stats_4: number;
    custom_stats_5: number;
    item_value: number;
    support_gold_spent: number;
    camps_stacked: number;
    wards_placed: number;
    triple_kills: number;
    rampages: number;
}
export interface CMatchTeamTimedStats {
    time: number;
    enemy_towers_killed: number;
    enemy_barracks_killed: number;
    enemy_towers_status: number;
    enemy_barracks_status: number;
}
export interface CMatchAdditionalUnitInventory {
    unit_name: string;
    items: number[];
}
export interface CMatchPlayerPermanentBuff {
    permanent_buff: number;
    stack_count: number;
    grant_time: number;
}
export interface CMatchHeroSelectEvent {
    is_pick: boolean;
    team: number;
    hero_id: number;
}
export interface CMatchClip {
    match_id: string;
    player_account_id: number;
    game_time_seconds: number;
    duration_seconds: number;
    player_id: number;
    hero_id: number;
    ability_id: number;
    camera_mode: number;
    comment: string;
}
export interface CPartySearchClientParty {
    party_id: string;
    beacon_type: number;
    party_members: number[];
}
export interface CMsgDOTAHasItemQuery {
    account_id: number;
    item_id: string;
}
export interface CMsgDOTAHasItemResponse {
    has_item: boolean;
}
export interface CMsgGCGetPlayerCardItemInfo {
    account_id: number;
    player_card_item_ids: string[];
    all_for_event: number;
}
export interface CMsgGCGetPlayerCardItemInfoResponse {
    player_card_infos: CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo[];
}
export interface CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo {
    player_card_item_id: string;
    account_id: number;
    packed_bonuses: string;
}
export interface CSODOTAMapLocationState {
    account_id: number;
    location_id: number;
    completed: boolean;
}
export interface CMsgLeagueAdminList {
    account_ids: number[];
}
export interface CMsgDOTAProfileCard {
    account_id: number;
    slots: CMsgDOTAProfileCard_Slot[];
    badge_points: number;
    event_points: number;
    event_id: number;
    recent_battle_cup_victory: CMsgBattleCupVictory | undefined;
    rank_tier: number;
    leaderboard_rank: number;
    is_plus_subscriber: boolean;
    plus_original_start_date: number;
    rank_tier_score: number;
    leaderboard_rank_core: number;
    title: number;
    favorite_team_packed: string;
    lifetime_games: number;
}
export declare enum CMsgDOTAProfileCard_EStatID {
    k_eStat_Wins = 3,
    k_eStat_Commends = 4,
    k_eStat_GamesPlayed = 5,
    k_eStat_FirstMatchDate = 6,
    k_eStat_PreviousSeasonRank = 7,
    k_eStat_GamesMVP = 8,
    UNRECOGNIZED = -1
}
export declare function cMsgDOTAProfileCard_EStatIDFromJSON(object: any): CMsgDOTAProfileCard_EStatID;
export declare function cMsgDOTAProfileCard_EStatIDToJSON(object: CMsgDOTAProfileCard_EStatID): string;
export interface CMsgDOTAProfileCard_Slot {
    slot_id: number;
    trophy: CMsgDOTAProfileCard_Slot_Trophy | undefined;
    stat: CMsgDOTAProfileCard_Slot_Stat | undefined;
    item: CMsgDOTAProfileCard_Slot_Item | undefined;
    hero: CMsgDOTAProfileCard_Slot_Hero | undefined;
    emoticon: CMsgDOTAProfileCard_Slot_Emoticon | undefined;
    team: CMsgDOTAProfileCard_Slot_Team | undefined;
}
export interface CMsgDOTAProfileCard_Slot_Trophy {
    trophy_id: number;
    trophy_score: number;
}
export interface CMsgDOTAProfileCard_Slot_Stat {
    stat_id: CMsgDOTAProfileCard_EStatID;
    stat_score: number;
}
export interface CMsgDOTAProfileCard_Slot_Item {
    serialized_item: string;
    item_id: string;
}
export interface CMsgDOTAProfileCard_Slot_Hero {
    hero_id: number;
    hero_wins: number;
    hero_losses: number;
}
export interface CMsgDOTAProfileCard_Slot_Emoticon {
    emoticon_id: number;
}
export interface CMsgDOTAProfileCard_Slot_Team {
    team_id: number;
}
export interface CSODOTAPlayerChallenge {
    account_id: number;
    event_id: number;
    slot_id: number;
    int_param_0: number;
    int_param_1: number;
    created_time: number;
    completed: number;
    sequence_id: number;
    challenge_tier: number;
    flags: number;
    attempts: number;
    complete_limit: number;
    quest_rank: number;
    max_quest_rank: number;
    instance_id: number;
    hero_id: number;
    template_id: number;
}
export interface CMsgClientToGCRerollPlayerChallenge {
    event_id: EEvent;
    sequence_id: number;
    hero_id: number;
}
export interface CMsgGCRerollPlayerChallengeResponse {
    result: CMsgGCRerollPlayerChallengeResponse_EResult;
}
export declare enum CMsgGCRerollPlayerChallengeResponse_EResult {
    eResult_Success = 0,
    eResult_Dropped = 1,
    eResult_NotFound = 2,
    eResult_CantReroll = 3,
    eResult_ServerError = 4,
    UNRECOGNIZED = -1
}
export declare function cMsgGCRerollPlayerChallengeResponse_EResultFromJSON(object: any): CMsgGCRerollPlayerChallengeResponse_EResult;
export declare function cMsgGCRerollPlayerChallengeResponse_EResultToJSON(object: CMsgGCRerollPlayerChallengeResponse_EResult): string;
export interface CMsgGCTopCustomGamesList {
    top_custom_games: string[];
    game_of_the_day: string;
}
export interface CMsgDOTARealtimeGameStats {
    match: CMsgDOTARealtimeGameStats_MatchDetails | undefined;
    teams: CMsgDOTARealtimeGameStats_TeamDetails[];
    buildings: CMsgDOTARealtimeGameStats_BuildingDetails[];
    graph_data: CMsgDOTARealtimeGameStats_GraphData | undefined;
    delta_frame: boolean;
}
export interface CMsgDOTARealtimeGameStats_TeamDetails {
    team_number: number;
    team_id: number;
    team_name: string;
    team_logo: string;
    team_tag: string;
    score: number;
    net_worth: number;
    players: CMsgDOTARealtimeGameStats_PlayerDetails[];
    only_team: boolean;
    cheers: number;
    team_logo_url: string;
}
export interface CMsgDOTARealtimeGameStats_ItemDetails {
    item_ability_id: number;
    name: string;
    time: number;
    sold: boolean;
    stackcount: number;
}
export interface CMsgDOTARealtimeGameStats_AbilityDetails {
    id: number;
    name: string;
    level: number;
    cooldown: number;
    cooldown_max: number;
}
export interface CMsgDOTARealtimeGameStats_HeroToHeroStats {
    victimid: number;
    kills: number;
    assists: number;
}
export interface CMsgDOTARealtimeGameStats_AbilityList {
    id: number[];
}
export interface CMsgDOTARealtimeGameStats_PlayerDetails {
    accountid: number;
    playerid: number;
    name: string;
    team: number;
    heroid: number;
    healthpoints: number;
    maxhealthpoints: number;
    healthregenrate: number;
    manapoints: number;
    maxmanapoints: number;
    manaregenrate: number;
    base_strength: number;
    base_agility: number;
    base_intelligence: number;
    base_armor: number;
    base_movespeed: number;
    base_damage: number;
    strength: number;
    agility: number;
    intelligence: number;
    armor: number;
    movespeed: number;
    damage: number;
    hero_damage: number;
    tower_damage: number;
    abilities: CMsgDOTARealtimeGameStats_AbilityDetails[];
    level: number;
    kill_count: number;
    death_count: number;
    assists_count: number;
    denies_count: number;
    lh_count: number;
    hero_healing: number;
    gold_per_min: number;
    xp_per_min: number;
    net_gold: number;
    gold: number;
    x: number;
    y: number;
    respawn_time: number;
    ultimate_cooldown: number;
    has_buyback: boolean;
    items: CMsgDOTARealtimeGameStats_ItemDetails[];
    stashitems: CMsgDOTARealtimeGameStats_ItemDetails[];
    itemshoppinglist: CMsgDOTARealtimeGameStats_ItemDetails[];
    levelpoints: CMsgDOTARealtimeGameStats_AbilityList[];
    hero_to_hero_stats: CMsgDOTARealtimeGameStats_HeroToHeroStats[];
    has_ultimate: boolean;
    has_ultimate_mana: boolean;
}
export interface CMsgDOTARealtimeGameStats_BuildingDetails {
    team: number;
    heading: number;
    lane: number;
    tier: number;
    type: number;
    x: number;
    y: number;
    destroyed: boolean;
}
export interface CMsgDOTARealtimeGameStats_KillDetails {
    player_id: number;
    death_time: number;
    killer_player_id: number;
}
export interface CMsgDOTARealtimeGameStats_BroadcasterDetails {
    player_id: number;
}
export interface CMsgDOTARealtimeGameStats_PickBanDetails {
    hero: number;
    team: number;
}
export interface CMsgDOTARealtimeGameStats_MatchDetails {
    server_steam_id: string;
    match_id: string;
    timestamp: number;
    time_of_day: number;
    is_nightstalker_night: boolean;
    game_time: number;
    game_state: number;
    teamid_radiant: number;
    teamid_dire: number;
    picks: CMsgDOTARealtimeGameStats_PickBanDetails[];
    bans: CMsgDOTARealtimeGameStats_PickBanDetails[];
    kills: CMsgDOTARealtimeGameStats_KillDetails[];
    broadcasters: CMsgDOTARealtimeGameStats_BroadcasterDetails[];
    game_mode: number;
    league_id: number;
    league_node_id: number;
    single_team: boolean;
    cheers_peak: number;
    lobby_type: number;
    start_timestamp: number;
}
export interface CMsgDOTARealtimeGameStats_GraphData {
    graph_gold: number[];
    graph_xp: number[];
    graph_kill: number[];
    graph_tower: number[];
    graph_rax: number[];
    team_loc_stats: CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats[];
}
export declare enum CMsgDOTARealtimeGameStats_GraphData_eStat {
    CreepGoldEarned = 0,
    KillGoldEarned = 1,
    DeathAndBuybackGoldLost = 2,
    XPEarned = 3,
    UNRECOGNIZED = -1
}
export declare function cMsgDOTARealtimeGameStats_GraphData_eStatFromJSON(object: any): CMsgDOTARealtimeGameStats_GraphData_eStat;
export declare function cMsgDOTARealtimeGameStats_GraphData_eStatToJSON(object: CMsgDOTARealtimeGameStats_GraphData_eStat): string;
export declare enum CMsgDOTARealtimeGameStats_GraphData_eLocation {
    BotLane = 0,
    MidLane = 1,
    TopLane = 2,
    Jungle = 3,
    Ancients = 4,
    Other = 5,
    UNRECOGNIZED = -1
}
export declare function cMsgDOTARealtimeGameStats_GraphData_eLocationFromJSON(object: any): CMsgDOTARealtimeGameStats_GraphData_eLocation;
export declare function cMsgDOTARealtimeGameStats_GraphData_eLocationToJSON(object: CMsgDOTARealtimeGameStats_GraphData_eLocation): string;
export interface CMsgDOTARealtimeGameStats_GraphData_LocationStats {
    stats: number[];
}
export interface CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats {
    loc_stats: CMsgDOTARealtimeGameStats_GraphData_LocationStats[];
}
export interface CMsgDOTARealtimeGameStatsTerse {
    match: CMsgDOTARealtimeGameStatsTerse_MatchDetails | undefined;
    teams: CMsgDOTARealtimeGameStatsTerse_TeamDetails[];
    buildings: CMsgDOTARealtimeGameStatsTerse_BuildingDetails[];
    graph_data: CMsgDOTARealtimeGameStatsTerse_GraphData | undefined;
    delta_frame: boolean;
}
export interface CMsgDOTARealtimeGameStatsTerse_TeamDetails {
    team_number: number;
    team_id: number;
    team_name: string;
    team_tag: string;
    team_logo: string;
    score: number;
    net_worth: number;
    team_logo_url: string;
    players: CMsgDOTARealtimeGameStatsTerse_PlayerDetails[];
}
export interface CMsgDOTARealtimeGameStatsTerse_PlayerDetails {
    accountid: number;
    playerid: number;
    name: string;
    team: number;
    heroid: number;
    level: number;
    kill_count: number;
    death_count: number;
    assists_count: number;
    denies_count: number;
    lh_count: number;
    gold: number;
    x: number;
    y: number;
    net_worth: number;
    abilities: number[];
    items: number[];
}
export interface CMsgDOTARealtimeGameStatsTerse_BuildingDetails {
    team: number;
    heading: number;
    type: number;
    lane: number;
    tier: number;
    x: number;
    y: number;
    destroyed: boolean;
}
export interface CMsgDOTARealtimeGameStatsTerse_PickBanDetails {
    hero: number;
    team: number;
}
export interface CMsgDOTARealtimeGameStatsTerse_MatchDetails {
    server_steam_id: string;
    match_id: string;
    timestamp: number;
    game_time: number;
    steam_broadcaster_account_ids: number[];
    game_mode: number;
    league_id: number;
    league_node_id: number;
    game_state: number;
    picks: CMsgDOTARealtimeGameStatsTerse_PickBanDetails[];
    bans: CMsgDOTARealtimeGameStatsTerse_PickBanDetails[];
    lobby_type: number;
    start_timestamp: number;
}
export interface CMsgDOTARealtimeGameStatsTerse_GraphData {
    graph_gold: number[];
}
export interface CMsgDOTABroadcastTimelineEvent {
    event: EBroadcastTimelineEvent;
    timestamp: number;
    data: number;
    string_data: string;
}
export interface CMsgGCToClientMatchGroupsVersion {
    matchgroups_version: number;
}
export interface CMsgDOTASDOHeroStatsHistory {
    match_id: string;
    game_mode: number;
    lobby_type: number;
    start_time: number;
    won: boolean;
    gpm: number;
    xpm: number;
    kills: number;
    deaths: number;
    assists: number;
}
export interface CMsgPredictionChoice {
    value: number;
    name: string;
    min_raw_value: number;
    max_raw_value: number;
}
export interface CMsgInGamePrediction {
    id: number;
    name: string;
    type: CMsgInGamePrediction_EPredictionType;
    group: CMsgInGamePrediction_ERandomSelectionGroup_t;
    question: string;
    choices: CMsgPredictionChoice[];
    required_heroes: string[];
    query_name: string;
    query_values: CMsgInGamePrediction_QueryKeyValues[];
    answer_resolution_type: CMsgInGamePrediction_EResolutionType_t;
    points_to_grant: number;
    reward_action: number;
    debug_force_selection: number;
    raw_value_type: CMsgInGamePrediction_ERawValueType_t;
}
export declare enum CMsgInGamePrediction_ERawValueType_t {
    Number = 0,
    Time = 1,
    UNRECOGNIZED = -1
}
export declare function cMsgInGamePrediction_ERawValueType_tFromJSON(object: any): CMsgInGamePrediction_ERawValueType_t;
export declare function cMsgInGamePrediction_ERawValueType_tToJSON(object: CMsgInGamePrediction_ERawValueType_t): string;
export declare enum CMsgInGamePrediction_EPredictionType {
    Generic = 0,
    Hero = 1,
    Team = 2,
    Player = 3,
    Special = 4,
    YesNo = 5,
    QualifiersTeam = 6,
    UNRECOGNIZED = -1
}
export declare function cMsgInGamePrediction_EPredictionTypeFromJSON(object: any): CMsgInGamePrediction_EPredictionType;
export declare function cMsgInGamePrediction_EPredictionTypeToJSON(object: CMsgInGamePrediction_EPredictionType): string;
export declare enum CMsgInGamePrediction_EResolutionType_t {
    InvalidQuery = 0,
    FirstToPassQuery = 1,
    LastToPassQuery = 2,
    LastRemainingQuery = 3,
    MaxToPassQuery = 4,
    MinToPassQuery = 5,
    SumQuery = 6,
    MaxTeamSumToPassQuery = 7,
    MinTeamSumToPassQuery = 8,
    UNRECOGNIZED = -1
}
export declare function cMsgInGamePrediction_EResolutionType_tFromJSON(object: any): CMsgInGamePrediction_EResolutionType_t;
export declare function cMsgInGamePrediction_EResolutionType_tToJSON(object: CMsgInGamePrediction_EResolutionType_t): string;
export declare enum CMsgInGamePrediction_ERandomSelectionGroup_t {
    EarlyGame = 0,
    MidGame = 1,
    LateGame = 2,
    Count = 3,
    UNRECOGNIZED = -1
}
export declare function cMsgInGamePrediction_ERandomSelectionGroup_tFromJSON(object: any): CMsgInGamePrediction_ERandomSelectionGroup_t;
export declare function cMsgInGamePrediction_ERandomSelectionGroup_tToJSON(object: CMsgInGamePrediction_ERandomSelectionGroup_t): string;
export interface CMsgInGamePrediction_QueryKeyValues {
    name: string;
    value: string;
}
export interface CMsgDOTASeasonPredictions {
    predictions: CMsgDOTASeasonPredictions_Prediction[];
    in_game_predictions: CMsgInGamePrediction[];
    in_game_prediction_count_per_game: number;
    in_game_prediction_voting_period_minutes: number;
}
export interface CMsgDOTASeasonPredictions_Prediction {
    type: CMsgDOTASeasonPredictions_Prediction_EPredictionType;
    question: string;
    choices: CMsgPredictionChoice[];
    selection_id: number;
    start_date: number;
    lock_date: number;
    reward: number;
    answer_type: CMsgDOTASeasonPredictions_Prediction_EAnswerType;
    answer_id: number;
    answers: CMsgDOTASeasonPredictions_Prediction_Answers[];
    query_name: string;
    lock_on_selection_id: number;
    lock_on_selection_value: number;
    lock_on_selection_set: boolean;
    use_answer_value_ranges: boolean;
    region: ELeagueRegion;
    phases: ELeaguePhase[];
    reward_event: EEvent;
}
export declare enum CMsgDOTASeasonPredictions_Prediction_EPredictionType {
    Generic = 0,
    Hero = 1,
    Team = 2,
    Player = 3,
    Special = 4,
    YesNo = 5,
    QualifiersTeam = 6,
    LastChanceTeam = 7,
    UNRECOGNIZED = -1
}
export declare function cMsgDOTASeasonPredictions_Prediction_EPredictionTypeFromJSON(object: any): CMsgDOTASeasonPredictions_Prediction_EPredictionType;
export declare function cMsgDOTASeasonPredictions_Prediction_EPredictionTypeToJSON(object: CMsgDOTASeasonPredictions_Prediction_EPredictionType): string;
export declare enum CMsgDOTASeasonPredictions_Prediction_EAnswerType {
    SingleInt = 0,
    SingleFloat = 1,
    MultipleInt = 2,
    MultipleFloat = 3,
    AnswerTeam = 4,
    SingleTime = 5,
    MultipleTime = 6,
    NoAnswer = 7,
    UNRECOGNIZED = -1
}
export declare function cMsgDOTASeasonPredictions_Prediction_EAnswerTypeFromJSON(object: any): CMsgDOTASeasonPredictions_Prediction_EAnswerType;
export declare function cMsgDOTASeasonPredictions_Prediction_EAnswerTypeToJSON(object: CMsgDOTASeasonPredictions_Prediction_EAnswerType): string;
export interface CMsgDOTASeasonPredictions_Prediction_Answers {
    answer_id: number;
}
export interface CMsgAvailablePredictions {
    match_predictions: CMsgAvailablePredictions_MatchPrediction[];
}
export interface CMsgAvailablePredictions_MatchPrediction {
    match_id: string;
    predictions: CMsgInGamePrediction[];
}
export interface CMsgLeagueWatchedGames {
    leagues: CMsgLeagueWatchedGames_League[];
}
export interface CMsgLeagueWatchedGames_Series {
    node_id: number;
    game: number[];
}
export interface CMsgLeagueWatchedGames_League {
    league_id: number;
    series: CMsgLeagueWatchedGames_Series[];
}
export interface CMsgDOTAMatch {
    duration: number;
    starttime: number;
    players: CMsgDOTAMatch_Player[];
    match_id: string;
    tower_status: number[];
    barracks_status: number[];
    cluster: number;
    first_blood_time: number;
    replay_salt: number;
    server_ip: number;
    server_port: number;
    lobby_type: number;
    human_players: number;
    average_skill: number;
    game_balance: number;
    radiant_team_id: number;
    dire_team_id: number;
    leagueid: number;
    radiant_team_name: string;
    dire_team_name: string;
    radiant_team_logo: string;
    dire_team_logo: string;
    radiant_team_logo_url: string;
    dire_team_logo_url: string;
    radiant_team_complete: number;
    dire_team_complete: number;
    positive_votes: number;
    negative_votes: number;
    game_mode: DOTA_GameMode;
    picks_bans: CMatchHeroSelectEvent[];
    match_seq_num: string;
    replay_state: CMsgDOTAMatch_ReplayState;
    radiant_guild_id: number;
    dire_guild_id: number;
    radiant_team_tag: string;
    dire_team_tag: string;
    series_id: number;
    series_type: number;
    broadcaster_channels: CMsgDOTAMatch_BroadcasterChannel[];
    engine: number;
    custom_game_data: CMsgDOTAMatch_CustomGameData | undefined;
    match_flags: number;
    private_metadata_key: number;
    radiant_team_score: number;
    dire_team_score: number;
    match_outcome: EMatchOutcome;
    tournament_id: number;
    tournament_round: number;
    pre_game_duration: number;
    coaches: CMsgDOTAMatch_Coach[];
}
export declare enum CMsgDOTAMatch_ReplayState {
    REPLAY_AVAILABLE = 0,
    REPLAY_NOT_RECORDED = 1,
    REPLAY_EXPIRED = 2,
    UNRECOGNIZED = -1
}
export declare function cMsgDOTAMatch_ReplayStateFromJSON(object: any): CMsgDOTAMatch_ReplayState;
export declare function cMsgDOTAMatch_ReplayStateToJSON(object: CMsgDOTAMatch_ReplayState): string;
export interface CMsgDOTAMatch_Player {
    account_id: number;
    player_slot: number;
    hero_id: number;
    item_0: number;
    item_1: number;
    item_2: number;
    item_3: number;
    item_4: number;
    item_5: number;
    item_6: number;
    item_7: number;
    item_8: number;
    item_9: number;
    expected_team_contribution: number;
    scaled_metric: number;
    previous_rank: number;
    rank_change: number;
    mmr_type: number;
    kills: number;
    deaths: number;
    assists: number;
    leaver_status: number;
    gold: number;
    last_hits: number;
    denies: number;
    gold_per_min: number;
    xp_per_min: number;
    gold_spent: number;
    hero_damage: number;
    tower_damage: number;
    hero_healing: number;
    level: number;
    time_last_seen: number;
    player_name: string;
    support_ability_value: number;
    feeding_detected: boolean;
    search_rank: number;
    search_rank_uncertainty: number;
    rank_uncertainty_change: number;
    hero_play_count: number;
    party_id: string;
    scaled_hero_damage: number;
    scaled_tower_damage: number;
    scaled_hero_healing: number;
    scaled_kills: number;
    scaled_deaths: number;
    scaled_assists: number;
    claimed_farm_gold: number;
    support_gold: number;
    claimed_denies: number;
    claimed_misses: number;
    misses: number;
    ability_upgrades: CMatchPlayerAbilityUpgrade[];
    additional_units_inventory: CMatchAdditionalUnitInventory[];
    permanent_buffs: CMatchPlayerPermanentBuff[];
    pro_name: string;
    real_name: string;
    custom_game_data: CMsgDOTAMatch_Player_CustomGameData | undefined;
    active_plus_subscription: boolean;
    net_worth: number;
    bot_difficulty: number;
    hero_pick_order: number;
    hero_was_randomed: boolean;
    hero_was_dota_plus_suggestion: boolean;
    hero_damage_received: CMsgDOTAMatch_Player_HeroDamageReceived[];
    hero_damage_dealt: CMsgDOTAMatch_Player_HeroDamageReceived[];
    seconds_dead: number;
    gold_lost_to_death: number;
    lane_selection_flags: number;
    bounty_runes: number;
    outposts_captured: number;
    team_number: DOTA_GC_TEAM;
    team_slot: number;
}
export declare enum CMsgDOTAMatch_Player_HeroDamageType {
    HERO_DAMAGE_PHYSICAL = 0,
    HERO_DAMAGE_MAGICAL = 1,
    HERO_DAMAGE_PURE = 2,
    UNRECOGNIZED = -1
}
export declare function cMsgDOTAMatch_Player_HeroDamageTypeFromJSON(object: any): CMsgDOTAMatch_Player_HeroDamageType;
export declare function cMsgDOTAMatch_Player_HeroDamageTypeToJSON(object: CMsgDOTAMatch_Player_HeroDamageType): string;
export interface CMsgDOTAMatch_Player_CustomGameData {
    dota_team: number;
    winner: boolean;
}
export interface CMsgDOTAMatch_Player_HeroDamageReceived {
    pre_reduction: number;
    post_reduction: number;
    damage_type: CMsgDOTAMatch_Player_HeroDamageType;
}
export interface CMsgDOTAMatch_BroadcasterInfo {
    account_id: number;
    name: string;
}
export interface CMsgDOTAMatch_BroadcasterChannel {
    country_code: string;
    description: string;
    broadcaster_infos: CMsgDOTAMatch_BroadcasterInfo[];
    language_code: string;
}
export interface CMsgDOTAMatch_Coach {
    account_id: number;
    coach_name: string;
    coach_rating: number;
    coach_team: number;
    coach_party_id: string;
    is_private_coach: boolean;
}
export interface CMsgDOTAMatch_CustomGameData {
    custom_game_id: string;
    map_name: string;
}
export interface CMsgPlayerCard {
    account_id: number;
    stat_modifier: CMsgPlayerCard_StatModifier[];
}
export interface CMsgPlayerCard_StatModifier {
    stat: number;
    value: number;
}
export interface CMsgDOTAFantasyPlayerStats {
    player_account_id: number;
    match_id: string;
    match_completed: boolean;
    team_id: number;
    league_id: number;
    delay: number;
    series_id: number;
    series_type: number;
    kills: number;
    deaths: number;
    cs: number;
    gpm: number;
    tower_kills: number;
    roshan_kills: number;
    teamfight_participation: number;
    wards_placed: number;
    camps_stacked: number;
    runes_grabbed: number;
    first_blood: number;
    stuns: number;
}
export interface CMsgDOTAFantasyPlayerMatchStats {
    matches: CMsgDOTAFantasyPlayerStats[];
}
export interface CMsgDOTABotDebugInfo {
    bots: CMsgDOTABotDebugInfo_Bot[];
    desire_push_lane_top: number;
    desire_push_lane_mid: number;
    desire_push_lane_bot: number;
    desire_defend_lane_top: number;
    desire_defend_lane_mid: number;
    desire_defend_lane_bot: number;
    desire_farm_lane_top: number;
    desire_farm_lane_mid: number;
    desire_farm_lane_bot: number;
    desire_farm_roshan: number;
    execution_time: number;
    rune_status: number[];
}
export interface CMsgDOTABotDebugInfo_Bot {
    player_owner_id: number;
    hero_id: number;
    difficulty: number;
    power_current: number;
    power_max: number;
    move_target_x: number;
    move_target_y: number;
    move_target_z: number;
    active_mode_id: number;
    execution_time: number;
    modes: CMsgDOTABotDebugInfo_Bot_Mode[];
    action: CMsgDOTABotDebugInfo_Bot_Action | undefined;
}
export interface CMsgDOTABotDebugInfo_Bot_Mode {
    mode_id: number;
    desire: number;
    target_entity: number;
    target_x: number;
    target_y: number;
    target_z: number;
}
export interface CMsgDOTABotDebugInfo_Bot_Action {
    action_id: number;
    action_target: string;
}
export interface CMsgSuccessfulHero {
    hero_id: number;
    win_percent: number;
    longest_streak: number;
}
export interface CMsgRecentMatchInfo {
    match_id: string;
    game_mode: DOTA_GameMode;
    kills: number;
    deaths: number;
    assists: number;
    duration: number;
    player_slot: number;
    match_outcome: EMatchOutcome;
    timestamp: number;
    lobby_type: number;
    team_number: number;
}
export interface CMsgMatchTips {
    tips: CMsgMatchTips_SingleTip[];
}
export interface CMsgMatchTips_SingleTip {
    source_account_id: number;
    target_account_id: number;
    tip_amount: number;
    event_id: EEvent;
}
export interface CMsgDOTAMatchMinimal {
    match_id: string;
    start_time: number;
    duration: number;
    game_mode: DOTA_GameMode;
    players: CMsgDOTAMatchMinimal_Player[];
    tourney: CMsgDOTAMatchMinimal_Tourney | undefined;
    match_outcome: EMatchOutcome;
    radiant_score: number;
    dire_score: number;
    lobby_type: number;
}
export interface CMsgDOTAMatchMinimal_Player {
    account_id: number;
    hero_id: number;
    kills: number;
    deaths: number;
    assists: number;
    items: number[];
    player_slot: number;
    pro_name: string;
    level: number;
    team_number: DOTA_GC_TEAM;
}
export interface CMsgDOTAMatchMinimal_Tourney {
    league_id: number;
    series_type: number;
    series_game: number;
    weekend_tourney_tournament_id: number;
    weekend_tourney_season_trophy_id: number;
    weekend_tourney_division: number;
    weekend_tourney_skill_level: number;
    radiant_team_id: number;
    radiant_team_name: string;
    radiant_team_logo: string;
    radiant_team_logo_url: string;
    dire_team_id: number;
    dire_team_name: string;
    dire_team_logo: string;
    dire_team_logo_url: string;
}
export interface CMsgConsumableUsage {
    item_def: number;
    quantity_change: number;
}
export interface CMsgMatchConsumableUsage {
    player_consumables_used: CMsgMatchConsumableUsage_PlayerUsage[];
}
export interface CMsgMatchConsumableUsage_PlayerUsage {
    account_id: number;
    consumables_used: CMsgConsumableUsage[];
}
export interface CMsgMatchEventActionGrants {
    player_grants: CMsgMatchEventActionGrants_PlayerGrants[];
}
export interface CMsgMatchEventActionGrants_PlayerGrants {
    account_id: number;
    actions_granted: CMsgPendingEventAward[];
}
export interface CMsgCustomGameWhitelist {
    version: number;
    custom_games_whitelist: string[];
    disable_whitelist: boolean;
}
export interface CMsgCustomGameWhitelistForEdit {
    whitelist_entries: CMsgCustomGameWhitelistForEdit_WhitelistEntry[];
}
export interface CMsgCustomGameWhitelistForEdit_WhitelistEntry {
    custom_game_id: string;
    whitelist_state: ECustomGameWhitelistState;
}
export interface CMsgPlayerRecentMatchInfo {
    match_id: string;
    timestamp: number;
    duration: number;
    win: boolean;
    hero_id: number;
    kills: number;
    deaths: number;
    assists: number;
}
export interface CMsgPlayerMatchRecord {
    wins: number;
    losses: number;
}
export interface CMsgPlayerRecentMatchOutcomes {
    outcomes: number;
    match_count: number;
}
export interface CMsgPlayerRecentCommends {
    commends: number;
    match_count: number;
}
export interface CMsgPlayerRecentAccomplishments {
    recent_outcomes: CMsgPlayerRecentMatchOutcomes | undefined;
    total_record: CMsgPlayerMatchRecord | undefined;
    prediction_streak: number;
    plus_prediction_streak: number;
    recent_commends: CMsgPlayerRecentCommends | undefined;
    first_match_timestamp: number;
    last_match: CMsgPlayerRecentMatchInfo | undefined;
    recent_mvps: CMsgPlayerRecentMatchOutcomes | undefined;
}
export interface CMsgPlayerHeroRecentAccomplishments {
    recent_outcomes: CMsgPlayerRecentMatchOutcomes | undefined;
    total_record: CMsgPlayerMatchRecord | undefined;
    last_match: CMsgPlayerRecentMatchInfo | undefined;
}
export interface CMsgRecentAccomplishments {
    player_accomplishments: CMsgPlayerRecentAccomplishments | undefined;
    hero_accomplishments: CMsgPlayerHeroRecentAccomplishments | undefined;
}
export interface CMsgServerToGCRequestPlayerRecentAccomplishments {
    account_id: number;
    hero_id: number;
}
export interface CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse {
    result: CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse;
    player_accomplishments: CMsgRecentAccomplishments | undefined;
}
export declare enum CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    UNRECOGNIZED = -1
}
export declare function cMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponseFromJSON(object: any): CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse;
export declare function cMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponseToJSON(object: CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse): string;
export interface CMsgArcanaVoteMatchVotes {
    match_id: number;
    hero_id: number;
    vote_count: number;
}
export interface CMsgGCtoGCAssociatedExploiterAccountInfo {
    account_id: number;
    num_matches_to_search: number;
    min_shared_match_count: number;
    num_additional_players: number;
}
export interface CMsgGCtoGCAssociatedExploiterAccountInfoResponse {
    accounts: CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account[];
}
export interface CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account {
    account_id: number;
    num_common_matches: number;
    earliest_common_match: number;
    latest_common_match: number;
    generation: number;
    persona: string;
    already_banned: boolean;
}
export interface CMsgPullTabsData {
    slots: CMsgPullTabsData_Slot[];
    jackpots: CMsgPullTabsData_Jackpot[];
    last_board: number;
}
export interface CMsgPullTabsData_Slot {
    event_id: number;
    board_id: number;
    hero_id: number;
    action_id: number;
    redeemed: boolean;
}
export interface CMsgPullTabsData_Jackpot {
    board_id: number;
    action_id: number;
    hero_id: number;
}
export interface CMsgUnderDraftData {
    bench_slots: CMsgUnderDraftData_BenchSlot[];
    shop_slots: CMsgUnderDraftData_ShopSlot[];
    gold: number;
    total_gold: number;
    not_restorable: boolean;
}
export interface CMsgUnderDraftData_BenchSlot {
    slot_id: number;
    hero_id: number;
    stars: number;
}
export interface CMsgUnderDraftData_ShopSlot {
    slot_id: number;
    hero_id: number;
    is_special_reward: boolean;
}
export interface CMsgPlayerTitleData {
    title: number[];
    event_id: number[];
    active: number;
}
export interface CMsgDOTATriviaQuestion {
    question_id: number;
    category: EDOTATriviaQuestionCategory;
    timestamp: number;
    question_value: string;
    answer_values: string[];
    correct_answer_index: number;
}
export interface CMsgDOTATriviaQuestionAnswersSummary {
    summary_available: boolean;
    picked_count: number[];
}
export interface CMsgGameDataSpecialValueBonus {
    name: string;
    value: number;
    operation: number;
}
export interface CMsgGameDataSpecialValues {
    name: string;
    values_float: number[];
    is_percentage: boolean;
    heading_loc: string;
    bonuses: CMsgGameDataSpecialValueBonus[];
}
export interface CMsgGameDataAbilityOrItem {
    id: number;
    name: string;
    name_loc: string;
    desc_loc: string;
    lore_loc: string;
    notes_loc: string[];
    shard_loc: string;
    scepter_loc: string;
    type: number;
    behavior: string;
    target_team: number;
    target_type: number;
    flags: number;
    damage: number;
    immunity: number;
    dispellable: number;
    max_level: number;
    cast_ranges: number[];
    cast_points: number[];
    channel_times: number[];
    cooldowns: number[];
    durations: number[];
    damages: number[];
    mana_costs: number[];
    gold_costs: number[];
    special_values: CMsgGameDataSpecialValues[];
    is_item: boolean;
    ability_has_scepter: boolean;
    ability_has_shard: boolean;
    ability_is_granted_by_scepter: boolean;
    ability_is_granted_by_shard: boolean;
    item_cost: number;
    item_initial_charges: number;
    item_neutral_tier: number;
    item_stock_max: number;
    item_stock_time: number;
    item_quality: number;
}
export interface CMsgGameDataHero {
    id: number;
    name: string;
    order_id: number;
    name_loc: string;
    bio_loc: string;
    hype_loc: string;
    npe_desc_loc: string;
    str_base: number;
    str_gain: number;
    agi_base: number;
    agi_gain: number;
    int_base: number;
    int_gain: number;
    primary_attr: number;
    complexity: number;
    attack_capability: number;
    role_levels: number[];
    damage_min: number;
    damage_max: number;
    attack_rate: number;
    attack_range: number;
    projectile_speed: number;
    armor: number;
    magic_resistance: number;
    movement_speed: number;
    turn_rate: number;
    sight_range_day: number;
    sight_range_night: number;
    max_health: number;
    health_regen: number;
    max_mana: number;
    mana_regen: number;
    abilities: CMsgGameDataAbilityOrItem[];
    talents: CMsgGameDataAbilityOrItem[];
}
export interface CMsgGameDataAbilities {
    abilities: CMsgGameDataAbilityOrItem[];
}
export interface CMsgGameDataItems {
    items: CMsgGameDataAbilityOrItem[];
}
export interface CMsgGameDataHeroes {
    heroes: CMsgGameDataHero[];
}
export interface CMsgGameDataHeroList {
    heroes: CMsgGameDataHeroList_HeroInfo[];
}
export interface CMsgGameDataHeroList_HeroInfo {
    id: number;
    name: string;
    name_loc: string;
    name_english_loc: string;
    primary_attr: number;
    complexity: number;
}
export interface CMsgGameDataItemAbilityList {
    itemabilities: CMsgGameDataItemAbilityList_ItemAbilityInfo[];
}
export interface CMsgGameDataItemAbilityList_ItemAbilityInfo {
    id: number;
    name: string;
    name_loc: string;
    name_english_loc: string;
    neutral_item_tier: number;
}
export interface CMsgLobbyAbilityDraftData {
    shuffle_draft_order: boolean;
}
export interface CSOEconItemDropRateBonus {
    account_id: number;
    expiration_date: number;
    bonus: number;
    bonus_count: number;
    item_id: string;
    def_index: number;
    seconds_left: number;
    booster_type: number;
}
export interface CSOEconItemTournamentPassport {
    account_id: number;
    league_id: number;
    item_id: string;
    original_purchaser_id: number;
    passports_bought: number;
    version: number;
    def_index: number;
    reward_flags: number;
}
export interface CMsgStickerbookSticker {
    item_def_id: number;
    sticker_num: number;
    quality: number;
    position_x: number;
    position_y: number;
    position_z: number;
    rotation: number;
    scale: number;
    source_item_id: string;
    depth_bias: number;
}
export interface CMsgStickerbookPage {
    page_num: number;
    event_id: EEvent;
    team_id: number;
    stickers: CMsgStickerbookSticker[];
    page_type: EStickerbookPageType;
}
export interface CMsgStickerbookTeamPageOrderSequence {
    page_numbers: number[];
}
export interface CMsgStickerbook {
    pages: CMsgStickerbookPage[];
    team_page_order_sequence: CMsgStickerbookTeamPageOrderSequence | undefined;
    favorite_page_num: number;
}
export interface CMsgStickerHero {
    hero_id: number;
    item_def_id: number;
    quality: number;
    source_item_id: string;
}
export interface CMsgStickerHeroes {
    heroes: CMsgStickerHero[];
}
export interface CMsgHeroRoleStats {
    lane_selection_flags: number;
    match_count: number;
    win_count: number;
}
export interface CMsgHeroRoleHeroStats {
    hero_id: number;
    role_stats: CMsgHeroRoleStats[];
}
export interface CMsgHeroRoleRankStats {
    rank_tier: number;
    hero_stats: CMsgHeroRoleHeroStats[];
}
export interface CMsgHeroRoleAllRanksStats {
    start_timestamp: number;
    end_timestamp: number;
    rank_stats: CMsgHeroRoleRankStats[];
}
export declare const CSODOTAGameAccountClient: {
    fromJSON(object: any): CSODOTAGameAccountClient;
    toJSON(message: CSODOTAGameAccountClient): unknown;
    create<I extends {
        account_id?: number;
        wins?: number;
        losses?: number;
        xp?: number;
        level?: number;
        initial_skill?: number;
        leaver_count?: number;
        secondary_leaver_count?: number;
        low_priority_until_date?: number;
        prevent_text_chat_until_date?: number;
        prevent_voice_until_date?: number;
        prevent_public_text_chat_until_date?: number;
        prevent_new_player_chat_until_date?: number;
        last_abandoned_game_date?: number;
        last_secondary_abandoned_game_date?: number;
        leaver_penalty_count?: number;
        completed_game_streak?: number;
        account_disabled_until_date?: number;
        account_disabled_count?: number;
        match_disabled_until_date?: number;
        match_disabled_count?: number;
        shutdownlawterminatetimestamp?: number;
        low_priority_games_remaining?: number;
        competitive_rank?: number;
        competitive_calibration_games_remaining?: number;
        recruitment_level?: number;
        has_new_notifications?: boolean;
        is_league_admin?: boolean;
        casual_games_played?: number;
        solo_competitive_games_played?: number;
        party_competitive_games_played?: number;
        casual_1v1_games_played?: number;
        curr_all_hero_challenge_id?: number;
        play_time_points?: number;
        account_flags?: number;
        play_time_level?: number;
        player_behavior_seq_num_last_report?: number;
        player_behavior_score_last_report?: number;
        player_behavior_report_old_data?: boolean;
        tourney_skill_level?: number;
        tourney_recent_participation_date?: number;
        anchored_phone_number_id?: string;
        ranked_matchmaking_ban_until_date?: number;
        recent_game_time_1?: number;
        recent_game_time_2?: number;
        recent_game_time_3?: number;
        favorite_team_packed?: string;
        recent_report_time?: number;
        custom_game_disabled_until_date?: number;
        recent_win_time_1?: number;
        recent_win_time_2?: number;
        recent_win_time_3?: number;
        coach_rating?: number;
        queue_points?: number;
        role_handicaps?: {
            role?: number;
            handicap?: number;
        }[];
        event_mode_recent_time?: number;
        mmr_recalibration_time?: number;
    } & {
        account_id?: number;
        wins?: number;
        losses?: number;
        xp?: number;
        level?: number;
        initial_skill?: number;
        leaver_count?: number;
        secondary_leaver_count?: number;
        low_priority_until_date?: number;
        prevent_text_chat_until_date?: number;
        prevent_voice_until_date?: number;
        prevent_public_text_chat_until_date?: number;
        prevent_new_player_chat_until_date?: number;
        last_abandoned_game_date?: number;
        last_secondary_abandoned_game_date?: number;
        leaver_penalty_count?: number;
        completed_game_streak?: number;
        account_disabled_until_date?: number;
        account_disabled_count?: number;
        match_disabled_until_date?: number;
        match_disabled_count?: number;
        shutdownlawterminatetimestamp?: number;
        low_priority_games_remaining?: number;
        competitive_rank?: number;
        competitive_calibration_games_remaining?: number;
        recruitment_level?: number;
        has_new_notifications?: boolean;
        is_league_admin?: boolean;
        casual_games_played?: number;
        solo_competitive_games_played?: number;
        party_competitive_games_played?: number;
        casual_1v1_games_played?: number;
        curr_all_hero_challenge_id?: number;
        play_time_points?: number;
        account_flags?: number;
        play_time_level?: number;
        player_behavior_seq_num_last_report?: number;
        player_behavior_score_last_report?: number;
        player_behavior_report_old_data?: boolean;
        tourney_skill_level?: number;
        tourney_recent_participation_date?: number;
        anchored_phone_number_id?: string;
        ranked_matchmaking_ban_until_date?: number;
        recent_game_time_1?: number;
        recent_game_time_2?: number;
        recent_game_time_3?: number;
        favorite_team_packed?: string;
        recent_report_time?: number;
        custom_game_disabled_until_date?: number;
        recent_win_time_1?: number;
        recent_win_time_2?: number;
        recent_win_time_3?: number;
        coach_rating?: number;
        queue_points?: number;
        role_handicaps?: {
            role?: number;
            handicap?: number;
        }[] & ({
            role?: number;
            handicap?: number;
        } & {
            role?: number;
            handicap?: number;
        } & { [K in Exclude<keyof I["role_handicaps"][number], keyof CSODOTAGameAccountClient_RoleHandicap>]: never; })[] & { [K_1 in Exclude<keyof I["role_handicaps"], keyof {
            role?: number;
            handicap?: number;
        }[]>]: never; };
        event_mode_recent_time?: number;
        mmr_recalibration_time?: number;
    } & { [K_2 in Exclude<keyof I, keyof CSODOTAGameAccountClient>]: never; }>(base?: I): CSODOTAGameAccountClient;
    fromPartial<I_1 extends {
        account_id?: number;
        wins?: number;
        losses?: number;
        xp?: number;
        level?: number;
        initial_skill?: number;
        leaver_count?: number;
        secondary_leaver_count?: number;
        low_priority_until_date?: number;
        prevent_text_chat_until_date?: number;
        prevent_voice_until_date?: number;
        prevent_public_text_chat_until_date?: number;
        prevent_new_player_chat_until_date?: number;
        last_abandoned_game_date?: number;
        last_secondary_abandoned_game_date?: number;
        leaver_penalty_count?: number;
        completed_game_streak?: number;
        account_disabled_until_date?: number;
        account_disabled_count?: number;
        match_disabled_until_date?: number;
        match_disabled_count?: number;
        shutdownlawterminatetimestamp?: number;
        low_priority_games_remaining?: number;
        competitive_rank?: number;
        competitive_calibration_games_remaining?: number;
        recruitment_level?: number;
        has_new_notifications?: boolean;
        is_league_admin?: boolean;
        casual_games_played?: number;
        solo_competitive_games_played?: number;
        party_competitive_games_played?: number;
        casual_1v1_games_played?: number;
        curr_all_hero_challenge_id?: number;
        play_time_points?: number;
        account_flags?: number;
        play_time_level?: number;
        player_behavior_seq_num_last_report?: number;
        player_behavior_score_last_report?: number;
        player_behavior_report_old_data?: boolean;
        tourney_skill_level?: number;
        tourney_recent_participation_date?: number;
        anchored_phone_number_id?: string;
        ranked_matchmaking_ban_until_date?: number;
        recent_game_time_1?: number;
        recent_game_time_2?: number;
        recent_game_time_3?: number;
        favorite_team_packed?: string;
        recent_report_time?: number;
        custom_game_disabled_until_date?: number;
        recent_win_time_1?: number;
        recent_win_time_2?: number;
        recent_win_time_3?: number;
        coach_rating?: number;
        queue_points?: number;
        role_handicaps?: {
            role?: number;
            handicap?: number;
        }[];
        event_mode_recent_time?: number;
        mmr_recalibration_time?: number;
    } & {
        account_id?: number;
        wins?: number;
        losses?: number;
        xp?: number;
        level?: number;
        initial_skill?: number;
        leaver_count?: number;
        secondary_leaver_count?: number;
        low_priority_until_date?: number;
        prevent_text_chat_until_date?: number;
        prevent_voice_until_date?: number;
        prevent_public_text_chat_until_date?: number;
        prevent_new_player_chat_until_date?: number;
        last_abandoned_game_date?: number;
        last_secondary_abandoned_game_date?: number;
        leaver_penalty_count?: number;
        completed_game_streak?: number;
        account_disabled_until_date?: number;
        account_disabled_count?: number;
        match_disabled_until_date?: number;
        match_disabled_count?: number;
        shutdownlawterminatetimestamp?: number;
        low_priority_games_remaining?: number;
        competitive_rank?: number;
        competitive_calibration_games_remaining?: number;
        recruitment_level?: number;
        has_new_notifications?: boolean;
        is_league_admin?: boolean;
        casual_games_played?: number;
        solo_competitive_games_played?: number;
        party_competitive_games_played?: number;
        casual_1v1_games_played?: number;
        curr_all_hero_challenge_id?: number;
        play_time_points?: number;
        account_flags?: number;
        play_time_level?: number;
        player_behavior_seq_num_last_report?: number;
        player_behavior_score_last_report?: number;
        player_behavior_report_old_data?: boolean;
        tourney_skill_level?: number;
        tourney_recent_participation_date?: number;
        anchored_phone_number_id?: string;
        ranked_matchmaking_ban_until_date?: number;
        recent_game_time_1?: number;
        recent_game_time_2?: number;
        recent_game_time_3?: number;
        favorite_team_packed?: string;
        recent_report_time?: number;
        custom_game_disabled_until_date?: number;
        recent_win_time_1?: number;
        recent_win_time_2?: number;
        recent_win_time_3?: number;
        coach_rating?: number;
        queue_points?: number;
        role_handicaps?: {
            role?: number;
            handicap?: number;
        }[] & ({
            role?: number;
            handicap?: number;
        } & {
            role?: number;
            handicap?: number;
        } & { [K_3 in Exclude<keyof I_1["role_handicaps"][number], keyof CSODOTAGameAccountClient_RoleHandicap>]: never; })[] & { [K_4 in Exclude<keyof I_1["role_handicaps"], keyof {
            role?: number;
            handicap?: number;
        }[]>]: never; };
        event_mode_recent_time?: number;
        mmr_recalibration_time?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CSODOTAGameAccountClient>]: never; }>(object: I_1): CSODOTAGameAccountClient;
};
export declare const CSODOTAGameAccountClient_RoleHandicap: {
    fromJSON(object: any): CSODOTAGameAccountClient_RoleHandicap;
    toJSON(message: CSODOTAGameAccountClient_RoleHandicap): unknown;
    create<I extends {
        role?: number;
        handicap?: number;
    } & {
        role?: number;
        handicap?: number;
    } & { [K in Exclude<keyof I, keyof CSODOTAGameAccountClient_RoleHandicap>]: never; }>(base?: I): CSODOTAGameAccountClient_RoleHandicap;
    fromPartial<I_1 extends {
        role?: number;
        handicap?: number;
    } & {
        role?: number;
        handicap?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CSODOTAGameAccountClient_RoleHandicap>]: never; }>(object: I_1): CSODOTAGameAccountClient_RoleHandicap;
};
export declare const CSODOTAGameAccountPlus: {
    fromJSON(object: any): CSODOTAGameAccountPlus;
    toJSON(message: CSODOTAGameAccountPlus): unknown;
    create<I extends {
        account_id?: number;
        original_start_date?: number;
        plus_flags?: number;
        plus_status?: number;
        prepaid_time_start?: number;
        prepaid_time_balance?: number;
        next_payment_date?: number;
        steam_agreement_id?: string;
    } & {
        account_id?: number;
        original_start_date?: number;
        plus_flags?: number;
        plus_status?: number;
        prepaid_time_start?: number;
        prepaid_time_balance?: number;
        next_payment_date?: number;
        steam_agreement_id?: string;
    } & { [K in Exclude<keyof I, keyof CSODOTAGameAccountPlus>]: never; }>(base?: I): CSODOTAGameAccountPlus;
    fromPartial<I_1 extends {
        account_id?: number;
        original_start_date?: number;
        plus_flags?: number;
        plus_status?: number;
        prepaid_time_start?: number;
        prepaid_time_balance?: number;
        next_payment_date?: number;
        steam_agreement_id?: string;
    } & {
        account_id?: number;
        original_start_date?: number;
        plus_flags?: number;
        plus_status?: number;
        prepaid_time_start?: number;
        prepaid_time_balance?: number;
        next_payment_date?: number;
        steam_agreement_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CSODOTAGameAccountPlus>]: never; }>(object: I_1): CSODOTAGameAccountPlus;
};
export declare const CMsgLobbyFeaturedGamemodeProgress: {
    fromJSON(object: any): CMsgLobbyFeaturedGamemodeProgress;
    toJSON(message: CMsgLobbyFeaturedGamemodeProgress): unknown;
    create<I extends {
        accounts?: {
            account_id?: number;
            current_value?: number;
            max_value?: number;
        }[];
    } & {
        accounts?: {
            account_id?: number;
            current_value?: number;
            max_value?: number;
        }[] & ({
            account_id?: number;
            current_value?: number;
            max_value?: number;
        } & {
            account_id?: number;
            current_value?: number;
            max_value?: number;
        } & { [K in Exclude<keyof I["accounts"][number], keyof CMsgLobbyFeaturedGamemodeProgress_AccountProgress>]: never; })[] & { [K_1 in Exclude<keyof I["accounts"], keyof {
            account_id?: number;
            current_value?: number;
            max_value?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "accounts">]: never; }>(base?: I): CMsgLobbyFeaturedGamemodeProgress;
    fromPartial<I_1 extends {
        accounts?: {
            account_id?: number;
            current_value?: number;
            max_value?: number;
        }[];
    } & {
        accounts?: {
            account_id?: number;
            current_value?: number;
            max_value?: number;
        }[] & ({
            account_id?: number;
            current_value?: number;
            max_value?: number;
        } & {
            account_id?: number;
            current_value?: number;
            max_value?: number;
        } & { [K_3 in Exclude<keyof I_1["accounts"][number], keyof CMsgLobbyFeaturedGamemodeProgress_AccountProgress>]: never; })[] & { [K_4 in Exclude<keyof I_1["accounts"], keyof {
            account_id?: number;
            current_value?: number;
            max_value?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "accounts">]: never; }>(object: I_1): CMsgLobbyFeaturedGamemodeProgress;
};
export declare const CMsgLobbyFeaturedGamemodeProgress_AccountProgress: {
    fromJSON(object: any): CMsgLobbyFeaturedGamemodeProgress_AccountProgress;
    toJSON(message: CMsgLobbyFeaturedGamemodeProgress_AccountProgress): unknown;
    create<I extends {
        account_id?: number;
        current_value?: number;
        max_value?: number;
    } & {
        account_id?: number;
        current_value?: number;
        max_value?: number;
    } & { [K in Exclude<keyof I, keyof CMsgLobbyFeaturedGamemodeProgress_AccountProgress>]: never; }>(base?: I): CMsgLobbyFeaturedGamemodeProgress_AccountProgress;
    fromPartial<I_1 extends {
        account_id?: number;
        current_value?: number;
        max_value?: number;
    } & {
        account_id?: number;
        current_value?: number;
        max_value?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgLobbyFeaturedGamemodeProgress_AccountProgress>]: never; }>(object: I_1): CMsgLobbyFeaturedGamemodeProgress_AccountProgress;
};
export declare const CMsgBattleCupVictory: {
    fromJSON(object: any): CMsgBattleCupVictory;
    toJSON(message: CMsgBattleCupVictory): unknown;
    create<I extends {
        account_id?: number;
        win_date?: number;
        valid_until?: number;
        skill_level?: number;
        tournament_id?: number;
        division_id?: number;
        team_id?: number;
        streak?: number;
        trophy_id?: number;
    } & {
        account_id?: number;
        win_date?: number;
        valid_until?: number;
        skill_level?: number;
        tournament_id?: number;
        division_id?: number;
        team_id?: number;
        streak?: number;
        trophy_id?: number;
    } & { [K in Exclude<keyof I, keyof CMsgBattleCupVictory>]: never; }>(base?: I): CMsgBattleCupVictory;
    fromPartial<I_1 extends {
        account_id?: number;
        win_date?: number;
        valid_until?: number;
        skill_level?: number;
        tournament_id?: number;
        division_id?: number;
        team_id?: number;
        streak?: number;
        trophy_id?: number;
    } & {
        account_id?: number;
        win_date?: number;
        valid_until?: number;
        skill_level?: number;
        tournament_id?: number;
        division_id?: number;
        team_id?: number;
        streak?: number;
        trophy_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgBattleCupVictory>]: never; }>(object: I_1): CMsgBattleCupVictory;
};
export declare const CMsgLobbyBattleCupVictoryList: {
    fromJSON(object: any): CMsgLobbyBattleCupVictoryList;
    toJSON(message: CMsgLobbyBattleCupVictoryList): unknown;
    create<I extends {
        winners?: {
            account_id?: number;
            win_date?: number;
            valid_until?: number;
            skill_level?: number;
            tournament_id?: number;
            division_id?: number;
            team_id?: number;
            streak?: number;
            trophy_id?: number;
        }[];
    } & {
        winners?: {
            account_id?: number;
            win_date?: number;
            valid_until?: number;
            skill_level?: number;
            tournament_id?: number;
            division_id?: number;
            team_id?: number;
            streak?: number;
            trophy_id?: number;
        }[] & ({
            account_id?: number;
            win_date?: number;
            valid_until?: number;
            skill_level?: number;
            tournament_id?: number;
            division_id?: number;
            team_id?: number;
            streak?: number;
            trophy_id?: number;
        } & {
            account_id?: number;
            win_date?: number;
            valid_until?: number;
            skill_level?: number;
            tournament_id?: number;
            division_id?: number;
            team_id?: number;
            streak?: number;
            trophy_id?: number;
        } & { [K in Exclude<keyof I["winners"][number], keyof CMsgBattleCupVictory>]: never; })[] & { [K_1 in Exclude<keyof I["winners"], keyof {
            account_id?: number;
            win_date?: number;
            valid_until?: number;
            skill_level?: number;
            tournament_id?: number;
            division_id?: number;
            team_id?: number;
            streak?: number;
            trophy_id?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "winners">]: never; }>(base?: I): CMsgLobbyBattleCupVictoryList;
    fromPartial<I_1 extends {
        winners?: {
            account_id?: number;
            win_date?: number;
            valid_until?: number;
            skill_level?: number;
            tournament_id?: number;
            division_id?: number;
            team_id?: number;
            streak?: number;
            trophy_id?: number;
        }[];
    } & {
        winners?: {
            account_id?: number;
            win_date?: number;
            valid_until?: number;
            skill_level?: number;
            tournament_id?: number;
            division_id?: number;
            team_id?: number;
            streak?: number;
            trophy_id?: number;
        }[] & ({
            account_id?: number;
            win_date?: number;
            valid_until?: number;
            skill_level?: number;
            tournament_id?: number;
            division_id?: number;
            team_id?: number;
            streak?: number;
            trophy_id?: number;
        } & {
            account_id?: number;
            win_date?: number;
            valid_until?: number;
            skill_level?: number;
            tournament_id?: number;
            division_id?: number;
            team_id?: number;
            streak?: number;
            trophy_id?: number;
        } & { [K_3 in Exclude<keyof I_1["winners"][number], keyof CMsgBattleCupVictory>]: never; })[] & { [K_4 in Exclude<keyof I_1["winners"], keyof {
            account_id?: number;
            win_date?: number;
            valid_until?: number;
            skill_level?: number;
            tournament_id?: number;
            division_id?: number;
            team_id?: number;
            streak?: number;
            trophy_id?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "winners">]: never; }>(object: I_1): CMsgLobbyBattleCupVictoryList;
};
export declare const CMsgDOTABroadcastNotification: {
    fromJSON(object: any): CMsgDOTABroadcastNotification;
    toJSON(message: CMsgDOTABroadcastNotification): unknown;
    create<I extends {
        message?: string;
    } & {
        message?: string;
    } & { [K in Exclude<keyof I, "message">]: never; }>(base?: I): CMsgDOTABroadcastNotification;
    fromPartial<I_1 extends {
        message?: string;
    } & {
        message?: string;
    } & { [K_1 in Exclude<keyof I_1, "message">]: never; }>(object: I_1): CMsgDOTABroadcastNotification;
};
export declare const CProtoItemHeroStatue: {
    fromJSON(object: any): CProtoItemHeroStatue;
    toJSON(message: CProtoItemHeroStatue): unknown;
    create<I extends {
        hero_id?: number;
        status_effect_index?: number;
        sequence_name?: string;
        cycle?: number;
        wearable?: number[];
        inscription?: string;
        style?: number[];
        tournament_drop?: boolean;
    } & {
        hero_id?: number;
        status_effect_index?: number;
        sequence_name?: string;
        cycle?: number;
        wearable?: number[] & number[] & { [K in Exclude<keyof I["wearable"], keyof number[]>]: never; };
        inscription?: string;
        style?: number[] & number[] & { [K_1 in Exclude<keyof I["style"], keyof number[]>]: never; };
        tournament_drop?: boolean;
    } & { [K_2 in Exclude<keyof I, keyof CProtoItemHeroStatue>]: never; }>(base?: I): CProtoItemHeroStatue;
    fromPartial<I_1 extends {
        hero_id?: number;
        status_effect_index?: number;
        sequence_name?: string;
        cycle?: number;
        wearable?: number[];
        inscription?: string;
        style?: number[];
        tournament_drop?: boolean;
    } & {
        hero_id?: number;
        status_effect_index?: number;
        sequence_name?: string;
        cycle?: number;
        wearable?: number[] & number[] & { [K_3 in Exclude<keyof I_1["wearable"], keyof number[]>]: never; };
        inscription?: string;
        style?: number[] & number[] & { [K_4 in Exclude<keyof I_1["style"], keyof number[]>]: never; };
        tournament_drop?: boolean;
    } & { [K_5 in Exclude<keyof I_1, keyof CProtoItemHeroStatue>]: never; }>(object: I_1): CProtoItemHeroStatue;
};
export declare const CMatchPlayerAbilityUpgrade: {
    fromJSON(object: any): CMatchPlayerAbilityUpgrade;
    toJSON(message: CMatchPlayerAbilityUpgrade): unknown;
    create<I extends {
        ability?: number;
        time?: number;
    } & {
        ability?: number;
        time?: number;
    } & { [K in Exclude<keyof I, keyof CMatchPlayerAbilityUpgrade>]: never; }>(base?: I): CMatchPlayerAbilityUpgrade;
    fromPartial<I_1 extends {
        ability?: number;
        time?: number;
    } & {
        ability?: number;
        time?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMatchPlayerAbilityUpgrade>]: never; }>(object: I_1): CMatchPlayerAbilityUpgrade;
};
export declare const CMatchPlayerTimedStats: {
    fromJSON(object: any): CMatchPlayerTimedStats;
    toJSON(message: CMatchPlayerTimedStats): unknown;
    create<I extends {
        time?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
        net_worth?: number;
        xp?: number;
        last_hits?: number;
        denies?: number;
        bounty_rune_gold?: number;
        range_creep_upgrade_gold?: number;
        observer_wards_dewarded?: number;
        reliable_gold_earned?: number;
        gold_loss_prevented?: number;
        hero_kill_gold?: number;
        creep_kill_gold?: number;
        building_gold?: number;
        other_gold?: number;
        comeback_gold?: number;
        experimental_gold?: number;
        experimental2_gold?: number;
        creep_deny_gold?: number;
        tp_scrolls_purchased_1?: number;
        tp_scrolls_purchased_2?: number;
        tp_scrolls_purchased_3?: number;
        tp_scrolls_purchased_4?: number;
        tp_scrolls_purchased_5?: number;
        neutral_gold?: number;
        courier_gold?: number;
        roshan_gold?: number;
        income_gold?: number;
        custom_stats_1?: number;
        custom_stats_2?: number;
        custom_stats_3?: number;
        custom_stats_4?: number;
        custom_stats_5?: number;
        item_value?: number;
        support_gold_spent?: number;
        camps_stacked?: number;
        wards_placed?: number;
        triple_kills?: number;
        rampages?: number;
    } & {
        time?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
        net_worth?: number;
        xp?: number;
        last_hits?: number;
        denies?: number;
        bounty_rune_gold?: number;
        range_creep_upgrade_gold?: number;
        observer_wards_dewarded?: number;
        reliable_gold_earned?: number;
        gold_loss_prevented?: number;
        hero_kill_gold?: number;
        creep_kill_gold?: number;
        building_gold?: number;
        other_gold?: number;
        comeback_gold?: number;
        experimental_gold?: number;
        experimental2_gold?: number;
        creep_deny_gold?: number;
        tp_scrolls_purchased_1?: number;
        tp_scrolls_purchased_2?: number;
        tp_scrolls_purchased_3?: number;
        tp_scrolls_purchased_4?: number;
        tp_scrolls_purchased_5?: number;
        neutral_gold?: number;
        courier_gold?: number;
        roshan_gold?: number;
        income_gold?: number;
        custom_stats_1?: number;
        custom_stats_2?: number;
        custom_stats_3?: number;
        custom_stats_4?: number;
        custom_stats_5?: number;
        item_value?: number;
        support_gold_spent?: number;
        camps_stacked?: number;
        wards_placed?: number;
        triple_kills?: number;
        rampages?: number;
    } & { [K in Exclude<keyof I, keyof CMatchPlayerTimedStats>]: never; }>(base?: I): CMatchPlayerTimedStats;
    fromPartial<I_1 extends {
        time?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
        net_worth?: number;
        xp?: number;
        last_hits?: number;
        denies?: number;
        bounty_rune_gold?: number;
        range_creep_upgrade_gold?: number;
        observer_wards_dewarded?: number;
        reliable_gold_earned?: number;
        gold_loss_prevented?: number;
        hero_kill_gold?: number;
        creep_kill_gold?: number;
        building_gold?: number;
        other_gold?: number;
        comeback_gold?: number;
        experimental_gold?: number;
        experimental2_gold?: number;
        creep_deny_gold?: number;
        tp_scrolls_purchased_1?: number;
        tp_scrolls_purchased_2?: number;
        tp_scrolls_purchased_3?: number;
        tp_scrolls_purchased_4?: number;
        tp_scrolls_purchased_5?: number;
        neutral_gold?: number;
        courier_gold?: number;
        roshan_gold?: number;
        income_gold?: number;
        custom_stats_1?: number;
        custom_stats_2?: number;
        custom_stats_3?: number;
        custom_stats_4?: number;
        custom_stats_5?: number;
        item_value?: number;
        support_gold_spent?: number;
        camps_stacked?: number;
        wards_placed?: number;
        triple_kills?: number;
        rampages?: number;
    } & {
        time?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
        net_worth?: number;
        xp?: number;
        last_hits?: number;
        denies?: number;
        bounty_rune_gold?: number;
        range_creep_upgrade_gold?: number;
        observer_wards_dewarded?: number;
        reliable_gold_earned?: number;
        gold_loss_prevented?: number;
        hero_kill_gold?: number;
        creep_kill_gold?: number;
        building_gold?: number;
        other_gold?: number;
        comeback_gold?: number;
        experimental_gold?: number;
        experimental2_gold?: number;
        creep_deny_gold?: number;
        tp_scrolls_purchased_1?: number;
        tp_scrolls_purchased_2?: number;
        tp_scrolls_purchased_3?: number;
        tp_scrolls_purchased_4?: number;
        tp_scrolls_purchased_5?: number;
        neutral_gold?: number;
        courier_gold?: number;
        roshan_gold?: number;
        income_gold?: number;
        custom_stats_1?: number;
        custom_stats_2?: number;
        custom_stats_3?: number;
        custom_stats_4?: number;
        custom_stats_5?: number;
        item_value?: number;
        support_gold_spent?: number;
        camps_stacked?: number;
        wards_placed?: number;
        triple_kills?: number;
        rampages?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMatchPlayerTimedStats>]: never; }>(object: I_1): CMatchPlayerTimedStats;
};
export declare const CMatchTeamTimedStats: {
    fromJSON(object: any): CMatchTeamTimedStats;
    toJSON(message: CMatchTeamTimedStats): unknown;
    create<I extends {
        time?: number;
        enemy_towers_killed?: number;
        enemy_barracks_killed?: number;
        enemy_towers_status?: number;
        enemy_barracks_status?: number;
    } & {
        time?: number;
        enemy_towers_killed?: number;
        enemy_barracks_killed?: number;
        enemy_towers_status?: number;
        enemy_barracks_status?: number;
    } & { [K in Exclude<keyof I, keyof CMatchTeamTimedStats>]: never; }>(base?: I): CMatchTeamTimedStats;
    fromPartial<I_1 extends {
        time?: number;
        enemy_towers_killed?: number;
        enemy_barracks_killed?: number;
        enemy_towers_status?: number;
        enemy_barracks_status?: number;
    } & {
        time?: number;
        enemy_towers_killed?: number;
        enemy_barracks_killed?: number;
        enemy_towers_status?: number;
        enemy_barracks_status?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMatchTeamTimedStats>]: never; }>(object: I_1): CMatchTeamTimedStats;
};
export declare const CMatchAdditionalUnitInventory: {
    fromJSON(object: any): CMatchAdditionalUnitInventory;
    toJSON(message: CMatchAdditionalUnitInventory): unknown;
    create<I extends {
        unit_name?: string;
        items?: number[];
    } & {
        unit_name?: string;
        items?: number[] & number[] & { [K in Exclude<keyof I["items"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CMatchAdditionalUnitInventory>]: never; }>(base?: I): CMatchAdditionalUnitInventory;
    fromPartial<I_1 extends {
        unit_name?: string;
        items?: number[];
    } & {
        unit_name?: string;
        items?: number[] & number[] & { [K_2 in Exclude<keyof I_1["items"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CMatchAdditionalUnitInventory>]: never; }>(object: I_1): CMatchAdditionalUnitInventory;
};
export declare const CMatchPlayerPermanentBuff: {
    fromJSON(object: any): CMatchPlayerPermanentBuff;
    toJSON(message: CMatchPlayerPermanentBuff): unknown;
    create<I extends {
        permanent_buff?: number;
        stack_count?: number;
        grant_time?: number;
    } & {
        permanent_buff?: number;
        stack_count?: number;
        grant_time?: number;
    } & { [K in Exclude<keyof I, keyof CMatchPlayerPermanentBuff>]: never; }>(base?: I): CMatchPlayerPermanentBuff;
    fromPartial<I_1 extends {
        permanent_buff?: number;
        stack_count?: number;
        grant_time?: number;
    } & {
        permanent_buff?: number;
        stack_count?: number;
        grant_time?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMatchPlayerPermanentBuff>]: never; }>(object: I_1): CMatchPlayerPermanentBuff;
};
export declare const CMatchHeroSelectEvent: {
    fromJSON(object: any): CMatchHeroSelectEvent;
    toJSON(message: CMatchHeroSelectEvent): unknown;
    create<I extends {
        is_pick?: boolean;
        team?: number;
        hero_id?: number;
    } & {
        is_pick?: boolean;
        team?: number;
        hero_id?: number;
    } & { [K in Exclude<keyof I, keyof CMatchHeroSelectEvent>]: never; }>(base?: I): CMatchHeroSelectEvent;
    fromPartial<I_1 extends {
        is_pick?: boolean;
        team?: number;
        hero_id?: number;
    } & {
        is_pick?: boolean;
        team?: number;
        hero_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMatchHeroSelectEvent>]: never; }>(object: I_1): CMatchHeroSelectEvent;
};
export declare const CMatchClip: {
    fromJSON(object: any): CMatchClip;
    toJSON(message: CMatchClip): unknown;
    create<I extends {
        match_id?: string;
        player_account_id?: number;
        game_time_seconds?: number;
        duration_seconds?: number;
        player_id?: number;
        hero_id?: number;
        ability_id?: number;
        camera_mode?: number;
        comment?: string;
    } & {
        match_id?: string;
        player_account_id?: number;
        game_time_seconds?: number;
        duration_seconds?: number;
        player_id?: number;
        hero_id?: number;
        ability_id?: number;
        camera_mode?: number;
        comment?: string;
    } & { [K in Exclude<keyof I, keyof CMatchClip>]: never; }>(base?: I): CMatchClip;
    fromPartial<I_1 extends {
        match_id?: string;
        player_account_id?: number;
        game_time_seconds?: number;
        duration_seconds?: number;
        player_id?: number;
        hero_id?: number;
        ability_id?: number;
        camera_mode?: number;
        comment?: string;
    } & {
        match_id?: string;
        player_account_id?: number;
        game_time_seconds?: number;
        duration_seconds?: number;
        player_id?: number;
        hero_id?: number;
        ability_id?: number;
        camera_mode?: number;
        comment?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMatchClip>]: never; }>(object: I_1): CMatchClip;
};
export declare const CPartySearchClientParty: {
    fromJSON(object: any): CPartySearchClientParty;
    toJSON(message: CPartySearchClientParty): unknown;
    create<I extends {
        party_id?: string;
        beacon_type?: number;
        party_members?: number[];
    } & {
        party_id?: string;
        beacon_type?: number;
        party_members?: number[] & number[] & { [K in Exclude<keyof I["party_members"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CPartySearchClientParty>]: never; }>(base?: I): CPartySearchClientParty;
    fromPartial<I_1 extends {
        party_id?: string;
        beacon_type?: number;
        party_members?: number[];
    } & {
        party_id?: string;
        beacon_type?: number;
        party_members?: number[] & number[] & { [K_2 in Exclude<keyof I_1["party_members"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CPartySearchClientParty>]: never; }>(object: I_1): CPartySearchClientParty;
};
export declare const CMsgDOTAHasItemQuery: {
    fromJSON(object: any): CMsgDOTAHasItemQuery;
    toJSON(message: CMsgDOTAHasItemQuery): unknown;
    create<I extends {
        account_id?: number;
        item_id?: string;
    } & {
        account_id?: number;
        item_id?: string;
    } & { [K in Exclude<keyof I, keyof CMsgDOTAHasItemQuery>]: never; }>(base?: I): CMsgDOTAHasItemQuery;
    fromPartial<I_1 extends {
        account_id?: number;
        item_id?: string;
    } & {
        account_id?: number;
        item_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTAHasItemQuery>]: never; }>(object: I_1): CMsgDOTAHasItemQuery;
};
export declare const CMsgDOTAHasItemResponse: {
    fromJSON(object: any): CMsgDOTAHasItemResponse;
    toJSON(message: CMsgDOTAHasItemResponse): unknown;
    create<I extends {
        has_item?: boolean;
    } & {
        has_item?: boolean;
    } & { [K in Exclude<keyof I, "has_item">]: never; }>(base?: I): CMsgDOTAHasItemResponse;
    fromPartial<I_1 extends {
        has_item?: boolean;
    } & {
        has_item?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "has_item">]: never; }>(object: I_1): CMsgDOTAHasItemResponse;
};
export declare const CMsgGCGetPlayerCardItemInfo: {
    fromJSON(object: any): CMsgGCGetPlayerCardItemInfo;
    toJSON(message: CMsgGCGetPlayerCardItemInfo): unknown;
    create<I extends {
        account_id?: number;
        player_card_item_ids?: string[];
        all_for_event?: number;
    } & {
        account_id?: number;
        player_card_item_ids?: string[] & string[] & { [K in Exclude<keyof I["player_card_item_ids"], keyof string[]>]: never; };
        all_for_event?: number;
    } & { [K_1 in Exclude<keyof I, keyof CMsgGCGetPlayerCardItemInfo>]: never; }>(base?: I): CMsgGCGetPlayerCardItemInfo;
    fromPartial<I_1 extends {
        account_id?: number;
        player_card_item_ids?: string[];
        all_for_event?: number;
    } & {
        account_id?: number;
        player_card_item_ids?: string[] & string[] & { [K_2 in Exclude<keyof I_1["player_card_item_ids"], keyof string[]>]: never; };
        all_for_event?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgGCGetPlayerCardItemInfo>]: never; }>(object: I_1): CMsgGCGetPlayerCardItemInfo;
};
export declare const CMsgGCGetPlayerCardItemInfoResponse: {
    fromJSON(object: any): CMsgGCGetPlayerCardItemInfoResponse;
    toJSON(message: CMsgGCGetPlayerCardItemInfoResponse): unknown;
    create<I extends {
        player_card_infos?: {
            player_card_item_id?: string;
            account_id?: number;
            packed_bonuses?: string;
        }[];
    } & {
        player_card_infos?: {
            player_card_item_id?: string;
            account_id?: number;
            packed_bonuses?: string;
        }[] & ({
            player_card_item_id?: string;
            account_id?: number;
            packed_bonuses?: string;
        } & {
            player_card_item_id?: string;
            account_id?: number;
            packed_bonuses?: string;
        } & { [K in Exclude<keyof I["player_card_infos"][number], keyof CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo>]: never; })[] & { [K_1 in Exclude<keyof I["player_card_infos"], keyof {
            player_card_item_id?: string;
            account_id?: number;
            packed_bonuses?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "player_card_infos">]: never; }>(base?: I): CMsgGCGetPlayerCardItemInfoResponse;
    fromPartial<I_1 extends {
        player_card_infos?: {
            player_card_item_id?: string;
            account_id?: number;
            packed_bonuses?: string;
        }[];
    } & {
        player_card_infos?: {
            player_card_item_id?: string;
            account_id?: number;
            packed_bonuses?: string;
        }[] & ({
            player_card_item_id?: string;
            account_id?: number;
            packed_bonuses?: string;
        } & {
            player_card_item_id?: string;
            account_id?: number;
            packed_bonuses?: string;
        } & { [K_3 in Exclude<keyof I_1["player_card_infos"][number], keyof CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo>]: never; })[] & { [K_4 in Exclude<keyof I_1["player_card_infos"], keyof {
            player_card_item_id?: string;
            account_id?: number;
            packed_bonuses?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "player_card_infos">]: never; }>(object: I_1): CMsgGCGetPlayerCardItemInfoResponse;
};
export declare const CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo: {
    fromJSON(object: any): CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo;
    toJSON(message: CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo): unknown;
    create<I extends {
        player_card_item_id?: string;
        account_id?: number;
        packed_bonuses?: string;
    } & {
        player_card_item_id?: string;
        account_id?: number;
        packed_bonuses?: string;
    } & { [K in Exclude<keyof I, keyof CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo>]: never; }>(base?: I): CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo;
    fromPartial<I_1 extends {
        player_card_item_id?: string;
        account_id?: number;
        packed_bonuses?: string;
    } & {
        player_card_item_id?: string;
        account_id?: number;
        packed_bonuses?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo>]: never; }>(object: I_1): CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo;
};
export declare const CSODOTAMapLocationState: {
    fromJSON(object: any): CSODOTAMapLocationState;
    toJSON(message: CSODOTAMapLocationState): unknown;
    create<I extends {
        account_id?: number;
        location_id?: number;
        completed?: boolean;
    } & {
        account_id?: number;
        location_id?: number;
        completed?: boolean;
    } & { [K in Exclude<keyof I, keyof CSODOTAMapLocationState>]: never; }>(base?: I): CSODOTAMapLocationState;
    fromPartial<I_1 extends {
        account_id?: number;
        location_id?: number;
        completed?: boolean;
    } & {
        account_id?: number;
        location_id?: number;
        completed?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CSODOTAMapLocationState>]: never; }>(object: I_1): CSODOTAMapLocationState;
};
export declare const CMsgLeagueAdminList: {
    fromJSON(object: any): CMsgLeagueAdminList;
    toJSON(message: CMsgLeagueAdminList): unknown;
    create<I extends {
        account_ids?: number[];
    } & {
        account_ids?: number[] & number[] & { [K in Exclude<keyof I["account_ids"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, "account_ids">]: never; }>(base?: I): CMsgLeagueAdminList;
    fromPartial<I_1 extends {
        account_ids?: number[];
    } & {
        account_ids?: number[] & number[] & { [K_2 in Exclude<keyof I_1["account_ids"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "account_ids">]: never; }>(object: I_1): CMsgLeagueAdminList;
};
export declare const CMsgDOTAProfileCard: {
    fromJSON(object: any): CMsgDOTAProfileCard;
    toJSON(message: CMsgDOTAProfileCard): unknown;
    create<I extends {
        account_id?: number;
        slots?: {
            slot_id?: number;
            trophy?: {
                trophy_id?: number;
                trophy_score?: number;
            };
            stat?: {
                stat_id?: CMsgDOTAProfileCard_EStatID;
                stat_score?: number;
            };
            item?: {
                serialized_item?: string;
                item_id?: string;
            };
            hero?: {
                hero_id?: number;
                hero_wins?: number;
                hero_losses?: number;
            };
            emoticon?: {
                emoticon_id?: number;
            };
            team?: {
                team_id?: number;
            };
        }[];
        badge_points?: number;
        event_points?: number;
        event_id?: number;
        recent_battle_cup_victory?: {
            account_id?: number;
            win_date?: number;
            valid_until?: number;
            skill_level?: number;
            tournament_id?: number;
            division_id?: number;
            team_id?: number;
            streak?: number;
            trophy_id?: number;
        };
        rank_tier?: number;
        leaderboard_rank?: number;
        is_plus_subscriber?: boolean;
        plus_original_start_date?: number;
        rank_tier_score?: number;
        leaderboard_rank_core?: number;
        title?: number;
        favorite_team_packed?: string;
        lifetime_games?: number;
    } & {
        account_id?: number;
        slots?: {
            slot_id?: number;
            trophy?: {
                trophy_id?: number;
                trophy_score?: number;
            };
            stat?: {
                stat_id?: CMsgDOTAProfileCard_EStatID;
                stat_score?: number;
            };
            item?: {
                serialized_item?: string;
                item_id?: string;
            };
            hero?: {
                hero_id?: number;
                hero_wins?: number;
                hero_losses?: number;
            };
            emoticon?: {
                emoticon_id?: number;
            };
            team?: {
                team_id?: number;
            };
        }[] & ({
            slot_id?: number;
            trophy?: {
                trophy_id?: number;
                trophy_score?: number;
            };
            stat?: {
                stat_id?: CMsgDOTAProfileCard_EStatID;
                stat_score?: number;
            };
            item?: {
                serialized_item?: string;
                item_id?: string;
            };
            hero?: {
                hero_id?: number;
                hero_wins?: number;
                hero_losses?: number;
            };
            emoticon?: {
                emoticon_id?: number;
            };
            team?: {
                team_id?: number;
            };
        } & {
            slot_id?: number;
            trophy?: {
                trophy_id?: number;
                trophy_score?: number;
            } & {
                trophy_id?: number;
                trophy_score?: number;
            } & { [K in Exclude<keyof I["slots"][number]["trophy"], keyof CMsgDOTAProfileCard_Slot_Trophy>]: never; };
            stat?: {
                stat_id?: CMsgDOTAProfileCard_EStatID;
                stat_score?: number;
            } & {
                stat_id?: CMsgDOTAProfileCard_EStatID;
                stat_score?: number;
            } & { [K_1 in Exclude<keyof I["slots"][number]["stat"], keyof CMsgDOTAProfileCard_Slot_Stat>]: never; };
            item?: {
                serialized_item?: string;
                item_id?: string;
            } & {
                serialized_item?: string;
                item_id?: string;
            } & { [K_2 in Exclude<keyof I["slots"][number]["item"], keyof CMsgDOTAProfileCard_Slot_Item>]: never; };
            hero?: {
                hero_id?: number;
                hero_wins?: number;
                hero_losses?: number;
            } & {
                hero_id?: number;
                hero_wins?: number;
                hero_losses?: number;
            } & { [K_3 in Exclude<keyof I["slots"][number]["hero"], keyof CMsgDOTAProfileCard_Slot_Hero>]: never; };
            emoticon?: {
                emoticon_id?: number;
            } & {
                emoticon_id?: number;
            } & { [K_4 in Exclude<keyof I["slots"][number]["emoticon"], "emoticon_id">]: never; };
            team?: {
                team_id?: number;
            } & {
                team_id?: number;
            } & { [K_5 in Exclude<keyof I["slots"][number]["team"], "team_id">]: never; };
        } & { [K_6 in Exclude<keyof I["slots"][number], keyof CMsgDOTAProfileCard_Slot>]: never; })[] & { [K_7 in Exclude<keyof I["slots"], keyof {
            slot_id?: number;
            trophy?: {
                trophy_id?: number;
                trophy_score?: number;
            };
            stat?: {
                stat_id?: CMsgDOTAProfileCard_EStatID;
                stat_score?: number;
            };
            item?: {
                serialized_item?: string;
                item_id?: string;
            };
            hero?: {
                hero_id?: number;
                hero_wins?: number;
                hero_losses?: number;
            };
            emoticon?: {
                emoticon_id?: number;
            };
            team?: {
                team_id?: number;
            };
        }[]>]: never; };
        badge_points?: number;
        event_points?: number;
        event_id?: number;
        recent_battle_cup_victory?: {
            account_id?: number;
            win_date?: number;
            valid_until?: number;
            skill_level?: number;
            tournament_id?: number;
            division_id?: number;
            team_id?: number;
            streak?: number;
            trophy_id?: number;
        } & {
            account_id?: number;
            win_date?: number;
            valid_until?: number;
            skill_level?: number;
            tournament_id?: number;
            division_id?: number;
            team_id?: number;
            streak?: number;
            trophy_id?: number;
        } & { [K_8 in Exclude<keyof I["recent_battle_cup_victory"], keyof CMsgBattleCupVictory>]: never; };
        rank_tier?: number;
        leaderboard_rank?: number;
        is_plus_subscriber?: boolean;
        plus_original_start_date?: number;
        rank_tier_score?: number;
        leaderboard_rank_core?: number;
        title?: number;
        favorite_team_packed?: string;
        lifetime_games?: number;
    } & { [K_9 in Exclude<keyof I, keyof CMsgDOTAProfileCard>]: never; }>(base?: I): CMsgDOTAProfileCard;
    fromPartial<I_1 extends {
        account_id?: number;
        slots?: {
            slot_id?: number;
            trophy?: {
                trophy_id?: number;
                trophy_score?: number;
            };
            stat?: {
                stat_id?: CMsgDOTAProfileCard_EStatID;
                stat_score?: number;
            };
            item?: {
                serialized_item?: string;
                item_id?: string;
            };
            hero?: {
                hero_id?: number;
                hero_wins?: number;
                hero_losses?: number;
            };
            emoticon?: {
                emoticon_id?: number;
            };
            team?: {
                team_id?: number;
            };
        }[];
        badge_points?: number;
        event_points?: number;
        event_id?: number;
        recent_battle_cup_victory?: {
            account_id?: number;
            win_date?: number;
            valid_until?: number;
            skill_level?: number;
            tournament_id?: number;
            division_id?: number;
            team_id?: number;
            streak?: number;
            trophy_id?: number;
        };
        rank_tier?: number;
        leaderboard_rank?: number;
        is_plus_subscriber?: boolean;
        plus_original_start_date?: number;
        rank_tier_score?: number;
        leaderboard_rank_core?: number;
        title?: number;
        favorite_team_packed?: string;
        lifetime_games?: number;
    } & {
        account_id?: number;
        slots?: {
            slot_id?: number;
            trophy?: {
                trophy_id?: number;
                trophy_score?: number;
            };
            stat?: {
                stat_id?: CMsgDOTAProfileCard_EStatID;
                stat_score?: number;
            };
            item?: {
                serialized_item?: string;
                item_id?: string;
            };
            hero?: {
                hero_id?: number;
                hero_wins?: number;
                hero_losses?: number;
            };
            emoticon?: {
                emoticon_id?: number;
            };
            team?: {
                team_id?: number;
            };
        }[] & ({
            slot_id?: number;
            trophy?: {
                trophy_id?: number;
                trophy_score?: number;
            };
            stat?: {
                stat_id?: CMsgDOTAProfileCard_EStatID;
                stat_score?: number;
            };
            item?: {
                serialized_item?: string;
                item_id?: string;
            };
            hero?: {
                hero_id?: number;
                hero_wins?: number;
                hero_losses?: number;
            };
            emoticon?: {
                emoticon_id?: number;
            };
            team?: {
                team_id?: number;
            };
        } & {
            slot_id?: number;
            trophy?: {
                trophy_id?: number;
                trophy_score?: number;
            } & {
                trophy_id?: number;
                trophy_score?: number;
            } & { [K_10 in Exclude<keyof I_1["slots"][number]["trophy"], keyof CMsgDOTAProfileCard_Slot_Trophy>]: never; };
            stat?: {
                stat_id?: CMsgDOTAProfileCard_EStatID;
                stat_score?: number;
            } & {
                stat_id?: CMsgDOTAProfileCard_EStatID;
                stat_score?: number;
            } & { [K_11 in Exclude<keyof I_1["slots"][number]["stat"], keyof CMsgDOTAProfileCard_Slot_Stat>]: never; };
            item?: {
                serialized_item?: string;
                item_id?: string;
            } & {
                serialized_item?: string;
                item_id?: string;
            } & { [K_12 in Exclude<keyof I_1["slots"][number]["item"], keyof CMsgDOTAProfileCard_Slot_Item>]: never; };
            hero?: {
                hero_id?: number;
                hero_wins?: number;
                hero_losses?: number;
            } & {
                hero_id?: number;
                hero_wins?: number;
                hero_losses?: number;
            } & { [K_13 in Exclude<keyof I_1["slots"][number]["hero"], keyof CMsgDOTAProfileCard_Slot_Hero>]: never; };
            emoticon?: {
                emoticon_id?: number;
            } & {
                emoticon_id?: number;
            } & { [K_14 in Exclude<keyof I_1["slots"][number]["emoticon"], "emoticon_id">]: never; };
            team?: {
                team_id?: number;
            } & {
                team_id?: number;
            } & { [K_15 in Exclude<keyof I_1["slots"][number]["team"], "team_id">]: never; };
        } & { [K_16 in Exclude<keyof I_1["slots"][number], keyof CMsgDOTAProfileCard_Slot>]: never; })[] & { [K_17 in Exclude<keyof I_1["slots"], keyof {
            slot_id?: number;
            trophy?: {
                trophy_id?: number;
                trophy_score?: number;
            };
            stat?: {
                stat_id?: CMsgDOTAProfileCard_EStatID;
                stat_score?: number;
            };
            item?: {
                serialized_item?: string;
                item_id?: string;
            };
            hero?: {
                hero_id?: number;
                hero_wins?: number;
                hero_losses?: number;
            };
            emoticon?: {
                emoticon_id?: number;
            };
            team?: {
                team_id?: number;
            };
        }[]>]: never; };
        badge_points?: number;
        event_points?: number;
        event_id?: number;
        recent_battle_cup_victory?: {
            account_id?: number;
            win_date?: number;
            valid_until?: number;
            skill_level?: number;
            tournament_id?: number;
            division_id?: number;
            team_id?: number;
            streak?: number;
            trophy_id?: number;
        } & {
            account_id?: number;
            win_date?: number;
            valid_until?: number;
            skill_level?: number;
            tournament_id?: number;
            division_id?: number;
            team_id?: number;
            streak?: number;
            trophy_id?: number;
        } & { [K_18 in Exclude<keyof I_1["recent_battle_cup_victory"], keyof CMsgBattleCupVictory>]: never; };
        rank_tier?: number;
        leaderboard_rank?: number;
        is_plus_subscriber?: boolean;
        plus_original_start_date?: number;
        rank_tier_score?: number;
        leaderboard_rank_core?: number;
        title?: number;
        favorite_team_packed?: string;
        lifetime_games?: number;
    } & { [K_19 in Exclude<keyof I_1, keyof CMsgDOTAProfileCard>]: never; }>(object: I_1): CMsgDOTAProfileCard;
};
export declare const CMsgDOTAProfileCard_Slot: {
    fromJSON(object: any): CMsgDOTAProfileCard_Slot;
    toJSON(message: CMsgDOTAProfileCard_Slot): unknown;
    create<I extends {
        slot_id?: number;
        trophy?: {
            trophy_id?: number;
            trophy_score?: number;
        };
        stat?: {
            stat_id?: CMsgDOTAProfileCard_EStatID;
            stat_score?: number;
        };
        item?: {
            serialized_item?: string;
            item_id?: string;
        };
        hero?: {
            hero_id?: number;
            hero_wins?: number;
            hero_losses?: number;
        };
        emoticon?: {
            emoticon_id?: number;
        };
        team?: {
            team_id?: number;
        };
    } & {
        slot_id?: number;
        trophy?: {
            trophy_id?: number;
            trophy_score?: number;
        } & {
            trophy_id?: number;
            trophy_score?: number;
        } & { [K in Exclude<keyof I["trophy"], keyof CMsgDOTAProfileCard_Slot_Trophy>]: never; };
        stat?: {
            stat_id?: CMsgDOTAProfileCard_EStatID;
            stat_score?: number;
        } & {
            stat_id?: CMsgDOTAProfileCard_EStatID;
            stat_score?: number;
        } & { [K_1 in Exclude<keyof I["stat"], keyof CMsgDOTAProfileCard_Slot_Stat>]: never; };
        item?: {
            serialized_item?: string;
            item_id?: string;
        } & {
            serialized_item?: string;
            item_id?: string;
        } & { [K_2 in Exclude<keyof I["item"], keyof CMsgDOTAProfileCard_Slot_Item>]: never; };
        hero?: {
            hero_id?: number;
            hero_wins?: number;
            hero_losses?: number;
        } & {
            hero_id?: number;
            hero_wins?: number;
            hero_losses?: number;
        } & { [K_3 in Exclude<keyof I["hero"], keyof CMsgDOTAProfileCard_Slot_Hero>]: never; };
        emoticon?: {
            emoticon_id?: number;
        } & {
            emoticon_id?: number;
        } & { [K_4 in Exclude<keyof I["emoticon"], "emoticon_id">]: never; };
        team?: {
            team_id?: number;
        } & {
            team_id?: number;
        } & { [K_5 in Exclude<keyof I["team"], "team_id">]: never; };
    } & { [K_6 in Exclude<keyof I, keyof CMsgDOTAProfileCard_Slot>]: never; }>(base?: I): CMsgDOTAProfileCard_Slot;
    fromPartial<I_1 extends {
        slot_id?: number;
        trophy?: {
            trophy_id?: number;
            trophy_score?: number;
        };
        stat?: {
            stat_id?: CMsgDOTAProfileCard_EStatID;
            stat_score?: number;
        };
        item?: {
            serialized_item?: string;
            item_id?: string;
        };
        hero?: {
            hero_id?: number;
            hero_wins?: number;
            hero_losses?: number;
        };
        emoticon?: {
            emoticon_id?: number;
        };
        team?: {
            team_id?: number;
        };
    } & {
        slot_id?: number;
        trophy?: {
            trophy_id?: number;
            trophy_score?: number;
        } & {
            trophy_id?: number;
            trophy_score?: number;
        } & { [K_7 in Exclude<keyof I_1["trophy"], keyof CMsgDOTAProfileCard_Slot_Trophy>]: never; };
        stat?: {
            stat_id?: CMsgDOTAProfileCard_EStatID;
            stat_score?: number;
        } & {
            stat_id?: CMsgDOTAProfileCard_EStatID;
            stat_score?: number;
        } & { [K_8 in Exclude<keyof I_1["stat"], keyof CMsgDOTAProfileCard_Slot_Stat>]: never; };
        item?: {
            serialized_item?: string;
            item_id?: string;
        } & {
            serialized_item?: string;
            item_id?: string;
        } & { [K_9 in Exclude<keyof I_1["item"], keyof CMsgDOTAProfileCard_Slot_Item>]: never; };
        hero?: {
            hero_id?: number;
            hero_wins?: number;
            hero_losses?: number;
        } & {
            hero_id?: number;
            hero_wins?: number;
            hero_losses?: number;
        } & { [K_10 in Exclude<keyof I_1["hero"], keyof CMsgDOTAProfileCard_Slot_Hero>]: never; };
        emoticon?: {
            emoticon_id?: number;
        } & {
            emoticon_id?: number;
        } & { [K_11 in Exclude<keyof I_1["emoticon"], "emoticon_id">]: never; };
        team?: {
            team_id?: number;
        } & {
            team_id?: number;
        } & { [K_12 in Exclude<keyof I_1["team"], "team_id">]: never; };
    } & { [K_13 in Exclude<keyof I_1, keyof CMsgDOTAProfileCard_Slot>]: never; }>(object: I_1): CMsgDOTAProfileCard_Slot;
};
export declare const CMsgDOTAProfileCard_Slot_Trophy: {
    fromJSON(object: any): CMsgDOTAProfileCard_Slot_Trophy;
    toJSON(message: CMsgDOTAProfileCard_Slot_Trophy): unknown;
    create<I extends {
        trophy_id?: number;
        trophy_score?: number;
    } & {
        trophy_id?: number;
        trophy_score?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTAProfileCard_Slot_Trophy>]: never; }>(base?: I): CMsgDOTAProfileCard_Slot_Trophy;
    fromPartial<I_1 extends {
        trophy_id?: number;
        trophy_score?: number;
    } & {
        trophy_id?: number;
        trophy_score?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTAProfileCard_Slot_Trophy>]: never; }>(object: I_1): CMsgDOTAProfileCard_Slot_Trophy;
};
export declare const CMsgDOTAProfileCard_Slot_Stat: {
    fromJSON(object: any): CMsgDOTAProfileCard_Slot_Stat;
    toJSON(message: CMsgDOTAProfileCard_Slot_Stat): unknown;
    create<I extends {
        stat_id?: CMsgDOTAProfileCard_EStatID;
        stat_score?: number;
    } & {
        stat_id?: CMsgDOTAProfileCard_EStatID;
        stat_score?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTAProfileCard_Slot_Stat>]: never; }>(base?: I): CMsgDOTAProfileCard_Slot_Stat;
    fromPartial<I_1 extends {
        stat_id?: CMsgDOTAProfileCard_EStatID;
        stat_score?: number;
    } & {
        stat_id?: CMsgDOTAProfileCard_EStatID;
        stat_score?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTAProfileCard_Slot_Stat>]: never; }>(object: I_1): CMsgDOTAProfileCard_Slot_Stat;
};
export declare const CMsgDOTAProfileCard_Slot_Item: {
    fromJSON(object: any): CMsgDOTAProfileCard_Slot_Item;
    toJSON(message: CMsgDOTAProfileCard_Slot_Item): unknown;
    create<I extends {
        serialized_item?: string;
        item_id?: string;
    } & {
        serialized_item?: string;
        item_id?: string;
    } & { [K in Exclude<keyof I, keyof CMsgDOTAProfileCard_Slot_Item>]: never; }>(base?: I): CMsgDOTAProfileCard_Slot_Item;
    fromPartial<I_1 extends {
        serialized_item?: string;
        item_id?: string;
    } & {
        serialized_item?: string;
        item_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTAProfileCard_Slot_Item>]: never; }>(object: I_1): CMsgDOTAProfileCard_Slot_Item;
};
export declare const CMsgDOTAProfileCard_Slot_Hero: {
    fromJSON(object: any): CMsgDOTAProfileCard_Slot_Hero;
    toJSON(message: CMsgDOTAProfileCard_Slot_Hero): unknown;
    create<I extends {
        hero_id?: number;
        hero_wins?: number;
        hero_losses?: number;
    } & {
        hero_id?: number;
        hero_wins?: number;
        hero_losses?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTAProfileCard_Slot_Hero>]: never; }>(base?: I): CMsgDOTAProfileCard_Slot_Hero;
    fromPartial<I_1 extends {
        hero_id?: number;
        hero_wins?: number;
        hero_losses?: number;
    } & {
        hero_id?: number;
        hero_wins?: number;
        hero_losses?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTAProfileCard_Slot_Hero>]: never; }>(object: I_1): CMsgDOTAProfileCard_Slot_Hero;
};
export declare const CMsgDOTAProfileCard_Slot_Emoticon: {
    fromJSON(object: any): CMsgDOTAProfileCard_Slot_Emoticon;
    toJSON(message: CMsgDOTAProfileCard_Slot_Emoticon): unknown;
    create<I extends {
        emoticon_id?: number;
    } & {
        emoticon_id?: number;
    } & { [K in Exclude<keyof I, "emoticon_id">]: never; }>(base?: I): CMsgDOTAProfileCard_Slot_Emoticon;
    fromPartial<I_1 extends {
        emoticon_id?: number;
    } & {
        emoticon_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "emoticon_id">]: never; }>(object: I_1): CMsgDOTAProfileCard_Slot_Emoticon;
};
export declare const CMsgDOTAProfileCard_Slot_Team: {
    fromJSON(object: any): CMsgDOTAProfileCard_Slot_Team;
    toJSON(message: CMsgDOTAProfileCard_Slot_Team): unknown;
    create<I extends {
        team_id?: number;
    } & {
        team_id?: number;
    } & { [K in Exclude<keyof I, "team_id">]: never; }>(base?: I): CMsgDOTAProfileCard_Slot_Team;
    fromPartial<I_1 extends {
        team_id?: number;
    } & {
        team_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "team_id">]: never; }>(object: I_1): CMsgDOTAProfileCard_Slot_Team;
};
export declare const CSODOTAPlayerChallenge: {
    fromJSON(object: any): CSODOTAPlayerChallenge;
    toJSON(message: CSODOTAPlayerChallenge): unknown;
    create<I extends {
        account_id?: number;
        event_id?: number;
        slot_id?: number;
        int_param_0?: number;
        int_param_1?: number;
        created_time?: number;
        completed?: number;
        sequence_id?: number;
        challenge_tier?: number;
        flags?: number;
        attempts?: number;
        complete_limit?: number;
        quest_rank?: number;
        max_quest_rank?: number;
        instance_id?: number;
        hero_id?: number;
        template_id?: number;
    } & {
        account_id?: number;
        event_id?: number;
        slot_id?: number;
        int_param_0?: number;
        int_param_1?: number;
        created_time?: number;
        completed?: number;
        sequence_id?: number;
        challenge_tier?: number;
        flags?: number;
        attempts?: number;
        complete_limit?: number;
        quest_rank?: number;
        max_quest_rank?: number;
        instance_id?: number;
        hero_id?: number;
        template_id?: number;
    } & { [K in Exclude<keyof I, keyof CSODOTAPlayerChallenge>]: never; }>(base?: I): CSODOTAPlayerChallenge;
    fromPartial<I_1 extends {
        account_id?: number;
        event_id?: number;
        slot_id?: number;
        int_param_0?: number;
        int_param_1?: number;
        created_time?: number;
        completed?: number;
        sequence_id?: number;
        challenge_tier?: number;
        flags?: number;
        attempts?: number;
        complete_limit?: number;
        quest_rank?: number;
        max_quest_rank?: number;
        instance_id?: number;
        hero_id?: number;
        template_id?: number;
    } & {
        account_id?: number;
        event_id?: number;
        slot_id?: number;
        int_param_0?: number;
        int_param_1?: number;
        created_time?: number;
        completed?: number;
        sequence_id?: number;
        challenge_tier?: number;
        flags?: number;
        attempts?: number;
        complete_limit?: number;
        quest_rank?: number;
        max_quest_rank?: number;
        instance_id?: number;
        hero_id?: number;
        template_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CSODOTAPlayerChallenge>]: never; }>(object: I_1): CSODOTAPlayerChallenge;
};
export declare const CMsgClientToGCRerollPlayerChallenge: {
    fromJSON(object: any): CMsgClientToGCRerollPlayerChallenge;
    toJSON(message: CMsgClientToGCRerollPlayerChallenge): unknown;
    create<I extends {
        event_id?: EEvent;
        sequence_id?: number;
        hero_id?: number;
    } & {
        event_id?: EEvent;
        sequence_id?: number;
        hero_id?: number;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCRerollPlayerChallenge>]: never; }>(base?: I): CMsgClientToGCRerollPlayerChallenge;
    fromPartial<I_1 extends {
        event_id?: EEvent;
        sequence_id?: number;
        hero_id?: number;
    } & {
        event_id?: EEvent;
        sequence_id?: number;
        hero_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCRerollPlayerChallenge>]: never; }>(object: I_1): CMsgClientToGCRerollPlayerChallenge;
};
export declare const CMsgGCRerollPlayerChallengeResponse: {
    fromJSON(object: any): CMsgGCRerollPlayerChallengeResponse;
    toJSON(message: CMsgGCRerollPlayerChallengeResponse): unknown;
    create<I extends {
        result?: CMsgGCRerollPlayerChallengeResponse_EResult;
    } & {
        result?: CMsgGCRerollPlayerChallengeResponse_EResult;
    } & { [K in Exclude<keyof I, "result">]: never; }>(base?: I): CMsgGCRerollPlayerChallengeResponse;
    fromPartial<I_1 extends {
        result?: CMsgGCRerollPlayerChallengeResponse_EResult;
    } & {
        result?: CMsgGCRerollPlayerChallengeResponse_EResult;
    } & { [K_1 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CMsgGCRerollPlayerChallengeResponse;
};
export declare const CMsgGCTopCustomGamesList: {
    fromJSON(object: any): CMsgGCTopCustomGamesList;
    toJSON(message: CMsgGCTopCustomGamesList): unknown;
    create<I extends {
        top_custom_games?: string[];
        game_of_the_day?: string;
    } & {
        top_custom_games?: string[] & string[] & { [K in Exclude<keyof I["top_custom_games"], keyof string[]>]: never; };
        game_of_the_day?: string;
    } & { [K_1 in Exclude<keyof I, keyof CMsgGCTopCustomGamesList>]: never; }>(base?: I): CMsgGCTopCustomGamesList;
    fromPartial<I_1 extends {
        top_custom_games?: string[];
        game_of_the_day?: string;
    } & {
        top_custom_games?: string[] & string[] & { [K_2 in Exclude<keyof I_1["top_custom_games"], keyof string[]>]: never; };
        game_of_the_day?: string;
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgGCTopCustomGamesList>]: never; }>(object: I_1): CMsgGCTopCustomGamesList;
};
export declare const CMsgDOTARealtimeGameStats: {
    fromJSON(object: any): CMsgDOTARealtimeGameStats;
    toJSON(message: CMsgDOTARealtimeGameStats): unknown;
    create<I extends {
        match?: {
            server_steam_id?: string;
            match_id?: string;
            timestamp?: number;
            time_of_day?: number;
            is_nightstalker_night?: boolean;
            game_time?: number;
            game_state?: number;
            teamid_radiant?: number;
            teamid_dire?: number;
            picks?: {
                hero?: number;
                team?: number;
            }[];
            bans?: {
                hero?: number;
                team?: number;
            }[];
            kills?: {
                player_id?: number;
                death_time?: number;
                killer_player_id?: number;
            }[];
            broadcasters?: {
                player_id?: number;
            }[];
            game_mode?: number;
            league_id?: number;
            league_node_id?: number;
            single_team?: boolean;
            cheers_peak?: number;
            lobby_type?: number;
            start_timestamp?: number;
        };
        teams?: {
            team_number?: number;
            team_id?: number;
            team_name?: string;
            team_logo?: string;
            team_tag?: string;
            score?: number;
            net_worth?: number;
            players?: {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                healthpoints?: number;
                maxhealthpoints?: number;
                healthregenrate?: number;
                manapoints?: number;
                maxmanapoints?: number;
                manaregenrate?: number;
                base_strength?: number;
                base_agility?: number;
                base_intelligence?: number;
                base_armor?: number;
                base_movespeed?: number;
                base_damage?: number;
                strength?: number;
                agility?: number;
                intelligence?: number;
                armor?: number;
                movespeed?: number;
                damage?: number;
                hero_damage?: number;
                tower_damage?: number;
                abilities?: {
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                }[];
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                hero_healing?: number;
                gold_per_min?: number;
                xp_per_min?: number;
                net_gold?: number;
                gold?: number;
                x?: number;
                y?: number;
                respawn_time?: number;
                ultimate_cooldown?: number;
                has_buyback?: boolean;
                items?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                stashitems?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                itemshoppinglist?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                levelpoints?: {
                    id?: number[];
                }[];
                hero_to_hero_stats?: {
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                }[];
                has_ultimate?: boolean;
                has_ultimate_mana?: boolean;
            }[];
            only_team?: boolean;
            cheers?: number;
            team_logo_url?: string;
        }[];
        buildings?: {
            team?: number;
            heading?: number;
            lane?: number;
            tier?: number;
            type?: number;
            x?: number;
            y?: number;
            destroyed?: boolean;
        }[];
        graph_data?: {
            graph_gold?: number[];
            graph_xp?: number[];
            graph_kill?: number[];
            graph_tower?: number[];
            graph_rax?: number[];
            team_loc_stats?: {
                loc_stats?: {
                    stats?: number[];
                }[];
            }[];
        };
        delta_frame?: boolean;
    } & {
        match?: {
            server_steam_id?: string;
            match_id?: string;
            timestamp?: number;
            time_of_day?: number;
            is_nightstalker_night?: boolean;
            game_time?: number;
            game_state?: number;
            teamid_radiant?: number;
            teamid_dire?: number;
            picks?: {
                hero?: number;
                team?: number;
            }[];
            bans?: {
                hero?: number;
                team?: number;
            }[];
            kills?: {
                player_id?: number;
                death_time?: number;
                killer_player_id?: number;
            }[];
            broadcasters?: {
                player_id?: number;
            }[];
            game_mode?: number;
            league_id?: number;
            league_node_id?: number;
            single_team?: boolean;
            cheers_peak?: number;
            lobby_type?: number;
            start_timestamp?: number;
        } & {
            server_steam_id?: string;
            match_id?: string;
            timestamp?: number;
            time_of_day?: number;
            is_nightstalker_night?: boolean;
            game_time?: number;
            game_state?: number;
            teamid_radiant?: number;
            teamid_dire?: number;
            picks?: {
                hero?: number;
                team?: number;
            }[] & ({
                hero?: number;
                team?: number;
            } & {
                hero?: number;
                team?: number;
            } & { [K in Exclude<keyof I["match"]["picks"][number], keyof CMsgDOTARealtimeGameStats_PickBanDetails>]: never; })[] & { [K_1 in Exclude<keyof I["match"]["picks"], keyof {
                hero?: number;
                team?: number;
            }[]>]: never; };
            bans?: {
                hero?: number;
                team?: number;
            }[] & ({
                hero?: number;
                team?: number;
            } & {
                hero?: number;
                team?: number;
            } & { [K_2 in Exclude<keyof I["match"]["bans"][number], keyof CMsgDOTARealtimeGameStats_PickBanDetails>]: never; })[] & { [K_3 in Exclude<keyof I["match"]["bans"], keyof {
                hero?: number;
                team?: number;
            }[]>]: never; };
            kills?: {
                player_id?: number;
                death_time?: number;
                killer_player_id?: number;
            }[] & ({
                player_id?: number;
                death_time?: number;
                killer_player_id?: number;
            } & {
                player_id?: number;
                death_time?: number;
                killer_player_id?: number;
            } & { [K_4 in Exclude<keyof I["match"]["kills"][number], keyof CMsgDOTARealtimeGameStats_KillDetails>]: never; })[] & { [K_5 in Exclude<keyof I["match"]["kills"], keyof {
                player_id?: number;
                death_time?: number;
                killer_player_id?: number;
            }[]>]: never; };
            broadcasters?: {
                player_id?: number;
            }[] & ({
                player_id?: number;
            } & {
                player_id?: number;
            } & { [K_6 in Exclude<keyof I["match"]["broadcasters"][number], "player_id">]: never; })[] & { [K_7 in Exclude<keyof I["match"]["broadcasters"], keyof {
                player_id?: number;
            }[]>]: never; };
            game_mode?: number;
            league_id?: number;
            league_node_id?: number;
            single_team?: boolean;
            cheers_peak?: number;
            lobby_type?: number;
            start_timestamp?: number;
        } & { [K_8 in Exclude<keyof I["match"], keyof CMsgDOTARealtimeGameStats_MatchDetails>]: never; };
        teams?: {
            team_number?: number;
            team_id?: number;
            team_name?: string;
            team_logo?: string;
            team_tag?: string;
            score?: number;
            net_worth?: number;
            players?: {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                healthpoints?: number;
                maxhealthpoints?: number;
                healthregenrate?: number;
                manapoints?: number;
                maxmanapoints?: number;
                manaregenrate?: number;
                base_strength?: number;
                base_agility?: number;
                base_intelligence?: number;
                base_armor?: number;
                base_movespeed?: number;
                base_damage?: number;
                strength?: number;
                agility?: number;
                intelligence?: number;
                armor?: number;
                movespeed?: number;
                damage?: number;
                hero_damage?: number;
                tower_damage?: number;
                abilities?: {
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                }[];
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                hero_healing?: number;
                gold_per_min?: number;
                xp_per_min?: number;
                net_gold?: number;
                gold?: number;
                x?: number;
                y?: number;
                respawn_time?: number;
                ultimate_cooldown?: number;
                has_buyback?: boolean;
                items?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                stashitems?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                itemshoppinglist?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                levelpoints?: {
                    id?: number[];
                }[];
                hero_to_hero_stats?: {
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                }[];
                has_ultimate?: boolean;
                has_ultimate_mana?: boolean;
            }[];
            only_team?: boolean;
            cheers?: number;
            team_logo_url?: string;
        }[] & ({
            team_number?: number;
            team_id?: number;
            team_name?: string;
            team_logo?: string;
            team_tag?: string;
            score?: number;
            net_worth?: number;
            players?: {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                healthpoints?: number;
                maxhealthpoints?: number;
                healthregenrate?: number;
                manapoints?: number;
                maxmanapoints?: number;
                manaregenrate?: number;
                base_strength?: number;
                base_agility?: number;
                base_intelligence?: number;
                base_armor?: number;
                base_movespeed?: number;
                base_damage?: number;
                strength?: number;
                agility?: number;
                intelligence?: number;
                armor?: number;
                movespeed?: number;
                damage?: number;
                hero_damage?: number;
                tower_damage?: number;
                abilities?: {
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                }[];
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                hero_healing?: number;
                gold_per_min?: number;
                xp_per_min?: number;
                net_gold?: number;
                gold?: number;
                x?: number;
                y?: number;
                respawn_time?: number;
                ultimate_cooldown?: number;
                has_buyback?: boolean;
                items?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                stashitems?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                itemshoppinglist?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                levelpoints?: {
                    id?: number[];
                }[];
                hero_to_hero_stats?: {
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                }[];
                has_ultimate?: boolean;
                has_ultimate_mana?: boolean;
            }[];
            only_team?: boolean;
            cheers?: number;
            team_logo_url?: string;
        } & {
            team_number?: number;
            team_id?: number;
            team_name?: string;
            team_logo?: string;
            team_tag?: string;
            score?: number;
            net_worth?: number;
            players?: {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                healthpoints?: number;
                maxhealthpoints?: number;
                healthregenrate?: number;
                manapoints?: number;
                maxmanapoints?: number;
                manaregenrate?: number;
                base_strength?: number;
                base_agility?: number;
                base_intelligence?: number;
                base_armor?: number;
                base_movespeed?: number;
                base_damage?: number;
                strength?: number;
                agility?: number;
                intelligence?: number;
                armor?: number;
                movespeed?: number;
                damage?: number;
                hero_damage?: number;
                tower_damage?: number;
                abilities?: {
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                }[];
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                hero_healing?: number;
                gold_per_min?: number;
                xp_per_min?: number;
                net_gold?: number;
                gold?: number;
                x?: number;
                y?: number;
                respawn_time?: number;
                ultimate_cooldown?: number;
                has_buyback?: boolean;
                items?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                stashitems?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                itemshoppinglist?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                levelpoints?: {
                    id?: number[];
                }[];
                hero_to_hero_stats?: {
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                }[];
                has_ultimate?: boolean;
                has_ultimate_mana?: boolean;
            }[] & ({
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                healthpoints?: number;
                maxhealthpoints?: number;
                healthregenrate?: number;
                manapoints?: number;
                maxmanapoints?: number;
                manaregenrate?: number;
                base_strength?: number;
                base_agility?: number;
                base_intelligence?: number;
                base_armor?: number;
                base_movespeed?: number;
                base_damage?: number;
                strength?: number;
                agility?: number;
                intelligence?: number;
                armor?: number;
                movespeed?: number;
                damage?: number;
                hero_damage?: number;
                tower_damage?: number;
                abilities?: {
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                }[];
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                hero_healing?: number;
                gold_per_min?: number;
                xp_per_min?: number;
                net_gold?: number;
                gold?: number;
                x?: number;
                y?: number;
                respawn_time?: number;
                ultimate_cooldown?: number;
                has_buyback?: boolean;
                items?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                stashitems?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                itemshoppinglist?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                levelpoints?: {
                    id?: number[];
                }[];
                hero_to_hero_stats?: {
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                }[];
                has_ultimate?: boolean;
                has_ultimate_mana?: boolean;
            } & {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                healthpoints?: number;
                maxhealthpoints?: number;
                healthregenrate?: number;
                manapoints?: number;
                maxmanapoints?: number;
                manaregenrate?: number;
                base_strength?: number;
                base_agility?: number;
                base_intelligence?: number;
                base_armor?: number;
                base_movespeed?: number;
                base_damage?: number;
                strength?: number;
                agility?: number;
                intelligence?: number;
                armor?: number;
                movespeed?: number;
                damage?: number;
                hero_damage?: number;
                tower_damage?: number;
                abilities?: {
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                }[] & ({
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                } & {
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                } & { [K_9 in Exclude<keyof I["teams"][number]["players"][number]["abilities"][number], keyof CMsgDOTARealtimeGameStats_AbilityDetails>]: never; })[] & { [K_10 in Exclude<keyof I["teams"][number]["players"][number]["abilities"], keyof {
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                }[]>]: never; };
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                hero_healing?: number;
                gold_per_min?: number;
                xp_per_min?: number;
                net_gold?: number;
                gold?: number;
                x?: number;
                y?: number;
                respawn_time?: number;
                ultimate_cooldown?: number;
                has_buyback?: boolean;
                items?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[] & ({
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                } & {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                } & { [K_11 in Exclude<keyof I["teams"][number]["players"][number]["items"][number], keyof CMsgDOTARealtimeGameStats_ItemDetails>]: never; })[] & { [K_12 in Exclude<keyof I["teams"][number]["players"][number]["items"], keyof {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[]>]: never; };
                stashitems?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[] & ({
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                } & {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                } & { [K_13 in Exclude<keyof I["teams"][number]["players"][number]["stashitems"][number], keyof CMsgDOTARealtimeGameStats_ItemDetails>]: never; })[] & { [K_14 in Exclude<keyof I["teams"][number]["players"][number]["stashitems"], keyof {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[]>]: never; };
                itemshoppinglist?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[] & ({
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                } & {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                } & { [K_15 in Exclude<keyof I["teams"][number]["players"][number]["itemshoppinglist"][number], keyof CMsgDOTARealtimeGameStats_ItemDetails>]: never; })[] & { [K_16 in Exclude<keyof I["teams"][number]["players"][number]["itemshoppinglist"], keyof {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[]>]: never; };
                levelpoints?: {
                    id?: number[];
                }[] & ({
                    id?: number[];
                } & {
                    id?: number[] & number[] & { [K_17 in Exclude<keyof I["teams"][number]["players"][number]["levelpoints"][number]["id"], keyof number[]>]: never; };
                } & { [K_18 in Exclude<keyof I["teams"][number]["players"][number]["levelpoints"][number], "id">]: never; })[] & { [K_19 in Exclude<keyof I["teams"][number]["players"][number]["levelpoints"], keyof {
                    id?: number[];
                }[]>]: never; };
                hero_to_hero_stats?: {
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                }[] & ({
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                } & {
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                } & { [K_20 in Exclude<keyof I["teams"][number]["players"][number]["hero_to_hero_stats"][number], keyof CMsgDOTARealtimeGameStats_HeroToHeroStats>]: never; })[] & { [K_21 in Exclude<keyof I["teams"][number]["players"][number]["hero_to_hero_stats"], keyof {
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                }[]>]: never; };
                has_ultimate?: boolean;
                has_ultimate_mana?: boolean;
            } & { [K_22 in Exclude<keyof I["teams"][number]["players"][number], keyof CMsgDOTARealtimeGameStats_PlayerDetails>]: never; })[] & { [K_23 in Exclude<keyof I["teams"][number]["players"], keyof {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                healthpoints?: number;
                maxhealthpoints?: number;
                healthregenrate?: number;
                manapoints?: number;
                maxmanapoints?: number;
                manaregenrate?: number;
                base_strength?: number;
                base_agility?: number;
                base_intelligence?: number;
                base_armor?: number;
                base_movespeed?: number;
                base_damage?: number;
                strength?: number;
                agility?: number;
                intelligence?: number;
                armor?: number;
                movespeed?: number;
                damage?: number;
                hero_damage?: number;
                tower_damage?: number;
                abilities?: {
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                }[];
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                hero_healing?: number;
                gold_per_min?: number;
                xp_per_min?: number;
                net_gold?: number;
                gold?: number;
                x?: number;
                y?: number;
                respawn_time?: number;
                ultimate_cooldown?: number;
                has_buyback?: boolean;
                items?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                stashitems?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                itemshoppinglist?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                levelpoints?: {
                    id?: number[];
                }[];
                hero_to_hero_stats?: {
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                }[];
                has_ultimate?: boolean;
                has_ultimate_mana?: boolean;
            }[]>]: never; };
            only_team?: boolean;
            cheers?: number;
            team_logo_url?: string;
        } & { [K_24 in Exclude<keyof I["teams"][number], keyof CMsgDOTARealtimeGameStats_TeamDetails>]: never; })[] & { [K_25 in Exclude<keyof I["teams"], keyof {
            team_number?: number;
            team_id?: number;
            team_name?: string;
            team_logo?: string;
            team_tag?: string;
            score?: number;
            net_worth?: number;
            players?: {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                healthpoints?: number;
                maxhealthpoints?: number;
                healthregenrate?: number;
                manapoints?: number;
                maxmanapoints?: number;
                manaregenrate?: number;
                base_strength?: number;
                base_agility?: number;
                base_intelligence?: number;
                base_armor?: number;
                base_movespeed?: number;
                base_damage?: number;
                strength?: number;
                agility?: number;
                intelligence?: number;
                armor?: number;
                movespeed?: number;
                damage?: number;
                hero_damage?: number;
                tower_damage?: number;
                abilities?: {
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                }[];
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                hero_healing?: number;
                gold_per_min?: number;
                xp_per_min?: number;
                net_gold?: number;
                gold?: number;
                x?: number;
                y?: number;
                respawn_time?: number;
                ultimate_cooldown?: number;
                has_buyback?: boolean;
                items?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                stashitems?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                itemshoppinglist?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                levelpoints?: {
                    id?: number[];
                }[];
                hero_to_hero_stats?: {
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                }[];
                has_ultimate?: boolean;
                has_ultimate_mana?: boolean;
            }[];
            only_team?: boolean;
            cheers?: number;
            team_logo_url?: string;
        }[]>]: never; };
        buildings?: {
            team?: number;
            heading?: number;
            lane?: number;
            tier?: number;
            type?: number;
            x?: number;
            y?: number;
            destroyed?: boolean;
        }[] & ({
            team?: number;
            heading?: number;
            lane?: number;
            tier?: number;
            type?: number;
            x?: number;
            y?: number;
            destroyed?: boolean;
        } & {
            team?: number;
            heading?: number;
            lane?: number;
            tier?: number;
            type?: number;
            x?: number;
            y?: number;
            destroyed?: boolean;
        } & { [K_26 in Exclude<keyof I["buildings"][number], keyof CMsgDOTARealtimeGameStats_BuildingDetails>]: never; })[] & { [K_27 in Exclude<keyof I["buildings"], keyof {
            team?: number;
            heading?: number;
            lane?: number;
            tier?: number;
            type?: number;
            x?: number;
            y?: number;
            destroyed?: boolean;
        }[]>]: never; };
        graph_data?: {
            graph_gold?: number[];
            graph_xp?: number[];
            graph_kill?: number[];
            graph_tower?: number[];
            graph_rax?: number[];
            team_loc_stats?: {
                loc_stats?: {
                    stats?: number[];
                }[];
            }[];
        } & {
            graph_gold?: number[] & number[] & { [K_28 in Exclude<keyof I["graph_data"]["graph_gold"], keyof number[]>]: never; };
            graph_xp?: number[] & number[] & { [K_29 in Exclude<keyof I["graph_data"]["graph_xp"], keyof number[]>]: never; };
            graph_kill?: number[] & number[] & { [K_30 in Exclude<keyof I["graph_data"]["graph_kill"], keyof number[]>]: never; };
            graph_tower?: number[] & number[] & { [K_31 in Exclude<keyof I["graph_data"]["graph_tower"], keyof number[]>]: never; };
            graph_rax?: number[] & number[] & { [K_32 in Exclude<keyof I["graph_data"]["graph_rax"], keyof number[]>]: never; };
            team_loc_stats?: {
                loc_stats?: {
                    stats?: number[];
                }[];
            }[] & ({
                loc_stats?: {
                    stats?: number[];
                }[];
            } & {
                loc_stats?: {
                    stats?: number[];
                }[] & ({
                    stats?: number[];
                } & {
                    stats?: number[] & number[] & { [K_33 in Exclude<keyof I["graph_data"]["team_loc_stats"][number]["loc_stats"][number]["stats"], keyof number[]>]: never; };
                } & { [K_34 in Exclude<keyof I["graph_data"]["team_loc_stats"][number]["loc_stats"][number], "stats">]: never; })[] & { [K_35 in Exclude<keyof I["graph_data"]["team_loc_stats"][number]["loc_stats"], keyof {
                    stats?: number[];
                }[]>]: never; };
            } & { [K_36 in Exclude<keyof I["graph_data"]["team_loc_stats"][number], "loc_stats">]: never; })[] & { [K_37 in Exclude<keyof I["graph_data"]["team_loc_stats"], keyof {
                loc_stats?: {
                    stats?: number[];
                }[];
            }[]>]: never; };
        } & { [K_38 in Exclude<keyof I["graph_data"], keyof CMsgDOTARealtimeGameStats_GraphData>]: never; };
        delta_frame?: boolean;
    } & { [K_39 in Exclude<keyof I, keyof CMsgDOTARealtimeGameStats>]: never; }>(base?: I): CMsgDOTARealtimeGameStats;
    fromPartial<I_1 extends {
        match?: {
            server_steam_id?: string;
            match_id?: string;
            timestamp?: number;
            time_of_day?: number;
            is_nightstalker_night?: boolean;
            game_time?: number;
            game_state?: number;
            teamid_radiant?: number;
            teamid_dire?: number;
            picks?: {
                hero?: number;
                team?: number;
            }[];
            bans?: {
                hero?: number;
                team?: number;
            }[];
            kills?: {
                player_id?: number;
                death_time?: number;
                killer_player_id?: number;
            }[];
            broadcasters?: {
                player_id?: number;
            }[];
            game_mode?: number;
            league_id?: number;
            league_node_id?: number;
            single_team?: boolean;
            cheers_peak?: number;
            lobby_type?: number;
            start_timestamp?: number;
        };
        teams?: {
            team_number?: number;
            team_id?: number;
            team_name?: string;
            team_logo?: string;
            team_tag?: string;
            score?: number;
            net_worth?: number;
            players?: {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                healthpoints?: number;
                maxhealthpoints?: number;
                healthregenrate?: number;
                manapoints?: number;
                maxmanapoints?: number;
                manaregenrate?: number;
                base_strength?: number;
                base_agility?: number;
                base_intelligence?: number;
                base_armor?: number;
                base_movespeed?: number;
                base_damage?: number;
                strength?: number;
                agility?: number;
                intelligence?: number;
                armor?: number;
                movespeed?: number;
                damage?: number;
                hero_damage?: number;
                tower_damage?: number;
                abilities?: {
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                }[];
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                hero_healing?: number;
                gold_per_min?: number;
                xp_per_min?: number;
                net_gold?: number;
                gold?: number;
                x?: number;
                y?: number;
                respawn_time?: number;
                ultimate_cooldown?: number;
                has_buyback?: boolean;
                items?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                stashitems?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                itemshoppinglist?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                levelpoints?: {
                    id?: number[];
                }[];
                hero_to_hero_stats?: {
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                }[];
                has_ultimate?: boolean;
                has_ultimate_mana?: boolean;
            }[];
            only_team?: boolean;
            cheers?: number;
            team_logo_url?: string;
        }[];
        buildings?: {
            team?: number;
            heading?: number;
            lane?: number;
            tier?: number;
            type?: number;
            x?: number;
            y?: number;
            destroyed?: boolean;
        }[];
        graph_data?: {
            graph_gold?: number[];
            graph_xp?: number[];
            graph_kill?: number[];
            graph_tower?: number[];
            graph_rax?: number[];
            team_loc_stats?: {
                loc_stats?: {
                    stats?: number[];
                }[];
            }[];
        };
        delta_frame?: boolean;
    } & {
        match?: {
            server_steam_id?: string;
            match_id?: string;
            timestamp?: number;
            time_of_day?: number;
            is_nightstalker_night?: boolean;
            game_time?: number;
            game_state?: number;
            teamid_radiant?: number;
            teamid_dire?: number;
            picks?: {
                hero?: number;
                team?: number;
            }[];
            bans?: {
                hero?: number;
                team?: number;
            }[];
            kills?: {
                player_id?: number;
                death_time?: number;
                killer_player_id?: number;
            }[];
            broadcasters?: {
                player_id?: number;
            }[];
            game_mode?: number;
            league_id?: number;
            league_node_id?: number;
            single_team?: boolean;
            cheers_peak?: number;
            lobby_type?: number;
            start_timestamp?: number;
        } & {
            server_steam_id?: string;
            match_id?: string;
            timestamp?: number;
            time_of_day?: number;
            is_nightstalker_night?: boolean;
            game_time?: number;
            game_state?: number;
            teamid_radiant?: number;
            teamid_dire?: number;
            picks?: {
                hero?: number;
                team?: number;
            }[] & ({
                hero?: number;
                team?: number;
            } & {
                hero?: number;
                team?: number;
            } & { [K_40 in Exclude<keyof I_1["match"]["picks"][number], keyof CMsgDOTARealtimeGameStats_PickBanDetails>]: never; })[] & { [K_41 in Exclude<keyof I_1["match"]["picks"], keyof {
                hero?: number;
                team?: number;
            }[]>]: never; };
            bans?: {
                hero?: number;
                team?: number;
            }[] & ({
                hero?: number;
                team?: number;
            } & {
                hero?: number;
                team?: number;
            } & { [K_42 in Exclude<keyof I_1["match"]["bans"][number], keyof CMsgDOTARealtimeGameStats_PickBanDetails>]: never; })[] & { [K_43 in Exclude<keyof I_1["match"]["bans"], keyof {
                hero?: number;
                team?: number;
            }[]>]: never; };
            kills?: {
                player_id?: number;
                death_time?: number;
                killer_player_id?: number;
            }[] & ({
                player_id?: number;
                death_time?: number;
                killer_player_id?: number;
            } & {
                player_id?: number;
                death_time?: number;
                killer_player_id?: number;
            } & { [K_44 in Exclude<keyof I_1["match"]["kills"][number], keyof CMsgDOTARealtimeGameStats_KillDetails>]: never; })[] & { [K_45 in Exclude<keyof I_1["match"]["kills"], keyof {
                player_id?: number;
                death_time?: number;
                killer_player_id?: number;
            }[]>]: never; };
            broadcasters?: {
                player_id?: number;
            }[] & ({
                player_id?: number;
            } & {
                player_id?: number;
            } & { [K_46 in Exclude<keyof I_1["match"]["broadcasters"][number], "player_id">]: never; })[] & { [K_47 in Exclude<keyof I_1["match"]["broadcasters"], keyof {
                player_id?: number;
            }[]>]: never; };
            game_mode?: number;
            league_id?: number;
            league_node_id?: number;
            single_team?: boolean;
            cheers_peak?: number;
            lobby_type?: number;
            start_timestamp?: number;
        } & { [K_48 in Exclude<keyof I_1["match"], keyof CMsgDOTARealtimeGameStats_MatchDetails>]: never; };
        teams?: {
            team_number?: number;
            team_id?: number;
            team_name?: string;
            team_logo?: string;
            team_tag?: string;
            score?: number;
            net_worth?: number;
            players?: {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                healthpoints?: number;
                maxhealthpoints?: number;
                healthregenrate?: number;
                manapoints?: number;
                maxmanapoints?: number;
                manaregenrate?: number;
                base_strength?: number;
                base_agility?: number;
                base_intelligence?: number;
                base_armor?: number;
                base_movespeed?: number;
                base_damage?: number;
                strength?: number;
                agility?: number;
                intelligence?: number;
                armor?: number;
                movespeed?: number;
                damage?: number;
                hero_damage?: number;
                tower_damage?: number;
                abilities?: {
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                }[];
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                hero_healing?: number;
                gold_per_min?: number;
                xp_per_min?: number;
                net_gold?: number;
                gold?: number;
                x?: number;
                y?: number;
                respawn_time?: number;
                ultimate_cooldown?: number;
                has_buyback?: boolean;
                items?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                stashitems?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                itemshoppinglist?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                levelpoints?: {
                    id?: number[];
                }[];
                hero_to_hero_stats?: {
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                }[];
                has_ultimate?: boolean;
                has_ultimate_mana?: boolean;
            }[];
            only_team?: boolean;
            cheers?: number;
            team_logo_url?: string;
        }[] & ({
            team_number?: number;
            team_id?: number;
            team_name?: string;
            team_logo?: string;
            team_tag?: string;
            score?: number;
            net_worth?: number;
            players?: {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                healthpoints?: number;
                maxhealthpoints?: number;
                healthregenrate?: number;
                manapoints?: number;
                maxmanapoints?: number;
                manaregenrate?: number;
                base_strength?: number;
                base_agility?: number;
                base_intelligence?: number;
                base_armor?: number;
                base_movespeed?: number;
                base_damage?: number;
                strength?: number;
                agility?: number;
                intelligence?: number;
                armor?: number;
                movespeed?: number;
                damage?: number;
                hero_damage?: number;
                tower_damage?: number;
                abilities?: {
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                }[];
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                hero_healing?: number;
                gold_per_min?: number;
                xp_per_min?: number;
                net_gold?: number;
                gold?: number;
                x?: number;
                y?: number;
                respawn_time?: number;
                ultimate_cooldown?: number;
                has_buyback?: boolean;
                items?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                stashitems?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                itemshoppinglist?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                levelpoints?: {
                    id?: number[];
                }[];
                hero_to_hero_stats?: {
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                }[];
                has_ultimate?: boolean;
                has_ultimate_mana?: boolean;
            }[];
            only_team?: boolean;
            cheers?: number;
            team_logo_url?: string;
        } & {
            team_number?: number;
            team_id?: number;
            team_name?: string;
            team_logo?: string;
            team_tag?: string;
            score?: number;
            net_worth?: number;
            players?: {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                healthpoints?: number;
                maxhealthpoints?: number;
                healthregenrate?: number;
                manapoints?: number;
                maxmanapoints?: number;
                manaregenrate?: number;
                base_strength?: number;
                base_agility?: number;
                base_intelligence?: number;
                base_armor?: number;
                base_movespeed?: number;
                base_damage?: number;
                strength?: number;
                agility?: number;
                intelligence?: number;
                armor?: number;
                movespeed?: number;
                damage?: number;
                hero_damage?: number;
                tower_damage?: number;
                abilities?: {
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                }[];
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                hero_healing?: number;
                gold_per_min?: number;
                xp_per_min?: number;
                net_gold?: number;
                gold?: number;
                x?: number;
                y?: number;
                respawn_time?: number;
                ultimate_cooldown?: number;
                has_buyback?: boolean;
                items?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                stashitems?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                itemshoppinglist?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                levelpoints?: {
                    id?: number[];
                }[];
                hero_to_hero_stats?: {
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                }[];
                has_ultimate?: boolean;
                has_ultimate_mana?: boolean;
            }[] & ({
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                healthpoints?: number;
                maxhealthpoints?: number;
                healthregenrate?: number;
                manapoints?: number;
                maxmanapoints?: number;
                manaregenrate?: number;
                base_strength?: number;
                base_agility?: number;
                base_intelligence?: number;
                base_armor?: number;
                base_movespeed?: number;
                base_damage?: number;
                strength?: number;
                agility?: number;
                intelligence?: number;
                armor?: number;
                movespeed?: number;
                damage?: number;
                hero_damage?: number;
                tower_damage?: number;
                abilities?: {
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                }[];
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                hero_healing?: number;
                gold_per_min?: number;
                xp_per_min?: number;
                net_gold?: number;
                gold?: number;
                x?: number;
                y?: number;
                respawn_time?: number;
                ultimate_cooldown?: number;
                has_buyback?: boolean;
                items?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                stashitems?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                itemshoppinglist?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                levelpoints?: {
                    id?: number[];
                }[];
                hero_to_hero_stats?: {
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                }[];
                has_ultimate?: boolean;
                has_ultimate_mana?: boolean;
            } & {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                healthpoints?: number;
                maxhealthpoints?: number;
                healthregenrate?: number;
                manapoints?: number;
                maxmanapoints?: number;
                manaregenrate?: number;
                base_strength?: number;
                base_agility?: number;
                base_intelligence?: number;
                base_armor?: number;
                base_movespeed?: number;
                base_damage?: number;
                strength?: number;
                agility?: number;
                intelligence?: number;
                armor?: number;
                movespeed?: number;
                damage?: number;
                hero_damage?: number;
                tower_damage?: number;
                abilities?: {
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                }[] & ({
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                } & {
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                } & { [K_49 in Exclude<keyof I_1["teams"][number]["players"][number]["abilities"][number], keyof CMsgDOTARealtimeGameStats_AbilityDetails>]: never; })[] & { [K_50 in Exclude<keyof I_1["teams"][number]["players"][number]["abilities"], keyof {
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                }[]>]: never; };
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                hero_healing?: number;
                gold_per_min?: number;
                xp_per_min?: number;
                net_gold?: number;
                gold?: number;
                x?: number;
                y?: number;
                respawn_time?: number;
                ultimate_cooldown?: number;
                has_buyback?: boolean;
                items?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[] & ({
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                } & {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                } & { [K_51 in Exclude<keyof I_1["teams"][number]["players"][number]["items"][number], keyof CMsgDOTARealtimeGameStats_ItemDetails>]: never; })[] & { [K_52 in Exclude<keyof I_1["teams"][number]["players"][number]["items"], keyof {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[]>]: never; };
                stashitems?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[] & ({
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                } & {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                } & { [K_53 in Exclude<keyof I_1["teams"][number]["players"][number]["stashitems"][number], keyof CMsgDOTARealtimeGameStats_ItemDetails>]: never; })[] & { [K_54 in Exclude<keyof I_1["teams"][number]["players"][number]["stashitems"], keyof {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[]>]: never; };
                itemshoppinglist?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[] & ({
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                } & {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                } & { [K_55 in Exclude<keyof I_1["teams"][number]["players"][number]["itemshoppinglist"][number], keyof CMsgDOTARealtimeGameStats_ItemDetails>]: never; })[] & { [K_56 in Exclude<keyof I_1["teams"][number]["players"][number]["itemshoppinglist"], keyof {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[]>]: never; };
                levelpoints?: {
                    id?: number[];
                }[] & ({
                    id?: number[];
                } & {
                    id?: number[] & number[] & { [K_57 in Exclude<keyof I_1["teams"][number]["players"][number]["levelpoints"][number]["id"], keyof number[]>]: never; };
                } & { [K_58 in Exclude<keyof I_1["teams"][number]["players"][number]["levelpoints"][number], "id">]: never; })[] & { [K_59 in Exclude<keyof I_1["teams"][number]["players"][number]["levelpoints"], keyof {
                    id?: number[];
                }[]>]: never; };
                hero_to_hero_stats?: {
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                }[] & ({
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                } & {
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                } & { [K_60 in Exclude<keyof I_1["teams"][number]["players"][number]["hero_to_hero_stats"][number], keyof CMsgDOTARealtimeGameStats_HeroToHeroStats>]: never; })[] & { [K_61 in Exclude<keyof I_1["teams"][number]["players"][number]["hero_to_hero_stats"], keyof {
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                }[]>]: never; };
                has_ultimate?: boolean;
                has_ultimate_mana?: boolean;
            } & { [K_62 in Exclude<keyof I_1["teams"][number]["players"][number], keyof CMsgDOTARealtimeGameStats_PlayerDetails>]: never; })[] & { [K_63 in Exclude<keyof I_1["teams"][number]["players"], keyof {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                healthpoints?: number;
                maxhealthpoints?: number;
                healthregenrate?: number;
                manapoints?: number;
                maxmanapoints?: number;
                manaregenrate?: number;
                base_strength?: number;
                base_agility?: number;
                base_intelligence?: number;
                base_armor?: number;
                base_movespeed?: number;
                base_damage?: number;
                strength?: number;
                agility?: number;
                intelligence?: number;
                armor?: number;
                movespeed?: number;
                damage?: number;
                hero_damage?: number;
                tower_damage?: number;
                abilities?: {
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                }[];
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                hero_healing?: number;
                gold_per_min?: number;
                xp_per_min?: number;
                net_gold?: number;
                gold?: number;
                x?: number;
                y?: number;
                respawn_time?: number;
                ultimate_cooldown?: number;
                has_buyback?: boolean;
                items?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                stashitems?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                itemshoppinglist?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                levelpoints?: {
                    id?: number[];
                }[];
                hero_to_hero_stats?: {
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                }[];
                has_ultimate?: boolean;
                has_ultimate_mana?: boolean;
            }[]>]: never; };
            only_team?: boolean;
            cheers?: number;
            team_logo_url?: string;
        } & { [K_64 in Exclude<keyof I_1["teams"][number], keyof CMsgDOTARealtimeGameStats_TeamDetails>]: never; })[] & { [K_65 in Exclude<keyof I_1["teams"], keyof {
            team_number?: number;
            team_id?: number;
            team_name?: string;
            team_logo?: string;
            team_tag?: string;
            score?: number;
            net_worth?: number;
            players?: {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                healthpoints?: number;
                maxhealthpoints?: number;
                healthregenrate?: number;
                manapoints?: number;
                maxmanapoints?: number;
                manaregenrate?: number;
                base_strength?: number;
                base_agility?: number;
                base_intelligence?: number;
                base_armor?: number;
                base_movespeed?: number;
                base_damage?: number;
                strength?: number;
                agility?: number;
                intelligence?: number;
                armor?: number;
                movespeed?: number;
                damage?: number;
                hero_damage?: number;
                tower_damage?: number;
                abilities?: {
                    id?: number;
                    name?: string;
                    level?: number;
                    cooldown?: number;
                    cooldown_max?: number;
                }[];
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                hero_healing?: number;
                gold_per_min?: number;
                xp_per_min?: number;
                net_gold?: number;
                gold?: number;
                x?: number;
                y?: number;
                respawn_time?: number;
                ultimate_cooldown?: number;
                has_buyback?: boolean;
                items?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                stashitems?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                itemshoppinglist?: {
                    item_ability_id?: number;
                    name?: string;
                    time?: number;
                    sold?: boolean;
                    stackcount?: number;
                }[];
                levelpoints?: {
                    id?: number[];
                }[];
                hero_to_hero_stats?: {
                    victimid?: number;
                    kills?: number;
                    assists?: number;
                }[];
                has_ultimate?: boolean;
                has_ultimate_mana?: boolean;
            }[];
            only_team?: boolean;
            cheers?: number;
            team_logo_url?: string;
        }[]>]: never; };
        buildings?: {
            team?: number;
            heading?: number;
            lane?: number;
            tier?: number;
            type?: number;
            x?: number;
            y?: number;
            destroyed?: boolean;
        }[] & ({
            team?: number;
            heading?: number;
            lane?: number;
            tier?: number;
            type?: number;
            x?: number;
            y?: number;
            destroyed?: boolean;
        } & {
            team?: number;
            heading?: number;
            lane?: number;
            tier?: number;
            type?: number;
            x?: number;
            y?: number;
            destroyed?: boolean;
        } & { [K_66 in Exclude<keyof I_1["buildings"][number], keyof CMsgDOTARealtimeGameStats_BuildingDetails>]: never; })[] & { [K_67 in Exclude<keyof I_1["buildings"], keyof {
            team?: number;
            heading?: number;
            lane?: number;
            tier?: number;
            type?: number;
            x?: number;
            y?: number;
            destroyed?: boolean;
        }[]>]: never; };
        graph_data?: {
            graph_gold?: number[];
            graph_xp?: number[];
            graph_kill?: number[];
            graph_tower?: number[];
            graph_rax?: number[];
            team_loc_stats?: {
                loc_stats?: {
                    stats?: number[];
                }[];
            }[];
        } & {
            graph_gold?: number[] & number[] & { [K_68 in Exclude<keyof I_1["graph_data"]["graph_gold"], keyof number[]>]: never; };
            graph_xp?: number[] & number[] & { [K_69 in Exclude<keyof I_1["graph_data"]["graph_xp"], keyof number[]>]: never; };
            graph_kill?: number[] & number[] & { [K_70 in Exclude<keyof I_1["graph_data"]["graph_kill"], keyof number[]>]: never; };
            graph_tower?: number[] & number[] & { [K_71 in Exclude<keyof I_1["graph_data"]["graph_tower"], keyof number[]>]: never; };
            graph_rax?: number[] & number[] & { [K_72 in Exclude<keyof I_1["graph_data"]["graph_rax"], keyof number[]>]: never; };
            team_loc_stats?: {
                loc_stats?: {
                    stats?: number[];
                }[];
            }[] & ({
                loc_stats?: {
                    stats?: number[];
                }[];
            } & {
                loc_stats?: {
                    stats?: number[];
                }[] & ({
                    stats?: number[];
                } & {
                    stats?: number[] & number[] & { [K_73 in Exclude<keyof I_1["graph_data"]["team_loc_stats"][number]["loc_stats"][number]["stats"], keyof number[]>]: never; };
                } & { [K_74 in Exclude<keyof I_1["graph_data"]["team_loc_stats"][number]["loc_stats"][number], "stats">]: never; })[] & { [K_75 in Exclude<keyof I_1["graph_data"]["team_loc_stats"][number]["loc_stats"], keyof {
                    stats?: number[];
                }[]>]: never; };
            } & { [K_76 in Exclude<keyof I_1["graph_data"]["team_loc_stats"][number], "loc_stats">]: never; })[] & { [K_77 in Exclude<keyof I_1["graph_data"]["team_loc_stats"], keyof {
                loc_stats?: {
                    stats?: number[];
                }[];
            }[]>]: never; };
        } & { [K_78 in Exclude<keyof I_1["graph_data"], keyof CMsgDOTARealtimeGameStats_GraphData>]: never; };
        delta_frame?: boolean;
    } & { [K_79 in Exclude<keyof I_1, keyof CMsgDOTARealtimeGameStats>]: never; }>(object: I_1): CMsgDOTARealtimeGameStats;
};
export declare const CMsgDOTARealtimeGameStats_TeamDetails: {
    fromJSON(object: any): CMsgDOTARealtimeGameStats_TeamDetails;
    toJSON(message: CMsgDOTARealtimeGameStats_TeamDetails): unknown;
    create<I extends {
        team_number?: number;
        team_id?: number;
        team_name?: string;
        team_logo?: string;
        team_tag?: string;
        score?: number;
        net_worth?: number;
        players?: {
            accountid?: number;
            playerid?: number;
            name?: string;
            team?: number;
            heroid?: number;
            healthpoints?: number;
            maxhealthpoints?: number;
            healthregenrate?: number;
            manapoints?: number;
            maxmanapoints?: number;
            manaregenrate?: number;
            base_strength?: number;
            base_agility?: number;
            base_intelligence?: number;
            base_armor?: number;
            base_movespeed?: number;
            base_damage?: number;
            strength?: number;
            agility?: number;
            intelligence?: number;
            armor?: number;
            movespeed?: number;
            damage?: number;
            hero_damage?: number;
            tower_damage?: number;
            abilities?: {
                id?: number;
                name?: string;
                level?: number;
                cooldown?: number;
                cooldown_max?: number;
            }[];
            level?: number;
            kill_count?: number;
            death_count?: number;
            assists_count?: number;
            denies_count?: number;
            lh_count?: number;
            hero_healing?: number;
            gold_per_min?: number;
            xp_per_min?: number;
            net_gold?: number;
            gold?: number;
            x?: number;
            y?: number;
            respawn_time?: number;
            ultimate_cooldown?: number;
            has_buyback?: boolean;
            items?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            stashitems?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            itemshoppinglist?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            levelpoints?: {
                id?: number[];
            }[];
            hero_to_hero_stats?: {
                victimid?: number;
                kills?: number;
                assists?: number;
            }[];
            has_ultimate?: boolean;
            has_ultimate_mana?: boolean;
        }[];
        only_team?: boolean;
        cheers?: number;
        team_logo_url?: string;
    } & {
        team_number?: number;
        team_id?: number;
        team_name?: string;
        team_logo?: string;
        team_tag?: string;
        score?: number;
        net_worth?: number;
        players?: {
            accountid?: number;
            playerid?: number;
            name?: string;
            team?: number;
            heroid?: number;
            healthpoints?: number;
            maxhealthpoints?: number;
            healthregenrate?: number;
            manapoints?: number;
            maxmanapoints?: number;
            manaregenrate?: number;
            base_strength?: number;
            base_agility?: number;
            base_intelligence?: number;
            base_armor?: number;
            base_movespeed?: number;
            base_damage?: number;
            strength?: number;
            agility?: number;
            intelligence?: number;
            armor?: number;
            movespeed?: number;
            damage?: number;
            hero_damage?: number;
            tower_damage?: number;
            abilities?: {
                id?: number;
                name?: string;
                level?: number;
                cooldown?: number;
                cooldown_max?: number;
            }[];
            level?: number;
            kill_count?: number;
            death_count?: number;
            assists_count?: number;
            denies_count?: number;
            lh_count?: number;
            hero_healing?: number;
            gold_per_min?: number;
            xp_per_min?: number;
            net_gold?: number;
            gold?: number;
            x?: number;
            y?: number;
            respawn_time?: number;
            ultimate_cooldown?: number;
            has_buyback?: boolean;
            items?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            stashitems?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            itemshoppinglist?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            levelpoints?: {
                id?: number[];
            }[];
            hero_to_hero_stats?: {
                victimid?: number;
                kills?: number;
                assists?: number;
            }[];
            has_ultimate?: boolean;
            has_ultimate_mana?: boolean;
        }[] & ({
            accountid?: number;
            playerid?: number;
            name?: string;
            team?: number;
            heroid?: number;
            healthpoints?: number;
            maxhealthpoints?: number;
            healthregenrate?: number;
            manapoints?: number;
            maxmanapoints?: number;
            manaregenrate?: number;
            base_strength?: number;
            base_agility?: number;
            base_intelligence?: number;
            base_armor?: number;
            base_movespeed?: number;
            base_damage?: number;
            strength?: number;
            agility?: number;
            intelligence?: number;
            armor?: number;
            movespeed?: number;
            damage?: number;
            hero_damage?: number;
            tower_damage?: number;
            abilities?: {
                id?: number;
                name?: string;
                level?: number;
                cooldown?: number;
                cooldown_max?: number;
            }[];
            level?: number;
            kill_count?: number;
            death_count?: number;
            assists_count?: number;
            denies_count?: number;
            lh_count?: number;
            hero_healing?: number;
            gold_per_min?: number;
            xp_per_min?: number;
            net_gold?: number;
            gold?: number;
            x?: number;
            y?: number;
            respawn_time?: number;
            ultimate_cooldown?: number;
            has_buyback?: boolean;
            items?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            stashitems?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            itemshoppinglist?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            levelpoints?: {
                id?: number[];
            }[];
            hero_to_hero_stats?: {
                victimid?: number;
                kills?: number;
                assists?: number;
            }[];
            has_ultimate?: boolean;
            has_ultimate_mana?: boolean;
        } & {
            accountid?: number;
            playerid?: number;
            name?: string;
            team?: number;
            heroid?: number;
            healthpoints?: number;
            maxhealthpoints?: number;
            healthregenrate?: number;
            manapoints?: number;
            maxmanapoints?: number;
            manaregenrate?: number;
            base_strength?: number;
            base_agility?: number;
            base_intelligence?: number;
            base_armor?: number;
            base_movespeed?: number;
            base_damage?: number;
            strength?: number;
            agility?: number;
            intelligence?: number;
            armor?: number;
            movespeed?: number;
            damage?: number;
            hero_damage?: number;
            tower_damage?: number;
            abilities?: {
                id?: number;
                name?: string;
                level?: number;
                cooldown?: number;
                cooldown_max?: number;
            }[] & ({
                id?: number;
                name?: string;
                level?: number;
                cooldown?: number;
                cooldown_max?: number;
            } & {
                id?: number;
                name?: string;
                level?: number;
                cooldown?: number;
                cooldown_max?: number;
            } & { [K in Exclude<keyof I["players"][number]["abilities"][number], keyof CMsgDOTARealtimeGameStats_AbilityDetails>]: never; })[] & { [K_1 in Exclude<keyof I["players"][number]["abilities"], keyof {
                id?: number;
                name?: string;
                level?: number;
                cooldown?: number;
                cooldown_max?: number;
            }[]>]: never; };
            level?: number;
            kill_count?: number;
            death_count?: number;
            assists_count?: number;
            denies_count?: number;
            lh_count?: number;
            hero_healing?: number;
            gold_per_min?: number;
            xp_per_min?: number;
            net_gold?: number;
            gold?: number;
            x?: number;
            y?: number;
            respawn_time?: number;
            ultimate_cooldown?: number;
            has_buyback?: boolean;
            items?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[] & ({
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            } & {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            } & { [K_2 in Exclude<keyof I["players"][number]["items"][number], keyof CMsgDOTARealtimeGameStats_ItemDetails>]: never; })[] & { [K_3 in Exclude<keyof I["players"][number]["items"], keyof {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[]>]: never; };
            stashitems?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[] & ({
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            } & {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            } & { [K_4 in Exclude<keyof I["players"][number]["stashitems"][number], keyof CMsgDOTARealtimeGameStats_ItemDetails>]: never; })[] & { [K_5 in Exclude<keyof I["players"][number]["stashitems"], keyof {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[]>]: never; };
            itemshoppinglist?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[] & ({
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            } & {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            } & { [K_6 in Exclude<keyof I["players"][number]["itemshoppinglist"][number], keyof CMsgDOTARealtimeGameStats_ItemDetails>]: never; })[] & { [K_7 in Exclude<keyof I["players"][number]["itemshoppinglist"], keyof {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[]>]: never; };
            levelpoints?: {
                id?: number[];
            }[] & ({
                id?: number[];
            } & {
                id?: number[] & number[] & { [K_8 in Exclude<keyof I["players"][number]["levelpoints"][number]["id"], keyof number[]>]: never; };
            } & { [K_9 in Exclude<keyof I["players"][number]["levelpoints"][number], "id">]: never; })[] & { [K_10 in Exclude<keyof I["players"][number]["levelpoints"], keyof {
                id?: number[];
            }[]>]: never; };
            hero_to_hero_stats?: {
                victimid?: number;
                kills?: number;
                assists?: number;
            }[] & ({
                victimid?: number;
                kills?: number;
                assists?: number;
            } & {
                victimid?: number;
                kills?: number;
                assists?: number;
            } & { [K_11 in Exclude<keyof I["players"][number]["hero_to_hero_stats"][number], keyof CMsgDOTARealtimeGameStats_HeroToHeroStats>]: never; })[] & { [K_12 in Exclude<keyof I["players"][number]["hero_to_hero_stats"], keyof {
                victimid?: number;
                kills?: number;
                assists?: number;
            }[]>]: never; };
            has_ultimate?: boolean;
            has_ultimate_mana?: boolean;
        } & { [K_13 in Exclude<keyof I["players"][number], keyof CMsgDOTARealtimeGameStats_PlayerDetails>]: never; })[] & { [K_14 in Exclude<keyof I["players"], keyof {
            accountid?: number;
            playerid?: number;
            name?: string;
            team?: number;
            heroid?: number;
            healthpoints?: number;
            maxhealthpoints?: number;
            healthregenrate?: number;
            manapoints?: number;
            maxmanapoints?: number;
            manaregenrate?: number;
            base_strength?: number;
            base_agility?: number;
            base_intelligence?: number;
            base_armor?: number;
            base_movespeed?: number;
            base_damage?: number;
            strength?: number;
            agility?: number;
            intelligence?: number;
            armor?: number;
            movespeed?: number;
            damage?: number;
            hero_damage?: number;
            tower_damage?: number;
            abilities?: {
                id?: number;
                name?: string;
                level?: number;
                cooldown?: number;
                cooldown_max?: number;
            }[];
            level?: number;
            kill_count?: number;
            death_count?: number;
            assists_count?: number;
            denies_count?: number;
            lh_count?: number;
            hero_healing?: number;
            gold_per_min?: number;
            xp_per_min?: number;
            net_gold?: number;
            gold?: number;
            x?: number;
            y?: number;
            respawn_time?: number;
            ultimate_cooldown?: number;
            has_buyback?: boolean;
            items?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            stashitems?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            itemshoppinglist?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            levelpoints?: {
                id?: number[];
            }[];
            hero_to_hero_stats?: {
                victimid?: number;
                kills?: number;
                assists?: number;
            }[];
            has_ultimate?: boolean;
            has_ultimate_mana?: boolean;
        }[]>]: never; };
        only_team?: boolean;
        cheers?: number;
        team_logo_url?: string;
    } & { [K_15 in Exclude<keyof I, keyof CMsgDOTARealtimeGameStats_TeamDetails>]: never; }>(base?: I): CMsgDOTARealtimeGameStats_TeamDetails;
    fromPartial<I_1 extends {
        team_number?: number;
        team_id?: number;
        team_name?: string;
        team_logo?: string;
        team_tag?: string;
        score?: number;
        net_worth?: number;
        players?: {
            accountid?: number;
            playerid?: number;
            name?: string;
            team?: number;
            heroid?: number;
            healthpoints?: number;
            maxhealthpoints?: number;
            healthregenrate?: number;
            manapoints?: number;
            maxmanapoints?: number;
            manaregenrate?: number;
            base_strength?: number;
            base_agility?: number;
            base_intelligence?: number;
            base_armor?: number;
            base_movespeed?: number;
            base_damage?: number;
            strength?: number;
            agility?: number;
            intelligence?: number;
            armor?: number;
            movespeed?: number;
            damage?: number;
            hero_damage?: number;
            tower_damage?: number;
            abilities?: {
                id?: number;
                name?: string;
                level?: number;
                cooldown?: number;
                cooldown_max?: number;
            }[];
            level?: number;
            kill_count?: number;
            death_count?: number;
            assists_count?: number;
            denies_count?: number;
            lh_count?: number;
            hero_healing?: number;
            gold_per_min?: number;
            xp_per_min?: number;
            net_gold?: number;
            gold?: number;
            x?: number;
            y?: number;
            respawn_time?: number;
            ultimate_cooldown?: number;
            has_buyback?: boolean;
            items?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            stashitems?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            itemshoppinglist?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            levelpoints?: {
                id?: number[];
            }[];
            hero_to_hero_stats?: {
                victimid?: number;
                kills?: number;
                assists?: number;
            }[];
            has_ultimate?: boolean;
            has_ultimate_mana?: boolean;
        }[];
        only_team?: boolean;
        cheers?: number;
        team_logo_url?: string;
    } & {
        team_number?: number;
        team_id?: number;
        team_name?: string;
        team_logo?: string;
        team_tag?: string;
        score?: number;
        net_worth?: number;
        players?: {
            accountid?: number;
            playerid?: number;
            name?: string;
            team?: number;
            heroid?: number;
            healthpoints?: number;
            maxhealthpoints?: number;
            healthregenrate?: number;
            manapoints?: number;
            maxmanapoints?: number;
            manaregenrate?: number;
            base_strength?: number;
            base_agility?: number;
            base_intelligence?: number;
            base_armor?: number;
            base_movespeed?: number;
            base_damage?: number;
            strength?: number;
            agility?: number;
            intelligence?: number;
            armor?: number;
            movespeed?: number;
            damage?: number;
            hero_damage?: number;
            tower_damage?: number;
            abilities?: {
                id?: number;
                name?: string;
                level?: number;
                cooldown?: number;
                cooldown_max?: number;
            }[];
            level?: number;
            kill_count?: number;
            death_count?: number;
            assists_count?: number;
            denies_count?: number;
            lh_count?: number;
            hero_healing?: number;
            gold_per_min?: number;
            xp_per_min?: number;
            net_gold?: number;
            gold?: number;
            x?: number;
            y?: number;
            respawn_time?: number;
            ultimate_cooldown?: number;
            has_buyback?: boolean;
            items?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            stashitems?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            itemshoppinglist?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            levelpoints?: {
                id?: number[];
            }[];
            hero_to_hero_stats?: {
                victimid?: number;
                kills?: number;
                assists?: number;
            }[];
            has_ultimate?: boolean;
            has_ultimate_mana?: boolean;
        }[] & ({
            accountid?: number;
            playerid?: number;
            name?: string;
            team?: number;
            heroid?: number;
            healthpoints?: number;
            maxhealthpoints?: number;
            healthregenrate?: number;
            manapoints?: number;
            maxmanapoints?: number;
            manaregenrate?: number;
            base_strength?: number;
            base_agility?: number;
            base_intelligence?: number;
            base_armor?: number;
            base_movespeed?: number;
            base_damage?: number;
            strength?: number;
            agility?: number;
            intelligence?: number;
            armor?: number;
            movespeed?: number;
            damage?: number;
            hero_damage?: number;
            tower_damage?: number;
            abilities?: {
                id?: number;
                name?: string;
                level?: number;
                cooldown?: number;
                cooldown_max?: number;
            }[];
            level?: number;
            kill_count?: number;
            death_count?: number;
            assists_count?: number;
            denies_count?: number;
            lh_count?: number;
            hero_healing?: number;
            gold_per_min?: number;
            xp_per_min?: number;
            net_gold?: number;
            gold?: number;
            x?: number;
            y?: number;
            respawn_time?: number;
            ultimate_cooldown?: number;
            has_buyback?: boolean;
            items?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            stashitems?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            itemshoppinglist?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            levelpoints?: {
                id?: number[];
            }[];
            hero_to_hero_stats?: {
                victimid?: number;
                kills?: number;
                assists?: number;
            }[];
            has_ultimate?: boolean;
            has_ultimate_mana?: boolean;
        } & {
            accountid?: number;
            playerid?: number;
            name?: string;
            team?: number;
            heroid?: number;
            healthpoints?: number;
            maxhealthpoints?: number;
            healthregenrate?: number;
            manapoints?: number;
            maxmanapoints?: number;
            manaregenrate?: number;
            base_strength?: number;
            base_agility?: number;
            base_intelligence?: number;
            base_armor?: number;
            base_movespeed?: number;
            base_damage?: number;
            strength?: number;
            agility?: number;
            intelligence?: number;
            armor?: number;
            movespeed?: number;
            damage?: number;
            hero_damage?: number;
            tower_damage?: number;
            abilities?: {
                id?: number;
                name?: string;
                level?: number;
                cooldown?: number;
                cooldown_max?: number;
            }[] & ({
                id?: number;
                name?: string;
                level?: number;
                cooldown?: number;
                cooldown_max?: number;
            } & {
                id?: number;
                name?: string;
                level?: number;
                cooldown?: number;
                cooldown_max?: number;
            } & { [K_16 in Exclude<keyof I_1["players"][number]["abilities"][number], keyof CMsgDOTARealtimeGameStats_AbilityDetails>]: never; })[] & { [K_17 in Exclude<keyof I_1["players"][number]["abilities"], keyof {
                id?: number;
                name?: string;
                level?: number;
                cooldown?: number;
                cooldown_max?: number;
            }[]>]: never; };
            level?: number;
            kill_count?: number;
            death_count?: number;
            assists_count?: number;
            denies_count?: number;
            lh_count?: number;
            hero_healing?: number;
            gold_per_min?: number;
            xp_per_min?: number;
            net_gold?: number;
            gold?: number;
            x?: number;
            y?: number;
            respawn_time?: number;
            ultimate_cooldown?: number;
            has_buyback?: boolean;
            items?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[] & ({
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            } & {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            } & { [K_18 in Exclude<keyof I_1["players"][number]["items"][number], keyof CMsgDOTARealtimeGameStats_ItemDetails>]: never; })[] & { [K_19 in Exclude<keyof I_1["players"][number]["items"], keyof {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[]>]: never; };
            stashitems?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[] & ({
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            } & {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            } & { [K_20 in Exclude<keyof I_1["players"][number]["stashitems"][number], keyof CMsgDOTARealtimeGameStats_ItemDetails>]: never; })[] & { [K_21 in Exclude<keyof I_1["players"][number]["stashitems"], keyof {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[]>]: never; };
            itemshoppinglist?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[] & ({
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            } & {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            } & { [K_22 in Exclude<keyof I_1["players"][number]["itemshoppinglist"][number], keyof CMsgDOTARealtimeGameStats_ItemDetails>]: never; })[] & { [K_23 in Exclude<keyof I_1["players"][number]["itemshoppinglist"], keyof {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[]>]: never; };
            levelpoints?: {
                id?: number[];
            }[] & ({
                id?: number[];
            } & {
                id?: number[] & number[] & { [K_24 in Exclude<keyof I_1["players"][number]["levelpoints"][number]["id"], keyof number[]>]: never; };
            } & { [K_25 in Exclude<keyof I_1["players"][number]["levelpoints"][number], "id">]: never; })[] & { [K_26 in Exclude<keyof I_1["players"][number]["levelpoints"], keyof {
                id?: number[];
            }[]>]: never; };
            hero_to_hero_stats?: {
                victimid?: number;
                kills?: number;
                assists?: number;
            }[] & ({
                victimid?: number;
                kills?: number;
                assists?: number;
            } & {
                victimid?: number;
                kills?: number;
                assists?: number;
            } & { [K_27 in Exclude<keyof I_1["players"][number]["hero_to_hero_stats"][number], keyof CMsgDOTARealtimeGameStats_HeroToHeroStats>]: never; })[] & { [K_28 in Exclude<keyof I_1["players"][number]["hero_to_hero_stats"], keyof {
                victimid?: number;
                kills?: number;
                assists?: number;
            }[]>]: never; };
            has_ultimate?: boolean;
            has_ultimate_mana?: boolean;
        } & { [K_29 in Exclude<keyof I_1["players"][number], keyof CMsgDOTARealtimeGameStats_PlayerDetails>]: never; })[] & { [K_30 in Exclude<keyof I_1["players"], keyof {
            accountid?: number;
            playerid?: number;
            name?: string;
            team?: number;
            heroid?: number;
            healthpoints?: number;
            maxhealthpoints?: number;
            healthregenrate?: number;
            manapoints?: number;
            maxmanapoints?: number;
            manaregenrate?: number;
            base_strength?: number;
            base_agility?: number;
            base_intelligence?: number;
            base_armor?: number;
            base_movespeed?: number;
            base_damage?: number;
            strength?: number;
            agility?: number;
            intelligence?: number;
            armor?: number;
            movespeed?: number;
            damage?: number;
            hero_damage?: number;
            tower_damage?: number;
            abilities?: {
                id?: number;
                name?: string;
                level?: number;
                cooldown?: number;
                cooldown_max?: number;
            }[];
            level?: number;
            kill_count?: number;
            death_count?: number;
            assists_count?: number;
            denies_count?: number;
            lh_count?: number;
            hero_healing?: number;
            gold_per_min?: number;
            xp_per_min?: number;
            net_gold?: number;
            gold?: number;
            x?: number;
            y?: number;
            respawn_time?: number;
            ultimate_cooldown?: number;
            has_buyback?: boolean;
            items?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            stashitems?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            itemshoppinglist?: {
                item_ability_id?: number;
                name?: string;
                time?: number;
                sold?: boolean;
                stackcount?: number;
            }[];
            levelpoints?: {
                id?: number[];
            }[];
            hero_to_hero_stats?: {
                victimid?: number;
                kills?: number;
                assists?: number;
            }[];
            has_ultimate?: boolean;
            has_ultimate_mana?: boolean;
        }[]>]: never; };
        only_team?: boolean;
        cheers?: number;
        team_logo_url?: string;
    } & { [K_31 in Exclude<keyof I_1, keyof CMsgDOTARealtimeGameStats_TeamDetails>]: never; }>(object: I_1): CMsgDOTARealtimeGameStats_TeamDetails;
};
export declare const CMsgDOTARealtimeGameStats_ItemDetails: {
    fromJSON(object: any): CMsgDOTARealtimeGameStats_ItemDetails;
    toJSON(message: CMsgDOTARealtimeGameStats_ItemDetails): unknown;
    create<I extends {
        item_ability_id?: number;
        name?: string;
        time?: number;
        sold?: boolean;
        stackcount?: number;
    } & {
        item_ability_id?: number;
        name?: string;
        time?: number;
        sold?: boolean;
        stackcount?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTARealtimeGameStats_ItemDetails>]: never; }>(base?: I): CMsgDOTARealtimeGameStats_ItemDetails;
    fromPartial<I_1 extends {
        item_ability_id?: number;
        name?: string;
        time?: number;
        sold?: boolean;
        stackcount?: number;
    } & {
        item_ability_id?: number;
        name?: string;
        time?: number;
        sold?: boolean;
        stackcount?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTARealtimeGameStats_ItemDetails>]: never; }>(object: I_1): CMsgDOTARealtimeGameStats_ItemDetails;
};
export declare const CMsgDOTARealtimeGameStats_AbilityDetails: {
    fromJSON(object: any): CMsgDOTARealtimeGameStats_AbilityDetails;
    toJSON(message: CMsgDOTARealtimeGameStats_AbilityDetails): unknown;
    create<I extends {
        id?: number;
        name?: string;
        level?: number;
        cooldown?: number;
        cooldown_max?: number;
    } & {
        id?: number;
        name?: string;
        level?: number;
        cooldown?: number;
        cooldown_max?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTARealtimeGameStats_AbilityDetails>]: never; }>(base?: I): CMsgDOTARealtimeGameStats_AbilityDetails;
    fromPartial<I_1 extends {
        id?: number;
        name?: string;
        level?: number;
        cooldown?: number;
        cooldown_max?: number;
    } & {
        id?: number;
        name?: string;
        level?: number;
        cooldown?: number;
        cooldown_max?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTARealtimeGameStats_AbilityDetails>]: never; }>(object: I_1): CMsgDOTARealtimeGameStats_AbilityDetails;
};
export declare const CMsgDOTARealtimeGameStats_HeroToHeroStats: {
    fromJSON(object: any): CMsgDOTARealtimeGameStats_HeroToHeroStats;
    toJSON(message: CMsgDOTARealtimeGameStats_HeroToHeroStats): unknown;
    create<I extends {
        victimid?: number;
        kills?: number;
        assists?: number;
    } & {
        victimid?: number;
        kills?: number;
        assists?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTARealtimeGameStats_HeroToHeroStats>]: never; }>(base?: I): CMsgDOTARealtimeGameStats_HeroToHeroStats;
    fromPartial<I_1 extends {
        victimid?: number;
        kills?: number;
        assists?: number;
    } & {
        victimid?: number;
        kills?: number;
        assists?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTARealtimeGameStats_HeroToHeroStats>]: never; }>(object: I_1): CMsgDOTARealtimeGameStats_HeroToHeroStats;
};
export declare const CMsgDOTARealtimeGameStats_AbilityList: {
    fromJSON(object: any): CMsgDOTARealtimeGameStats_AbilityList;
    toJSON(message: CMsgDOTARealtimeGameStats_AbilityList): unknown;
    create<I extends {
        id?: number[];
    } & {
        id?: number[] & number[] & { [K in Exclude<keyof I["id"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, "id">]: never; }>(base?: I): CMsgDOTARealtimeGameStats_AbilityList;
    fromPartial<I_1 extends {
        id?: number[];
    } & {
        id?: number[] & number[] & { [K_2 in Exclude<keyof I_1["id"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): CMsgDOTARealtimeGameStats_AbilityList;
};
export declare const CMsgDOTARealtimeGameStats_PlayerDetails: {
    fromJSON(object: any): CMsgDOTARealtimeGameStats_PlayerDetails;
    toJSON(message: CMsgDOTARealtimeGameStats_PlayerDetails): unknown;
    create<I extends {
        accountid?: number;
        playerid?: number;
        name?: string;
        team?: number;
        heroid?: number;
        healthpoints?: number;
        maxhealthpoints?: number;
        healthregenrate?: number;
        manapoints?: number;
        maxmanapoints?: number;
        manaregenrate?: number;
        base_strength?: number;
        base_agility?: number;
        base_intelligence?: number;
        base_armor?: number;
        base_movespeed?: number;
        base_damage?: number;
        strength?: number;
        agility?: number;
        intelligence?: number;
        armor?: number;
        movespeed?: number;
        damage?: number;
        hero_damage?: number;
        tower_damage?: number;
        abilities?: {
            id?: number;
            name?: string;
            level?: number;
            cooldown?: number;
            cooldown_max?: number;
        }[];
        level?: number;
        kill_count?: number;
        death_count?: number;
        assists_count?: number;
        denies_count?: number;
        lh_count?: number;
        hero_healing?: number;
        gold_per_min?: number;
        xp_per_min?: number;
        net_gold?: number;
        gold?: number;
        x?: number;
        y?: number;
        respawn_time?: number;
        ultimate_cooldown?: number;
        has_buyback?: boolean;
        items?: {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        }[];
        stashitems?: {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        }[];
        itemshoppinglist?: {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        }[];
        levelpoints?: {
            id?: number[];
        }[];
        hero_to_hero_stats?: {
            victimid?: number;
            kills?: number;
            assists?: number;
        }[];
        has_ultimate?: boolean;
        has_ultimate_mana?: boolean;
    } & {
        accountid?: number;
        playerid?: number;
        name?: string;
        team?: number;
        heroid?: number;
        healthpoints?: number;
        maxhealthpoints?: number;
        healthregenrate?: number;
        manapoints?: number;
        maxmanapoints?: number;
        manaregenrate?: number;
        base_strength?: number;
        base_agility?: number;
        base_intelligence?: number;
        base_armor?: number;
        base_movespeed?: number;
        base_damage?: number;
        strength?: number;
        agility?: number;
        intelligence?: number;
        armor?: number;
        movespeed?: number;
        damage?: number;
        hero_damage?: number;
        tower_damage?: number;
        abilities?: {
            id?: number;
            name?: string;
            level?: number;
            cooldown?: number;
            cooldown_max?: number;
        }[] & ({
            id?: number;
            name?: string;
            level?: number;
            cooldown?: number;
            cooldown_max?: number;
        } & {
            id?: number;
            name?: string;
            level?: number;
            cooldown?: number;
            cooldown_max?: number;
        } & { [K in Exclude<keyof I["abilities"][number], keyof CMsgDOTARealtimeGameStats_AbilityDetails>]: never; })[] & { [K_1 in Exclude<keyof I["abilities"], keyof {
            id?: number;
            name?: string;
            level?: number;
            cooldown?: number;
            cooldown_max?: number;
        }[]>]: never; };
        level?: number;
        kill_count?: number;
        death_count?: number;
        assists_count?: number;
        denies_count?: number;
        lh_count?: number;
        hero_healing?: number;
        gold_per_min?: number;
        xp_per_min?: number;
        net_gold?: number;
        gold?: number;
        x?: number;
        y?: number;
        respawn_time?: number;
        ultimate_cooldown?: number;
        has_buyback?: boolean;
        items?: {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        }[] & ({
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        } & {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        } & { [K_2 in Exclude<keyof I["items"][number], keyof CMsgDOTARealtimeGameStats_ItemDetails>]: never; })[] & { [K_3 in Exclude<keyof I["items"], keyof {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        }[]>]: never; };
        stashitems?: {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        }[] & ({
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        } & {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        } & { [K_4 in Exclude<keyof I["stashitems"][number], keyof CMsgDOTARealtimeGameStats_ItemDetails>]: never; })[] & { [K_5 in Exclude<keyof I["stashitems"], keyof {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        }[]>]: never; };
        itemshoppinglist?: {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        }[] & ({
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        } & {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        } & { [K_6 in Exclude<keyof I["itemshoppinglist"][number], keyof CMsgDOTARealtimeGameStats_ItemDetails>]: never; })[] & { [K_7 in Exclude<keyof I["itemshoppinglist"], keyof {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        }[]>]: never; };
        levelpoints?: {
            id?: number[];
        }[] & ({
            id?: number[];
        } & {
            id?: number[] & number[] & { [K_8 in Exclude<keyof I["levelpoints"][number]["id"], keyof number[]>]: never; };
        } & { [K_9 in Exclude<keyof I["levelpoints"][number], "id">]: never; })[] & { [K_10 in Exclude<keyof I["levelpoints"], keyof {
            id?: number[];
        }[]>]: never; };
        hero_to_hero_stats?: {
            victimid?: number;
            kills?: number;
            assists?: number;
        }[] & ({
            victimid?: number;
            kills?: number;
            assists?: number;
        } & {
            victimid?: number;
            kills?: number;
            assists?: number;
        } & { [K_11 in Exclude<keyof I["hero_to_hero_stats"][number], keyof CMsgDOTARealtimeGameStats_HeroToHeroStats>]: never; })[] & { [K_12 in Exclude<keyof I["hero_to_hero_stats"], keyof {
            victimid?: number;
            kills?: number;
            assists?: number;
        }[]>]: never; };
        has_ultimate?: boolean;
        has_ultimate_mana?: boolean;
    } & { [K_13 in Exclude<keyof I, keyof CMsgDOTARealtimeGameStats_PlayerDetails>]: never; }>(base?: I): CMsgDOTARealtimeGameStats_PlayerDetails;
    fromPartial<I_1 extends {
        accountid?: number;
        playerid?: number;
        name?: string;
        team?: number;
        heroid?: number;
        healthpoints?: number;
        maxhealthpoints?: number;
        healthregenrate?: number;
        manapoints?: number;
        maxmanapoints?: number;
        manaregenrate?: number;
        base_strength?: number;
        base_agility?: number;
        base_intelligence?: number;
        base_armor?: number;
        base_movespeed?: number;
        base_damage?: number;
        strength?: number;
        agility?: number;
        intelligence?: number;
        armor?: number;
        movespeed?: number;
        damage?: number;
        hero_damage?: number;
        tower_damage?: number;
        abilities?: {
            id?: number;
            name?: string;
            level?: number;
            cooldown?: number;
            cooldown_max?: number;
        }[];
        level?: number;
        kill_count?: number;
        death_count?: number;
        assists_count?: number;
        denies_count?: number;
        lh_count?: number;
        hero_healing?: number;
        gold_per_min?: number;
        xp_per_min?: number;
        net_gold?: number;
        gold?: number;
        x?: number;
        y?: number;
        respawn_time?: number;
        ultimate_cooldown?: number;
        has_buyback?: boolean;
        items?: {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        }[];
        stashitems?: {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        }[];
        itemshoppinglist?: {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        }[];
        levelpoints?: {
            id?: number[];
        }[];
        hero_to_hero_stats?: {
            victimid?: number;
            kills?: number;
            assists?: number;
        }[];
        has_ultimate?: boolean;
        has_ultimate_mana?: boolean;
    } & {
        accountid?: number;
        playerid?: number;
        name?: string;
        team?: number;
        heroid?: number;
        healthpoints?: number;
        maxhealthpoints?: number;
        healthregenrate?: number;
        manapoints?: number;
        maxmanapoints?: number;
        manaregenrate?: number;
        base_strength?: number;
        base_agility?: number;
        base_intelligence?: number;
        base_armor?: number;
        base_movespeed?: number;
        base_damage?: number;
        strength?: number;
        agility?: number;
        intelligence?: number;
        armor?: number;
        movespeed?: number;
        damage?: number;
        hero_damage?: number;
        tower_damage?: number;
        abilities?: {
            id?: number;
            name?: string;
            level?: number;
            cooldown?: number;
            cooldown_max?: number;
        }[] & ({
            id?: number;
            name?: string;
            level?: number;
            cooldown?: number;
            cooldown_max?: number;
        } & {
            id?: number;
            name?: string;
            level?: number;
            cooldown?: number;
            cooldown_max?: number;
        } & { [K_14 in Exclude<keyof I_1["abilities"][number], keyof CMsgDOTARealtimeGameStats_AbilityDetails>]: never; })[] & { [K_15 in Exclude<keyof I_1["abilities"], keyof {
            id?: number;
            name?: string;
            level?: number;
            cooldown?: number;
            cooldown_max?: number;
        }[]>]: never; };
        level?: number;
        kill_count?: number;
        death_count?: number;
        assists_count?: number;
        denies_count?: number;
        lh_count?: number;
        hero_healing?: number;
        gold_per_min?: number;
        xp_per_min?: number;
        net_gold?: number;
        gold?: number;
        x?: number;
        y?: number;
        respawn_time?: number;
        ultimate_cooldown?: number;
        has_buyback?: boolean;
        items?: {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        }[] & ({
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        } & {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        } & { [K_16 in Exclude<keyof I_1["items"][number], keyof CMsgDOTARealtimeGameStats_ItemDetails>]: never; })[] & { [K_17 in Exclude<keyof I_1["items"], keyof {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        }[]>]: never; };
        stashitems?: {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        }[] & ({
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        } & {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        } & { [K_18 in Exclude<keyof I_1["stashitems"][number], keyof CMsgDOTARealtimeGameStats_ItemDetails>]: never; })[] & { [K_19 in Exclude<keyof I_1["stashitems"], keyof {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        }[]>]: never; };
        itemshoppinglist?: {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        }[] & ({
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        } & {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        } & { [K_20 in Exclude<keyof I_1["itemshoppinglist"][number], keyof CMsgDOTARealtimeGameStats_ItemDetails>]: never; })[] & { [K_21 in Exclude<keyof I_1["itemshoppinglist"], keyof {
            item_ability_id?: number;
            name?: string;
            time?: number;
            sold?: boolean;
            stackcount?: number;
        }[]>]: never; };
        levelpoints?: {
            id?: number[];
        }[] & ({
            id?: number[];
        } & {
            id?: number[] & number[] & { [K_22 in Exclude<keyof I_1["levelpoints"][number]["id"], keyof number[]>]: never; };
        } & { [K_23 in Exclude<keyof I_1["levelpoints"][number], "id">]: never; })[] & { [K_24 in Exclude<keyof I_1["levelpoints"], keyof {
            id?: number[];
        }[]>]: never; };
        hero_to_hero_stats?: {
            victimid?: number;
            kills?: number;
            assists?: number;
        }[] & ({
            victimid?: number;
            kills?: number;
            assists?: number;
        } & {
            victimid?: number;
            kills?: number;
            assists?: number;
        } & { [K_25 in Exclude<keyof I_1["hero_to_hero_stats"][number], keyof CMsgDOTARealtimeGameStats_HeroToHeroStats>]: never; })[] & { [K_26 in Exclude<keyof I_1["hero_to_hero_stats"], keyof {
            victimid?: number;
            kills?: number;
            assists?: number;
        }[]>]: never; };
        has_ultimate?: boolean;
        has_ultimate_mana?: boolean;
    } & { [K_27 in Exclude<keyof I_1, keyof CMsgDOTARealtimeGameStats_PlayerDetails>]: never; }>(object: I_1): CMsgDOTARealtimeGameStats_PlayerDetails;
};
export declare const CMsgDOTARealtimeGameStats_BuildingDetails: {
    fromJSON(object: any): CMsgDOTARealtimeGameStats_BuildingDetails;
    toJSON(message: CMsgDOTARealtimeGameStats_BuildingDetails): unknown;
    create<I extends {
        team?: number;
        heading?: number;
        lane?: number;
        tier?: number;
        type?: number;
        x?: number;
        y?: number;
        destroyed?: boolean;
    } & {
        team?: number;
        heading?: number;
        lane?: number;
        tier?: number;
        type?: number;
        x?: number;
        y?: number;
        destroyed?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgDOTARealtimeGameStats_BuildingDetails>]: never; }>(base?: I): CMsgDOTARealtimeGameStats_BuildingDetails;
    fromPartial<I_1 extends {
        team?: number;
        heading?: number;
        lane?: number;
        tier?: number;
        type?: number;
        x?: number;
        y?: number;
        destroyed?: boolean;
    } & {
        team?: number;
        heading?: number;
        lane?: number;
        tier?: number;
        type?: number;
        x?: number;
        y?: number;
        destroyed?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTARealtimeGameStats_BuildingDetails>]: never; }>(object: I_1): CMsgDOTARealtimeGameStats_BuildingDetails;
};
export declare const CMsgDOTARealtimeGameStats_KillDetails: {
    fromJSON(object: any): CMsgDOTARealtimeGameStats_KillDetails;
    toJSON(message: CMsgDOTARealtimeGameStats_KillDetails): unknown;
    create<I extends {
        player_id?: number;
        death_time?: number;
        killer_player_id?: number;
    } & {
        player_id?: number;
        death_time?: number;
        killer_player_id?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTARealtimeGameStats_KillDetails>]: never; }>(base?: I): CMsgDOTARealtimeGameStats_KillDetails;
    fromPartial<I_1 extends {
        player_id?: number;
        death_time?: number;
        killer_player_id?: number;
    } & {
        player_id?: number;
        death_time?: number;
        killer_player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTARealtimeGameStats_KillDetails>]: never; }>(object: I_1): CMsgDOTARealtimeGameStats_KillDetails;
};
export declare const CMsgDOTARealtimeGameStats_BroadcasterDetails: {
    fromJSON(object: any): CMsgDOTARealtimeGameStats_BroadcasterDetails;
    toJSON(message: CMsgDOTARealtimeGameStats_BroadcasterDetails): unknown;
    create<I extends {
        player_id?: number;
    } & {
        player_id?: number;
    } & { [K in Exclude<keyof I, "player_id">]: never; }>(base?: I): CMsgDOTARealtimeGameStats_BroadcasterDetails;
    fromPartial<I_1 extends {
        player_id?: number;
    } & {
        player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "player_id">]: never; }>(object: I_1): CMsgDOTARealtimeGameStats_BroadcasterDetails;
};
export declare const CMsgDOTARealtimeGameStats_PickBanDetails: {
    fromJSON(object: any): CMsgDOTARealtimeGameStats_PickBanDetails;
    toJSON(message: CMsgDOTARealtimeGameStats_PickBanDetails): unknown;
    create<I extends {
        hero?: number;
        team?: number;
    } & {
        hero?: number;
        team?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTARealtimeGameStats_PickBanDetails>]: never; }>(base?: I): CMsgDOTARealtimeGameStats_PickBanDetails;
    fromPartial<I_1 extends {
        hero?: number;
        team?: number;
    } & {
        hero?: number;
        team?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTARealtimeGameStats_PickBanDetails>]: never; }>(object: I_1): CMsgDOTARealtimeGameStats_PickBanDetails;
};
export declare const CMsgDOTARealtimeGameStats_MatchDetails: {
    fromJSON(object: any): CMsgDOTARealtimeGameStats_MatchDetails;
    toJSON(message: CMsgDOTARealtimeGameStats_MatchDetails): unknown;
    create<I extends {
        server_steam_id?: string;
        match_id?: string;
        timestamp?: number;
        time_of_day?: number;
        is_nightstalker_night?: boolean;
        game_time?: number;
        game_state?: number;
        teamid_radiant?: number;
        teamid_dire?: number;
        picks?: {
            hero?: number;
            team?: number;
        }[];
        bans?: {
            hero?: number;
            team?: number;
        }[];
        kills?: {
            player_id?: number;
            death_time?: number;
            killer_player_id?: number;
        }[];
        broadcasters?: {
            player_id?: number;
        }[];
        game_mode?: number;
        league_id?: number;
        league_node_id?: number;
        single_team?: boolean;
        cheers_peak?: number;
        lobby_type?: number;
        start_timestamp?: number;
    } & {
        server_steam_id?: string;
        match_id?: string;
        timestamp?: number;
        time_of_day?: number;
        is_nightstalker_night?: boolean;
        game_time?: number;
        game_state?: number;
        teamid_radiant?: number;
        teamid_dire?: number;
        picks?: {
            hero?: number;
            team?: number;
        }[] & ({
            hero?: number;
            team?: number;
        } & {
            hero?: number;
            team?: number;
        } & { [K in Exclude<keyof I["picks"][number], keyof CMsgDOTARealtimeGameStats_PickBanDetails>]: never; })[] & { [K_1 in Exclude<keyof I["picks"], keyof {
            hero?: number;
            team?: number;
        }[]>]: never; };
        bans?: {
            hero?: number;
            team?: number;
        }[] & ({
            hero?: number;
            team?: number;
        } & {
            hero?: number;
            team?: number;
        } & { [K_2 in Exclude<keyof I["bans"][number], keyof CMsgDOTARealtimeGameStats_PickBanDetails>]: never; })[] & { [K_3 in Exclude<keyof I["bans"], keyof {
            hero?: number;
            team?: number;
        }[]>]: never; };
        kills?: {
            player_id?: number;
            death_time?: number;
            killer_player_id?: number;
        }[] & ({
            player_id?: number;
            death_time?: number;
            killer_player_id?: number;
        } & {
            player_id?: number;
            death_time?: number;
            killer_player_id?: number;
        } & { [K_4 in Exclude<keyof I["kills"][number], keyof CMsgDOTARealtimeGameStats_KillDetails>]: never; })[] & { [K_5 in Exclude<keyof I["kills"], keyof {
            player_id?: number;
            death_time?: number;
            killer_player_id?: number;
        }[]>]: never; };
        broadcasters?: {
            player_id?: number;
        }[] & ({
            player_id?: number;
        } & {
            player_id?: number;
        } & { [K_6 in Exclude<keyof I["broadcasters"][number], "player_id">]: never; })[] & { [K_7 in Exclude<keyof I["broadcasters"], keyof {
            player_id?: number;
        }[]>]: never; };
        game_mode?: number;
        league_id?: number;
        league_node_id?: number;
        single_team?: boolean;
        cheers_peak?: number;
        lobby_type?: number;
        start_timestamp?: number;
    } & { [K_8 in Exclude<keyof I, keyof CMsgDOTARealtimeGameStats_MatchDetails>]: never; }>(base?: I): CMsgDOTARealtimeGameStats_MatchDetails;
    fromPartial<I_1 extends {
        server_steam_id?: string;
        match_id?: string;
        timestamp?: number;
        time_of_day?: number;
        is_nightstalker_night?: boolean;
        game_time?: number;
        game_state?: number;
        teamid_radiant?: number;
        teamid_dire?: number;
        picks?: {
            hero?: number;
            team?: number;
        }[];
        bans?: {
            hero?: number;
            team?: number;
        }[];
        kills?: {
            player_id?: number;
            death_time?: number;
            killer_player_id?: number;
        }[];
        broadcasters?: {
            player_id?: number;
        }[];
        game_mode?: number;
        league_id?: number;
        league_node_id?: number;
        single_team?: boolean;
        cheers_peak?: number;
        lobby_type?: number;
        start_timestamp?: number;
    } & {
        server_steam_id?: string;
        match_id?: string;
        timestamp?: number;
        time_of_day?: number;
        is_nightstalker_night?: boolean;
        game_time?: number;
        game_state?: number;
        teamid_radiant?: number;
        teamid_dire?: number;
        picks?: {
            hero?: number;
            team?: number;
        }[] & ({
            hero?: number;
            team?: number;
        } & {
            hero?: number;
            team?: number;
        } & { [K_9 in Exclude<keyof I_1["picks"][number], keyof CMsgDOTARealtimeGameStats_PickBanDetails>]: never; })[] & { [K_10 in Exclude<keyof I_1["picks"], keyof {
            hero?: number;
            team?: number;
        }[]>]: never; };
        bans?: {
            hero?: number;
            team?: number;
        }[] & ({
            hero?: number;
            team?: number;
        } & {
            hero?: number;
            team?: number;
        } & { [K_11 in Exclude<keyof I_1["bans"][number], keyof CMsgDOTARealtimeGameStats_PickBanDetails>]: never; })[] & { [K_12 in Exclude<keyof I_1["bans"], keyof {
            hero?: number;
            team?: number;
        }[]>]: never; };
        kills?: {
            player_id?: number;
            death_time?: number;
            killer_player_id?: number;
        }[] & ({
            player_id?: number;
            death_time?: number;
            killer_player_id?: number;
        } & {
            player_id?: number;
            death_time?: number;
            killer_player_id?: number;
        } & { [K_13 in Exclude<keyof I_1["kills"][number], keyof CMsgDOTARealtimeGameStats_KillDetails>]: never; })[] & { [K_14 in Exclude<keyof I_1["kills"], keyof {
            player_id?: number;
            death_time?: number;
            killer_player_id?: number;
        }[]>]: never; };
        broadcasters?: {
            player_id?: number;
        }[] & ({
            player_id?: number;
        } & {
            player_id?: number;
        } & { [K_15 in Exclude<keyof I_1["broadcasters"][number], "player_id">]: never; })[] & { [K_16 in Exclude<keyof I_1["broadcasters"], keyof {
            player_id?: number;
        }[]>]: never; };
        game_mode?: number;
        league_id?: number;
        league_node_id?: number;
        single_team?: boolean;
        cheers_peak?: number;
        lobby_type?: number;
        start_timestamp?: number;
    } & { [K_17 in Exclude<keyof I_1, keyof CMsgDOTARealtimeGameStats_MatchDetails>]: never; }>(object: I_1): CMsgDOTARealtimeGameStats_MatchDetails;
};
export declare const CMsgDOTARealtimeGameStats_GraphData: {
    fromJSON(object: any): CMsgDOTARealtimeGameStats_GraphData;
    toJSON(message: CMsgDOTARealtimeGameStats_GraphData): unknown;
    create<I extends {
        graph_gold?: number[];
        graph_xp?: number[];
        graph_kill?: number[];
        graph_tower?: number[];
        graph_rax?: number[];
        team_loc_stats?: {
            loc_stats?: {
                stats?: number[];
            }[];
        }[];
    } & {
        graph_gold?: number[] & number[] & { [K in Exclude<keyof I["graph_gold"], keyof number[]>]: never; };
        graph_xp?: number[] & number[] & { [K_1 in Exclude<keyof I["graph_xp"], keyof number[]>]: never; };
        graph_kill?: number[] & number[] & { [K_2 in Exclude<keyof I["graph_kill"], keyof number[]>]: never; };
        graph_tower?: number[] & number[] & { [K_3 in Exclude<keyof I["graph_tower"], keyof number[]>]: never; };
        graph_rax?: number[] & number[] & { [K_4 in Exclude<keyof I["graph_rax"], keyof number[]>]: never; };
        team_loc_stats?: {
            loc_stats?: {
                stats?: number[];
            }[];
        }[] & ({
            loc_stats?: {
                stats?: number[];
            }[];
        } & {
            loc_stats?: {
                stats?: number[];
            }[] & ({
                stats?: number[];
            } & {
                stats?: number[] & number[] & { [K_5 in Exclude<keyof I["team_loc_stats"][number]["loc_stats"][number]["stats"], keyof number[]>]: never; };
            } & { [K_6 in Exclude<keyof I["team_loc_stats"][number]["loc_stats"][number], "stats">]: never; })[] & { [K_7 in Exclude<keyof I["team_loc_stats"][number]["loc_stats"], keyof {
                stats?: number[];
            }[]>]: never; };
        } & { [K_8 in Exclude<keyof I["team_loc_stats"][number], "loc_stats">]: never; })[] & { [K_9 in Exclude<keyof I["team_loc_stats"], keyof {
            loc_stats?: {
                stats?: number[];
            }[];
        }[]>]: never; };
    } & { [K_10 in Exclude<keyof I, keyof CMsgDOTARealtimeGameStats_GraphData>]: never; }>(base?: I): CMsgDOTARealtimeGameStats_GraphData;
    fromPartial<I_1 extends {
        graph_gold?: number[];
        graph_xp?: number[];
        graph_kill?: number[];
        graph_tower?: number[];
        graph_rax?: number[];
        team_loc_stats?: {
            loc_stats?: {
                stats?: number[];
            }[];
        }[];
    } & {
        graph_gold?: number[] & number[] & { [K_11 in Exclude<keyof I_1["graph_gold"], keyof number[]>]: never; };
        graph_xp?: number[] & number[] & { [K_12 in Exclude<keyof I_1["graph_xp"], keyof number[]>]: never; };
        graph_kill?: number[] & number[] & { [K_13 in Exclude<keyof I_1["graph_kill"], keyof number[]>]: never; };
        graph_tower?: number[] & number[] & { [K_14 in Exclude<keyof I_1["graph_tower"], keyof number[]>]: never; };
        graph_rax?: number[] & number[] & { [K_15 in Exclude<keyof I_1["graph_rax"], keyof number[]>]: never; };
        team_loc_stats?: {
            loc_stats?: {
                stats?: number[];
            }[];
        }[] & ({
            loc_stats?: {
                stats?: number[];
            }[];
        } & {
            loc_stats?: {
                stats?: number[];
            }[] & ({
                stats?: number[];
            } & {
                stats?: number[] & number[] & { [K_16 in Exclude<keyof I_1["team_loc_stats"][number]["loc_stats"][number]["stats"], keyof number[]>]: never; };
            } & { [K_17 in Exclude<keyof I_1["team_loc_stats"][number]["loc_stats"][number], "stats">]: never; })[] & { [K_18 in Exclude<keyof I_1["team_loc_stats"][number]["loc_stats"], keyof {
                stats?: number[];
            }[]>]: never; };
        } & { [K_19 in Exclude<keyof I_1["team_loc_stats"][number], "loc_stats">]: never; })[] & { [K_20 in Exclude<keyof I_1["team_loc_stats"], keyof {
            loc_stats?: {
                stats?: number[];
            }[];
        }[]>]: never; };
    } & { [K_21 in Exclude<keyof I_1, keyof CMsgDOTARealtimeGameStats_GraphData>]: never; }>(object: I_1): CMsgDOTARealtimeGameStats_GraphData;
};
export declare const CMsgDOTARealtimeGameStats_GraphData_LocationStats: {
    fromJSON(object: any): CMsgDOTARealtimeGameStats_GraphData_LocationStats;
    toJSON(message: CMsgDOTARealtimeGameStats_GraphData_LocationStats): unknown;
    create<I extends {
        stats?: number[];
    } & {
        stats?: number[] & number[] & { [K in Exclude<keyof I["stats"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, "stats">]: never; }>(base?: I): CMsgDOTARealtimeGameStats_GraphData_LocationStats;
    fromPartial<I_1 extends {
        stats?: number[];
    } & {
        stats?: number[] & number[] & { [K_2 in Exclude<keyof I_1["stats"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "stats">]: never; }>(object: I_1): CMsgDOTARealtimeGameStats_GraphData_LocationStats;
};
export declare const CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats: {
    fromJSON(object: any): CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats;
    toJSON(message: CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats): unknown;
    create<I extends {
        loc_stats?: {
            stats?: number[];
        }[];
    } & {
        loc_stats?: {
            stats?: number[];
        }[] & ({
            stats?: number[];
        } & {
            stats?: number[] & number[] & { [K in Exclude<keyof I["loc_stats"][number]["stats"], keyof number[]>]: never; };
        } & { [K_1 in Exclude<keyof I["loc_stats"][number], "stats">]: never; })[] & { [K_2 in Exclude<keyof I["loc_stats"], keyof {
            stats?: number[];
        }[]>]: never; };
    } & { [K_3 in Exclude<keyof I, "loc_stats">]: never; }>(base?: I): CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats;
    fromPartial<I_1 extends {
        loc_stats?: {
            stats?: number[];
        }[];
    } & {
        loc_stats?: {
            stats?: number[];
        }[] & ({
            stats?: number[];
        } & {
            stats?: number[] & number[] & { [K_4 in Exclude<keyof I_1["loc_stats"][number]["stats"], keyof number[]>]: never; };
        } & { [K_5 in Exclude<keyof I_1["loc_stats"][number], "stats">]: never; })[] & { [K_6 in Exclude<keyof I_1["loc_stats"], keyof {
            stats?: number[];
        }[]>]: never; };
    } & { [K_7 in Exclude<keyof I_1, "loc_stats">]: never; }>(object: I_1): CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats;
};
export declare const CMsgDOTARealtimeGameStatsTerse: {
    fromJSON(object: any): CMsgDOTARealtimeGameStatsTerse;
    toJSON(message: CMsgDOTARealtimeGameStatsTerse): unknown;
    create<I extends {
        match?: {
            server_steam_id?: string;
            match_id?: string;
            timestamp?: number;
            game_time?: number;
            steam_broadcaster_account_ids?: number[];
            game_mode?: number;
            league_id?: number;
            league_node_id?: number;
            game_state?: number;
            picks?: {
                hero?: number;
                team?: number;
            }[];
            bans?: {
                hero?: number;
                team?: number;
            }[];
            lobby_type?: number;
            start_timestamp?: number;
        };
        teams?: {
            team_number?: number;
            team_id?: number;
            team_name?: string;
            team_tag?: string;
            team_logo?: string;
            score?: number;
            net_worth?: number;
            team_logo_url?: string;
            players?: {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                gold?: number;
                x?: number;
                y?: number;
                net_worth?: number;
                abilities?: number[];
                items?: number[];
            }[];
        }[];
        buildings?: {
            team?: number;
            heading?: number;
            type?: number;
            lane?: number;
            tier?: number;
            x?: number;
            y?: number;
            destroyed?: boolean;
        }[];
        graph_data?: {
            graph_gold?: number[];
        };
        delta_frame?: boolean;
    } & {
        match?: {
            server_steam_id?: string;
            match_id?: string;
            timestamp?: number;
            game_time?: number;
            steam_broadcaster_account_ids?: number[];
            game_mode?: number;
            league_id?: number;
            league_node_id?: number;
            game_state?: number;
            picks?: {
                hero?: number;
                team?: number;
            }[];
            bans?: {
                hero?: number;
                team?: number;
            }[];
            lobby_type?: number;
            start_timestamp?: number;
        } & {
            server_steam_id?: string;
            match_id?: string;
            timestamp?: number;
            game_time?: number;
            steam_broadcaster_account_ids?: number[] & number[] & { [K in Exclude<keyof I["match"]["steam_broadcaster_account_ids"], keyof number[]>]: never; };
            game_mode?: number;
            league_id?: number;
            league_node_id?: number;
            game_state?: number;
            picks?: {
                hero?: number;
                team?: number;
            }[] & ({
                hero?: number;
                team?: number;
            } & {
                hero?: number;
                team?: number;
            } & { [K_1 in Exclude<keyof I["match"]["picks"][number], keyof CMsgDOTARealtimeGameStatsTerse_PickBanDetails>]: never; })[] & { [K_2 in Exclude<keyof I["match"]["picks"], keyof {
                hero?: number;
                team?: number;
            }[]>]: never; };
            bans?: {
                hero?: number;
                team?: number;
            }[] & ({
                hero?: number;
                team?: number;
            } & {
                hero?: number;
                team?: number;
            } & { [K_3 in Exclude<keyof I["match"]["bans"][number], keyof CMsgDOTARealtimeGameStatsTerse_PickBanDetails>]: never; })[] & { [K_4 in Exclude<keyof I["match"]["bans"], keyof {
                hero?: number;
                team?: number;
            }[]>]: never; };
            lobby_type?: number;
            start_timestamp?: number;
        } & { [K_5 in Exclude<keyof I["match"], keyof CMsgDOTARealtimeGameStatsTerse_MatchDetails>]: never; };
        teams?: {
            team_number?: number;
            team_id?: number;
            team_name?: string;
            team_tag?: string;
            team_logo?: string;
            score?: number;
            net_worth?: number;
            team_logo_url?: string;
            players?: {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                gold?: number;
                x?: number;
                y?: number;
                net_worth?: number;
                abilities?: number[];
                items?: number[];
            }[];
        }[] & ({
            team_number?: number;
            team_id?: number;
            team_name?: string;
            team_tag?: string;
            team_logo?: string;
            score?: number;
            net_worth?: number;
            team_logo_url?: string;
            players?: {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                gold?: number;
                x?: number;
                y?: number;
                net_worth?: number;
                abilities?: number[];
                items?: number[];
            }[];
        } & {
            team_number?: number;
            team_id?: number;
            team_name?: string;
            team_tag?: string;
            team_logo?: string;
            score?: number;
            net_worth?: number;
            team_logo_url?: string;
            players?: {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                gold?: number;
                x?: number;
                y?: number;
                net_worth?: number;
                abilities?: number[];
                items?: number[];
            }[] & ({
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                gold?: number;
                x?: number;
                y?: number;
                net_worth?: number;
                abilities?: number[];
                items?: number[];
            } & {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                gold?: number;
                x?: number;
                y?: number;
                net_worth?: number;
                abilities?: number[] & number[] & { [K_6 in Exclude<keyof I["teams"][number]["players"][number]["abilities"], keyof number[]>]: never; };
                items?: number[] & number[] & { [K_7 in Exclude<keyof I["teams"][number]["players"][number]["items"], keyof number[]>]: never; };
            } & { [K_8 in Exclude<keyof I["teams"][number]["players"][number], keyof CMsgDOTARealtimeGameStatsTerse_PlayerDetails>]: never; })[] & { [K_9 in Exclude<keyof I["teams"][number]["players"], keyof {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                gold?: number;
                x?: number;
                y?: number;
                net_worth?: number;
                abilities?: number[];
                items?: number[];
            }[]>]: never; };
        } & { [K_10 in Exclude<keyof I["teams"][number], keyof CMsgDOTARealtimeGameStatsTerse_TeamDetails>]: never; })[] & { [K_11 in Exclude<keyof I["teams"], keyof {
            team_number?: number;
            team_id?: number;
            team_name?: string;
            team_tag?: string;
            team_logo?: string;
            score?: number;
            net_worth?: number;
            team_logo_url?: string;
            players?: {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                gold?: number;
                x?: number;
                y?: number;
                net_worth?: number;
                abilities?: number[];
                items?: number[];
            }[];
        }[]>]: never; };
        buildings?: {
            team?: number;
            heading?: number;
            type?: number;
            lane?: number;
            tier?: number;
            x?: number;
            y?: number;
            destroyed?: boolean;
        }[] & ({
            team?: number;
            heading?: number;
            type?: number;
            lane?: number;
            tier?: number;
            x?: number;
            y?: number;
            destroyed?: boolean;
        } & {
            team?: number;
            heading?: number;
            type?: number;
            lane?: number;
            tier?: number;
            x?: number;
            y?: number;
            destroyed?: boolean;
        } & { [K_12 in Exclude<keyof I["buildings"][number], keyof CMsgDOTARealtimeGameStatsTerse_BuildingDetails>]: never; })[] & { [K_13 in Exclude<keyof I["buildings"], keyof {
            team?: number;
            heading?: number;
            type?: number;
            lane?: number;
            tier?: number;
            x?: number;
            y?: number;
            destroyed?: boolean;
        }[]>]: never; };
        graph_data?: {
            graph_gold?: number[];
        } & {
            graph_gold?: number[] & number[] & { [K_14 in Exclude<keyof I["graph_data"]["graph_gold"], keyof number[]>]: never; };
        } & { [K_15 in Exclude<keyof I["graph_data"], "graph_gold">]: never; };
        delta_frame?: boolean;
    } & { [K_16 in Exclude<keyof I, keyof CMsgDOTARealtimeGameStatsTerse>]: never; }>(base?: I): CMsgDOTARealtimeGameStatsTerse;
    fromPartial<I_1 extends {
        match?: {
            server_steam_id?: string;
            match_id?: string;
            timestamp?: number;
            game_time?: number;
            steam_broadcaster_account_ids?: number[];
            game_mode?: number;
            league_id?: number;
            league_node_id?: number;
            game_state?: number;
            picks?: {
                hero?: number;
                team?: number;
            }[];
            bans?: {
                hero?: number;
                team?: number;
            }[];
            lobby_type?: number;
            start_timestamp?: number;
        };
        teams?: {
            team_number?: number;
            team_id?: number;
            team_name?: string;
            team_tag?: string;
            team_logo?: string;
            score?: number;
            net_worth?: number;
            team_logo_url?: string;
            players?: {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                gold?: number;
                x?: number;
                y?: number;
                net_worth?: number;
                abilities?: number[];
                items?: number[];
            }[];
        }[];
        buildings?: {
            team?: number;
            heading?: number;
            type?: number;
            lane?: number;
            tier?: number;
            x?: number;
            y?: number;
            destroyed?: boolean;
        }[];
        graph_data?: {
            graph_gold?: number[];
        };
        delta_frame?: boolean;
    } & {
        match?: {
            server_steam_id?: string;
            match_id?: string;
            timestamp?: number;
            game_time?: number;
            steam_broadcaster_account_ids?: number[];
            game_mode?: number;
            league_id?: number;
            league_node_id?: number;
            game_state?: number;
            picks?: {
                hero?: number;
                team?: number;
            }[];
            bans?: {
                hero?: number;
                team?: number;
            }[];
            lobby_type?: number;
            start_timestamp?: number;
        } & {
            server_steam_id?: string;
            match_id?: string;
            timestamp?: number;
            game_time?: number;
            steam_broadcaster_account_ids?: number[] & number[] & { [K_17 in Exclude<keyof I_1["match"]["steam_broadcaster_account_ids"], keyof number[]>]: never; };
            game_mode?: number;
            league_id?: number;
            league_node_id?: number;
            game_state?: number;
            picks?: {
                hero?: number;
                team?: number;
            }[] & ({
                hero?: number;
                team?: number;
            } & {
                hero?: number;
                team?: number;
            } & { [K_18 in Exclude<keyof I_1["match"]["picks"][number], keyof CMsgDOTARealtimeGameStatsTerse_PickBanDetails>]: never; })[] & { [K_19 in Exclude<keyof I_1["match"]["picks"], keyof {
                hero?: number;
                team?: number;
            }[]>]: never; };
            bans?: {
                hero?: number;
                team?: number;
            }[] & ({
                hero?: number;
                team?: number;
            } & {
                hero?: number;
                team?: number;
            } & { [K_20 in Exclude<keyof I_1["match"]["bans"][number], keyof CMsgDOTARealtimeGameStatsTerse_PickBanDetails>]: never; })[] & { [K_21 in Exclude<keyof I_1["match"]["bans"], keyof {
                hero?: number;
                team?: number;
            }[]>]: never; };
            lobby_type?: number;
            start_timestamp?: number;
        } & { [K_22 in Exclude<keyof I_1["match"], keyof CMsgDOTARealtimeGameStatsTerse_MatchDetails>]: never; };
        teams?: {
            team_number?: number;
            team_id?: number;
            team_name?: string;
            team_tag?: string;
            team_logo?: string;
            score?: number;
            net_worth?: number;
            team_logo_url?: string;
            players?: {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                gold?: number;
                x?: number;
                y?: number;
                net_worth?: number;
                abilities?: number[];
                items?: number[];
            }[];
        }[] & ({
            team_number?: number;
            team_id?: number;
            team_name?: string;
            team_tag?: string;
            team_logo?: string;
            score?: number;
            net_worth?: number;
            team_logo_url?: string;
            players?: {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                gold?: number;
                x?: number;
                y?: number;
                net_worth?: number;
                abilities?: number[];
                items?: number[];
            }[];
        } & {
            team_number?: number;
            team_id?: number;
            team_name?: string;
            team_tag?: string;
            team_logo?: string;
            score?: number;
            net_worth?: number;
            team_logo_url?: string;
            players?: {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                gold?: number;
                x?: number;
                y?: number;
                net_worth?: number;
                abilities?: number[];
                items?: number[];
            }[] & ({
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                gold?: number;
                x?: number;
                y?: number;
                net_worth?: number;
                abilities?: number[];
                items?: number[];
            } & {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                gold?: number;
                x?: number;
                y?: number;
                net_worth?: number;
                abilities?: number[] & number[] & { [K_23 in Exclude<keyof I_1["teams"][number]["players"][number]["abilities"], keyof number[]>]: never; };
                items?: number[] & number[] & { [K_24 in Exclude<keyof I_1["teams"][number]["players"][number]["items"], keyof number[]>]: never; };
            } & { [K_25 in Exclude<keyof I_1["teams"][number]["players"][number], keyof CMsgDOTARealtimeGameStatsTerse_PlayerDetails>]: never; })[] & { [K_26 in Exclude<keyof I_1["teams"][number]["players"], keyof {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                gold?: number;
                x?: number;
                y?: number;
                net_worth?: number;
                abilities?: number[];
                items?: number[];
            }[]>]: never; };
        } & { [K_27 in Exclude<keyof I_1["teams"][number], keyof CMsgDOTARealtimeGameStatsTerse_TeamDetails>]: never; })[] & { [K_28 in Exclude<keyof I_1["teams"], keyof {
            team_number?: number;
            team_id?: number;
            team_name?: string;
            team_tag?: string;
            team_logo?: string;
            score?: number;
            net_worth?: number;
            team_logo_url?: string;
            players?: {
                accountid?: number;
                playerid?: number;
                name?: string;
                team?: number;
                heroid?: number;
                level?: number;
                kill_count?: number;
                death_count?: number;
                assists_count?: number;
                denies_count?: number;
                lh_count?: number;
                gold?: number;
                x?: number;
                y?: number;
                net_worth?: number;
                abilities?: number[];
                items?: number[];
            }[];
        }[]>]: never; };
        buildings?: {
            team?: number;
            heading?: number;
            type?: number;
            lane?: number;
            tier?: number;
            x?: number;
            y?: number;
            destroyed?: boolean;
        }[] & ({
            team?: number;
            heading?: number;
            type?: number;
            lane?: number;
            tier?: number;
            x?: number;
            y?: number;
            destroyed?: boolean;
        } & {
            team?: number;
            heading?: number;
            type?: number;
            lane?: number;
            tier?: number;
            x?: number;
            y?: number;
            destroyed?: boolean;
        } & { [K_29 in Exclude<keyof I_1["buildings"][number], keyof CMsgDOTARealtimeGameStatsTerse_BuildingDetails>]: never; })[] & { [K_30 in Exclude<keyof I_1["buildings"], keyof {
            team?: number;
            heading?: number;
            type?: number;
            lane?: number;
            tier?: number;
            x?: number;
            y?: number;
            destroyed?: boolean;
        }[]>]: never; };
        graph_data?: {
            graph_gold?: number[];
        } & {
            graph_gold?: number[] & number[] & { [K_31 in Exclude<keyof I_1["graph_data"]["graph_gold"], keyof number[]>]: never; };
        } & { [K_32 in Exclude<keyof I_1["graph_data"], "graph_gold">]: never; };
        delta_frame?: boolean;
    } & { [K_33 in Exclude<keyof I_1, keyof CMsgDOTARealtimeGameStatsTerse>]: never; }>(object: I_1): CMsgDOTARealtimeGameStatsTerse;
};
export declare const CMsgDOTARealtimeGameStatsTerse_TeamDetails: {
    fromJSON(object: any): CMsgDOTARealtimeGameStatsTerse_TeamDetails;
    toJSON(message: CMsgDOTARealtimeGameStatsTerse_TeamDetails): unknown;
    create<I extends {
        team_number?: number;
        team_id?: number;
        team_name?: string;
        team_tag?: string;
        team_logo?: string;
        score?: number;
        net_worth?: number;
        team_logo_url?: string;
        players?: {
            accountid?: number;
            playerid?: number;
            name?: string;
            team?: number;
            heroid?: number;
            level?: number;
            kill_count?: number;
            death_count?: number;
            assists_count?: number;
            denies_count?: number;
            lh_count?: number;
            gold?: number;
            x?: number;
            y?: number;
            net_worth?: number;
            abilities?: number[];
            items?: number[];
        }[];
    } & {
        team_number?: number;
        team_id?: number;
        team_name?: string;
        team_tag?: string;
        team_logo?: string;
        score?: number;
        net_worth?: number;
        team_logo_url?: string;
        players?: {
            accountid?: number;
            playerid?: number;
            name?: string;
            team?: number;
            heroid?: number;
            level?: number;
            kill_count?: number;
            death_count?: number;
            assists_count?: number;
            denies_count?: number;
            lh_count?: number;
            gold?: number;
            x?: number;
            y?: number;
            net_worth?: number;
            abilities?: number[];
            items?: number[];
        }[] & ({
            accountid?: number;
            playerid?: number;
            name?: string;
            team?: number;
            heroid?: number;
            level?: number;
            kill_count?: number;
            death_count?: number;
            assists_count?: number;
            denies_count?: number;
            lh_count?: number;
            gold?: number;
            x?: number;
            y?: number;
            net_worth?: number;
            abilities?: number[];
            items?: number[];
        } & {
            accountid?: number;
            playerid?: number;
            name?: string;
            team?: number;
            heroid?: number;
            level?: number;
            kill_count?: number;
            death_count?: number;
            assists_count?: number;
            denies_count?: number;
            lh_count?: number;
            gold?: number;
            x?: number;
            y?: number;
            net_worth?: number;
            abilities?: number[] & number[] & { [K in Exclude<keyof I["players"][number]["abilities"], keyof number[]>]: never; };
            items?: number[] & number[] & { [K_1 in Exclude<keyof I["players"][number]["items"], keyof number[]>]: never; };
        } & { [K_2 in Exclude<keyof I["players"][number], keyof CMsgDOTARealtimeGameStatsTerse_PlayerDetails>]: never; })[] & { [K_3 in Exclude<keyof I["players"], keyof {
            accountid?: number;
            playerid?: number;
            name?: string;
            team?: number;
            heroid?: number;
            level?: number;
            kill_count?: number;
            death_count?: number;
            assists_count?: number;
            denies_count?: number;
            lh_count?: number;
            gold?: number;
            x?: number;
            y?: number;
            net_worth?: number;
            abilities?: number[];
            items?: number[];
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof CMsgDOTARealtimeGameStatsTerse_TeamDetails>]: never; }>(base?: I): CMsgDOTARealtimeGameStatsTerse_TeamDetails;
    fromPartial<I_1 extends {
        team_number?: number;
        team_id?: number;
        team_name?: string;
        team_tag?: string;
        team_logo?: string;
        score?: number;
        net_worth?: number;
        team_logo_url?: string;
        players?: {
            accountid?: number;
            playerid?: number;
            name?: string;
            team?: number;
            heroid?: number;
            level?: number;
            kill_count?: number;
            death_count?: number;
            assists_count?: number;
            denies_count?: number;
            lh_count?: number;
            gold?: number;
            x?: number;
            y?: number;
            net_worth?: number;
            abilities?: number[];
            items?: number[];
        }[];
    } & {
        team_number?: number;
        team_id?: number;
        team_name?: string;
        team_tag?: string;
        team_logo?: string;
        score?: number;
        net_worth?: number;
        team_logo_url?: string;
        players?: {
            accountid?: number;
            playerid?: number;
            name?: string;
            team?: number;
            heroid?: number;
            level?: number;
            kill_count?: number;
            death_count?: number;
            assists_count?: number;
            denies_count?: number;
            lh_count?: number;
            gold?: number;
            x?: number;
            y?: number;
            net_worth?: number;
            abilities?: number[];
            items?: number[];
        }[] & ({
            accountid?: number;
            playerid?: number;
            name?: string;
            team?: number;
            heroid?: number;
            level?: number;
            kill_count?: number;
            death_count?: number;
            assists_count?: number;
            denies_count?: number;
            lh_count?: number;
            gold?: number;
            x?: number;
            y?: number;
            net_worth?: number;
            abilities?: number[];
            items?: number[];
        } & {
            accountid?: number;
            playerid?: number;
            name?: string;
            team?: number;
            heroid?: number;
            level?: number;
            kill_count?: number;
            death_count?: number;
            assists_count?: number;
            denies_count?: number;
            lh_count?: number;
            gold?: number;
            x?: number;
            y?: number;
            net_worth?: number;
            abilities?: number[] & number[] & { [K_5 in Exclude<keyof I_1["players"][number]["abilities"], keyof number[]>]: never; };
            items?: number[] & number[] & { [K_6 in Exclude<keyof I_1["players"][number]["items"], keyof number[]>]: never; };
        } & { [K_7 in Exclude<keyof I_1["players"][number], keyof CMsgDOTARealtimeGameStatsTerse_PlayerDetails>]: never; })[] & { [K_8 in Exclude<keyof I_1["players"], keyof {
            accountid?: number;
            playerid?: number;
            name?: string;
            team?: number;
            heroid?: number;
            level?: number;
            kill_count?: number;
            death_count?: number;
            assists_count?: number;
            denies_count?: number;
            lh_count?: number;
            gold?: number;
            x?: number;
            y?: number;
            net_worth?: number;
            abilities?: number[];
            items?: number[];
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof CMsgDOTARealtimeGameStatsTerse_TeamDetails>]: never; }>(object: I_1): CMsgDOTARealtimeGameStatsTerse_TeamDetails;
};
export declare const CMsgDOTARealtimeGameStatsTerse_PlayerDetails: {
    fromJSON(object: any): CMsgDOTARealtimeGameStatsTerse_PlayerDetails;
    toJSON(message: CMsgDOTARealtimeGameStatsTerse_PlayerDetails): unknown;
    create<I extends {
        accountid?: number;
        playerid?: number;
        name?: string;
        team?: number;
        heroid?: number;
        level?: number;
        kill_count?: number;
        death_count?: number;
        assists_count?: number;
        denies_count?: number;
        lh_count?: number;
        gold?: number;
        x?: number;
        y?: number;
        net_worth?: number;
        abilities?: number[];
        items?: number[];
    } & {
        accountid?: number;
        playerid?: number;
        name?: string;
        team?: number;
        heroid?: number;
        level?: number;
        kill_count?: number;
        death_count?: number;
        assists_count?: number;
        denies_count?: number;
        lh_count?: number;
        gold?: number;
        x?: number;
        y?: number;
        net_worth?: number;
        abilities?: number[] & number[] & { [K in Exclude<keyof I["abilities"], keyof number[]>]: never; };
        items?: number[] & number[] & { [K_1 in Exclude<keyof I["items"], keyof number[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgDOTARealtimeGameStatsTerse_PlayerDetails>]: never; }>(base?: I): CMsgDOTARealtimeGameStatsTerse_PlayerDetails;
    fromPartial<I_1 extends {
        accountid?: number;
        playerid?: number;
        name?: string;
        team?: number;
        heroid?: number;
        level?: number;
        kill_count?: number;
        death_count?: number;
        assists_count?: number;
        denies_count?: number;
        lh_count?: number;
        gold?: number;
        x?: number;
        y?: number;
        net_worth?: number;
        abilities?: number[];
        items?: number[];
    } & {
        accountid?: number;
        playerid?: number;
        name?: string;
        team?: number;
        heroid?: number;
        level?: number;
        kill_count?: number;
        death_count?: number;
        assists_count?: number;
        denies_count?: number;
        lh_count?: number;
        gold?: number;
        x?: number;
        y?: number;
        net_worth?: number;
        abilities?: number[] & number[] & { [K_3 in Exclude<keyof I_1["abilities"], keyof number[]>]: never; };
        items?: number[] & number[] & { [K_4 in Exclude<keyof I_1["items"], keyof number[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgDOTARealtimeGameStatsTerse_PlayerDetails>]: never; }>(object: I_1): CMsgDOTARealtimeGameStatsTerse_PlayerDetails;
};
export declare const CMsgDOTARealtimeGameStatsTerse_BuildingDetails: {
    fromJSON(object: any): CMsgDOTARealtimeGameStatsTerse_BuildingDetails;
    toJSON(message: CMsgDOTARealtimeGameStatsTerse_BuildingDetails): unknown;
    create<I extends {
        team?: number;
        heading?: number;
        type?: number;
        lane?: number;
        tier?: number;
        x?: number;
        y?: number;
        destroyed?: boolean;
    } & {
        team?: number;
        heading?: number;
        type?: number;
        lane?: number;
        tier?: number;
        x?: number;
        y?: number;
        destroyed?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgDOTARealtimeGameStatsTerse_BuildingDetails>]: never; }>(base?: I): CMsgDOTARealtimeGameStatsTerse_BuildingDetails;
    fromPartial<I_1 extends {
        team?: number;
        heading?: number;
        type?: number;
        lane?: number;
        tier?: number;
        x?: number;
        y?: number;
        destroyed?: boolean;
    } & {
        team?: number;
        heading?: number;
        type?: number;
        lane?: number;
        tier?: number;
        x?: number;
        y?: number;
        destroyed?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTARealtimeGameStatsTerse_BuildingDetails>]: never; }>(object: I_1): CMsgDOTARealtimeGameStatsTerse_BuildingDetails;
};
export declare const CMsgDOTARealtimeGameStatsTerse_PickBanDetails: {
    fromJSON(object: any): CMsgDOTARealtimeGameStatsTerse_PickBanDetails;
    toJSON(message: CMsgDOTARealtimeGameStatsTerse_PickBanDetails): unknown;
    create<I extends {
        hero?: number;
        team?: number;
    } & {
        hero?: number;
        team?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTARealtimeGameStatsTerse_PickBanDetails>]: never; }>(base?: I): CMsgDOTARealtimeGameStatsTerse_PickBanDetails;
    fromPartial<I_1 extends {
        hero?: number;
        team?: number;
    } & {
        hero?: number;
        team?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTARealtimeGameStatsTerse_PickBanDetails>]: never; }>(object: I_1): CMsgDOTARealtimeGameStatsTerse_PickBanDetails;
};
export declare const CMsgDOTARealtimeGameStatsTerse_MatchDetails: {
    fromJSON(object: any): CMsgDOTARealtimeGameStatsTerse_MatchDetails;
    toJSON(message: CMsgDOTARealtimeGameStatsTerse_MatchDetails): unknown;
    create<I extends {
        server_steam_id?: string;
        match_id?: string;
        timestamp?: number;
        game_time?: number;
        steam_broadcaster_account_ids?: number[];
        game_mode?: number;
        league_id?: number;
        league_node_id?: number;
        game_state?: number;
        picks?: {
            hero?: number;
            team?: number;
        }[];
        bans?: {
            hero?: number;
            team?: number;
        }[];
        lobby_type?: number;
        start_timestamp?: number;
    } & {
        server_steam_id?: string;
        match_id?: string;
        timestamp?: number;
        game_time?: number;
        steam_broadcaster_account_ids?: number[] & number[] & { [K in Exclude<keyof I["steam_broadcaster_account_ids"], keyof number[]>]: never; };
        game_mode?: number;
        league_id?: number;
        league_node_id?: number;
        game_state?: number;
        picks?: {
            hero?: number;
            team?: number;
        }[] & ({
            hero?: number;
            team?: number;
        } & {
            hero?: number;
            team?: number;
        } & { [K_1 in Exclude<keyof I["picks"][number], keyof CMsgDOTARealtimeGameStatsTerse_PickBanDetails>]: never; })[] & { [K_2 in Exclude<keyof I["picks"], keyof {
            hero?: number;
            team?: number;
        }[]>]: never; };
        bans?: {
            hero?: number;
            team?: number;
        }[] & ({
            hero?: number;
            team?: number;
        } & {
            hero?: number;
            team?: number;
        } & { [K_3 in Exclude<keyof I["bans"][number], keyof CMsgDOTARealtimeGameStatsTerse_PickBanDetails>]: never; })[] & { [K_4 in Exclude<keyof I["bans"], keyof {
            hero?: number;
            team?: number;
        }[]>]: never; };
        lobby_type?: number;
        start_timestamp?: number;
    } & { [K_5 in Exclude<keyof I, keyof CMsgDOTARealtimeGameStatsTerse_MatchDetails>]: never; }>(base?: I): CMsgDOTARealtimeGameStatsTerse_MatchDetails;
    fromPartial<I_1 extends {
        server_steam_id?: string;
        match_id?: string;
        timestamp?: number;
        game_time?: number;
        steam_broadcaster_account_ids?: number[];
        game_mode?: number;
        league_id?: number;
        league_node_id?: number;
        game_state?: number;
        picks?: {
            hero?: number;
            team?: number;
        }[];
        bans?: {
            hero?: number;
            team?: number;
        }[];
        lobby_type?: number;
        start_timestamp?: number;
    } & {
        server_steam_id?: string;
        match_id?: string;
        timestamp?: number;
        game_time?: number;
        steam_broadcaster_account_ids?: number[] & number[] & { [K_6 in Exclude<keyof I_1["steam_broadcaster_account_ids"], keyof number[]>]: never; };
        game_mode?: number;
        league_id?: number;
        league_node_id?: number;
        game_state?: number;
        picks?: {
            hero?: number;
            team?: number;
        }[] & ({
            hero?: number;
            team?: number;
        } & {
            hero?: number;
            team?: number;
        } & { [K_7 in Exclude<keyof I_1["picks"][number], keyof CMsgDOTARealtimeGameStatsTerse_PickBanDetails>]: never; })[] & { [K_8 in Exclude<keyof I_1["picks"], keyof {
            hero?: number;
            team?: number;
        }[]>]: never; };
        bans?: {
            hero?: number;
            team?: number;
        }[] & ({
            hero?: number;
            team?: number;
        } & {
            hero?: number;
            team?: number;
        } & { [K_9 in Exclude<keyof I_1["bans"][number], keyof CMsgDOTARealtimeGameStatsTerse_PickBanDetails>]: never; })[] & { [K_10 in Exclude<keyof I_1["bans"], keyof {
            hero?: number;
            team?: number;
        }[]>]: never; };
        lobby_type?: number;
        start_timestamp?: number;
    } & { [K_11 in Exclude<keyof I_1, keyof CMsgDOTARealtimeGameStatsTerse_MatchDetails>]: never; }>(object: I_1): CMsgDOTARealtimeGameStatsTerse_MatchDetails;
};
export declare const CMsgDOTARealtimeGameStatsTerse_GraphData: {
    fromJSON(object: any): CMsgDOTARealtimeGameStatsTerse_GraphData;
    toJSON(message: CMsgDOTARealtimeGameStatsTerse_GraphData): unknown;
    create<I extends {
        graph_gold?: number[];
    } & {
        graph_gold?: number[] & number[] & { [K in Exclude<keyof I["graph_gold"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, "graph_gold">]: never; }>(base?: I): CMsgDOTARealtimeGameStatsTerse_GraphData;
    fromPartial<I_1 extends {
        graph_gold?: number[];
    } & {
        graph_gold?: number[] & number[] & { [K_2 in Exclude<keyof I_1["graph_gold"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "graph_gold">]: never; }>(object: I_1): CMsgDOTARealtimeGameStatsTerse_GraphData;
};
export declare const CMsgDOTABroadcastTimelineEvent: {
    fromJSON(object: any): CMsgDOTABroadcastTimelineEvent;
    toJSON(message: CMsgDOTABroadcastTimelineEvent): unknown;
    create<I extends {
        event?: EBroadcastTimelineEvent;
        timestamp?: number;
        data?: number;
        string_data?: string;
    } & {
        event?: EBroadcastTimelineEvent;
        timestamp?: number;
        data?: number;
        string_data?: string;
    } & { [K in Exclude<keyof I, keyof CMsgDOTABroadcastTimelineEvent>]: never; }>(base?: I): CMsgDOTABroadcastTimelineEvent;
    fromPartial<I_1 extends {
        event?: EBroadcastTimelineEvent;
        timestamp?: number;
        data?: number;
        string_data?: string;
    } & {
        event?: EBroadcastTimelineEvent;
        timestamp?: number;
        data?: number;
        string_data?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTABroadcastTimelineEvent>]: never; }>(object: I_1): CMsgDOTABroadcastTimelineEvent;
};
export declare const CMsgGCToClientMatchGroupsVersion: {
    fromJSON(object: any): CMsgGCToClientMatchGroupsVersion;
    toJSON(message: CMsgGCToClientMatchGroupsVersion): unknown;
    create<I extends {
        matchgroups_version?: number;
    } & {
        matchgroups_version?: number;
    } & { [K in Exclude<keyof I, "matchgroups_version">]: never; }>(base?: I): CMsgGCToClientMatchGroupsVersion;
    fromPartial<I_1 extends {
        matchgroups_version?: number;
    } & {
        matchgroups_version?: number;
    } & { [K_1 in Exclude<keyof I_1, "matchgroups_version">]: never; }>(object: I_1): CMsgGCToClientMatchGroupsVersion;
};
export declare const CMsgDOTASDOHeroStatsHistory: {
    fromJSON(object: any): CMsgDOTASDOHeroStatsHistory;
    toJSON(message: CMsgDOTASDOHeroStatsHistory): unknown;
    create<I extends {
        match_id?: string;
        game_mode?: number;
        lobby_type?: number;
        start_time?: number;
        won?: boolean;
        gpm?: number;
        xpm?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
    } & {
        match_id?: string;
        game_mode?: number;
        lobby_type?: number;
        start_time?: number;
        won?: boolean;
        gpm?: number;
        xpm?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTASDOHeroStatsHistory>]: never; }>(base?: I): CMsgDOTASDOHeroStatsHistory;
    fromPartial<I_1 extends {
        match_id?: string;
        game_mode?: number;
        lobby_type?: number;
        start_time?: number;
        won?: boolean;
        gpm?: number;
        xpm?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
    } & {
        match_id?: string;
        game_mode?: number;
        lobby_type?: number;
        start_time?: number;
        won?: boolean;
        gpm?: number;
        xpm?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTASDOHeroStatsHistory>]: never; }>(object: I_1): CMsgDOTASDOHeroStatsHistory;
};
export declare const CMsgPredictionChoice: {
    fromJSON(object: any): CMsgPredictionChoice;
    toJSON(message: CMsgPredictionChoice): unknown;
    create<I extends {
        value?: number;
        name?: string;
        min_raw_value?: number;
        max_raw_value?: number;
    } & {
        value?: number;
        name?: string;
        min_raw_value?: number;
        max_raw_value?: number;
    } & { [K in Exclude<keyof I, keyof CMsgPredictionChoice>]: never; }>(base?: I): CMsgPredictionChoice;
    fromPartial<I_1 extends {
        value?: number;
        name?: string;
        min_raw_value?: number;
        max_raw_value?: number;
    } & {
        value?: number;
        name?: string;
        min_raw_value?: number;
        max_raw_value?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgPredictionChoice>]: never; }>(object: I_1): CMsgPredictionChoice;
};
export declare const CMsgInGamePrediction: {
    fromJSON(object: any): CMsgInGamePrediction;
    toJSON(message: CMsgInGamePrediction): unknown;
    create<I extends {
        id?: number;
        name?: string;
        type?: CMsgInGamePrediction_EPredictionType;
        group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
        question?: string;
        choices?: {
            value?: number;
            name?: string;
            min_raw_value?: number;
            max_raw_value?: number;
        }[];
        required_heroes?: string[];
        query_name?: string;
        query_values?: {
            name?: string;
            value?: string;
        }[];
        answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
        points_to_grant?: number;
        reward_action?: number;
        debug_force_selection?: number;
        raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
    } & {
        id?: number;
        name?: string;
        type?: CMsgInGamePrediction_EPredictionType;
        group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
        question?: string;
        choices?: {
            value?: number;
            name?: string;
            min_raw_value?: number;
            max_raw_value?: number;
        }[] & ({
            value?: number;
            name?: string;
            min_raw_value?: number;
            max_raw_value?: number;
        } & {
            value?: number;
            name?: string;
            min_raw_value?: number;
            max_raw_value?: number;
        } & { [K in Exclude<keyof I["choices"][number], keyof CMsgPredictionChoice>]: never; })[] & { [K_1 in Exclude<keyof I["choices"], keyof {
            value?: number;
            name?: string;
            min_raw_value?: number;
            max_raw_value?: number;
        }[]>]: never; };
        required_heroes?: string[] & string[] & { [K_2 in Exclude<keyof I["required_heroes"], keyof string[]>]: never; };
        query_name?: string;
        query_values?: {
            name?: string;
            value?: string;
        }[] & ({
            name?: string;
            value?: string;
        } & {
            name?: string;
            value?: string;
        } & { [K_3 in Exclude<keyof I["query_values"][number], keyof CMsgInGamePrediction_QueryKeyValues>]: never; })[] & { [K_4 in Exclude<keyof I["query_values"], keyof {
            name?: string;
            value?: string;
        }[]>]: never; };
        answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
        points_to_grant?: number;
        reward_action?: number;
        debug_force_selection?: number;
        raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
    } & { [K_5 in Exclude<keyof I, keyof CMsgInGamePrediction>]: never; }>(base?: I): CMsgInGamePrediction;
    fromPartial<I_1 extends {
        id?: number;
        name?: string;
        type?: CMsgInGamePrediction_EPredictionType;
        group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
        question?: string;
        choices?: {
            value?: number;
            name?: string;
            min_raw_value?: number;
            max_raw_value?: number;
        }[];
        required_heroes?: string[];
        query_name?: string;
        query_values?: {
            name?: string;
            value?: string;
        }[];
        answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
        points_to_grant?: number;
        reward_action?: number;
        debug_force_selection?: number;
        raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
    } & {
        id?: number;
        name?: string;
        type?: CMsgInGamePrediction_EPredictionType;
        group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
        question?: string;
        choices?: {
            value?: number;
            name?: string;
            min_raw_value?: number;
            max_raw_value?: number;
        }[] & ({
            value?: number;
            name?: string;
            min_raw_value?: number;
            max_raw_value?: number;
        } & {
            value?: number;
            name?: string;
            min_raw_value?: number;
            max_raw_value?: number;
        } & { [K_6 in Exclude<keyof I_1["choices"][number], keyof CMsgPredictionChoice>]: never; })[] & { [K_7 in Exclude<keyof I_1["choices"], keyof {
            value?: number;
            name?: string;
            min_raw_value?: number;
            max_raw_value?: number;
        }[]>]: never; };
        required_heroes?: string[] & string[] & { [K_8 in Exclude<keyof I_1["required_heroes"], keyof string[]>]: never; };
        query_name?: string;
        query_values?: {
            name?: string;
            value?: string;
        }[] & ({
            name?: string;
            value?: string;
        } & {
            name?: string;
            value?: string;
        } & { [K_9 in Exclude<keyof I_1["query_values"][number], keyof CMsgInGamePrediction_QueryKeyValues>]: never; })[] & { [K_10 in Exclude<keyof I_1["query_values"], keyof {
            name?: string;
            value?: string;
        }[]>]: never; };
        answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
        points_to_grant?: number;
        reward_action?: number;
        debug_force_selection?: number;
        raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
    } & { [K_11 in Exclude<keyof I_1, keyof CMsgInGamePrediction>]: never; }>(object: I_1): CMsgInGamePrediction;
};
export declare const CMsgInGamePrediction_QueryKeyValues: {
    fromJSON(object: any): CMsgInGamePrediction_QueryKeyValues;
    toJSON(message: CMsgInGamePrediction_QueryKeyValues): unknown;
    create<I extends {
        name?: string;
        value?: string;
    } & {
        name?: string;
        value?: string;
    } & { [K in Exclude<keyof I, keyof CMsgInGamePrediction_QueryKeyValues>]: never; }>(base?: I): CMsgInGamePrediction_QueryKeyValues;
    fromPartial<I_1 extends {
        name?: string;
        value?: string;
    } & {
        name?: string;
        value?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgInGamePrediction_QueryKeyValues>]: never; }>(object: I_1): CMsgInGamePrediction_QueryKeyValues;
};
export declare const CMsgDOTASeasonPredictions: {
    fromJSON(object: any): CMsgDOTASeasonPredictions;
    toJSON(message: CMsgDOTASeasonPredictions): unknown;
    create<I extends {
        predictions?: {
            type?: CMsgDOTASeasonPredictions_Prediction_EPredictionType;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            selection_id?: number;
            start_date?: number;
            lock_date?: number;
            reward?: number;
            answer_type?: CMsgDOTASeasonPredictions_Prediction_EAnswerType;
            answer_id?: number;
            answers?: {
                answer_id?: number;
            }[];
            query_name?: string;
            lock_on_selection_id?: number;
            lock_on_selection_value?: number;
            lock_on_selection_set?: boolean;
            use_answer_value_ranges?: boolean;
            region?: ELeagueRegion;
            phases?: ELeaguePhase[];
            reward_event?: EEvent;
        }[];
        in_game_predictions?: {
            id?: number;
            name?: string;
            type?: CMsgInGamePrediction_EPredictionType;
            group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            required_heroes?: string[];
            query_name?: string;
            query_values?: {
                name?: string;
                value?: string;
            }[];
            answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
            points_to_grant?: number;
            reward_action?: number;
            debug_force_selection?: number;
            raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
        }[];
        in_game_prediction_count_per_game?: number;
        in_game_prediction_voting_period_minutes?: number;
    } & {
        predictions?: {
            type?: CMsgDOTASeasonPredictions_Prediction_EPredictionType;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            selection_id?: number;
            start_date?: number;
            lock_date?: number;
            reward?: number;
            answer_type?: CMsgDOTASeasonPredictions_Prediction_EAnswerType;
            answer_id?: number;
            answers?: {
                answer_id?: number;
            }[];
            query_name?: string;
            lock_on_selection_id?: number;
            lock_on_selection_value?: number;
            lock_on_selection_set?: boolean;
            use_answer_value_ranges?: boolean;
            region?: ELeagueRegion;
            phases?: ELeaguePhase[];
            reward_event?: EEvent;
        }[] & ({
            type?: CMsgDOTASeasonPredictions_Prediction_EPredictionType;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            selection_id?: number;
            start_date?: number;
            lock_date?: number;
            reward?: number;
            answer_type?: CMsgDOTASeasonPredictions_Prediction_EAnswerType;
            answer_id?: number;
            answers?: {
                answer_id?: number;
            }[];
            query_name?: string;
            lock_on_selection_id?: number;
            lock_on_selection_value?: number;
            lock_on_selection_set?: boolean;
            use_answer_value_ranges?: boolean;
            region?: ELeagueRegion;
            phases?: ELeaguePhase[];
            reward_event?: EEvent;
        } & {
            type?: CMsgDOTASeasonPredictions_Prediction_EPredictionType;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[] & ({
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            } & {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            } & { [K in Exclude<keyof I["predictions"][number]["choices"][number], keyof CMsgPredictionChoice>]: never; })[] & { [K_1 in Exclude<keyof I["predictions"][number]["choices"], keyof {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[]>]: never; };
            selection_id?: number;
            start_date?: number;
            lock_date?: number;
            reward?: number;
            answer_type?: CMsgDOTASeasonPredictions_Prediction_EAnswerType;
            answer_id?: number;
            answers?: {
                answer_id?: number;
            }[] & ({
                answer_id?: number;
            } & {
                answer_id?: number;
            } & { [K_2 in Exclude<keyof I["predictions"][number]["answers"][number], "answer_id">]: never; })[] & { [K_3 in Exclude<keyof I["predictions"][number]["answers"], keyof {
                answer_id?: number;
            }[]>]: never; };
            query_name?: string;
            lock_on_selection_id?: number;
            lock_on_selection_value?: number;
            lock_on_selection_set?: boolean;
            use_answer_value_ranges?: boolean;
            region?: ELeagueRegion;
            phases?: ELeaguePhase[] & ELeaguePhase[] & { [K_4 in Exclude<keyof I["predictions"][number]["phases"], keyof ELeaguePhase[]>]: never; };
            reward_event?: EEvent;
        } & { [K_5 in Exclude<keyof I["predictions"][number], keyof CMsgDOTASeasonPredictions_Prediction>]: never; })[] & { [K_6 in Exclude<keyof I["predictions"], keyof {
            type?: CMsgDOTASeasonPredictions_Prediction_EPredictionType;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            selection_id?: number;
            start_date?: number;
            lock_date?: number;
            reward?: number;
            answer_type?: CMsgDOTASeasonPredictions_Prediction_EAnswerType;
            answer_id?: number;
            answers?: {
                answer_id?: number;
            }[];
            query_name?: string;
            lock_on_selection_id?: number;
            lock_on_selection_value?: number;
            lock_on_selection_set?: boolean;
            use_answer_value_ranges?: boolean;
            region?: ELeagueRegion;
            phases?: ELeaguePhase[];
            reward_event?: EEvent;
        }[]>]: never; };
        in_game_predictions?: {
            id?: number;
            name?: string;
            type?: CMsgInGamePrediction_EPredictionType;
            group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            required_heroes?: string[];
            query_name?: string;
            query_values?: {
                name?: string;
                value?: string;
            }[];
            answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
            points_to_grant?: number;
            reward_action?: number;
            debug_force_selection?: number;
            raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
        }[] & ({
            id?: number;
            name?: string;
            type?: CMsgInGamePrediction_EPredictionType;
            group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            required_heroes?: string[];
            query_name?: string;
            query_values?: {
                name?: string;
                value?: string;
            }[];
            answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
            points_to_grant?: number;
            reward_action?: number;
            debug_force_selection?: number;
            raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
        } & {
            id?: number;
            name?: string;
            type?: CMsgInGamePrediction_EPredictionType;
            group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[] & ({
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            } & {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            } & { [K_7 in Exclude<keyof I["in_game_predictions"][number]["choices"][number], keyof CMsgPredictionChoice>]: never; })[] & { [K_8 in Exclude<keyof I["in_game_predictions"][number]["choices"], keyof {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[]>]: never; };
            required_heroes?: string[] & string[] & { [K_9 in Exclude<keyof I["in_game_predictions"][number]["required_heroes"], keyof string[]>]: never; };
            query_name?: string;
            query_values?: {
                name?: string;
                value?: string;
            }[] & ({
                name?: string;
                value?: string;
            } & {
                name?: string;
                value?: string;
            } & { [K_10 in Exclude<keyof I["in_game_predictions"][number]["query_values"][number], keyof CMsgInGamePrediction_QueryKeyValues>]: never; })[] & { [K_11 in Exclude<keyof I["in_game_predictions"][number]["query_values"], keyof {
                name?: string;
                value?: string;
            }[]>]: never; };
            answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
            points_to_grant?: number;
            reward_action?: number;
            debug_force_selection?: number;
            raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
        } & { [K_12 in Exclude<keyof I["in_game_predictions"][number], keyof CMsgInGamePrediction>]: never; })[] & { [K_13 in Exclude<keyof I["in_game_predictions"], keyof {
            id?: number;
            name?: string;
            type?: CMsgInGamePrediction_EPredictionType;
            group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            required_heroes?: string[];
            query_name?: string;
            query_values?: {
                name?: string;
                value?: string;
            }[];
            answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
            points_to_grant?: number;
            reward_action?: number;
            debug_force_selection?: number;
            raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
        }[]>]: never; };
        in_game_prediction_count_per_game?: number;
        in_game_prediction_voting_period_minutes?: number;
    } & { [K_14 in Exclude<keyof I, keyof CMsgDOTASeasonPredictions>]: never; }>(base?: I): CMsgDOTASeasonPredictions;
    fromPartial<I_1 extends {
        predictions?: {
            type?: CMsgDOTASeasonPredictions_Prediction_EPredictionType;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            selection_id?: number;
            start_date?: number;
            lock_date?: number;
            reward?: number;
            answer_type?: CMsgDOTASeasonPredictions_Prediction_EAnswerType;
            answer_id?: number;
            answers?: {
                answer_id?: number;
            }[];
            query_name?: string;
            lock_on_selection_id?: number;
            lock_on_selection_value?: number;
            lock_on_selection_set?: boolean;
            use_answer_value_ranges?: boolean;
            region?: ELeagueRegion;
            phases?: ELeaguePhase[];
            reward_event?: EEvent;
        }[];
        in_game_predictions?: {
            id?: number;
            name?: string;
            type?: CMsgInGamePrediction_EPredictionType;
            group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            required_heroes?: string[];
            query_name?: string;
            query_values?: {
                name?: string;
                value?: string;
            }[];
            answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
            points_to_grant?: number;
            reward_action?: number;
            debug_force_selection?: number;
            raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
        }[];
        in_game_prediction_count_per_game?: number;
        in_game_prediction_voting_period_minutes?: number;
    } & {
        predictions?: {
            type?: CMsgDOTASeasonPredictions_Prediction_EPredictionType;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            selection_id?: number;
            start_date?: number;
            lock_date?: number;
            reward?: number;
            answer_type?: CMsgDOTASeasonPredictions_Prediction_EAnswerType;
            answer_id?: number;
            answers?: {
                answer_id?: number;
            }[];
            query_name?: string;
            lock_on_selection_id?: number;
            lock_on_selection_value?: number;
            lock_on_selection_set?: boolean;
            use_answer_value_ranges?: boolean;
            region?: ELeagueRegion;
            phases?: ELeaguePhase[];
            reward_event?: EEvent;
        }[] & ({
            type?: CMsgDOTASeasonPredictions_Prediction_EPredictionType;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            selection_id?: number;
            start_date?: number;
            lock_date?: number;
            reward?: number;
            answer_type?: CMsgDOTASeasonPredictions_Prediction_EAnswerType;
            answer_id?: number;
            answers?: {
                answer_id?: number;
            }[];
            query_name?: string;
            lock_on_selection_id?: number;
            lock_on_selection_value?: number;
            lock_on_selection_set?: boolean;
            use_answer_value_ranges?: boolean;
            region?: ELeagueRegion;
            phases?: ELeaguePhase[];
            reward_event?: EEvent;
        } & {
            type?: CMsgDOTASeasonPredictions_Prediction_EPredictionType;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[] & ({
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            } & {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            } & { [K_15 in Exclude<keyof I_1["predictions"][number]["choices"][number], keyof CMsgPredictionChoice>]: never; })[] & { [K_16 in Exclude<keyof I_1["predictions"][number]["choices"], keyof {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[]>]: never; };
            selection_id?: number;
            start_date?: number;
            lock_date?: number;
            reward?: number;
            answer_type?: CMsgDOTASeasonPredictions_Prediction_EAnswerType;
            answer_id?: number;
            answers?: {
                answer_id?: number;
            }[] & ({
                answer_id?: number;
            } & {
                answer_id?: number;
            } & { [K_17 in Exclude<keyof I_1["predictions"][number]["answers"][number], "answer_id">]: never; })[] & { [K_18 in Exclude<keyof I_1["predictions"][number]["answers"], keyof {
                answer_id?: number;
            }[]>]: never; };
            query_name?: string;
            lock_on_selection_id?: number;
            lock_on_selection_value?: number;
            lock_on_selection_set?: boolean;
            use_answer_value_ranges?: boolean;
            region?: ELeagueRegion;
            phases?: ELeaguePhase[] & ELeaguePhase[] & { [K_19 in Exclude<keyof I_1["predictions"][number]["phases"], keyof ELeaguePhase[]>]: never; };
            reward_event?: EEvent;
        } & { [K_20 in Exclude<keyof I_1["predictions"][number], keyof CMsgDOTASeasonPredictions_Prediction>]: never; })[] & { [K_21 in Exclude<keyof I_1["predictions"], keyof {
            type?: CMsgDOTASeasonPredictions_Prediction_EPredictionType;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            selection_id?: number;
            start_date?: number;
            lock_date?: number;
            reward?: number;
            answer_type?: CMsgDOTASeasonPredictions_Prediction_EAnswerType;
            answer_id?: number;
            answers?: {
                answer_id?: number;
            }[];
            query_name?: string;
            lock_on_selection_id?: number;
            lock_on_selection_value?: number;
            lock_on_selection_set?: boolean;
            use_answer_value_ranges?: boolean;
            region?: ELeagueRegion;
            phases?: ELeaguePhase[];
            reward_event?: EEvent;
        }[]>]: never; };
        in_game_predictions?: {
            id?: number;
            name?: string;
            type?: CMsgInGamePrediction_EPredictionType;
            group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            required_heroes?: string[];
            query_name?: string;
            query_values?: {
                name?: string;
                value?: string;
            }[];
            answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
            points_to_grant?: number;
            reward_action?: number;
            debug_force_selection?: number;
            raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
        }[] & ({
            id?: number;
            name?: string;
            type?: CMsgInGamePrediction_EPredictionType;
            group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            required_heroes?: string[];
            query_name?: string;
            query_values?: {
                name?: string;
                value?: string;
            }[];
            answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
            points_to_grant?: number;
            reward_action?: number;
            debug_force_selection?: number;
            raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
        } & {
            id?: number;
            name?: string;
            type?: CMsgInGamePrediction_EPredictionType;
            group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[] & ({
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            } & {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            } & { [K_22 in Exclude<keyof I_1["in_game_predictions"][number]["choices"][number], keyof CMsgPredictionChoice>]: never; })[] & { [K_23 in Exclude<keyof I_1["in_game_predictions"][number]["choices"], keyof {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[]>]: never; };
            required_heroes?: string[] & string[] & { [K_24 in Exclude<keyof I_1["in_game_predictions"][number]["required_heroes"], keyof string[]>]: never; };
            query_name?: string;
            query_values?: {
                name?: string;
                value?: string;
            }[] & ({
                name?: string;
                value?: string;
            } & {
                name?: string;
                value?: string;
            } & { [K_25 in Exclude<keyof I_1["in_game_predictions"][number]["query_values"][number], keyof CMsgInGamePrediction_QueryKeyValues>]: never; })[] & { [K_26 in Exclude<keyof I_1["in_game_predictions"][number]["query_values"], keyof {
                name?: string;
                value?: string;
            }[]>]: never; };
            answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
            points_to_grant?: number;
            reward_action?: number;
            debug_force_selection?: number;
            raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
        } & { [K_27 in Exclude<keyof I_1["in_game_predictions"][number], keyof CMsgInGamePrediction>]: never; })[] & { [K_28 in Exclude<keyof I_1["in_game_predictions"], keyof {
            id?: number;
            name?: string;
            type?: CMsgInGamePrediction_EPredictionType;
            group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            required_heroes?: string[];
            query_name?: string;
            query_values?: {
                name?: string;
                value?: string;
            }[];
            answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
            points_to_grant?: number;
            reward_action?: number;
            debug_force_selection?: number;
            raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
        }[]>]: never; };
        in_game_prediction_count_per_game?: number;
        in_game_prediction_voting_period_minutes?: number;
    } & { [K_29 in Exclude<keyof I_1, keyof CMsgDOTASeasonPredictions>]: never; }>(object: I_1): CMsgDOTASeasonPredictions;
};
export declare const CMsgDOTASeasonPredictions_Prediction: {
    fromJSON(object: any): CMsgDOTASeasonPredictions_Prediction;
    toJSON(message: CMsgDOTASeasonPredictions_Prediction): unknown;
    create<I extends {
        type?: CMsgDOTASeasonPredictions_Prediction_EPredictionType;
        question?: string;
        choices?: {
            value?: number;
            name?: string;
            min_raw_value?: number;
            max_raw_value?: number;
        }[];
        selection_id?: number;
        start_date?: number;
        lock_date?: number;
        reward?: number;
        answer_type?: CMsgDOTASeasonPredictions_Prediction_EAnswerType;
        answer_id?: number;
        answers?: {
            answer_id?: number;
        }[];
        query_name?: string;
        lock_on_selection_id?: number;
        lock_on_selection_value?: number;
        lock_on_selection_set?: boolean;
        use_answer_value_ranges?: boolean;
        region?: ELeagueRegion;
        phases?: ELeaguePhase[];
        reward_event?: EEvent;
    } & {
        type?: CMsgDOTASeasonPredictions_Prediction_EPredictionType;
        question?: string;
        choices?: {
            value?: number;
            name?: string;
            min_raw_value?: number;
            max_raw_value?: number;
        }[] & ({
            value?: number;
            name?: string;
            min_raw_value?: number;
            max_raw_value?: number;
        } & {
            value?: number;
            name?: string;
            min_raw_value?: number;
            max_raw_value?: number;
        } & { [K in Exclude<keyof I["choices"][number], keyof CMsgPredictionChoice>]: never; })[] & { [K_1 in Exclude<keyof I["choices"], keyof {
            value?: number;
            name?: string;
            min_raw_value?: number;
            max_raw_value?: number;
        }[]>]: never; };
        selection_id?: number;
        start_date?: number;
        lock_date?: number;
        reward?: number;
        answer_type?: CMsgDOTASeasonPredictions_Prediction_EAnswerType;
        answer_id?: number;
        answers?: {
            answer_id?: number;
        }[] & ({
            answer_id?: number;
        } & {
            answer_id?: number;
        } & { [K_2 in Exclude<keyof I["answers"][number], "answer_id">]: never; })[] & { [K_3 in Exclude<keyof I["answers"], keyof {
            answer_id?: number;
        }[]>]: never; };
        query_name?: string;
        lock_on_selection_id?: number;
        lock_on_selection_value?: number;
        lock_on_selection_set?: boolean;
        use_answer_value_ranges?: boolean;
        region?: ELeagueRegion;
        phases?: ELeaguePhase[] & ELeaguePhase[] & { [K_4 in Exclude<keyof I["phases"], keyof ELeaguePhase[]>]: never; };
        reward_event?: EEvent;
    } & { [K_5 in Exclude<keyof I, keyof CMsgDOTASeasonPredictions_Prediction>]: never; }>(base?: I): CMsgDOTASeasonPredictions_Prediction;
    fromPartial<I_1 extends {
        type?: CMsgDOTASeasonPredictions_Prediction_EPredictionType;
        question?: string;
        choices?: {
            value?: number;
            name?: string;
            min_raw_value?: number;
            max_raw_value?: number;
        }[];
        selection_id?: number;
        start_date?: number;
        lock_date?: number;
        reward?: number;
        answer_type?: CMsgDOTASeasonPredictions_Prediction_EAnswerType;
        answer_id?: number;
        answers?: {
            answer_id?: number;
        }[];
        query_name?: string;
        lock_on_selection_id?: number;
        lock_on_selection_value?: number;
        lock_on_selection_set?: boolean;
        use_answer_value_ranges?: boolean;
        region?: ELeagueRegion;
        phases?: ELeaguePhase[];
        reward_event?: EEvent;
    } & {
        type?: CMsgDOTASeasonPredictions_Prediction_EPredictionType;
        question?: string;
        choices?: {
            value?: number;
            name?: string;
            min_raw_value?: number;
            max_raw_value?: number;
        }[] & ({
            value?: number;
            name?: string;
            min_raw_value?: number;
            max_raw_value?: number;
        } & {
            value?: number;
            name?: string;
            min_raw_value?: number;
            max_raw_value?: number;
        } & { [K_6 in Exclude<keyof I_1["choices"][number], keyof CMsgPredictionChoice>]: never; })[] & { [K_7 in Exclude<keyof I_1["choices"], keyof {
            value?: number;
            name?: string;
            min_raw_value?: number;
            max_raw_value?: number;
        }[]>]: never; };
        selection_id?: number;
        start_date?: number;
        lock_date?: number;
        reward?: number;
        answer_type?: CMsgDOTASeasonPredictions_Prediction_EAnswerType;
        answer_id?: number;
        answers?: {
            answer_id?: number;
        }[] & ({
            answer_id?: number;
        } & {
            answer_id?: number;
        } & { [K_8 in Exclude<keyof I_1["answers"][number], "answer_id">]: never; })[] & { [K_9 in Exclude<keyof I_1["answers"], keyof {
            answer_id?: number;
        }[]>]: never; };
        query_name?: string;
        lock_on_selection_id?: number;
        lock_on_selection_value?: number;
        lock_on_selection_set?: boolean;
        use_answer_value_ranges?: boolean;
        region?: ELeagueRegion;
        phases?: ELeaguePhase[] & ELeaguePhase[] & { [K_10 in Exclude<keyof I_1["phases"], keyof ELeaguePhase[]>]: never; };
        reward_event?: EEvent;
    } & { [K_11 in Exclude<keyof I_1, keyof CMsgDOTASeasonPredictions_Prediction>]: never; }>(object: I_1): CMsgDOTASeasonPredictions_Prediction;
};
export declare const CMsgDOTASeasonPredictions_Prediction_Answers: {
    fromJSON(object: any): CMsgDOTASeasonPredictions_Prediction_Answers;
    toJSON(message: CMsgDOTASeasonPredictions_Prediction_Answers): unknown;
    create<I extends {
        answer_id?: number;
    } & {
        answer_id?: number;
    } & { [K in Exclude<keyof I, "answer_id">]: never; }>(base?: I): CMsgDOTASeasonPredictions_Prediction_Answers;
    fromPartial<I_1 extends {
        answer_id?: number;
    } & {
        answer_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "answer_id">]: never; }>(object: I_1): CMsgDOTASeasonPredictions_Prediction_Answers;
};
export declare const CMsgAvailablePredictions: {
    fromJSON(object: any): CMsgAvailablePredictions;
    toJSON(message: CMsgAvailablePredictions): unknown;
    create<I extends {
        match_predictions?: {
            match_id?: string;
            predictions?: {
                id?: number;
                name?: string;
                type?: CMsgInGamePrediction_EPredictionType;
                group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
                question?: string;
                choices?: {
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                }[];
                required_heroes?: string[];
                query_name?: string;
                query_values?: {
                    name?: string;
                    value?: string;
                }[];
                answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
                points_to_grant?: number;
                reward_action?: number;
                debug_force_selection?: number;
                raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
            }[];
        }[];
    } & {
        match_predictions?: {
            match_id?: string;
            predictions?: {
                id?: number;
                name?: string;
                type?: CMsgInGamePrediction_EPredictionType;
                group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
                question?: string;
                choices?: {
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                }[];
                required_heroes?: string[];
                query_name?: string;
                query_values?: {
                    name?: string;
                    value?: string;
                }[];
                answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
                points_to_grant?: number;
                reward_action?: number;
                debug_force_selection?: number;
                raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
            }[];
        }[] & ({
            match_id?: string;
            predictions?: {
                id?: number;
                name?: string;
                type?: CMsgInGamePrediction_EPredictionType;
                group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
                question?: string;
                choices?: {
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                }[];
                required_heroes?: string[];
                query_name?: string;
                query_values?: {
                    name?: string;
                    value?: string;
                }[];
                answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
                points_to_grant?: number;
                reward_action?: number;
                debug_force_selection?: number;
                raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
            }[];
        } & {
            match_id?: string;
            predictions?: {
                id?: number;
                name?: string;
                type?: CMsgInGamePrediction_EPredictionType;
                group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
                question?: string;
                choices?: {
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                }[];
                required_heroes?: string[];
                query_name?: string;
                query_values?: {
                    name?: string;
                    value?: string;
                }[];
                answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
                points_to_grant?: number;
                reward_action?: number;
                debug_force_selection?: number;
                raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
            }[] & ({
                id?: number;
                name?: string;
                type?: CMsgInGamePrediction_EPredictionType;
                group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
                question?: string;
                choices?: {
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                }[];
                required_heroes?: string[];
                query_name?: string;
                query_values?: {
                    name?: string;
                    value?: string;
                }[];
                answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
                points_to_grant?: number;
                reward_action?: number;
                debug_force_selection?: number;
                raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
            } & {
                id?: number;
                name?: string;
                type?: CMsgInGamePrediction_EPredictionType;
                group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
                question?: string;
                choices?: {
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                }[] & ({
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                } & {
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                } & { [K in Exclude<keyof I["match_predictions"][number]["predictions"][number]["choices"][number], keyof CMsgPredictionChoice>]: never; })[] & { [K_1 in Exclude<keyof I["match_predictions"][number]["predictions"][number]["choices"], keyof {
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                }[]>]: never; };
                required_heroes?: string[] & string[] & { [K_2 in Exclude<keyof I["match_predictions"][number]["predictions"][number]["required_heroes"], keyof string[]>]: never; };
                query_name?: string;
                query_values?: {
                    name?: string;
                    value?: string;
                }[] & ({
                    name?: string;
                    value?: string;
                } & {
                    name?: string;
                    value?: string;
                } & { [K_3 in Exclude<keyof I["match_predictions"][number]["predictions"][number]["query_values"][number], keyof CMsgInGamePrediction_QueryKeyValues>]: never; })[] & { [K_4 in Exclude<keyof I["match_predictions"][number]["predictions"][number]["query_values"], keyof {
                    name?: string;
                    value?: string;
                }[]>]: never; };
                answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
                points_to_grant?: number;
                reward_action?: number;
                debug_force_selection?: number;
                raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
            } & { [K_5 in Exclude<keyof I["match_predictions"][number]["predictions"][number], keyof CMsgInGamePrediction>]: never; })[] & { [K_6 in Exclude<keyof I["match_predictions"][number]["predictions"], keyof {
                id?: number;
                name?: string;
                type?: CMsgInGamePrediction_EPredictionType;
                group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
                question?: string;
                choices?: {
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                }[];
                required_heroes?: string[];
                query_name?: string;
                query_values?: {
                    name?: string;
                    value?: string;
                }[];
                answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
                points_to_grant?: number;
                reward_action?: number;
                debug_force_selection?: number;
                raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
            }[]>]: never; };
        } & { [K_7 in Exclude<keyof I["match_predictions"][number], keyof CMsgAvailablePredictions_MatchPrediction>]: never; })[] & { [K_8 in Exclude<keyof I["match_predictions"], keyof {
            match_id?: string;
            predictions?: {
                id?: number;
                name?: string;
                type?: CMsgInGamePrediction_EPredictionType;
                group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
                question?: string;
                choices?: {
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                }[];
                required_heroes?: string[];
                query_name?: string;
                query_values?: {
                    name?: string;
                    value?: string;
                }[];
                answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
                points_to_grant?: number;
                reward_action?: number;
                debug_force_selection?: number;
                raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
            }[];
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I, "match_predictions">]: never; }>(base?: I): CMsgAvailablePredictions;
    fromPartial<I_1 extends {
        match_predictions?: {
            match_id?: string;
            predictions?: {
                id?: number;
                name?: string;
                type?: CMsgInGamePrediction_EPredictionType;
                group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
                question?: string;
                choices?: {
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                }[];
                required_heroes?: string[];
                query_name?: string;
                query_values?: {
                    name?: string;
                    value?: string;
                }[];
                answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
                points_to_grant?: number;
                reward_action?: number;
                debug_force_selection?: number;
                raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
            }[];
        }[];
    } & {
        match_predictions?: {
            match_id?: string;
            predictions?: {
                id?: number;
                name?: string;
                type?: CMsgInGamePrediction_EPredictionType;
                group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
                question?: string;
                choices?: {
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                }[];
                required_heroes?: string[];
                query_name?: string;
                query_values?: {
                    name?: string;
                    value?: string;
                }[];
                answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
                points_to_grant?: number;
                reward_action?: number;
                debug_force_selection?: number;
                raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
            }[];
        }[] & ({
            match_id?: string;
            predictions?: {
                id?: number;
                name?: string;
                type?: CMsgInGamePrediction_EPredictionType;
                group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
                question?: string;
                choices?: {
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                }[];
                required_heroes?: string[];
                query_name?: string;
                query_values?: {
                    name?: string;
                    value?: string;
                }[];
                answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
                points_to_grant?: number;
                reward_action?: number;
                debug_force_selection?: number;
                raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
            }[];
        } & {
            match_id?: string;
            predictions?: {
                id?: number;
                name?: string;
                type?: CMsgInGamePrediction_EPredictionType;
                group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
                question?: string;
                choices?: {
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                }[];
                required_heroes?: string[];
                query_name?: string;
                query_values?: {
                    name?: string;
                    value?: string;
                }[];
                answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
                points_to_grant?: number;
                reward_action?: number;
                debug_force_selection?: number;
                raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
            }[] & ({
                id?: number;
                name?: string;
                type?: CMsgInGamePrediction_EPredictionType;
                group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
                question?: string;
                choices?: {
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                }[];
                required_heroes?: string[];
                query_name?: string;
                query_values?: {
                    name?: string;
                    value?: string;
                }[];
                answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
                points_to_grant?: number;
                reward_action?: number;
                debug_force_selection?: number;
                raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
            } & {
                id?: number;
                name?: string;
                type?: CMsgInGamePrediction_EPredictionType;
                group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
                question?: string;
                choices?: {
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                }[] & ({
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                } & {
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                } & { [K_10 in Exclude<keyof I_1["match_predictions"][number]["predictions"][number]["choices"][number], keyof CMsgPredictionChoice>]: never; })[] & { [K_11 in Exclude<keyof I_1["match_predictions"][number]["predictions"][number]["choices"], keyof {
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                }[]>]: never; };
                required_heroes?: string[] & string[] & { [K_12 in Exclude<keyof I_1["match_predictions"][number]["predictions"][number]["required_heroes"], keyof string[]>]: never; };
                query_name?: string;
                query_values?: {
                    name?: string;
                    value?: string;
                }[] & ({
                    name?: string;
                    value?: string;
                } & {
                    name?: string;
                    value?: string;
                } & { [K_13 in Exclude<keyof I_1["match_predictions"][number]["predictions"][number]["query_values"][number], keyof CMsgInGamePrediction_QueryKeyValues>]: never; })[] & { [K_14 in Exclude<keyof I_1["match_predictions"][number]["predictions"][number]["query_values"], keyof {
                    name?: string;
                    value?: string;
                }[]>]: never; };
                answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
                points_to_grant?: number;
                reward_action?: number;
                debug_force_selection?: number;
                raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
            } & { [K_15 in Exclude<keyof I_1["match_predictions"][number]["predictions"][number], keyof CMsgInGamePrediction>]: never; })[] & { [K_16 in Exclude<keyof I_1["match_predictions"][number]["predictions"], keyof {
                id?: number;
                name?: string;
                type?: CMsgInGamePrediction_EPredictionType;
                group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
                question?: string;
                choices?: {
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                }[];
                required_heroes?: string[];
                query_name?: string;
                query_values?: {
                    name?: string;
                    value?: string;
                }[];
                answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
                points_to_grant?: number;
                reward_action?: number;
                debug_force_selection?: number;
                raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
            }[]>]: never; };
        } & { [K_17 in Exclude<keyof I_1["match_predictions"][number], keyof CMsgAvailablePredictions_MatchPrediction>]: never; })[] & { [K_18 in Exclude<keyof I_1["match_predictions"], keyof {
            match_id?: string;
            predictions?: {
                id?: number;
                name?: string;
                type?: CMsgInGamePrediction_EPredictionType;
                group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
                question?: string;
                choices?: {
                    value?: number;
                    name?: string;
                    min_raw_value?: number;
                    max_raw_value?: number;
                }[];
                required_heroes?: string[];
                query_name?: string;
                query_values?: {
                    name?: string;
                    value?: string;
                }[];
                answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
                points_to_grant?: number;
                reward_action?: number;
                debug_force_selection?: number;
                raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
            }[];
        }[]>]: never; };
    } & { [K_19 in Exclude<keyof I_1, "match_predictions">]: never; }>(object: I_1): CMsgAvailablePredictions;
};
export declare const CMsgAvailablePredictions_MatchPrediction: {
    fromJSON(object: any): CMsgAvailablePredictions_MatchPrediction;
    toJSON(message: CMsgAvailablePredictions_MatchPrediction): unknown;
    create<I extends {
        match_id?: string;
        predictions?: {
            id?: number;
            name?: string;
            type?: CMsgInGamePrediction_EPredictionType;
            group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            required_heroes?: string[];
            query_name?: string;
            query_values?: {
                name?: string;
                value?: string;
            }[];
            answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
            points_to_grant?: number;
            reward_action?: number;
            debug_force_selection?: number;
            raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
        }[];
    } & {
        match_id?: string;
        predictions?: {
            id?: number;
            name?: string;
            type?: CMsgInGamePrediction_EPredictionType;
            group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            required_heroes?: string[];
            query_name?: string;
            query_values?: {
                name?: string;
                value?: string;
            }[];
            answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
            points_to_grant?: number;
            reward_action?: number;
            debug_force_selection?: number;
            raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
        }[] & ({
            id?: number;
            name?: string;
            type?: CMsgInGamePrediction_EPredictionType;
            group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            required_heroes?: string[];
            query_name?: string;
            query_values?: {
                name?: string;
                value?: string;
            }[];
            answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
            points_to_grant?: number;
            reward_action?: number;
            debug_force_selection?: number;
            raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
        } & {
            id?: number;
            name?: string;
            type?: CMsgInGamePrediction_EPredictionType;
            group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[] & ({
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            } & {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            } & { [K in Exclude<keyof I["predictions"][number]["choices"][number], keyof CMsgPredictionChoice>]: never; })[] & { [K_1 in Exclude<keyof I["predictions"][number]["choices"], keyof {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[]>]: never; };
            required_heroes?: string[] & string[] & { [K_2 in Exclude<keyof I["predictions"][number]["required_heroes"], keyof string[]>]: never; };
            query_name?: string;
            query_values?: {
                name?: string;
                value?: string;
            }[] & ({
                name?: string;
                value?: string;
            } & {
                name?: string;
                value?: string;
            } & { [K_3 in Exclude<keyof I["predictions"][number]["query_values"][number], keyof CMsgInGamePrediction_QueryKeyValues>]: never; })[] & { [K_4 in Exclude<keyof I["predictions"][number]["query_values"], keyof {
                name?: string;
                value?: string;
            }[]>]: never; };
            answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
            points_to_grant?: number;
            reward_action?: number;
            debug_force_selection?: number;
            raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
        } & { [K_5 in Exclude<keyof I["predictions"][number], keyof CMsgInGamePrediction>]: never; })[] & { [K_6 in Exclude<keyof I["predictions"], keyof {
            id?: number;
            name?: string;
            type?: CMsgInGamePrediction_EPredictionType;
            group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            required_heroes?: string[];
            query_name?: string;
            query_values?: {
                name?: string;
                value?: string;
            }[];
            answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
            points_to_grant?: number;
            reward_action?: number;
            debug_force_selection?: number;
            raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
        }[]>]: never; };
    } & { [K_7 in Exclude<keyof I, keyof CMsgAvailablePredictions_MatchPrediction>]: never; }>(base?: I): CMsgAvailablePredictions_MatchPrediction;
    fromPartial<I_1 extends {
        match_id?: string;
        predictions?: {
            id?: number;
            name?: string;
            type?: CMsgInGamePrediction_EPredictionType;
            group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            required_heroes?: string[];
            query_name?: string;
            query_values?: {
                name?: string;
                value?: string;
            }[];
            answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
            points_to_grant?: number;
            reward_action?: number;
            debug_force_selection?: number;
            raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
        }[];
    } & {
        match_id?: string;
        predictions?: {
            id?: number;
            name?: string;
            type?: CMsgInGamePrediction_EPredictionType;
            group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            required_heroes?: string[];
            query_name?: string;
            query_values?: {
                name?: string;
                value?: string;
            }[];
            answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
            points_to_grant?: number;
            reward_action?: number;
            debug_force_selection?: number;
            raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
        }[] & ({
            id?: number;
            name?: string;
            type?: CMsgInGamePrediction_EPredictionType;
            group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            required_heroes?: string[];
            query_name?: string;
            query_values?: {
                name?: string;
                value?: string;
            }[];
            answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
            points_to_grant?: number;
            reward_action?: number;
            debug_force_selection?: number;
            raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
        } & {
            id?: number;
            name?: string;
            type?: CMsgInGamePrediction_EPredictionType;
            group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[] & ({
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            } & {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            } & { [K_8 in Exclude<keyof I_1["predictions"][number]["choices"][number], keyof CMsgPredictionChoice>]: never; })[] & { [K_9 in Exclude<keyof I_1["predictions"][number]["choices"], keyof {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[]>]: never; };
            required_heroes?: string[] & string[] & { [K_10 in Exclude<keyof I_1["predictions"][number]["required_heroes"], keyof string[]>]: never; };
            query_name?: string;
            query_values?: {
                name?: string;
                value?: string;
            }[] & ({
                name?: string;
                value?: string;
            } & {
                name?: string;
                value?: string;
            } & { [K_11 in Exclude<keyof I_1["predictions"][number]["query_values"][number], keyof CMsgInGamePrediction_QueryKeyValues>]: never; })[] & { [K_12 in Exclude<keyof I_1["predictions"][number]["query_values"], keyof {
                name?: string;
                value?: string;
            }[]>]: never; };
            answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
            points_to_grant?: number;
            reward_action?: number;
            debug_force_selection?: number;
            raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
        } & { [K_13 in Exclude<keyof I_1["predictions"][number], keyof CMsgInGamePrediction>]: never; })[] & { [K_14 in Exclude<keyof I_1["predictions"], keyof {
            id?: number;
            name?: string;
            type?: CMsgInGamePrediction_EPredictionType;
            group?: CMsgInGamePrediction_ERandomSelectionGroup_t;
            question?: string;
            choices?: {
                value?: number;
                name?: string;
                min_raw_value?: number;
                max_raw_value?: number;
            }[];
            required_heroes?: string[];
            query_name?: string;
            query_values?: {
                name?: string;
                value?: string;
            }[];
            answer_resolution_type?: CMsgInGamePrediction_EResolutionType_t;
            points_to_grant?: number;
            reward_action?: number;
            debug_force_selection?: number;
            raw_value_type?: CMsgInGamePrediction_ERawValueType_t;
        }[]>]: never; };
    } & { [K_15 in Exclude<keyof I_1, keyof CMsgAvailablePredictions_MatchPrediction>]: never; }>(object: I_1): CMsgAvailablePredictions_MatchPrediction;
};
export declare const CMsgLeagueWatchedGames: {
    fromJSON(object: any): CMsgLeagueWatchedGames;
    toJSON(message: CMsgLeagueWatchedGames): unknown;
    create<I extends {
        leagues?: {
            league_id?: number;
            series?: {
                node_id?: number;
                game?: number[];
            }[];
        }[];
    } & {
        leagues?: {
            league_id?: number;
            series?: {
                node_id?: number;
                game?: number[];
            }[];
        }[] & ({
            league_id?: number;
            series?: {
                node_id?: number;
                game?: number[];
            }[];
        } & {
            league_id?: number;
            series?: {
                node_id?: number;
                game?: number[];
            }[] & ({
                node_id?: number;
                game?: number[];
            } & {
                node_id?: number;
                game?: number[] & number[] & { [K in Exclude<keyof I["leagues"][number]["series"][number]["game"], keyof number[]>]: never; };
            } & { [K_1 in Exclude<keyof I["leagues"][number]["series"][number], keyof CMsgLeagueWatchedGames_Series>]: never; })[] & { [K_2 in Exclude<keyof I["leagues"][number]["series"], keyof {
                node_id?: number;
                game?: number[];
            }[]>]: never; };
        } & { [K_3 in Exclude<keyof I["leagues"][number], keyof CMsgLeagueWatchedGames_League>]: never; })[] & { [K_4 in Exclude<keyof I["leagues"], keyof {
            league_id?: number;
            series?: {
                node_id?: number;
                game?: number[];
            }[];
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I, "leagues">]: never; }>(base?: I): CMsgLeagueWatchedGames;
    fromPartial<I_1 extends {
        leagues?: {
            league_id?: number;
            series?: {
                node_id?: number;
                game?: number[];
            }[];
        }[];
    } & {
        leagues?: {
            league_id?: number;
            series?: {
                node_id?: number;
                game?: number[];
            }[];
        }[] & ({
            league_id?: number;
            series?: {
                node_id?: number;
                game?: number[];
            }[];
        } & {
            league_id?: number;
            series?: {
                node_id?: number;
                game?: number[];
            }[] & ({
                node_id?: number;
                game?: number[];
            } & {
                node_id?: number;
                game?: number[] & number[] & { [K_6 in Exclude<keyof I_1["leagues"][number]["series"][number]["game"], keyof number[]>]: never; };
            } & { [K_7 in Exclude<keyof I_1["leagues"][number]["series"][number], keyof CMsgLeagueWatchedGames_Series>]: never; })[] & { [K_8 in Exclude<keyof I_1["leagues"][number]["series"], keyof {
                node_id?: number;
                game?: number[];
            }[]>]: never; };
        } & { [K_9 in Exclude<keyof I_1["leagues"][number], keyof CMsgLeagueWatchedGames_League>]: never; })[] & { [K_10 in Exclude<keyof I_1["leagues"], keyof {
            league_id?: number;
            series?: {
                node_id?: number;
                game?: number[];
            }[];
        }[]>]: never; };
    } & { [K_11 in Exclude<keyof I_1, "leagues">]: never; }>(object: I_1): CMsgLeagueWatchedGames;
};
export declare const CMsgLeagueWatchedGames_Series: {
    fromJSON(object: any): CMsgLeagueWatchedGames_Series;
    toJSON(message: CMsgLeagueWatchedGames_Series): unknown;
    create<I extends {
        node_id?: number;
        game?: number[];
    } & {
        node_id?: number;
        game?: number[] & number[] & { [K in Exclude<keyof I["game"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CMsgLeagueWatchedGames_Series>]: never; }>(base?: I): CMsgLeagueWatchedGames_Series;
    fromPartial<I_1 extends {
        node_id?: number;
        game?: number[];
    } & {
        node_id?: number;
        game?: number[] & number[] & { [K_2 in Exclude<keyof I_1["game"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgLeagueWatchedGames_Series>]: never; }>(object: I_1): CMsgLeagueWatchedGames_Series;
};
export declare const CMsgLeagueWatchedGames_League: {
    fromJSON(object: any): CMsgLeagueWatchedGames_League;
    toJSON(message: CMsgLeagueWatchedGames_League): unknown;
    create<I extends {
        league_id?: number;
        series?: {
            node_id?: number;
            game?: number[];
        }[];
    } & {
        league_id?: number;
        series?: {
            node_id?: number;
            game?: number[];
        }[] & ({
            node_id?: number;
            game?: number[];
        } & {
            node_id?: number;
            game?: number[] & number[] & { [K in Exclude<keyof I["series"][number]["game"], keyof number[]>]: never; };
        } & { [K_1 in Exclude<keyof I["series"][number], keyof CMsgLeagueWatchedGames_Series>]: never; })[] & { [K_2 in Exclude<keyof I["series"], keyof {
            node_id?: number;
            game?: number[];
        }[]>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof CMsgLeagueWatchedGames_League>]: never; }>(base?: I): CMsgLeagueWatchedGames_League;
    fromPartial<I_1 extends {
        league_id?: number;
        series?: {
            node_id?: number;
            game?: number[];
        }[];
    } & {
        league_id?: number;
        series?: {
            node_id?: number;
            game?: number[];
        }[] & ({
            node_id?: number;
            game?: number[];
        } & {
            node_id?: number;
            game?: number[] & number[] & { [K_4 in Exclude<keyof I_1["series"][number]["game"], keyof number[]>]: never; };
        } & { [K_5 in Exclude<keyof I_1["series"][number], keyof CMsgLeagueWatchedGames_Series>]: never; })[] & { [K_6 in Exclude<keyof I_1["series"], keyof {
            node_id?: number;
            game?: number[];
        }[]>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof CMsgLeagueWatchedGames_League>]: never; }>(object: I_1): CMsgLeagueWatchedGames_League;
};
export declare const CMsgDOTAMatch: {
    fromJSON(object: any): CMsgDOTAMatch;
    toJSON(message: CMsgDOTAMatch): unknown;
    create<I extends {
        duration?: number;
        starttime?: number;
        players?: {
            account_id?: number;
            player_slot?: number;
            hero_id?: number;
            item_0?: number;
            item_1?: number;
            item_2?: number;
            item_3?: number;
            item_4?: number;
            item_5?: number;
            item_6?: number;
            item_7?: number;
            item_8?: number;
            item_9?: number;
            expected_team_contribution?: number;
            scaled_metric?: number;
            previous_rank?: number;
            rank_change?: number;
            mmr_type?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            leaver_status?: number;
            gold?: number;
            last_hits?: number;
            denies?: number;
            gold_per_min?: number;
            xp_per_min?: number;
            gold_spent?: number;
            hero_damage?: number;
            tower_damage?: number;
            hero_healing?: number;
            level?: number;
            time_last_seen?: number;
            player_name?: string;
            support_ability_value?: number;
            feeding_detected?: boolean;
            search_rank?: number;
            search_rank_uncertainty?: number;
            rank_uncertainty_change?: number;
            hero_play_count?: number;
            party_id?: string;
            scaled_hero_damage?: number;
            scaled_tower_damage?: number;
            scaled_hero_healing?: number;
            scaled_kills?: number;
            scaled_deaths?: number;
            scaled_assists?: number;
            claimed_farm_gold?: number;
            support_gold?: number;
            claimed_denies?: number;
            claimed_misses?: number;
            misses?: number;
            ability_upgrades?: {
                ability?: number;
                time?: number;
            }[];
            additional_units_inventory?: {
                unit_name?: string;
                items?: number[];
            }[];
            permanent_buffs?: {
                permanent_buff?: number;
                stack_count?: number;
                grant_time?: number;
            }[];
            pro_name?: string;
            real_name?: string;
            custom_game_data?: {
                dota_team?: number;
                winner?: boolean;
            };
            active_plus_subscription?: boolean;
            net_worth?: number;
            bot_difficulty?: number;
            hero_pick_order?: number;
            hero_was_randomed?: boolean;
            hero_was_dota_plus_suggestion?: boolean;
            hero_damage_received?: {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[];
            hero_damage_dealt?: {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[];
            seconds_dead?: number;
            gold_lost_to_death?: number;
            lane_selection_flags?: number;
            bounty_runes?: number;
            outposts_captured?: number;
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
        }[];
        match_id?: string;
        tower_status?: number[];
        barracks_status?: number[];
        cluster?: number;
        first_blood_time?: number;
        replay_salt?: number;
        server_ip?: number;
        server_port?: number;
        lobby_type?: number;
        human_players?: number;
        average_skill?: number;
        game_balance?: number;
        radiant_team_id?: number;
        dire_team_id?: number;
        leagueid?: number;
        radiant_team_name?: string;
        dire_team_name?: string;
        radiant_team_logo?: string;
        dire_team_logo?: string;
        radiant_team_logo_url?: string;
        dire_team_logo_url?: string;
        radiant_team_complete?: number;
        dire_team_complete?: number;
        positive_votes?: number;
        negative_votes?: number;
        game_mode?: DOTA_GameMode;
        picks_bans?: {
            is_pick?: boolean;
            team?: number;
            hero_id?: number;
        }[];
        match_seq_num?: string;
        replay_state?: CMsgDOTAMatch_ReplayState;
        radiant_guild_id?: number;
        dire_guild_id?: number;
        radiant_team_tag?: string;
        dire_team_tag?: string;
        series_id?: number;
        series_type?: number;
        broadcaster_channels?: {
            country_code?: string;
            description?: string;
            broadcaster_infos?: {
                account_id?: number;
                name?: string;
            }[];
            language_code?: string;
        }[];
        engine?: number;
        custom_game_data?: {
            custom_game_id?: string;
            map_name?: string;
        };
        match_flags?: number;
        private_metadata_key?: number;
        radiant_team_score?: number;
        dire_team_score?: number;
        match_outcome?: EMatchOutcome;
        tournament_id?: number;
        tournament_round?: number;
        pre_game_duration?: number;
        coaches?: {
            account_id?: number;
            coach_name?: string;
            coach_rating?: number;
            coach_team?: number;
            coach_party_id?: string;
            is_private_coach?: boolean;
        }[];
    } & {
        duration?: number;
        starttime?: number;
        players?: {
            account_id?: number;
            player_slot?: number;
            hero_id?: number;
            item_0?: number;
            item_1?: number;
            item_2?: number;
            item_3?: number;
            item_4?: number;
            item_5?: number;
            item_6?: number;
            item_7?: number;
            item_8?: number;
            item_9?: number;
            expected_team_contribution?: number;
            scaled_metric?: number;
            previous_rank?: number;
            rank_change?: number;
            mmr_type?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            leaver_status?: number;
            gold?: number;
            last_hits?: number;
            denies?: number;
            gold_per_min?: number;
            xp_per_min?: number;
            gold_spent?: number;
            hero_damage?: number;
            tower_damage?: number;
            hero_healing?: number;
            level?: number;
            time_last_seen?: number;
            player_name?: string;
            support_ability_value?: number;
            feeding_detected?: boolean;
            search_rank?: number;
            search_rank_uncertainty?: number;
            rank_uncertainty_change?: number;
            hero_play_count?: number;
            party_id?: string;
            scaled_hero_damage?: number;
            scaled_tower_damage?: number;
            scaled_hero_healing?: number;
            scaled_kills?: number;
            scaled_deaths?: number;
            scaled_assists?: number;
            claimed_farm_gold?: number;
            support_gold?: number;
            claimed_denies?: number;
            claimed_misses?: number;
            misses?: number;
            ability_upgrades?: {
                ability?: number;
                time?: number;
            }[];
            additional_units_inventory?: {
                unit_name?: string;
                items?: number[];
            }[];
            permanent_buffs?: {
                permanent_buff?: number;
                stack_count?: number;
                grant_time?: number;
            }[];
            pro_name?: string;
            real_name?: string;
            custom_game_data?: {
                dota_team?: number;
                winner?: boolean;
            };
            active_plus_subscription?: boolean;
            net_worth?: number;
            bot_difficulty?: number;
            hero_pick_order?: number;
            hero_was_randomed?: boolean;
            hero_was_dota_plus_suggestion?: boolean;
            hero_damage_received?: {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[];
            hero_damage_dealt?: {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[];
            seconds_dead?: number;
            gold_lost_to_death?: number;
            lane_selection_flags?: number;
            bounty_runes?: number;
            outposts_captured?: number;
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
        }[] & ({
            account_id?: number;
            player_slot?: number;
            hero_id?: number;
            item_0?: number;
            item_1?: number;
            item_2?: number;
            item_3?: number;
            item_4?: number;
            item_5?: number;
            item_6?: number;
            item_7?: number;
            item_8?: number;
            item_9?: number;
            expected_team_contribution?: number;
            scaled_metric?: number;
            previous_rank?: number;
            rank_change?: number;
            mmr_type?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            leaver_status?: number;
            gold?: number;
            last_hits?: number;
            denies?: number;
            gold_per_min?: number;
            xp_per_min?: number;
            gold_spent?: number;
            hero_damage?: number;
            tower_damage?: number;
            hero_healing?: number;
            level?: number;
            time_last_seen?: number;
            player_name?: string;
            support_ability_value?: number;
            feeding_detected?: boolean;
            search_rank?: number;
            search_rank_uncertainty?: number;
            rank_uncertainty_change?: number;
            hero_play_count?: number;
            party_id?: string;
            scaled_hero_damage?: number;
            scaled_tower_damage?: number;
            scaled_hero_healing?: number;
            scaled_kills?: number;
            scaled_deaths?: number;
            scaled_assists?: number;
            claimed_farm_gold?: number;
            support_gold?: number;
            claimed_denies?: number;
            claimed_misses?: number;
            misses?: number;
            ability_upgrades?: {
                ability?: number;
                time?: number;
            }[];
            additional_units_inventory?: {
                unit_name?: string;
                items?: number[];
            }[];
            permanent_buffs?: {
                permanent_buff?: number;
                stack_count?: number;
                grant_time?: number;
            }[];
            pro_name?: string;
            real_name?: string;
            custom_game_data?: {
                dota_team?: number;
                winner?: boolean;
            };
            active_plus_subscription?: boolean;
            net_worth?: number;
            bot_difficulty?: number;
            hero_pick_order?: number;
            hero_was_randomed?: boolean;
            hero_was_dota_plus_suggestion?: boolean;
            hero_damage_received?: {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[];
            hero_damage_dealt?: {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[];
            seconds_dead?: number;
            gold_lost_to_death?: number;
            lane_selection_flags?: number;
            bounty_runes?: number;
            outposts_captured?: number;
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
        } & {
            account_id?: number;
            player_slot?: number;
            hero_id?: number;
            item_0?: number;
            item_1?: number;
            item_2?: number;
            item_3?: number;
            item_4?: number;
            item_5?: number;
            item_6?: number;
            item_7?: number;
            item_8?: number;
            item_9?: number;
            expected_team_contribution?: number;
            scaled_metric?: number;
            previous_rank?: number;
            rank_change?: number;
            mmr_type?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            leaver_status?: number;
            gold?: number;
            last_hits?: number;
            denies?: number;
            gold_per_min?: number;
            xp_per_min?: number;
            gold_spent?: number;
            hero_damage?: number;
            tower_damage?: number;
            hero_healing?: number;
            level?: number;
            time_last_seen?: number;
            player_name?: string;
            support_ability_value?: number;
            feeding_detected?: boolean;
            search_rank?: number;
            search_rank_uncertainty?: number;
            rank_uncertainty_change?: number;
            hero_play_count?: number;
            party_id?: string;
            scaled_hero_damage?: number;
            scaled_tower_damage?: number;
            scaled_hero_healing?: number;
            scaled_kills?: number;
            scaled_deaths?: number;
            scaled_assists?: number;
            claimed_farm_gold?: number;
            support_gold?: number;
            claimed_denies?: number;
            claimed_misses?: number;
            misses?: number;
            ability_upgrades?: {
                ability?: number;
                time?: number;
            }[] & ({
                ability?: number;
                time?: number;
            } & {
                ability?: number;
                time?: number;
            } & { [K in Exclude<keyof I["players"][number]["ability_upgrades"][number], keyof CMatchPlayerAbilityUpgrade>]: never; })[] & { [K_1 in Exclude<keyof I["players"][number]["ability_upgrades"], keyof {
                ability?: number;
                time?: number;
            }[]>]: never; };
            additional_units_inventory?: {
                unit_name?: string;
                items?: number[];
            }[] & ({
                unit_name?: string;
                items?: number[];
            } & {
                unit_name?: string;
                items?: number[] & number[] & { [K_2 in Exclude<keyof I["players"][number]["additional_units_inventory"][number]["items"], keyof number[]>]: never; };
            } & { [K_3 in Exclude<keyof I["players"][number]["additional_units_inventory"][number], keyof CMatchAdditionalUnitInventory>]: never; })[] & { [K_4 in Exclude<keyof I["players"][number]["additional_units_inventory"], keyof {
                unit_name?: string;
                items?: number[];
            }[]>]: never; };
            permanent_buffs?: {
                permanent_buff?: number;
                stack_count?: number;
                grant_time?: number;
            }[] & ({
                permanent_buff?: number;
                stack_count?: number;
                grant_time?: number;
            } & {
                permanent_buff?: number;
                stack_count?: number;
                grant_time?: number;
            } & { [K_5 in Exclude<keyof I["players"][number]["permanent_buffs"][number], keyof CMatchPlayerPermanentBuff>]: never; })[] & { [K_6 in Exclude<keyof I["players"][number]["permanent_buffs"], keyof {
                permanent_buff?: number;
                stack_count?: number;
                grant_time?: number;
            }[]>]: never; };
            pro_name?: string;
            real_name?: string;
            custom_game_data?: {
                dota_team?: number;
                winner?: boolean;
            } & {
                dota_team?: number;
                winner?: boolean;
            } & { [K_7 in Exclude<keyof I["players"][number]["custom_game_data"], keyof CMsgDOTAMatch_Player_CustomGameData>]: never; };
            active_plus_subscription?: boolean;
            net_worth?: number;
            bot_difficulty?: number;
            hero_pick_order?: number;
            hero_was_randomed?: boolean;
            hero_was_dota_plus_suggestion?: boolean;
            hero_damage_received?: {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[] & ({
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            } & {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            } & { [K_8 in Exclude<keyof I["players"][number]["hero_damage_received"][number], keyof CMsgDOTAMatch_Player_HeroDamageReceived>]: never; })[] & { [K_9 in Exclude<keyof I["players"][number]["hero_damage_received"], keyof {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[]>]: never; };
            hero_damage_dealt?: {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[] & ({
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            } & {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            } & { [K_10 in Exclude<keyof I["players"][number]["hero_damage_dealt"][number], keyof CMsgDOTAMatch_Player_HeroDamageReceived>]: never; })[] & { [K_11 in Exclude<keyof I["players"][number]["hero_damage_dealt"], keyof {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[]>]: never; };
            seconds_dead?: number;
            gold_lost_to_death?: number;
            lane_selection_flags?: number;
            bounty_runes?: number;
            outposts_captured?: number;
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
        } & { [K_12 in Exclude<keyof I["players"][number], keyof CMsgDOTAMatch_Player>]: never; })[] & { [K_13 in Exclude<keyof I["players"], keyof {
            account_id?: number;
            player_slot?: number;
            hero_id?: number;
            item_0?: number;
            item_1?: number;
            item_2?: number;
            item_3?: number;
            item_4?: number;
            item_5?: number;
            item_6?: number;
            item_7?: number;
            item_8?: number;
            item_9?: number;
            expected_team_contribution?: number;
            scaled_metric?: number;
            previous_rank?: number;
            rank_change?: number;
            mmr_type?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            leaver_status?: number;
            gold?: number;
            last_hits?: number;
            denies?: number;
            gold_per_min?: number;
            xp_per_min?: number;
            gold_spent?: number;
            hero_damage?: number;
            tower_damage?: number;
            hero_healing?: number;
            level?: number;
            time_last_seen?: number;
            player_name?: string;
            support_ability_value?: number;
            feeding_detected?: boolean;
            search_rank?: number;
            search_rank_uncertainty?: number;
            rank_uncertainty_change?: number;
            hero_play_count?: number;
            party_id?: string;
            scaled_hero_damage?: number;
            scaled_tower_damage?: number;
            scaled_hero_healing?: number;
            scaled_kills?: number;
            scaled_deaths?: number;
            scaled_assists?: number;
            claimed_farm_gold?: number;
            support_gold?: number;
            claimed_denies?: number;
            claimed_misses?: number;
            misses?: number;
            ability_upgrades?: {
                ability?: number;
                time?: number;
            }[];
            additional_units_inventory?: {
                unit_name?: string;
                items?: number[];
            }[];
            permanent_buffs?: {
                permanent_buff?: number;
                stack_count?: number;
                grant_time?: number;
            }[];
            pro_name?: string;
            real_name?: string;
            custom_game_data?: {
                dota_team?: number;
                winner?: boolean;
            };
            active_plus_subscription?: boolean;
            net_worth?: number;
            bot_difficulty?: number;
            hero_pick_order?: number;
            hero_was_randomed?: boolean;
            hero_was_dota_plus_suggestion?: boolean;
            hero_damage_received?: {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[];
            hero_damage_dealt?: {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[];
            seconds_dead?: number;
            gold_lost_to_death?: number;
            lane_selection_flags?: number;
            bounty_runes?: number;
            outposts_captured?: number;
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
        }[]>]: never; };
        match_id?: string;
        tower_status?: number[] & number[] & { [K_14 in Exclude<keyof I["tower_status"], keyof number[]>]: never; };
        barracks_status?: number[] & number[] & { [K_15 in Exclude<keyof I["barracks_status"], keyof number[]>]: never; };
        cluster?: number;
        first_blood_time?: number;
        replay_salt?: number;
        server_ip?: number;
        server_port?: number;
        lobby_type?: number;
        human_players?: number;
        average_skill?: number;
        game_balance?: number;
        radiant_team_id?: number;
        dire_team_id?: number;
        leagueid?: number;
        radiant_team_name?: string;
        dire_team_name?: string;
        radiant_team_logo?: string;
        dire_team_logo?: string;
        radiant_team_logo_url?: string;
        dire_team_logo_url?: string;
        radiant_team_complete?: number;
        dire_team_complete?: number;
        positive_votes?: number;
        negative_votes?: number;
        game_mode?: DOTA_GameMode;
        picks_bans?: {
            is_pick?: boolean;
            team?: number;
            hero_id?: number;
        }[] & ({
            is_pick?: boolean;
            team?: number;
            hero_id?: number;
        } & {
            is_pick?: boolean;
            team?: number;
            hero_id?: number;
        } & { [K_16 in Exclude<keyof I["picks_bans"][number], keyof CMatchHeroSelectEvent>]: never; })[] & { [K_17 in Exclude<keyof I["picks_bans"], keyof {
            is_pick?: boolean;
            team?: number;
            hero_id?: number;
        }[]>]: never; };
        match_seq_num?: string;
        replay_state?: CMsgDOTAMatch_ReplayState;
        radiant_guild_id?: number;
        dire_guild_id?: number;
        radiant_team_tag?: string;
        dire_team_tag?: string;
        series_id?: number;
        series_type?: number;
        broadcaster_channels?: {
            country_code?: string;
            description?: string;
            broadcaster_infos?: {
                account_id?: number;
                name?: string;
            }[];
            language_code?: string;
        }[] & ({
            country_code?: string;
            description?: string;
            broadcaster_infos?: {
                account_id?: number;
                name?: string;
            }[];
            language_code?: string;
        } & {
            country_code?: string;
            description?: string;
            broadcaster_infos?: {
                account_id?: number;
                name?: string;
            }[] & ({
                account_id?: number;
                name?: string;
            } & {
                account_id?: number;
                name?: string;
            } & { [K_18 in Exclude<keyof I["broadcaster_channels"][number]["broadcaster_infos"][number], keyof CMsgDOTAMatch_BroadcasterInfo>]: never; })[] & { [K_19 in Exclude<keyof I["broadcaster_channels"][number]["broadcaster_infos"], keyof {
                account_id?: number;
                name?: string;
            }[]>]: never; };
            language_code?: string;
        } & { [K_20 in Exclude<keyof I["broadcaster_channels"][number], keyof CMsgDOTAMatch_BroadcasterChannel>]: never; })[] & { [K_21 in Exclude<keyof I["broadcaster_channels"], keyof {
            country_code?: string;
            description?: string;
            broadcaster_infos?: {
                account_id?: number;
                name?: string;
            }[];
            language_code?: string;
        }[]>]: never; };
        engine?: number;
        custom_game_data?: {
            custom_game_id?: string;
            map_name?: string;
        } & {
            custom_game_id?: string;
            map_name?: string;
        } & { [K_22 in Exclude<keyof I["custom_game_data"], keyof CMsgDOTAMatch_CustomGameData>]: never; };
        match_flags?: number;
        private_metadata_key?: number;
        radiant_team_score?: number;
        dire_team_score?: number;
        match_outcome?: EMatchOutcome;
        tournament_id?: number;
        tournament_round?: number;
        pre_game_duration?: number;
        coaches?: {
            account_id?: number;
            coach_name?: string;
            coach_rating?: number;
            coach_team?: number;
            coach_party_id?: string;
            is_private_coach?: boolean;
        }[] & ({
            account_id?: number;
            coach_name?: string;
            coach_rating?: number;
            coach_team?: number;
            coach_party_id?: string;
            is_private_coach?: boolean;
        } & {
            account_id?: number;
            coach_name?: string;
            coach_rating?: number;
            coach_team?: number;
            coach_party_id?: string;
            is_private_coach?: boolean;
        } & { [K_23 in Exclude<keyof I["coaches"][number], keyof CMsgDOTAMatch_Coach>]: never; })[] & { [K_24 in Exclude<keyof I["coaches"], keyof {
            account_id?: number;
            coach_name?: string;
            coach_rating?: number;
            coach_team?: number;
            coach_party_id?: string;
            is_private_coach?: boolean;
        }[]>]: never; };
    } & { [K_25 in Exclude<keyof I, keyof CMsgDOTAMatch>]: never; }>(base?: I): CMsgDOTAMatch;
    fromPartial<I_1 extends {
        duration?: number;
        starttime?: number;
        players?: {
            account_id?: number;
            player_slot?: number;
            hero_id?: number;
            item_0?: number;
            item_1?: number;
            item_2?: number;
            item_3?: number;
            item_4?: number;
            item_5?: number;
            item_6?: number;
            item_7?: number;
            item_8?: number;
            item_9?: number;
            expected_team_contribution?: number;
            scaled_metric?: number;
            previous_rank?: number;
            rank_change?: number;
            mmr_type?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            leaver_status?: number;
            gold?: number;
            last_hits?: number;
            denies?: number;
            gold_per_min?: number;
            xp_per_min?: number;
            gold_spent?: number;
            hero_damage?: number;
            tower_damage?: number;
            hero_healing?: number;
            level?: number;
            time_last_seen?: number;
            player_name?: string;
            support_ability_value?: number;
            feeding_detected?: boolean;
            search_rank?: number;
            search_rank_uncertainty?: number;
            rank_uncertainty_change?: number;
            hero_play_count?: number;
            party_id?: string;
            scaled_hero_damage?: number;
            scaled_tower_damage?: number;
            scaled_hero_healing?: number;
            scaled_kills?: number;
            scaled_deaths?: number;
            scaled_assists?: number;
            claimed_farm_gold?: number;
            support_gold?: number;
            claimed_denies?: number;
            claimed_misses?: number;
            misses?: number;
            ability_upgrades?: {
                ability?: number;
                time?: number;
            }[];
            additional_units_inventory?: {
                unit_name?: string;
                items?: number[];
            }[];
            permanent_buffs?: {
                permanent_buff?: number;
                stack_count?: number;
                grant_time?: number;
            }[];
            pro_name?: string;
            real_name?: string;
            custom_game_data?: {
                dota_team?: number;
                winner?: boolean;
            };
            active_plus_subscription?: boolean;
            net_worth?: number;
            bot_difficulty?: number;
            hero_pick_order?: number;
            hero_was_randomed?: boolean;
            hero_was_dota_plus_suggestion?: boolean;
            hero_damage_received?: {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[];
            hero_damage_dealt?: {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[];
            seconds_dead?: number;
            gold_lost_to_death?: number;
            lane_selection_flags?: number;
            bounty_runes?: number;
            outposts_captured?: number;
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
        }[];
        match_id?: string;
        tower_status?: number[];
        barracks_status?: number[];
        cluster?: number;
        first_blood_time?: number;
        replay_salt?: number;
        server_ip?: number;
        server_port?: number;
        lobby_type?: number;
        human_players?: number;
        average_skill?: number;
        game_balance?: number;
        radiant_team_id?: number;
        dire_team_id?: number;
        leagueid?: number;
        radiant_team_name?: string;
        dire_team_name?: string;
        radiant_team_logo?: string;
        dire_team_logo?: string;
        radiant_team_logo_url?: string;
        dire_team_logo_url?: string;
        radiant_team_complete?: number;
        dire_team_complete?: number;
        positive_votes?: number;
        negative_votes?: number;
        game_mode?: DOTA_GameMode;
        picks_bans?: {
            is_pick?: boolean;
            team?: number;
            hero_id?: number;
        }[];
        match_seq_num?: string;
        replay_state?: CMsgDOTAMatch_ReplayState;
        radiant_guild_id?: number;
        dire_guild_id?: number;
        radiant_team_tag?: string;
        dire_team_tag?: string;
        series_id?: number;
        series_type?: number;
        broadcaster_channels?: {
            country_code?: string;
            description?: string;
            broadcaster_infos?: {
                account_id?: number;
                name?: string;
            }[];
            language_code?: string;
        }[];
        engine?: number;
        custom_game_data?: {
            custom_game_id?: string;
            map_name?: string;
        };
        match_flags?: number;
        private_metadata_key?: number;
        radiant_team_score?: number;
        dire_team_score?: number;
        match_outcome?: EMatchOutcome;
        tournament_id?: number;
        tournament_round?: number;
        pre_game_duration?: number;
        coaches?: {
            account_id?: number;
            coach_name?: string;
            coach_rating?: number;
            coach_team?: number;
            coach_party_id?: string;
            is_private_coach?: boolean;
        }[];
    } & {
        duration?: number;
        starttime?: number;
        players?: {
            account_id?: number;
            player_slot?: number;
            hero_id?: number;
            item_0?: number;
            item_1?: number;
            item_2?: number;
            item_3?: number;
            item_4?: number;
            item_5?: number;
            item_6?: number;
            item_7?: number;
            item_8?: number;
            item_9?: number;
            expected_team_contribution?: number;
            scaled_metric?: number;
            previous_rank?: number;
            rank_change?: number;
            mmr_type?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            leaver_status?: number;
            gold?: number;
            last_hits?: number;
            denies?: number;
            gold_per_min?: number;
            xp_per_min?: number;
            gold_spent?: number;
            hero_damage?: number;
            tower_damage?: number;
            hero_healing?: number;
            level?: number;
            time_last_seen?: number;
            player_name?: string;
            support_ability_value?: number;
            feeding_detected?: boolean;
            search_rank?: number;
            search_rank_uncertainty?: number;
            rank_uncertainty_change?: number;
            hero_play_count?: number;
            party_id?: string;
            scaled_hero_damage?: number;
            scaled_tower_damage?: number;
            scaled_hero_healing?: number;
            scaled_kills?: number;
            scaled_deaths?: number;
            scaled_assists?: number;
            claimed_farm_gold?: number;
            support_gold?: number;
            claimed_denies?: number;
            claimed_misses?: number;
            misses?: number;
            ability_upgrades?: {
                ability?: number;
                time?: number;
            }[];
            additional_units_inventory?: {
                unit_name?: string;
                items?: number[];
            }[];
            permanent_buffs?: {
                permanent_buff?: number;
                stack_count?: number;
                grant_time?: number;
            }[];
            pro_name?: string;
            real_name?: string;
            custom_game_data?: {
                dota_team?: number;
                winner?: boolean;
            };
            active_plus_subscription?: boolean;
            net_worth?: number;
            bot_difficulty?: number;
            hero_pick_order?: number;
            hero_was_randomed?: boolean;
            hero_was_dota_plus_suggestion?: boolean;
            hero_damage_received?: {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[];
            hero_damage_dealt?: {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[];
            seconds_dead?: number;
            gold_lost_to_death?: number;
            lane_selection_flags?: number;
            bounty_runes?: number;
            outposts_captured?: number;
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
        }[] & ({
            account_id?: number;
            player_slot?: number;
            hero_id?: number;
            item_0?: number;
            item_1?: number;
            item_2?: number;
            item_3?: number;
            item_4?: number;
            item_5?: number;
            item_6?: number;
            item_7?: number;
            item_8?: number;
            item_9?: number;
            expected_team_contribution?: number;
            scaled_metric?: number;
            previous_rank?: number;
            rank_change?: number;
            mmr_type?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            leaver_status?: number;
            gold?: number;
            last_hits?: number;
            denies?: number;
            gold_per_min?: number;
            xp_per_min?: number;
            gold_spent?: number;
            hero_damage?: number;
            tower_damage?: number;
            hero_healing?: number;
            level?: number;
            time_last_seen?: number;
            player_name?: string;
            support_ability_value?: number;
            feeding_detected?: boolean;
            search_rank?: number;
            search_rank_uncertainty?: number;
            rank_uncertainty_change?: number;
            hero_play_count?: number;
            party_id?: string;
            scaled_hero_damage?: number;
            scaled_tower_damage?: number;
            scaled_hero_healing?: number;
            scaled_kills?: number;
            scaled_deaths?: number;
            scaled_assists?: number;
            claimed_farm_gold?: number;
            support_gold?: number;
            claimed_denies?: number;
            claimed_misses?: number;
            misses?: number;
            ability_upgrades?: {
                ability?: number;
                time?: number;
            }[];
            additional_units_inventory?: {
                unit_name?: string;
                items?: number[];
            }[];
            permanent_buffs?: {
                permanent_buff?: number;
                stack_count?: number;
                grant_time?: number;
            }[];
            pro_name?: string;
            real_name?: string;
            custom_game_data?: {
                dota_team?: number;
                winner?: boolean;
            };
            active_plus_subscription?: boolean;
            net_worth?: number;
            bot_difficulty?: number;
            hero_pick_order?: number;
            hero_was_randomed?: boolean;
            hero_was_dota_plus_suggestion?: boolean;
            hero_damage_received?: {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[];
            hero_damage_dealt?: {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[];
            seconds_dead?: number;
            gold_lost_to_death?: number;
            lane_selection_flags?: number;
            bounty_runes?: number;
            outposts_captured?: number;
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
        } & {
            account_id?: number;
            player_slot?: number;
            hero_id?: number;
            item_0?: number;
            item_1?: number;
            item_2?: number;
            item_3?: number;
            item_4?: number;
            item_5?: number;
            item_6?: number;
            item_7?: number;
            item_8?: number;
            item_9?: number;
            expected_team_contribution?: number;
            scaled_metric?: number;
            previous_rank?: number;
            rank_change?: number;
            mmr_type?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            leaver_status?: number;
            gold?: number;
            last_hits?: number;
            denies?: number;
            gold_per_min?: number;
            xp_per_min?: number;
            gold_spent?: number;
            hero_damage?: number;
            tower_damage?: number;
            hero_healing?: number;
            level?: number;
            time_last_seen?: number;
            player_name?: string;
            support_ability_value?: number;
            feeding_detected?: boolean;
            search_rank?: number;
            search_rank_uncertainty?: number;
            rank_uncertainty_change?: number;
            hero_play_count?: number;
            party_id?: string;
            scaled_hero_damage?: number;
            scaled_tower_damage?: number;
            scaled_hero_healing?: number;
            scaled_kills?: number;
            scaled_deaths?: number;
            scaled_assists?: number;
            claimed_farm_gold?: number;
            support_gold?: number;
            claimed_denies?: number;
            claimed_misses?: number;
            misses?: number;
            ability_upgrades?: {
                ability?: number;
                time?: number;
            }[] & ({
                ability?: number;
                time?: number;
            } & {
                ability?: number;
                time?: number;
            } & { [K_26 in Exclude<keyof I_1["players"][number]["ability_upgrades"][number], keyof CMatchPlayerAbilityUpgrade>]: never; })[] & { [K_27 in Exclude<keyof I_1["players"][number]["ability_upgrades"], keyof {
                ability?: number;
                time?: number;
            }[]>]: never; };
            additional_units_inventory?: {
                unit_name?: string;
                items?: number[];
            }[] & ({
                unit_name?: string;
                items?: number[];
            } & {
                unit_name?: string;
                items?: number[] & number[] & { [K_28 in Exclude<keyof I_1["players"][number]["additional_units_inventory"][number]["items"], keyof number[]>]: never; };
            } & { [K_29 in Exclude<keyof I_1["players"][number]["additional_units_inventory"][number], keyof CMatchAdditionalUnitInventory>]: never; })[] & { [K_30 in Exclude<keyof I_1["players"][number]["additional_units_inventory"], keyof {
                unit_name?: string;
                items?: number[];
            }[]>]: never; };
            permanent_buffs?: {
                permanent_buff?: number;
                stack_count?: number;
                grant_time?: number;
            }[] & ({
                permanent_buff?: number;
                stack_count?: number;
                grant_time?: number;
            } & {
                permanent_buff?: number;
                stack_count?: number;
                grant_time?: number;
            } & { [K_31 in Exclude<keyof I_1["players"][number]["permanent_buffs"][number], keyof CMatchPlayerPermanentBuff>]: never; })[] & { [K_32 in Exclude<keyof I_1["players"][number]["permanent_buffs"], keyof {
                permanent_buff?: number;
                stack_count?: number;
                grant_time?: number;
            }[]>]: never; };
            pro_name?: string;
            real_name?: string;
            custom_game_data?: {
                dota_team?: number;
                winner?: boolean;
            } & {
                dota_team?: number;
                winner?: boolean;
            } & { [K_33 in Exclude<keyof I_1["players"][number]["custom_game_data"], keyof CMsgDOTAMatch_Player_CustomGameData>]: never; };
            active_plus_subscription?: boolean;
            net_worth?: number;
            bot_difficulty?: number;
            hero_pick_order?: number;
            hero_was_randomed?: boolean;
            hero_was_dota_plus_suggestion?: boolean;
            hero_damage_received?: {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[] & ({
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            } & {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            } & { [K_34 in Exclude<keyof I_1["players"][number]["hero_damage_received"][number], keyof CMsgDOTAMatch_Player_HeroDamageReceived>]: never; })[] & { [K_35 in Exclude<keyof I_1["players"][number]["hero_damage_received"], keyof {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[]>]: never; };
            hero_damage_dealt?: {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[] & ({
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            } & {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            } & { [K_36 in Exclude<keyof I_1["players"][number]["hero_damage_dealt"][number], keyof CMsgDOTAMatch_Player_HeroDamageReceived>]: never; })[] & { [K_37 in Exclude<keyof I_1["players"][number]["hero_damage_dealt"], keyof {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[]>]: never; };
            seconds_dead?: number;
            gold_lost_to_death?: number;
            lane_selection_flags?: number;
            bounty_runes?: number;
            outposts_captured?: number;
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
        } & { [K_38 in Exclude<keyof I_1["players"][number], keyof CMsgDOTAMatch_Player>]: never; })[] & { [K_39 in Exclude<keyof I_1["players"], keyof {
            account_id?: number;
            player_slot?: number;
            hero_id?: number;
            item_0?: number;
            item_1?: number;
            item_2?: number;
            item_3?: number;
            item_4?: number;
            item_5?: number;
            item_6?: number;
            item_7?: number;
            item_8?: number;
            item_9?: number;
            expected_team_contribution?: number;
            scaled_metric?: number;
            previous_rank?: number;
            rank_change?: number;
            mmr_type?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            leaver_status?: number;
            gold?: number;
            last_hits?: number;
            denies?: number;
            gold_per_min?: number;
            xp_per_min?: number;
            gold_spent?: number;
            hero_damage?: number;
            tower_damage?: number;
            hero_healing?: number;
            level?: number;
            time_last_seen?: number;
            player_name?: string;
            support_ability_value?: number;
            feeding_detected?: boolean;
            search_rank?: number;
            search_rank_uncertainty?: number;
            rank_uncertainty_change?: number;
            hero_play_count?: number;
            party_id?: string;
            scaled_hero_damage?: number;
            scaled_tower_damage?: number;
            scaled_hero_healing?: number;
            scaled_kills?: number;
            scaled_deaths?: number;
            scaled_assists?: number;
            claimed_farm_gold?: number;
            support_gold?: number;
            claimed_denies?: number;
            claimed_misses?: number;
            misses?: number;
            ability_upgrades?: {
                ability?: number;
                time?: number;
            }[];
            additional_units_inventory?: {
                unit_name?: string;
                items?: number[];
            }[];
            permanent_buffs?: {
                permanent_buff?: number;
                stack_count?: number;
                grant_time?: number;
            }[];
            pro_name?: string;
            real_name?: string;
            custom_game_data?: {
                dota_team?: number;
                winner?: boolean;
            };
            active_plus_subscription?: boolean;
            net_worth?: number;
            bot_difficulty?: number;
            hero_pick_order?: number;
            hero_was_randomed?: boolean;
            hero_was_dota_plus_suggestion?: boolean;
            hero_damage_received?: {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[];
            hero_damage_dealt?: {
                pre_reduction?: number;
                post_reduction?: number;
                damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
            }[];
            seconds_dead?: number;
            gold_lost_to_death?: number;
            lane_selection_flags?: number;
            bounty_runes?: number;
            outposts_captured?: number;
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
        }[]>]: never; };
        match_id?: string;
        tower_status?: number[] & number[] & { [K_40 in Exclude<keyof I_1["tower_status"], keyof number[]>]: never; };
        barracks_status?: number[] & number[] & { [K_41 in Exclude<keyof I_1["barracks_status"], keyof number[]>]: never; };
        cluster?: number;
        first_blood_time?: number;
        replay_salt?: number;
        server_ip?: number;
        server_port?: number;
        lobby_type?: number;
        human_players?: number;
        average_skill?: number;
        game_balance?: number;
        radiant_team_id?: number;
        dire_team_id?: number;
        leagueid?: number;
        radiant_team_name?: string;
        dire_team_name?: string;
        radiant_team_logo?: string;
        dire_team_logo?: string;
        radiant_team_logo_url?: string;
        dire_team_logo_url?: string;
        radiant_team_complete?: number;
        dire_team_complete?: number;
        positive_votes?: number;
        negative_votes?: number;
        game_mode?: DOTA_GameMode;
        picks_bans?: {
            is_pick?: boolean;
            team?: number;
            hero_id?: number;
        }[] & ({
            is_pick?: boolean;
            team?: number;
            hero_id?: number;
        } & {
            is_pick?: boolean;
            team?: number;
            hero_id?: number;
        } & { [K_42 in Exclude<keyof I_1["picks_bans"][number], keyof CMatchHeroSelectEvent>]: never; })[] & { [K_43 in Exclude<keyof I_1["picks_bans"], keyof {
            is_pick?: boolean;
            team?: number;
            hero_id?: number;
        }[]>]: never; };
        match_seq_num?: string;
        replay_state?: CMsgDOTAMatch_ReplayState;
        radiant_guild_id?: number;
        dire_guild_id?: number;
        radiant_team_tag?: string;
        dire_team_tag?: string;
        series_id?: number;
        series_type?: number;
        broadcaster_channels?: {
            country_code?: string;
            description?: string;
            broadcaster_infos?: {
                account_id?: number;
                name?: string;
            }[];
            language_code?: string;
        }[] & ({
            country_code?: string;
            description?: string;
            broadcaster_infos?: {
                account_id?: number;
                name?: string;
            }[];
            language_code?: string;
        } & {
            country_code?: string;
            description?: string;
            broadcaster_infos?: {
                account_id?: number;
                name?: string;
            }[] & ({
                account_id?: number;
                name?: string;
            } & {
                account_id?: number;
                name?: string;
            } & { [K_44 in Exclude<keyof I_1["broadcaster_channels"][number]["broadcaster_infos"][number], keyof CMsgDOTAMatch_BroadcasterInfo>]: never; })[] & { [K_45 in Exclude<keyof I_1["broadcaster_channels"][number]["broadcaster_infos"], keyof {
                account_id?: number;
                name?: string;
            }[]>]: never; };
            language_code?: string;
        } & { [K_46 in Exclude<keyof I_1["broadcaster_channels"][number], keyof CMsgDOTAMatch_BroadcasterChannel>]: never; })[] & { [K_47 in Exclude<keyof I_1["broadcaster_channels"], keyof {
            country_code?: string;
            description?: string;
            broadcaster_infos?: {
                account_id?: number;
                name?: string;
            }[];
            language_code?: string;
        }[]>]: never; };
        engine?: number;
        custom_game_data?: {
            custom_game_id?: string;
            map_name?: string;
        } & {
            custom_game_id?: string;
            map_name?: string;
        } & { [K_48 in Exclude<keyof I_1["custom_game_data"], keyof CMsgDOTAMatch_CustomGameData>]: never; };
        match_flags?: number;
        private_metadata_key?: number;
        radiant_team_score?: number;
        dire_team_score?: number;
        match_outcome?: EMatchOutcome;
        tournament_id?: number;
        tournament_round?: number;
        pre_game_duration?: number;
        coaches?: {
            account_id?: number;
            coach_name?: string;
            coach_rating?: number;
            coach_team?: number;
            coach_party_id?: string;
            is_private_coach?: boolean;
        }[] & ({
            account_id?: number;
            coach_name?: string;
            coach_rating?: number;
            coach_team?: number;
            coach_party_id?: string;
            is_private_coach?: boolean;
        } & {
            account_id?: number;
            coach_name?: string;
            coach_rating?: number;
            coach_team?: number;
            coach_party_id?: string;
            is_private_coach?: boolean;
        } & { [K_49 in Exclude<keyof I_1["coaches"][number], keyof CMsgDOTAMatch_Coach>]: never; })[] & { [K_50 in Exclude<keyof I_1["coaches"], keyof {
            account_id?: number;
            coach_name?: string;
            coach_rating?: number;
            coach_team?: number;
            coach_party_id?: string;
            is_private_coach?: boolean;
        }[]>]: never; };
    } & { [K_51 in Exclude<keyof I_1, keyof CMsgDOTAMatch>]: never; }>(object: I_1): CMsgDOTAMatch;
};
export declare const CMsgDOTAMatch_Player: {
    fromJSON(object: any): CMsgDOTAMatch_Player;
    toJSON(message: CMsgDOTAMatch_Player): unknown;
    create<I extends {
        account_id?: number;
        player_slot?: number;
        hero_id?: number;
        item_0?: number;
        item_1?: number;
        item_2?: number;
        item_3?: number;
        item_4?: number;
        item_5?: number;
        item_6?: number;
        item_7?: number;
        item_8?: number;
        item_9?: number;
        expected_team_contribution?: number;
        scaled_metric?: number;
        previous_rank?: number;
        rank_change?: number;
        mmr_type?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
        leaver_status?: number;
        gold?: number;
        last_hits?: number;
        denies?: number;
        gold_per_min?: number;
        xp_per_min?: number;
        gold_spent?: number;
        hero_damage?: number;
        tower_damage?: number;
        hero_healing?: number;
        level?: number;
        time_last_seen?: number;
        player_name?: string;
        support_ability_value?: number;
        feeding_detected?: boolean;
        search_rank?: number;
        search_rank_uncertainty?: number;
        rank_uncertainty_change?: number;
        hero_play_count?: number;
        party_id?: string;
        scaled_hero_damage?: number;
        scaled_tower_damage?: number;
        scaled_hero_healing?: number;
        scaled_kills?: number;
        scaled_deaths?: number;
        scaled_assists?: number;
        claimed_farm_gold?: number;
        support_gold?: number;
        claimed_denies?: number;
        claimed_misses?: number;
        misses?: number;
        ability_upgrades?: {
            ability?: number;
            time?: number;
        }[];
        additional_units_inventory?: {
            unit_name?: string;
            items?: number[];
        }[];
        permanent_buffs?: {
            permanent_buff?: number;
            stack_count?: number;
            grant_time?: number;
        }[];
        pro_name?: string;
        real_name?: string;
        custom_game_data?: {
            dota_team?: number;
            winner?: boolean;
        };
        active_plus_subscription?: boolean;
        net_worth?: number;
        bot_difficulty?: number;
        hero_pick_order?: number;
        hero_was_randomed?: boolean;
        hero_was_dota_plus_suggestion?: boolean;
        hero_damage_received?: {
            pre_reduction?: number;
            post_reduction?: number;
            damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
        }[];
        hero_damage_dealt?: {
            pre_reduction?: number;
            post_reduction?: number;
            damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
        }[];
        seconds_dead?: number;
        gold_lost_to_death?: number;
        lane_selection_flags?: number;
        bounty_runes?: number;
        outposts_captured?: number;
        team_number?: DOTA_GC_TEAM;
        team_slot?: number;
    } & {
        account_id?: number;
        player_slot?: number;
        hero_id?: number;
        item_0?: number;
        item_1?: number;
        item_2?: number;
        item_3?: number;
        item_4?: number;
        item_5?: number;
        item_6?: number;
        item_7?: number;
        item_8?: number;
        item_9?: number;
        expected_team_contribution?: number;
        scaled_metric?: number;
        previous_rank?: number;
        rank_change?: number;
        mmr_type?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
        leaver_status?: number;
        gold?: number;
        last_hits?: number;
        denies?: number;
        gold_per_min?: number;
        xp_per_min?: number;
        gold_spent?: number;
        hero_damage?: number;
        tower_damage?: number;
        hero_healing?: number;
        level?: number;
        time_last_seen?: number;
        player_name?: string;
        support_ability_value?: number;
        feeding_detected?: boolean;
        search_rank?: number;
        search_rank_uncertainty?: number;
        rank_uncertainty_change?: number;
        hero_play_count?: number;
        party_id?: string;
        scaled_hero_damage?: number;
        scaled_tower_damage?: number;
        scaled_hero_healing?: number;
        scaled_kills?: number;
        scaled_deaths?: number;
        scaled_assists?: number;
        claimed_farm_gold?: number;
        support_gold?: number;
        claimed_denies?: number;
        claimed_misses?: number;
        misses?: number;
        ability_upgrades?: {
            ability?: number;
            time?: number;
        }[] & ({
            ability?: number;
            time?: number;
        } & {
            ability?: number;
            time?: number;
        } & { [K in Exclude<keyof I["ability_upgrades"][number], keyof CMatchPlayerAbilityUpgrade>]: never; })[] & { [K_1 in Exclude<keyof I["ability_upgrades"], keyof {
            ability?: number;
            time?: number;
        }[]>]: never; };
        additional_units_inventory?: {
            unit_name?: string;
            items?: number[];
        }[] & ({
            unit_name?: string;
            items?: number[];
        } & {
            unit_name?: string;
            items?: number[] & number[] & { [K_2 in Exclude<keyof I["additional_units_inventory"][number]["items"], keyof number[]>]: never; };
        } & { [K_3 in Exclude<keyof I["additional_units_inventory"][number], keyof CMatchAdditionalUnitInventory>]: never; })[] & { [K_4 in Exclude<keyof I["additional_units_inventory"], keyof {
            unit_name?: string;
            items?: number[];
        }[]>]: never; };
        permanent_buffs?: {
            permanent_buff?: number;
            stack_count?: number;
            grant_time?: number;
        }[] & ({
            permanent_buff?: number;
            stack_count?: number;
            grant_time?: number;
        } & {
            permanent_buff?: number;
            stack_count?: number;
            grant_time?: number;
        } & { [K_5 in Exclude<keyof I["permanent_buffs"][number], keyof CMatchPlayerPermanentBuff>]: never; })[] & { [K_6 in Exclude<keyof I["permanent_buffs"], keyof {
            permanent_buff?: number;
            stack_count?: number;
            grant_time?: number;
        }[]>]: never; };
        pro_name?: string;
        real_name?: string;
        custom_game_data?: {
            dota_team?: number;
            winner?: boolean;
        } & {
            dota_team?: number;
            winner?: boolean;
        } & { [K_7 in Exclude<keyof I["custom_game_data"], keyof CMsgDOTAMatch_Player_CustomGameData>]: never; };
        active_plus_subscription?: boolean;
        net_worth?: number;
        bot_difficulty?: number;
        hero_pick_order?: number;
        hero_was_randomed?: boolean;
        hero_was_dota_plus_suggestion?: boolean;
        hero_damage_received?: {
            pre_reduction?: number;
            post_reduction?: number;
            damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
        }[] & ({
            pre_reduction?: number;
            post_reduction?: number;
            damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
        } & {
            pre_reduction?: number;
            post_reduction?: number;
            damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
        } & { [K_8 in Exclude<keyof I["hero_damage_received"][number], keyof CMsgDOTAMatch_Player_HeroDamageReceived>]: never; })[] & { [K_9 in Exclude<keyof I["hero_damage_received"], keyof {
            pre_reduction?: number;
            post_reduction?: number;
            damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
        }[]>]: never; };
        hero_damage_dealt?: {
            pre_reduction?: number;
            post_reduction?: number;
            damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
        }[] & ({
            pre_reduction?: number;
            post_reduction?: number;
            damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
        } & {
            pre_reduction?: number;
            post_reduction?: number;
            damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
        } & { [K_10 in Exclude<keyof I["hero_damage_dealt"][number], keyof CMsgDOTAMatch_Player_HeroDamageReceived>]: never; })[] & { [K_11 in Exclude<keyof I["hero_damage_dealt"], keyof {
            pre_reduction?: number;
            post_reduction?: number;
            damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
        }[]>]: never; };
        seconds_dead?: number;
        gold_lost_to_death?: number;
        lane_selection_flags?: number;
        bounty_runes?: number;
        outposts_captured?: number;
        team_number?: DOTA_GC_TEAM;
        team_slot?: number;
    } & { [K_12 in Exclude<keyof I, keyof CMsgDOTAMatch_Player>]: never; }>(base?: I): CMsgDOTAMatch_Player;
    fromPartial<I_1 extends {
        account_id?: number;
        player_slot?: number;
        hero_id?: number;
        item_0?: number;
        item_1?: number;
        item_2?: number;
        item_3?: number;
        item_4?: number;
        item_5?: number;
        item_6?: number;
        item_7?: number;
        item_8?: number;
        item_9?: number;
        expected_team_contribution?: number;
        scaled_metric?: number;
        previous_rank?: number;
        rank_change?: number;
        mmr_type?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
        leaver_status?: number;
        gold?: number;
        last_hits?: number;
        denies?: number;
        gold_per_min?: number;
        xp_per_min?: number;
        gold_spent?: number;
        hero_damage?: number;
        tower_damage?: number;
        hero_healing?: number;
        level?: number;
        time_last_seen?: number;
        player_name?: string;
        support_ability_value?: number;
        feeding_detected?: boolean;
        search_rank?: number;
        search_rank_uncertainty?: number;
        rank_uncertainty_change?: number;
        hero_play_count?: number;
        party_id?: string;
        scaled_hero_damage?: number;
        scaled_tower_damage?: number;
        scaled_hero_healing?: number;
        scaled_kills?: number;
        scaled_deaths?: number;
        scaled_assists?: number;
        claimed_farm_gold?: number;
        support_gold?: number;
        claimed_denies?: number;
        claimed_misses?: number;
        misses?: number;
        ability_upgrades?: {
            ability?: number;
            time?: number;
        }[];
        additional_units_inventory?: {
            unit_name?: string;
            items?: number[];
        }[];
        permanent_buffs?: {
            permanent_buff?: number;
            stack_count?: number;
            grant_time?: number;
        }[];
        pro_name?: string;
        real_name?: string;
        custom_game_data?: {
            dota_team?: number;
            winner?: boolean;
        };
        active_plus_subscription?: boolean;
        net_worth?: number;
        bot_difficulty?: number;
        hero_pick_order?: number;
        hero_was_randomed?: boolean;
        hero_was_dota_plus_suggestion?: boolean;
        hero_damage_received?: {
            pre_reduction?: number;
            post_reduction?: number;
            damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
        }[];
        hero_damage_dealt?: {
            pre_reduction?: number;
            post_reduction?: number;
            damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
        }[];
        seconds_dead?: number;
        gold_lost_to_death?: number;
        lane_selection_flags?: number;
        bounty_runes?: number;
        outposts_captured?: number;
        team_number?: DOTA_GC_TEAM;
        team_slot?: number;
    } & {
        account_id?: number;
        player_slot?: number;
        hero_id?: number;
        item_0?: number;
        item_1?: number;
        item_2?: number;
        item_3?: number;
        item_4?: number;
        item_5?: number;
        item_6?: number;
        item_7?: number;
        item_8?: number;
        item_9?: number;
        expected_team_contribution?: number;
        scaled_metric?: number;
        previous_rank?: number;
        rank_change?: number;
        mmr_type?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
        leaver_status?: number;
        gold?: number;
        last_hits?: number;
        denies?: number;
        gold_per_min?: number;
        xp_per_min?: number;
        gold_spent?: number;
        hero_damage?: number;
        tower_damage?: number;
        hero_healing?: number;
        level?: number;
        time_last_seen?: number;
        player_name?: string;
        support_ability_value?: number;
        feeding_detected?: boolean;
        search_rank?: number;
        search_rank_uncertainty?: number;
        rank_uncertainty_change?: number;
        hero_play_count?: number;
        party_id?: string;
        scaled_hero_damage?: number;
        scaled_tower_damage?: number;
        scaled_hero_healing?: number;
        scaled_kills?: number;
        scaled_deaths?: number;
        scaled_assists?: number;
        claimed_farm_gold?: number;
        support_gold?: number;
        claimed_denies?: number;
        claimed_misses?: number;
        misses?: number;
        ability_upgrades?: {
            ability?: number;
            time?: number;
        }[] & ({
            ability?: number;
            time?: number;
        } & {
            ability?: number;
            time?: number;
        } & { [K_13 in Exclude<keyof I_1["ability_upgrades"][number], keyof CMatchPlayerAbilityUpgrade>]: never; })[] & { [K_14 in Exclude<keyof I_1["ability_upgrades"], keyof {
            ability?: number;
            time?: number;
        }[]>]: never; };
        additional_units_inventory?: {
            unit_name?: string;
            items?: number[];
        }[] & ({
            unit_name?: string;
            items?: number[];
        } & {
            unit_name?: string;
            items?: number[] & number[] & { [K_15 in Exclude<keyof I_1["additional_units_inventory"][number]["items"], keyof number[]>]: never; };
        } & { [K_16 in Exclude<keyof I_1["additional_units_inventory"][number], keyof CMatchAdditionalUnitInventory>]: never; })[] & { [K_17 in Exclude<keyof I_1["additional_units_inventory"], keyof {
            unit_name?: string;
            items?: number[];
        }[]>]: never; };
        permanent_buffs?: {
            permanent_buff?: number;
            stack_count?: number;
            grant_time?: number;
        }[] & ({
            permanent_buff?: number;
            stack_count?: number;
            grant_time?: number;
        } & {
            permanent_buff?: number;
            stack_count?: number;
            grant_time?: number;
        } & { [K_18 in Exclude<keyof I_1["permanent_buffs"][number], keyof CMatchPlayerPermanentBuff>]: never; })[] & { [K_19 in Exclude<keyof I_1["permanent_buffs"], keyof {
            permanent_buff?: number;
            stack_count?: number;
            grant_time?: number;
        }[]>]: never; };
        pro_name?: string;
        real_name?: string;
        custom_game_data?: {
            dota_team?: number;
            winner?: boolean;
        } & {
            dota_team?: number;
            winner?: boolean;
        } & { [K_20 in Exclude<keyof I_1["custom_game_data"], keyof CMsgDOTAMatch_Player_CustomGameData>]: never; };
        active_plus_subscription?: boolean;
        net_worth?: number;
        bot_difficulty?: number;
        hero_pick_order?: number;
        hero_was_randomed?: boolean;
        hero_was_dota_plus_suggestion?: boolean;
        hero_damage_received?: {
            pre_reduction?: number;
            post_reduction?: number;
            damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
        }[] & ({
            pre_reduction?: number;
            post_reduction?: number;
            damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
        } & {
            pre_reduction?: number;
            post_reduction?: number;
            damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
        } & { [K_21 in Exclude<keyof I_1["hero_damage_received"][number], keyof CMsgDOTAMatch_Player_HeroDamageReceived>]: never; })[] & { [K_22 in Exclude<keyof I_1["hero_damage_received"], keyof {
            pre_reduction?: number;
            post_reduction?: number;
            damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
        }[]>]: never; };
        hero_damage_dealt?: {
            pre_reduction?: number;
            post_reduction?: number;
            damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
        }[] & ({
            pre_reduction?: number;
            post_reduction?: number;
            damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
        } & {
            pre_reduction?: number;
            post_reduction?: number;
            damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
        } & { [K_23 in Exclude<keyof I_1["hero_damage_dealt"][number], keyof CMsgDOTAMatch_Player_HeroDamageReceived>]: never; })[] & { [K_24 in Exclude<keyof I_1["hero_damage_dealt"], keyof {
            pre_reduction?: number;
            post_reduction?: number;
            damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
        }[]>]: never; };
        seconds_dead?: number;
        gold_lost_to_death?: number;
        lane_selection_flags?: number;
        bounty_runes?: number;
        outposts_captured?: number;
        team_number?: DOTA_GC_TEAM;
        team_slot?: number;
    } & { [K_25 in Exclude<keyof I_1, keyof CMsgDOTAMatch_Player>]: never; }>(object: I_1): CMsgDOTAMatch_Player;
};
export declare const CMsgDOTAMatch_Player_CustomGameData: {
    fromJSON(object: any): CMsgDOTAMatch_Player_CustomGameData;
    toJSON(message: CMsgDOTAMatch_Player_CustomGameData): unknown;
    create<I extends {
        dota_team?: number;
        winner?: boolean;
    } & {
        dota_team?: number;
        winner?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgDOTAMatch_Player_CustomGameData>]: never; }>(base?: I): CMsgDOTAMatch_Player_CustomGameData;
    fromPartial<I_1 extends {
        dota_team?: number;
        winner?: boolean;
    } & {
        dota_team?: number;
        winner?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTAMatch_Player_CustomGameData>]: never; }>(object: I_1): CMsgDOTAMatch_Player_CustomGameData;
};
export declare const CMsgDOTAMatch_Player_HeroDamageReceived: {
    fromJSON(object: any): CMsgDOTAMatch_Player_HeroDamageReceived;
    toJSON(message: CMsgDOTAMatch_Player_HeroDamageReceived): unknown;
    create<I extends {
        pre_reduction?: number;
        post_reduction?: number;
        damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
    } & {
        pre_reduction?: number;
        post_reduction?: number;
        damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
    } & { [K in Exclude<keyof I, keyof CMsgDOTAMatch_Player_HeroDamageReceived>]: never; }>(base?: I): CMsgDOTAMatch_Player_HeroDamageReceived;
    fromPartial<I_1 extends {
        pre_reduction?: number;
        post_reduction?: number;
        damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
    } & {
        pre_reduction?: number;
        post_reduction?: number;
        damage_type?: CMsgDOTAMatch_Player_HeroDamageType;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTAMatch_Player_HeroDamageReceived>]: never; }>(object: I_1): CMsgDOTAMatch_Player_HeroDamageReceived;
};
export declare const CMsgDOTAMatch_BroadcasterInfo: {
    fromJSON(object: any): CMsgDOTAMatch_BroadcasterInfo;
    toJSON(message: CMsgDOTAMatch_BroadcasterInfo): unknown;
    create<I extends {
        account_id?: number;
        name?: string;
    } & {
        account_id?: number;
        name?: string;
    } & { [K in Exclude<keyof I, keyof CMsgDOTAMatch_BroadcasterInfo>]: never; }>(base?: I): CMsgDOTAMatch_BroadcasterInfo;
    fromPartial<I_1 extends {
        account_id?: number;
        name?: string;
    } & {
        account_id?: number;
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTAMatch_BroadcasterInfo>]: never; }>(object: I_1): CMsgDOTAMatch_BroadcasterInfo;
};
export declare const CMsgDOTAMatch_BroadcasterChannel: {
    fromJSON(object: any): CMsgDOTAMatch_BroadcasterChannel;
    toJSON(message: CMsgDOTAMatch_BroadcasterChannel): unknown;
    create<I extends {
        country_code?: string;
        description?: string;
        broadcaster_infos?: {
            account_id?: number;
            name?: string;
        }[];
        language_code?: string;
    } & {
        country_code?: string;
        description?: string;
        broadcaster_infos?: {
            account_id?: number;
            name?: string;
        }[] & ({
            account_id?: number;
            name?: string;
        } & {
            account_id?: number;
            name?: string;
        } & { [K in Exclude<keyof I["broadcaster_infos"][number], keyof CMsgDOTAMatch_BroadcasterInfo>]: never; })[] & { [K_1 in Exclude<keyof I["broadcaster_infos"], keyof {
            account_id?: number;
            name?: string;
        }[]>]: never; };
        language_code?: string;
    } & { [K_2 in Exclude<keyof I, keyof CMsgDOTAMatch_BroadcasterChannel>]: never; }>(base?: I): CMsgDOTAMatch_BroadcasterChannel;
    fromPartial<I_1 extends {
        country_code?: string;
        description?: string;
        broadcaster_infos?: {
            account_id?: number;
            name?: string;
        }[];
        language_code?: string;
    } & {
        country_code?: string;
        description?: string;
        broadcaster_infos?: {
            account_id?: number;
            name?: string;
        }[] & ({
            account_id?: number;
            name?: string;
        } & {
            account_id?: number;
            name?: string;
        } & { [K_3 in Exclude<keyof I_1["broadcaster_infos"][number], keyof CMsgDOTAMatch_BroadcasterInfo>]: never; })[] & { [K_4 in Exclude<keyof I_1["broadcaster_infos"], keyof {
            account_id?: number;
            name?: string;
        }[]>]: never; };
        language_code?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgDOTAMatch_BroadcasterChannel>]: never; }>(object: I_1): CMsgDOTAMatch_BroadcasterChannel;
};
export declare const CMsgDOTAMatch_Coach: {
    fromJSON(object: any): CMsgDOTAMatch_Coach;
    toJSON(message: CMsgDOTAMatch_Coach): unknown;
    create<I extends {
        account_id?: number;
        coach_name?: string;
        coach_rating?: number;
        coach_team?: number;
        coach_party_id?: string;
        is_private_coach?: boolean;
    } & {
        account_id?: number;
        coach_name?: string;
        coach_rating?: number;
        coach_team?: number;
        coach_party_id?: string;
        is_private_coach?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgDOTAMatch_Coach>]: never; }>(base?: I): CMsgDOTAMatch_Coach;
    fromPartial<I_1 extends {
        account_id?: number;
        coach_name?: string;
        coach_rating?: number;
        coach_team?: number;
        coach_party_id?: string;
        is_private_coach?: boolean;
    } & {
        account_id?: number;
        coach_name?: string;
        coach_rating?: number;
        coach_team?: number;
        coach_party_id?: string;
        is_private_coach?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTAMatch_Coach>]: never; }>(object: I_1): CMsgDOTAMatch_Coach;
};
export declare const CMsgDOTAMatch_CustomGameData: {
    fromJSON(object: any): CMsgDOTAMatch_CustomGameData;
    toJSON(message: CMsgDOTAMatch_CustomGameData): unknown;
    create<I extends {
        custom_game_id?: string;
        map_name?: string;
    } & {
        custom_game_id?: string;
        map_name?: string;
    } & { [K in Exclude<keyof I, keyof CMsgDOTAMatch_CustomGameData>]: never; }>(base?: I): CMsgDOTAMatch_CustomGameData;
    fromPartial<I_1 extends {
        custom_game_id?: string;
        map_name?: string;
    } & {
        custom_game_id?: string;
        map_name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTAMatch_CustomGameData>]: never; }>(object: I_1): CMsgDOTAMatch_CustomGameData;
};
export declare const CMsgPlayerCard: {
    fromJSON(object: any): CMsgPlayerCard;
    toJSON(message: CMsgPlayerCard): unknown;
    create<I extends {
        account_id?: number;
        stat_modifier?: {
            stat?: number;
            value?: number;
        }[];
    } & {
        account_id?: number;
        stat_modifier?: {
            stat?: number;
            value?: number;
        }[] & ({
            stat?: number;
            value?: number;
        } & {
            stat?: number;
            value?: number;
        } & { [K in Exclude<keyof I["stat_modifier"][number], keyof CMsgPlayerCard_StatModifier>]: never; })[] & { [K_1 in Exclude<keyof I["stat_modifier"], keyof {
            stat?: number;
            value?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgPlayerCard>]: never; }>(base?: I): CMsgPlayerCard;
    fromPartial<I_1 extends {
        account_id?: number;
        stat_modifier?: {
            stat?: number;
            value?: number;
        }[];
    } & {
        account_id?: number;
        stat_modifier?: {
            stat?: number;
            value?: number;
        }[] & ({
            stat?: number;
            value?: number;
        } & {
            stat?: number;
            value?: number;
        } & { [K_3 in Exclude<keyof I_1["stat_modifier"][number], keyof CMsgPlayerCard_StatModifier>]: never; })[] & { [K_4 in Exclude<keyof I_1["stat_modifier"], keyof {
            stat?: number;
            value?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgPlayerCard>]: never; }>(object: I_1): CMsgPlayerCard;
};
export declare const CMsgPlayerCard_StatModifier: {
    fromJSON(object: any): CMsgPlayerCard_StatModifier;
    toJSON(message: CMsgPlayerCard_StatModifier): unknown;
    create<I extends {
        stat?: number;
        value?: number;
    } & {
        stat?: number;
        value?: number;
    } & { [K in Exclude<keyof I, keyof CMsgPlayerCard_StatModifier>]: never; }>(base?: I): CMsgPlayerCard_StatModifier;
    fromPartial<I_1 extends {
        stat?: number;
        value?: number;
    } & {
        stat?: number;
        value?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgPlayerCard_StatModifier>]: never; }>(object: I_1): CMsgPlayerCard_StatModifier;
};
export declare const CMsgDOTAFantasyPlayerStats: {
    fromJSON(object: any): CMsgDOTAFantasyPlayerStats;
    toJSON(message: CMsgDOTAFantasyPlayerStats): unknown;
    create<I extends {
        player_account_id?: number;
        match_id?: string;
        match_completed?: boolean;
        team_id?: number;
        league_id?: number;
        delay?: number;
        series_id?: number;
        series_type?: number;
        kills?: number;
        deaths?: number;
        cs?: number;
        gpm?: number;
        tower_kills?: number;
        roshan_kills?: number;
        teamfight_participation?: number;
        wards_placed?: number;
        camps_stacked?: number;
        runes_grabbed?: number;
        first_blood?: number;
        stuns?: number;
    } & {
        player_account_id?: number;
        match_id?: string;
        match_completed?: boolean;
        team_id?: number;
        league_id?: number;
        delay?: number;
        series_id?: number;
        series_type?: number;
        kills?: number;
        deaths?: number;
        cs?: number;
        gpm?: number;
        tower_kills?: number;
        roshan_kills?: number;
        teamfight_participation?: number;
        wards_placed?: number;
        camps_stacked?: number;
        runes_grabbed?: number;
        first_blood?: number;
        stuns?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTAFantasyPlayerStats>]: never; }>(base?: I): CMsgDOTAFantasyPlayerStats;
    fromPartial<I_1 extends {
        player_account_id?: number;
        match_id?: string;
        match_completed?: boolean;
        team_id?: number;
        league_id?: number;
        delay?: number;
        series_id?: number;
        series_type?: number;
        kills?: number;
        deaths?: number;
        cs?: number;
        gpm?: number;
        tower_kills?: number;
        roshan_kills?: number;
        teamfight_participation?: number;
        wards_placed?: number;
        camps_stacked?: number;
        runes_grabbed?: number;
        first_blood?: number;
        stuns?: number;
    } & {
        player_account_id?: number;
        match_id?: string;
        match_completed?: boolean;
        team_id?: number;
        league_id?: number;
        delay?: number;
        series_id?: number;
        series_type?: number;
        kills?: number;
        deaths?: number;
        cs?: number;
        gpm?: number;
        tower_kills?: number;
        roshan_kills?: number;
        teamfight_participation?: number;
        wards_placed?: number;
        camps_stacked?: number;
        runes_grabbed?: number;
        first_blood?: number;
        stuns?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTAFantasyPlayerStats>]: never; }>(object: I_1): CMsgDOTAFantasyPlayerStats;
};
export declare const CMsgDOTAFantasyPlayerMatchStats: {
    fromJSON(object: any): CMsgDOTAFantasyPlayerMatchStats;
    toJSON(message: CMsgDOTAFantasyPlayerMatchStats): unknown;
    create<I extends {
        matches?: {
            player_account_id?: number;
            match_id?: string;
            match_completed?: boolean;
            team_id?: number;
            league_id?: number;
            delay?: number;
            series_id?: number;
            series_type?: number;
            kills?: number;
            deaths?: number;
            cs?: number;
            gpm?: number;
            tower_kills?: number;
            roshan_kills?: number;
            teamfight_participation?: number;
            wards_placed?: number;
            camps_stacked?: number;
            runes_grabbed?: number;
            first_blood?: number;
            stuns?: number;
        }[];
    } & {
        matches?: {
            player_account_id?: number;
            match_id?: string;
            match_completed?: boolean;
            team_id?: number;
            league_id?: number;
            delay?: number;
            series_id?: number;
            series_type?: number;
            kills?: number;
            deaths?: number;
            cs?: number;
            gpm?: number;
            tower_kills?: number;
            roshan_kills?: number;
            teamfight_participation?: number;
            wards_placed?: number;
            camps_stacked?: number;
            runes_grabbed?: number;
            first_blood?: number;
            stuns?: number;
        }[] & ({
            player_account_id?: number;
            match_id?: string;
            match_completed?: boolean;
            team_id?: number;
            league_id?: number;
            delay?: number;
            series_id?: number;
            series_type?: number;
            kills?: number;
            deaths?: number;
            cs?: number;
            gpm?: number;
            tower_kills?: number;
            roshan_kills?: number;
            teamfight_participation?: number;
            wards_placed?: number;
            camps_stacked?: number;
            runes_grabbed?: number;
            first_blood?: number;
            stuns?: number;
        } & {
            player_account_id?: number;
            match_id?: string;
            match_completed?: boolean;
            team_id?: number;
            league_id?: number;
            delay?: number;
            series_id?: number;
            series_type?: number;
            kills?: number;
            deaths?: number;
            cs?: number;
            gpm?: number;
            tower_kills?: number;
            roshan_kills?: number;
            teamfight_participation?: number;
            wards_placed?: number;
            camps_stacked?: number;
            runes_grabbed?: number;
            first_blood?: number;
            stuns?: number;
        } & { [K in Exclude<keyof I["matches"][number], keyof CMsgDOTAFantasyPlayerStats>]: never; })[] & { [K_1 in Exclude<keyof I["matches"], keyof {
            player_account_id?: number;
            match_id?: string;
            match_completed?: boolean;
            team_id?: number;
            league_id?: number;
            delay?: number;
            series_id?: number;
            series_type?: number;
            kills?: number;
            deaths?: number;
            cs?: number;
            gpm?: number;
            tower_kills?: number;
            roshan_kills?: number;
            teamfight_participation?: number;
            wards_placed?: number;
            camps_stacked?: number;
            runes_grabbed?: number;
            first_blood?: number;
            stuns?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "matches">]: never; }>(base?: I): CMsgDOTAFantasyPlayerMatchStats;
    fromPartial<I_1 extends {
        matches?: {
            player_account_id?: number;
            match_id?: string;
            match_completed?: boolean;
            team_id?: number;
            league_id?: number;
            delay?: number;
            series_id?: number;
            series_type?: number;
            kills?: number;
            deaths?: number;
            cs?: number;
            gpm?: number;
            tower_kills?: number;
            roshan_kills?: number;
            teamfight_participation?: number;
            wards_placed?: number;
            camps_stacked?: number;
            runes_grabbed?: number;
            first_blood?: number;
            stuns?: number;
        }[];
    } & {
        matches?: {
            player_account_id?: number;
            match_id?: string;
            match_completed?: boolean;
            team_id?: number;
            league_id?: number;
            delay?: number;
            series_id?: number;
            series_type?: number;
            kills?: number;
            deaths?: number;
            cs?: number;
            gpm?: number;
            tower_kills?: number;
            roshan_kills?: number;
            teamfight_participation?: number;
            wards_placed?: number;
            camps_stacked?: number;
            runes_grabbed?: number;
            first_blood?: number;
            stuns?: number;
        }[] & ({
            player_account_id?: number;
            match_id?: string;
            match_completed?: boolean;
            team_id?: number;
            league_id?: number;
            delay?: number;
            series_id?: number;
            series_type?: number;
            kills?: number;
            deaths?: number;
            cs?: number;
            gpm?: number;
            tower_kills?: number;
            roshan_kills?: number;
            teamfight_participation?: number;
            wards_placed?: number;
            camps_stacked?: number;
            runes_grabbed?: number;
            first_blood?: number;
            stuns?: number;
        } & {
            player_account_id?: number;
            match_id?: string;
            match_completed?: boolean;
            team_id?: number;
            league_id?: number;
            delay?: number;
            series_id?: number;
            series_type?: number;
            kills?: number;
            deaths?: number;
            cs?: number;
            gpm?: number;
            tower_kills?: number;
            roshan_kills?: number;
            teamfight_participation?: number;
            wards_placed?: number;
            camps_stacked?: number;
            runes_grabbed?: number;
            first_blood?: number;
            stuns?: number;
        } & { [K_3 in Exclude<keyof I_1["matches"][number], keyof CMsgDOTAFantasyPlayerStats>]: never; })[] & { [K_4 in Exclude<keyof I_1["matches"], keyof {
            player_account_id?: number;
            match_id?: string;
            match_completed?: boolean;
            team_id?: number;
            league_id?: number;
            delay?: number;
            series_id?: number;
            series_type?: number;
            kills?: number;
            deaths?: number;
            cs?: number;
            gpm?: number;
            tower_kills?: number;
            roshan_kills?: number;
            teamfight_participation?: number;
            wards_placed?: number;
            camps_stacked?: number;
            runes_grabbed?: number;
            first_blood?: number;
            stuns?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "matches">]: never; }>(object: I_1): CMsgDOTAFantasyPlayerMatchStats;
};
export declare const CMsgDOTABotDebugInfo: {
    fromJSON(object: any): CMsgDOTABotDebugInfo;
    toJSON(message: CMsgDOTABotDebugInfo): unknown;
    create<I extends {
        bots?: {
            player_owner_id?: number;
            hero_id?: number;
            difficulty?: number;
            power_current?: number;
            power_max?: number;
            move_target_x?: number;
            move_target_y?: number;
            move_target_z?: number;
            active_mode_id?: number;
            execution_time?: number;
            modes?: {
                mode_id?: number;
                desire?: number;
                target_entity?: number;
                target_x?: number;
                target_y?: number;
                target_z?: number;
            }[];
            action?: {
                action_id?: number;
                action_target?: string;
            };
        }[];
        desire_push_lane_top?: number;
        desire_push_lane_mid?: number;
        desire_push_lane_bot?: number;
        desire_defend_lane_top?: number;
        desire_defend_lane_mid?: number;
        desire_defend_lane_bot?: number;
        desire_farm_lane_top?: number;
        desire_farm_lane_mid?: number;
        desire_farm_lane_bot?: number;
        desire_farm_roshan?: number;
        execution_time?: number;
        rune_status?: number[];
    } & {
        bots?: {
            player_owner_id?: number;
            hero_id?: number;
            difficulty?: number;
            power_current?: number;
            power_max?: number;
            move_target_x?: number;
            move_target_y?: number;
            move_target_z?: number;
            active_mode_id?: number;
            execution_time?: number;
            modes?: {
                mode_id?: number;
                desire?: number;
                target_entity?: number;
                target_x?: number;
                target_y?: number;
                target_z?: number;
            }[];
            action?: {
                action_id?: number;
                action_target?: string;
            };
        }[] & ({
            player_owner_id?: number;
            hero_id?: number;
            difficulty?: number;
            power_current?: number;
            power_max?: number;
            move_target_x?: number;
            move_target_y?: number;
            move_target_z?: number;
            active_mode_id?: number;
            execution_time?: number;
            modes?: {
                mode_id?: number;
                desire?: number;
                target_entity?: number;
                target_x?: number;
                target_y?: number;
                target_z?: number;
            }[];
            action?: {
                action_id?: number;
                action_target?: string;
            };
        } & {
            player_owner_id?: number;
            hero_id?: number;
            difficulty?: number;
            power_current?: number;
            power_max?: number;
            move_target_x?: number;
            move_target_y?: number;
            move_target_z?: number;
            active_mode_id?: number;
            execution_time?: number;
            modes?: {
                mode_id?: number;
                desire?: number;
                target_entity?: number;
                target_x?: number;
                target_y?: number;
                target_z?: number;
            }[] & ({
                mode_id?: number;
                desire?: number;
                target_entity?: number;
                target_x?: number;
                target_y?: number;
                target_z?: number;
            } & {
                mode_id?: number;
                desire?: number;
                target_entity?: number;
                target_x?: number;
                target_y?: number;
                target_z?: number;
            } & { [K in Exclude<keyof I["bots"][number]["modes"][number], keyof CMsgDOTABotDebugInfo_Bot_Mode>]: never; })[] & { [K_1 in Exclude<keyof I["bots"][number]["modes"], keyof {
                mode_id?: number;
                desire?: number;
                target_entity?: number;
                target_x?: number;
                target_y?: number;
                target_z?: number;
            }[]>]: never; };
            action?: {
                action_id?: number;
                action_target?: string;
            } & {
                action_id?: number;
                action_target?: string;
            } & { [K_2 in Exclude<keyof I["bots"][number]["action"], keyof CMsgDOTABotDebugInfo_Bot_Action>]: never; };
        } & { [K_3 in Exclude<keyof I["bots"][number], keyof CMsgDOTABotDebugInfo_Bot>]: never; })[] & { [K_4 in Exclude<keyof I["bots"], keyof {
            player_owner_id?: number;
            hero_id?: number;
            difficulty?: number;
            power_current?: number;
            power_max?: number;
            move_target_x?: number;
            move_target_y?: number;
            move_target_z?: number;
            active_mode_id?: number;
            execution_time?: number;
            modes?: {
                mode_id?: number;
                desire?: number;
                target_entity?: number;
                target_x?: number;
                target_y?: number;
                target_z?: number;
            }[];
            action?: {
                action_id?: number;
                action_target?: string;
            };
        }[]>]: never; };
        desire_push_lane_top?: number;
        desire_push_lane_mid?: number;
        desire_push_lane_bot?: number;
        desire_defend_lane_top?: number;
        desire_defend_lane_mid?: number;
        desire_defend_lane_bot?: number;
        desire_farm_lane_top?: number;
        desire_farm_lane_mid?: number;
        desire_farm_lane_bot?: number;
        desire_farm_roshan?: number;
        execution_time?: number;
        rune_status?: number[] & number[] & { [K_5 in Exclude<keyof I["rune_status"], keyof number[]>]: never; };
    } & { [K_6 in Exclude<keyof I, keyof CMsgDOTABotDebugInfo>]: never; }>(base?: I): CMsgDOTABotDebugInfo;
    fromPartial<I_1 extends {
        bots?: {
            player_owner_id?: number;
            hero_id?: number;
            difficulty?: number;
            power_current?: number;
            power_max?: number;
            move_target_x?: number;
            move_target_y?: number;
            move_target_z?: number;
            active_mode_id?: number;
            execution_time?: number;
            modes?: {
                mode_id?: number;
                desire?: number;
                target_entity?: number;
                target_x?: number;
                target_y?: number;
                target_z?: number;
            }[];
            action?: {
                action_id?: number;
                action_target?: string;
            };
        }[];
        desire_push_lane_top?: number;
        desire_push_lane_mid?: number;
        desire_push_lane_bot?: number;
        desire_defend_lane_top?: number;
        desire_defend_lane_mid?: number;
        desire_defend_lane_bot?: number;
        desire_farm_lane_top?: number;
        desire_farm_lane_mid?: number;
        desire_farm_lane_bot?: number;
        desire_farm_roshan?: number;
        execution_time?: number;
        rune_status?: number[];
    } & {
        bots?: {
            player_owner_id?: number;
            hero_id?: number;
            difficulty?: number;
            power_current?: number;
            power_max?: number;
            move_target_x?: number;
            move_target_y?: number;
            move_target_z?: number;
            active_mode_id?: number;
            execution_time?: number;
            modes?: {
                mode_id?: number;
                desire?: number;
                target_entity?: number;
                target_x?: number;
                target_y?: number;
                target_z?: number;
            }[];
            action?: {
                action_id?: number;
                action_target?: string;
            };
        }[] & ({
            player_owner_id?: number;
            hero_id?: number;
            difficulty?: number;
            power_current?: number;
            power_max?: number;
            move_target_x?: number;
            move_target_y?: number;
            move_target_z?: number;
            active_mode_id?: number;
            execution_time?: number;
            modes?: {
                mode_id?: number;
                desire?: number;
                target_entity?: number;
                target_x?: number;
                target_y?: number;
                target_z?: number;
            }[];
            action?: {
                action_id?: number;
                action_target?: string;
            };
        } & {
            player_owner_id?: number;
            hero_id?: number;
            difficulty?: number;
            power_current?: number;
            power_max?: number;
            move_target_x?: number;
            move_target_y?: number;
            move_target_z?: number;
            active_mode_id?: number;
            execution_time?: number;
            modes?: {
                mode_id?: number;
                desire?: number;
                target_entity?: number;
                target_x?: number;
                target_y?: number;
                target_z?: number;
            }[] & ({
                mode_id?: number;
                desire?: number;
                target_entity?: number;
                target_x?: number;
                target_y?: number;
                target_z?: number;
            } & {
                mode_id?: number;
                desire?: number;
                target_entity?: number;
                target_x?: number;
                target_y?: number;
                target_z?: number;
            } & { [K_7 in Exclude<keyof I_1["bots"][number]["modes"][number], keyof CMsgDOTABotDebugInfo_Bot_Mode>]: never; })[] & { [K_8 in Exclude<keyof I_1["bots"][number]["modes"], keyof {
                mode_id?: number;
                desire?: number;
                target_entity?: number;
                target_x?: number;
                target_y?: number;
                target_z?: number;
            }[]>]: never; };
            action?: {
                action_id?: number;
                action_target?: string;
            } & {
                action_id?: number;
                action_target?: string;
            } & { [K_9 in Exclude<keyof I_1["bots"][number]["action"], keyof CMsgDOTABotDebugInfo_Bot_Action>]: never; };
        } & { [K_10 in Exclude<keyof I_1["bots"][number], keyof CMsgDOTABotDebugInfo_Bot>]: never; })[] & { [K_11 in Exclude<keyof I_1["bots"], keyof {
            player_owner_id?: number;
            hero_id?: number;
            difficulty?: number;
            power_current?: number;
            power_max?: number;
            move_target_x?: number;
            move_target_y?: number;
            move_target_z?: number;
            active_mode_id?: number;
            execution_time?: number;
            modes?: {
                mode_id?: number;
                desire?: number;
                target_entity?: number;
                target_x?: number;
                target_y?: number;
                target_z?: number;
            }[];
            action?: {
                action_id?: number;
                action_target?: string;
            };
        }[]>]: never; };
        desire_push_lane_top?: number;
        desire_push_lane_mid?: number;
        desire_push_lane_bot?: number;
        desire_defend_lane_top?: number;
        desire_defend_lane_mid?: number;
        desire_defend_lane_bot?: number;
        desire_farm_lane_top?: number;
        desire_farm_lane_mid?: number;
        desire_farm_lane_bot?: number;
        desire_farm_roshan?: number;
        execution_time?: number;
        rune_status?: number[] & number[] & { [K_12 in Exclude<keyof I_1["rune_status"], keyof number[]>]: never; };
    } & { [K_13 in Exclude<keyof I_1, keyof CMsgDOTABotDebugInfo>]: never; }>(object: I_1): CMsgDOTABotDebugInfo;
};
export declare const CMsgDOTABotDebugInfo_Bot: {
    fromJSON(object: any): CMsgDOTABotDebugInfo_Bot;
    toJSON(message: CMsgDOTABotDebugInfo_Bot): unknown;
    create<I extends {
        player_owner_id?: number;
        hero_id?: number;
        difficulty?: number;
        power_current?: number;
        power_max?: number;
        move_target_x?: number;
        move_target_y?: number;
        move_target_z?: number;
        active_mode_id?: number;
        execution_time?: number;
        modes?: {
            mode_id?: number;
            desire?: number;
            target_entity?: number;
            target_x?: number;
            target_y?: number;
            target_z?: number;
        }[];
        action?: {
            action_id?: number;
            action_target?: string;
        };
    } & {
        player_owner_id?: number;
        hero_id?: number;
        difficulty?: number;
        power_current?: number;
        power_max?: number;
        move_target_x?: number;
        move_target_y?: number;
        move_target_z?: number;
        active_mode_id?: number;
        execution_time?: number;
        modes?: {
            mode_id?: number;
            desire?: number;
            target_entity?: number;
            target_x?: number;
            target_y?: number;
            target_z?: number;
        }[] & ({
            mode_id?: number;
            desire?: number;
            target_entity?: number;
            target_x?: number;
            target_y?: number;
            target_z?: number;
        } & {
            mode_id?: number;
            desire?: number;
            target_entity?: number;
            target_x?: number;
            target_y?: number;
            target_z?: number;
        } & { [K in Exclude<keyof I["modes"][number], keyof CMsgDOTABotDebugInfo_Bot_Mode>]: never; })[] & { [K_1 in Exclude<keyof I["modes"], keyof {
            mode_id?: number;
            desire?: number;
            target_entity?: number;
            target_x?: number;
            target_y?: number;
            target_z?: number;
        }[]>]: never; };
        action?: {
            action_id?: number;
            action_target?: string;
        } & {
            action_id?: number;
            action_target?: string;
        } & { [K_2 in Exclude<keyof I["action"], keyof CMsgDOTABotDebugInfo_Bot_Action>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof CMsgDOTABotDebugInfo_Bot>]: never; }>(base?: I): CMsgDOTABotDebugInfo_Bot;
    fromPartial<I_1 extends {
        player_owner_id?: number;
        hero_id?: number;
        difficulty?: number;
        power_current?: number;
        power_max?: number;
        move_target_x?: number;
        move_target_y?: number;
        move_target_z?: number;
        active_mode_id?: number;
        execution_time?: number;
        modes?: {
            mode_id?: number;
            desire?: number;
            target_entity?: number;
            target_x?: number;
            target_y?: number;
            target_z?: number;
        }[];
        action?: {
            action_id?: number;
            action_target?: string;
        };
    } & {
        player_owner_id?: number;
        hero_id?: number;
        difficulty?: number;
        power_current?: number;
        power_max?: number;
        move_target_x?: number;
        move_target_y?: number;
        move_target_z?: number;
        active_mode_id?: number;
        execution_time?: number;
        modes?: {
            mode_id?: number;
            desire?: number;
            target_entity?: number;
            target_x?: number;
            target_y?: number;
            target_z?: number;
        }[] & ({
            mode_id?: number;
            desire?: number;
            target_entity?: number;
            target_x?: number;
            target_y?: number;
            target_z?: number;
        } & {
            mode_id?: number;
            desire?: number;
            target_entity?: number;
            target_x?: number;
            target_y?: number;
            target_z?: number;
        } & { [K_4 in Exclude<keyof I_1["modes"][number], keyof CMsgDOTABotDebugInfo_Bot_Mode>]: never; })[] & { [K_5 in Exclude<keyof I_1["modes"], keyof {
            mode_id?: number;
            desire?: number;
            target_entity?: number;
            target_x?: number;
            target_y?: number;
            target_z?: number;
        }[]>]: never; };
        action?: {
            action_id?: number;
            action_target?: string;
        } & {
            action_id?: number;
            action_target?: string;
        } & { [K_6 in Exclude<keyof I_1["action"], keyof CMsgDOTABotDebugInfo_Bot_Action>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof CMsgDOTABotDebugInfo_Bot>]: never; }>(object: I_1): CMsgDOTABotDebugInfo_Bot;
};
export declare const CMsgDOTABotDebugInfo_Bot_Mode: {
    fromJSON(object: any): CMsgDOTABotDebugInfo_Bot_Mode;
    toJSON(message: CMsgDOTABotDebugInfo_Bot_Mode): unknown;
    create<I extends {
        mode_id?: number;
        desire?: number;
        target_entity?: number;
        target_x?: number;
        target_y?: number;
        target_z?: number;
    } & {
        mode_id?: number;
        desire?: number;
        target_entity?: number;
        target_x?: number;
        target_y?: number;
        target_z?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTABotDebugInfo_Bot_Mode>]: never; }>(base?: I): CMsgDOTABotDebugInfo_Bot_Mode;
    fromPartial<I_1 extends {
        mode_id?: number;
        desire?: number;
        target_entity?: number;
        target_x?: number;
        target_y?: number;
        target_z?: number;
    } & {
        mode_id?: number;
        desire?: number;
        target_entity?: number;
        target_x?: number;
        target_y?: number;
        target_z?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTABotDebugInfo_Bot_Mode>]: never; }>(object: I_1): CMsgDOTABotDebugInfo_Bot_Mode;
};
export declare const CMsgDOTABotDebugInfo_Bot_Action: {
    fromJSON(object: any): CMsgDOTABotDebugInfo_Bot_Action;
    toJSON(message: CMsgDOTABotDebugInfo_Bot_Action): unknown;
    create<I extends {
        action_id?: number;
        action_target?: string;
    } & {
        action_id?: number;
        action_target?: string;
    } & { [K in Exclude<keyof I, keyof CMsgDOTABotDebugInfo_Bot_Action>]: never; }>(base?: I): CMsgDOTABotDebugInfo_Bot_Action;
    fromPartial<I_1 extends {
        action_id?: number;
        action_target?: string;
    } & {
        action_id?: number;
        action_target?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTABotDebugInfo_Bot_Action>]: never; }>(object: I_1): CMsgDOTABotDebugInfo_Bot_Action;
};
export declare const CMsgSuccessfulHero: {
    fromJSON(object: any): CMsgSuccessfulHero;
    toJSON(message: CMsgSuccessfulHero): unknown;
    create<I extends {
        hero_id?: number;
        win_percent?: number;
        longest_streak?: number;
    } & {
        hero_id?: number;
        win_percent?: number;
        longest_streak?: number;
    } & { [K in Exclude<keyof I, keyof CMsgSuccessfulHero>]: never; }>(base?: I): CMsgSuccessfulHero;
    fromPartial<I_1 extends {
        hero_id?: number;
        win_percent?: number;
        longest_streak?: number;
    } & {
        hero_id?: number;
        win_percent?: number;
        longest_streak?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgSuccessfulHero>]: never; }>(object: I_1): CMsgSuccessfulHero;
};
export declare const CMsgRecentMatchInfo: {
    fromJSON(object: any): CMsgRecentMatchInfo;
    toJSON(message: CMsgRecentMatchInfo): unknown;
    create<I extends {
        match_id?: string;
        game_mode?: DOTA_GameMode;
        kills?: number;
        deaths?: number;
        assists?: number;
        duration?: number;
        player_slot?: number;
        match_outcome?: EMatchOutcome;
        timestamp?: number;
        lobby_type?: number;
        team_number?: number;
    } & {
        match_id?: string;
        game_mode?: DOTA_GameMode;
        kills?: number;
        deaths?: number;
        assists?: number;
        duration?: number;
        player_slot?: number;
        match_outcome?: EMatchOutcome;
        timestamp?: number;
        lobby_type?: number;
        team_number?: number;
    } & { [K in Exclude<keyof I, keyof CMsgRecentMatchInfo>]: never; }>(base?: I): CMsgRecentMatchInfo;
    fromPartial<I_1 extends {
        match_id?: string;
        game_mode?: DOTA_GameMode;
        kills?: number;
        deaths?: number;
        assists?: number;
        duration?: number;
        player_slot?: number;
        match_outcome?: EMatchOutcome;
        timestamp?: number;
        lobby_type?: number;
        team_number?: number;
    } & {
        match_id?: string;
        game_mode?: DOTA_GameMode;
        kills?: number;
        deaths?: number;
        assists?: number;
        duration?: number;
        player_slot?: number;
        match_outcome?: EMatchOutcome;
        timestamp?: number;
        lobby_type?: number;
        team_number?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgRecentMatchInfo>]: never; }>(object: I_1): CMsgRecentMatchInfo;
};
export declare const CMsgMatchTips: {
    fromJSON(object: any): CMsgMatchTips;
    toJSON(message: CMsgMatchTips): unknown;
    create<I extends {
        tips?: {
            source_account_id?: number;
            target_account_id?: number;
            tip_amount?: number;
            event_id?: EEvent;
        }[];
    } & {
        tips?: {
            source_account_id?: number;
            target_account_id?: number;
            tip_amount?: number;
            event_id?: EEvent;
        }[] & ({
            source_account_id?: number;
            target_account_id?: number;
            tip_amount?: number;
            event_id?: EEvent;
        } & {
            source_account_id?: number;
            target_account_id?: number;
            tip_amount?: number;
            event_id?: EEvent;
        } & { [K in Exclude<keyof I["tips"][number], keyof CMsgMatchTips_SingleTip>]: never; })[] & { [K_1 in Exclude<keyof I["tips"], keyof {
            source_account_id?: number;
            target_account_id?: number;
            tip_amount?: number;
            event_id?: EEvent;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "tips">]: never; }>(base?: I): CMsgMatchTips;
    fromPartial<I_1 extends {
        tips?: {
            source_account_id?: number;
            target_account_id?: number;
            tip_amount?: number;
            event_id?: EEvent;
        }[];
    } & {
        tips?: {
            source_account_id?: number;
            target_account_id?: number;
            tip_amount?: number;
            event_id?: EEvent;
        }[] & ({
            source_account_id?: number;
            target_account_id?: number;
            tip_amount?: number;
            event_id?: EEvent;
        } & {
            source_account_id?: number;
            target_account_id?: number;
            tip_amount?: number;
            event_id?: EEvent;
        } & { [K_3 in Exclude<keyof I_1["tips"][number], keyof CMsgMatchTips_SingleTip>]: never; })[] & { [K_4 in Exclude<keyof I_1["tips"], keyof {
            source_account_id?: number;
            target_account_id?: number;
            tip_amount?: number;
            event_id?: EEvent;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "tips">]: never; }>(object: I_1): CMsgMatchTips;
};
export declare const CMsgMatchTips_SingleTip: {
    fromJSON(object: any): CMsgMatchTips_SingleTip;
    toJSON(message: CMsgMatchTips_SingleTip): unknown;
    create<I extends {
        source_account_id?: number;
        target_account_id?: number;
        tip_amount?: number;
        event_id?: EEvent;
    } & {
        source_account_id?: number;
        target_account_id?: number;
        tip_amount?: number;
        event_id?: EEvent;
    } & { [K in Exclude<keyof I, keyof CMsgMatchTips_SingleTip>]: never; }>(base?: I): CMsgMatchTips_SingleTip;
    fromPartial<I_1 extends {
        source_account_id?: number;
        target_account_id?: number;
        tip_amount?: number;
        event_id?: EEvent;
    } & {
        source_account_id?: number;
        target_account_id?: number;
        tip_amount?: number;
        event_id?: EEvent;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgMatchTips_SingleTip>]: never; }>(object: I_1): CMsgMatchTips_SingleTip;
};
export declare const CMsgDOTAMatchMinimal: {
    fromJSON(object: any): CMsgDOTAMatchMinimal;
    toJSON(message: CMsgDOTAMatchMinimal): unknown;
    create<I extends {
        match_id?: string;
        start_time?: number;
        duration?: number;
        game_mode?: DOTA_GameMode;
        players?: {
            account_id?: number;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            items?: number[];
            player_slot?: number;
            pro_name?: string;
            level?: number;
            team_number?: DOTA_GC_TEAM;
        }[];
        tourney?: {
            league_id?: number;
            series_type?: number;
            series_game?: number;
            weekend_tourney_tournament_id?: number;
            weekend_tourney_season_trophy_id?: number;
            weekend_tourney_division?: number;
            weekend_tourney_skill_level?: number;
            radiant_team_id?: number;
            radiant_team_name?: string;
            radiant_team_logo?: string;
            radiant_team_logo_url?: string;
            dire_team_id?: number;
            dire_team_name?: string;
            dire_team_logo?: string;
            dire_team_logo_url?: string;
        };
        match_outcome?: EMatchOutcome;
        radiant_score?: number;
        dire_score?: number;
        lobby_type?: number;
    } & {
        match_id?: string;
        start_time?: number;
        duration?: number;
        game_mode?: DOTA_GameMode;
        players?: {
            account_id?: number;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            items?: number[];
            player_slot?: number;
            pro_name?: string;
            level?: number;
            team_number?: DOTA_GC_TEAM;
        }[] & ({
            account_id?: number;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            items?: number[];
            player_slot?: number;
            pro_name?: string;
            level?: number;
            team_number?: DOTA_GC_TEAM;
        } & {
            account_id?: number;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            items?: number[] & number[] & { [K in Exclude<keyof I["players"][number]["items"], keyof number[]>]: never; };
            player_slot?: number;
            pro_name?: string;
            level?: number;
            team_number?: DOTA_GC_TEAM;
        } & { [K_1 in Exclude<keyof I["players"][number], keyof CMsgDOTAMatchMinimal_Player>]: never; })[] & { [K_2 in Exclude<keyof I["players"], keyof {
            account_id?: number;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            items?: number[];
            player_slot?: number;
            pro_name?: string;
            level?: number;
            team_number?: DOTA_GC_TEAM;
        }[]>]: never; };
        tourney?: {
            league_id?: number;
            series_type?: number;
            series_game?: number;
            weekend_tourney_tournament_id?: number;
            weekend_tourney_season_trophy_id?: number;
            weekend_tourney_division?: number;
            weekend_tourney_skill_level?: number;
            radiant_team_id?: number;
            radiant_team_name?: string;
            radiant_team_logo?: string;
            radiant_team_logo_url?: string;
            dire_team_id?: number;
            dire_team_name?: string;
            dire_team_logo?: string;
            dire_team_logo_url?: string;
        } & {
            league_id?: number;
            series_type?: number;
            series_game?: number;
            weekend_tourney_tournament_id?: number;
            weekend_tourney_season_trophy_id?: number;
            weekend_tourney_division?: number;
            weekend_tourney_skill_level?: number;
            radiant_team_id?: number;
            radiant_team_name?: string;
            radiant_team_logo?: string;
            radiant_team_logo_url?: string;
            dire_team_id?: number;
            dire_team_name?: string;
            dire_team_logo?: string;
            dire_team_logo_url?: string;
        } & { [K_3 in Exclude<keyof I["tourney"], keyof CMsgDOTAMatchMinimal_Tourney>]: never; };
        match_outcome?: EMatchOutcome;
        radiant_score?: number;
        dire_score?: number;
        lobby_type?: number;
    } & { [K_4 in Exclude<keyof I, keyof CMsgDOTAMatchMinimal>]: never; }>(base?: I): CMsgDOTAMatchMinimal;
    fromPartial<I_1 extends {
        match_id?: string;
        start_time?: number;
        duration?: number;
        game_mode?: DOTA_GameMode;
        players?: {
            account_id?: number;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            items?: number[];
            player_slot?: number;
            pro_name?: string;
            level?: number;
            team_number?: DOTA_GC_TEAM;
        }[];
        tourney?: {
            league_id?: number;
            series_type?: number;
            series_game?: number;
            weekend_tourney_tournament_id?: number;
            weekend_tourney_season_trophy_id?: number;
            weekend_tourney_division?: number;
            weekend_tourney_skill_level?: number;
            radiant_team_id?: number;
            radiant_team_name?: string;
            radiant_team_logo?: string;
            radiant_team_logo_url?: string;
            dire_team_id?: number;
            dire_team_name?: string;
            dire_team_logo?: string;
            dire_team_logo_url?: string;
        };
        match_outcome?: EMatchOutcome;
        radiant_score?: number;
        dire_score?: number;
        lobby_type?: number;
    } & {
        match_id?: string;
        start_time?: number;
        duration?: number;
        game_mode?: DOTA_GameMode;
        players?: {
            account_id?: number;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            items?: number[];
            player_slot?: number;
            pro_name?: string;
            level?: number;
            team_number?: DOTA_GC_TEAM;
        }[] & ({
            account_id?: number;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            items?: number[];
            player_slot?: number;
            pro_name?: string;
            level?: number;
            team_number?: DOTA_GC_TEAM;
        } & {
            account_id?: number;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            items?: number[] & number[] & { [K_5 in Exclude<keyof I_1["players"][number]["items"], keyof number[]>]: never; };
            player_slot?: number;
            pro_name?: string;
            level?: number;
            team_number?: DOTA_GC_TEAM;
        } & { [K_6 in Exclude<keyof I_1["players"][number], keyof CMsgDOTAMatchMinimal_Player>]: never; })[] & { [K_7 in Exclude<keyof I_1["players"], keyof {
            account_id?: number;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            items?: number[];
            player_slot?: number;
            pro_name?: string;
            level?: number;
            team_number?: DOTA_GC_TEAM;
        }[]>]: never; };
        tourney?: {
            league_id?: number;
            series_type?: number;
            series_game?: number;
            weekend_tourney_tournament_id?: number;
            weekend_tourney_season_trophy_id?: number;
            weekend_tourney_division?: number;
            weekend_tourney_skill_level?: number;
            radiant_team_id?: number;
            radiant_team_name?: string;
            radiant_team_logo?: string;
            radiant_team_logo_url?: string;
            dire_team_id?: number;
            dire_team_name?: string;
            dire_team_logo?: string;
            dire_team_logo_url?: string;
        } & {
            league_id?: number;
            series_type?: number;
            series_game?: number;
            weekend_tourney_tournament_id?: number;
            weekend_tourney_season_trophy_id?: number;
            weekend_tourney_division?: number;
            weekend_tourney_skill_level?: number;
            radiant_team_id?: number;
            radiant_team_name?: string;
            radiant_team_logo?: string;
            radiant_team_logo_url?: string;
            dire_team_id?: number;
            dire_team_name?: string;
            dire_team_logo?: string;
            dire_team_logo_url?: string;
        } & { [K_8 in Exclude<keyof I_1["tourney"], keyof CMsgDOTAMatchMinimal_Tourney>]: never; };
        match_outcome?: EMatchOutcome;
        radiant_score?: number;
        dire_score?: number;
        lobby_type?: number;
    } & { [K_9 in Exclude<keyof I_1, keyof CMsgDOTAMatchMinimal>]: never; }>(object: I_1): CMsgDOTAMatchMinimal;
};
export declare const CMsgDOTAMatchMinimal_Player: {
    fromJSON(object: any): CMsgDOTAMatchMinimal_Player;
    toJSON(message: CMsgDOTAMatchMinimal_Player): unknown;
    create<I extends {
        account_id?: number;
        hero_id?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
        items?: number[];
        player_slot?: number;
        pro_name?: string;
        level?: number;
        team_number?: DOTA_GC_TEAM;
    } & {
        account_id?: number;
        hero_id?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
        items?: number[] & number[] & { [K in Exclude<keyof I["items"], keyof number[]>]: never; };
        player_slot?: number;
        pro_name?: string;
        level?: number;
        team_number?: DOTA_GC_TEAM;
    } & { [K_1 in Exclude<keyof I, keyof CMsgDOTAMatchMinimal_Player>]: never; }>(base?: I): CMsgDOTAMatchMinimal_Player;
    fromPartial<I_1 extends {
        account_id?: number;
        hero_id?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
        items?: number[];
        player_slot?: number;
        pro_name?: string;
        level?: number;
        team_number?: DOTA_GC_TEAM;
    } & {
        account_id?: number;
        hero_id?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
        items?: number[] & number[] & { [K_2 in Exclude<keyof I_1["items"], keyof number[]>]: never; };
        player_slot?: number;
        pro_name?: string;
        level?: number;
        team_number?: DOTA_GC_TEAM;
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgDOTAMatchMinimal_Player>]: never; }>(object: I_1): CMsgDOTAMatchMinimal_Player;
};
export declare const CMsgDOTAMatchMinimal_Tourney: {
    fromJSON(object: any): CMsgDOTAMatchMinimal_Tourney;
    toJSON(message: CMsgDOTAMatchMinimal_Tourney): unknown;
    create<I extends {
        league_id?: number;
        series_type?: number;
        series_game?: number;
        weekend_tourney_tournament_id?: number;
        weekend_tourney_season_trophy_id?: number;
        weekend_tourney_division?: number;
        weekend_tourney_skill_level?: number;
        radiant_team_id?: number;
        radiant_team_name?: string;
        radiant_team_logo?: string;
        radiant_team_logo_url?: string;
        dire_team_id?: number;
        dire_team_name?: string;
        dire_team_logo?: string;
        dire_team_logo_url?: string;
    } & {
        league_id?: number;
        series_type?: number;
        series_game?: number;
        weekend_tourney_tournament_id?: number;
        weekend_tourney_season_trophy_id?: number;
        weekend_tourney_division?: number;
        weekend_tourney_skill_level?: number;
        radiant_team_id?: number;
        radiant_team_name?: string;
        radiant_team_logo?: string;
        radiant_team_logo_url?: string;
        dire_team_id?: number;
        dire_team_name?: string;
        dire_team_logo?: string;
        dire_team_logo_url?: string;
    } & { [K in Exclude<keyof I, keyof CMsgDOTAMatchMinimal_Tourney>]: never; }>(base?: I): CMsgDOTAMatchMinimal_Tourney;
    fromPartial<I_1 extends {
        league_id?: number;
        series_type?: number;
        series_game?: number;
        weekend_tourney_tournament_id?: number;
        weekend_tourney_season_trophy_id?: number;
        weekend_tourney_division?: number;
        weekend_tourney_skill_level?: number;
        radiant_team_id?: number;
        radiant_team_name?: string;
        radiant_team_logo?: string;
        radiant_team_logo_url?: string;
        dire_team_id?: number;
        dire_team_name?: string;
        dire_team_logo?: string;
        dire_team_logo_url?: string;
    } & {
        league_id?: number;
        series_type?: number;
        series_game?: number;
        weekend_tourney_tournament_id?: number;
        weekend_tourney_season_trophy_id?: number;
        weekend_tourney_division?: number;
        weekend_tourney_skill_level?: number;
        radiant_team_id?: number;
        radiant_team_name?: string;
        radiant_team_logo?: string;
        radiant_team_logo_url?: string;
        dire_team_id?: number;
        dire_team_name?: string;
        dire_team_logo?: string;
        dire_team_logo_url?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTAMatchMinimal_Tourney>]: never; }>(object: I_1): CMsgDOTAMatchMinimal_Tourney;
};
export declare const CMsgConsumableUsage: {
    fromJSON(object: any): CMsgConsumableUsage;
    toJSON(message: CMsgConsumableUsage): unknown;
    create<I extends {
        item_def?: number;
        quantity_change?: number;
    } & {
        item_def?: number;
        quantity_change?: number;
    } & { [K in Exclude<keyof I, keyof CMsgConsumableUsage>]: never; }>(base?: I): CMsgConsumableUsage;
    fromPartial<I_1 extends {
        item_def?: number;
        quantity_change?: number;
    } & {
        item_def?: number;
        quantity_change?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgConsumableUsage>]: never; }>(object: I_1): CMsgConsumableUsage;
};
export declare const CMsgMatchConsumableUsage: {
    fromJSON(object: any): CMsgMatchConsumableUsage;
    toJSON(message: CMsgMatchConsumableUsage): unknown;
    create<I extends {
        player_consumables_used?: {
            account_id?: number;
            consumables_used?: {
                item_def?: number;
                quantity_change?: number;
            }[];
        }[];
    } & {
        player_consumables_used?: {
            account_id?: number;
            consumables_used?: {
                item_def?: number;
                quantity_change?: number;
            }[];
        }[] & ({
            account_id?: number;
            consumables_used?: {
                item_def?: number;
                quantity_change?: number;
            }[];
        } & {
            account_id?: number;
            consumables_used?: {
                item_def?: number;
                quantity_change?: number;
            }[] & ({
                item_def?: number;
                quantity_change?: number;
            } & {
                item_def?: number;
                quantity_change?: number;
            } & { [K in Exclude<keyof I["player_consumables_used"][number]["consumables_used"][number], keyof CMsgConsumableUsage>]: never; })[] & { [K_1 in Exclude<keyof I["player_consumables_used"][number]["consumables_used"], keyof {
                item_def?: number;
                quantity_change?: number;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["player_consumables_used"][number], keyof CMsgMatchConsumableUsage_PlayerUsage>]: never; })[] & { [K_3 in Exclude<keyof I["player_consumables_used"], keyof {
            account_id?: number;
            consumables_used?: {
                item_def?: number;
                quantity_change?: number;
            }[];
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, "player_consumables_used">]: never; }>(base?: I): CMsgMatchConsumableUsage;
    fromPartial<I_1 extends {
        player_consumables_used?: {
            account_id?: number;
            consumables_used?: {
                item_def?: number;
                quantity_change?: number;
            }[];
        }[];
    } & {
        player_consumables_used?: {
            account_id?: number;
            consumables_used?: {
                item_def?: number;
                quantity_change?: number;
            }[];
        }[] & ({
            account_id?: number;
            consumables_used?: {
                item_def?: number;
                quantity_change?: number;
            }[];
        } & {
            account_id?: number;
            consumables_used?: {
                item_def?: number;
                quantity_change?: number;
            }[] & ({
                item_def?: number;
                quantity_change?: number;
            } & {
                item_def?: number;
                quantity_change?: number;
            } & { [K_5 in Exclude<keyof I_1["player_consumables_used"][number]["consumables_used"][number], keyof CMsgConsumableUsage>]: never; })[] & { [K_6 in Exclude<keyof I_1["player_consumables_used"][number]["consumables_used"], keyof {
                item_def?: number;
                quantity_change?: number;
            }[]>]: never; };
        } & { [K_7 in Exclude<keyof I_1["player_consumables_used"][number], keyof CMsgMatchConsumableUsage_PlayerUsage>]: never; })[] & { [K_8 in Exclude<keyof I_1["player_consumables_used"], keyof {
            account_id?: number;
            consumables_used?: {
                item_def?: number;
                quantity_change?: number;
            }[];
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "player_consumables_used">]: never; }>(object: I_1): CMsgMatchConsumableUsage;
};
export declare const CMsgMatchConsumableUsage_PlayerUsage: {
    fromJSON(object: any): CMsgMatchConsumableUsage_PlayerUsage;
    toJSON(message: CMsgMatchConsumableUsage_PlayerUsage): unknown;
    create<I extends {
        account_id?: number;
        consumables_used?: {
            item_def?: number;
            quantity_change?: number;
        }[];
    } & {
        account_id?: number;
        consumables_used?: {
            item_def?: number;
            quantity_change?: number;
        }[] & ({
            item_def?: number;
            quantity_change?: number;
        } & {
            item_def?: number;
            quantity_change?: number;
        } & { [K in Exclude<keyof I["consumables_used"][number], keyof CMsgConsumableUsage>]: never; })[] & { [K_1 in Exclude<keyof I["consumables_used"], keyof {
            item_def?: number;
            quantity_change?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgMatchConsumableUsage_PlayerUsage>]: never; }>(base?: I): CMsgMatchConsumableUsage_PlayerUsage;
    fromPartial<I_1 extends {
        account_id?: number;
        consumables_used?: {
            item_def?: number;
            quantity_change?: number;
        }[];
    } & {
        account_id?: number;
        consumables_used?: {
            item_def?: number;
            quantity_change?: number;
        }[] & ({
            item_def?: number;
            quantity_change?: number;
        } & {
            item_def?: number;
            quantity_change?: number;
        } & { [K_3 in Exclude<keyof I_1["consumables_used"][number], keyof CMsgConsumableUsage>]: never; })[] & { [K_4 in Exclude<keyof I_1["consumables_used"], keyof {
            item_def?: number;
            quantity_change?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgMatchConsumableUsage_PlayerUsage>]: never; }>(object: I_1): CMsgMatchConsumableUsage_PlayerUsage;
};
export declare const CMsgMatchEventActionGrants: {
    fromJSON(object: any): CMsgMatchEventActionGrants;
    toJSON(message: CMsgMatchEventActionGrants): unknown;
    create<I extends {
        player_grants?: {
            account_id?: number;
            actions_granted?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
        }[];
    } & {
        player_grants?: {
            account_id?: number;
            actions_granted?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
        }[] & ({
            account_id?: number;
            actions_granted?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
        } & {
            account_id?: number;
            actions_granted?: {
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
            } & { [K in Exclude<keyof I["player_grants"][number]["actions_granted"][number], keyof CMsgPendingEventAward>]: never; })[] & { [K_1 in Exclude<keyof I["player_grants"][number]["actions_granted"], keyof {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["player_grants"][number], keyof CMsgMatchEventActionGrants_PlayerGrants>]: never; })[] & { [K_3 in Exclude<keyof I["player_grants"], keyof {
            account_id?: number;
            actions_granted?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, "player_grants">]: never; }>(base?: I): CMsgMatchEventActionGrants;
    fromPartial<I_1 extends {
        player_grants?: {
            account_id?: number;
            actions_granted?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
        }[];
    } & {
        player_grants?: {
            account_id?: number;
            actions_granted?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
        }[] & ({
            account_id?: number;
            actions_granted?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
        } & {
            account_id?: number;
            actions_granted?: {
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
            } & { [K_5 in Exclude<keyof I_1["player_grants"][number]["actions_granted"][number], keyof CMsgPendingEventAward>]: never; })[] & { [K_6 in Exclude<keyof I_1["player_grants"][number]["actions_granted"], keyof {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[]>]: never; };
        } & { [K_7 in Exclude<keyof I_1["player_grants"][number], keyof CMsgMatchEventActionGrants_PlayerGrants>]: never; })[] & { [K_8 in Exclude<keyof I_1["player_grants"], keyof {
            account_id?: number;
            actions_granted?: {
                event_id?: EEvent;
                action_id?: number;
                num_to_grant?: number;
                score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
                audit_action?: number;
                audit_data?: string;
            }[];
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "player_grants">]: never; }>(object: I_1): CMsgMatchEventActionGrants;
};
export declare const CMsgMatchEventActionGrants_PlayerGrants: {
    fromJSON(object: any): CMsgMatchEventActionGrants_PlayerGrants;
    toJSON(message: CMsgMatchEventActionGrants_PlayerGrants): unknown;
    create<I extends {
        account_id?: number;
        actions_granted?: {
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        }[];
    } & {
        account_id?: number;
        actions_granted?: {
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
        } & { [K in Exclude<keyof I["actions_granted"][number], keyof CMsgPendingEventAward>]: never; })[] & { [K_1 in Exclude<keyof I["actions_granted"], keyof {
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgMatchEventActionGrants_PlayerGrants>]: never; }>(base?: I): CMsgMatchEventActionGrants_PlayerGrants;
    fromPartial<I_1 extends {
        account_id?: number;
        actions_granted?: {
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        }[];
    } & {
        account_id?: number;
        actions_granted?: {
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
        } & { [K_3 in Exclude<keyof I_1["actions_granted"][number], keyof CMsgPendingEventAward>]: never; })[] & { [K_4 in Exclude<keyof I_1["actions_granted"], keyof {
            event_id?: EEvent;
            action_id?: number;
            num_to_grant?: number;
            score_mode?: import("./dota_shared_enums").EEventActionScoreMode;
            audit_action?: number;
            audit_data?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgMatchEventActionGrants_PlayerGrants>]: never; }>(object: I_1): CMsgMatchEventActionGrants_PlayerGrants;
};
export declare const CMsgCustomGameWhitelist: {
    fromJSON(object: any): CMsgCustomGameWhitelist;
    toJSON(message: CMsgCustomGameWhitelist): unknown;
    create<I extends {
        version?: number;
        custom_games_whitelist?: string[];
        disable_whitelist?: boolean;
    } & {
        version?: number;
        custom_games_whitelist?: string[] & string[] & { [K in Exclude<keyof I["custom_games_whitelist"], keyof string[]>]: never; };
        disable_whitelist?: boolean;
    } & { [K_1 in Exclude<keyof I, keyof CMsgCustomGameWhitelist>]: never; }>(base?: I): CMsgCustomGameWhitelist;
    fromPartial<I_1 extends {
        version?: number;
        custom_games_whitelist?: string[];
        disable_whitelist?: boolean;
    } & {
        version?: number;
        custom_games_whitelist?: string[] & string[] & { [K_2 in Exclude<keyof I_1["custom_games_whitelist"], keyof string[]>]: never; };
        disable_whitelist?: boolean;
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgCustomGameWhitelist>]: never; }>(object: I_1): CMsgCustomGameWhitelist;
};
export declare const CMsgCustomGameWhitelistForEdit: {
    fromJSON(object: any): CMsgCustomGameWhitelistForEdit;
    toJSON(message: CMsgCustomGameWhitelistForEdit): unknown;
    create<I extends {
        whitelist_entries?: {
            custom_game_id?: string;
            whitelist_state?: ECustomGameWhitelistState;
        }[];
    } & {
        whitelist_entries?: {
            custom_game_id?: string;
            whitelist_state?: ECustomGameWhitelistState;
        }[] & ({
            custom_game_id?: string;
            whitelist_state?: ECustomGameWhitelistState;
        } & {
            custom_game_id?: string;
            whitelist_state?: ECustomGameWhitelistState;
        } & { [K in Exclude<keyof I["whitelist_entries"][number], keyof CMsgCustomGameWhitelistForEdit_WhitelistEntry>]: never; })[] & { [K_1 in Exclude<keyof I["whitelist_entries"], keyof {
            custom_game_id?: string;
            whitelist_state?: ECustomGameWhitelistState;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "whitelist_entries">]: never; }>(base?: I): CMsgCustomGameWhitelistForEdit;
    fromPartial<I_1 extends {
        whitelist_entries?: {
            custom_game_id?: string;
            whitelist_state?: ECustomGameWhitelistState;
        }[];
    } & {
        whitelist_entries?: {
            custom_game_id?: string;
            whitelist_state?: ECustomGameWhitelistState;
        }[] & ({
            custom_game_id?: string;
            whitelist_state?: ECustomGameWhitelistState;
        } & {
            custom_game_id?: string;
            whitelist_state?: ECustomGameWhitelistState;
        } & { [K_3 in Exclude<keyof I_1["whitelist_entries"][number], keyof CMsgCustomGameWhitelistForEdit_WhitelistEntry>]: never; })[] & { [K_4 in Exclude<keyof I_1["whitelist_entries"], keyof {
            custom_game_id?: string;
            whitelist_state?: ECustomGameWhitelistState;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "whitelist_entries">]: never; }>(object: I_1): CMsgCustomGameWhitelistForEdit;
};
export declare const CMsgCustomGameWhitelistForEdit_WhitelistEntry: {
    fromJSON(object: any): CMsgCustomGameWhitelistForEdit_WhitelistEntry;
    toJSON(message: CMsgCustomGameWhitelistForEdit_WhitelistEntry): unknown;
    create<I extends {
        custom_game_id?: string;
        whitelist_state?: ECustomGameWhitelistState;
    } & {
        custom_game_id?: string;
        whitelist_state?: ECustomGameWhitelistState;
    } & { [K in Exclude<keyof I, keyof CMsgCustomGameWhitelistForEdit_WhitelistEntry>]: never; }>(base?: I): CMsgCustomGameWhitelistForEdit_WhitelistEntry;
    fromPartial<I_1 extends {
        custom_game_id?: string;
        whitelist_state?: ECustomGameWhitelistState;
    } & {
        custom_game_id?: string;
        whitelist_state?: ECustomGameWhitelistState;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgCustomGameWhitelistForEdit_WhitelistEntry>]: never; }>(object: I_1): CMsgCustomGameWhitelistForEdit_WhitelistEntry;
};
export declare const CMsgPlayerRecentMatchInfo: {
    fromJSON(object: any): CMsgPlayerRecentMatchInfo;
    toJSON(message: CMsgPlayerRecentMatchInfo): unknown;
    create<I extends {
        match_id?: string;
        timestamp?: number;
        duration?: number;
        win?: boolean;
        hero_id?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
    } & {
        match_id?: string;
        timestamp?: number;
        duration?: number;
        win?: boolean;
        hero_id?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
    } & { [K in Exclude<keyof I, keyof CMsgPlayerRecentMatchInfo>]: never; }>(base?: I): CMsgPlayerRecentMatchInfo;
    fromPartial<I_1 extends {
        match_id?: string;
        timestamp?: number;
        duration?: number;
        win?: boolean;
        hero_id?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
    } & {
        match_id?: string;
        timestamp?: number;
        duration?: number;
        win?: boolean;
        hero_id?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgPlayerRecentMatchInfo>]: never; }>(object: I_1): CMsgPlayerRecentMatchInfo;
};
export declare const CMsgPlayerMatchRecord: {
    fromJSON(object: any): CMsgPlayerMatchRecord;
    toJSON(message: CMsgPlayerMatchRecord): unknown;
    create<I extends {
        wins?: number;
        losses?: number;
    } & {
        wins?: number;
        losses?: number;
    } & { [K in Exclude<keyof I, keyof CMsgPlayerMatchRecord>]: never; }>(base?: I): CMsgPlayerMatchRecord;
    fromPartial<I_1 extends {
        wins?: number;
        losses?: number;
    } & {
        wins?: number;
        losses?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgPlayerMatchRecord>]: never; }>(object: I_1): CMsgPlayerMatchRecord;
};
export declare const CMsgPlayerRecentMatchOutcomes: {
    fromJSON(object: any): CMsgPlayerRecentMatchOutcomes;
    toJSON(message: CMsgPlayerRecentMatchOutcomes): unknown;
    create<I extends {
        outcomes?: number;
        match_count?: number;
    } & {
        outcomes?: number;
        match_count?: number;
    } & { [K in Exclude<keyof I, keyof CMsgPlayerRecentMatchOutcomes>]: never; }>(base?: I): CMsgPlayerRecentMatchOutcomes;
    fromPartial<I_1 extends {
        outcomes?: number;
        match_count?: number;
    } & {
        outcomes?: number;
        match_count?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgPlayerRecentMatchOutcomes>]: never; }>(object: I_1): CMsgPlayerRecentMatchOutcomes;
};
export declare const CMsgPlayerRecentCommends: {
    fromJSON(object: any): CMsgPlayerRecentCommends;
    toJSON(message: CMsgPlayerRecentCommends): unknown;
    create<I extends {
        commends?: number;
        match_count?: number;
    } & {
        commends?: number;
        match_count?: number;
    } & { [K in Exclude<keyof I, keyof CMsgPlayerRecentCommends>]: never; }>(base?: I): CMsgPlayerRecentCommends;
    fromPartial<I_1 extends {
        commends?: number;
        match_count?: number;
    } & {
        commends?: number;
        match_count?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgPlayerRecentCommends>]: never; }>(object: I_1): CMsgPlayerRecentCommends;
};
export declare const CMsgPlayerRecentAccomplishments: {
    fromJSON(object: any): CMsgPlayerRecentAccomplishments;
    toJSON(message: CMsgPlayerRecentAccomplishments): unknown;
    create<I extends {
        recent_outcomes?: {
            outcomes?: number;
            match_count?: number;
        };
        total_record?: {
            wins?: number;
            losses?: number;
        };
        prediction_streak?: number;
        plus_prediction_streak?: number;
        recent_commends?: {
            commends?: number;
            match_count?: number;
        };
        first_match_timestamp?: number;
        last_match?: {
            match_id?: string;
            timestamp?: number;
            duration?: number;
            win?: boolean;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
        };
        recent_mvps?: {
            outcomes?: number;
            match_count?: number;
        };
    } & {
        recent_outcomes?: {
            outcomes?: number;
            match_count?: number;
        } & {
            outcomes?: number;
            match_count?: number;
        } & { [K in Exclude<keyof I["recent_outcomes"], keyof CMsgPlayerRecentMatchOutcomes>]: never; };
        total_record?: {
            wins?: number;
            losses?: number;
        } & {
            wins?: number;
            losses?: number;
        } & { [K_1 in Exclude<keyof I["total_record"], keyof CMsgPlayerMatchRecord>]: never; };
        prediction_streak?: number;
        plus_prediction_streak?: number;
        recent_commends?: {
            commends?: number;
            match_count?: number;
        } & {
            commends?: number;
            match_count?: number;
        } & { [K_2 in Exclude<keyof I["recent_commends"], keyof CMsgPlayerRecentCommends>]: never; };
        first_match_timestamp?: number;
        last_match?: {
            match_id?: string;
            timestamp?: number;
            duration?: number;
            win?: boolean;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
        } & {
            match_id?: string;
            timestamp?: number;
            duration?: number;
            win?: boolean;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
        } & { [K_3 in Exclude<keyof I["last_match"], keyof CMsgPlayerRecentMatchInfo>]: never; };
        recent_mvps?: {
            outcomes?: number;
            match_count?: number;
        } & {
            outcomes?: number;
            match_count?: number;
        } & { [K_4 in Exclude<keyof I["recent_mvps"], keyof CMsgPlayerRecentMatchOutcomes>]: never; };
    } & { [K_5 in Exclude<keyof I, keyof CMsgPlayerRecentAccomplishments>]: never; }>(base?: I): CMsgPlayerRecentAccomplishments;
    fromPartial<I_1 extends {
        recent_outcomes?: {
            outcomes?: number;
            match_count?: number;
        };
        total_record?: {
            wins?: number;
            losses?: number;
        };
        prediction_streak?: number;
        plus_prediction_streak?: number;
        recent_commends?: {
            commends?: number;
            match_count?: number;
        };
        first_match_timestamp?: number;
        last_match?: {
            match_id?: string;
            timestamp?: number;
            duration?: number;
            win?: boolean;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
        };
        recent_mvps?: {
            outcomes?: number;
            match_count?: number;
        };
    } & {
        recent_outcomes?: {
            outcomes?: number;
            match_count?: number;
        } & {
            outcomes?: number;
            match_count?: number;
        } & { [K_6 in Exclude<keyof I_1["recent_outcomes"], keyof CMsgPlayerRecentMatchOutcomes>]: never; };
        total_record?: {
            wins?: number;
            losses?: number;
        } & {
            wins?: number;
            losses?: number;
        } & { [K_7 in Exclude<keyof I_1["total_record"], keyof CMsgPlayerMatchRecord>]: never; };
        prediction_streak?: number;
        plus_prediction_streak?: number;
        recent_commends?: {
            commends?: number;
            match_count?: number;
        } & {
            commends?: number;
            match_count?: number;
        } & { [K_8 in Exclude<keyof I_1["recent_commends"], keyof CMsgPlayerRecentCommends>]: never; };
        first_match_timestamp?: number;
        last_match?: {
            match_id?: string;
            timestamp?: number;
            duration?: number;
            win?: boolean;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
        } & {
            match_id?: string;
            timestamp?: number;
            duration?: number;
            win?: boolean;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
        } & { [K_9 in Exclude<keyof I_1["last_match"], keyof CMsgPlayerRecentMatchInfo>]: never; };
        recent_mvps?: {
            outcomes?: number;
            match_count?: number;
        } & {
            outcomes?: number;
            match_count?: number;
        } & { [K_10 in Exclude<keyof I_1["recent_mvps"], keyof CMsgPlayerRecentMatchOutcomes>]: never; };
    } & { [K_11 in Exclude<keyof I_1, keyof CMsgPlayerRecentAccomplishments>]: never; }>(object: I_1): CMsgPlayerRecentAccomplishments;
};
export declare const CMsgPlayerHeroRecentAccomplishments: {
    fromJSON(object: any): CMsgPlayerHeroRecentAccomplishments;
    toJSON(message: CMsgPlayerHeroRecentAccomplishments): unknown;
    create<I extends {
        recent_outcomes?: {
            outcomes?: number;
            match_count?: number;
        };
        total_record?: {
            wins?: number;
            losses?: number;
        };
        last_match?: {
            match_id?: string;
            timestamp?: number;
            duration?: number;
            win?: boolean;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
        };
    } & {
        recent_outcomes?: {
            outcomes?: number;
            match_count?: number;
        } & {
            outcomes?: number;
            match_count?: number;
        } & { [K in Exclude<keyof I["recent_outcomes"], keyof CMsgPlayerRecentMatchOutcomes>]: never; };
        total_record?: {
            wins?: number;
            losses?: number;
        } & {
            wins?: number;
            losses?: number;
        } & { [K_1 in Exclude<keyof I["total_record"], keyof CMsgPlayerMatchRecord>]: never; };
        last_match?: {
            match_id?: string;
            timestamp?: number;
            duration?: number;
            win?: boolean;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
        } & {
            match_id?: string;
            timestamp?: number;
            duration?: number;
            win?: boolean;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
        } & { [K_2 in Exclude<keyof I["last_match"], keyof CMsgPlayerRecentMatchInfo>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof CMsgPlayerHeroRecentAccomplishments>]: never; }>(base?: I): CMsgPlayerHeroRecentAccomplishments;
    fromPartial<I_1 extends {
        recent_outcomes?: {
            outcomes?: number;
            match_count?: number;
        };
        total_record?: {
            wins?: number;
            losses?: number;
        };
        last_match?: {
            match_id?: string;
            timestamp?: number;
            duration?: number;
            win?: boolean;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
        };
    } & {
        recent_outcomes?: {
            outcomes?: number;
            match_count?: number;
        } & {
            outcomes?: number;
            match_count?: number;
        } & { [K_4 in Exclude<keyof I_1["recent_outcomes"], keyof CMsgPlayerRecentMatchOutcomes>]: never; };
        total_record?: {
            wins?: number;
            losses?: number;
        } & {
            wins?: number;
            losses?: number;
        } & { [K_5 in Exclude<keyof I_1["total_record"], keyof CMsgPlayerMatchRecord>]: never; };
        last_match?: {
            match_id?: string;
            timestamp?: number;
            duration?: number;
            win?: boolean;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
        } & {
            match_id?: string;
            timestamp?: number;
            duration?: number;
            win?: boolean;
            hero_id?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
        } & { [K_6 in Exclude<keyof I_1["last_match"], keyof CMsgPlayerRecentMatchInfo>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof CMsgPlayerHeroRecentAccomplishments>]: never; }>(object: I_1): CMsgPlayerHeroRecentAccomplishments;
};
export declare const CMsgRecentAccomplishments: {
    fromJSON(object: any): CMsgRecentAccomplishments;
    toJSON(message: CMsgRecentAccomplishments): unknown;
    create<I extends {
        player_accomplishments?: {
            recent_outcomes?: {
                outcomes?: number;
                match_count?: number;
            };
            total_record?: {
                wins?: number;
                losses?: number;
            };
            prediction_streak?: number;
            plus_prediction_streak?: number;
            recent_commends?: {
                commends?: number;
                match_count?: number;
            };
            first_match_timestamp?: number;
            last_match?: {
                match_id?: string;
                timestamp?: number;
                duration?: number;
                win?: boolean;
                hero_id?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
            };
            recent_mvps?: {
                outcomes?: number;
                match_count?: number;
            };
        };
        hero_accomplishments?: {
            recent_outcomes?: {
                outcomes?: number;
                match_count?: number;
            };
            total_record?: {
                wins?: number;
                losses?: number;
            };
            last_match?: {
                match_id?: string;
                timestamp?: number;
                duration?: number;
                win?: boolean;
                hero_id?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
            };
        };
    } & {
        player_accomplishments?: {
            recent_outcomes?: {
                outcomes?: number;
                match_count?: number;
            };
            total_record?: {
                wins?: number;
                losses?: number;
            };
            prediction_streak?: number;
            plus_prediction_streak?: number;
            recent_commends?: {
                commends?: number;
                match_count?: number;
            };
            first_match_timestamp?: number;
            last_match?: {
                match_id?: string;
                timestamp?: number;
                duration?: number;
                win?: boolean;
                hero_id?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
            };
            recent_mvps?: {
                outcomes?: number;
                match_count?: number;
            };
        } & {
            recent_outcomes?: {
                outcomes?: number;
                match_count?: number;
            } & {
                outcomes?: number;
                match_count?: number;
            } & { [K in Exclude<keyof I["player_accomplishments"]["recent_outcomes"], keyof CMsgPlayerRecentMatchOutcomes>]: never; };
            total_record?: {
                wins?: number;
                losses?: number;
            } & {
                wins?: number;
                losses?: number;
            } & { [K_1 in Exclude<keyof I["player_accomplishments"]["total_record"], keyof CMsgPlayerMatchRecord>]: never; };
            prediction_streak?: number;
            plus_prediction_streak?: number;
            recent_commends?: {
                commends?: number;
                match_count?: number;
            } & {
                commends?: number;
                match_count?: number;
            } & { [K_2 in Exclude<keyof I["player_accomplishments"]["recent_commends"], keyof CMsgPlayerRecentCommends>]: never; };
            first_match_timestamp?: number;
            last_match?: {
                match_id?: string;
                timestamp?: number;
                duration?: number;
                win?: boolean;
                hero_id?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
            } & {
                match_id?: string;
                timestamp?: number;
                duration?: number;
                win?: boolean;
                hero_id?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
            } & { [K_3 in Exclude<keyof I["player_accomplishments"]["last_match"], keyof CMsgPlayerRecentMatchInfo>]: never; };
            recent_mvps?: {
                outcomes?: number;
                match_count?: number;
            } & {
                outcomes?: number;
                match_count?: number;
            } & { [K_4 in Exclude<keyof I["player_accomplishments"]["recent_mvps"], keyof CMsgPlayerRecentMatchOutcomes>]: never; };
        } & { [K_5 in Exclude<keyof I["player_accomplishments"], keyof CMsgPlayerRecentAccomplishments>]: never; };
        hero_accomplishments?: {
            recent_outcomes?: {
                outcomes?: number;
                match_count?: number;
            };
            total_record?: {
                wins?: number;
                losses?: number;
            };
            last_match?: {
                match_id?: string;
                timestamp?: number;
                duration?: number;
                win?: boolean;
                hero_id?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
            };
        } & {
            recent_outcomes?: {
                outcomes?: number;
                match_count?: number;
            } & {
                outcomes?: number;
                match_count?: number;
            } & { [K_6 in Exclude<keyof I["hero_accomplishments"]["recent_outcomes"], keyof CMsgPlayerRecentMatchOutcomes>]: never; };
            total_record?: {
                wins?: number;
                losses?: number;
            } & {
                wins?: number;
                losses?: number;
            } & { [K_7 in Exclude<keyof I["hero_accomplishments"]["total_record"], keyof CMsgPlayerMatchRecord>]: never; };
            last_match?: {
                match_id?: string;
                timestamp?: number;
                duration?: number;
                win?: boolean;
                hero_id?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
            } & {
                match_id?: string;
                timestamp?: number;
                duration?: number;
                win?: boolean;
                hero_id?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
            } & { [K_8 in Exclude<keyof I["hero_accomplishments"]["last_match"], keyof CMsgPlayerRecentMatchInfo>]: never; };
        } & { [K_9 in Exclude<keyof I["hero_accomplishments"], keyof CMsgPlayerHeroRecentAccomplishments>]: never; };
    } & { [K_10 in Exclude<keyof I, keyof CMsgRecentAccomplishments>]: never; }>(base?: I): CMsgRecentAccomplishments;
    fromPartial<I_1 extends {
        player_accomplishments?: {
            recent_outcomes?: {
                outcomes?: number;
                match_count?: number;
            };
            total_record?: {
                wins?: number;
                losses?: number;
            };
            prediction_streak?: number;
            plus_prediction_streak?: number;
            recent_commends?: {
                commends?: number;
                match_count?: number;
            };
            first_match_timestamp?: number;
            last_match?: {
                match_id?: string;
                timestamp?: number;
                duration?: number;
                win?: boolean;
                hero_id?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
            };
            recent_mvps?: {
                outcomes?: number;
                match_count?: number;
            };
        };
        hero_accomplishments?: {
            recent_outcomes?: {
                outcomes?: number;
                match_count?: number;
            };
            total_record?: {
                wins?: number;
                losses?: number;
            };
            last_match?: {
                match_id?: string;
                timestamp?: number;
                duration?: number;
                win?: boolean;
                hero_id?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
            };
        };
    } & {
        player_accomplishments?: {
            recent_outcomes?: {
                outcomes?: number;
                match_count?: number;
            };
            total_record?: {
                wins?: number;
                losses?: number;
            };
            prediction_streak?: number;
            plus_prediction_streak?: number;
            recent_commends?: {
                commends?: number;
                match_count?: number;
            };
            first_match_timestamp?: number;
            last_match?: {
                match_id?: string;
                timestamp?: number;
                duration?: number;
                win?: boolean;
                hero_id?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
            };
            recent_mvps?: {
                outcomes?: number;
                match_count?: number;
            };
        } & {
            recent_outcomes?: {
                outcomes?: number;
                match_count?: number;
            } & {
                outcomes?: number;
                match_count?: number;
            } & { [K_11 in Exclude<keyof I_1["player_accomplishments"]["recent_outcomes"], keyof CMsgPlayerRecentMatchOutcomes>]: never; };
            total_record?: {
                wins?: number;
                losses?: number;
            } & {
                wins?: number;
                losses?: number;
            } & { [K_12 in Exclude<keyof I_1["player_accomplishments"]["total_record"], keyof CMsgPlayerMatchRecord>]: never; };
            prediction_streak?: number;
            plus_prediction_streak?: number;
            recent_commends?: {
                commends?: number;
                match_count?: number;
            } & {
                commends?: number;
                match_count?: number;
            } & { [K_13 in Exclude<keyof I_1["player_accomplishments"]["recent_commends"], keyof CMsgPlayerRecentCommends>]: never; };
            first_match_timestamp?: number;
            last_match?: {
                match_id?: string;
                timestamp?: number;
                duration?: number;
                win?: boolean;
                hero_id?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
            } & {
                match_id?: string;
                timestamp?: number;
                duration?: number;
                win?: boolean;
                hero_id?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
            } & { [K_14 in Exclude<keyof I_1["player_accomplishments"]["last_match"], keyof CMsgPlayerRecentMatchInfo>]: never; };
            recent_mvps?: {
                outcomes?: number;
                match_count?: number;
            } & {
                outcomes?: number;
                match_count?: number;
            } & { [K_15 in Exclude<keyof I_1["player_accomplishments"]["recent_mvps"], keyof CMsgPlayerRecentMatchOutcomes>]: never; };
        } & { [K_16 in Exclude<keyof I_1["player_accomplishments"], keyof CMsgPlayerRecentAccomplishments>]: never; };
        hero_accomplishments?: {
            recent_outcomes?: {
                outcomes?: number;
                match_count?: number;
            };
            total_record?: {
                wins?: number;
                losses?: number;
            };
            last_match?: {
                match_id?: string;
                timestamp?: number;
                duration?: number;
                win?: boolean;
                hero_id?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
            };
        } & {
            recent_outcomes?: {
                outcomes?: number;
                match_count?: number;
            } & {
                outcomes?: number;
                match_count?: number;
            } & { [K_17 in Exclude<keyof I_1["hero_accomplishments"]["recent_outcomes"], keyof CMsgPlayerRecentMatchOutcomes>]: never; };
            total_record?: {
                wins?: number;
                losses?: number;
            } & {
                wins?: number;
                losses?: number;
            } & { [K_18 in Exclude<keyof I_1["hero_accomplishments"]["total_record"], keyof CMsgPlayerMatchRecord>]: never; };
            last_match?: {
                match_id?: string;
                timestamp?: number;
                duration?: number;
                win?: boolean;
                hero_id?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
            } & {
                match_id?: string;
                timestamp?: number;
                duration?: number;
                win?: boolean;
                hero_id?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
            } & { [K_19 in Exclude<keyof I_1["hero_accomplishments"]["last_match"], keyof CMsgPlayerRecentMatchInfo>]: never; };
        } & { [K_20 in Exclude<keyof I_1["hero_accomplishments"], keyof CMsgPlayerHeroRecentAccomplishments>]: never; };
    } & { [K_21 in Exclude<keyof I_1, keyof CMsgRecentAccomplishments>]: never; }>(object: I_1): CMsgRecentAccomplishments;
};
export declare const CMsgServerToGCRequestPlayerRecentAccomplishments: {
    fromJSON(object: any): CMsgServerToGCRequestPlayerRecentAccomplishments;
    toJSON(message: CMsgServerToGCRequestPlayerRecentAccomplishments): unknown;
    create<I extends {
        account_id?: number;
        hero_id?: number;
    } & {
        account_id?: number;
        hero_id?: number;
    } & { [K in Exclude<keyof I, keyof CMsgServerToGCRequestPlayerRecentAccomplishments>]: never; }>(base?: I): CMsgServerToGCRequestPlayerRecentAccomplishments;
    fromPartial<I_1 extends {
        account_id?: number;
        hero_id?: number;
    } & {
        account_id?: number;
        hero_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgServerToGCRequestPlayerRecentAccomplishments>]: never; }>(object: I_1): CMsgServerToGCRequestPlayerRecentAccomplishments;
};
export declare const CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse: {
    fromJSON(object: any): CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse;
    toJSON(message: CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse): unknown;
    create<I extends {
        result?: CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse;
        player_accomplishments?: {
            player_accomplishments?: {
                recent_outcomes?: {
                    outcomes?: number;
                    match_count?: number;
                };
                total_record?: {
                    wins?: number;
                    losses?: number;
                };
                prediction_streak?: number;
                plus_prediction_streak?: number;
                recent_commends?: {
                    commends?: number;
                    match_count?: number;
                };
                first_match_timestamp?: number;
                last_match?: {
                    match_id?: string;
                    timestamp?: number;
                    duration?: number;
                    win?: boolean;
                    hero_id?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                };
                recent_mvps?: {
                    outcomes?: number;
                    match_count?: number;
                };
            };
            hero_accomplishments?: {
                recent_outcomes?: {
                    outcomes?: number;
                    match_count?: number;
                };
                total_record?: {
                    wins?: number;
                    losses?: number;
                };
                last_match?: {
                    match_id?: string;
                    timestamp?: number;
                    duration?: number;
                    win?: boolean;
                    hero_id?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                };
            };
        };
    } & {
        result?: CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse;
        player_accomplishments?: {
            player_accomplishments?: {
                recent_outcomes?: {
                    outcomes?: number;
                    match_count?: number;
                };
                total_record?: {
                    wins?: number;
                    losses?: number;
                };
                prediction_streak?: number;
                plus_prediction_streak?: number;
                recent_commends?: {
                    commends?: number;
                    match_count?: number;
                };
                first_match_timestamp?: number;
                last_match?: {
                    match_id?: string;
                    timestamp?: number;
                    duration?: number;
                    win?: boolean;
                    hero_id?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                };
                recent_mvps?: {
                    outcomes?: number;
                    match_count?: number;
                };
            };
            hero_accomplishments?: {
                recent_outcomes?: {
                    outcomes?: number;
                    match_count?: number;
                };
                total_record?: {
                    wins?: number;
                    losses?: number;
                };
                last_match?: {
                    match_id?: string;
                    timestamp?: number;
                    duration?: number;
                    win?: boolean;
                    hero_id?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                };
            };
        } & {
            player_accomplishments?: {
                recent_outcomes?: {
                    outcomes?: number;
                    match_count?: number;
                };
                total_record?: {
                    wins?: number;
                    losses?: number;
                };
                prediction_streak?: number;
                plus_prediction_streak?: number;
                recent_commends?: {
                    commends?: number;
                    match_count?: number;
                };
                first_match_timestamp?: number;
                last_match?: {
                    match_id?: string;
                    timestamp?: number;
                    duration?: number;
                    win?: boolean;
                    hero_id?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                };
                recent_mvps?: {
                    outcomes?: number;
                    match_count?: number;
                };
            } & {
                recent_outcomes?: {
                    outcomes?: number;
                    match_count?: number;
                } & {
                    outcomes?: number;
                    match_count?: number;
                } & { [K in Exclude<keyof I["player_accomplishments"]["player_accomplishments"]["recent_outcomes"], keyof CMsgPlayerRecentMatchOutcomes>]: never; };
                total_record?: {
                    wins?: number;
                    losses?: number;
                } & {
                    wins?: number;
                    losses?: number;
                } & { [K_1 in Exclude<keyof I["player_accomplishments"]["player_accomplishments"]["total_record"], keyof CMsgPlayerMatchRecord>]: never; };
                prediction_streak?: number;
                plus_prediction_streak?: number;
                recent_commends?: {
                    commends?: number;
                    match_count?: number;
                } & {
                    commends?: number;
                    match_count?: number;
                } & { [K_2 in Exclude<keyof I["player_accomplishments"]["player_accomplishments"]["recent_commends"], keyof CMsgPlayerRecentCommends>]: never; };
                first_match_timestamp?: number;
                last_match?: {
                    match_id?: string;
                    timestamp?: number;
                    duration?: number;
                    win?: boolean;
                    hero_id?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                } & {
                    match_id?: string;
                    timestamp?: number;
                    duration?: number;
                    win?: boolean;
                    hero_id?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                } & { [K_3 in Exclude<keyof I["player_accomplishments"]["player_accomplishments"]["last_match"], keyof CMsgPlayerRecentMatchInfo>]: never; };
                recent_mvps?: {
                    outcomes?: number;
                    match_count?: number;
                } & {
                    outcomes?: number;
                    match_count?: number;
                } & { [K_4 in Exclude<keyof I["player_accomplishments"]["player_accomplishments"]["recent_mvps"], keyof CMsgPlayerRecentMatchOutcomes>]: never; };
            } & { [K_5 in Exclude<keyof I["player_accomplishments"]["player_accomplishments"], keyof CMsgPlayerRecentAccomplishments>]: never; };
            hero_accomplishments?: {
                recent_outcomes?: {
                    outcomes?: number;
                    match_count?: number;
                };
                total_record?: {
                    wins?: number;
                    losses?: number;
                };
                last_match?: {
                    match_id?: string;
                    timestamp?: number;
                    duration?: number;
                    win?: boolean;
                    hero_id?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                };
            } & {
                recent_outcomes?: {
                    outcomes?: number;
                    match_count?: number;
                } & {
                    outcomes?: number;
                    match_count?: number;
                } & { [K_6 in Exclude<keyof I["player_accomplishments"]["hero_accomplishments"]["recent_outcomes"], keyof CMsgPlayerRecentMatchOutcomes>]: never; };
                total_record?: {
                    wins?: number;
                    losses?: number;
                } & {
                    wins?: number;
                    losses?: number;
                } & { [K_7 in Exclude<keyof I["player_accomplishments"]["hero_accomplishments"]["total_record"], keyof CMsgPlayerMatchRecord>]: never; };
                last_match?: {
                    match_id?: string;
                    timestamp?: number;
                    duration?: number;
                    win?: boolean;
                    hero_id?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                } & {
                    match_id?: string;
                    timestamp?: number;
                    duration?: number;
                    win?: boolean;
                    hero_id?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                } & { [K_8 in Exclude<keyof I["player_accomplishments"]["hero_accomplishments"]["last_match"], keyof CMsgPlayerRecentMatchInfo>]: never; };
            } & { [K_9 in Exclude<keyof I["player_accomplishments"]["hero_accomplishments"], keyof CMsgPlayerHeroRecentAccomplishments>]: never; };
        } & { [K_10 in Exclude<keyof I["player_accomplishments"], keyof CMsgRecentAccomplishments>]: never; };
    } & { [K_11 in Exclude<keyof I, keyof CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse>]: never; }>(base?: I): CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse;
    fromPartial<I_1 extends {
        result?: CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse;
        player_accomplishments?: {
            player_accomplishments?: {
                recent_outcomes?: {
                    outcomes?: number;
                    match_count?: number;
                };
                total_record?: {
                    wins?: number;
                    losses?: number;
                };
                prediction_streak?: number;
                plus_prediction_streak?: number;
                recent_commends?: {
                    commends?: number;
                    match_count?: number;
                };
                first_match_timestamp?: number;
                last_match?: {
                    match_id?: string;
                    timestamp?: number;
                    duration?: number;
                    win?: boolean;
                    hero_id?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                };
                recent_mvps?: {
                    outcomes?: number;
                    match_count?: number;
                };
            };
            hero_accomplishments?: {
                recent_outcomes?: {
                    outcomes?: number;
                    match_count?: number;
                };
                total_record?: {
                    wins?: number;
                    losses?: number;
                };
                last_match?: {
                    match_id?: string;
                    timestamp?: number;
                    duration?: number;
                    win?: boolean;
                    hero_id?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                };
            };
        };
    } & {
        result?: CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse;
        player_accomplishments?: {
            player_accomplishments?: {
                recent_outcomes?: {
                    outcomes?: number;
                    match_count?: number;
                };
                total_record?: {
                    wins?: number;
                    losses?: number;
                };
                prediction_streak?: number;
                plus_prediction_streak?: number;
                recent_commends?: {
                    commends?: number;
                    match_count?: number;
                };
                first_match_timestamp?: number;
                last_match?: {
                    match_id?: string;
                    timestamp?: number;
                    duration?: number;
                    win?: boolean;
                    hero_id?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                };
                recent_mvps?: {
                    outcomes?: number;
                    match_count?: number;
                };
            };
            hero_accomplishments?: {
                recent_outcomes?: {
                    outcomes?: number;
                    match_count?: number;
                };
                total_record?: {
                    wins?: number;
                    losses?: number;
                };
                last_match?: {
                    match_id?: string;
                    timestamp?: number;
                    duration?: number;
                    win?: boolean;
                    hero_id?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                };
            };
        } & {
            player_accomplishments?: {
                recent_outcomes?: {
                    outcomes?: number;
                    match_count?: number;
                };
                total_record?: {
                    wins?: number;
                    losses?: number;
                };
                prediction_streak?: number;
                plus_prediction_streak?: number;
                recent_commends?: {
                    commends?: number;
                    match_count?: number;
                };
                first_match_timestamp?: number;
                last_match?: {
                    match_id?: string;
                    timestamp?: number;
                    duration?: number;
                    win?: boolean;
                    hero_id?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                };
                recent_mvps?: {
                    outcomes?: number;
                    match_count?: number;
                };
            } & {
                recent_outcomes?: {
                    outcomes?: number;
                    match_count?: number;
                } & {
                    outcomes?: number;
                    match_count?: number;
                } & { [K_12 in Exclude<keyof I_1["player_accomplishments"]["player_accomplishments"]["recent_outcomes"], keyof CMsgPlayerRecentMatchOutcomes>]: never; };
                total_record?: {
                    wins?: number;
                    losses?: number;
                } & {
                    wins?: number;
                    losses?: number;
                } & { [K_13 in Exclude<keyof I_1["player_accomplishments"]["player_accomplishments"]["total_record"], keyof CMsgPlayerMatchRecord>]: never; };
                prediction_streak?: number;
                plus_prediction_streak?: number;
                recent_commends?: {
                    commends?: number;
                    match_count?: number;
                } & {
                    commends?: number;
                    match_count?: number;
                } & { [K_14 in Exclude<keyof I_1["player_accomplishments"]["player_accomplishments"]["recent_commends"], keyof CMsgPlayerRecentCommends>]: never; };
                first_match_timestamp?: number;
                last_match?: {
                    match_id?: string;
                    timestamp?: number;
                    duration?: number;
                    win?: boolean;
                    hero_id?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                } & {
                    match_id?: string;
                    timestamp?: number;
                    duration?: number;
                    win?: boolean;
                    hero_id?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                } & { [K_15 in Exclude<keyof I_1["player_accomplishments"]["player_accomplishments"]["last_match"], keyof CMsgPlayerRecentMatchInfo>]: never; };
                recent_mvps?: {
                    outcomes?: number;
                    match_count?: number;
                } & {
                    outcomes?: number;
                    match_count?: number;
                } & { [K_16 in Exclude<keyof I_1["player_accomplishments"]["player_accomplishments"]["recent_mvps"], keyof CMsgPlayerRecentMatchOutcomes>]: never; };
            } & { [K_17 in Exclude<keyof I_1["player_accomplishments"]["player_accomplishments"], keyof CMsgPlayerRecentAccomplishments>]: never; };
            hero_accomplishments?: {
                recent_outcomes?: {
                    outcomes?: number;
                    match_count?: number;
                };
                total_record?: {
                    wins?: number;
                    losses?: number;
                };
                last_match?: {
                    match_id?: string;
                    timestamp?: number;
                    duration?: number;
                    win?: boolean;
                    hero_id?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                };
            } & {
                recent_outcomes?: {
                    outcomes?: number;
                    match_count?: number;
                } & {
                    outcomes?: number;
                    match_count?: number;
                } & { [K_18 in Exclude<keyof I_1["player_accomplishments"]["hero_accomplishments"]["recent_outcomes"], keyof CMsgPlayerRecentMatchOutcomes>]: never; };
                total_record?: {
                    wins?: number;
                    losses?: number;
                } & {
                    wins?: number;
                    losses?: number;
                } & { [K_19 in Exclude<keyof I_1["player_accomplishments"]["hero_accomplishments"]["total_record"], keyof CMsgPlayerMatchRecord>]: never; };
                last_match?: {
                    match_id?: string;
                    timestamp?: number;
                    duration?: number;
                    win?: boolean;
                    hero_id?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                } & {
                    match_id?: string;
                    timestamp?: number;
                    duration?: number;
                    win?: boolean;
                    hero_id?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                } & { [K_20 in Exclude<keyof I_1["player_accomplishments"]["hero_accomplishments"]["last_match"], keyof CMsgPlayerRecentMatchInfo>]: never; };
            } & { [K_21 in Exclude<keyof I_1["player_accomplishments"]["hero_accomplishments"], keyof CMsgPlayerHeroRecentAccomplishments>]: never; };
        } & { [K_22 in Exclude<keyof I_1["player_accomplishments"], keyof CMsgRecentAccomplishments>]: never; };
    } & { [K_23 in Exclude<keyof I_1, keyof CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse>]: never; }>(object: I_1): CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse;
};
export declare const CMsgArcanaVoteMatchVotes: {
    fromJSON(object: any): CMsgArcanaVoteMatchVotes;
    toJSON(message: CMsgArcanaVoteMatchVotes): unknown;
    create<I extends {
        match_id?: number;
        hero_id?: number;
        vote_count?: number;
    } & {
        match_id?: number;
        hero_id?: number;
        vote_count?: number;
    } & { [K in Exclude<keyof I, keyof CMsgArcanaVoteMatchVotes>]: never; }>(base?: I): CMsgArcanaVoteMatchVotes;
    fromPartial<I_1 extends {
        match_id?: number;
        hero_id?: number;
        vote_count?: number;
    } & {
        match_id?: number;
        hero_id?: number;
        vote_count?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgArcanaVoteMatchVotes>]: never; }>(object: I_1): CMsgArcanaVoteMatchVotes;
};
export declare const CMsgGCtoGCAssociatedExploiterAccountInfo: {
    fromJSON(object: any): CMsgGCtoGCAssociatedExploiterAccountInfo;
    toJSON(message: CMsgGCtoGCAssociatedExploiterAccountInfo): unknown;
    create<I extends {
        account_id?: number;
        num_matches_to_search?: number;
        min_shared_match_count?: number;
        num_additional_players?: number;
    } & {
        account_id?: number;
        num_matches_to_search?: number;
        min_shared_match_count?: number;
        num_additional_players?: number;
    } & { [K in Exclude<keyof I, keyof CMsgGCtoGCAssociatedExploiterAccountInfo>]: never; }>(base?: I): CMsgGCtoGCAssociatedExploiterAccountInfo;
    fromPartial<I_1 extends {
        account_id?: number;
        num_matches_to_search?: number;
        min_shared_match_count?: number;
        num_additional_players?: number;
    } & {
        account_id?: number;
        num_matches_to_search?: number;
        min_shared_match_count?: number;
        num_additional_players?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCtoGCAssociatedExploiterAccountInfo>]: never; }>(object: I_1): CMsgGCtoGCAssociatedExploiterAccountInfo;
};
export declare const CMsgGCtoGCAssociatedExploiterAccountInfoResponse: {
    fromJSON(object: any): CMsgGCtoGCAssociatedExploiterAccountInfoResponse;
    toJSON(message: CMsgGCtoGCAssociatedExploiterAccountInfoResponse): unknown;
    create<I extends {
        accounts?: {
            account_id?: number;
            num_common_matches?: number;
            earliest_common_match?: number;
            latest_common_match?: number;
            generation?: number;
            persona?: string;
            already_banned?: boolean;
        }[];
    } & {
        accounts?: {
            account_id?: number;
            num_common_matches?: number;
            earliest_common_match?: number;
            latest_common_match?: number;
            generation?: number;
            persona?: string;
            already_banned?: boolean;
        }[] & ({
            account_id?: number;
            num_common_matches?: number;
            earliest_common_match?: number;
            latest_common_match?: number;
            generation?: number;
            persona?: string;
            already_banned?: boolean;
        } & {
            account_id?: number;
            num_common_matches?: number;
            earliest_common_match?: number;
            latest_common_match?: number;
            generation?: number;
            persona?: string;
            already_banned?: boolean;
        } & { [K in Exclude<keyof I["accounts"][number], keyof CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account>]: never; })[] & { [K_1 in Exclude<keyof I["accounts"], keyof {
            account_id?: number;
            num_common_matches?: number;
            earliest_common_match?: number;
            latest_common_match?: number;
            generation?: number;
            persona?: string;
            already_banned?: boolean;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "accounts">]: never; }>(base?: I): CMsgGCtoGCAssociatedExploiterAccountInfoResponse;
    fromPartial<I_1 extends {
        accounts?: {
            account_id?: number;
            num_common_matches?: number;
            earliest_common_match?: number;
            latest_common_match?: number;
            generation?: number;
            persona?: string;
            already_banned?: boolean;
        }[];
    } & {
        accounts?: {
            account_id?: number;
            num_common_matches?: number;
            earliest_common_match?: number;
            latest_common_match?: number;
            generation?: number;
            persona?: string;
            already_banned?: boolean;
        }[] & ({
            account_id?: number;
            num_common_matches?: number;
            earliest_common_match?: number;
            latest_common_match?: number;
            generation?: number;
            persona?: string;
            already_banned?: boolean;
        } & {
            account_id?: number;
            num_common_matches?: number;
            earliest_common_match?: number;
            latest_common_match?: number;
            generation?: number;
            persona?: string;
            already_banned?: boolean;
        } & { [K_3 in Exclude<keyof I_1["accounts"][number], keyof CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account>]: never; })[] & { [K_4 in Exclude<keyof I_1["accounts"], keyof {
            account_id?: number;
            num_common_matches?: number;
            earliest_common_match?: number;
            latest_common_match?: number;
            generation?: number;
            persona?: string;
            already_banned?: boolean;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "accounts">]: never; }>(object: I_1): CMsgGCtoGCAssociatedExploiterAccountInfoResponse;
};
export declare const CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account: {
    fromJSON(object: any): CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account;
    toJSON(message: CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account): unknown;
    create<I extends {
        account_id?: number;
        num_common_matches?: number;
        earliest_common_match?: number;
        latest_common_match?: number;
        generation?: number;
        persona?: string;
        already_banned?: boolean;
    } & {
        account_id?: number;
        num_common_matches?: number;
        earliest_common_match?: number;
        latest_common_match?: number;
        generation?: number;
        persona?: string;
        already_banned?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account>]: never; }>(base?: I): CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account;
    fromPartial<I_1 extends {
        account_id?: number;
        num_common_matches?: number;
        earliest_common_match?: number;
        latest_common_match?: number;
        generation?: number;
        persona?: string;
        already_banned?: boolean;
    } & {
        account_id?: number;
        num_common_matches?: number;
        earliest_common_match?: number;
        latest_common_match?: number;
        generation?: number;
        persona?: string;
        already_banned?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account>]: never; }>(object: I_1): CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account;
};
export declare const CMsgPullTabsData: {
    fromJSON(object: any): CMsgPullTabsData;
    toJSON(message: CMsgPullTabsData): unknown;
    create<I extends {
        slots?: {
            event_id?: number;
            board_id?: number;
            hero_id?: number;
            action_id?: number;
            redeemed?: boolean;
        }[];
        jackpots?: {
            board_id?: number;
            action_id?: number;
            hero_id?: number;
        }[];
        last_board?: number;
    } & {
        slots?: {
            event_id?: number;
            board_id?: number;
            hero_id?: number;
            action_id?: number;
            redeemed?: boolean;
        }[] & ({
            event_id?: number;
            board_id?: number;
            hero_id?: number;
            action_id?: number;
            redeemed?: boolean;
        } & {
            event_id?: number;
            board_id?: number;
            hero_id?: number;
            action_id?: number;
            redeemed?: boolean;
        } & { [K in Exclude<keyof I["slots"][number], keyof CMsgPullTabsData_Slot>]: never; })[] & { [K_1 in Exclude<keyof I["slots"], keyof {
            event_id?: number;
            board_id?: number;
            hero_id?: number;
            action_id?: number;
            redeemed?: boolean;
        }[]>]: never; };
        jackpots?: {
            board_id?: number;
            action_id?: number;
            hero_id?: number;
        }[] & ({
            board_id?: number;
            action_id?: number;
            hero_id?: number;
        } & {
            board_id?: number;
            action_id?: number;
            hero_id?: number;
        } & { [K_2 in Exclude<keyof I["jackpots"][number], keyof CMsgPullTabsData_Jackpot>]: never; })[] & { [K_3 in Exclude<keyof I["jackpots"], keyof {
            board_id?: number;
            action_id?: number;
            hero_id?: number;
        }[]>]: never; };
        last_board?: number;
    } & { [K_4 in Exclude<keyof I, keyof CMsgPullTabsData>]: never; }>(base?: I): CMsgPullTabsData;
    fromPartial<I_1 extends {
        slots?: {
            event_id?: number;
            board_id?: number;
            hero_id?: number;
            action_id?: number;
            redeemed?: boolean;
        }[];
        jackpots?: {
            board_id?: number;
            action_id?: number;
            hero_id?: number;
        }[];
        last_board?: number;
    } & {
        slots?: {
            event_id?: number;
            board_id?: number;
            hero_id?: number;
            action_id?: number;
            redeemed?: boolean;
        }[] & ({
            event_id?: number;
            board_id?: number;
            hero_id?: number;
            action_id?: number;
            redeemed?: boolean;
        } & {
            event_id?: number;
            board_id?: number;
            hero_id?: number;
            action_id?: number;
            redeemed?: boolean;
        } & { [K_5 in Exclude<keyof I_1["slots"][number], keyof CMsgPullTabsData_Slot>]: never; })[] & { [K_6 in Exclude<keyof I_1["slots"], keyof {
            event_id?: number;
            board_id?: number;
            hero_id?: number;
            action_id?: number;
            redeemed?: boolean;
        }[]>]: never; };
        jackpots?: {
            board_id?: number;
            action_id?: number;
            hero_id?: number;
        }[] & ({
            board_id?: number;
            action_id?: number;
            hero_id?: number;
        } & {
            board_id?: number;
            action_id?: number;
            hero_id?: number;
        } & { [K_7 in Exclude<keyof I_1["jackpots"][number], keyof CMsgPullTabsData_Jackpot>]: never; })[] & { [K_8 in Exclude<keyof I_1["jackpots"], keyof {
            board_id?: number;
            action_id?: number;
            hero_id?: number;
        }[]>]: never; };
        last_board?: number;
    } & { [K_9 in Exclude<keyof I_1, keyof CMsgPullTabsData>]: never; }>(object: I_1): CMsgPullTabsData;
};
export declare const CMsgPullTabsData_Slot: {
    fromJSON(object: any): CMsgPullTabsData_Slot;
    toJSON(message: CMsgPullTabsData_Slot): unknown;
    create<I extends {
        event_id?: number;
        board_id?: number;
        hero_id?: number;
        action_id?: number;
        redeemed?: boolean;
    } & {
        event_id?: number;
        board_id?: number;
        hero_id?: number;
        action_id?: number;
        redeemed?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgPullTabsData_Slot>]: never; }>(base?: I): CMsgPullTabsData_Slot;
    fromPartial<I_1 extends {
        event_id?: number;
        board_id?: number;
        hero_id?: number;
        action_id?: number;
        redeemed?: boolean;
    } & {
        event_id?: number;
        board_id?: number;
        hero_id?: number;
        action_id?: number;
        redeemed?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgPullTabsData_Slot>]: never; }>(object: I_1): CMsgPullTabsData_Slot;
};
export declare const CMsgPullTabsData_Jackpot: {
    fromJSON(object: any): CMsgPullTabsData_Jackpot;
    toJSON(message: CMsgPullTabsData_Jackpot): unknown;
    create<I extends {
        board_id?: number;
        action_id?: number;
        hero_id?: number;
    } & {
        board_id?: number;
        action_id?: number;
        hero_id?: number;
    } & { [K in Exclude<keyof I, keyof CMsgPullTabsData_Jackpot>]: never; }>(base?: I): CMsgPullTabsData_Jackpot;
    fromPartial<I_1 extends {
        board_id?: number;
        action_id?: number;
        hero_id?: number;
    } & {
        board_id?: number;
        action_id?: number;
        hero_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgPullTabsData_Jackpot>]: never; }>(object: I_1): CMsgPullTabsData_Jackpot;
};
export declare const CMsgUnderDraftData: {
    fromJSON(object: any): CMsgUnderDraftData;
    toJSON(message: CMsgUnderDraftData): unknown;
    create<I extends {
        bench_slots?: {
            slot_id?: number;
            hero_id?: number;
            stars?: number;
        }[];
        shop_slots?: {
            slot_id?: number;
            hero_id?: number;
            is_special_reward?: boolean;
        }[];
        gold?: number;
        total_gold?: number;
        not_restorable?: boolean;
    } & {
        bench_slots?: {
            slot_id?: number;
            hero_id?: number;
            stars?: number;
        }[] & ({
            slot_id?: number;
            hero_id?: number;
            stars?: number;
        } & {
            slot_id?: number;
            hero_id?: number;
            stars?: number;
        } & { [K in Exclude<keyof I["bench_slots"][number], keyof CMsgUnderDraftData_BenchSlot>]: never; })[] & { [K_1 in Exclude<keyof I["bench_slots"], keyof {
            slot_id?: number;
            hero_id?: number;
            stars?: number;
        }[]>]: never; };
        shop_slots?: {
            slot_id?: number;
            hero_id?: number;
            is_special_reward?: boolean;
        }[] & ({
            slot_id?: number;
            hero_id?: number;
            is_special_reward?: boolean;
        } & {
            slot_id?: number;
            hero_id?: number;
            is_special_reward?: boolean;
        } & { [K_2 in Exclude<keyof I["shop_slots"][number], keyof CMsgUnderDraftData_ShopSlot>]: never; })[] & { [K_3 in Exclude<keyof I["shop_slots"], keyof {
            slot_id?: number;
            hero_id?: number;
            is_special_reward?: boolean;
        }[]>]: never; };
        gold?: number;
        total_gold?: number;
        not_restorable?: boolean;
    } & { [K_4 in Exclude<keyof I, keyof CMsgUnderDraftData>]: never; }>(base?: I): CMsgUnderDraftData;
    fromPartial<I_1 extends {
        bench_slots?: {
            slot_id?: number;
            hero_id?: number;
            stars?: number;
        }[];
        shop_slots?: {
            slot_id?: number;
            hero_id?: number;
            is_special_reward?: boolean;
        }[];
        gold?: number;
        total_gold?: number;
        not_restorable?: boolean;
    } & {
        bench_slots?: {
            slot_id?: number;
            hero_id?: number;
            stars?: number;
        }[] & ({
            slot_id?: number;
            hero_id?: number;
            stars?: number;
        } & {
            slot_id?: number;
            hero_id?: number;
            stars?: number;
        } & { [K_5 in Exclude<keyof I_1["bench_slots"][number], keyof CMsgUnderDraftData_BenchSlot>]: never; })[] & { [K_6 in Exclude<keyof I_1["bench_slots"], keyof {
            slot_id?: number;
            hero_id?: number;
            stars?: number;
        }[]>]: never; };
        shop_slots?: {
            slot_id?: number;
            hero_id?: number;
            is_special_reward?: boolean;
        }[] & ({
            slot_id?: number;
            hero_id?: number;
            is_special_reward?: boolean;
        } & {
            slot_id?: number;
            hero_id?: number;
            is_special_reward?: boolean;
        } & { [K_7 in Exclude<keyof I_1["shop_slots"][number], keyof CMsgUnderDraftData_ShopSlot>]: never; })[] & { [K_8 in Exclude<keyof I_1["shop_slots"], keyof {
            slot_id?: number;
            hero_id?: number;
            is_special_reward?: boolean;
        }[]>]: never; };
        gold?: number;
        total_gold?: number;
        not_restorable?: boolean;
    } & { [K_9 in Exclude<keyof I_1, keyof CMsgUnderDraftData>]: never; }>(object: I_1): CMsgUnderDraftData;
};
export declare const CMsgUnderDraftData_BenchSlot: {
    fromJSON(object: any): CMsgUnderDraftData_BenchSlot;
    toJSON(message: CMsgUnderDraftData_BenchSlot): unknown;
    create<I extends {
        slot_id?: number;
        hero_id?: number;
        stars?: number;
    } & {
        slot_id?: number;
        hero_id?: number;
        stars?: number;
    } & { [K in Exclude<keyof I, keyof CMsgUnderDraftData_BenchSlot>]: never; }>(base?: I): CMsgUnderDraftData_BenchSlot;
    fromPartial<I_1 extends {
        slot_id?: number;
        hero_id?: number;
        stars?: number;
    } & {
        slot_id?: number;
        hero_id?: number;
        stars?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgUnderDraftData_BenchSlot>]: never; }>(object: I_1): CMsgUnderDraftData_BenchSlot;
};
export declare const CMsgUnderDraftData_ShopSlot: {
    fromJSON(object: any): CMsgUnderDraftData_ShopSlot;
    toJSON(message: CMsgUnderDraftData_ShopSlot): unknown;
    create<I extends {
        slot_id?: number;
        hero_id?: number;
        is_special_reward?: boolean;
    } & {
        slot_id?: number;
        hero_id?: number;
        is_special_reward?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgUnderDraftData_ShopSlot>]: never; }>(base?: I): CMsgUnderDraftData_ShopSlot;
    fromPartial<I_1 extends {
        slot_id?: number;
        hero_id?: number;
        is_special_reward?: boolean;
    } & {
        slot_id?: number;
        hero_id?: number;
        is_special_reward?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgUnderDraftData_ShopSlot>]: never; }>(object: I_1): CMsgUnderDraftData_ShopSlot;
};
export declare const CMsgPlayerTitleData: {
    fromJSON(object: any): CMsgPlayerTitleData;
    toJSON(message: CMsgPlayerTitleData): unknown;
    create<I extends {
        title?: number[];
        event_id?: number[];
        active?: number;
    } & {
        title?: number[] & number[] & { [K in Exclude<keyof I["title"], keyof number[]>]: never; };
        event_id?: number[] & number[] & { [K_1 in Exclude<keyof I["event_id"], keyof number[]>]: never; };
        active?: number;
    } & { [K_2 in Exclude<keyof I, keyof CMsgPlayerTitleData>]: never; }>(base?: I): CMsgPlayerTitleData;
    fromPartial<I_1 extends {
        title?: number[];
        event_id?: number[];
        active?: number;
    } & {
        title?: number[] & number[] & { [K_3 in Exclude<keyof I_1["title"], keyof number[]>]: never; };
        event_id?: number[] & number[] & { [K_4 in Exclude<keyof I_1["event_id"], keyof number[]>]: never; };
        active?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgPlayerTitleData>]: never; }>(object: I_1): CMsgPlayerTitleData;
};
export declare const CMsgDOTATriviaQuestion: {
    fromJSON(object: any): CMsgDOTATriviaQuestion;
    toJSON(message: CMsgDOTATriviaQuestion): unknown;
    create<I extends {
        question_id?: number;
        category?: EDOTATriviaQuestionCategory;
        timestamp?: number;
        question_value?: string;
        answer_values?: string[];
        correct_answer_index?: number;
    } & {
        question_id?: number;
        category?: EDOTATriviaQuestionCategory;
        timestamp?: number;
        question_value?: string;
        answer_values?: string[] & string[] & { [K in Exclude<keyof I["answer_values"], keyof string[]>]: never; };
        correct_answer_index?: number;
    } & { [K_1 in Exclude<keyof I, keyof CMsgDOTATriviaQuestion>]: never; }>(base?: I): CMsgDOTATriviaQuestion;
    fromPartial<I_1 extends {
        question_id?: number;
        category?: EDOTATriviaQuestionCategory;
        timestamp?: number;
        question_value?: string;
        answer_values?: string[];
        correct_answer_index?: number;
    } & {
        question_id?: number;
        category?: EDOTATriviaQuestionCategory;
        timestamp?: number;
        question_value?: string;
        answer_values?: string[] & string[] & { [K_2 in Exclude<keyof I_1["answer_values"], keyof string[]>]: never; };
        correct_answer_index?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgDOTATriviaQuestion>]: never; }>(object: I_1): CMsgDOTATriviaQuestion;
};
export declare const CMsgDOTATriviaQuestionAnswersSummary: {
    fromJSON(object: any): CMsgDOTATriviaQuestionAnswersSummary;
    toJSON(message: CMsgDOTATriviaQuestionAnswersSummary): unknown;
    create<I extends {
        summary_available?: boolean;
        picked_count?: number[];
    } & {
        summary_available?: boolean;
        picked_count?: number[] & number[] & { [K in Exclude<keyof I["picked_count"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CMsgDOTATriviaQuestionAnswersSummary>]: never; }>(base?: I): CMsgDOTATriviaQuestionAnswersSummary;
    fromPartial<I_1 extends {
        summary_available?: boolean;
        picked_count?: number[];
    } & {
        summary_available?: boolean;
        picked_count?: number[] & number[] & { [K_2 in Exclude<keyof I_1["picked_count"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgDOTATriviaQuestionAnswersSummary>]: never; }>(object: I_1): CMsgDOTATriviaQuestionAnswersSummary;
};
export declare const CMsgGameDataSpecialValueBonus: {
    fromJSON(object: any): CMsgGameDataSpecialValueBonus;
    toJSON(message: CMsgGameDataSpecialValueBonus): unknown;
    create<I extends {
        name?: string;
        value?: number;
        operation?: number;
    } & {
        name?: string;
        value?: number;
        operation?: number;
    } & { [K in Exclude<keyof I, keyof CMsgGameDataSpecialValueBonus>]: never; }>(base?: I): CMsgGameDataSpecialValueBonus;
    fromPartial<I_1 extends {
        name?: string;
        value?: number;
        operation?: number;
    } & {
        name?: string;
        value?: number;
        operation?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGameDataSpecialValueBonus>]: never; }>(object: I_1): CMsgGameDataSpecialValueBonus;
};
export declare const CMsgGameDataSpecialValues: {
    fromJSON(object: any): CMsgGameDataSpecialValues;
    toJSON(message: CMsgGameDataSpecialValues): unknown;
    create<I extends {
        name?: string;
        values_float?: number[];
        is_percentage?: boolean;
        heading_loc?: string;
        bonuses?: {
            name?: string;
            value?: number;
            operation?: number;
        }[];
    } & {
        name?: string;
        values_float?: number[] & number[] & { [K in Exclude<keyof I["values_float"], keyof number[]>]: never; };
        is_percentage?: boolean;
        heading_loc?: string;
        bonuses?: {
            name?: string;
            value?: number;
            operation?: number;
        }[] & ({
            name?: string;
            value?: number;
            operation?: number;
        } & {
            name?: string;
            value?: number;
            operation?: number;
        } & { [K_1 in Exclude<keyof I["bonuses"][number], keyof CMsgGameDataSpecialValueBonus>]: never; })[] & { [K_2 in Exclude<keyof I["bonuses"], keyof {
            name?: string;
            value?: number;
            operation?: number;
        }[]>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof CMsgGameDataSpecialValues>]: never; }>(base?: I): CMsgGameDataSpecialValues;
    fromPartial<I_1 extends {
        name?: string;
        values_float?: number[];
        is_percentage?: boolean;
        heading_loc?: string;
        bonuses?: {
            name?: string;
            value?: number;
            operation?: number;
        }[];
    } & {
        name?: string;
        values_float?: number[] & number[] & { [K_4 in Exclude<keyof I_1["values_float"], keyof number[]>]: never; };
        is_percentage?: boolean;
        heading_loc?: string;
        bonuses?: {
            name?: string;
            value?: number;
            operation?: number;
        }[] & ({
            name?: string;
            value?: number;
            operation?: number;
        } & {
            name?: string;
            value?: number;
            operation?: number;
        } & { [K_5 in Exclude<keyof I_1["bonuses"][number], keyof CMsgGameDataSpecialValueBonus>]: never; })[] & { [K_6 in Exclude<keyof I_1["bonuses"], keyof {
            name?: string;
            value?: number;
            operation?: number;
        }[]>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof CMsgGameDataSpecialValues>]: never; }>(object: I_1): CMsgGameDataSpecialValues;
};
export declare const CMsgGameDataAbilityOrItem: {
    fromJSON(object: any): CMsgGameDataAbilityOrItem;
    toJSON(message: CMsgGameDataAbilityOrItem): unknown;
    create<I extends {
        id?: number;
        name?: string;
        name_loc?: string;
        desc_loc?: string;
        lore_loc?: string;
        notes_loc?: string[];
        shard_loc?: string;
        scepter_loc?: string;
        type?: number;
        behavior?: string;
        target_team?: number;
        target_type?: number;
        flags?: number;
        damage?: number;
        immunity?: number;
        dispellable?: number;
        max_level?: number;
        cast_ranges?: number[];
        cast_points?: number[];
        channel_times?: number[];
        cooldowns?: number[];
        durations?: number[];
        damages?: number[];
        mana_costs?: number[];
        gold_costs?: number[];
        special_values?: {
            name?: string;
            values_float?: number[];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: {
                name?: string;
                value?: number;
                operation?: number;
            }[];
        }[];
        is_item?: boolean;
        ability_has_scepter?: boolean;
        ability_has_shard?: boolean;
        ability_is_granted_by_scepter?: boolean;
        ability_is_granted_by_shard?: boolean;
        item_cost?: number;
        item_initial_charges?: number;
        item_neutral_tier?: number;
        item_stock_max?: number;
        item_stock_time?: number;
        item_quality?: number;
    } & {
        id?: number;
        name?: string;
        name_loc?: string;
        desc_loc?: string;
        lore_loc?: string;
        notes_loc?: string[] & string[] & { [K in Exclude<keyof I["notes_loc"], keyof string[]>]: never; };
        shard_loc?: string;
        scepter_loc?: string;
        type?: number;
        behavior?: string;
        target_team?: number;
        target_type?: number;
        flags?: number;
        damage?: number;
        immunity?: number;
        dispellable?: number;
        max_level?: number;
        cast_ranges?: number[] & number[] & { [K_1 in Exclude<keyof I["cast_ranges"], keyof number[]>]: never; };
        cast_points?: number[] & number[] & { [K_2 in Exclude<keyof I["cast_points"], keyof number[]>]: never; };
        channel_times?: number[] & number[] & { [K_3 in Exclude<keyof I["channel_times"], keyof number[]>]: never; };
        cooldowns?: number[] & number[] & { [K_4 in Exclude<keyof I["cooldowns"], keyof number[]>]: never; };
        durations?: number[] & number[] & { [K_5 in Exclude<keyof I["durations"], keyof number[]>]: never; };
        damages?: number[] & number[] & { [K_6 in Exclude<keyof I["damages"], keyof number[]>]: never; };
        mana_costs?: number[] & number[] & { [K_7 in Exclude<keyof I["mana_costs"], keyof number[]>]: never; };
        gold_costs?: number[] & number[] & { [K_8 in Exclude<keyof I["gold_costs"], keyof number[]>]: never; };
        special_values?: {
            name?: string;
            values_float?: number[];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: {
                name?: string;
                value?: number;
                operation?: number;
            }[];
        }[] & ({
            name?: string;
            values_float?: number[];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: {
                name?: string;
                value?: number;
                operation?: number;
            }[];
        } & {
            name?: string;
            values_float?: number[] & number[] & { [K_9 in Exclude<keyof I["special_values"][number]["values_float"], keyof number[]>]: never; };
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: {
                name?: string;
                value?: number;
                operation?: number;
            }[] & ({
                name?: string;
                value?: number;
                operation?: number;
            } & {
                name?: string;
                value?: number;
                operation?: number;
            } & { [K_10 in Exclude<keyof I["special_values"][number]["bonuses"][number], keyof CMsgGameDataSpecialValueBonus>]: never; })[] & { [K_11 in Exclude<keyof I["special_values"][number]["bonuses"], keyof {
                name?: string;
                value?: number;
                operation?: number;
            }[]>]: never; };
        } & { [K_12 in Exclude<keyof I["special_values"][number], keyof CMsgGameDataSpecialValues>]: never; })[] & { [K_13 in Exclude<keyof I["special_values"], keyof {
            name?: string;
            values_float?: number[];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: {
                name?: string;
                value?: number;
                operation?: number;
            }[];
        }[]>]: never; };
        is_item?: boolean;
        ability_has_scepter?: boolean;
        ability_has_shard?: boolean;
        ability_is_granted_by_scepter?: boolean;
        ability_is_granted_by_shard?: boolean;
        item_cost?: number;
        item_initial_charges?: number;
        item_neutral_tier?: number;
        item_stock_max?: number;
        item_stock_time?: number;
        item_quality?: number;
    } & { [K_14 in Exclude<keyof I, keyof CMsgGameDataAbilityOrItem>]: never; }>(base?: I): CMsgGameDataAbilityOrItem;
    fromPartial<I_1 extends {
        id?: number;
        name?: string;
        name_loc?: string;
        desc_loc?: string;
        lore_loc?: string;
        notes_loc?: string[];
        shard_loc?: string;
        scepter_loc?: string;
        type?: number;
        behavior?: string;
        target_team?: number;
        target_type?: number;
        flags?: number;
        damage?: number;
        immunity?: number;
        dispellable?: number;
        max_level?: number;
        cast_ranges?: number[];
        cast_points?: number[];
        channel_times?: number[];
        cooldowns?: number[];
        durations?: number[];
        damages?: number[];
        mana_costs?: number[];
        gold_costs?: number[];
        special_values?: {
            name?: string;
            values_float?: number[];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: {
                name?: string;
                value?: number;
                operation?: number;
            }[];
        }[];
        is_item?: boolean;
        ability_has_scepter?: boolean;
        ability_has_shard?: boolean;
        ability_is_granted_by_scepter?: boolean;
        ability_is_granted_by_shard?: boolean;
        item_cost?: number;
        item_initial_charges?: number;
        item_neutral_tier?: number;
        item_stock_max?: number;
        item_stock_time?: number;
        item_quality?: number;
    } & {
        id?: number;
        name?: string;
        name_loc?: string;
        desc_loc?: string;
        lore_loc?: string;
        notes_loc?: string[] & string[] & { [K_15 in Exclude<keyof I_1["notes_loc"], keyof string[]>]: never; };
        shard_loc?: string;
        scepter_loc?: string;
        type?: number;
        behavior?: string;
        target_team?: number;
        target_type?: number;
        flags?: number;
        damage?: number;
        immunity?: number;
        dispellable?: number;
        max_level?: number;
        cast_ranges?: number[] & number[] & { [K_16 in Exclude<keyof I_1["cast_ranges"], keyof number[]>]: never; };
        cast_points?: number[] & number[] & { [K_17 in Exclude<keyof I_1["cast_points"], keyof number[]>]: never; };
        channel_times?: number[] & number[] & { [K_18 in Exclude<keyof I_1["channel_times"], keyof number[]>]: never; };
        cooldowns?: number[] & number[] & { [K_19 in Exclude<keyof I_1["cooldowns"], keyof number[]>]: never; };
        durations?: number[] & number[] & { [K_20 in Exclude<keyof I_1["durations"], keyof number[]>]: never; };
        damages?: number[] & number[] & { [K_21 in Exclude<keyof I_1["damages"], keyof number[]>]: never; };
        mana_costs?: number[] & number[] & { [K_22 in Exclude<keyof I_1["mana_costs"], keyof number[]>]: never; };
        gold_costs?: number[] & number[] & { [K_23 in Exclude<keyof I_1["gold_costs"], keyof number[]>]: never; };
        special_values?: {
            name?: string;
            values_float?: number[];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: {
                name?: string;
                value?: number;
                operation?: number;
            }[];
        }[] & ({
            name?: string;
            values_float?: number[];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: {
                name?: string;
                value?: number;
                operation?: number;
            }[];
        } & {
            name?: string;
            values_float?: number[] & number[] & { [K_24 in Exclude<keyof I_1["special_values"][number]["values_float"], keyof number[]>]: never; };
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: {
                name?: string;
                value?: number;
                operation?: number;
            }[] & ({
                name?: string;
                value?: number;
                operation?: number;
            } & {
                name?: string;
                value?: number;
                operation?: number;
            } & { [K_25 in Exclude<keyof I_1["special_values"][number]["bonuses"][number], keyof CMsgGameDataSpecialValueBonus>]: never; })[] & { [K_26 in Exclude<keyof I_1["special_values"][number]["bonuses"], keyof {
                name?: string;
                value?: number;
                operation?: number;
            }[]>]: never; };
        } & { [K_27 in Exclude<keyof I_1["special_values"][number], keyof CMsgGameDataSpecialValues>]: never; })[] & { [K_28 in Exclude<keyof I_1["special_values"], keyof {
            name?: string;
            values_float?: number[];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: {
                name?: string;
                value?: number;
                operation?: number;
            }[];
        }[]>]: never; };
        is_item?: boolean;
        ability_has_scepter?: boolean;
        ability_has_shard?: boolean;
        ability_is_granted_by_scepter?: boolean;
        ability_is_granted_by_shard?: boolean;
        item_cost?: number;
        item_initial_charges?: number;
        item_neutral_tier?: number;
        item_stock_max?: number;
        item_stock_time?: number;
        item_quality?: number;
    } & { [K_29 in Exclude<keyof I_1, keyof CMsgGameDataAbilityOrItem>]: never; }>(object: I_1): CMsgGameDataAbilityOrItem;
};
export declare const CMsgGameDataHero: {
    fromJSON(object: any): CMsgGameDataHero;
    toJSON(message: CMsgGameDataHero): unknown;
    create<I extends {
        id?: number;
        name?: string;
        order_id?: number;
        name_loc?: string;
        bio_loc?: string;
        hype_loc?: string;
        npe_desc_loc?: string;
        str_base?: number;
        str_gain?: number;
        agi_base?: number;
        agi_gain?: number;
        int_base?: number;
        int_gain?: number;
        primary_attr?: number;
        complexity?: number;
        attack_capability?: number;
        role_levels?: number[];
        damage_min?: number;
        damage_max?: number;
        attack_rate?: number;
        attack_range?: number;
        projectile_speed?: number;
        armor?: number;
        magic_resistance?: number;
        movement_speed?: number;
        turn_rate?: number;
        sight_range_day?: number;
        sight_range_night?: number;
        max_health?: number;
        health_regen?: number;
        max_mana?: number;
        mana_regen?: number;
        abilities?: {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[];
        talents?: {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[];
    } & {
        id?: number;
        name?: string;
        order_id?: number;
        name_loc?: string;
        bio_loc?: string;
        hype_loc?: string;
        npe_desc_loc?: string;
        str_base?: number;
        str_gain?: number;
        agi_base?: number;
        agi_gain?: number;
        int_base?: number;
        int_gain?: number;
        primary_attr?: number;
        complexity?: number;
        attack_capability?: number;
        role_levels?: number[] & number[] & { [K in Exclude<keyof I["role_levels"], keyof number[]>]: never; };
        damage_min?: number;
        damage_max?: number;
        attack_rate?: number;
        attack_range?: number;
        projectile_speed?: number;
        armor?: number;
        magic_resistance?: number;
        movement_speed?: number;
        turn_rate?: number;
        sight_range_day?: number;
        sight_range_night?: number;
        max_health?: number;
        health_regen?: number;
        max_mana?: number;
        mana_regen?: number;
        abilities?: {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[] & ({
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        } & {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[] & string[] & { [K_1 in Exclude<keyof I["abilities"][number]["notes_loc"], keyof string[]>]: never; };
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[] & number[] & { [K_2 in Exclude<keyof I["abilities"][number]["cast_ranges"], keyof number[]>]: never; };
            cast_points?: number[] & number[] & { [K_3 in Exclude<keyof I["abilities"][number]["cast_points"], keyof number[]>]: never; };
            channel_times?: number[] & number[] & { [K_4 in Exclude<keyof I["abilities"][number]["channel_times"], keyof number[]>]: never; };
            cooldowns?: number[] & number[] & { [K_5 in Exclude<keyof I["abilities"][number]["cooldowns"], keyof number[]>]: never; };
            durations?: number[] & number[] & { [K_6 in Exclude<keyof I["abilities"][number]["durations"], keyof number[]>]: never; };
            damages?: number[] & number[] & { [K_7 in Exclude<keyof I["abilities"][number]["damages"], keyof number[]>]: never; };
            mana_costs?: number[] & number[] & { [K_8 in Exclude<keyof I["abilities"][number]["mana_costs"], keyof number[]>]: never; };
            gold_costs?: number[] & number[] & { [K_9 in Exclude<keyof I["abilities"][number]["gold_costs"], keyof number[]>]: never; };
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[] & ({
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            } & {
                name?: string;
                values_float?: number[] & number[] & { [K_10 in Exclude<keyof I["abilities"][number]["special_values"][number]["values_float"], keyof number[]>]: never; };
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[] & ({
                    name?: string;
                    value?: number;
                    operation?: number;
                } & {
                    name?: string;
                    value?: number;
                    operation?: number;
                } & { [K_11 in Exclude<keyof I["abilities"][number]["special_values"][number]["bonuses"][number], keyof CMsgGameDataSpecialValueBonus>]: never; })[] & { [K_12 in Exclude<keyof I["abilities"][number]["special_values"][number]["bonuses"], keyof {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[]>]: never; };
            } & { [K_13 in Exclude<keyof I["abilities"][number]["special_values"][number], keyof CMsgGameDataSpecialValues>]: never; })[] & { [K_14 in Exclude<keyof I["abilities"][number]["special_values"], keyof {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[]>]: never; };
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        } & { [K_15 in Exclude<keyof I["abilities"][number], keyof CMsgGameDataAbilityOrItem>]: never; })[] & { [K_16 in Exclude<keyof I["abilities"], keyof {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[]>]: never; };
        talents?: {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[] & ({
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        } & {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[] & string[] & { [K_17 in Exclude<keyof I["talents"][number]["notes_loc"], keyof string[]>]: never; };
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[] & number[] & { [K_18 in Exclude<keyof I["talents"][number]["cast_ranges"], keyof number[]>]: never; };
            cast_points?: number[] & number[] & { [K_19 in Exclude<keyof I["talents"][number]["cast_points"], keyof number[]>]: never; };
            channel_times?: number[] & number[] & { [K_20 in Exclude<keyof I["talents"][number]["channel_times"], keyof number[]>]: never; };
            cooldowns?: number[] & number[] & { [K_21 in Exclude<keyof I["talents"][number]["cooldowns"], keyof number[]>]: never; };
            durations?: number[] & number[] & { [K_22 in Exclude<keyof I["talents"][number]["durations"], keyof number[]>]: never; };
            damages?: number[] & number[] & { [K_23 in Exclude<keyof I["talents"][number]["damages"], keyof number[]>]: never; };
            mana_costs?: number[] & number[] & { [K_24 in Exclude<keyof I["talents"][number]["mana_costs"], keyof number[]>]: never; };
            gold_costs?: number[] & number[] & { [K_25 in Exclude<keyof I["talents"][number]["gold_costs"], keyof number[]>]: never; };
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[] & ({
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            } & {
                name?: string;
                values_float?: number[] & number[] & { [K_26 in Exclude<keyof I["talents"][number]["special_values"][number]["values_float"], keyof number[]>]: never; };
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[] & ({
                    name?: string;
                    value?: number;
                    operation?: number;
                } & {
                    name?: string;
                    value?: number;
                    operation?: number;
                } & { [K_27 in Exclude<keyof I["talents"][number]["special_values"][number]["bonuses"][number], keyof CMsgGameDataSpecialValueBonus>]: never; })[] & { [K_28 in Exclude<keyof I["talents"][number]["special_values"][number]["bonuses"], keyof {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[]>]: never; };
            } & { [K_29 in Exclude<keyof I["talents"][number]["special_values"][number], keyof CMsgGameDataSpecialValues>]: never; })[] & { [K_30 in Exclude<keyof I["talents"][number]["special_values"], keyof {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[]>]: never; };
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        } & { [K_31 in Exclude<keyof I["talents"][number], keyof CMsgGameDataAbilityOrItem>]: never; })[] & { [K_32 in Exclude<keyof I["talents"], keyof {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[]>]: never; };
    } & { [K_33 in Exclude<keyof I, keyof CMsgGameDataHero>]: never; }>(base?: I): CMsgGameDataHero;
    fromPartial<I_1 extends {
        id?: number;
        name?: string;
        order_id?: number;
        name_loc?: string;
        bio_loc?: string;
        hype_loc?: string;
        npe_desc_loc?: string;
        str_base?: number;
        str_gain?: number;
        agi_base?: number;
        agi_gain?: number;
        int_base?: number;
        int_gain?: number;
        primary_attr?: number;
        complexity?: number;
        attack_capability?: number;
        role_levels?: number[];
        damage_min?: number;
        damage_max?: number;
        attack_rate?: number;
        attack_range?: number;
        projectile_speed?: number;
        armor?: number;
        magic_resistance?: number;
        movement_speed?: number;
        turn_rate?: number;
        sight_range_day?: number;
        sight_range_night?: number;
        max_health?: number;
        health_regen?: number;
        max_mana?: number;
        mana_regen?: number;
        abilities?: {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[];
        talents?: {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[];
    } & {
        id?: number;
        name?: string;
        order_id?: number;
        name_loc?: string;
        bio_loc?: string;
        hype_loc?: string;
        npe_desc_loc?: string;
        str_base?: number;
        str_gain?: number;
        agi_base?: number;
        agi_gain?: number;
        int_base?: number;
        int_gain?: number;
        primary_attr?: number;
        complexity?: number;
        attack_capability?: number;
        role_levels?: number[] & number[] & { [K_34 in Exclude<keyof I_1["role_levels"], keyof number[]>]: never; };
        damage_min?: number;
        damage_max?: number;
        attack_rate?: number;
        attack_range?: number;
        projectile_speed?: number;
        armor?: number;
        magic_resistance?: number;
        movement_speed?: number;
        turn_rate?: number;
        sight_range_day?: number;
        sight_range_night?: number;
        max_health?: number;
        health_regen?: number;
        max_mana?: number;
        mana_regen?: number;
        abilities?: {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[] & ({
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        } & {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[] & string[] & { [K_35 in Exclude<keyof I_1["abilities"][number]["notes_loc"], keyof string[]>]: never; };
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[] & number[] & { [K_36 in Exclude<keyof I_1["abilities"][number]["cast_ranges"], keyof number[]>]: never; };
            cast_points?: number[] & number[] & { [K_37 in Exclude<keyof I_1["abilities"][number]["cast_points"], keyof number[]>]: never; };
            channel_times?: number[] & number[] & { [K_38 in Exclude<keyof I_1["abilities"][number]["channel_times"], keyof number[]>]: never; };
            cooldowns?: number[] & number[] & { [K_39 in Exclude<keyof I_1["abilities"][number]["cooldowns"], keyof number[]>]: never; };
            durations?: number[] & number[] & { [K_40 in Exclude<keyof I_1["abilities"][number]["durations"], keyof number[]>]: never; };
            damages?: number[] & number[] & { [K_41 in Exclude<keyof I_1["abilities"][number]["damages"], keyof number[]>]: never; };
            mana_costs?: number[] & number[] & { [K_42 in Exclude<keyof I_1["abilities"][number]["mana_costs"], keyof number[]>]: never; };
            gold_costs?: number[] & number[] & { [K_43 in Exclude<keyof I_1["abilities"][number]["gold_costs"], keyof number[]>]: never; };
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[] & ({
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            } & {
                name?: string;
                values_float?: number[] & number[] & { [K_44 in Exclude<keyof I_1["abilities"][number]["special_values"][number]["values_float"], keyof number[]>]: never; };
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[] & ({
                    name?: string;
                    value?: number;
                    operation?: number;
                } & {
                    name?: string;
                    value?: number;
                    operation?: number;
                } & { [K_45 in Exclude<keyof I_1["abilities"][number]["special_values"][number]["bonuses"][number], keyof CMsgGameDataSpecialValueBonus>]: never; })[] & { [K_46 in Exclude<keyof I_1["abilities"][number]["special_values"][number]["bonuses"], keyof {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[]>]: never; };
            } & { [K_47 in Exclude<keyof I_1["abilities"][number]["special_values"][number], keyof CMsgGameDataSpecialValues>]: never; })[] & { [K_48 in Exclude<keyof I_1["abilities"][number]["special_values"], keyof {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[]>]: never; };
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        } & { [K_49 in Exclude<keyof I_1["abilities"][number], keyof CMsgGameDataAbilityOrItem>]: never; })[] & { [K_50 in Exclude<keyof I_1["abilities"], keyof {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[]>]: never; };
        talents?: {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[] & ({
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        } & {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[] & string[] & { [K_51 in Exclude<keyof I_1["talents"][number]["notes_loc"], keyof string[]>]: never; };
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[] & number[] & { [K_52 in Exclude<keyof I_1["talents"][number]["cast_ranges"], keyof number[]>]: never; };
            cast_points?: number[] & number[] & { [K_53 in Exclude<keyof I_1["talents"][number]["cast_points"], keyof number[]>]: never; };
            channel_times?: number[] & number[] & { [K_54 in Exclude<keyof I_1["talents"][number]["channel_times"], keyof number[]>]: never; };
            cooldowns?: number[] & number[] & { [K_55 in Exclude<keyof I_1["talents"][number]["cooldowns"], keyof number[]>]: never; };
            durations?: number[] & number[] & { [K_56 in Exclude<keyof I_1["talents"][number]["durations"], keyof number[]>]: never; };
            damages?: number[] & number[] & { [K_57 in Exclude<keyof I_1["talents"][number]["damages"], keyof number[]>]: never; };
            mana_costs?: number[] & number[] & { [K_58 in Exclude<keyof I_1["talents"][number]["mana_costs"], keyof number[]>]: never; };
            gold_costs?: number[] & number[] & { [K_59 in Exclude<keyof I_1["talents"][number]["gold_costs"], keyof number[]>]: never; };
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[] & ({
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            } & {
                name?: string;
                values_float?: number[] & number[] & { [K_60 in Exclude<keyof I_1["talents"][number]["special_values"][number]["values_float"], keyof number[]>]: never; };
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[] & ({
                    name?: string;
                    value?: number;
                    operation?: number;
                } & {
                    name?: string;
                    value?: number;
                    operation?: number;
                } & { [K_61 in Exclude<keyof I_1["talents"][number]["special_values"][number]["bonuses"][number], keyof CMsgGameDataSpecialValueBonus>]: never; })[] & { [K_62 in Exclude<keyof I_1["talents"][number]["special_values"][number]["bonuses"], keyof {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[]>]: never; };
            } & { [K_63 in Exclude<keyof I_1["talents"][number]["special_values"][number], keyof CMsgGameDataSpecialValues>]: never; })[] & { [K_64 in Exclude<keyof I_1["talents"][number]["special_values"], keyof {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[]>]: never; };
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        } & { [K_65 in Exclude<keyof I_1["talents"][number], keyof CMsgGameDataAbilityOrItem>]: never; })[] & { [K_66 in Exclude<keyof I_1["talents"], keyof {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[]>]: never; };
    } & { [K_67 in Exclude<keyof I_1, keyof CMsgGameDataHero>]: never; }>(object: I_1): CMsgGameDataHero;
};
export declare const CMsgGameDataAbilities: {
    fromJSON(object: any): CMsgGameDataAbilities;
    toJSON(message: CMsgGameDataAbilities): unknown;
    create<I extends {
        abilities?: {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[];
    } & {
        abilities?: {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[] & ({
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        } & {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[] & string[] & { [K in Exclude<keyof I["abilities"][number]["notes_loc"], keyof string[]>]: never; };
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[] & number[] & { [K_1 in Exclude<keyof I["abilities"][number]["cast_ranges"], keyof number[]>]: never; };
            cast_points?: number[] & number[] & { [K_2 in Exclude<keyof I["abilities"][number]["cast_points"], keyof number[]>]: never; };
            channel_times?: number[] & number[] & { [K_3 in Exclude<keyof I["abilities"][number]["channel_times"], keyof number[]>]: never; };
            cooldowns?: number[] & number[] & { [K_4 in Exclude<keyof I["abilities"][number]["cooldowns"], keyof number[]>]: never; };
            durations?: number[] & number[] & { [K_5 in Exclude<keyof I["abilities"][number]["durations"], keyof number[]>]: never; };
            damages?: number[] & number[] & { [K_6 in Exclude<keyof I["abilities"][number]["damages"], keyof number[]>]: never; };
            mana_costs?: number[] & number[] & { [K_7 in Exclude<keyof I["abilities"][number]["mana_costs"], keyof number[]>]: never; };
            gold_costs?: number[] & number[] & { [K_8 in Exclude<keyof I["abilities"][number]["gold_costs"], keyof number[]>]: never; };
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[] & ({
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            } & {
                name?: string;
                values_float?: number[] & number[] & { [K_9 in Exclude<keyof I["abilities"][number]["special_values"][number]["values_float"], keyof number[]>]: never; };
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[] & ({
                    name?: string;
                    value?: number;
                    operation?: number;
                } & {
                    name?: string;
                    value?: number;
                    operation?: number;
                } & { [K_10 in Exclude<keyof I["abilities"][number]["special_values"][number]["bonuses"][number], keyof CMsgGameDataSpecialValueBonus>]: never; })[] & { [K_11 in Exclude<keyof I["abilities"][number]["special_values"][number]["bonuses"], keyof {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[]>]: never; };
            } & { [K_12 in Exclude<keyof I["abilities"][number]["special_values"][number], keyof CMsgGameDataSpecialValues>]: never; })[] & { [K_13 in Exclude<keyof I["abilities"][number]["special_values"], keyof {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[]>]: never; };
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        } & { [K_14 in Exclude<keyof I["abilities"][number], keyof CMsgGameDataAbilityOrItem>]: never; })[] & { [K_15 in Exclude<keyof I["abilities"], keyof {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[]>]: never; };
    } & { [K_16 in Exclude<keyof I, "abilities">]: never; }>(base?: I): CMsgGameDataAbilities;
    fromPartial<I_1 extends {
        abilities?: {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[];
    } & {
        abilities?: {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[] & ({
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        } & {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[] & string[] & { [K_17 in Exclude<keyof I_1["abilities"][number]["notes_loc"], keyof string[]>]: never; };
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[] & number[] & { [K_18 in Exclude<keyof I_1["abilities"][number]["cast_ranges"], keyof number[]>]: never; };
            cast_points?: number[] & number[] & { [K_19 in Exclude<keyof I_1["abilities"][number]["cast_points"], keyof number[]>]: never; };
            channel_times?: number[] & number[] & { [K_20 in Exclude<keyof I_1["abilities"][number]["channel_times"], keyof number[]>]: never; };
            cooldowns?: number[] & number[] & { [K_21 in Exclude<keyof I_1["abilities"][number]["cooldowns"], keyof number[]>]: never; };
            durations?: number[] & number[] & { [K_22 in Exclude<keyof I_1["abilities"][number]["durations"], keyof number[]>]: never; };
            damages?: number[] & number[] & { [K_23 in Exclude<keyof I_1["abilities"][number]["damages"], keyof number[]>]: never; };
            mana_costs?: number[] & number[] & { [K_24 in Exclude<keyof I_1["abilities"][number]["mana_costs"], keyof number[]>]: never; };
            gold_costs?: number[] & number[] & { [K_25 in Exclude<keyof I_1["abilities"][number]["gold_costs"], keyof number[]>]: never; };
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[] & ({
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            } & {
                name?: string;
                values_float?: number[] & number[] & { [K_26 in Exclude<keyof I_1["abilities"][number]["special_values"][number]["values_float"], keyof number[]>]: never; };
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[] & ({
                    name?: string;
                    value?: number;
                    operation?: number;
                } & {
                    name?: string;
                    value?: number;
                    operation?: number;
                } & { [K_27 in Exclude<keyof I_1["abilities"][number]["special_values"][number]["bonuses"][number], keyof CMsgGameDataSpecialValueBonus>]: never; })[] & { [K_28 in Exclude<keyof I_1["abilities"][number]["special_values"][number]["bonuses"], keyof {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[]>]: never; };
            } & { [K_29 in Exclude<keyof I_1["abilities"][number]["special_values"][number], keyof CMsgGameDataSpecialValues>]: never; })[] & { [K_30 in Exclude<keyof I_1["abilities"][number]["special_values"], keyof {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[]>]: never; };
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        } & { [K_31 in Exclude<keyof I_1["abilities"][number], keyof CMsgGameDataAbilityOrItem>]: never; })[] & { [K_32 in Exclude<keyof I_1["abilities"], keyof {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[]>]: never; };
    } & { [K_33 in Exclude<keyof I_1, "abilities">]: never; }>(object: I_1): CMsgGameDataAbilities;
};
export declare const CMsgGameDataItems: {
    fromJSON(object: any): CMsgGameDataItems;
    toJSON(message: CMsgGameDataItems): unknown;
    create<I extends {
        items?: {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[];
    } & {
        items?: {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[] & ({
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        } & {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[] & string[] & { [K in Exclude<keyof I["items"][number]["notes_loc"], keyof string[]>]: never; };
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[] & number[] & { [K_1 in Exclude<keyof I["items"][number]["cast_ranges"], keyof number[]>]: never; };
            cast_points?: number[] & number[] & { [K_2 in Exclude<keyof I["items"][number]["cast_points"], keyof number[]>]: never; };
            channel_times?: number[] & number[] & { [K_3 in Exclude<keyof I["items"][number]["channel_times"], keyof number[]>]: never; };
            cooldowns?: number[] & number[] & { [K_4 in Exclude<keyof I["items"][number]["cooldowns"], keyof number[]>]: never; };
            durations?: number[] & number[] & { [K_5 in Exclude<keyof I["items"][number]["durations"], keyof number[]>]: never; };
            damages?: number[] & number[] & { [K_6 in Exclude<keyof I["items"][number]["damages"], keyof number[]>]: never; };
            mana_costs?: number[] & number[] & { [K_7 in Exclude<keyof I["items"][number]["mana_costs"], keyof number[]>]: never; };
            gold_costs?: number[] & number[] & { [K_8 in Exclude<keyof I["items"][number]["gold_costs"], keyof number[]>]: never; };
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[] & ({
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            } & {
                name?: string;
                values_float?: number[] & number[] & { [K_9 in Exclude<keyof I["items"][number]["special_values"][number]["values_float"], keyof number[]>]: never; };
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[] & ({
                    name?: string;
                    value?: number;
                    operation?: number;
                } & {
                    name?: string;
                    value?: number;
                    operation?: number;
                } & { [K_10 in Exclude<keyof I["items"][number]["special_values"][number]["bonuses"][number], keyof CMsgGameDataSpecialValueBonus>]: never; })[] & { [K_11 in Exclude<keyof I["items"][number]["special_values"][number]["bonuses"], keyof {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[]>]: never; };
            } & { [K_12 in Exclude<keyof I["items"][number]["special_values"][number], keyof CMsgGameDataSpecialValues>]: never; })[] & { [K_13 in Exclude<keyof I["items"][number]["special_values"], keyof {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[]>]: never; };
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        } & { [K_14 in Exclude<keyof I["items"][number], keyof CMsgGameDataAbilityOrItem>]: never; })[] & { [K_15 in Exclude<keyof I["items"], keyof {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[]>]: never; };
    } & { [K_16 in Exclude<keyof I, "items">]: never; }>(base?: I): CMsgGameDataItems;
    fromPartial<I_1 extends {
        items?: {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[];
    } & {
        items?: {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[] & ({
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        } & {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[] & string[] & { [K_17 in Exclude<keyof I_1["items"][number]["notes_loc"], keyof string[]>]: never; };
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[] & number[] & { [K_18 in Exclude<keyof I_1["items"][number]["cast_ranges"], keyof number[]>]: never; };
            cast_points?: number[] & number[] & { [K_19 in Exclude<keyof I_1["items"][number]["cast_points"], keyof number[]>]: never; };
            channel_times?: number[] & number[] & { [K_20 in Exclude<keyof I_1["items"][number]["channel_times"], keyof number[]>]: never; };
            cooldowns?: number[] & number[] & { [K_21 in Exclude<keyof I_1["items"][number]["cooldowns"], keyof number[]>]: never; };
            durations?: number[] & number[] & { [K_22 in Exclude<keyof I_1["items"][number]["durations"], keyof number[]>]: never; };
            damages?: number[] & number[] & { [K_23 in Exclude<keyof I_1["items"][number]["damages"], keyof number[]>]: never; };
            mana_costs?: number[] & number[] & { [K_24 in Exclude<keyof I_1["items"][number]["mana_costs"], keyof number[]>]: never; };
            gold_costs?: number[] & number[] & { [K_25 in Exclude<keyof I_1["items"][number]["gold_costs"], keyof number[]>]: never; };
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[] & ({
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            } & {
                name?: string;
                values_float?: number[] & number[] & { [K_26 in Exclude<keyof I_1["items"][number]["special_values"][number]["values_float"], keyof number[]>]: never; };
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[] & ({
                    name?: string;
                    value?: number;
                    operation?: number;
                } & {
                    name?: string;
                    value?: number;
                    operation?: number;
                } & { [K_27 in Exclude<keyof I_1["items"][number]["special_values"][number]["bonuses"][number], keyof CMsgGameDataSpecialValueBonus>]: never; })[] & { [K_28 in Exclude<keyof I_1["items"][number]["special_values"][number]["bonuses"], keyof {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[]>]: never; };
            } & { [K_29 in Exclude<keyof I_1["items"][number]["special_values"][number], keyof CMsgGameDataSpecialValues>]: never; })[] & { [K_30 in Exclude<keyof I_1["items"][number]["special_values"], keyof {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[]>]: never; };
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        } & { [K_31 in Exclude<keyof I_1["items"][number], keyof CMsgGameDataAbilityOrItem>]: never; })[] & { [K_32 in Exclude<keyof I_1["items"], keyof {
            id?: number;
            name?: string;
            name_loc?: string;
            desc_loc?: string;
            lore_loc?: string;
            notes_loc?: string[];
            shard_loc?: string;
            scepter_loc?: string;
            type?: number;
            behavior?: string;
            target_team?: number;
            target_type?: number;
            flags?: number;
            damage?: number;
            immunity?: number;
            dispellable?: number;
            max_level?: number;
            cast_ranges?: number[];
            cast_points?: number[];
            channel_times?: number[];
            cooldowns?: number[];
            durations?: number[];
            damages?: number[];
            mana_costs?: number[];
            gold_costs?: number[];
            special_values?: {
                name?: string;
                values_float?: number[];
                is_percentage?: boolean;
                heading_loc?: string;
                bonuses?: {
                    name?: string;
                    value?: number;
                    operation?: number;
                }[];
            }[];
            is_item?: boolean;
            ability_has_scepter?: boolean;
            ability_has_shard?: boolean;
            ability_is_granted_by_scepter?: boolean;
            ability_is_granted_by_shard?: boolean;
            item_cost?: number;
            item_initial_charges?: number;
            item_neutral_tier?: number;
            item_stock_max?: number;
            item_stock_time?: number;
            item_quality?: number;
        }[]>]: never; };
    } & { [K_33 in Exclude<keyof I_1, "items">]: never; }>(object: I_1): CMsgGameDataItems;
};
export declare const CMsgGameDataHeroes: {
    fromJSON(object: any): CMsgGameDataHeroes;
    toJSON(message: CMsgGameDataHeroes): unknown;
    create<I extends {
        heroes?: {
            id?: number;
            name?: string;
            order_id?: number;
            name_loc?: string;
            bio_loc?: string;
            hype_loc?: string;
            npe_desc_loc?: string;
            str_base?: number;
            str_gain?: number;
            agi_base?: number;
            agi_gain?: number;
            int_base?: number;
            int_gain?: number;
            primary_attr?: number;
            complexity?: number;
            attack_capability?: number;
            role_levels?: number[];
            damage_min?: number;
            damage_max?: number;
            attack_rate?: number;
            attack_range?: number;
            projectile_speed?: number;
            armor?: number;
            magic_resistance?: number;
            movement_speed?: number;
            turn_rate?: number;
            sight_range_day?: number;
            sight_range_night?: number;
            max_health?: number;
            health_regen?: number;
            max_mana?: number;
            mana_regen?: number;
            abilities?: {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[];
            talents?: {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[];
        }[];
    } & {
        heroes?: {
            id?: number;
            name?: string;
            order_id?: number;
            name_loc?: string;
            bio_loc?: string;
            hype_loc?: string;
            npe_desc_loc?: string;
            str_base?: number;
            str_gain?: number;
            agi_base?: number;
            agi_gain?: number;
            int_base?: number;
            int_gain?: number;
            primary_attr?: number;
            complexity?: number;
            attack_capability?: number;
            role_levels?: number[];
            damage_min?: number;
            damage_max?: number;
            attack_rate?: number;
            attack_range?: number;
            projectile_speed?: number;
            armor?: number;
            magic_resistance?: number;
            movement_speed?: number;
            turn_rate?: number;
            sight_range_day?: number;
            sight_range_night?: number;
            max_health?: number;
            health_regen?: number;
            max_mana?: number;
            mana_regen?: number;
            abilities?: {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[];
            talents?: {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[];
        }[] & ({
            id?: number;
            name?: string;
            order_id?: number;
            name_loc?: string;
            bio_loc?: string;
            hype_loc?: string;
            npe_desc_loc?: string;
            str_base?: number;
            str_gain?: number;
            agi_base?: number;
            agi_gain?: number;
            int_base?: number;
            int_gain?: number;
            primary_attr?: number;
            complexity?: number;
            attack_capability?: number;
            role_levels?: number[];
            damage_min?: number;
            damage_max?: number;
            attack_rate?: number;
            attack_range?: number;
            projectile_speed?: number;
            armor?: number;
            magic_resistance?: number;
            movement_speed?: number;
            turn_rate?: number;
            sight_range_day?: number;
            sight_range_night?: number;
            max_health?: number;
            health_regen?: number;
            max_mana?: number;
            mana_regen?: number;
            abilities?: {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[];
            talents?: {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[];
        } & {
            id?: number;
            name?: string;
            order_id?: number;
            name_loc?: string;
            bio_loc?: string;
            hype_loc?: string;
            npe_desc_loc?: string;
            str_base?: number;
            str_gain?: number;
            agi_base?: number;
            agi_gain?: number;
            int_base?: number;
            int_gain?: number;
            primary_attr?: number;
            complexity?: number;
            attack_capability?: number;
            role_levels?: number[] & number[] & { [K in Exclude<keyof I["heroes"][number]["role_levels"], keyof number[]>]: never; };
            damage_min?: number;
            damage_max?: number;
            attack_rate?: number;
            attack_range?: number;
            projectile_speed?: number;
            armor?: number;
            magic_resistance?: number;
            movement_speed?: number;
            turn_rate?: number;
            sight_range_day?: number;
            sight_range_night?: number;
            max_health?: number;
            health_regen?: number;
            max_mana?: number;
            mana_regen?: number;
            abilities?: {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[] & ({
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            } & {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[] & string[] & { [K_1 in Exclude<keyof I["heroes"][number]["abilities"][number]["notes_loc"], keyof string[]>]: never; };
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[] & number[] & { [K_2 in Exclude<keyof I["heroes"][number]["abilities"][number]["cast_ranges"], keyof number[]>]: never; };
                cast_points?: number[] & number[] & { [K_3 in Exclude<keyof I["heroes"][number]["abilities"][number]["cast_points"], keyof number[]>]: never; };
                channel_times?: number[] & number[] & { [K_4 in Exclude<keyof I["heroes"][number]["abilities"][number]["channel_times"], keyof number[]>]: never; };
                cooldowns?: number[] & number[] & { [K_5 in Exclude<keyof I["heroes"][number]["abilities"][number]["cooldowns"], keyof number[]>]: never; };
                durations?: number[] & number[] & { [K_6 in Exclude<keyof I["heroes"][number]["abilities"][number]["durations"], keyof number[]>]: never; };
                damages?: number[] & number[] & { [K_7 in Exclude<keyof I["heroes"][number]["abilities"][number]["damages"], keyof number[]>]: never; };
                mana_costs?: number[] & number[] & { [K_8 in Exclude<keyof I["heroes"][number]["abilities"][number]["mana_costs"], keyof number[]>]: never; };
                gold_costs?: number[] & number[] & { [K_9 in Exclude<keyof I["heroes"][number]["abilities"][number]["gold_costs"], keyof number[]>]: never; };
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[] & ({
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                } & {
                    name?: string;
                    values_float?: number[] & number[] & { [K_10 in Exclude<keyof I["heroes"][number]["abilities"][number]["special_values"][number]["values_float"], keyof number[]>]: never; };
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[] & ({
                        name?: string;
                        value?: number;
                        operation?: number;
                    } & {
                        name?: string;
                        value?: number;
                        operation?: number;
                    } & { [K_11 in Exclude<keyof I["heroes"][number]["abilities"][number]["special_values"][number]["bonuses"][number], keyof CMsgGameDataSpecialValueBonus>]: never; })[] & { [K_12 in Exclude<keyof I["heroes"][number]["abilities"][number]["special_values"][number]["bonuses"], keyof {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[]>]: never; };
                } & { [K_13 in Exclude<keyof I["heroes"][number]["abilities"][number]["special_values"][number], keyof CMsgGameDataSpecialValues>]: never; })[] & { [K_14 in Exclude<keyof I["heroes"][number]["abilities"][number]["special_values"], keyof {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[]>]: never; };
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            } & { [K_15 in Exclude<keyof I["heroes"][number]["abilities"][number], keyof CMsgGameDataAbilityOrItem>]: never; })[] & { [K_16 in Exclude<keyof I["heroes"][number]["abilities"], keyof {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[]>]: never; };
            talents?: {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[] & ({
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            } & {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[] & string[] & { [K_17 in Exclude<keyof I["heroes"][number]["talents"][number]["notes_loc"], keyof string[]>]: never; };
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[] & number[] & { [K_18 in Exclude<keyof I["heroes"][number]["talents"][number]["cast_ranges"], keyof number[]>]: never; };
                cast_points?: number[] & number[] & { [K_19 in Exclude<keyof I["heroes"][number]["talents"][number]["cast_points"], keyof number[]>]: never; };
                channel_times?: number[] & number[] & { [K_20 in Exclude<keyof I["heroes"][number]["talents"][number]["channel_times"], keyof number[]>]: never; };
                cooldowns?: number[] & number[] & { [K_21 in Exclude<keyof I["heroes"][number]["talents"][number]["cooldowns"], keyof number[]>]: never; };
                durations?: number[] & number[] & { [K_22 in Exclude<keyof I["heroes"][number]["talents"][number]["durations"], keyof number[]>]: never; };
                damages?: number[] & number[] & { [K_23 in Exclude<keyof I["heroes"][number]["talents"][number]["damages"], keyof number[]>]: never; };
                mana_costs?: number[] & number[] & { [K_24 in Exclude<keyof I["heroes"][number]["talents"][number]["mana_costs"], keyof number[]>]: never; };
                gold_costs?: number[] & number[] & { [K_25 in Exclude<keyof I["heroes"][number]["talents"][number]["gold_costs"], keyof number[]>]: never; };
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[] & ({
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                } & {
                    name?: string;
                    values_float?: number[] & number[] & { [K_26 in Exclude<keyof I["heroes"][number]["talents"][number]["special_values"][number]["values_float"], keyof number[]>]: never; };
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[] & ({
                        name?: string;
                        value?: number;
                        operation?: number;
                    } & {
                        name?: string;
                        value?: number;
                        operation?: number;
                    } & { [K_27 in Exclude<keyof I["heroes"][number]["talents"][number]["special_values"][number]["bonuses"][number], keyof CMsgGameDataSpecialValueBonus>]: never; })[] & { [K_28 in Exclude<keyof I["heroes"][number]["talents"][number]["special_values"][number]["bonuses"], keyof {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[]>]: never; };
                } & { [K_29 in Exclude<keyof I["heroes"][number]["talents"][number]["special_values"][number], keyof CMsgGameDataSpecialValues>]: never; })[] & { [K_30 in Exclude<keyof I["heroes"][number]["talents"][number]["special_values"], keyof {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[]>]: never; };
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            } & { [K_31 in Exclude<keyof I["heroes"][number]["talents"][number], keyof CMsgGameDataAbilityOrItem>]: never; })[] & { [K_32 in Exclude<keyof I["heroes"][number]["talents"], keyof {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[]>]: never; };
        } & { [K_33 in Exclude<keyof I["heroes"][number], keyof CMsgGameDataHero>]: never; })[] & { [K_34 in Exclude<keyof I["heroes"], keyof {
            id?: number;
            name?: string;
            order_id?: number;
            name_loc?: string;
            bio_loc?: string;
            hype_loc?: string;
            npe_desc_loc?: string;
            str_base?: number;
            str_gain?: number;
            agi_base?: number;
            agi_gain?: number;
            int_base?: number;
            int_gain?: number;
            primary_attr?: number;
            complexity?: number;
            attack_capability?: number;
            role_levels?: number[];
            damage_min?: number;
            damage_max?: number;
            attack_rate?: number;
            attack_range?: number;
            projectile_speed?: number;
            armor?: number;
            magic_resistance?: number;
            movement_speed?: number;
            turn_rate?: number;
            sight_range_day?: number;
            sight_range_night?: number;
            max_health?: number;
            health_regen?: number;
            max_mana?: number;
            mana_regen?: number;
            abilities?: {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[];
            talents?: {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[];
        }[]>]: never; };
    } & { [K_35 in Exclude<keyof I, "heroes">]: never; }>(base?: I): CMsgGameDataHeroes;
    fromPartial<I_1 extends {
        heroes?: {
            id?: number;
            name?: string;
            order_id?: number;
            name_loc?: string;
            bio_loc?: string;
            hype_loc?: string;
            npe_desc_loc?: string;
            str_base?: number;
            str_gain?: number;
            agi_base?: number;
            agi_gain?: number;
            int_base?: number;
            int_gain?: number;
            primary_attr?: number;
            complexity?: number;
            attack_capability?: number;
            role_levels?: number[];
            damage_min?: number;
            damage_max?: number;
            attack_rate?: number;
            attack_range?: number;
            projectile_speed?: number;
            armor?: number;
            magic_resistance?: number;
            movement_speed?: number;
            turn_rate?: number;
            sight_range_day?: number;
            sight_range_night?: number;
            max_health?: number;
            health_regen?: number;
            max_mana?: number;
            mana_regen?: number;
            abilities?: {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[];
            talents?: {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[];
        }[];
    } & {
        heroes?: {
            id?: number;
            name?: string;
            order_id?: number;
            name_loc?: string;
            bio_loc?: string;
            hype_loc?: string;
            npe_desc_loc?: string;
            str_base?: number;
            str_gain?: number;
            agi_base?: number;
            agi_gain?: number;
            int_base?: number;
            int_gain?: number;
            primary_attr?: number;
            complexity?: number;
            attack_capability?: number;
            role_levels?: number[];
            damage_min?: number;
            damage_max?: number;
            attack_rate?: number;
            attack_range?: number;
            projectile_speed?: number;
            armor?: number;
            magic_resistance?: number;
            movement_speed?: number;
            turn_rate?: number;
            sight_range_day?: number;
            sight_range_night?: number;
            max_health?: number;
            health_regen?: number;
            max_mana?: number;
            mana_regen?: number;
            abilities?: {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[];
            talents?: {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[];
        }[] & ({
            id?: number;
            name?: string;
            order_id?: number;
            name_loc?: string;
            bio_loc?: string;
            hype_loc?: string;
            npe_desc_loc?: string;
            str_base?: number;
            str_gain?: number;
            agi_base?: number;
            agi_gain?: number;
            int_base?: number;
            int_gain?: number;
            primary_attr?: number;
            complexity?: number;
            attack_capability?: number;
            role_levels?: number[];
            damage_min?: number;
            damage_max?: number;
            attack_rate?: number;
            attack_range?: number;
            projectile_speed?: number;
            armor?: number;
            magic_resistance?: number;
            movement_speed?: number;
            turn_rate?: number;
            sight_range_day?: number;
            sight_range_night?: number;
            max_health?: number;
            health_regen?: number;
            max_mana?: number;
            mana_regen?: number;
            abilities?: {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[];
            talents?: {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[];
        } & {
            id?: number;
            name?: string;
            order_id?: number;
            name_loc?: string;
            bio_loc?: string;
            hype_loc?: string;
            npe_desc_loc?: string;
            str_base?: number;
            str_gain?: number;
            agi_base?: number;
            agi_gain?: number;
            int_base?: number;
            int_gain?: number;
            primary_attr?: number;
            complexity?: number;
            attack_capability?: number;
            role_levels?: number[] & number[] & { [K_36 in Exclude<keyof I_1["heroes"][number]["role_levels"], keyof number[]>]: never; };
            damage_min?: number;
            damage_max?: number;
            attack_rate?: number;
            attack_range?: number;
            projectile_speed?: number;
            armor?: number;
            magic_resistance?: number;
            movement_speed?: number;
            turn_rate?: number;
            sight_range_day?: number;
            sight_range_night?: number;
            max_health?: number;
            health_regen?: number;
            max_mana?: number;
            mana_regen?: number;
            abilities?: {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[] & ({
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            } & {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[] & string[] & { [K_37 in Exclude<keyof I_1["heroes"][number]["abilities"][number]["notes_loc"], keyof string[]>]: never; };
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[] & number[] & { [K_38 in Exclude<keyof I_1["heroes"][number]["abilities"][number]["cast_ranges"], keyof number[]>]: never; };
                cast_points?: number[] & number[] & { [K_39 in Exclude<keyof I_1["heroes"][number]["abilities"][number]["cast_points"], keyof number[]>]: never; };
                channel_times?: number[] & number[] & { [K_40 in Exclude<keyof I_1["heroes"][number]["abilities"][number]["channel_times"], keyof number[]>]: never; };
                cooldowns?: number[] & number[] & { [K_41 in Exclude<keyof I_1["heroes"][number]["abilities"][number]["cooldowns"], keyof number[]>]: never; };
                durations?: number[] & number[] & { [K_42 in Exclude<keyof I_1["heroes"][number]["abilities"][number]["durations"], keyof number[]>]: never; };
                damages?: number[] & number[] & { [K_43 in Exclude<keyof I_1["heroes"][number]["abilities"][number]["damages"], keyof number[]>]: never; };
                mana_costs?: number[] & number[] & { [K_44 in Exclude<keyof I_1["heroes"][number]["abilities"][number]["mana_costs"], keyof number[]>]: never; };
                gold_costs?: number[] & number[] & { [K_45 in Exclude<keyof I_1["heroes"][number]["abilities"][number]["gold_costs"], keyof number[]>]: never; };
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[] & ({
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                } & {
                    name?: string;
                    values_float?: number[] & number[] & { [K_46 in Exclude<keyof I_1["heroes"][number]["abilities"][number]["special_values"][number]["values_float"], keyof number[]>]: never; };
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[] & ({
                        name?: string;
                        value?: number;
                        operation?: number;
                    } & {
                        name?: string;
                        value?: number;
                        operation?: number;
                    } & { [K_47 in Exclude<keyof I_1["heroes"][number]["abilities"][number]["special_values"][number]["bonuses"][number], keyof CMsgGameDataSpecialValueBonus>]: never; })[] & { [K_48 in Exclude<keyof I_1["heroes"][number]["abilities"][number]["special_values"][number]["bonuses"], keyof {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[]>]: never; };
                } & { [K_49 in Exclude<keyof I_1["heroes"][number]["abilities"][number]["special_values"][number], keyof CMsgGameDataSpecialValues>]: never; })[] & { [K_50 in Exclude<keyof I_1["heroes"][number]["abilities"][number]["special_values"], keyof {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[]>]: never; };
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            } & { [K_51 in Exclude<keyof I_1["heroes"][number]["abilities"][number], keyof CMsgGameDataAbilityOrItem>]: never; })[] & { [K_52 in Exclude<keyof I_1["heroes"][number]["abilities"], keyof {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[]>]: never; };
            talents?: {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[] & ({
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            } & {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[] & string[] & { [K_53 in Exclude<keyof I_1["heroes"][number]["talents"][number]["notes_loc"], keyof string[]>]: never; };
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[] & number[] & { [K_54 in Exclude<keyof I_1["heroes"][number]["talents"][number]["cast_ranges"], keyof number[]>]: never; };
                cast_points?: number[] & number[] & { [K_55 in Exclude<keyof I_1["heroes"][number]["talents"][number]["cast_points"], keyof number[]>]: never; };
                channel_times?: number[] & number[] & { [K_56 in Exclude<keyof I_1["heroes"][number]["talents"][number]["channel_times"], keyof number[]>]: never; };
                cooldowns?: number[] & number[] & { [K_57 in Exclude<keyof I_1["heroes"][number]["talents"][number]["cooldowns"], keyof number[]>]: never; };
                durations?: number[] & number[] & { [K_58 in Exclude<keyof I_1["heroes"][number]["talents"][number]["durations"], keyof number[]>]: never; };
                damages?: number[] & number[] & { [K_59 in Exclude<keyof I_1["heroes"][number]["talents"][number]["damages"], keyof number[]>]: never; };
                mana_costs?: number[] & number[] & { [K_60 in Exclude<keyof I_1["heroes"][number]["talents"][number]["mana_costs"], keyof number[]>]: never; };
                gold_costs?: number[] & number[] & { [K_61 in Exclude<keyof I_1["heroes"][number]["talents"][number]["gold_costs"], keyof number[]>]: never; };
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[] & ({
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                } & {
                    name?: string;
                    values_float?: number[] & number[] & { [K_62 in Exclude<keyof I_1["heroes"][number]["talents"][number]["special_values"][number]["values_float"], keyof number[]>]: never; };
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[] & ({
                        name?: string;
                        value?: number;
                        operation?: number;
                    } & {
                        name?: string;
                        value?: number;
                        operation?: number;
                    } & { [K_63 in Exclude<keyof I_1["heroes"][number]["talents"][number]["special_values"][number]["bonuses"][number], keyof CMsgGameDataSpecialValueBonus>]: never; })[] & { [K_64 in Exclude<keyof I_1["heroes"][number]["talents"][number]["special_values"][number]["bonuses"], keyof {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[]>]: never; };
                } & { [K_65 in Exclude<keyof I_1["heroes"][number]["talents"][number]["special_values"][number], keyof CMsgGameDataSpecialValues>]: never; })[] & { [K_66 in Exclude<keyof I_1["heroes"][number]["talents"][number]["special_values"], keyof {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[]>]: never; };
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            } & { [K_67 in Exclude<keyof I_1["heroes"][number]["talents"][number], keyof CMsgGameDataAbilityOrItem>]: never; })[] & { [K_68 in Exclude<keyof I_1["heroes"][number]["talents"], keyof {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[]>]: never; };
        } & { [K_69 in Exclude<keyof I_1["heroes"][number], keyof CMsgGameDataHero>]: never; })[] & { [K_70 in Exclude<keyof I_1["heroes"], keyof {
            id?: number;
            name?: string;
            order_id?: number;
            name_loc?: string;
            bio_loc?: string;
            hype_loc?: string;
            npe_desc_loc?: string;
            str_base?: number;
            str_gain?: number;
            agi_base?: number;
            agi_gain?: number;
            int_base?: number;
            int_gain?: number;
            primary_attr?: number;
            complexity?: number;
            attack_capability?: number;
            role_levels?: number[];
            damage_min?: number;
            damage_max?: number;
            attack_rate?: number;
            attack_range?: number;
            projectile_speed?: number;
            armor?: number;
            magic_resistance?: number;
            movement_speed?: number;
            turn_rate?: number;
            sight_range_day?: number;
            sight_range_night?: number;
            max_health?: number;
            health_regen?: number;
            max_mana?: number;
            mana_regen?: number;
            abilities?: {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[];
            talents?: {
                id?: number;
                name?: string;
                name_loc?: string;
                desc_loc?: string;
                lore_loc?: string;
                notes_loc?: string[];
                shard_loc?: string;
                scepter_loc?: string;
                type?: number;
                behavior?: string;
                target_team?: number;
                target_type?: number;
                flags?: number;
                damage?: number;
                immunity?: number;
                dispellable?: number;
                max_level?: number;
                cast_ranges?: number[];
                cast_points?: number[];
                channel_times?: number[];
                cooldowns?: number[];
                durations?: number[];
                damages?: number[];
                mana_costs?: number[];
                gold_costs?: number[];
                special_values?: {
                    name?: string;
                    values_float?: number[];
                    is_percentage?: boolean;
                    heading_loc?: string;
                    bonuses?: {
                        name?: string;
                        value?: number;
                        operation?: number;
                    }[];
                }[];
                is_item?: boolean;
                ability_has_scepter?: boolean;
                ability_has_shard?: boolean;
                ability_is_granted_by_scepter?: boolean;
                ability_is_granted_by_shard?: boolean;
                item_cost?: number;
                item_initial_charges?: number;
                item_neutral_tier?: number;
                item_stock_max?: number;
                item_stock_time?: number;
                item_quality?: number;
            }[];
        }[]>]: never; };
    } & { [K_71 in Exclude<keyof I_1, "heroes">]: never; }>(object: I_1): CMsgGameDataHeroes;
};
export declare const CMsgGameDataHeroList: {
    fromJSON(object: any): CMsgGameDataHeroList;
    toJSON(message: CMsgGameDataHeroList): unknown;
    create<I extends {
        heroes?: {
            id?: number;
            name?: string;
            name_loc?: string;
            name_english_loc?: string;
            primary_attr?: number;
            complexity?: number;
        }[];
    } & {
        heroes?: {
            id?: number;
            name?: string;
            name_loc?: string;
            name_english_loc?: string;
            primary_attr?: number;
            complexity?: number;
        }[] & ({
            id?: number;
            name?: string;
            name_loc?: string;
            name_english_loc?: string;
            primary_attr?: number;
            complexity?: number;
        } & {
            id?: number;
            name?: string;
            name_loc?: string;
            name_english_loc?: string;
            primary_attr?: number;
            complexity?: number;
        } & { [K in Exclude<keyof I["heroes"][number], keyof CMsgGameDataHeroList_HeroInfo>]: never; })[] & { [K_1 in Exclude<keyof I["heroes"], keyof {
            id?: number;
            name?: string;
            name_loc?: string;
            name_english_loc?: string;
            primary_attr?: number;
            complexity?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "heroes">]: never; }>(base?: I): CMsgGameDataHeroList;
    fromPartial<I_1 extends {
        heroes?: {
            id?: number;
            name?: string;
            name_loc?: string;
            name_english_loc?: string;
            primary_attr?: number;
            complexity?: number;
        }[];
    } & {
        heroes?: {
            id?: number;
            name?: string;
            name_loc?: string;
            name_english_loc?: string;
            primary_attr?: number;
            complexity?: number;
        }[] & ({
            id?: number;
            name?: string;
            name_loc?: string;
            name_english_loc?: string;
            primary_attr?: number;
            complexity?: number;
        } & {
            id?: number;
            name?: string;
            name_loc?: string;
            name_english_loc?: string;
            primary_attr?: number;
            complexity?: number;
        } & { [K_3 in Exclude<keyof I_1["heroes"][number], keyof CMsgGameDataHeroList_HeroInfo>]: never; })[] & { [K_4 in Exclude<keyof I_1["heroes"], keyof {
            id?: number;
            name?: string;
            name_loc?: string;
            name_english_loc?: string;
            primary_attr?: number;
            complexity?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "heroes">]: never; }>(object: I_1): CMsgGameDataHeroList;
};
export declare const CMsgGameDataHeroList_HeroInfo: {
    fromJSON(object: any): CMsgGameDataHeroList_HeroInfo;
    toJSON(message: CMsgGameDataHeroList_HeroInfo): unknown;
    create<I extends {
        id?: number;
        name?: string;
        name_loc?: string;
        name_english_loc?: string;
        primary_attr?: number;
        complexity?: number;
    } & {
        id?: number;
        name?: string;
        name_loc?: string;
        name_english_loc?: string;
        primary_attr?: number;
        complexity?: number;
    } & { [K in Exclude<keyof I, keyof CMsgGameDataHeroList_HeroInfo>]: never; }>(base?: I): CMsgGameDataHeroList_HeroInfo;
    fromPartial<I_1 extends {
        id?: number;
        name?: string;
        name_loc?: string;
        name_english_loc?: string;
        primary_attr?: number;
        complexity?: number;
    } & {
        id?: number;
        name?: string;
        name_loc?: string;
        name_english_loc?: string;
        primary_attr?: number;
        complexity?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGameDataHeroList_HeroInfo>]: never; }>(object: I_1): CMsgGameDataHeroList_HeroInfo;
};
export declare const CMsgGameDataItemAbilityList: {
    fromJSON(object: any): CMsgGameDataItemAbilityList;
    toJSON(message: CMsgGameDataItemAbilityList): unknown;
    create<I extends {
        itemabilities?: {
            id?: number;
            name?: string;
            name_loc?: string;
            name_english_loc?: string;
            neutral_item_tier?: number;
        }[];
    } & {
        itemabilities?: {
            id?: number;
            name?: string;
            name_loc?: string;
            name_english_loc?: string;
            neutral_item_tier?: number;
        }[] & ({
            id?: number;
            name?: string;
            name_loc?: string;
            name_english_loc?: string;
            neutral_item_tier?: number;
        } & {
            id?: number;
            name?: string;
            name_loc?: string;
            name_english_loc?: string;
            neutral_item_tier?: number;
        } & { [K in Exclude<keyof I["itemabilities"][number], keyof CMsgGameDataItemAbilityList_ItemAbilityInfo>]: never; })[] & { [K_1 in Exclude<keyof I["itemabilities"], keyof {
            id?: number;
            name?: string;
            name_loc?: string;
            name_english_loc?: string;
            neutral_item_tier?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "itemabilities">]: never; }>(base?: I): CMsgGameDataItemAbilityList;
    fromPartial<I_1 extends {
        itemabilities?: {
            id?: number;
            name?: string;
            name_loc?: string;
            name_english_loc?: string;
            neutral_item_tier?: number;
        }[];
    } & {
        itemabilities?: {
            id?: number;
            name?: string;
            name_loc?: string;
            name_english_loc?: string;
            neutral_item_tier?: number;
        }[] & ({
            id?: number;
            name?: string;
            name_loc?: string;
            name_english_loc?: string;
            neutral_item_tier?: number;
        } & {
            id?: number;
            name?: string;
            name_loc?: string;
            name_english_loc?: string;
            neutral_item_tier?: number;
        } & { [K_3 in Exclude<keyof I_1["itemabilities"][number], keyof CMsgGameDataItemAbilityList_ItemAbilityInfo>]: never; })[] & { [K_4 in Exclude<keyof I_1["itemabilities"], keyof {
            id?: number;
            name?: string;
            name_loc?: string;
            name_english_loc?: string;
            neutral_item_tier?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "itemabilities">]: never; }>(object: I_1): CMsgGameDataItemAbilityList;
};
export declare const CMsgGameDataItemAbilityList_ItemAbilityInfo: {
    fromJSON(object: any): CMsgGameDataItemAbilityList_ItemAbilityInfo;
    toJSON(message: CMsgGameDataItemAbilityList_ItemAbilityInfo): unknown;
    create<I extends {
        id?: number;
        name?: string;
        name_loc?: string;
        name_english_loc?: string;
        neutral_item_tier?: number;
    } & {
        id?: number;
        name?: string;
        name_loc?: string;
        name_english_loc?: string;
        neutral_item_tier?: number;
    } & { [K in Exclude<keyof I, keyof CMsgGameDataItemAbilityList_ItemAbilityInfo>]: never; }>(base?: I): CMsgGameDataItemAbilityList_ItemAbilityInfo;
    fromPartial<I_1 extends {
        id?: number;
        name?: string;
        name_loc?: string;
        name_english_loc?: string;
        neutral_item_tier?: number;
    } & {
        id?: number;
        name?: string;
        name_loc?: string;
        name_english_loc?: string;
        neutral_item_tier?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGameDataItemAbilityList_ItemAbilityInfo>]: never; }>(object: I_1): CMsgGameDataItemAbilityList_ItemAbilityInfo;
};
export declare const CMsgLobbyAbilityDraftData: {
    fromJSON(object: any): CMsgLobbyAbilityDraftData;
    toJSON(message: CMsgLobbyAbilityDraftData): unknown;
    create<I extends {
        shuffle_draft_order?: boolean;
    } & {
        shuffle_draft_order?: boolean;
    } & { [K in Exclude<keyof I, "shuffle_draft_order">]: never; }>(base?: I): CMsgLobbyAbilityDraftData;
    fromPartial<I_1 extends {
        shuffle_draft_order?: boolean;
    } & {
        shuffle_draft_order?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "shuffle_draft_order">]: never; }>(object: I_1): CMsgLobbyAbilityDraftData;
};
export declare const CSOEconItemDropRateBonus: {
    fromJSON(object: any): CSOEconItemDropRateBonus;
    toJSON(message: CSOEconItemDropRateBonus): unknown;
    create<I extends {
        account_id?: number;
        expiration_date?: number;
        bonus?: number;
        bonus_count?: number;
        item_id?: string;
        def_index?: number;
        seconds_left?: number;
        booster_type?: number;
    } & {
        account_id?: number;
        expiration_date?: number;
        bonus?: number;
        bonus_count?: number;
        item_id?: string;
        def_index?: number;
        seconds_left?: number;
        booster_type?: number;
    } & { [K in Exclude<keyof I, keyof CSOEconItemDropRateBonus>]: never; }>(base?: I): CSOEconItemDropRateBonus;
    fromPartial<I_1 extends {
        account_id?: number;
        expiration_date?: number;
        bonus?: number;
        bonus_count?: number;
        item_id?: string;
        def_index?: number;
        seconds_left?: number;
        booster_type?: number;
    } & {
        account_id?: number;
        expiration_date?: number;
        bonus?: number;
        bonus_count?: number;
        item_id?: string;
        def_index?: number;
        seconds_left?: number;
        booster_type?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CSOEconItemDropRateBonus>]: never; }>(object: I_1): CSOEconItemDropRateBonus;
};
export declare const CSOEconItemTournamentPassport: {
    fromJSON(object: any): CSOEconItemTournamentPassport;
    toJSON(message: CSOEconItemTournamentPassport): unknown;
    create<I extends {
        account_id?: number;
        league_id?: number;
        item_id?: string;
        original_purchaser_id?: number;
        passports_bought?: number;
        version?: number;
        def_index?: number;
        reward_flags?: number;
    } & {
        account_id?: number;
        league_id?: number;
        item_id?: string;
        original_purchaser_id?: number;
        passports_bought?: number;
        version?: number;
        def_index?: number;
        reward_flags?: number;
    } & { [K in Exclude<keyof I, keyof CSOEconItemTournamentPassport>]: never; }>(base?: I): CSOEconItemTournamentPassport;
    fromPartial<I_1 extends {
        account_id?: number;
        league_id?: number;
        item_id?: string;
        original_purchaser_id?: number;
        passports_bought?: number;
        version?: number;
        def_index?: number;
        reward_flags?: number;
    } & {
        account_id?: number;
        league_id?: number;
        item_id?: string;
        original_purchaser_id?: number;
        passports_bought?: number;
        version?: number;
        def_index?: number;
        reward_flags?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CSOEconItemTournamentPassport>]: never; }>(object: I_1): CSOEconItemTournamentPassport;
};
export declare const CMsgStickerbookSticker: {
    fromJSON(object: any): CMsgStickerbookSticker;
    toJSON(message: CMsgStickerbookSticker): unknown;
    create<I extends {
        item_def_id?: number;
        sticker_num?: number;
        quality?: number;
        position_x?: number;
        position_y?: number;
        position_z?: number;
        rotation?: number;
        scale?: number;
        source_item_id?: string;
        depth_bias?: number;
    } & {
        item_def_id?: number;
        sticker_num?: number;
        quality?: number;
        position_x?: number;
        position_y?: number;
        position_z?: number;
        rotation?: number;
        scale?: number;
        source_item_id?: string;
        depth_bias?: number;
    } & { [K in Exclude<keyof I, keyof CMsgStickerbookSticker>]: never; }>(base?: I): CMsgStickerbookSticker;
    fromPartial<I_1 extends {
        item_def_id?: number;
        sticker_num?: number;
        quality?: number;
        position_x?: number;
        position_y?: number;
        position_z?: number;
        rotation?: number;
        scale?: number;
        source_item_id?: string;
        depth_bias?: number;
    } & {
        item_def_id?: number;
        sticker_num?: number;
        quality?: number;
        position_x?: number;
        position_y?: number;
        position_z?: number;
        rotation?: number;
        scale?: number;
        source_item_id?: string;
        depth_bias?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgStickerbookSticker>]: never; }>(object: I_1): CMsgStickerbookSticker;
};
export declare const CMsgStickerbookPage: {
    fromJSON(object: any): CMsgStickerbookPage;
    toJSON(message: CMsgStickerbookPage): unknown;
    create<I extends {
        page_num?: number;
        event_id?: EEvent;
        team_id?: number;
        stickers?: {
            item_def_id?: number;
            sticker_num?: number;
            quality?: number;
            position_x?: number;
            position_y?: number;
            position_z?: number;
            rotation?: number;
            scale?: number;
            source_item_id?: string;
            depth_bias?: number;
        }[];
        page_type?: EStickerbookPageType;
    } & {
        page_num?: number;
        event_id?: EEvent;
        team_id?: number;
        stickers?: {
            item_def_id?: number;
            sticker_num?: number;
            quality?: number;
            position_x?: number;
            position_y?: number;
            position_z?: number;
            rotation?: number;
            scale?: number;
            source_item_id?: string;
            depth_bias?: number;
        }[] & ({
            item_def_id?: number;
            sticker_num?: number;
            quality?: number;
            position_x?: number;
            position_y?: number;
            position_z?: number;
            rotation?: number;
            scale?: number;
            source_item_id?: string;
            depth_bias?: number;
        } & {
            item_def_id?: number;
            sticker_num?: number;
            quality?: number;
            position_x?: number;
            position_y?: number;
            position_z?: number;
            rotation?: number;
            scale?: number;
            source_item_id?: string;
            depth_bias?: number;
        } & { [K in Exclude<keyof I["stickers"][number], keyof CMsgStickerbookSticker>]: never; })[] & { [K_1 in Exclude<keyof I["stickers"], keyof {
            item_def_id?: number;
            sticker_num?: number;
            quality?: number;
            position_x?: number;
            position_y?: number;
            position_z?: number;
            rotation?: number;
            scale?: number;
            source_item_id?: string;
            depth_bias?: number;
        }[]>]: never; };
        page_type?: EStickerbookPageType;
    } & { [K_2 in Exclude<keyof I, keyof CMsgStickerbookPage>]: never; }>(base?: I): CMsgStickerbookPage;
    fromPartial<I_1 extends {
        page_num?: number;
        event_id?: EEvent;
        team_id?: number;
        stickers?: {
            item_def_id?: number;
            sticker_num?: number;
            quality?: number;
            position_x?: number;
            position_y?: number;
            position_z?: number;
            rotation?: number;
            scale?: number;
            source_item_id?: string;
            depth_bias?: number;
        }[];
        page_type?: EStickerbookPageType;
    } & {
        page_num?: number;
        event_id?: EEvent;
        team_id?: number;
        stickers?: {
            item_def_id?: number;
            sticker_num?: number;
            quality?: number;
            position_x?: number;
            position_y?: number;
            position_z?: number;
            rotation?: number;
            scale?: number;
            source_item_id?: string;
            depth_bias?: number;
        }[] & ({
            item_def_id?: number;
            sticker_num?: number;
            quality?: number;
            position_x?: number;
            position_y?: number;
            position_z?: number;
            rotation?: number;
            scale?: number;
            source_item_id?: string;
            depth_bias?: number;
        } & {
            item_def_id?: number;
            sticker_num?: number;
            quality?: number;
            position_x?: number;
            position_y?: number;
            position_z?: number;
            rotation?: number;
            scale?: number;
            source_item_id?: string;
            depth_bias?: number;
        } & { [K_3 in Exclude<keyof I_1["stickers"][number], keyof CMsgStickerbookSticker>]: never; })[] & { [K_4 in Exclude<keyof I_1["stickers"], keyof {
            item_def_id?: number;
            sticker_num?: number;
            quality?: number;
            position_x?: number;
            position_y?: number;
            position_z?: number;
            rotation?: number;
            scale?: number;
            source_item_id?: string;
            depth_bias?: number;
        }[]>]: never; };
        page_type?: EStickerbookPageType;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgStickerbookPage>]: never; }>(object: I_1): CMsgStickerbookPage;
};
export declare const CMsgStickerbookTeamPageOrderSequence: {
    fromJSON(object: any): CMsgStickerbookTeamPageOrderSequence;
    toJSON(message: CMsgStickerbookTeamPageOrderSequence): unknown;
    create<I extends {
        page_numbers?: number[];
    } & {
        page_numbers?: number[] & number[] & { [K in Exclude<keyof I["page_numbers"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, "page_numbers">]: never; }>(base?: I): CMsgStickerbookTeamPageOrderSequence;
    fromPartial<I_1 extends {
        page_numbers?: number[];
    } & {
        page_numbers?: number[] & number[] & { [K_2 in Exclude<keyof I_1["page_numbers"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "page_numbers">]: never; }>(object: I_1): CMsgStickerbookTeamPageOrderSequence;
};
export declare const CMsgStickerbook: {
    fromJSON(object: any): CMsgStickerbook;
    toJSON(message: CMsgStickerbook): unknown;
    create<I extends {
        pages?: {
            page_num?: number;
            event_id?: EEvent;
            team_id?: number;
            stickers?: {
                item_def_id?: number;
                sticker_num?: number;
                quality?: number;
                position_x?: number;
                position_y?: number;
                position_z?: number;
                rotation?: number;
                scale?: number;
                source_item_id?: string;
                depth_bias?: number;
            }[];
            page_type?: EStickerbookPageType;
        }[];
        team_page_order_sequence?: {
            page_numbers?: number[];
        };
        favorite_page_num?: number;
    } & {
        pages?: {
            page_num?: number;
            event_id?: EEvent;
            team_id?: number;
            stickers?: {
                item_def_id?: number;
                sticker_num?: number;
                quality?: number;
                position_x?: number;
                position_y?: number;
                position_z?: number;
                rotation?: number;
                scale?: number;
                source_item_id?: string;
                depth_bias?: number;
            }[];
            page_type?: EStickerbookPageType;
        }[] & ({
            page_num?: number;
            event_id?: EEvent;
            team_id?: number;
            stickers?: {
                item_def_id?: number;
                sticker_num?: number;
                quality?: number;
                position_x?: number;
                position_y?: number;
                position_z?: number;
                rotation?: number;
                scale?: number;
                source_item_id?: string;
                depth_bias?: number;
            }[];
            page_type?: EStickerbookPageType;
        } & {
            page_num?: number;
            event_id?: EEvent;
            team_id?: number;
            stickers?: {
                item_def_id?: number;
                sticker_num?: number;
                quality?: number;
                position_x?: number;
                position_y?: number;
                position_z?: number;
                rotation?: number;
                scale?: number;
                source_item_id?: string;
                depth_bias?: number;
            }[] & ({
                item_def_id?: number;
                sticker_num?: number;
                quality?: number;
                position_x?: number;
                position_y?: number;
                position_z?: number;
                rotation?: number;
                scale?: number;
                source_item_id?: string;
                depth_bias?: number;
            } & {
                item_def_id?: number;
                sticker_num?: number;
                quality?: number;
                position_x?: number;
                position_y?: number;
                position_z?: number;
                rotation?: number;
                scale?: number;
                source_item_id?: string;
                depth_bias?: number;
            } & { [K in Exclude<keyof I["pages"][number]["stickers"][number], keyof CMsgStickerbookSticker>]: never; })[] & { [K_1 in Exclude<keyof I["pages"][number]["stickers"], keyof {
                item_def_id?: number;
                sticker_num?: number;
                quality?: number;
                position_x?: number;
                position_y?: number;
                position_z?: number;
                rotation?: number;
                scale?: number;
                source_item_id?: string;
                depth_bias?: number;
            }[]>]: never; };
            page_type?: EStickerbookPageType;
        } & { [K_2 in Exclude<keyof I["pages"][number], keyof CMsgStickerbookPage>]: never; })[] & { [K_3 in Exclude<keyof I["pages"], keyof {
            page_num?: number;
            event_id?: EEvent;
            team_id?: number;
            stickers?: {
                item_def_id?: number;
                sticker_num?: number;
                quality?: number;
                position_x?: number;
                position_y?: number;
                position_z?: number;
                rotation?: number;
                scale?: number;
                source_item_id?: string;
                depth_bias?: number;
            }[];
            page_type?: EStickerbookPageType;
        }[]>]: never; };
        team_page_order_sequence?: {
            page_numbers?: number[];
        } & {
            page_numbers?: number[] & number[] & { [K_4 in Exclude<keyof I["team_page_order_sequence"]["page_numbers"], keyof number[]>]: never; };
        } & { [K_5 in Exclude<keyof I["team_page_order_sequence"], "page_numbers">]: never; };
        favorite_page_num?: number;
    } & { [K_6 in Exclude<keyof I, keyof CMsgStickerbook>]: never; }>(base?: I): CMsgStickerbook;
    fromPartial<I_1 extends {
        pages?: {
            page_num?: number;
            event_id?: EEvent;
            team_id?: number;
            stickers?: {
                item_def_id?: number;
                sticker_num?: number;
                quality?: number;
                position_x?: number;
                position_y?: number;
                position_z?: number;
                rotation?: number;
                scale?: number;
                source_item_id?: string;
                depth_bias?: number;
            }[];
            page_type?: EStickerbookPageType;
        }[];
        team_page_order_sequence?: {
            page_numbers?: number[];
        };
        favorite_page_num?: number;
    } & {
        pages?: {
            page_num?: number;
            event_id?: EEvent;
            team_id?: number;
            stickers?: {
                item_def_id?: number;
                sticker_num?: number;
                quality?: number;
                position_x?: number;
                position_y?: number;
                position_z?: number;
                rotation?: number;
                scale?: number;
                source_item_id?: string;
                depth_bias?: number;
            }[];
            page_type?: EStickerbookPageType;
        }[] & ({
            page_num?: number;
            event_id?: EEvent;
            team_id?: number;
            stickers?: {
                item_def_id?: number;
                sticker_num?: number;
                quality?: number;
                position_x?: number;
                position_y?: number;
                position_z?: number;
                rotation?: number;
                scale?: number;
                source_item_id?: string;
                depth_bias?: number;
            }[];
            page_type?: EStickerbookPageType;
        } & {
            page_num?: number;
            event_id?: EEvent;
            team_id?: number;
            stickers?: {
                item_def_id?: number;
                sticker_num?: number;
                quality?: number;
                position_x?: number;
                position_y?: number;
                position_z?: number;
                rotation?: number;
                scale?: number;
                source_item_id?: string;
                depth_bias?: number;
            }[] & ({
                item_def_id?: number;
                sticker_num?: number;
                quality?: number;
                position_x?: number;
                position_y?: number;
                position_z?: number;
                rotation?: number;
                scale?: number;
                source_item_id?: string;
                depth_bias?: number;
            } & {
                item_def_id?: number;
                sticker_num?: number;
                quality?: number;
                position_x?: number;
                position_y?: number;
                position_z?: number;
                rotation?: number;
                scale?: number;
                source_item_id?: string;
                depth_bias?: number;
            } & { [K_7 in Exclude<keyof I_1["pages"][number]["stickers"][number], keyof CMsgStickerbookSticker>]: never; })[] & { [K_8 in Exclude<keyof I_1["pages"][number]["stickers"], keyof {
                item_def_id?: number;
                sticker_num?: number;
                quality?: number;
                position_x?: number;
                position_y?: number;
                position_z?: number;
                rotation?: number;
                scale?: number;
                source_item_id?: string;
                depth_bias?: number;
            }[]>]: never; };
            page_type?: EStickerbookPageType;
        } & { [K_9 in Exclude<keyof I_1["pages"][number], keyof CMsgStickerbookPage>]: never; })[] & { [K_10 in Exclude<keyof I_1["pages"], keyof {
            page_num?: number;
            event_id?: EEvent;
            team_id?: number;
            stickers?: {
                item_def_id?: number;
                sticker_num?: number;
                quality?: number;
                position_x?: number;
                position_y?: number;
                position_z?: number;
                rotation?: number;
                scale?: number;
                source_item_id?: string;
                depth_bias?: number;
            }[];
            page_type?: EStickerbookPageType;
        }[]>]: never; };
        team_page_order_sequence?: {
            page_numbers?: number[];
        } & {
            page_numbers?: number[] & number[] & { [K_11 in Exclude<keyof I_1["team_page_order_sequence"]["page_numbers"], keyof number[]>]: never; };
        } & { [K_12 in Exclude<keyof I_1["team_page_order_sequence"], "page_numbers">]: never; };
        favorite_page_num?: number;
    } & { [K_13 in Exclude<keyof I_1, keyof CMsgStickerbook>]: never; }>(object: I_1): CMsgStickerbook;
};
export declare const CMsgStickerHero: {
    fromJSON(object: any): CMsgStickerHero;
    toJSON(message: CMsgStickerHero): unknown;
    create<I extends {
        hero_id?: number;
        item_def_id?: number;
        quality?: number;
        source_item_id?: string;
    } & {
        hero_id?: number;
        item_def_id?: number;
        quality?: number;
        source_item_id?: string;
    } & { [K in Exclude<keyof I, keyof CMsgStickerHero>]: never; }>(base?: I): CMsgStickerHero;
    fromPartial<I_1 extends {
        hero_id?: number;
        item_def_id?: number;
        quality?: number;
        source_item_id?: string;
    } & {
        hero_id?: number;
        item_def_id?: number;
        quality?: number;
        source_item_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgStickerHero>]: never; }>(object: I_1): CMsgStickerHero;
};
export declare const CMsgStickerHeroes: {
    fromJSON(object: any): CMsgStickerHeroes;
    toJSON(message: CMsgStickerHeroes): unknown;
    create<I extends {
        heroes?: {
            hero_id?: number;
            item_def_id?: number;
            quality?: number;
            source_item_id?: string;
        }[];
    } & {
        heroes?: {
            hero_id?: number;
            item_def_id?: number;
            quality?: number;
            source_item_id?: string;
        }[] & ({
            hero_id?: number;
            item_def_id?: number;
            quality?: number;
            source_item_id?: string;
        } & {
            hero_id?: number;
            item_def_id?: number;
            quality?: number;
            source_item_id?: string;
        } & { [K in Exclude<keyof I["heroes"][number], keyof CMsgStickerHero>]: never; })[] & { [K_1 in Exclude<keyof I["heroes"], keyof {
            hero_id?: number;
            item_def_id?: number;
            quality?: number;
            source_item_id?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "heroes">]: never; }>(base?: I): CMsgStickerHeroes;
    fromPartial<I_1 extends {
        heroes?: {
            hero_id?: number;
            item_def_id?: number;
            quality?: number;
            source_item_id?: string;
        }[];
    } & {
        heroes?: {
            hero_id?: number;
            item_def_id?: number;
            quality?: number;
            source_item_id?: string;
        }[] & ({
            hero_id?: number;
            item_def_id?: number;
            quality?: number;
            source_item_id?: string;
        } & {
            hero_id?: number;
            item_def_id?: number;
            quality?: number;
            source_item_id?: string;
        } & { [K_3 in Exclude<keyof I_1["heroes"][number], keyof CMsgStickerHero>]: never; })[] & { [K_4 in Exclude<keyof I_1["heroes"], keyof {
            hero_id?: number;
            item_def_id?: number;
            quality?: number;
            source_item_id?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "heroes">]: never; }>(object: I_1): CMsgStickerHeroes;
};
export declare const CMsgHeroRoleStats: {
    fromJSON(object: any): CMsgHeroRoleStats;
    toJSON(message: CMsgHeroRoleStats): unknown;
    create<I extends {
        lane_selection_flags?: number;
        match_count?: number;
        win_count?: number;
    } & {
        lane_selection_flags?: number;
        match_count?: number;
        win_count?: number;
    } & { [K in Exclude<keyof I, keyof CMsgHeroRoleStats>]: never; }>(base?: I): CMsgHeroRoleStats;
    fromPartial<I_1 extends {
        lane_selection_flags?: number;
        match_count?: number;
        win_count?: number;
    } & {
        lane_selection_flags?: number;
        match_count?: number;
        win_count?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgHeroRoleStats>]: never; }>(object: I_1): CMsgHeroRoleStats;
};
export declare const CMsgHeroRoleHeroStats: {
    fromJSON(object: any): CMsgHeroRoleHeroStats;
    toJSON(message: CMsgHeroRoleHeroStats): unknown;
    create<I extends {
        hero_id?: number;
        role_stats?: {
            lane_selection_flags?: number;
            match_count?: number;
            win_count?: number;
        }[];
    } & {
        hero_id?: number;
        role_stats?: {
            lane_selection_flags?: number;
            match_count?: number;
            win_count?: number;
        }[] & ({
            lane_selection_flags?: number;
            match_count?: number;
            win_count?: number;
        } & {
            lane_selection_flags?: number;
            match_count?: number;
            win_count?: number;
        } & { [K in Exclude<keyof I["role_stats"][number], keyof CMsgHeroRoleStats>]: never; })[] & { [K_1 in Exclude<keyof I["role_stats"], keyof {
            lane_selection_flags?: number;
            match_count?: number;
            win_count?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgHeroRoleHeroStats>]: never; }>(base?: I): CMsgHeroRoleHeroStats;
    fromPartial<I_1 extends {
        hero_id?: number;
        role_stats?: {
            lane_selection_flags?: number;
            match_count?: number;
            win_count?: number;
        }[];
    } & {
        hero_id?: number;
        role_stats?: {
            lane_selection_flags?: number;
            match_count?: number;
            win_count?: number;
        }[] & ({
            lane_selection_flags?: number;
            match_count?: number;
            win_count?: number;
        } & {
            lane_selection_flags?: number;
            match_count?: number;
            win_count?: number;
        } & { [K_3 in Exclude<keyof I_1["role_stats"][number], keyof CMsgHeroRoleStats>]: never; })[] & { [K_4 in Exclude<keyof I_1["role_stats"], keyof {
            lane_selection_flags?: number;
            match_count?: number;
            win_count?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgHeroRoleHeroStats>]: never; }>(object: I_1): CMsgHeroRoleHeroStats;
};
export declare const CMsgHeroRoleRankStats: {
    fromJSON(object: any): CMsgHeroRoleRankStats;
    toJSON(message: CMsgHeroRoleRankStats): unknown;
    create<I extends {
        rank_tier?: number;
        hero_stats?: {
            hero_id?: number;
            role_stats?: {
                lane_selection_flags?: number;
                match_count?: number;
                win_count?: number;
            }[];
        }[];
    } & {
        rank_tier?: number;
        hero_stats?: {
            hero_id?: number;
            role_stats?: {
                lane_selection_flags?: number;
                match_count?: number;
                win_count?: number;
            }[];
        }[] & ({
            hero_id?: number;
            role_stats?: {
                lane_selection_flags?: number;
                match_count?: number;
                win_count?: number;
            }[];
        } & {
            hero_id?: number;
            role_stats?: {
                lane_selection_flags?: number;
                match_count?: number;
                win_count?: number;
            }[] & ({
                lane_selection_flags?: number;
                match_count?: number;
                win_count?: number;
            } & {
                lane_selection_flags?: number;
                match_count?: number;
                win_count?: number;
            } & { [K in Exclude<keyof I["hero_stats"][number]["role_stats"][number], keyof CMsgHeroRoleStats>]: never; })[] & { [K_1 in Exclude<keyof I["hero_stats"][number]["role_stats"], keyof {
                lane_selection_flags?: number;
                match_count?: number;
                win_count?: number;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["hero_stats"][number], keyof CMsgHeroRoleHeroStats>]: never; })[] & { [K_3 in Exclude<keyof I["hero_stats"], keyof {
            hero_id?: number;
            role_stats?: {
                lane_selection_flags?: number;
                match_count?: number;
                win_count?: number;
            }[];
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof CMsgHeroRoleRankStats>]: never; }>(base?: I): CMsgHeroRoleRankStats;
    fromPartial<I_1 extends {
        rank_tier?: number;
        hero_stats?: {
            hero_id?: number;
            role_stats?: {
                lane_selection_flags?: number;
                match_count?: number;
                win_count?: number;
            }[];
        }[];
    } & {
        rank_tier?: number;
        hero_stats?: {
            hero_id?: number;
            role_stats?: {
                lane_selection_flags?: number;
                match_count?: number;
                win_count?: number;
            }[];
        }[] & ({
            hero_id?: number;
            role_stats?: {
                lane_selection_flags?: number;
                match_count?: number;
                win_count?: number;
            }[];
        } & {
            hero_id?: number;
            role_stats?: {
                lane_selection_flags?: number;
                match_count?: number;
                win_count?: number;
            }[] & ({
                lane_selection_flags?: number;
                match_count?: number;
                win_count?: number;
            } & {
                lane_selection_flags?: number;
                match_count?: number;
                win_count?: number;
            } & { [K_5 in Exclude<keyof I_1["hero_stats"][number]["role_stats"][number], keyof CMsgHeroRoleStats>]: never; })[] & { [K_6 in Exclude<keyof I_1["hero_stats"][number]["role_stats"], keyof {
                lane_selection_flags?: number;
                match_count?: number;
                win_count?: number;
            }[]>]: never; };
        } & { [K_7 in Exclude<keyof I_1["hero_stats"][number], keyof CMsgHeroRoleHeroStats>]: never; })[] & { [K_8 in Exclude<keyof I_1["hero_stats"], keyof {
            hero_id?: number;
            role_stats?: {
                lane_selection_flags?: number;
                match_count?: number;
                win_count?: number;
            }[];
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof CMsgHeroRoleRankStats>]: never; }>(object: I_1): CMsgHeroRoleRankStats;
};
export declare const CMsgHeroRoleAllRanksStats: {
    fromJSON(object: any): CMsgHeroRoleAllRanksStats;
    toJSON(message: CMsgHeroRoleAllRanksStats): unknown;
    create<I extends {
        start_timestamp?: number;
        end_timestamp?: number;
        rank_stats?: {
            rank_tier?: number;
            hero_stats?: {
                hero_id?: number;
                role_stats?: {
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                }[];
            }[];
        }[];
    } & {
        start_timestamp?: number;
        end_timestamp?: number;
        rank_stats?: {
            rank_tier?: number;
            hero_stats?: {
                hero_id?: number;
                role_stats?: {
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                }[];
            }[];
        }[] & ({
            rank_tier?: number;
            hero_stats?: {
                hero_id?: number;
                role_stats?: {
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                }[];
            }[];
        } & {
            rank_tier?: number;
            hero_stats?: {
                hero_id?: number;
                role_stats?: {
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                }[];
            }[] & ({
                hero_id?: number;
                role_stats?: {
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                }[];
            } & {
                hero_id?: number;
                role_stats?: {
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                }[] & ({
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                } & {
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                } & { [K in Exclude<keyof I["rank_stats"][number]["hero_stats"][number]["role_stats"][number], keyof CMsgHeroRoleStats>]: never; })[] & { [K_1 in Exclude<keyof I["rank_stats"][number]["hero_stats"][number]["role_stats"], keyof {
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                }[]>]: never; };
            } & { [K_2 in Exclude<keyof I["rank_stats"][number]["hero_stats"][number], keyof CMsgHeroRoleHeroStats>]: never; })[] & { [K_3 in Exclude<keyof I["rank_stats"][number]["hero_stats"], keyof {
                hero_id?: number;
                role_stats?: {
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                }[];
            }[]>]: never; };
        } & { [K_4 in Exclude<keyof I["rank_stats"][number], keyof CMsgHeroRoleRankStats>]: never; })[] & { [K_5 in Exclude<keyof I["rank_stats"], keyof {
            rank_tier?: number;
            hero_stats?: {
                hero_id?: number;
                role_stats?: {
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                }[];
            }[];
        }[]>]: never; };
    } & { [K_6 in Exclude<keyof I, keyof CMsgHeroRoleAllRanksStats>]: never; }>(base?: I): CMsgHeroRoleAllRanksStats;
    fromPartial<I_1 extends {
        start_timestamp?: number;
        end_timestamp?: number;
        rank_stats?: {
            rank_tier?: number;
            hero_stats?: {
                hero_id?: number;
                role_stats?: {
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                }[];
            }[];
        }[];
    } & {
        start_timestamp?: number;
        end_timestamp?: number;
        rank_stats?: {
            rank_tier?: number;
            hero_stats?: {
                hero_id?: number;
                role_stats?: {
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                }[];
            }[];
        }[] & ({
            rank_tier?: number;
            hero_stats?: {
                hero_id?: number;
                role_stats?: {
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                }[];
            }[];
        } & {
            rank_tier?: number;
            hero_stats?: {
                hero_id?: number;
                role_stats?: {
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                }[];
            }[] & ({
                hero_id?: number;
                role_stats?: {
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                }[];
            } & {
                hero_id?: number;
                role_stats?: {
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                }[] & ({
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                } & {
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                } & { [K_7 in Exclude<keyof I_1["rank_stats"][number]["hero_stats"][number]["role_stats"][number], keyof CMsgHeroRoleStats>]: never; })[] & { [K_8 in Exclude<keyof I_1["rank_stats"][number]["hero_stats"][number]["role_stats"], keyof {
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                }[]>]: never; };
            } & { [K_9 in Exclude<keyof I_1["rank_stats"][number]["hero_stats"][number], keyof CMsgHeroRoleHeroStats>]: never; })[] & { [K_10 in Exclude<keyof I_1["rank_stats"][number]["hero_stats"], keyof {
                hero_id?: number;
                role_stats?: {
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                }[];
            }[]>]: never; };
        } & { [K_11 in Exclude<keyof I_1["rank_stats"][number], keyof CMsgHeroRoleRankStats>]: never; })[] & { [K_12 in Exclude<keyof I_1["rank_stats"], keyof {
            rank_tier?: number;
            hero_stats?: {
                hero_id?: number;
                role_stats?: {
                    lane_selection_flags?: number;
                    match_count?: number;
                    win_count?: number;
                }[];
            }[];
        }[]>]: never; };
    } & { [K_13 in Exclude<keyof I_1, keyof CMsgHeroRoleAllRanksStats>]: never; }>(object: I_1): CMsgHeroRoleAllRanksStats;
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
