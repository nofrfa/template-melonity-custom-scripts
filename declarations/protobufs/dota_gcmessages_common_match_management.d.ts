import { DOTA_GameState, ETourneyQueueDeadlineState, MatchType } from "./dota_shared_enums";
export declare const protobufPackage = "";
export declare enum ELaneSelection {
    k_ELaneSelection_SAFELANE = 0,
    k_ELaneSelection_OFFLANE = 1,
    k_ELaneSelection_MIDLANE = 2,
    k_ELaneSelection_SUPPORT_SOFT = 3,
    k_ELaneSelection_SUPPORT_HARD = 4,
    UNRECOGNIZED = -1
}
export declare function eLaneSelectionFromJSON(object: any): ELaneSelection;
export declare function eLaneSelectionToJSON(object: ELaneSelection): string;
export declare enum ELaneSelectionFlags {
    k_ELaneSelectionFlags_None = 0,
    k_ELaneSelectionFlags_SAFELANE = 1,
    k_ELaneSelectionFlags_OFFLANE = 2,
    k_ELaneSelectionFlags_MIDLANE = 4,
    k_ELaneSelectionFlags_SUPPORT_SOFT = 8,
    k_ELaneSelectionFlags_SUPPORT_HARD = 16,
    k_ELaneSelectionFlags_CORE = 7,
    k_ELaneSelectionFlags_SUPPORT = 24,
    k_ELaneSelectionFlags_ALL = 31,
    UNRECOGNIZED = -1
}
export declare function eLaneSelectionFlagsFromJSON(object: any): ELaneSelectionFlags;
export declare function eLaneSelectionFlagsToJSON(object: ELaneSelectionFlags): string;
export declare enum EPartyMatchmakingFlags {
    k_EPartyMatchmakingFlags_None = 0,
    k_EPartyMatchmakingFlags_LargeRankSpread = 1,
    UNRECOGNIZED = -1
}
export declare function ePartyMatchmakingFlagsFromJSON(object: any): EPartyMatchmakingFlags;
export declare function ePartyMatchmakingFlagsToJSON(object: EPartyMatchmakingFlags): string;
export declare enum EHighPriorityMMState {
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
export declare function eHighPriorityMMStateFromJSON(object: any): EHighPriorityMMState;
export declare function eHighPriorityMMStateToJSON(object: EHighPriorityMMState): string;
export declare enum EReadyCheckStatus {
    k_EReadyCheckStatus_Unknown = 0,
    k_EReadyCheckStatus_NotReady = 1,
    k_EReadyCheckStatus_Ready = 2,
    UNRECOGNIZED = -1
}
export declare function eReadyCheckStatusFromJSON(object: any): EReadyCheckStatus;
export declare function eReadyCheckStatusToJSON(object: EReadyCheckStatus): string;
export declare enum EReadyCheckRequestResult {
    k_EReadyCheckRequestResult_Success = 0,
    k_EReadyCheckRequestResult_AlreadyInProgress = 1,
    k_EReadyCheckRequestResult_NotInParty = 2,
    k_EReadyCheckRequestResult_SendError = 3,
    k_EReadyCheckRequestResult_UnknownError = 4,
    UNRECOGNIZED = -1
}
export declare function eReadyCheckRequestResultFromJSON(object: any): EReadyCheckRequestResult;
export declare function eReadyCheckRequestResultToJSON(object: EReadyCheckRequestResult): string;
export declare enum EMatchBehaviorScoreVariance {
    k_EMatchBehaviorScoreVariance_Invalid = 0,
    k_EMatchBehaviorScoreVariance_Low = 1,
    k_EMatchBehaviorScoreVariance_Medium = 2,
    k_EMatchBehaviorScoreVariance_High = 3,
    UNRECOGNIZED = -1
}
export declare function eMatchBehaviorScoreVarianceFromJSON(object: any): EMatchBehaviorScoreVariance;
export declare function eMatchBehaviorScoreVarianceToJSON(object: EMatchBehaviorScoreVariance): string;
export interface CSODOTAPartyMember {
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
export interface CSODOTAParty {
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
export declare enum CSODOTAParty_State {
    UI = 0,
    FINDING_MATCH = 1,
    IN_MATCH = 2,
    UNRECOGNIZED = -1
}
export declare function cSODOTAParty_StateFromJSON(object: any): CSODOTAParty_State;
export declare function cSODOTAParty_StateToJSON(object: CSODOTAParty_State): string;
export interface CSODOTAPartyInvite {
    group_id: string;
    sender_id: string;
    sender_name: string;
    members: CSODOTAPartyInvite_PartyMember[];
    team_id: number;
    low_priority_status: boolean;
    as_coach: boolean;
    invite_gid: string;
}
export interface CSODOTAPartyInvite_PartyMember {
    name: string;
    steam_id: string;
    is_coach: boolean;
}
export interface CMsgLeaverState {
    lobby_state: number;
    game_state: DOTA_GameState;
    leaver_detected: boolean;
    first_blood_happened: boolean;
    discard_match_results: boolean;
    mass_disconnect: boolean;
}
export interface CMsgReadyCheckStatus {
    start_timestamp: number;
    finish_timestamp: number;
    initiator_account_id: number;
    ready_members: CMsgReadyCheckStatus_ReadyMember[];
}
export interface CMsgReadyCheckStatus_ReadyMember {
    account_id: number;
    ready_status: EReadyCheckStatus;
}
export interface CMsgPartyReadyCheckRequest {
}
export interface CMsgPartyReadyCheckResponse {
    result: EReadyCheckRequestResult;
}
export interface CMsgPartyReadyCheckAcknowledge {
    ready_status: EReadyCheckStatus;
}
export interface CMsgLobbyEventGameDetails {
    kv_data: string;
}
export interface CMsgMatchMatchmakingStats {
    average_queue_time: number;
    maximum_queue_time: number;
    behavior_score_variance: EMatchBehaviorScoreVariance;
}
export interface CMvpData {
    mvps: CMvpData_MvpDatum[];
}
export interface CMvpData_MvpDatum {
    player_slot: number;
    accolades: CMvpData_MvpDatum_MvpAccolade[];
}
export interface CMvpData_MvpDatum_MvpAccolade {
    type: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
    detail_value: number;
}
export declare enum CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType {
    kills = 1,
    deaths = 2,
    assists = 3,
    net_worth = 5,
    item_value = 6,
    support_gold_spent = 7,
    wards_placed = 8,
    dewards = 9,
    camps_stacked = 10,
    last_hits = 11,
    denies = 12,
    kKillEaterEvent_Killing_Sprees = 13,
    kKillEaterEvent_Godlike = 14,
    kKillEaterEvent_Towers_Destroyed = 15,
    kKillEaterEventType_Invoker_SunstrikeKills = 16,
    kKillEaterEventType_Axe_Culls = 17,
    kKillEaterEventType_Axe_BattleHungerKills = 18,
    kKillEaterEventType_LowHealthKills = 19,
    kKillEaterEventType_Invoker_TornadoKills = 20,
    kKillEaterEventType_Sven_DoubleStuns = 21,
    kKillEaterEventType_Sven_WarcryAssists = 22,
    kKillEaterEventType_Sven_CleaveDoubleKills = 23,
    kKillEaterEventType_Sven_TeleportInterrupts = 24,
    kKillEaterEventType_Faceless_MultiChrono = 25,
    kKillEaterEventType_Faceless_ChronoKills = 26,
    kKillEaterEventType_Ursa_MultiShocks = 27,
    kKillEaterEventType_RoshanKills = 28,
    kKillEaterEventType_Lion_FingerKills = 29,
    kKillEaterEventType_Riki_SmokedHeroKills = 32,
    kKillEaterEventType_HeroesRevealedWithDust = 33,
    kKillEaterEventType_SkeletonKing_ReincarnationKills = 34,
    kKillEaterEventType_Skywrath_FlareKills = 35,
    kKillEaterEventType_Leshrac_SplitEarthStuns = 36,
    kKillEaterEventType_Mirana_MaxStunArrows = 37,
    kKillEaterEventType_PhantomAssassin_CoupdeGraceCrits = 38,
    kKillEaterEventType_PhantomAssassin_DaggerCrits = 39,
    kKillEaterEventType_Meepo_Earthbinds = 40,
    kKillEaterEventType_Bloodseeker_RuptureKills = 41,
    kKillEaterEventType_Slark_LeashedEnemies = 42,
    kKillEaterEventType_Disruptor_FountainGlimpses = 43,
    kKillEaterEventType_Rubick_SpellsStolen = 44,
    kKillEaterEventType_Rubick_UltimatesStolen = 45,
    kKillEaterEventType_Doom_EnemiesDoomed = 46,
    kKillEaterEventType_Omniknight_Purifications = 47,
    kKillEaterEventType_Omniknight_AlliesRepelled = 48,
    kKillEaterEventType_Omniknight_EnemiesRepelled = 49,
    kKillEaterEventType_Warlock_FiveHeroFatalBonds = 50,
    kKillEaterEventType_CrystalMaiden_FrostbittenEnemies = 51,
    kKillEaterEventType_CrystalMaiden_CrystalNovas = 52,
    kKillEaterEventType_Kunkka_DoubleHeroTorrents = 53,
    kKillEaterEventType_Kunkka_TripleHeroGhostShips = 54,
    kKillEaterEventType_NagaSiren_EnemiesEnsnared = 55,
    kKillEaterEventType_NagaSiren_TripleHeroRipTides = 56,
    kKillEaterEventType_Lycan_KillsDuringShapeshift = 57,
    kKillEaterEventType_Pudge_DismemberKills = 58,
    kKillEaterEventType_Pudge_EnemyHeroesHooked = 59,
    kKillEaterEventType_Pudge_HookKills = 60,
    kKillEaterEventType_Pudge_UnseenEnemyHeroesHooked = 61,
    kKillEaterEventType_DrowRanger_EnemiesSilenced = 62,
    kKillEaterEventType_DrowRanger_MultiHeroSilences = 63,
    kKillEaterEventType_DrowRanger_SilencedKills = 64,
    kKillEaterEventType_DrowRanger_FrostArrowKills = 65,
    kKillEaterEventType_DragonKnight_KillsInDragonForm = 66,
    kKillEaterEventType_DragonKnight_BreatheFireKills = 67,
    kKillEaterEventType_DragonKnight_SplashKills = 68,
    kKillEaterEventType_WitchDoctor_CaskStuns = 69,
    kKillEaterEventType_WitchDoctor_MaledictKills = 70,
    kKillEaterEventType_WitchDoctor_MultiHeroMaledicts = 71,
    kKillEaterEventType_WitchDoctor_DeathWardKills = 72,
    kKillEaterEventType_Disruptor_ThunderStrikeKills = 73,
    kKillEaterEventType_Disruptor_HeroesGlimpsed = 74,
    kKillEaterEventType_CrystalMaiden_FreezingFieldKills = 75,
    kKillEaterEventType_Medusa_EnemiesPetrified = 77,
    kKillEaterEventType_Warlock_FatalBondsKills = 78,
    kKillEaterEventType_Warlock_GolemKills = 79,
    kKillEaterEventType_Tusk_WalrusPunches = 80,
    kKillEaterEventType_Tusk_SnowballStuns = 81,
    kKillEaterEventType_Earthshaker_FissureStuns = 82,
    kKillEaterEventType_Earthshaker_3HeroEchoslams = 83,
    kKillEaterEventType_SandKing_BurrowstrikeStuns = 84,
    kKillEaterEventType_SandKing_EpicenterKills = 85,
    kKillEaterEventType_SkywrathMage_AncientSealKills = 86,
    kKillEaterEventType_SkywrathMage_ConcussiveShotKills = 87,
    kKillEaterEventType_Luna_LucentBeamKills = 88,
    kKillEaterEventType_Luna_EclipseKills = 89,
    kKillEaterEventType_KeeperOfTheLight_IlluminateKills = 90,
    kKillEaterEventType_KeeperOfTheLight_ManaLeakStuns = 91,
    kKillEaterEventType_KeeperOfTheLight_TeammatesRecalled = 92,
    kKillEaterEventType_LegionCommander_DuelsWon = 93,
    kKillEaterEventType_Beastmaster_RoarKills = 94,
    kKillEaterEventType_Beastmaster_RoarMultiKills = 95,
    kKillEaterEventType_Windrunner_FocusFireBuildings = 96,
    kKillEaterEventType_Windrunner_PowershotKills = 97,
    kKillEaterEventType_PhantomAssassin_DaggerLastHits = 98,
    kKillEaterEventType_PhantomAssassin_PhantomStrikeKills = 99,
    kKillEaterEventType_DeathProphet_CryptSwarmKills = 100,
    kKillEaterEventType_DeathProphet_ExorcismBuildingKills = 101,
    kKillEaterEventType_DeathProphet_ExorcismSpiritsSummoned = 102,
    kKillEaterEventType_DeathProphet_MultiHeroSilences = 103,
    kKillEaterEventType_Abaddon_MistCoilKills = 104,
    kKillEaterEventType_Abaddon_MistCoilHealed = 105,
    kKillEaterEventType_Abaddon_AphoticShieldKills = 106,
    kKillEaterEventType_Lich_ChainFrostTripleKills = 107,
    kKillEaterEventType_Lich_ChainFrostMultiKills = 108,
    kKillEaterEventType_Lich_ChainFrostBounces = 109,
    kKillEaterEventType_Ursa_EnragedKills = 110,
    kKillEaterEventType_Ursa_EarthshockKills = 111,
    kKillEaterEventType_Lina_LagunaBladeKills = 112,
    kKillEaterEventType_Lina_DragonSlaveKills = 113,
    kKillEaterEventType_Lina_LightStrikeArrayStuns = 114,
    kKillEaterEvent_Barracks_Destroyed = 115,
    kKillEaterEvent_TemplarAssassin_MeldKills = 116,
    kKillEaterEvent_TemplarAssassin_HeroesSlowed = 117,
    kKillEaterEvent_Sniper_AssassinationKills = 118,
    kKillEaterEvent_Sniper_HeadshotStuns = 119,
    kKillEaterEvent_EarthSpirit_SmashStuns = 120,
    kKillEaterEvent_EarthSpirit_GripSilences = 121,
    kKillEaterEvent_ShadowShaman_ShackleKills = 122,
    kKillEaterEvent_ShadowShaman_HexKills = 123,
    kKillEaterEvent_Centaur_EnemiesStomped = 124,
    kKillEaterEvent_Centaur_DoubleEdgeKills = 125,
    kKillEaterEvent_Centaur_ReturnKills = 126,
    kKillEaterEvent_EmberSpirit_EnemiesChained = 127,
    kKillEaterEvent_EmberSpirit_SleightOfFistMultiKills = 128,
    kKillEaterEvent_Puck_OrbKills = 129,
    kKillEaterEvent_VengefulSpirit_EnemiesStunned = 130,
    kKillEaterEvent_Lifestealer_RageKills = 131,
    kKillEaterEvent_Lifestealer_OpenWoundsKills = 132,
    kKillEaterEvent_Lifestealer_InfestKills = 133,
    kKillEaterEvent_ElderTitan_SpiritKills = 134,
    kKillEaterEvent_ElderTitan_GoodStomps = 135,
    kKillEaterEvent_Clockwerk_RocketKills = 136,
    kKillEaterEvent_Clockwerk_BlindRocketKills = 137,
    kKillEaterEvent_StormSpirit_BallKills = 138,
    kKillEaterEvent_StormSpirit_DoubleRemnantKills = 139,
    kKillEaterEvent_StormSpirit_VortexKills = 140,
    kKillEaterEvent_Tinker_DoubleMissileKills = 141,
    kKillEaterEvent_Tinker_LaserKills = 142,
    kKillEaterEvent_Techies_SuicideKills = 143,
    kKillEaterEvent_Techies_LandMineKills = 144,
    kKillEaterEvent_Techies_StatisTrapStuns = 145,
    kKillEaterEvent_Techies_RemoteMineKills = 146,
    kKillEaterEvent_ShadowFiend_TripleRazeKills = 147,
    kKillEaterEvent_ShadowFiend_RequiemMultiKills = 148,
    kKillEaterEvent_ShadowFiend_QRazeKills = 149,
    kKillEaterEvent_ShadowFiend_WRazeKills = 150,
    kKillEaterEvent_ShadowFiend_ERazeKills = 151,
    kKillEaterEvent_Oracle_FatesEdictKills = 152,
    kKillEaterEvent_Oracle_FalsePromiseSaves = 153,
    kKillEaterEvent_Juggernaut_OmnislashKills = 154,
    kKillEaterEventType_SkeletonKing_SkeletonHeroKills = 157,
    kKillEaterEventType_DarkWillow_CursedCrownTripleStuns = 158,
    kKillEaterEventType_Dazzle_ShallowGraveSaves = 159,
    kKillEaterEventType_Dazzle_PoisonTouchKills = 160,
    kKillEaterEventType_ThreeManMeks = 161,
    kKillEaterEventType_Viper_PoisonAttackKills = 162,
    kKillEaterEventType_Viper_CorrosiveSkinKills = 163,
    kKillEaterEventType_ThreeHeroVeils = 164,
    kKillEaterEventType_Viper_KillsDuringViperStrike = 165,
    kKillEaterEventType_SolarCrestKills = 166,
    kKillEaterEventType_Tiny_TreeThrowKills = 167,
    kKillEaterEventType_Riki_BackstabKills = 168,
    kKillEaterEventType_Phoenix_ThreeHeroSupernovaStuns = 169,
    kKillEaterEventType_Terrorblade_MetamorphosisKills = 170,
    kKillEaterEventType_Lion_GreatFingerKills = 171,
    kKillEaterEventType_Antimage_SpellsBlockedWithAghanims = 172,
    kKillEaterEventType_Antimage_ThreeManManaVoids = 173,
    kKillEaterEventType_ArcWarden_TempestDoubleKills = 174,
    kKillEaterEventType_ArcWarden_SparkWraithKills = 175,
    kKillEaterEventType_Bane_BrainSapKills = 176,
    kKillEaterEventType_Bane_FiendsGripKills = 177,
    kKillEaterEventType_Batrider_TripleHeroFlamebreaks = 178,
    kKillEaterEventType_Batrider_DoubleHeroLassoes = 179,
    kKillEaterEventType_Brewmaster_KillsDuringPrimalSplit = 180,
    kKillEaterEventType_Bristleback_KillsUnderFourQuillStacks = 181,
    kKillEaterEventType_Bristleback_TripleHeroNasalGoo = 182,
    kKillEaterEventType_Broodmother_SpiderlingHeroKills = 183,
    kKillEaterEventType_Broodmother_KillsInsideWeb = 184,
    kKillEaterEventType_Centaur_ThreeHeroStampede = 185,
    kKillEaterEventType_ChaosKnight_RealityRiftKills = 186,
    kKillEaterEventType_Chen_KillsWithPenitence = 187,
    kKillEaterEventType_CrystalMaiden_TwoHeroCrystalNovas = 188,
    kKillEaterEventType_CrystalMaiden_ThreeHeroFreezingFields = 189,
    kKillEaterEventType_Dazzle_ShadowWaveKills = 190,
    kKillEaterEventType_DeathProphet_SiphonKills = 191,
    kKillEaterEventType_DeathProphet_ExorcismKillsDuringEuls = 192,
    kKillEaterEventType_Disruptor_ThreeHeroKineticFieldStaticStorm = 193,
    kKillEaterEventType_Doom_InfernalBladeBurnKills = 194,
    kKillEaterEventType_DrowRanger_PrecisionAuraCreepTowerKills = 195,
    kKillEaterEventType_EmberSpirit_RemnantKills = 196,
    kKillEaterEventType_EmberSpirit_SleightOfFistKills = 197,
    kKillEaterEventType_Enigma_MidnightPulseBlackHoleCombos = 198,
    kKillEaterEventType_Enigma_ThreeManBlackHoles = 199,
    kKillEaterEventType_FacelessVoid_MultiHeroTimeDilation = 200,
    kKillEaterEventType_Gyrocopter_ThreeHeroFlakCannon = 201,
    kKillEaterEventType_Gyrocopter_HomingMissileKills = 202,
    kKillEaterEventType_Gyrocopter_RocketBarrageKills = 203,
    kKillEaterEventType_Huskar_KillsDuringLifeBreak = 204,
    kKillEaterEventType_Huskar_BurningSpearKills = 205,
    kKillEaterEventType_Invoker_MultiHeroIceWall = 206,
    kKillEaterEventType_Invoker_ThreeHeroEMP = 207,
    kKillEaterEventType_Invoker_ThreeHeroDeafeningBlast = 208,
    kKillEaterEventType_Invoker_MultiHeroChaosMeteor = 209,
    kKillEaterEventType_Jakiro_MultiHeroDualBreath = 210,
    kKillEaterEventType_Jakiro_IcePathMacropyreCombos = 211,
    kKillEaterEventType_Leshrac_PulseNovaKills = 212,
    kKillEaterEventType_Leshrac_ThreeHeroLightningStorm = 213,
    kKillEaterEventType_Lion_ThreeHeroFingerOfDeath = 214,
    kKillEaterEventType_Meepo_PoofKills = 215,
    kKillEaterEventType_Meepo_MultiHeroEarthbinds = 216,
    kKillEaterEventType_NightStalker_NighttimeKills = 217,
    kKillEaterEventType_Morphling_KillsDuringReplicate = 218,
    kKillEaterEventType_OgreMagi_FireblastKills = 219,
    kKillEaterEventType_OgreMagi_IgniteKills = 220,
    kKillEaterEventType_DominatingKillStreaks = 221,
    kKillEaterEventType_MegaKillStreaks = 222,
    kKillEaterEventType_Alchemist_AghanimsGiven = 223,
    kKillEaterEventType_VeilsLeadingToKills = 224,
    kKillEaterEventType_DustLeadingToKills = 225,
    kKillEaterEventType_WitchDoctor_MultiHeroCaskStuns = 226,
    kKillEaterEventType_Weaver_ShukuchiKills = 227,
    kKillEaterEventType_Windrunner_ShackleFocusFireKills = 228,
    kKillEaterEventType_VengefulSpirit_VengeanceAuraIllusionKills = 229,
    kKillEaterEventType_Tusk_WalrusPunchKills = 230,
    kKillEaterEventType_Tinker_MultiHeroLasers = 231,
    kKillEaterEventType_TemplarAssassin_MultiHeroPsiBlades = 232,
    kKillEaterEventType_Sven_KillsDuringGodsStrength = 233,
    kKillEaterEventType_Sniper_ThreeHeroShrapnels = 234,
    kKillEaterEventType_Slark_KillsDuringShadowDance = 235,
    kKillEaterEventType_ShadowShaman_MultiHeroEtherShocks = 236,
    kKillEaterEventType_ShadowShaman_SerpentWardShackleKills = 237,
    kKillEaterEventType_Riki_ThreeHeroTricksOfTheTrade = 238,
    kKillEaterEventType_Razor_EyeOfTheStormKills = 239,
    kKillEaterEventType_Pugna_LifeDrainKills = 240,
    kKillEaterEventType_ObsidianDestroyer_SanitysEclipseKills = 241,
    kKillEaterEventType_Oracle_MultiHeroFortunesEnd = 242,
    kKillEaterEventType_Omniknight_PurificationKills = 243,
    kKillEaterEventType_NightStalker_EnemyMissesUnderCripplingFear = 244,
    kKillEaterEventType_Warlock_ThreeHeroFatalBonds = 245,
    kKillEaterEventType_Riki_TricksOfTheTradeKills = 246,
    kKillEaterEventType_Earthshaker_AftershockHits10 = 247,
    kKillEaterEventType_Earthshaker_5HeroEchoslams = 248,
    kKillEaterEventType_Lina_LagunaBladeHeroKills = 249,
    kKillEaterEventType_Lina_LightStrikeHeroStuns = 250,
    kKillEaterEventType_Earthshaker_FissureMultiStuns = 251,
    kKillEaterEventType_Earthshaker_TotemKills = 252,
    kKillEaterEventType_Pangolier_SwashbuckleKills = 253,
    kKillEaterEventType_Furion_EnemyHeroesTrapped = 254,
    kKillEaterEventType_Pangolier_HeartpiercerKills = 255,
    kKillEaterEventType_Medusa_MultiHeroStoneGaze = 256,
    kKillEaterEventType_Medusa_SplitShotKills = 257,
    kKillEaterEventType_Mirana_MultiHeroStarstorm = 258,
    kKillEaterEventType_Mirana_KillsFromMoonlightShadow = 259,
    kKillEaterEventType_Magnus_MultiHeroSkewers = 260,
    kKillEaterEventType_Magnus_MultiHeroReversePolarity = 261,
    kKillEaterEventType_Magnus_HeroesSlowedWithShockwave = 262,
    kKillEaterEventType_NagaSiren_MultiHeroSong = 263,
    kKillEaterEventType_NagaSiren_AlliesHealedBySong = 264,
    kKillEaterEventType_LoneDruid_MultiHeroRoar = 265,
    kKillEaterEventType_LoneDruid_BattleCryKills = 266,
    kKillEaterEventType_WinterWyvern_ThreeHeroCurses = 267,
    kKillEaterEventType_Antimage_SpellsBlockedWithCounterspell = 268,
    kKillEaterEventType_Mars_EnemiesKilledInArena = 269,
    kKillEaterEventType_Mars_MultiHeroGodsRebuke = 270,
    kKillEaterEventType_Mars_GodsRebukeKills = 271,
    kKillEaterEventType_Snapfire_LizardBlobsKills = 272,
    kKillEaterEventType_Snapfire_TwoHeroCookieStuns = 273,
    Custom_KillStreak = 274,
    kKillEaterEventType_Muerta_DeadShotKills = 275,
    kKillEaterEventType_Muerta_PierceTheVeilKills = 276,
    kKillEaterEventType_Muerta_MultiHeroDeadShot = 277,
    kKillEaterEventType_Muerta_DeadShotsIntoTheCalling = 278,
    UNRECOGNIZED = -1
}
export declare function cMvpData_MvpDatum_MvpAccolade_MvpAccoladeTypeFromJSON(object: any): CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
export declare function cMvpData_MvpDatum_MvpAccolade_MvpAccoladeTypeToJSON(object: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType): string;
export declare const CSODOTAPartyMember: {
    fromJSON(object: any): CSODOTAPartyMember;
    toJSON(message: CSODOTAPartyMember): unknown;
    create<I extends {
        is_coach?: boolean;
        region_ping_codes?: number[];
        region_ping_times?: number[];
        region_ping_failed_bitmask?: number;
        is_plus_subscriber?: boolean;
        tourney_skill_level?: number;
        tourney_buyin?: number;
        tourney_prevent_until?: number;
        mm_data_valid?: boolean;
        lane_selection_flags?: number;
        high_priority_disabled?: boolean;
        has_hp_resource?: boolean;
        joined_from_partyfinder?: boolean;
        is_steam_china?: boolean;
    } & {
        is_coach?: boolean;
        region_ping_codes?: number[] & number[] & { [K in Exclude<keyof I["region_ping_codes"], keyof number[]>]: never; };
        region_ping_times?: number[] & number[] & { [K_1 in Exclude<keyof I["region_ping_times"], keyof number[]>]: never; };
        region_ping_failed_bitmask?: number;
        is_plus_subscriber?: boolean;
        tourney_skill_level?: number;
        tourney_buyin?: number;
        tourney_prevent_until?: number;
        mm_data_valid?: boolean;
        lane_selection_flags?: number;
        high_priority_disabled?: boolean;
        has_hp_resource?: boolean;
        joined_from_partyfinder?: boolean;
        is_steam_china?: boolean;
    } & { [K_2 in Exclude<keyof I, keyof CSODOTAPartyMember>]: never; }>(base?: I): CSODOTAPartyMember;
    fromPartial<I_1 extends {
        is_coach?: boolean;
        region_ping_codes?: number[];
        region_ping_times?: number[];
        region_ping_failed_bitmask?: number;
        is_plus_subscriber?: boolean;
        tourney_skill_level?: number;
        tourney_buyin?: number;
        tourney_prevent_until?: number;
        mm_data_valid?: boolean;
        lane_selection_flags?: number;
        high_priority_disabled?: boolean;
        has_hp_resource?: boolean;
        joined_from_partyfinder?: boolean;
        is_steam_china?: boolean;
    } & {
        is_coach?: boolean;
        region_ping_codes?: number[] & number[] & { [K_3 in Exclude<keyof I_1["region_ping_codes"], keyof number[]>]: never; };
        region_ping_times?: number[] & number[] & { [K_4 in Exclude<keyof I_1["region_ping_times"], keyof number[]>]: never; };
        region_ping_failed_bitmask?: number;
        is_plus_subscriber?: boolean;
        tourney_skill_level?: number;
        tourney_buyin?: number;
        tourney_prevent_until?: number;
        mm_data_valid?: boolean;
        lane_selection_flags?: number;
        high_priority_disabled?: boolean;
        has_hp_resource?: boolean;
        joined_from_partyfinder?: boolean;
        is_steam_china?: boolean;
    } & { [K_5 in Exclude<keyof I_1, keyof CSODOTAPartyMember>]: never; }>(object: I_1): CSODOTAPartyMember;
};
export declare const CSODOTAParty: {
    fromJSON(object: any): CSODOTAParty;
    toJSON(message: CSODOTAParty): unknown;
    create<I extends {
        party_id?: string;
        leader_id?: string;
        member_ids?: string[];
        game_modes?: number;
        state?: CSODOTAParty_State;
        effective_started_matchmaking_time?: number;
        raw_started_matchmaking_time?: number;
        attempt_start_time?: number;
        attempt_num?: number;
        matchgroups?: number;
        low_priority_account_id?: number;
        match_type?: MatchType;
        team_id?: number;
        team_name?: string;
        team_ui_logo?: string;
        team_base_logo?: string;
        match_disabled_until_date?: number;
        match_disabled_account_id?: number;
        matchmaking_max_range_minutes?: number;
        matchlanguages?: number;
        members?: {
            is_coach?: boolean;
            region_ping_codes?: number[];
            region_ping_times?: number[];
            region_ping_failed_bitmask?: number;
            is_plus_subscriber?: boolean;
            tourney_skill_level?: number;
            tourney_buyin?: number;
            tourney_prevent_until?: number;
            mm_data_valid?: boolean;
            lane_selection_flags?: number;
            high_priority_disabled?: boolean;
            has_hp_resource?: boolean;
            joined_from_partyfinder?: boolean;
            is_steam_china?: boolean;
        }[];
        low_priority_games_remaining?: number;
        open_for_join_requests?: boolean;
        sent_invites?: {
            group_id?: string;
            sender_id?: string;
            sender_name?: string;
            members?: {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[];
            team_id?: number;
            low_priority_status?: boolean;
            as_coach?: boolean;
            invite_gid?: string;
        }[];
        recv_invites?: {
            group_id?: string;
            sender_id?: string;
            sender_name?: string;
            members?: {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[];
            team_id?: number;
            low_priority_status?: boolean;
            as_coach?: boolean;
            invite_gid?: string;
        }[];
        account_flags?: number;
        region_select_flags?: number;
        exclusive_tournament_id?: number;
        tourney_division_id?: number;
        tourney_schedule_time?: number;
        tourney_skill_level?: number;
        tourney_bracket_round?: number;
        tourney_queue_deadline_time?: number;
        tourney_queue_deadline_state?: ETourneyQueueDeadlineState;
        party_builder_slots_to_fill?: number;
        party_builder_match_groups?: number;
        party_builder_start_time?: number;
        solo_queue?: boolean;
        steam_clan_account_id?: number;
        ready_check?: {
            start_timestamp?: number;
            finish_timestamp?: number;
            initiator_account_id?: number;
            ready_members?: {
                account_id?: number;
                ready_status?: EReadyCheckStatus;
            }[];
        };
        custom_game_disabled_until_date?: number;
        custom_game_disabled_account_id?: number;
        is_challenge_match?: boolean;
        party_search_beacon_active?: boolean;
        matchmaking_flags?: number;
        high_priority_state?: EHighPriorityMMState;
        lane_selections_enabled?: boolean;
        custom_game_difficulty_mask?: number;
        is_steam_china?: boolean;
        bot_difficulty_mask?: number;
        bot_script_index_mask?: number;
    } & {
        party_id?: string;
        leader_id?: string;
        member_ids?: string[] & string[] & { [K in Exclude<keyof I["member_ids"], keyof string[]>]: never; };
        game_modes?: number;
        state?: CSODOTAParty_State;
        effective_started_matchmaking_time?: number;
        raw_started_matchmaking_time?: number;
        attempt_start_time?: number;
        attempt_num?: number;
        matchgroups?: number;
        low_priority_account_id?: number;
        match_type?: MatchType;
        team_id?: number;
        team_name?: string;
        team_ui_logo?: string;
        team_base_logo?: string;
        match_disabled_until_date?: number;
        match_disabled_account_id?: number;
        matchmaking_max_range_minutes?: number;
        matchlanguages?: number;
        members?: {
            is_coach?: boolean;
            region_ping_codes?: number[];
            region_ping_times?: number[];
            region_ping_failed_bitmask?: number;
            is_plus_subscriber?: boolean;
            tourney_skill_level?: number;
            tourney_buyin?: number;
            tourney_prevent_until?: number;
            mm_data_valid?: boolean;
            lane_selection_flags?: number;
            high_priority_disabled?: boolean;
            has_hp_resource?: boolean;
            joined_from_partyfinder?: boolean;
            is_steam_china?: boolean;
        }[] & ({
            is_coach?: boolean;
            region_ping_codes?: number[];
            region_ping_times?: number[];
            region_ping_failed_bitmask?: number;
            is_plus_subscriber?: boolean;
            tourney_skill_level?: number;
            tourney_buyin?: number;
            tourney_prevent_until?: number;
            mm_data_valid?: boolean;
            lane_selection_flags?: number;
            high_priority_disabled?: boolean;
            has_hp_resource?: boolean;
            joined_from_partyfinder?: boolean;
            is_steam_china?: boolean;
        } & {
            is_coach?: boolean;
            region_ping_codes?: number[] & number[] & { [K_1 in Exclude<keyof I["members"][number]["region_ping_codes"], keyof number[]>]: never; };
            region_ping_times?: number[] & number[] & { [K_2 in Exclude<keyof I["members"][number]["region_ping_times"], keyof number[]>]: never; };
            region_ping_failed_bitmask?: number;
            is_plus_subscriber?: boolean;
            tourney_skill_level?: number;
            tourney_buyin?: number;
            tourney_prevent_until?: number;
            mm_data_valid?: boolean;
            lane_selection_flags?: number;
            high_priority_disabled?: boolean;
            has_hp_resource?: boolean;
            joined_from_partyfinder?: boolean;
            is_steam_china?: boolean;
        } & { [K_3 in Exclude<keyof I["members"][number], keyof CSODOTAPartyMember>]: never; })[] & { [K_4 in Exclude<keyof I["members"], keyof {
            is_coach?: boolean;
            region_ping_codes?: number[];
            region_ping_times?: number[];
            region_ping_failed_bitmask?: number;
            is_plus_subscriber?: boolean;
            tourney_skill_level?: number;
            tourney_buyin?: number;
            tourney_prevent_until?: number;
            mm_data_valid?: boolean;
            lane_selection_flags?: number;
            high_priority_disabled?: boolean;
            has_hp_resource?: boolean;
            joined_from_partyfinder?: boolean;
            is_steam_china?: boolean;
        }[]>]: never; };
        low_priority_games_remaining?: number;
        open_for_join_requests?: boolean;
        sent_invites?: {
            group_id?: string;
            sender_id?: string;
            sender_name?: string;
            members?: {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[];
            team_id?: number;
            low_priority_status?: boolean;
            as_coach?: boolean;
            invite_gid?: string;
        }[] & ({
            group_id?: string;
            sender_id?: string;
            sender_name?: string;
            members?: {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[];
            team_id?: number;
            low_priority_status?: boolean;
            as_coach?: boolean;
            invite_gid?: string;
        } & {
            group_id?: string;
            sender_id?: string;
            sender_name?: string;
            members?: {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[] & ({
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            } & {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            } & { [K_5 in Exclude<keyof I["sent_invites"][number]["members"][number], keyof CSODOTAPartyInvite_PartyMember>]: never; })[] & { [K_6 in Exclude<keyof I["sent_invites"][number]["members"], keyof {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[]>]: never; };
            team_id?: number;
            low_priority_status?: boolean;
            as_coach?: boolean;
            invite_gid?: string;
        } & { [K_7 in Exclude<keyof I["sent_invites"][number], keyof CSODOTAPartyInvite>]: never; })[] & { [K_8 in Exclude<keyof I["sent_invites"], keyof {
            group_id?: string;
            sender_id?: string;
            sender_name?: string;
            members?: {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[];
            team_id?: number;
            low_priority_status?: boolean;
            as_coach?: boolean;
            invite_gid?: string;
        }[]>]: never; };
        recv_invites?: {
            group_id?: string;
            sender_id?: string;
            sender_name?: string;
            members?: {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[];
            team_id?: number;
            low_priority_status?: boolean;
            as_coach?: boolean;
            invite_gid?: string;
        }[] & ({
            group_id?: string;
            sender_id?: string;
            sender_name?: string;
            members?: {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[];
            team_id?: number;
            low_priority_status?: boolean;
            as_coach?: boolean;
            invite_gid?: string;
        } & {
            group_id?: string;
            sender_id?: string;
            sender_name?: string;
            members?: {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[] & ({
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            } & {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            } & { [K_9 in Exclude<keyof I["recv_invites"][number]["members"][number], keyof CSODOTAPartyInvite_PartyMember>]: never; })[] & { [K_10 in Exclude<keyof I["recv_invites"][number]["members"], keyof {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[]>]: never; };
            team_id?: number;
            low_priority_status?: boolean;
            as_coach?: boolean;
            invite_gid?: string;
        } & { [K_11 in Exclude<keyof I["recv_invites"][number], keyof CSODOTAPartyInvite>]: never; })[] & { [K_12 in Exclude<keyof I["recv_invites"], keyof {
            group_id?: string;
            sender_id?: string;
            sender_name?: string;
            members?: {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[];
            team_id?: number;
            low_priority_status?: boolean;
            as_coach?: boolean;
            invite_gid?: string;
        }[]>]: never; };
        account_flags?: number;
        region_select_flags?: number;
        exclusive_tournament_id?: number;
        tourney_division_id?: number;
        tourney_schedule_time?: number;
        tourney_skill_level?: number;
        tourney_bracket_round?: number;
        tourney_queue_deadline_time?: number;
        tourney_queue_deadline_state?: ETourneyQueueDeadlineState;
        party_builder_slots_to_fill?: number;
        party_builder_match_groups?: number;
        party_builder_start_time?: number;
        solo_queue?: boolean;
        steam_clan_account_id?: number;
        ready_check?: {
            start_timestamp?: number;
            finish_timestamp?: number;
            initiator_account_id?: number;
            ready_members?: {
                account_id?: number;
                ready_status?: EReadyCheckStatus;
            }[];
        } & {
            start_timestamp?: number;
            finish_timestamp?: number;
            initiator_account_id?: number;
            ready_members?: {
                account_id?: number;
                ready_status?: EReadyCheckStatus;
            }[] & ({
                account_id?: number;
                ready_status?: EReadyCheckStatus;
            } & {
                account_id?: number;
                ready_status?: EReadyCheckStatus;
            } & { [K_13 in Exclude<keyof I["ready_check"]["ready_members"][number], keyof CMsgReadyCheckStatus_ReadyMember>]: never; })[] & { [K_14 in Exclude<keyof I["ready_check"]["ready_members"], keyof {
                account_id?: number;
                ready_status?: EReadyCheckStatus;
            }[]>]: never; };
        } & { [K_15 in Exclude<keyof I["ready_check"], keyof CMsgReadyCheckStatus>]: never; };
        custom_game_disabled_until_date?: number;
        custom_game_disabled_account_id?: number;
        is_challenge_match?: boolean;
        party_search_beacon_active?: boolean;
        matchmaking_flags?: number;
        high_priority_state?: EHighPriorityMMState;
        lane_selections_enabled?: boolean;
        custom_game_difficulty_mask?: number;
        is_steam_china?: boolean;
        bot_difficulty_mask?: number;
        bot_script_index_mask?: number;
    } & { [K_16 in Exclude<keyof I, keyof CSODOTAParty>]: never; }>(base?: I): CSODOTAParty;
    fromPartial<I_1 extends {
        party_id?: string;
        leader_id?: string;
        member_ids?: string[];
        game_modes?: number;
        state?: CSODOTAParty_State;
        effective_started_matchmaking_time?: number;
        raw_started_matchmaking_time?: number;
        attempt_start_time?: number;
        attempt_num?: number;
        matchgroups?: number;
        low_priority_account_id?: number;
        match_type?: MatchType;
        team_id?: number;
        team_name?: string;
        team_ui_logo?: string;
        team_base_logo?: string;
        match_disabled_until_date?: number;
        match_disabled_account_id?: number;
        matchmaking_max_range_minutes?: number;
        matchlanguages?: number;
        members?: {
            is_coach?: boolean;
            region_ping_codes?: number[];
            region_ping_times?: number[];
            region_ping_failed_bitmask?: number;
            is_plus_subscriber?: boolean;
            tourney_skill_level?: number;
            tourney_buyin?: number;
            tourney_prevent_until?: number;
            mm_data_valid?: boolean;
            lane_selection_flags?: number;
            high_priority_disabled?: boolean;
            has_hp_resource?: boolean;
            joined_from_partyfinder?: boolean;
            is_steam_china?: boolean;
        }[];
        low_priority_games_remaining?: number;
        open_for_join_requests?: boolean;
        sent_invites?: {
            group_id?: string;
            sender_id?: string;
            sender_name?: string;
            members?: {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[];
            team_id?: number;
            low_priority_status?: boolean;
            as_coach?: boolean;
            invite_gid?: string;
        }[];
        recv_invites?: {
            group_id?: string;
            sender_id?: string;
            sender_name?: string;
            members?: {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[];
            team_id?: number;
            low_priority_status?: boolean;
            as_coach?: boolean;
            invite_gid?: string;
        }[];
        account_flags?: number;
        region_select_flags?: number;
        exclusive_tournament_id?: number;
        tourney_division_id?: number;
        tourney_schedule_time?: number;
        tourney_skill_level?: number;
        tourney_bracket_round?: number;
        tourney_queue_deadline_time?: number;
        tourney_queue_deadline_state?: ETourneyQueueDeadlineState;
        party_builder_slots_to_fill?: number;
        party_builder_match_groups?: number;
        party_builder_start_time?: number;
        solo_queue?: boolean;
        steam_clan_account_id?: number;
        ready_check?: {
            start_timestamp?: number;
            finish_timestamp?: number;
            initiator_account_id?: number;
            ready_members?: {
                account_id?: number;
                ready_status?: EReadyCheckStatus;
            }[];
        };
        custom_game_disabled_until_date?: number;
        custom_game_disabled_account_id?: number;
        is_challenge_match?: boolean;
        party_search_beacon_active?: boolean;
        matchmaking_flags?: number;
        high_priority_state?: EHighPriorityMMState;
        lane_selections_enabled?: boolean;
        custom_game_difficulty_mask?: number;
        is_steam_china?: boolean;
        bot_difficulty_mask?: number;
        bot_script_index_mask?: number;
    } & {
        party_id?: string;
        leader_id?: string;
        member_ids?: string[] & string[] & { [K_17 in Exclude<keyof I_1["member_ids"], keyof string[]>]: never; };
        game_modes?: number;
        state?: CSODOTAParty_State;
        effective_started_matchmaking_time?: number;
        raw_started_matchmaking_time?: number;
        attempt_start_time?: number;
        attempt_num?: number;
        matchgroups?: number;
        low_priority_account_id?: number;
        match_type?: MatchType;
        team_id?: number;
        team_name?: string;
        team_ui_logo?: string;
        team_base_logo?: string;
        match_disabled_until_date?: number;
        match_disabled_account_id?: number;
        matchmaking_max_range_minutes?: number;
        matchlanguages?: number;
        members?: {
            is_coach?: boolean;
            region_ping_codes?: number[];
            region_ping_times?: number[];
            region_ping_failed_bitmask?: number;
            is_plus_subscriber?: boolean;
            tourney_skill_level?: number;
            tourney_buyin?: number;
            tourney_prevent_until?: number;
            mm_data_valid?: boolean;
            lane_selection_flags?: number;
            high_priority_disabled?: boolean;
            has_hp_resource?: boolean;
            joined_from_partyfinder?: boolean;
            is_steam_china?: boolean;
        }[] & ({
            is_coach?: boolean;
            region_ping_codes?: number[];
            region_ping_times?: number[];
            region_ping_failed_bitmask?: number;
            is_plus_subscriber?: boolean;
            tourney_skill_level?: number;
            tourney_buyin?: number;
            tourney_prevent_until?: number;
            mm_data_valid?: boolean;
            lane_selection_flags?: number;
            high_priority_disabled?: boolean;
            has_hp_resource?: boolean;
            joined_from_partyfinder?: boolean;
            is_steam_china?: boolean;
        } & {
            is_coach?: boolean;
            region_ping_codes?: number[] & number[] & { [K_18 in Exclude<keyof I_1["members"][number]["region_ping_codes"], keyof number[]>]: never; };
            region_ping_times?: number[] & number[] & { [K_19 in Exclude<keyof I_1["members"][number]["region_ping_times"], keyof number[]>]: never; };
            region_ping_failed_bitmask?: number;
            is_plus_subscriber?: boolean;
            tourney_skill_level?: number;
            tourney_buyin?: number;
            tourney_prevent_until?: number;
            mm_data_valid?: boolean;
            lane_selection_flags?: number;
            high_priority_disabled?: boolean;
            has_hp_resource?: boolean;
            joined_from_partyfinder?: boolean;
            is_steam_china?: boolean;
        } & { [K_20 in Exclude<keyof I_1["members"][number], keyof CSODOTAPartyMember>]: never; })[] & { [K_21 in Exclude<keyof I_1["members"], keyof {
            is_coach?: boolean;
            region_ping_codes?: number[];
            region_ping_times?: number[];
            region_ping_failed_bitmask?: number;
            is_plus_subscriber?: boolean;
            tourney_skill_level?: number;
            tourney_buyin?: number;
            tourney_prevent_until?: number;
            mm_data_valid?: boolean;
            lane_selection_flags?: number;
            high_priority_disabled?: boolean;
            has_hp_resource?: boolean;
            joined_from_partyfinder?: boolean;
            is_steam_china?: boolean;
        }[]>]: never; };
        low_priority_games_remaining?: number;
        open_for_join_requests?: boolean;
        sent_invites?: {
            group_id?: string;
            sender_id?: string;
            sender_name?: string;
            members?: {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[];
            team_id?: number;
            low_priority_status?: boolean;
            as_coach?: boolean;
            invite_gid?: string;
        }[] & ({
            group_id?: string;
            sender_id?: string;
            sender_name?: string;
            members?: {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[];
            team_id?: number;
            low_priority_status?: boolean;
            as_coach?: boolean;
            invite_gid?: string;
        } & {
            group_id?: string;
            sender_id?: string;
            sender_name?: string;
            members?: {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[] & ({
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            } & {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            } & { [K_22 in Exclude<keyof I_1["sent_invites"][number]["members"][number], keyof CSODOTAPartyInvite_PartyMember>]: never; })[] & { [K_23 in Exclude<keyof I_1["sent_invites"][number]["members"], keyof {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[]>]: never; };
            team_id?: number;
            low_priority_status?: boolean;
            as_coach?: boolean;
            invite_gid?: string;
        } & { [K_24 in Exclude<keyof I_1["sent_invites"][number], keyof CSODOTAPartyInvite>]: never; })[] & { [K_25 in Exclude<keyof I_1["sent_invites"], keyof {
            group_id?: string;
            sender_id?: string;
            sender_name?: string;
            members?: {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[];
            team_id?: number;
            low_priority_status?: boolean;
            as_coach?: boolean;
            invite_gid?: string;
        }[]>]: never; };
        recv_invites?: {
            group_id?: string;
            sender_id?: string;
            sender_name?: string;
            members?: {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[];
            team_id?: number;
            low_priority_status?: boolean;
            as_coach?: boolean;
            invite_gid?: string;
        }[] & ({
            group_id?: string;
            sender_id?: string;
            sender_name?: string;
            members?: {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[];
            team_id?: number;
            low_priority_status?: boolean;
            as_coach?: boolean;
            invite_gid?: string;
        } & {
            group_id?: string;
            sender_id?: string;
            sender_name?: string;
            members?: {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[] & ({
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            } & {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            } & { [K_26 in Exclude<keyof I_1["recv_invites"][number]["members"][number], keyof CSODOTAPartyInvite_PartyMember>]: never; })[] & { [K_27 in Exclude<keyof I_1["recv_invites"][number]["members"], keyof {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[]>]: never; };
            team_id?: number;
            low_priority_status?: boolean;
            as_coach?: boolean;
            invite_gid?: string;
        } & { [K_28 in Exclude<keyof I_1["recv_invites"][number], keyof CSODOTAPartyInvite>]: never; })[] & { [K_29 in Exclude<keyof I_1["recv_invites"], keyof {
            group_id?: string;
            sender_id?: string;
            sender_name?: string;
            members?: {
                name?: string;
                steam_id?: string;
                is_coach?: boolean;
            }[];
            team_id?: number;
            low_priority_status?: boolean;
            as_coach?: boolean;
            invite_gid?: string;
        }[]>]: never; };
        account_flags?: number;
        region_select_flags?: number;
        exclusive_tournament_id?: number;
        tourney_division_id?: number;
        tourney_schedule_time?: number;
        tourney_skill_level?: number;
        tourney_bracket_round?: number;
        tourney_queue_deadline_time?: number;
        tourney_queue_deadline_state?: ETourneyQueueDeadlineState;
        party_builder_slots_to_fill?: number;
        party_builder_match_groups?: number;
        party_builder_start_time?: number;
        solo_queue?: boolean;
        steam_clan_account_id?: number;
        ready_check?: {
            start_timestamp?: number;
            finish_timestamp?: number;
            initiator_account_id?: number;
            ready_members?: {
                account_id?: number;
                ready_status?: EReadyCheckStatus;
            }[];
        } & {
            start_timestamp?: number;
            finish_timestamp?: number;
            initiator_account_id?: number;
            ready_members?: {
                account_id?: number;
                ready_status?: EReadyCheckStatus;
            }[] & ({
                account_id?: number;
                ready_status?: EReadyCheckStatus;
            } & {
                account_id?: number;
                ready_status?: EReadyCheckStatus;
            } & { [K_30 in Exclude<keyof I_1["ready_check"]["ready_members"][number], keyof CMsgReadyCheckStatus_ReadyMember>]: never; })[] & { [K_31 in Exclude<keyof I_1["ready_check"]["ready_members"], keyof {
                account_id?: number;
                ready_status?: EReadyCheckStatus;
            }[]>]: never; };
        } & { [K_32 in Exclude<keyof I_1["ready_check"], keyof CMsgReadyCheckStatus>]: never; };
        custom_game_disabled_until_date?: number;
        custom_game_disabled_account_id?: number;
        is_challenge_match?: boolean;
        party_search_beacon_active?: boolean;
        matchmaking_flags?: number;
        high_priority_state?: EHighPriorityMMState;
        lane_selections_enabled?: boolean;
        custom_game_difficulty_mask?: number;
        is_steam_china?: boolean;
        bot_difficulty_mask?: number;
        bot_script_index_mask?: number;
    } & { [K_33 in Exclude<keyof I_1, keyof CSODOTAParty>]: never; }>(object: I_1): CSODOTAParty;
};
export declare const CSODOTAPartyInvite: {
    fromJSON(object: any): CSODOTAPartyInvite;
    toJSON(message: CSODOTAPartyInvite): unknown;
    create<I extends {
        group_id?: string;
        sender_id?: string;
        sender_name?: string;
        members?: {
            name?: string;
            steam_id?: string;
            is_coach?: boolean;
        }[];
        team_id?: number;
        low_priority_status?: boolean;
        as_coach?: boolean;
        invite_gid?: string;
    } & {
        group_id?: string;
        sender_id?: string;
        sender_name?: string;
        members?: {
            name?: string;
            steam_id?: string;
            is_coach?: boolean;
        }[] & ({
            name?: string;
            steam_id?: string;
            is_coach?: boolean;
        } & {
            name?: string;
            steam_id?: string;
            is_coach?: boolean;
        } & { [K in Exclude<keyof I["members"][number], keyof CSODOTAPartyInvite_PartyMember>]: never; })[] & { [K_1 in Exclude<keyof I["members"], keyof {
            name?: string;
            steam_id?: string;
            is_coach?: boolean;
        }[]>]: never; };
        team_id?: number;
        low_priority_status?: boolean;
        as_coach?: boolean;
        invite_gid?: string;
    } & { [K_2 in Exclude<keyof I, keyof CSODOTAPartyInvite>]: never; }>(base?: I): CSODOTAPartyInvite;
    fromPartial<I_1 extends {
        group_id?: string;
        sender_id?: string;
        sender_name?: string;
        members?: {
            name?: string;
            steam_id?: string;
            is_coach?: boolean;
        }[];
        team_id?: number;
        low_priority_status?: boolean;
        as_coach?: boolean;
        invite_gid?: string;
    } & {
        group_id?: string;
        sender_id?: string;
        sender_name?: string;
        members?: {
            name?: string;
            steam_id?: string;
            is_coach?: boolean;
        }[] & ({
            name?: string;
            steam_id?: string;
            is_coach?: boolean;
        } & {
            name?: string;
            steam_id?: string;
            is_coach?: boolean;
        } & { [K_3 in Exclude<keyof I_1["members"][number], keyof CSODOTAPartyInvite_PartyMember>]: never; })[] & { [K_4 in Exclude<keyof I_1["members"], keyof {
            name?: string;
            steam_id?: string;
            is_coach?: boolean;
        }[]>]: never; };
        team_id?: number;
        low_priority_status?: boolean;
        as_coach?: boolean;
        invite_gid?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof CSODOTAPartyInvite>]: never; }>(object: I_1): CSODOTAPartyInvite;
};
export declare const CSODOTAPartyInvite_PartyMember: {
    fromJSON(object: any): CSODOTAPartyInvite_PartyMember;
    toJSON(message: CSODOTAPartyInvite_PartyMember): unknown;
    create<I extends {
        name?: string;
        steam_id?: string;
        is_coach?: boolean;
    } & {
        name?: string;
        steam_id?: string;
        is_coach?: boolean;
    } & { [K in Exclude<keyof I, keyof CSODOTAPartyInvite_PartyMember>]: never; }>(base?: I): CSODOTAPartyInvite_PartyMember;
    fromPartial<I_1 extends {
        name?: string;
        steam_id?: string;
        is_coach?: boolean;
    } & {
        name?: string;
        steam_id?: string;
        is_coach?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CSODOTAPartyInvite_PartyMember>]: never; }>(object: I_1): CSODOTAPartyInvite_PartyMember;
};
export declare const CMsgLeaverState: {
    fromJSON(object: any): CMsgLeaverState;
    toJSON(message: CMsgLeaverState): unknown;
    create<I extends {
        lobby_state?: number;
        game_state?: DOTA_GameState;
        leaver_detected?: boolean;
        first_blood_happened?: boolean;
        discard_match_results?: boolean;
        mass_disconnect?: boolean;
    } & {
        lobby_state?: number;
        game_state?: DOTA_GameState;
        leaver_detected?: boolean;
        first_blood_happened?: boolean;
        discard_match_results?: boolean;
        mass_disconnect?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgLeaverState>]: never; }>(base?: I): CMsgLeaverState;
    fromPartial<I_1 extends {
        lobby_state?: number;
        game_state?: DOTA_GameState;
        leaver_detected?: boolean;
        first_blood_happened?: boolean;
        discard_match_results?: boolean;
        mass_disconnect?: boolean;
    } & {
        lobby_state?: number;
        game_state?: DOTA_GameState;
        leaver_detected?: boolean;
        first_blood_happened?: boolean;
        discard_match_results?: boolean;
        mass_disconnect?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgLeaverState>]: never; }>(object: I_1): CMsgLeaverState;
};
export declare const CMsgReadyCheckStatus: {
    fromJSON(object: any): CMsgReadyCheckStatus;
    toJSON(message: CMsgReadyCheckStatus): unknown;
    create<I extends {
        start_timestamp?: number;
        finish_timestamp?: number;
        initiator_account_id?: number;
        ready_members?: {
            account_id?: number;
            ready_status?: EReadyCheckStatus;
        }[];
    } & {
        start_timestamp?: number;
        finish_timestamp?: number;
        initiator_account_id?: number;
        ready_members?: {
            account_id?: number;
            ready_status?: EReadyCheckStatus;
        }[] & ({
            account_id?: number;
            ready_status?: EReadyCheckStatus;
        } & {
            account_id?: number;
            ready_status?: EReadyCheckStatus;
        } & { [K in Exclude<keyof I["ready_members"][number], keyof CMsgReadyCheckStatus_ReadyMember>]: never; })[] & { [K_1 in Exclude<keyof I["ready_members"], keyof {
            account_id?: number;
            ready_status?: EReadyCheckStatus;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgReadyCheckStatus>]: never; }>(base?: I): CMsgReadyCheckStatus;
    fromPartial<I_1 extends {
        start_timestamp?: number;
        finish_timestamp?: number;
        initiator_account_id?: number;
        ready_members?: {
            account_id?: number;
            ready_status?: EReadyCheckStatus;
        }[];
    } & {
        start_timestamp?: number;
        finish_timestamp?: number;
        initiator_account_id?: number;
        ready_members?: {
            account_id?: number;
            ready_status?: EReadyCheckStatus;
        }[] & ({
            account_id?: number;
            ready_status?: EReadyCheckStatus;
        } & {
            account_id?: number;
            ready_status?: EReadyCheckStatus;
        } & { [K_3 in Exclude<keyof I_1["ready_members"][number], keyof CMsgReadyCheckStatus_ReadyMember>]: never; })[] & { [K_4 in Exclude<keyof I_1["ready_members"], keyof {
            account_id?: number;
            ready_status?: EReadyCheckStatus;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgReadyCheckStatus>]: never; }>(object: I_1): CMsgReadyCheckStatus;
};
export declare const CMsgReadyCheckStatus_ReadyMember: {
    fromJSON(object: any): CMsgReadyCheckStatus_ReadyMember;
    toJSON(message: CMsgReadyCheckStatus_ReadyMember): unknown;
    create<I extends {
        account_id?: number;
        ready_status?: EReadyCheckStatus;
    } & {
        account_id?: number;
        ready_status?: EReadyCheckStatus;
    } & { [K in Exclude<keyof I, keyof CMsgReadyCheckStatus_ReadyMember>]: never; }>(base?: I): CMsgReadyCheckStatus_ReadyMember;
    fromPartial<I_1 extends {
        account_id?: number;
        ready_status?: EReadyCheckStatus;
    } & {
        account_id?: number;
        ready_status?: EReadyCheckStatus;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgReadyCheckStatus_ReadyMember>]: never; }>(object: I_1): CMsgReadyCheckStatus_ReadyMember;
};
export declare const CMsgPartyReadyCheckRequest: {
    fromJSON(_: any): CMsgPartyReadyCheckRequest;
    toJSON(_: CMsgPartyReadyCheckRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgPartyReadyCheckRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgPartyReadyCheckRequest;
};
export declare const CMsgPartyReadyCheckResponse: {
    fromJSON(object: any): CMsgPartyReadyCheckResponse;
    toJSON(message: CMsgPartyReadyCheckResponse): unknown;
    create<I extends {
        result?: EReadyCheckRequestResult;
    } & {
        result?: EReadyCheckRequestResult;
    } & { [K in Exclude<keyof I, "result">]: never; }>(base?: I): CMsgPartyReadyCheckResponse;
    fromPartial<I_1 extends {
        result?: EReadyCheckRequestResult;
    } & {
        result?: EReadyCheckRequestResult;
    } & { [K_1 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CMsgPartyReadyCheckResponse;
};
export declare const CMsgPartyReadyCheckAcknowledge: {
    fromJSON(object: any): CMsgPartyReadyCheckAcknowledge;
    toJSON(message: CMsgPartyReadyCheckAcknowledge): unknown;
    create<I extends {
        ready_status?: EReadyCheckStatus;
    } & {
        ready_status?: EReadyCheckStatus;
    } & { [K in Exclude<keyof I, "ready_status">]: never; }>(base?: I): CMsgPartyReadyCheckAcknowledge;
    fromPartial<I_1 extends {
        ready_status?: EReadyCheckStatus;
    } & {
        ready_status?: EReadyCheckStatus;
    } & { [K_1 in Exclude<keyof I_1, "ready_status">]: never; }>(object: I_1): CMsgPartyReadyCheckAcknowledge;
};
export declare const CMsgLobbyEventGameDetails: {
    fromJSON(object: any): CMsgLobbyEventGameDetails;
    toJSON(message: CMsgLobbyEventGameDetails): unknown;
    create<I extends {
        kv_data?: string;
    } & {
        kv_data?: string;
    } & { [K in Exclude<keyof I, "kv_data">]: never; }>(base?: I): CMsgLobbyEventGameDetails;
    fromPartial<I_1 extends {
        kv_data?: string;
    } & {
        kv_data?: string;
    } & { [K_1 in Exclude<keyof I_1, "kv_data">]: never; }>(object: I_1): CMsgLobbyEventGameDetails;
};
export declare const CMsgMatchMatchmakingStats: {
    fromJSON(object: any): CMsgMatchMatchmakingStats;
    toJSON(message: CMsgMatchMatchmakingStats): unknown;
    create<I extends {
        average_queue_time?: number;
        maximum_queue_time?: number;
        behavior_score_variance?: EMatchBehaviorScoreVariance;
    } & {
        average_queue_time?: number;
        maximum_queue_time?: number;
        behavior_score_variance?: EMatchBehaviorScoreVariance;
    } & { [K in Exclude<keyof I, keyof CMsgMatchMatchmakingStats>]: never; }>(base?: I): CMsgMatchMatchmakingStats;
    fromPartial<I_1 extends {
        average_queue_time?: number;
        maximum_queue_time?: number;
        behavior_score_variance?: EMatchBehaviorScoreVariance;
    } & {
        average_queue_time?: number;
        maximum_queue_time?: number;
        behavior_score_variance?: EMatchBehaviorScoreVariance;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgMatchMatchmakingStats>]: never; }>(object: I_1): CMsgMatchMatchmakingStats;
};
export declare const CMvpData: {
    fromJSON(object: any): CMvpData;
    toJSON(message: CMvpData): unknown;
    create<I extends {
        mvps?: {
            player_slot?: number;
            accolades?: {
                type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                detail_value?: number;
            }[];
        }[];
    } & {
        mvps?: {
            player_slot?: number;
            accolades?: {
                type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                detail_value?: number;
            }[];
        }[] & ({
            player_slot?: number;
            accolades?: {
                type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                detail_value?: number;
            }[];
        } & {
            player_slot?: number;
            accolades?: {
                type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                detail_value?: number;
            }[] & ({
                type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                detail_value?: number;
            } & {
                type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                detail_value?: number;
            } & { [K in Exclude<keyof I["mvps"][number]["accolades"][number], keyof CMvpData_MvpDatum_MvpAccolade>]: never; })[] & { [K_1 in Exclude<keyof I["mvps"][number]["accolades"], keyof {
                type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                detail_value?: number;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["mvps"][number], keyof CMvpData_MvpDatum>]: never; })[] & { [K_3 in Exclude<keyof I["mvps"], keyof {
            player_slot?: number;
            accolades?: {
                type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                detail_value?: number;
            }[];
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, "mvps">]: never; }>(base?: I): CMvpData;
    fromPartial<I_1 extends {
        mvps?: {
            player_slot?: number;
            accolades?: {
                type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                detail_value?: number;
            }[];
        }[];
    } & {
        mvps?: {
            player_slot?: number;
            accolades?: {
                type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                detail_value?: number;
            }[];
        }[] & ({
            player_slot?: number;
            accolades?: {
                type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                detail_value?: number;
            }[];
        } & {
            player_slot?: number;
            accolades?: {
                type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                detail_value?: number;
            }[] & ({
                type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                detail_value?: number;
            } & {
                type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                detail_value?: number;
            } & { [K_5 in Exclude<keyof I_1["mvps"][number]["accolades"][number], keyof CMvpData_MvpDatum_MvpAccolade>]: never; })[] & { [K_6 in Exclude<keyof I_1["mvps"][number]["accolades"], keyof {
                type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                detail_value?: number;
            }[]>]: never; };
        } & { [K_7 in Exclude<keyof I_1["mvps"][number], keyof CMvpData_MvpDatum>]: never; })[] & { [K_8 in Exclude<keyof I_1["mvps"], keyof {
            player_slot?: number;
            accolades?: {
                type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                detail_value?: number;
            }[];
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "mvps">]: never; }>(object: I_1): CMvpData;
};
export declare const CMvpData_MvpDatum: {
    fromJSON(object: any): CMvpData_MvpDatum;
    toJSON(message: CMvpData_MvpDatum): unknown;
    create<I extends {
        player_slot?: number;
        accolades?: {
            type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
            detail_value?: number;
        }[];
    } & {
        player_slot?: number;
        accolades?: {
            type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
            detail_value?: number;
        }[] & ({
            type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
            detail_value?: number;
        } & {
            type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
            detail_value?: number;
        } & { [K in Exclude<keyof I["accolades"][number], keyof CMvpData_MvpDatum_MvpAccolade>]: never; })[] & { [K_1 in Exclude<keyof I["accolades"], keyof {
            type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
            detail_value?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMvpData_MvpDatum>]: never; }>(base?: I): CMvpData_MvpDatum;
    fromPartial<I_1 extends {
        player_slot?: number;
        accolades?: {
            type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
            detail_value?: number;
        }[];
    } & {
        player_slot?: number;
        accolades?: {
            type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
            detail_value?: number;
        }[] & ({
            type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
            detail_value?: number;
        } & {
            type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
            detail_value?: number;
        } & { [K_3 in Exclude<keyof I_1["accolades"][number], keyof CMvpData_MvpDatum_MvpAccolade>]: never; })[] & { [K_4 in Exclude<keyof I_1["accolades"], keyof {
            type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
            detail_value?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMvpData_MvpDatum>]: never; }>(object: I_1): CMvpData_MvpDatum;
};
export declare const CMvpData_MvpDatum_MvpAccolade: {
    fromJSON(object: any): CMvpData_MvpDatum_MvpAccolade;
    toJSON(message: CMvpData_MvpDatum_MvpAccolade): unknown;
    create<I extends {
        type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
        detail_value?: number;
    } & {
        type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
        detail_value?: number;
    } & { [K in Exclude<keyof I, keyof CMvpData_MvpDatum_MvpAccolade>]: never; }>(base?: I): CMvpData_MvpDatum_MvpAccolade;
    fromPartial<I_1 extends {
        type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
        detail_value?: number;
    } & {
        type?: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
        detail_value?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMvpData_MvpDatum_MvpAccolade>]: never; }>(object: I_1): CMvpData_MvpDatum_MvpAccolade;
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
