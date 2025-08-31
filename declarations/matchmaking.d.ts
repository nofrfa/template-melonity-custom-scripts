declare interface MatchmakingLobbyData
{
	lobby_id?: bigint;
	game_name?: string;
	team_details?: Array<any>;
	server_region?: number;
	game_mode?: number;
	cm_pick?: number;
	bot_difficulty_radiant?: number;
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
	dota_tv_delay?: number;
	lan?: boolean;
	custom_game_mode?: string;
	custom_map_name?: string;
	custom_difficulty?: number;
	custom_game_id?: bigint;
	custom_min_players?: number;
	custom_max_players?: number;
	visibility?: number;
	custom_game_crc?: number;
	custom_game_timestamp?: number;
	previous_match_override?: bigint;
	pause_setting?: number;
	bot_difficulty_dire?: number;
	bot_radiant?: bigint;
	bot_dire?: bigint;
	selection_priority_rules?: number;
	custom_game_penalties?: boolean;
	lan_host_ping_location?: string;
	league_node_id?: number;
	requested_hero_ids?: Array<number>;
	scenario_save?: object;
	ability_draft_specific_details?: object;
	do_player_draft?: boolean;
}

declare enum MatchType
{
	MATCH_TYPE_CASUAL = 0,
	MATCH_TYPE_COOP_BOTS = 1,
	MATCH_TYPE_COMPETITIVE = 4,
	MATCH_TYPE_WEEKEND_TOURNEY = 5,
	MATCH_TYPE_EVENT = 7,
	MATCH_TYPE_COACHES_CHALLENGE = 12,
	MATCH_TYPE_NEW_PLAYER_POOL = 14,
	UNRECOGNIZED = -1
}

declare enum MatchLanguages
{
	MATCH_LANGUAGE_INVALID = 0,
	MATCH_LANGUAGE_ENGLISH = 1,
	MATCH_LANGUAGE_RUSSIAN = 2,
	MATCH_LANGUAGE_CHINESE = 3,
	MATCH_LANGUAGE_KOREAN = 4,
	MATCH_LANGUAGE_SPANISH = 5,
	MATCH_LANGUAGE_PORTUGUESE = 6,
	MATCH_LANGUAGE_ENGLISH2 = 7,
	UNRECOGNIZED = -1
}

interface CMsgClientPingData
{
	relay_codes: number[];
	relay_pings: number[];
	region_codes: number[];
	region_pings: number[];
	region_ping_failed_bitmask: number;
}

