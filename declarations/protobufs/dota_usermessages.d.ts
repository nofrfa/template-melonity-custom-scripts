import { CDOTAMsg_CoachHUDPing, CDOTAMsg_DismissAllStatPopups, CDOTAMsg_ItemAlert, CDOTAMsg_LocationPing, CDOTAMsg_MapLine, CDOTAMsg_SendStatPopup, CDOTAMsg_WorldLine, EDOTAVersusScenePlayerBehavior, VersusScene_ChatWheel, VersusScene_PlayActivity, VersusScene_PlaybackRate } from "./dota_commonmessages";
import { CMsgDOTACombatLogEntry } from "./dota_shared_enums";
import { CEntityMsg, CMsgVector, CMsgVector2D } from "./networkbasetypes";
export declare const protobufPackage = "";
export declare enum EDotaUserMessages {
    DOTA_UM_AddUnitToSelection = 464,
    DOTA_UM_AIDebugLine = 465,
    DOTA_UM_ChatEvent = 466,
    DOTA_UM_CombatHeroPositions = 467,
    DOTA_UM_CombatLogData = 468,
    DOTA_UM_CombatLogBulkData = 470,
    DOTA_UM_CreateLinearProjectile = 471,
    DOTA_UM_DestroyLinearProjectile = 472,
    DOTA_UM_DodgeTrackingProjectiles = 473,
    DOTA_UM_GlobalLightColor = 474,
    DOTA_UM_GlobalLightDirection = 475,
    DOTA_UM_InvalidCommand = 476,
    DOTA_UM_LocationPing = 477,
    DOTA_UM_MapLine = 478,
    DOTA_UM_MiniKillCamInfo = 479,
    DOTA_UM_MinimapDebugPoint = 480,
    DOTA_UM_MinimapEvent = 481,
    DOTA_UM_NevermoreRequiem = 482,
    DOTA_UM_OverheadEvent = 483,
    DOTA_UM_SetNextAutobuyItem = 484,
    DOTA_UM_SharedCooldown = 485,
    DOTA_UM_SpectatorPlayerClick = 486,
    DOTA_UM_TutorialTipInfo = 487,
    DOTA_UM_UnitEvent = 488,
    DOTA_UM_ParticleManager = 489,
    DOTA_UM_BotChat = 490,
    DOTA_UM_HudError = 491,
    DOTA_UM_ItemPurchased = 492,
    DOTA_UM_Ping = 493,
    DOTA_UM_ItemFound = 494,
    DOTA_UM_CharacterSpeakConcept = 495,
    DOTA_UM_SwapVerify = 496,
    DOTA_UM_WorldLine = 497,
    DOTA_UM_TournamentDrop = 498,
    DOTA_UM_ItemAlert = 499,
    DOTA_UM_HalloweenDrops = 500,
    DOTA_UM_ChatWheel = 501,
    DOTA_UM_ReceivedXmasGift = 502,
    DOTA_UM_UpdateSharedContent = 503,
    DOTA_UM_TutorialRequestExp = 504,
    DOTA_UM_TutorialPingMinimap = 505,
    DOTA_UM_GamerulesStateChanged = 506,
    DOTA_UM_ShowSurvey = 507,
    DOTA_UM_TutorialFade = 508,
    DOTA_UM_AddQuestLogEntry = 509,
    DOTA_UM_SendStatPopup = 510,
    DOTA_UM_TutorialFinish = 511,
    DOTA_UM_SendRoshanPopup = 512,
    DOTA_UM_SendGenericToolTip = 513,
    DOTA_UM_SendFinalGold = 514,
    DOTA_UM_CustomMsg = 515,
    DOTA_UM_CoachHUDPing = 516,
    DOTA_UM_ClientLoadGridNav = 517,
    DOTA_UM_TE_Projectile = 518,
    DOTA_UM_TE_ProjectileLoc = 519,
    DOTA_UM_TE_DotaBloodImpact = 520,
    DOTA_UM_TE_UnitAnimation = 521,
    DOTA_UM_TE_UnitAnimationEnd = 522,
    DOTA_UM_AbilityPing = 523,
    DOTA_UM_ShowGenericPopup = 524,
    DOTA_UM_VoteStart = 525,
    DOTA_UM_VoteUpdate = 526,
    DOTA_UM_VoteEnd = 527,
    DOTA_UM_BoosterState = 528,
    DOTA_UM_WillPurchaseAlert = 529,
    DOTA_UM_TutorialMinimapPosition = 530,
    DOTA_UM_PlayerMMR = 531,
    DOTA_UM_AbilitySteal = 532,
    DOTA_UM_CourierKilledAlert = 533,
    DOTA_UM_EnemyItemAlert = 534,
    DOTA_UM_StatsMatchDetails = 535,
    DOTA_UM_MiniTaunt = 536,
    DOTA_UM_BuyBackStateAlert = 537,
    DOTA_UM_SpeechBubble = 538,
    DOTA_UM_CustomHeaderMessage = 539,
    DOTA_UM_QuickBuyAlert = 540,
    DOTA_UM_StatsHeroDetails = 541,
    DOTA_UM_PredictionResult = 542,
    DOTA_UM_ModifierAlert = 543,
    DOTA_UM_HPManaAlert = 544,
    DOTA_UM_GlyphAlert = 545,
    DOTA_UM_BeastChat = 546,
    DOTA_UM_SpectatorPlayerUnitOrders = 547,
    DOTA_UM_CustomHudElement_Create = 548,
    DOTA_UM_CustomHudElement_Modify = 549,
    DOTA_UM_CustomHudElement_Destroy = 550,
    DOTA_UM_CompendiumState = 551,
    DOTA_UM_ProjectionAbility = 552,
    DOTA_UM_ProjectionEvent = 553,
    DOTA_UM_CombatLogDataHLTV = 554,
    DOTA_UM_XPAlert = 555,
    DOTA_UM_UpdateQuestProgress = 556,
    DOTA_UM_MatchMetadata = 557,
    DOTA_UM_MatchDetails = 558,
    DOTA_UM_QuestStatus = 559,
    DOTA_UM_SuggestHeroPick = 560,
    DOTA_UM_SuggestHeroRole = 561,
    DOTA_UM_KillcamDamageTaken = 562,
    DOTA_UM_SelectPenaltyGold = 563,
    DOTA_UM_RollDiceResult = 564,
    DOTA_UM_FlipCoinResult = 565,
    DOTA_UM_RequestItemSuggestions = 566,
    DOTA_UM_TeamCaptainChanged = 567,
    DOTA_UM_SendRoshanSpectatorPhase = 568,
    DOTA_UM_ChatWheelCooldown = 569,
    DOTA_UM_DismissAllStatPopups = 570,
    DOTA_UM_TE_DestroyProjectile = 571,
    DOTA_UM_HeroRelicProgress = 572,
    DOTA_UM_AbilityDraftRequestAbility = 573,
    DOTA_UM_ItemSold = 574,
    DOTA_UM_DamageReport = 575,
    DOTA_UM_SalutePlayer = 576,
    DOTA_UM_TipAlert = 577,
    DOTA_UM_ReplaceQueryUnit = 578,
    DOTA_UM_EmptyTeleportAlert = 579,
    DOTA_UM_MarsArenaOfBloodAttack = 580,
    DOTA_UM_ESArcanaCombo = 581,
    DOTA_UM_ESArcanaComboSummary = 582,
    DOTA_UM_HighFiveLeftHanging = 583,
    DOTA_UM_HighFiveCompleted = 584,
    DOTA_UM_ShovelUnearth = 585,
    DOTA_EM_InvokerSpellCast = 586,
    DOTA_UM_RadarAlert = 587,
    DOTA_UM_AllStarEvent = 588,
    DOTA_UM_TalentTreeAlert = 589,
    DOTA_UM_QueuedOrderRemoved = 590,
    DOTA_UM_DebugChallenge = 591,
    DOTA_UM_OMArcanaCombo = 592,
    DOTA_UM_FoundNeutralItem = 593,
    DOTA_UM_OutpostCaptured = 594,
    DOTA_UM_OutpostGrantedXP = 595,
    DOTA_UM_MoveCameraToUnit = 596,
    DOTA_UM_PauseMinigameData = 597,
    DOTA_UM_VersusScene_PlayerBehavior = 598,
    DOTA_UM_QoP_ArcanaSummary = 600,
    DOTA_UM_HotPotato_Created = 601,
    DOTA_UM_HotPotato_Exploded = 602,
    DOTA_UM_WK_Arcana_Progress = 603,
    DOTA_UM_GuildChallenge_Progress = 604,
    DOTA_UM_WRArcanaProgress = 605,
    DOTA_UM_WRArcanaSummary = 606,
    DOTA_UM_EmptyItemSlotAlert = 607,
    DOTA_UM_AghsStatusAlert = 608,
    DOTA_UM_PingConfirmation = 609,
    DOTA_UM_MutedPlayers = 610,
    DOTA_UM_ContextualTip = 611,
    DOTA_UM_ChatMessage = 612,
    DOTA_UM_NeutralCampAlert = 613,
    DOTA_UM_RockPaperScissorsStarted = 614,
    DOTA_UM_RockPaperScissorsFinished = 615,
    DOTA_UM_DuelOpponentKilled = 616,
    DOTA_UM_DuelAccepted = 617,
    DOTA_UM_DuelRequested = 618,
    DOTA_UM_MuertaReleaseEvent_AssignedTargetKilled = 619,
    UNRECOGNIZED = -1
}
export declare function eDotaUserMessagesFromJSON(object: any): EDotaUserMessages;
export declare function eDotaUserMessagesToJSON(object: EDotaUserMessages): string;
export declare enum DOTA_CHAT_MESSAGE {
    CHAT_MESSAGE_INVALID = -1,
    CHAT_MESSAGE_HERO_KILL = 0,
    CHAT_MESSAGE_HERO_DENY = 1,
    CHAT_MESSAGE_BARRACKS_KILL = 2,
    CHAT_MESSAGE_TOWER_KILL = 3,
    CHAT_MESSAGE_TOWER_DENY = 4,
    CHAT_MESSAGE_FIRSTBLOOD = 5,
    CHAT_MESSAGE_STREAK_KILL = 6,
    CHAT_MESSAGE_BUYBACK = 7,
    CHAT_MESSAGE_AEGIS = 8,
    CHAT_MESSAGE_ROSHAN_KILL = 9,
    CHAT_MESSAGE_COURIER_LOST = 10,
    CHAT_MESSAGE_COURIER_RESPAWNED = 11,
    CHAT_MESSAGE_GLYPH_USED = 12,
    CHAT_MESSAGE_ITEM_PURCHASE = 13,
    CHAT_MESSAGE_CONNECT = 14,
    CHAT_MESSAGE_DISCONNECT = 15,
    CHAT_MESSAGE_DISCONNECT_WAIT_FOR_RECONNECT = 16,
    CHAT_MESSAGE_DISCONNECT_TIME_REMAINING = 17,
    CHAT_MESSAGE_DISCONNECT_TIME_REMAINING_PLURAL = 18,
    CHAT_MESSAGE_RECONNECT = 19,
    CHAT_MESSAGE_PLAYER_LEFT = 20,
    CHAT_MESSAGE_SAFE_TO_LEAVE = 21,
    CHAT_MESSAGE_RUNE_PICKUP = 22,
    CHAT_MESSAGE_RUNE_BOTTLE = 23,
    CHAT_MESSAGE_RUNE_DENY = 114,
    CHAT_MESSAGE_INTHEBAG = 24,
    CHAT_MESSAGE_SECRETSHOP = 25,
    CHAT_MESSAGE_ITEM_AUTOPURCHASED = 26,
    CHAT_MESSAGE_ITEMS_COMBINED = 27,
    CHAT_MESSAGE_SUPER_CREEPS = 28,
    CHAT_MESSAGE_CANT_USE_ACTION_ITEM = 29,
    CHAT_MESSAGE_CANTPAUSE = 31,
    CHAT_MESSAGE_NOPAUSESLEFT = 32,
    CHAT_MESSAGE_CANTPAUSEYET = 33,
    CHAT_MESSAGE_PAUSED = 34,
    CHAT_MESSAGE_UNPAUSE_COUNTDOWN = 35,
    CHAT_MESSAGE_UNPAUSED = 36,
    CHAT_MESSAGE_AUTO_UNPAUSED = 37,
    CHAT_MESSAGE_YOUPAUSED = 38,
    CHAT_MESSAGE_CANTUNPAUSETEAM = 39,
    CHAT_MESSAGE_VOICE_TEXT_BANNED = 41,
    CHAT_MESSAGE_SPECTATORS_WATCHING_THIS_GAME = 42,
    CHAT_MESSAGE_REPORT_REMINDER = 43,
    CHAT_MESSAGE_ECON_ITEM = 44,
    CHAT_MESSAGE_TAUNT = 45,
    CHAT_MESSAGE_RANDOM = 46,
    CHAT_MESSAGE_RD_TURN = 47,
    CHAT_MESSAGE_DROP_RATE_BONUS = 49,
    CHAT_MESSAGE_NO_BATTLE_POINTS = 50,
    CHAT_MESSAGE_DENIED_AEGIS = 51,
    CHAT_MESSAGE_INFORMATIONAL = 52,
    CHAT_MESSAGE_AEGIS_STOLEN = 53,
    CHAT_MESSAGE_ROSHAN_CANDY = 54,
    CHAT_MESSAGE_ITEM_GIFTED = 55,
    CHAT_MESSAGE_HERO_KILL_WITH_GREEVIL = 56,
    CHAT_MESSAGE_HOLDOUT_TOWER_DESTROYED = 57,
    CHAT_MESSAGE_HOLDOUT_WALL_DESTROYED = 58,
    CHAT_MESSAGE_HOLDOUT_WALL_FINISHED = 59,
    CHAT_MESSAGE_PLAYER_LEFT_LIMITED_HERO = 62,
    CHAT_MESSAGE_ABANDON_LIMITED_HERO_EXPLANATION = 63,
    CHAT_MESSAGE_DISCONNECT_LIMITED_HERO = 64,
    CHAT_MESSAGE_LOW_PRIORITY_COMPLETED_EXPLANATION = 65,
    CHAT_MESSAGE_RECRUITMENT_DROP_RATE_BONUS = 66,
    CHAT_MESSAGE_FROSTIVUS_SHINING_BOOSTER_ACTIVE = 67,
    CHAT_MESSAGE_PLAYER_LEFT_AFK = 73,
    CHAT_MESSAGE_PLAYER_LEFT_DISCONNECTED_TOO_LONG = 74,
    CHAT_MESSAGE_PLAYER_ABANDONED = 75,
    CHAT_MESSAGE_PLAYER_ABANDONED_AFK = 76,
    CHAT_MESSAGE_PLAYER_ABANDONED_DISCONNECTED_TOO_LONG = 77,
    CHAT_MESSAGE_WILL_NOT_BE_SCORED = 78,
    CHAT_MESSAGE_WILL_NOT_BE_SCORED_RANKED = 79,
    CHAT_MESSAGE_WILL_NOT_BE_SCORED_NETWORK = 80,
    CHAT_MESSAGE_WILL_NOT_BE_SCORED_NETWORK_RANKED = 81,
    CHAT_MESSAGE_CAN_QUIT_WITHOUT_ABANDON = 82,
    CHAT_MESSAGE_RANKED_GAME_STILL_SCORED_LEAVERS_GET_LOSS = 83,
    CHAT_MESSAGE_ABANDON_RANKED_BEFORE_FIRST_BLOOD_PARTY = 84,
    CHAT_MESSAGE_COMPENDIUM_LEVEL = 85,
    CHAT_MESSAGE_VICTORY_PREDICTION_STREAK = 86,
    CHAT_MESSAGE_ASSASSIN_ANNOUNCE = 87,
    CHAT_MESSAGE_ASSASSIN_SUCCESS = 88,
    CHAT_MESSAGE_ASSASSIN_DENIED = 89,
    CHAT_MESSAGE_VICTORY_PREDICTION_SINGLE_USER_CONFIRM = 90,
    CHAT_MESSAGE_EFFIGY_KILL = 91,
    CHAT_MESSAGE_VOICE_TEXT_BANNED_OVERFLOW = 92,
    CHAT_MESSAGE_YEAR_BEAST_KILLED = 93,
    CHAT_MESSAGE_PAUSE_COUNTDOWN = 94,
    CHAT_MESSAGE_COINS_WAGERED = 95,
    CHAT_MESSAGE_HERO_NOMINATED_BAN = 96,
    CHAT_MESSAGE_HERO_BANNED = 97,
    CHAT_MESSAGE_HERO_BAN_COUNT = 98,
    CHAT_MESSAGE_RIVER_PAINTED = 99,
    CHAT_MESSAGE_SCAN_USED = 100,
    CHAT_MESSAGE_SHRINE_KILLED = 101,
    CHAT_MESSAGE_WAGER_TOKEN_SPENT = 102,
    CHAT_MESSAGE_RANK_WAGER = 103,
    CHAT_MESSAGE_NEW_PLAYER_REMINDER = 104,
    CHAT_MESSAGE_OBSERVER_WARD_KILLED = 105,
    CHAT_MESSAGE_SENTRY_WARD_KILLED = 106,
    CHAT_MESSAGE_ITEM_PLACED_IN_NEUTRAL_STASH = 107,
    CHAT_MESSAGE_HERO_CHOICE_INVALID = 108,
    CHAT_MESSAGE_BOUNTY = 109,
    CHAT_MESSAGE_ABILITY_DRAFT_START = 110,
    CHAT_MESSAGE_HERO_FOUND_CANDY = 111,
    CHAT_MESSAGE_ABILITY_DRAFT_RANDOMED = 112,
    CHAT_MESSAGE_PRIVATE_COACH_CONNECTED = 113,
    CHAT_MESSAGE_CANT_PAUSE_TOO_EARLY = 115,
    CHAT_MESSAGE_HERO_KILL_WITH_PENGUIN = 116,
    UNRECOGNIZED = -1
}
export declare function dOTA_CHAT_MESSAGEFromJSON(object: any): DOTA_CHAT_MESSAGE;
export declare function dOTA_CHAT_MESSAGEToJSON(object: DOTA_CHAT_MESSAGE): string;
export declare enum DOTA_NO_BATTLE_POINTS_REASONS {
    NO_BATTLE_POINTS_WRONG_LOBBY_TYPE = 1,
    NO_BATTLE_POINTS_PRACTICE_BOTS = 2,
    NO_BATTLE_POINTS_CHEATS_ENABLED = 3,
    NO_BATTLE_POINTS_LOW_PRIORITY = 4,
    UNRECOGNIZED = -1
}
export declare function dOTA_NO_BATTLE_POINTS_REASONSFromJSON(object: any): DOTA_NO_BATTLE_POINTS_REASONS;
export declare function dOTA_NO_BATTLE_POINTS_REASONSToJSON(object: DOTA_NO_BATTLE_POINTS_REASONS): string;
export declare enum DOTA_CHAT_INFORMATIONAL {
    INFO_COOP_BATTLE_POINTS_RULES = 1,
    INFO_FROSTIVUS_ABANDON_REMINDER = 2,
    INFO_RANKED_REMINDER = 3,
    INFO_COOP_LOW_PRIORITY_PASSIVE_REMINDER = 4,
    INFO_CUSTOM_GAME_PENALTY_REMINDER = 5,
    UNRECOGNIZED = -1
}
export declare function dOTA_CHAT_INFORMATIONALFromJSON(object: any): DOTA_CHAT_INFORMATIONAL;
export declare function dOTA_CHAT_INFORMATIONALToJSON(object: DOTA_CHAT_INFORMATIONAL): string;
export declare enum DOTA_ABILITY_PING_TYPE {
    ABILITY_PING_READY = 1,
    ABILITY_PING_MANA = 2,
    ABILITY_PING_COOLDOWN = 3,
    ABILITY_PING_ENEMY = 4,
    ABILITY_PING_UNLEARNED = 5,
    ABILITY_PING_INBACKPACK = 6,
    ABILITY_PING_INSTASH = 7,
    ABILITY_PING_ONCOURIER = 8,
    ABILITY_PING_ALLY = 9,
    ABILITY_PING_LEARN_READY = 10,
    ABILITY_PING_WILL_LEARN = 11,
    ABILITY_PING_FUTURE_LEARN = 12,
    ABILITY_PING_NEUTRAL_OFFER = 13,
    ABILITY_PING_NEUTRAL_REQUEST = 14,
    ABILITY_PING_NEUTRAL_EQUIP = 15,
    ABILITY_PING_INCOURIERBACKPACK = 16,
    UNRECOGNIZED = -1
}
export declare function dOTA_ABILITY_PING_TYPEFromJSON(object: any): DOTA_ABILITY_PING_TYPE;
export declare function dOTA_ABILITY_PING_TYPEToJSON(object: DOTA_ABILITY_PING_TYPE): string;
export declare enum DOTA_REPLAY_STATE_EVENT {
    DOTA_REPLAY_STATE_EVENT_GAME_START = 1,
    DOTA_REPLAY_STATE_EVENT_STARTING_HORN = 2,
    DOTA_REPLAY_STATE_EVENT_FIRST_BLOOD = 3,
    DOTA_REPLAY_STATE_EVENT_SHOWCASE = 4,
    DOTA_REPLAY_STATE_EVENT_POST_GAME = 5,
    DOTA_REPLAY_STATE_EVENT_WAIT_FOR_MAP = 6,
    UNRECOGNIZED = -1
}
export declare function dOTA_REPLAY_STATE_EVENTFromJSON(object: any): DOTA_REPLAY_STATE_EVENT;
export declare function dOTA_REPLAY_STATE_EVENTToJSON(object: DOTA_REPLAY_STATE_EVENT): string;
export declare enum EDotaEntityMessages {
    DOTA_UNIT_SPEECH = 0,
    DOTA_UNIT_SPEECH_MUTE = 1,
    DOTA_UNIT_ADD_GESTURE = 2,
    DOTA_UNIT_REMOVE_GESTURE = 3,
    DOTA_UNIT_REMOVE_ALL_GESTURES = 4,
    DOTA_UNIT_FADE_GESTURE = 6,
    DOTA_UNIT_SPEECH_CLIENTSIDE_RULES = 7,
    UNRECOGNIZED = -1
}
export declare function eDotaEntityMessagesFromJSON(object: any): EDotaEntityMessages;
export declare function eDotaEntityMessagesToJSON(object: EDotaEntityMessages): string;
export declare enum DOTA_OVERHEAD_ALERT {
    OVERHEAD_ALERT_GOLD = 0,
    OVERHEAD_ALERT_DENY = 1,
    OVERHEAD_ALERT_CRITICAL = 2,
    OVERHEAD_ALERT_XP = 3,
    OVERHEAD_ALERT_BONUS_SPELL_DAMAGE = 4,
    OVERHEAD_ALERT_MISS = 5,
    OVERHEAD_ALERT_DAMAGE = 6,
    OVERHEAD_ALERT_EVADE = 7,
    OVERHEAD_ALERT_BLOCK = 8,
    OVERHEAD_ALERT_BONUS_POISON_DAMAGE = 9,
    OVERHEAD_ALERT_HEAL = 10,
    OVERHEAD_ALERT_MANA_ADD = 11,
    OVERHEAD_ALERT_MANA_LOSS = 12,
    OVERHEAD_ALERT_LAST_HIT_EARLY = 13,
    OVERHEAD_ALERT_LAST_HIT_CLOSE = 14,
    OVERHEAD_ALERT_LAST_HIT_MISS = 15,
    OVERHEAD_ALERT_MAGICAL_BLOCK = 16,
    OVERHEAD_ALERT_INCOMING_DAMAGE = 17,
    OVERHEAD_ALERT_OUTGOING_DAMAGE = 18,
    OVERHEAD_ALERT_DISABLE_RESIST = 19,
    OVERHEAD_ALERT_DEATH = 20,
    OVERHEAD_ALERT_BLOCKED = 21,
    OVERHEAD_ALERT_ITEM_RECEIVED = 22,
    OVERHEAD_ALERT_SHARD = 23,
    OVERHEAD_ALERT_DEADLY_BLOW = 24,
    UNRECOGNIZED = -1
}
export declare function dOTA_OVERHEAD_ALERTFromJSON(object: any): DOTA_OVERHEAD_ALERT;
export declare function dOTA_OVERHEAD_ALERTToJSON(object: DOTA_OVERHEAD_ALERT): string;
export declare enum DOTA_ROSHAN_PHASE {
    k_SRSP_ROSHAN_ALIVE = 0,
    k_SRSP_ROSHAN_BASE_TIMER = 1,
    k_SRSP_ROSHAN_VISIBLE_TIMER = 2,
    UNRECOGNIZED = -1
}
export declare function dOTA_ROSHAN_PHASEFromJSON(object: any): DOTA_ROSHAN_PHASE;
export declare function dOTA_ROSHAN_PHASEToJSON(object: DOTA_ROSHAN_PHASE): string;
export declare enum DOTA_POSITION_CATEGORY {
    DOTA_POSITION_NONE = 0,
    DOTA_POSITION_BOTTOM_LANE = 1,
    DOTA_POSITION_MID_LANE = 2,
    DOTA_POSITION_TOP_LANE = 3,
    DOTA_POSITION_RADIANT_JUNGLE = 4,
    DOTA_POSITION_DIRE_JUNGLE = 5,
    DOTA_POSITION_RADIANT_ANCIENTS = 6,
    DOTA_POSITION_DIRE_ANCIENTS = 7,
    DOTA_POSITION_RADIANT_SECRET_SHOP = 8,
    DOTA_POSITION_DIRE_SECRET_SHOP = 9,
    DOTA_POSITION_RIVER = 10,
    DOTA_POSITION_ROSHAN_PIT = 11,
    DOTA_POSITION_RADIANT_BASE = 12,
    DOTA_POSITION_DIRE_BASE = 13,
    DOTA_POSITION_FOUNTAIN = 14,
    DOTA_POSITION_OTHER = 15,
    UNRECOGNIZED = -1
}
export declare function dOTA_POSITION_CATEGORYFromJSON(object: any): DOTA_POSITION_CATEGORY;
export declare function dOTA_POSITION_CATEGORYToJSON(object: DOTA_POSITION_CATEGORY): string;
export declare enum DOTA_ABILITY_TARGET_TYPE {
    DOTA_ABILITY_TARGET_NONE = 0,
    DOTA_ABILITY_TARGET_SELF = 1,
    DOTA_ABILITY_TARGET_ALLY_HERO = 2,
    DOTA_ABILITY_TARGET_ALLY_CREEP = 3,
    DOTA_ABILITY_TARGET_ENEMY_HERO = 4,
    DOTA_ABILITY_TARGET_ENEMY_CREEP = 5,
    UNRECOGNIZED = -1
}
export declare function dOTA_ABILITY_TARGET_TYPEFromJSON(object: any): DOTA_ABILITY_TARGET_TYPE;
export declare function dOTA_ABILITY_TARGET_TYPEToJSON(object: DOTA_ABILITY_TARGET_TYPE): string;
export declare enum EHeroStatType {
    k_EHeroStatType_None = 0,
    k_EHeroStatType_AxeTotalDamage = 2000,
    k_EHeroStatType_BattleHungerDamage = 2001,
    k_EHeroStatType_CounterHelixDamage = 2002,
    k_EHeroStatType_CullingBladeDamage = 2003,
    k_EHeroStatType_BerserkersCallCastCount = 2004,
    k_EHeroStatType_BerserkersCallHeroesHitAverage = 2005,
    k_EHeroStatType_BerserkersCallOtherUnitsHit = 2006,
    k_EHeroStatType_BerserkersCallHeroAttacksTaken = 2007,
    k_EHeroStatType_BerserkersCallOtherAttacksTaken = 2008,
    k_EHeroStatType_BattleHungerCastCount = 2009,
    k_EHeroStatType_BattleHungerPotentialDuration = 2010,
    k_EHeroStatType_BattleHungerAverageDuration = 2011,
    k_EHeroStatType_CounterHelixProcCount = 2012,
    k_EHeroStatType_CounterHelixHeroProcCount = 2013,
    k_EHeroStatType_CounterHelixHeroesHitAverage = 2014,
    k_EHeroStatType_CounterHelixOtherUnitsHitCount = 2015,
    k_EHeroStatType_CullingBladeCastCount = 2016,
    k_EHeroStatType_CullingBladeKillCount = 2017,
    k_EHeroStatType_CullingBladeAverageHealthCulled = 2018,
    k_EHeroStatType_CullingBladeAverageDamageAvailable = 2019,
    k_EHeroStatType_CullingBladeHeroBuffAverage = 2020,
    UNRECOGNIZED = -1
}
export declare function eHeroStatTypeFromJSON(object: any): EHeroStatType;
export declare function eHeroStatTypeToJSON(object: EHeroStatType): string;
export declare enum EPlayerVoiceListenState {
    kPVLS_None = 0,
    kPVLS_DeniedChatBanned = 1,
    kPVLS_DeniedPartner = 2,
    kPVLS_DeniedHLTVTalkerNotSpectator = 3,
    kPVLS_DeniedHLTVNoTalkerPlayerID = 4,
    kPVLS_DeniedHLTVTalkerNotBroadcaster = 5,
    kPVLS_DeniedTeamSpectator = 6,
    kPVLS_DeniedStudent = 8,
    kPVLS_DeniedPrivateCoach = 9,
    kPVLS_Denied = 64,
    kPVLS_AllowHLTVTalkerIsBroadcaster = 65,
    kPVLS_AllowCoBroadcaster = 66,
    kPVLS_AllowAllChat = 67,
    kPVLS_AllowStudentToCoach = 68,
    kPVLS_AllowFellowStudent = 69,
    kPVLS_AllowTalkerIsCoach = 70,
    kPVLS_AllowCoachHearTeam = 71,
    kPVLS_AllowSameTeam = 72,
    kPVLS_AllowShowcase = 73,
    kPVLS_AllowPrivateCoach = 74,
    UNRECOGNIZED = -1
}
export declare function ePlayerVoiceListenStateFromJSON(object: any): EPlayerVoiceListenState;
export declare function ePlayerVoiceListenStateToJSON(object: EPlayerVoiceListenState): string;
export declare enum EProjectionEvent {
    ePE_FirstBlood = 0,
    ePE_Killstreak_godlike = 1,
    UNRECOGNIZED = -1
}
export declare function eProjectionEventFromJSON(object: any): EProjectionEvent;
export declare function eProjectionEventToJSON(object: EProjectionEvent): string;
export interface CDOTAUserMsg_AIDebugLine {
    message: string;
}
export interface CDOTAUserMsg_Ping {
    ping: number;
    loss: number;
}
export interface CDOTAUserMsg_SwapVerify {
    player_id: number;
}
export interface CDOTAUserMsg_ChatEvent {
    type: DOTA_CHAT_MESSAGE;
    value: number;
    playerid_1: number;
    playerid_2: number;
    playerid_3: number;
    playerid_4: number;
    playerid_5: number;
    playerid_6: number;
    value2: number;
    value3: number;
}
export interface CDOTAUserMsg_BotChat {
    player_id: number;
    message: string;
    target: string;
    team_only: boolean;
}
export interface CDOTAUserMsg_CombatHeroPositions {
    index: number;
    time: number;
    world_pos: CMsgVector2D | undefined;
    health: number;
}
export interface CDOTAUserMsg_CombatLogBulkData {
    combat_entries: CMsgDOTACombatLogEntry[];
    timestamp: number;
    duration: number;
    player_id: number;
    request_time: number;
}
export interface CDOTAUserMsg_ProjectileParticleCPData {
    control_point: number;
    vector: CMsgVector | undefined;
}
export interface CDOTAUserMsg_MiniKillCamInfo {
    attackers: CDOTAUserMsg_MiniKillCamInfo_Attacker[];
}
export interface CDOTAUserMsg_MiniKillCamInfo_Attacker {
    attacker: number;
    total_damage: number;
    abilities: CDOTAUserMsg_MiniKillCamInfo_Attacker_Ability[];
    attacker_name: string;
}
export interface CDOTAUserMsg_MiniKillCamInfo_Attacker_Ability {
    ability_id: number;
    damage: number;
}
export interface CDOTAUserMsg_GlobalLightColor {
    color: number;
    duration: number;
}
export interface CDOTAUserMsg_GlobalLightDirection {
    direction: CMsgVector | undefined;
    duration: number;
}
export interface CDOTAUserMsg_LocationPing {
    player_id: number;
    location_ping: CDOTAMsg_LocationPing | undefined;
}
export interface CDOTAUserMsg_PingConfirmation {
    player_id_of_original_pinger: number;
    entity_index: number;
    icon_type: number;
    location: CMsgVector | undefined;
}
export interface CDOTAUserMsg_ItemAlert {
    player_id: number;
    item_alert: CDOTAMsg_ItemAlert | undefined;
}
export interface CDOTAUserMsg_EnemyItemAlert {
    player_id: number;
    target_player_id: number;
    item_ability_id: number;
    rune_type: number;
    entity_id: number;
    item_level: number;
    primary_charges: number;
    secondary_charges: number;
}
export interface CDOTAUserMsg_ModifierAlert {
    player_id: number;
    class_name: string;
    stack_count: number;
    is_debuff: boolean;
    target_entindex: number;
    seconds_remaining: number;
}
export interface CDOTAUserMsg_HPManaAlert {
    player_id: number;
    target_entindex: number;
    show_raw_values: boolean;
}
export interface CDOTAUserMsg_NeutralCampAlert {
    player_id: number;
    spawner_entindex: number;
    unit_entindex: number;
    stack_count: number;
    camp_type: number;
    stack_request: boolean;
    stack_intention: boolean;
}
export interface CDOTAUserMsg_GlyphAlert {
    player_id: number;
    negative: boolean;
}
export interface CDOTAUserMsg_RadarAlert {
    player_id: number;
    negative: boolean;
}
export interface CDOTAUserMsg_WillPurchaseAlert {
    item_ability_id: number;
    player_id: number;
    gold_remaining: number;
    suggestion_player_id: number;
}
export interface CDOTAUserMsg_EmptyTeleportAlert {
    source_player_id: number;
    target_player_id: number;
    cooldown_seconds: number;
}
export interface CDOTAUserMsg_MarsArenaOfBloodAttack {
    source_ehandle: number;
    target_ehandle: number;
    warrior_index: number;
}
export interface CDOTAEntityMsg_InvokerSpellCast {
    entity_msg: CEntityMsg | undefined;
    cast_activity: number;
}
export interface CDOTAUserMsg_BuyBackStateAlert {
    player_id: number;
}
export interface CDOTAUserMsg_QuickBuyAlert {
    player_id: number;
    item_ability_id: number;
    gold_cost: number;
    item_cooldown_seconds: number;
    show_buyback: boolean;
}
export interface CDOTAUserMsg_CourierKilledAlert {
    team: number;
    gold_value: number;
    entity_handle: number;
    timestamp: number;
    lost_items: CDOTAUserMsg_CourierKilledAlert_LostItem[];
    killer_player_id: number;
    owning_player_id: number;
}
export interface CDOTAUserMsg_CourierKilledAlert_LostItem {
    item_ability_id: number;
    quantity: number;
}
export interface CDOTAUserMsg_MinimapEvent {
    event_type: number;
    entity_handle: number;
    x: number;
    y: number;
    duration: number;
    target_entity_handle: number;
}
export interface CDOTAUserMsg_MapLine {
    player_id: number;
    mapline: CDOTAMsg_MapLine | undefined;
}
export interface CDOTAUserMsg_MinimapDebugPoint {
    location: CMsgVector | undefined;
    color: number;
    size: number;
    duration: number;
    index: number;
}
export interface CDOTAUserMsg_CreateLinearProjectile {
    origin: CMsgVector | undefined;
    velocity: CMsgVector2D | undefined;
    entindex: number;
    particle_index: string;
    handle: number;
    acceleration: CMsgVector2D | undefined;
    max_speed: number;
    fow_radius: number;
    sticky_fow_reveal: boolean;
    distance: number;
    colorgemcolor: number;
    particle_cp_data: CDOTAUserMsg_ProjectileParticleCPData[];
}
export interface CDOTAUserMsg_DestroyLinearProjectile {
    handle: number;
}
export interface CDOTAUserMsg_DodgeTrackingProjectiles {
    entindex: number;
    attacks_only: boolean;
}
export interface CDOTAUserMsg_SpectatorPlayerClick {
    entindex: number;
    order_type: number;
    target_index: number;
}
export interface CDOTAUserMsg_SpectatorPlayerUnitOrders {
    entindex: number;
    order_type: number;
    units: number[];
    target_index: number;
    ability_id: number;
    position: CMsgVector | undefined;
    queue: boolean;
    sequence_number: number;
    flags: number;
}
export interface CDOTAUserMsg_NevermoreRequiem {
    entity_handle: number;
    lines: number;
    origin: CMsgVector | undefined;
    reverse: boolean;
}
export interface CDOTAUserMsg_InvalidCommand {
    message: string;
    sequence_number: number;
}
export interface CDOTAUserMsg_HudError {
    order_id: number;
    sequence_number: number;
}
export interface CDOTAUserMsg_SharedCooldown {
    entindex: number;
    name: string;
    cooldown: number;
    name_index: number;
}
export interface CDOTAUserMsg_SetNextAutobuyItem {
    name: string;
}
export interface CDOTAUserMsg_HalloweenDrops {
    item_defs: number[];
    player_ids: number[];
    prize_list: number;
}
export interface CDOTAUserMsg_PredictionResult {
    account_id: number;
    match_id: string;
    correct: boolean;
    predictions: CDOTAUserMsg_PredictionResult_Prediction[];
}
export interface CDOTAUserMsg_PredictionResult_Prediction {
    item_def: number;
    num_correct: number;
    num_fails: number;
    result: CDOTAUserMsg_PredictionResult_Prediction_EResult;
    granted_item_defs: number[];
}
export declare enum CDOTAUserMsg_PredictionResult_Prediction_EResult {
    k_eResult_ItemGranted = 1,
    k_eResult_Destroyed = 2,
    UNRECOGNIZED = -1
}
export declare function cDOTAUserMsg_PredictionResult_Prediction_EResultFromJSON(object: any): CDOTAUserMsg_PredictionResult_Prediction_EResult;
export declare function cDOTAUserMsg_PredictionResult_Prediction_EResultToJSON(object: CDOTAUserMsg_PredictionResult_Prediction_EResult): string;
export interface CDOTAResponseQuerySerialized {
    facts: CDOTAResponseQuerySerialized_Fact[];
}
export interface CDOTAResponseQuerySerialized_Fact {
    key: number;
    valtype: CDOTAResponseQuerySerialized_Fact_ValueType;
    val_numeric: number;
    val_string: string;
    val_stringtable_index: number;
    val_int_numeric: number;
}
export declare enum CDOTAResponseQuerySerialized_Fact_ValueType {
    NUMERIC = 1,
    STRING = 2,
    STRINGTABLE_INDEX = 3,
    INT_NUMERIC = 4,
    UNRECOGNIZED = -1
}
export declare function cDOTAResponseQuerySerialized_Fact_ValueTypeFromJSON(object: any): CDOTAResponseQuerySerialized_Fact_ValueType;
export declare function cDOTAResponseQuerySerialized_Fact_ValueTypeToJSON(object: CDOTAResponseQuerySerialized_Fact_ValueType): string;
export interface CDOTASpeechMatchOnClient {
    speech_concept: number;
    recipient_type: number;
    responsequery: CDOTAResponseQuerySerialized | undefined;
    randomseed: number;
}
export interface CDOTAUserMsg_UnitEvent {
    msg_type: EDotaEntityMessages;
    entity_index: number;
    speech: CDOTAUserMsg_UnitEvent_Speech | undefined;
    speech_mute: CDOTAUserMsg_UnitEvent_SpeechMute | undefined;
    add_gesture: CDOTAUserMsg_UnitEvent_AddGesture | undefined;
    remove_gesture: CDOTAUserMsg_UnitEvent_RemoveGesture | undefined;
    blood_impact: CDOTAUserMsg_UnitEvent_BloodImpact | undefined;
    fade_gesture: CDOTAUserMsg_UnitEvent_FadeGesture | undefined;
    speech_match_on_client: CDOTASpeechMatchOnClient | undefined;
}
export interface CDOTAUserMsg_UnitEvent_Interval {
    start: number;
    range: number;
}
export interface CDOTAUserMsg_UnitEvent_Speech {
    speech_concept: number;
    response: string;
    recipient_type: number;
    muteable: boolean;
    predelay: CDOTAUserMsg_UnitEvent_Interval | undefined;
    flags: number;
}
export interface CDOTAUserMsg_UnitEvent_SpeechMute {
    delay: number;
}
export interface CDOTAUserMsg_UnitEvent_AddGesture {
    activity: number;
    slot: number;
    fade_in: number;
    fade_out: number;
    playback_rate: number;
    sequence_variant: number;
}
export interface CDOTAUserMsg_UnitEvent_RemoveGesture {
    activity: number;
}
export interface CDOTAUserMsg_UnitEvent_BloodImpact {
    scale: number;
    x_normal: number;
    y_normal: number;
}
export interface CDOTAUserMsg_UnitEvent_FadeGesture {
    activity: number;
}
export interface CDOTAUserMsg_ItemPurchased {
    item_ability_id: number;
}
export interface CDOTAUserMsg_ItemSold {
    item_ability_id: number;
}
export interface CDOTAUserMsg_ItemFound {
    player: number;
    quality: number;
    rarity: number;
    method: number;
    itemdef: number;
}
export interface CDOTAUserMsg_OverheadEvent {
    message_type: DOTA_OVERHEAD_ALERT;
    value: number;
    target_player_entindex: number;
    target_entindex: number;
    source_player_entindex: number;
}
export interface CDOTAUserMsg_TutorialTipInfo {
    name: string;
    progress: number;
}
export interface CDOTAUserMsg_TutorialFinish {
    heading: string;
    emblem: string;
    body: string;
    success: boolean;
}
export interface CDOTAUserMsg_TutorialMinimapPosition {
}
export interface CDOTAUserMsg_SendGenericToolTip {
    title: string;
    text: string;
    entindex: number;
    close: boolean;
}
export interface CDOTAUserMsg_WorldLine {
    player_id: number;
    worldline: CDOTAMsg_WorldLine | undefined;
}
export interface CDOTAUserMsg_ChatWheel {
    chat_message_id: number;
    player_id: number;
    account_id: number;
    param_hero_id: number;
    emoticon_id: number;
}
export interface CDOTAUserMsg_ReceivedXmasGift {
    player_id: number;
    item_name: string;
    inventory_slot: number;
}
export interface CDOTAUserMsg_ShowSurvey {
    survey_id: number;
    match_id: string;
    response_style: string;
    teammate_hero_id: number;
    teammate_name: string;
    teammate_account_id: number;
}
export interface CDOTAUserMsg_UpdateSharedContent {
    slot_type: number;
}
export interface CDOTAUserMsg_TutorialRequestExp {
}
export interface CDOTAUserMsg_TutorialFade {
    tgt_alpha: number;
}
export interface CDOTAUserMsg_TutorialPingMinimap {
    player_id: number;
    pos_x: number;
    pos_y: number;
    pos_z: number;
    entity_index: number;
}
export interface CDOTAUserMsg_GamerulesStateChanged {
    state: number;
}
export interface CDOTAUserMsg_AddQuestLogEntry {
    npc_name: string;
    npc_dialog: string;
}
export interface CDOTAUserMsg_SendStatPopup {
    player_id: number;
    statpopup: CDOTAMsg_SendStatPopup | undefined;
}
export interface CDOTAUserMsg_DismissAllStatPopups {
    dismissallmsg: CDOTAMsg_DismissAllStatPopups | undefined;
}
export interface CDOTAUserMsg_SendRoshanSpectatorPhase {
    phase: DOTA_ROSHAN_PHASE;
    phase_start_time: number;
    phase_length: number;
}
export interface CDOTAUserMsg_SendRoshanPopup {
    reclaimed: boolean;
    gametime: number;
}
export interface CDOTAUserMsg_SendFinalGold {
    reliable_gold: number[];
    unreliable_gold: number[];
}
export interface CDOTAUserMsg_CustomMsg {
    message: string;
    player_id: number;
    value: number;
}
export interface CDOTAUserMsg_CoachHUDPing {
    player_id: number;
    hud_ping: CDOTAMsg_CoachHUDPing | undefined;
}
export interface CDOTAUserMsg_ClientLoadGridNav {
}
export interface CDOTAUserMsg_TE_Projectile {
    source: number;
    target: number;
    ability: number;
    move_speed: number;
    source_attachment: number;
    particle_system_handle: string;
    dodgeable: boolean;
    is_attack: boolean;
    expire_time: number;
    maximpacttime: number;
    colorgemcolor: number;
    launch_tick: number;
    handle: number;
    target_loc: CMsgVector | undefined;
    particle_cp_data: CDOTAUserMsg_ProjectileParticleCPData[];
    additional_particle_system_handle: string;
}
export interface CDOTAUserMsg_TE_ProjectileLoc {
    source_loc: CMsgVector | undefined;
    target: number;
    move_speed: number;
    particle_system_handle: string;
    dodgeable: boolean;
    is_attack: boolean;
    expire_time: number;
    target_loc: CMsgVector | undefined;
    colorgemcolor: number;
    launch_tick: number;
    handle: number;
    source: number;
    source_attachment: number;
    particle_cp_data: CDOTAUserMsg_ProjectileParticleCPData[];
    additional_particle_system_handle: string;
}
export interface CDOTAUserMsg_TE_DestroyProjectile {
    handle: number;
}
export interface CDOTAUserMsg_TE_DotaBloodImpact {
    entity: number;
    scale: number;
    xnormal: number;
    ynormal: number;
}
export interface CDOTAUserMsg_AbilityPing {
    player_id: number;
    ability_id: number;
    type: DOTA_ABILITY_PING_TYPE;
    cooldown_seconds: number;
    level: number;
    passive: boolean;
    mana_needed: number;
    entity_id: number;
    primary_charges: number;
    secondary_charges: number;
    ctrl_held: boolean;
    reclaim_time: number;
}
export interface CDOTAUserMsg_TE_UnitAnimation {
    entity: number;
    sequence_variant: number;
    playbackrate: number;
    castpoint: number;
    type: number;
    activity: number;
    lag_compensation_time: number;
}
export interface CDOTAUserMsg_TE_UnitAnimationEnd {
    entity: number;
    snap: boolean;
}
export interface CDOTAUserMsg_ShowGenericPopup {
    header: string;
    body: string;
    param1: string;
    param2: string;
    tint_screen: boolean;
    show_no_other_dialogs: boolean;
}
export interface CDOTAUserMsg_VoteStart {
    title: string;
    duration: number;
    choice_count: number;
    choices: string[];
}
export interface CDOTAUserMsg_VoteUpdate {
    choice_counts: number[];
}
export interface CDOTAUserMsg_VoteEnd {
    selected_choice: number;
}
export interface CDOTAUserMsg_BoosterStatePlayer {
    player_id: number;
    bonus: number;
    event_bonus: number;
    bonus_item_id: number;
    event_bonus_item_id: number;
}
export interface CDOTAUserMsg_BoosterState {
    boosted_players: CDOTAUserMsg_BoosterStatePlayer[];
}
export interface CDOTAUserMsg_PlayerMMR {
    mmr: number[];
}
export interface CDOTAUserMsg_AbilitySteal {
    player_id: number;
    ability_id: number;
    ability_level: number;
}
export interface CDOTAUserMsg_StatsHeroLookup {
    player_id: number;
    hero_id: number;
    hero_name: string;
    persona: string;
}
export interface CDOTAUserMsg_StatsHeroPositionInfo {
    average_position: number;
    position_details: CDOTAUserMsg_StatsHeroPositionInfo_PositionPair[];
}
export interface CDOTAUserMsg_StatsHeroPositionInfo_PositionPair {
    position_category: DOTA_POSITION_CATEGORY;
    position_count: number;
}
export interface CDOTAUserMsg_StatsHeroMinuteDetails {
    last_hits: number;
    hero_kills: number;
    hero_damage: number;
    tower_damage: number;
    position_info: CDOTAUserMsg_StatsHeroPositionInfo | undefined;
    total_xp: number;
    net_worth: number;
    harvested_creep_gold: number;
    claimed_farm: number;
    wards_placed: number;
    runes_collected: number;
    tps_used: number;
    mana_spent: number[];
    damage_absorbed: number[];
    damage_done: number[];
}
export interface CDOTAUserMsg_StatsTeamMinuteDetails {
    player_stats: CDOTAUserMsg_StatsHeroMinuteDetails[];
    tower_kills: number;
    barrack_kills: number;
    available_lane_creep_gold: number;
    balance_kill_value: number;
    balance_tower_value: number;
    balance_barracks_value: number;
    balance_gold_value: number;
    balance_xp_value: number;
    lane_performance: CDOTAUserMsg_StatsTeamMinuteDetails_LocationPerformance[];
}
export interface CDOTAUserMsg_StatsTeamMinuteDetails_LocationPerformance {
    location_category: number;
    stat_type: number;
    value: number;
}
export interface CDOTAUserMsg_StatsPlayerKillShare {
    player_id: number;
    kill_share_percent: number;
    player_loc_x: number;
    player_loc_y: number;
    health_percent: number;
    mana_percent: number;
}
export interface CDOTAUserMsg_StatsKillDetails {
    victim_id: number;
    kill_shares: CDOTAUserMsg_StatsPlayerKillShare[];
    damage_to_kill: number;
    effective_health: number;
    death_time: number;
    killer_id: number;
}
export interface CDOTAUserMsg_StatsMatchDetails {
    hero_lookup: CDOTAUserMsg_StatsHeroLookup[];
    radiant_stats: CDOTAUserMsg_StatsTeamMinuteDetails[];
    dire_stats: CDOTAUserMsg_StatsTeamMinuteDetails[];
    radiant_kills: CDOTAUserMsg_StatsKillDetails[];
    dire_kills: CDOTAUserMsg_StatsKillDetails[];
    fight_details: CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightDetails[];
}
export interface CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightTeamDetails {
    participants: number[];
    deaths: number[];
    gold_delta: number;
    xp_delta: number;
}
export interface CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightDetails {
    start_time: number;
    end_time: number;
    radiant_fight_details: CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightTeamDetails | undefined;
    dire_fight_details: CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightTeamDetails | undefined;
}
export interface CDOTAUserMsg_MiniTaunt {
    taunting_player_id: number;
}
export interface CDOTAUserMsg_SpeechBubble {
    destroy_all: boolean;
}
export interface CDOTAUserMsg_CustomHeaderMessage {
    player_id: number;
    duration: number;
    message: string;
    value: number;
}
export interface CMsgHeroAbilityStat {
    stat_type: EHeroStatType;
    int_value: number;
    float_value: number;
}
export interface CMsgCombatAnalyzerPlayerStat {
    account_id: number;
    hero_ability_stats: CMsgHeroAbilityStat[];
}
export interface CMsgCombatAnalyzerStats {
    match_id: string;
    player_stats: CMsgCombatAnalyzerPlayerStat[];
}
export interface CDOTAUserMsg_BeastChat {
    team: number;
    format: string;
    message: string;
    target: string;
}
export interface CDOTAUserMsg_CustomHudElement_Create {
    element_id: string;
    layout_filename: string;
    data: string;
}
export interface CDOTAUserMsg_CustomHudElement_Modify {
    element_id: string;
    modify_visible: boolean;
    data: string;
}
export interface CDOTAUserMsg_CustomHudElement_Destroy {
    element_id: string;
}
export interface CDOTAUserMsg_CompendiumStatePlayer {
    player_id: number;
    level: number;
}
export interface CDOTAUserMsg_CompendiumState {
    compendium_players: CDOTAUserMsg_CompendiumStatePlayer[];
}
export interface CDOTAUserMsg_ProjectionAbility {
    ability_id: number;
    caster_ent_index: number;
    caster_team: number;
    channel_end: boolean;
    origin: CMsgVector | undefined;
    track_caster_only: boolean;
    end_time: number;
    victim_ent_index: number;
}
export interface CDOTAUserMsg_ProjectionEvent {
    event_id: EProjectionEvent;
    team: number;
}
export interface CDOTAUserMsg_XPAlert {
    player_id: number;
    target_entindex: number;
}
export interface CDOTAUserMsg_TalentTreeAlert {
    player_id: number;
    target_entindex: number;
    ability_id: number;
    slot: number;
    learned: boolean;
}
export interface CDOTAUserMsg_UpdateQuestProgress {
}
export interface CDOTAUserMsg_QuestStatus {
    player_id: number;
    quest_id: number;
    challenge_id: number;
    progress: number;
    goal: number;
    query: number;
    fail_gametime: number;
    item_ability_id: number;
}
export interface CDOTAUserMsg_SuggestHeroPick {
    player_id: number;
    hero_id: number;
    ban: boolean;
}
export interface CDOTAUserMsg_SuggestHeroRole {
    player_id: number;
    hero_role: string;
}
export interface CDOTAUserMsg_KillcamDamageTaken {
    player_id: number;
    damage_taken: number;
    item_type: number;
    item_ability_id: number;
    hero_name: string;
    damage_color: string;
}
export interface CDOTAUserMsg_SelectPenaltyGold {
    player_id: number;
    cost: number;
}
export interface CDOTAUserMsg_RollDiceResult {
    player_id: number;
    channel_type: number;
    roll_min: number;
    roll_max: number;
    result: number;
}
export interface CDOTAUserMsg_FlipCoinResult {
    player_id: number;
    channel_type: number;
    result: boolean;
}
export interface CDOTAUserMessage_RequestItemSuggestions {
    player_id: number;
}
export interface CDOTAUserMessage_TeamCaptainChanged {
    team: number;
    captain_player_id: number;
}
export interface CDOTAUserMsg_ChatWheelCooldown {
    message_id: number;
    cooldown_remaining: number;
}
export interface CDOTAUserMsg_HeroRelicProgress {
    hero_relic_type: number;
    value: number;
    ehandle: number;
    event_id: number;
    value_display: number;
}
export interface CDOTAUserMsg_AbilityDraftRequestAbility {
    player_id: number;
    requested_ability_id: number;
    ctrl_is_down: boolean;
}
export interface CDOTAUserMsg_DamageReport {
    player_id: number;
    target_hero_id: number;
    source_hero_id: number;
    damage_amount: number;
    broadcast: boolean;
}
export interface CDOTAUserMsg_SalutePlayer {
    source_player_id: number;
    target_player_id: number;
    tip_amount: number;
    event_id: number;
    custom_tip_style: string;
    num_recent_tips: number;
}
export interface CDOTAUserMsg_TipAlert {
    player_id: number;
    tip_text: string;
}
export interface CDOTAUserMsg_ReplaceQueryUnit {
    player_id: number;
    source_entindex: number;
    target_entindex: number;
}
export interface CDOTAUserMsg_ESArcanaCombo {
    ehandle: number;
    combo_count: number;
    arcana_level: number;
}
export interface CDOTAUserMsg_ESArcanaComboSummary {
    ehandle: number;
    combo_count: number;
    damage_amount: number;
}
export interface CDOTAUserMsg_OMArcanaCombo {
    ehandle: number;
    multicast_amount: number;
    arcana_level: number;
    multicast_chance: number;
}
export interface CDOTAUserMsg_HighFiveCompleted {
    player_id_1: number;
    player_id_2: number;
    special_high_five: boolean;
    special_entindex: number;
}
export interface CDOTAUserMsg_HighFiveLeftHanging {
    player_id: number;
}
export interface CDOTAUserMsg_ShovelUnearth {
    player_id: number;
    all_chat: boolean;
    locstring: string;
    quantity: number;
}
export interface CDOTAUserMsg_AllStarEvent {
    source_player_id: number;
    target_player_id: number;
    point_amount: number;
    event_id: number;
    player_scores: CDOTAUserMsg_AllStarEvent_PlayerScore[];
}
export interface CDOTAUserMsg_AllStarEvent_PlayerScore {
    player_id: number;
    score_sans_kda: number;
}
export interface CDOTAUserMsg_QueuedOrderRemoved {
    unit_order_sequence: number[];
}
export interface CDOTAUserMsg_DebugChallenge {
    challenge_type: number;
    challenge_query_id: number;
    event_id: number;
    instance_id: number;
    challenge_var_0: number;
    challenge_var_1: number;
    challenge_max_rank: number;
}
export interface CDOTAUserMsg_FoundNeutralItem {
    player_id: number;
    item_ability_id: number;
    item_tier: number;
    tier_item_count: number;
}
export interface CDOTAUserMsg_OutpostCaptured {
    outpost_entindex: number;
    team_id: number;
}
export interface CDOTAUserMsg_OutpostGrantedXP {
    team_id: number;
    xp_amount: number;
}
export interface CDOTAUserMsg_MoveCameraToUnit {
    unit_ehandle: number;
}
export interface CDOTAUserMsg_PauseMinigameData {
    data_bits: CDOTAUserMsg_PauseMinigameData_DataBit[];
}
export interface CDOTAUserMsg_PauseMinigameData_DataBit {
    index: number;
    data: number;
    data_extra: string;
}
export interface CDOTAUserMsg_VersusScene_PlayerBehavior {
    player_id: number;
    behavior: EDOTAVersusScenePlayerBehavior;
    play_activity: VersusScene_PlayActivity | undefined;
    chat_wheel: VersusScene_ChatWheel | undefined;
    playback_rate: VersusScene_PlaybackRate | undefined;
}
export interface CDOTAUserMsg_QoP_ArcanaSummary {
    ehandle: number;
    arcana_level: number;
    players_hit: number;
    players_killed: number;
}
export interface CDOTAUserMsg_HotPotato_Created {
    player_id_1: number;
    player_id_2: number;
}
export interface CDOTAUserMsg_HotPotato_Exploded {
    player_id: number;
}
export interface CDOTAUserMsg_WK_Arcana_Progress {
    ehandle: number;
    arcana_level: number;
    hero_id: number;
}
export interface CDOTAUserMsg_GuildChallenge_Progress {
    player_progress: CDOTAUserMsg_GuildChallenge_Progress_PlayerProgress[];
    guild_id: number;
    challenge_instance_id: number;
    challenge_parameter: number;
    challenge_type: CDOTAUserMsg_GuildChallenge_Progress_EChallengeType;
    challenge_progress_at_start: number;
    complete: boolean;
}
export declare enum CDOTAUserMsg_GuildChallenge_Progress_EChallengeType {
    k_EChallengeType_Invalid = 0,
    k_EChallengeType_Cooperative = 1,
    k_EChallengeType_Contract = 2,
    UNRECOGNIZED = -1
}
export declare function cDOTAUserMsg_GuildChallenge_Progress_EChallengeTypeFromJSON(object: any): CDOTAUserMsg_GuildChallenge_Progress_EChallengeType;
export declare function cDOTAUserMsg_GuildChallenge_Progress_EChallengeTypeToJSON(object: CDOTAUserMsg_GuildChallenge_Progress_EChallengeType): string;
export interface CDOTAUserMsg_GuildChallenge_Progress_PlayerProgress {
    player_id: number;
    progress: number;
}
export interface CDOTAUserMsg_WRArcanaProgress {
    ehandle: number;
    target_ehandle: number;
    arrows_landed: number;
    damage_dealt: number;
    target_hp: number;
    target_max_hp: number;
    arcana_level: number;
}
export interface CDOTAUserMsg_WRArcanaSummary {
    ehandle: number;
    target_ehandle: number;
    arrows_landed: number;
    damage_dealt: number;
    target_hp: number;
    target_max_hp: number;
    arcana_level: number;
    success: boolean;
}
export interface CDOTAUserMsg_EmptyItemSlotAlert {
    source_player_id: number;
    target_player_id: number;
    slot_index: number;
    cooldown_seconds: number;
}
export interface CDOTAUserMsg_AghsStatusAlert {
    source_player_id: number;
    target_player_id: number;
    target_entindex: number;
    alert_type: number;
    has_scepter: boolean;
    has_shard: boolean;
}
export interface CDOTAUserMsg_MutedPlayers {
    text_muted_player_ids: number[];
    voice_muted_player_ids: number[];
}
export interface CDOTAUserMsg_ContextualTip {
    tip_id: number;
    referenced_abilities: string[];
    referenced_units: string[];
    panorama_classes: string[];
    force_annotation: boolean;
    variant: number;
    int_param: number;
    int_param2: number;
    float_param: number;
    float_param2: number;
    string_param: string;
    string_param2: string;
    tip_text_override: string;
    tip_annotation_override: string;
    panorama_snippet: string;
}
export interface CDOTAUserMsg_ChatMessage {
    source_player_id: number;
    channel_type: number;
    message_text: string;
}
export interface CDOTAUserMsg_RockPaperScissorsStarted {
    player_id_source: number;
    player_id_target: number;
}
export interface CDOTAUserMsg_RockPaperScissorsFinished {
    player_id_1: number;
    player_id_2: number;
    player_1_choice: number;
    player_2_choice: number;
}
export interface CDOTAUserMsg_DuelOpponentKilled {
    player_id_winner: number;
    player_id_loser: number;
}
export interface CDOTAUserMsg_DuelAccepted {
    player_id_1: number;
    player_id_2: number;
}
export interface CDOTAUserMsg_DuelRequested {
    player_id_requestor: number;
}
export interface CDOTAUserMsg_MuertaReleaseEvent_AssignedTargetKilled {
    player_id_killer: number;
    player_id_target: number;
    points: number;
    points_total: number;
    last_hit: boolean;
}
export declare const CDOTAUserMsg_AIDebugLine: {
    fromJSON(object: any): CDOTAUserMsg_AIDebugLine;
    toJSON(message: CDOTAUserMsg_AIDebugLine): unknown;
    create<I extends {
        message?: string;
    } & {
        message?: string;
    } & { [K in Exclude<keyof I, "message">]: never; }>(base?: I): CDOTAUserMsg_AIDebugLine;
    fromPartial<I_1 extends {
        message?: string;
    } & {
        message?: string;
    } & { [K_1 in Exclude<keyof I_1, "message">]: never; }>(object: I_1): CDOTAUserMsg_AIDebugLine;
};
export declare const CDOTAUserMsg_Ping: {
    fromJSON(object: any): CDOTAUserMsg_Ping;
    toJSON(message: CDOTAUserMsg_Ping): unknown;
    create<I extends {
        ping?: number;
        loss?: number;
    } & {
        ping?: number;
        loss?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_Ping>]: never; }>(base?: I): CDOTAUserMsg_Ping;
    fromPartial<I_1 extends {
        ping?: number;
        loss?: number;
    } & {
        ping?: number;
        loss?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_Ping>]: never; }>(object: I_1): CDOTAUserMsg_Ping;
};
export declare const CDOTAUserMsg_SwapVerify: {
    fromJSON(object: any): CDOTAUserMsg_SwapVerify;
    toJSON(message: CDOTAUserMsg_SwapVerify): unknown;
    create<I extends {
        player_id?: number;
    } & {
        player_id?: number;
    } & { [K in Exclude<keyof I, "player_id">]: never; }>(base?: I): CDOTAUserMsg_SwapVerify;
    fromPartial<I_1 extends {
        player_id?: number;
    } & {
        player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "player_id">]: never; }>(object: I_1): CDOTAUserMsg_SwapVerify;
};
export declare const CDOTAUserMsg_ChatEvent: {
    fromJSON(object: any): CDOTAUserMsg_ChatEvent;
    toJSON(message: CDOTAUserMsg_ChatEvent): unknown;
    create<I extends {
        type?: DOTA_CHAT_MESSAGE;
        value?: number;
        playerid_1?: number;
        playerid_2?: number;
        playerid_3?: number;
        playerid_4?: number;
        playerid_5?: number;
        playerid_6?: number;
        value2?: number;
        value3?: number;
    } & {
        type?: DOTA_CHAT_MESSAGE;
        value?: number;
        playerid_1?: number;
        playerid_2?: number;
        playerid_3?: number;
        playerid_4?: number;
        playerid_5?: number;
        playerid_6?: number;
        value2?: number;
        value3?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_ChatEvent>]: never; }>(base?: I): CDOTAUserMsg_ChatEvent;
    fromPartial<I_1 extends {
        type?: DOTA_CHAT_MESSAGE;
        value?: number;
        playerid_1?: number;
        playerid_2?: number;
        playerid_3?: number;
        playerid_4?: number;
        playerid_5?: number;
        playerid_6?: number;
        value2?: number;
        value3?: number;
    } & {
        type?: DOTA_CHAT_MESSAGE;
        value?: number;
        playerid_1?: number;
        playerid_2?: number;
        playerid_3?: number;
        playerid_4?: number;
        playerid_5?: number;
        playerid_6?: number;
        value2?: number;
        value3?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_ChatEvent>]: never; }>(object: I_1): CDOTAUserMsg_ChatEvent;
};
export declare const CDOTAUserMsg_BotChat: {
    fromJSON(object: any): CDOTAUserMsg_BotChat;
    toJSON(message: CDOTAUserMsg_BotChat): unknown;
    create<I extends {
        player_id?: number;
        message?: string;
        target?: string;
        team_only?: boolean;
    } & {
        player_id?: number;
        message?: string;
        target?: string;
        team_only?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_BotChat>]: never; }>(base?: I): CDOTAUserMsg_BotChat;
    fromPartial<I_1 extends {
        player_id?: number;
        message?: string;
        target?: string;
        team_only?: boolean;
    } & {
        player_id?: number;
        message?: string;
        target?: string;
        team_only?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_BotChat>]: never; }>(object: I_1): CDOTAUserMsg_BotChat;
};
export declare const CDOTAUserMsg_CombatHeroPositions: {
    fromJSON(object: any): CDOTAUserMsg_CombatHeroPositions;
    toJSON(message: CDOTAUserMsg_CombatHeroPositions): unknown;
    create<I extends {
        index?: number;
        time?: number;
        world_pos?: {
            x?: number;
            y?: number;
        };
        health?: number;
    } & {
        index?: number;
        time?: number;
        world_pos?: {
            x?: number;
            y?: number;
        } & {
            x?: number;
            y?: number;
        } & { [K in Exclude<keyof I["world_pos"], keyof CMsgVector2D>]: never; };
        health?: number;
    } & { [K_1 in Exclude<keyof I, keyof CDOTAUserMsg_CombatHeroPositions>]: never; }>(base?: I): CDOTAUserMsg_CombatHeroPositions;
    fromPartial<I_1 extends {
        index?: number;
        time?: number;
        world_pos?: {
            x?: number;
            y?: number;
        };
        health?: number;
    } & {
        index?: number;
        time?: number;
        world_pos?: {
            x?: number;
            y?: number;
        } & {
            x?: number;
            y?: number;
        } & { [K_2 in Exclude<keyof I_1["world_pos"], keyof CMsgVector2D>]: never; };
        health?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CDOTAUserMsg_CombatHeroPositions>]: never; }>(object: I_1): CDOTAUserMsg_CombatHeroPositions;
};
export declare const CDOTAUserMsg_CombatLogBulkData: {
    fromJSON(object: any): CDOTAUserMsg_CombatLogBulkData;
    toJSON(message: CDOTAUserMsg_CombatLogBulkData): unknown;
    create<I extends {
        combat_entries?: {
            type?: import("./dota_shared_enums").DOTA_COMBATLOG_TYPES;
            target_name?: number;
            target_source_name?: number;
            attacker_name?: number;
            damage_source_name?: number;
            inflictor_name?: number;
            is_attacker_illusion?: boolean;
            is_attacker_hero?: boolean;
            is_target_illusion?: boolean;
            is_target_hero?: boolean;
            is_visible_radiant?: boolean;
            is_visible_dire?: boolean;
            value?: number;
            health?: number;
            timestamp?: number;
            stun_duration?: number;
            slow_duration?: number;
            is_ability_toggle_on?: boolean;
            is_ability_toggle_off?: boolean;
            ability_level?: number;
            location_x?: number;
            location_y?: number;
            gold_reason?: number;
            timestamp_raw?: number;
            modifier_duration?: number;
            xp_reason?: number;
            last_hits?: number;
            attacker_team?: number;
            target_team?: number;
            obs_wards_placed?: number;
            assist_player0?: number;
            assist_player1?: number;
            assist_player2?: number;
            assist_player3?: number;
            stack_count?: number;
            hidden_modifier?: boolean;
            is_target_building?: boolean;
            neutral_camp_type?: number;
            rune_type?: number;
            assist_players?: number[];
            is_heal_save?: boolean;
            is_ultimate_ability?: boolean;
            attacker_hero_level?: number;
            target_hero_level?: number;
            xpm?: number;
            gpm?: number;
            event_location?: number;
            target_is_self?: boolean;
            damage_type?: number;
            invisibility_modifier?: boolean;
            damage_category?: number;
            networth?: number;
            building_type?: number;
            modifier_elapsed_duration?: number;
            silence_modifier?: boolean;
            heal_from_lifesteal?: boolean;
            modifier_purged?: boolean;
            spell_evaded?: boolean;
            motion_controller_modifier?: boolean;
            long_range_kill?: boolean;
            modifier_purge_ability?: number;
            modifier_purge_npc?: number;
            root_modifier?: boolean;
            total_unit_death_count?: number;
            aura_modifier?: boolean;
            armor_debuff_modifier?: boolean;
            no_physical_damage_modifier?: boolean;
            modifier_ability?: number;
            modifier_hidden?: boolean;
            inflictor_is_stolen_ability?: boolean;
            kill_eater_event?: number;
            unit_status_label?: number;
            spell_generated_attack?: boolean;
            at_night_time?: boolean;
            attacker_has_scepter?: boolean;
            neutral_camp_team?: number;
            regenerated_health?: number;
            will_reincarnate?: boolean;
            uses_charges?: boolean;
        }[];
        timestamp?: number;
        duration?: number;
        player_id?: number;
        request_time?: number;
    } & {
        combat_entries?: {
            type?: import("./dota_shared_enums").DOTA_COMBATLOG_TYPES;
            target_name?: number;
            target_source_name?: number;
            attacker_name?: number;
            damage_source_name?: number;
            inflictor_name?: number;
            is_attacker_illusion?: boolean;
            is_attacker_hero?: boolean;
            is_target_illusion?: boolean;
            is_target_hero?: boolean;
            is_visible_radiant?: boolean;
            is_visible_dire?: boolean;
            value?: number;
            health?: number;
            timestamp?: number;
            stun_duration?: number;
            slow_duration?: number;
            is_ability_toggle_on?: boolean;
            is_ability_toggle_off?: boolean;
            ability_level?: number;
            location_x?: number;
            location_y?: number;
            gold_reason?: number;
            timestamp_raw?: number;
            modifier_duration?: number;
            xp_reason?: number;
            last_hits?: number;
            attacker_team?: number;
            target_team?: number;
            obs_wards_placed?: number;
            assist_player0?: number;
            assist_player1?: number;
            assist_player2?: number;
            assist_player3?: number;
            stack_count?: number;
            hidden_modifier?: boolean;
            is_target_building?: boolean;
            neutral_camp_type?: number;
            rune_type?: number;
            assist_players?: number[];
            is_heal_save?: boolean;
            is_ultimate_ability?: boolean;
            attacker_hero_level?: number;
            target_hero_level?: number;
            xpm?: number;
            gpm?: number;
            event_location?: number;
            target_is_self?: boolean;
            damage_type?: number;
            invisibility_modifier?: boolean;
            damage_category?: number;
            networth?: number;
            building_type?: number;
            modifier_elapsed_duration?: number;
            silence_modifier?: boolean;
            heal_from_lifesteal?: boolean;
            modifier_purged?: boolean;
            spell_evaded?: boolean;
            motion_controller_modifier?: boolean;
            long_range_kill?: boolean;
            modifier_purge_ability?: number;
            modifier_purge_npc?: number;
            root_modifier?: boolean;
            total_unit_death_count?: number;
            aura_modifier?: boolean;
            armor_debuff_modifier?: boolean;
            no_physical_damage_modifier?: boolean;
            modifier_ability?: number;
            modifier_hidden?: boolean;
            inflictor_is_stolen_ability?: boolean;
            kill_eater_event?: number;
            unit_status_label?: number;
            spell_generated_attack?: boolean;
            at_night_time?: boolean;
            attacker_has_scepter?: boolean;
            neutral_camp_team?: number;
            regenerated_health?: number;
            will_reincarnate?: boolean;
            uses_charges?: boolean;
        }[] & ({
            type?: import("./dota_shared_enums").DOTA_COMBATLOG_TYPES;
            target_name?: number;
            target_source_name?: number;
            attacker_name?: number;
            damage_source_name?: number;
            inflictor_name?: number;
            is_attacker_illusion?: boolean;
            is_attacker_hero?: boolean;
            is_target_illusion?: boolean;
            is_target_hero?: boolean;
            is_visible_radiant?: boolean;
            is_visible_dire?: boolean;
            value?: number;
            health?: number;
            timestamp?: number;
            stun_duration?: number;
            slow_duration?: number;
            is_ability_toggle_on?: boolean;
            is_ability_toggle_off?: boolean;
            ability_level?: number;
            location_x?: number;
            location_y?: number;
            gold_reason?: number;
            timestamp_raw?: number;
            modifier_duration?: number;
            xp_reason?: number;
            last_hits?: number;
            attacker_team?: number;
            target_team?: number;
            obs_wards_placed?: number;
            assist_player0?: number;
            assist_player1?: number;
            assist_player2?: number;
            assist_player3?: number;
            stack_count?: number;
            hidden_modifier?: boolean;
            is_target_building?: boolean;
            neutral_camp_type?: number;
            rune_type?: number;
            assist_players?: number[];
            is_heal_save?: boolean;
            is_ultimate_ability?: boolean;
            attacker_hero_level?: number;
            target_hero_level?: number;
            xpm?: number;
            gpm?: number;
            event_location?: number;
            target_is_self?: boolean;
            damage_type?: number;
            invisibility_modifier?: boolean;
            damage_category?: number;
            networth?: number;
            building_type?: number;
            modifier_elapsed_duration?: number;
            silence_modifier?: boolean;
            heal_from_lifesteal?: boolean;
            modifier_purged?: boolean;
            spell_evaded?: boolean;
            motion_controller_modifier?: boolean;
            long_range_kill?: boolean;
            modifier_purge_ability?: number;
            modifier_purge_npc?: number;
            root_modifier?: boolean;
            total_unit_death_count?: number;
            aura_modifier?: boolean;
            armor_debuff_modifier?: boolean;
            no_physical_damage_modifier?: boolean;
            modifier_ability?: number;
            modifier_hidden?: boolean;
            inflictor_is_stolen_ability?: boolean;
            kill_eater_event?: number;
            unit_status_label?: number;
            spell_generated_attack?: boolean;
            at_night_time?: boolean;
            attacker_has_scepter?: boolean;
            neutral_camp_team?: number;
            regenerated_health?: number;
            will_reincarnate?: boolean;
            uses_charges?: boolean;
        } & {
            type?: import("./dota_shared_enums").DOTA_COMBATLOG_TYPES;
            target_name?: number;
            target_source_name?: number;
            attacker_name?: number;
            damage_source_name?: number;
            inflictor_name?: number;
            is_attacker_illusion?: boolean;
            is_attacker_hero?: boolean;
            is_target_illusion?: boolean;
            is_target_hero?: boolean;
            is_visible_radiant?: boolean;
            is_visible_dire?: boolean;
            value?: number;
            health?: number;
            timestamp?: number;
            stun_duration?: number;
            slow_duration?: number;
            is_ability_toggle_on?: boolean;
            is_ability_toggle_off?: boolean;
            ability_level?: number;
            location_x?: number;
            location_y?: number;
            gold_reason?: number;
            timestamp_raw?: number;
            modifier_duration?: number;
            xp_reason?: number;
            last_hits?: number;
            attacker_team?: number;
            target_team?: number;
            obs_wards_placed?: number;
            assist_player0?: number;
            assist_player1?: number;
            assist_player2?: number;
            assist_player3?: number;
            stack_count?: number;
            hidden_modifier?: boolean;
            is_target_building?: boolean;
            neutral_camp_type?: number;
            rune_type?: number;
            assist_players?: number[] & number[] & { [K in Exclude<keyof I["combat_entries"][number]["assist_players"], keyof number[]>]: never; };
            is_heal_save?: boolean;
            is_ultimate_ability?: boolean;
            attacker_hero_level?: number;
            target_hero_level?: number;
            xpm?: number;
            gpm?: number;
            event_location?: number;
            target_is_self?: boolean;
            damage_type?: number;
            invisibility_modifier?: boolean;
            damage_category?: number;
            networth?: number;
            building_type?: number;
            modifier_elapsed_duration?: number;
            silence_modifier?: boolean;
            heal_from_lifesteal?: boolean;
            modifier_purged?: boolean;
            spell_evaded?: boolean;
            motion_controller_modifier?: boolean;
            long_range_kill?: boolean;
            modifier_purge_ability?: number;
            modifier_purge_npc?: number;
            root_modifier?: boolean;
            total_unit_death_count?: number;
            aura_modifier?: boolean;
            armor_debuff_modifier?: boolean;
            no_physical_damage_modifier?: boolean;
            modifier_ability?: number;
            modifier_hidden?: boolean;
            inflictor_is_stolen_ability?: boolean;
            kill_eater_event?: number;
            unit_status_label?: number;
            spell_generated_attack?: boolean;
            at_night_time?: boolean;
            attacker_has_scepter?: boolean;
            neutral_camp_team?: number;
            regenerated_health?: number;
            will_reincarnate?: boolean;
            uses_charges?: boolean;
        } & { [K_1 in Exclude<keyof I["combat_entries"][number], keyof CMsgDOTACombatLogEntry>]: never; })[] & { [K_2 in Exclude<keyof I["combat_entries"], keyof {
            type?: import("./dota_shared_enums").DOTA_COMBATLOG_TYPES;
            target_name?: number;
            target_source_name?: number;
            attacker_name?: number;
            damage_source_name?: number;
            inflictor_name?: number;
            is_attacker_illusion?: boolean;
            is_attacker_hero?: boolean;
            is_target_illusion?: boolean;
            is_target_hero?: boolean;
            is_visible_radiant?: boolean;
            is_visible_dire?: boolean;
            value?: number;
            health?: number;
            timestamp?: number;
            stun_duration?: number;
            slow_duration?: number;
            is_ability_toggle_on?: boolean;
            is_ability_toggle_off?: boolean;
            ability_level?: number;
            location_x?: number;
            location_y?: number;
            gold_reason?: number;
            timestamp_raw?: number;
            modifier_duration?: number;
            xp_reason?: number;
            last_hits?: number;
            attacker_team?: number;
            target_team?: number;
            obs_wards_placed?: number;
            assist_player0?: number;
            assist_player1?: number;
            assist_player2?: number;
            assist_player3?: number;
            stack_count?: number;
            hidden_modifier?: boolean;
            is_target_building?: boolean;
            neutral_camp_type?: number;
            rune_type?: number;
            assist_players?: number[];
            is_heal_save?: boolean;
            is_ultimate_ability?: boolean;
            attacker_hero_level?: number;
            target_hero_level?: number;
            xpm?: number;
            gpm?: number;
            event_location?: number;
            target_is_self?: boolean;
            damage_type?: number;
            invisibility_modifier?: boolean;
            damage_category?: number;
            networth?: number;
            building_type?: number;
            modifier_elapsed_duration?: number;
            silence_modifier?: boolean;
            heal_from_lifesteal?: boolean;
            modifier_purged?: boolean;
            spell_evaded?: boolean;
            motion_controller_modifier?: boolean;
            long_range_kill?: boolean;
            modifier_purge_ability?: number;
            modifier_purge_npc?: number;
            root_modifier?: boolean;
            total_unit_death_count?: number;
            aura_modifier?: boolean;
            armor_debuff_modifier?: boolean;
            no_physical_damage_modifier?: boolean;
            modifier_ability?: number;
            modifier_hidden?: boolean;
            inflictor_is_stolen_ability?: boolean;
            kill_eater_event?: number;
            unit_status_label?: number;
            spell_generated_attack?: boolean;
            at_night_time?: boolean;
            attacker_has_scepter?: boolean;
            neutral_camp_team?: number;
            regenerated_health?: number;
            will_reincarnate?: boolean;
            uses_charges?: boolean;
        }[]>]: never; };
        timestamp?: number;
        duration?: number;
        player_id?: number;
        request_time?: number;
    } & { [K_3 in Exclude<keyof I, keyof CDOTAUserMsg_CombatLogBulkData>]: never; }>(base?: I): CDOTAUserMsg_CombatLogBulkData;
    fromPartial<I_1 extends {
        combat_entries?: {
            type?: import("./dota_shared_enums").DOTA_COMBATLOG_TYPES;
            target_name?: number;
            target_source_name?: number;
            attacker_name?: number;
            damage_source_name?: number;
            inflictor_name?: number;
            is_attacker_illusion?: boolean;
            is_attacker_hero?: boolean;
            is_target_illusion?: boolean;
            is_target_hero?: boolean;
            is_visible_radiant?: boolean;
            is_visible_dire?: boolean;
            value?: number;
            health?: number;
            timestamp?: number;
            stun_duration?: number;
            slow_duration?: number;
            is_ability_toggle_on?: boolean;
            is_ability_toggle_off?: boolean;
            ability_level?: number;
            location_x?: number;
            location_y?: number;
            gold_reason?: number;
            timestamp_raw?: number;
            modifier_duration?: number;
            xp_reason?: number;
            last_hits?: number;
            attacker_team?: number;
            target_team?: number;
            obs_wards_placed?: number;
            assist_player0?: number;
            assist_player1?: number;
            assist_player2?: number;
            assist_player3?: number;
            stack_count?: number;
            hidden_modifier?: boolean;
            is_target_building?: boolean;
            neutral_camp_type?: number;
            rune_type?: number;
            assist_players?: number[];
            is_heal_save?: boolean;
            is_ultimate_ability?: boolean;
            attacker_hero_level?: number;
            target_hero_level?: number;
            xpm?: number;
            gpm?: number;
            event_location?: number;
            target_is_self?: boolean;
            damage_type?: number;
            invisibility_modifier?: boolean;
            damage_category?: number;
            networth?: number;
            building_type?: number;
            modifier_elapsed_duration?: number;
            silence_modifier?: boolean;
            heal_from_lifesteal?: boolean;
            modifier_purged?: boolean;
            spell_evaded?: boolean;
            motion_controller_modifier?: boolean;
            long_range_kill?: boolean;
            modifier_purge_ability?: number;
            modifier_purge_npc?: number;
            root_modifier?: boolean;
            total_unit_death_count?: number;
            aura_modifier?: boolean;
            armor_debuff_modifier?: boolean;
            no_physical_damage_modifier?: boolean;
            modifier_ability?: number;
            modifier_hidden?: boolean;
            inflictor_is_stolen_ability?: boolean;
            kill_eater_event?: number;
            unit_status_label?: number;
            spell_generated_attack?: boolean;
            at_night_time?: boolean;
            attacker_has_scepter?: boolean;
            neutral_camp_team?: number;
            regenerated_health?: number;
            will_reincarnate?: boolean;
            uses_charges?: boolean;
        }[];
        timestamp?: number;
        duration?: number;
        player_id?: number;
        request_time?: number;
    } & {
        combat_entries?: {
            type?: import("./dota_shared_enums").DOTA_COMBATLOG_TYPES;
            target_name?: number;
            target_source_name?: number;
            attacker_name?: number;
            damage_source_name?: number;
            inflictor_name?: number;
            is_attacker_illusion?: boolean;
            is_attacker_hero?: boolean;
            is_target_illusion?: boolean;
            is_target_hero?: boolean;
            is_visible_radiant?: boolean;
            is_visible_dire?: boolean;
            value?: number;
            health?: number;
            timestamp?: number;
            stun_duration?: number;
            slow_duration?: number;
            is_ability_toggle_on?: boolean;
            is_ability_toggle_off?: boolean;
            ability_level?: number;
            location_x?: number;
            location_y?: number;
            gold_reason?: number;
            timestamp_raw?: number;
            modifier_duration?: number;
            xp_reason?: number;
            last_hits?: number;
            attacker_team?: number;
            target_team?: number;
            obs_wards_placed?: number;
            assist_player0?: number;
            assist_player1?: number;
            assist_player2?: number;
            assist_player3?: number;
            stack_count?: number;
            hidden_modifier?: boolean;
            is_target_building?: boolean;
            neutral_camp_type?: number;
            rune_type?: number;
            assist_players?: number[];
            is_heal_save?: boolean;
            is_ultimate_ability?: boolean;
            attacker_hero_level?: number;
            target_hero_level?: number;
            xpm?: number;
            gpm?: number;
            event_location?: number;
            target_is_self?: boolean;
            damage_type?: number;
            invisibility_modifier?: boolean;
            damage_category?: number;
            networth?: number;
            building_type?: number;
            modifier_elapsed_duration?: number;
            silence_modifier?: boolean;
            heal_from_lifesteal?: boolean;
            modifier_purged?: boolean;
            spell_evaded?: boolean;
            motion_controller_modifier?: boolean;
            long_range_kill?: boolean;
            modifier_purge_ability?: number;
            modifier_purge_npc?: number;
            root_modifier?: boolean;
            total_unit_death_count?: number;
            aura_modifier?: boolean;
            armor_debuff_modifier?: boolean;
            no_physical_damage_modifier?: boolean;
            modifier_ability?: number;
            modifier_hidden?: boolean;
            inflictor_is_stolen_ability?: boolean;
            kill_eater_event?: number;
            unit_status_label?: number;
            spell_generated_attack?: boolean;
            at_night_time?: boolean;
            attacker_has_scepter?: boolean;
            neutral_camp_team?: number;
            regenerated_health?: number;
            will_reincarnate?: boolean;
            uses_charges?: boolean;
        }[] & ({
            type?: import("./dota_shared_enums").DOTA_COMBATLOG_TYPES;
            target_name?: number;
            target_source_name?: number;
            attacker_name?: number;
            damage_source_name?: number;
            inflictor_name?: number;
            is_attacker_illusion?: boolean;
            is_attacker_hero?: boolean;
            is_target_illusion?: boolean;
            is_target_hero?: boolean;
            is_visible_radiant?: boolean;
            is_visible_dire?: boolean;
            value?: number;
            health?: number;
            timestamp?: number;
            stun_duration?: number;
            slow_duration?: number;
            is_ability_toggle_on?: boolean;
            is_ability_toggle_off?: boolean;
            ability_level?: number;
            location_x?: number;
            location_y?: number;
            gold_reason?: number;
            timestamp_raw?: number;
            modifier_duration?: number;
            xp_reason?: number;
            last_hits?: number;
            attacker_team?: number;
            target_team?: number;
            obs_wards_placed?: number;
            assist_player0?: number;
            assist_player1?: number;
            assist_player2?: number;
            assist_player3?: number;
            stack_count?: number;
            hidden_modifier?: boolean;
            is_target_building?: boolean;
            neutral_camp_type?: number;
            rune_type?: number;
            assist_players?: number[];
            is_heal_save?: boolean;
            is_ultimate_ability?: boolean;
            attacker_hero_level?: number;
            target_hero_level?: number;
            xpm?: number;
            gpm?: number;
            event_location?: number;
            target_is_self?: boolean;
            damage_type?: number;
            invisibility_modifier?: boolean;
            damage_category?: number;
            networth?: number;
            building_type?: number;
            modifier_elapsed_duration?: number;
            silence_modifier?: boolean;
            heal_from_lifesteal?: boolean;
            modifier_purged?: boolean;
            spell_evaded?: boolean;
            motion_controller_modifier?: boolean;
            long_range_kill?: boolean;
            modifier_purge_ability?: number;
            modifier_purge_npc?: number;
            root_modifier?: boolean;
            total_unit_death_count?: number;
            aura_modifier?: boolean;
            armor_debuff_modifier?: boolean;
            no_physical_damage_modifier?: boolean;
            modifier_ability?: number;
            modifier_hidden?: boolean;
            inflictor_is_stolen_ability?: boolean;
            kill_eater_event?: number;
            unit_status_label?: number;
            spell_generated_attack?: boolean;
            at_night_time?: boolean;
            attacker_has_scepter?: boolean;
            neutral_camp_team?: number;
            regenerated_health?: number;
            will_reincarnate?: boolean;
            uses_charges?: boolean;
        } & {
            type?: import("./dota_shared_enums").DOTA_COMBATLOG_TYPES;
            target_name?: number;
            target_source_name?: number;
            attacker_name?: number;
            damage_source_name?: number;
            inflictor_name?: number;
            is_attacker_illusion?: boolean;
            is_attacker_hero?: boolean;
            is_target_illusion?: boolean;
            is_target_hero?: boolean;
            is_visible_radiant?: boolean;
            is_visible_dire?: boolean;
            value?: number;
            health?: number;
            timestamp?: number;
            stun_duration?: number;
            slow_duration?: number;
            is_ability_toggle_on?: boolean;
            is_ability_toggle_off?: boolean;
            ability_level?: number;
            location_x?: number;
            location_y?: number;
            gold_reason?: number;
            timestamp_raw?: number;
            modifier_duration?: number;
            xp_reason?: number;
            last_hits?: number;
            attacker_team?: number;
            target_team?: number;
            obs_wards_placed?: number;
            assist_player0?: number;
            assist_player1?: number;
            assist_player2?: number;
            assist_player3?: number;
            stack_count?: number;
            hidden_modifier?: boolean;
            is_target_building?: boolean;
            neutral_camp_type?: number;
            rune_type?: number;
            assist_players?: number[] & number[] & { [K_4 in Exclude<keyof I_1["combat_entries"][number]["assist_players"], keyof number[]>]: never; };
            is_heal_save?: boolean;
            is_ultimate_ability?: boolean;
            attacker_hero_level?: number;
            target_hero_level?: number;
            xpm?: number;
            gpm?: number;
            event_location?: number;
            target_is_self?: boolean;
            damage_type?: number;
            invisibility_modifier?: boolean;
            damage_category?: number;
            networth?: number;
            building_type?: number;
            modifier_elapsed_duration?: number;
            silence_modifier?: boolean;
            heal_from_lifesteal?: boolean;
            modifier_purged?: boolean;
            spell_evaded?: boolean;
            motion_controller_modifier?: boolean;
            long_range_kill?: boolean;
            modifier_purge_ability?: number;
            modifier_purge_npc?: number;
            root_modifier?: boolean;
            total_unit_death_count?: number;
            aura_modifier?: boolean;
            armor_debuff_modifier?: boolean;
            no_physical_damage_modifier?: boolean;
            modifier_ability?: number;
            modifier_hidden?: boolean;
            inflictor_is_stolen_ability?: boolean;
            kill_eater_event?: number;
            unit_status_label?: number;
            spell_generated_attack?: boolean;
            at_night_time?: boolean;
            attacker_has_scepter?: boolean;
            neutral_camp_team?: number;
            regenerated_health?: number;
            will_reincarnate?: boolean;
            uses_charges?: boolean;
        } & { [K_5 in Exclude<keyof I_1["combat_entries"][number], keyof CMsgDOTACombatLogEntry>]: never; })[] & { [K_6 in Exclude<keyof I_1["combat_entries"], keyof {
            type?: import("./dota_shared_enums").DOTA_COMBATLOG_TYPES;
            target_name?: number;
            target_source_name?: number;
            attacker_name?: number;
            damage_source_name?: number;
            inflictor_name?: number;
            is_attacker_illusion?: boolean;
            is_attacker_hero?: boolean;
            is_target_illusion?: boolean;
            is_target_hero?: boolean;
            is_visible_radiant?: boolean;
            is_visible_dire?: boolean;
            value?: number;
            health?: number;
            timestamp?: number;
            stun_duration?: number;
            slow_duration?: number;
            is_ability_toggle_on?: boolean;
            is_ability_toggle_off?: boolean;
            ability_level?: number;
            location_x?: number;
            location_y?: number;
            gold_reason?: number;
            timestamp_raw?: number;
            modifier_duration?: number;
            xp_reason?: number;
            last_hits?: number;
            attacker_team?: number;
            target_team?: number;
            obs_wards_placed?: number;
            assist_player0?: number;
            assist_player1?: number;
            assist_player2?: number;
            assist_player3?: number;
            stack_count?: number;
            hidden_modifier?: boolean;
            is_target_building?: boolean;
            neutral_camp_type?: number;
            rune_type?: number;
            assist_players?: number[];
            is_heal_save?: boolean;
            is_ultimate_ability?: boolean;
            attacker_hero_level?: number;
            target_hero_level?: number;
            xpm?: number;
            gpm?: number;
            event_location?: number;
            target_is_self?: boolean;
            damage_type?: number;
            invisibility_modifier?: boolean;
            damage_category?: number;
            networth?: number;
            building_type?: number;
            modifier_elapsed_duration?: number;
            silence_modifier?: boolean;
            heal_from_lifesteal?: boolean;
            modifier_purged?: boolean;
            spell_evaded?: boolean;
            motion_controller_modifier?: boolean;
            long_range_kill?: boolean;
            modifier_purge_ability?: number;
            modifier_purge_npc?: number;
            root_modifier?: boolean;
            total_unit_death_count?: number;
            aura_modifier?: boolean;
            armor_debuff_modifier?: boolean;
            no_physical_damage_modifier?: boolean;
            modifier_ability?: number;
            modifier_hidden?: boolean;
            inflictor_is_stolen_ability?: boolean;
            kill_eater_event?: number;
            unit_status_label?: number;
            spell_generated_attack?: boolean;
            at_night_time?: boolean;
            attacker_has_scepter?: boolean;
            neutral_camp_team?: number;
            regenerated_health?: number;
            will_reincarnate?: boolean;
            uses_charges?: boolean;
        }[]>]: never; };
        timestamp?: number;
        duration?: number;
        player_id?: number;
        request_time?: number;
    } & { [K_7 in Exclude<keyof I_1, keyof CDOTAUserMsg_CombatLogBulkData>]: never; }>(object: I_1): CDOTAUserMsg_CombatLogBulkData;
};
export declare const CDOTAUserMsg_ProjectileParticleCPData: {
    fromJSON(object: any): CDOTAUserMsg_ProjectileParticleCPData;
    toJSON(message: CDOTAUserMsg_ProjectileParticleCPData): unknown;
    create<I extends {
        control_point?: number;
        vector?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
    } & {
        control_point?: number;
        vector?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["vector"], keyof CMsgVector>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CDOTAUserMsg_ProjectileParticleCPData>]: never; }>(base?: I): CDOTAUserMsg_ProjectileParticleCPData;
    fromPartial<I_1 extends {
        control_point?: number;
        vector?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
    } & {
        control_point?: number;
        vector?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_2 in Exclude<keyof I_1["vector"], keyof CMsgVector>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CDOTAUserMsg_ProjectileParticleCPData>]: never; }>(object: I_1): CDOTAUserMsg_ProjectileParticleCPData;
};
export declare const CDOTAUserMsg_MiniKillCamInfo: {
    fromJSON(object: any): CDOTAUserMsg_MiniKillCamInfo;
    toJSON(message: CDOTAUserMsg_MiniKillCamInfo): unknown;
    create<I extends {
        attackers?: {
            attacker?: number;
            total_damage?: number;
            abilities?: {
                ability_id?: number;
                damage?: number;
            }[];
            attacker_name?: string;
        }[];
    } & {
        attackers?: {
            attacker?: number;
            total_damage?: number;
            abilities?: {
                ability_id?: number;
                damage?: number;
            }[];
            attacker_name?: string;
        }[] & ({
            attacker?: number;
            total_damage?: number;
            abilities?: {
                ability_id?: number;
                damage?: number;
            }[];
            attacker_name?: string;
        } & {
            attacker?: number;
            total_damage?: number;
            abilities?: {
                ability_id?: number;
                damage?: number;
            }[] & ({
                ability_id?: number;
                damage?: number;
            } & {
                ability_id?: number;
                damage?: number;
            } & { [K in Exclude<keyof I["attackers"][number]["abilities"][number], keyof CDOTAUserMsg_MiniKillCamInfo_Attacker_Ability>]: never; })[] & { [K_1 in Exclude<keyof I["attackers"][number]["abilities"], keyof {
                ability_id?: number;
                damage?: number;
            }[]>]: never; };
            attacker_name?: string;
        } & { [K_2 in Exclude<keyof I["attackers"][number], keyof CDOTAUserMsg_MiniKillCamInfo_Attacker>]: never; })[] & { [K_3 in Exclude<keyof I["attackers"], keyof {
            attacker?: number;
            total_damage?: number;
            abilities?: {
                ability_id?: number;
                damage?: number;
            }[];
            attacker_name?: string;
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, "attackers">]: never; }>(base?: I): CDOTAUserMsg_MiniKillCamInfo;
    fromPartial<I_1 extends {
        attackers?: {
            attacker?: number;
            total_damage?: number;
            abilities?: {
                ability_id?: number;
                damage?: number;
            }[];
            attacker_name?: string;
        }[];
    } & {
        attackers?: {
            attacker?: number;
            total_damage?: number;
            abilities?: {
                ability_id?: number;
                damage?: number;
            }[];
            attacker_name?: string;
        }[] & ({
            attacker?: number;
            total_damage?: number;
            abilities?: {
                ability_id?: number;
                damage?: number;
            }[];
            attacker_name?: string;
        } & {
            attacker?: number;
            total_damage?: number;
            abilities?: {
                ability_id?: number;
                damage?: number;
            }[] & ({
                ability_id?: number;
                damage?: number;
            } & {
                ability_id?: number;
                damage?: number;
            } & { [K_5 in Exclude<keyof I_1["attackers"][number]["abilities"][number], keyof CDOTAUserMsg_MiniKillCamInfo_Attacker_Ability>]: never; })[] & { [K_6 in Exclude<keyof I_1["attackers"][number]["abilities"], keyof {
                ability_id?: number;
                damage?: number;
            }[]>]: never; };
            attacker_name?: string;
        } & { [K_7 in Exclude<keyof I_1["attackers"][number], keyof CDOTAUserMsg_MiniKillCamInfo_Attacker>]: never; })[] & { [K_8 in Exclude<keyof I_1["attackers"], keyof {
            attacker?: number;
            total_damage?: number;
            abilities?: {
                ability_id?: number;
                damage?: number;
            }[];
            attacker_name?: string;
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "attackers">]: never; }>(object: I_1): CDOTAUserMsg_MiniKillCamInfo;
};
export declare const CDOTAUserMsg_MiniKillCamInfo_Attacker: {
    fromJSON(object: any): CDOTAUserMsg_MiniKillCamInfo_Attacker;
    toJSON(message: CDOTAUserMsg_MiniKillCamInfo_Attacker): unknown;
    create<I extends {
        attacker?: number;
        total_damage?: number;
        abilities?: {
            ability_id?: number;
            damage?: number;
        }[];
        attacker_name?: string;
    } & {
        attacker?: number;
        total_damage?: number;
        abilities?: {
            ability_id?: number;
            damage?: number;
        }[] & ({
            ability_id?: number;
            damage?: number;
        } & {
            ability_id?: number;
            damage?: number;
        } & { [K in Exclude<keyof I["abilities"][number], keyof CDOTAUserMsg_MiniKillCamInfo_Attacker_Ability>]: never; })[] & { [K_1 in Exclude<keyof I["abilities"], keyof {
            ability_id?: number;
            damage?: number;
        }[]>]: never; };
        attacker_name?: string;
    } & { [K_2 in Exclude<keyof I, keyof CDOTAUserMsg_MiniKillCamInfo_Attacker>]: never; }>(base?: I): CDOTAUserMsg_MiniKillCamInfo_Attacker;
    fromPartial<I_1 extends {
        attacker?: number;
        total_damage?: number;
        abilities?: {
            ability_id?: number;
            damage?: number;
        }[];
        attacker_name?: string;
    } & {
        attacker?: number;
        total_damage?: number;
        abilities?: {
            ability_id?: number;
            damage?: number;
        }[] & ({
            ability_id?: number;
            damage?: number;
        } & {
            ability_id?: number;
            damage?: number;
        } & { [K_3 in Exclude<keyof I_1["abilities"][number], keyof CDOTAUserMsg_MiniKillCamInfo_Attacker_Ability>]: never; })[] & { [K_4 in Exclude<keyof I_1["abilities"], keyof {
            ability_id?: number;
            damage?: number;
        }[]>]: never; };
        attacker_name?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof CDOTAUserMsg_MiniKillCamInfo_Attacker>]: never; }>(object: I_1): CDOTAUserMsg_MiniKillCamInfo_Attacker;
};
export declare const CDOTAUserMsg_MiniKillCamInfo_Attacker_Ability: {
    fromJSON(object: any): CDOTAUserMsg_MiniKillCamInfo_Attacker_Ability;
    toJSON(message: CDOTAUserMsg_MiniKillCamInfo_Attacker_Ability): unknown;
    create<I extends {
        ability_id?: number;
        damage?: number;
    } & {
        ability_id?: number;
        damage?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_MiniKillCamInfo_Attacker_Ability>]: never; }>(base?: I): CDOTAUserMsg_MiniKillCamInfo_Attacker_Ability;
    fromPartial<I_1 extends {
        ability_id?: number;
        damage?: number;
    } & {
        ability_id?: number;
        damage?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_MiniKillCamInfo_Attacker_Ability>]: never; }>(object: I_1): CDOTAUserMsg_MiniKillCamInfo_Attacker_Ability;
};
export declare const CDOTAUserMsg_GlobalLightColor: {
    fromJSON(object: any): CDOTAUserMsg_GlobalLightColor;
    toJSON(message: CDOTAUserMsg_GlobalLightColor): unknown;
    create<I extends {
        color?: number;
        duration?: number;
    } & {
        color?: number;
        duration?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_GlobalLightColor>]: never; }>(base?: I): CDOTAUserMsg_GlobalLightColor;
    fromPartial<I_1 extends {
        color?: number;
        duration?: number;
    } & {
        color?: number;
        duration?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_GlobalLightColor>]: never; }>(object: I_1): CDOTAUserMsg_GlobalLightColor;
};
export declare const CDOTAUserMsg_GlobalLightDirection: {
    fromJSON(object: any): CDOTAUserMsg_GlobalLightDirection;
    toJSON(message: CDOTAUserMsg_GlobalLightDirection): unknown;
    create<I extends {
        direction?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        duration?: number;
    } & {
        direction?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["direction"], keyof CMsgVector>]: never; };
        duration?: number;
    } & { [K_1 in Exclude<keyof I, keyof CDOTAUserMsg_GlobalLightDirection>]: never; }>(base?: I): CDOTAUserMsg_GlobalLightDirection;
    fromPartial<I_1 extends {
        direction?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        duration?: number;
    } & {
        direction?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_2 in Exclude<keyof I_1["direction"], keyof CMsgVector>]: never; };
        duration?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CDOTAUserMsg_GlobalLightDirection>]: never; }>(object: I_1): CDOTAUserMsg_GlobalLightDirection;
};
export declare const CDOTAUserMsg_LocationPing: {
    fromJSON(object: any): CDOTAUserMsg_LocationPing;
    toJSON(message: CDOTAUserMsg_LocationPing): unknown;
    create<I extends {
        player_id?: number;
        location_ping?: {
            x?: number;
            y?: number;
            target?: number;
            direct_ping?: boolean;
            type?: number;
            ping_source?: import("./dota_commonmessages").EPingSource;
        };
    } & {
        player_id?: number;
        location_ping?: {
            x?: number;
            y?: number;
            target?: number;
            direct_ping?: boolean;
            type?: number;
            ping_source?: import("./dota_commonmessages").EPingSource;
        } & {
            x?: number;
            y?: number;
            target?: number;
            direct_ping?: boolean;
            type?: number;
            ping_source?: import("./dota_commonmessages").EPingSource;
        } & { [K in Exclude<keyof I["location_ping"], keyof CDOTAMsg_LocationPing>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CDOTAUserMsg_LocationPing>]: never; }>(base?: I): CDOTAUserMsg_LocationPing;
    fromPartial<I_1 extends {
        player_id?: number;
        location_ping?: {
            x?: number;
            y?: number;
            target?: number;
            direct_ping?: boolean;
            type?: number;
            ping_source?: import("./dota_commonmessages").EPingSource;
        };
    } & {
        player_id?: number;
        location_ping?: {
            x?: number;
            y?: number;
            target?: number;
            direct_ping?: boolean;
            type?: number;
            ping_source?: import("./dota_commonmessages").EPingSource;
        } & {
            x?: number;
            y?: number;
            target?: number;
            direct_ping?: boolean;
            type?: number;
            ping_source?: import("./dota_commonmessages").EPingSource;
        } & { [K_2 in Exclude<keyof I_1["location_ping"], keyof CDOTAMsg_LocationPing>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CDOTAUserMsg_LocationPing>]: never; }>(object: I_1): CDOTAUserMsg_LocationPing;
};
export declare const CDOTAUserMsg_PingConfirmation: {
    fromJSON(object: any): CDOTAUserMsg_PingConfirmation;
    toJSON(message: CDOTAUserMsg_PingConfirmation): unknown;
    create<I extends {
        player_id_of_original_pinger?: number;
        entity_index?: number;
        icon_type?: number;
        location?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
    } & {
        player_id_of_original_pinger?: number;
        entity_index?: number;
        icon_type?: number;
        location?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["location"], keyof CMsgVector>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CDOTAUserMsg_PingConfirmation>]: never; }>(base?: I): CDOTAUserMsg_PingConfirmation;
    fromPartial<I_1 extends {
        player_id_of_original_pinger?: number;
        entity_index?: number;
        icon_type?: number;
        location?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
    } & {
        player_id_of_original_pinger?: number;
        entity_index?: number;
        icon_type?: number;
        location?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_2 in Exclude<keyof I_1["location"], keyof CMsgVector>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CDOTAUserMsg_PingConfirmation>]: never; }>(object: I_1): CDOTAUserMsg_PingConfirmation;
};
export declare const CDOTAUserMsg_ItemAlert: {
    fromJSON(object: any): CDOTAUserMsg_ItemAlert;
    toJSON(message: CDOTAUserMsg_ItemAlert): unknown;
    create<I extends {
        player_id?: number;
        item_alert?: {
            x?: number;
            y?: number;
            item_ability_id?: number;
        };
    } & {
        player_id?: number;
        item_alert?: {
            x?: number;
            y?: number;
            item_ability_id?: number;
        } & {
            x?: number;
            y?: number;
            item_ability_id?: number;
        } & { [K in Exclude<keyof I["item_alert"], keyof CDOTAMsg_ItemAlert>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CDOTAUserMsg_ItemAlert>]: never; }>(base?: I): CDOTAUserMsg_ItemAlert;
    fromPartial<I_1 extends {
        player_id?: number;
        item_alert?: {
            x?: number;
            y?: number;
            item_ability_id?: number;
        };
    } & {
        player_id?: number;
        item_alert?: {
            x?: number;
            y?: number;
            item_ability_id?: number;
        } & {
            x?: number;
            y?: number;
            item_ability_id?: number;
        } & { [K_2 in Exclude<keyof I_1["item_alert"], keyof CDOTAMsg_ItemAlert>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CDOTAUserMsg_ItemAlert>]: never; }>(object: I_1): CDOTAUserMsg_ItemAlert;
};
export declare const CDOTAUserMsg_EnemyItemAlert: {
    fromJSON(object: any): CDOTAUserMsg_EnemyItemAlert;
    toJSON(message: CDOTAUserMsg_EnemyItemAlert): unknown;
    create<I extends {
        player_id?: number;
        target_player_id?: number;
        item_ability_id?: number;
        rune_type?: number;
        entity_id?: number;
        item_level?: number;
        primary_charges?: number;
        secondary_charges?: number;
    } & {
        player_id?: number;
        target_player_id?: number;
        item_ability_id?: number;
        rune_type?: number;
        entity_id?: number;
        item_level?: number;
        primary_charges?: number;
        secondary_charges?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_EnemyItemAlert>]: never; }>(base?: I): CDOTAUserMsg_EnemyItemAlert;
    fromPartial<I_1 extends {
        player_id?: number;
        target_player_id?: number;
        item_ability_id?: number;
        rune_type?: number;
        entity_id?: number;
        item_level?: number;
        primary_charges?: number;
        secondary_charges?: number;
    } & {
        player_id?: number;
        target_player_id?: number;
        item_ability_id?: number;
        rune_type?: number;
        entity_id?: number;
        item_level?: number;
        primary_charges?: number;
        secondary_charges?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_EnemyItemAlert>]: never; }>(object: I_1): CDOTAUserMsg_EnemyItemAlert;
};
export declare const CDOTAUserMsg_ModifierAlert: {
    fromJSON(object: any): CDOTAUserMsg_ModifierAlert;
    toJSON(message: CDOTAUserMsg_ModifierAlert): unknown;
    create<I extends {
        player_id?: number;
        class_name?: string;
        stack_count?: number;
        is_debuff?: boolean;
        target_entindex?: number;
        seconds_remaining?: number;
    } & {
        player_id?: number;
        class_name?: string;
        stack_count?: number;
        is_debuff?: boolean;
        target_entindex?: number;
        seconds_remaining?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_ModifierAlert>]: never; }>(base?: I): CDOTAUserMsg_ModifierAlert;
    fromPartial<I_1 extends {
        player_id?: number;
        class_name?: string;
        stack_count?: number;
        is_debuff?: boolean;
        target_entindex?: number;
        seconds_remaining?: number;
    } & {
        player_id?: number;
        class_name?: string;
        stack_count?: number;
        is_debuff?: boolean;
        target_entindex?: number;
        seconds_remaining?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_ModifierAlert>]: never; }>(object: I_1): CDOTAUserMsg_ModifierAlert;
};
export declare const CDOTAUserMsg_HPManaAlert: {
    fromJSON(object: any): CDOTAUserMsg_HPManaAlert;
    toJSON(message: CDOTAUserMsg_HPManaAlert): unknown;
    create<I extends {
        player_id?: number;
        target_entindex?: number;
        show_raw_values?: boolean;
    } & {
        player_id?: number;
        target_entindex?: number;
        show_raw_values?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_HPManaAlert>]: never; }>(base?: I): CDOTAUserMsg_HPManaAlert;
    fromPartial<I_1 extends {
        player_id?: number;
        target_entindex?: number;
        show_raw_values?: boolean;
    } & {
        player_id?: number;
        target_entindex?: number;
        show_raw_values?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_HPManaAlert>]: never; }>(object: I_1): CDOTAUserMsg_HPManaAlert;
};
export declare const CDOTAUserMsg_NeutralCampAlert: {
    fromJSON(object: any): CDOTAUserMsg_NeutralCampAlert;
    toJSON(message: CDOTAUserMsg_NeutralCampAlert): unknown;
    create<I extends {
        player_id?: number;
        spawner_entindex?: number;
        unit_entindex?: number;
        stack_count?: number;
        camp_type?: number;
        stack_request?: boolean;
        stack_intention?: boolean;
    } & {
        player_id?: number;
        spawner_entindex?: number;
        unit_entindex?: number;
        stack_count?: number;
        camp_type?: number;
        stack_request?: boolean;
        stack_intention?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_NeutralCampAlert>]: never; }>(base?: I): CDOTAUserMsg_NeutralCampAlert;
    fromPartial<I_1 extends {
        player_id?: number;
        spawner_entindex?: number;
        unit_entindex?: number;
        stack_count?: number;
        camp_type?: number;
        stack_request?: boolean;
        stack_intention?: boolean;
    } & {
        player_id?: number;
        spawner_entindex?: number;
        unit_entindex?: number;
        stack_count?: number;
        camp_type?: number;
        stack_request?: boolean;
        stack_intention?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_NeutralCampAlert>]: never; }>(object: I_1): CDOTAUserMsg_NeutralCampAlert;
};
export declare const CDOTAUserMsg_GlyphAlert: {
    fromJSON(object: any): CDOTAUserMsg_GlyphAlert;
    toJSON(message: CDOTAUserMsg_GlyphAlert): unknown;
    create<I extends {
        player_id?: number;
        negative?: boolean;
    } & {
        player_id?: number;
        negative?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_GlyphAlert>]: never; }>(base?: I): CDOTAUserMsg_GlyphAlert;
    fromPartial<I_1 extends {
        player_id?: number;
        negative?: boolean;
    } & {
        player_id?: number;
        negative?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_GlyphAlert>]: never; }>(object: I_1): CDOTAUserMsg_GlyphAlert;
};
export declare const CDOTAUserMsg_RadarAlert: {
    fromJSON(object: any): CDOTAUserMsg_RadarAlert;
    toJSON(message: CDOTAUserMsg_RadarAlert): unknown;
    create<I extends {
        player_id?: number;
        negative?: boolean;
    } & {
        player_id?: number;
        negative?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_RadarAlert>]: never; }>(base?: I): CDOTAUserMsg_RadarAlert;
    fromPartial<I_1 extends {
        player_id?: number;
        negative?: boolean;
    } & {
        player_id?: number;
        negative?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_RadarAlert>]: never; }>(object: I_1): CDOTAUserMsg_RadarAlert;
};
export declare const CDOTAUserMsg_WillPurchaseAlert: {
    fromJSON(object: any): CDOTAUserMsg_WillPurchaseAlert;
    toJSON(message: CDOTAUserMsg_WillPurchaseAlert): unknown;
    create<I extends {
        item_ability_id?: number;
        player_id?: number;
        gold_remaining?: number;
        suggestion_player_id?: number;
    } & {
        item_ability_id?: number;
        player_id?: number;
        gold_remaining?: number;
        suggestion_player_id?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_WillPurchaseAlert>]: never; }>(base?: I): CDOTAUserMsg_WillPurchaseAlert;
    fromPartial<I_1 extends {
        item_ability_id?: number;
        player_id?: number;
        gold_remaining?: number;
        suggestion_player_id?: number;
    } & {
        item_ability_id?: number;
        player_id?: number;
        gold_remaining?: number;
        suggestion_player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_WillPurchaseAlert>]: never; }>(object: I_1): CDOTAUserMsg_WillPurchaseAlert;
};
export declare const CDOTAUserMsg_EmptyTeleportAlert: {
    fromJSON(object: any): CDOTAUserMsg_EmptyTeleportAlert;
    toJSON(message: CDOTAUserMsg_EmptyTeleportAlert): unknown;
    create<I extends {
        source_player_id?: number;
        target_player_id?: number;
        cooldown_seconds?: number;
    } & {
        source_player_id?: number;
        target_player_id?: number;
        cooldown_seconds?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_EmptyTeleportAlert>]: never; }>(base?: I): CDOTAUserMsg_EmptyTeleportAlert;
    fromPartial<I_1 extends {
        source_player_id?: number;
        target_player_id?: number;
        cooldown_seconds?: number;
    } & {
        source_player_id?: number;
        target_player_id?: number;
        cooldown_seconds?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_EmptyTeleportAlert>]: never; }>(object: I_1): CDOTAUserMsg_EmptyTeleportAlert;
};
export declare const CDOTAUserMsg_MarsArenaOfBloodAttack: {
    fromJSON(object: any): CDOTAUserMsg_MarsArenaOfBloodAttack;
    toJSON(message: CDOTAUserMsg_MarsArenaOfBloodAttack): unknown;
    create<I extends {
        source_ehandle?: number;
        target_ehandle?: number;
        warrior_index?: number;
    } & {
        source_ehandle?: number;
        target_ehandle?: number;
        warrior_index?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_MarsArenaOfBloodAttack>]: never; }>(base?: I): CDOTAUserMsg_MarsArenaOfBloodAttack;
    fromPartial<I_1 extends {
        source_ehandle?: number;
        target_ehandle?: number;
        warrior_index?: number;
    } & {
        source_ehandle?: number;
        target_ehandle?: number;
        warrior_index?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_MarsArenaOfBloodAttack>]: never; }>(object: I_1): CDOTAUserMsg_MarsArenaOfBloodAttack;
};
export declare const CDOTAEntityMsg_InvokerSpellCast: {
    fromJSON(object: any): CDOTAEntityMsg_InvokerSpellCast;
    toJSON(message: CDOTAEntityMsg_InvokerSpellCast): unknown;
    create<I extends {
        entity_msg?: {
            target_entity?: number;
        };
        cast_activity?: number;
    } & {
        entity_msg?: {
            target_entity?: number;
        } & {
            target_entity?: number;
        } & { [K in Exclude<keyof I["entity_msg"], "target_entity">]: never; };
        cast_activity?: number;
    } & { [K_1 in Exclude<keyof I, keyof CDOTAEntityMsg_InvokerSpellCast>]: never; }>(base?: I): CDOTAEntityMsg_InvokerSpellCast;
    fromPartial<I_1 extends {
        entity_msg?: {
            target_entity?: number;
        };
        cast_activity?: number;
    } & {
        entity_msg?: {
            target_entity?: number;
        } & {
            target_entity?: number;
        } & { [K_2 in Exclude<keyof I_1["entity_msg"], "target_entity">]: never; };
        cast_activity?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CDOTAEntityMsg_InvokerSpellCast>]: never; }>(object: I_1): CDOTAEntityMsg_InvokerSpellCast;
};
export declare const CDOTAUserMsg_BuyBackStateAlert: {
    fromJSON(object: any): CDOTAUserMsg_BuyBackStateAlert;
    toJSON(message: CDOTAUserMsg_BuyBackStateAlert): unknown;
    create<I extends {
        player_id?: number;
    } & {
        player_id?: number;
    } & { [K in Exclude<keyof I, "player_id">]: never; }>(base?: I): CDOTAUserMsg_BuyBackStateAlert;
    fromPartial<I_1 extends {
        player_id?: number;
    } & {
        player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "player_id">]: never; }>(object: I_1): CDOTAUserMsg_BuyBackStateAlert;
};
export declare const CDOTAUserMsg_QuickBuyAlert: {
    fromJSON(object: any): CDOTAUserMsg_QuickBuyAlert;
    toJSON(message: CDOTAUserMsg_QuickBuyAlert): unknown;
    create<I extends {
        player_id?: number;
        item_ability_id?: number;
        gold_cost?: number;
        item_cooldown_seconds?: number;
        show_buyback?: boolean;
    } & {
        player_id?: number;
        item_ability_id?: number;
        gold_cost?: number;
        item_cooldown_seconds?: number;
        show_buyback?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_QuickBuyAlert>]: never; }>(base?: I): CDOTAUserMsg_QuickBuyAlert;
    fromPartial<I_1 extends {
        player_id?: number;
        item_ability_id?: number;
        gold_cost?: number;
        item_cooldown_seconds?: number;
        show_buyback?: boolean;
    } & {
        player_id?: number;
        item_ability_id?: number;
        gold_cost?: number;
        item_cooldown_seconds?: number;
        show_buyback?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_QuickBuyAlert>]: never; }>(object: I_1): CDOTAUserMsg_QuickBuyAlert;
};
export declare const CDOTAUserMsg_CourierKilledAlert: {
    fromJSON(object: any): CDOTAUserMsg_CourierKilledAlert;
    toJSON(message: CDOTAUserMsg_CourierKilledAlert): unknown;
    create<I extends {
        team?: number;
        gold_value?: number;
        entity_handle?: number;
        timestamp?: number;
        lost_items?: {
            item_ability_id?: number;
            quantity?: number;
        }[];
        killer_player_id?: number;
        owning_player_id?: number;
    } & {
        team?: number;
        gold_value?: number;
        entity_handle?: number;
        timestamp?: number;
        lost_items?: {
            item_ability_id?: number;
            quantity?: number;
        }[] & ({
            item_ability_id?: number;
            quantity?: number;
        } & {
            item_ability_id?: number;
            quantity?: number;
        } & { [K in Exclude<keyof I["lost_items"][number], keyof CDOTAUserMsg_CourierKilledAlert_LostItem>]: never; })[] & { [K_1 in Exclude<keyof I["lost_items"], keyof {
            item_ability_id?: number;
            quantity?: number;
        }[]>]: never; };
        killer_player_id?: number;
        owning_player_id?: number;
    } & { [K_2 in Exclude<keyof I, keyof CDOTAUserMsg_CourierKilledAlert>]: never; }>(base?: I): CDOTAUserMsg_CourierKilledAlert;
    fromPartial<I_1 extends {
        team?: number;
        gold_value?: number;
        entity_handle?: number;
        timestamp?: number;
        lost_items?: {
            item_ability_id?: number;
            quantity?: number;
        }[];
        killer_player_id?: number;
        owning_player_id?: number;
    } & {
        team?: number;
        gold_value?: number;
        entity_handle?: number;
        timestamp?: number;
        lost_items?: {
            item_ability_id?: number;
            quantity?: number;
        }[] & ({
            item_ability_id?: number;
            quantity?: number;
        } & {
            item_ability_id?: number;
            quantity?: number;
        } & { [K_3 in Exclude<keyof I_1["lost_items"][number], keyof CDOTAUserMsg_CourierKilledAlert_LostItem>]: never; })[] & { [K_4 in Exclude<keyof I_1["lost_items"], keyof {
            item_ability_id?: number;
            quantity?: number;
        }[]>]: never; };
        killer_player_id?: number;
        owning_player_id?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CDOTAUserMsg_CourierKilledAlert>]: never; }>(object: I_1): CDOTAUserMsg_CourierKilledAlert;
};
export declare const CDOTAUserMsg_CourierKilledAlert_LostItem: {
    fromJSON(object: any): CDOTAUserMsg_CourierKilledAlert_LostItem;
    toJSON(message: CDOTAUserMsg_CourierKilledAlert_LostItem): unknown;
    create<I extends {
        item_ability_id?: number;
        quantity?: number;
    } & {
        item_ability_id?: number;
        quantity?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_CourierKilledAlert_LostItem>]: never; }>(base?: I): CDOTAUserMsg_CourierKilledAlert_LostItem;
    fromPartial<I_1 extends {
        item_ability_id?: number;
        quantity?: number;
    } & {
        item_ability_id?: number;
        quantity?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_CourierKilledAlert_LostItem>]: never; }>(object: I_1): CDOTAUserMsg_CourierKilledAlert_LostItem;
};
export declare const CDOTAUserMsg_MinimapEvent: {
    fromJSON(object: any): CDOTAUserMsg_MinimapEvent;
    toJSON(message: CDOTAUserMsg_MinimapEvent): unknown;
    create<I extends {
        event_type?: number;
        entity_handle?: number;
        x?: number;
        y?: number;
        duration?: number;
        target_entity_handle?: number;
    } & {
        event_type?: number;
        entity_handle?: number;
        x?: number;
        y?: number;
        duration?: number;
        target_entity_handle?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_MinimapEvent>]: never; }>(base?: I): CDOTAUserMsg_MinimapEvent;
    fromPartial<I_1 extends {
        event_type?: number;
        entity_handle?: number;
        x?: number;
        y?: number;
        duration?: number;
        target_entity_handle?: number;
    } & {
        event_type?: number;
        entity_handle?: number;
        x?: number;
        y?: number;
        duration?: number;
        target_entity_handle?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_MinimapEvent>]: never; }>(object: I_1): CDOTAUserMsg_MinimapEvent;
};
export declare const CDOTAUserMsg_MapLine: {
    fromJSON(object: any): CDOTAUserMsg_MapLine;
    toJSON(message: CDOTAUserMsg_MapLine): unknown;
    create<I extends {
        player_id?: number;
        mapline?: {
            x?: number;
            y?: number;
            initial?: boolean;
        };
    } & {
        player_id?: number;
        mapline?: {
            x?: number;
            y?: number;
            initial?: boolean;
        } & {
            x?: number;
            y?: number;
            initial?: boolean;
        } & { [K in Exclude<keyof I["mapline"], keyof CDOTAMsg_MapLine>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CDOTAUserMsg_MapLine>]: never; }>(base?: I): CDOTAUserMsg_MapLine;
    fromPartial<I_1 extends {
        player_id?: number;
        mapline?: {
            x?: number;
            y?: number;
            initial?: boolean;
        };
    } & {
        player_id?: number;
        mapline?: {
            x?: number;
            y?: number;
            initial?: boolean;
        } & {
            x?: number;
            y?: number;
            initial?: boolean;
        } & { [K_2 in Exclude<keyof I_1["mapline"], keyof CDOTAMsg_MapLine>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CDOTAUserMsg_MapLine>]: never; }>(object: I_1): CDOTAUserMsg_MapLine;
};
export declare const CDOTAUserMsg_MinimapDebugPoint: {
    fromJSON(object: any): CDOTAUserMsg_MinimapDebugPoint;
    toJSON(message: CDOTAUserMsg_MinimapDebugPoint): unknown;
    create<I extends {
        location?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        color?: number;
        size?: number;
        duration?: number;
        index?: number;
    } & {
        location?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["location"], keyof CMsgVector>]: never; };
        color?: number;
        size?: number;
        duration?: number;
        index?: number;
    } & { [K_1 in Exclude<keyof I, keyof CDOTAUserMsg_MinimapDebugPoint>]: never; }>(base?: I): CDOTAUserMsg_MinimapDebugPoint;
    fromPartial<I_1 extends {
        location?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        color?: number;
        size?: number;
        duration?: number;
        index?: number;
    } & {
        location?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_2 in Exclude<keyof I_1["location"], keyof CMsgVector>]: never; };
        color?: number;
        size?: number;
        duration?: number;
        index?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CDOTAUserMsg_MinimapDebugPoint>]: never; }>(object: I_1): CDOTAUserMsg_MinimapDebugPoint;
};
export declare const CDOTAUserMsg_CreateLinearProjectile: {
    fromJSON(object: any): CDOTAUserMsg_CreateLinearProjectile;
    toJSON(message: CDOTAUserMsg_CreateLinearProjectile): unknown;
    create<I extends {
        origin?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        velocity?: {
            x?: number;
            y?: number;
        };
        entindex?: number;
        particle_index?: string;
        handle?: number;
        acceleration?: {
            x?: number;
            y?: number;
        };
        max_speed?: number;
        fow_radius?: number;
        sticky_fow_reveal?: boolean;
        distance?: number;
        colorgemcolor?: number;
        particle_cp_data?: {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        }[];
    } & {
        origin?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["origin"], keyof CMsgVector>]: never; };
        velocity?: {
            x?: number;
            y?: number;
        } & {
            x?: number;
            y?: number;
        } & { [K_1 in Exclude<keyof I["velocity"], keyof CMsgVector2D>]: never; };
        entindex?: number;
        particle_index?: string;
        handle?: number;
        acceleration?: {
            x?: number;
            y?: number;
        } & {
            x?: number;
            y?: number;
        } & { [K_2 in Exclude<keyof I["acceleration"], keyof CMsgVector2D>]: never; };
        max_speed?: number;
        fow_radius?: number;
        sticky_fow_reveal?: boolean;
        distance?: number;
        colorgemcolor?: number;
        particle_cp_data?: {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        }[] & ({
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        } & {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_3 in Exclude<keyof I["particle_cp_data"][number]["vector"], keyof CMsgVector>]: never; };
        } & { [K_4 in Exclude<keyof I["particle_cp_data"][number], keyof CDOTAUserMsg_ProjectileParticleCPData>]: never; })[] & { [K_5 in Exclude<keyof I["particle_cp_data"], keyof {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        }[]>]: never; };
    } & { [K_6 in Exclude<keyof I, keyof CDOTAUserMsg_CreateLinearProjectile>]: never; }>(base?: I): CDOTAUserMsg_CreateLinearProjectile;
    fromPartial<I_1 extends {
        origin?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        velocity?: {
            x?: number;
            y?: number;
        };
        entindex?: number;
        particle_index?: string;
        handle?: number;
        acceleration?: {
            x?: number;
            y?: number;
        };
        max_speed?: number;
        fow_radius?: number;
        sticky_fow_reveal?: boolean;
        distance?: number;
        colorgemcolor?: number;
        particle_cp_data?: {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        }[];
    } & {
        origin?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_7 in Exclude<keyof I_1["origin"], keyof CMsgVector>]: never; };
        velocity?: {
            x?: number;
            y?: number;
        } & {
            x?: number;
            y?: number;
        } & { [K_8 in Exclude<keyof I_1["velocity"], keyof CMsgVector2D>]: never; };
        entindex?: number;
        particle_index?: string;
        handle?: number;
        acceleration?: {
            x?: number;
            y?: number;
        } & {
            x?: number;
            y?: number;
        } & { [K_9 in Exclude<keyof I_1["acceleration"], keyof CMsgVector2D>]: never; };
        max_speed?: number;
        fow_radius?: number;
        sticky_fow_reveal?: boolean;
        distance?: number;
        colorgemcolor?: number;
        particle_cp_data?: {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        }[] & ({
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        } & {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_10 in Exclude<keyof I_1["particle_cp_data"][number]["vector"], keyof CMsgVector>]: never; };
        } & { [K_11 in Exclude<keyof I_1["particle_cp_data"][number], keyof CDOTAUserMsg_ProjectileParticleCPData>]: never; })[] & { [K_12 in Exclude<keyof I_1["particle_cp_data"], keyof {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        }[]>]: never; };
    } & { [K_13 in Exclude<keyof I_1, keyof CDOTAUserMsg_CreateLinearProjectile>]: never; }>(object: I_1): CDOTAUserMsg_CreateLinearProjectile;
};
export declare const CDOTAUserMsg_DestroyLinearProjectile: {
    fromJSON(object: any): CDOTAUserMsg_DestroyLinearProjectile;
    toJSON(message: CDOTAUserMsg_DestroyLinearProjectile): unknown;
    create<I extends {
        handle?: number;
    } & {
        handle?: number;
    } & { [K in Exclude<keyof I, "handle">]: never; }>(base?: I): CDOTAUserMsg_DestroyLinearProjectile;
    fromPartial<I_1 extends {
        handle?: number;
    } & {
        handle?: number;
    } & { [K_1 in Exclude<keyof I_1, "handle">]: never; }>(object: I_1): CDOTAUserMsg_DestroyLinearProjectile;
};
export declare const CDOTAUserMsg_DodgeTrackingProjectiles: {
    fromJSON(object: any): CDOTAUserMsg_DodgeTrackingProjectiles;
    toJSON(message: CDOTAUserMsg_DodgeTrackingProjectiles): unknown;
    create<I extends {
        entindex?: number;
        attacks_only?: boolean;
    } & {
        entindex?: number;
        attacks_only?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_DodgeTrackingProjectiles>]: never; }>(base?: I): CDOTAUserMsg_DodgeTrackingProjectiles;
    fromPartial<I_1 extends {
        entindex?: number;
        attacks_only?: boolean;
    } & {
        entindex?: number;
        attacks_only?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_DodgeTrackingProjectiles>]: never; }>(object: I_1): CDOTAUserMsg_DodgeTrackingProjectiles;
};
export declare const CDOTAUserMsg_SpectatorPlayerClick: {
    fromJSON(object: any): CDOTAUserMsg_SpectatorPlayerClick;
    toJSON(message: CDOTAUserMsg_SpectatorPlayerClick): unknown;
    create<I extends {
        entindex?: number;
        order_type?: number;
        target_index?: number;
    } & {
        entindex?: number;
        order_type?: number;
        target_index?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_SpectatorPlayerClick>]: never; }>(base?: I): CDOTAUserMsg_SpectatorPlayerClick;
    fromPartial<I_1 extends {
        entindex?: number;
        order_type?: number;
        target_index?: number;
    } & {
        entindex?: number;
        order_type?: number;
        target_index?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_SpectatorPlayerClick>]: never; }>(object: I_1): CDOTAUserMsg_SpectatorPlayerClick;
};
export declare const CDOTAUserMsg_SpectatorPlayerUnitOrders: {
    fromJSON(object: any): CDOTAUserMsg_SpectatorPlayerUnitOrders;
    toJSON(message: CDOTAUserMsg_SpectatorPlayerUnitOrders): unknown;
    create<I extends {
        entindex?: number;
        order_type?: number;
        units?: number[];
        target_index?: number;
        ability_id?: number;
        position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        queue?: boolean;
        sequence_number?: number;
        flags?: number;
    } & {
        entindex?: number;
        order_type?: number;
        units?: number[] & number[] & { [K in Exclude<keyof I["units"], keyof number[]>]: never; };
        target_index?: number;
        ability_id?: number;
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
        } & { [K_1 in Exclude<keyof I["position"], keyof CMsgVector>]: never; };
        queue?: boolean;
        sequence_number?: number;
        flags?: number;
    } & { [K_2 in Exclude<keyof I, keyof CDOTAUserMsg_SpectatorPlayerUnitOrders>]: never; }>(base?: I): CDOTAUserMsg_SpectatorPlayerUnitOrders;
    fromPartial<I_1 extends {
        entindex?: number;
        order_type?: number;
        units?: number[];
        target_index?: number;
        ability_id?: number;
        position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        queue?: boolean;
        sequence_number?: number;
        flags?: number;
    } & {
        entindex?: number;
        order_type?: number;
        units?: number[] & number[] & { [K_3 in Exclude<keyof I_1["units"], keyof number[]>]: never; };
        target_index?: number;
        ability_id?: number;
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
        } & { [K_4 in Exclude<keyof I_1["position"], keyof CMsgVector>]: never; };
        queue?: boolean;
        sequence_number?: number;
        flags?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CDOTAUserMsg_SpectatorPlayerUnitOrders>]: never; }>(object: I_1): CDOTAUserMsg_SpectatorPlayerUnitOrders;
};
export declare const CDOTAUserMsg_NevermoreRequiem: {
    fromJSON(object: any): CDOTAUserMsg_NevermoreRequiem;
    toJSON(message: CDOTAUserMsg_NevermoreRequiem): unknown;
    create<I extends {
        entity_handle?: number;
        lines?: number;
        origin?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        reverse?: boolean;
    } & {
        entity_handle?: number;
        lines?: number;
        origin?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["origin"], keyof CMsgVector>]: never; };
        reverse?: boolean;
    } & { [K_1 in Exclude<keyof I, keyof CDOTAUserMsg_NevermoreRequiem>]: never; }>(base?: I): CDOTAUserMsg_NevermoreRequiem;
    fromPartial<I_1 extends {
        entity_handle?: number;
        lines?: number;
        origin?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        reverse?: boolean;
    } & {
        entity_handle?: number;
        lines?: number;
        origin?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_2 in Exclude<keyof I_1["origin"], keyof CMsgVector>]: never; };
        reverse?: boolean;
    } & { [K_3 in Exclude<keyof I_1, keyof CDOTAUserMsg_NevermoreRequiem>]: never; }>(object: I_1): CDOTAUserMsg_NevermoreRequiem;
};
export declare const CDOTAUserMsg_InvalidCommand: {
    fromJSON(object: any): CDOTAUserMsg_InvalidCommand;
    toJSON(message: CDOTAUserMsg_InvalidCommand): unknown;
    create<I extends {
        message?: string;
        sequence_number?: number;
    } & {
        message?: string;
        sequence_number?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_InvalidCommand>]: never; }>(base?: I): CDOTAUserMsg_InvalidCommand;
    fromPartial<I_1 extends {
        message?: string;
        sequence_number?: number;
    } & {
        message?: string;
        sequence_number?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_InvalidCommand>]: never; }>(object: I_1): CDOTAUserMsg_InvalidCommand;
};
export declare const CDOTAUserMsg_HudError: {
    fromJSON(object: any): CDOTAUserMsg_HudError;
    toJSON(message: CDOTAUserMsg_HudError): unknown;
    create<I extends {
        order_id?: number;
        sequence_number?: number;
    } & {
        order_id?: number;
        sequence_number?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_HudError>]: never; }>(base?: I): CDOTAUserMsg_HudError;
    fromPartial<I_1 extends {
        order_id?: number;
        sequence_number?: number;
    } & {
        order_id?: number;
        sequence_number?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_HudError>]: never; }>(object: I_1): CDOTAUserMsg_HudError;
};
export declare const CDOTAUserMsg_SharedCooldown: {
    fromJSON(object: any): CDOTAUserMsg_SharedCooldown;
    toJSON(message: CDOTAUserMsg_SharedCooldown): unknown;
    create<I extends {
        entindex?: number;
        name?: string;
        cooldown?: number;
        name_index?: number;
    } & {
        entindex?: number;
        name?: string;
        cooldown?: number;
        name_index?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_SharedCooldown>]: never; }>(base?: I): CDOTAUserMsg_SharedCooldown;
    fromPartial<I_1 extends {
        entindex?: number;
        name?: string;
        cooldown?: number;
        name_index?: number;
    } & {
        entindex?: number;
        name?: string;
        cooldown?: number;
        name_index?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_SharedCooldown>]: never; }>(object: I_1): CDOTAUserMsg_SharedCooldown;
};
export declare const CDOTAUserMsg_SetNextAutobuyItem: {
    fromJSON(object: any): CDOTAUserMsg_SetNextAutobuyItem;
    toJSON(message: CDOTAUserMsg_SetNextAutobuyItem): unknown;
    create<I extends {
        name?: string;
    } & {
        name?: string;
    } & { [K in Exclude<keyof I, "name">]: never; }>(base?: I): CDOTAUserMsg_SetNextAutobuyItem;
    fromPartial<I_1 extends {
        name?: string;
    } & {
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, "name">]: never; }>(object: I_1): CDOTAUserMsg_SetNextAutobuyItem;
};
export declare const CDOTAUserMsg_HalloweenDrops: {
    fromJSON(object: any): CDOTAUserMsg_HalloweenDrops;
    toJSON(message: CDOTAUserMsg_HalloweenDrops): unknown;
    create<I extends {
        item_defs?: number[];
        player_ids?: number[];
        prize_list?: number;
    } & {
        item_defs?: number[] & number[] & { [K in Exclude<keyof I["item_defs"], keyof number[]>]: never; };
        player_ids?: number[] & number[] & { [K_1 in Exclude<keyof I["player_ids"], keyof number[]>]: never; };
        prize_list?: number;
    } & { [K_2 in Exclude<keyof I, keyof CDOTAUserMsg_HalloweenDrops>]: never; }>(base?: I): CDOTAUserMsg_HalloweenDrops;
    fromPartial<I_1 extends {
        item_defs?: number[];
        player_ids?: number[];
        prize_list?: number;
    } & {
        item_defs?: number[] & number[] & { [K_3 in Exclude<keyof I_1["item_defs"], keyof number[]>]: never; };
        player_ids?: number[] & number[] & { [K_4 in Exclude<keyof I_1["player_ids"], keyof number[]>]: never; };
        prize_list?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CDOTAUserMsg_HalloweenDrops>]: never; }>(object: I_1): CDOTAUserMsg_HalloweenDrops;
};
export declare const CDOTAUserMsg_PredictionResult: {
    fromJSON(object: any): CDOTAUserMsg_PredictionResult;
    toJSON(message: CDOTAUserMsg_PredictionResult): unknown;
    create<I extends {
        account_id?: number;
        match_id?: string;
        correct?: boolean;
        predictions?: {
            item_def?: number;
            num_correct?: number;
            num_fails?: number;
            result?: CDOTAUserMsg_PredictionResult_Prediction_EResult;
            granted_item_defs?: number[];
        }[];
    } & {
        account_id?: number;
        match_id?: string;
        correct?: boolean;
        predictions?: {
            item_def?: number;
            num_correct?: number;
            num_fails?: number;
            result?: CDOTAUserMsg_PredictionResult_Prediction_EResult;
            granted_item_defs?: number[];
        }[] & ({
            item_def?: number;
            num_correct?: number;
            num_fails?: number;
            result?: CDOTAUserMsg_PredictionResult_Prediction_EResult;
            granted_item_defs?: number[];
        } & {
            item_def?: number;
            num_correct?: number;
            num_fails?: number;
            result?: CDOTAUserMsg_PredictionResult_Prediction_EResult;
            granted_item_defs?: number[] & number[] & { [K in Exclude<keyof I["predictions"][number]["granted_item_defs"], keyof number[]>]: never; };
        } & { [K_1 in Exclude<keyof I["predictions"][number], keyof CDOTAUserMsg_PredictionResult_Prediction>]: never; })[] & { [K_2 in Exclude<keyof I["predictions"], keyof {
            item_def?: number;
            num_correct?: number;
            num_fails?: number;
            result?: CDOTAUserMsg_PredictionResult_Prediction_EResult;
            granted_item_defs?: number[];
        }[]>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof CDOTAUserMsg_PredictionResult>]: never; }>(base?: I): CDOTAUserMsg_PredictionResult;
    fromPartial<I_1 extends {
        account_id?: number;
        match_id?: string;
        correct?: boolean;
        predictions?: {
            item_def?: number;
            num_correct?: number;
            num_fails?: number;
            result?: CDOTAUserMsg_PredictionResult_Prediction_EResult;
            granted_item_defs?: number[];
        }[];
    } & {
        account_id?: number;
        match_id?: string;
        correct?: boolean;
        predictions?: {
            item_def?: number;
            num_correct?: number;
            num_fails?: number;
            result?: CDOTAUserMsg_PredictionResult_Prediction_EResult;
            granted_item_defs?: number[];
        }[] & ({
            item_def?: number;
            num_correct?: number;
            num_fails?: number;
            result?: CDOTAUserMsg_PredictionResult_Prediction_EResult;
            granted_item_defs?: number[];
        } & {
            item_def?: number;
            num_correct?: number;
            num_fails?: number;
            result?: CDOTAUserMsg_PredictionResult_Prediction_EResult;
            granted_item_defs?: number[] & number[] & { [K_4 in Exclude<keyof I_1["predictions"][number]["granted_item_defs"], keyof number[]>]: never; };
        } & { [K_5 in Exclude<keyof I_1["predictions"][number], keyof CDOTAUserMsg_PredictionResult_Prediction>]: never; })[] & { [K_6 in Exclude<keyof I_1["predictions"], keyof {
            item_def?: number;
            num_correct?: number;
            num_fails?: number;
            result?: CDOTAUserMsg_PredictionResult_Prediction_EResult;
            granted_item_defs?: number[];
        }[]>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof CDOTAUserMsg_PredictionResult>]: never; }>(object: I_1): CDOTAUserMsg_PredictionResult;
};
export declare const CDOTAUserMsg_PredictionResult_Prediction: {
    fromJSON(object: any): CDOTAUserMsg_PredictionResult_Prediction;
    toJSON(message: CDOTAUserMsg_PredictionResult_Prediction): unknown;
    create<I extends {
        item_def?: number;
        num_correct?: number;
        num_fails?: number;
        result?: CDOTAUserMsg_PredictionResult_Prediction_EResult;
        granted_item_defs?: number[];
    } & {
        item_def?: number;
        num_correct?: number;
        num_fails?: number;
        result?: CDOTAUserMsg_PredictionResult_Prediction_EResult;
        granted_item_defs?: number[] & number[] & { [K in Exclude<keyof I["granted_item_defs"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CDOTAUserMsg_PredictionResult_Prediction>]: never; }>(base?: I): CDOTAUserMsg_PredictionResult_Prediction;
    fromPartial<I_1 extends {
        item_def?: number;
        num_correct?: number;
        num_fails?: number;
        result?: CDOTAUserMsg_PredictionResult_Prediction_EResult;
        granted_item_defs?: number[];
    } & {
        item_def?: number;
        num_correct?: number;
        num_fails?: number;
        result?: CDOTAUserMsg_PredictionResult_Prediction_EResult;
        granted_item_defs?: number[] & number[] & { [K_2 in Exclude<keyof I_1["granted_item_defs"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CDOTAUserMsg_PredictionResult_Prediction>]: never; }>(object: I_1): CDOTAUserMsg_PredictionResult_Prediction;
};
export declare const CDOTAResponseQuerySerialized: {
    fromJSON(object: any): CDOTAResponseQuerySerialized;
    toJSON(message: CDOTAResponseQuerySerialized): unknown;
    create<I extends {
        facts?: {
            key?: number;
            valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
            val_numeric?: number;
            val_string?: string;
            val_stringtable_index?: number;
            val_int_numeric?: number;
        }[];
    } & {
        facts?: {
            key?: number;
            valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
            val_numeric?: number;
            val_string?: string;
            val_stringtable_index?: number;
            val_int_numeric?: number;
        }[] & ({
            key?: number;
            valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
            val_numeric?: number;
            val_string?: string;
            val_stringtable_index?: number;
            val_int_numeric?: number;
        } & {
            key?: number;
            valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
            val_numeric?: number;
            val_string?: string;
            val_stringtable_index?: number;
            val_int_numeric?: number;
        } & { [K in Exclude<keyof I["facts"][number], keyof CDOTAResponseQuerySerialized_Fact>]: never; })[] & { [K_1 in Exclude<keyof I["facts"], keyof {
            key?: number;
            valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
            val_numeric?: number;
            val_string?: string;
            val_stringtable_index?: number;
            val_int_numeric?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "facts">]: never; }>(base?: I): CDOTAResponseQuerySerialized;
    fromPartial<I_1 extends {
        facts?: {
            key?: number;
            valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
            val_numeric?: number;
            val_string?: string;
            val_stringtable_index?: number;
            val_int_numeric?: number;
        }[];
    } & {
        facts?: {
            key?: number;
            valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
            val_numeric?: number;
            val_string?: string;
            val_stringtable_index?: number;
            val_int_numeric?: number;
        }[] & ({
            key?: number;
            valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
            val_numeric?: number;
            val_string?: string;
            val_stringtable_index?: number;
            val_int_numeric?: number;
        } & {
            key?: number;
            valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
            val_numeric?: number;
            val_string?: string;
            val_stringtable_index?: number;
            val_int_numeric?: number;
        } & { [K_3 in Exclude<keyof I_1["facts"][number], keyof CDOTAResponseQuerySerialized_Fact>]: never; })[] & { [K_4 in Exclude<keyof I_1["facts"], keyof {
            key?: number;
            valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
            val_numeric?: number;
            val_string?: string;
            val_stringtable_index?: number;
            val_int_numeric?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "facts">]: never; }>(object: I_1): CDOTAResponseQuerySerialized;
};
export declare const CDOTAResponseQuerySerialized_Fact: {
    fromJSON(object: any): CDOTAResponseQuerySerialized_Fact;
    toJSON(message: CDOTAResponseQuerySerialized_Fact): unknown;
    create<I extends {
        key?: number;
        valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
        val_numeric?: number;
        val_string?: string;
        val_stringtable_index?: number;
        val_int_numeric?: number;
    } & {
        key?: number;
        valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
        val_numeric?: number;
        val_string?: string;
        val_stringtable_index?: number;
        val_int_numeric?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAResponseQuerySerialized_Fact>]: never; }>(base?: I): CDOTAResponseQuerySerialized_Fact;
    fromPartial<I_1 extends {
        key?: number;
        valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
        val_numeric?: number;
        val_string?: string;
        val_stringtable_index?: number;
        val_int_numeric?: number;
    } & {
        key?: number;
        valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
        val_numeric?: number;
        val_string?: string;
        val_stringtable_index?: number;
        val_int_numeric?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAResponseQuerySerialized_Fact>]: never; }>(object: I_1): CDOTAResponseQuerySerialized_Fact;
};
export declare const CDOTASpeechMatchOnClient: {
    fromJSON(object: any): CDOTASpeechMatchOnClient;
    toJSON(message: CDOTASpeechMatchOnClient): unknown;
    create<I extends {
        speech_concept?: number;
        recipient_type?: number;
        responsequery?: {
            facts?: {
                key?: number;
                valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                val_numeric?: number;
                val_string?: string;
                val_stringtable_index?: number;
                val_int_numeric?: number;
            }[];
        };
        randomseed?: number;
    } & {
        speech_concept?: number;
        recipient_type?: number;
        responsequery?: {
            facts?: {
                key?: number;
                valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                val_numeric?: number;
                val_string?: string;
                val_stringtable_index?: number;
                val_int_numeric?: number;
            }[];
        } & {
            facts?: {
                key?: number;
                valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                val_numeric?: number;
                val_string?: string;
                val_stringtable_index?: number;
                val_int_numeric?: number;
            }[] & ({
                key?: number;
                valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                val_numeric?: number;
                val_string?: string;
                val_stringtable_index?: number;
                val_int_numeric?: number;
            } & {
                key?: number;
                valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                val_numeric?: number;
                val_string?: string;
                val_stringtable_index?: number;
                val_int_numeric?: number;
            } & { [K in Exclude<keyof I["responsequery"]["facts"][number], keyof CDOTAResponseQuerySerialized_Fact>]: never; })[] & { [K_1 in Exclude<keyof I["responsequery"]["facts"], keyof {
                key?: number;
                valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                val_numeric?: number;
                val_string?: string;
                val_stringtable_index?: number;
                val_int_numeric?: number;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["responsequery"], "facts">]: never; };
        randomseed?: number;
    } & { [K_3 in Exclude<keyof I, keyof CDOTASpeechMatchOnClient>]: never; }>(base?: I): CDOTASpeechMatchOnClient;
    fromPartial<I_1 extends {
        speech_concept?: number;
        recipient_type?: number;
        responsequery?: {
            facts?: {
                key?: number;
                valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                val_numeric?: number;
                val_string?: string;
                val_stringtable_index?: number;
                val_int_numeric?: number;
            }[];
        };
        randomseed?: number;
    } & {
        speech_concept?: number;
        recipient_type?: number;
        responsequery?: {
            facts?: {
                key?: number;
                valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                val_numeric?: number;
                val_string?: string;
                val_stringtable_index?: number;
                val_int_numeric?: number;
            }[];
        } & {
            facts?: {
                key?: number;
                valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                val_numeric?: number;
                val_string?: string;
                val_stringtable_index?: number;
                val_int_numeric?: number;
            }[] & ({
                key?: number;
                valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                val_numeric?: number;
                val_string?: string;
                val_stringtable_index?: number;
                val_int_numeric?: number;
            } & {
                key?: number;
                valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                val_numeric?: number;
                val_string?: string;
                val_stringtable_index?: number;
                val_int_numeric?: number;
            } & { [K_4 in Exclude<keyof I_1["responsequery"]["facts"][number], keyof CDOTAResponseQuerySerialized_Fact>]: never; })[] & { [K_5 in Exclude<keyof I_1["responsequery"]["facts"], keyof {
                key?: number;
                valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                val_numeric?: number;
                val_string?: string;
                val_stringtable_index?: number;
                val_int_numeric?: number;
            }[]>]: never; };
        } & { [K_6 in Exclude<keyof I_1["responsequery"], "facts">]: never; };
        randomseed?: number;
    } & { [K_7 in Exclude<keyof I_1, keyof CDOTASpeechMatchOnClient>]: never; }>(object: I_1): CDOTASpeechMatchOnClient;
};
export declare const CDOTAUserMsg_UnitEvent: {
    fromJSON(object: any): CDOTAUserMsg_UnitEvent;
    toJSON(message: CDOTAUserMsg_UnitEvent): unknown;
    create<I extends {
        msg_type?: EDotaEntityMessages;
        entity_index?: number;
        speech?: {
            speech_concept?: number;
            response?: string;
            recipient_type?: number;
            muteable?: boolean;
            predelay?: {
                start?: number;
                range?: number;
            };
            flags?: number;
        };
        speech_mute?: {
            delay?: number;
        };
        add_gesture?: {
            activity?: number;
            slot?: number;
            fade_in?: number;
            fade_out?: number;
            playback_rate?: number;
            sequence_variant?: number;
        };
        remove_gesture?: {
            activity?: number;
        };
        blood_impact?: {
            scale?: number;
            x_normal?: number;
            y_normal?: number;
        };
        fade_gesture?: {
            activity?: number;
        };
        speech_match_on_client?: {
            speech_concept?: number;
            recipient_type?: number;
            responsequery?: {
                facts?: {
                    key?: number;
                    valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                    val_numeric?: number;
                    val_string?: string;
                    val_stringtable_index?: number;
                    val_int_numeric?: number;
                }[];
            };
            randomseed?: number;
        };
    } & {
        msg_type?: EDotaEntityMessages;
        entity_index?: number;
        speech?: {
            speech_concept?: number;
            response?: string;
            recipient_type?: number;
            muteable?: boolean;
            predelay?: {
                start?: number;
                range?: number;
            };
            flags?: number;
        } & {
            speech_concept?: number;
            response?: string;
            recipient_type?: number;
            muteable?: boolean;
            predelay?: {
                start?: number;
                range?: number;
            } & {
                start?: number;
                range?: number;
            } & { [K in Exclude<keyof I["speech"]["predelay"], keyof CDOTAUserMsg_UnitEvent_Interval>]: never; };
            flags?: number;
        } & { [K_1 in Exclude<keyof I["speech"], keyof CDOTAUserMsg_UnitEvent_Speech>]: never; };
        speech_mute?: {
            delay?: number;
        } & {
            delay?: number;
        } & { [K_2 in Exclude<keyof I["speech_mute"], "delay">]: never; };
        add_gesture?: {
            activity?: number;
            slot?: number;
            fade_in?: number;
            fade_out?: number;
            playback_rate?: number;
            sequence_variant?: number;
        } & {
            activity?: number;
            slot?: number;
            fade_in?: number;
            fade_out?: number;
            playback_rate?: number;
            sequence_variant?: number;
        } & { [K_3 in Exclude<keyof I["add_gesture"], keyof CDOTAUserMsg_UnitEvent_AddGesture>]: never; };
        remove_gesture?: {
            activity?: number;
        } & {
            activity?: number;
        } & { [K_4 in Exclude<keyof I["remove_gesture"], "activity">]: never; };
        blood_impact?: {
            scale?: number;
            x_normal?: number;
            y_normal?: number;
        } & {
            scale?: number;
            x_normal?: number;
            y_normal?: number;
        } & { [K_5 in Exclude<keyof I["blood_impact"], keyof CDOTAUserMsg_UnitEvent_BloodImpact>]: never; };
        fade_gesture?: {
            activity?: number;
        } & {
            activity?: number;
        } & { [K_6 in Exclude<keyof I["fade_gesture"], "activity">]: never; };
        speech_match_on_client?: {
            speech_concept?: number;
            recipient_type?: number;
            responsequery?: {
                facts?: {
                    key?: number;
                    valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                    val_numeric?: number;
                    val_string?: string;
                    val_stringtable_index?: number;
                    val_int_numeric?: number;
                }[];
            };
            randomseed?: number;
        } & {
            speech_concept?: number;
            recipient_type?: number;
            responsequery?: {
                facts?: {
                    key?: number;
                    valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                    val_numeric?: number;
                    val_string?: string;
                    val_stringtable_index?: number;
                    val_int_numeric?: number;
                }[];
            } & {
                facts?: {
                    key?: number;
                    valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                    val_numeric?: number;
                    val_string?: string;
                    val_stringtable_index?: number;
                    val_int_numeric?: number;
                }[] & ({
                    key?: number;
                    valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                    val_numeric?: number;
                    val_string?: string;
                    val_stringtable_index?: number;
                    val_int_numeric?: number;
                } & {
                    key?: number;
                    valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                    val_numeric?: number;
                    val_string?: string;
                    val_stringtable_index?: number;
                    val_int_numeric?: number;
                } & { [K_7 in Exclude<keyof I["speech_match_on_client"]["responsequery"]["facts"][number], keyof CDOTAResponseQuerySerialized_Fact>]: never; })[] & { [K_8 in Exclude<keyof I["speech_match_on_client"]["responsequery"]["facts"], keyof {
                    key?: number;
                    valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                    val_numeric?: number;
                    val_string?: string;
                    val_stringtable_index?: number;
                    val_int_numeric?: number;
                }[]>]: never; };
            } & { [K_9 in Exclude<keyof I["speech_match_on_client"]["responsequery"], "facts">]: never; };
            randomseed?: number;
        } & { [K_10 in Exclude<keyof I["speech_match_on_client"], keyof CDOTASpeechMatchOnClient>]: never; };
    } & { [K_11 in Exclude<keyof I, keyof CDOTAUserMsg_UnitEvent>]: never; }>(base?: I): CDOTAUserMsg_UnitEvent;
    fromPartial<I_1 extends {
        msg_type?: EDotaEntityMessages;
        entity_index?: number;
        speech?: {
            speech_concept?: number;
            response?: string;
            recipient_type?: number;
            muteable?: boolean;
            predelay?: {
                start?: number;
                range?: number;
            };
            flags?: number;
        };
        speech_mute?: {
            delay?: number;
        };
        add_gesture?: {
            activity?: number;
            slot?: number;
            fade_in?: number;
            fade_out?: number;
            playback_rate?: number;
            sequence_variant?: number;
        };
        remove_gesture?: {
            activity?: number;
        };
        blood_impact?: {
            scale?: number;
            x_normal?: number;
            y_normal?: number;
        };
        fade_gesture?: {
            activity?: number;
        };
        speech_match_on_client?: {
            speech_concept?: number;
            recipient_type?: number;
            responsequery?: {
                facts?: {
                    key?: number;
                    valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                    val_numeric?: number;
                    val_string?: string;
                    val_stringtable_index?: number;
                    val_int_numeric?: number;
                }[];
            };
            randomseed?: number;
        };
    } & {
        msg_type?: EDotaEntityMessages;
        entity_index?: number;
        speech?: {
            speech_concept?: number;
            response?: string;
            recipient_type?: number;
            muteable?: boolean;
            predelay?: {
                start?: number;
                range?: number;
            };
            flags?: number;
        } & {
            speech_concept?: number;
            response?: string;
            recipient_type?: number;
            muteable?: boolean;
            predelay?: {
                start?: number;
                range?: number;
            } & {
                start?: number;
                range?: number;
            } & { [K_12 in Exclude<keyof I_1["speech"]["predelay"], keyof CDOTAUserMsg_UnitEvent_Interval>]: never; };
            flags?: number;
        } & { [K_13 in Exclude<keyof I_1["speech"], keyof CDOTAUserMsg_UnitEvent_Speech>]: never; };
        speech_mute?: {
            delay?: number;
        } & {
            delay?: number;
        } & { [K_14 in Exclude<keyof I_1["speech_mute"], "delay">]: never; };
        add_gesture?: {
            activity?: number;
            slot?: number;
            fade_in?: number;
            fade_out?: number;
            playback_rate?: number;
            sequence_variant?: number;
        } & {
            activity?: number;
            slot?: number;
            fade_in?: number;
            fade_out?: number;
            playback_rate?: number;
            sequence_variant?: number;
        } & { [K_15 in Exclude<keyof I_1["add_gesture"], keyof CDOTAUserMsg_UnitEvent_AddGesture>]: never; };
        remove_gesture?: {
            activity?: number;
        } & {
            activity?: number;
        } & { [K_16 in Exclude<keyof I_1["remove_gesture"], "activity">]: never; };
        blood_impact?: {
            scale?: number;
            x_normal?: number;
            y_normal?: number;
        } & {
            scale?: number;
            x_normal?: number;
            y_normal?: number;
        } & { [K_17 in Exclude<keyof I_1["blood_impact"], keyof CDOTAUserMsg_UnitEvent_BloodImpact>]: never; };
        fade_gesture?: {
            activity?: number;
        } & {
            activity?: number;
        } & { [K_18 in Exclude<keyof I_1["fade_gesture"], "activity">]: never; };
        speech_match_on_client?: {
            speech_concept?: number;
            recipient_type?: number;
            responsequery?: {
                facts?: {
                    key?: number;
                    valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                    val_numeric?: number;
                    val_string?: string;
                    val_stringtable_index?: number;
                    val_int_numeric?: number;
                }[];
            };
            randomseed?: number;
        } & {
            speech_concept?: number;
            recipient_type?: number;
            responsequery?: {
                facts?: {
                    key?: number;
                    valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                    val_numeric?: number;
                    val_string?: string;
                    val_stringtable_index?: number;
                    val_int_numeric?: number;
                }[];
            } & {
                facts?: {
                    key?: number;
                    valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                    val_numeric?: number;
                    val_string?: string;
                    val_stringtable_index?: number;
                    val_int_numeric?: number;
                }[] & ({
                    key?: number;
                    valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                    val_numeric?: number;
                    val_string?: string;
                    val_stringtable_index?: number;
                    val_int_numeric?: number;
                } & {
                    key?: number;
                    valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                    val_numeric?: number;
                    val_string?: string;
                    val_stringtable_index?: number;
                    val_int_numeric?: number;
                } & { [K_19 in Exclude<keyof I_1["speech_match_on_client"]["responsequery"]["facts"][number], keyof CDOTAResponseQuerySerialized_Fact>]: never; })[] & { [K_20 in Exclude<keyof I_1["speech_match_on_client"]["responsequery"]["facts"], keyof {
                    key?: number;
                    valtype?: CDOTAResponseQuerySerialized_Fact_ValueType;
                    val_numeric?: number;
                    val_string?: string;
                    val_stringtable_index?: number;
                    val_int_numeric?: number;
                }[]>]: never; };
            } & { [K_21 in Exclude<keyof I_1["speech_match_on_client"]["responsequery"], "facts">]: never; };
            randomseed?: number;
        } & { [K_22 in Exclude<keyof I_1["speech_match_on_client"], keyof CDOTASpeechMatchOnClient>]: never; };
    } & { [K_23 in Exclude<keyof I_1, keyof CDOTAUserMsg_UnitEvent>]: never; }>(object: I_1): CDOTAUserMsg_UnitEvent;
};
export declare const CDOTAUserMsg_UnitEvent_Interval: {
    fromJSON(object: any): CDOTAUserMsg_UnitEvent_Interval;
    toJSON(message: CDOTAUserMsg_UnitEvent_Interval): unknown;
    create<I extends {
        start?: number;
        range?: number;
    } & {
        start?: number;
        range?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_UnitEvent_Interval>]: never; }>(base?: I): CDOTAUserMsg_UnitEvent_Interval;
    fromPartial<I_1 extends {
        start?: number;
        range?: number;
    } & {
        start?: number;
        range?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_UnitEvent_Interval>]: never; }>(object: I_1): CDOTAUserMsg_UnitEvent_Interval;
};
export declare const CDOTAUserMsg_UnitEvent_Speech: {
    fromJSON(object: any): CDOTAUserMsg_UnitEvent_Speech;
    toJSON(message: CDOTAUserMsg_UnitEvent_Speech): unknown;
    create<I extends {
        speech_concept?: number;
        response?: string;
        recipient_type?: number;
        muteable?: boolean;
        predelay?: {
            start?: number;
            range?: number;
        };
        flags?: number;
    } & {
        speech_concept?: number;
        response?: string;
        recipient_type?: number;
        muteable?: boolean;
        predelay?: {
            start?: number;
            range?: number;
        } & {
            start?: number;
            range?: number;
        } & { [K in Exclude<keyof I["predelay"], keyof CDOTAUserMsg_UnitEvent_Interval>]: never; };
        flags?: number;
    } & { [K_1 in Exclude<keyof I, keyof CDOTAUserMsg_UnitEvent_Speech>]: never; }>(base?: I): CDOTAUserMsg_UnitEvent_Speech;
    fromPartial<I_1 extends {
        speech_concept?: number;
        response?: string;
        recipient_type?: number;
        muteable?: boolean;
        predelay?: {
            start?: number;
            range?: number;
        };
        flags?: number;
    } & {
        speech_concept?: number;
        response?: string;
        recipient_type?: number;
        muteable?: boolean;
        predelay?: {
            start?: number;
            range?: number;
        } & {
            start?: number;
            range?: number;
        } & { [K_2 in Exclude<keyof I_1["predelay"], keyof CDOTAUserMsg_UnitEvent_Interval>]: never; };
        flags?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CDOTAUserMsg_UnitEvent_Speech>]: never; }>(object: I_1): CDOTAUserMsg_UnitEvent_Speech;
};
export declare const CDOTAUserMsg_UnitEvent_SpeechMute: {
    fromJSON(object: any): CDOTAUserMsg_UnitEvent_SpeechMute;
    toJSON(message: CDOTAUserMsg_UnitEvent_SpeechMute): unknown;
    create<I extends {
        delay?: number;
    } & {
        delay?: number;
    } & { [K in Exclude<keyof I, "delay">]: never; }>(base?: I): CDOTAUserMsg_UnitEvent_SpeechMute;
    fromPartial<I_1 extends {
        delay?: number;
    } & {
        delay?: number;
    } & { [K_1 in Exclude<keyof I_1, "delay">]: never; }>(object: I_1): CDOTAUserMsg_UnitEvent_SpeechMute;
};
export declare const CDOTAUserMsg_UnitEvent_AddGesture: {
    fromJSON(object: any): CDOTAUserMsg_UnitEvent_AddGesture;
    toJSON(message: CDOTAUserMsg_UnitEvent_AddGesture): unknown;
    create<I extends {
        activity?: number;
        slot?: number;
        fade_in?: number;
        fade_out?: number;
        playback_rate?: number;
        sequence_variant?: number;
    } & {
        activity?: number;
        slot?: number;
        fade_in?: number;
        fade_out?: number;
        playback_rate?: number;
        sequence_variant?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_UnitEvent_AddGesture>]: never; }>(base?: I): CDOTAUserMsg_UnitEvent_AddGesture;
    fromPartial<I_1 extends {
        activity?: number;
        slot?: number;
        fade_in?: number;
        fade_out?: number;
        playback_rate?: number;
        sequence_variant?: number;
    } & {
        activity?: number;
        slot?: number;
        fade_in?: number;
        fade_out?: number;
        playback_rate?: number;
        sequence_variant?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_UnitEvent_AddGesture>]: never; }>(object: I_1): CDOTAUserMsg_UnitEvent_AddGesture;
};
export declare const CDOTAUserMsg_UnitEvent_RemoveGesture: {
    fromJSON(object: any): CDOTAUserMsg_UnitEvent_RemoveGesture;
    toJSON(message: CDOTAUserMsg_UnitEvent_RemoveGesture): unknown;
    create<I extends {
        activity?: number;
    } & {
        activity?: number;
    } & { [K in Exclude<keyof I, "activity">]: never; }>(base?: I): CDOTAUserMsg_UnitEvent_RemoveGesture;
    fromPartial<I_1 extends {
        activity?: number;
    } & {
        activity?: number;
    } & { [K_1 in Exclude<keyof I_1, "activity">]: never; }>(object: I_1): CDOTAUserMsg_UnitEvent_RemoveGesture;
};
export declare const CDOTAUserMsg_UnitEvent_BloodImpact: {
    fromJSON(object: any): CDOTAUserMsg_UnitEvent_BloodImpact;
    toJSON(message: CDOTAUserMsg_UnitEvent_BloodImpact): unknown;
    create<I extends {
        scale?: number;
        x_normal?: number;
        y_normal?: number;
    } & {
        scale?: number;
        x_normal?: number;
        y_normal?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_UnitEvent_BloodImpact>]: never; }>(base?: I): CDOTAUserMsg_UnitEvent_BloodImpact;
    fromPartial<I_1 extends {
        scale?: number;
        x_normal?: number;
        y_normal?: number;
    } & {
        scale?: number;
        x_normal?: number;
        y_normal?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_UnitEvent_BloodImpact>]: never; }>(object: I_1): CDOTAUserMsg_UnitEvent_BloodImpact;
};
export declare const CDOTAUserMsg_UnitEvent_FadeGesture: {
    fromJSON(object: any): CDOTAUserMsg_UnitEvent_FadeGesture;
    toJSON(message: CDOTAUserMsg_UnitEvent_FadeGesture): unknown;
    create<I extends {
        activity?: number;
    } & {
        activity?: number;
    } & { [K in Exclude<keyof I, "activity">]: never; }>(base?: I): CDOTAUserMsg_UnitEvent_FadeGesture;
    fromPartial<I_1 extends {
        activity?: number;
    } & {
        activity?: number;
    } & { [K_1 in Exclude<keyof I_1, "activity">]: never; }>(object: I_1): CDOTAUserMsg_UnitEvent_FadeGesture;
};
export declare const CDOTAUserMsg_ItemPurchased: {
    fromJSON(object: any): CDOTAUserMsg_ItemPurchased;
    toJSON(message: CDOTAUserMsg_ItemPurchased): unknown;
    create<I extends {
        item_ability_id?: number;
    } & {
        item_ability_id?: number;
    } & { [K in Exclude<keyof I, "item_ability_id">]: never; }>(base?: I): CDOTAUserMsg_ItemPurchased;
    fromPartial<I_1 extends {
        item_ability_id?: number;
    } & {
        item_ability_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "item_ability_id">]: never; }>(object: I_1): CDOTAUserMsg_ItemPurchased;
};
export declare const CDOTAUserMsg_ItemSold: {
    fromJSON(object: any): CDOTAUserMsg_ItemSold;
    toJSON(message: CDOTAUserMsg_ItemSold): unknown;
    create<I extends {
        item_ability_id?: number;
    } & {
        item_ability_id?: number;
    } & { [K in Exclude<keyof I, "item_ability_id">]: never; }>(base?: I): CDOTAUserMsg_ItemSold;
    fromPartial<I_1 extends {
        item_ability_id?: number;
    } & {
        item_ability_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "item_ability_id">]: never; }>(object: I_1): CDOTAUserMsg_ItemSold;
};
export declare const CDOTAUserMsg_ItemFound: {
    fromJSON(object: any): CDOTAUserMsg_ItemFound;
    toJSON(message: CDOTAUserMsg_ItemFound): unknown;
    create<I extends {
        player?: number;
        quality?: number;
        rarity?: number;
        method?: number;
        itemdef?: number;
    } & {
        player?: number;
        quality?: number;
        rarity?: number;
        method?: number;
        itemdef?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_ItemFound>]: never; }>(base?: I): CDOTAUserMsg_ItemFound;
    fromPartial<I_1 extends {
        player?: number;
        quality?: number;
        rarity?: number;
        method?: number;
        itemdef?: number;
    } & {
        player?: number;
        quality?: number;
        rarity?: number;
        method?: number;
        itemdef?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_ItemFound>]: never; }>(object: I_1): CDOTAUserMsg_ItemFound;
};
export declare const CDOTAUserMsg_OverheadEvent: {
    fromJSON(object: any): CDOTAUserMsg_OverheadEvent;
    toJSON(message: CDOTAUserMsg_OverheadEvent): unknown;
    create<I extends {
        message_type?: DOTA_OVERHEAD_ALERT;
        value?: number;
        target_player_entindex?: number;
        target_entindex?: number;
        source_player_entindex?: number;
    } & {
        message_type?: DOTA_OVERHEAD_ALERT;
        value?: number;
        target_player_entindex?: number;
        target_entindex?: number;
        source_player_entindex?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_OverheadEvent>]: never; }>(base?: I): CDOTAUserMsg_OverheadEvent;
    fromPartial<I_1 extends {
        message_type?: DOTA_OVERHEAD_ALERT;
        value?: number;
        target_player_entindex?: number;
        target_entindex?: number;
        source_player_entindex?: number;
    } & {
        message_type?: DOTA_OVERHEAD_ALERT;
        value?: number;
        target_player_entindex?: number;
        target_entindex?: number;
        source_player_entindex?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_OverheadEvent>]: never; }>(object: I_1): CDOTAUserMsg_OverheadEvent;
};
export declare const CDOTAUserMsg_TutorialTipInfo: {
    fromJSON(object: any): CDOTAUserMsg_TutorialTipInfo;
    toJSON(message: CDOTAUserMsg_TutorialTipInfo): unknown;
    create<I extends {
        name?: string;
        progress?: number;
    } & {
        name?: string;
        progress?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_TutorialTipInfo>]: never; }>(base?: I): CDOTAUserMsg_TutorialTipInfo;
    fromPartial<I_1 extends {
        name?: string;
        progress?: number;
    } & {
        name?: string;
        progress?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_TutorialTipInfo>]: never; }>(object: I_1): CDOTAUserMsg_TutorialTipInfo;
};
export declare const CDOTAUserMsg_TutorialFinish: {
    fromJSON(object: any): CDOTAUserMsg_TutorialFinish;
    toJSON(message: CDOTAUserMsg_TutorialFinish): unknown;
    create<I extends {
        heading?: string;
        emblem?: string;
        body?: string;
        success?: boolean;
    } & {
        heading?: string;
        emblem?: string;
        body?: string;
        success?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_TutorialFinish>]: never; }>(base?: I): CDOTAUserMsg_TutorialFinish;
    fromPartial<I_1 extends {
        heading?: string;
        emblem?: string;
        body?: string;
        success?: boolean;
    } & {
        heading?: string;
        emblem?: string;
        body?: string;
        success?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_TutorialFinish>]: never; }>(object: I_1): CDOTAUserMsg_TutorialFinish;
};
export declare const CDOTAUserMsg_TutorialMinimapPosition: {
    fromJSON(_: any): CDOTAUserMsg_TutorialMinimapPosition;
    toJSON(_: CDOTAUserMsg_TutorialMinimapPosition): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CDOTAUserMsg_TutorialMinimapPosition;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CDOTAUserMsg_TutorialMinimapPosition;
};
export declare const CDOTAUserMsg_SendGenericToolTip: {
    fromJSON(object: any): CDOTAUserMsg_SendGenericToolTip;
    toJSON(message: CDOTAUserMsg_SendGenericToolTip): unknown;
    create<I extends {
        title?: string;
        text?: string;
        entindex?: number;
        close?: boolean;
    } & {
        title?: string;
        text?: string;
        entindex?: number;
        close?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_SendGenericToolTip>]: never; }>(base?: I): CDOTAUserMsg_SendGenericToolTip;
    fromPartial<I_1 extends {
        title?: string;
        text?: string;
        entindex?: number;
        close?: boolean;
    } & {
        title?: string;
        text?: string;
        entindex?: number;
        close?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_SendGenericToolTip>]: never; }>(object: I_1): CDOTAUserMsg_SendGenericToolTip;
};
export declare const CDOTAUserMsg_WorldLine: {
    fromJSON(object: any): CDOTAUserMsg_WorldLine;
    toJSON(message: CDOTAUserMsg_WorldLine): unknown;
    create<I extends {
        player_id?: number;
        worldline?: {
            x?: number;
            y?: number;
            z?: number;
            initial?: boolean;
            end?: boolean;
        };
    } & {
        player_id?: number;
        worldline?: {
            x?: number;
            y?: number;
            z?: number;
            initial?: boolean;
            end?: boolean;
        } & {
            x?: number;
            y?: number;
            z?: number;
            initial?: boolean;
            end?: boolean;
        } & { [K in Exclude<keyof I["worldline"], keyof CDOTAMsg_WorldLine>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CDOTAUserMsg_WorldLine>]: never; }>(base?: I): CDOTAUserMsg_WorldLine;
    fromPartial<I_1 extends {
        player_id?: number;
        worldline?: {
            x?: number;
            y?: number;
            z?: number;
            initial?: boolean;
            end?: boolean;
        };
    } & {
        player_id?: number;
        worldline?: {
            x?: number;
            y?: number;
            z?: number;
            initial?: boolean;
            end?: boolean;
        } & {
            x?: number;
            y?: number;
            z?: number;
            initial?: boolean;
            end?: boolean;
        } & { [K_2 in Exclude<keyof I_1["worldline"], keyof CDOTAMsg_WorldLine>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CDOTAUserMsg_WorldLine>]: never; }>(object: I_1): CDOTAUserMsg_WorldLine;
};
export declare const CDOTAUserMsg_ChatWheel: {
    fromJSON(object: any): CDOTAUserMsg_ChatWheel;
    toJSON(message: CDOTAUserMsg_ChatWheel): unknown;
    create<I extends {
        chat_message_id?: number;
        player_id?: number;
        account_id?: number;
        param_hero_id?: number;
        emoticon_id?: number;
    } & {
        chat_message_id?: number;
        player_id?: number;
        account_id?: number;
        param_hero_id?: number;
        emoticon_id?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_ChatWheel>]: never; }>(base?: I): CDOTAUserMsg_ChatWheel;
    fromPartial<I_1 extends {
        chat_message_id?: number;
        player_id?: number;
        account_id?: number;
        param_hero_id?: number;
        emoticon_id?: number;
    } & {
        chat_message_id?: number;
        player_id?: number;
        account_id?: number;
        param_hero_id?: number;
        emoticon_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_ChatWheel>]: never; }>(object: I_1): CDOTAUserMsg_ChatWheel;
};
export declare const CDOTAUserMsg_ReceivedXmasGift: {
    fromJSON(object: any): CDOTAUserMsg_ReceivedXmasGift;
    toJSON(message: CDOTAUserMsg_ReceivedXmasGift): unknown;
    create<I extends {
        player_id?: number;
        item_name?: string;
        inventory_slot?: number;
    } & {
        player_id?: number;
        item_name?: string;
        inventory_slot?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_ReceivedXmasGift>]: never; }>(base?: I): CDOTAUserMsg_ReceivedXmasGift;
    fromPartial<I_1 extends {
        player_id?: number;
        item_name?: string;
        inventory_slot?: number;
    } & {
        player_id?: number;
        item_name?: string;
        inventory_slot?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_ReceivedXmasGift>]: never; }>(object: I_1): CDOTAUserMsg_ReceivedXmasGift;
};
export declare const CDOTAUserMsg_ShowSurvey: {
    fromJSON(object: any): CDOTAUserMsg_ShowSurvey;
    toJSON(message: CDOTAUserMsg_ShowSurvey): unknown;
    create<I extends {
        survey_id?: number;
        match_id?: string;
        response_style?: string;
        teammate_hero_id?: number;
        teammate_name?: string;
        teammate_account_id?: number;
    } & {
        survey_id?: number;
        match_id?: string;
        response_style?: string;
        teammate_hero_id?: number;
        teammate_name?: string;
        teammate_account_id?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_ShowSurvey>]: never; }>(base?: I): CDOTAUserMsg_ShowSurvey;
    fromPartial<I_1 extends {
        survey_id?: number;
        match_id?: string;
        response_style?: string;
        teammate_hero_id?: number;
        teammate_name?: string;
        teammate_account_id?: number;
    } & {
        survey_id?: number;
        match_id?: string;
        response_style?: string;
        teammate_hero_id?: number;
        teammate_name?: string;
        teammate_account_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_ShowSurvey>]: never; }>(object: I_1): CDOTAUserMsg_ShowSurvey;
};
export declare const CDOTAUserMsg_UpdateSharedContent: {
    fromJSON(object: any): CDOTAUserMsg_UpdateSharedContent;
    toJSON(message: CDOTAUserMsg_UpdateSharedContent): unknown;
    create<I extends {
        slot_type?: number;
    } & {
        slot_type?: number;
    } & { [K in Exclude<keyof I, "slot_type">]: never; }>(base?: I): CDOTAUserMsg_UpdateSharedContent;
    fromPartial<I_1 extends {
        slot_type?: number;
    } & {
        slot_type?: number;
    } & { [K_1 in Exclude<keyof I_1, "slot_type">]: never; }>(object: I_1): CDOTAUserMsg_UpdateSharedContent;
};
export declare const CDOTAUserMsg_TutorialRequestExp: {
    fromJSON(_: any): CDOTAUserMsg_TutorialRequestExp;
    toJSON(_: CDOTAUserMsg_TutorialRequestExp): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CDOTAUserMsg_TutorialRequestExp;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CDOTAUserMsg_TutorialRequestExp;
};
export declare const CDOTAUserMsg_TutorialFade: {
    fromJSON(object: any): CDOTAUserMsg_TutorialFade;
    toJSON(message: CDOTAUserMsg_TutorialFade): unknown;
    create<I extends {
        tgt_alpha?: number;
    } & {
        tgt_alpha?: number;
    } & { [K in Exclude<keyof I, "tgt_alpha">]: never; }>(base?: I): CDOTAUserMsg_TutorialFade;
    fromPartial<I_1 extends {
        tgt_alpha?: number;
    } & {
        tgt_alpha?: number;
    } & { [K_1 in Exclude<keyof I_1, "tgt_alpha">]: never; }>(object: I_1): CDOTAUserMsg_TutorialFade;
};
export declare const CDOTAUserMsg_TutorialPingMinimap: {
    fromJSON(object: any): CDOTAUserMsg_TutorialPingMinimap;
    toJSON(message: CDOTAUserMsg_TutorialPingMinimap): unknown;
    create<I extends {
        player_id?: number;
        pos_x?: number;
        pos_y?: number;
        pos_z?: number;
        entity_index?: number;
    } & {
        player_id?: number;
        pos_x?: number;
        pos_y?: number;
        pos_z?: number;
        entity_index?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_TutorialPingMinimap>]: never; }>(base?: I): CDOTAUserMsg_TutorialPingMinimap;
    fromPartial<I_1 extends {
        player_id?: number;
        pos_x?: number;
        pos_y?: number;
        pos_z?: number;
        entity_index?: number;
    } & {
        player_id?: number;
        pos_x?: number;
        pos_y?: number;
        pos_z?: number;
        entity_index?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_TutorialPingMinimap>]: never; }>(object: I_1): CDOTAUserMsg_TutorialPingMinimap;
};
export declare const CDOTAUserMsg_GamerulesStateChanged: {
    fromJSON(object: any): CDOTAUserMsg_GamerulesStateChanged;
    toJSON(message: CDOTAUserMsg_GamerulesStateChanged): unknown;
    create<I extends {
        state?: number;
    } & {
        state?: number;
    } & { [K in Exclude<keyof I, "state">]: never; }>(base?: I): CDOTAUserMsg_GamerulesStateChanged;
    fromPartial<I_1 extends {
        state?: number;
    } & {
        state?: number;
    } & { [K_1 in Exclude<keyof I_1, "state">]: never; }>(object: I_1): CDOTAUserMsg_GamerulesStateChanged;
};
export declare const CDOTAUserMsg_AddQuestLogEntry: {
    fromJSON(object: any): CDOTAUserMsg_AddQuestLogEntry;
    toJSON(message: CDOTAUserMsg_AddQuestLogEntry): unknown;
    create<I extends {
        npc_name?: string;
        npc_dialog?: string;
    } & {
        npc_name?: string;
        npc_dialog?: string;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_AddQuestLogEntry>]: never; }>(base?: I): CDOTAUserMsg_AddQuestLogEntry;
    fromPartial<I_1 extends {
        npc_name?: string;
        npc_dialog?: string;
    } & {
        npc_name?: string;
        npc_dialog?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_AddQuestLogEntry>]: never; }>(object: I_1): CDOTAUserMsg_AddQuestLogEntry;
};
export declare const CDOTAUserMsg_SendStatPopup: {
    fromJSON(object: any): CDOTAUserMsg_SendStatPopup;
    toJSON(message: CDOTAUserMsg_SendStatPopup): unknown;
    create<I extends {
        player_id?: number;
        statpopup?: {
            style?: import("./dota_commonmessages").EDOTAStatPopupTypes;
            stat_strings?: string[];
            stat_images?: number[];
            stat_image_types?: number[];
            duration?: number;
            use_html?: boolean;
            movie_name?: string;
        };
    } & {
        player_id?: number;
        statpopup?: {
            style?: import("./dota_commonmessages").EDOTAStatPopupTypes;
            stat_strings?: string[];
            stat_images?: number[];
            stat_image_types?: number[];
            duration?: number;
            use_html?: boolean;
            movie_name?: string;
        } & {
            style?: import("./dota_commonmessages").EDOTAStatPopupTypes;
            stat_strings?: string[] & string[] & { [K in Exclude<keyof I["statpopup"]["stat_strings"], keyof string[]>]: never; };
            stat_images?: number[] & number[] & { [K_1 in Exclude<keyof I["statpopup"]["stat_images"], keyof number[]>]: never; };
            stat_image_types?: number[] & number[] & { [K_2 in Exclude<keyof I["statpopup"]["stat_image_types"], keyof number[]>]: never; };
            duration?: number;
            use_html?: boolean;
            movie_name?: string;
        } & { [K_3 in Exclude<keyof I["statpopup"], keyof CDOTAMsg_SendStatPopup>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof CDOTAUserMsg_SendStatPopup>]: never; }>(base?: I): CDOTAUserMsg_SendStatPopup;
    fromPartial<I_1 extends {
        player_id?: number;
        statpopup?: {
            style?: import("./dota_commonmessages").EDOTAStatPopupTypes;
            stat_strings?: string[];
            stat_images?: number[];
            stat_image_types?: number[];
            duration?: number;
            use_html?: boolean;
            movie_name?: string;
        };
    } & {
        player_id?: number;
        statpopup?: {
            style?: import("./dota_commonmessages").EDOTAStatPopupTypes;
            stat_strings?: string[];
            stat_images?: number[];
            stat_image_types?: number[];
            duration?: number;
            use_html?: boolean;
            movie_name?: string;
        } & {
            style?: import("./dota_commonmessages").EDOTAStatPopupTypes;
            stat_strings?: string[] & string[] & { [K_5 in Exclude<keyof I_1["statpopup"]["stat_strings"], keyof string[]>]: never; };
            stat_images?: number[] & number[] & { [K_6 in Exclude<keyof I_1["statpopup"]["stat_images"], keyof number[]>]: never; };
            stat_image_types?: number[] & number[] & { [K_7 in Exclude<keyof I_1["statpopup"]["stat_image_types"], keyof number[]>]: never; };
            duration?: number;
            use_html?: boolean;
            movie_name?: string;
        } & { [K_8 in Exclude<keyof I_1["statpopup"], keyof CDOTAMsg_SendStatPopup>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof CDOTAUserMsg_SendStatPopup>]: never; }>(object: I_1): CDOTAUserMsg_SendStatPopup;
};
export declare const CDOTAUserMsg_DismissAllStatPopups: {
    fromJSON(object: any): CDOTAUserMsg_DismissAllStatPopups;
    toJSON(message: CDOTAUserMsg_DismissAllStatPopups): unknown;
    create<I extends {
        dismissallmsg?: {
            time_delay?: number;
        };
    } & {
        dismissallmsg?: {
            time_delay?: number;
        } & {
            time_delay?: number;
        } & { [K in Exclude<keyof I["dismissallmsg"], "time_delay">]: never; };
    } & { [K_1 in Exclude<keyof I, "dismissallmsg">]: never; }>(base?: I): CDOTAUserMsg_DismissAllStatPopups;
    fromPartial<I_1 extends {
        dismissallmsg?: {
            time_delay?: number;
        };
    } & {
        dismissallmsg?: {
            time_delay?: number;
        } & {
            time_delay?: number;
        } & { [K_2 in Exclude<keyof I_1["dismissallmsg"], "time_delay">]: never; };
    } & { [K_3 in Exclude<keyof I_1, "dismissallmsg">]: never; }>(object: I_1): CDOTAUserMsg_DismissAllStatPopups;
};
export declare const CDOTAUserMsg_SendRoshanSpectatorPhase: {
    fromJSON(object: any): CDOTAUserMsg_SendRoshanSpectatorPhase;
    toJSON(message: CDOTAUserMsg_SendRoshanSpectatorPhase): unknown;
    create<I extends {
        phase?: DOTA_ROSHAN_PHASE;
        phase_start_time?: number;
        phase_length?: number;
    } & {
        phase?: DOTA_ROSHAN_PHASE;
        phase_start_time?: number;
        phase_length?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_SendRoshanSpectatorPhase>]: never; }>(base?: I): CDOTAUserMsg_SendRoshanSpectatorPhase;
    fromPartial<I_1 extends {
        phase?: DOTA_ROSHAN_PHASE;
        phase_start_time?: number;
        phase_length?: number;
    } & {
        phase?: DOTA_ROSHAN_PHASE;
        phase_start_time?: number;
        phase_length?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_SendRoshanSpectatorPhase>]: never; }>(object: I_1): CDOTAUserMsg_SendRoshanSpectatorPhase;
};
export declare const CDOTAUserMsg_SendRoshanPopup: {
    fromJSON(object: any): CDOTAUserMsg_SendRoshanPopup;
    toJSON(message: CDOTAUserMsg_SendRoshanPopup): unknown;
    create<I extends {
        reclaimed?: boolean;
        gametime?: number;
    } & {
        reclaimed?: boolean;
        gametime?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_SendRoshanPopup>]: never; }>(base?: I): CDOTAUserMsg_SendRoshanPopup;
    fromPartial<I_1 extends {
        reclaimed?: boolean;
        gametime?: number;
    } & {
        reclaimed?: boolean;
        gametime?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_SendRoshanPopup>]: never; }>(object: I_1): CDOTAUserMsg_SendRoshanPopup;
};
export declare const CDOTAUserMsg_SendFinalGold: {
    fromJSON(object: any): CDOTAUserMsg_SendFinalGold;
    toJSON(message: CDOTAUserMsg_SendFinalGold): unknown;
    create<I extends {
        reliable_gold?: number[];
        unreliable_gold?: number[];
    } & {
        reliable_gold?: number[] & number[] & { [K in Exclude<keyof I["reliable_gold"], keyof number[]>]: never; };
        unreliable_gold?: number[] & number[] & { [K_1 in Exclude<keyof I["unreliable_gold"], keyof number[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CDOTAUserMsg_SendFinalGold>]: never; }>(base?: I): CDOTAUserMsg_SendFinalGold;
    fromPartial<I_1 extends {
        reliable_gold?: number[];
        unreliable_gold?: number[];
    } & {
        reliable_gold?: number[] & number[] & { [K_3 in Exclude<keyof I_1["reliable_gold"], keyof number[]>]: never; };
        unreliable_gold?: number[] & number[] & { [K_4 in Exclude<keyof I_1["unreliable_gold"], keyof number[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CDOTAUserMsg_SendFinalGold>]: never; }>(object: I_1): CDOTAUserMsg_SendFinalGold;
};
export declare const CDOTAUserMsg_CustomMsg: {
    fromJSON(object: any): CDOTAUserMsg_CustomMsg;
    toJSON(message: CDOTAUserMsg_CustomMsg): unknown;
    create<I extends {
        message?: string;
        player_id?: number;
        value?: number;
    } & {
        message?: string;
        player_id?: number;
        value?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_CustomMsg>]: never; }>(base?: I): CDOTAUserMsg_CustomMsg;
    fromPartial<I_1 extends {
        message?: string;
        player_id?: number;
        value?: number;
    } & {
        message?: string;
        player_id?: number;
        value?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_CustomMsg>]: never; }>(object: I_1): CDOTAUserMsg_CustomMsg;
};
export declare const CDOTAUserMsg_CoachHUDPing: {
    fromJSON(object: any): CDOTAUserMsg_CoachHUDPing;
    toJSON(message: CDOTAUserMsg_CoachHUDPing): unknown;
    create<I extends {
        player_id?: number;
        hud_ping?: {
            x?: number;
            y?: number;
            tgtpath?: string;
        };
    } & {
        player_id?: number;
        hud_ping?: {
            x?: number;
            y?: number;
            tgtpath?: string;
        } & {
            x?: number;
            y?: number;
            tgtpath?: string;
        } & { [K in Exclude<keyof I["hud_ping"], keyof CDOTAMsg_CoachHUDPing>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CDOTAUserMsg_CoachHUDPing>]: never; }>(base?: I): CDOTAUserMsg_CoachHUDPing;
    fromPartial<I_1 extends {
        player_id?: number;
        hud_ping?: {
            x?: number;
            y?: number;
            tgtpath?: string;
        };
    } & {
        player_id?: number;
        hud_ping?: {
            x?: number;
            y?: number;
            tgtpath?: string;
        } & {
            x?: number;
            y?: number;
            tgtpath?: string;
        } & { [K_2 in Exclude<keyof I_1["hud_ping"], keyof CDOTAMsg_CoachHUDPing>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CDOTAUserMsg_CoachHUDPing>]: never; }>(object: I_1): CDOTAUserMsg_CoachHUDPing;
};
export declare const CDOTAUserMsg_ClientLoadGridNav: {
    fromJSON(_: any): CDOTAUserMsg_ClientLoadGridNav;
    toJSON(_: CDOTAUserMsg_ClientLoadGridNav): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CDOTAUserMsg_ClientLoadGridNav;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CDOTAUserMsg_ClientLoadGridNav;
};
export declare const CDOTAUserMsg_TE_Projectile: {
    fromJSON(object: any): CDOTAUserMsg_TE_Projectile;
    toJSON(message: CDOTAUserMsg_TE_Projectile): unknown;
    create<I extends {
        source?: number;
        target?: number;
        move_speed?: number;
        source_attachment?: number;
        particle_system_handle?: string;
        dodgeable?: boolean;
        is_attack?: boolean;
        expire_time?: number;
        maximpacttime?: number;
        colorgemcolor?: number;
        launch_tick?: number;
        handle?: number;
        target_loc?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        particle_cp_data?: {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        }[];
        additional_particle_system_handle?: string;
    } & {
        source?: number;
        target?: number;
        move_speed?: number;
        source_attachment?: number;
        particle_system_handle?: string;
        dodgeable?: boolean;
        is_attack?: boolean;
        expire_time?: number;
        maximpacttime?: number;
        colorgemcolor?: number;
        launch_tick?: number;
        handle?: number;
        target_loc?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["target_loc"], keyof CMsgVector>]: never; };
        particle_cp_data?: {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        }[] & ({
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        } & {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_1 in Exclude<keyof I["particle_cp_data"][number]["vector"], keyof CMsgVector>]: never; };
        } & { [K_2 in Exclude<keyof I["particle_cp_data"][number], keyof CDOTAUserMsg_ProjectileParticleCPData>]: never; })[] & { [K_3 in Exclude<keyof I["particle_cp_data"], keyof {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        }[]>]: never; };
        additional_particle_system_handle?: string;
    } & { [K_4 in Exclude<keyof I, keyof CDOTAUserMsg_TE_Projectile>]: never; }>(base?: I): CDOTAUserMsg_TE_Projectile;
    fromPartial<I_1 extends {
        source?: number;
        target?: number;
        move_speed?: number;
        source_attachment?: number;
        particle_system_handle?: string;
        dodgeable?: boolean;
        is_attack?: boolean;
        expire_time?: number;
        maximpacttime?: number;
        colorgemcolor?: number;
        launch_tick?: number;
        handle?: number;
        target_loc?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        particle_cp_data?: {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        }[];
        additional_particle_system_handle?: string;
    } & {
        source?: number;
        target?: number;
        move_speed?: number;
        source_attachment?: number;
        particle_system_handle?: string;
        dodgeable?: boolean;
        is_attack?: boolean;
        expire_time?: number;
        maximpacttime?: number;
        colorgemcolor?: number;
        launch_tick?: number;
        handle?: number;
        target_loc?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_5 in Exclude<keyof I_1["target_loc"], keyof CMsgVector>]: never; };
        particle_cp_data?: {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        }[] & ({
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        } & {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_6 in Exclude<keyof I_1["particle_cp_data"][number]["vector"], keyof CMsgVector>]: never; };
        } & { [K_7 in Exclude<keyof I_1["particle_cp_data"][number], keyof CDOTAUserMsg_ProjectileParticleCPData>]: never; })[] & { [K_8 in Exclude<keyof I_1["particle_cp_data"], keyof {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        }[]>]: never; };
        additional_particle_system_handle?: string;
    } & { [K_9 in Exclude<keyof I_1, keyof CDOTAUserMsg_TE_Projectile>]: never; }>(object: I_1): CDOTAUserMsg_TE_Projectile;
};
export declare const CDOTAUserMsg_TE_ProjectileLoc: {
    fromJSON(object: any): CDOTAUserMsg_TE_ProjectileLoc;
    toJSON(message: CDOTAUserMsg_TE_ProjectileLoc): unknown;
    create<I extends {
        source_loc?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        target?: number;
        move_speed?: number;
        particle_system_handle?: string;
        dodgeable?: boolean;
        is_attack?: boolean;
        expire_time?: number;
        target_loc?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        colorgemcolor?: number;
        launch_tick?: number;
        handle?: number;
        source?: number;
        source_attachment?: number;
        particle_cp_data?: {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        }[];
        additional_particle_system_handle?: string;
    } & {
        source_loc?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["source_loc"], keyof CMsgVector>]: never; };
        target?: number;
        move_speed?: number;
        particle_system_handle?: string;
        dodgeable?: boolean;
        is_attack?: boolean;
        expire_time?: number;
        target_loc?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_1 in Exclude<keyof I["target_loc"], keyof CMsgVector>]: never; };
        colorgemcolor?: number;
        launch_tick?: number;
        handle?: number;
        source?: number;
        source_attachment?: number;
        particle_cp_data?: {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        }[] & ({
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        } & {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_2 in Exclude<keyof I["particle_cp_data"][number]["vector"], keyof CMsgVector>]: never; };
        } & { [K_3 in Exclude<keyof I["particle_cp_data"][number], keyof CDOTAUserMsg_ProjectileParticleCPData>]: never; })[] & { [K_4 in Exclude<keyof I["particle_cp_data"], keyof {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        }[]>]: never; };
        additional_particle_system_handle?: string;
    } & { [K_5 in Exclude<keyof I, keyof CDOTAUserMsg_TE_ProjectileLoc>]: never; }>(base?: I): CDOTAUserMsg_TE_ProjectileLoc;
    fromPartial<I_1 extends {
        source_loc?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        target?: number;
        move_speed?: number;
        particle_system_handle?: string;
        dodgeable?: boolean;
        is_attack?: boolean;
        expire_time?: number;
        target_loc?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        colorgemcolor?: number;
        launch_tick?: number;
        handle?: number;
        source?: number;
        source_attachment?: number;
        particle_cp_data?: {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        }[];
        additional_particle_system_handle?: string;
    } & {
        source_loc?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_6 in Exclude<keyof I_1["source_loc"], keyof CMsgVector>]: never; };
        target?: number;
        move_speed?: number;
        particle_system_handle?: string;
        dodgeable?: boolean;
        is_attack?: boolean;
        expire_time?: number;
        target_loc?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_7 in Exclude<keyof I_1["target_loc"], keyof CMsgVector>]: never; };
        colorgemcolor?: number;
        launch_tick?: number;
        handle?: number;
        source?: number;
        source_attachment?: number;
        particle_cp_data?: {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        }[] & ({
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        } & {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_8 in Exclude<keyof I_1["particle_cp_data"][number]["vector"], keyof CMsgVector>]: never; };
        } & { [K_9 in Exclude<keyof I_1["particle_cp_data"][number], keyof CDOTAUserMsg_ProjectileParticleCPData>]: never; })[] & { [K_10 in Exclude<keyof I_1["particle_cp_data"], keyof {
            control_point?: number;
            vector?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        }[]>]: never; };
        additional_particle_system_handle?: string;
    } & { [K_11 in Exclude<keyof I_1, keyof CDOTAUserMsg_TE_ProjectileLoc>]: never; }>(object: I_1): CDOTAUserMsg_TE_ProjectileLoc;
};
export declare const CDOTAUserMsg_TE_DestroyProjectile: {
    fromJSON(object: any): CDOTAUserMsg_TE_DestroyProjectile;
    toJSON(message: CDOTAUserMsg_TE_DestroyProjectile): unknown;
    create<I extends {
        handle?: number;
    } & {
        handle?: number;
    } & { [K in Exclude<keyof I, "handle">]: never; }>(base?: I): CDOTAUserMsg_TE_DestroyProjectile;
    fromPartial<I_1 extends {
        handle?: number;
    } & {
        handle?: number;
    } & { [K_1 in Exclude<keyof I_1, "handle">]: never; }>(object: I_1): CDOTAUserMsg_TE_DestroyProjectile;
};
export declare const CDOTAUserMsg_TE_DotaBloodImpact: {
    fromJSON(object: any): CDOTAUserMsg_TE_DotaBloodImpact;
    toJSON(message: CDOTAUserMsg_TE_DotaBloodImpact): unknown;
    create<I extends {
        entity?: number;
        scale?: number;
        xnormal?: number;
        ynormal?: number;
    } & {
        entity?: number;
        scale?: number;
        xnormal?: number;
        ynormal?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_TE_DotaBloodImpact>]: never; }>(base?: I): CDOTAUserMsg_TE_DotaBloodImpact;
    fromPartial<I_1 extends {
        entity?: number;
        scale?: number;
        xnormal?: number;
        ynormal?: number;
    } & {
        entity?: number;
        scale?: number;
        xnormal?: number;
        ynormal?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_TE_DotaBloodImpact>]: never; }>(object: I_1): CDOTAUserMsg_TE_DotaBloodImpact;
};
export declare const CDOTAUserMsg_AbilityPing: {
    fromJSON(object: any): CDOTAUserMsg_AbilityPing;
    toJSON(message: CDOTAUserMsg_AbilityPing): unknown;
    create<I extends {
        player_id?: number;
        ability_id?: number;
        type?: DOTA_ABILITY_PING_TYPE;
        cooldown_seconds?: number;
        level?: number;
        passive?: boolean;
        mana_needed?: number;
        entity_id?: number;
        primary_charges?: number;
        secondary_charges?: number;
        ctrl_held?: boolean;
        reclaim_time?: number;
    } & {
        player_id?: number;
        ability_id?: number;
        type?: DOTA_ABILITY_PING_TYPE;
        cooldown_seconds?: number;
        level?: number;
        passive?: boolean;
        mana_needed?: number;
        entity_id?: number;
        primary_charges?: number;
        secondary_charges?: number;
        ctrl_held?: boolean;
        reclaim_time?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_AbilityPing>]: never; }>(base?: I): CDOTAUserMsg_AbilityPing;
    fromPartial<I_1 extends {
        player_id?: number;
        ability_id?: number;
        type?: DOTA_ABILITY_PING_TYPE;
        cooldown_seconds?: number;
        level?: number;
        passive?: boolean;
        mana_needed?: number;
        entity_id?: number;
        primary_charges?: number;
        secondary_charges?: number;
        ctrl_held?: boolean;
        reclaim_time?: number;
    } & {
        player_id?: number;
        ability_id?: number;
        type?: DOTA_ABILITY_PING_TYPE;
        cooldown_seconds?: number;
        level?: number;
        passive?: boolean;
        mana_needed?: number;
        entity_id?: number;
        primary_charges?: number;
        secondary_charges?: number;
        ctrl_held?: boolean;
        reclaim_time?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_AbilityPing>]: never; }>(object: I_1): CDOTAUserMsg_AbilityPing;
};
export declare const CDOTAUserMsg_TE_UnitAnimation: {
    fromJSON(object: any): CDOTAUserMsg_TE_UnitAnimation;
    toJSON(message: CDOTAUserMsg_TE_UnitAnimation): unknown;
    create<I extends {
        entity?: number;
        sequence_variant?: number;
        playbackrate?: number;
        castpoint?: number;
        type?: number;
        activity?: number;
        lag_compensation_time?: number;
    } & {
        entity?: number;
        sequence_variant?: number;
        playbackrate?: number;
        castpoint?: number;
        type?: number;
        activity?: number;
        lag_compensation_time?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_TE_UnitAnimation>]: never; }>(base?: I): CDOTAUserMsg_TE_UnitAnimation;
    fromPartial<I_1 extends {
        entity?: number;
        sequence_variant?: number;
        playbackrate?: number;
        castpoint?: number;
        type?: number;
        activity?: number;
        lag_compensation_time?: number;
    } & {
        entity?: number;
        sequence_variant?: number;
        playbackrate?: number;
        castpoint?: number;
        type?: number;
        activity?: number;
        lag_compensation_time?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_TE_UnitAnimation>]: never; }>(object: I_1): CDOTAUserMsg_TE_UnitAnimation;
};
export declare const CDOTAUserMsg_TE_UnitAnimationEnd: {
    fromJSON(object: any): CDOTAUserMsg_TE_UnitAnimationEnd;
    toJSON(message: CDOTAUserMsg_TE_UnitAnimationEnd): unknown;
    create<I extends {
        entity?: number;
        snap?: boolean;
    } & {
        entity?: number;
        snap?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_TE_UnitAnimationEnd>]: never; }>(base?: I): CDOTAUserMsg_TE_UnitAnimationEnd;
    fromPartial<I_1 extends {
        entity?: number;
        snap?: boolean;
    } & {
        entity?: number;
        snap?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_TE_UnitAnimationEnd>]: never; }>(object: I_1): CDOTAUserMsg_TE_UnitAnimationEnd;
};
export declare const CDOTAUserMsg_ShowGenericPopup: {
    fromJSON(object: any): CDOTAUserMsg_ShowGenericPopup;
    toJSON(message: CDOTAUserMsg_ShowGenericPopup): unknown;
    create<I extends {
        header?: string;
        body?: string;
        param1?: string;
        param2?: string;
        tint_screen?: boolean;
        show_no_other_dialogs?: boolean;
    } & {
        header?: string;
        body?: string;
        param1?: string;
        param2?: string;
        tint_screen?: boolean;
        show_no_other_dialogs?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_ShowGenericPopup>]: never; }>(base?: I): CDOTAUserMsg_ShowGenericPopup;
    fromPartial<I_1 extends {
        header?: string;
        body?: string;
        param1?: string;
        param2?: string;
        tint_screen?: boolean;
        show_no_other_dialogs?: boolean;
    } & {
        header?: string;
        body?: string;
        param1?: string;
        param2?: string;
        tint_screen?: boolean;
        show_no_other_dialogs?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_ShowGenericPopup>]: never; }>(object: I_1): CDOTAUserMsg_ShowGenericPopup;
};
export declare const CDOTAUserMsg_VoteStart: {
    fromJSON(object: any): CDOTAUserMsg_VoteStart;
    toJSON(message: CDOTAUserMsg_VoteStart): unknown;
    create<I extends {
        title?: string;
        duration?: number;
        choice_count?: number;
        choices?: string[];
    } & {
        title?: string;
        duration?: number;
        choice_count?: number;
        choices?: string[] & string[] & { [K in Exclude<keyof I["choices"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CDOTAUserMsg_VoteStart>]: never; }>(base?: I): CDOTAUserMsg_VoteStart;
    fromPartial<I_1 extends {
        title?: string;
        duration?: number;
        choice_count?: number;
        choices?: string[];
    } & {
        title?: string;
        duration?: number;
        choice_count?: number;
        choices?: string[] & string[] & { [K_2 in Exclude<keyof I_1["choices"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CDOTAUserMsg_VoteStart>]: never; }>(object: I_1): CDOTAUserMsg_VoteStart;
};
export declare const CDOTAUserMsg_VoteUpdate: {
    fromJSON(object: any): CDOTAUserMsg_VoteUpdate;
    toJSON(message: CDOTAUserMsg_VoteUpdate): unknown;
    create<I extends {
        choice_counts?: number[];
    } & {
        choice_counts?: number[] & number[] & { [K in Exclude<keyof I["choice_counts"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, "choice_counts">]: never; }>(base?: I): CDOTAUserMsg_VoteUpdate;
    fromPartial<I_1 extends {
        choice_counts?: number[];
    } & {
        choice_counts?: number[] & number[] & { [K_2 in Exclude<keyof I_1["choice_counts"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "choice_counts">]: never; }>(object: I_1): CDOTAUserMsg_VoteUpdate;
};
export declare const CDOTAUserMsg_VoteEnd: {
    fromJSON(object: any): CDOTAUserMsg_VoteEnd;
    toJSON(message: CDOTAUserMsg_VoteEnd): unknown;
    create<I extends {
        selected_choice?: number;
    } & {
        selected_choice?: number;
    } & { [K in Exclude<keyof I, "selected_choice">]: never; }>(base?: I): CDOTAUserMsg_VoteEnd;
    fromPartial<I_1 extends {
        selected_choice?: number;
    } & {
        selected_choice?: number;
    } & { [K_1 in Exclude<keyof I_1, "selected_choice">]: never; }>(object: I_1): CDOTAUserMsg_VoteEnd;
};
export declare const CDOTAUserMsg_BoosterStatePlayer: {
    fromJSON(object: any): CDOTAUserMsg_BoosterStatePlayer;
    toJSON(message: CDOTAUserMsg_BoosterStatePlayer): unknown;
    create<I extends {
        player_id?: number;
        bonus?: number;
        event_bonus?: number;
        bonus_item_id?: number;
        event_bonus_item_id?: number;
    } & {
        player_id?: number;
        bonus?: number;
        event_bonus?: number;
        bonus_item_id?: number;
        event_bonus_item_id?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_BoosterStatePlayer>]: never; }>(base?: I): CDOTAUserMsg_BoosterStatePlayer;
    fromPartial<I_1 extends {
        player_id?: number;
        bonus?: number;
        event_bonus?: number;
        bonus_item_id?: number;
        event_bonus_item_id?: number;
    } & {
        player_id?: number;
        bonus?: number;
        event_bonus?: number;
        bonus_item_id?: number;
        event_bonus_item_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_BoosterStatePlayer>]: never; }>(object: I_1): CDOTAUserMsg_BoosterStatePlayer;
};
export declare const CDOTAUserMsg_BoosterState: {
    fromJSON(object: any): CDOTAUserMsg_BoosterState;
    toJSON(message: CDOTAUserMsg_BoosterState): unknown;
    create<I extends {
        boosted_players?: {
            player_id?: number;
            bonus?: number;
            event_bonus?: number;
            bonus_item_id?: number;
            event_bonus_item_id?: number;
        }[];
    } & {
        boosted_players?: {
            player_id?: number;
            bonus?: number;
            event_bonus?: number;
            bonus_item_id?: number;
            event_bonus_item_id?: number;
        }[] & ({
            player_id?: number;
            bonus?: number;
            event_bonus?: number;
            bonus_item_id?: number;
            event_bonus_item_id?: number;
        } & {
            player_id?: number;
            bonus?: number;
            event_bonus?: number;
            bonus_item_id?: number;
            event_bonus_item_id?: number;
        } & { [K in Exclude<keyof I["boosted_players"][number], keyof CDOTAUserMsg_BoosterStatePlayer>]: never; })[] & { [K_1 in Exclude<keyof I["boosted_players"], keyof {
            player_id?: number;
            bonus?: number;
            event_bonus?: number;
            bonus_item_id?: number;
            event_bonus_item_id?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "boosted_players">]: never; }>(base?: I): CDOTAUserMsg_BoosterState;
    fromPartial<I_1 extends {
        boosted_players?: {
            player_id?: number;
            bonus?: number;
            event_bonus?: number;
            bonus_item_id?: number;
            event_bonus_item_id?: number;
        }[];
    } & {
        boosted_players?: {
            player_id?: number;
            bonus?: number;
            event_bonus?: number;
            bonus_item_id?: number;
            event_bonus_item_id?: number;
        }[] & ({
            player_id?: number;
            bonus?: number;
            event_bonus?: number;
            bonus_item_id?: number;
            event_bonus_item_id?: number;
        } & {
            player_id?: number;
            bonus?: number;
            event_bonus?: number;
            bonus_item_id?: number;
            event_bonus_item_id?: number;
        } & { [K_3 in Exclude<keyof I_1["boosted_players"][number], keyof CDOTAUserMsg_BoosterStatePlayer>]: never; })[] & { [K_4 in Exclude<keyof I_1["boosted_players"], keyof {
            player_id?: number;
            bonus?: number;
            event_bonus?: number;
            bonus_item_id?: number;
            event_bonus_item_id?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "boosted_players">]: never; }>(object: I_1): CDOTAUserMsg_BoosterState;
};
export declare const CDOTAUserMsg_PlayerMMR: {
    fromJSON(object: any): CDOTAUserMsg_PlayerMMR;
    toJSON(message: CDOTAUserMsg_PlayerMMR): unknown;
    create<I extends {
        mmr?: number[];
    } & {
        mmr?: number[] & number[] & { [K in Exclude<keyof I["mmr"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, "mmr">]: never; }>(base?: I): CDOTAUserMsg_PlayerMMR;
    fromPartial<I_1 extends {
        mmr?: number[];
    } & {
        mmr?: number[] & number[] & { [K_2 in Exclude<keyof I_1["mmr"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "mmr">]: never; }>(object: I_1): CDOTAUserMsg_PlayerMMR;
};
export declare const CDOTAUserMsg_AbilitySteal: {
    fromJSON(object: any): CDOTAUserMsg_AbilitySteal;
    toJSON(message: CDOTAUserMsg_AbilitySteal): unknown;
    create<I extends {
        player_id?: number;
        ability_id?: number;
        ability_level?: number;
    } & {
        player_id?: number;
        ability_id?: number;
        ability_level?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_AbilitySteal>]: never; }>(base?: I): CDOTAUserMsg_AbilitySteal;
    fromPartial<I_1 extends {
        player_id?: number;
        ability_id?: number;
        ability_level?: number;
    } & {
        player_id?: number;
        ability_id?: number;
        ability_level?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_AbilitySteal>]: never; }>(object: I_1): CDOTAUserMsg_AbilitySteal;
};
export declare const CDOTAUserMsg_StatsHeroLookup: {
    fromJSON(object: any): CDOTAUserMsg_StatsHeroLookup;
    toJSON(message: CDOTAUserMsg_StatsHeroLookup): unknown;
    create<I extends {
        player_id?: number;
        hero_id?: number;
        hero_name?: string;
        persona?: string;
    } & {
        player_id?: number;
        hero_id?: number;
        hero_name?: string;
        persona?: string;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_StatsHeroLookup>]: never; }>(base?: I): CDOTAUserMsg_StatsHeroLookup;
    fromPartial<I_1 extends {
        player_id?: number;
        hero_id?: number;
        hero_name?: string;
        persona?: string;
    } & {
        player_id?: number;
        hero_id?: number;
        hero_name?: string;
        persona?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_StatsHeroLookup>]: never; }>(object: I_1): CDOTAUserMsg_StatsHeroLookup;
};
export declare const CDOTAUserMsg_StatsHeroPositionInfo: {
    fromJSON(object: any): CDOTAUserMsg_StatsHeroPositionInfo;
    toJSON(message: CDOTAUserMsg_StatsHeroPositionInfo): unknown;
    create<I extends {
        average_position?: number;
        position_details?: {
            position_category?: DOTA_POSITION_CATEGORY;
            position_count?: number;
        }[];
    } & {
        average_position?: number;
        position_details?: {
            position_category?: DOTA_POSITION_CATEGORY;
            position_count?: number;
        }[] & ({
            position_category?: DOTA_POSITION_CATEGORY;
            position_count?: number;
        } & {
            position_category?: DOTA_POSITION_CATEGORY;
            position_count?: number;
        } & { [K in Exclude<keyof I["position_details"][number], keyof CDOTAUserMsg_StatsHeroPositionInfo_PositionPair>]: never; })[] & { [K_1 in Exclude<keyof I["position_details"], keyof {
            position_category?: DOTA_POSITION_CATEGORY;
            position_count?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CDOTAUserMsg_StatsHeroPositionInfo>]: never; }>(base?: I): CDOTAUserMsg_StatsHeroPositionInfo;
    fromPartial<I_1 extends {
        average_position?: number;
        position_details?: {
            position_category?: DOTA_POSITION_CATEGORY;
            position_count?: number;
        }[];
    } & {
        average_position?: number;
        position_details?: {
            position_category?: DOTA_POSITION_CATEGORY;
            position_count?: number;
        }[] & ({
            position_category?: DOTA_POSITION_CATEGORY;
            position_count?: number;
        } & {
            position_category?: DOTA_POSITION_CATEGORY;
            position_count?: number;
        } & { [K_3 in Exclude<keyof I_1["position_details"][number], keyof CDOTAUserMsg_StatsHeroPositionInfo_PositionPair>]: never; })[] & { [K_4 in Exclude<keyof I_1["position_details"], keyof {
            position_category?: DOTA_POSITION_CATEGORY;
            position_count?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CDOTAUserMsg_StatsHeroPositionInfo>]: never; }>(object: I_1): CDOTAUserMsg_StatsHeroPositionInfo;
};
export declare const CDOTAUserMsg_StatsHeroPositionInfo_PositionPair: {
    fromJSON(object: any): CDOTAUserMsg_StatsHeroPositionInfo_PositionPair;
    toJSON(message: CDOTAUserMsg_StatsHeroPositionInfo_PositionPair): unknown;
    create<I extends {
        position_category?: DOTA_POSITION_CATEGORY;
        position_count?: number;
    } & {
        position_category?: DOTA_POSITION_CATEGORY;
        position_count?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_StatsHeroPositionInfo_PositionPair>]: never; }>(base?: I): CDOTAUserMsg_StatsHeroPositionInfo_PositionPair;
    fromPartial<I_1 extends {
        position_category?: DOTA_POSITION_CATEGORY;
        position_count?: number;
    } & {
        position_category?: DOTA_POSITION_CATEGORY;
        position_count?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_StatsHeroPositionInfo_PositionPair>]: never; }>(object: I_1): CDOTAUserMsg_StatsHeroPositionInfo_PositionPair;
};
export declare const CDOTAUserMsg_StatsHeroMinuteDetails: {
    fromJSON(object: any): CDOTAUserMsg_StatsHeroMinuteDetails;
    toJSON(message: CDOTAUserMsg_StatsHeroMinuteDetails): unknown;
    create<I extends {
        last_hits?: number;
        hero_kills?: number;
        hero_damage?: number;
        tower_damage?: number;
        position_info?: {
            average_position?: number;
            position_details?: {
                position_category?: DOTA_POSITION_CATEGORY;
                position_count?: number;
            }[];
        };
        total_xp?: number;
        net_worth?: number;
        harvested_creep_gold?: number;
        claimed_farm?: number;
        wards_placed?: number;
        runes_collected?: number;
        tps_used?: number;
        mana_spent?: number[];
        damage_absorbed?: number[];
        damage_done?: number[];
    } & {
        last_hits?: number;
        hero_kills?: number;
        hero_damage?: number;
        tower_damage?: number;
        position_info?: {
            average_position?: number;
            position_details?: {
                position_category?: DOTA_POSITION_CATEGORY;
                position_count?: number;
            }[];
        } & {
            average_position?: number;
            position_details?: {
                position_category?: DOTA_POSITION_CATEGORY;
                position_count?: number;
            }[] & ({
                position_category?: DOTA_POSITION_CATEGORY;
                position_count?: number;
            } & {
                position_category?: DOTA_POSITION_CATEGORY;
                position_count?: number;
            } & { [K in Exclude<keyof I["position_info"]["position_details"][number], keyof CDOTAUserMsg_StatsHeroPositionInfo_PositionPair>]: never; })[] & { [K_1 in Exclude<keyof I["position_info"]["position_details"], keyof {
                position_category?: DOTA_POSITION_CATEGORY;
                position_count?: number;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["position_info"], keyof CDOTAUserMsg_StatsHeroPositionInfo>]: never; };
        total_xp?: number;
        net_worth?: number;
        harvested_creep_gold?: number;
        claimed_farm?: number;
        wards_placed?: number;
        runes_collected?: number;
        tps_used?: number;
        mana_spent?: number[] & number[] & { [K_3 in Exclude<keyof I["mana_spent"], keyof number[]>]: never; };
        damage_absorbed?: number[] & number[] & { [K_4 in Exclude<keyof I["damage_absorbed"], keyof number[]>]: never; };
        damage_done?: number[] & number[] & { [K_5 in Exclude<keyof I["damage_done"], keyof number[]>]: never; };
    } & { [K_6 in Exclude<keyof I, keyof CDOTAUserMsg_StatsHeroMinuteDetails>]: never; }>(base?: I): CDOTAUserMsg_StatsHeroMinuteDetails;
    fromPartial<I_1 extends {
        last_hits?: number;
        hero_kills?: number;
        hero_damage?: number;
        tower_damage?: number;
        position_info?: {
            average_position?: number;
            position_details?: {
                position_category?: DOTA_POSITION_CATEGORY;
                position_count?: number;
            }[];
        };
        total_xp?: number;
        net_worth?: number;
        harvested_creep_gold?: number;
        claimed_farm?: number;
        wards_placed?: number;
        runes_collected?: number;
        tps_used?: number;
        mana_spent?: number[];
        damage_absorbed?: number[];
        damage_done?: number[];
    } & {
        last_hits?: number;
        hero_kills?: number;
        hero_damage?: number;
        tower_damage?: number;
        position_info?: {
            average_position?: number;
            position_details?: {
                position_category?: DOTA_POSITION_CATEGORY;
                position_count?: number;
            }[];
        } & {
            average_position?: number;
            position_details?: {
                position_category?: DOTA_POSITION_CATEGORY;
                position_count?: number;
            }[] & ({
                position_category?: DOTA_POSITION_CATEGORY;
                position_count?: number;
            } & {
                position_category?: DOTA_POSITION_CATEGORY;
                position_count?: number;
            } & { [K_7 in Exclude<keyof I_1["position_info"]["position_details"][number], keyof CDOTAUserMsg_StatsHeroPositionInfo_PositionPair>]: never; })[] & { [K_8 in Exclude<keyof I_1["position_info"]["position_details"], keyof {
                position_category?: DOTA_POSITION_CATEGORY;
                position_count?: number;
            }[]>]: never; };
        } & { [K_9 in Exclude<keyof I_1["position_info"], keyof CDOTAUserMsg_StatsHeroPositionInfo>]: never; };
        total_xp?: number;
        net_worth?: number;
        harvested_creep_gold?: number;
        claimed_farm?: number;
        wards_placed?: number;
        runes_collected?: number;
        tps_used?: number;
        mana_spent?: number[] & number[] & { [K_10 in Exclude<keyof I_1["mana_spent"], keyof number[]>]: never; };
        damage_absorbed?: number[] & number[] & { [K_11 in Exclude<keyof I_1["damage_absorbed"], keyof number[]>]: never; };
        damage_done?: number[] & number[] & { [K_12 in Exclude<keyof I_1["damage_done"], keyof number[]>]: never; };
    } & { [K_13 in Exclude<keyof I_1, keyof CDOTAUserMsg_StatsHeroMinuteDetails>]: never; }>(object: I_1): CDOTAUserMsg_StatsHeroMinuteDetails;
};
export declare const CDOTAUserMsg_StatsTeamMinuteDetails: {
    fromJSON(object: any): CDOTAUserMsg_StatsTeamMinuteDetails;
    toJSON(message: CDOTAUserMsg_StatsTeamMinuteDetails): unknown;
    create<I extends {
        player_stats?: {
            last_hits?: number;
            hero_kills?: number;
            hero_damage?: number;
            tower_damage?: number;
            position_info?: {
                average_position?: number;
                position_details?: {
                    position_category?: DOTA_POSITION_CATEGORY;
                    position_count?: number;
                }[];
            };
            total_xp?: number;
            net_worth?: number;
            harvested_creep_gold?: number;
            claimed_farm?: number;
            wards_placed?: number;
            runes_collected?: number;
            tps_used?: number;
            mana_spent?: number[];
            damage_absorbed?: number[];
            damage_done?: number[];
        }[];
        tower_kills?: number;
        barrack_kills?: number;
        available_lane_creep_gold?: number;
        balance_kill_value?: number;
        balance_tower_value?: number;
        balance_barracks_value?: number;
        balance_gold_value?: number;
        balance_xp_value?: number;
        lane_performance?: {
            location_category?: number;
            stat_type?: number;
            value?: number;
        }[];
    } & {
        player_stats?: {
            last_hits?: number;
            hero_kills?: number;
            hero_damage?: number;
            tower_damage?: number;
            position_info?: {
                average_position?: number;
                position_details?: {
                    position_category?: DOTA_POSITION_CATEGORY;
                    position_count?: number;
                }[];
            };
            total_xp?: number;
            net_worth?: number;
            harvested_creep_gold?: number;
            claimed_farm?: number;
            wards_placed?: number;
            runes_collected?: number;
            tps_used?: number;
            mana_spent?: number[];
            damage_absorbed?: number[];
            damage_done?: number[];
        }[] & ({
            last_hits?: number;
            hero_kills?: number;
            hero_damage?: number;
            tower_damage?: number;
            position_info?: {
                average_position?: number;
                position_details?: {
                    position_category?: DOTA_POSITION_CATEGORY;
                    position_count?: number;
                }[];
            };
            total_xp?: number;
            net_worth?: number;
            harvested_creep_gold?: number;
            claimed_farm?: number;
            wards_placed?: number;
            runes_collected?: number;
            tps_used?: number;
            mana_spent?: number[];
            damage_absorbed?: number[];
            damage_done?: number[];
        } & {
            last_hits?: number;
            hero_kills?: number;
            hero_damage?: number;
            tower_damage?: number;
            position_info?: {
                average_position?: number;
                position_details?: {
                    position_category?: DOTA_POSITION_CATEGORY;
                    position_count?: number;
                }[];
            } & {
                average_position?: number;
                position_details?: {
                    position_category?: DOTA_POSITION_CATEGORY;
                    position_count?: number;
                }[] & ({
                    position_category?: DOTA_POSITION_CATEGORY;
                    position_count?: number;
                } & {
                    position_category?: DOTA_POSITION_CATEGORY;
                    position_count?: number;
                } & { [K in Exclude<keyof I["player_stats"][number]["position_info"]["position_details"][number], keyof CDOTAUserMsg_StatsHeroPositionInfo_PositionPair>]: never; })[] & { [K_1 in Exclude<keyof I["player_stats"][number]["position_info"]["position_details"], keyof {
                    position_category?: DOTA_POSITION_CATEGORY;
                    position_count?: number;
                }[]>]: never; };
            } & { [K_2 in Exclude<keyof I["player_stats"][number]["position_info"], keyof CDOTAUserMsg_StatsHeroPositionInfo>]: never; };
            total_xp?: number;
            net_worth?: number;
            harvested_creep_gold?: number;
            claimed_farm?: number;
            wards_placed?: number;
            runes_collected?: number;
            tps_used?: number;
            mana_spent?: number[] & number[] & { [K_3 in Exclude<keyof I["player_stats"][number]["mana_spent"], keyof number[]>]: never; };
            damage_absorbed?: number[] & number[] & { [K_4 in Exclude<keyof I["player_stats"][number]["damage_absorbed"], keyof number[]>]: never; };
            damage_done?: number[] & number[] & { [K_5 in Exclude<keyof I["player_stats"][number]["damage_done"], keyof number[]>]: never; };
        } & { [K_6 in Exclude<keyof I["player_stats"][number], keyof CDOTAUserMsg_StatsHeroMinuteDetails>]: never; })[] & { [K_7 in Exclude<keyof I["player_stats"], keyof {
            last_hits?: number;
            hero_kills?: number;
            hero_damage?: number;
            tower_damage?: number;
            position_info?: {
                average_position?: number;
                position_details?: {
                    position_category?: DOTA_POSITION_CATEGORY;
                    position_count?: number;
                }[];
            };
            total_xp?: number;
            net_worth?: number;
            harvested_creep_gold?: number;
            claimed_farm?: number;
            wards_placed?: number;
            runes_collected?: number;
            tps_used?: number;
            mana_spent?: number[];
            damage_absorbed?: number[];
            damage_done?: number[];
        }[]>]: never; };
        tower_kills?: number;
        barrack_kills?: number;
        available_lane_creep_gold?: number;
        balance_kill_value?: number;
        balance_tower_value?: number;
        balance_barracks_value?: number;
        balance_gold_value?: number;
        balance_xp_value?: number;
        lane_performance?: {
            location_category?: number;
            stat_type?: number;
            value?: number;
        }[] & ({
            location_category?: number;
            stat_type?: number;
            value?: number;
        } & {
            location_category?: number;
            stat_type?: number;
            value?: number;
        } & { [K_8 in Exclude<keyof I["lane_performance"][number], keyof CDOTAUserMsg_StatsTeamMinuteDetails_LocationPerformance>]: never; })[] & { [K_9 in Exclude<keyof I["lane_performance"], keyof {
            location_category?: number;
            stat_type?: number;
            value?: number;
        }[]>]: never; };
    } & { [K_10 in Exclude<keyof I, keyof CDOTAUserMsg_StatsTeamMinuteDetails>]: never; }>(base?: I): CDOTAUserMsg_StatsTeamMinuteDetails;
    fromPartial<I_1 extends {
        player_stats?: {
            last_hits?: number;
            hero_kills?: number;
            hero_damage?: number;
            tower_damage?: number;
            position_info?: {
                average_position?: number;
                position_details?: {
                    position_category?: DOTA_POSITION_CATEGORY;
                    position_count?: number;
                }[];
            };
            total_xp?: number;
            net_worth?: number;
            harvested_creep_gold?: number;
            claimed_farm?: number;
            wards_placed?: number;
            runes_collected?: number;
            tps_used?: number;
            mana_spent?: number[];
            damage_absorbed?: number[];
            damage_done?: number[];
        }[];
        tower_kills?: number;
        barrack_kills?: number;
        available_lane_creep_gold?: number;
        balance_kill_value?: number;
        balance_tower_value?: number;
        balance_barracks_value?: number;
        balance_gold_value?: number;
        balance_xp_value?: number;
        lane_performance?: {
            location_category?: number;
            stat_type?: number;
            value?: number;
        }[];
    } & {
        player_stats?: {
            last_hits?: number;
            hero_kills?: number;
            hero_damage?: number;
            tower_damage?: number;
            position_info?: {
                average_position?: number;
                position_details?: {
                    position_category?: DOTA_POSITION_CATEGORY;
                    position_count?: number;
                }[];
            };
            total_xp?: number;
            net_worth?: number;
            harvested_creep_gold?: number;
            claimed_farm?: number;
            wards_placed?: number;
            runes_collected?: number;
            tps_used?: number;
            mana_spent?: number[];
            damage_absorbed?: number[];
            damage_done?: number[];
        }[] & ({
            last_hits?: number;
            hero_kills?: number;
            hero_damage?: number;
            tower_damage?: number;
            position_info?: {
                average_position?: number;
                position_details?: {
                    position_category?: DOTA_POSITION_CATEGORY;
                    position_count?: number;
                }[];
            };
            total_xp?: number;
            net_worth?: number;
            harvested_creep_gold?: number;
            claimed_farm?: number;
            wards_placed?: number;
            runes_collected?: number;
            tps_used?: number;
            mana_spent?: number[];
            damage_absorbed?: number[];
            damage_done?: number[];
        } & {
            last_hits?: number;
            hero_kills?: number;
            hero_damage?: number;
            tower_damage?: number;
            position_info?: {
                average_position?: number;
                position_details?: {
                    position_category?: DOTA_POSITION_CATEGORY;
                    position_count?: number;
                }[];
            } & {
                average_position?: number;
                position_details?: {
                    position_category?: DOTA_POSITION_CATEGORY;
                    position_count?: number;
                }[] & ({
                    position_category?: DOTA_POSITION_CATEGORY;
                    position_count?: number;
                } & {
                    position_category?: DOTA_POSITION_CATEGORY;
                    position_count?: number;
                } & { [K_11 in Exclude<keyof I_1["player_stats"][number]["position_info"]["position_details"][number], keyof CDOTAUserMsg_StatsHeroPositionInfo_PositionPair>]: never; })[] & { [K_12 in Exclude<keyof I_1["player_stats"][number]["position_info"]["position_details"], keyof {
                    position_category?: DOTA_POSITION_CATEGORY;
                    position_count?: number;
                }[]>]: never; };
            } & { [K_13 in Exclude<keyof I_1["player_stats"][number]["position_info"], keyof CDOTAUserMsg_StatsHeroPositionInfo>]: never; };
            total_xp?: number;
            net_worth?: number;
            harvested_creep_gold?: number;
            claimed_farm?: number;
            wards_placed?: number;
            runes_collected?: number;
            tps_used?: number;
            mana_spent?: number[] & number[] & { [K_14 in Exclude<keyof I_1["player_stats"][number]["mana_spent"], keyof number[]>]: never; };
            damage_absorbed?: number[] & number[] & { [K_15 in Exclude<keyof I_1["player_stats"][number]["damage_absorbed"], keyof number[]>]: never; };
            damage_done?: number[] & number[] & { [K_16 in Exclude<keyof I_1["player_stats"][number]["damage_done"], keyof number[]>]: never; };
        } & { [K_17 in Exclude<keyof I_1["player_stats"][number], keyof CDOTAUserMsg_StatsHeroMinuteDetails>]: never; })[] & { [K_18 in Exclude<keyof I_1["player_stats"], keyof {
            last_hits?: number;
            hero_kills?: number;
            hero_damage?: number;
            tower_damage?: number;
            position_info?: {
                average_position?: number;
                position_details?: {
                    position_category?: DOTA_POSITION_CATEGORY;
                    position_count?: number;
                }[];
            };
            total_xp?: number;
            net_worth?: number;
            harvested_creep_gold?: number;
            claimed_farm?: number;
            wards_placed?: number;
            runes_collected?: number;
            tps_used?: number;
            mana_spent?: number[];
            damage_absorbed?: number[];
            damage_done?: number[];
        }[]>]: never; };
        tower_kills?: number;
        barrack_kills?: number;
        available_lane_creep_gold?: number;
        balance_kill_value?: number;
        balance_tower_value?: number;
        balance_barracks_value?: number;
        balance_gold_value?: number;
        balance_xp_value?: number;
        lane_performance?: {
            location_category?: number;
            stat_type?: number;
            value?: number;
        }[] & ({
            location_category?: number;
            stat_type?: number;
            value?: number;
        } & {
            location_category?: number;
            stat_type?: number;
            value?: number;
        } & { [K_19 in Exclude<keyof I_1["lane_performance"][number], keyof CDOTAUserMsg_StatsTeamMinuteDetails_LocationPerformance>]: never; })[] & { [K_20 in Exclude<keyof I_1["lane_performance"], keyof {
            location_category?: number;
            stat_type?: number;
            value?: number;
        }[]>]: never; };
    } & { [K_21 in Exclude<keyof I_1, keyof CDOTAUserMsg_StatsTeamMinuteDetails>]: never; }>(object: I_1): CDOTAUserMsg_StatsTeamMinuteDetails;
};
export declare const CDOTAUserMsg_StatsTeamMinuteDetails_LocationPerformance: {
    fromJSON(object: any): CDOTAUserMsg_StatsTeamMinuteDetails_LocationPerformance;
    toJSON(message: CDOTAUserMsg_StatsTeamMinuteDetails_LocationPerformance): unknown;
    create<I extends {
        location_category?: number;
        stat_type?: number;
        value?: number;
    } & {
        location_category?: number;
        stat_type?: number;
        value?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_StatsTeamMinuteDetails_LocationPerformance>]: never; }>(base?: I): CDOTAUserMsg_StatsTeamMinuteDetails_LocationPerformance;
    fromPartial<I_1 extends {
        location_category?: number;
        stat_type?: number;
        value?: number;
    } & {
        location_category?: number;
        stat_type?: number;
        value?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_StatsTeamMinuteDetails_LocationPerformance>]: never; }>(object: I_1): CDOTAUserMsg_StatsTeamMinuteDetails_LocationPerformance;
};
export declare const CDOTAUserMsg_StatsPlayerKillShare: {
    fromJSON(object: any): CDOTAUserMsg_StatsPlayerKillShare;
    toJSON(message: CDOTAUserMsg_StatsPlayerKillShare): unknown;
    create<I extends {
        player_id?: number;
        kill_share_percent?: number;
        player_loc_x?: number;
        player_loc_y?: number;
        health_percent?: number;
        mana_percent?: number;
    } & {
        player_id?: number;
        kill_share_percent?: number;
        player_loc_x?: number;
        player_loc_y?: number;
        health_percent?: number;
        mana_percent?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_StatsPlayerKillShare>]: never; }>(base?: I): CDOTAUserMsg_StatsPlayerKillShare;
    fromPartial<I_1 extends {
        player_id?: number;
        kill_share_percent?: number;
        player_loc_x?: number;
        player_loc_y?: number;
        health_percent?: number;
        mana_percent?: number;
    } & {
        player_id?: number;
        kill_share_percent?: number;
        player_loc_x?: number;
        player_loc_y?: number;
        health_percent?: number;
        mana_percent?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_StatsPlayerKillShare>]: never; }>(object: I_1): CDOTAUserMsg_StatsPlayerKillShare;
};
export declare const CDOTAUserMsg_StatsKillDetails: {
    fromJSON(object: any): CDOTAUserMsg_StatsKillDetails;
    toJSON(message: CDOTAUserMsg_StatsKillDetails): unknown;
    create<I extends {
        victim_id?: number;
        kill_shares?: {
            player_id?: number;
            kill_share_percent?: number;
            player_loc_x?: number;
            player_loc_y?: number;
            health_percent?: number;
            mana_percent?: number;
        }[];
        damage_to_kill?: number;
        effective_health?: number;
        death_time?: number;
        killer_id?: number;
    } & {
        victim_id?: number;
        kill_shares?: {
            player_id?: number;
            kill_share_percent?: number;
            player_loc_x?: number;
            player_loc_y?: number;
            health_percent?: number;
            mana_percent?: number;
        }[] & ({
            player_id?: number;
            kill_share_percent?: number;
            player_loc_x?: number;
            player_loc_y?: number;
            health_percent?: number;
            mana_percent?: number;
        } & {
            player_id?: number;
            kill_share_percent?: number;
            player_loc_x?: number;
            player_loc_y?: number;
            health_percent?: number;
            mana_percent?: number;
        } & { [K in Exclude<keyof I["kill_shares"][number], keyof CDOTAUserMsg_StatsPlayerKillShare>]: never; })[] & { [K_1 in Exclude<keyof I["kill_shares"], keyof {
            player_id?: number;
            kill_share_percent?: number;
            player_loc_x?: number;
            player_loc_y?: number;
            health_percent?: number;
            mana_percent?: number;
        }[]>]: never; };
        damage_to_kill?: number;
        effective_health?: number;
        death_time?: number;
        killer_id?: number;
    } & { [K_2 in Exclude<keyof I, keyof CDOTAUserMsg_StatsKillDetails>]: never; }>(base?: I): CDOTAUserMsg_StatsKillDetails;
    fromPartial<I_1 extends {
        victim_id?: number;
        kill_shares?: {
            player_id?: number;
            kill_share_percent?: number;
            player_loc_x?: number;
            player_loc_y?: number;
            health_percent?: number;
            mana_percent?: number;
        }[];
        damage_to_kill?: number;
        effective_health?: number;
        death_time?: number;
        killer_id?: number;
    } & {
        victim_id?: number;
        kill_shares?: {
            player_id?: number;
            kill_share_percent?: number;
            player_loc_x?: number;
            player_loc_y?: number;
            health_percent?: number;
            mana_percent?: number;
        }[] & ({
            player_id?: number;
            kill_share_percent?: number;
            player_loc_x?: number;
            player_loc_y?: number;
            health_percent?: number;
            mana_percent?: number;
        } & {
            player_id?: number;
            kill_share_percent?: number;
            player_loc_x?: number;
            player_loc_y?: number;
            health_percent?: number;
            mana_percent?: number;
        } & { [K_3 in Exclude<keyof I_1["kill_shares"][number], keyof CDOTAUserMsg_StatsPlayerKillShare>]: never; })[] & { [K_4 in Exclude<keyof I_1["kill_shares"], keyof {
            player_id?: number;
            kill_share_percent?: number;
            player_loc_x?: number;
            player_loc_y?: number;
            health_percent?: number;
            mana_percent?: number;
        }[]>]: never; };
        damage_to_kill?: number;
        effective_health?: number;
        death_time?: number;
        killer_id?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CDOTAUserMsg_StatsKillDetails>]: never; }>(object: I_1): CDOTAUserMsg_StatsKillDetails;
};
export declare const CDOTAUserMsg_StatsMatchDetails: {
    fromJSON(object: any): CDOTAUserMsg_StatsMatchDetails;
    toJSON(message: CDOTAUserMsg_StatsMatchDetails): unknown;
    create<I extends {
        hero_lookup?: {
            player_id?: number;
            hero_id?: number;
            hero_name?: string;
            persona?: string;
        }[];
        radiant_stats?: {
            player_stats?: {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[];
            tower_kills?: number;
            barrack_kills?: number;
            available_lane_creep_gold?: number;
            balance_kill_value?: number;
            balance_tower_value?: number;
            balance_barracks_value?: number;
            balance_gold_value?: number;
            balance_xp_value?: number;
            lane_performance?: {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[];
        }[];
        dire_stats?: {
            player_stats?: {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[];
            tower_kills?: number;
            barrack_kills?: number;
            available_lane_creep_gold?: number;
            balance_kill_value?: number;
            balance_tower_value?: number;
            balance_barracks_value?: number;
            balance_gold_value?: number;
            balance_xp_value?: number;
            lane_performance?: {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[];
        }[];
        radiant_kills?: {
            victim_id?: number;
            kill_shares?: {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[];
            damage_to_kill?: number;
            effective_health?: number;
            death_time?: number;
            killer_id?: number;
        }[];
        dire_kills?: {
            victim_id?: number;
            kill_shares?: {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[];
            damage_to_kill?: number;
            effective_health?: number;
            death_time?: number;
            killer_id?: number;
        }[];
        fight_details?: {
            start_time?: number;
            end_time?: number;
            radiant_fight_details?: {
                participants?: number[];
                deaths?: number[];
                gold_delta?: number;
                xp_delta?: number;
            };
            dire_fight_details?: {
                participants?: number[];
                deaths?: number[];
                gold_delta?: number;
                xp_delta?: number;
            };
        }[];
    } & {
        hero_lookup?: {
            player_id?: number;
            hero_id?: number;
            hero_name?: string;
            persona?: string;
        }[] & ({
            player_id?: number;
            hero_id?: number;
            hero_name?: string;
            persona?: string;
        } & {
            player_id?: number;
            hero_id?: number;
            hero_name?: string;
            persona?: string;
        } & { [K in Exclude<keyof I["hero_lookup"][number], keyof CDOTAUserMsg_StatsHeroLookup>]: never; })[] & { [K_1 in Exclude<keyof I["hero_lookup"], keyof {
            player_id?: number;
            hero_id?: number;
            hero_name?: string;
            persona?: string;
        }[]>]: never; };
        radiant_stats?: {
            player_stats?: {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[];
            tower_kills?: number;
            barrack_kills?: number;
            available_lane_creep_gold?: number;
            balance_kill_value?: number;
            balance_tower_value?: number;
            balance_barracks_value?: number;
            balance_gold_value?: number;
            balance_xp_value?: number;
            lane_performance?: {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[];
        }[] & ({
            player_stats?: {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[];
            tower_kills?: number;
            barrack_kills?: number;
            available_lane_creep_gold?: number;
            balance_kill_value?: number;
            balance_tower_value?: number;
            balance_barracks_value?: number;
            balance_gold_value?: number;
            balance_xp_value?: number;
            lane_performance?: {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[];
        } & {
            player_stats?: {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[] & ({
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            } & {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                } & {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[] & ({
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    } & {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    } & { [K_2 in Exclude<keyof I["radiant_stats"][number]["player_stats"][number]["position_info"]["position_details"][number], keyof CDOTAUserMsg_StatsHeroPositionInfo_PositionPair>]: never; })[] & { [K_3 in Exclude<keyof I["radiant_stats"][number]["player_stats"][number]["position_info"]["position_details"], keyof {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[]>]: never; };
                } & { [K_4 in Exclude<keyof I["radiant_stats"][number]["player_stats"][number]["position_info"], keyof CDOTAUserMsg_StatsHeroPositionInfo>]: never; };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[] & number[] & { [K_5 in Exclude<keyof I["radiant_stats"][number]["player_stats"][number]["mana_spent"], keyof number[]>]: never; };
                damage_absorbed?: number[] & number[] & { [K_6 in Exclude<keyof I["radiant_stats"][number]["player_stats"][number]["damage_absorbed"], keyof number[]>]: never; };
                damage_done?: number[] & number[] & { [K_7 in Exclude<keyof I["radiant_stats"][number]["player_stats"][number]["damage_done"], keyof number[]>]: never; };
            } & { [K_8 in Exclude<keyof I["radiant_stats"][number]["player_stats"][number], keyof CDOTAUserMsg_StatsHeroMinuteDetails>]: never; })[] & { [K_9 in Exclude<keyof I["radiant_stats"][number]["player_stats"], keyof {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[]>]: never; };
            tower_kills?: number;
            barrack_kills?: number;
            available_lane_creep_gold?: number;
            balance_kill_value?: number;
            balance_tower_value?: number;
            balance_barracks_value?: number;
            balance_gold_value?: number;
            balance_xp_value?: number;
            lane_performance?: {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[] & ({
                location_category?: number;
                stat_type?: number;
                value?: number;
            } & {
                location_category?: number;
                stat_type?: number;
                value?: number;
            } & { [K_10 in Exclude<keyof I["radiant_stats"][number]["lane_performance"][number], keyof CDOTAUserMsg_StatsTeamMinuteDetails_LocationPerformance>]: never; })[] & { [K_11 in Exclude<keyof I["radiant_stats"][number]["lane_performance"], keyof {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[]>]: never; };
        } & { [K_12 in Exclude<keyof I["radiant_stats"][number], keyof CDOTAUserMsg_StatsTeamMinuteDetails>]: never; })[] & { [K_13 in Exclude<keyof I["radiant_stats"], keyof {
            player_stats?: {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[];
            tower_kills?: number;
            barrack_kills?: number;
            available_lane_creep_gold?: number;
            balance_kill_value?: number;
            balance_tower_value?: number;
            balance_barracks_value?: number;
            balance_gold_value?: number;
            balance_xp_value?: number;
            lane_performance?: {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[];
        }[]>]: never; };
        dire_stats?: {
            player_stats?: {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[];
            tower_kills?: number;
            barrack_kills?: number;
            available_lane_creep_gold?: number;
            balance_kill_value?: number;
            balance_tower_value?: number;
            balance_barracks_value?: number;
            balance_gold_value?: number;
            balance_xp_value?: number;
            lane_performance?: {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[];
        }[] & ({
            player_stats?: {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[];
            tower_kills?: number;
            barrack_kills?: number;
            available_lane_creep_gold?: number;
            balance_kill_value?: number;
            balance_tower_value?: number;
            balance_barracks_value?: number;
            balance_gold_value?: number;
            balance_xp_value?: number;
            lane_performance?: {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[];
        } & {
            player_stats?: {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[] & ({
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            } & {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                } & {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[] & ({
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    } & {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    } & { [K_14 in Exclude<keyof I["dire_stats"][number]["player_stats"][number]["position_info"]["position_details"][number], keyof CDOTAUserMsg_StatsHeroPositionInfo_PositionPair>]: never; })[] & { [K_15 in Exclude<keyof I["dire_stats"][number]["player_stats"][number]["position_info"]["position_details"], keyof {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[]>]: never; };
                } & { [K_16 in Exclude<keyof I["dire_stats"][number]["player_stats"][number]["position_info"], keyof CDOTAUserMsg_StatsHeroPositionInfo>]: never; };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[] & number[] & { [K_17 in Exclude<keyof I["dire_stats"][number]["player_stats"][number]["mana_spent"], keyof number[]>]: never; };
                damage_absorbed?: number[] & number[] & { [K_18 in Exclude<keyof I["dire_stats"][number]["player_stats"][number]["damage_absorbed"], keyof number[]>]: never; };
                damage_done?: number[] & number[] & { [K_19 in Exclude<keyof I["dire_stats"][number]["player_stats"][number]["damage_done"], keyof number[]>]: never; };
            } & { [K_20 in Exclude<keyof I["dire_stats"][number]["player_stats"][number], keyof CDOTAUserMsg_StatsHeroMinuteDetails>]: never; })[] & { [K_21 in Exclude<keyof I["dire_stats"][number]["player_stats"], keyof {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[]>]: never; };
            tower_kills?: number;
            barrack_kills?: number;
            available_lane_creep_gold?: number;
            balance_kill_value?: number;
            balance_tower_value?: number;
            balance_barracks_value?: number;
            balance_gold_value?: number;
            balance_xp_value?: number;
            lane_performance?: {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[] & ({
                location_category?: number;
                stat_type?: number;
                value?: number;
            } & {
                location_category?: number;
                stat_type?: number;
                value?: number;
            } & { [K_22 in Exclude<keyof I["dire_stats"][number]["lane_performance"][number], keyof CDOTAUserMsg_StatsTeamMinuteDetails_LocationPerformance>]: never; })[] & { [K_23 in Exclude<keyof I["dire_stats"][number]["lane_performance"], keyof {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[]>]: never; };
        } & { [K_24 in Exclude<keyof I["dire_stats"][number], keyof CDOTAUserMsg_StatsTeamMinuteDetails>]: never; })[] & { [K_25 in Exclude<keyof I["dire_stats"], keyof {
            player_stats?: {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[];
            tower_kills?: number;
            barrack_kills?: number;
            available_lane_creep_gold?: number;
            balance_kill_value?: number;
            balance_tower_value?: number;
            balance_barracks_value?: number;
            balance_gold_value?: number;
            balance_xp_value?: number;
            lane_performance?: {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[];
        }[]>]: never; };
        radiant_kills?: {
            victim_id?: number;
            kill_shares?: {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[];
            damage_to_kill?: number;
            effective_health?: number;
            death_time?: number;
            killer_id?: number;
        }[] & ({
            victim_id?: number;
            kill_shares?: {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[];
            damage_to_kill?: number;
            effective_health?: number;
            death_time?: number;
            killer_id?: number;
        } & {
            victim_id?: number;
            kill_shares?: {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[] & ({
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            } & {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            } & { [K_26 in Exclude<keyof I["radiant_kills"][number]["kill_shares"][number], keyof CDOTAUserMsg_StatsPlayerKillShare>]: never; })[] & { [K_27 in Exclude<keyof I["radiant_kills"][number]["kill_shares"], keyof {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[]>]: never; };
            damage_to_kill?: number;
            effective_health?: number;
            death_time?: number;
            killer_id?: number;
        } & { [K_28 in Exclude<keyof I["radiant_kills"][number], keyof CDOTAUserMsg_StatsKillDetails>]: never; })[] & { [K_29 in Exclude<keyof I["radiant_kills"], keyof {
            victim_id?: number;
            kill_shares?: {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[];
            damage_to_kill?: number;
            effective_health?: number;
            death_time?: number;
            killer_id?: number;
        }[]>]: never; };
        dire_kills?: {
            victim_id?: number;
            kill_shares?: {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[];
            damage_to_kill?: number;
            effective_health?: number;
            death_time?: number;
            killer_id?: number;
        }[] & ({
            victim_id?: number;
            kill_shares?: {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[];
            damage_to_kill?: number;
            effective_health?: number;
            death_time?: number;
            killer_id?: number;
        } & {
            victim_id?: number;
            kill_shares?: {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[] & ({
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            } & {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            } & { [K_30 in Exclude<keyof I["dire_kills"][number]["kill_shares"][number], keyof CDOTAUserMsg_StatsPlayerKillShare>]: never; })[] & { [K_31 in Exclude<keyof I["dire_kills"][number]["kill_shares"], keyof {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[]>]: never; };
            damage_to_kill?: number;
            effective_health?: number;
            death_time?: number;
            killer_id?: number;
        } & { [K_32 in Exclude<keyof I["dire_kills"][number], keyof CDOTAUserMsg_StatsKillDetails>]: never; })[] & { [K_33 in Exclude<keyof I["dire_kills"], keyof {
            victim_id?: number;
            kill_shares?: {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[];
            damage_to_kill?: number;
            effective_health?: number;
            death_time?: number;
            killer_id?: number;
        }[]>]: never; };
        fight_details?: {
            start_time?: number;
            end_time?: number;
            radiant_fight_details?: {
                participants?: number[];
                deaths?: number[];
                gold_delta?: number;
                xp_delta?: number;
            };
            dire_fight_details?: {
                participants?: number[];
                deaths?: number[];
                gold_delta?: number;
                xp_delta?: number;
            };
        }[] & ({
            start_time?: number;
            end_time?: number;
            radiant_fight_details?: {
                participants?: number[];
                deaths?: number[];
                gold_delta?: number;
                xp_delta?: number;
            };
            dire_fight_details?: {
                participants?: number[];
                deaths?: number[];
                gold_delta?: number;
                xp_delta?: number;
            };
        } & {
            start_time?: number;
            end_time?: number;
            radiant_fight_details?: {
                participants?: number[];
                deaths?: number[];
                gold_delta?: number;
                xp_delta?: number;
            } & {
                participants?: number[] & number[] & { [K_34 in Exclude<keyof I["fight_details"][number]["radiant_fight_details"]["participants"], keyof number[]>]: never; };
                deaths?: number[] & number[] & { [K_35 in Exclude<keyof I["fight_details"][number]["radiant_fight_details"]["deaths"], keyof number[]>]: never; };
                gold_delta?: number;
                xp_delta?: number;
            } & { [K_36 in Exclude<keyof I["fight_details"][number]["radiant_fight_details"], keyof CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightTeamDetails>]: never; };
            dire_fight_details?: {
                participants?: number[];
                deaths?: number[];
                gold_delta?: number;
                xp_delta?: number;
            } & {
                participants?: number[] & number[] & { [K_37 in Exclude<keyof I["fight_details"][number]["dire_fight_details"]["participants"], keyof number[]>]: never; };
                deaths?: number[] & number[] & { [K_38 in Exclude<keyof I["fight_details"][number]["dire_fight_details"]["deaths"], keyof number[]>]: never; };
                gold_delta?: number;
                xp_delta?: number;
            } & { [K_39 in Exclude<keyof I["fight_details"][number]["dire_fight_details"], keyof CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightTeamDetails>]: never; };
        } & { [K_40 in Exclude<keyof I["fight_details"][number], keyof CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightDetails>]: never; })[] & { [K_41 in Exclude<keyof I["fight_details"], keyof {
            start_time?: number;
            end_time?: number;
            radiant_fight_details?: {
                participants?: number[];
                deaths?: number[];
                gold_delta?: number;
                xp_delta?: number;
            };
            dire_fight_details?: {
                participants?: number[];
                deaths?: number[];
                gold_delta?: number;
                xp_delta?: number;
            };
        }[]>]: never; };
    } & { [K_42 in Exclude<keyof I, keyof CDOTAUserMsg_StatsMatchDetails>]: never; }>(base?: I): CDOTAUserMsg_StatsMatchDetails;
    fromPartial<I_1 extends {
        hero_lookup?: {
            player_id?: number;
            hero_id?: number;
            hero_name?: string;
            persona?: string;
        }[];
        radiant_stats?: {
            player_stats?: {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[];
            tower_kills?: number;
            barrack_kills?: number;
            available_lane_creep_gold?: number;
            balance_kill_value?: number;
            balance_tower_value?: number;
            balance_barracks_value?: number;
            balance_gold_value?: number;
            balance_xp_value?: number;
            lane_performance?: {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[];
        }[];
        dire_stats?: {
            player_stats?: {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[];
            tower_kills?: number;
            barrack_kills?: number;
            available_lane_creep_gold?: number;
            balance_kill_value?: number;
            balance_tower_value?: number;
            balance_barracks_value?: number;
            balance_gold_value?: number;
            balance_xp_value?: number;
            lane_performance?: {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[];
        }[];
        radiant_kills?: {
            victim_id?: number;
            kill_shares?: {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[];
            damage_to_kill?: number;
            effective_health?: number;
            death_time?: number;
            killer_id?: number;
        }[];
        dire_kills?: {
            victim_id?: number;
            kill_shares?: {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[];
            damage_to_kill?: number;
            effective_health?: number;
            death_time?: number;
            killer_id?: number;
        }[];
        fight_details?: {
            start_time?: number;
            end_time?: number;
            radiant_fight_details?: {
                participants?: number[];
                deaths?: number[];
                gold_delta?: number;
                xp_delta?: number;
            };
            dire_fight_details?: {
                participants?: number[];
                deaths?: number[];
                gold_delta?: number;
                xp_delta?: number;
            };
        }[];
    } & {
        hero_lookup?: {
            player_id?: number;
            hero_id?: number;
            hero_name?: string;
            persona?: string;
        }[] & ({
            player_id?: number;
            hero_id?: number;
            hero_name?: string;
            persona?: string;
        } & {
            player_id?: number;
            hero_id?: number;
            hero_name?: string;
            persona?: string;
        } & { [K_43 in Exclude<keyof I_1["hero_lookup"][number], keyof CDOTAUserMsg_StatsHeroLookup>]: never; })[] & { [K_44 in Exclude<keyof I_1["hero_lookup"], keyof {
            player_id?: number;
            hero_id?: number;
            hero_name?: string;
            persona?: string;
        }[]>]: never; };
        radiant_stats?: {
            player_stats?: {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[];
            tower_kills?: number;
            barrack_kills?: number;
            available_lane_creep_gold?: number;
            balance_kill_value?: number;
            balance_tower_value?: number;
            balance_barracks_value?: number;
            balance_gold_value?: number;
            balance_xp_value?: number;
            lane_performance?: {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[];
        }[] & ({
            player_stats?: {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[];
            tower_kills?: number;
            barrack_kills?: number;
            available_lane_creep_gold?: number;
            balance_kill_value?: number;
            balance_tower_value?: number;
            balance_barracks_value?: number;
            balance_gold_value?: number;
            balance_xp_value?: number;
            lane_performance?: {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[];
        } & {
            player_stats?: {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[] & ({
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            } & {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                } & {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[] & ({
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    } & {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    } & { [K_45 in Exclude<keyof I_1["radiant_stats"][number]["player_stats"][number]["position_info"]["position_details"][number], keyof CDOTAUserMsg_StatsHeroPositionInfo_PositionPair>]: never; })[] & { [K_46 in Exclude<keyof I_1["radiant_stats"][number]["player_stats"][number]["position_info"]["position_details"], keyof {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[]>]: never; };
                } & { [K_47 in Exclude<keyof I_1["radiant_stats"][number]["player_stats"][number]["position_info"], keyof CDOTAUserMsg_StatsHeroPositionInfo>]: never; };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[] & number[] & { [K_48 in Exclude<keyof I_1["radiant_stats"][number]["player_stats"][number]["mana_spent"], keyof number[]>]: never; };
                damage_absorbed?: number[] & number[] & { [K_49 in Exclude<keyof I_1["radiant_stats"][number]["player_stats"][number]["damage_absorbed"], keyof number[]>]: never; };
                damage_done?: number[] & number[] & { [K_50 in Exclude<keyof I_1["radiant_stats"][number]["player_stats"][number]["damage_done"], keyof number[]>]: never; };
            } & { [K_51 in Exclude<keyof I_1["radiant_stats"][number]["player_stats"][number], keyof CDOTAUserMsg_StatsHeroMinuteDetails>]: never; })[] & { [K_52 in Exclude<keyof I_1["radiant_stats"][number]["player_stats"], keyof {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[]>]: never; };
            tower_kills?: number;
            barrack_kills?: number;
            available_lane_creep_gold?: number;
            balance_kill_value?: number;
            balance_tower_value?: number;
            balance_barracks_value?: number;
            balance_gold_value?: number;
            balance_xp_value?: number;
            lane_performance?: {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[] & ({
                location_category?: number;
                stat_type?: number;
                value?: number;
            } & {
                location_category?: number;
                stat_type?: number;
                value?: number;
            } & { [K_53 in Exclude<keyof I_1["radiant_stats"][number]["lane_performance"][number], keyof CDOTAUserMsg_StatsTeamMinuteDetails_LocationPerformance>]: never; })[] & { [K_54 in Exclude<keyof I_1["radiant_stats"][number]["lane_performance"], keyof {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[]>]: never; };
        } & { [K_55 in Exclude<keyof I_1["radiant_stats"][number], keyof CDOTAUserMsg_StatsTeamMinuteDetails>]: never; })[] & { [K_56 in Exclude<keyof I_1["radiant_stats"], keyof {
            player_stats?: {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[];
            tower_kills?: number;
            barrack_kills?: number;
            available_lane_creep_gold?: number;
            balance_kill_value?: number;
            balance_tower_value?: number;
            balance_barracks_value?: number;
            balance_gold_value?: number;
            balance_xp_value?: number;
            lane_performance?: {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[];
        }[]>]: never; };
        dire_stats?: {
            player_stats?: {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[];
            tower_kills?: number;
            barrack_kills?: number;
            available_lane_creep_gold?: number;
            balance_kill_value?: number;
            balance_tower_value?: number;
            balance_barracks_value?: number;
            balance_gold_value?: number;
            balance_xp_value?: number;
            lane_performance?: {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[];
        }[] & ({
            player_stats?: {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[];
            tower_kills?: number;
            barrack_kills?: number;
            available_lane_creep_gold?: number;
            balance_kill_value?: number;
            balance_tower_value?: number;
            balance_barracks_value?: number;
            balance_gold_value?: number;
            balance_xp_value?: number;
            lane_performance?: {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[];
        } & {
            player_stats?: {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[] & ({
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            } & {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                } & {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[] & ({
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    } & {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    } & { [K_57 in Exclude<keyof I_1["dire_stats"][number]["player_stats"][number]["position_info"]["position_details"][number], keyof CDOTAUserMsg_StatsHeroPositionInfo_PositionPair>]: never; })[] & { [K_58 in Exclude<keyof I_1["dire_stats"][number]["player_stats"][number]["position_info"]["position_details"], keyof {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[]>]: never; };
                } & { [K_59 in Exclude<keyof I_1["dire_stats"][number]["player_stats"][number]["position_info"], keyof CDOTAUserMsg_StatsHeroPositionInfo>]: never; };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[] & number[] & { [K_60 in Exclude<keyof I_1["dire_stats"][number]["player_stats"][number]["mana_spent"], keyof number[]>]: never; };
                damage_absorbed?: number[] & number[] & { [K_61 in Exclude<keyof I_1["dire_stats"][number]["player_stats"][number]["damage_absorbed"], keyof number[]>]: never; };
                damage_done?: number[] & number[] & { [K_62 in Exclude<keyof I_1["dire_stats"][number]["player_stats"][number]["damage_done"], keyof number[]>]: never; };
            } & { [K_63 in Exclude<keyof I_1["dire_stats"][number]["player_stats"][number], keyof CDOTAUserMsg_StatsHeroMinuteDetails>]: never; })[] & { [K_64 in Exclude<keyof I_1["dire_stats"][number]["player_stats"], keyof {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[]>]: never; };
            tower_kills?: number;
            barrack_kills?: number;
            available_lane_creep_gold?: number;
            balance_kill_value?: number;
            balance_tower_value?: number;
            balance_barracks_value?: number;
            balance_gold_value?: number;
            balance_xp_value?: number;
            lane_performance?: {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[] & ({
                location_category?: number;
                stat_type?: number;
                value?: number;
            } & {
                location_category?: number;
                stat_type?: number;
                value?: number;
            } & { [K_65 in Exclude<keyof I_1["dire_stats"][number]["lane_performance"][number], keyof CDOTAUserMsg_StatsTeamMinuteDetails_LocationPerformance>]: never; })[] & { [K_66 in Exclude<keyof I_1["dire_stats"][number]["lane_performance"], keyof {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[]>]: never; };
        } & { [K_67 in Exclude<keyof I_1["dire_stats"][number], keyof CDOTAUserMsg_StatsTeamMinuteDetails>]: never; })[] & { [K_68 in Exclude<keyof I_1["dire_stats"], keyof {
            player_stats?: {
                last_hits?: number;
                hero_kills?: number;
                hero_damage?: number;
                tower_damage?: number;
                position_info?: {
                    average_position?: number;
                    position_details?: {
                        position_category?: DOTA_POSITION_CATEGORY;
                        position_count?: number;
                    }[];
                };
                total_xp?: number;
                net_worth?: number;
                harvested_creep_gold?: number;
                claimed_farm?: number;
                wards_placed?: number;
                runes_collected?: number;
                tps_used?: number;
                mana_spent?: number[];
                damage_absorbed?: number[];
                damage_done?: number[];
            }[];
            tower_kills?: number;
            barrack_kills?: number;
            available_lane_creep_gold?: number;
            balance_kill_value?: number;
            balance_tower_value?: number;
            balance_barracks_value?: number;
            balance_gold_value?: number;
            balance_xp_value?: number;
            lane_performance?: {
                location_category?: number;
                stat_type?: number;
                value?: number;
            }[];
        }[]>]: never; };
        radiant_kills?: {
            victim_id?: number;
            kill_shares?: {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[];
            damage_to_kill?: number;
            effective_health?: number;
            death_time?: number;
            killer_id?: number;
        }[] & ({
            victim_id?: number;
            kill_shares?: {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[];
            damage_to_kill?: number;
            effective_health?: number;
            death_time?: number;
            killer_id?: number;
        } & {
            victim_id?: number;
            kill_shares?: {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[] & ({
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            } & {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            } & { [K_69 in Exclude<keyof I_1["radiant_kills"][number]["kill_shares"][number], keyof CDOTAUserMsg_StatsPlayerKillShare>]: never; })[] & { [K_70 in Exclude<keyof I_1["radiant_kills"][number]["kill_shares"], keyof {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[]>]: never; };
            damage_to_kill?: number;
            effective_health?: number;
            death_time?: number;
            killer_id?: number;
        } & { [K_71 in Exclude<keyof I_1["radiant_kills"][number], keyof CDOTAUserMsg_StatsKillDetails>]: never; })[] & { [K_72 in Exclude<keyof I_1["radiant_kills"], keyof {
            victim_id?: number;
            kill_shares?: {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[];
            damage_to_kill?: number;
            effective_health?: number;
            death_time?: number;
            killer_id?: number;
        }[]>]: never; };
        dire_kills?: {
            victim_id?: number;
            kill_shares?: {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[];
            damage_to_kill?: number;
            effective_health?: number;
            death_time?: number;
            killer_id?: number;
        }[] & ({
            victim_id?: number;
            kill_shares?: {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[];
            damage_to_kill?: number;
            effective_health?: number;
            death_time?: number;
            killer_id?: number;
        } & {
            victim_id?: number;
            kill_shares?: {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[] & ({
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            } & {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            } & { [K_73 in Exclude<keyof I_1["dire_kills"][number]["kill_shares"][number], keyof CDOTAUserMsg_StatsPlayerKillShare>]: never; })[] & { [K_74 in Exclude<keyof I_1["dire_kills"][number]["kill_shares"], keyof {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[]>]: never; };
            damage_to_kill?: number;
            effective_health?: number;
            death_time?: number;
            killer_id?: number;
        } & { [K_75 in Exclude<keyof I_1["dire_kills"][number], keyof CDOTAUserMsg_StatsKillDetails>]: never; })[] & { [K_76 in Exclude<keyof I_1["dire_kills"], keyof {
            victim_id?: number;
            kill_shares?: {
                player_id?: number;
                kill_share_percent?: number;
                player_loc_x?: number;
                player_loc_y?: number;
                health_percent?: number;
                mana_percent?: number;
            }[];
            damage_to_kill?: number;
            effective_health?: number;
            death_time?: number;
            killer_id?: number;
        }[]>]: never; };
        fight_details?: {
            start_time?: number;
            end_time?: number;
            radiant_fight_details?: {
                participants?: number[];
                deaths?: number[];
                gold_delta?: number;
                xp_delta?: number;
            };
            dire_fight_details?: {
                participants?: number[];
                deaths?: number[];
                gold_delta?: number;
                xp_delta?: number;
            };
        }[] & ({
            start_time?: number;
            end_time?: number;
            radiant_fight_details?: {
                participants?: number[];
                deaths?: number[];
                gold_delta?: number;
                xp_delta?: number;
            };
            dire_fight_details?: {
                participants?: number[];
                deaths?: number[];
                gold_delta?: number;
                xp_delta?: number;
            };
        } & {
            start_time?: number;
            end_time?: number;
            radiant_fight_details?: {
                participants?: number[];
                deaths?: number[];
                gold_delta?: number;
                xp_delta?: number;
            } & {
                participants?: number[] & number[] & { [K_77 in Exclude<keyof I_1["fight_details"][number]["radiant_fight_details"]["participants"], keyof number[]>]: never; };
                deaths?: number[] & number[] & { [K_78 in Exclude<keyof I_1["fight_details"][number]["radiant_fight_details"]["deaths"], keyof number[]>]: never; };
                gold_delta?: number;
                xp_delta?: number;
            } & { [K_79 in Exclude<keyof I_1["fight_details"][number]["radiant_fight_details"], keyof CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightTeamDetails>]: never; };
            dire_fight_details?: {
                participants?: number[];
                deaths?: number[];
                gold_delta?: number;
                xp_delta?: number;
            } & {
                participants?: number[] & number[] & { [K_80 in Exclude<keyof I_1["fight_details"][number]["dire_fight_details"]["participants"], keyof number[]>]: never; };
                deaths?: number[] & number[] & { [K_81 in Exclude<keyof I_1["fight_details"][number]["dire_fight_details"]["deaths"], keyof number[]>]: never; };
                gold_delta?: number;
                xp_delta?: number;
            } & { [K_82 in Exclude<keyof I_1["fight_details"][number]["dire_fight_details"], keyof CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightTeamDetails>]: never; };
        } & { [K_83 in Exclude<keyof I_1["fight_details"][number], keyof CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightDetails>]: never; })[] & { [K_84 in Exclude<keyof I_1["fight_details"], keyof {
            start_time?: number;
            end_time?: number;
            radiant_fight_details?: {
                participants?: number[];
                deaths?: number[];
                gold_delta?: number;
                xp_delta?: number;
            };
            dire_fight_details?: {
                participants?: number[];
                deaths?: number[];
                gold_delta?: number;
                xp_delta?: number;
            };
        }[]>]: never; };
    } & { [K_85 in Exclude<keyof I_1, keyof CDOTAUserMsg_StatsMatchDetails>]: never; }>(object: I_1): CDOTAUserMsg_StatsMatchDetails;
};
export declare const CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightTeamDetails: {
    fromJSON(object: any): CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightTeamDetails;
    toJSON(message: CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightTeamDetails): unknown;
    create<I extends {
        participants?: number[];
        deaths?: number[];
        gold_delta?: number;
        xp_delta?: number;
    } & {
        participants?: number[] & number[] & { [K in Exclude<keyof I["participants"], keyof number[]>]: never; };
        deaths?: number[] & number[] & { [K_1 in Exclude<keyof I["deaths"], keyof number[]>]: never; };
        gold_delta?: number;
        xp_delta?: number;
    } & { [K_2 in Exclude<keyof I, keyof CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightTeamDetails>]: never; }>(base?: I): CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightTeamDetails;
    fromPartial<I_1 extends {
        participants?: number[];
        deaths?: number[];
        gold_delta?: number;
        xp_delta?: number;
    } & {
        participants?: number[] & number[] & { [K_3 in Exclude<keyof I_1["participants"], keyof number[]>]: never; };
        deaths?: number[] & number[] & { [K_4 in Exclude<keyof I_1["deaths"], keyof number[]>]: never; };
        gold_delta?: number;
        xp_delta?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightTeamDetails>]: never; }>(object: I_1): CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightTeamDetails;
};
export declare const CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightDetails: {
    fromJSON(object: any): CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightDetails;
    toJSON(message: CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightDetails): unknown;
    create<I extends {
        start_time?: number;
        end_time?: number;
        radiant_fight_details?: {
            participants?: number[];
            deaths?: number[];
            gold_delta?: number;
            xp_delta?: number;
        };
        dire_fight_details?: {
            participants?: number[];
            deaths?: number[];
            gold_delta?: number;
            xp_delta?: number;
        };
    } & {
        start_time?: number;
        end_time?: number;
        radiant_fight_details?: {
            participants?: number[];
            deaths?: number[];
            gold_delta?: number;
            xp_delta?: number;
        } & {
            participants?: number[] & number[] & { [K in Exclude<keyof I["radiant_fight_details"]["participants"], keyof number[]>]: never; };
            deaths?: number[] & number[] & { [K_1 in Exclude<keyof I["radiant_fight_details"]["deaths"], keyof number[]>]: never; };
            gold_delta?: number;
            xp_delta?: number;
        } & { [K_2 in Exclude<keyof I["radiant_fight_details"], keyof CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightTeamDetails>]: never; };
        dire_fight_details?: {
            participants?: number[];
            deaths?: number[];
            gold_delta?: number;
            xp_delta?: number;
        } & {
            participants?: number[] & number[] & { [K_3 in Exclude<keyof I["dire_fight_details"]["participants"], keyof number[]>]: never; };
            deaths?: number[] & number[] & { [K_4 in Exclude<keyof I["dire_fight_details"]["deaths"], keyof number[]>]: never; };
            gold_delta?: number;
            xp_delta?: number;
        } & { [K_5 in Exclude<keyof I["dire_fight_details"], keyof CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightTeamDetails>]: never; };
    } & { [K_6 in Exclude<keyof I, keyof CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightDetails>]: never; }>(base?: I): CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightDetails;
    fromPartial<I_1 extends {
        start_time?: number;
        end_time?: number;
        radiant_fight_details?: {
            participants?: number[];
            deaths?: number[];
            gold_delta?: number;
            xp_delta?: number;
        };
        dire_fight_details?: {
            participants?: number[];
            deaths?: number[];
            gold_delta?: number;
            xp_delta?: number;
        };
    } & {
        start_time?: number;
        end_time?: number;
        radiant_fight_details?: {
            participants?: number[];
            deaths?: number[];
            gold_delta?: number;
            xp_delta?: number;
        } & {
            participants?: number[] & number[] & { [K_7 in Exclude<keyof I_1["radiant_fight_details"]["participants"], keyof number[]>]: never; };
            deaths?: number[] & number[] & { [K_8 in Exclude<keyof I_1["radiant_fight_details"]["deaths"], keyof number[]>]: never; };
            gold_delta?: number;
            xp_delta?: number;
        } & { [K_9 in Exclude<keyof I_1["radiant_fight_details"], keyof CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightTeamDetails>]: never; };
        dire_fight_details?: {
            participants?: number[];
            deaths?: number[];
            gold_delta?: number;
            xp_delta?: number;
        } & {
            participants?: number[] & number[] & { [K_10 in Exclude<keyof I_1["dire_fight_details"]["participants"], keyof number[]>]: never; };
            deaths?: number[] & number[] & { [K_11 in Exclude<keyof I_1["dire_fight_details"]["deaths"], keyof number[]>]: never; };
            gold_delta?: number;
            xp_delta?: number;
        } & { [K_12 in Exclude<keyof I_1["dire_fight_details"], keyof CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightTeamDetails>]: never; };
    } & { [K_13 in Exclude<keyof I_1, keyof CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightDetails>]: never; }>(object: I_1): CDOTAUserMsg_StatsMatchDetails_CDOTAUserMsg_StatsFightDetails;
};
export declare const CDOTAUserMsg_MiniTaunt: {
    fromJSON(object: any): CDOTAUserMsg_MiniTaunt;
    toJSON(message: CDOTAUserMsg_MiniTaunt): unknown;
    create<I extends {
        taunting_player_id?: number;
    } & {
        taunting_player_id?: number;
    } & { [K in Exclude<keyof I, "taunting_player_id">]: never; }>(base?: I): CDOTAUserMsg_MiniTaunt;
    fromPartial<I_1 extends {
        taunting_player_id?: number;
    } & {
        taunting_player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "taunting_player_id">]: never; }>(object: I_1): CDOTAUserMsg_MiniTaunt;
};
export declare const CDOTAUserMsg_SpeechBubble: {
    fromJSON(object: any): CDOTAUserMsg_SpeechBubble;
    toJSON(message: CDOTAUserMsg_SpeechBubble): unknown;
    create<I extends {
        destroy_all?: boolean;
    } & {
        destroy_all?: boolean;
    } & { [K in Exclude<keyof I, "destroy_all">]: never; }>(base?: I): CDOTAUserMsg_SpeechBubble;
    fromPartial<I_1 extends {
        destroy_all?: boolean;
    } & {
        destroy_all?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "destroy_all">]: never; }>(object: I_1): CDOTAUserMsg_SpeechBubble;
};
export declare const CDOTAUserMsg_CustomHeaderMessage: {
    fromJSON(object: any): CDOTAUserMsg_CustomHeaderMessage;
    toJSON(message: CDOTAUserMsg_CustomHeaderMessage): unknown;
    create<I extends {
        player_id?: number;
        duration?: number;
        message?: string;
        value?: number;
    } & {
        player_id?: number;
        duration?: number;
        message?: string;
        value?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_CustomHeaderMessage>]: never; }>(base?: I): CDOTAUserMsg_CustomHeaderMessage;
    fromPartial<I_1 extends {
        player_id?: number;
        duration?: number;
        message?: string;
        value?: number;
    } & {
        player_id?: number;
        duration?: number;
        message?: string;
        value?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_CustomHeaderMessage>]: never; }>(object: I_1): CDOTAUserMsg_CustomHeaderMessage;
};
export declare const CMsgHeroAbilityStat: {
    fromJSON(object: any): CMsgHeroAbilityStat;
    toJSON(message: CMsgHeroAbilityStat): unknown;
    create<I extends {
        stat_type?: EHeroStatType;
        int_value?: number;
        float_value?: number;
    } & {
        stat_type?: EHeroStatType;
        int_value?: number;
        float_value?: number;
    } & { [K in Exclude<keyof I, keyof CMsgHeroAbilityStat>]: never; }>(base?: I): CMsgHeroAbilityStat;
    fromPartial<I_1 extends {
        stat_type?: EHeroStatType;
        int_value?: number;
        float_value?: number;
    } & {
        stat_type?: EHeroStatType;
        int_value?: number;
        float_value?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgHeroAbilityStat>]: never; }>(object: I_1): CMsgHeroAbilityStat;
};
export declare const CMsgCombatAnalyzerPlayerStat: {
    fromJSON(object: any): CMsgCombatAnalyzerPlayerStat;
    toJSON(message: CMsgCombatAnalyzerPlayerStat): unknown;
    create<I extends {
        account_id?: number;
        hero_ability_stats?: {
            stat_type?: EHeroStatType;
            int_value?: number;
            float_value?: number;
        }[];
    } & {
        account_id?: number;
        hero_ability_stats?: {
            stat_type?: EHeroStatType;
            int_value?: number;
            float_value?: number;
        }[] & ({
            stat_type?: EHeroStatType;
            int_value?: number;
            float_value?: number;
        } & {
            stat_type?: EHeroStatType;
            int_value?: number;
            float_value?: number;
        } & { [K in Exclude<keyof I["hero_ability_stats"][number], keyof CMsgHeroAbilityStat>]: never; })[] & { [K_1 in Exclude<keyof I["hero_ability_stats"], keyof {
            stat_type?: EHeroStatType;
            int_value?: number;
            float_value?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgCombatAnalyzerPlayerStat>]: never; }>(base?: I): CMsgCombatAnalyzerPlayerStat;
    fromPartial<I_1 extends {
        account_id?: number;
        hero_ability_stats?: {
            stat_type?: EHeroStatType;
            int_value?: number;
            float_value?: number;
        }[];
    } & {
        account_id?: number;
        hero_ability_stats?: {
            stat_type?: EHeroStatType;
            int_value?: number;
            float_value?: number;
        }[] & ({
            stat_type?: EHeroStatType;
            int_value?: number;
            float_value?: number;
        } & {
            stat_type?: EHeroStatType;
            int_value?: number;
            float_value?: number;
        } & { [K_3 in Exclude<keyof I_1["hero_ability_stats"][number], keyof CMsgHeroAbilityStat>]: never; })[] & { [K_4 in Exclude<keyof I_1["hero_ability_stats"], keyof {
            stat_type?: EHeroStatType;
            int_value?: number;
            float_value?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgCombatAnalyzerPlayerStat>]: never; }>(object: I_1): CMsgCombatAnalyzerPlayerStat;
};
export declare const CMsgCombatAnalyzerStats: {
    fromJSON(object: any): CMsgCombatAnalyzerStats;
    toJSON(message: CMsgCombatAnalyzerStats): unknown;
    create<I extends {
        match_id?: string;
        player_stats?: {
            account_id?: number;
            hero_ability_stats?: {
                stat_type?: EHeroStatType;
                int_value?: number;
                float_value?: number;
            }[];
        }[];
    } & {
        match_id?: string;
        player_stats?: {
            account_id?: number;
            hero_ability_stats?: {
                stat_type?: EHeroStatType;
                int_value?: number;
                float_value?: number;
            }[];
        }[] & ({
            account_id?: number;
            hero_ability_stats?: {
                stat_type?: EHeroStatType;
                int_value?: number;
                float_value?: number;
            }[];
        } & {
            account_id?: number;
            hero_ability_stats?: {
                stat_type?: EHeroStatType;
                int_value?: number;
                float_value?: number;
            }[] & ({
                stat_type?: EHeroStatType;
                int_value?: number;
                float_value?: number;
            } & {
                stat_type?: EHeroStatType;
                int_value?: number;
                float_value?: number;
            } & { [K in Exclude<keyof I["player_stats"][number]["hero_ability_stats"][number], keyof CMsgHeroAbilityStat>]: never; })[] & { [K_1 in Exclude<keyof I["player_stats"][number]["hero_ability_stats"], keyof {
                stat_type?: EHeroStatType;
                int_value?: number;
                float_value?: number;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["player_stats"][number], keyof CMsgCombatAnalyzerPlayerStat>]: never; })[] & { [K_3 in Exclude<keyof I["player_stats"], keyof {
            account_id?: number;
            hero_ability_stats?: {
                stat_type?: EHeroStatType;
                int_value?: number;
                float_value?: number;
            }[];
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof CMsgCombatAnalyzerStats>]: never; }>(base?: I): CMsgCombatAnalyzerStats;
    fromPartial<I_1 extends {
        match_id?: string;
        player_stats?: {
            account_id?: number;
            hero_ability_stats?: {
                stat_type?: EHeroStatType;
                int_value?: number;
                float_value?: number;
            }[];
        }[];
    } & {
        match_id?: string;
        player_stats?: {
            account_id?: number;
            hero_ability_stats?: {
                stat_type?: EHeroStatType;
                int_value?: number;
                float_value?: number;
            }[];
        }[] & ({
            account_id?: number;
            hero_ability_stats?: {
                stat_type?: EHeroStatType;
                int_value?: number;
                float_value?: number;
            }[];
        } & {
            account_id?: number;
            hero_ability_stats?: {
                stat_type?: EHeroStatType;
                int_value?: number;
                float_value?: number;
            }[] & ({
                stat_type?: EHeroStatType;
                int_value?: number;
                float_value?: number;
            } & {
                stat_type?: EHeroStatType;
                int_value?: number;
                float_value?: number;
            } & { [K_5 in Exclude<keyof I_1["player_stats"][number]["hero_ability_stats"][number], keyof CMsgHeroAbilityStat>]: never; })[] & { [K_6 in Exclude<keyof I_1["player_stats"][number]["hero_ability_stats"], keyof {
                stat_type?: EHeroStatType;
                int_value?: number;
                float_value?: number;
            }[]>]: never; };
        } & { [K_7 in Exclude<keyof I_1["player_stats"][number], keyof CMsgCombatAnalyzerPlayerStat>]: never; })[] & { [K_8 in Exclude<keyof I_1["player_stats"], keyof {
            account_id?: number;
            hero_ability_stats?: {
                stat_type?: EHeroStatType;
                int_value?: number;
                float_value?: number;
            }[];
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof CMsgCombatAnalyzerStats>]: never; }>(object: I_1): CMsgCombatAnalyzerStats;
};
export declare const CDOTAUserMsg_BeastChat: {
    fromJSON(object: any): CDOTAUserMsg_BeastChat;
    toJSON(message: CDOTAUserMsg_BeastChat): unknown;
    create<I extends {
        team?: number;
        format?: string;
        message?: string;
        target?: string;
    } & {
        team?: number;
        format?: string;
        message?: string;
        target?: string;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_BeastChat>]: never; }>(base?: I): CDOTAUserMsg_BeastChat;
    fromPartial<I_1 extends {
        team?: number;
        format?: string;
        message?: string;
        target?: string;
    } & {
        team?: number;
        format?: string;
        message?: string;
        target?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_BeastChat>]: never; }>(object: I_1): CDOTAUserMsg_BeastChat;
};
export declare const CDOTAUserMsg_CustomHudElement_Create: {
    fromJSON(object: any): CDOTAUserMsg_CustomHudElement_Create;
    toJSON(message: CDOTAUserMsg_CustomHudElement_Create): unknown;
    create<I extends {
        element_id?: string;
        layout_filename?: string;
        data?: string;
    } & {
        element_id?: string;
        layout_filename?: string;
        data?: string;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_CustomHudElement_Create>]: never; }>(base?: I): CDOTAUserMsg_CustomHudElement_Create;
    fromPartial<I_1 extends {
        element_id?: string;
        layout_filename?: string;
        data?: string;
    } & {
        element_id?: string;
        layout_filename?: string;
        data?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_CustomHudElement_Create>]: never; }>(object: I_1): CDOTAUserMsg_CustomHudElement_Create;
};
export declare const CDOTAUserMsg_CustomHudElement_Modify: {
    fromJSON(object: any): CDOTAUserMsg_CustomHudElement_Modify;
    toJSON(message: CDOTAUserMsg_CustomHudElement_Modify): unknown;
    create<I extends {
        element_id?: string;
        modify_visible?: boolean;
        data?: string;
    } & {
        element_id?: string;
        modify_visible?: boolean;
        data?: string;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_CustomHudElement_Modify>]: never; }>(base?: I): CDOTAUserMsg_CustomHudElement_Modify;
    fromPartial<I_1 extends {
        element_id?: string;
        modify_visible?: boolean;
        data?: string;
    } & {
        element_id?: string;
        modify_visible?: boolean;
        data?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_CustomHudElement_Modify>]: never; }>(object: I_1): CDOTAUserMsg_CustomHudElement_Modify;
};
export declare const CDOTAUserMsg_CustomHudElement_Destroy: {
    fromJSON(object: any): CDOTAUserMsg_CustomHudElement_Destroy;
    toJSON(message: CDOTAUserMsg_CustomHudElement_Destroy): unknown;
    create<I extends {
        element_id?: string;
    } & {
        element_id?: string;
    } & { [K in Exclude<keyof I, "element_id">]: never; }>(base?: I): CDOTAUserMsg_CustomHudElement_Destroy;
    fromPartial<I_1 extends {
        element_id?: string;
    } & {
        element_id?: string;
    } & { [K_1 in Exclude<keyof I_1, "element_id">]: never; }>(object: I_1): CDOTAUserMsg_CustomHudElement_Destroy;
};
export declare const CDOTAUserMsg_CompendiumStatePlayer: {
    fromJSON(object: any): CDOTAUserMsg_CompendiumStatePlayer;
    toJSON(message: CDOTAUserMsg_CompendiumStatePlayer): unknown;
    create<I extends {
        player_id?: number;
        level?: number;
    } & {
        player_id?: number;
        level?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_CompendiumStatePlayer>]: never; }>(base?: I): CDOTAUserMsg_CompendiumStatePlayer;
    fromPartial<I_1 extends {
        player_id?: number;
        level?: number;
    } & {
        player_id?: number;
        level?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_CompendiumStatePlayer>]: never; }>(object: I_1): CDOTAUserMsg_CompendiumStatePlayer;
};
export declare const CDOTAUserMsg_CompendiumState: {
    fromJSON(object: any): CDOTAUserMsg_CompendiumState;
    toJSON(message: CDOTAUserMsg_CompendiumState): unknown;
    create<I extends {
        compendium_players?: {
            player_id?: number;
            level?: number;
        }[];
    } & {
        compendium_players?: {
            player_id?: number;
            level?: number;
        }[] & ({
            player_id?: number;
            level?: number;
        } & {
            player_id?: number;
            level?: number;
        } & { [K in Exclude<keyof I["compendium_players"][number], keyof CDOTAUserMsg_CompendiumStatePlayer>]: never; })[] & { [K_1 in Exclude<keyof I["compendium_players"], keyof {
            player_id?: number;
            level?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "compendium_players">]: never; }>(base?: I): CDOTAUserMsg_CompendiumState;
    fromPartial<I_1 extends {
        compendium_players?: {
            player_id?: number;
            level?: number;
        }[];
    } & {
        compendium_players?: {
            player_id?: number;
            level?: number;
        }[] & ({
            player_id?: number;
            level?: number;
        } & {
            player_id?: number;
            level?: number;
        } & { [K_3 in Exclude<keyof I_1["compendium_players"][number], keyof CDOTAUserMsg_CompendiumStatePlayer>]: never; })[] & { [K_4 in Exclude<keyof I_1["compendium_players"], keyof {
            player_id?: number;
            level?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "compendium_players">]: never; }>(object: I_1): CDOTAUserMsg_CompendiumState;
};
export declare const CDOTAUserMsg_ProjectionAbility: {
    fromJSON(object: any): CDOTAUserMsg_ProjectionAbility;
    toJSON(message: CDOTAUserMsg_ProjectionAbility): unknown;
    create<I extends {
        ability_id?: number;
        caster_ent_index?: number;
        caster_team?: number;
        channel_end?: boolean;
        origin?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        track_caster_only?: boolean;
        end_time?: number;
        victim_ent_index?: number;
    } & {
        ability_id?: number;
        caster_ent_index?: number;
        caster_team?: number;
        channel_end?: boolean;
        origin?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["origin"], keyof CMsgVector>]: never; };
        track_caster_only?: boolean;
        end_time?: number;
        victim_ent_index?: number;
    } & { [K_1 in Exclude<keyof I, keyof CDOTAUserMsg_ProjectionAbility>]: never; }>(base?: I): CDOTAUserMsg_ProjectionAbility;
    fromPartial<I_1 extends {
        ability_id?: number;
        caster_ent_index?: number;
        caster_team?: number;
        channel_end?: boolean;
        origin?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        track_caster_only?: boolean;
        end_time?: number;
        victim_ent_index?: number;
    } & {
        ability_id?: number;
        caster_ent_index?: number;
        caster_team?: number;
        channel_end?: boolean;
        origin?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_2 in Exclude<keyof I_1["origin"], keyof CMsgVector>]: never; };
        track_caster_only?: boolean;
        end_time?: number;
        victim_ent_index?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CDOTAUserMsg_ProjectionAbility>]: never; }>(object: I_1): CDOTAUserMsg_ProjectionAbility;
};
export declare const CDOTAUserMsg_ProjectionEvent: {
    fromJSON(object: any): CDOTAUserMsg_ProjectionEvent;
    toJSON(message: CDOTAUserMsg_ProjectionEvent): unknown;
    create<I extends {
        event_id?: EProjectionEvent;
        team?: number;
    } & {
        event_id?: EProjectionEvent;
        team?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_ProjectionEvent>]: never; }>(base?: I): CDOTAUserMsg_ProjectionEvent;
    fromPartial<I_1 extends {
        event_id?: EProjectionEvent;
        team?: number;
    } & {
        event_id?: EProjectionEvent;
        team?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_ProjectionEvent>]: never; }>(object: I_1): CDOTAUserMsg_ProjectionEvent;
};
export declare const CDOTAUserMsg_XPAlert: {
    fromJSON(object: any): CDOTAUserMsg_XPAlert;
    toJSON(message: CDOTAUserMsg_XPAlert): unknown;
    create<I extends {
        player_id?: number;
        target_entindex?: number;
    } & {
        player_id?: number;
        target_entindex?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_XPAlert>]: never; }>(base?: I): CDOTAUserMsg_XPAlert;
    fromPartial<I_1 extends {
        player_id?: number;
        target_entindex?: number;
    } & {
        player_id?: number;
        target_entindex?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_XPAlert>]: never; }>(object: I_1): CDOTAUserMsg_XPAlert;
};
export declare const CDOTAUserMsg_TalentTreeAlert: {
    fromJSON(object: any): CDOTAUserMsg_TalentTreeAlert;
    toJSON(message: CDOTAUserMsg_TalentTreeAlert): unknown;
    create<I extends {
        player_id?: number;
        target_entindex?: number;
        ability_id?: number;
        slot?: number;
        learned?: boolean;
    } & {
        player_id?: number;
        target_entindex?: number;
        ability_id?: number;
        slot?: number;
        learned?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_TalentTreeAlert>]: never; }>(base?: I): CDOTAUserMsg_TalentTreeAlert;
    fromPartial<I_1 extends {
        player_id?: number;
        target_entindex?: number;
        ability_id?: number;
        slot?: number;
        learned?: boolean;
    } & {
        player_id?: number;
        target_entindex?: number;
        ability_id?: number;
        slot?: number;
        learned?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_TalentTreeAlert>]: never; }>(object: I_1): CDOTAUserMsg_TalentTreeAlert;
};
export declare const CDOTAUserMsg_UpdateQuestProgress: {
    fromJSON(_: any): CDOTAUserMsg_UpdateQuestProgress;
    toJSON(_: CDOTAUserMsg_UpdateQuestProgress): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CDOTAUserMsg_UpdateQuestProgress;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CDOTAUserMsg_UpdateQuestProgress;
};
export declare const CDOTAUserMsg_QuestStatus: {
    fromJSON(object: any): CDOTAUserMsg_QuestStatus;
    toJSON(message: CDOTAUserMsg_QuestStatus): unknown;
    create<I extends {
        player_id?: number;
        quest_id?: number;
        challenge_id?: number;
        progress?: number;
        goal?: number;
        query?: number;
        fail_gametime?: number;
        item_ability_id?: number;
    } & {
        player_id?: number;
        quest_id?: number;
        challenge_id?: number;
        progress?: number;
        goal?: number;
        query?: number;
        fail_gametime?: number;
        item_ability_id?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_QuestStatus>]: never; }>(base?: I): CDOTAUserMsg_QuestStatus;
    fromPartial<I_1 extends {
        player_id?: number;
        quest_id?: number;
        challenge_id?: number;
        progress?: number;
        goal?: number;
        query?: number;
        fail_gametime?: number;
        item_ability_id?: number;
    } & {
        player_id?: number;
        quest_id?: number;
        challenge_id?: number;
        progress?: number;
        goal?: number;
        query?: number;
        fail_gametime?: number;
        item_ability_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_QuestStatus>]: never; }>(object: I_1): CDOTAUserMsg_QuestStatus;
};
export declare const CDOTAUserMsg_SuggestHeroPick: {
    fromJSON(object: any): CDOTAUserMsg_SuggestHeroPick;
    toJSON(message: CDOTAUserMsg_SuggestHeroPick): unknown;
    create<I extends {
        player_id?: number;
        hero_id?: number;
        ban?: boolean;
    } & {
        player_id?: number;
        hero_id?: number;
        ban?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_SuggestHeroPick>]: never; }>(base?: I): CDOTAUserMsg_SuggestHeroPick;
    fromPartial<I_1 extends {
        player_id?: number;
        hero_id?: number;
        ban?: boolean;
    } & {
        player_id?: number;
        hero_id?: number;
        ban?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_SuggestHeroPick>]: never; }>(object: I_1): CDOTAUserMsg_SuggestHeroPick;
};
export declare const CDOTAUserMsg_SuggestHeroRole: {
    fromJSON(object: any): CDOTAUserMsg_SuggestHeroRole;
    toJSON(message: CDOTAUserMsg_SuggestHeroRole): unknown;
    create<I extends {
        player_id?: number;
        hero_role?: string;
    } & {
        player_id?: number;
        hero_role?: string;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_SuggestHeroRole>]: never; }>(base?: I): CDOTAUserMsg_SuggestHeroRole;
    fromPartial<I_1 extends {
        player_id?: number;
        hero_role?: string;
    } & {
        player_id?: number;
        hero_role?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_SuggestHeroRole>]: never; }>(object: I_1): CDOTAUserMsg_SuggestHeroRole;
};
export declare const CDOTAUserMsg_KillcamDamageTaken: {
    fromJSON(object: any): CDOTAUserMsg_KillcamDamageTaken;
    toJSON(message: CDOTAUserMsg_KillcamDamageTaken): unknown;
    create<I extends {
        player_id?: number;
        damage_taken?: number;
        item_type?: number;
        item_ability_id?: number;
        hero_name?: string;
        damage_color?: string;
    } & {
        player_id?: number;
        damage_taken?: number;
        item_type?: number;
        item_ability_id?: number;
        hero_name?: string;
        damage_color?: string;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_KillcamDamageTaken>]: never; }>(base?: I): CDOTAUserMsg_KillcamDamageTaken;
    fromPartial<I_1 extends {
        player_id?: number;
        damage_taken?: number;
        item_type?: number;
        item_ability_id?: number;
        hero_name?: string;
        damage_color?: string;
    } & {
        player_id?: number;
        damage_taken?: number;
        item_type?: number;
        item_ability_id?: number;
        hero_name?: string;
        damage_color?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_KillcamDamageTaken>]: never; }>(object: I_1): CDOTAUserMsg_KillcamDamageTaken;
};
export declare const CDOTAUserMsg_SelectPenaltyGold: {
    fromJSON(object: any): CDOTAUserMsg_SelectPenaltyGold;
    toJSON(message: CDOTAUserMsg_SelectPenaltyGold): unknown;
    create<I extends {
        player_id?: number;
        cost?: number;
    } & {
        player_id?: number;
        cost?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_SelectPenaltyGold>]: never; }>(base?: I): CDOTAUserMsg_SelectPenaltyGold;
    fromPartial<I_1 extends {
        player_id?: number;
        cost?: number;
    } & {
        player_id?: number;
        cost?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_SelectPenaltyGold>]: never; }>(object: I_1): CDOTAUserMsg_SelectPenaltyGold;
};
export declare const CDOTAUserMsg_RollDiceResult: {
    fromJSON(object: any): CDOTAUserMsg_RollDiceResult;
    toJSON(message: CDOTAUserMsg_RollDiceResult): unknown;
    create<I extends {
        player_id?: number;
        channel_type?: number;
        roll_min?: number;
        roll_max?: number;
        result?: number;
    } & {
        player_id?: number;
        channel_type?: number;
        roll_min?: number;
        roll_max?: number;
        result?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_RollDiceResult>]: never; }>(base?: I): CDOTAUserMsg_RollDiceResult;
    fromPartial<I_1 extends {
        player_id?: number;
        channel_type?: number;
        roll_min?: number;
        roll_max?: number;
        result?: number;
    } & {
        player_id?: number;
        channel_type?: number;
        roll_min?: number;
        roll_max?: number;
        result?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_RollDiceResult>]: never; }>(object: I_1): CDOTAUserMsg_RollDiceResult;
};
export declare const CDOTAUserMsg_FlipCoinResult: {
    fromJSON(object: any): CDOTAUserMsg_FlipCoinResult;
    toJSON(message: CDOTAUserMsg_FlipCoinResult): unknown;
    create<I extends {
        player_id?: number;
        channel_type?: number;
        result?: boolean;
    } & {
        player_id?: number;
        channel_type?: number;
        result?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_FlipCoinResult>]: never; }>(base?: I): CDOTAUserMsg_FlipCoinResult;
    fromPartial<I_1 extends {
        player_id?: number;
        channel_type?: number;
        result?: boolean;
    } & {
        player_id?: number;
        channel_type?: number;
        result?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_FlipCoinResult>]: never; }>(object: I_1): CDOTAUserMsg_FlipCoinResult;
};
export declare const CDOTAUserMessage_RequestItemSuggestions: {
    fromJSON(object: any): CDOTAUserMessage_RequestItemSuggestions;
    toJSON(message: CDOTAUserMessage_RequestItemSuggestions): unknown;
    create<I extends {
        player_id?: number;
    } & {
        player_id?: number;
    } & { [K in Exclude<keyof I, "player_id">]: never; }>(base?: I): CDOTAUserMessage_RequestItemSuggestions;
    fromPartial<I_1 extends {
        player_id?: number;
    } & {
        player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "player_id">]: never; }>(object: I_1): CDOTAUserMessage_RequestItemSuggestions;
};
export declare const CDOTAUserMessage_TeamCaptainChanged: {
    fromJSON(object: any): CDOTAUserMessage_TeamCaptainChanged;
    toJSON(message: CDOTAUserMessage_TeamCaptainChanged): unknown;
    create<I extends {
        team?: number;
        captain_player_id?: number;
    } & {
        team?: number;
        captain_player_id?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMessage_TeamCaptainChanged>]: never; }>(base?: I): CDOTAUserMessage_TeamCaptainChanged;
    fromPartial<I_1 extends {
        team?: number;
        captain_player_id?: number;
    } & {
        team?: number;
        captain_player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMessage_TeamCaptainChanged>]: never; }>(object: I_1): CDOTAUserMessage_TeamCaptainChanged;
};
export declare const CDOTAUserMsg_ChatWheelCooldown: {
    fromJSON(object: any): CDOTAUserMsg_ChatWheelCooldown;
    toJSON(message: CDOTAUserMsg_ChatWheelCooldown): unknown;
    create<I extends {
        message_id?: number;
        cooldown_remaining?: number;
    } & {
        message_id?: number;
        cooldown_remaining?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_ChatWheelCooldown>]: never; }>(base?: I): CDOTAUserMsg_ChatWheelCooldown;
    fromPartial<I_1 extends {
        message_id?: number;
        cooldown_remaining?: number;
    } & {
        message_id?: number;
        cooldown_remaining?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_ChatWheelCooldown>]: never; }>(object: I_1): CDOTAUserMsg_ChatWheelCooldown;
};
export declare const CDOTAUserMsg_HeroRelicProgress: {
    fromJSON(object: any): CDOTAUserMsg_HeroRelicProgress;
    toJSON(message: CDOTAUserMsg_HeroRelicProgress): unknown;
    create<I extends {
        hero_relic_type?: number;
        value?: number;
        ehandle?: number;
        event_id?: number;
        value_display?: number;
    } & {
        hero_relic_type?: number;
        value?: number;
        ehandle?: number;
        event_id?: number;
        value_display?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_HeroRelicProgress>]: never; }>(base?: I): CDOTAUserMsg_HeroRelicProgress;
    fromPartial<I_1 extends {
        hero_relic_type?: number;
        value?: number;
        ehandle?: number;
        event_id?: number;
        value_display?: number;
    } & {
        hero_relic_type?: number;
        value?: number;
        ehandle?: number;
        event_id?: number;
        value_display?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_HeroRelicProgress>]: never; }>(object: I_1): CDOTAUserMsg_HeroRelicProgress;
};
export declare const CDOTAUserMsg_AbilityDraftRequestAbility: {
    fromJSON(object: any): CDOTAUserMsg_AbilityDraftRequestAbility;
    toJSON(message: CDOTAUserMsg_AbilityDraftRequestAbility): unknown;
    create<I extends {
        player_id?: number;
        requested_ability_id?: number;
        ctrl_is_down?: boolean;
    } & {
        player_id?: number;
        requested_ability_id?: number;
        ctrl_is_down?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_AbilityDraftRequestAbility>]: never; }>(base?: I): CDOTAUserMsg_AbilityDraftRequestAbility;
    fromPartial<I_1 extends {
        player_id?: number;
        requested_ability_id?: number;
        ctrl_is_down?: boolean;
    } & {
        player_id?: number;
        requested_ability_id?: number;
        ctrl_is_down?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_AbilityDraftRequestAbility>]: never; }>(object: I_1): CDOTAUserMsg_AbilityDraftRequestAbility;
};
export declare const CDOTAUserMsg_DamageReport: {
    fromJSON(object: any): CDOTAUserMsg_DamageReport;
    toJSON(message: CDOTAUserMsg_DamageReport): unknown;
    create<I extends {
        player_id?: number;
        target_hero_id?: number;
        source_hero_id?: number;
        damage_amount?: number;
        broadcast?: boolean;
    } & {
        player_id?: number;
        target_hero_id?: number;
        source_hero_id?: number;
        damage_amount?: number;
        broadcast?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_DamageReport>]: never; }>(base?: I): CDOTAUserMsg_DamageReport;
    fromPartial<I_1 extends {
        player_id?: number;
        target_hero_id?: number;
        source_hero_id?: number;
        damage_amount?: number;
        broadcast?: boolean;
    } & {
        player_id?: number;
        target_hero_id?: number;
        source_hero_id?: number;
        damage_amount?: number;
        broadcast?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_DamageReport>]: never; }>(object: I_1): CDOTAUserMsg_DamageReport;
};
export declare const CDOTAUserMsg_SalutePlayer: {
    fromJSON(object: any): CDOTAUserMsg_SalutePlayer;
    toJSON(message: CDOTAUserMsg_SalutePlayer): unknown;
    create<I extends {
        source_player_id?: number;
        target_player_id?: number;
        tip_amount?: number;
        event_id?: number;
        custom_tip_style?: string;
        num_recent_tips?: number;
    } & {
        source_player_id?: number;
        target_player_id?: number;
        tip_amount?: number;
        event_id?: number;
        custom_tip_style?: string;
        num_recent_tips?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_SalutePlayer>]: never; }>(base?: I): CDOTAUserMsg_SalutePlayer;
    fromPartial<I_1 extends {
        source_player_id?: number;
        target_player_id?: number;
        tip_amount?: number;
        event_id?: number;
        custom_tip_style?: string;
        num_recent_tips?: number;
    } & {
        source_player_id?: number;
        target_player_id?: number;
        tip_amount?: number;
        event_id?: number;
        custom_tip_style?: string;
        num_recent_tips?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_SalutePlayer>]: never; }>(object: I_1): CDOTAUserMsg_SalutePlayer;
};
export declare const CDOTAUserMsg_TipAlert: {
    fromJSON(object: any): CDOTAUserMsg_TipAlert;
    toJSON(message: CDOTAUserMsg_TipAlert): unknown;
    create<I extends {
        player_id?: number;
        tip_text?: string;
    } & {
        player_id?: number;
        tip_text?: string;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_TipAlert>]: never; }>(base?: I): CDOTAUserMsg_TipAlert;
    fromPartial<I_1 extends {
        player_id?: number;
        tip_text?: string;
    } & {
        player_id?: number;
        tip_text?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_TipAlert>]: never; }>(object: I_1): CDOTAUserMsg_TipAlert;
};
export declare const CDOTAUserMsg_ReplaceQueryUnit: {
    fromJSON(object: any): CDOTAUserMsg_ReplaceQueryUnit;
    toJSON(message: CDOTAUserMsg_ReplaceQueryUnit): unknown;
    create<I extends {
        player_id?: number;
        source_entindex?: number;
        target_entindex?: number;
    } & {
        player_id?: number;
        source_entindex?: number;
        target_entindex?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_ReplaceQueryUnit>]: never; }>(base?: I): CDOTAUserMsg_ReplaceQueryUnit;
    fromPartial<I_1 extends {
        player_id?: number;
        source_entindex?: number;
        target_entindex?: number;
    } & {
        player_id?: number;
        source_entindex?: number;
        target_entindex?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_ReplaceQueryUnit>]: never; }>(object: I_1): CDOTAUserMsg_ReplaceQueryUnit;
};
export declare const CDOTAUserMsg_ESArcanaCombo: {
    fromJSON(object: any): CDOTAUserMsg_ESArcanaCombo;
    toJSON(message: CDOTAUserMsg_ESArcanaCombo): unknown;
    create<I extends {
        ehandle?: number;
        combo_count?: number;
        arcana_level?: number;
    } & {
        ehandle?: number;
        combo_count?: number;
        arcana_level?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_ESArcanaCombo>]: never; }>(base?: I): CDOTAUserMsg_ESArcanaCombo;
    fromPartial<I_1 extends {
        ehandle?: number;
        combo_count?: number;
        arcana_level?: number;
    } & {
        ehandle?: number;
        combo_count?: number;
        arcana_level?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_ESArcanaCombo>]: never; }>(object: I_1): CDOTAUserMsg_ESArcanaCombo;
};
export declare const CDOTAUserMsg_ESArcanaComboSummary: {
    fromJSON(object: any): CDOTAUserMsg_ESArcanaComboSummary;
    toJSON(message: CDOTAUserMsg_ESArcanaComboSummary): unknown;
    create<I extends {
        ehandle?: number;
        combo_count?: number;
        damage_amount?: number;
    } & {
        ehandle?: number;
        combo_count?: number;
        damage_amount?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_ESArcanaComboSummary>]: never; }>(base?: I): CDOTAUserMsg_ESArcanaComboSummary;
    fromPartial<I_1 extends {
        ehandle?: number;
        combo_count?: number;
        damage_amount?: number;
    } & {
        ehandle?: number;
        combo_count?: number;
        damage_amount?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_ESArcanaComboSummary>]: never; }>(object: I_1): CDOTAUserMsg_ESArcanaComboSummary;
};
export declare const CDOTAUserMsg_OMArcanaCombo: {
    fromJSON(object: any): CDOTAUserMsg_OMArcanaCombo;
    toJSON(message: CDOTAUserMsg_OMArcanaCombo): unknown;
    create<I extends {
        ehandle?: number;
        multicast_amount?: number;
        arcana_level?: number;
        multicast_chance?: number;
    } & {
        ehandle?: number;
        multicast_amount?: number;
        arcana_level?: number;
        multicast_chance?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_OMArcanaCombo>]: never; }>(base?: I): CDOTAUserMsg_OMArcanaCombo;
    fromPartial<I_1 extends {
        ehandle?: number;
        multicast_amount?: number;
        arcana_level?: number;
        multicast_chance?: number;
    } & {
        ehandle?: number;
        multicast_amount?: number;
        arcana_level?: number;
        multicast_chance?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_OMArcanaCombo>]: never; }>(object: I_1): CDOTAUserMsg_OMArcanaCombo;
};
export declare const CDOTAUserMsg_HighFiveCompleted: {
    fromJSON(object: any): CDOTAUserMsg_HighFiveCompleted;
    toJSON(message: CDOTAUserMsg_HighFiveCompleted): unknown;
    create<I extends {
        player_id_1?: number;
        player_id_2?: number;
        special_high_five?: boolean;
        special_entindex?: number;
    } & {
        player_id_1?: number;
        player_id_2?: number;
        special_high_five?: boolean;
        special_entindex?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_HighFiveCompleted>]: never; }>(base?: I): CDOTAUserMsg_HighFiveCompleted;
    fromPartial<I_1 extends {
        player_id_1?: number;
        player_id_2?: number;
        special_high_five?: boolean;
        special_entindex?: number;
    } & {
        player_id_1?: number;
        player_id_2?: number;
        special_high_five?: boolean;
        special_entindex?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_HighFiveCompleted>]: never; }>(object: I_1): CDOTAUserMsg_HighFiveCompleted;
};
export declare const CDOTAUserMsg_HighFiveLeftHanging: {
    fromJSON(object: any): CDOTAUserMsg_HighFiveLeftHanging;
    toJSON(message: CDOTAUserMsg_HighFiveLeftHanging): unknown;
    create<I extends {
        player_id?: number;
    } & {
        player_id?: number;
    } & { [K in Exclude<keyof I, "player_id">]: never; }>(base?: I): CDOTAUserMsg_HighFiveLeftHanging;
    fromPartial<I_1 extends {
        player_id?: number;
    } & {
        player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "player_id">]: never; }>(object: I_1): CDOTAUserMsg_HighFiveLeftHanging;
};
export declare const CDOTAUserMsg_ShovelUnearth: {
    fromJSON(object: any): CDOTAUserMsg_ShovelUnearth;
    toJSON(message: CDOTAUserMsg_ShovelUnearth): unknown;
    create<I extends {
        player_id?: number;
        all_chat?: boolean;
        locstring?: string;
        quantity?: number;
    } & {
        player_id?: number;
        all_chat?: boolean;
        locstring?: string;
        quantity?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_ShovelUnearth>]: never; }>(base?: I): CDOTAUserMsg_ShovelUnearth;
    fromPartial<I_1 extends {
        player_id?: number;
        all_chat?: boolean;
        locstring?: string;
        quantity?: number;
    } & {
        player_id?: number;
        all_chat?: boolean;
        locstring?: string;
        quantity?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_ShovelUnearth>]: never; }>(object: I_1): CDOTAUserMsg_ShovelUnearth;
};
export declare const CDOTAUserMsg_AllStarEvent: {
    fromJSON(object: any): CDOTAUserMsg_AllStarEvent;
    toJSON(message: CDOTAUserMsg_AllStarEvent): unknown;
    create<I extends {
        source_player_id?: number;
        target_player_id?: number;
        point_amount?: number;
        event_id?: number;
        player_scores?: {
            player_id?: number;
            score_sans_kda?: number;
        }[];
    } & {
        source_player_id?: number;
        target_player_id?: number;
        point_amount?: number;
        event_id?: number;
        player_scores?: {
            player_id?: number;
            score_sans_kda?: number;
        }[] & ({
            player_id?: number;
            score_sans_kda?: number;
        } & {
            player_id?: number;
            score_sans_kda?: number;
        } & { [K in Exclude<keyof I["player_scores"][number], keyof CDOTAUserMsg_AllStarEvent_PlayerScore>]: never; })[] & { [K_1 in Exclude<keyof I["player_scores"], keyof {
            player_id?: number;
            score_sans_kda?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CDOTAUserMsg_AllStarEvent>]: never; }>(base?: I): CDOTAUserMsg_AllStarEvent;
    fromPartial<I_1 extends {
        source_player_id?: number;
        target_player_id?: number;
        point_amount?: number;
        event_id?: number;
        player_scores?: {
            player_id?: number;
            score_sans_kda?: number;
        }[];
    } & {
        source_player_id?: number;
        target_player_id?: number;
        point_amount?: number;
        event_id?: number;
        player_scores?: {
            player_id?: number;
            score_sans_kda?: number;
        }[] & ({
            player_id?: number;
            score_sans_kda?: number;
        } & {
            player_id?: number;
            score_sans_kda?: number;
        } & { [K_3 in Exclude<keyof I_1["player_scores"][number], keyof CDOTAUserMsg_AllStarEvent_PlayerScore>]: never; })[] & { [K_4 in Exclude<keyof I_1["player_scores"], keyof {
            player_id?: number;
            score_sans_kda?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CDOTAUserMsg_AllStarEvent>]: never; }>(object: I_1): CDOTAUserMsg_AllStarEvent;
};
export declare const CDOTAUserMsg_AllStarEvent_PlayerScore: {
    fromJSON(object: any): CDOTAUserMsg_AllStarEvent_PlayerScore;
    toJSON(message: CDOTAUserMsg_AllStarEvent_PlayerScore): unknown;
    create<I extends {
        player_id?: number;
        score_sans_kda?: number;
    } & {
        player_id?: number;
        score_sans_kda?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_AllStarEvent_PlayerScore>]: never; }>(base?: I): CDOTAUserMsg_AllStarEvent_PlayerScore;
    fromPartial<I_1 extends {
        player_id?: number;
        score_sans_kda?: number;
    } & {
        player_id?: number;
        score_sans_kda?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_AllStarEvent_PlayerScore>]: never; }>(object: I_1): CDOTAUserMsg_AllStarEvent_PlayerScore;
};
export declare const CDOTAUserMsg_QueuedOrderRemoved: {
    fromJSON(object: any): CDOTAUserMsg_QueuedOrderRemoved;
    toJSON(message: CDOTAUserMsg_QueuedOrderRemoved): unknown;
    create<I extends {
        unit_order_sequence?: number[];
    } & {
        unit_order_sequence?: number[] & number[] & { [K in Exclude<keyof I["unit_order_sequence"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, "unit_order_sequence">]: never; }>(base?: I): CDOTAUserMsg_QueuedOrderRemoved;
    fromPartial<I_1 extends {
        unit_order_sequence?: number[];
    } & {
        unit_order_sequence?: number[] & number[] & { [K_2 in Exclude<keyof I_1["unit_order_sequence"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "unit_order_sequence">]: never; }>(object: I_1): CDOTAUserMsg_QueuedOrderRemoved;
};
export declare const CDOTAUserMsg_DebugChallenge: {
    fromJSON(object: any): CDOTAUserMsg_DebugChallenge;
    toJSON(message: CDOTAUserMsg_DebugChallenge): unknown;
    create<I extends {
        challenge_type?: number;
        challenge_query_id?: number;
        event_id?: number;
        instance_id?: number;
        challenge_var_0?: number;
        challenge_var_1?: number;
        challenge_max_rank?: number;
    } & {
        challenge_type?: number;
        challenge_query_id?: number;
        event_id?: number;
        instance_id?: number;
        challenge_var_0?: number;
        challenge_var_1?: number;
        challenge_max_rank?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_DebugChallenge>]: never; }>(base?: I): CDOTAUserMsg_DebugChallenge;
    fromPartial<I_1 extends {
        challenge_type?: number;
        challenge_query_id?: number;
        event_id?: number;
        instance_id?: number;
        challenge_var_0?: number;
        challenge_var_1?: number;
        challenge_max_rank?: number;
    } & {
        challenge_type?: number;
        challenge_query_id?: number;
        event_id?: number;
        instance_id?: number;
        challenge_var_0?: number;
        challenge_var_1?: number;
        challenge_max_rank?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_DebugChallenge>]: never; }>(object: I_1): CDOTAUserMsg_DebugChallenge;
};
export declare const CDOTAUserMsg_FoundNeutralItem: {
    fromJSON(object: any): CDOTAUserMsg_FoundNeutralItem;
    toJSON(message: CDOTAUserMsg_FoundNeutralItem): unknown;
    create<I extends {
        player_id?: number;
        item_ability_id?: number;
        item_tier?: number;
        tier_item_count?: number;
    } & {
        player_id?: number;
        item_ability_id?: number;
        item_tier?: number;
        tier_item_count?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_FoundNeutralItem>]: never; }>(base?: I): CDOTAUserMsg_FoundNeutralItem;
    fromPartial<I_1 extends {
        player_id?: number;
        item_ability_id?: number;
        item_tier?: number;
        tier_item_count?: number;
    } & {
        player_id?: number;
        item_ability_id?: number;
        item_tier?: number;
        tier_item_count?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_FoundNeutralItem>]: never; }>(object: I_1): CDOTAUserMsg_FoundNeutralItem;
};
export declare const CDOTAUserMsg_OutpostCaptured: {
    fromJSON(object: any): CDOTAUserMsg_OutpostCaptured;
    toJSON(message: CDOTAUserMsg_OutpostCaptured): unknown;
    create<I extends {
        outpost_entindex?: number;
        team_id?: number;
    } & {
        outpost_entindex?: number;
        team_id?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_OutpostCaptured>]: never; }>(base?: I): CDOTAUserMsg_OutpostCaptured;
    fromPartial<I_1 extends {
        outpost_entindex?: number;
        team_id?: number;
    } & {
        outpost_entindex?: number;
        team_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_OutpostCaptured>]: never; }>(object: I_1): CDOTAUserMsg_OutpostCaptured;
};
export declare const CDOTAUserMsg_OutpostGrantedXP: {
    fromJSON(object: any): CDOTAUserMsg_OutpostGrantedXP;
    toJSON(message: CDOTAUserMsg_OutpostGrantedXP): unknown;
    create<I extends {
        team_id?: number;
        xp_amount?: number;
    } & {
        team_id?: number;
        xp_amount?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_OutpostGrantedXP>]: never; }>(base?: I): CDOTAUserMsg_OutpostGrantedXP;
    fromPartial<I_1 extends {
        team_id?: number;
        xp_amount?: number;
    } & {
        team_id?: number;
        xp_amount?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_OutpostGrantedXP>]: never; }>(object: I_1): CDOTAUserMsg_OutpostGrantedXP;
};
export declare const CDOTAUserMsg_MoveCameraToUnit: {
    fromJSON(object: any): CDOTAUserMsg_MoveCameraToUnit;
    toJSON(message: CDOTAUserMsg_MoveCameraToUnit): unknown;
    create<I extends {
        unit_ehandle?: number;
    } & {
        unit_ehandle?: number;
    } & { [K in Exclude<keyof I, "unit_ehandle">]: never; }>(base?: I): CDOTAUserMsg_MoveCameraToUnit;
    fromPartial<I_1 extends {
        unit_ehandle?: number;
    } & {
        unit_ehandle?: number;
    } & { [K_1 in Exclude<keyof I_1, "unit_ehandle">]: never; }>(object: I_1): CDOTAUserMsg_MoveCameraToUnit;
};
export declare const CDOTAUserMsg_PauseMinigameData: {
    fromJSON(object: any): CDOTAUserMsg_PauseMinigameData;
    toJSON(message: CDOTAUserMsg_PauseMinigameData): unknown;
    create<I extends {
        data_bits?: {
            index?: number;
            data?: number;
            data_extra?: string;
        }[];
    } & {
        data_bits?: {
            index?: number;
            data?: number;
            data_extra?: string;
        }[] & ({
            index?: number;
            data?: number;
            data_extra?: string;
        } & {
            index?: number;
            data?: number;
            data_extra?: string;
        } & { [K in Exclude<keyof I["data_bits"][number], keyof CDOTAUserMsg_PauseMinigameData_DataBit>]: never; })[] & { [K_1 in Exclude<keyof I["data_bits"], keyof {
            index?: number;
            data?: number;
            data_extra?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "data_bits">]: never; }>(base?: I): CDOTAUserMsg_PauseMinigameData;
    fromPartial<I_1 extends {
        data_bits?: {
            index?: number;
            data?: number;
            data_extra?: string;
        }[];
    } & {
        data_bits?: {
            index?: number;
            data?: number;
            data_extra?: string;
        }[] & ({
            index?: number;
            data?: number;
            data_extra?: string;
        } & {
            index?: number;
            data?: number;
            data_extra?: string;
        } & { [K_3 in Exclude<keyof I_1["data_bits"][number], keyof CDOTAUserMsg_PauseMinigameData_DataBit>]: never; })[] & { [K_4 in Exclude<keyof I_1["data_bits"], keyof {
            index?: number;
            data?: number;
            data_extra?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "data_bits">]: never; }>(object: I_1): CDOTAUserMsg_PauseMinigameData;
};
export declare const CDOTAUserMsg_PauseMinigameData_DataBit: {
    fromJSON(object: any): CDOTAUserMsg_PauseMinigameData_DataBit;
    toJSON(message: CDOTAUserMsg_PauseMinigameData_DataBit): unknown;
    create<I extends {
        index?: number;
        data?: number;
        data_extra?: string;
    } & {
        index?: number;
        data?: number;
        data_extra?: string;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_PauseMinigameData_DataBit>]: never; }>(base?: I): CDOTAUserMsg_PauseMinigameData_DataBit;
    fromPartial<I_1 extends {
        index?: number;
        data?: number;
        data_extra?: string;
    } & {
        index?: number;
        data?: number;
        data_extra?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_PauseMinigameData_DataBit>]: never; }>(object: I_1): CDOTAUserMsg_PauseMinigameData_DataBit;
};
export declare const CDOTAUserMsg_VersusScene_PlayerBehavior: {
    fromJSON(object: any): CDOTAUserMsg_VersusScene_PlayerBehavior;
    toJSON(message: CDOTAUserMsg_VersusScene_PlayerBehavior): unknown;
    create<I extends {
        player_id?: number;
        behavior?: EDOTAVersusScenePlayerBehavior;
        play_activity?: {
            activities?: {
                activity?: string;
                disable_auto_kill?: boolean;
                force_looping?: boolean;
            }[];
            playback_rate?: number;
        };
        chat_wheel?: {
            chat_message_id?: number;
            emoticon_id?: number;
        };
        playback_rate?: {
            rate?: number;
        };
    } & {
        player_id?: number;
        behavior?: EDOTAVersusScenePlayerBehavior;
        play_activity?: {
            activities?: {
                activity?: string;
                disable_auto_kill?: boolean;
                force_looping?: boolean;
            }[];
            playback_rate?: number;
        } & {
            activities?: {
                activity?: string;
                disable_auto_kill?: boolean;
                force_looping?: boolean;
            }[] & ({
                activity?: string;
                disable_auto_kill?: boolean;
                force_looping?: boolean;
            } & {
                activity?: string;
                disable_auto_kill?: boolean;
                force_looping?: boolean;
            } & { [K in Exclude<keyof I["play_activity"]["activities"][number], keyof import("./dota_commonmessages").VersusScene_PlayActivity_ActivityInfo>]: never; })[] & { [K_1 in Exclude<keyof I["play_activity"]["activities"], keyof {
                activity?: string;
                disable_auto_kill?: boolean;
                force_looping?: boolean;
            }[]>]: never; };
            playback_rate?: number;
        } & { [K_2 in Exclude<keyof I["play_activity"], keyof VersusScene_PlayActivity>]: never; };
        chat_wheel?: {
            chat_message_id?: number;
            emoticon_id?: number;
        } & {
            chat_message_id?: number;
            emoticon_id?: number;
        } & { [K_3 in Exclude<keyof I["chat_wheel"], keyof VersusScene_ChatWheel>]: never; };
        playback_rate?: {
            rate?: number;
        } & {
            rate?: number;
        } & { [K_4 in Exclude<keyof I["playback_rate"], "rate">]: never; };
    } & { [K_5 in Exclude<keyof I, keyof CDOTAUserMsg_VersusScene_PlayerBehavior>]: never; }>(base?: I): CDOTAUserMsg_VersusScene_PlayerBehavior;
    fromPartial<I_1 extends {
        player_id?: number;
        behavior?: EDOTAVersusScenePlayerBehavior;
        play_activity?: {
            activities?: {
                activity?: string;
                disable_auto_kill?: boolean;
                force_looping?: boolean;
            }[];
            playback_rate?: number;
        };
        chat_wheel?: {
            chat_message_id?: number;
            emoticon_id?: number;
        };
        playback_rate?: {
            rate?: number;
        };
    } & {
        player_id?: number;
        behavior?: EDOTAVersusScenePlayerBehavior;
        play_activity?: {
            activities?: {
                activity?: string;
                disable_auto_kill?: boolean;
                force_looping?: boolean;
            }[];
            playback_rate?: number;
        } & {
            activities?: {
                activity?: string;
                disable_auto_kill?: boolean;
                force_looping?: boolean;
            }[] & ({
                activity?: string;
                disable_auto_kill?: boolean;
                force_looping?: boolean;
            } & {
                activity?: string;
                disable_auto_kill?: boolean;
                force_looping?: boolean;
            } & { [K_6 in Exclude<keyof I_1["play_activity"]["activities"][number], keyof import("./dota_commonmessages").VersusScene_PlayActivity_ActivityInfo>]: never; })[] & { [K_7 in Exclude<keyof I_1["play_activity"]["activities"], keyof {
                activity?: string;
                disable_auto_kill?: boolean;
                force_looping?: boolean;
            }[]>]: never; };
            playback_rate?: number;
        } & { [K_8 in Exclude<keyof I_1["play_activity"], keyof VersusScene_PlayActivity>]: never; };
        chat_wheel?: {
            chat_message_id?: number;
            emoticon_id?: number;
        } & {
            chat_message_id?: number;
            emoticon_id?: number;
        } & { [K_9 in Exclude<keyof I_1["chat_wheel"], keyof VersusScene_ChatWheel>]: never; };
        playback_rate?: {
            rate?: number;
        } & {
            rate?: number;
        } & { [K_10 in Exclude<keyof I_1["playback_rate"], "rate">]: never; };
    } & { [K_11 in Exclude<keyof I_1, keyof CDOTAUserMsg_VersusScene_PlayerBehavior>]: never; }>(object: I_1): CDOTAUserMsg_VersusScene_PlayerBehavior;
};
export declare const CDOTAUserMsg_QoP_ArcanaSummary: {
    fromJSON(object: any): CDOTAUserMsg_QoP_ArcanaSummary;
    toJSON(message: CDOTAUserMsg_QoP_ArcanaSummary): unknown;
    create<I extends {
        ehandle?: number;
        arcana_level?: number;
        players_hit?: number;
        players_killed?: number;
    } & {
        ehandle?: number;
        arcana_level?: number;
        players_hit?: number;
        players_killed?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_QoP_ArcanaSummary>]: never; }>(base?: I): CDOTAUserMsg_QoP_ArcanaSummary;
    fromPartial<I_1 extends {
        ehandle?: number;
        arcana_level?: number;
        players_hit?: number;
        players_killed?: number;
    } & {
        ehandle?: number;
        arcana_level?: number;
        players_hit?: number;
        players_killed?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_QoP_ArcanaSummary>]: never; }>(object: I_1): CDOTAUserMsg_QoP_ArcanaSummary;
};
export declare const CDOTAUserMsg_HotPotato_Created: {
    fromJSON(object: any): CDOTAUserMsg_HotPotato_Created;
    toJSON(message: CDOTAUserMsg_HotPotato_Created): unknown;
    create<I extends {
        player_id_1?: number;
        player_id_2?: number;
    } & {
        player_id_1?: number;
        player_id_2?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_HotPotato_Created>]: never; }>(base?: I): CDOTAUserMsg_HotPotato_Created;
    fromPartial<I_1 extends {
        player_id_1?: number;
        player_id_2?: number;
    } & {
        player_id_1?: number;
        player_id_2?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_HotPotato_Created>]: never; }>(object: I_1): CDOTAUserMsg_HotPotato_Created;
};
export declare const CDOTAUserMsg_HotPotato_Exploded: {
    fromJSON(object: any): CDOTAUserMsg_HotPotato_Exploded;
    toJSON(message: CDOTAUserMsg_HotPotato_Exploded): unknown;
    create<I extends {
        player_id?: number;
    } & {
        player_id?: number;
    } & { [K in Exclude<keyof I, "player_id">]: never; }>(base?: I): CDOTAUserMsg_HotPotato_Exploded;
    fromPartial<I_1 extends {
        player_id?: number;
    } & {
        player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "player_id">]: never; }>(object: I_1): CDOTAUserMsg_HotPotato_Exploded;
};
export declare const CDOTAUserMsg_WK_Arcana_Progress: {
    fromJSON(object: any): CDOTAUserMsg_WK_Arcana_Progress;
    toJSON(message: CDOTAUserMsg_WK_Arcana_Progress): unknown;
    create<I extends {
        ehandle?: number;
        arcana_level?: number;
        hero_id?: number;
    } & {
        ehandle?: number;
        arcana_level?: number;
        hero_id?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_WK_Arcana_Progress>]: never; }>(base?: I): CDOTAUserMsg_WK_Arcana_Progress;
    fromPartial<I_1 extends {
        ehandle?: number;
        arcana_level?: number;
        hero_id?: number;
    } & {
        ehandle?: number;
        arcana_level?: number;
        hero_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_WK_Arcana_Progress>]: never; }>(object: I_1): CDOTAUserMsg_WK_Arcana_Progress;
};
export declare const CDOTAUserMsg_GuildChallenge_Progress: {
    fromJSON(object: any): CDOTAUserMsg_GuildChallenge_Progress;
    toJSON(message: CDOTAUserMsg_GuildChallenge_Progress): unknown;
    create<I extends {
        player_progress?: {
            player_id?: number;
            progress?: number;
        }[];
        guild_id?: number;
        challenge_instance_id?: number;
        challenge_parameter?: number;
        challenge_type?: CDOTAUserMsg_GuildChallenge_Progress_EChallengeType;
        challenge_progress_at_start?: number;
        complete?: boolean;
    } & {
        player_progress?: {
            player_id?: number;
            progress?: number;
        }[] & ({
            player_id?: number;
            progress?: number;
        } & {
            player_id?: number;
            progress?: number;
        } & { [K in Exclude<keyof I["player_progress"][number], keyof CDOTAUserMsg_GuildChallenge_Progress_PlayerProgress>]: never; })[] & { [K_1 in Exclude<keyof I["player_progress"], keyof {
            player_id?: number;
            progress?: number;
        }[]>]: never; };
        guild_id?: number;
        challenge_instance_id?: number;
        challenge_parameter?: number;
        challenge_type?: CDOTAUserMsg_GuildChallenge_Progress_EChallengeType;
        challenge_progress_at_start?: number;
        complete?: boolean;
    } & { [K_2 in Exclude<keyof I, keyof CDOTAUserMsg_GuildChallenge_Progress>]: never; }>(base?: I): CDOTAUserMsg_GuildChallenge_Progress;
    fromPartial<I_1 extends {
        player_progress?: {
            player_id?: number;
            progress?: number;
        }[];
        guild_id?: number;
        challenge_instance_id?: number;
        challenge_parameter?: number;
        challenge_type?: CDOTAUserMsg_GuildChallenge_Progress_EChallengeType;
        challenge_progress_at_start?: number;
        complete?: boolean;
    } & {
        player_progress?: {
            player_id?: number;
            progress?: number;
        }[] & ({
            player_id?: number;
            progress?: number;
        } & {
            player_id?: number;
            progress?: number;
        } & { [K_3 in Exclude<keyof I_1["player_progress"][number], keyof CDOTAUserMsg_GuildChallenge_Progress_PlayerProgress>]: never; })[] & { [K_4 in Exclude<keyof I_1["player_progress"], keyof {
            player_id?: number;
            progress?: number;
        }[]>]: never; };
        guild_id?: number;
        challenge_instance_id?: number;
        challenge_parameter?: number;
        challenge_type?: CDOTAUserMsg_GuildChallenge_Progress_EChallengeType;
        challenge_progress_at_start?: number;
        complete?: boolean;
    } & { [K_5 in Exclude<keyof I_1, keyof CDOTAUserMsg_GuildChallenge_Progress>]: never; }>(object: I_1): CDOTAUserMsg_GuildChallenge_Progress;
};
export declare const CDOTAUserMsg_GuildChallenge_Progress_PlayerProgress: {
    fromJSON(object: any): CDOTAUserMsg_GuildChallenge_Progress_PlayerProgress;
    toJSON(message: CDOTAUserMsg_GuildChallenge_Progress_PlayerProgress): unknown;
    create<I extends {
        player_id?: number;
        progress?: number;
    } & {
        player_id?: number;
        progress?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_GuildChallenge_Progress_PlayerProgress>]: never; }>(base?: I): CDOTAUserMsg_GuildChallenge_Progress_PlayerProgress;
    fromPartial<I_1 extends {
        player_id?: number;
        progress?: number;
    } & {
        player_id?: number;
        progress?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_GuildChallenge_Progress_PlayerProgress>]: never; }>(object: I_1): CDOTAUserMsg_GuildChallenge_Progress_PlayerProgress;
};
export declare const CDOTAUserMsg_WRArcanaProgress: {
    fromJSON(object: any): CDOTAUserMsg_WRArcanaProgress;
    toJSON(message: CDOTAUserMsg_WRArcanaProgress): unknown;
    create<I extends {
        ehandle?: number;
        target_ehandle?: number;
        arrows_landed?: number;
        damage_dealt?: number;
        target_hp?: number;
        target_max_hp?: number;
        arcana_level?: number;
    } & {
        ehandle?: number;
        target_ehandle?: number;
        arrows_landed?: number;
        damage_dealt?: number;
        target_hp?: number;
        target_max_hp?: number;
        arcana_level?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_WRArcanaProgress>]: never; }>(base?: I): CDOTAUserMsg_WRArcanaProgress;
    fromPartial<I_1 extends {
        ehandle?: number;
        target_ehandle?: number;
        arrows_landed?: number;
        damage_dealt?: number;
        target_hp?: number;
        target_max_hp?: number;
        arcana_level?: number;
    } & {
        ehandle?: number;
        target_ehandle?: number;
        arrows_landed?: number;
        damage_dealt?: number;
        target_hp?: number;
        target_max_hp?: number;
        arcana_level?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_WRArcanaProgress>]: never; }>(object: I_1): CDOTAUserMsg_WRArcanaProgress;
};
export declare const CDOTAUserMsg_WRArcanaSummary: {
    fromJSON(object: any): CDOTAUserMsg_WRArcanaSummary;
    toJSON(message: CDOTAUserMsg_WRArcanaSummary): unknown;
    create<I extends {
        ehandle?: number;
        target_ehandle?: number;
        arrows_landed?: number;
        damage_dealt?: number;
        target_hp?: number;
        target_max_hp?: number;
        arcana_level?: number;
        success?: boolean;
    } & {
        ehandle?: number;
        target_ehandle?: number;
        arrows_landed?: number;
        damage_dealt?: number;
        target_hp?: number;
        target_max_hp?: number;
        arcana_level?: number;
        success?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_WRArcanaSummary>]: never; }>(base?: I): CDOTAUserMsg_WRArcanaSummary;
    fromPartial<I_1 extends {
        ehandle?: number;
        target_ehandle?: number;
        arrows_landed?: number;
        damage_dealt?: number;
        target_hp?: number;
        target_max_hp?: number;
        arcana_level?: number;
        success?: boolean;
    } & {
        ehandle?: number;
        target_ehandle?: number;
        arrows_landed?: number;
        damage_dealt?: number;
        target_hp?: number;
        target_max_hp?: number;
        arcana_level?: number;
        success?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_WRArcanaSummary>]: never; }>(object: I_1): CDOTAUserMsg_WRArcanaSummary;
};
export declare const CDOTAUserMsg_EmptyItemSlotAlert: {
    fromJSON(object: any): CDOTAUserMsg_EmptyItemSlotAlert;
    toJSON(message: CDOTAUserMsg_EmptyItemSlotAlert): unknown;
    create<I extends {
        source_player_id?: number;
        target_player_id?: number;
        slot_index?: number;
        cooldown_seconds?: number;
    } & {
        source_player_id?: number;
        target_player_id?: number;
        slot_index?: number;
        cooldown_seconds?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_EmptyItemSlotAlert>]: never; }>(base?: I): CDOTAUserMsg_EmptyItemSlotAlert;
    fromPartial<I_1 extends {
        source_player_id?: number;
        target_player_id?: number;
        slot_index?: number;
        cooldown_seconds?: number;
    } & {
        source_player_id?: number;
        target_player_id?: number;
        slot_index?: number;
        cooldown_seconds?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_EmptyItemSlotAlert>]: never; }>(object: I_1): CDOTAUserMsg_EmptyItemSlotAlert;
};
export declare const CDOTAUserMsg_AghsStatusAlert: {
    fromJSON(object: any): CDOTAUserMsg_AghsStatusAlert;
    toJSON(message: CDOTAUserMsg_AghsStatusAlert): unknown;
    create<I extends {
        source_player_id?: number;
        target_player_id?: number;
        target_entindex?: number;
        alert_type?: number;
        has_scepter?: boolean;
        has_shard?: boolean;
    } & {
        source_player_id?: number;
        target_player_id?: number;
        target_entindex?: number;
        alert_type?: number;
        has_scepter?: boolean;
        has_shard?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_AghsStatusAlert>]: never; }>(base?: I): CDOTAUserMsg_AghsStatusAlert;
    fromPartial<I_1 extends {
        source_player_id?: number;
        target_player_id?: number;
        target_entindex?: number;
        alert_type?: number;
        has_scepter?: boolean;
        has_shard?: boolean;
    } & {
        source_player_id?: number;
        target_player_id?: number;
        target_entindex?: number;
        alert_type?: number;
        has_scepter?: boolean;
        has_shard?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_AghsStatusAlert>]: never; }>(object: I_1): CDOTAUserMsg_AghsStatusAlert;
};
export declare const CDOTAUserMsg_MutedPlayers: {
    fromJSON(object: any): CDOTAUserMsg_MutedPlayers;
    toJSON(message: CDOTAUserMsg_MutedPlayers): unknown;
    create<I extends {
        text_muted_player_ids?: number[];
        voice_muted_player_ids?: number[];
    } & {
        text_muted_player_ids?: number[] & number[] & { [K in Exclude<keyof I["text_muted_player_ids"], keyof number[]>]: never; };
        voice_muted_player_ids?: number[] & number[] & { [K_1 in Exclude<keyof I["voice_muted_player_ids"], keyof number[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CDOTAUserMsg_MutedPlayers>]: never; }>(base?: I): CDOTAUserMsg_MutedPlayers;
    fromPartial<I_1 extends {
        text_muted_player_ids?: number[];
        voice_muted_player_ids?: number[];
    } & {
        text_muted_player_ids?: number[] & number[] & { [K_3 in Exclude<keyof I_1["text_muted_player_ids"], keyof number[]>]: never; };
        voice_muted_player_ids?: number[] & number[] & { [K_4 in Exclude<keyof I_1["voice_muted_player_ids"], keyof number[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CDOTAUserMsg_MutedPlayers>]: never; }>(object: I_1): CDOTAUserMsg_MutedPlayers;
};
export declare const CDOTAUserMsg_ContextualTip: {
    fromJSON(object: any): CDOTAUserMsg_ContextualTip;
    toJSON(message: CDOTAUserMsg_ContextualTip): unknown;
    create<I extends {
        tip_id?: number;
        referenced_abilities?: string[];
        referenced_units?: string[];
        panorama_classes?: string[];
        force_annotation?: boolean;
        variant?: number;
        int_param?: number;
        int_param2?: number;
        float_param?: number;
        float_param2?: number;
        string_param?: string;
        string_param2?: string;
        tip_text_override?: string;
        tip_annotation_override?: string;
        panorama_snippet?: string;
    } & {
        tip_id?: number;
        referenced_abilities?: string[] & string[] & { [K in Exclude<keyof I["referenced_abilities"], keyof string[]>]: never; };
        referenced_units?: string[] & string[] & { [K_1 in Exclude<keyof I["referenced_units"], keyof string[]>]: never; };
        panorama_classes?: string[] & string[] & { [K_2 in Exclude<keyof I["panorama_classes"], keyof string[]>]: never; };
        force_annotation?: boolean;
        variant?: number;
        int_param?: number;
        int_param2?: number;
        float_param?: number;
        float_param2?: number;
        string_param?: string;
        string_param2?: string;
        tip_text_override?: string;
        tip_annotation_override?: string;
        panorama_snippet?: string;
    } & { [K_3 in Exclude<keyof I, keyof CDOTAUserMsg_ContextualTip>]: never; }>(base?: I): CDOTAUserMsg_ContextualTip;
    fromPartial<I_1 extends {
        tip_id?: number;
        referenced_abilities?: string[];
        referenced_units?: string[];
        panorama_classes?: string[];
        force_annotation?: boolean;
        variant?: number;
        int_param?: number;
        int_param2?: number;
        float_param?: number;
        float_param2?: number;
        string_param?: string;
        string_param2?: string;
        tip_text_override?: string;
        tip_annotation_override?: string;
        panorama_snippet?: string;
    } & {
        tip_id?: number;
        referenced_abilities?: string[] & string[] & { [K_4 in Exclude<keyof I_1["referenced_abilities"], keyof string[]>]: never; };
        referenced_units?: string[] & string[] & { [K_5 in Exclude<keyof I_1["referenced_units"], keyof string[]>]: never; };
        panorama_classes?: string[] & string[] & { [K_6 in Exclude<keyof I_1["panorama_classes"], keyof string[]>]: never; };
        force_annotation?: boolean;
        variant?: number;
        int_param?: number;
        int_param2?: number;
        float_param?: number;
        float_param2?: number;
        string_param?: string;
        string_param2?: string;
        tip_text_override?: string;
        tip_annotation_override?: string;
        panorama_snippet?: string;
    } & { [K_7 in Exclude<keyof I_1, keyof CDOTAUserMsg_ContextualTip>]: never; }>(object: I_1): CDOTAUserMsg_ContextualTip;
};
export declare const CDOTAUserMsg_ChatMessage: {
    fromJSON(object: any): CDOTAUserMsg_ChatMessage;
    toJSON(message: CDOTAUserMsg_ChatMessage): unknown;
    create<I extends {
        source_player_id?: number;
        channel_type?: number;
        message_text?: string;
    } & {
        source_player_id?: number;
        channel_type?: number;
        message_text?: string;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_ChatMessage>]: never; }>(base?: I): CDOTAUserMsg_ChatMessage;
    fromPartial<I_1 extends {
        source_player_id?: number;
        channel_type?: number;
        message_text?: string;
    } & {
        source_player_id?: number;
        channel_type?: number;
        message_text?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_ChatMessage>]: never; }>(object: I_1): CDOTAUserMsg_ChatMessage;
};
export declare const CDOTAUserMsg_RockPaperScissorsStarted: {
    fromJSON(object: any): CDOTAUserMsg_RockPaperScissorsStarted;
    toJSON(message: CDOTAUserMsg_RockPaperScissorsStarted): unknown;
    create<I extends {
        player_id_source?: number;
        player_id_target?: number;
    } & {
        player_id_source?: number;
        player_id_target?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_RockPaperScissorsStarted>]: never; }>(base?: I): CDOTAUserMsg_RockPaperScissorsStarted;
    fromPartial<I_1 extends {
        player_id_source?: number;
        player_id_target?: number;
    } & {
        player_id_source?: number;
        player_id_target?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_RockPaperScissorsStarted>]: never; }>(object: I_1): CDOTAUserMsg_RockPaperScissorsStarted;
};
export declare const CDOTAUserMsg_RockPaperScissorsFinished: {
    fromJSON(object: any): CDOTAUserMsg_RockPaperScissorsFinished;
    toJSON(message: CDOTAUserMsg_RockPaperScissorsFinished): unknown;
    create<I extends {
        player_id_1?: number;
        player_id_2?: number;
        player_1_choice?: number;
        player_2_choice?: number;
    } & {
        player_id_1?: number;
        player_id_2?: number;
        player_1_choice?: number;
        player_2_choice?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_RockPaperScissorsFinished>]: never; }>(base?: I): CDOTAUserMsg_RockPaperScissorsFinished;
    fromPartial<I_1 extends {
        player_id_1?: number;
        player_id_2?: number;
        player_1_choice?: number;
        player_2_choice?: number;
    } & {
        player_id_1?: number;
        player_id_2?: number;
        player_1_choice?: number;
        player_2_choice?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_RockPaperScissorsFinished>]: never; }>(object: I_1): CDOTAUserMsg_RockPaperScissorsFinished;
};
export declare const CDOTAUserMsg_DuelOpponentKilled: {
    fromJSON(object: any): CDOTAUserMsg_DuelOpponentKilled;
    toJSON(message: CDOTAUserMsg_DuelOpponentKilled): unknown;
    create<I extends {
        player_id_winner?: number;
        player_id_loser?: number;
    } & {
        player_id_winner?: number;
        player_id_loser?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_DuelOpponentKilled>]: never; }>(base?: I): CDOTAUserMsg_DuelOpponentKilled;
    fromPartial<I_1 extends {
        player_id_winner?: number;
        player_id_loser?: number;
    } & {
        player_id_winner?: number;
        player_id_loser?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_DuelOpponentKilled>]: never; }>(object: I_1): CDOTAUserMsg_DuelOpponentKilled;
};
export declare const CDOTAUserMsg_DuelAccepted: {
    fromJSON(object: any): CDOTAUserMsg_DuelAccepted;
    toJSON(message: CDOTAUserMsg_DuelAccepted): unknown;
    create<I extends {
        player_id_1?: number;
        player_id_2?: number;
    } & {
        player_id_1?: number;
        player_id_2?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_DuelAccepted>]: never; }>(base?: I): CDOTAUserMsg_DuelAccepted;
    fromPartial<I_1 extends {
        player_id_1?: number;
        player_id_2?: number;
    } & {
        player_id_1?: number;
        player_id_2?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_DuelAccepted>]: never; }>(object: I_1): CDOTAUserMsg_DuelAccepted;
};
export declare const CDOTAUserMsg_DuelRequested: {
    fromJSON(object: any): CDOTAUserMsg_DuelRequested;
    toJSON(message: CDOTAUserMsg_DuelRequested): unknown;
    create<I extends {
        player_id_requestor?: number;
    } & {
        player_id_requestor?: number;
    } & { [K in Exclude<keyof I, "player_id_requestor">]: never; }>(base?: I): CDOTAUserMsg_DuelRequested;
    fromPartial<I_1 extends {
        player_id_requestor?: number;
    } & {
        player_id_requestor?: number;
    } & { [K_1 in Exclude<keyof I_1, "player_id_requestor">]: never; }>(object: I_1): CDOTAUserMsg_DuelRequested;
};
export declare const CDOTAUserMsg_MuertaReleaseEvent_AssignedTargetKilled: {
    fromJSON(object: any): CDOTAUserMsg_MuertaReleaseEvent_AssignedTargetKilled;
    toJSON(message: CDOTAUserMsg_MuertaReleaseEvent_AssignedTargetKilled): unknown;
    create<I extends {
        player_id_killer?: number;
        player_id_target?: number;
        points?: number;
        points_total?: number;
        last_hit?: boolean;
    } & {
        player_id_killer?: number;
        player_id_target?: number;
        points?: number;
        points_total?: number;
        last_hit?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAUserMsg_MuertaReleaseEvent_AssignedTargetKilled>]: never; }>(base?: I): CDOTAUserMsg_MuertaReleaseEvent_AssignedTargetKilled;
    fromPartial<I_1 extends {
        player_id_killer?: number;
        player_id_target?: number;
        points?: number;
        points_total?: number;
        last_hit?: boolean;
    } & {
        player_id_killer?: number;
        player_id_target?: number;
        points?: number;
        points_total?: number;
        last_hit?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAUserMsg_MuertaReleaseEvent_AssignedTargetKilled>]: never; }>(object: I_1): CDOTAUserMsg_MuertaReleaseEvent_AssignedTargetKilled;
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
