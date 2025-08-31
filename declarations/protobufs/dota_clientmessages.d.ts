import { CDOTAMsg_DismissAllStatPopups, CDOTAMsg_ItemAlert, CDOTAMsg_LocationPing, CDOTAMsg_MapLine, CDOTAMsg_SendStatPopup, CDOTAMsg_UnitOrder, CDOTAMsg_WorldLine, EDOTAVersusScenePlayerBehavior, VersusScene_ChatWheel, VersusScene_PlayActivity, VersusScene_PlaybackRate } from "./dota_commonmessages";
import { EEvent, EOverwatchReportReason } from "./dota_shared_enums";
export declare const protobufPackage = "";
export declare enum EDotaClientMessages {
    DOTA_CM_MapLine = 301,
    DOTA_CM_AspectRatio = 302,
    DOTA_CM_MapPing = 303,
    DOTA_CM_UnitsAutoAttack = 304,
    DOTA_CM_SearchString = 307,
    DOTA_CM_Pause = 308,
    DOTA_CM_ShopViewMode = 309,
    DOTA_CM_SetUnitShareFlag = 310,
    DOTA_CM_SwapRequest = 311,
    DOTA_CM_SwapAccept = 312,
    DOTA_CM_WorldLine = 313,
    DOTA_CM_RequestGraphUpdate = 314,
    DOTA_CM_ItemAlert = 315,
    DOTA_CM_ChatWheel = 316,
    DOTA_CM_SendStatPopup = 317,
    DOTA_CM_BeginLastHitChallenge = 318,
    DOTA_CM_UpdateQuickBuy = 319,
    DOTA_CM_UpdateCoachListen = 320,
    DOTA_CM_CoachHUDPing = 321,
    DOTA_CM_RecordVote = 322,
    DOTA_CM_UnitsAutoAttackAfterSpell = 323,
    DOTA_CM_WillPurchaseAlert = 324,
    DOTA_CM_PlayerShowCase = 325,
    DOTA_CM_TeleportRequiresHalt = 326,
    DOTA_CM_CameraZoomAmount = 327,
    DOTA_CM_BroadcasterUsingCamerman = 328,
    DOTA_CM_BroadcasterUsingAssistedCameraOperator = 329,
    DOTA_CM_EnemyItemAlert = 330,
    DOTA_CM_FreeInventory = 331,
    DOTA_CM_BuyBackStateAlert = 332,
    DOTA_CM_QuickBuyAlert = 333,
    DOTA_CM_HeroStatueLike = 334,
    DOTA_CM_ModifierAlert = 335,
    DOTA_CM_TeamShowcaseEditor = 336,
    DOTA_CM_HPManaAlert = 337,
    DOTA_CM_GlyphAlert = 338,
    DOTA_CM_TeamShowcaseClientData = 339,
    DOTA_CM_PlayTeamShowcase = 340,
    DOTA_CM_EventCNY2015Cmd = 341,
    DOTA_CM_FillEmptySlotsWithBots = 342,
    DOTA_CM_DemoHero = 343,
    DOTA_CM_AbilityLearnModeToggled = 344,
    DOTA_CM_AbilityStartUse = 345,
    DOTA_CM_ChallengeSelect = 346,
    DOTA_CM_ChallengeReroll = 347,
    DOTA_CM_ClickedBuff = 348,
    DOTA_CM_CoinWager = 349,
    DOTA_CM_ExecuteOrders = 350,
    DOTA_CM_XPAlert = 351,
    DOTA_CM_EventPointsTip = 353,
    DOTA_CM_KillMyHero = 355,
    DOTA_CM_QuestStatus = 356,
    DOTA_CM_ToggleAutoattack = 357,
    DOTA_CM_SpecialAbility = 358,
    DOTA_CM_KillcamDamageTaken = 359,
    DOTA_CM_SetEnemyStartingPosition = 360,
    DOTA_CM_SetDesiredWardPlacement = 361,
    DOTA_CM_RollDice = 362,
    DOTA_CM_FlipCoin = 363,
    DOTA_CM_RequestItemSuggestions = 364,
    DOTA_CM_MakeTeamCaptain = 365,
    DOTA_CM_CoinWagerToken = 366,
    DOTA_CM_RankWager = 367,
    DOTA_CM_DismissAllStatPopups = 368,
    DOTA_CM_HelpTipSystemStateChanged = 369,
    DOTA_CM_ChannelRequiresHalt = 370,
    DOTA_CM_RequestBulkCombatLog = 371,
    DOTA_CM_AbilityDraftRequestAbility = 372,
    DOTA_CM_GuideSelectOption = 373,
    DOTA_CM_GuideSelected = 374,
    DOTA_CM_DamageReport = 375,
    DOTA_CM_SalutePlayer = 376,
    DOTA_CM_SprayWheel = 377,
    DOTA_CM_TipAlert = 378,
    DOTA_CM_EmptyTeleportAlert = 379,
    DOTA_CM_RadarAlert = 380,
    DOTA_CM_TalentTreeAlert = 381,
    DOTA_CM_SetCavernMapVariant = 382,
    DOTA_CM_PauseGameOrder = 383,
    DOTA_CM_VersusScene_PlayerBehavior = 384,
    DOTA_CM_PlayerBounty = 385,
    DOTA_CM_PlayerBountyCancel = 386,
    DOTA_CM_EmptyItemSlotAlert = 388,
    DOTA_CM_AddOverwatchReportMarker = 389,
    DOTA_CM_AghsStatusAlert = 390,
    DOTA_CM_PerfReport = 391,
    DOTA_CM_ContextualTips_Subscribe = 393,
    DOTA_CM_ChatMessage = 394,
    DOTA_CM_AddCommunicationsReportMarker = 395,
    DOTA_CM_AddCommunicationsBlockMarker = 396,
    DOTA_CM_NeutralCampAlert = 397,
    DOTA_CM_DuelAccepted = 398,
    UNRECOGNIZED = -1
}
export declare function eDotaClientMessagesFromJSON(object: any): EDotaClientMessages;
export declare function eDotaClientMessagesToJSON(object: EDotaClientMessages): string;
export interface CDOTAClientMsg_MapPing {
    location_ping: CDOTAMsg_LocationPing | undefined;
}
export interface CDOTAClientMsg_ItemAlert {
    item_alert: CDOTAMsg_ItemAlert | undefined;
}
export interface CDOTAClientMsg_EnemyItemAlert {
    item_entindex: number;
    rune_type: number;
    item_level: number;
    primary_charges: number;
    secondary_charges: number;
}
export interface CDOTAClientMsg_ModifierAlert {
    buff_internal_index: number;
    target_entindex: number;
}
export interface CDOTAClientMsg_ClickedBuff {
    buff_internal_index: number;
    target_entindex: number;
}
export interface CDOTAClientMsg_HPManaAlert {
    target_entindex: number;
    show_raw_values: boolean;
}
export interface CDOTAClientMsg_NeutralCampAlert {
    spawner_entindex: number;
    unit_entindex: number;
    stack_request: boolean;
}
export interface CDOTAClientMsg_GlyphAlert {
    negative: boolean;
}
export interface CDOTAClientMsg_RadarAlert {
    negative: boolean;
}
export interface CDOTAClientMsg_MapLine {
    mapline: CDOTAMsg_MapLine | undefined;
}
export interface CDOTAClientMsg_AspectRatio {
    ratio: number;
}
export interface CDOTAClientMsg_UnitsAutoAttackMode {
    mode: CDOTAClientMsg_UnitsAutoAttackMode_EMode;
    unit_type: CDOTAClientMsg_UnitsAutoAttackMode_EUnitType;
}
export declare enum CDOTAClientMsg_UnitsAutoAttackMode_EMode {
    INVALID = -1,
    NEVER = 0,
    AFTER_SPELLCAST = 1,
    ALWAYS = 2,
    UNRECOGNIZED = -1
}
export declare function cDOTAClientMsg_UnitsAutoAttackMode_EModeFromJSON(object: any): CDOTAClientMsg_UnitsAutoAttackMode_EMode;
export declare function cDOTAClientMsg_UnitsAutoAttackMode_EModeToJSON(object: CDOTAClientMsg_UnitsAutoAttackMode_EMode): string;
export declare enum CDOTAClientMsg_UnitsAutoAttackMode_EUnitType {
    NORMAL = 0,
    SUMMONED = 1,
    UNRECOGNIZED = -1
}
export declare function cDOTAClientMsg_UnitsAutoAttackMode_EUnitTypeFromJSON(object: any): CDOTAClientMsg_UnitsAutoAttackMode_EUnitType;
export declare function cDOTAClientMsg_UnitsAutoAttackMode_EUnitTypeToJSON(object: CDOTAClientMsg_UnitsAutoAttackMode_EUnitType): string;
export interface CDOTAClientMsg_UnitsAutoAttackAfterSpell {
    enabled: boolean;
}
export interface CDOTAClientMsg_TeleportRequiresHalt {
    enabled: boolean;
}
export interface CDOTAClientMsg_ChannelRequiresHalt {
    enabled: boolean;
}
export interface CDOTAClientMsg_SearchString {
    search: string;
}
export interface CDOTAClientMsg_Pause {
}
export interface CDOTAClientMsg_ShopViewMode {
    mode: number;
}
export interface CDOTAClientMsg_SetUnitShareFlag {
    player_id: number;
    flag: number;
    state: boolean;
}
export interface CDOTAClientMsg_SwapRequest {
    player_id: number;
}
export interface CDOTAClientMsg_SwapAccept {
    player_id: number;
}
export interface CDOTAClientMsg_WorldLine {
    worldline: CDOTAMsg_WorldLine | undefined;
}
export interface CDOTAClientMsg_RequestGraphUpdate {
}
export interface CDOTAClientMsg_ChatWheel {
    chat_message_id: number;
    param_hero_id: number;
    emoticon_id: number;
}
export interface CDOTAClientMsg_SendStatPopup {
    statpopup: CDOTAMsg_SendStatPopup | undefined;
}
export interface CDOTAClientMsg_DismissAllStatPopups {
    dismissallmsg: CDOTAMsg_DismissAllStatPopups | undefined;
}
export interface CDOTAClientMsg_BeginLastHitChallenge {
    chosen_lane: number;
    helper_enabled: boolean;
}
export interface CDOTAClientMsg_UpdateQuickBuyItem {
    item_ability_id: number;
    purchasable: boolean;
}
export interface CDOTAClientMsg_UpdateQuickBuy {
    items: CDOTAClientMsg_UpdateQuickBuyItem[];
}
export interface CDOTAClientMsg_RecordVote {
    choice_index: number;
}
export interface CDOTAClientMsg_WillPurchaseAlert {
    item_ability_id: number;
    gold_remaining: number;
    suggestion_player_id: number;
}
export interface CDOTAClientMsg_BuyBackStateAlert {
}
export interface CDOTAClientMsg_QuickBuyAlert {
    item_ability_id: number;
    gold_cost: number;
    item_cooldown_seconds: number;
    show_buyback: boolean;
}
export interface CDOTAClientMsg_PlayerShowCase {
    showcase: boolean;
}
export interface CDOTAClientMsg_CameraZoomAmount {
    zoom_amount: number;
}
export interface CDOTAClientMsg_BroadcasterUsingCameraman {
    cameraman: boolean;
}
export interface CDOTAClientMsg_BroadcasterUsingAssistedCameraOperator {
    enabled: boolean;
}
export interface CDOTAClientMsg_FillEmptySlotsWithBots {
    fillwithbots: boolean;
}
export interface CDOTAClientMsg_HeroStatueLike {
    owner_player_id: number;
}
export interface CDOTAClientMsg_EventCNY2015Cmd {
    data: string;
}
export interface CDOTAClientMsg_DemoHero {
    hero_id: number;
    hero_id_to_spawn: number;
    item_defs: number[];
    item_ids: string[];
    style_index: number;
    keep_existing_demohero: boolean;
}
export interface CDOTAClientMsg_ChallengeSelect {
    event_id: number;
    slot_id: number;
    sequence_id: number;
}
export interface CDOTAClientMsg_ChallengeReroll {
    event_id: EEvent;
    slot_id: number;
    sequence_id: number;
    hero_id: number;
}
export interface CDOTAClientMsg_CoinWager {
    wager_amount: number;
}
export interface CDOTAClientMsg_CoinWagerToken {
    wager_token_item_id: string;
}
export interface CDOTAClientMsg_RankWager {
    announce_wager: boolean;
}
export interface CDOTAClientMsg_PlayerBounty {
    player_id: number;
}
export interface CDOTAClientMsg_EventPointsTip {
    recipient_player_id: number;
}
export interface CDOTAClientMsg_ExecuteOrders {
    orders: CDOTAMsg_UnitOrder[];
}
export interface CDOTAClientMsg_XPAlert {
    target_entindex: number;
    damage_taken: number;
}
export interface CDOTAClientMsg_TalentTreeAlert {
    target_entindex: number;
    ability_id: number;
    slot: number;
    learned: boolean;
}
export interface CDOTAClientMsg_KillcamDamageTaken {
    target_entindex: number;
    damage_taken: number;
    item_type: number;
    item_ability_id: number;
    hero_name: string;
    damage_color: string;
}
export interface CDOTAClientMsg_KillMyHero {
}
export interface CDOTAClientMsg_QuestStatus {
    quest_id: number;
    challenge_id: number;
    progress: number;
    goal: number;
    query: number;
    fail_gametime: number;
    item_ability_id: number;
}
export interface CDOTAClientMsg_ToggleAutoattack {
    mode: number;
    show_message: boolean;
}
export interface CDOTAClientMsg_SpecialAbility {
    ability_index: number;
    target_entindex: number;
}
export interface CDOTAClientMsg_SetEnemyStartingPosition {
    enemy_player_id: number;
    enemy_starting_position: number;
}
export interface CDOTAClientMsg_SetDesiredWardPlacement {
    ward_index: number;
    ward_x: number;
    ward_y: number;
}
export interface CDOTAClientMsg_RollDice {
    channel_type: number;
    roll_min: number;
    roll_max: number;
}
export interface CDOTAClientMsg_FlipCoin {
    channel_type: number;
}
export interface CDOTAClientMsg_RequestItemSuggestions {
}
export interface CDOTAClientMsg_MakeTeamCaptain {
    player_id: number;
}
export interface CDOTAClientMsg_HelpTipSystemStateChanged {
    tip_displayed: boolean;
}
export interface CDOTAClientMsg_RequestBulkCombatLog {
    game_time: number;
    duration: number;
    recent_player_death: boolean;
    player_id: number;
}
export interface CDOTAClientMsg_AbilityDraftRequestAbility {
    requested_ability_id: number;
    ctrl_is_down: boolean;
}
export interface CDOTAClientMsg_GuideSelectOption {
    option: number;
    force_recalculate: boolean;
}
export interface CDOTAClientMsg_GuideSelected {
    guide_workshop_id: string;
    is_plus_guide: boolean;
}
export interface CDOTAClientMsg_DamageReport {
    target_hero_id: number;
    source_hero_id: number;
    damage_amount: number;
    broadcast: boolean;
}
export interface CDOTAClientMsg_SalutePlayer {
    target_player_id: number;
    event_id: number;
}
export interface CDOTAClientMsg_TipAlert {
    tip_text: string;
}
export interface CDOTAClientMsg_EmptyTeleportAlert {
    target_entindex: number;
}
export interface CDOTAClientMsg_SetCavernMapVariant {
    map_variant: number;
}
export interface CDOTAClientMsg_PauseGameOrder {
    order_id: number;
    data: number;
}
export interface CDOTAClientMsg_VersusScene_PlayerBehavior {
    behavior: EDOTAVersusScenePlayerBehavior;
    play_activity: VersusScene_PlayActivity | undefined;
    chat_wheel: VersusScene_ChatWheel | undefined;
    playback_rate: VersusScene_PlaybackRate | undefined;
}
export interface CDOTAClientMsg_EmptyItemSlotAlert {
    target_entindex: number;
    slot_index: number;
}
export interface CDOTAClientMsg_AddOverwatchReportMarker {
    target_player_id: number;
    reason: EOverwatchReportReason;
    seconds_ago: number;
}
export interface CDOTAClientMsg_AddCommunicationsReportMarker {
    target_player_id: number;
}
export interface CDOTAClientMsg_AddCommunicationsBlockMarker {
    target_player_id: number;
}
export interface CDOTAClientMsg_AghsStatusAlert {
    source_player_id: number;
    target_player_id: number;
    target_entindex: number;
    alert_type: number;
}
export interface CDOTAClientMsg_PerfReport {
    average_frame_time: number;
    max_frame_time: number;
    average_compute_time: number;
    max_compute_time: number;
    average_client_tick_time: number;
    max_client_tick_time: number;
    average_client_simulate_time: number;
    max_client_simulate_time: number;
    average_output_time: number;
    max_output_time: number;
    average_wait_for_rendering_to_complete_time: number;
    max_wait_for_rendering_to_complete_time: number;
    average_swap_time: number;
    max_swap_time: number;
    average_frame_update_time: number;
    max_frame_update_time: number;
    average_idle_time: number;
    max_idle_time: number;
    average_input_processing_time: number;
    max_input_processing_time: number;
}
export interface CDOTAClientMsg_ContextualTips_Subscribe_Entry {
    unsubscribe: boolean;
    tip_id: number;
    prior_display_count: number;
    variants_seen: number[];
}
export interface CDOTAClientMsg_ContextualTips_Subscribe {
    tips: CDOTAClientMsg_ContextualTips_Subscribe_Entry[];
}
export interface CDOTAClientMsg_ChatMessage {
    channel_type: number;
    message_text: string;
}
export interface CDOTAClientMsg_DuelAccepted {
    challenger_player_id: number;
    accepter_player_id: number;
}
export declare const CDOTAClientMsg_MapPing: {
    fromJSON(object: any): CDOTAClientMsg_MapPing;
    toJSON(message: CDOTAClientMsg_MapPing): unknown;
    create<I extends {
        location_ping?: {
            x?: number;
            y?: number;
            target?: number;
            direct_ping?: boolean;
            type?: number;
            ping_source?: import("./dota_commonmessages").EPingSource;
        };
    } & {
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
    } & { [K_1 in Exclude<keyof I, "location_ping">]: never; }>(base?: I): CDOTAClientMsg_MapPing;
    fromPartial<I_1 extends {
        location_ping?: {
            x?: number;
            y?: number;
            target?: number;
            direct_ping?: boolean;
            type?: number;
            ping_source?: import("./dota_commonmessages").EPingSource;
        };
    } & {
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
    } & { [K_3 in Exclude<keyof I_1, "location_ping">]: never; }>(object: I_1): CDOTAClientMsg_MapPing;
};
export declare const CDOTAClientMsg_ItemAlert: {
    fromJSON(object: any): CDOTAClientMsg_ItemAlert;
    toJSON(message: CDOTAClientMsg_ItemAlert): unknown;
    create<I extends {
        item_alert?: {
            x?: number;
            y?: number;
            item_ability_id?: number;
        };
    } & {
        item_alert?: {
            x?: number;
            y?: number;
            item_ability_id?: number;
        } & {
            x?: number;
            y?: number;
            item_ability_id?: number;
        } & { [K in Exclude<keyof I["item_alert"], keyof CDOTAMsg_ItemAlert>]: never; };
    } & { [K_1 in Exclude<keyof I, "item_alert">]: never; }>(base?: I): CDOTAClientMsg_ItemAlert;
    fromPartial<I_1 extends {
        item_alert?: {
            x?: number;
            y?: number;
            item_ability_id?: number;
        };
    } & {
        item_alert?: {
            x?: number;
            y?: number;
            item_ability_id?: number;
        } & {
            x?: number;
            y?: number;
            item_ability_id?: number;
        } & { [K_2 in Exclude<keyof I_1["item_alert"], keyof CDOTAMsg_ItemAlert>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "item_alert">]: never; }>(object: I_1): CDOTAClientMsg_ItemAlert;
};
export declare const CDOTAClientMsg_EnemyItemAlert: {
    fromJSON(object: any): CDOTAClientMsg_EnemyItemAlert;
    toJSON(message: CDOTAClientMsg_EnemyItemAlert): unknown;
    create<I extends {
        item_entindex?: number;
        rune_type?: number;
        item_level?: number;
        primary_charges?: number;
        secondary_charges?: number;
    } & {
        item_entindex?: number;
        rune_type?: number;
        item_level?: number;
        primary_charges?: number;
        secondary_charges?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_EnemyItemAlert>]: never; }>(base?: I): CDOTAClientMsg_EnemyItemAlert;
    fromPartial<I_1 extends {
        item_entindex?: number;
        rune_type?: number;
        item_level?: number;
        primary_charges?: number;
        secondary_charges?: number;
    } & {
        item_entindex?: number;
        rune_type?: number;
        item_level?: number;
        primary_charges?: number;
        secondary_charges?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_EnemyItemAlert>]: never; }>(object: I_1): CDOTAClientMsg_EnemyItemAlert;
};
export declare const CDOTAClientMsg_ModifierAlert: {
    fromJSON(object: any): CDOTAClientMsg_ModifierAlert;
    toJSON(message: CDOTAClientMsg_ModifierAlert): unknown;
    create<I extends {
        buff_internal_index?: number;
        target_entindex?: number;
    } & {
        buff_internal_index?: number;
        target_entindex?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_ModifierAlert>]: never; }>(base?: I): CDOTAClientMsg_ModifierAlert;
    fromPartial<I_1 extends {
        buff_internal_index?: number;
        target_entindex?: number;
    } & {
        buff_internal_index?: number;
        target_entindex?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_ModifierAlert>]: never; }>(object: I_1): CDOTAClientMsg_ModifierAlert;
};
export declare const CDOTAClientMsg_ClickedBuff: {
    fromJSON(object: any): CDOTAClientMsg_ClickedBuff;
    toJSON(message: CDOTAClientMsg_ClickedBuff): unknown;
    create<I extends {
        buff_internal_index?: number;
        target_entindex?: number;
    } & {
        buff_internal_index?: number;
        target_entindex?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_ClickedBuff>]: never; }>(base?: I): CDOTAClientMsg_ClickedBuff;
    fromPartial<I_1 extends {
        buff_internal_index?: number;
        target_entindex?: number;
    } & {
        buff_internal_index?: number;
        target_entindex?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_ClickedBuff>]: never; }>(object: I_1): CDOTAClientMsg_ClickedBuff;
};
export declare const CDOTAClientMsg_HPManaAlert: {
    fromJSON(object: any): CDOTAClientMsg_HPManaAlert;
    toJSON(message: CDOTAClientMsg_HPManaAlert): unknown;
    create<I extends {
        target_entindex?: number;
        show_raw_values?: boolean;
    } & {
        target_entindex?: number;
        show_raw_values?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_HPManaAlert>]: never; }>(base?: I): CDOTAClientMsg_HPManaAlert;
    fromPartial<I_1 extends {
        target_entindex?: number;
        show_raw_values?: boolean;
    } & {
        target_entindex?: number;
        show_raw_values?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_HPManaAlert>]: never; }>(object: I_1): CDOTAClientMsg_HPManaAlert;
};
export declare const CDOTAClientMsg_NeutralCampAlert: {
    fromJSON(object: any): CDOTAClientMsg_NeutralCampAlert;
    toJSON(message: CDOTAClientMsg_NeutralCampAlert): unknown;
    create<I extends {
        spawner_entindex?: number;
        unit_entindex?: number;
        stack_request?: boolean;
    } & {
        spawner_entindex?: number;
        unit_entindex?: number;
        stack_request?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_NeutralCampAlert>]: never; }>(base?: I): CDOTAClientMsg_NeutralCampAlert;
    fromPartial<I_1 extends {
        spawner_entindex?: number;
        unit_entindex?: number;
        stack_request?: boolean;
    } & {
        spawner_entindex?: number;
        unit_entindex?: number;
        stack_request?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_NeutralCampAlert>]: never; }>(object: I_1): CDOTAClientMsg_NeutralCampAlert;
};
export declare const CDOTAClientMsg_GlyphAlert: {
    fromJSON(object: any): CDOTAClientMsg_GlyphAlert;
    toJSON(message: CDOTAClientMsg_GlyphAlert): unknown;
    create<I extends {
        negative?: boolean;
    } & {
        negative?: boolean;
    } & { [K in Exclude<keyof I, "negative">]: never; }>(base?: I): CDOTAClientMsg_GlyphAlert;
    fromPartial<I_1 extends {
        negative?: boolean;
    } & {
        negative?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "negative">]: never; }>(object: I_1): CDOTAClientMsg_GlyphAlert;
};
export declare const CDOTAClientMsg_RadarAlert: {
    fromJSON(object: any): CDOTAClientMsg_RadarAlert;
    toJSON(message: CDOTAClientMsg_RadarAlert): unknown;
    create<I extends {
        negative?: boolean;
    } & {
        negative?: boolean;
    } & { [K in Exclude<keyof I, "negative">]: never; }>(base?: I): CDOTAClientMsg_RadarAlert;
    fromPartial<I_1 extends {
        negative?: boolean;
    } & {
        negative?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "negative">]: never; }>(object: I_1): CDOTAClientMsg_RadarAlert;
};
export declare const CDOTAClientMsg_MapLine: {
    fromJSON(object: any): CDOTAClientMsg_MapLine;
    toJSON(message: CDOTAClientMsg_MapLine): unknown;
    create<I extends {
        mapline?: {
            x?: number;
            y?: number;
            initial?: boolean;
        };
    } & {
        mapline?: {
            x?: number;
            y?: number;
            initial?: boolean;
        } & {
            x?: number;
            y?: number;
            initial?: boolean;
        } & { [K in Exclude<keyof I["mapline"], keyof CDOTAMsg_MapLine>]: never; };
    } & { [K_1 in Exclude<keyof I, "mapline">]: never; }>(base?: I): CDOTAClientMsg_MapLine;
    fromPartial<I_1 extends {
        mapline?: {
            x?: number;
            y?: number;
            initial?: boolean;
        };
    } & {
        mapline?: {
            x?: number;
            y?: number;
            initial?: boolean;
        } & {
            x?: number;
            y?: number;
            initial?: boolean;
        } & { [K_2 in Exclude<keyof I_1["mapline"], keyof CDOTAMsg_MapLine>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "mapline">]: never; }>(object: I_1): CDOTAClientMsg_MapLine;
};
export declare const CDOTAClientMsg_AspectRatio: {
    fromJSON(object: any): CDOTAClientMsg_AspectRatio;
    toJSON(message: CDOTAClientMsg_AspectRatio): unknown;
    create<I extends {
        ratio?: number;
    } & {
        ratio?: number;
    } & { [K in Exclude<keyof I, "ratio">]: never; }>(base?: I): CDOTAClientMsg_AspectRatio;
    fromPartial<I_1 extends {
        ratio?: number;
    } & {
        ratio?: number;
    } & { [K_1 in Exclude<keyof I_1, "ratio">]: never; }>(object: I_1): CDOTAClientMsg_AspectRatio;
};
export declare const CDOTAClientMsg_UnitsAutoAttackMode: {
    fromJSON(object: any): CDOTAClientMsg_UnitsAutoAttackMode;
    toJSON(message: CDOTAClientMsg_UnitsAutoAttackMode): unknown;
    create<I extends {
        mode?: CDOTAClientMsg_UnitsAutoAttackMode_EMode;
        unit_type?: CDOTAClientMsg_UnitsAutoAttackMode_EUnitType;
    } & {
        mode?: CDOTAClientMsg_UnitsAutoAttackMode_EMode;
        unit_type?: CDOTAClientMsg_UnitsAutoAttackMode_EUnitType;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_UnitsAutoAttackMode>]: never; }>(base?: I): CDOTAClientMsg_UnitsAutoAttackMode;
    fromPartial<I_1 extends {
        mode?: CDOTAClientMsg_UnitsAutoAttackMode_EMode;
        unit_type?: CDOTAClientMsg_UnitsAutoAttackMode_EUnitType;
    } & {
        mode?: CDOTAClientMsg_UnitsAutoAttackMode_EMode;
        unit_type?: CDOTAClientMsg_UnitsAutoAttackMode_EUnitType;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_UnitsAutoAttackMode>]: never; }>(object: I_1): CDOTAClientMsg_UnitsAutoAttackMode;
};
export declare const CDOTAClientMsg_UnitsAutoAttackAfterSpell: {
    fromJSON(object: any): CDOTAClientMsg_UnitsAutoAttackAfterSpell;
    toJSON(message: CDOTAClientMsg_UnitsAutoAttackAfterSpell): unknown;
    create<I extends {
        enabled?: boolean;
    } & {
        enabled?: boolean;
    } & { [K in Exclude<keyof I, "enabled">]: never; }>(base?: I): CDOTAClientMsg_UnitsAutoAttackAfterSpell;
    fromPartial<I_1 extends {
        enabled?: boolean;
    } & {
        enabled?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "enabled">]: never; }>(object: I_1): CDOTAClientMsg_UnitsAutoAttackAfterSpell;
};
export declare const CDOTAClientMsg_TeleportRequiresHalt: {
    fromJSON(object: any): CDOTAClientMsg_TeleportRequiresHalt;
    toJSON(message: CDOTAClientMsg_TeleportRequiresHalt): unknown;
    create<I extends {
        enabled?: boolean;
    } & {
        enabled?: boolean;
    } & { [K in Exclude<keyof I, "enabled">]: never; }>(base?: I): CDOTAClientMsg_TeleportRequiresHalt;
    fromPartial<I_1 extends {
        enabled?: boolean;
    } & {
        enabled?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "enabled">]: never; }>(object: I_1): CDOTAClientMsg_TeleportRequiresHalt;
};
export declare const CDOTAClientMsg_ChannelRequiresHalt: {
    fromJSON(object: any): CDOTAClientMsg_ChannelRequiresHalt;
    toJSON(message: CDOTAClientMsg_ChannelRequiresHalt): unknown;
    create<I extends {
        enabled?: boolean;
    } & {
        enabled?: boolean;
    } & { [K in Exclude<keyof I, "enabled">]: never; }>(base?: I): CDOTAClientMsg_ChannelRequiresHalt;
    fromPartial<I_1 extends {
        enabled?: boolean;
    } & {
        enabled?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "enabled">]: never; }>(object: I_1): CDOTAClientMsg_ChannelRequiresHalt;
};
export declare const CDOTAClientMsg_SearchString: {
    fromJSON(object: any): CDOTAClientMsg_SearchString;
    toJSON(message: CDOTAClientMsg_SearchString): unknown;
    create<I extends {
        search?: string;
    } & {
        search?: string;
    } & { [K in Exclude<keyof I, "search">]: never; }>(base?: I): CDOTAClientMsg_SearchString;
    fromPartial<I_1 extends {
        search?: string;
    } & {
        search?: string;
    } & { [K_1 in Exclude<keyof I_1, "search">]: never; }>(object: I_1): CDOTAClientMsg_SearchString;
};
export declare const CDOTAClientMsg_Pause: {
    fromJSON(_: any): CDOTAClientMsg_Pause;
    toJSON(_: CDOTAClientMsg_Pause): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CDOTAClientMsg_Pause;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CDOTAClientMsg_Pause;
};
export declare const CDOTAClientMsg_ShopViewMode: {
    fromJSON(object: any): CDOTAClientMsg_ShopViewMode;
    toJSON(message: CDOTAClientMsg_ShopViewMode): unknown;
    create<I extends {
        mode?: number;
    } & {
        mode?: number;
    } & { [K in Exclude<keyof I, "mode">]: never; }>(base?: I): CDOTAClientMsg_ShopViewMode;
    fromPartial<I_1 extends {
        mode?: number;
    } & {
        mode?: number;
    } & { [K_1 in Exclude<keyof I_1, "mode">]: never; }>(object: I_1): CDOTAClientMsg_ShopViewMode;
};
export declare const CDOTAClientMsg_SetUnitShareFlag: {
    fromJSON(object: any): CDOTAClientMsg_SetUnitShareFlag;
    toJSON(message: CDOTAClientMsg_SetUnitShareFlag): unknown;
    create<I extends {
        player_id?: number;
        flag?: number;
        state?: boolean;
    } & {
        player_id?: number;
        flag?: number;
        state?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_SetUnitShareFlag>]: never; }>(base?: I): CDOTAClientMsg_SetUnitShareFlag;
    fromPartial<I_1 extends {
        player_id?: number;
        flag?: number;
        state?: boolean;
    } & {
        player_id?: number;
        flag?: number;
        state?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_SetUnitShareFlag>]: never; }>(object: I_1): CDOTAClientMsg_SetUnitShareFlag;
};
export declare const CDOTAClientMsg_SwapRequest: {
    fromJSON(object: any): CDOTAClientMsg_SwapRequest;
    toJSON(message: CDOTAClientMsg_SwapRequest): unknown;
    create<I extends {
        player_id?: number;
    } & {
        player_id?: number;
    } & { [K in Exclude<keyof I, "player_id">]: never; }>(base?: I): CDOTAClientMsg_SwapRequest;
    fromPartial<I_1 extends {
        player_id?: number;
    } & {
        player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "player_id">]: never; }>(object: I_1): CDOTAClientMsg_SwapRequest;
};
export declare const CDOTAClientMsg_SwapAccept: {
    fromJSON(object: any): CDOTAClientMsg_SwapAccept;
    toJSON(message: CDOTAClientMsg_SwapAccept): unknown;
    create<I extends {
        player_id?: number;
    } & {
        player_id?: number;
    } & { [K in Exclude<keyof I, "player_id">]: never; }>(base?: I): CDOTAClientMsg_SwapAccept;
    fromPartial<I_1 extends {
        player_id?: number;
    } & {
        player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "player_id">]: never; }>(object: I_1): CDOTAClientMsg_SwapAccept;
};
export declare const CDOTAClientMsg_WorldLine: {
    fromJSON(object: any): CDOTAClientMsg_WorldLine;
    toJSON(message: CDOTAClientMsg_WorldLine): unknown;
    create<I extends {
        worldline?: {
            x?: number;
            y?: number;
            z?: number;
            initial?: boolean;
            end?: boolean;
        };
    } & {
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
    } & { [K_1 in Exclude<keyof I, "worldline">]: never; }>(base?: I): CDOTAClientMsg_WorldLine;
    fromPartial<I_1 extends {
        worldline?: {
            x?: number;
            y?: number;
            z?: number;
            initial?: boolean;
            end?: boolean;
        };
    } & {
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
    } & { [K_3 in Exclude<keyof I_1, "worldline">]: never; }>(object: I_1): CDOTAClientMsg_WorldLine;
};
export declare const CDOTAClientMsg_RequestGraphUpdate: {
    fromJSON(_: any): CDOTAClientMsg_RequestGraphUpdate;
    toJSON(_: CDOTAClientMsg_RequestGraphUpdate): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CDOTAClientMsg_RequestGraphUpdate;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CDOTAClientMsg_RequestGraphUpdate;
};
export declare const CDOTAClientMsg_ChatWheel: {
    fromJSON(object: any): CDOTAClientMsg_ChatWheel;
    toJSON(message: CDOTAClientMsg_ChatWheel): unknown;
    create<I extends {
        chat_message_id?: number;
        param_hero_id?: number;
        emoticon_id?: number;
    } & {
        chat_message_id?: number;
        param_hero_id?: number;
        emoticon_id?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_ChatWheel>]: never; }>(base?: I): CDOTAClientMsg_ChatWheel;
    fromPartial<I_1 extends {
        chat_message_id?: number;
        param_hero_id?: number;
        emoticon_id?: number;
    } & {
        chat_message_id?: number;
        param_hero_id?: number;
        emoticon_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_ChatWheel>]: never; }>(object: I_1): CDOTAClientMsg_ChatWheel;
};
export declare const CDOTAClientMsg_SendStatPopup: {
    fromJSON(object: any): CDOTAClientMsg_SendStatPopup;
    toJSON(message: CDOTAClientMsg_SendStatPopup): unknown;
    create<I extends {
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
    } & { [K_4 in Exclude<keyof I, "statpopup">]: never; }>(base?: I): CDOTAClientMsg_SendStatPopup;
    fromPartial<I_1 extends {
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
    } & { [K_9 in Exclude<keyof I_1, "statpopup">]: never; }>(object: I_1): CDOTAClientMsg_SendStatPopup;
};
export declare const CDOTAClientMsg_DismissAllStatPopups: {
    fromJSON(object: any): CDOTAClientMsg_DismissAllStatPopups;
    toJSON(message: CDOTAClientMsg_DismissAllStatPopups): unknown;
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
    } & { [K_1 in Exclude<keyof I, "dismissallmsg">]: never; }>(base?: I): CDOTAClientMsg_DismissAllStatPopups;
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
    } & { [K_3 in Exclude<keyof I_1, "dismissallmsg">]: never; }>(object: I_1): CDOTAClientMsg_DismissAllStatPopups;
};
export declare const CDOTAClientMsg_BeginLastHitChallenge: {
    fromJSON(object: any): CDOTAClientMsg_BeginLastHitChallenge;
    toJSON(message: CDOTAClientMsg_BeginLastHitChallenge): unknown;
    create<I extends {
        chosen_lane?: number;
        helper_enabled?: boolean;
    } & {
        chosen_lane?: number;
        helper_enabled?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_BeginLastHitChallenge>]: never; }>(base?: I): CDOTAClientMsg_BeginLastHitChallenge;
    fromPartial<I_1 extends {
        chosen_lane?: number;
        helper_enabled?: boolean;
    } & {
        chosen_lane?: number;
        helper_enabled?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_BeginLastHitChallenge>]: never; }>(object: I_1): CDOTAClientMsg_BeginLastHitChallenge;
};
export declare const CDOTAClientMsg_UpdateQuickBuyItem: {
    fromJSON(object: any): CDOTAClientMsg_UpdateQuickBuyItem;
    toJSON(message: CDOTAClientMsg_UpdateQuickBuyItem): unknown;
    create<I extends {
        item_ability_id?: number;
        purchasable?: boolean;
    } & {
        item_ability_id?: number;
        purchasable?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_UpdateQuickBuyItem>]: never; }>(base?: I): CDOTAClientMsg_UpdateQuickBuyItem;
    fromPartial<I_1 extends {
        item_ability_id?: number;
        purchasable?: boolean;
    } & {
        item_ability_id?: number;
        purchasable?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_UpdateQuickBuyItem>]: never; }>(object: I_1): CDOTAClientMsg_UpdateQuickBuyItem;
};
export declare const CDOTAClientMsg_UpdateQuickBuy: {
    fromJSON(object: any): CDOTAClientMsg_UpdateQuickBuy;
    toJSON(message: CDOTAClientMsg_UpdateQuickBuy): unknown;
    create<I extends {
        items?: {
            item_ability_id?: number;
            purchasable?: boolean;
        }[];
    } & {
        items?: {
            item_ability_id?: number;
            purchasable?: boolean;
        }[] & ({
            item_ability_id?: number;
            purchasable?: boolean;
        } & {
            item_ability_id?: number;
            purchasable?: boolean;
        } & { [K in Exclude<keyof I["items"][number], keyof CDOTAClientMsg_UpdateQuickBuyItem>]: never; })[] & { [K_1 in Exclude<keyof I["items"], keyof {
            item_ability_id?: number;
            purchasable?: boolean;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "items">]: never; }>(base?: I): CDOTAClientMsg_UpdateQuickBuy;
    fromPartial<I_1 extends {
        items?: {
            item_ability_id?: number;
            purchasable?: boolean;
        }[];
    } & {
        items?: {
            item_ability_id?: number;
            purchasable?: boolean;
        }[] & ({
            item_ability_id?: number;
            purchasable?: boolean;
        } & {
            item_ability_id?: number;
            purchasable?: boolean;
        } & { [K_3 in Exclude<keyof I_1["items"][number], keyof CDOTAClientMsg_UpdateQuickBuyItem>]: never; })[] & { [K_4 in Exclude<keyof I_1["items"], keyof {
            item_ability_id?: number;
            purchasable?: boolean;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "items">]: never; }>(object: I_1): CDOTAClientMsg_UpdateQuickBuy;
};
export declare const CDOTAClientMsg_RecordVote: {
    fromJSON(object: any): CDOTAClientMsg_RecordVote;
    toJSON(message: CDOTAClientMsg_RecordVote): unknown;
    create<I extends {
        choice_index?: number;
    } & {
        choice_index?: number;
    } & { [K in Exclude<keyof I, "choice_index">]: never; }>(base?: I): CDOTAClientMsg_RecordVote;
    fromPartial<I_1 extends {
        choice_index?: number;
    } & {
        choice_index?: number;
    } & { [K_1 in Exclude<keyof I_1, "choice_index">]: never; }>(object: I_1): CDOTAClientMsg_RecordVote;
};
export declare const CDOTAClientMsg_WillPurchaseAlert: {
    fromJSON(object: any): CDOTAClientMsg_WillPurchaseAlert;
    toJSON(message: CDOTAClientMsg_WillPurchaseAlert): unknown;
    create<I extends {
        item_ability_id?: number;
        gold_remaining?: number;
        suggestion_player_id?: number;
    } & {
        item_ability_id?: number;
        gold_remaining?: number;
        suggestion_player_id?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_WillPurchaseAlert>]: never; }>(base?: I): CDOTAClientMsg_WillPurchaseAlert;
    fromPartial<I_1 extends {
        item_ability_id?: number;
        gold_remaining?: number;
        suggestion_player_id?: number;
    } & {
        item_ability_id?: number;
        gold_remaining?: number;
        suggestion_player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_WillPurchaseAlert>]: never; }>(object: I_1): CDOTAClientMsg_WillPurchaseAlert;
};
export declare const CDOTAClientMsg_BuyBackStateAlert: {
    fromJSON(_: any): CDOTAClientMsg_BuyBackStateAlert;
    toJSON(_: CDOTAClientMsg_BuyBackStateAlert): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CDOTAClientMsg_BuyBackStateAlert;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CDOTAClientMsg_BuyBackStateAlert;
};
export declare const CDOTAClientMsg_QuickBuyAlert: {
    fromJSON(object: any): CDOTAClientMsg_QuickBuyAlert;
    toJSON(message: CDOTAClientMsg_QuickBuyAlert): unknown;
    create<I extends {
        item_ability_id?: number;
        gold_cost?: number;
        item_cooldown_seconds?: number;
        show_buyback?: boolean;
    } & {
        item_ability_id?: number;
        gold_cost?: number;
        item_cooldown_seconds?: number;
        show_buyback?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_QuickBuyAlert>]: never; }>(base?: I): CDOTAClientMsg_QuickBuyAlert;
    fromPartial<I_1 extends {
        item_ability_id?: number;
        gold_cost?: number;
        item_cooldown_seconds?: number;
        show_buyback?: boolean;
    } & {
        item_ability_id?: number;
        gold_cost?: number;
        item_cooldown_seconds?: number;
        show_buyback?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_QuickBuyAlert>]: never; }>(object: I_1): CDOTAClientMsg_QuickBuyAlert;
};
export declare const CDOTAClientMsg_PlayerShowCase: {
    fromJSON(object: any): CDOTAClientMsg_PlayerShowCase;
    toJSON(message: CDOTAClientMsg_PlayerShowCase): unknown;
    create<I extends {
        showcase?: boolean;
    } & {
        showcase?: boolean;
    } & { [K in Exclude<keyof I, "showcase">]: never; }>(base?: I): CDOTAClientMsg_PlayerShowCase;
    fromPartial<I_1 extends {
        showcase?: boolean;
    } & {
        showcase?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "showcase">]: never; }>(object: I_1): CDOTAClientMsg_PlayerShowCase;
};
export declare const CDOTAClientMsg_CameraZoomAmount: {
    fromJSON(object: any): CDOTAClientMsg_CameraZoomAmount;
    toJSON(message: CDOTAClientMsg_CameraZoomAmount): unknown;
    create<I extends {
        zoom_amount?: number;
    } & {
        zoom_amount?: number;
    } & { [K in Exclude<keyof I, "zoom_amount">]: never; }>(base?: I): CDOTAClientMsg_CameraZoomAmount;
    fromPartial<I_1 extends {
        zoom_amount?: number;
    } & {
        zoom_amount?: number;
    } & { [K_1 in Exclude<keyof I_1, "zoom_amount">]: never; }>(object: I_1): CDOTAClientMsg_CameraZoomAmount;
};
export declare const CDOTAClientMsg_BroadcasterUsingCameraman: {
    fromJSON(object: any): CDOTAClientMsg_BroadcasterUsingCameraman;
    toJSON(message: CDOTAClientMsg_BroadcasterUsingCameraman): unknown;
    create<I extends {
        cameraman?: boolean;
    } & {
        cameraman?: boolean;
    } & { [K in Exclude<keyof I, "cameraman">]: never; }>(base?: I): CDOTAClientMsg_BroadcasterUsingCameraman;
    fromPartial<I_1 extends {
        cameraman?: boolean;
    } & {
        cameraman?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "cameraman">]: never; }>(object: I_1): CDOTAClientMsg_BroadcasterUsingCameraman;
};
export declare const CDOTAClientMsg_BroadcasterUsingAssistedCameraOperator: {
    fromJSON(object: any): CDOTAClientMsg_BroadcasterUsingAssistedCameraOperator;
    toJSON(message: CDOTAClientMsg_BroadcasterUsingAssistedCameraOperator): unknown;
    create<I extends {
        enabled?: boolean;
    } & {
        enabled?: boolean;
    } & { [K in Exclude<keyof I, "enabled">]: never; }>(base?: I): CDOTAClientMsg_BroadcasterUsingAssistedCameraOperator;
    fromPartial<I_1 extends {
        enabled?: boolean;
    } & {
        enabled?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "enabled">]: never; }>(object: I_1): CDOTAClientMsg_BroadcasterUsingAssistedCameraOperator;
};
export declare const CDOTAClientMsg_FillEmptySlotsWithBots: {
    fromJSON(object: any): CDOTAClientMsg_FillEmptySlotsWithBots;
    toJSON(message: CDOTAClientMsg_FillEmptySlotsWithBots): unknown;
    create<I extends {
        fillwithbots?: boolean;
    } & {
        fillwithbots?: boolean;
    } & { [K in Exclude<keyof I, "fillwithbots">]: never; }>(base?: I): CDOTAClientMsg_FillEmptySlotsWithBots;
    fromPartial<I_1 extends {
        fillwithbots?: boolean;
    } & {
        fillwithbots?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "fillwithbots">]: never; }>(object: I_1): CDOTAClientMsg_FillEmptySlotsWithBots;
};
export declare const CDOTAClientMsg_HeroStatueLike: {
    fromJSON(object: any): CDOTAClientMsg_HeroStatueLike;
    toJSON(message: CDOTAClientMsg_HeroStatueLike): unknown;
    create<I extends {
        owner_player_id?: number;
    } & {
        owner_player_id?: number;
    } & { [K in Exclude<keyof I, "owner_player_id">]: never; }>(base?: I): CDOTAClientMsg_HeroStatueLike;
    fromPartial<I_1 extends {
        owner_player_id?: number;
    } & {
        owner_player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "owner_player_id">]: never; }>(object: I_1): CDOTAClientMsg_HeroStatueLike;
};
export declare const CDOTAClientMsg_EventCNY2015Cmd: {
    fromJSON(object: any): CDOTAClientMsg_EventCNY2015Cmd;
    toJSON(message: CDOTAClientMsg_EventCNY2015Cmd): unknown;
    create<I extends {
        data?: string;
    } & {
        data?: string;
    } & { [K in Exclude<keyof I, "data">]: never; }>(base?: I): CDOTAClientMsg_EventCNY2015Cmd;
    fromPartial<I_1 extends {
        data?: string;
    } & {
        data?: string;
    } & { [K_1 in Exclude<keyof I_1, "data">]: never; }>(object: I_1): CDOTAClientMsg_EventCNY2015Cmd;
};
export declare const CDOTAClientMsg_DemoHero: {
    fromJSON(object: any): CDOTAClientMsg_DemoHero;
    toJSON(message: CDOTAClientMsg_DemoHero): unknown;
    create<I extends {
        hero_id?: number;
        hero_id_to_spawn?: number;
        item_defs?: number[];
        item_ids?: string[];
        style_index?: number;
        keep_existing_demohero?: boolean;
    } & {
        hero_id?: number;
        hero_id_to_spawn?: number;
        item_defs?: number[] & number[] & { [K in Exclude<keyof I["item_defs"], keyof number[]>]: never; };
        item_ids?: string[] & string[] & { [K_1 in Exclude<keyof I["item_ids"], keyof string[]>]: never; };
        style_index?: number;
        keep_existing_demohero?: boolean;
    } & { [K_2 in Exclude<keyof I, keyof CDOTAClientMsg_DemoHero>]: never; }>(base?: I): CDOTAClientMsg_DemoHero;
    fromPartial<I_1 extends {
        hero_id?: number;
        hero_id_to_spawn?: number;
        item_defs?: number[];
        item_ids?: string[];
        style_index?: number;
        keep_existing_demohero?: boolean;
    } & {
        hero_id?: number;
        hero_id_to_spawn?: number;
        item_defs?: number[] & number[] & { [K_3 in Exclude<keyof I_1["item_defs"], keyof number[]>]: never; };
        item_ids?: string[] & string[] & { [K_4 in Exclude<keyof I_1["item_ids"], keyof string[]>]: never; };
        style_index?: number;
        keep_existing_demohero?: boolean;
    } & { [K_5 in Exclude<keyof I_1, keyof CDOTAClientMsg_DemoHero>]: never; }>(object: I_1): CDOTAClientMsg_DemoHero;
};
export declare const CDOTAClientMsg_ChallengeSelect: {
    fromJSON(object: any): CDOTAClientMsg_ChallengeSelect;
    toJSON(message: CDOTAClientMsg_ChallengeSelect): unknown;
    create<I extends {
        event_id?: number;
        slot_id?: number;
        sequence_id?: number;
    } & {
        event_id?: number;
        slot_id?: number;
        sequence_id?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_ChallengeSelect>]: never; }>(base?: I): CDOTAClientMsg_ChallengeSelect;
    fromPartial<I_1 extends {
        event_id?: number;
        slot_id?: number;
        sequence_id?: number;
    } & {
        event_id?: number;
        slot_id?: number;
        sequence_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_ChallengeSelect>]: never; }>(object: I_1): CDOTAClientMsg_ChallengeSelect;
};
export declare const CDOTAClientMsg_ChallengeReroll: {
    fromJSON(object: any): CDOTAClientMsg_ChallengeReroll;
    toJSON(message: CDOTAClientMsg_ChallengeReroll): unknown;
    create<I extends {
        event_id?: EEvent;
        slot_id?: number;
        sequence_id?: number;
        hero_id?: number;
    } & {
        event_id?: EEvent;
        slot_id?: number;
        sequence_id?: number;
        hero_id?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_ChallengeReroll>]: never; }>(base?: I): CDOTAClientMsg_ChallengeReroll;
    fromPartial<I_1 extends {
        event_id?: EEvent;
        slot_id?: number;
        sequence_id?: number;
        hero_id?: number;
    } & {
        event_id?: EEvent;
        slot_id?: number;
        sequence_id?: number;
        hero_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_ChallengeReroll>]: never; }>(object: I_1): CDOTAClientMsg_ChallengeReroll;
};
export declare const CDOTAClientMsg_CoinWager: {
    fromJSON(object: any): CDOTAClientMsg_CoinWager;
    toJSON(message: CDOTAClientMsg_CoinWager): unknown;
    create<I extends {
        wager_amount?: number;
    } & {
        wager_amount?: number;
    } & { [K in Exclude<keyof I, "wager_amount">]: never; }>(base?: I): CDOTAClientMsg_CoinWager;
    fromPartial<I_1 extends {
        wager_amount?: number;
    } & {
        wager_amount?: number;
    } & { [K_1 in Exclude<keyof I_1, "wager_amount">]: never; }>(object: I_1): CDOTAClientMsg_CoinWager;
};
export declare const CDOTAClientMsg_CoinWagerToken: {
    fromJSON(object: any): CDOTAClientMsg_CoinWagerToken;
    toJSON(message: CDOTAClientMsg_CoinWagerToken): unknown;
    create<I extends {
        wager_token_item_id?: string;
    } & {
        wager_token_item_id?: string;
    } & { [K in Exclude<keyof I, "wager_token_item_id">]: never; }>(base?: I): CDOTAClientMsg_CoinWagerToken;
    fromPartial<I_1 extends {
        wager_token_item_id?: string;
    } & {
        wager_token_item_id?: string;
    } & { [K_1 in Exclude<keyof I_1, "wager_token_item_id">]: never; }>(object: I_1): CDOTAClientMsg_CoinWagerToken;
};
export declare const CDOTAClientMsg_RankWager: {
    fromJSON(object: any): CDOTAClientMsg_RankWager;
    toJSON(message: CDOTAClientMsg_RankWager): unknown;
    create<I extends {
        announce_wager?: boolean;
    } & {
        announce_wager?: boolean;
    } & { [K in Exclude<keyof I, "announce_wager">]: never; }>(base?: I): CDOTAClientMsg_RankWager;
    fromPartial<I_1 extends {
        announce_wager?: boolean;
    } & {
        announce_wager?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "announce_wager">]: never; }>(object: I_1): CDOTAClientMsg_RankWager;
};
export declare const CDOTAClientMsg_PlayerBounty: {
    fromJSON(object: any): CDOTAClientMsg_PlayerBounty;
    toJSON(message: CDOTAClientMsg_PlayerBounty): unknown;
    create<I extends {
        player_id?: number;
    } & {
        player_id?: number;
    } & { [K in Exclude<keyof I, "player_id">]: never; }>(base?: I): CDOTAClientMsg_PlayerBounty;
    fromPartial<I_1 extends {
        player_id?: number;
    } & {
        player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "player_id">]: never; }>(object: I_1): CDOTAClientMsg_PlayerBounty;
};
export declare const CDOTAClientMsg_EventPointsTip: {
    fromJSON(object: any): CDOTAClientMsg_EventPointsTip;
    toJSON(message: CDOTAClientMsg_EventPointsTip): unknown;
    create<I extends {
        recipient_player_id?: number;
    } & {
        recipient_player_id?: number;
    } & { [K in Exclude<keyof I, "recipient_player_id">]: never; }>(base?: I): CDOTAClientMsg_EventPointsTip;
    fromPartial<I_1 extends {
        recipient_player_id?: number;
    } & {
        recipient_player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "recipient_player_id">]: never; }>(object: I_1): CDOTAClientMsg_EventPointsTip;
};
export declare const CDOTAClientMsg_ExecuteOrders: {
    fromJSON(object: any): CDOTAClientMsg_ExecuteOrders;
    toJSON(message: CDOTAClientMsg_ExecuteOrders): unknown;
    create<I extends {
        orders?: {
            order_type?: import("./dota_commonmessages").dotaunitorder_t;
            units?: number[];
            target_index?: number;
            ability_index?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            sequence_number?: number;
            flags?: number;
        }[];
    } & {
        orders?: {
            order_type?: import("./dota_commonmessages").dotaunitorder_t;
            units?: number[];
            target_index?: number;
            ability_index?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            sequence_number?: number;
            flags?: number;
        }[] & ({
            order_type?: import("./dota_commonmessages").dotaunitorder_t;
            units?: number[];
            target_index?: number;
            ability_index?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            sequence_number?: number;
            flags?: number;
        } & {
            order_type?: import("./dota_commonmessages").dotaunitorder_t;
            units?: number[] & number[] & { [K in Exclude<keyof I["orders"][number]["units"], keyof number[]>]: never; };
            target_index?: number;
            ability_index?: number;
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
            } & { [K_1 in Exclude<keyof I["orders"][number]["position"], keyof import("./networkbasetypes").CMsgVector>]: never; };
            sequence_number?: number;
            flags?: number;
        } & { [K_2 in Exclude<keyof I["orders"][number], keyof CDOTAMsg_UnitOrder>]: never; })[] & { [K_3 in Exclude<keyof I["orders"], keyof {
            order_type?: import("./dota_commonmessages").dotaunitorder_t;
            units?: number[];
            target_index?: number;
            ability_index?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            sequence_number?: number;
            flags?: number;
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, "orders">]: never; }>(base?: I): CDOTAClientMsg_ExecuteOrders;
    fromPartial<I_1 extends {
        orders?: {
            order_type?: import("./dota_commonmessages").dotaunitorder_t;
            units?: number[];
            target_index?: number;
            ability_index?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            sequence_number?: number;
            flags?: number;
        }[];
    } & {
        orders?: {
            order_type?: import("./dota_commonmessages").dotaunitorder_t;
            units?: number[];
            target_index?: number;
            ability_index?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            sequence_number?: number;
            flags?: number;
        }[] & ({
            order_type?: import("./dota_commonmessages").dotaunitorder_t;
            units?: number[];
            target_index?: number;
            ability_index?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            sequence_number?: number;
            flags?: number;
        } & {
            order_type?: import("./dota_commonmessages").dotaunitorder_t;
            units?: number[] & number[] & { [K_5 in Exclude<keyof I_1["orders"][number]["units"], keyof number[]>]: never; };
            target_index?: number;
            ability_index?: number;
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
            } & { [K_6 in Exclude<keyof I_1["orders"][number]["position"], keyof import("./networkbasetypes").CMsgVector>]: never; };
            sequence_number?: number;
            flags?: number;
        } & { [K_7 in Exclude<keyof I_1["orders"][number], keyof CDOTAMsg_UnitOrder>]: never; })[] & { [K_8 in Exclude<keyof I_1["orders"], keyof {
            order_type?: import("./dota_commonmessages").dotaunitorder_t;
            units?: number[];
            target_index?: number;
            ability_index?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            sequence_number?: number;
            flags?: number;
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "orders">]: never; }>(object: I_1): CDOTAClientMsg_ExecuteOrders;
};
export declare const CDOTAClientMsg_XPAlert: {
    fromJSON(object: any): CDOTAClientMsg_XPAlert;
    toJSON(message: CDOTAClientMsg_XPAlert): unknown;
    create<I extends {
        target_entindex?: number;
        damage_taken?: number;
    } & {
        target_entindex?: number;
        damage_taken?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_XPAlert>]: never; }>(base?: I): CDOTAClientMsg_XPAlert;
    fromPartial<I_1 extends {
        target_entindex?: number;
        damage_taken?: number;
    } & {
        target_entindex?: number;
        damage_taken?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_XPAlert>]: never; }>(object: I_1): CDOTAClientMsg_XPAlert;
};
export declare const CDOTAClientMsg_TalentTreeAlert: {
    fromJSON(object: any): CDOTAClientMsg_TalentTreeAlert;
    toJSON(message: CDOTAClientMsg_TalentTreeAlert): unknown;
    create<I extends {
        target_entindex?: number;
        ability_id?: number;
        slot?: number;
        learned?: boolean;
    } & {
        target_entindex?: number;
        ability_id?: number;
        slot?: number;
        learned?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_TalentTreeAlert>]: never; }>(base?: I): CDOTAClientMsg_TalentTreeAlert;
    fromPartial<I_1 extends {
        target_entindex?: number;
        ability_id?: number;
        slot?: number;
        learned?: boolean;
    } & {
        target_entindex?: number;
        ability_id?: number;
        slot?: number;
        learned?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_TalentTreeAlert>]: never; }>(object: I_1): CDOTAClientMsg_TalentTreeAlert;
};
export declare const CDOTAClientMsg_KillcamDamageTaken: {
    fromJSON(object: any): CDOTAClientMsg_KillcamDamageTaken;
    toJSON(message: CDOTAClientMsg_KillcamDamageTaken): unknown;
    create<I extends {
        target_entindex?: number;
        damage_taken?: number;
        item_type?: number;
        item_ability_id?: number;
        hero_name?: string;
        damage_color?: string;
    } & {
        target_entindex?: number;
        damage_taken?: number;
        item_type?: number;
        item_ability_id?: number;
        hero_name?: string;
        damage_color?: string;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_KillcamDamageTaken>]: never; }>(base?: I): CDOTAClientMsg_KillcamDamageTaken;
    fromPartial<I_1 extends {
        target_entindex?: number;
        damage_taken?: number;
        item_type?: number;
        item_ability_id?: number;
        hero_name?: string;
        damage_color?: string;
    } & {
        target_entindex?: number;
        damage_taken?: number;
        item_type?: number;
        item_ability_id?: number;
        hero_name?: string;
        damage_color?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_KillcamDamageTaken>]: never; }>(object: I_1): CDOTAClientMsg_KillcamDamageTaken;
};
export declare const CDOTAClientMsg_KillMyHero: {
    fromJSON(_: any): CDOTAClientMsg_KillMyHero;
    toJSON(_: CDOTAClientMsg_KillMyHero): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CDOTAClientMsg_KillMyHero;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CDOTAClientMsg_KillMyHero;
};
export declare const CDOTAClientMsg_QuestStatus: {
    fromJSON(object: any): CDOTAClientMsg_QuestStatus;
    toJSON(message: CDOTAClientMsg_QuestStatus): unknown;
    create<I extends {
        quest_id?: number;
        challenge_id?: number;
        progress?: number;
        goal?: number;
        query?: number;
        fail_gametime?: number;
        item_ability_id?: number;
    } & {
        quest_id?: number;
        challenge_id?: number;
        progress?: number;
        goal?: number;
        query?: number;
        fail_gametime?: number;
        item_ability_id?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_QuestStatus>]: never; }>(base?: I): CDOTAClientMsg_QuestStatus;
    fromPartial<I_1 extends {
        quest_id?: number;
        challenge_id?: number;
        progress?: number;
        goal?: number;
        query?: number;
        fail_gametime?: number;
        item_ability_id?: number;
    } & {
        quest_id?: number;
        challenge_id?: number;
        progress?: number;
        goal?: number;
        query?: number;
        fail_gametime?: number;
        item_ability_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_QuestStatus>]: never; }>(object: I_1): CDOTAClientMsg_QuestStatus;
};
export declare const CDOTAClientMsg_ToggleAutoattack: {
    fromJSON(object: any): CDOTAClientMsg_ToggleAutoattack;
    toJSON(message: CDOTAClientMsg_ToggleAutoattack): unknown;
    create<I extends {
        mode?: number;
        show_message?: boolean;
    } & {
        mode?: number;
        show_message?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_ToggleAutoattack>]: never; }>(base?: I): CDOTAClientMsg_ToggleAutoattack;
    fromPartial<I_1 extends {
        mode?: number;
        show_message?: boolean;
    } & {
        mode?: number;
        show_message?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_ToggleAutoattack>]: never; }>(object: I_1): CDOTAClientMsg_ToggleAutoattack;
};
export declare const CDOTAClientMsg_SpecialAbility: {
    fromJSON(object: any): CDOTAClientMsg_SpecialAbility;
    toJSON(message: CDOTAClientMsg_SpecialAbility): unknown;
    create<I extends {
        ability_index?: number;
        target_entindex?: number;
    } & {
        ability_index?: number;
        target_entindex?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_SpecialAbility>]: never; }>(base?: I): CDOTAClientMsg_SpecialAbility;
    fromPartial<I_1 extends {
        ability_index?: number;
        target_entindex?: number;
    } & {
        ability_index?: number;
        target_entindex?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_SpecialAbility>]: never; }>(object: I_1): CDOTAClientMsg_SpecialAbility;
};
export declare const CDOTAClientMsg_SetEnemyStartingPosition: {
    fromJSON(object: any): CDOTAClientMsg_SetEnemyStartingPosition;
    toJSON(message: CDOTAClientMsg_SetEnemyStartingPosition): unknown;
    create<I extends {
        enemy_player_id?: number;
        enemy_starting_position?: number;
    } & {
        enemy_player_id?: number;
        enemy_starting_position?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_SetEnemyStartingPosition>]: never; }>(base?: I): CDOTAClientMsg_SetEnemyStartingPosition;
    fromPartial<I_1 extends {
        enemy_player_id?: number;
        enemy_starting_position?: number;
    } & {
        enemy_player_id?: number;
        enemy_starting_position?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_SetEnemyStartingPosition>]: never; }>(object: I_1): CDOTAClientMsg_SetEnemyStartingPosition;
};
export declare const CDOTAClientMsg_SetDesiredWardPlacement: {
    fromJSON(object: any): CDOTAClientMsg_SetDesiredWardPlacement;
    toJSON(message: CDOTAClientMsg_SetDesiredWardPlacement): unknown;
    create<I extends {
        ward_index?: number;
        ward_x?: number;
        ward_y?: number;
    } & {
        ward_index?: number;
        ward_x?: number;
        ward_y?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_SetDesiredWardPlacement>]: never; }>(base?: I): CDOTAClientMsg_SetDesiredWardPlacement;
    fromPartial<I_1 extends {
        ward_index?: number;
        ward_x?: number;
        ward_y?: number;
    } & {
        ward_index?: number;
        ward_x?: number;
        ward_y?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_SetDesiredWardPlacement>]: never; }>(object: I_1): CDOTAClientMsg_SetDesiredWardPlacement;
};
export declare const CDOTAClientMsg_RollDice: {
    fromJSON(object: any): CDOTAClientMsg_RollDice;
    toJSON(message: CDOTAClientMsg_RollDice): unknown;
    create<I extends {
        channel_type?: number;
        roll_min?: number;
        roll_max?: number;
    } & {
        channel_type?: number;
        roll_min?: number;
        roll_max?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_RollDice>]: never; }>(base?: I): CDOTAClientMsg_RollDice;
    fromPartial<I_1 extends {
        channel_type?: number;
        roll_min?: number;
        roll_max?: number;
    } & {
        channel_type?: number;
        roll_min?: number;
        roll_max?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_RollDice>]: never; }>(object: I_1): CDOTAClientMsg_RollDice;
};
export declare const CDOTAClientMsg_FlipCoin: {
    fromJSON(object: any): CDOTAClientMsg_FlipCoin;
    toJSON(message: CDOTAClientMsg_FlipCoin): unknown;
    create<I extends {
        channel_type?: number;
    } & {
        channel_type?: number;
    } & { [K in Exclude<keyof I, "channel_type">]: never; }>(base?: I): CDOTAClientMsg_FlipCoin;
    fromPartial<I_1 extends {
        channel_type?: number;
    } & {
        channel_type?: number;
    } & { [K_1 in Exclude<keyof I_1, "channel_type">]: never; }>(object: I_1): CDOTAClientMsg_FlipCoin;
};
export declare const CDOTAClientMsg_RequestItemSuggestions: {
    fromJSON(_: any): CDOTAClientMsg_RequestItemSuggestions;
    toJSON(_: CDOTAClientMsg_RequestItemSuggestions): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CDOTAClientMsg_RequestItemSuggestions;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CDOTAClientMsg_RequestItemSuggestions;
};
export declare const CDOTAClientMsg_MakeTeamCaptain: {
    fromJSON(object: any): CDOTAClientMsg_MakeTeamCaptain;
    toJSON(message: CDOTAClientMsg_MakeTeamCaptain): unknown;
    create<I extends {
        player_id?: number;
    } & {
        player_id?: number;
    } & { [K in Exclude<keyof I, "player_id">]: never; }>(base?: I): CDOTAClientMsg_MakeTeamCaptain;
    fromPartial<I_1 extends {
        player_id?: number;
    } & {
        player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "player_id">]: never; }>(object: I_1): CDOTAClientMsg_MakeTeamCaptain;
};
export declare const CDOTAClientMsg_HelpTipSystemStateChanged: {
    fromJSON(object: any): CDOTAClientMsg_HelpTipSystemStateChanged;
    toJSON(message: CDOTAClientMsg_HelpTipSystemStateChanged): unknown;
    create<I extends {
        tip_displayed?: boolean;
    } & {
        tip_displayed?: boolean;
    } & { [K in Exclude<keyof I, "tip_displayed">]: never; }>(base?: I): CDOTAClientMsg_HelpTipSystemStateChanged;
    fromPartial<I_1 extends {
        tip_displayed?: boolean;
    } & {
        tip_displayed?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "tip_displayed">]: never; }>(object: I_1): CDOTAClientMsg_HelpTipSystemStateChanged;
};
export declare const CDOTAClientMsg_RequestBulkCombatLog: {
    fromJSON(object: any): CDOTAClientMsg_RequestBulkCombatLog;
    toJSON(message: CDOTAClientMsg_RequestBulkCombatLog): unknown;
    create<I extends {
        game_time?: number;
        duration?: number;
        recent_player_death?: boolean;
        player_id?: number;
    } & {
        game_time?: number;
        duration?: number;
        recent_player_death?: boolean;
        player_id?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_RequestBulkCombatLog>]: never; }>(base?: I): CDOTAClientMsg_RequestBulkCombatLog;
    fromPartial<I_1 extends {
        game_time?: number;
        duration?: number;
        recent_player_death?: boolean;
        player_id?: number;
    } & {
        game_time?: number;
        duration?: number;
        recent_player_death?: boolean;
        player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_RequestBulkCombatLog>]: never; }>(object: I_1): CDOTAClientMsg_RequestBulkCombatLog;
};
export declare const CDOTAClientMsg_AbilityDraftRequestAbility: {
    fromJSON(object: any): CDOTAClientMsg_AbilityDraftRequestAbility;
    toJSON(message: CDOTAClientMsg_AbilityDraftRequestAbility): unknown;
    create<I extends {
        requested_ability_id?: number;
        ctrl_is_down?: boolean;
    } & {
        requested_ability_id?: number;
        ctrl_is_down?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_AbilityDraftRequestAbility>]: never; }>(base?: I): CDOTAClientMsg_AbilityDraftRequestAbility;
    fromPartial<I_1 extends {
        requested_ability_id?: number;
        ctrl_is_down?: boolean;
    } & {
        requested_ability_id?: number;
        ctrl_is_down?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_AbilityDraftRequestAbility>]: never; }>(object: I_1): CDOTAClientMsg_AbilityDraftRequestAbility;
};
export declare const CDOTAClientMsg_GuideSelectOption: {
    fromJSON(object: any): CDOTAClientMsg_GuideSelectOption;
    toJSON(message: CDOTAClientMsg_GuideSelectOption): unknown;
    create<I extends {
        option?: number;
        force_recalculate?: boolean;
    } & {
        option?: number;
        force_recalculate?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_GuideSelectOption>]: never; }>(base?: I): CDOTAClientMsg_GuideSelectOption;
    fromPartial<I_1 extends {
        option?: number;
        force_recalculate?: boolean;
    } & {
        option?: number;
        force_recalculate?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_GuideSelectOption>]: never; }>(object: I_1): CDOTAClientMsg_GuideSelectOption;
};
export declare const CDOTAClientMsg_GuideSelected: {
    fromJSON(object: any): CDOTAClientMsg_GuideSelected;
    toJSON(message: CDOTAClientMsg_GuideSelected): unknown;
    create<I extends {
        guide_workshop_id?: string;
        is_plus_guide?: boolean;
    } & {
        guide_workshop_id?: string;
        is_plus_guide?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_GuideSelected>]: never; }>(base?: I): CDOTAClientMsg_GuideSelected;
    fromPartial<I_1 extends {
        guide_workshop_id?: string;
        is_plus_guide?: boolean;
    } & {
        guide_workshop_id?: string;
        is_plus_guide?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_GuideSelected>]: never; }>(object: I_1): CDOTAClientMsg_GuideSelected;
};
export declare const CDOTAClientMsg_DamageReport: {
    fromJSON(object: any): CDOTAClientMsg_DamageReport;
    toJSON(message: CDOTAClientMsg_DamageReport): unknown;
    create<I extends {
        target_hero_id?: number;
        source_hero_id?: number;
        damage_amount?: number;
        broadcast?: boolean;
    } & {
        target_hero_id?: number;
        source_hero_id?: number;
        damage_amount?: number;
        broadcast?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_DamageReport>]: never; }>(base?: I): CDOTAClientMsg_DamageReport;
    fromPartial<I_1 extends {
        target_hero_id?: number;
        source_hero_id?: number;
        damage_amount?: number;
        broadcast?: boolean;
    } & {
        target_hero_id?: number;
        source_hero_id?: number;
        damage_amount?: number;
        broadcast?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_DamageReport>]: never; }>(object: I_1): CDOTAClientMsg_DamageReport;
};
export declare const CDOTAClientMsg_SalutePlayer: {
    fromJSON(object: any): CDOTAClientMsg_SalutePlayer;
    toJSON(message: CDOTAClientMsg_SalutePlayer): unknown;
    create<I extends {
        target_player_id?: number;
        event_id?: number;
    } & {
        target_player_id?: number;
        event_id?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_SalutePlayer>]: never; }>(base?: I): CDOTAClientMsg_SalutePlayer;
    fromPartial<I_1 extends {
        target_player_id?: number;
        event_id?: number;
    } & {
        target_player_id?: number;
        event_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_SalutePlayer>]: never; }>(object: I_1): CDOTAClientMsg_SalutePlayer;
};
export declare const CDOTAClientMsg_TipAlert: {
    fromJSON(object: any): CDOTAClientMsg_TipAlert;
    toJSON(message: CDOTAClientMsg_TipAlert): unknown;
    create<I extends {
        tip_text?: string;
    } & {
        tip_text?: string;
    } & { [K in Exclude<keyof I, "tip_text">]: never; }>(base?: I): CDOTAClientMsg_TipAlert;
    fromPartial<I_1 extends {
        tip_text?: string;
    } & {
        tip_text?: string;
    } & { [K_1 in Exclude<keyof I_1, "tip_text">]: never; }>(object: I_1): CDOTAClientMsg_TipAlert;
};
export declare const CDOTAClientMsg_EmptyTeleportAlert: {
    fromJSON(object: any): CDOTAClientMsg_EmptyTeleportAlert;
    toJSON(message: CDOTAClientMsg_EmptyTeleportAlert): unknown;
    create<I extends {
        target_entindex?: number;
    } & {
        target_entindex?: number;
    } & { [K in Exclude<keyof I, "target_entindex">]: never; }>(base?: I): CDOTAClientMsg_EmptyTeleportAlert;
    fromPartial<I_1 extends {
        target_entindex?: number;
    } & {
        target_entindex?: number;
    } & { [K_1 in Exclude<keyof I_1, "target_entindex">]: never; }>(object: I_1): CDOTAClientMsg_EmptyTeleportAlert;
};
export declare const CDOTAClientMsg_SetCavernMapVariant: {
    fromJSON(object: any): CDOTAClientMsg_SetCavernMapVariant;
    toJSON(message: CDOTAClientMsg_SetCavernMapVariant): unknown;
    create<I extends {
        map_variant?: number;
    } & {
        map_variant?: number;
    } & { [K in Exclude<keyof I, "map_variant">]: never; }>(base?: I): CDOTAClientMsg_SetCavernMapVariant;
    fromPartial<I_1 extends {
        map_variant?: number;
    } & {
        map_variant?: number;
    } & { [K_1 in Exclude<keyof I_1, "map_variant">]: never; }>(object: I_1): CDOTAClientMsg_SetCavernMapVariant;
};
export declare const CDOTAClientMsg_PauseGameOrder: {
    fromJSON(object: any): CDOTAClientMsg_PauseGameOrder;
    toJSON(message: CDOTAClientMsg_PauseGameOrder): unknown;
    create<I extends {
        order_id?: number;
        data?: number;
    } & {
        order_id?: number;
        data?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_PauseGameOrder>]: never; }>(base?: I): CDOTAClientMsg_PauseGameOrder;
    fromPartial<I_1 extends {
        order_id?: number;
        data?: number;
    } & {
        order_id?: number;
        data?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_PauseGameOrder>]: never; }>(object: I_1): CDOTAClientMsg_PauseGameOrder;
};
export declare const CDOTAClientMsg_VersusScene_PlayerBehavior: {
    fromJSON(object: any): CDOTAClientMsg_VersusScene_PlayerBehavior;
    toJSON(message: CDOTAClientMsg_VersusScene_PlayerBehavior): unknown;
    create<I extends {
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
    } & { [K_5 in Exclude<keyof I, keyof CDOTAClientMsg_VersusScene_PlayerBehavior>]: never; }>(base?: I): CDOTAClientMsg_VersusScene_PlayerBehavior;
    fromPartial<I_1 extends {
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
    } & { [K_11 in Exclude<keyof I_1, keyof CDOTAClientMsg_VersusScene_PlayerBehavior>]: never; }>(object: I_1): CDOTAClientMsg_VersusScene_PlayerBehavior;
};
export declare const CDOTAClientMsg_EmptyItemSlotAlert: {
    fromJSON(object: any): CDOTAClientMsg_EmptyItemSlotAlert;
    toJSON(message: CDOTAClientMsg_EmptyItemSlotAlert): unknown;
    create<I extends {
        target_entindex?: number;
        slot_index?: number;
    } & {
        target_entindex?: number;
        slot_index?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_EmptyItemSlotAlert>]: never; }>(base?: I): CDOTAClientMsg_EmptyItemSlotAlert;
    fromPartial<I_1 extends {
        target_entindex?: number;
        slot_index?: number;
    } & {
        target_entindex?: number;
        slot_index?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_EmptyItemSlotAlert>]: never; }>(object: I_1): CDOTAClientMsg_EmptyItemSlotAlert;
};
export declare const CDOTAClientMsg_AddOverwatchReportMarker: {
    fromJSON(object: any): CDOTAClientMsg_AddOverwatchReportMarker;
    toJSON(message: CDOTAClientMsg_AddOverwatchReportMarker): unknown;
    create<I extends {
        target_player_id?: number;
        reason?: EOverwatchReportReason;
        seconds_ago?: number;
    } & {
        target_player_id?: number;
        reason?: EOverwatchReportReason;
        seconds_ago?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_AddOverwatchReportMarker>]: never; }>(base?: I): CDOTAClientMsg_AddOverwatchReportMarker;
    fromPartial<I_1 extends {
        target_player_id?: number;
        reason?: EOverwatchReportReason;
        seconds_ago?: number;
    } & {
        target_player_id?: number;
        reason?: EOverwatchReportReason;
        seconds_ago?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_AddOverwatchReportMarker>]: never; }>(object: I_1): CDOTAClientMsg_AddOverwatchReportMarker;
};
export declare const CDOTAClientMsg_AddCommunicationsReportMarker: {
    fromJSON(object: any): CDOTAClientMsg_AddCommunicationsReportMarker;
    toJSON(message: CDOTAClientMsg_AddCommunicationsReportMarker): unknown;
    create<I extends {
        target_player_id?: number;
    } & {
        target_player_id?: number;
    } & { [K in Exclude<keyof I, "target_player_id">]: never; }>(base?: I): CDOTAClientMsg_AddCommunicationsReportMarker;
    fromPartial<I_1 extends {
        target_player_id?: number;
    } & {
        target_player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "target_player_id">]: never; }>(object: I_1): CDOTAClientMsg_AddCommunicationsReportMarker;
};
export declare const CDOTAClientMsg_AddCommunicationsBlockMarker: {
    fromJSON(object: any): CDOTAClientMsg_AddCommunicationsBlockMarker;
    toJSON(message: CDOTAClientMsg_AddCommunicationsBlockMarker): unknown;
    create<I extends {
        target_player_id?: number;
    } & {
        target_player_id?: number;
    } & { [K in Exclude<keyof I, "target_player_id">]: never; }>(base?: I): CDOTAClientMsg_AddCommunicationsBlockMarker;
    fromPartial<I_1 extends {
        target_player_id?: number;
    } & {
        target_player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "target_player_id">]: never; }>(object: I_1): CDOTAClientMsg_AddCommunicationsBlockMarker;
};
export declare const CDOTAClientMsg_AghsStatusAlert: {
    fromJSON(object: any): CDOTAClientMsg_AghsStatusAlert;
    toJSON(message: CDOTAClientMsg_AghsStatusAlert): unknown;
    create<I extends {
        source_player_id?: number;
        target_player_id?: number;
        target_entindex?: number;
        alert_type?: number;
    } & {
        source_player_id?: number;
        target_player_id?: number;
        target_entindex?: number;
        alert_type?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_AghsStatusAlert>]: never; }>(base?: I): CDOTAClientMsg_AghsStatusAlert;
    fromPartial<I_1 extends {
        source_player_id?: number;
        target_player_id?: number;
        target_entindex?: number;
        alert_type?: number;
    } & {
        source_player_id?: number;
        target_player_id?: number;
        target_entindex?: number;
        alert_type?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_AghsStatusAlert>]: never; }>(object: I_1): CDOTAClientMsg_AghsStatusAlert;
};
export declare const CDOTAClientMsg_PerfReport: {
    fromJSON(object: any): CDOTAClientMsg_PerfReport;
    toJSON(message: CDOTAClientMsg_PerfReport): unknown;
    create<I extends {
        average_frame_time?: number;
        max_frame_time?: number;
        average_compute_time?: number;
        max_compute_time?: number;
        average_client_tick_time?: number;
        max_client_tick_time?: number;
        average_client_simulate_time?: number;
        max_client_simulate_time?: number;
        average_output_time?: number;
        max_output_time?: number;
        average_wait_for_rendering_to_complete_time?: number;
        max_wait_for_rendering_to_complete_time?: number;
        average_swap_time?: number;
        max_swap_time?: number;
        average_frame_update_time?: number;
        max_frame_update_time?: number;
        average_idle_time?: number;
        max_idle_time?: number;
        average_input_processing_time?: number;
        max_input_processing_time?: number;
    } & {
        average_frame_time?: number;
        max_frame_time?: number;
        average_compute_time?: number;
        max_compute_time?: number;
        average_client_tick_time?: number;
        max_client_tick_time?: number;
        average_client_simulate_time?: number;
        max_client_simulate_time?: number;
        average_output_time?: number;
        max_output_time?: number;
        average_wait_for_rendering_to_complete_time?: number;
        max_wait_for_rendering_to_complete_time?: number;
        average_swap_time?: number;
        max_swap_time?: number;
        average_frame_update_time?: number;
        max_frame_update_time?: number;
        average_idle_time?: number;
        max_idle_time?: number;
        average_input_processing_time?: number;
        max_input_processing_time?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_PerfReport>]: never; }>(base?: I): CDOTAClientMsg_PerfReport;
    fromPartial<I_1 extends {
        average_frame_time?: number;
        max_frame_time?: number;
        average_compute_time?: number;
        max_compute_time?: number;
        average_client_tick_time?: number;
        max_client_tick_time?: number;
        average_client_simulate_time?: number;
        max_client_simulate_time?: number;
        average_output_time?: number;
        max_output_time?: number;
        average_wait_for_rendering_to_complete_time?: number;
        max_wait_for_rendering_to_complete_time?: number;
        average_swap_time?: number;
        max_swap_time?: number;
        average_frame_update_time?: number;
        max_frame_update_time?: number;
        average_idle_time?: number;
        max_idle_time?: number;
        average_input_processing_time?: number;
        max_input_processing_time?: number;
    } & {
        average_frame_time?: number;
        max_frame_time?: number;
        average_compute_time?: number;
        max_compute_time?: number;
        average_client_tick_time?: number;
        max_client_tick_time?: number;
        average_client_simulate_time?: number;
        max_client_simulate_time?: number;
        average_output_time?: number;
        max_output_time?: number;
        average_wait_for_rendering_to_complete_time?: number;
        max_wait_for_rendering_to_complete_time?: number;
        average_swap_time?: number;
        max_swap_time?: number;
        average_frame_update_time?: number;
        max_frame_update_time?: number;
        average_idle_time?: number;
        max_idle_time?: number;
        average_input_processing_time?: number;
        max_input_processing_time?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_PerfReport>]: never; }>(object: I_1): CDOTAClientMsg_PerfReport;
};
export declare const CDOTAClientMsg_ContextualTips_Subscribe_Entry: {
    fromJSON(object: any): CDOTAClientMsg_ContextualTips_Subscribe_Entry;
    toJSON(message: CDOTAClientMsg_ContextualTips_Subscribe_Entry): unknown;
    create<I extends {
        unsubscribe?: boolean;
        tip_id?: number;
        prior_display_count?: number;
        variants_seen?: number[];
    } & {
        unsubscribe?: boolean;
        tip_id?: number;
        prior_display_count?: number;
        variants_seen?: number[] & number[] & { [K in Exclude<keyof I["variants_seen"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CDOTAClientMsg_ContextualTips_Subscribe_Entry>]: never; }>(base?: I): CDOTAClientMsg_ContextualTips_Subscribe_Entry;
    fromPartial<I_1 extends {
        unsubscribe?: boolean;
        tip_id?: number;
        prior_display_count?: number;
        variants_seen?: number[];
    } & {
        unsubscribe?: boolean;
        tip_id?: number;
        prior_display_count?: number;
        variants_seen?: number[] & number[] & { [K_2 in Exclude<keyof I_1["variants_seen"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CDOTAClientMsg_ContextualTips_Subscribe_Entry>]: never; }>(object: I_1): CDOTAClientMsg_ContextualTips_Subscribe_Entry;
};
export declare const CDOTAClientMsg_ContextualTips_Subscribe: {
    fromJSON(object: any): CDOTAClientMsg_ContextualTips_Subscribe;
    toJSON(message: CDOTAClientMsg_ContextualTips_Subscribe): unknown;
    create<I extends {
        tips?: {
            unsubscribe?: boolean;
            tip_id?: number;
            prior_display_count?: number;
            variants_seen?: number[];
        }[];
    } & {
        tips?: {
            unsubscribe?: boolean;
            tip_id?: number;
            prior_display_count?: number;
            variants_seen?: number[];
        }[] & ({
            unsubscribe?: boolean;
            tip_id?: number;
            prior_display_count?: number;
            variants_seen?: number[];
        } & {
            unsubscribe?: boolean;
            tip_id?: number;
            prior_display_count?: number;
            variants_seen?: number[] & number[] & { [K in Exclude<keyof I["tips"][number]["variants_seen"], keyof number[]>]: never; };
        } & { [K_1 in Exclude<keyof I["tips"][number], keyof CDOTAClientMsg_ContextualTips_Subscribe_Entry>]: never; })[] & { [K_2 in Exclude<keyof I["tips"], keyof {
            unsubscribe?: boolean;
            tip_id?: number;
            prior_display_count?: number;
            variants_seen?: number[];
        }[]>]: never; };
    } & { [K_3 in Exclude<keyof I, "tips">]: never; }>(base?: I): CDOTAClientMsg_ContextualTips_Subscribe;
    fromPartial<I_1 extends {
        tips?: {
            unsubscribe?: boolean;
            tip_id?: number;
            prior_display_count?: number;
            variants_seen?: number[];
        }[];
    } & {
        tips?: {
            unsubscribe?: boolean;
            tip_id?: number;
            prior_display_count?: number;
            variants_seen?: number[];
        }[] & ({
            unsubscribe?: boolean;
            tip_id?: number;
            prior_display_count?: number;
            variants_seen?: number[];
        } & {
            unsubscribe?: boolean;
            tip_id?: number;
            prior_display_count?: number;
            variants_seen?: number[] & number[] & { [K_4 in Exclude<keyof I_1["tips"][number]["variants_seen"], keyof number[]>]: never; };
        } & { [K_5 in Exclude<keyof I_1["tips"][number], keyof CDOTAClientMsg_ContextualTips_Subscribe_Entry>]: never; })[] & { [K_6 in Exclude<keyof I_1["tips"], keyof {
            unsubscribe?: boolean;
            tip_id?: number;
            prior_display_count?: number;
            variants_seen?: number[];
        }[]>]: never; };
    } & { [K_7 in Exclude<keyof I_1, "tips">]: never; }>(object: I_1): CDOTAClientMsg_ContextualTips_Subscribe;
};
export declare const CDOTAClientMsg_ChatMessage: {
    fromJSON(object: any): CDOTAClientMsg_ChatMessage;
    toJSON(message: CDOTAClientMsg_ChatMessage): unknown;
    create<I extends {
        channel_type?: number;
        message_text?: string;
    } & {
        channel_type?: number;
        message_text?: string;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_ChatMessage>]: never; }>(base?: I): CDOTAClientMsg_ChatMessage;
    fromPartial<I_1 extends {
        channel_type?: number;
        message_text?: string;
    } & {
        channel_type?: number;
        message_text?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_ChatMessage>]: never; }>(object: I_1): CDOTAClientMsg_ChatMessage;
};
export declare const CDOTAClientMsg_DuelAccepted: {
    fromJSON(object: any): CDOTAClientMsg_DuelAccepted;
    toJSON(message: CDOTAClientMsg_DuelAccepted): unknown;
    create<I extends {
        challenger_player_id?: number;
        accepter_player_id?: number;
    } & {
        challenger_player_id?: number;
        accepter_player_id?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAClientMsg_DuelAccepted>]: never; }>(base?: I): CDOTAClientMsg_DuelAccepted;
    fromPartial<I_1 extends {
        challenger_player_id?: number;
        accepter_player_id?: number;
    } & {
        challenger_player_id?: number;
        accepter_player_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAClientMsg_DuelAccepted>]: never; }>(object: I_1): CDOTAClientMsg_DuelAccepted;
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