declare interface CMsgStartFindingMatch
{
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

declare interface CMsgPracticeLobbyListResponseEntry_CLobbyMember
{
	account_id: number;
	player_name: string;
}

declare enum DOTA_GameMode
{
	DOTA_GAMEMODE_NONE = 0,
	DOTA_GAMEMODE_AP = 1,
	DOTA_GAMEMODE_CM = 2,
	DOTA_GAMEMODE_RD = 3,
	DOTA_GAMEMODE_SD = 4,
	DOTA_GAMEMODE_AR = 5,
	DOTA_GAMEMODE_INTRO = 6,
	DOTA_GAMEMODE_HW = 7,
	DOTA_GAMEMODE_REVERSE_CM = 8,
	DOTA_GAMEMODE_XMAS = 9,
	DOTA_GAMEMODE_TUTORIAL = 10,
	DOTA_GAMEMODE_MO = 11,
	DOTA_GAMEMODE_LP = 12,
	DOTA_GAMEMODE_POOL1 = 13,
	DOTA_GAMEMODE_FH = 14,
	DOTA_GAMEMODE_CUSTOM = 15,
	DOTA_GAMEMODE_CD = 16,
	DOTA_GAMEMODE_BD = 17,
	DOTA_GAMEMODE_ABILITY_DRAFT = 18,
	DOTA_GAMEMODE_EVENT = 19,
	DOTA_GAMEMODE_ARDM = 20,
	DOTA_GAMEMODE_1V1MID = 21,
	DOTA_GAMEMODE_ALL_DRAFT = 22,
	DOTA_GAMEMODE_TURBO = 23,
	DOTA_GAMEMODE_MUTATION = 24,
	DOTA_GAMEMODE_COACHES_CHALLENGE = 25,
	UNRECOGNIZED = -1
}

declare interface CMsgPracticeLobbyListResponseEntry
{
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

declare interface CMsgLobbyList
{
	server_region: number;
	game_mode: DOTA_GameMode;
}

declare interface CMsgLobbyListResponse
{
	lobbies: CMsgPracticeLobbyListResponseEntry[];
}

declare interface CMsgFriendPracticeLobbyListResponse
{
	lobbies: CMsgPracticeLobbyListResponseEntry[];
}

declare enum EMatchGroupServerStatus
{
	k_EMatchGroupServerStatus_OK = 0,
	k_EMatchGroupServerStatus_LimitedAvailability = 1,
	k_EMatchGroupServerStatus_Offline = 2,
	UNRECOGNIZED = -1
}

declare interface CMsgMatchmakingMatchGroupInfo
{
	players_searching: number;
	auto_region_select_ping_penalty: number;
	auto_region_select_ping_penalty_custom: number;
	status: EMatchGroupServerStatus;
}

declare interface CMsgDOTAMatchmakingStatsResponse
{
	matchgroups_version: number;
	legacy_searching_players_by_group_source2: number[];
	match_groups: CMsgMatchmakingMatchGroupInfo[];
}

declare interface CSODOTAGameAccountClient
{
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
declare interface CSODOTAGameAccountClient_RoleHandicap
{
	role: number;
	handicap: number;
}

declare interface CSODOTAGameAccountPlus
{
	account_id: number;
	original_start_date: number;
	plus_flags: number;
	plus_status: number;
	prepaid_time_start: number;
	prepaid_time_balance: number;
	next_payment_date: number;
	steam_agreement_id: string;
}

declare interface CSODOTAPartyMember
{
	is_coach: boolean;
	region_ping_codes: number[];
	region_ping_times: number[];
	region_ping_failed_bitmask: number;
	is_plus_subscriber: boolean;
	tourney_skill_level: number;
	tourney_buyin: number;
	tourney_prevent_until: number;
	mm_data_valid: boolean;
	lane_selection_flags: number;
	high_priority_disabled: boolean;
	has_hp_resource: boolean;
	joined_from_partyfinder: boolean;
	is_steam_china: boolean;
}

declare interface CSODOTAPartyInvite
{
	group_id: string;
	sender_id: string;
	sender_name: string;
	members: CSODOTAPartyInvite_PartyMember[];
	team_id: number;
	low_priority_status: boolean;
	as_coach: boolean;
	invite_gid: string;
}

declare interface CSODOTAPartyInvite_PartyMember
{
	name: string;
	steam_id: string;
	is_coach: boolean;
}

declare enum ETourneyQueueDeadlineState
{
	k_ETourneyQueueDeadlineState_Normal = 0,
	k_ETourneyQueueDeadlineState_Missed = 1,
	k_ETourneyQueueDeadlineState_ExpiredOK = 2,
	k_ETourneyQueueDeadlineState_SeekingBye = 3,
	k_ETourneyQueueDeadlineState_EligibleForRefund = 4,
	k_ETourneyQueueDeadlineState_NA = -1,
	k_ETourneyQueueDeadlineState_ExpiringSoon = 101,
	UNRECOGNIZED = -1
}

declare enum EReadyCheckStatus
{
	k_EReadyCheckStatus_Unknown = 0,
	k_EReadyCheckStatus_NotReady = 1,
	k_EReadyCheckStatus_Ready = 2,
	UNRECOGNIZED = -1
}

declare interface CMsgReadyCheckStatus
{
	start_timestamp: number;
	finish_timestamp: number;
	initiator_account_id: number;
	ready_members: CMsgReadyCheckStatus_ReadyMember[];
}

declare interface CMsgReadyCheckStatus_ReadyMember
{
	account_id: number;
	ready_status: EReadyCheckStatus;
}

declare enum EHighPriorityMMState
{
	k_EHighPriorityMM_Unknown = 0,
	k_EHighPriorityMM_MissingMMData = 1,
	k_EHighPriorityMM_ResourceMissing = 2,
	k_EHighPriorityMM_ManuallyDisabled = 3,
	k_EHighPriorityMM_Min_Enabled = 64,
	k_EHighPriorityMM_AllRolesSelected = 65,
	k_EHighPriorityMM_UsingResource = 66,
	k_EHighPriorityMM_FiveStack = 67,
	k_EHighPriorityMM_HighDemand = 68,
	UNRECOGNIZED = -1
}

declare interface CSODOTAParty
{
	party_id: string;
	leader_id: string;
	member_ids: string[];
	game_modes: number;
	state: CSODOTAParty_State;
	effective_started_matchmaking_time: number;
	raw_started_matchmaking_time: number;
	attempt_start_time: number;
	attempt_num: number;
	matchgroups: number;
	low_priority_account_id: number;
	match_type: MatchType;
	team_id: number;
	team_name: string;
	team_ui_logo: string;
	team_base_logo: string;
	match_disabled_until_date: number;
	match_disabled_account_id: number;
	matchmaking_max_range_minutes: number;
	matchlanguages: number;
	members: CSODOTAPartyMember[];
	low_priority_games_remaining: number;
	open_for_join_requests: boolean;
	sent_invites: CSODOTAPartyInvite[];
	recv_invites: CSODOTAPartyInvite[];
	account_flags: number;
	region_select_flags: number;
	exclusive_tournament_id: number;
	tourney_division_id: number;
	tourney_schedule_time: number;
	tourney_skill_level: number;
	tourney_bracket_round: number;
	tourney_queue_deadline_time: number;
	tourney_queue_deadline_state: ETourneyQueueDeadlineState;
	party_builder_slots_to_fill: number;
	party_builder_match_groups: number;
	party_builder_start_time: number;
	solo_queue: boolean;
	steam_clan_account_id: number;
	ready_check: CMsgReadyCheckStatus | undefined;
	custom_game_disabled_until_date: number;
	custom_game_disabled_account_id: number;
	is_challenge_match: boolean;
	party_search_beacon_active: boolean;
	matchmaking_flags: number;
	high_priority_state: EHighPriorityMMState;
	lane_selections_enabled: boolean;
	custom_game_difficulty_mask: number;
	is_steam_china: boolean;
	bot_difficulty_mask: number;
	bot_script_index_mask: number;
}

declare enum CSODOTAParty_State
{
	UI = 0,
	FINDING_MATCH = 1,
	IN_MATCH = 2,
	UNRECOGNIZED = -1
}

declare enum DOTA_GC_TEAM
{
	DOTA_GC_TEAM_GOOD_GUYS = 0,
	DOTA_GC_TEAM_BAD_GUYS = 1,
	DOTA_GC_TEAM_BROADCASTER = 2,
	DOTA_GC_TEAM_SPECTATOR = 3,
	DOTA_GC_TEAM_PLAYER_POOL = 4,
	DOTA_GC_TEAM_NOTEAM = 5,
	DOTA_GC_TEAM_CUSTOM_1 = 6,
	DOTA_GC_TEAM_CUSTOM_2 = 7,
	DOTA_GC_TEAM_CUSTOM_3 = 8,
	DOTA_GC_TEAM_CUSTOM_4 = 9,
	DOTA_GC_TEAM_CUSTOM_5 = 10,
	DOTA_GC_TEAM_CUSTOM_6 = 11,
	DOTA_GC_TEAM_CUSTOM_7 = 12,
	DOTA_GC_TEAM_CUSTOM_8 = 13,
	DOTA_GC_TEAM_NEUTRALS = 14,
	UNRECOGNIZED = -1
}

declare enum DOTALeaverStatus_t
{
	DOTA_LEAVER_NONE = 0,
	DOTA_LEAVER_DISCONNECTED = 1,
	DOTA_LEAVER_DISCONNECTED_TOO_LONG = 2,
	DOTA_LEAVER_ABANDONED = 3,
	DOTA_LEAVER_AFK = 4,
	DOTA_LEAVER_NEVER_CONNECTED = 5,
	DOTA_LEAVER_NEVER_CONNECTED_TOO_LONG = 6,
	DOTA_LEAVER_FAILED_TO_READY_UP = 7,
	DOTA_LEAVER_DECLINED = 8,
	UNRECOGNIZED = -1
}

declare enum EEvent
{
	EVENT_ID_NONE = 0,
	EVENT_ID_DIRETIDE = 1,
	EVENT_ID_SPRING_FESTIVAL = 2,
	EVENT_ID_FROSTIVUS_2013 = 3,
	EVENT_ID_COMPENDIUM_2014 = 4,
	EVENT_ID_NEXON_PC_BANG = 5,
	EVENT_ID_PWRD_DAC_2015 = 6,
	EVENT_ID_NEW_BLOOM_2015 = 7,
	EVENT_ID_INTERNATIONAL_2015 = 8,
	EVENT_ID_FALL_MAJOR_2015 = 9,
	EVENT_ID_ORACLE_PA = 10,
	EVENT_ID_NEW_BLOOM_2015_PREBEAST = 11,
	EVENT_ID_FROSTIVUS = 12,
	EVENT_ID_WINTER_MAJOR_2016 = 13,
	EVENT_ID_INTERNATIONAL_2016 = 14,
	EVENT_ID_FALL_MAJOR_2016 = 15,
	EVENT_ID_WINTER_MAJOR_2017 = 16,
	EVENT_ID_NEW_BLOOM_2017 = 17,
	EVENT_ID_INTERNATIONAL_2017 = 18,
	EVENT_ID_PLUS_SUBSCRIPTION = 19,
	EVENT_ID_SINGLES_DAY_2017 = 20,
	EVENT_ID_FROSTIVUS_2017 = 21,
	EVENT_ID_INTERNATIONAL_2018 = 22,
	EVENT_ID_FROSTIVUS_2018 = 23,
	EVENT_ID_NEW_BLOOM_2019 = 24,
	EVENT_ID_INTERNATIONAL_2019 = 25,
	EVENT_ID_NEW_PLAYER_EXPERIENCE = 26,
	EVENT_ID_FROSTIVUS_2019 = 27,
	EVENT_ID_NEW_BLOOM_2020 = 28,
	EVENT_ID_INTERNATIONAL_2020 = 29,
	EVENT_ID_TEAM_FANDOM = 30,
	EVENT_ID_DIRETIDE_2020 = 31,
	EVENT_ID_SPRING_2021 = 32,
	EVENT_ID_FALL_2021 = 33,
	EVENT_ID_TEAM_FANDOM_FALL_2021 = 34,
	EVENT_ID_TEAM_2021_2022_TOUR2 = 35,
	EVENT_ID_INTERNATIONAL_2022 = 36,
	EVENT_ID_TEAM_2021_2022_TOUR3 = 37,
	EVENT_ID_TEAM_INTERNATIONAL_2022 = 38,
	EVENT_ID_PERMANENT_GRANTS = 39,
	EVENT_ID_MUERTA_RELEASE_SPRING2023 = 40,
	EVENT_ID_TEAM_2023_TOUR1 = 41,
	UNRECOGNIZED = -1
}

declare enum EEventActionScoreMode
{
	k_eEventActionScoreMode_Add = 0,
	k_eEventActionScoreMode_Min = 1,
	UNRECOGNIZED = -1
}

declare interface CMsgPendingEventAward
{
	event_id: EEvent;
	action_id: number;
	num_to_grant: number;
	score_mode: EEventActionScoreMode;
	audit_action: number;
	audit_data: string;
}

declare enum EDOTAMMRBoostType
{
	k_EDOTAMMRBoostType_None = 0,
	k_EDOTAMMRBoostType_Leader = 1,
	k_EDOTAMMRBoostType_Follower = 2,
	UNRECOGNIZED = -1
}

declare interface CSODOTALobbyMember
{
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

declare enum CSODOTALobby_LobbyType
{
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

declare interface CLobbyTeamDetails
{
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

declare enum DOTA_GameState
{
	DOTA_GAMERULES_STATE_INIT = 0,
	DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD = 1,
	DOTA_GAMERULES_STATE_HERO_SELECTION = 2,
	DOTA_GAMERULES_STATE_STRATEGY_TIME = 3,
	DOTA_GAMERULES_STATE_PRE_GAME = 4,
	DOTA_GAMERULES_STATE_GAME_IN_PROGRESS = 5,
	DOTA_GAMERULES_STATE_POST_GAME = 6,
	DOTA_GAMERULES_STATE_DISCONNECT = 7,
	DOTA_GAMERULES_STATE_TEAM_SHOWCASE = 8,
	DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP = 9,
	DOTA_GAMERULES_STATE_WAIT_FOR_MAP_TO_LOAD = 10,
	DOTA_GAMERULES_STATE_SCENARIO_SETUP = 11,
	DOTA_GAMERULES_STATE_LAST = 12,
	UNRECOGNIZED = -1
}

declare enum DOTA_CM_PICK
{
	DOTA_CM_RANDOM = 0,
	DOTA_CM_GOOD_GUYS = 1,
	DOTA_CM_BAD_GUYS = 2,
	UNRECOGNIZED = -1
}

declare enum DOTABotDifficulty
{
	BOT_DIFFICULTY_PASSIVE = 0,
	BOT_DIFFICULTY_EASY = 1,
	BOT_DIFFICULTY_MEDIUM = 2,
	BOT_DIFFICULTY_HARD = 3,
	BOT_DIFFICULTY_UNFAIR = 4,
	BOT_DIFFICULTY_INVALID = 5,
	BOT_DIFFICULTY_EXTRA1 = 6,
	BOT_DIFFICULTY_EXTRA2 = 7,
	BOT_DIFFICULTY_EXTRA3 = 8,
	BOT_DIFFICULTY_NPX = 9,
	UNRECOGNIZED = -1
}

declare interface CLobbyTimedRewardDetails
{
	item_def_index: number;
	is_supply_crate: boolean;
	is_timed_drop: boolean;
	account_id: number;
	origin: number;
}

declare enum LobbyDotaTVDelay
{
	LobbyDotaTV_10 = 0,
	LobbyDotaTV_120 = 1,
	LobbyDotaTV_300 = 2,
	LobbyDotaTV_900 = 3,
	UNRECOGNIZED = -1
}

declare interface CLobbyBroadcastChannelInfo
{
	channel_id: number;
	country_code: string;
	description: string;
	language_code: string;
}

declare interface CSODOTALobby_CExtraMsg
{
	id: number;
	contents: string;
}

declare interface CDOTASaveGame
{
	match_id: string;
	save_time: number;
	players: CDOTASaveGame_Player[];
	save_instances: CDOTASaveGame_SaveInstance[];
}

declare interface CDOTASaveGame_Player
{
	team: DOTA_GC_TEAM;
	name: string;
	hero: string;
}

declare interface CDOTASaveGame_SaveInstance
{
	game_time: number;
	team1_score: number;
	team2_score: number;
	player_positions: CDOTASaveGame_SaveInstance_PlayerPositions[];
	save_id: number;
	save_time: number;
}

declare interface CDOTASaveGame_SaveInstance_PlayerPositions
{
	x: number;
	y: number;
}

declare enum EMatchOutcome
{
	k_EMatchOutcome_Unknown = 0,
	k_EMatchOutcome_RadVictory = 2,
	k_EMatchOutcome_DireVictory = 3,
	k_EMatchOutcome_NeutralVictory = 4,
	k_EMatchOutcome_NoTeamWinner = 5,
	k_EMatchOutcome_Custom1Victory = 6,
	k_EMatchOutcome_Custom2Victory = 7,
	k_EMatchOutcome_Custom3Victory = 8,
	k_EMatchOutcome_Custom4Victory = 9,
	k_EMatchOutcome_Custom5Victory = 10,
	k_EMatchOutcome_Custom6Victory = 11,
	k_EMatchOutcome_Custom7Victory = 12,
	k_EMatchOutcome_Custom8Victory = 13,
	k_EMatchOutcome_NotScored_PoorNetworkConditions = 64,
	k_EMatchOutcome_NotScored_Leaver = 65,
	k_EMatchOutcome_NotScored_ServerCrash = 66,
	k_EMatchOutcome_NotScored_NeverStarted = 67,
	k_EMatchOutcome_NotScored_Canceled = 68,
	k_EMatchOutcome_NotScored_Suspicious = 69,
	UNRECOGNIZED = -1
}

declare enum DOTALobbyVisibility
{
	DOTALobbyVisibility_Public = 0,
	DOTALobbyVisibility_Friends = 1,
	DOTALobbyVisibility_Unlisted = 2,
	UNRECOGNIZED = -1
}

declare enum LobbyDotaPauseSetting
{
	LobbyDotaPauseSetting_Unlimited = 0,
	LobbyDotaPauseSetting_Limited = 1,
	LobbyDotaPauseSetting_Disabled = 2,
	UNRECOGNIZED = -1
}

declare enum DOTASelectionPriorityRules
{
	k_DOTASelectionPriorityRules_Manual = 0,
	k_DOTASelectionPriorityRules_Automatic = 1,
	UNRECOGNIZED = -1
}

declare enum DOTASelectionPriorityChoice
{
	k_DOTASelectionPriorityChoice_Invalid = 0,
	k_DOTASelectionPriorityChoice_FirstPick = 1,
	k_DOTASelectionPriorityChoice_SecondPick = 2,
	k_DOTASelectionPriorityChoice_Radiant = 3,
	k_DOTASelectionPriorityChoice_Dire = 4,
	UNRECOGNIZED = -1
}

declare interface CLobbyGuildChallenge
{
	guild_id: number;
	event_id: EEvent;
	challenge_instance_id: number;
	challenge_parameter: number;
	challenge_timestamp: number;
	challenge_period_serial: number;
	challenge_progress_at_start: number;
	eligible_account_ids: number[];
}

declare interface CLobbyGuildDetails
{
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

declare interface CMsgLobbyEventPoints_PeriodicResourceData
{
	periodic_resource_id: number;
	remaining: number;
	max: number;
}

declare interface CMsgLobbyEventPoints_NetworkedEventAction
{
	action_id: number;
	times_granted: number;
}

declare interface CMsgLobbyEventPoints_AccountPoints
{
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

declare interface CMsgLobbyEventPoints
{
	event_id: number;
	account_points: CMsgLobbyEventPoints_AccountPoints[];
}

declare enum ELobbyMemberCoachRequestState
{
	k_eLobbyMemberCoachRequestState_None = 0,
	k_eLobbyMemberCoachRequestState_Accepted = 1,
	k_eLobbyMemberCoachRequestState_Rejected = 2,
	UNRECOGNIZED = -1
}

declare interface CMsgLobbyCoachFriendRequest
{
	coach_account_id: number;
	player_account_id: number;
	request_state: ELobbyMemberCoachRequestState;
}

declare interface CSODOTALobby
{
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

declare enum CSODOTALobby_State
{
	UI = 0,
	READYUP = 4,
	SERVERSETUP = 1,
	RUN = 2,
	POSTGAME = 3,
	NOTREADY = 5,
	SERVERASSIGN = 6,
	UNRECOGNIZED = -1
}

declare namespace Matchmaking
{
	function GetGameModes(): number;

	function SetGameModes(val: number): void;

	function GetCompetitiveGameModes(): number;

	function SetCompetitiveGameModes(val: number): void;

	function GetMatchType(): Enum.MatchType;

	function SetMatchType(val: Enum.MatchType): void;

	function GetMatchLanguages(): number;

	function SetMatchLanguages(val: number): void;

	function GetBotDifficultyMask(): number;

	function SetBotDifficultyMask(val: number): void;

	function GetRankedRoleQueue(): boolean;

	function SetRankedRoleQueue(val: boolean): void;

	function GetBotScriptIndexMask(): number;

	function SetBotScriptIndexMask(val: number): void;

	function GetRegionSelectionFlags(): Enum.MatchGroup;

	function SetRegionSelectionFlags(val: Enum.MatchGroup): void;

	function GetLaneSelectionFlags(): Enum.LaneSelectionFlags;

	function SetLaneSelectionFlags(val: Enum.LaneSelectionFlags): void;

	function SetCustomGameDifficultyMask(val: number): void;

	function GetCustomGameDifficultyMask(): number;

	function GetFindMatchData(): CMsgStartFindingMatch;

	function FindMatch(skipPingMenu?: boolean): void;

	function StopFindingMatch(): void;

	function JoinLobby(id: bigint, pass?: string, callback?: (response: object) => void): void;

	function CreateLobby(data: MatchmakingLobbyData): void;

	function LaunchLobby(): void;

	function GetLobbyList(callback: (response: CMsgLobbyListResponse) => void, server_region?: number, game_mode?: number): void;

	function GetFriendLobbyList(callback: (response: CMsgFriendPracticeLobbyListResponse) => void, friends: number[]): void;

	function GetMatchmakingStats(callback: (response: CMsgDOTAMatchmakingStatsResponse) => void): void;

	function SetMatchLanguages(val: number): void;

	function Reconnect(): void;

	function InviteToParty(steamID: bigint): void;

	function AcceptParty(groupID: bigint): void;

	function RejectParty(groupID: bigint): void;

	function GetAccountData(): CSODOTAGameAccountClient | null;

	function GetAccountPlusData(): CSODOTAGameAccountPlus | null;

	function GetPartyData(): CSODOTAParty | null;

	function GetLobbyData(): CSODOTALobby | null;
}