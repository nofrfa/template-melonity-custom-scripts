import { CSOEconItemAttribute, CSOEconItemEquipped } from "./base_gcmessages";
import { CMsgMatchMatchmakingStats, CMvpData } from "./dota_gcmessages_common_match_management";
import { DOTA_GC_TEAM, EDOTAMMRBoostType, EEvent } from "./dota_shared_enums";
export declare const protobufPackage = "";
export interface CDOTAMatchMetadataFile {
    version: number;
    match_id: string;
    metadata: CDOTAMatchMetadata | undefined;
    private_metadata: string;
}
export interface CDOTAMatchMetadata {
    teams: CDOTAMatchMetadata_Team[];
    lobby_id: string;
    report_until_time: string;
    event_game_custom_table: string;
    primary_event_id: number;
    matchmaking_stats: CMsgMatchMatchmakingStats | undefined;
    mvp_data: CMvpData | undefined;
    guild_challenge_progress: CDOTAMatchMetadata_GuildChallengeProgress[];
    custom_post_game_table: string;
    match_tips: CDOTAMatchMetadata_Tip[];
}
export interface CDOTAMatchMetadata_EconItem {
    def_index: number;
    quality: number;
    attribute: CSOEconItemAttribute[];
    style: number;
    equipped_state: CSOEconItemEquipped[];
}
export interface CDOTAMatchMetadata_Team {
    dota_team: number;
    players: CDOTAMatchMetadata_Team_Player[];
    graph_experience: number[];
    graph_gold_earned: number[];
    graph_net_worth: number[];
    cm_first_pick: boolean;
    cm_captain_player_id: number;
    cm_penalty: number;
}
export interface CDOTAMatchMetadata_Team_PlayerKill {
    victim_slot: number;
    count: number;
}
export interface CDOTAMatchMetadata_Team_ItemPurchase {
    item_id: number;
    purchase_time: number;
}
export interface CDOTAMatchMetadata_Team_InventorySnapshot {
    item_id: number[];
    game_time: number;
    kills: number;
    deaths: number;
    assists: number;
    level: number;
    backpack_item_id: number[];
    neutral_item_id: number;
}
export interface CDOTAMatchMetadata_Team_AutoStyleCriteria {
    name_token: number;
    value: number;
}
export interface CDOTAMatchMetadata_Team_StrangeGemProgress {
    kill_eater_type: number;
    gem_item_def_index: number;
    required_hero_id: number;
    starting_value: number;
    ending_value: number;
    owner_item_def_index: number;
    owner_item_id: string;
}
export interface CDOTAMatchMetadata_Team_VictoryPrediction {
    item_id: string;
    item_def_index: number;
    starting_value: number;
    is_victory: boolean;
}
export interface CDOTAMatchMetadata_Team_SubChallenge {
    slot_id: number;
    start_value: number;
    end_value: number;
    completed: boolean;
}
export interface CDOTAMatchMetadata_Team_CavernChallengeResult {
    completed_path_id: number;
    claimed_room_id: number;
}
export interface CDOTAMatchMetadata_Team_ActionGrant {
    action_id: number;
    quantity: number;
    audit: number;
    requires_win: boolean;
    audit_data: string;
}
export interface CDOTAMatchMetadata_Team_CandyGrant {
    points: number;
    reason: number;
}
export interface CDOTAMatchMetadata_Team_PeriodicResourceData {
    periodic_resource_id: number;
    remaining: number;
    max: number;
}
export interface CDOTAMatchMetadata_Team_EventData {
    event_id: number;
    event_points: number;
    challenge_instance_id: number;
    challenge_quest_id: number;
    challenge_quest_challenge_id: number;
    challenge_completed: boolean;
    challenge_rank_completed: number;
    challenge_rank_previously_completed: number;
    event_owned: boolean;
    sub_challenges_with_progress: CDOTAMatchMetadata_Team_SubChallenge[];
    wager_winnings: number;
    cavern_challenge_active: boolean;
    cavern_challenge_winnings: number;
    amount_wagered: number;
    periodic_point_adjustments: number;
    cavern_challenge_map_results: CDOTAMatchMetadata_Team_CavernChallengeResult[];
    cavern_challenge_plus_shard_winnings: number;
    actions_granted: CDOTAMatchMetadata_Team_ActionGrant[];
    cavern_crawl_map_variant: number;
    team_wager_bonus_pct: number;
    wager_streak_pct: number;
    candy_points_granted: CDOTAMatchMetadata_Team_CandyGrant[];
    active_season_id: number;
    cavern_crawl_half_credit: boolean;
    periodic_resources: CDOTAMatchMetadata_Team_PeriodicResourceData[];
}
export interface CDOTAMatchMetadata_Team_FeaturedGamemodeProgress {
    start_value: number;
    end_value: number;
    max_value: number;
}
export interface CDOTAMatchMetadata_Team_Player {
    ability_upgrades: number[];
    player_slot: number;
    kills: CDOTAMatchMetadata_Team_PlayerKill[];
    items: CDOTAMatchMetadata_Team_ItemPurchase[];
    avg_kills_x16: number;
    avg_deaths_x16: number;
    avg_assists_x16: number;
    avg_gpm_x16: number;
    avg_xpm_x16: number;
    best_kills_x16: number;
    best_assists_x16: number;
    best_gpm_x16: number;
    best_xpm_x16: number;
    win_streak: number;
    best_win_streak: number;
    fight_score: number;
    farm_score: number;
    support_score: number;
    push_score: number;
    level_up_times: number[];
    graph_net_worth: number[];
    inventory_snapshot: CDOTAMatchMetadata_Team_InventorySnapshot[];
    avg_stats_calibrated: boolean;
    auto_style_criteria: CDOTAMatchMetadata_Team_AutoStyleCriteria[];
    event_data: CDOTAMatchMetadata_Team_EventData[];
    strange_gem_progress: CDOTAMatchMetadata_Team_StrangeGemProgress[];
    hero_xp: number;
    camps_stacked: number;
    victory_prediction: CDOTAMatchMetadata_Team_VictoryPrediction[];
    lane_selection_flags: number;
    rampages: number;
    triple_kills: number;
    aegis_snatched: number;
    rapiers_purchased: number;
    couriers_killed: number;
    net_worth_rank: number;
    support_gold_spent: number;
    observer_wards_placed: number;
    sentry_wards_placed: number;
    wards_dewarded: number;
    stun_duration: number;
    rank_mmr_boost_type: EDOTAMMRBoostType;
    contract_progress: CDOTAMatchMetadata_Team_Player_ContractProgress[];
    guild_ids: number[];
    graph_hero_damage: number[];
    team_number: DOTA_GC_TEAM;
    team_slot: number;
    featured_gamemode_progress: CDOTAMatchMetadata_Team_FeaturedGamemodeProgress | undefined;
    featured_hero_sticker_index: number;
    featured_hero_sticker_quality: number;
    equipped_econ_items: CDOTAMatchMetadata_EconItem[];
}
export interface CDOTAMatchMetadata_Team_Player_ContractProgress {
    guild_id: number;
    event_id: number;
    challenge_instance_id: number;
    challenge_parameter: number;
    contract_stars: number;
    contract_slot: number;
    completed: boolean;
}
export interface CDOTAMatchMetadata_GuildChallengeProgress {
    guild_id: number;
    event_id: EEvent;
    challenge_instance_id: number;
    challenge_parameter: number;
    challenge_timestamp: number;
    challenge_progress_at_start: number;
    challenge_progress_accumulated: number;
    individual_progress: CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress[];
}
export interface CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress {
    progress: number;
    player_slot: number;
}
export interface CDOTAMatchMetadata_Tip {
    source_player_slot: number;
    target_player_slot: number;
    tip_amount: number;
    event_id: EEvent;
}
export interface CDOTAMatchPrivateMetadata {
    teams: CDOTAMatchPrivateMetadata_Team[];
    graph_win_probability: number[];
    string_names: CDOTAMatchPrivateMetadata_StringName[];
}
export interface CDOTAMatchPrivateMetadata_StringName {
    id: number;
    name: string;
}
export interface CDOTAMatchPrivateMetadata_Team {
    dota_team: number;
    players: CDOTAMatchPrivateMetadata_Team_Player[];
    buildings: CDOTAMatchPrivateMetadata_Team_Building[];
}
export interface CDOTAMatchPrivateMetadata_Team_Player {
    player_slot: number;
    position_stream: string;
    combat_segments: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment[];
    damage_unit_names: string[];
    buff_records: CDOTAMatchPrivateMetadata_Team_Player_BuffRecord[];
    graph_kills: number[];
    graph_deaths: number[];
    graph_assists: number[];
    graph_lasthits: number[];
    graph_denies: number[];
    gold_received: CDOTAMatchPrivateMetadata_Team_Player_GoldReceived | undefined;
    xp_received: CDOTAMatchPrivateMetadata_Team_Player_XPReceived | undefined;
    team_number: DOTA_GC_TEAM;
    team_slot: number;
}
export interface CDOTAMatchPrivateMetadata_Team_Player_CombatSegment {
    game_time: number;
    damage_by_ability: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility[];
    healing_by_ability: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility[];
}
export interface CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility {
    source_unit_index: number;
    ability_id: number;
    by_hero_targets: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget[];
}
export interface CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget {
    hero_id: number;
    damage: number;
}
export interface CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility {
    source_unit_index: number;
    ability_id: number;
    by_hero_targets: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget[];
}
export interface CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget {
    hero_id: number;
    healing: number;
}
export interface CDOTAMatchPrivateMetadata_Team_Player_BuffRecord {
    buff_ability_id: number;
    buff_modifier_name: string;
    by_hero_targets: CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget[];
}
export interface CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget {
    hero_id: number;
    elapsed_duration: number;
    is_hidden: boolean;
}
export interface CDOTAMatchPrivateMetadata_Team_Player_GoldReceived {
    creep: number;
    heroes: number;
    bounty_runes: number;
    passive: number;
    buildings: number;
    abilities: number;
    wards: number;
    other: number;
}
export interface CDOTAMatchPrivateMetadata_Team_Player_XPReceived {
    creep: number;
    heroes: number;
    roshan: number;
    tome_of_knowledge: number;
    outpost: number;
    other: number;
}
export interface CDOTAMatchPrivateMetadata_Team_Building {
    unit_name: string;
    position_quant_x: number;
    position_quant_y: number;
    death_time: number;
}
export declare const CDOTAMatchMetadataFile: {
    fromJSON(object: any): CDOTAMatchMetadataFile;
    toJSON(message: CDOTAMatchMetadataFile): unknown;
    create<I extends {
        version?: number;
        match_id?: string;
        metadata?: {
            teams?: {
                dota_team?: number;
                players?: {
                    ability_upgrades?: number[];
                    player_slot?: number;
                    kills?: {
                        victim_slot?: number;
                        count?: number;
                    }[];
                    items?: {
                        item_id?: number;
                        purchase_time?: number;
                    }[];
                    avg_kills_x16?: number;
                    avg_deaths_x16?: number;
                    avg_assists_x16?: number;
                    avg_gpm_x16?: number;
                    avg_xpm_x16?: number;
                    best_kills_x16?: number;
                    best_assists_x16?: number;
                    best_gpm_x16?: number;
                    best_xpm_x16?: number;
                    win_streak?: number;
                    best_win_streak?: number;
                    fight_score?: number;
                    farm_score?: number;
                    support_score?: number;
                    push_score?: number;
                    level_up_times?: number[];
                    graph_net_worth?: number[];
                    inventory_snapshot?: {
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    }[];
                    avg_stats_calibrated?: boolean;
                    auto_style_criteria?: {
                        name_token?: number;
                        value?: number;
                    }[];
                    event_data?: {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    }[];
                    strange_gem_progress?: {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    }[];
                    hero_xp?: number;
                    camps_stacked?: number;
                    victory_prediction?: {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    }[];
                    lane_selection_flags?: number;
                    rampages?: number;
                    triple_kills?: number;
                    aegis_snatched?: number;
                    rapiers_purchased?: number;
                    couriers_killed?: number;
                    net_worth_rank?: number;
                    support_gold_spent?: number;
                    observer_wards_placed?: number;
                    sentry_wards_placed?: number;
                    wards_dewarded?: number;
                    stun_duration?: number;
                    rank_mmr_boost_type?: EDOTAMMRBoostType;
                    contract_progress?: {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[];
                    guild_ids?: number[];
                    graph_hero_damage?: number[];
                    team_number?: DOTA_GC_TEAM;
                    team_slot?: number;
                    featured_gamemode_progress?: {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    };
                    featured_hero_sticker_index?: number;
                    featured_hero_sticker_quality?: number;
                    equipped_econ_items?: {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    }[];
                }[];
                graph_experience?: number[];
                graph_gold_earned?: number[];
                graph_net_worth?: number[];
                cm_first_pick?: boolean;
                cm_captain_player_id?: number;
                cm_penalty?: number;
            }[];
            lobby_id?: string;
            report_until_time?: string;
            event_game_custom_table?: string;
            primary_event_id?: number;
            matchmaking_stats?: {
                average_queue_time?: number;
                maximum_queue_time?: number;
                behavior_score_variance?: import("./dota_gcmessages_common_match_management").EMatchBehaviorScoreVariance;
            };
            mvp_data?: {
                mvps?: {
                    player_slot?: number;
                    accolades?: {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    }[];
                }[];
            };
            guild_challenge_progress?: {
                guild_id?: number;
                event_id?: EEvent;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                challenge_timestamp?: number;
                challenge_progress_at_start?: number;
                challenge_progress_accumulated?: number;
                individual_progress?: {
                    progress?: number;
                    player_slot?: number;
                }[];
            }[];
            custom_post_game_table?: string;
            match_tips?: {
                source_player_slot?: number;
                target_player_slot?: number;
                tip_amount?: number;
                event_id?: EEvent;
            }[];
        };
        private_metadata?: string;
    } & {
        version?: number;
        match_id?: string;
        metadata?: {
            teams?: {
                dota_team?: number;
                players?: {
                    ability_upgrades?: number[];
                    player_slot?: number;
                    kills?: {
                        victim_slot?: number;
                        count?: number;
                    }[];
                    items?: {
                        item_id?: number;
                        purchase_time?: number;
                    }[];
                    avg_kills_x16?: number;
                    avg_deaths_x16?: number;
                    avg_assists_x16?: number;
                    avg_gpm_x16?: number;
                    avg_xpm_x16?: number;
                    best_kills_x16?: number;
                    best_assists_x16?: number;
                    best_gpm_x16?: number;
                    best_xpm_x16?: number;
                    win_streak?: number;
                    best_win_streak?: number;
                    fight_score?: number;
                    farm_score?: number;
                    support_score?: number;
                    push_score?: number;
                    level_up_times?: number[];
                    graph_net_worth?: number[];
                    inventory_snapshot?: {
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    }[];
                    avg_stats_calibrated?: boolean;
                    auto_style_criteria?: {
                        name_token?: number;
                        value?: number;
                    }[];
                    event_data?: {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    }[];
                    strange_gem_progress?: {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    }[];
                    hero_xp?: number;
                    camps_stacked?: number;
                    victory_prediction?: {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    }[];
                    lane_selection_flags?: number;
                    rampages?: number;
                    triple_kills?: number;
                    aegis_snatched?: number;
                    rapiers_purchased?: number;
                    couriers_killed?: number;
                    net_worth_rank?: number;
                    support_gold_spent?: number;
                    observer_wards_placed?: number;
                    sentry_wards_placed?: number;
                    wards_dewarded?: number;
                    stun_duration?: number;
                    rank_mmr_boost_type?: EDOTAMMRBoostType;
                    contract_progress?: {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[];
                    guild_ids?: number[];
                    graph_hero_damage?: number[];
                    team_number?: DOTA_GC_TEAM;
                    team_slot?: number;
                    featured_gamemode_progress?: {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    };
                    featured_hero_sticker_index?: number;
                    featured_hero_sticker_quality?: number;
                    equipped_econ_items?: {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    }[];
                }[];
                graph_experience?: number[];
                graph_gold_earned?: number[];
                graph_net_worth?: number[];
                cm_first_pick?: boolean;
                cm_captain_player_id?: number;
                cm_penalty?: number;
            }[];
            lobby_id?: string;
            report_until_time?: string;
            event_game_custom_table?: string;
            primary_event_id?: number;
            matchmaking_stats?: {
                average_queue_time?: number;
                maximum_queue_time?: number;
                behavior_score_variance?: import("./dota_gcmessages_common_match_management").EMatchBehaviorScoreVariance;
            };
            mvp_data?: {
                mvps?: {
                    player_slot?: number;
                    accolades?: {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    }[];
                }[];
            };
            guild_challenge_progress?: {
                guild_id?: number;
                event_id?: EEvent;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                challenge_timestamp?: number;
                challenge_progress_at_start?: number;
                challenge_progress_accumulated?: number;
                individual_progress?: {
                    progress?: number;
                    player_slot?: number;
                }[];
            }[];
            custom_post_game_table?: string;
            match_tips?: {
                source_player_slot?: number;
                target_player_slot?: number;
                tip_amount?: number;
                event_id?: EEvent;
            }[];
        } & {
            teams?: {
                dota_team?: number;
                players?: {
                    ability_upgrades?: number[];
                    player_slot?: number;
                    kills?: {
                        victim_slot?: number;
                        count?: number;
                    }[];
                    items?: {
                        item_id?: number;
                        purchase_time?: number;
                    }[];
                    avg_kills_x16?: number;
                    avg_deaths_x16?: number;
                    avg_assists_x16?: number;
                    avg_gpm_x16?: number;
                    avg_xpm_x16?: number;
                    best_kills_x16?: number;
                    best_assists_x16?: number;
                    best_gpm_x16?: number;
                    best_xpm_x16?: number;
                    win_streak?: number;
                    best_win_streak?: number;
                    fight_score?: number;
                    farm_score?: number;
                    support_score?: number;
                    push_score?: number;
                    level_up_times?: number[];
                    graph_net_worth?: number[];
                    inventory_snapshot?: {
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    }[];
                    avg_stats_calibrated?: boolean;
                    auto_style_criteria?: {
                        name_token?: number;
                        value?: number;
                    }[];
                    event_data?: {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    }[];
                    strange_gem_progress?: {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    }[];
                    hero_xp?: number;
                    camps_stacked?: number;
                    victory_prediction?: {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    }[];
                    lane_selection_flags?: number;
                    rampages?: number;
                    triple_kills?: number;
                    aegis_snatched?: number;
                    rapiers_purchased?: number;
                    couriers_killed?: number;
                    net_worth_rank?: number;
                    support_gold_spent?: number;
                    observer_wards_placed?: number;
                    sentry_wards_placed?: number;
                    wards_dewarded?: number;
                    stun_duration?: number;
                    rank_mmr_boost_type?: EDOTAMMRBoostType;
                    contract_progress?: {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[];
                    guild_ids?: number[];
                    graph_hero_damage?: number[];
                    team_number?: DOTA_GC_TEAM;
                    team_slot?: number;
                    featured_gamemode_progress?: {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    };
                    featured_hero_sticker_index?: number;
                    featured_hero_sticker_quality?: number;
                    equipped_econ_items?: {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    }[];
                }[];
                graph_experience?: number[];
                graph_gold_earned?: number[];
                graph_net_worth?: number[];
                cm_first_pick?: boolean;
                cm_captain_player_id?: number;
                cm_penalty?: number;
            }[] & ({
                dota_team?: number;
                players?: {
                    ability_upgrades?: number[];
                    player_slot?: number;
                    kills?: {
                        victim_slot?: number;
                        count?: number;
                    }[];
                    items?: {
                        item_id?: number;
                        purchase_time?: number;
                    }[];
                    avg_kills_x16?: number;
                    avg_deaths_x16?: number;
                    avg_assists_x16?: number;
                    avg_gpm_x16?: number;
                    avg_xpm_x16?: number;
                    best_kills_x16?: number;
                    best_assists_x16?: number;
                    best_gpm_x16?: number;
                    best_xpm_x16?: number;
                    win_streak?: number;
                    best_win_streak?: number;
                    fight_score?: number;
                    farm_score?: number;
                    support_score?: number;
                    push_score?: number;
                    level_up_times?: number[];
                    graph_net_worth?: number[];
                    inventory_snapshot?: {
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    }[];
                    avg_stats_calibrated?: boolean;
                    auto_style_criteria?: {
                        name_token?: number;
                        value?: number;
                    }[];
                    event_data?: {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    }[];
                    strange_gem_progress?: {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    }[];
                    hero_xp?: number;
                    camps_stacked?: number;
                    victory_prediction?: {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    }[];
                    lane_selection_flags?: number;
                    rampages?: number;
                    triple_kills?: number;
                    aegis_snatched?: number;
                    rapiers_purchased?: number;
                    couriers_killed?: number;
                    net_worth_rank?: number;
                    support_gold_spent?: number;
                    observer_wards_placed?: number;
                    sentry_wards_placed?: number;
                    wards_dewarded?: number;
                    stun_duration?: number;
                    rank_mmr_boost_type?: EDOTAMMRBoostType;
                    contract_progress?: {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[];
                    guild_ids?: number[];
                    graph_hero_damage?: number[];
                    team_number?: DOTA_GC_TEAM;
                    team_slot?: number;
                    featured_gamemode_progress?: {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    };
                    featured_hero_sticker_index?: number;
                    featured_hero_sticker_quality?: number;
                    equipped_econ_items?: {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    }[];
                }[];
                graph_experience?: number[];
                graph_gold_earned?: number[];
                graph_net_worth?: number[];
                cm_first_pick?: boolean;
                cm_captain_player_id?: number;
                cm_penalty?: number;
            } & {
                dota_team?: number;
                players?: {
                    ability_upgrades?: number[];
                    player_slot?: number;
                    kills?: {
                        victim_slot?: number;
                        count?: number;
                    }[];
                    items?: {
                        item_id?: number;
                        purchase_time?: number;
                    }[];
                    avg_kills_x16?: number;
                    avg_deaths_x16?: number;
                    avg_assists_x16?: number;
                    avg_gpm_x16?: number;
                    avg_xpm_x16?: number;
                    best_kills_x16?: number;
                    best_assists_x16?: number;
                    best_gpm_x16?: number;
                    best_xpm_x16?: number;
                    win_streak?: number;
                    best_win_streak?: number;
                    fight_score?: number;
                    farm_score?: number;
                    support_score?: number;
                    push_score?: number;
                    level_up_times?: number[];
                    graph_net_worth?: number[];
                    inventory_snapshot?: {
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    }[];
                    avg_stats_calibrated?: boolean;
                    auto_style_criteria?: {
                        name_token?: number;
                        value?: number;
                    }[];
                    event_data?: {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    }[];
                    strange_gem_progress?: {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    }[];
                    hero_xp?: number;
                    camps_stacked?: number;
                    victory_prediction?: {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    }[];
                    lane_selection_flags?: number;
                    rampages?: number;
                    triple_kills?: number;
                    aegis_snatched?: number;
                    rapiers_purchased?: number;
                    couriers_killed?: number;
                    net_worth_rank?: number;
                    support_gold_spent?: number;
                    observer_wards_placed?: number;
                    sentry_wards_placed?: number;
                    wards_dewarded?: number;
                    stun_duration?: number;
                    rank_mmr_boost_type?: EDOTAMMRBoostType;
                    contract_progress?: {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[];
                    guild_ids?: number[];
                    graph_hero_damage?: number[];
                    team_number?: DOTA_GC_TEAM;
                    team_slot?: number;
                    featured_gamemode_progress?: {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    };
                    featured_hero_sticker_index?: number;
                    featured_hero_sticker_quality?: number;
                    equipped_econ_items?: {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    }[];
                }[] & ({
                    ability_upgrades?: number[];
                    player_slot?: number;
                    kills?: {
                        victim_slot?: number;
                        count?: number;
                    }[];
                    items?: {
                        item_id?: number;
                        purchase_time?: number;
                    }[];
                    avg_kills_x16?: number;
                    avg_deaths_x16?: number;
                    avg_assists_x16?: number;
                    avg_gpm_x16?: number;
                    avg_xpm_x16?: number;
                    best_kills_x16?: number;
                    best_assists_x16?: number;
                    best_gpm_x16?: number;
                    best_xpm_x16?: number;
                    win_streak?: number;
                    best_win_streak?: number;
                    fight_score?: number;
                    farm_score?: number;
                    support_score?: number;
                    push_score?: number;
                    level_up_times?: number[];
                    graph_net_worth?: number[];
                    inventory_snapshot?: {
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    }[];
                    avg_stats_calibrated?: boolean;
                    auto_style_criteria?: {
                        name_token?: number;
                        value?: number;
                    }[];
                    event_data?: {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    }[];
                    strange_gem_progress?: {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    }[];
                    hero_xp?: number;
                    camps_stacked?: number;
                    victory_prediction?: {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    }[];
                    lane_selection_flags?: number;
                    rampages?: number;
                    triple_kills?: number;
                    aegis_snatched?: number;
                    rapiers_purchased?: number;
                    couriers_killed?: number;
                    net_worth_rank?: number;
                    support_gold_spent?: number;
                    observer_wards_placed?: number;
                    sentry_wards_placed?: number;
                    wards_dewarded?: number;
                    stun_duration?: number;
                    rank_mmr_boost_type?: EDOTAMMRBoostType;
                    contract_progress?: {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[];
                    guild_ids?: number[];
                    graph_hero_damage?: number[];
                    team_number?: DOTA_GC_TEAM;
                    team_slot?: number;
                    featured_gamemode_progress?: {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    };
                    featured_hero_sticker_index?: number;
                    featured_hero_sticker_quality?: number;
                    equipped_econ_items?: {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    }[];
                } & {
                    ability_upgrades?: number[] & number[] & { [K in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["ability_upgrades"], keyof number[]>]: never; };
                    player_slot?: number;
                    kills?: {
                        victim_slot?: number;
                        count?: number;
                    }[] & ({
                        victim_slot?: number;
                        count?: number;
                    } & {
                        victim_slot?: number;
                        count?: number;
                    } & { [K_1 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["kills"][number], keyof CDOTAMatchMetadata_Team_PlayerKill>]: never; })[] & { [K_2 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["kills"], keyof {
                        victim_slot?: number;
                        count?: number;
                    }[]>]: never; };
                    items?: {
                        item_id?: number;
                        purchase_time?: number;
                    }[] & ({
                        item_id?: number;
                        purchase_time?: number;
                    } & {
                        item_id?: number;
                        purchase_time?: number;
                    } & { [K_3 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["items"][number], keyof CDOTAMatchMetadata_Team_ItemPurchase>]: never; })[] & { [K_4 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["items"], keyof {
                        item_id?: number;
                        purchase_time?: number;
                    }[]>]: never; };
                    avg_kills_x16?: number;
                    avg_deaths_x16?: number;
                    avg_assists_x16?: number;
                    avg_gpm_x16?: number;
                    avg_xpm_x16?: number;
                    best_kills_x16?: number;
                    best_assists_x16?: number;
                    best_gpm_x16?: number;
                    best_xpm_x16?: number;
                    win_streak?: number;
                    best_win_streak?: number;
                    fight_score?: number;
                    farm_score?: number;
                    support_score?: number;
                    push_score?: number;
                    level_up_times?: number[] & number[] & { [K_5 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["level_up_times"], keyof number[]>]: never; };
                    graph_net_worth?: number[] & number[] & { [K_6 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["graph_net_worth"], keyof number[]>]: never; };
                    inventory_snapshot?: {
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    }[] & ({
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    } & {
                        item_id?: number[] & number[] & { [K_7 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["inventory_snapshot"][number]["item_id"], keyof number[]>]: never; };
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[] & number[] & { [K_8 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["inventory_snapshot"][number]["backpack_item_id"], keyof number[]>]: never; };
                        neutral_item_id?: number;
                    } & { [K_9 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["inventory_snapshot"][number], keyof CDOTAMatchMetadata_Team_InventorySnapshot>]: never; })[] & { [K_10 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["inventory_snapshot"], keyof {
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    }[]>]: never; };
                    avg_stats_calibrated?: boolean;
                    auto_style_criteria?: {
                        name_token?: number;
                        value?: number;
                    }[] & ({
                        name_token?: number;
                        value?: number;
                    } & {
                        name_token?: number;
                        value?: number;
                    } & { [K_11 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["auto_style_criteria"][number], keyof CDOTAMatchMetadata_Team_AutoStyleCriteria>]: never; })[] & { [K_12 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["auto_style_criteria"], keyof {
                        name_token?: number;
                        value?: number;
                    }[]>]: never; };
                    event_data?: {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    }[] & ({
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    } & {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[] & ({
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        } & {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        } & { [K_13 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number]["sub_challenges_with_progress"][number], keyof CDOTAMatchMetadata_Team_SubChallenge>]: never; })[] & { [K_14 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number]["sub_challenges_with_progress"], keyof {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[]>]: never; };
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[] & ({
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        } & {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        } & { [K_15 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number]["cavern_challenge_map_results"][number], keyof CDOTAMatchMetadata_Team_CavernChallengeResult>]: never; })[] & { [K_16 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number]["cavern_challenge_map_results"], keyof {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[]>]: never; };
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[] & ({
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        } & {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        } & { [K_17 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number]["actions_granted"][number], keyof CDOTAMatchMetadata_Team_ActionGrant>]: never; })[] & { [K_18 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number]["actions_granted"], keyof {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[]>]: never; };
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[] & ({
                            points?: number;
                            reason?: number;
                        } & {
                            points?: number;
                            reason?: number;
                        } & { [K_19 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number]["candy_points_granted"][number], keyof CDOTAMatchMetadata_Team_CandyGrant>]: never; })[] & { [K_20 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number]["candy_points_granted"], keyof {
                            points?: number;
                            reason?: number;
                        }[]>]: never; };
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
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
                        } & { [K_21 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number]["periodic_resources"][number], keyof CDOTAMatchMetadata_Team_PeriodicResourceData>]: never; })[] & { [K_22 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number]["periodic_resources"], keyof {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[]>]: never; };
                    } & { [K_23 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number], keyof CDOTAMatchMetadata_Team_EventData>]: never; })[] & { [K_24 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"], keyof {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    }[]>]: never; };
                    strange_gem_progress?: {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    }[] & ({
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    } & {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    } & { [K_25 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["strange_gem_progress"][number], keyof CDOTAMatchMetadata_Team_StrangeGemProgress>]: never; })[] & { [K_26 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["strange_gem_progress"], keyof {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    }[]>]: never; };
                    hero_xp?: number;
                    camps_stacked?: number;
                    victory_prediction?: {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    }[] & ({
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    } & {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    } & { [K_27 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["victory_prediction"][number], keyof CDOTAMatchMetadata_Team_VictoryPrediction>]: never; })[] & { [K_28 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["victory_prediction"], keyof {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    }[]>]: never; };
                    lane_selection_flags?: number;
                    rampages?: number;
                    triple_kills?: number;
                    aegis_snatched?: number;
                    rapiers_purchased?: number;
                    couriers_killed?: number;
                    net_worth_rank?: number;
                    support_gold_spent?: number;
                    observer_wards_placed?: number;
                    sentry_wards_placed?: number;
                    wards_dewarded?: number;
                    stun_duration?: number;
                    rank_mmr_boost_type?: EDOTAMMRBoostType;
                    contract_progress?: {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[] & ({
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    } & {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    } & { [K_29 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["contract_progress"][number], keyof CDOTAMatchMetadata_Team_Player_ContractProgress>]: never; })[] & { [K_30 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["contract_progress"], keyof {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[]>]: never; };
                    guild_ids?: number[] & number[] & { [K_31 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["guild_ids"], keyof number[]>]: never; };
                    graph_hero_damage?: number[] & number[] & { [K_32 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["graph_hero_damage"], keyof number[]>]: never; };
                    team_number?: DOTA_GC_TEAM;
                    team_slot?: number;
                    featured_gamemode_progress?: {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    } & {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    } & { [K_33 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["featured_gamemode_progress"], keyof CDOTAMatchMetadata_Team_FeaturedGamemodeProgress>]: never; };
                    featured_hero_sticker_index?: number;
                    featured_hero_sticker_quality?: number;
                    equipped_econ_items?: {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    }[] & ({
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    } & {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[] & ({
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        } & {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        } & { [K_34 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["equipped_econ_items"][number]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_35 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["equipped_econ_items"][number]["attribute"], keyof {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[]>]: never; };
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[] & ({
                            new_class?: number;
                            new_slot?: number;
                        } & {
                            new_class?: number;
                            new_slot?: number;
                        } & { [K_36 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["equipped_econ_items"][number]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_37 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["equipped_econ_items"][number]["equipped_state"], keyof {
                            new_class?: number;
                            new_slot?: number;
                        }[]>]: never; };
                    } & { [K_38 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["equipped_econ_items"][number], keyof CDOTAMatchMetadata_EconItem>]: never; })[] & { [K_39 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["equipped_econ_items"], keyof {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    }[]>]: never; };
                } & { [K_40 in Exclude<keyof I["metadata"]["teams"][number]["players"][number], keyof CDOTAMatchMetadata_Team_Player>]: never; })[] & { [K_41 in Exclude<keyof I["metadata"]["teams"][number]["players"], keyof {
                    ability_upgrades?: number[];
                    player_slot?: number;
                    kills?: {
                        victim_slot?: number;
                        count?: number;
                    }[];
                    items?: {
                        item_id?: number;
                        purchase_time?: number;
                    }[];
                    avg_kills_x16?: number;
                    avg_deaths_x16?: number;
                    avg_assists_x16?: number;
                    avg_gpm_x16?: number;
                    avg_xpm_x16?: number;
                    best_kills_x16?: number;
                    best_assists_x16?: number;
                    best_gpm_x16?: number;
                    best_xpm_x16?: number;
                    win_streak?: number;
                    best_win_streak?: number;
                    fight_score?: number;
                    farm_score?: number;
                    support_score?: number;
                    push_score?: number;
                    level_up_times?: number[];
                    graph_net_worth?: number[];
                    inventory_snapshot?: {
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    }[];
                    avg_stats_calibrated?: boolean;
                    auto_style_criteria?: {
                        name_token?: number;
                        value?: number;
                    }[];
                    event_data?: {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    }[];
                    strange_gem_progress?: {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    }[];
                    hero_xp?: number;
                    camps_stacked?: number;
                    victory_prediction?: {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    }[];
                    lane_selection_flags?: number;
                    rampages?: number;
                    triple_kills?: number;
                    aegis_snatched?: number;
                    rapiers_purchased?: number;
                    couriers_killed?: number;
                    net_worth_rank?: number;
                    support_gold_spent?: number;
                    observer_wards_placed?: number;
                    sentry_wards_placed?: number;
                    wards_dewarded?: number;
                    stun_duration?: number;
                    rank_mmr_boost_type?: EDOTAMMRBoostType;
                    contract_progress?: {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[];
                    guild_ids?: number[];
                    graph_hero_damage?: number[];
                    team_number?: DOTA_GC_TEAM;
                    team_slot?: number;
                    featured_gamemode_progress?: {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    };
                    featured_hero_sticker_index?: number;
                    featured_hero_sticker_quality?: number;
                    equipped_econ_items?: {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    }[];
                }[]>]: never; };
                graph_experience?: number[] & number[] & { [K_42 in Exclude<keyof I["metadata"]["teams"][number]["graph_experience"], keyof number[]>]: never; };
                graph_gold_earned?: number[] & number[] & { [K_43 in Exclude<keyof I["metadata"]["teams"][number]["graph_gold_earned"], keyof number[]>]: never; };
                graph_net_worth?: number[] & number[] & { [K_44 in Exclude<keyof I["metadata"]["teams"][number]["graph_net_worth"], keyof number[]>]: never; };
                cm_first_pick?: boolean;
                cm_captain_player_id?: number;
                cm_penalty?: number;
            } & { [K_45 in Exclude<keyof I["metadata"]["teams"][number], keyof CDOTAMatchMetadata_Team>]: never; })[] & { [K_46 in Exclude<keyof I["metadata"]["teams"], keyof {
                dota_team?: number;
                players?: {
                    ability_upgrades?: number[];
                    player_slot?: number;
                    kills?: {
                        victim_slot?: number;
                        count?: number;
                    }[];
                    items?: {
                        item_id?: number;
                        purchase_time?: number;
                    }[];
                    avg_kills_x16?: number;
                    avg_deaths_x16?: number;
                    avg_assists_x16?: number;
                    avg_gpm_x16?: number;
                    avg_xpm_x16?: number;
                    best_kills_x16?: number;
                    best_assists_x16?: number;
                    best_gpm_x16?: number;
                    best_xpm_x16?: number;
                    win_streak?: number;
                    best_win_streak?: number;
                    fight_score?: number;
                    farm_score?: number;
                    support_score?: number;
                    push_score?: number;
                    level_up_times?: number[];
                    graph_net_worth?: number[];
                    inventory_snapshot?: {
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    }[];
                    avg_stats_calibrated?: boolean;
                    auto_style_criteria?: {
                        name_token?: number;
                        value?: number;
                    }[];
                    event_data?: {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    }[];
                    strange_gem_progress?: {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    }[];
                    hero_xp?: number;
                    camps_stacked?: number;
                    victory_prediction?: {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    }[];
                    lane_selection_flags?: number;
                    rampages?: number;
                    triple_kills?: number;
                    aegis_snatched?: number;
                    rapiers_purchased?: number;
                    couriers_killed?: number;
                    net_worth_rank?: number;
                    support_gold_spent?: number;
                    observer_wards_placed?: number;
                    sentry_wards_placed?: number;
                    wards_dewarded?: number;
                    stun_duration?: number;
                    rank_mmr_boost_type?: EDOTAMMRBoostType;
                    contract_progress?: {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[];
                    guild_ids?: number[];
                    graph_hero_damage?: number[];
                    team_number?: DOTA_GC_TEAM;
                    team_slot?: number;
                    featured_gamemode_progress?: {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    };
                    featured_hero_sticker_index?: number;
                    featured_hero_sticker_quality?: number;
                    equipped_econ_items?: {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    }[];
                }[];
                graph_experience?: number[];
                graph_gold_earned?: number[];
                graph_net_worth?: number[];
                cm_first_pick?: boolean;
                cm_captain_player_id?: number;
                cm_penalty?: number;
            }[]>]: never; };
            lobby_id?: string;
            report_until_time?: string;
            event_game_custom_table?: string;
            primary_event_id?: number;
            matchmaking_stats?: {
                average_queue_time?: number;
                maximum_queue_time?: number;
                behavior_score_variance?: import("./dota_gcmessages_common_match_management").EMatchBehaviorScoreVariance;
            } & {
                average_queue_time?: number;
                maximum_queue_time?: number;
                behavior_score_variance?: import("./dota_gcmessages_common_match_management").EMatchBehaviorScoreVariance;
            } & { [K_47 in Exclude<keyof I["metadata"]["matchmaking_stats"], keyof CMsgMatchMatchmakingStats>]: never; };
            mvp_data?: {
                mvps?: {
                    player_slot?: number;
                    accolades?: {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    }[];
                }[];
            } & {
                mvps?: {
                    player_slot?: number;
                    accolades?: {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    }[];
                }[] & ({
                    player_slot?: number;
                    accolades?: {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    }[];
                } & {
                    player_slot?: number;
                    accolades?: {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    }[] & ({
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    } & {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    } & { [K_48 in Exclude<keyof I["metadata"]["mvp_data"]["mvps"][number]["accolades"][number], keyof import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade>]: never; })[] & { [K_49 in Exclude<keyof I["metadata"]["mvp_data"]["mvps"][number]["accolades"], keyof {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    }[]>]: never; };
                } & { [K_50 in Exclude<keyof I["metadata"]["mvp_data"]["mvps"][number], keyof import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum>]: never; })[] & { [K_51 in Exclude<keyof I["metadata"]["mvp_data"]["mvps"], keyof {
                    player_slot?: number;
                    accolades?: {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    }[];
                }[]>]: never; };
            } & { [K_52 in Exclude<keyof I["metadata"]["mvp_data"], "mvps">]: never; };
            guild_challenge_progress?: {
                guild_id?: number;
                event_id?: EEvent;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                challenge_timestamp?: number;
                challenge_progress_at_start?: number;
                challenge_progress_accumulated?: number;
                individual_progress?: {
                    progress?: number;
                    player_slot?: number;
                }[];
            }[] & ({
                guild_id?: number;
                event_id?: EEvent;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                challenge_timestamp?: number;
                challenge_progress_at_start?: number;
                challenge_progress_accumulated?: number;
                individual_progress?: {
                    progress?: number;
                    player_slot?: number;
                }[];
            } & {
                guild_id?: number;
                event_id?: EEvent;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                challenge_timestamp?: number;
                challenge_progress_at_start?: number;
                challenge_progress_accumulated?: number;
                individual_progress?: {
                    progress?: number;
                    player_slot?: number;
                }[] & ({
                    progress?: number;
                    player_slot?: number;
                } & {
                    progress?: number;
                    player_slot?: number;
                } & { [K_53 in Exclude<keyof I["metadata"]["guild_challenge_progress"][number]["individual_progress"][number], keyof CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress>]: never; })[] & { [K_54 in Exclude<keyof I["metadata"]["guild_challenge_progress"][number]["individual_progress"], keyof {
                    progress?: number;
                    player_slot?: number;
                }[]>]: never; };
            } & { [K_55 in Exclude<keyof I["metadata"]["guild_challenge_progress"][number], keyof CDOTAMatchMetadata_GuildChallengeProgress>]: never; })[] & { [K_56 in Exclude<keyof I["metadata"]["guild_challenge_progress"], keyof {
                guild_id?: number;
                event_id?: EEvent;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                challenge_timestamp?: number;
                challenge_progress_at_start?: number;
                challenge_progress_accumulated?: number;
                individual_progress?: {
                    progress?: number;
                    player_slot?: number;
                }[];
            }[]>]: never; };
            custom_post_game_table?: string;
            match_tips?: {
                source_player_slot?: number;
                target_player_slot?: number;
                tip_amount?: number;
                event_id?: EEvent;
            }[] & ({
                source_player_slot?: number;
                target_player_slot?: number;
                tip_amount?: number;
                event_id?: EEvent;
            } & {
                source_player_slot?: number;
                target_player_slot?: number;
                tip_amount?: number;
                event_id?: EEvent;
            } & { [K_57 in Exclude<keyof I["metadata"]["match_tips"][number], keyof CDOTAMatchMetadata_Tip>]: never; })[] & { [K_58 in Exclude<keyof I["metadata"]["match_tips"], keyof {
                source_player_slot?: number;
                target_player_slot?: number;
                tip_amount?: number;
                event_id?: EEvent;
            }[]>]: never; };
        } & { [K_59 in Exclude<keyof I["metadata"], keyof CDOTAMatchMetadata>]: never; };
        private_metadata?: string;
    } & { [K_60 in Exclude<keyof I, keyof CDOTAMatchMetadataFile>]: never; }>(base?: I): CDOTAMatchMetadataFile;
    fromPartial<I_1 extends {
        version?: number;
        match_id?: string;
        metadata?: {
            teams?: {
                dota_team?: number;
                players?: {
                    ability_upgrades?: number[];
                    player_slot?: number;
                    kills?: {
                        victim_slot?: number;
                        count?: number;
                    }[];
                    items?: {
                        item_id?: number;
                        purchase_time?: number;
                    }[];
                    avg_kills_x16?: number;
                    avg_deaths_x16?: number;
                    avg_assists_x16?: number;
                    avg_gpm_x16?: number;
                    avg_xpm_x16?: number;
                    best_kills_x16?: number;
                    best_assists_x16?: number;
                    best_gpm_x16?: number;
                    best_xpm_x16?: number;
                    win_streak?: number;
                    best_win_streak?: number;
                    fight_score?: number;
                    farm_score?: number;
                    support_score?: number;
                    push_score?: number;
                    level_up_times?: number[];
                    graph_net_worth?: number[];
                    inventory_snapshot?: {
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    }[];
                    avg_stats_calibrated?: boolean;
                    auto_style_criteria?: {
                        name_token?: number;
                        value?: number;
                    }[];
                    event_data?: {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    }[];
                    strange_gem_progress?: {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    }[];
                    hero_xp?: number;
                    camps_stacked?: number;
                    victory_prediction?: {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    }[];
                    lane_selection_flags?: number;
                    rampages?: number;
                    triple_kills?: number;
                    aegis_snatched?: number;
                    rapiers_purchased?: number;
                    couriers_killed?: number;
                    net_worth_rank?: number;
                    support_gold_spent?: number;
                    observer_wards_placed?: number;
                    sentry_wards_placed?: number;
                    wards_dewarded?: number;
                    stun_duration?: number;
                    rank_mmr_boost_type?: EDOTAMMRBoostType;
                    contract_progress?: {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[];
                    guild_ids?: number[];
                    graph_hero_damage?: number[];
                    team_number?: DOTA_GC_TEAM;
                    team_slot?: number;
                    featured_gamemode_progress?: {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    };
                    featured_hero_sticker_index?: number;
                    featured_hero_sticker_quality?: number;
                    equipped_econ_items?: {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    }[];
                }[];
                graph_experience?: number[];
                graph_gold_earned?: number[];
                graph_net_worth?: number[];
                cm_first_pick?: boolean;
                cm_captain_player_id?: number;
                cm_penalty?: number;
            }[];
            lobby_id?: string;
            report_until_time?: string;
            event_game_custom_table?: string;
            primary_event_id?: number;
            matchmaking_stats?: {
                average_queue_time?: number;
                maximum_queue_time?: number;
                behavior_score_variance?: import("./dota_gcmessages_common_match_management").EMatchBehaviorScoreVariance;
            };
            mvp_data?: {
                mvps?: {
                    player_slot?: number;
                    accolades?: {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    }[];
                }[];
            };
            guild_challenge_progress?: {
                guild_id?: number;
                event_id?: EEvent;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                challenge_timestamp?: number;
                challenge_progress_at_start?: number;
                challenge_progress_accumulated?: number;
                individual_progress?: {
                    progress?: number;
                    player_slot?: number;
                }[];
            }[];
            custom_post_game_table?: string;
            match_tips?: {
                source_player_slot?: number;
                target_player_slot?: number;
                tip_amount?: number;
                event_id?: EEvent;
            }[];
        };
        private_metadata?: string;
    } & {
        version?: number;
        match_id?: string;
        metadata?: {
            teams?: {
                dota_team?: number;
                players?: {
                    ability_upgrades?: number[];
                    player_slot?: number;
                    kills?: {
                        victim_slot?: number;
                        count?: number;
                    }[];
                    items?: {
                        item_id?: number;
                        purchase_time?: number;
                    }[];
                    avg_kills_x16?: number;
                    avg_deaths_x16?: number;
                    avg_assists_x16?: number;
                    avg_gpm_x16?: number;
                    avg_xpm_x16?: number;
                    best_kills_x16?: number;
                    best_assists_x16?: number;
                    best_gpm_x16?: number;
                    best_xpm_x16?: number;
                    win_streak?: number;
                    best_win_streak?: number;
                    fight_score?: number;
                    farm_score?: number;
                    support_score?: number;
                    push_score?: number;
                    level_up_times?: number[];
                    graph_net_worth?: number[];
                    inventory_snapshot?: {
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    }[];
                    avg_stats_calibrated?: boolean;
                    auto_style_criteria?: {
                        name_token?: number;
                        value?: number;
                    }[];
                    event_data?: {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    }[];
                    strange_gem_progress?: {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    }[];
                    hero_xp?: number;
                    camps_stacked?: number;
                    victory_prediction?: {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    }[];
                    lane_selection_flags?: number;
                    rampages?: number;
                    triple_kills?: number;
                    aegis_snatched?: number;
                    rapiers_purchased?: number;
                    couriers_killed?: number;
                    net_worth_rank?: number;
                    support_gold_spent?: number;
                    observer_wards_placed?: number;
                    sentry_wards_placed?: number;
                    wards_dewarded?: number;
                    stun_duration?: number;
                    rank_mmr_boost_type?: EDOTAMMRBoostType;
                    contract_progress?: {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[];
                    guild_ids?: number[];
                    graph_hero_damage?: number[];
                    team_number?: DOTA_GC_TEAM;
                    team_slot?: number;
                    featured_gamemode_progress?: {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    };
                    featured_hero_sticker_index?: number;
                    featured_hero_sticker_quality?: number;
                    equipped_econ_items?: {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    }[];
                }[];
                graph_experience?: number[];
                graph_gold_earned?: number[];
                graph_net_worth?: number[];
                cm_first_pick?: boolean;
                cm_captain_player_id?: number;
                cm_penalty?: number;
            }[];
            lobby_id?: string;
            report_until_time?: string;
            event_game_custom_table?: string;
            primary_event_id?: number;
            matchmaking_stats?: {
                average_queue_time?: number;
                maximum_queue_time?: number;
                behavior_score_variance?: import("./dota_gcmessages_common_match_management").EMatchBehaviorScoreVariance;
            };
            mvp_data?: {
                mvps?: {
                    player_slot?: number;
                    accolades?: {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    }[];
                }[];
            };
            guild_challenge_progress?: {
                guild_id?: number;
                event_id?: EEvent;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                challenge_timestamp?: number;
                challenge_progress_at_start?: number;
                challenge_progress_accumulated?: number;
                individual_progress?: {
                    progress?: number;
                    player_slot?: number;
                }[];
            }[];
            custom_post_game_table?: string;
            match_tips?: {
                source_player_slot?: number;
                target_player_slot?: number;
                tip_amount?: number;
                event_id?: EEvent;
            }[];
        } & {
            teams?: {
                dota_team?: number;
                players?: {
                    ability_upgrades?: number[];
                    player_slot?: number;
                    kills?: {
                        victim_slot?: number;
                        count?: number;
                    }[];
                    items?: {
                        item_id?: number;
                        purchase_time?: number;
                    }[];
                    avg_kills_x16?: number;
                    avg_deaths_x16?: number;
                    avg_assists_x16?: number;
                    avg_gpm_x16?: number;
                    avg_xpm_x16?: number;
                    best_kills_x16?: number;
                    best_assists_x16?: number;
                    best_gpm_x16?: number;
                    best_xpm_x16?: number;
                    win_streak?: number;
                    best_win_streak?: number;
                    fight_score?: number;
                    farm_score?: number;
                    support_score?: number;
                    push_score?: number;
                    level_up_times?: number[];
                    graph_net_worth?: number[];
                    inventory_snapshot?: {
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    }[];
                    avg_stats_calibrated?: boolean;
                    auto_style_criteria?: {
                        name_token?: number;
                        value?: number;
                    }[];
                    event_data?: {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    }[];
                    strange_gem_progress?: {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    }[];
                    hero_xp?: number;
                    camps_stacked?: number;
                    victory_prediction?: {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    }[];
                    lane_selection_flags?: number;
                    rampages?: number;
                    triple_kills?: number;
                    aegis_snatched?: number;
                    rapiers_purchased?: number;
                    couriers_killed?: number;
                    net_worth_rank?: number;
                    support_gold_spent?: number;
                    observer_wards_placed?: number;
                    sentry_wards_placed?: number;
                    wards_dewarded?: number;
                    stun_duration?: number;
                    rank_mmr_boost_type?: EDOTAMMRBoostType;
                    contract_progress?: {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[];
                    guild_ids?: number[];
                    graph_hero_damage?: number[];
                    team_number?: DOTA_GC_TEAM;
                    team_slot?: number;
                    featured_gamemode_progress?: {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    };
                    featured_hero_sticker_index?: number;
                    featured_hero_sticker_quality?: number;
                    equipped_econ_items?: {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    }[];
                }[];
                graph_experience?: number[];
                graph_gold_earned?: number[];
                graph_net_worth?: number[];
                cm_first_pick?: boolean;
                cm_captain_player_id?: number;
                cm_penalty?: number;
            }[] & ({
                dota_team?: number;
                players?: {
                    ability_upgrades?: number[];
                    player_slot?: number;
                    kills?: {
                        victim_slot?: number;
                        count?: number;
                    }[];
                    items?: {
                        item_id?: number;
                        purchase_time?: number;
                    }[];
                    avg_kills_x16?: number;
                    avg_deaths_x16?: number;
                    avg_assists_x16?: number;
                    avg_gpm_x16?: number;
                    avg_xpm_x16?: number;
                    best_kills_x16?: number;
                    best_assists_x16?: number;
                    best_gpm_x16?: number;
                    best_xpm_x16?: number;
                    win_streak?: number;
                    best_win_streak?: number;
                    fight_score?: number;
                    farm_score?: number;
                    support_score?: number;
                    push_score?: number;
                    level_up_times?: number[];
                    graph_net_worth?: number[];
                    inventory_snapshot?: {
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    }[];
                    avg_stats_calibrated?: boolean;
                    auto_style_criteria?: {
                        name_token?: number;
                        value?: number;
                    }[];
                    event_data?: {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    }[];
                    strange_gem_progress?: {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    }[];
                    hero_xp?: number;
                    camps_stacked?: number;
                    victory_prediction?: {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    }[];
                    lane_selection_flags?: number;
                    rampages?: number;
                    triple_kills?: number;
                    aegis_snatched?: number;
                    rapiers_purchased?: number;
                    couriers_killed?: number;
                    net_worth_rank?: number;
                    support_gold_spent?: number;
                    observer_wards_placed?: number;
                    sentry_wards_placed?: number;
                    wards_dewarded?: number;
                    stun_duration?: number;
                    rank_mmr_boost_type?: EDOTAMMRBoostType;
                    contract_progress?: {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[];
                    guild_ids?: number[];
                    graph_hero_damage?: number[];
                    team_number?: DOTA_GC_TEAM;
                    team_slot?: number;
                    featured_gamemode_progress?: {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    };
                    featured_hero_sticker_index?: number;
                    featured_hero_sticker_quality?: number;
                    equipped_econ_items?: {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    }[];
                }[];
                graph_experience?: number[];
                graph_gold_earned?: number[];
                graph_net_worth?: number[];
                cm_first_pick?: boolean;
                cm_captain_player_id?: number;
                cm_penalty?: number;
            } & {
                dota_team?: number;
                players?: {
                    ability_upgrades?: number[];
                    player_slot?: number;
                    kills?: {
                        victim_slot?: number;
                        count?: number;
                    }[];
                    items?: {
                        item_id?: number;
                        purchase_time?: number;
                    }[];
                    avg_kills_x16?: number;
                    avg_deaths_x16?: number;
                    avg_assists_x16?: number;
                    avg_gpm_x16?: number;
                    avg_xpm_x16?: number;
                    best_kills_x16?: number;
                    best_assists_x16?: number;
                    best_gpm_x16?: number;
                    best_xpm_x16?: number;
                    win_streak?: number;
                    best_win_streak?: number;
                    fight_score?: number;
                    farm_score?: number;
                    support_score?: number;
                    push_score?: number;
                    level_up_times?: number[];
                    graph_net_worth?: number[];
                    inventory_snapshot?: {
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    }[];
                    avg_stats_calibrated?: boolean;
                    auto_style_criteria?: {
                        name_token?: number;
                        value?: number;
                    }[];
                    event_data?: {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    }[];
                    strange_gem_progress?: {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    }[];
                    hero_xp?: number;
                    camps_stacked?: number;
                    victory_prediction?: {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    }[];
                    lane_selection_flags?: number;
                    rampages?: number;
                    triple_kills?: number;
                    aegis_snatched?: number;
                    rapiers_purchased?: number;
                    couriers_killed?: number;
                    net_worth_rank?: number;
                    support_gold_spent?: number;
                    observer_wards_placed?: number;
                    sentry_wards_placed?: number;
                    wards_dewarded?: number;
                    stun_duration?: number;
                    rank_mmr_boost_type?: EDOTAMMRBoostType;
                    contract_progress?: {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[];
                    guild_ids?: number[];
                    graph_hero_damage?: number[];
                    team_number?: DOTA_GC_TEAM;
                    team_slot?: number;
                    featured_gamemode_progress?: {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    };
                    featured_hero_sticker_index?: number;
                    featured_hero_sticker_quality?: number;
                    equipped_econ_items?: {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    }[];
                }[] & ({
                    ability_upgrades?: number[];
                    player_slot?: number;
                    kills?: {
                        victim_slot?: number;
                        count?: number;
                    }[];
                    items?: {
                        item_id?: number;
                        purchase_time?: number;
                    }[];
                    avg_kills_x16?: number;
                    avg_deaths_x16?: number;
                    avg_assists_x16?: number;
                    avg_gpm_x16?: number;
                    avg_xpm_x16?: number;
                    best_kills_x16?: number;
                    best_assists_x16?: number;
                    best_gpm_x16?: number;
                    best_xpm_x16?: number;
                    win_streak?: number;
                    best_win_streak?: number;
                    fight_score?: number;
                    farm_score?: number;
                    support_score?: number;
                    push_score?: number;
                    level_up_times?: number[];
                    graph_net_worth?: number[];
                    inventory_snapshot?: {
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    }[];
                    avg_stats_calibrated?: boolean;
                    auto_style_criteria?: {
                        name_token?: number;
                        value?: number;
                    }[];
                    event_data?: {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    }[];
                    strange_gem_progress?: {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    }[];
                    hero_xp?: number;
                    camps_stacked?: number;
                    victory_prediction?: {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    }[];
                    lane_selection_flags?: number;
                    rampages?: number;
                    triple_kills?: number;
                    aegis_snatched?: number;
                    rapiers_purchased?: number;
                    couriers_killed?: number;
                    net_worth_rank?: number;
                    support_gold_spent?: number;
                    observer_wards_placed?: number;
                    sentry_wards_placed?: number;
                    wards_dewarded?: number;
                    stun_duration?: number;
                    rank_mmr_boost_type?: EDOTAMMRBoostType;
                    contract_progress?: {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[];
                    guild_ids?: number[];
                    graph_hero_damage?: number[];
                    team_number?: DOTA_GC_TEAM;
                    team_slot?: number;
                    featured_gamemode_progress?: {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    };
                    featured_hero_sticker_index?: number;
                    featured_hero_sticker_quality?: number;
                    equipped_econ_items?: {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    }[];
                } & {
                    ability_upgrades?: number[] & number[] & { [K_61 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["ability_upgrades"], keyof number[]>]: never; };
                    player_slot?: number;
                    kills?: {
                        victim_slot?: number;
                        count?: number;
                    }[] & ({
                        victim_slot?: number;
                        count?: number;
                    } & {
                        victim_slot?: number;
                        count?: number;
                    } & { [K_62 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["kills"][number], keyof CDOTAMatchMetadata_Team_PlayerKill>]: never; })[] & { [K_63 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["kills"], keyof {
                        victim_slot?: number;
                        count?: number;
                    }[]>]: never; };
                    items?: {
                        item_id?: number;
                        purchase_time?: number;
                    }[] & ({
                        item_id?: number;
                        purchase_time?: number;
                    } & {
                        item_id?: number;
                        purchase_time?: number;
                    } & { [K_64 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["items"][number], keyof CDOTAMatchMetadata_Team_ItemPurchase>]: never; })[] & { [K_65 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["items"], keyof {
                        item_id?: number;
                        purchase_time?: number;
                    }[]>]: never; };
                    avg_kills_x16?: number;
                    avg_deaths_x16?: number;
                    avg_assists_x16?: number;
                    avg_gpm_x16?: number;
                    avg_xpm_x16?: number;
                    best_kills_x16?: number;
                    best_assists_x16?: number;
                    best_gpm_x16?: number;
                    best_xpm_x16?: number;
                    win_streak?: number;
                    best_win_streak?: number;
                    fight_score?: number;
                    farm_score?: number;
                    support_score?: number;
                    push_score?: number;
                    level_up_times?: number[] & number[] & { [K_66 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["level_up_times"], keyof number[]>]: never; };
                    graph_net_worth?: number[] & number[] & { [K_67 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["graph_net_worth"], keyof number[]>]: never; };
                    inventory_snapshot?: {
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    }[] & ({
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    } & {
                        item_id?: number[] & number[] & { [K_68 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["inventory_snapshot"][number]["item_id"], keyof number[]>]: never; };
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[] & number[] & { [K_69 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["inventory_snapshot"][number]["backpack_item_id"], keyof number[]>]: never; };
                        neutral_item_id?: number;
                    } & { [K_70 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["inventory_snapshot"][number], keyof CDOTAMatchMetadata_Team_InventorySnapshot>]: never; })[] & { [K_71 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["inventory_snapshot"], keyof {
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    }[]>]: never; };
                    avg_stats_calibrated?: boolean;
                    auto_style_criteria?: {
                        name_token?: number;
                        value?: number;
                    }[] & ({
                        name_token?: number;
                        value?: number;
                    } & {
                        name_token?: number;
                        value?: number;
                    } & { [K_72 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["auto_style_criteria"][number], keyof CDOTAMatchMetadata_Team_AutoStyleCriteria>]: never; })[] & { [K_73 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["auto_style_criteria"], keyof {
                        name_token?: number;
                        value?: number;
                    }[]>]: never; };
                    event_data?: {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    }[] & ({
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    } & {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[] & ({
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        } & {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        } & { [K_74 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number]["sub_challenges_with_progress"][number], keyof CDOTAMatchMetadata_Team_SubChallenge>]: never; })[] & { [K_75 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number]["sub_challenges_with_progress"], keyof {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[]>]: never; };
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[] & ({
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        } & {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        } & { [K_76 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number]["cavern_challenge_map_results"][number], keyof CDOTAMatchMetadata_Team_CavernChallengeResult>]: never; })[] & { [K_77 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number]["cavern_challenge_map_results"], keyof {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[]>]: never; };
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[] & ({
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        } & {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        } & { [K_78 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number]["actions_granted"][number], keyof CDOTAMatchMetadata_Team_ActionGrant>]: never; })[] & { [K_79 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number]["actions_granted"], keyof {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[]>]: never; };
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[] & ({
                            points?: number;
                            reason?: number;
                        } & {
                            points?: number;
                            reason?: number;
                        } & { [K_80 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number]["candy_points_granted"][number], keyof CDOTAMatchMetadata_Team_CandyGrant>]: never; })[] & { [K_81 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number]["candy_points_granted"], keyof {
                            points?: number;
                            reason?: number;
                        }[]>]: never; };
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
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
                        } & { [K_82 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number]["periodic_resources"][number], keyof CDOTAMatchMetadata_Team_PeriodicResourceData>]: never; })[] & { [K_83 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number]["periodic_resources"], keyof {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[]>]: never; };
                    } & { [K_84 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number], keyof CDOTAMatchMetadata_Team_EventData>]: never; })[] & { [K_85 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"], keyof {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    }[]>]: never; };
                    strange_gem_progress?: {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    }[] & ({
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    } & {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    } & { [K_86 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["strange_gem_progress"][number], keyof CDOTAMatchMetadata_Team_StrangeGemProgress>]: never; })[] & { [K_87 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["strange_gem_progress"], keyof {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    }[]>]: never; };
                    hero_xp?: number;
                    camps_stacked?: number;
                    victory_prediction?: {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    }[] & ({
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    } & {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    } & { [K_88 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["victory_prediction"][number], keyof CDOTAMatchMetadata_Team_VictoryPrediction>]: never; })[] & { [K_89 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["victory_prediction"], keyof {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    }[]>]: never; };
                    lane_selection_flags?: number;
                    rampages?: number;
                    triple_kills?: number;
                    aegis_snatched?: number;
                    rapiers_purchased?: number;
                    couriers_killed?: number;
                    net_worth_rank?: number;
                    support_gold_spent?: number;
                    observer_wards_placed?: number;
                    sentry_wards_placed?: number;
                    wards_dewarded?: number;
                    stun_duration?: number;
                    rank_mmr_boost_type?: EDOTAMMRBoostType;
                    contract_progress?: {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[] & ({
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    } & {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    } & { [K_90 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["contract_progress"][number], keyof CDOTAMatchMetadata_Team_Player_ContractProgress>]: never; })[] & { [K_91 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["contract_progress"], keyof {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[]>]: never; };
                    guild_ids?: number[] & number[] & { [K_92 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["guild_ids"], keyof number[]>]: never; };
                    graph_hero_damage?: number[] & number[] & { [K_93 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["graph_hero_damage"], keyof number[]>]: never; };
                    team_number?: DOTA_GC_TEAM;
                    team_slot?: number;
                    featured_gamemode_progress?: {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    } & {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    } & { [K_94 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["featured_gamemode_progress"], keyof CDOTAMatchMetadata_Team_FeaturedGamemodeProgress>]: never; };
                    featured_hero_sticker_index?: number;
                    featured_hero_sticker_quality?: number;
                    equipped_econ_items?: {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    }[] & ({
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    } & {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[] & ({
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        } & {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        } & { [K_95 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["equipped_econ_items"][number]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_96 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["equipped_econ_items"][number]["attribute"], keyof {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[]>]: never; };
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[] & ({
                            new_class?: number;
                            new_slot?: number;
                        } & {
                            new_class?: number;
                            new_slot?: number;
                        } & { [K_97 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["equipped_econ_items"][number]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_98 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["equipped_econ_items"][number]["equipped_state"], keyof {
                            new_class?: number;
                            new_slot?: number;
                        }[]>]: never; };
                    } & { [K_99 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["equipped_econ_items"][number], keyof CDOTAMatchMetadata_EconItem>]: never; })[] & { [K_100 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["equipped_econ_items"], keyof {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    }[]>]: never; };
                } & { [K_101 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number], keyof CDOTAMatchMetadata_Team_Player>]: never; })[] & { [K_102 in Exclude<keyof I_1["metadata"]["teams"][number]["players"], keyof {
                    ability_upgrades?: number[];
                    player_slot?: number;
                    kills?: {
                        victim_slot?: number;
                        count?: number;
                    }[];
                    items?: {
                        item_id?: number;
                        purchase_time?: number;
                    }[];
                    avg_kills_x16?: number;
                    avg_deaths_x16?: number;
                    avg_assists_x16?: number;
                    avg_gpm_x16?: number;
                    avg_xpm_x16?: number;
                    best_kills_x16?: number;
                    best_assists_x16?: number;
                    best_gpm_x16?: number;
                    best_xpm_x16?: number;
                    win_streak?: number;
                    best_win_streak?: number;
                    fight_score?: number;
                    farm_score?: number;
                    support_score?: number;
                    push_score?: number;
                    level_up_times?: number[];
                    graph_net_worth?: number[];
                    inventory_snapshot?: {
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    }[];
                    avg_stats_calibrated?: boolean;
                    auto_style_criteria?: {
                        name_token?: number;
                        value?: number;
                    }[];
                    event_data?: {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    }[];
                    strange_gem_progress?: {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    }[];
                    hero_xp?: number;
                    camps_stacked?: number;
                    victory_prediction?: {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    }[];
                    lane_selection_flags?: number;
                    rampages?: number;
                    triple_kills?: number;
                    aegis_snatched?: number;
                    rapiers_purchased?: number;
                    couriers_killed?: number;
                    net_worth_rank?: number;
                    support_gold_spent?: number;
                    observer_wards_placed?: number;
                    sentry_wards_placed?: number;
                    wards_dewarded?: number;
                    stun_duration?: number;
                    rank_mmr_boost_type?: EDOTAMMRBoostType;
                    contract_progress?: {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[];
                    guild_ids?: number[];
                    graph_hero_damage?: number[];
                    team_number?: DOTA_GC_TEAM;
                    team_slot?: number;
                    featured_gamemode_progress?: {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    };
                    featured_hero_sticker_index?: number;
                    featured_hero_sticker_quality?: number;
                    equipped_econ_items?: {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    }[];
                }[]>]: never; };
                graph_experience?: number[] & number[] & { [K_103 in Exclude<keyof I_1["metadata"]["teams"][number]["graph_experience"], keyof number[]>]: never; };
                graph_gold_earned?: number[] & number[] & { [K_104 in Exclude<keyof I_1["metadata"]["teams"][number]["graph_gold_earned"], keyof number[]>]: never; };
                graph_net_worth?: number[] & number[] & { [K_105 in Exclude<keyof I_1["metadata"]["teams"][number]["graph_net_worth"], keyof number[]>]: never; };
                cm_first_pick?: boolean;
                cm_captain_player_id?: number;
                cm_penalty?: number;
            } & { [K_106 in Exclude<keyof I_1["metadata"]["teams"][number], keyof CDOTAMatchMetadata_Team>]: never; })[] & { [K_107 in Exclude<keyof I_1["metadata"]["teams"], keyof {
                dota_team?: number;
                players?: {
                    ability_upgrades?: number[];
                    player_slot?: number;
                    kills?: {
                        victim_slot?: number;
                        count?: number;
                    }[];
                    items?: {
                        item_id?: number;
                        purchase_time?: number;
                    }[];
                    avg_kills_x16?: number;
                    avg_deaths_x16?: number;
                    avg_assists_x16?: number;
                    avg_gpm_x16?: number;
                    avg_xpm_x16?: number;
                    best_kills_x16?: number;
                    best_assists_x16?: number;
                    best_gpm_x16?: number;
                    best_xpm_x16?: number;
                    win_streak?: number;
                    best_win_streak?: number;
                    fight_score?: number;
                    farm_score?: number;
                    support_score?: number;
                    push_score?: number;
                    level_up_times?: number[];
                    graph_net_worth?: number[];
                    inventory_snapshot?: {
                        item_id?: number[];
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[];
                        neutral_item_id?: number;
                    }[];
                    avg_stats_calibrated?: boolean;
                    auto_style_criteria?: {
                        name_token?: number;
                        value?: number;
                    }[];
                    event_data?: {
                        event_id?: number;
                        event_points?: number;
                        challenge_instance_id?: number;
                        challenge_quest_id?: number;
                        challenge_quest_challenge_id?: number;
                        challenge_completed?: boolean;
                        challenge_rank_completed?: number;
                        challenge_rank_previously_completed?: number;
                        event_owned?: boolean;
                        sub_challenges_with_progress?: {
                            slot_id?: number;
                            start_value?: number;
                            end_value?: number;
                            completed?: boolean;
                        }[];
                        wager_winnings?: number;
                        cavern_challenge_active?: boolean;
                        cavern_challenge_winnings?: number;
                        amount_wagered?: number;
                        periodic_point_adjustments?: number;
                        cavern_challenge_map_results?: {
                            completed_path_id?: number;
                            claimed_room_id?: number;
                        }[];
                        cavern_challenge_plus_shard_winnings?: number;
                        actions_granted?: {
                            action_id?: number;
                            quantity?: number;
                            audit?: number;
                            requires_win?: boolean;
                            audit_data?: string;
                        }[];
                        cavern_crawl_map_variant?: number;
                        team_wager_bonus_pct?: number;
                        wager_streak_pct?: number;
                        candy_points_granted?: {
                            points?: number;
                            reason?: number;
                        }[];
                        active_season_id?: number;
                        cavern_crawl_half_credit?: boolean;
                        periodic_resources?: {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[];
                    }[];
                    strange_gem_progress?: {
                        kill_eater_type?: number;
                        gem_item_def_index?: number;
                        required_hero_id?: number;
                        starting_value?: number;
                        ending_value?: number;
                        owner_item_def_index?: number;
                        owner_item_id?: string;
                    }[];
                    hero_xp?: number;
                    camps_stacked?: number;
                    victory_prediction?: {
                        item_id?: string;
                        item_def_index?: number;
                        starting_value?: number;
                        is_victory?: boolean;
                    }[];
                    lane_selection_flags?: number;
                    rampages?: number;
                    triple_kills?: number;
                    aegis_snatched?: number;
                    rapiers_purchased?: number;
                    couriers_killed?: number;
                    net_worth_rank?: number;
                    support_gold_spent?: number;
                    observer_wards_placed?: number;
                    sentry_wards_placed?: number;
                    wards_dewarded?: number;
                    stun_duration?: number;
                    rank_mmr_boost_type?: EDOTAMMRBoostType;
                    contract_progress?: {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[];
                    guild_ids?: number[];
                    graph_hero_damage?: number[];
                    team_number?: DOTA_GC_TEAM;
                    team_slot?: number;
                    featured_gamemode_progress?: {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    };
                    featured_hero_sticker_index?: number;
                    featured_hero_sticker_quality?: number;
                    equipped_econ_items?: {
                        def_index?: number;
                        quality?: number;
                        attribute?: {
                            def_index?: number;
                            value?: number;
                            value_bytes?: string;
                        }[];
                        style?: number;
                        equipped_state?: {
                            new_class?: number;
                            new_slot?: number;
                        }[];
                    }[];
                }[];
                graph_experience?: number[];
                graph_gold_earned?: number[];
                graph_net_worth?: number[];
                cm_first_pick?: boolean;
                cm_captain_player_id?: number;
                cm_penalty?: number;
            }[]>]: never; };
            lobby_id?: string;
            report_until_time?: string;
            event_game_custom_table?: string;
            primary_event_id?: number;
            matchmaking_stats?: {
                average_queue_time?: number;
                maximum_queue_time?: number;
                behavior_score_variance?: import("./dota_gcmessages_common_match_management").EMatchBehaviorScoreVariance;
            } & {
                average_queue_time?: number;
                maximum_queue_time?: number;
                behavior_score_variance?: import("./dota_gcmessages_common_match_management").EMatchBehaviorScoreVariance;
            } & { [K_108 in Exclude<keyof I_1["metadata"]["matchmaking_stats"], keyof CMsgMatchMatchmakingStats>]: never; };
            mvp_data?: {
                mvps?: {
                    player_slot?: number;
                    accolades?: {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    }[];
                }[];
            } & {
                mvps?: {
                    player_slot?: number;
                    accolades?: {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    }[];
                }[] & ({
                    player_slot?: number;
                    accolades?: {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    }[];
                } & {
                    player_slot?: number;
                    accolades?: {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    }[] & ({
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    } & {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    } & { [K_109 in Exclude<keyof I_1["metadata"]["mvp_data"]["mvps"][number]["accolades"][number], keyof import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade>]: never; })[] & { [K_110 in Exclude<keyof I_1["metadata"]["mvp_data"]["mvps"][number]["accolades"], keyof {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    }[]>]: never; };
                } & { [K_111 in Exclude<keyof I_1["metadata"]["mvp_data"]["mvps"][number], keyof import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum>]: never; })[] & { [K_112 in Exclude<keyof I_1["metadata"]["mvp_data"]["mvps"], keyof {
                    player_slot?: number;
                    accolades?: {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    }[];
                }[]>]: never; };
            } & { [K_113 in Exclude<keyof I_1["metadata"]["mvp_data"], "mvps">]: never; };
            guild_challenge_progress?: {
                guild_id?: number;
                event_id?: EEvent;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                challenge_timestamp?: number;
                challenge_progress_at_start?: number;
                challenge_progress_accumulated?: number;
                individual_progress?: {
                    progress?: number;
                    player_slot?: number;
                }[];
            }[] & ({
                guild_id?: number;
                event_id?: EEvent;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                challenge_timestamp?: number;
                challenge_progress_at_start?: number;
                challenge_progress_accumulated?: number;
                individual_progress?: {
                    progress?: number;
                    player_slot?: number;
                }[];
            } & {
                guild_id?: number;
                event_id?: EEvent;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                challenge_timestamp?: number;
                challenge_progress_at_start?: number;
                challenge_progress_accumulated?: number;
                individual_progress?: {
                    progress?: number;
                    player_slot?: number;
                }[] & ({
                    progress?: number;
                    player_slot?: number;
                } & {
                    progress?: number;
                    player_slot?: number;
                } & { [K_114 in Exclude<keyof I_1["metadata"]["guild_challenge_progress"][number]["individual_progress"][number], keyof CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress>]: never; })[] & { [K_115 in Exclude<keyof I_1["metadata"]["guild_challenge_progress"][number]["individual_progress"], keyof {
                    progress?: number;
                    player_slot?: number;
                }[]>]: never; };
            } & { [K_116 in Exclude<keyof I_1["metadata"]["guild_challenge_progress"][number], keyof CDOTAMatchMetadata_GuildChallengeProgress>]: never; })[] & { [K_117 in Exclude<keyof I_1["metadata"]["guild_challenge_progress"], keyof {
                guild_id?: number;
                event_id?: EEvent;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                challenge_timestamp?: number;
                challenge_progress_at_start?: number;
                challenge_progress_accumulated?: number;
                individual_progress?: {
                    progress?: number;
                    player_slot?: number;
                }[];
            }[]>]: never; };
            custom_post_game_table?: string;
            match_tips?: {
                source_player_slot?: number;
                target_player_slot?: number;
                tip_amount?: number;
                event_id?: EEvent;
            }[] & ({
                source_player_slot?: number;
                target_player_slot?: number;
                tip_amount?: number;
                event_id?: EEvent;
            } & {
                source_player_slot?: number;
                target_player_slot?: number;
                tip_amount?: number;
                event_id?: EEvent;
            } & { [K_118 in Exclude<keyof I_1["metadata"]["match_tips"][number], keyof CDOTAMatchMetadata_Tip>]: never; })[] & { [K_119 in Exclude<keyof I_1["metadata"]["match_tips"], keyof {
                source_player_slot?: number;
                target_player_slot?: number;
                tip_amount?: number;
                event_id?: EEvent;
            }[]>]: never; };
        } & { [K_120 in Exclude<keyof I_1["metadata"], keyof CDOTAMatchMetadata>]: never; };
        private_metadata?: string;
    } & { [K_121 in Exclude<keyof I_1, keyof CDOTAMatchMetadataFile>]: never; }>(object: I_1): CDOTAMatchMetadataFile;
};
export declare const CDOTAMatchMetadata: {
    fromJSON(object: any): CDOTAMatchMetadata;
    toJSON(message: CDOTAMatchMetadata): unknown;
    create<I extends {
        teams?: {
            dota_team?: number;
            players?: {
                ability_upgrades?: number[];
                player_slot?: number;
                kills?: {
                    victim_slot?: number;
                    count?: number;
                }[];
                items?: {
                    item_id?: number;
                    purchase_time?: number;
                }[];
                avg_kills_x16?: number;
                avg_deaths_x16?: number;
                avg_assists_x16?: number;
                avg_gpm_x16?: number;
                avg_xpm_x16?: number;
                best_kills_x16?: number;
                best_assists_x16?: number;
                best_gpm_x16?: number;
                best_xpm_x16?: number;
                win_streak?: number;
                best_win_streak?: number;
                fight_score?: number;
                farm_score?: number;
                support_score?: number;
                push_score?: number;
                level_up_times?: number[];
                graph_net_worth?: number[];
                inventory_snapshot?: {
                    item_id?: number[];
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[];
                    neutral_item_id?: number;
                }[];
                avg_stats_calibrated?: boolean;
                auto_style_criteria?: {
                    name_token?: number;
                    value?: number;
                }[];
                event_data?: {
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[];
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[];
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[];
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[];
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
                    periodic_resources?: {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[];
                }[];
                strange_gem_progress?: {
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                }[];
                hero_xp?: number;
                camps_stacked?: number;
                victory_prediction?: {
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                }[];
                lane_selection_flags?: number;
                rampages?: number;
                triple_kills?: number;
                aegis_snatched?: number;
                rapiers_purchased?: number;
                couriers_killed?: number;
                net_worth_rank?: number;
                support_gold_spent?: number;
                observer_wards_placed?: number;
                sentry_wards_placed?: number;
                wards_dewarded?: number;
                stun_duration?: number;
                rank_mmr_boost_type?: EDOTAMMRBoostType;
                contract_progress?: {
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                }[];
                guild_ids?: number[];
                graph_hero_damage?: number[];
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
                featured_gamemode_progress?: {
                    start_value?: number;
                    end_value?: number;
                    max_value?: number;
                };
                featured_hero_sticker_index?: number;
                featured_hero_sticker_quality?: number;
                equipped_econ_items?: {
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                }[];
            }[];
            graph_experience?: number[];
            graph_gold_earned?: number[];
            graph_net_worth?: number[];
            cm_first_pick?: boolean;
            cm_captain_player_id?: number;
            cm_penalty?: number;
        }[];
        lobby_id?: string;
        report_until_time?: string;
        event_game_custom_table?: string;
        primary_event_id?: number;
        matchmaking_stats?: {
            average_queue_time?: number;
            maximum_queue_time?: number;
            behavior_score_variance?: import("./dota_gcmessages_common_match_management").EMatchBehaviorScoreVariance;
        };
        mvp_data?: {
            mvps?: {
                player_slot?: number;
                accolades?: {
                    type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                    detail_value?: number;
                }[];
            }[];
        };
        guild_challenge_progress?: {
            guild_id?: number;
            event_id?: EEvent;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            challenge_timestamp?: number;
            challenge_progress_at_start?: number;
            challenge_progress_accumulated?: number;
            individual_progress?: {
                progress?: number;
                player_slot?: number;
            }[];
        }[];
        custom_post_game_table?: string;
        match_tips?: {
            source_player_slot?: number;
            target_player_slot?: number;
            tip_amount?: number;
            event_id?: EEvent;
        }[];
    } & {
        teams?: {
            dota_team?: number;
            players?: {
                ability_upgrades?: number[];
                player_slot?: number;
                kills?: {
                    victim_slot?: number;
                    count?: number;
                }[];
                items?: {
                    item_id?: number;
                    purchase_time?: number;
                }[];
                avg_kills_x16?: number;
                avg_deaths_x16?: number;
                avg_assists_x16?: number;
                avg_gpm_x16?: number;
                avg_xpm_x16?: number;
                best_kills_x16?: number;
                best_assists_x16?: number;
                best_gpm_x16?: number;
                best_xpm_x16?: number;
                win_streak?: number;
                best_win_streak?: number;
                fight_score?: number;
                farm_score?: number;
                support_score?: number;
                push_score?: number;
                level_up_times?: number[];
                graph_net_worth?: number[];
                inventory_snapshot?: {
                    item_id?: number[];
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[];
                    neutral_item_id?: number;
                }[];
                avg_stats_calibrated?: boolean;
                auto_style_criteria?: {
                    name_token?: number;
                    value?: number;
                }[];
                event_data?: {
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[];
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[];
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[];
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[];
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
                    periodic_resources?: {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[];
                }[];
                strange_gem_progress?: {
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                }[];
                hero_xp?: number;
                camps_stacked?: number;
                victory_prediction?: {
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                }[];
                lane_selection_flags?: number;
                rampages?: number;
                triple_kills?: number;
                aegis_snatched?: number;
                rapiers_purchased?: number;
                couriers_killed?: number;
                net_worth_rank?: number;
                support_gold_spent?: number;
                observer_wards_placed?: number;
                sentry_wards_placed?: number;
                wards_dewarded?: number;
                stun_duration?: number;
                rank_mmr_boost_type?: EDOTAMMRBoostType;
                contract_progress?: {
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                }[];
                guild_ids?: number[];
                graph_hero_damage?: number[];
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
                featured_gamemode_progress?: {
                    start_value?: number;
                    end_value?: number;
                    max_value?: number;
                };
                featured_hero_sticker_index?: number;
                featured_hero_sticker_quality?: number;
                equipped_econ_items?: {
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                }[];
            }[];
            graph_experience?: number[];
            graph_gold_earned?: number[];
            graph_net_worth?: number[];
            cm_first_pick?: boolean;
            cm_captain_player_id?: number;
            cm_penalty?: number;
        }[] & ({
            dota_team?: number;
            players?: {
                ability_upgrades?: number[];
                player_slot?: number;
                kills?: {
                    victim_slot?: number;
                    count?: number;
                }[];
                items?: {
                    item_id?: number;
                    purchase_time?: number;
                }[];
                avg_kills_x16?: number;
                avg_deaths_x16?: number;
                avg_assists_x16?: number;
                avg_gpm_x16?: number;
                avg_xpm_x16?: number;
                best_kills_x16?: number;
                best_assists_x16?: number;
                best_gpm_x16?: number;
                best_xpm_x16?: number;
                win_streak?: number;
                best_win_streak?: number;
                fight_score?: number;
                farm_score?: number;
                support_score?: number;
                push_score?: number;
                level_up_times?: number[];
                graph_net_worth?: number[];
                inventory_snapshot?: {
                    item_id?: number[];
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[];
                    neutral_item_id?: number;
                }[];
                avg_stats_calibrated?: boolean;
                auto_style_criteria?: {
                    name_token?: number;
                    value?: number;
                }[];
                event_data?: {
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[];
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[];
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[];
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[];
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
                    periodic_resources?: {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[];
                }[];
                strange_gem_progress?: {
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                }[];
                hero_xp?: number;
                camps_stacked?: number;
                victory_prediction?: {
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                }[];
                lane_selection_flags?: number;
                rampages?: number;
                triple_kills?: number;
                aegis_snatched?: number;
                rapiers_purchased?: number;
                couriers_killed?: number;
                net_worth_rank?: number;
                support_gold_spent?: number;
                observer_wards_placed?: number;
                sentry_wards_placed?: number;
                wards_dewarded?: number;
                stun_duration?: number;
                rank_mmr_boost_type?: EDOTAMMRBoostType;
                contract_progress?: {
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                }[];
                guild_ids?: number[];
                graph_hero_damage?: number[];
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
                featured_gamemode_progress?: {
                    start_value?: number;
                    end_value?: number;
                    max_value?: number;
                };
                featured_hero_sticker_index?: number;
                featured_hero_sticker_quality?: number;
                equipped_econ_items?: {
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                }[];
            }[];
            graph_experience?: number[];
            graph_gold_earned?: number[];
            graph_net_worth?: number[];
            cm_first_pick?: boolean;
            cm_captain_player_id?: number;
            cm_penalty?: number;
        } & {
            dota_team?: number;
            players?: {
                ability_upgrades?: number[];
                player_slot?: number;
                kills?: {
                    victim_slot?: number;
                    count?: number;
                }[];
                items?: {
                    item_id?: number;
                    purchase_time?: number;
                }[];
                avg_kills_x16?: number;
                avg_deaths_x16?: number;
                avg_assists_x16?: number;
                avg_gpm_x16?: number;
                avg_xpm_x16?: number;
                best_kills_x16?: number;
                best_assists_x16?: number;
                best_gpm_x16?: number;
                best_xpm_x16?: number;
                win_streak?: number;
                best_win_streak?: number;
                fight_score?: number;
                farm_score?: number;
                support_score?: number;
                push_score?: number;
                level_up_times?: number[];
                graph_net_worth?: number[];
                inventory_snapshot?: {
                    item_id?: number[];
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[];
                    neutral_item_id?: number;
                }[];
                avg_stats_calibrated?: boolean;
                auto_style_criteria?: {
                    name_token?: number;
                    value?: number;
                }[];
                event_data?: {
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[];
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[];
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[];
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[];
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
                    periodic_resources?: {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[];
                }[];
                strange_gem_progress?: {
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                }[];
                hero_xp?: number;
                camps_stacked?: number;
                victory_prediction?: {
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                }[];
                lane_selection_flags?: number;
                rampages?: number;
                triple_kills?: number;
                aegis_snatched?: number;
                rapiers_purchased?: number;
                couriers_killed?: number;
                net_worth_rank?: number;
                support_gold_spent?: number;
                observer_wards_placed?: number;
                sentry_wards_placed?: number;
                wards_dewarded?: number;
                stun_duration?: number;
                rank_mmr_boost_type?: EDOTAMMRBoostType;
                contract_progress?: {
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                }[];
                guild_ids?: number[];
                graph_hero_damage?: number[];
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
                featured_gamemode_progress?: {
                    start_value?: number;
                    end_value?: number;
                    max_value?: number;
                };
                featured_hero_sticker_index?: number;
                featured_hero_sticker_quality?: number;
                equipped_econ_items?: {
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                }[];
            }[] & ({
                ability_upgrades?: number[];
                player_slot?: number;
                kills?: {
                    victim_slot?: number;
                    count?: number;
                }[];
                items?: {
                    item_id?: number;
                    purchase_time?: number;
                }[];
                avg_kills_x16?: number;
                avg_deaths_x16?: number;
                avg_assists_x16?: number;
                avg_gpm_x16?: number;
                avg_xpm_x16?: number;
                best_kills_x16?: number;
                best_assists_x16?: number;
                best_gpm_x16?: number;
                best_xpm_x16?: number;
                win_streak?: number;
                best_win_streak?: number;
                fight_score?: number;
                farm_score?: number;
                support_score?: number;
                push_score?: number;
                level_up_times?: number[];
                graph_net_worth?: number[];
                inventory_snapshot?: {
                    item_id?: number[];
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[];
                    neutral_item_id?: number;
                }[];
                avg_stats_calibrated?: boolean;
                auto_style_criteria?: {
                    name_token?: number;
                    value?: number;
                }[];
                event_data?: {
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[];
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[];
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[];
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[];
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
                    periodic_resources?: {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[];
                }[];
                strange_gem_progress?: {
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                }[];
                hero_xp?: number;
                camps_stacked?: number;
                victory_prediction?: {
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                }[];
                lane_selection_flags?: number;
                rampages?: number;
                triple_kills?: number;
                aegis_snatched?: number;
                rapiers_purchased?: number;
                couriers_killed?: number;
                net_worth_rank?: number;
                support_gold_spent?: number;
                observer_wards_placed?: number;
                sentry_wards_placed?: number;
                wards_dewarded?: number;
                stun_duration?: number;
                rank_mmr_boost_type?: EDOTAMMRBoostType;
                contract_progress?: {
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                }[];
                guild_ids?: number[];
                graph_hero_damage?: number[];
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
                featured_gamemode_progress?: {
                    start_value?: number;
                    end_value?: number;
                    max_value?: number;
                };
                featured_hero_sticker_index?: number;
                featured_hero_sticker_quality?: number;
                equipped_econ_items?: {
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                }[];
            } & {
                ability_upgrades?: number[] & number[] & { [K in Exclude<keyof I["teams"][number]["players"][number]["ability_upgrades"], keyof number[]>]: never; };
                player_slot?: number;
                kills?: {
                    victim_slot?: number;
                    count?: number;
                }[] & ({
                    victim_slot?: number;
                    count?: number;
                } & {
                    victim_slot?: number;
                    count?: number;
                } & { [K_1 in Exclude<keyof I["teams"][number]["players"][number]["kills"][number], keyof CDOTAMatchMetadata_Team_PlayerKill>]: never; })[] & { [K_2 in Exclude<keyof I["teams"][number]["players"][number]["kills"], keyof {
                    victim_slot?: number;
                    count?: number;
                }[]>]: never; };
                items?: {
                    item_id?: number;
                    purchase_time?: number;
                }[] & ({
                    item_id?: number;
                    purchase_time?: number;
                } & {
                    item_id?: number;
                    purchase_time?: number;
                } & { [K_3 in Exclude<keyof I["teams"][number]["players"][number]["items"][number], keyof CDOTAMatchMetadata_Team_ItemPurchase>]: never; })[] & { [K_4 in Exclude<keyof I["teams"][number]["players"][number]["items"], keyof {
                    item_id?: number;
                    purchase_time?: number;
                }[]>]: never; };
                avg_kills_x16?: number;
                avg_deaths_x16?: number;
                avg_assists_x16?: number;
                avg_gpm_x16?: number;
                avg_xpm_x16?: number;
                best_kills_x16?: number;
                best_assists_x16?: number;
                best_gpm_x16?: number;
                best_xpm_x16?: number;
                win_streak?: number;
                best_win_streak?: number;
                fight_score?: number;
                farm_score?: number;
                support_score?: number;
                push_score?: number;
                level_up_times?: number[] & number[] & { [K_5 in Exclude<keyof I["teams"][number]["players"][number]["level_up_times"], keyof number[]>]: never; };
                graph_net_worth?: number[] & number[] & { [K_6 in Exclude<keyof I["teams"][number]["players"][number]["graph_net_worth"], keyof number[]>]: never; };
                inventory_snapshot?: {
                    item_id?: number[];
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[];
                    neutral_item_id?: number;
                }[] & ({
                    item_id?: number[];
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[];
                    neutral_item_id?: number;
                } & {
                    item_id?: number[] & number[] & { [K_7 in Exclude<keyof I["teams"][number]["players"][number]["inventory_snapshot"][number]["item_id"], keyof number[]>]: never; };
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[] & number[] & { [K_8 in Exclude<keyof I["teams"][number]["players"][number]["inventory_snapshot"][number]["backpack_item_id"], keyof number[]>]: never; };
                    neutral_item_id?: number;
                } & { [K_9 in Exclude<keyof I["teams"][number]["players"][number]["inventory_snapshot"][number], keyof CDOTAMatchMetadata_Team_InventorySnapshot>]: never; })[] & { [K_10 in Exclude<keyof I["teams"][number]["players"][number]["inventory_snapshot"], keyof {
                    item_id?: number[];
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[];
                    neutral_item_id?: number;
                }[]>]: never; };
                avg_stats_calibrated?: boolean;
                auto_style_criteria?: {
                    name_token?: number;
                    value?: number;
                }[] & ({
                    name_token?: number;
                    value?: number;
                } & {
                    name_token?: number;
                    value?: number;
                } & { [K_11 in Exclude<keyof I["teams"][number]["players"][number]["auto_style_criteria"][number], keyof CDOTAMatchMetadata_Team_AutoStyleCriteria>]: never; })[] & { [K_12 in Exclude<keyof I["teams"][number]["players"][number]["auto_style_criteria"], keyof {
                    name_token?: number;
                    value?: number;
                }[]>]: never; };
                event_data?: {
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[];
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[];
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[];
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[];
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
                    periodic_resources?: {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[];
                }[] & ({
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[];
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[];
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[];
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[];
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
                    periodic_resources?: {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[];
                } & {
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[] & ({
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    } & {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    } & { [K_13 in Exclude<keyof I["teams"][number]["players"][number]["event_data"][number]["sub_challenges_with_progress"][number], keyof CDOTAMatchMetadata_Team_SubChallenge>]: never; })[] & { [K_14 in Exclude<keyof I["teams"][number]["players"][number]["event_data"][number]["sub_challenges_with_progress"], keyof {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[]>]: never; };
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[] & ({
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    } & {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    } & { [K_15 in Exclude<keyof I["teams"][number]["players"][number]["event_data"][number]["cavern_challenge_map_results"][number], keyof CDOTAMatchMetadata_Team_CavernChallengeResult>]: never; })[] & { [K_16 in Exclude<keyof I["teams"][number]["players"][number]["event_data"][number]["cavern_challenge_map_results"], keyof {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[]>]: never; };
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[] & ({
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    } & {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    } & { [K_17 in Exclude<keyof I["teams"][number]["players"][number]["event_data"][number]["actions_granted"][number], keyof CDOTAMatchMetadata_Team_ActionGrant>]: never; })[] & { [K_18 in Exclude<keyof I["teams"][number]["players"][number]["event_data"][number]["actions_granted"], keyof {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[]>]: never; };
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[] & ({
                        points?: number;
                        reason?: number;
                    } & {
                        points?: number;
                        reason?: number;
                    } & { [K_19 in Exclude<keyof I["teams"][number]["players"][number]["event_data"][number]["candy_points_granted"][number], keyof CDOTAMatchMetadata_Team_CandyGrant>]: never; })[] & { [K_20 in Exclude<keyof I["teams"][number]["players"][number]["event_data"][number]["candy_points_granted"], keyof {
                        points?: number;
                        reason?: number;
                    }[]>]: never; };
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
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
                    } & { [K_21 in Exclude<keyof I["teams"][number]["players"][number]["event_data"][number]["periodic_resources"][number], keyof CDOTAMatchMetadata_Team_PeriodicResourceData>]: never; })[] & { [K_22 in Exclude<keyof I["teams"][number]["players"][number]["event_data"][number]["periodic_resources"], keyof {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[]>]: never; };
                } & { [K_23 in Exclude<keyof I["teams"][number]["players"][number]["event_data"][number], keyof CDOTAMatchMetadata_Team_EventData>]: never; })[] & { [K_24 in Exclude<keyof I["teams"][number]["players"][number]["event_data"], keyof {
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[];
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[];
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[];
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[];
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
                    periodic_resources?: {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[];
                }[]>]: never; };
                strange_gem_progress?: {
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                }[] & ({
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                } & {
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                } & { [K_25 in Exclude<keyof I["teams"][number]["players"][number]["strange_gem_progress"][number], keyof CDOTAMatchMetadata_Team_StrangeGemProgress>]: never; })[] & { [K_26 in Exclude<keyof I["teams"][number]["players"][number]["strange_gem_progress"], keyof {
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                }[]>]: never; };
                hero_xp?: number;
                camps_stacked?: number;
                victory_prediction?: {
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                }[] & ({
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                } & {
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                } & { [K_27 in Exclude<keyof I["teams"][number]["players"][number]["victory_prediction"][number], keyof CDOTAMatchMetadata_Team_VictoryPrediction>]: never; })[] & { [K_28 in Exclude<keyof I["teams"][number]["players"][number]["victory_prediction"], keyof {
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                }[]>]: never; };
                lane_selection_flags?: number;
                rampages?: number;
                triple_kills?: number;
                aegis_snatched?: number;
                rapiers_purchased?: number;
                couriers_killed?: number;
                net_worth_rank?: number;
                support_gold_spent?: number;
                observer_wards_placed?: number;
                sentry_wards_placed?: number;
                wards_dewarded?: number;
                stun_duration?: number;
                rank_mmr_boost_type?: EDOTAMMRBoostType;
                contract_progress?: {
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                }[] & ({
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                } & {
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                } & { [K_29 in Exclude<keyof I["teams"][number]["players"][number]["contract_progress"][number], keyof CDOTAMatchMetadata_Team_Player_ContractProgress>]: never; })[] & { [K_30 in Exclude<keyof I["teams"][number]["players"][number]["contract_progress"], keyof {
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                }[]>]: never; };
                guild_ids?: number[] & number[] & { [K_31 in Exclude<keyof I["teams"][number]["players"][number]["guild_ids"], keyof number[]>]: never; };
                graph_hero_damage?: number[] & number[] & { [K_32 in Exclude<keyof I["teams"][number]["players"][number]["graph_hero_damage"], keyof number[]>]: never; };
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
                featured_gamemode_progress?: {
                    start_value?: number;
                    end_value?: number;
                    max_value?: number;
                } & {
                    start_value?: number;
                    end_value?: number;
                    max_value?: number;
                } & { [K_33 in Exclude<keyof I["teams"][number]["players"][number]["featured_gamemode_progress"], keyof CDOTAMatchMetadata_Team_FeaturedGamemodeProgress>]: never; };
                featured_hero_sticker_index?: number;
                featured_hero_sticker_quality?: number;
                equipped_econ_items?: {
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                }[] & ({
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                } & {
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[] & ({
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    } & {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    } & { [K_34 in Exclude<keyof I["teams"][number]["players"][number]["equipped_econ_items"][number]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_35 in Exclude<keyof I["teams"][number]["players"][number]["equipped_econ_items"][number]["attribute"], keyof {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[]>]: never; };
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[] & ({
                        new_class?: number;
                        new_slot?: number;
                    } & {
                        new_class?: number;
                        new_slot?: number;
                    } & { [K_36 in Exclude<keyof I["teams"][number]["players"][number]["equipped_econ_items"][number]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_37 in Exclude<keyof I["teams"][number]["players"][number]["equipped_econ_items"][number]["equipped_state"], keyof {
                        new_class?: number;
                        new_slot?: number;
                    }[]>]: never; };
                } & { [K_38 in Exclude<keyof I["teams"][number]["players"][number]["equipped_econ_items"][number], keyof CDOTAMatchMetadata_EconItem>]: never; })[] & { [K_39 in Exclude<keyof I["teams"][number]["players"][number]["equipped_econ_items"], keyof {
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                }[]>]: never; };
            } & { [K_40 in Exclude<keyof I["teams"][number]["players"][number], keyof CDOTAMatchMetadata_Team_Player>]: never; })[] & { [K_41 in Exclude<keyof I["teams"][number]["players"], keyof {
                ability_upgrades?: number[];
                player_slot?: number;
                kills?: {
                    victim_slot?: number;
                    count?: number;
                }[];
                items?: {
                    item_id?: number;
                    purchase_time?: number;
                }[];
                avg_kills_x16?: number;
                avg_deaths_x16?: number;
                avg_assists_x16?: number;
                avg_gpm_x16?: number;
                avg_xpm_x16?: number;
                best_kills_x16?: number;
                best_assists_x16?: number;
                best_gpm_x16?: number;
                best_xpm_x16?: number;
                win_streak?: number;
                best_win_streak?: number;
                fight_score?: number;
                farm_score?: number;
                support_score?: number;
                push_score?: number;
                level_up_times?: number[];
                graph_net_worth?: number[];
                inventory_snapshot?: {
                    item_id?: number[];
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[];
                    neutral_item_id?: number;
                }[];
                avg_stats_calibrated?: boolean;
                auto_style_criteria?: {
                    name_token?: number;
                    value?: number;
                }[];
                event_data?: {
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[];
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[];
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[];
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[];
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
                    periodic_resources?: {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[];
                }[];
                strange_gem_progress?: {
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                }[];
                hero_xp?: number;
                camps_stacked?: number;
                victory_prediction?: {
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                }[];
                lane_selection_flags?: number;
                rampages?: number;
                triple_kills?: number;
                aegis_snatched?: number;
                rapiers_purchased?: number;
                couriers_killed?: number;
                net_worth_rank?: number;
                support_gold_spent?: number;
                observer_wards_placed?: number;
                sentry_wards_placed?: number;
                wards_dewarded?: number;
                stun_duration?: number;
                rank_mmr_boost_type?: EDOTAMMRBoostType;
                contract_progress?: {
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                }[];
                guild_ids?: number[];
                graph_hero_damage?: number[];
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
                featured_gamemode_progress?: {
                    start_value?: number;
                    end_value?: number;
                    max_value?: number;
                };
                featured_hero_sticker_index?: number;
                featured_hero_sticker_quality?: number;
                equipped_econ_items?: {
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                }[];
            }[]>]: never; };
            graph_experience?: number[] & number[] & { [K_42 in Exclude<keyof I["teams"][number]["graph_experience"], keyof number[]>]: never; };
            graph_gold_earned?: number[] & number[] & { [K_43 in Exclude<keyof I["teams"][number]["graph_gold_earned"], keyof number[]>]: never; };
            graph_net_worth?: number[] & number[] & { [K_44 in Exclude<keyof I["teams"][number]["graph_net_worth"], keyof number[]>]: never; };
            cm_first_pick?: boolean;
            cm_captain_player_id?: number;
            cm_penalty?: number;
        } & { [K_45 in Exclude<keyof I["teams"][number], keyof CDOTAMatchMetadata_Team>]: never; })[] & { [K_46 in Exclude<keyof I["teams"], keyof {
            dota_team?: number;
            players?: {
                ability_upgrades?: number[];
                player_slot?: number;
                kills?: {
                    victim_slot?: number;
                    count?: number;
                }[];
                items?: {
                    item_id?: number;
                    purchase_time?: number;
                }[];
                avg_kills_x16?: number;
                avg_deaths_x16?: number;
                avg_assists_x16?: number;
                avg_gpm_x16?: number;
                avg_xpm_x16?: number;
                best_kills_x16?: number;
                best_assists_x16?: number;
                best_gpm_x16?: number;
                best_xpm_x16?: number;
                win_streak?: number;
                best_win_streak?: number;
                fight_score?: number;
                farm_score?: number;
                support_score?: number;
                push_score?: number;
                level_up_times?: number[];
                graph_net_worth?: number[];
                inventory_snapshot?: {
                    item_id?: number[];
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[];
                    neutral_item_id?: number;
                }[];
                avg_stats_calibrated?: boolean;
                auto_style_criteria?: {
                    name_token?: number;
                    value?: number;
                }[];
                event_data?: {
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[];
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[];
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[];
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[];
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
                    periodic_resources?: {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[];
                }[];
                strange_gem_progress?: {
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                }[];
                hero_xp?: number;
                camps_stacked?: number;
                victory_prediction?: {
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                }[];
                lane_selection_flags?: number;
                rampages?: number;
                triple_kills?: number;
                aegis_snatched?: number;
                rapiers_purchased?: number;
                couriers_killed?: number;
                net_worth_rank?: number;
                support_gold_spent?: number;
                observer_wards_placed?: number;
                sentry_wards_placed?: number;
                wards_dewarded?: number;
                stun_duration?: number;
                rank_mmr_boost_type?: EDOTAMMRBoostType;
                contract_progress?: {
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                }[];
                guild_ids?: number[];
                graph_hero_damage?: number[];
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
                featured_gamemode_progress?: {
                    start_value?: number;
                    end_value?: number;
                    max_value?: number;
                };
                featured_hero_sticker_index?: number;
                featured_hero_sticker_quality?: number;
                equipped_econ_items?: {
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                }[];
            }[];
            graph_experience?: number[];
            graph_gold_earned?: number[];
            graph_net_worth?: number[];
            cm_first_pick?: boolean;
            cm_captain_player_id?: number;
            cm_penalty?: number;
        }[]>]: never; };
        lobby_id?: string;
        report_until_time?: string;
        event_game_custom_table?: string;
        primary_event_id?: number;
        matchmaking_stats?: {
            average_queue_time?: number;
            maximum_queue_time?: number;
            behavior_score_variance?: import("./dota_gcmessages_common_match_management").EMatchBehaviorScoreVariance;
        } & {
            average_queue_time?: number;
            maximum_queue_time?: number;
            behavior_score_variance?: import("./dota_gcmessages_common_match_management").EMatchBehaviorScoreVariance;
        } & { [K_47 in Exclude<keyof I["matchmaking_stats"], keyof CMsgMatchMatchmakingStats>]: never; };
        mvp_data?: {
            mvps?: {
                player_slot?: number;
                accolades?: {
                    type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                    detail_value?: number;
                }[];
            }[];
        } & {
            mvps?: {
                player_slot?: number;
                accolades?: {
                    type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                    detail_value?: number;
                }[];
            }[] & ({
                player_slot?: number;
                accolades?: {
                    type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                    detail_value?: number;
                }[];
            } & {
                player_slot?: number;
                accolades?: {
                    type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                    detail_value?: number;
                }[] & ({
                    type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                    detail_value?: number;
                } & {
                    type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                    detail_value?: number;
                } & { [K_48 in Exclude<keyof I["mvp_data"]["mvps"][number]["accolades"][number], keyof import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade>]: never; })[] & { [K_49 in Exclude<keyof I["mvp_data"]["mvps"][number]["accolades"], keyof {
                    type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                    detail_value?: number;
                }[]>]: never; };
            } & { [K_50 in Exclude<keyof I["mvp_data"]["mvps"][number], keyof import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum>]: never; })[] & { [K_51 in Exclude<keyof I["mvp_data"]["mvps"], keyof {
                player_slot?: number;
                accolades?: {
                    type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                    detail_value?: number;
                }[];
            }[]>]: never; };
        } & { [K_52 in Exclude<keyof I["mvp_data"], "mvps">]: never; };
        guild_challenge_progress?: {
            guild_id?: number;
            event_id?: EEvent;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            challenge_timestamp?: number;
            challenge_progress_at_start?: number;
            challenge_progress_accumulated?: number;
            individual_progress?: {
                progress?: number;
                player_slot?: number;
            }[];
        }[] & ({
            guild_id?: number;
            event_id?: EEvent;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            challenge_timestamp?: number;
            challenge_progress_at_start?: number;
            challenge_progress_accumulated?: number;
            individual_progress?: {
                progress?: number;
                player_slot?: number;
            }[];
        } & {
            guild_id?: number;
            event_id?: EEvent;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            challenge_timestamp?: number;
            challenge_progress_at_start?: number;
            challenge_progress_accumulated?: number;
            individual_progress?: {
                progress?: number;
                player_slot?: number;
            }[] & ({
                progress?: number;
                player_slot?: number;
            } & {
                progress?: number;
                player_slot?: number;
            } & { [K_53 in Exclude<keyof I["guild_challenge_progress"][number]["individual_progress"][number], keyof CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress>]: never; })[] & { [K_54 in Exclude<keyof I["guild_challenge_progress"][number]["individual_progress"], keyof {
                progress?: number;
                player_slot?: number;
            }[]>]: never; };
        } & { [K_55 in Exclude<keyof I["guild_challenge_progress"][number], keyof CDOTAMatchMetadata_GuildChallengeProgress>]: never; })[] & { [K_56 in Exclude<keyof I["guild_challenge_progress"], keyof {
            guild_id?: number;
            event_id?: EEvent;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            challenge_timestamp?: number;
            challenge_progress_at_start?: number;
            challenge_progress_accumulated?: number;
            individual_progress?: {
                progress?: number;
                player_slot?: number;
            }[];
        }[]>]: never; };
        custom_post_game_table?: string;
        match_tips?: {
            source_player_slot?: number;
            target_player_slot?: number;
            tip_amount?: number;
            event_id?: EEvent;
        }[] & ({
            source_player_slot?: number;
            target_player_slot?: number;
            tip_amount?: number;
            event_id?: EEvent;
        } & {
            source_player_slot?: number;
            target_player_slot?: number;
            tip_amount?: number;
            event_id?: EEvent;
        } & { [K_57 in Exclude<keyof I["match_tips"][number], keyof CDOTAMatchMetadata_Tip>]: never; })[] & { [K_58 in Exclude<keyof I["match_tips"], keyof {
            source_player_slot?: number;
            target_player_slot?: number;
            tip_amount?: number;
            event_id?: EEvent;
        }[]>]: never; };
    } & { [K_59 in Exclude<keyof I, keyof CDOTAMatchMetadata>]: never; }>(base?: I): CDOTAMatchMetadata;
    fromPartial<I_1 extends {
        teams?: {
            dota_team?: number;
            players?: {
                ability_upgrades?: number[];
                player_slot?: number;
                kills?: {
                    victim_slot?: number;
                    count?: number;
                }[];
                items?: {
                    item_id?: number;
                    purchase_time?: number;
                }[];
                avg_kills_x16?: number;
                avg_deaths_x16?: number;
                avg_assists_x16?: number;
                avg_gpm_x16?: number;
                avg_xpm_x16?: number;
                best_kills_x16?: number;
                best_assists_x16?: number;
                best_gpm_x16?: number;
                best_xpm_x16?: number;
                win_streak?: number;
                best_win_streak?: number;
                fight_score?: number;
                farm_score?: number;
                support_score?: number;
                push_score?: number;
                level_up_times?: number[];
                graph_net_worth?: number[];
                inventory_snapshot?: {
                    item_id?: number[];
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[];
                    neutral_item_id?: number;
                }[];
                avg_stats_calibrated?: boolean;
                auto_style_criteria?: {
                    name_token?: number;
                    value?: number;
                }[];
                event_data?: {
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[];
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[];
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[];
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[];
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
                    periodic_resources?: {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[];
                }[];
                strange_gem_progress?: {
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                }[];
                hero_xp?: number;
                camps_stacked?: number;
                victory_prediction?: {
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                }[];
                lane_selection_flags?: number;
                rampages?: number;
                triple_kills?: number;
                aegis_snatched?: number;
                rapiers_purchased?: number;
                couriers_killed?: number;
                net_worth_rank?: number;
                support_gold_spent?: number;
                observer_wards_placed?: number;
                sentry_wards_placed?: number;
                wards_dewarded?: number;
                stun_duration?: number;
                rank_mmr_boost_type?: EDOTAMMRBoostType;
                contract_progress?: {
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                }[];
                guild_ids?: number[];
                graph_hero_damage?: number[];
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
                featured_gamemode_progress?: {
                    start_value?: number;
                    end_value?: number;
                    max_value?: number;
                };
                featured_hero_sticker_index?: number;
                featured_hero_sticker_quality?: number;
                equipped_econ_items?: {
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                }[];
            }[];
            graph_experience?: number[];
            graph_gold_earned?: number[];
            graph_net_worth?: number[];
            cm_first_pick?: boolean;
            cm_captain_player_id?: number;
            cm_penalty?: number;
        }[];
        lobby_id?: string;
        report_until_time?: string;
        event_game_custom_table?: string;
        primary_event_id?: number;
        matchmaking_stats?: {
            average_queue_time?: number;
            maximum_queue_time?: number;
            behavior_score_variance?: import("./dota_gcmessages_common_match_management").EMatchBehaviorScoreVariance;
        };
        mvp_data?: {
            mvps?: {
                player_slot?: number;
                accolades?: {
                    type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                    detail_value?: number;
                }[];
            }[];
        };
        guild_challenge_progress?: {
            guild_id?: number;
            event_id?: EEvent;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            challenge_timestamp?: number;
            challenge_progress_at_start?: number;
            challenge_progress_accumulated?: number;
            individual_progress?: {
                progress?: number;
                player_slot?: number;
            }[];
        }[];
        custom_post_game_table?: string;
        match_tips?: {
            source_player_slot?: number;
            target_player_slot?: number;
            tip_amount?: number;
            event_id?: EEvent;
        }[];
    } & {
        teams?: {
            dota_team?: number;
            players?: {
                ability_upgrades?: number[];
                player_slot?: number;
                kills?: {
                    victim_slot?: number;
                    count?: number;
                }[];
                items?: {
                    item_id?: number;
                    purchase_time?: number;
                }[];
                avg_kills_x16?: number;
                avg_deaths_x16?: number;
                avg_assists_x16?: number;
                avg_gpm_x16?: number;
                avg_xpm_x16?: number;
                best_kills_x16?: number;
                best_assists_x16?: number;
                best_gpm_x16?: number;
                best_xpm_x16?: number;
                win_streak?: number;
                best_win_streak?: number;
                fight_score?: number;
                farm_score?: number;
                support_score?: number;
                push_score?: number;
                level_up_times?: number[];
                graph_net_worth?: number[];
                inventory_snapshot?: {
                    item_id?: number[];
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[];
                    neutral_item_id?: number;
                }[];
                avg_stats_calibrated?: boolean;
                auto_style_criteria?: {
                    name_token?: number;
                    value?: number;
                }[];
                event_data?: {
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[];
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[];
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[];
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[];
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
                    periodic_resources?: {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[];
                }[];
                strange_gem_progress?: {
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                }[];
                hero_xp?: number;
                camps_stacked?: number;
                victory_prediction?: {
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                }[];
                lane_selection_flags?: number;
                rampages?: number;
                triple_kills?: number;
                aegis_snatched?: number;
                rapiers_purchased?: number;
                couriers_killed?: number;
                net_worth_rank?: number;
                support_gold_spent?: number;
                observer_wards_placed?: number;
                sentry_wards_placed?: number;
                wards_dewarded?: number;
                stun_duration?: number;
                rank_mmr_boost_type?: EDOTAMMRBoostType;
                contract_progress?: {
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                }[];
                guild_ids?: number[];
                graph_hero_damage?: number[];
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
                featured_gamemode_progress?: {
                    start_value?: number;
                    end_value?: number;
                    max_value?: number;
                };
                featured_hero_sticker_index?: number;
                featured_hero_sticker_quality?: number;
                equipped_econ_items?: {
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                }[];
            }[];
            graph_experience?: number[];
            graph_gold_earned?: number[];
            graph_net_worth?: number[];
            cm_first_pick?: boolean;
            cm_captain_player_id?: number;
            cm_penalty?: number;
        }[] & ({
            dota_team?: number;
            players?: {
                ability_upgrades?: number[];
                player_slot?: number;
                kills?: {
                    victim_slot?: number;
                    count?: number;
                }[];
                items?: {
                    item_id?: number;
                    purchase_time?: number;
                }[];
                avg_kills_x16?: number;
                avg_deaths_x16?: number;
                avg_assists_x16?: number;
                avg_gpm_x16?: number;
                avg_xpm_x16?: number;
                best_kills_x16?: number;
                best_assists_x16?: number;
                best_gpm_x16?: number;
                best_xpm_x16?: number;
                win_streak?: number;
                best_win_streak?: number;
                fight_score?: number;
                farm_score?: number;
                support_score?: number;
                push_score?: number;
                level_up_times?: number[];
                graph_net_worth?: number[];
                inventory_snapshot?: {
                    item_id?: number[];
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[];
                    neutral_item_id?: number;
                }[];
                avg_stats_calibrated?: boolean;
                auto_style_criteria?: {
                    name_token?: number;
                    value?: number;
                }[];
                event_data?: {
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[];
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[];
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[];
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[];
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
                    periodic_resources?: {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[];
                }[];
                strange_gem_progress?: {
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                }[];
                hero_xp?: number;
                camps_stacked?: number;
                victory_prediction?: {
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                }[];
                lane_selection_flags?: number;
                rampages?: number;
                triple_kills?: number;
                aegis_snatched?: number;
                rapiers_purchased?: number;
                couriers_killed?: number;
                net_worth_rank?: number;
                support_gold_spent?: number;
                observer_wards_placed?: number;
                sentry_wards_placed?: number;
                wards_dewarded?: number;
                stun_duration?: number;
                rank_mmr_boost_type?: EDOTAMMRBoostType;
                contract_progress?: {
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                }[];
                guild_ids?: number[];
                graph_hero_damage?: number[];
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
                featured_gamemode_progress?: {
                    start_value?: number;
                    end_value?: number;
                    max_value?: number;
                };
                featured_hero_sticker_index?: number;
                featured_hero_sticker_quality?: number;
                equipped_econ_items?: {
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                }[];
            }[];
            graph_experience?: number[];
            graph_gold_earned?: number[];
            graph_net_worth?: number[];
            cm_first_pick?: boolean;
            cm_captain_player_id?: number;
            cm_penalty?: number;
        } & {
            dota_team?: number;
            players?: {
                ability_upgrades?: number[];
                player_slot?: number;
                kills?: {
                    victim_slot?: number;
                    count?: number;
                }[];
                items?: {
                    item_id?: number;
                    purchase_time?: number;
                }[];
                avg_kills_x16?: number;
                avg_deaths_x16?: number;
                avg_assists_x16?: number;
                avg_gpm_x16?: number;
                avg_xpm_x16?: number;
                best_kills_x16?: number;
                best_assists_x16?: number;
                best_gpm_x16?: number;
                best_xpm_x16?: number;
                win_streak?: number;
                best_win_streak?: number;
                fight_score?: number;
                farm_score?: number;
                support_score?: number;
                push_score?: number;
                level_up_times?: number[];
                graph_net_worth?: number[];
                inventory_snapshot?: {
                    item_id?: number[];
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[];
                    neutral_item_id?: number;
                }[];
                avg_stats_calibrated?: boolean;
                auto_style_criteria?: {
                    name_token?: number;
                    value?: number;
                }[];
                event_data?: {
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[];
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[];
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[];
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[];
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
                    periodic_resources?: {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[];
                }[];
                strange_gem_progress?: {
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                }[];
                hero_xp?: number;
                camps_stacked?: number;
                victory_prediction?: {
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                }[];
                lane_selection_flags?: number;
                rampages?: number;
                triple_kills?: number;
                aegis_snatched?: number;
                rapiers_purchased?: number;
                couriers_killed?: number;
                net_worth_rank?: number;
                support_gold_spent?: number;
                observer_wards_placed?: number;
                sentry_wards_placed?: number;
                wards_dewarded?: number;
                stun_duration?: number;
                rank_mmr_boost_type?: EDOTAMMRBoostType;
                contract_progress?: {
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                }[];
                guild_ids?: number[];
                graph_hero_damage?: number[];
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
                featured_gamemode_progress?: {
                    start_value?: number;
                    end_value?: number;
                    max_value?: number;
                };
                featured_hero_sticker_index?: number;
                featured_hero_sticker_quality?: number;
                equipped_econ_items?: {
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                }[];
            }[] & ({
                ability_upgrades?: number[];
                player_slot?: number;
                kills?: {
                    victim_slot?: number;
                    count?: number;
                }[];
                items?: {
                    item_id?: number;
                    purchase_time?: number;
                }[];
                avg_kills_x16?: number;
                avg_deaths_x16?: number;
                avg_assists_x16?: number;
                avg_gpm_x16?: number;
                avg_xpm_x16?: number;
                best_kills_x16?: number;
                best_assists_x16?: number;
                best_gpm_x16?: number;
                best_xpm_x16?: number;
                win_streak?: number;
                best_win_streak?: number;
                fight_score?: number;
                farm_score?: number;
                support_score?: number;
                push_score?: number;
                level_up_times?: number[];
                graph_net_worth?: number[];
                inventory_snapshot?: {
                    item_id?: number[];
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[];
                    neutral_item_id?: number;
                }[];
                avg_stats_calibrated?: boolean;
                auto_style_criteria?: {
                    name_token?: number;
                    value?: number;
                }[];
                event_data?: {
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[];
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[];
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[];
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[];
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
                    periodic_resources?: {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[];
                }[];
                strange_gem_progress?: {
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                }[];
                hero_xp?: number;
                camps_stacked?: number;
                victory_prediction?: {
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                }[];
                lane_selection_flags?: number;
                rampages?: number;
                triple_kills?: number;
                aegis_snatched?: number;
                rapiers_purchased?: number;
                couriers_killed?: number;
                net_worth_rank?: number;
                support_gold_spent?: number;
                observer_wards_placed?: number;
                sentry_wards_placed?: number;
                wards_dewarded?: number;
                stun_duration?: number;
                rank_mmr_boost_type?: EDOTAMMRBoostType;
                contract_progress?: {
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                }[];
                guild_ids?: number[];
                graph_hero_damage?: number[];
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
                featured_gamemode_progress?: {
                    start_value?: number;
                    end_value?: number;
                    max_value?: number;
                };
                featured_hero_sticker_index?: number;
                featured_hero_sticker_quality?: number;
                equipped_econ_items?: {
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                }[];
            } & {
                ability_upgrades?: number[] & number[] & { [K_60 in Exclude<keyof I_1["teams"][number]["players"][number]["ability_upgrades"], keyof number[]>]: never; };
                player_slot?: number;
                kills?: {
                    victim_slot?: number;
                    count?: number;
                }[] & ({
                    victim_slot?: number;
                    count?: number;
                } & {
                    victim_slot?: number;
                    count?: number;
                } & { [K_61 in Exclude<keyof I_1["teams"][number]["players"][number]["kills"][number], keyof CDOTAMatchMetadata_Team_PlayerKill>]: never; })[] & { [K_62 in Exclude<keyof I_1["teams"][number]["players"][number]["kills"], keyof {
                    victim_slot?: number;
                    count?: number;
                }[]>]: never; };
                items?: {
                    item_id?: number;
                    purchase_time?: number;
                }[] & ({
                    item_id?: number;
                    purchase_time?: number;
                } & {
                    item_id?: number;
                    purchase_time?: number;
                } & { [K_63 in Exclude<keyof I_1["teams"][number]["players"][number]["items"][number], keyof CDOTAMatchMetadata_Team_ItemPurchase>]: never; })[] & { [K_64 in Exclude<keyof I_1["teams"][number]["players"][number]["items"], keyof {
                    item_id?: number;
                    purchase_time?: number;
                }[]>]: never; };
                avg_kills_x16?: number;
                avg_deaths_x16?: number;
                avg_assists_x16?: number;
                avg_gpm_x16?: number;
                avg_xpm_x16?: number;
                best_kills_x16?: number;
                best_assists_x16?: number;
                best_gpm_x16?: number;
                best_xpm_x16?: number;
                win_streak?: number;
                best_win_streak?: number;
                fight_score?: number;
                farm_score?: number;
                support_score?: number;
                push_score?: number;
                level_up_times?: number[] & number[] & { [K_65 in Exclude<keyof I_1["teams"][number]["players"][number]["level_up_times"], keyof number[]>]: never; };
                graph_net_worth?: number[] & number[] & { [K_66 in Exclude<keyof I_1["teams"][number]["players"][number]["graph_net_worth"], keyof number[]>]: never; };
                inventory_snapshot?: {
                    item_id?: number[];
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[];
                    neutral_item_id?: number;
                }[] & ({
                    item_id?: number[];
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[];
                    neutral_item_id?: number;
                } & {
                    item_id?: number[] & number[] & { [K_67 in Exclude<keyof I_1["teams"][number]["players"][number]["inventory_snapshot"][number]["item_id"], keyof number[]>]: never; };
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[] & number[] & { [K_68 in Exclude<keyof I_1["teams"][number]["players"][number]["inventory_snapshot"][number]["backpack_item_id"], keyof number[]>]: never; };
                    neutral_item_id?: number;
                } & { [K_69 in Exclude<keyof I_1["teams"][number]["players"][number]["inventory_snapshot"][number], keyof CDOTAMatchMetadata_Team_InventorySnapshot>]: never; })[] & { [K_70 in Exclude<keyof I_1["teams"][number]["players"][number]["inventory_snapshot"], keyof {
                    item_id?: number[];
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[];
                    neutral_item_id?: number;
                }[]>]: never; };
                avg_stats_calibrated?: boolean;
                auto_style_criteria?: {
                    name_token?: number;
                    value?: number;
                }[] & ({
                    name_token?: number;
                    value?: number;
                } & {
                    name_token?: number;
                    value?: number;
                } & { [K_71 in Exclude<keyof I_1["teams"][number]["players"][number]["auto_style_criteria"][number], keyof CDOTAMatchMetadata_Team_AutoStyleCriteria>]: never; })[] & { [K_72 in Exclude<keyof I_1["teams"][number]["players"][number]["auto_style_criteria"], keyof {
                    name_token?: number;
                    value?: number;
                }[]>]: never; };
                event_data?: {
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[];
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[];
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[];
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[];
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
                    periodic_resources?: {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[];
                }[] & ({
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[];
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[];
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[];
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[];
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
                    periodic_resources?: {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[];
                } & {
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[] & ({
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    } & {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    } & { [K_73 in Exclude<keyof I_1["teams"][number]["players"][number]["event_data"][number]["sub_challenges_with_progress"][number], keyof CDOTAMatchMetadata_Team_SubChallenge>]: never; })[] & { [K_74 in Exclude<keyof I_1["teams"][number]["players"][number]["event_data"][number]["sub_challenges_with_progress"], keyof {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[]>]: never; };
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[] & ({
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    } & {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    } & { [K_75 in Exclude<keyof I_1["teams"][number]["players"][number]["event_data"][number]["cavern_challenge_map_results"][number], keyof CDOTAMatchMetadata_Team_CavernChallengeResult>]: never; })[] & { [K_76 in Exclude<keyof I_1["teams"][number]["players"][number]["event_data"][number]["cavern_challenge_map_results"], keyof {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[]>]: never; };
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[] & ({
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    } & {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    } & { [K_77 in Exclude<keyof I_1["teams"][number]["players"][number]["event_data"][number]["actions_granted"][number], keyof CDOTAMatchMetadata_Team_ActionGrant>]: never; })[] & { [K_78 in Exclude<keyof I_1["teams"][number]["players"][number]["event_data"][number]["actions_granted"], keyof {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[]>]: never; };
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[] & ({
                        points?: number;
                        reason?: number;
                    } & {
                        points?: number;
                        reason?: number;
                    } & { [K_79 in Exclude<keyof I_1["teams"][number]["players"][number]["event_data"][number]["candy_points_granted"][number], keyof CDOTAMatchMetadata_Team_CandyGrant>]: never; })[] & { [K_80 in Exclude<keyof I_1["teams"][number]["players"][number]["event_data"][number]["candy_points_granted"], keyof {
                        points?: number;
                        reason?: number;
                    }[]>]: never; };
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
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
                    } & { [K_81 in Exclude<keyof I_1["teams"][number]["players"][number]["event_data"][number]["periodic_resources"][number], keyof CDOTAMatchMetadata_Team_PeriodicResourceData>]: never; })[] & { [K_82 in Exclude<keyof I_1["teams"][number]["players"][number]["event_data"][number]["periodic_resources"], keyof {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[]>]: never; };
                } & { [K_83 in Exclude<keyof I_1["teams"][number]["players"][number]["event_data"][number], keyof CDOTAMatchMetadata_Team_EventData>]: never; })[] & { [K_84 in Exclude<keyof I_1["teams"][number]["players"][number]["event_data"], keyof {
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[];
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[];
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[];
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[];
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
                    periodic_resources?: {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[];
                }[]>]: never; };
                strange_gem_progress?: {
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                }[] & ({
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                } & {
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                } & { [K_85 in Exclude<keyof I_1["teams"][number]["players"][number]["strange_gem_progress"][number], keyof CDOTAMatchMetadata_Team_StrangeGemProgress>]: never; })[] & { [K_86 in Exclude<keyof I_1["teams"][number]["players"][number]["strange_gem_progress"], keyof {
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                }[]>]: never; };
                hero_xp?: number;
                camps_stacked?: number;
                victory_prediction?: {
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                }[] & ({
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                } & {
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                } & { [K_87 in Exclude<keyof I_1["teams"][number]["players"][number]["victory_prediction"][number], keyof CDOTAMatchMetadata_Team_VictoryPrediction>]: never; })[] & { [K_88 in Exclude<keyof I_1["teams"][number]["players"][number]["victory_prediction"], keyof {
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                }[]>]: never; };
                lane_selection_flags?: number;
                rampages?: number;
                triple_kills?: number;
                aegis_snatched?: number;
                rapiers_purchased?: number;
                couriers_killed?: number;
                net_worth_rank?: number;
                support_gold_spent?: number;
                observer_wards_placed?: number;
                sentry_wards_placed?: number;
                wards_dewarded?: number;
                stun_duration?: number;
                rank_mmr_boost_type?: EDOTAMMRBoostType;
                contract_progress?: {
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                }[] & ({
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                } & {
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                } & { [K_89 in Exclude<keyof I_1["teams"][number]["players"][number]["contract_progress"][number], keyof CDOTAMatchMetadata_Team_Player_ContractProgress>]: never; })[] & { [K_90 in Exclude<keyof I_1["teams"][number]["players"][number]["contract_progress"], keyof {
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                }[]>]: never; };
                guild_ids?: number[] & number[] & { [K_91 in Exclude<keyof I_1["teams"][number]["players"][number]["guild_ids"], keyof number[]>]: never; };
                graph_hero_damage?: number[] & number[] & { [K_92 in Exclude<keyof I_1["teams"][number]["players"][number]["graph_hero_damage"], keyof number[]>]: never; };
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
                featured_gamemode_progress?: {
                    start_value?: number;
                    end_value?: number;
                    max_value?: number;
                } & {
                    start_value?: number;
                    end_value?: number;
                    max_value?: number;
                } & { [K_93 in Exclude<keyof I_1["teams"][number]["players"][number]["featured_gamemode_progress"], keyof CDOTAMatchMetadata_Team_FeaturedGamemodeProgress>]: never; };
                featured_hero_sticker_index?: number;
                featured_hero_sticker_quality?: number;
                equipped_econ_items?: {
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                }[] & ({
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                } & {
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[] & ({
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    } & {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    } & { [K_94 in Exclude<keyof I_1["teams"][number]["players"][number]["equipped_econ_items"][number]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_95 in Exclude<keyof I_1["teams"][number]["players"][number]["equipped_econ_items"][number]["attribute"], keyof {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[]>]: never; };
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[] & ({
                        new_class?: number;
                        new_slot?: number;
                    } & {
                        new_class?: number;
                        new_slot?: number;
                    } & { [K_96 in Exclude<keyof I_1["teams"][number]["players"][number]["equipped_econ_items"][number]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_97 in Exclude<keyof I_1["teams"][number]["players"][number]["equipped_econ_items"][number]["equipped_state"], keyof {
                        new_class?: number;
                        new_slot?: number;
                    }[]>]: never; };
                } & { [K_98 in Exclude<keyof I_1["teams"][number]["players"][number]["equipped_econ_items"][number], keyof CDOTAMatchMetadata_EconItem>]: never; })[] & { [K_99 in Exclude<keyof I_1["teams"][number]["players"][number]["equipped_econ_items"], keyof {
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                }[]>]: never; };
            } & { [K_100 in Exclude<keyof I_1["teams"][number]["players"][number], keyof CDOTAMatchMetadata_Team_Player>]: never; })[] & { [K_101 in Exclude<keyof I_1["teams"][number]["players"], keyof {
                ability_upgrades?: number[];
                player_slot?: number;
                kills?: {
                    victim_slot?: number;
                    count?: number;
                }[];
                items?: {
                    item_id?: number;
                    purchase_time?: number;
                }[];
                avg_kills_x16?: number;
                avg_deaths_x16?: number;
                avg_assists_x16?: number;
                avg_gpm_x16?: number;
                avg_xpm_x16?: number;
                best_kills_x16?: number;
                best_assists_x16?: number;
                best_gpm_x16?: number;
                best_xpm_x16?: number;
                win_streak?: number;
                best_win_streak?: number;
                fight_score?: number;
                farm_score?: number;
                support_score?: number;
                push_score?: number;
                level_up_times?: number[];
                graph_net_worth?: number[];
                inventory_snapshot?: {
                    item_id?: number[];
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[];
                    neutral_item_id?: number;
                }[];
                avg_stats_calibrated?: boolean;
                auto_style_criteria?: {
                    name_token?: number;
                    value?: number;
                }[];
                event_data?: {
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[];
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[];
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[];
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[];
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
                    periodic_resources?: {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[];
                }[];
                strange_gem_progress?: {
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                }[];
                hero_xp?: number;
                camps_stacked?: number;
                victory_prediction?: {
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                }[];
                lane_selection_flags?: number;
                rampages?: number;
                triple_kills?: number;
                aegis_snatched?: number;
                rapiers_purchased?: number;
                couriers_killed?: number;
                net_worth_rank?: number;
                support_gold_spent?: number;
                observer_wards_placed?: number;
                sentry_wards_placed?: number;
                wards_dewarded?: number;
                stun_duration?: number;
                rank_mmr_boost_type?: EDOTAMMRBoostType;
                contract_progress?: {
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                }[];
                guild_ids?: number[];
                graph_hero_damage?: number[];
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
                featured_gamemode_progress?: {
                    start_value?: number;
                    end_value?: number;
                    max_value?: number;
                };
                featured_hero_sticker_index?: number;
                featured_hero_sticker_quality?: number;
                equipped_econ_items?: {
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                }[];
            }[]>]: never; };
            graph_experience?: number[] & number[] & { [K_102 in Exclude<keyof I_1["teams"][number]["graph_experience"], keyof number[]>]: never; };
            graph_gold_earned?: number[] & number[] & { [K_103 in Exclude<keyof I_1["teams"][number]["graph_gold_earned"], keyof number[]>]: never; };
            graph_net_worth?: number[] & number[] & { [K_104 in Exclude<keyof I_1["teams"][number]["graph_net_worth"], keyof number[]>]: never; };
            cm_first_pick?: boolean;
            cm_captain_player_id?: number;
            cm_penalty?: number;
        } & { [K_105 in Exclude<keyof I_1["teams"][number], keyof CDOTAMatchMetadata_Team>]: never; })[] & { [K_106 in Exclude<keyof I_1["teams"], keyof {
            dota_team?: number;
            players?: {
                ability_upgrades?: number[];
                player_slot?: number;
                kills?: {
                    victim_slot?: number;
                    count?: number;
                }[];
                items?: {
                    item_id?: number;
                    purchase_time?: number;
                }[];
                avg_kills_x16?: number;
                avg_deaths_x16?: number;
                avg_assists_x16?: number;
                avg_gpm_x16?: number;
                avg_xpm_x16?: number;
                best_kills_x16?: number;
                best_assists_x16?: number;
                best_gpm_x16?: number;
                best_xpm_x16?: number;
                win_streak?: number;
                best_win_streak?: number;
                fight_score?: number;
                farm_score?: number;
                support_score?: number;
                push_score?: number;
                level_up_times?: number[];
                graph_net_worth?: number[];
                inventory_snapshot?: {
                    item_id?: number[];
                    game_time?: number;
                    kills?: number;
                    deaths?: number;
                    assists?: number;
                    level?: number;
                    backpack_item_id?: number[];
                    neutral_item_id?: number;
                }[];
                avg_stats_calibrated?: boolean;
                auto_style_criteria?: {
                    name_token?: number;
                    value?: number;
                }[];
                event_data?: {
                    event_id?: number;
                    event_points?: number;
                    challenge_instance_id?: number;
                    challenge_quest_id?: number;
                    challenge_quest_challenge_id?: number;
                    challenge_completed?: boolean;
                    challenge_rank_completed?: number;
                    challenge_rank_previously_completed?: number;
                    event_owned?: boolean;
                    sub_challenges_with_progress?: {
                        slot_id?: number;
                        start_value?: number;
                        end_value?: number;
                        completed?: boolean;
                    }[];
                    wager_winnings?: number;
                    cavern_challenge_active?: boolean;
                    cavern_challenge_winnings?: number;
                    amount_wagered?: number;
                    periodic_point_adjustments?: number;
                    cavern_challenge_map_results?: {
                        completed_path_id?: number;
                        claimed_room_id?: number;
                    }[];
                    cavern_challenge_plus_shard_winnings?: number;
                    actions_granted?: {
                        action_id?: number;
                        quantity?: number;
                        audit?: number;
                        requires_win?: boolean;
                        audit_data?: string;
                    }[];
                    cavern_crawl_map_variant?: number;
                    team_wager_bonus_pct?: number;
                    wager_streak_pct?: number;
                    candy_points_granted?: {
                        points?: number;
                        reason?: number;
                    }[];
                    active_season_id?: number;
                    cavern_crawl_half_credit?: boolean;
                    periodic_resources?: {
                        periodic_resource_id?: number;
                        remaining?: number;
                        max?: number;
                    }[];
                }[];
                strange_gem_progress?: {
                    kill_eater_type?: number;
                    gem_item_def_index?: number;
                    required_hero_id?: number;
                    starting_value?: number;
                    ending_value?: number;
                    owner_item_def_index?: number;
                    owner_item_id?: string;
                }[];
                hero_xp?: number;
                camps_stacked?: number;
                victory_prediction?: {
                    item_id?: string;
                    item_def_index?: number;
                    starting_value?: number;
                    is_victory?: boolean;
                }[];
                lane_selection_flags?: number;
                rampages?: number;
                triple_kills?: number;
                aegis_snatched?: number;
                rapiers_purchased?: number;
                couriers_killed?: number;
                net_worth_rank?: number;
                support_gold_spent?: number;
                observer_wards_placed?: number;
                sentry_wards_placed?: number;
                wards_dewarded?: number;
                stun_duration?: number;
                rank_mmr_boost_type?: EDOTAMMRBoostType;
                contract_progress?: {
                    guild_id?: number;
                    event_id?: number;
                    challenge_instance_id?: number;
                    challenge_parameter?: number;
                    contract_stars?: number;
                    contract_slot?: number;
                    completed?: boolean;
                }[];
                guild_ids?: number[];
                graph_hero_damage?: number[];
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
                featured_gamemode_progress?: {
                    start_value?: number;
                    end_value?: number;
                    max_value?: number;
                };
                featured_hero_sticker_index?: number;
                featured_hero_sticker_quality?: number;
                equipped_econ_items?: {
                    def_index?: number;
                    quality?: number;
                    attribute?: {
                        def_index?: number;
                        value?: number;
                        value_bytes?: string;
                    }[];
                    style?: number;
                    equipped_state?: {
                        new_class?: number;
                        new_slot?: number;
                    }[];
                }[];
            }[];
            graph_experience?: number[];
            graph_gold_earned?: number[];
            graph_net_worth?: number[];
            cm_first_pick?: boolean;
            cm_captain_player_id?: number;
            cm_penalty?: number;
        }[]>]: never; };
        lobby_id?: string;
        report_until_time?: string;
        event_game_custom_table?: string;
        primary_event_id?: number;
        matchmaking_stats?: {
            average_queue_time?: number;
            maximum_queue_time?: number;
            behavior_score_variance?: import("./dota_gcmessages_common_match_management").EMatchBehaviorScoreVariance;
        } & {
            average_queue_time?: number;
            maximum_queue_time?: number;
            behavior_score_variance?: import("./dota_gcmessages_common_match_management").EMatchBehaviorScoreVariance;
        } & { [K_107 in Exclude<keyof I_1["matchmaking_stats"], keyof CMsgMatchMatchmakingStats>]: never; };
        mvp_data?: {
            mvps?: {
                player_slot?: number;
                accolades?: {
                    type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                    detail_value?: number;
                }[];
            }[];
        } & {
            mvps?: {
                player_slot?: number;
                accolades?: {
                    type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                    detail_value?: number;
                }[];
            }[] & ({
                player_slot?: number;
                accolades?: {
                    type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                    detail_value?: number;
                }[];
            } & {
                player_slot?: number;
                accolades?: {
                    type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                    detail_value?: number;
                }[] & ({
                    type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                    detail_value?: number;
                } & {
                    type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                    detail_value?: number;
                } & { [K_108 in Exclude<keyof I_1["mvp_data"]["mvps"][number]["accolades"][number], keyof import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade>]: never; })[] & { [K_109 in Exclude<keyof I_1["mvp_data"]["mvps"][number]["accolades"], keyof {
                    type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                    detail_value?: number;
                }[]>]: never; };
            } & { [K_110 in Exclude<keyof I_1["mvp_data"]["mvps"][number], keyof import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum>]: never; })[] & { [K_111 in Exclude<keyof I_1["mvp_data"]["mvps"], keyof {
                player_slot?: number;
                accolades?: {
                    type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                    detail_value?: number;
                }[];
            }[]>]: never; };
        } & { [K_112 in Exclude<keyof I_1["mvp_data"], "mvps">]: never; };
        guild_challenge_progress?: {
            guild_id?: number;
            event_id?: EEvent;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            challenge_timestamp?: number;
            challenge_progress_at_start?: number;
            challenge_progress_accumulated?: number;
            individual_progress?: {
                progress?: number;
                player_slot?: number;
            }[];
        }[] & ({
            guild_id?: number;
            event_id?: EEvent;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            challenge_timestamp?: number;
            challenge_progress_at_start?: number;
            challenge_progress_accumulated?: number;
            individual_progress?: {
                progress?: number;
                player_slot?: number;
            }[];
        } & {
            guild_id?: number;
            event_id?: EEvent;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            challenge_timestamp?: number;
            challenge_progress_at_start?: number;
            challenge_progress_accumulated?: number;
            individual_progress?: {
                progress?: number;
                player_slot?: number;
            }[] & ({
                progress?: number;
                player_slot?: number;
            } & {
                progress?: number;
                player_slot?: number;
            } & { [K_113 in Exclude<keyof I_1["guild_challenge_progress"][number]["individual_progress"][number], keyof CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress>]: never; })[] & { [K_114 in Exclude<keyof I_1["guild_challenge_progress"][number]["individual_progress"], keyof {
                progress?: number;
                player_slot?: number;
            }[]>]: never; };
        } & { [K_115 in Exclude<keyof I_1["guild_challenge_progress"][number], keyof CDOTAMatchMetadata_GuildChallengeProgress>]: never; })[] & { [K_116 in Exclude<keyof I_1["guild_challenge_progress"], keyof {
            guild_id?: number;
            event_id?: EEvent;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            challenge_timestamp?: number;
            challenge_progress_at_start?: number;
            challenge_progress_accumulated?: number;
            individual_progress?: {
                progress?: number;
                player_slot?: number;
            }[];
        }[]>]: never; };
        custom_post_game_table?: string;
        match_tips?: {
            source_player_slot?: number;
            target_player_slot?: number;
            tip_amount?: number;
            event_id?: EEvent;
        }[] & ({
            source_player_slot?: number;
            target_player_slot?: number;
            tip_amount?: number;
            event_id?: EEvent;
        } & {
            source_player_slot?: number;
            target_player_slot?: number;
            tip_amount?: number;
            event_id?: EEvent;
        } & { [K_117 in Exclude<keyof I_1["match_tips"][number], keyof CDOTAMatchMetadata_Tip>]: never; })[] & { [K_118 in Exclude<keyof I_1["match_tips"], keyof {
            source_player_slot?: number;
            target_player_slot?: number;
            tip_amount?: number;
            event_id?: EEvent;
        }[]>]: never; };
    } & { [K_119 in Exclude<keyof I_1, keyof CDOTAMatchMetadata>]: never; }>(object: I_1): CDOTAMatchMetadata;
};
export declare const CDOTAMatchMetadata_EconItem: {
    fromJSON(object: any): CDOTAMatchMetadata_EconItem;
    toJSON(message: CDOTAMatchMetadata_EconItem): unknown;
    create<I extends {
        def_index?: number;
        quality?: number;
        attribute?: {
            def_index?: number;
            value?: number;
            value_bytes?: string;
        }[];
        style?: number;
        equipped_state?: {
            new_class?: number;
            new_slot?: number;
        }[];
    } & {
        def_index?: number;
        quality?: number;
        attribute?: {
            def_index?: number;
            value?: number;
            value_bytes?: string;
        }[] & ({
            def_index?: number;
            value?: number;
            value_bytes?: string;
        } & {
            def_index?: number;
            value?: number;
            value_bytes?: string;
        } & { [K in Exclude<keyof I["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_1 in Exclude<keyof I["attribute"], keyof {
            def_index?: number;
            value?: number;
            value_bytes?: string;
        }[]>]: never; };
        style?: number;
        equipped_state?: {
            new_class?: number;
            new_slot?: number;
        }[] & ({
            new_class?: number;
            new_slot?: number;
        } & {
            new_class?: number;
            new_slot?: number;
        } & { [K_2 in Exclude<keyof I["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_3 in Exclude<keyof I["equipped_state"], keyof {
            new_class?: number;
            new_slot?: number;
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof CDOTAMatchMetadata_EconItem>]: never; }>(base?: I): CDOTAMatchMetadata_EconItem;
    fromPartial<I_1 extends {
        def_index?: number;
        quality?: number;
        attribute?: {
            def_index?: number;
            value?: number;
            value_bytes?: string;
        }[];
        style?: number;
        equipped_state?: {
            new_class?: number;
            new_slot?: number;
        }[];
    } & {
        def_index?: number;
        quality?: number;
        attribute?: {
            def_index?: number;
            value?: number;
            value_bytes?: string;
        }[] & ({
            def_index?: number;
            value?: number;
            value_bytes?: string;
        } & {
            def_index?: number;
            value?: number;
            value_bytes?: string;
        } & { [K_5 in Exclude<keyof I_1["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_6 in Exclude<keyof I_1["attribute"], keyof {
            def_index?: number;
            value?: number;
            value_bytes?: string;
        }[]>]: never; };
        style?: number;
        equipped_state?: {
            new_class?: number;
            new_slot?: number;
        }[] & ({
            new_class?: number;
            new_slot?: number;
        } & {
            new_class?: number;
            new_slot?: number;
        } & { [K_7 in Exclude<keyof I_1["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_8 in Exclude<keyof I_1["equipped_state"], keyof {
            new_class?: number;
            new_slot?: number;
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof CDOTAMatchMetadata_EconItem>]: never; }>(object: I_1): CDOTAMatchMetadata_EconItem;
};
export declare const CDOTAMatchMetadata_Team: {
    fromJSON(object: any): CDOTAMatchMetadata_Team;
    toJSON(message: CDOTAMatchMetadata_Team): unknown;
    create<I extends {
        dota_team?: number;
        players?: {
            ability_upgrades?: number[];
            player_slot?: number;
            kills?: {
                victim_slot?: number;
                count?: number;
            }[];
            items?: {
                item_id?: number;
                purchase_time?: number;
            }[];
            avg_kills_x16?: number;
            avg_deaths_x16?: number;
            avg_assists_x16?: number;
            avg_gpm_x16?: number;
            avg_xpm_x16?: number;
            best_kills_x16?: number;
            best_assists_x16?: number;
            best_gpm_x16?: number;
            best_xpm_x16?: number;
            win_streak?: number;
            best_win_streak?: number;
            fight_score?: number;
            farm_score?: number;
            support_score?: number;
            push_score?: number;
            level_up_times?: number[];
            graph_net_worth?: number[];
            inventory_snapshot?: {
                item_id?: number[];
                game_time?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
                level?: number;
                backpack_item_id?: number[];
                neutral_item_id?: number;
            }[];
            avg_stats_calibrated?: boolean;
            auto_style_criteria?: {
                name_token?: number;
                value?: number;
            }[];
            event_data?: {
                event_id?: number;
                event_points?: number;
                challenge_instance_id?: number;
                challenge_quest_id?: number;
                challenge_quest_challenge_id?: number;
                challenge_completed?: boolean;
                challenge_rank_completed?: number;
                challenge_rank_previously_completed?: number;
                event_owned?: boolean;
                sub_challenges_with_progress?: {
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                }[];
                wager_winnings?: number;
                cavern_challenge_active?: boolean;
                cavern_challenge_winnings?: number;
                amount_wagered?: number;
                periodic_point_adjustments?: number;
                cavern_challenge_map_results?: {
                    completed_path_id?: number;
                    claimed_room_id?: number;
                }[];
                cavern_challenge_plus_shard_winnings?: number;
                actions_granted?: {
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                }[];
                cavern_crawl_map_variant?: number;
                team_wager_bonus_pct?: number;
                wager_streak_pct?: number;
                candy_points_granted?: {
                    points?: number;
                    reason?: number;
                }[];
                active_season_id?: number;
                cavern_crawl_half_credit?: boolean;
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
            strange_gem_progress?: {
                kill_eater_type?: number;
                gem_item_def_index?: number;
                required_hero_id?: number;
                starting_value?: number;
                ending_value?: number;
                owner_item_def_index?: number;
                owner_item_id?: string;
            }[];
            hero_xp?: number;
            camps_stacked?: number;
            victory_prediction?: {
                item_id?: string;
                item_def_index?: number;
                starting_value?: number;
                is_victory?: boolean;
            }[];
            lane_selection_flags?: number;
            rampages?: number;
            triple_kills?: number;
            aegis_snatched?: number;
            rapiers_purchased?: number;
            couriers_killed?: number;
            net_worth_rank?: number;
            support_gold_spent?: number;
            observer_wards_placed?: number;
            sentry_wards_placed?: number;
            wards_dewarded?: number;
            stun_duration?: number;
            rank_mmr_boost_type?: EDOTAMMRBoostType;
            contract_progress?: {
                guild_id?: number;
                event_id?: number;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                contract_stars?: number;
                contract_slot?: number;
                completed?: boolean;
            }[];
            guild_ids?: number[];
            graph_hero_damage?: number[];
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
            featured_gamemode_progress?: {
                start_value?: number;
                end_value?: number;
                max_value?: number;
            };
            featured_hero_sticker_index?: number;
            featured_hero_sticker_quality?: number;
            equipped_econ_items?: {
                def_index?: number;
                quality?: number;
                attribute?: {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[];
                style?: number;
                equipped_state?: {
                    new_class?: number;
                    new_slot?: number;
                }[];
            }[];
        }[];
        graph_experience?: number[];
        graph_gold_earned?: number[];
        graph_net_worth?: number[];
        cm_first_pick?: boolean;
        cm_captain_player_id?: number;
        cm_penalty?: number;
    } & {
        dota_team?: number;
        players?: {
            ability_upgrades?: number[];
            player_slot?: number;
            kills?: {
                victim_slot?: number;
                count?: number;
            }[];
            items?: {
                item_id?: number;
                purchase_time?: number;
            }[];
            avg_kills_x16?: number;
            avg_deaths_x16?: number;
            avg_assists_x16?: number;
            avg_gpm_x16?: number;
            avg_xpm_x16?: number;
            best_kills_x16?: number;
            best_assists_x16?: number;
            best_gpm_x16?: number;
            best_xpm_x16?: number;
            win_streak?: number;
            best_win_streak?: number;
            fight_score?: number;
            farm_score?: number;
            support_score?: number;
            push_score?: number;
            level_up_times?: number[];
            graph_net_worth?: number[];
            inventory_snapshot?: {
                item_id?: number[];
                game_time?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
                level?: number;
                backpack_item_id?: number[];
                neutral_item_id?: number;
            }[];
            avg_stats_calibrated?: boolean;
            auto_style_criteria?: {
                name_token?: number;
                value?: number;
            }[];
            event_data?: {
                event_id?: number;
                event_points?: number;
                challenge_instance_id?: number;
                challenge_quest_id?: number;
                challenge_quest_challenge_id?: number;
                challenge_completed?: boolean;
                challenge_rank_completed?: number;
                challenge_rank_previously_completed?: number;
                event_owned?: boolean;
                sub_challenges_with_progress?: {
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                }[];
                wager_winnings?: number;
                cavern_challenge_active?: boolean;
                cavern_challenge_winnings?: number;
                amount_wagered?: number;
                periodic_point_adjustments?: number;
                cavern_challenge_map_results?: {
                    completed_path_id?: number;
                    claimed_room_id?: number;
                }[];
                cavern_challenge_plus_shard_winnings?: number;
                actions_granted?: {
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                }[];
                cavern_crawl_map_variant?: number;
                team_wager_bonus_pct?: number;
                wager_streak_pct?: number;
                candy_points_granted?: {
                    points?: number;
                    reason?: number;
                }[];
                active_season_id?: number;
                cavern_crawl_half_credit?: boolean;
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
            strange_gem_progress?: {
                kill_eater_type?: number;
                gem_item_def_index?: number;
                required_hero_id?: number;
                starting_value?: number;
                ending_value?: number;
                owner_item_def_index?: number;
                owner_item_id?: string;
            }[];
            hero_xp?: number;
            camps_stacked?: number;
            victory_prediction?: {
                item_id?: string;
                item_def_index?: number;
                starting_value?: number;
                is_victory?: boolean;
            }[];
            lane_selection_flags?: number;
            rampages?: number;
            triple_kills?: number;
            aegis_snatched?: number;
            rapiers_purchased?: number;
            couriers_killed?: number;
            net_worth_rank?: number;
            support_gold_spent?: number;
            observer_wards_placed?: number;
            sentry_wards_placed?: number;
            wards_dewarded?: number;
            stun_duration?: number;
            rank_mmr_boost_type?: EDOTAMMRBoostType;
            contract_progress?: {
                guild_id?: number;
                event_id?: number;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                contract_stars?: number;
                contract_slot?: number;
                completed?: boolean;
            }[];
            guild_ids?: number[];
            graph_hero_damage?: number[];
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
            featured_gamemode_progress?: {
                start_value?: number;
                end_value?: number;
                max_value?: number;
            };
            featured_hero_sticker_index?: number;
            featured_hero_sticker_quality?: number;
            equipped_econ_items?: {
                def_index?: number;
                quality?: number;
                attribute?: {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[];
                style?: number;
                equipped_state?: {
                    new_class?: number;
                    new_slot?: number;
                }[];
            }[];
        }[] & ({
            ability_upgrades?: number[];
            player_slot?: number;
            kills?: {
                victim_slot?: number;
                count?: number;
            }[];
            items?: {
                item_id?: number;
                purchase_time?: number;
            }[];
            avg_kills_x16?: number;
            avg_deaths_x16?: number;
            avg_assists_x16?: number;
            avg_gpm_x16?: number;
            avg_xpm_x16?: number;
            best_kills_x16?: number;
            best_assists_x16?: number;
            best_gpm_x16?: number;
            best_xpm_x16?: number;
            win_streak?: number;
            best_win_streak?: number;
            fight_score?: number;
            farm_score?: number;
            support_score?: number;
            push_score?: number;
            level_up_times?: number[];
            graph_net_worth?: number[];
            inventory_snapshot?: {
                item_id?: number[];
                game_time?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
                level?: number;
                backpack_item_id?: number[];
                neutral_item_id?: number;
            }[];
            avg_stats_calibrated?: boolean;
            auto_style_criteria?: {
                name_token?: number;
                value?: number;
            }[];
            event_data?: {
                event_id?: number;
                event_points?: number;
                challenge_instance_id?: number;
                challenge_quest_id?: number;
                challenge_quest_challenge_id?: number;
                challenge_completed?: boolean;
                challenge_rank_completed?: number;
                challenge_rank_previously_completed?: number;
                event_owned?: boolean;
                sub_challenges_with_progress?: {
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                }[];
                wager_winnings?: number;
                cavern_challenge_active?: boolean;
                cavern_challenge_winnings?: number;
                amount_wagered?: number;
                periodic_point_adjustments?: number;
                cavern_challenge_map_results?: {
                    completed_path_id?: number;
                    claimed_room_id?: number;
                }[];
                cavern_challenge_plus_shard_winnings?: number;
                actions_granted?: {
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                }[];
                cavern_crawl_map_variant?: number;
                team_wager_bonus_pct?: number;
                wager_streak_pct?: number;
                candy_points_granted?: {
                    points?: number;
                    reason?: number;
                }[];
                active_season_id?: number;
                cavern_crawl_half_credit?: boolean;
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
            strange_gem_progress?: {
                kill_eater_type?: number;
                gem_item_def_index?: number;
                required_hero_id?: number;
                starting_value?: number;
                ending_value?: number;
                owner_item_def_index?: number;
                owner_item_id?: string;
            }[];
            hero_xp?: number;
            camps_stacked?: number;
            victory_prediction?: {
                item_id?: string;
                item_def_index?: number;
                starting_value?: number;
                is_victory?: boolean;
            }[];
            lane_selection_flags?: number;
            rampages?: number;
            triple_kills?: number;
            aegis_snatched?: number;
            rapiers_purchased?: number;
            couriers_killed?: number;
            net_worth_rank?: number;
            support_gold_spent?: number;
            observer_wards_placed?: number;
            sentry_wards_placed?: number;
            wards_dewarded?: number;
            stun_duration?: number;
            rank_mmr_boost_type?: EDOTAMMRBoostType;
            contract_progress?: {
                guild_id?: number;
                event_id?: number;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                contract_stars?: number;
                contract_slot?: number;
                completed?: boolean;
            }[];
            guild_ids?: number[];
            graph_hero_damage?: number[];
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
            featured_gamemode_progress?: {
                start_value?: number;
                end_value?: number;
                max_value?: number;
            };
            featured_hero_sticker_index?: number;
            featured_hero_sticker_quality?: number;
            equipped_econ_items?: {
                def_index?: number;
                quality?: number;
                attribute?: {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[];
                style?: number;
                equipped_state?: {
                    new_class?: number;
                    new_slot?: number;
                }[];
            }[];
        } & {
            ability_upgrades?: number[] & number[] & { [K in Exclude<keyof I["players"][number]["ability_upgrades"], keyof number[]>]: never; };
            player_slot?: number;
            kills?: {
                victim_slot?: number;
                count?: number;
            }[] & ({
                victim_slot?: number;
                count?: number;
            } & {
                victim_slot?: number;
                count?: number;
            } & { [K_1 in Exclude<keyof I["players"][number]["kills"][number], keyof CDOTAMatchMetadata_Team_PlayerKill>]: never; })[] & { [K_2 in Exclude<keyof I["players"][number]["kills"], keyof {
                victim_slot?: number;
                count?: number;
            }[]>]: never; };
            items?: {
                item_id?: number;
                purchase_time?: number;
            }[] & ({
                item_id?: number;
                purchase_time?: number;
            } & {
                item_id?: number;
                purchase_time?: number;
            } & { [K_3 in Exclude<keyof I["players"][number]["items"][number], keyof CDOTAMatchMetadata_Team_ItemPurchase>]: never; })[] & { [K_4 in Exclude<keyof I["players"][number]["items"], keyof {
                item_id?: number;
                purchase_time?: number;
            }[]>]: never; };
            avg_kills_x16?: number;
            avg_deaths_x16?: number;
            avg_assists_x16?: number;
            avg_gpm_x16?: number;
            avg_xpm_x16?: number;
            best_kills_x16?: number;
            best_assists_x16?: number;
            best_gpm_x16?: number;
            best_xpm_x16?: number;
            win_streak?: number;
            best_win_streak?: number;
            fight_score?: number;
            farm_score?: number;
            support_score?: number;
            push_score?: number;
            level_up_times?: number[] & number[] & { [K_5 in Exclude<keyof I["players"][number]["level_up_times"], keyof number[]>]: never; };
            graph_net_worth?: number[] & number[] & { [K_6 in Exclude<keyof I["players"][number]["graph_net_worth"], keyof number[]>]: never; };
            inventory_snapshot?: {
                item_id?: number[];
                game_time?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
                level?: number;
                backpack_item_id?: number[];
                neutral_item_id?: number;
            }[] & ({
                item_id?: number[];
                game_time?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
                level?: number;
                backpack_item_id?: number[];
                neutral_item_id?: number;
            } & {
                item_id?: number[] & number[] & { [K_7 in Exclude<keyof I["players"][number]["inventory_snapshot"][number]["item_id"], keyof number[]>]: never; };
                game_time?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
                level?: number;
                backpack_item_id?: number[] & number[] & { [K_8 in Exclude<keyof I["players"][number]["inventory_snapshot"][number]["backpack_item_id"], keyof number[]>]: never; };
                neutral_item_id?: number;
            } & { [K_9 in Exclude<keyof I["players"][number]["inventory_snapshot"][number], keyof CDOTAMatchMetadata_Team_InventorySnapshot>]: never; })[] & { [K_10 in Exclude<keyof I["players"][number]["inventory_snapshot"], keyof {
                item_id?: number[];
                game_time?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
                level?: number;
                backpack_item_id?: number[];
                neutral_item_id?: number;
            }[]>]: never; };
            avg_stats_calibrated?: boolean;
            auto_style_criteria?: {
                name_token?: number;
                value?: number;
            }[] & ({
                name_token?: number;
                value?: number;
            } & {
                name_token?: number;
                value?: number;
            } & { [K_11 in Exclude<keyof I["players"][number]["auto_style_criteria"][number], keyof CDOTAMatchMetadata_Team_AutoStyleCriteria>]: never; })[] & { [K_12 in Exclude<keyof I["players"][number]["auto_style_criteria"], keyof {
                name_token?: number;
                value?: number;
            }[]>]: never; };
            event_data?: {
                event_id?: number;
                event_points?: number;
                challenge_instance_id?: number;
                challenge_quest_id?: number;
                challenge_quest_challenge_id?: number;
                challenge_completed?: boolean;
                challenge_rank_completed?: number;
                challenge_rank_previously_completed?: number;
                event_owned?: boolean;
                sub_challenges_with_progress?: {
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                }[];
                wager_winnings?: number;
                cavern_challenge_active?: boolean;
                cavern_challenge_winnings?: number;
                amount_wagered?: number;
                periodic_point_adjustments?: number;
                cavern_challenge_map_results?: {
                    completed_path_id?: number;
                    claimed_room_id?: number;
                }[];
                cavern_challenge_plus_shard_winnings?: number;
                actions_granted?: {
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                }[];
                cavern_crawl_map_variant?: number;
                team_wager_bonus_pct?: number;
                wager_streak_pct?: number;
                candy_points_granted?: {
                    points?: number;
                    reason?: number;
                }[];
                active_season_id?: number;
                cavern_crawl_half_credit?: boolean;
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[] & ({
                event_id?: number;
                event_points?: number;
                challenge_instance_id?: number;
                challenge_quest_id?: number;
                challenge_quest_challenge_id?: number;
                challenge_completed?: boolean;
                challenge_rank_completed?: number;
                challenge_rank_previously_completed?: number;
                event_owned?: boolean;
                sub_challenges_with_progress?: {
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                }[];
                wager_winnings?: number;
                cavern_challenge_active?: boolean;
                cavern_challenge_winnings?: number;
                amount_wagered?: number;
                periodic_point_adjustments?: number;
                cavern_challenge_map_results?: {
                    completed_path_id?: number;
                    claimed_room_id?: number;
                }[];
                cavern_challenge_plus_shard_winnings?: number;
                actions_granted?: {
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                }[];
                cavern_crawl_map_variant?: number;
                team_wager_bonus_pct?: number;
                wager_streak_pct?: number;
                candy_points_granted?: {
                    points?: number;
                    reason?: number;
                }[];
                active_season_id?: number;
                cavern_crawl_half_credit?: boolean;
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            } & {
                event_id?: number;
                event_points?: number;
                challenge_instance_id?: number;
                challenge_quest_id?: number;
                challenge_quest_challenge_id?: number;
                challenge_completed?: boolean;
                challenge_rank_completed?: number;
                challenge_rank_previously_completed?: number;
                event_owned?: boolean;
                sub_challenges_with_progress?: {
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                }[] & ({
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                } & {
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                } & { [K_13 in Exclude<keyof I["players"][number]["event_data"][number]["sub_challenges_with_progress"][number], keyof CDOTAMatchMetadata_Team_SubChallenge>]: never; })[] & { [K_14 in Exclude<keyof I["players"][number]["event_data"][number]["sub_challenges_with_progress"], keyof {
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                }[]>]: never; };
                wager_winnings?: number;
                cavern_challenge_active?: boolean;
                cavern_challenge_winnings?: number;
                amount_wagered?: number;
                periodic_point_adjustments?: number;
                cavern_challenge_map_results?: {
                    completed_path_id?: number;
                    claimed_room_id?: number;
                }[] & ({
                    completed_path_id?: number;
                    claimed_room_id?: number;
                } & {
                    completed_path_id?: number;
                    claimed_room_id?: number;
                } & { [K_15 in Exclude<keyof I["players"][number]["event_data"][number]["cavern_challenge_map_results"][number], keyof CDOTAMatchMetadata_Team_CavernChallengeResult>]: never; })[] & { [K_16 in Exclude<keyof I["players"][number]["event_data"][number]["cavern_challenge_map_results"], keyof {
                    completed_path_id?: number;
                    claimed_room_id?: number;
                }[]>]: never; };
                cavern_challenge_plus_shard_winnings?: number;
                actions_granted?: {
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                }[] & ({
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                } & {
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                } & { [K_17 in Exclude<keyof I["players"][number]["event_data"][number]["actions_granted"][number], keyof CDOTAMatchMetadata_Team_ActionGrant>]: never; })[] & { [K_18 in Exclude<keyof I["players"][number]["event_data"][number]["actions_granted"], keyof {
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                }[]>]: never; };
                cavern_crawl_map_variant?: number;
                team_wager_bonus_pct?: number;
                wager_streak_pct?: number;
                candy_points_granted?: {
                    points?: number;
                    reason?: number;
                }[] & ({
                    points?: number;
                    reason?: number;
                } & {
                    points?: number;
                    reason?: number;
                } & { [K_19 in Exclude<keyof I["players"][number]["event_data"][number]["candy_points_granted"][number], keyof CDOTAMatchMetadata_Team_CandyGrant>]: never; })[] & { [K_20 in Exclude<keyof I["players"][number]["event_data"][number]["candy_points_granted"], keyof {
                    points?: number;
                    reason?: number;
                }[]>]: never; };
                active_season_id?: number;
                cavern_crawl_half_credit?: boolean;
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
                } & { [K_21 in Exclude<keyof I["players"][number]["event_data"][number]["periodic_resources"][number], keyof CDOTAMatchMetadata_Team_PeriodicResourceData>]: never; })[] & { [K_22 in Exclude<keyof I["players"][number]["event_data"][number]["periodic_resources"], keyof {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[]>]: never; };
            } & { [K_23 in Exclude<keyof I["players"][number]["event_data"][number], keyof CDOTAMatchMetadata_Team_EventData>]: never; })[] & { [K_24 in Exclude<keyof I["players"][number]["event_data"], keyof {
                event_id?: number;
                event_points?: number;
                challenge_instance_id?: number;
                challenge_quest_id?: number;
                challenge_quest_challenge_id?: number;
                challenge_completed?: boolean;
                challenge_rank_completed?: number;
                challenge_rank_previously_completed?: number;
                event_owned?: boolean;
                sub_challenges_with_progress?: {
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                }[];
                wager_winnings?: number;
                cavern_challenge_active?: boolean;
                cavern_challenge_winnings?: number;
                amount_wagered?: number;
                periodic_point_adjustments?: number;
                cavern_challenge_map_results?: {
                    completed_path_id?: number;
                    claimed_room_id?: number;
                }[];
                cavern_challenge_plus_shard_winnings?: number;
                actions_granted?: {
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                }[];
                cavern_crawl_map_variant?: number;
                team_wager_bonus_pct?: number;
                wager_streak_pct?: number;
                candy_points_granted?: {
                    points?: number;
                    reason?: number;
                }[];
                active_season_id?: number;
                cavern_crawl_half_credit?: boolean;
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[]>]: never; };
            strange_gem_progress?: {
                kill_eater_type?: number;
                gem_item_def_index?: number;
                required_hero_id?: number;
                starting_value?: number;
                ending_value?: number;
                owner_item_def_index?: number;
                owner_item_id?: string;
            }[] & ({
                kill_eater_type?: number;
                gem_item_def_index?: number;
                required_hero_id?: number;
                starting_value?: number;
                ending_value?: number;
                owner_item_def_index?: number;
                owner_item_id?: string;
            } & {
                kill_eater_type?: number;
                gem_item_def_index?: number;
                required_hero_id?: number;
                starting_value?: number;
                ending_value?: number;
                owner_item_def_index?: number;
                owner_item_id?: string;
            } & { [K_25 in Exclude<keyof I["players"][number]["strange_gem_progress"][number], keyof CDOTAMatchMetadata_Team_StrangeGemProgress>]: never; })[] & { [K_26 in Exclude<keyof I["players"][number]["strange_gem_progress"], keyof {
                kill_eater_type?: number;
                gem_item_def_index?: number;
                required_hero_id?: number;
                starting_value?: number;
                ending_value?: number;
                owner_item_def_index?: number;
                owner_item_id?: string;
            }[]>]: never; };
            hero_xp?: number;
            camps_stacked?: number;
            victory_prediction?: {
                item_id?: string;
                item_def_index?: number;
                starting_value?: number;
                is_victory?: boolean;
            }[] & ({
                item_id?: string;
                item_def_index?: number;
                starting_value?: number;
                is_victory?: boolean;
            } & {
                item_id?: string;
                item_def_index?: number;
                starting_value?: number;
                is_victory?: boolean;
            } & { [K_27 in Exclude<keyof I["players"][number]["victory_prediction"][number], keyof CDOTAMatchMetadata_Team_VictoryPrediction>]: never; })[] & { [K_28 in Exclude<keyof I["players"][number]["victory_prediction"], keyof {
                item_id?: string;
                item_def_index?: number;
                starting_value?: number;
                is_victory?: boolean;
            }[]>]: never; };
            lane_selection_flags?: number;
            rampages?: number;
            triple_kills?: number;
            aegis_snatched?: number;
            rapiers_purchased?: number;
            couriers_killed?: number;
            net_worth_rank?: number;
            support_gold_spent?: number;
            observer_wards_placed?: number;
            sentry_wards_placed?: number;
            wards_dewarded?: number;
            stun_duration?: number;
            rank_mmr_boost_type?: EDOTAMMRBoostType;
            contract_progress?: {
                guild_id?: number;
                event_id?: number;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                contract_stars?: number;
                contract_slot?: number;
                completed?: boolean;
            }[] & ({
                guild_id?: number;
                event_id?: number;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                contract_stars?: number;
                contract_slot?: number;
                completed?: boolean;
            } & {
                guild_id?: number;
                event_id?: number;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                contract_stars?: number;
                contract_slot?: number;
                completed?: boolean;
            } & { [K_29 in Exclude<keyof I["players"][number]["contract_progress"][number], keyof CDOTAMatchMetadata_Team_Player_ContractProgress>]: never; })[] & { [K_30 in Exclude<keyof I["players"][number]["contract_progress"], keyof {
                guild_id?: number;
                event_id?: number;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                contract_stars?: number;
                contract_slot?: number;
                completed?: boolean;
            }[]>]: never; };
            guild_ids?: number[] & number[] & { [K_31 in Exclude<keyof I["players"][number]["guild_ids"], keyof number[]>]: never; };
            graph_hero_damage?: number[] & number[] & { [K_32 in Exclude<keyof I["players"][number]["graph_hero_damage"], keyof number[]>]: never; };
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
            featured_gamemode_progress?: {
                start_value?: number;
                end_value?: number;
                max_value?: number;
            } & {
                start_value?: number;
                end_value?: number;
                max_value?: number;
            } & { [K_33 in Exclude<keyof I["players"][number]["featured_gamemode_progress"], keyof CDOTAMatchMetadata_Team_FeaturedGamemodeProgress>]: never; };
            featured_hero_sticker_index?: number;
            featured_hero_sticker_quality?: number;
            equipped_econ_items?: {
                def_index?: number;
                quality?: number;
                attribute?: {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[];
                style?: number;
                equipped_state?: {
                    new_class?: number;
                    new_slot?: number;
                }[];
            }[] & ({
                def_index?: number;
                quality?: number;
                attribute?: {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[];
                style?: number;
                equipped_state?: {
                    new_class?: number;
                    new_slot?: number;
                }[];
            } & {
                def_index?: number;
                quality?: number;
                attribute?: {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[] & ({
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                } & {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                } & { [K_34 in Exclude<keyof I["players"][number]["equipped_econ_items"][number]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_35 in Exclude<keyof I["players"][number]["equipped_econ_items"][number]["attribute"], keyof {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[]>]: never; };
                style?: number;
                equipped_state?: {
                    new_class?: number;
                    new_slot?: number;
                }[] & ({
                    new_class?: number;
                    new_slot?: number;
                } & {
                    new_class?: number;
                    new_slot?: number;
                } & { [K_36 in Exclude<keyof I["players"][number]["equipped_econ_items"][number]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_37 in Exclude<keyof I["players"][number]["equipped_econ_items"][number]["equipped_state"], keyof {
                    new_class?: number;
                    new_slot?: number;
                }[]>]: never; };
            } & { [K_38 in Exclude<keyof I["players"][number]["equipped_econ_items"][number], keyof CDOTAMatchMetadata_EconItem>]: never; })[] & { [K_39 in Exclude<keyof I["players"][number]["equipped_econ_items"], keyof {
                def_index?: number;
                quality?: number;
                attribute?: {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[];
                style?: number;
                equipped_state?: {
                    new_class?: number;
                    new_slot?: number;
                }[];
            }[]>]: never; };
        } & { [K_40 in Exclude<keyof I["players"][number], keyof CDOTAMatchMetadata_Team_Player>]: never; })[] & { [K_41 in Exclude<keyof I["players"], keyof {
            ability_upgrades?: number[];
            player_slot?: number;
            kills?: {
                victim_slot?: number;
                count?: number;
            }[];
            items?: {
                item_id?: number;
                purchase_time?: number;
            }[];
            avg_kills_x16?: number;
            avg_deaths_x16?: number;
            avg_assists_x16?: number;
            avg_gpm_x16?: number;
            avg_xpm_x16?: number;
            best_kills_x16?: number;
            best_assists_x16?: number;
            best_gpm_x16?: number;
            best_xpm_x16?: number;
            win_streak?: number;
            best_win_streak?: number;
            fight_score?: number;
            farm_score?: number;
            support_score?: number;
            push_score?: number;
            level_up_times?: number[];
            graph_net_worth?: number[];
            inventory_snapshot?: {
                item_id?: number[];
                game_time?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
                level?: number;
                backpack_item_id?: number[];
                neutral_item_id?: number;
            }[];
            avg_stats_calibrated?: boolean;
            auto_style_criteria?: {
                name_token?: number;
                value?: number;
            }[];
            event_data?: {
                event_id?: number;
                event_points?: number;
                challenge_instance_id?: number;
                challenge_quest_id?: number;
                challenge_quest_challenge_id?: number;
                challenge_completed?: boolean;
                challenge_rank_completed?: number;
                challenge_rank_previously_completed?: number;
                event_owned?: boolean;
                sub_challenges_with_progress?: {
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                }[];
                wager_winnings?: number;
                cavern_challenge_active?: boolean;
                cavern_challenge_winnings?: number;
                amount_wagered?: number;
                periodic_point_adjustments?: number;
                cavern_challenge_map_results?: {
                    completed_path_id?: number;
                    claimed_room_id?: number;
                }[];
                cavern_challenge_plus_shard_winnings?: number;
                actions_granted?: {
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                }[];
                cavern_crawl_map_variant?: number;
                team_wager_bonus_pct?: number;
                wager_streak_pct?: number;
                candy_points_granted?: {
                    points?: number;
                    reason?: number;
                }[];
                active_season_id?: number;
                cavern_crawl_half_credit?: boolean;
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
            strange_gem_progress?: {
                kill_eater_type?: number;
                gem_item_def_index?: number;
                required_hero_id?: number;
                starting_value?: number;
                ending_value?: number;
                owner_item_def_index?: number;
                owner_item_id?: string;
            }[];
            hero_xp?: number;
            camps_stacked?: number;
            victory_prediction?: {
                item_id?: string;
                item_def_index?: number;
                starting_value?: number;
                is_victory?: boolean;
            }[];
            lane_selection_flags?: number;
            rampages?: number;
            triple_kills?: number;
            aegis_snatched?: number;
            rapiers_purchased?: number;
            couriers_killed?: number;
            net_worth_rank?: number;
            support_gold_spent?: number;
            observer_wards_placed?: number;
            sentry_wards_placed?: number;
            wards_dewarded?: number;
            stun_duration?: number;
            rank_mmr_boost_type?: EDOTAMMRBoostType;
            contract_progress?: {
                guild_id?: number;
                event_id?: number;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                contract_stars?: number;
                contract_slot?: number;
                completed?: boolean;
            }[];
            guild_ids?: number[];
            graph_hero_damage?: number[];
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
            featured_gamemode_progress?: {
                start_value?: number;
                end_value?: number;
                max_value?: number;
            };
            featured_hero_sticker_index?: number;
            featured_hero_sticker_quality?: number;
            equipped_econ_items?: {
                def_index?: number;
                quality?: number;
                attribute?: {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[];
                style?: number;
                equipped_state?: {
                    new_class?: number;
                    new_slot?: number;
                }[];
            }[];
        }[]>]: never; };
        graph_experience?: number[] & number[] & { [K_42 in Exclude<keyof I["graph_experience"], keyof number[]>]: never; };
        graph_gold_earned?: number[] & number[] & { [K_43 in Exclude<keyof I["graph_gold_earned"], keyof number[]>]: never; };
        graph_net_worth?: number[] & number[] & { [K_44 in Exclude<keyof I["graph_net_worth"], keyof number[]>]: never; };
        cm_first_pick?: boolean;
        cm_captain_player_id?: number;
        cm_penalty?: number;
    } & { [K_45 in Exclude<keyof I, keyof CDOTAMatchMetadata_Team>]: never; }>(base?: I): CDOTAMatchMetadata_Team;
    fromPartial<I_1 extends {
        dota_team?: number;
        players?: {
            ability_upgrades?: number[];
            player_slot?: number;
            kills?: {
                victim_slot?: number;
                count?: number;
            }[];
            items?: {
                item_id?: number;
                purchase_time?: number;
            }[];
            avg_kills_x16?: number;
            avg_deaths_x16?: number;
            avg_assists_x16?: number;
            avg_gpm_x16?: number;
            avg_xpm_x16?: number;
            best_kills_x16?: number;
            best_assists_x16?: number;
            best_gpm_x16?: number;
            best_xpm_x16?: number;
            win_streak?: number;
            best_win_streak?: number;
            fight_score?: number;
            farm_score?: number;
            support_score?: number;
            push_score?: number;
            level_up_times?: number[];
            graph_net_worth?: number[];
            inventory_snapshot?: {
                item_id?: number[];
                game_time?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
                level?: number;
                backpack_item_id?: number[];
                neutral_item_id?: number;
            }[];
            avg_stats_calibrated?: boolean;
            auto_style_criteria?: {
                name_token?: number;
                value?: number;
            }[];
            event_data?: {
                event_id?: number;
                event_points?: number;
                challenge_instance_id?: number;
                challenge_quest_id?: number;
                challenge_quest_challenge_id?: number;
                challenge_completed?: boolean;
                challenge_rank_completed?: number;
                challenge_rank_previously_completed?: number;
                event_owned?: boolean;
                sub_challenges_with_progress?: {
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                }[];
                wager_winnings?: number;
                cavern_challenge_active?: boolean;
                cavern_challenge_winnings?: number;
                amount_wagered?: number;
                periodic_point_adjustments?: number;
                cavern_challenge_map_results?: {
                    completed_path_id?: number;
                    claimed_room_id?: number;
                }[];
                cavern_challenge_plus_shard_winnings?: number;
                actions_granted?: {
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                }[];
                cavern_crawl_map_variant?: number;
                team_wager_bonus_pct?: number;
                wager_streak_pct?: number;
                candy_points_granted?: {
                    points?: number;
                    reason?: number;
                }[];
                active_season_id?: number;
                cavern_crawl_half_credit?: boolean;
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
            strange_gem_progress?: {
                kill_eater_type?: number;
                gem_item_def_index?: number;
                required_hero_id?: number;
                starting_value?: number;
                ending_value?: number;
                owner_item_def_index?: number;
                owner_item_id?: string;
            }[];
            hero_xp?: number;
            camps_stacked?: number;
            victory_prediction?: {
                item_id?: string;
                item_def_index?: number;
                starting_value?: number;
                is_victory?: boolean;
            }[];
            lane_selection_flags?: number;
            rampages?: number;
            triple_kills?: number;
            aegis_snatched?: number;
            rapiers_purchased?: number;
            couriers_killed?: number;
            net_worth_rank?: number;
            support_gold_spent?: number;
            observer_wards_placed?: number;
            sentry_wards_placed?: number;
            wards_dewarded?: number;
            stun_duration?: number;
            rank_mmr_boost_type?: EDOTAMMRBoostType;
            contract_progress?: {
                guild_id?: number;
                event_id?: number;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                contract_stars?: number;
                contract_slot?: number;
                completed?: boolean;
            }[];
            guild_ids?: number[];
            graph_hero_damage?: number[];
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
            featured_gamemode_progress?: {
                start_value?: number;
                end_value?: number;
                max_value?: number;
            };
            featured_hero_sticker_index?: number;
            featured_hero_sticker_quality?: number;
            equipped_econ_items?: {
                def_index?: number;
                quality?: number;
                attribute?: {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[];
                style?: number;
                equipped_state?: {
                    new_class?: number;
                    new_slot?: number;
                }[];
            }[];
        }[];
        graph_experience?: number[];
        graph_gold_earned?: number[];
        graph_net_worth?: number[];
        cm_first_pick?: boolean;
        cm_captain_player_id?: number;
        cm_penalty?: number;
    } & {
        dota_team?: number;
        players?: {
            ability_upgrades?: number[];
            player_slot?: number;
            kills?: {
                victim_slot?: number;
                count?: number;
            }[];
            items?: {
                item_id?: number;
                purchase_time?: number;
            }[];
            avg_kills_x16?: number;
            avg_deaths_x16?: number;
            avg_assists_x16?: number;
            avg_gpm_x16?: number;
            avg_xpm_x16?: number;
            best_kills_x16?: number;
            best_assists_x16?: number;
            best_gpm_x16?: number;
            best_xpm_x16?: number;
            win_streak?: number;
            best_win_streak?: number;
            fight_score?: number;
            farm_score?: number;
            support_score?: number;
            push_score?: number;
            level_up_times?: number[];
            graph_net_worth?: number[];
            inventory_snapshot?: {
                item_id?: number[];
                game_time?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
                level?: number;
                backpack_item_id?: number[];
                neutral_item_id?: number;
            }[];
            avg_stats_calibrated?: boolean;
            auto_style_criteria?: {
                name_token?: number;
                value?: number;
            }[];
            event_data?: {
                event_id?: number;
                event_points?: number;
                challenge_instance_id?: number;
                challenge_quest_id?: number;
                challenge_quest_challenge_id?: number;
                challenge_completed?: boolean;
                challenge_rank_completed?: number;
                challenge_rank_previously_completed?: number;
                event_owned?: boolean;
                sub_challenges_with_progress?: {
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                }[];
                wager_winnings?: number;
                cavern_challenge_active?: boolean;
                cavern_challenge_winnings?: number;
                amount_wagered?: number;
                periodic_point_adjustments?: number;
                cavern_challenge_map_results?: {
                    completed_path_id?: number;
                    claimed_room_id?: number;
                }[];
                cavern_challenge_plus_shard_winnings?: number;
                actions_granted?: {
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                }[];
                cavern_crawl_map_variant?: number;
                team_wager_bonus_pct?: number;
                wager_streak_pct?: number;
                candy_points_granted?: {
                    points?: number;
                    reason?: number;
                }[];
                active_season_id?: number;
                cavern_crawl_half_credit?: boolean;
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
            strange_gem_progress?: {
                kill_eater_type?: number;
                gem_item_def_index?: number;
                required_hero_id?: number;
                starting_value?: number;
                ending_value?: number;
                owner_item_def_index?: number;
                owner_item_id?: string;
            }[];
            hero_xp?: number;
            camps_stacked?: number;
            victory_prediction?: {
                item_id?: string;
                item_def_index?: number;
                starting_value?: number;
                is_victory?: boolean;
            }[];
            lane_selection_flags?: number;
            rampages?: number;
            triple_kills?: number;
            aegis_snatched?: number;
            rapiers_purchased?: number;
            couriers_killed?: number;
            net_worth_rank?: number;
            support_gold_spent?: number;
            observer_wards_placed?: number;
            sentry_wards_placed?: number;
            wards_dewarded?: number;
            stun_duration?: number;
            rank_mmr_boost_type?: EDOTAMMRBoostType;
            contract_progress?: {
                guild_id?: number;
                event_id?: number;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                contract_stars?: number;
                contract_slot?: number;
                completed?: boolean;
            }[];
            guild_ids?: number[];
            graph_hero_damage?: number[];
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
            featured_gamemode_progress?: {
                start_value?: number;
                end_value?: number;
                max_value?: number;
            };
            featured_hero_sticker_index?: number;
            featured_hero_sticker_quality?: number;
            equipped_econ_items?: {
                def_index?: number;
                quality?: number;
                attribute?: {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[];
                style?: number;
                equipped_state?: {
                    new_class?: number;
                    new_slot?: number;
                }[];
            }[];
        }[] & ({
            ability_upgrades?: number[];
            player_slot?: number;
            kills?: {
                victim_slot?: number;
                count?: number;
            }[];
            items?: {
                item_id?: number;
                purchase_time?: number;
            }[];
            avg_kills_x16?: number;
            avg_deaths_x16?: number;
            avg_assists_x16?: number;
            avg_gpm_x16?: number;
            avg_xpm_x16?: number;
            best_kills_x16?: number;
            best_assists_x16?: number;
            best_gpm_x16?: number;
            best_xpm_x16?: number;
            win_streak?: number;
            best_win_streak?: number;
            fight_score?: number;
            farm_score?: number;
            support_score?: number;
            push_score?: number;
            level_up_times?: number[];
            graph_net_worth?: number[];
            inventory_snapshot?: {
                item_id?: number[];
                game_time?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
                level?: number;
                backpack_item_id?: number[];
                neutral_item_id?: number;
            }[];
            avg_stats_calibrated?: boolean;
            auto_style_criteria?: {
                name_token?: number;
                value?: number;
            }[];
            event_data?: {
                event_id?: number;
                event_points?: number;
                challenge_instance_id?: number;
                challenge_quest_id?: number;
                challenge_quest_challenge_id?: number;
                challenge_completed?: boolean;
                challenge_rank_completed?: number;
                challenge_rank_previously_completed?: number;
                event_owned?: boolean;
                sub_challenges_with_progress?: {
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                }[];
                wager_winnings?: number;
                cavern_challenge_active?: boolean;
                cavern_challenge_winnings?: number;
                amount_wagered?: number;
                periodic_point_adjustments?: number;
                cavern_challenge_map_results?: {
                    completed_path_id?: number;
                    claimed_room_id?: number;
                }[];
                cavern_challenge_plus_shard_winnings?: number;
                actions_granted?: {
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                }[];
                cavern_crawl_map_variant?: number;
                team_wager_bonus_pct?: number;
                wager_streak_pct?: number;
                candy_points_granted?: {
                    points?: number;
                    reason?: number;
                }[];
                active_season_id?: number;
                cavern_crawl_half_credit?: boolean;
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
            strange_gem_progress?: {
                kill_eater_type?: number;
                gem_item_def_index?: number;
                required_hero_id?: number;
                starting_value?: number;
                ending_value?: number;
                owner_item_def_index?: number;
                owner_item_id?: string;
            }[];
            hero_xp?: number;
            camps_stacked?: number;
            victory_prediction?: {
                item_id?: string;
                item_def_index?: number;
                starting_value?: number;
                is_victory?: boolean;
            }[];
            lane_selection_flags?: number;
            rampages?: number;
            triple_kills?: number;
            aegis_snatched?: number;
            rapiers_purchased?: number;
            couriers_killed?: number;
            net_worth_rank?: number;
            support_gold_spent?: number;
            observer_wards_placed?: number;
            sentry_wards_placed?: number;
            wards_dewarded?: number;
            stun_duration?: number;
            rank_mmr_boost_type?: EDOTAMMRBoostType;
            contract_progress?: {
                guild_id?: number;
                event_id?: number;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                contract_stars?: number;
                contract_slot?: number;
                completed?: boolean;
            }[];
            guild_ids?: number[];
            graph_hero_damage?: number[];
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
            featured_gamemode_progress?: {
                start_value?: number;
                end_value?: number;
                max_value?: number;
            };
            featured_hero_sticker_index?: number;
            featured_hero_sticker_quality?: number;
            equipped_econ_items?: {
                def_index?: number;
                quality?: number;
                attribute?: {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[];
                style?: number;
                equipped_state?: {
                    new_class?: number;
                    new_slot?: number;
                }[];
            }[];
        } & {
            ability_upgrades?: number[] & number[] & { [K_46 in Exclude<keyof I_1["players"][number]["ability_upgrades"], keyof number[]>]: never; };
            player_slot?: number;
            kills?: {
                victim_slot?: number;
                count?: number;
            }[] & ({
                victim_slot?: number;
                count?: number;
            } & {
                victim_slot?: number;
                count?: number;
            } & { [K_47 in Exclude<keyof I_1["players"][number]["kills"][number], keyof CDOTAMatchMetadata_Team_PlayerKill>]: never; })[] & { [K_48 in Exclude<keyof I_1["players"][number]["kills"], keyof {
                victim_slot?: number;
                count?: number;
            }[]>]: never; };
            items?: {
                item_id?: number;
                purchase_time?: number;
            }[] & ({
                item_id?: number;
                purchase_time?: number;
            } & {
                item_id?: number;
                purchase_time?: number;
            } & { [K_49 in Exclude<keyof I_1["players"][number]["items"][number], keyof CDOTAMatchMetadata_Team_ItemPurchase>]: never; })[] & { [K_50 in Exclude<keyof I_1["players"][number]["items"], keyof {
                item_id?: number;
                purchase_time?: number;
            }[]>]: never; };
            avg_kills_x16?: number;
            avg_deaths_x16?: number;
            avg_assists_x16?: number;
            avg_gpm_x16?: number;
            avg_xpm_x16?: number;
            best_kills_x16?: number;
            best_assists_x16?: number;
            best_gpm_x16?: number;
            best_xpm_x16?: number;
            win_streak?: number;
            best_win_streak?: number;
            fight_score?: number;
            farm_score?: number;
            support_score?: number;
            push_score?: number;
            level_up_times?: number[] & number[] & { [K_51 in Exclude<keyof I_1["players"][number]["level_up_times"], keyof number[]>]: never; };
            graph_net_worth?: number[] & number[] & { [K_52 in Exclude<keyof I_1["players"][number]["graph_net_worth"], keyof number[]>]: never; };
            inventory_snapshot?: {
                item_id?: number[];
                game_time?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
                level?: number;
                backpack_item_id?: number[];
                neutral_item_id?: number;
            }[] & ({
                item_id?: number[];
                game_time?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
                level?: number;
                backpack_item_id?: number[];
                neutral_item_id?: number;
            } & {
                item_id?: number[] & number[] & { [K_53 in Exclude<keyof I_1["players"][number]["inventory_snapshot"][number]["item_id"], keyof number[]>]: never; };
                game_time?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
                level?: number;
                backpack_item_id?: number[] & number[] & { [K_54 in Exclude<keyof I_1["players"][number]["inventory_snapshot"][number]["backpack_item_id"], keyof number[]>]: never; };
                neutral_item_id?: number;
            } & { [K_55 in Exclude<keyof I_1["players"][number]["inventory_snapshot"][number], keyof CDOTAMatchMetadata_Team_InventorySnapshot>]: never; })[] & { [K_56 in Exclude<keyof I_1["players"][number]["inventory_snapshot"], keyof {
                item_id?: number[];
                game_time?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
                level?: number;
                backpack_item_id?: number[];
                neutral_item_id?: number;
            }[]>]: never; };
            avg_stats_calibrated?: boolean;
            auto_style_criteria?: {
                name_token?: number;
                value?: number;
            }[] & ({
                name_token?: number;
                value?: number;
            } & {
                name_token?: number;
                value?: number;
            } & { [K_57 in Exclude<keyof I_1["players"][number]["auto_style_criteria"][number], keyof CDOTAMatchMetadata_Team_AutoStyleCriteria>]: never; })[] & { [K_58 in Exclude<keyof I_1["players"][number]["auto_style_criteria"], keyof {
                name_token?: number;
                value?: number;
            }[]>]: never; };
            event_data?: {
                event_id?: number;
                event_points?: number;
                challenge_instance_id?: number;
                challenge_quest_id?: number;
                challenge_quest_challenge_id?: number;
                challenge_completed?: boolean;
                challenge_rank_completed?: number;
                challenge_rank_previously_completed?: number;
                event_owned?: boolean;
                sub_challenges_with_progress?: {
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                }[];
                wager_winnings?: number;
                cavern_challenge_active?: boolean;
                cavern_challenge_winnings?: number;
                amount_wagered?: number;
                periodic_point_adjustments?: number;
                cavern_challenge_map_results?: {
                    completed_path_id?: number;
                    claimed_room_id?: number;
                }[];
                cavern_challenge_plus_shard_winnings?: number;
                actions_granted?: {
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                }[];
                cavern_crawl_map_variant?: number;
                team_wager_bonus_pct?: number;
                wager_streak_pct?: number;
                candy_points_granted?: {
                    points?: number;
                    reason?: number;
                }[];
                active_season_id?: number;
                cavern_crawl_half_credit?: boolean;
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[] & ({
                event_id?: number;
                event_points?: number;
                challenge_instance_id?: number;
                challenge_quest_id?: number;
                challenge_quest_challenge_id?: number;
                challenge_completed?: boolean;
                challenge_rank_completed?: number;
                challenge_rank_previously_completed?: number;
                event_owned?: boolean;
                sub_challenges_with_progress?: {
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                }[];
                wager_winnings?: number;
                cavern_challenge_active?: boolean;
                cavern_challenge_winnings?: number;
                amount_wagered?: number;
                periodic_point_adjustments?: number;
                cavern_challenge_map_results?: {
                    completed_path_id?: number;
                    claimed_room_id?: number;
                }[];
                cavern_challenge_plus_shard_winnings?: number;
                actions_granted?: {
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                }[];
                cavern_crawl_map_variant?: number;
                team_wager_bonus_pct?: number;
                wager_streak_pct?: number;
                candy_points_granted?: {
                    points?: number;
                    reason?: number;
                }[];
                active_season_id?: number;
                cavern_crawl_half_credit?: boolean;
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            } & {
                event_id?: number;
                event_points?: number;
                challenge_instance_id?: number;
                challenge_quest_id?: number;
                challenge_quest_challenge_id?: number;
                challenge_completed?: boolean;
                challenge_rank_completed?: number;
                challenge_rank_previously_completed?: number;
                event_owned?: boolean;
                sub_challenges_with_progress?: {
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                }[] & ({
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                } & {
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                } & { [K_59 in Exclude<keyof I_1["players"][number]["event_data"][number]["sub_challenges_with_progress"][number], keyof CDOTAMatchMetadata_Team_SubChallenge>]: never; })[] & { [K_60 in Exclude<keyof I_1["players"][number]["event_data"][number]["sub_challenges_with_progress"], keyof {
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                }[]>]: never; };
                wager_winnings?: number;
                cavern_challenge_active?: boolean;
                cavern_challenge_winnings?: number;
                amount_wagered?: number;
                periodic_point_adjustments?: number;
                cavern_challenge_map_results?: {
                    completed_path_id?: number;
                    claimed_room_id?: number;
                }[] & ({
                    completed_path_id?: number;
                    claimed_room_id?: number;
                } & {
                    completed_path_id?: number;
                    claimed_room_id?: number;
                } & { [K_61 in Exclude<keyof I_1["players"][number]["event_data"][number]["cavern_challenge_map_results"][number], keyof CDOTAMatchMetadata_Team_CavernChallengeResult>]: never; })[] & { [K_62 in Exclude<keyof I_1["players"][number]["event_data"][number]["cavern_challenge_map_results"], keyof {
                    completed_path_id?: number;
                    claimed_room_id?: number;
                }[]>]: never; };
                cavern_challenge_plus_shard_winnings?: number;
                actions_granted?: {
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                }[] & ({
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                } & {
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                } & { [K_63 in Exclude<keyof I_1["players"][number]["event_data"][number]["actions_granted"][number], keyof CDOTAMatchMetadata_Team_ActionGrant>]: never; })[] & { [K_64 in Exclude<keyof I_1["players"][number]["event_data"][number]["actions_granted"], keyof {
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                }[]>]: never; };
                cavern_crawl_map_variant?: number;
                team_wager_bonus_pct?: number;
                wager_streak_pct?: number;
                candy_points_granted?: {
                    points?: number;
                    reason?: number;
                }[] & ({
                    points?: number;
                    reason?: number;
                } & {
                    points?: number;
                    reason?: number;
                } & { [K_65 in Exclude<keyof I_1["players"][number]["event_data"][number]["candy_points_granted"][number], keyof CDOTAMatchMetadata_Team_CandyGrant>]: never; })[] & { [K_66 in Exclude<keyof I_1["players"][number]["event_data"][number]["candy_points_granted"], keyof {
                    points?: number;
                    reason?: number;
                }[]>]: never; };
                active_season_id?: number;
                cavern_crawl_half_credit?: boolean;
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
                } & { [K_67 in Exclude<keyof I_1["players"][number]["event_data"][number]["periodic_resources"][number], keyof CDOTAMatchMetadata_Team_PeriodicResourceData>]: never; })[] & { [K_68 in Exclude<keyof I_1["players"][number]["event_data"][number]["periodic_resources"], keyof {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[]>]: never; };
            } & { [K_69 in Exclude<keyof I_1["players"][number]["event_data"][number], keyof CDOTAMatchMetadata_Team_EventData>]: never; })[] & { [K_70 in Exclude<keyof I_1["players"][number]["event_data"], keyof {
                event_id?: number;
                event_points?: number;
                challenge_instance_id?: number;
                challenge_quest_id?: number;
                challenge_quest_challenge_id?: number;
                challenge_completed?: boolean;
                challenge_rank_completed?: number;
                challenge_rank_previously_completed?: number;
                event_owned?: boolean;
                sub_challenges_with_progress?: {
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                }[];
                wager_winnings?: number;
                cavern_challenge_active?: boolean;
                cavern_challenge_winnings?: number;
                amount_wagered?: number;
                periodic_point_adjustments?: number;
                cavern_challenge_map_results?: {
                    completed_path_id?: number;
                    claimed_room_id?: number;
                }[];
                cavern_challenge_plus_shard_winnings?: number;
                actions_granted?: {
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                }[];
                cavern_crawl_map_variant?: number;
                team_wager_bonus_pct?: number;
                wager_streak_pct?: number;
                candy_points_granted?: {
                    points?: number;
                    reason?: number;
                }[];
                active_season_id?: number;
                cavern_crawl_half_credit?: boolean;
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[]>]: never; };
            strange_gem_progress?: {
                kill_eater_type?: number;
                gem_item_def_index?: number;
                required_hero_id?: number;
                starting_value?: number;
                ending_value?: number;
                owner_item_def_index?: number;
                owner_item_id?: string;
            }[] & ({
                kill_eater_type?: number;
                gem_item_def_index?: number;
                required_hero_id?: number;
                starting_value?: number;
                ending_value?: number;
                owner_item_def_index?: number;
                owner_item_id?: string;
            } & {
                kill_eater_type?: number;
                gem_item_def_index?: number;
                required_hero_id?: number;
                starting_value?: number;
                ending_value?: number;
                owner_item_def_index?: number;
                owner_item_id?: string;
            } & { [K_71 in Exclude<keyof I_1["players"][number]["strange_gem_progress"][number], keyof CDOTAMatchMetadata_Team_StrangeGemProgress>]: never; })[] & { [K_72 in Exclude<keyof I_1["players"][number]["strange_gem_progress"], keyof {
                kill_eater_type?: number;
                gem_item_def_index?: number;
                required_hero_id?: number;
                starting_value?: number;
                ending_value?: number;
                owner_item_def_index?: number;
                owner_item_id?: string;
            }[]>]: never; };
            hero_xp?: number;
            camps_stacked?: number;
            victory_prediction?: {
                item_id?: string;
                item_def_index?: number;
                starting_value?: number;
                is_victory?: boolean;
            }[] & ({
                item_id?: string;
                item_def_index?: number;
                starting_value?: number;
                is_victory?: boolean;
            } & {
                item_id?: string;
                item_def_index?: number;
                starting_value?: number;
                is_victory?: boolean;
            } & { [K_73 in Exclude<keyof I_1["players"][number]["victory_prediction"][number], keyof CDOTAMatchMetadata_Team_VictoryPrediction>]: never; })[] & { [K_74 in Exclude<keyof I_1["players"][number]["victory_prediction"], keyof {
                item_id?: string;
                item_def_index?: number;
                starting_value?: number;
                is_victory?: boolean;
            }[]>]: never; };
            lane_selection_flags?: number;
            rampages?: number;
            triple_kills?: number;
            aegis_snatched?: number;
            rapiers_purchased?: number;
            couriers_killed?: number;
            net_worth_rank?: number;
            support_gold_spent?: number;
            observer_wards_placed?: number;
            sentry_wards_placed?: number;
            wards_dewarded?: number;
            stun_duration?: number;
            rank_mmr_boost_type?: EDOTAMMRBoostType;
            contract_progress?: {
                guild_id?: number;
                event_id?: number;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                contract_stars?: number;
                contract_slot?: number;
                completed?: boolean;
            }[] & ({
                guild_id?: number;
                event_id?: number;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                contract_stars?: number;
                contract_slot?: number;
                completed?: boolean;
            } & {
                guild_id?: number;
                event_id?: number;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                contract_stars?: number;
                contract_slot?: number;
                completed?: boolean;
            } & { [K_75 in Exclude<keyof I_1["players"][number]["contract_progress"][number], keyof CDOTAMatchMetadata_Team_Player_ContractProgress>]: never; })[] & { [K_76 in Exclude<keyof I_1["players"][number]["contract_progress"], keyof {
                guild_id?: number;
                event_id?: number;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                contract_stars?: number;
                contract_slot?: number;
                completed?: boolean;
            }[]>]: never; };
            guild_ids?: number[] & number[] & { [K_77 in Exclude<keyof I_1["players"][number]["guild_ids"], keyof number[]>]: never; };
            graph_hero_damage?: number[] & number[] & { [K_78 in Exclude<keyof I_1["players"][number]["graph_hero_damage"], keyof number[]>]: never; };
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
            featured_gamemode_progress?: {
                start_value?: number;
                end_value?: number;
                max_value?: number;
            } & {
                start_value?: number;
                end_value?: number;
                max_value?: number;
            } & { [K_79 in Exclude<keyof I_1["players"][number]["featured_gamemode_progress"], keyof CDOTAMatchMetadata_Team_FeaturedGamemodeProgress>]: never; };
            featured_hero_sticker_index?: number;
            featured_hero_sticker_quality?: number;
            equipped_econ_items?: {
                def_index?: number;
                quality?: number;
                attribute?: {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[];
                style?: number;
                equipped_state?: {
                    new_class?: number;
                    new_slot?: number;
                }[];
            }[] & ({
                def_index?: number;
                quality?: number;
                attribute?: {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[];
                style?: number;
                equipped_state?: {
                    new_class?: number;
                    new_slot?: number;
                }[];
            } & {
                def_index?: number;
                quality?: number;
                attribute?: {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[] & ({
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                } & {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                } & { [K_80 in Exclude<keyof I_1["players"][number]["equipped_econ_items"][number]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_81 in Exclude<keyof I_1["players"][number]["equipped_econ_items"][number]["attribute"], keyof {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[]>]: never; };
                style?: number;
                equipped_state?: {
                    new_class?: number;
                    new_slot?: number;
                }[] & ({
                    new_class?: number;
                    new_slot?: number;
                } & {
                    new_class?: number;
                    new_slot?: number;
                } & { [K_82 in Exclude<keyof I_1["players"][number]["equipped_econ_items"][number]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_83 in Exclude<keyof I_1["players"][number]["equipped_econ_items"][number]["equipped_state"], keyof {
                    new_class?: number;
                    new_slot?: number;
                }[]>]: never; };
            } & { [K_84 in Exclude<keyof I_1["players"][number]["equipped_econ_items"][number], keyof CDOTAMatchMetadata_EconItem>]: never; })[] & { [K_85 in Exclude<keyof I_1["players"][number]["equipped_econ_items"], keyof {
                def_index?: number;
                quality?: number;
                attribute?: {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[];
                style?: number;
                equipped_state?: {
                    new_class?: number;
                    new_slot?: number;
                }[];
            }[]>]: never; };
        } & { [K_86 in Exclude<keyof I_1["players"][number], keyof CDOTAMatchMetadata_Team_Player>]: never; })[] & { [K_87 in Exclude<keyof I_1["players"], keyof {
            ability_upgrades?: number[];
            player_slot?: number;
            kills?: {
                victim_slot?: number;
                count?: number;
            }[];
            items?: {
                item_id?: number;
                purchase_time?: number;
            }[];
            avg_kills_x16?: number;
            avg_deaths_x16?: number;
            avg_assists_x16?: number;
            avg_gpm_x16?: number;
            avg_xpm_x16?: number;
            best_kills_x16?: number;
            best_assists_x16?: number;
            best_gpm_x16?: number;
            best_xpm_x16?: number;
            win_streak?: number;
            best_win_streak?: number;
            fight_score?: number;
            farm_score?: number;
            support_score?: number;
            push_score?: number;
            level_up_times?: number[];
            graph_net_worth?: number[];
            inventory_snapshot?: {
                item_id?: number[];
                game_time?: number;
                kills?: number;
                deaths?: number;
                assists?: number;
                level?: number;
                backpack_item_id?: number[];
                neutral_item_id?: number;
            }[];
            avg_stats_calibrated?: boolean;
            auto_style_criteria?: {
                name_token?: number;
                value?: number;
            }[];
            event_data?: {
                event_id?: number;
                event_points?: number;
                challenge_instance_id?: number;
                challenge_quest_id?: number;
                challenge_quest_challenge_id?: number;
                challenge_completed?: boolean;
                challenge_rank_completed?: number;
                challenge_rank_previously_completed?: number;
                event_owned?: boolean;
                sub_challenges_with_progress?: {
                    slot_id?: number;
                    start_value?: number;
                    end_value?: number;
                    completed?: boolean;
                }[];
                wager_winnings?: number;
                cavern_challenge_active?: boolean;
                cavern_challenge_winnings?: number;
                amount_wagered?: number;
                periodic_point_adjustments?: number;
                cavern_challenge_map_results?: {
                    completed_path_id?: number;
                    claimed_room_id?: number;
                }[];
                cavern_challenge_plus_shard_winnings?: number;
                actions_granted?: {
                    action_id?: number;
                    quantity?: number;
                    audit?: number;
                    requires_win?: boolean;
                    audit_data?: string;
                }[];
                cavern_crawl_map_variant?: number;
                team_wager_bonus_pct?: number;
                wager_streak_pct?: number;
                candy_points_granted?: {
                    points?: number;
                    reason?: number;
                }[];
                active_season_id?: number;
                cavern_crawl_half_credit?: boolean;
                periodic_resources?: {
                    periodic_resource_id?: number;
                    remaining?: number;
                    max?: number;
                }[];
            }[];
            strange_gem_progress?: {
                kill_eater_type?: number;
                gem_item_def_index?: number;
                required_hero_id?: number;
                starting_value?: number;
                ending_value?: number;
                owner_item_def_index?: number;
                owner_item_id?: string;
            }[];
            hero_xp?: number;
            camps_stacked?: number;
            victory_prediction?: {
                item_id?: string;
                item_def_index?: number;
                starting_value?: number;
                is_victory?: boolean;
            }[];
            lane_selection_flags?: number;
            rampages?: number;
            triple_kills?: number;
            aegis_snatched?: number;
            rapiers_purchased?: number;
            couriers_killed?: number;
            net_worth_rank?: number;
            support_gold_spent?: number;
            observer_wards_placed?: number;
            sentry_wards_placed?: number;
            wards_dewarded?: number;
            stun_duration?: number;
            rank_mmr_boost_type?: EDOTAMMRBoostType;
            contract_progress?: {
                guild_id?: number;
                event_id?: number;
                challenge_instance_id?: number;
                challenge_parameter?: number;
                contract_stars?: number;
                contract_slot?: number;
                completed?: boolean;
            }[];
            guild_ids?: number[];
            graph_hero_damage?: number[];
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
            featured_gamemode_progress?: {
                start_value?: number;
                end_value?: number;
                max_value?: number;
            };
            featured_hero_sticker_index?: number;
            featured_hero_sticker_quality?: number;
            equipped_econ_items?: {
                def_index?: number;
                quality?: number;
                attribute?: {
                    def_index?: number;
                    value?: number;
                    value_bytes?: string;
                }[];
                style?: number;
                equipped_state?: {
                    new_class?: number;
                    new_slot?: number;
                }[];
            }[];
        }[]>]: never; };
        graph_experience?: number[] & number[] & { [K_88 in Exclude<keyof I_1["graph_experience"], keyof number[]>]: never; };
        graph_gold_earned?: number[] & number[] & { [K_89 in Exclude<keyof I_1["graph_gold_earned"], keyof number[]>]: never; };
        graph_net_worth?: number[] & number[] & { [K_90 in Exclude<keyof I_1["graph_net_worth"], keyof number[]>]: never; };
        cm_first_pick?: boolean;
        cm_captain_player_id?: number;
        cm_penalty?: number;
    } & { [K_91 in Exclude<keyof I_1, keyof CDOTAMatchMetadata_Team>]: never; }>(object: I_1): CDOTAMatchMetadata_Team;
};
export declare const CDOTAMatchMetadata_Team_PlayerKill: {
    fromJSON(object: any): CDOTAMatchMetadata_Team_PlayerKill;
    toJSON(message: CDOTAMatchMetadata_Team_PlayerKill): unknown;
    create<I extends {
        victim_slot?: number;
        count?: number;
    } & {
        victim_slot?: number;
        count?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchMetadata_Team_PlayerKill>]: never; }>(base?: I): CDOTAMatchMetadata_Team_PlayerKill;
    fromPartial<I_1 extends {
        victim_slot?: number;
        count?: number;
    } & {
        victim_slot?: number;
        count?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchMetadata_Team_PlayerKill>]: never; }>(object: I_1): CDOTAMatchMetadata_Team_PlayerKill;
};
export declare const CDOTAMatchMetadata_Team_ItemPurchase: {
    fromJSON(object: any): CDOTAMatchMetadata_Team_ItemPurchase;
    toJSON(message: CDOTAMatchMetadata_Team_ItemPurchase): unknown;
    create<I extends {
        item_id?: number;
        purchase_time?: number;
    } & {
        item_id?: number;
        purchase_time?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchMetadata_Team_ItemPurchase>]: never; }>(base?: I): CDOTAMatchMetadata_Team_ItemPurchase;
    fromPartial<I_1 extends {
        item_id?: number;
        purchase_time?: number;
    } & {
        item_id?: number;
        purchase_time?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchMetadata_Team_ItemPurchase>]: never; }>(object: I_1): CDOTAMatchMetadata_Team_ItemPurchase;
};
export declare const CDOTAMatchMetadata_Team_InventorySnapshot: {
    fromJSON(object: any): CDOTAMatchMetadata_Team_InventorySnapshot;
    toJSON(message: CDOTAMatchMetadata_Team_InventorySnapshot): unknown;
    create<I extends {
        item_id?: number[];
        game_time?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
        level?: number;
        backpack_item_id?: number[];
        neutral_item_id?: number;
    } & {
        item_id?: number[] & number[] & { [K in Exclude<keyof I["item_id"], keyof number[]>]: never; };
        game_time?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
        level?: number;
        backpack_item_id?: number[] & number[] & { [K_1 in Exclude<keyof I["backpack_item_id"], keyof number[]>]: never; };
        neutral_item_id?: number;
    } & { [K_2 in Exclude<keyof I, keyof CDOTAMatchMetadata_Team_InventorySnapshot>]: never; }>(base?: I): CDOTAMatchMetadata_Team_InventorySnapshot;
    fromPartial<I_1 extends {
        item_id?: number[];
        game_time?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
        level?: number;
        backpack_item_id?: number[];
        neutral_item_id?: number;
    } & {
        item_id?: number[] & number[] & { [K_3 in Exclude<keyof I_1["item_id"], keyof number[]>]: never; };
        game_time?: number;
        kills?: number;
        deaths?: number;
        assists?: number;
        level?: number;
        backpack_item_id?: number[] & number[] & { [K_4 in Exclude<keyof I_1["backpack_item_id"], keyof number[]>]: never; };
        neutral_item_id?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CDOTAMatchMetadata_Team_InventorySnapshot>]: never; }>(object: I_1): CDOTAMatchMetadata_Team_InventorySnapshot;
};
export declare const CDOTAMatchMetadata_Team_AutoStyleCriteria: {
    fromJSON(object: any): CDOTAMatchMetadata_Team_AutoStyleCriteria;
    toJSON(message: CDOTAMatchMetadata_Team_AutoStyleCriteria): unknown;
    create<I extends {
        name_token?: number;
        value?: number;
    } & {
        name_token?: number;
        value?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchMetadata_Team_AutoStyleCriteria>]: never; }>(base?: I): CDOTAMatchMetadata_Team_AutoStyleCriteria;
    fromPartial<I_1 extends {
        name_token?: number;
        value?: number;
    } & {
        name_token?: number;
        value?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchMetadata_Team_AutoStyleCriteria>]: never; }>(object: I_1): CDOTAMatchMetadata_Team_AutoStyleCriteria;
};
export declare const CDOTAMatchMetadata_Team_StrangeGemProgress: {
    fromJSON(object: any): CDOTAMatchMetadata_Team_StrangeGemProgress;
    toJSON(message: CDOTAMatchMetadata_Team_StrangeGemProgress): unknown;
    create<I extends {
        kill_eater_type?: number;
        gem_item_def_index?: number;
        required_hero_id?: number;
        starting_value?: number;
        ending_value?: number;
        owner_item_def_index?: number;
        owner_item_id?: string;
    } & {
        kill_eater_type?: number;
        gem_item_def_index?: number;
        required_hero_id?: number;
        starting_value?: number;
        ending_value?: number;
        owner_item_def_index?: number;
        owner_item_id?: string;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchMetadata_Team_StrangeGemProgress>]: never; }>(base?: I): CDOTAMatchMetadata_Team_StrangeGemProgress;
    fromPartial<I_1 extends {
        kill_eater_type?: number;
        gem_item_def_index?: number;
        required_hero_id?: number;
        starting_value?: number;
        ending_value?: number;
        owner_item_def_index?: number;
        owner_item_id?: string;
    } & {
        kill_eater_type?: number;
        gem_item_def_index?: number;
        required_hero_id?: number;
        starting_value?: number;
        ending_value?: number;
        owner_item_def_index?: number;
        owner_item_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchMetadata_Team_StrangeGemProgress>]: never; }>(object: I_1): CDOTAMatchMetadata_Team_StrangeGemProgress;
};
export declare const CDOTAMatchMetadata_Team_VictoryPrediction: {
    fromJSON(object: any): CDOTAMatchMetadata_Team_VictoryPrediction;
    toJSON(message: CDOTAMatchMetadata_Team_VictoryPrediction): unknown;
    create<I extends {
        item_id?: string;
        item_def_index?: number;
        starting_value?: number;
        is_victory?: boolean;
    } & {
        item_id?: string;
        item_def_index?: number;
        starting_value?: number;
        is_victory?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchMetadata_Team_VictoryPrediction>]: never; }>(base?: I): CDOTAMatchMetadata_Team_VictoryPrediction;
    fromPartial<I_1 extends {
        item_id?: string;
        item_def_index?: number;
        starting_value?: number;
        is_victory?: boolean;
    } & {
        item_id?: string;
        item_def_index?: number;
        starting_value?: number;
        is_victory?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchMetadata_Team_VictoryPrediction>]: never; }>(object: I_1): CDOTAMatchMetadata_Team_VictoryPrediction;
};
export declare const CDOTAMatchMetadata_Team_SubChallenge: {
    fromJSON(object: any): CDOTAMatchMetadata_Team_SubChallenge;
    toJSON(message: CDOTAMatchMetadata_Team_SubChallenge): unknown;
    create<I extends {
        slot_id?: number;
        start_value?: number;
        end_value?: number;
        completed?: boolean;
    } & {
        slot_id?: number;
        start_value?: number;
        end_value?: number;
        completed?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchMetadata_Team_SubChallenge>]: never; }>(base?: I): CDOTAMatchMetadata_Team_SubChallenge;
    fromPartial<I_1 extends {
        slot_id?: number;
        start_value?: number;
        end_value?: number;
        completed?: boolean;
    } & {
        slot_id?: number;
        start_value?: number;
        end_value?: number;
        completed?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchMetadata_Team_SubChallenge>]: never; }>(object: I_1): CDOTAMatchMetadata_Team_SubChallenge;
};
export declare const CDOTAMatchMetadata_Team_CavernChallengeResult: {
    fromJSON(object: any): CDOTAMatchMetadata_Team_CavernChallengeResult;
    toJSON(message: CDOTAMatchMetadata_Team_CavernChallengeResult): unknown;
    create<I extends {
        completed_path_id?: number;
        claimed_room_id?: number;
    } & {
        completed_path_id?: number;
        claimed_room_id?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchMetadata_Team_CavernChallengeResult>]: never; }>(base?: I): CDOTAMatchMetadata_Team_CavernChallengeResult;
    fromPartial<I_1 extends {
        completed_path_id?: number;
        claimed_room_id?: number;
    } & {
        completed_path_id?: number;
        claimed_room_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchMetadata_Team_CavernChallengeResult>]: never; }>(object: I_1): CDOTAMatchMetadata_Team_CavernChallengeResult;
};
export declare const CDOTAMatchMetadata_Team_ActionGrant: {
    fromJSON(object: any): CDOTAMatchMetadata_Team_ActionGrant;
    toJSON(message: CDOTAMatchMetadata_Team_ActionGrant): unknown;
    create<I extends {
        action_id?: number;
        quantity?: number;
        audit?: number;
        requires_win?: boolean;
        audit_data?: string;
    } & {
        action_id?: number;
        quantity?: number;
        audit?: number;
        requires_win?: boolean;
        audit_data?: string;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchMetadata_Team_ActionGrant>]: never; }>(base?: I): CDOTAMatchMetadata_Team_ActionGrant;
    fromPartial<I_1 extends {
        action_id?: number;
        quantity?: number;
        audit?: number;
        requires_win?: boolean;
        audit_data?: string;
    } & {
        action_id?: number;
        quantity?: number;
        audit?: number;
        requires_win?: boolean;
        audit_data?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchMetadata_Team_ActionGrant>]: never; }>(object: I_1): CDOTAMatchMetadata_Team_ActionGrant;
};
export declare const CDOTAMatchMetadata_Team_CandyGrant: {
    fromJSON(object: any): CDOTAMatchMetadata_Team_CandyGrant;
    toJSON(message: CDOTAMatchMetadata_Team_CandyGrant): unknown;
    create<I extends {
        points?: number;
        reason?: number;
    } & {
        points?: number;
        reason?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchMetadata_Team_CandyGrant>]: never; }>(base?: I): CDOTAMatchMetadata_Team_CandyGrant;
    fromPartial<I_1 extends {
        points?: number;
        reason?: number;
    } & {
        points?: number;
        reason?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchMetadata_Team_CandyGrant>]: never; }>(object: I_1): CDOTAMatchMetadata_Team_CandyGrant;
};
export declare const CDOTAMatchMetadata_Team_PeriodicResourceData: {
    fromJSON(object: any): CDOTAMatchMetadata_Team_PeriodicResourceData;
    toJSON(message: CDOTAMatchMetadata_Team_PeriodicResourceData): unknown;
    create<I extends {
        periodic_resource_id?: number;
        remaining?: number;
        max?: number;
    } & {
        periodic_resource_id?: number;
        remaining?: number;
        max?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchMetadata_Team_PeriodicResourceData>]: never; }>(base?: I): CDOTAMatchMetadata_Team_PeriodicResourceData;
    fromPartial<I_1 extends {
        periodic_resource_id?: number;
        remaining?: number;
        max?: number;
    } & {
        periodic_resource_id?: number;
        remaining?: number;
        max?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchMetadata_Team_PeriodicResourceData>]: never; }>(object: I_1): CDOTAMatchMetadata_Team_PeriodicResourceData;
};
export declare const CDOTAMatchMetadata_Team_EventData: {
    fromJSON(object: any): CDOTAMatchMetadata_Team_EventData;
    toJSON(message: CDOTAMatchMetadata_Team_EventData): unknown;
    create<I extends {
        event_id?: number;
        event_points?: number;
        challenge_instance_id?: number;
        challenge_quest_id?: number;
        challenge_quest_challenge_id?: number;
        challenge_completed?: boolean;
        challenge_rank_completed?: number;
        challenge_rank_previously_completed?: number;
        event_owned?: boolean;
        sub_challenges_with_progress?: {
            slot_id?: number;
            start_value?: number;
            end_value?: number;
            completed?: boolean;
        }[];
        wager_winnings?: number;
        cavern_challenge_active?: boolean;
        cavern_challenge_winnings?: number;
        amount_wagered?: number;
        periodic_point_adjustments?: number;
        cavern_challenge_map_results?: {
            completed_path_id?: number;
            claimed_room_id?: number;
        }[];
        cavern_challenge_plus_shard_winnings?: number;
        actions_granted?: {
            action_id?: number;
            quantity?: number;
            audit?: number;
            requires_win?: boolean;
            audit_data?: string;
        }[];
        cavern_crawl_map_variant?: number;
        team_wager_bonus_pct?: number;
        wager_streak_pct?: number;
        candy_points_granted?: {
            points?: number;
            reason?: number;
        }[];
        active_season_id?: number;
        cavern_crawl_half_credit?: boolean;
        periodic_resources?: {
            periodic_resource_id?: number;
            remaining?: number;
            max?: number;
        }[];
    } & {
        event_id?: number;
        event_points?: number;
        challenge_instance_id?: number;
        challenge_quest_id?: number;
        challenge_quest_challenge_id?: number;
        challenge_completed?: boolean;
        challenge_rank_completed?: number;
        challenge_rank_previously_completed?: number;
        event_owned?: boolean;
        sub_challenges_with_progress?: {
            slot_id?: number;
            start_value?: number;
            end_value?: number;
            completed?: boolean;
        }[] & ({
            slot_id?: number;
            start_value?: number;
            end_value?: number;
            completed?: boolean;
        } & {
            slot_id?: number;
            start_value?: number;
            end_value?: number;
            completed?: boolean;
        } & { [K in Exclude<keyof I["sub_challenges_with_progress"][number], keyof CDOTAMatchMetadata_Team_SubChallenge>]: never; })[] & { [K_1 in Exclude<keyof I["sub_challenges_with_progress"], keyof {
            slot_id?: number;
            start_value?: number;
            end_value?: number;
            completed?: boolean;
        }[]>]: never; };
        wager_winnings?: number;
        cavern_challenge_active?: boolean;
        cavern_challenge_winnings?: number;
        amount_wagered?: number;
        periodic_point_adjustments?: number;
        cavern_challenge_map_results?: {
            completed_path_id?: number;
            claimed_room_id?: number;
        }[] & ({
            completed_path_id?: number;
            claimed_room_id?: number;
        } & {
            completed_path_id?: number;
            claimed_room_id?: number;
        } & { [K_2 in Exclude<keyof I["cavern_challenge_map_results"][number], keyof CDOTAMatchMetadata_Team_CavernChallengeResult>]: never; })[] & { [K_3 in Exclude<keyof I["cavern_challenge_map_results"], keyof {
            completed_path_id?: number;
            claimed_room_id?: number;
        }[]>]: never; };
        cavern_challenge_plus_shard_winnings?: number;
        actions_granted?: {
            action_id?: number;
            quantity?: number;
            audit?: number;
            requires_win?: boolean;
            audit_data?: string;
        }[] & ({
            action_id?: number;
            quantity?: number;
            audit?: number;
            requires_win?: boolean;
            audit_data?: string;
        } & {
            action_id?: number;
            quantity?: number;
            audit?: number;
            requires_win?: boolean;
            audit_data?: string;
        } & { [K_4 in Exclude<keyof I["actions_granted"][number], keyof CDOTAMatchMetadata_Team_ActionGrant>]: never; })[] & { [K_5 in Exclude<keyof I["actions_granted"], keyof {
            action_id?: number;
            quantity?: number;
            audit?: number;
            requires_win?: boolean;
            audit_data?: string;
        }[]>]: never; };
        cavern_crawl_map_variant?: number;
        team_wager_bonus_pct?: number;
        wager_streak_pct?: number;
        candy_points_granted?: {
            points?: number;
            reason?: number;
        }[] & ({
            points?: number;
            reason?: number;
        } & {
            points?: number;
            reason?: number;
        } & { [K_6 in Exclude<keyof I["candy_points_granted"][number], keyof CDOTAMatchMetadata_Team_CandyGrant>]: never; })[] & { [K_7 in Exclude<keyof I["candy_points_granted"], keyof {
            points?: number;
            reason?: number;
        }[]>]: never; };
        active_season_id?: number;
        cavern_crawl_half_credit?: boolean;
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
        } & { [K_8 in Exclude<keyof I["periodic_resources"][number], keyof CDOTAMatchMetadata_Team_PeriodicResourceData>]: never; })[] & { [K_9 in Exclude<keyof I["periodic_resources"], keyof {
            periodic_resource_id?: number;
            remaining?: number;
            max?: number;
        }[]>]: never; };
    } & { [K_10 in Exclude<keyof I, keyof CDOTAMatchMetadata_Team_EventData>]: never; }>(base?: I): CDOTAMatchMetadata_Team_EventData;
    fromPartial<I_1 extends {
        event_id?: number;
        event_points?: number;
        challenge_instance_id?: number;
        challenge_quest_id?: number;
        challenge_quest_challenge_id?: number;
        challenge_completed?: boolean;
        challenge_rank_completed?: number;
        challenge_rank_previously_completed?: number;
        event_owned?: boolean;
        sub_challenges_with_progress?: {
            slot_id?: number;
            start_value?: number;
            end_value?: number;
            completed?: boolean;
        }[];
        wager_winnings?: number;
        cavern_challenge_active?: boolean;
        cavern_challenge_winnings?: number;
        amount_wagered?: number;
        periodic_point_adjustments?: number;
        cavern_challenge_map_results?: {
            completed_path_id?: number;
            claimed_room_id?: number;
        }[];
        cavern_challenge_plus_shard_winnings?: number;
        actions_granted?: {
            action_id?: number;
            quantity?: number;
            audit?: number;
            requires_win?: boolean;
            audit_data?: string;
        }[];
        cavern_crawl_map_variant?: number;
        team_wager_bonus_pct?: number;
        wager_streak_pct?: number;
        candy_points_granted?: {
            points?: number;
            reason?: number;
        }[];
        active_season_id?: number;
        cavern_crawl_half_credit?: boolean;
        periodic_resources?: {
            periodic_resource_id?: number;
            remaining?: number;
            max?: number;
        }[];
    } & {
        event_id?: number;
        event_points?: number;
        challenge_instance_id?: number;
        challenge_quest_id?: number;
        challenge_quest_challenge_id?: number;
        challenge_completed?: boolean;
        challenge_rank_completed?: number;
        challenge_rank_previously_completed?: number;
        event_owned?: boolean;
        sub_challenges_with_progress?: {
            slot_id?: number;
            start_value?: number;
            end_value?: number;
            completed?: boolean;
        }[] & ({
            slot_id?: number;
            start_value?: number;
            end_value?: number;
            completed?: boolean;
        } & {
            slot_id?: number;
            start_value?: number;
            end_value?: number;
            completed?: boolean;
        } & { [K_11 in Exclude<keyof I_1["sub_challenges_with_progress"][number], keyof CDOTAMatchMetadata_Team_SubChallenge>]: never; })[] & { [K_12 in Exclude<keyof I_1["sub_challenges_with_progress"], keyof {
            slot_id?: number;
            start_value?: number;
            end_value?: number;
            completed?: boolean;
        }[]>]: never; };
        wager_winnings?: number;
        cavern_challenge_active?: boolean;
        cavern_challenge_winnings?: number;
        amount_wagered?: number;
        periodic_point_adjustments?: number;
        cavern_challenge_map_results?: {
            completed_path_id?: number;
            claimed_room_id?: number;
        }[] & ({
            completed_path_id?: number;
            claimed_room_id?: number;
        } & {
            completed_path_id?: number;
            claimed_room_id?: number;
        } & { [K_13 in Exclude<keyof I_1["cavern_challenge_map_results"][number], keyof CDOTAMatchMetadata_Team_CavernChallengeResult>]: never; })[] & { [K_14 in Exclude<keyof I_1["cavern_challenge_map_results"], keyof {
            completed_path_id?: number;
            claimed_room_id?: number;
        }[]>]: never; };
        cavern_challenge_plus_shard_winnings?: number;
        actions_granted?: {
            action_id?: number;
            quantity?: number;
            audit?: number;
            requires_win?: boolean;
            audit_data?: string;
        }[] & ({
            action_id?: number;
            quantity?: number;
            audit?: number;
            requires_win?: boolean;
            audit_data?: string;
        } & {
            action_id?: number;
            quantity?: number;
            audit?: number;
            requires_win?: boolean;
            audit_data?: string;
        } & { [K_15 in Exclude<keyof I_1["actions_granted"][number], keyof CDOTAMatchMetadata_Team_ActionGrant>]: never; })[] & { [K_16 in Exclude<keyof I_1["actions_granted"], keyof {
            action_id?: number;
            quantity?: number;
            audit?: number;
            requires_win?: boolean;
            audit_data?: string;
        }[]>]: never; };
        cavern_crawl_map_variant?: number;
        team_wager_bonus_pct?: number;
        wager_streak_pct?: number;
        candy_points_granted?: {
            points?: number;
            reason?: number;
        }[] & ({
            points?: number;
            reason?: number;
        } & {
            points?: number;
            reason?: number;
        } & { [K_17 in Exclude<keyof I_1["candy_points_granted"][number], keyof CDOTAMatchMetadata_Team_CandyGrant>]: never; })[] & { [K_18 in Exclude<keyof I_1["candy_points_granted"], keyof {
            points?: number;
            reason?: number;
        }[]>]: never; };
        active_season_id?: number;
        cavern_crawl_half_credit?: boolean;
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
        } & { [K_19 in Exclude<keyof I_1["periodic_resources"][number], keyof CDOTAMatchMetadata_Team_PeriodicResourceData>]: never; })[] & { [K_20 in Exclude<keyof I_1["periodic_resources"], keyof {
            periodic_resource_id?: number;
            remaining?: number;
            max?: number;
        }[]>]: never; };
    } & { [K_21 in Exclude<keyof I_1, keyof CDOTAMatchMetadata_Team_EventData>]: never; }>(object: I_1): CDOTAMatchMetadata_Team_EventData;
};
export declare const CDOTAMatchMetadata_Team_FeaturedGamemodeProgress: {
    fromJSON(object: any): CDOTAMatchMetadata_Team_FeaturedGamemodeProgress;
    toJSON(message: CDOTAMatchMetadata_Team_FeaturedGamemodeProgress): unknown;
    create<I extends {
        start_value?: number;
        end_value?: number;
        max_value?: number;
    } & {
        start_value?: number;
        end_value?: number;
        max_value?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchMetadata_Team_FeaturedGamemodeProgress>]: never; }>(base?: I): CDOTAMatchMetadata_Team_FeaturedGamemodeProgress;
    fromPartial<I_1 extends {
        start_value?: number;
        end_value?: number;
        max_value?: number;
    } & {
        start_value?: number;
        end_value?: number;
        max_value?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchMetadata_Team_FeaturedGamemodeProgress>]: never; }>(object: I_1): CDOTAMatchMetadata_Team_FeaturedGamemodeProgress;
};
export declare const CDOTAMatchMetadata_Team_Player: {
    fromJSON(object: any): CDOTAMatchMetadata_Team_Player;
    toJSON(message: CDOTAMatchMetadata_Team_Player): unknown;
    create<I extends {
        ability_upgrades?: number[];
        player_slot?: number;
        kills?: {
            victim_slot?: number;
            count?: number;
        }[];
        items?: {
            item_id?: number;
            purchase_time?: number;
        }[];
        avg_kills_x16?: number;
        avg_deaths_x16?: number;
        avg_assists_x16?: number;
        avg_gpm_x16?: number;
        avg_xpm_x16?: number;
        best_kills_x16?: number;
        best_assists_x16?: number;
        best_gpm_x16?: number;
        best_xpm_x16?: number;
        win_streak?: number;
        best_win_streak?: number;
        fight_score?: number;
        farm_score?: number;
        support_score?: number;
        push_score?: number;
        level_up_times?: number[];
        graph_net_worth?: number[];
        inventory_snapshot?: {
            item_id?: number[];
            game_time?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            level?: number;
            backpack_item_id?: number[];
            neutral_item_id?: number;
        }[];
        avg_stats_calibrated?: boolean;
        auto_style_criteria?: {
            name_token?: number;
            value?: number;
        }[];
        event_data?: {
            event_id?: number;
            event_points?: number;
            challenge_instance_id?: number;
            challenge_quest_id?: number;
            challenge_quest_challenge_id?: number;
            challenge_completed?: boolean;
            challenge_rank_completed?: number;
            challenge_rank_previously_completed?: number;
            event_owned?: boolean;
            sub_challenges_with_progress?: {
                slot_id?: number;
                start_value?: number;
                end_value?: number;
                completed?: boolean;
            }[];
            wager_winnings?: number;
            cavern_challenge_active?: boolean;
            cavern_challenge_winnings?: number;
            amount_wagered?: number;
            periodic_point_adjustments?: number;
            cavern_challenge_map_results?: {
                completed_path_id?: number;
                claimed_room_id?: number;
            }[];
            cavern_challenge_plus_shard_winnings?: number;
            actions_granted?: {
                action_id?: number;
                quantity?: number;
                audit?: number;
                requires_win?: boolean;
                audit_data?: string;
            }[];
            cavern_crawl_map_variant?: number;
            team_wager_bonus_pct?: number;
            wager_streak_pct?: number;
            candy_points_granted?: {
                points?: number;
                reason?: number;
            }[];
            active_season_id?: number;
            cavern_crawl_half_credit?: boolean;
            periodic_resources?: {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[];
        }[];
        strange_gem_progress?: {
            kill_eater_type?: number;
            gem_item_def_index?: number;
            required_hero_id?: number;
            starting_value?: number;
            ending_value?: number;
            owner_item_def_index?: number;
            owner_item_id?: string;
        }[];
        hero_xp?: number;
        camps_stacked?: number;
        victory_prediction?: {
            item_id?: string;
            item_def_index?: number;
            starting_value?: number;
            is_victory?: boolean;
        }[];
        lane_selection_flags?: number;
        rampages?: number;
        triple_kills?: number;
        aegis_snatched?: number;
        rapiers_purchased?: number;
        couriers_killed?: number;
        net_worth_rank?: number;
        support_gold_spent?: number;
        observer_wards_placed?: number;
        sentry_wards_placed?: number;
        wards_dewarded?: number;
        stun_duration?: number;
        rank_mmr_boost_type?: EDOTAMMRBoostType;
        contract_progress?: {
            guild_id?: number;
            event_id?: number;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            contract_stars?: number;
            contract_slot?: number;
            completed?: boolean;
        }[];
        guild_ids?: number[];
        graph_hero_damage?: number[];
        team_number?: DOTA_GC_TEAM;
        team_slot?: number;
        featured_gamemode_progress?: {
            start_value?: number;
            end_value?: number;
            max_value?: number;
        };
        featured_hero_sticker_index?: number;
        featured_hero_sticker_quality?: number;
        equipped_econ_items?: {
            def_index?: number;
            quality?: number;
            attribute?: {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            }[];
            style?: number;
            equipped_state?: {
                new_class?: number;
                new_slot?: number;
            }[];
        }[];
    } & {
        ability_upgrades?: number[] & number[] & { [K in Exclude<keyof I["ability_upgrades"], keyof number[]>]: never; };
        player_slot?: number;
        kills?: {
            victim_slot?: number;
            count?: number;
        }[] & ({
            victim_slot?: number;
            count?: number;
        } & {
            victim_slot?: number;
            count?: number;
        } & { [K_1 in Exclude<keyof I["kills"][number], keyof CDOTAMatchMetadata_Team_PlayerKill>]: never; })[] & { [K_2 in Exclude<keyof I["kills"], keyof {
            victim_slot?: number;
            count?: number;
        }[]>]: never; };
        items?: {
            item_id?: number;
            purchase_time?: number;
        }[] & ({
            item_id?: number;
            purchase_time?: number;
        } & {
            item_id?: number;
            purchase_time?: number;
        } & { [K_3 in Exclude<keyof I["items"][number], keyof CDOTAMatchMetadata_Team_ItemPurchase>]: never; })[] & { [K_4 in Exclude<keyof I["items"], keyof {
            item_id?: number;
            purchase_time?: number;
        }[]>]: never; };
        avg_kills_x16?: number;
        avg_deaths_x16?: number;
        avg_assists_x16?: number;
        avg_gpm_x16?: number;
        avg_xpm_x16?: number;
        best_kills_x16?: number;
        best_assists_x16?: number;
        best_gpm_x16?: number;
        best_xpm_x16?: number;
        win_streak?: number;
        best_win_streak?: number;
        fight_score?: number;
        farm_score?: number;
        support_score?: number;
        push_score?: number;
        level_up_times?: number[] & number[] & { [K_5 in Exclude<keyof I["level_up_times"], keyof number[]>]: never; };
        graph_net_worth?: number[] & number[] & { [K_6 in Exclude<keyof I["graph_net_worth"], keyof number[]>]: never; };
        inventory_snapshot?: {
            item_id?: number[];
            game_time?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            level?: number;
            backpack_item_id?: number[];
            neutral_item_id?: number;
        }[] & ({
            item_id?: number[];
            game_time?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            level?: number;
            backpack_item_id?: number[];
            neutral_item_id?: number;
        } & {
            item_id?: number[] & number[] & { [K_7 in Exclude<keyof I["inventory_snapshot"][number]["item_id"], keyof number[]>]: never; };
            game_time?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            level?: number;
            backpack_item_id?: number[] & number[] & { [K_8 in Exclude<keyof I["inventory_snapshot"][number]["backpack_item_id"], keyof number[]>]: never; };
            neutral_item_id?: number;
        } & { [K_9 in Exclude<keyof I["inventory_snapshot"][number], keyof CDOTAMatchMetadata_Team_InventorySnapshot>]: never; })[] & { [K_10 in Exclude<keyof I["inventory_snapshot"], keyof {
            item_id?: number[];
            game_time?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            level?: number;
            backpack_item_id?: number[];
            neutral_item_id?: number;
        }[]>]: never; };
        avg_stats_calibrated?: boolean;
        auto_style_criteria?: {
            name_token?: number;
            value?: number;
        }[] & ({
            name_token?: number;
            value?: number;
        } & {
            name_token?: number;
            value?: number;
        } & { [K_11 in Exclude<keyof I["auto_style_criteria"][number], keyof CDOTAMatchMetadata_Team_AutoStyleCriteria>]: never; })[] & { [K_12 in Exclude<keyof I["auto_style_criteria"], keyof {
            name_token?: number;
            value?: number;
        }[]>]: never; };
        event_data?: {
            event_id?: number;
            event_points?: number;
            challenge_instance_id?: number;
            challenge_quest_id?: number;
            challenge_quest_challenge_id?: number;
            challenge_completed?: boolean;
            challenge_rank_completed?: number;
            challenge_rank_previously_completed?: number;
            event_owned?: boolean;
            sub_challenges_with_progress?: {
                slot_id?: number;
                start_value?: number;
                end_value?: number;
                completed?: boolean;
            }[];
            wager_winnings?: number;
            cavern_challenge_active?: boolean;
            cavern_challenge_winnings?: number;
            amount_wagered?: number;
            periodic_point_adjustments?: number;
            cavern_challenge_map_results?: {
                completed_path_id?: number;
                claimed_room_id?: number;
            }[];
            cavern_challenge_plus_shard_winnings?: number;
            actions_granted?: {
                action_id?: number;
                quantity?: number;
                audit?: number;
                requires_win?: boolean;
                audit_data?: string;
            }[];
            cavern_crawl_map_variant?: number;
            team_wager_bonus_pct?: number;
            wager_streak_pct?: number;
            candy_points_granted?: {
                points?: number;
                reason?: number;
            }[];
            active_season_id?: number;
            cavern_crawl_half_credit?: boolean;
            periodic_resources?: {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[];
        }[] & ({
            event_id?: number;
            event_points?: number;
            challenge_instance_id?: number;
            challenge_quest_id?: number;
            challenge_quest_challenge_id?: number;
            challenge_completed?: boolean;
            challenge_rank_completed?: number;
            challenge_rank_previously_completed?: number;
            event_owned?: boolean;
            sub_challenges_with_progress?: {
                slot_id?: number;
                start_value?: number;
                end_value?: number;
                completed?: boolean;
            }[];
            wager_winnings?: number;
            cavern_challenge_active?: boolean;
            cavern_challenge_winnings?: number;
            amount_wagered?: number;
            periodic_point_adjustments?: number;
            cavern_challenge_map_results?: {
                completed_path_id?: number;
                claimed_room_id?: number;
            }[];
            cavern_challenge_plus_shard_winnings?: number;
            actions_granted?: {
                action_id?: number;
                quantity?: number;
                audit?: number;
                requires_win?: boolean;
                audit_data?: string;
            }[];
            cavern_crawl_map_variant?: number;
            team_wager_bonus_pct?: number;
            wager_streak_pct?: number;
            candy_points_granted?: {
                points?: number;
                reason?: number;
            }[];
            active_season_id?: number;
            cavern_crawl_half_credit?: boolean;
            periodic_resources?: {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[];
        } & {
            event_id?: number;
            event_points?: number;
            challenge_instance_id?: number;
            challenge_quest_id?: number;
            challenge_quest_challenge_id?: number;
            challenge_completed?: boolean;
            challenge_rank_completed?: number;
            challenge_rank_previously_completed?: number;
            event_owned?: boolean;
            sub_challenges_with_progress?: {
                slot_id?: number;
                start_value?: number;
                end_value?: number;
                completed?: boolean;
            }[] & ({
                slot_id?: number;
                start_value?: number;
                end_value?: number;
                completed?: boolean;
            } & {
                slot_id?: number;
                start_value?: number;
                end_value?: number;
                completed?: boolean;
            } & { [K_13 in Exclude<keyof I["event_data"][number]["sub_challenges_with_progress"][number], keyof CDOTAMatchMetadata_Team_SubChallenge>]: never; })[] & { [K_14 in Exclude<keyof I["event_data"][number]["sub_challenges_with_progress"], keyof {
                slot_id?: number;
                start_value?: number;
                end_value?: number;
                completed?: boolean;
            }[]>]: never; };
            wager_winnings?: number;
            cavern_challenge_active?: boolean;
            cavern_challenge_winnings?: number;
            amount_wagered?: number;
            periodic_point_adjustments?: number;
            cavern_challenge_map_results?: {
                completed_path_id?: number;
                claimed_room_id?: number;
            }[] & ({
                completed_path_id?: number;
                claimed_room_id?: number;
            } & {
                completed_path_id?: number;
                claimed_room_id?: number;
            } & { [K_15 in Exclude<keyof I["event_data"][number]["cavern_challenge_map_results"][number], keyof CDOTAMatchMetadata_Team_CavernChallengeResult>]: never; })[] & { [K_16 in Exclude<keyof I["event_data"][number]["cavern_challenge_map_results"], keyof {
                completed_path_id?: number;
                claimed_room_id?: number;
            }[]>]: never; };
            cavern_challenge_plus_shard_winnings?: number;
            actions_granted?: {
                action_id?: number;
                quantity?: number;
                audit?: number;
                requires_win?: boolean;
                audit_data?: string;
            }[] & ({
                action_id?: number;
                quantity?: number;
                audit?: number;
                requires_win?: boolean;
                audit_data?: string;
            } & {
                action_id?: number;
                quantity?: number;
                audit?: number;
                requires_win?: boolean;
                audit_data?: string;
            } & { [K_17 in Exclude<keyof I["event_data"][number]["actions_granted"][number], keyof CDOTAMatchMetadata_Team_ActionGrant>]: never; })[] & { [K_18 in Exclude<keyof I["event_data"][number]["actions_granted"], keyof {
                action_id?: number;
                quantity?: number;
                audit?: number;
                requires_win?: boolean;
                audit_data?: string;
            }[]>]: never; };
            cavern_crawl_map_variant?: number;
            team_wager_bonus_pct?: number;
            wager_streak_pct?: number;
            candy_points_granted?: {
                points?: number;
                reason?: number;
            }[] & ({
                points?: number;
                reason?: number;
            } & {
                points?: number;
                reason?: number;
            } & { [K_19 in Exclude<keyof I["event_data"][number]["candy_points_granted"][number], keyof CDOTAMatchMetadata_Team_CandyGrant>]: never; })[] & { [K_20 in Exclude<keyof I["event_data"][number]["candy_points_granted"], keyof {
                points?: number;
                reason?: number;
            }[]>]: never; };
            active_season_id?: number;
            cavern_crawl_half_credit?: boolean;
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
            } & { [K_21 in Exclude<keyof I["event_data"][number]["periodic_resources"][number], keyof CDOTAMatchMetadata_Team_PeriodicResourceData>]: never; })[] & { [K_22 in Exclude<keyof I["event_data"][number]["periodic_resources"], keyof {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[]>]: never; };
        } & { [K_23 in Exclude<keyof I["event_data"][number], keyof CDOTAMatchMetadata_Team_EventData>]: never; })[] & { [K_24 in Exclude<keyof I["event_data"], keyof {
            event_id?: number;
            event_points?: number;
            challenge_instance_id?: number;
            challenge_quest_id?: number;
            challenge_quest_challenge_id?: number;
            challenge_completed?: boolean;
            challenge_rank_completed?: number;
            challenge_rank_previously_completed?: number;
            event_owned?: boolean;
            sub_challenges_with_progress?: {
                slot_id?: number;
                start_value?: number;
                end_value?: number;
                completed?: boolean;
            }[];
            wager_winnings?: number;
            cavern_challenge_active?: boolean;
            cavern_challenge_winnings?: number;
            amount_wagered?: number;
            periodic_point_adjustments?: number;
            cavern_challenge_map_results?: {
                completed_path_id?: number;
                claimed_room_id?: number;
            }[];
            cavern_challenge_plus_shard_winnings?: number;
            actions_granted?: {
                action_id?: number;
                quantity?: number;
                audit?: number;
                requires_win?: boolean;
                audit_data?: string;
            }[];
            cavern_crawl_map_variant?: number;
            team_wager_bonus_pct?: number;
            wager_streak_pct?: number;
            candy_points_granted?: {
                points?: number;
                reason?: number;
            }[];
            active_season_id?: number;
            cavern_crawl_half_credit?: boolean;
            periodic_resources?: {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[];
        }[]>]: never; };
        strange_gem_progress?: {
            kill_eater_type?: number;
            gem_item_def_index?: number;
            required_hero_id?: number;
            starting_value?: number;
            ending_value?: number;
            owner_item_def_index?: number;
            owner_item_id?: string;
        }[] & ({
            kill_eater_type?: number;
            gem_item_def_index?: number;
            required_hero_id?: number;
            starting_value?: number;
            ending_value?: number;
            owner_item_def_index?: number;
            owner_item_id?: string;
        } & {
            kill_eater_type?: number;
            gem_item_def_index?: number;
            required_hero_id?: number;
            starting_value?: number;
            ending_value?: number;
            owner_item_def_index?: number;
            owner_item_id?: string;
        } & { [K_25 in Exclude<keyof I["strange_gem_progress"][number], keyof CDOTAMatchMetadata_Team_StrangeGemProgress>]: never; })[] & { [K_26 in Exclude<keyof I["strange_gem_progress"], keyof {
            kill_eater_type?: number;
            gem_item_def_index?: number;
            required_hero_id?: number;
            starting_value?: number;
            ending_value?: number;
            owner_item_def_index?: number;
            owner_item_id?: string;
        }[]>]: never; };
        hero_xp?: number;
        camps_stacked?: number;
        victory_prediction?: {
            item_id?: string;
            item_def_index?: number;
            starting_value?: number;
            is_victory?: boolean;
        }[] & ({
            item_id?: string;
            item_def_index?: number;
            starting_value?: number;
            is_victory?: boolean;
        } & {
            item_id?: string;
            item_def_index?: number;
            starting_value?: number;
            is_victory?: boolean;
        } & { [K_27 in Exclude<keyof I["victory_prediction"][number], keyof CDOTAMatchMetadata_Team_VictoryPrediction>]: never; })[] & { [K_28 in Exclude<keyof I["victory_prediction"], keyof {
            item_id?: string;
            item_def_index?: number;
            starting_value?: number;
            is_victory?: boolean;
        }[]>]: never; };
        lane_selection_flags?: number;
        rampages?: number;
        triple_kills?: number;
        aegis_snatched?: number;
        rapiers_purchased?: number;
        couriers_killed?: number;
        net_worth_rank?: number;
        support_gold_spent?: number;
        observer_wards_placed?: number;
        sentry_wards_placed?: number;
        wards_dewarded?: number;
        stun_duration?: number;
        rank_mmr_boost_type?: EDOTAMMRBoostType;
        contract_progress?: {
            guild_id?: number;
            event_id?: number;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            contract_stars?: number;
            contract_slot?: number;
            completed?: boolean;
        }[] & ({
            guild_id?: number;
            event_id?: number;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            contract_stars?: number;
            contract_slot?: number;
            completed?: boolean;
        } & {
            guild_id?: number;
            event_id?: number;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            contract_stars?: number;
            contract_slot?: number;
            completed?: boolean;
        } & { [K_29 in Exclude<keyof I["contract_progress"][number], keyof CDOTAMatchMetadata_Team_Player_ContractProgress>]: never; })[] & { [K_30 in Exclude<keyof I["contract_progress"], keyof {
            guild_id?: number;
            event_id?: number;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            contract_stars?: number;
            contract_slot?: number;
            completed?: boolean;
        }[]>]: never; };
        guild_ids?: number[] & number[] & { [K_31 in Exclude<keyof I["guild_ids"], keyof number[]>]: never; };
        graph_hero_damage?: number[] & number[] & { [K_32 in Exclude<keyof I["graph_hero_damage"], keyof number[]>]: never; };
        team_number?: DOTA_GC_TEAM;
        team_slot?: number;
        featured_gamemode_progress?: {
            start_value?: number;
            end_value?: number;
            max_value?: number;
        } & {
            start_value?: number;
            end_value?: number;
            max_value?: number;
        } & { [K_33 in Exclude<keyof I["featured_gamemode_progress"], keyof CDOTAMatchMetadata_Team_FeaturedGamemodeProgress>]: never; };
        featured_hero_sticker_index?: number;
        featured_hero_sticker_quality?: number;
        equipped_econ_items?: {
            def_index?: number;
            quality?: number;
            attribute?: {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            }[];
            style?: number;
            equipped_state?: {
                new_class?: number;
                new_slot?: number;
            }[];
        }[] & ({
            def_index?: number;
            quality?: number;
            attribute?: {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            }[];
            style?: number;
            equipped_state?: {
                new_class?: number;
                new_slot?: number;
            }[];
        } & {
            def_index?: number;
            quality?: number;
            attribute?: {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            }[] & ({
                def_index?: number;
                value?: number;
                value_bytes?: string;
            } & {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            } & { [K_34 in Exclude<keyof I["equipped_econ_items"][number]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_35 in Exclude<keyof I["equipped_econ_items"][number]["attribute"], keyof {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            }[]>]: never; };
            style?: number;
            equipped_state?: {
                new_class?: number;
                new_slot?: number;
            }[] & ({
                new_class?: number;
                new_slot?: number;
            } & {
                new_class?: number;
                new_slot?: number;
            } & { [K_36 in Exclude<keyof I["equipped_econ_items"][number]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_37 in Exclude<keyof I["equipped_econ_items"][number]["equipped_state"], keyof {
                new_class?: number;
                new_slot?: number;
            }[]>]: never; };
        } & { [K_38 in Exclude<keyof I["equipped_econ_items"][number], keyof CDOTAMatchMetadata_EconItem>]: never; })[] & { [K_39 in Exclude<keyof I["equipped_econ_items"], keyof {
            def_index?: number;
            quality?: number;
            attribute?: {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            }[];
            style?: number;
            equipped_state?: {
                new_class?: number;
                new_slot?: number;
            }[];
        }[]>]: never; };
    } & { [K_40 in Exclude<keyof I, keyof CDOTAMatchMetadata_Team_Player>]: never; }>(base?: I): CDOTAMatchMetadata_Team_Player;
    fromPartial<I_1 extends {
        ability_upgrades?: number[];
        player_slot?: number;
        kills?: {
            victim_slot?: number;
            count?: number;
        }[];
        items?: {
            item_id?: number;
            purchase_time?: number;
        }[];
        avg_kills_x16?: number;
        avg_deaths_x16?: number;
        avg_assists_x16?: number;
        avg_gpm_x16?: number;
        avg_xpm_x16?: number;
        best_kills_x16?: number;
        best_assists_x16?: number;
        best_gpm_x16?: number;
        best_xpm_x16?: number;
        win_streak?: number;
        best_win_streak?: number;
        fight_score?: number;
        farm_score?: number;
        support_score?: number;
        push_score?: number;
        level_up_times?: number[];
        graph_net_worth?: number[];
        inventory_snapshot?: {
            item_id?: number[];
            game_time?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            level?: number;
            backpack_item_id?: number[];
            neutral_item_id?: number;
        }[];
        avg_stats_calibrated?: boolean;
        auto_style_criteria?: {
            name_token?: number;
            value?: number;
        }[];
        event_data?: {
            event_id?: number;
            event_points?: number;
            challenge_instance_id?: number;
            challenge_quest_id?: number;
            challenge_quest_challenge_id?: number;
            challenge_completed?: boolean;
            challenge_rank_completed?: number;
            challenge_rank_previously_completed?: number;
            event_owned?: boolean;
            sub_challenges_with_progress?: {
                slot_id?: number;
                start_value?: number;
                end_value?: number;
                completed?: boolean;
            }[];
            wager_winnings?: number;
            cavern_challenge_active?: boolean;
            cavern_challenge_winnings?: number;
            amount_wagered?: number;
            periodic_point_adjustments?: number;
            cavern_challenge_map_results?: {
                completed_path_id?: number;
                claimed_room_id?: number;
            }[];
            cavern_challenge_plus_shard_winnings?: number;
            actions_granted?: {
                action_id?: number;
                quantity?: number;
                audit?: number;
                requires_win?: boolean;
                audit_data?: string;
            }[];
            cavern_crawl_map_variant?: number;
            team_wager_bonus_pct?: number;
            wager_streak_pct?: number;
            candy_points_granted?: {
                points?: number;
                reason?: number;
            }[];
            active_season_id?: number;
            cavern_crawl_half_credit?: boolean;
            periodic_resources?: {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[];
        }[];
        strange_gem_progress?: {
            kill_eater_type?: number;
            gem_item_def_index?: number;
            required_hero_id?: number;
            starting_value?: number;
            ending_value?: number;
            owner_item_def_index?: number;
            owner_item_id?: string;
        }[];
        hero_xp?: number;
        camps_stacked?: number;
        victory_prediction?: {
            item_id?: string;
            item_def_index?: number;
            starting_value?: number;
            is_victory?: boolean;
        }[];
        lane_selection_flags?: number;
        rampages?: number;
        triple_kills?: number;
        aegis_snatched?: number;
        rapiers_purchased?: number;
        couriers_killed?: number;
        net_worth_rank?: number;
        support_gold_spent?: number;
        observer_wards_placed?: number;
        sentry_wards_placed?: number;
        wards_dewarded?: number;
        stun_duration?: number;
        rank_mmr_boost_type?: EDOTAMMRBoostType;
        contract_progress?: {
            guild_id?: number;
            event_id?: number;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            contract_stars?: number;
            contract_slot?: number;
            completed?: boolean;
        }[];
        guild_ids?: number[];
        graph_hero_damage?: number[];
        team_number?: DOTA_GC_TEAM;
        team_slot?: number;
        featured_gamemode_progress?: {
            start_value?: number;
            end_value?: number;
            max_value?: number;
        };
        featured_hero_sticker_index?: number;
        featured_hero_sticker_quality?: number;
        equipped_econ_items?: {
            def_index?: number;
            quality?: number;
            attribute?: {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            }[];
            style?: number;
            equipped_state?: {
                new_class?: number;
                new_slot?: number;
            }[];
        }[];
    } & {
        ability_upgrades?: number[] & number[] & { [K_41 in Exclude<keyof I_1["ability_upgrades"], keyof number[]>]: never; };
        player_slot?: number;
        kills?: {
            victim_slot?: number;
            count?: number;
        }[] & ({
            victim_slot?: number;
            count?: number;
        } & {
            victim_slot?: number;
            count?: number;
        } & { [K_42 in Exclude<keyof I_1["kills"][number], keyof CDOTAMatchMetadata_Team_PlayerKill>]: never; })[] & { [K_43 in Exclude<keyof I_1["kills"], keyof {
            victim_slot?: number;
            count?: number;
        }[]>]: never; };
        items?: {
            item_id?: number;
            purchase_time?: number;
        }[] & ({
            item_id?: number;
            purchase_time?: number;
        } & {
            item_id?: number;
            purchase_time?: number;
        } & { [K_44 in Exclude<keyof I_1["items"][number], keyof CDOTAMatchMetadata_Team_ItemPurchase>]: never; })[] & { [K_45 in Exclude<keyof I_1["items"], keyof {
            item_id?: number;
            purchase_time?: number;
        }[]>]: never; };
        avg_kills_x16?: number;
        avg_deaths_x16?: number;
        avg_assists_x16?: number;
        avg_gpm_x16?: number;
        avg_xpm_x16?: number;
        best_kills_x16?: number;
        best_assists_x16?: number;
        best_gpm_x16?: number;
        best_xpm_x16?: number;
        win_streak?: number;
        best_win_streak?: number;
        fight_score?: number;
        farm_score?: number;
        support_score?: number;
        push_score?: number;
        level_up_times?: number[] & number[] & { [K_46 in Exclude<keyof I_1["level_up_times"], keyof number[]>]: never; };
        graph_net_worth?: number[] & number[] & { [K_47 in Exclude<keyof I_1["graph_net_worth"], keyof number[]>]: never; };
        inventory_snapshot?: {
            item_id?: number[];
            game_time?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            level?: number;
            backpack_item_id?: number[];
            neutral_item_id?: number;
        }[] & ({
            item_id?: number[];
            game_time?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            level?: number;
            backpack_item_id?: number[];
            neutral_item_id?: number;
        } & {
            item_id?: number[] & number[] & { [K_48 in Exclude<keyof I_1["inventory_snapshot"][number]["item_id"], keyof number[]>]: never; };
            game_time?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            level?: number;
            backpack_item_id?: number[] & number[] & { [K_49 in Exclude<keyof I_1["inventory_snapshot"][number]["backpack_item_id"], keyof number[]>]: never; };
            neutral_item_id?: number;
        } & { [K_50 in Exclude<keyof I_1["inventory_snapshot"][number], keyof CDOTAMatchMetadata_Team_InventorySnapshot>]: never; })[] & { [K_51 in Exclude<keyof I_1["inventory_snapshot"], keyof {
            item_id?: number[];
            game_time?: number;
            kills?: number;
            deaths?: number;
            assists?: number;
            level?: number;
            backpack_item_id?: number[];
            neutral_item_id?: number;
        }[]>]: never; };
        avg_stats_calibrated?: boolean;
        auto_style_criteria?: {
            name_token?: number;
            value?: number;
        }[] & ({
            name_token?: number;
            value?: number;
        } & {
            name_token?: number;
            value?: number;
        } & { [K_52 in Exclude<keyof I_1["auto_style_criteria"][number], keyof CDOTAMatchMetadata_Team_AutoStyleCriteria>]: never; })[] & { [K_53 in Exclude<keyof I_1["auto_style_criteria"], keyof {
            name_token?: number;
            value?: number;
        }[]>]: never; };
        event_data?: {
            event_id?: number;
            event_points?: number;
            challenge_instance_id?: number;
            challenge_quest_id?: number;
            challenge_quest_challenge_id?: number;
            challenge_completed?: boolean;
            challenge_rank_completed?: number;
            challenge_rank_previously_completed?: number;
            event_owned?: boolean;
            sub_challenges_with_progress?: {
                slot_id?: number;
                start_value?: number;
                end_value?: number;
                completed?: boolean;
            }[];
            wager_winnings?: number;
            cavern_challenge_active?: boolean;
            cavern_challenge_winnings?: number;
            amount_wagered?: number;
            periodic_point_adjustments?: number;
            cavern_challenge_map_results?: {
                completed_path_id?: number;
                claimed_room_id?: number;
            }[];
            cavern_challenge_plus_shard_winnings?: number;
            actions_granted?: {
                action_id?: number;
                quantity?: number;
                audit?: number;
                requires_win?: boolean;
                audit_data?: string;
            }[];
            cavern_crawl_map_variant?: number;
            team_wager_bonus_pct?: number;
            wager_streak_pct?: number;
            candy_points_granted?: {
                points?: number;
                reason?: number;
            }[];
            active_season_id?: number;
            cavern_crawl_half_credit?: boolean;
            periodic_resources?: {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[];
        }[] & ({
            event_id?: number;
            event_points?: number;
            challenge_instance_id?: number;
            challenge_quest_id?: number;
            challenge_quest_challenge_id?: number;
            challenge_completed?: boolean;
            challenge_rank_completed?: number;
            challenge_rank_previously_completed?: number;
            event_owned?: boolean;
            sub_challenges_with_progress?: {
                slot_id?: number;
                start_value?: number;
                end_value?: number;
                completed?: boolean;
            }[];
            wager_winnings?: number;
            cavern_challenge_active?: boolean;
            cavern_challenge_winnings?: number;
            amount_wagered?: number;
            periodic_point_adjustments?: number;
            cavern_challenge_map_results?: {
                completed_path_id?: number;
                claimed_room_id?: number;
            }[];
            cavern_challenge_plus_shard_winnings?: number;
            actions_granted?: {
                action_id?: number;
                quantity?: number;
                audit?: number;
                requires_win?: boolean;
                audit_data?: string;
            }[];
            cavern_crawl_map_variant?: number;
            team_wager_bonus_pct?: number;
            wager_streak_pct?: number;
            candy_points_granted?: {
                points?: number;
                reason?: number;
            }[];
            active_season_id?: number;
            cavern_crawl_half_credit?: boolean;
            periodic_resources?: {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[];
        } & {
            event_id?: number;
            event_points?: number;
            challenge_instance_id?: number;
            challenge_quest_id?: number;
            challenge_quest_challenge_id?: number;
            challenge_completed?: boolean;
            challenge_rank_completed?: number;
            challenge_rank_previously_completed?: number;
            event_owned?: boolean;
            sub_challenges_with_progress?: {
                slot_id?: number;
                start_value?: number;
                end_value?: number;
                completed?: boolean;
            }[] & ({
                slot_id?: number;
                start_value?: number;
                end_value?: number;
                completed?: boolean;
            } & {
                slot_id?: number;
                start_value?: number;
                end_value?: number;
                completed?: boolean;
            } & { [K_54 in Exclude<keyof I_1["event_data"][number]["sub_challenges_with_progress"][number], keyof CDOTAMatchMetadata_Team_SubChallenge>]: never; })[] & { [K_55 in Exclude<keyof I_1["event_data"][number]["sub_challenges_with_progress"], keyof {
                slot_id?: number;
                start_value?: number;
                end_value?: number;
                completed?: boolean;
            }[]>]: never; };
            wager_winnings?: number;
            cavern_challenge_active?: boolean;
            cavern_challenge_winnings?: number;
            amount_wagered?: number;
            periodic_point_adjustments?: number;
            cavern_challenge_map_results?: {
                completed_path_id?: number;
                claimed_room_id?: number;
            }[] & ({
                completed_path_id?: number;
                claimed_room_id?: number;
            } & {
                completed_path_id?: number;
                claimed_room_id?: number;
            } & { [K_56 in Exclude<keyof I_1["event_data"][number]["cavern_challenge_map_results"][number], keyof CDOTAMatchMetadata_Team_CavernChallengeResult>]: never; })[] & { [K_57 in Exclude<keyof I_1["event_data"][number]["cavern_challenge_map_results"], keyof {
                completed_path_id?: number;
                claimed_room_id?: number;
            }[]>]: never; };
            cavern_challenge_plus_shard_winnings?: number;
            actions_granted?: {
                action_id?: number;
                quantity?: number;
                audit?: number;
                requires_win?: boolean;
                audit_data?: string;
            }[] & ({
                action_id?: number;
                quantity?: number;
                audit?: number;
                requires_win?: boolean;
                audit_data?: string;
            } & {
                action_id?: number;
                quantity?: number;
                audit?: number;
                requires_win?: boolean;
                audit_data?: string;
            } & { [K_58 in Exclude<keyof I_1["event_data"][number]["actions_granted"][number], keyof CDOTAMatchMetadata_Team_ActionGrant>]: never; })[] & { [K_59 in Exclude<keyof I_1["event_data"][number]["actions_granted"], keyof {
                action_id?: number;
                quantity?: number;
                audit?: number;
                requires_win?: boolean;
                audit_data?: string;
            }[]>]: never; };
            cavern_crawl_map_variant?: number;
            team_wager_bonus_pct?: number;
            wager_streak_pct?: number;
            candy_points_granted?: {
                points?: number;
                reason?: number;
            }[] & ({
                points?: number;
                reason?: number;
            } & {
                points?: number;
                reason?: number;
            } & { [K_60 in Exclude<keyof I_1["event_data"][number]["candy_points_granted"][number], keyof CDOTAMatchMetadata_Team_CandyGrant>]: never; })[] & { [K_61 in Exclude<keyof I_1["event_data"][number]["candy_points_granted"], keyof {
                points?: number;
                reason?: number;
            }[]>]: never; };
            active_season_id?: number;
            cavern_crawl_half_credit?: boolean;
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
            } & { [K_62 in Exclude<keyof I_1["event_data"][number]["periodic_resources"][number], keyof CDOTAMatchMetadata_Team_PeriodicResourceData>]: never; })[] & { [K_63 in Exclude<keyof I_1["event_data"][number]["periodic_resources"], keyof {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[]>]: never; };
        } & { [K_64 in Exclude<keyof I_1["event_data"][number], keyof CDOTAMatchMetadata_Team_EventData>]: never; })[] & { [K_65 in Exclude<keyof I_1["event_data"], keyof {
            event_id?: number;
            event_points?: number;
            challenge_instance_id?: number;
            challenge_quest_id?: number;
            challenge_quest_challenge_id?: number;
            challenge_completed?: boolean;
            challenge_rank_completed?: number;
            challenge_rank_previously_completed?: number;
            event_owned?: boolean;
            sub_challenges_with_progress?: {
                slot_id?: number;
                start_value?: number;
                end_value?: number;
                completed?: boolean;
            }[];
            wager_winnings?: number;
            cavern_challenge_active?: boolean;
            cavern_challenge_winnings?: number;
            amount_wagered?: number;
            periodic_point_adjustments?: number;
            cavern_challenge_map_results?: {
                completed_path_id?: number;
                claimed_room_id?: number;
            }[];
            cavern_challenge_plus_shard_winnings?: number;
            actions_granted?: {
                action_id?: number;
                quantity?: number;
                audit?: number;
                requires_win?: boolean;
                audit_data?: string;
            }[];
            cavern_crawl_map_variant?: number;
            team_wager_bonus_pct?: number;
            wager_streak_pct?: number;
            candy_points_granted?: {
                points?: number;
                reason?: number;
            }[];
            active_season_id?: number;
            cavern_crawl_half_credit?: boolean;
            periodic_resources?: {
                periodic_resource_id?: number;
                remaining?: number;
                max?: number;
            }[];
        }[]>]: never; };
        strange_gem_progress?: {
            kill_eater_type?: number;
            gem_item_def_index?: number;
            required_hero_id?: number;
            starting_value?: number;
            ending_value?: number;
            owner_item_def_index?: number;
            owner_item_id?: string;
        }[] & ({
            kill_eater_type?: number;
            gem_item_def_index?: number;
            required_hero_id?: number;
            starting_value?: number;
            ending_value?: number;
            owner_item_def_index?: number;
            owner_item_id?: string;
        } & {
            kill_eater_type?: number;
            gem_item_def_index?: number;
            required_hero_id?: number;
            starting_value?: number;
            ending_value?: number;
            owner_item_def_index?: number;
            owner_item_id?: string;
        } & { [K_66 in Exclude<keyof I_1["strange_gem_progress"][number], keyof CDOTAMatchMetadata_Team_StrangeGemProgress>]: never; })[] & { [K_67 in Exclude<keyof I_1["strange_gem_progress"], keyof {
            kill_eater_type?: number;
            gem_item_def_index?: number;
            required_hero_id?: number;
            starting_value?: number;
            ending_value?: number;
            owner_item_def_index?: number;
            owner_item_id?: string;
        }[]>]: never; };
        hero_xp?: number;
        camps_stacked?: number;
        victory_prediction?: {
            item_id?: string;
            item_def_index?: number;
            starting_value?: number;
            is_victory?: boolean;
        }[] & ({
            item_id?: string;
            item_def_index?: number;
            starting_value?: number;
            is_victory?: boolean;
        } & {
            item_id?: string;
            item_def_index?: number;
            starting_value?: number;
            is_victory?: boolean;
        } & { [K_68 in Exclude<keyof I_1["victory_prediction"][number], keyof CDOTAMatchMetadata_Team_VictoryPrediction>]: never; })[] & { [K_69 in Exclude<keyof I_1["victory_prediction"], keyof {
            item_id?: string;
            item_def_index?: number;
            starting_value?: number;
            is_victory?: boolean;
        }[]>]: never; };
        lane_selection_flags?: number;
        rampages?: number;
        triple_kills?: number;
        aegis_snatched?: number;
        rapiers_purchased?: number;
        couriers_killed?: number;
        net_worth_rank?: number;
        support_gold_spent?: number;
        observer_wards_placed?: number;
        sentry_wards_placed?: number;
        wards_dewarded?: number;
        stun_duration?: number;
        rank_mmr_boost_type?: EDOTAMMRBoostType;
        contract_progress?: {
            guild_id?: number;
            event_id?: number;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            contract_stars?: number;
            contract_slot?: number;
            completed?: boolean;
        }[] & ({
            guild_id?: number;
            event_id?: number;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            contract_stars?: number;
            contract_slot?: number;
            completed?: boolean;
        } & {
            guild_id?: number;
            event_id?: number;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            contract_stars?: number;
            contract_slot?: number;
            completed?: boolean;
        } & { [K_70 in Exclude<keyof I_1["contract_progress"][number], keyof CDOTAMatchMetadata_Team_Player_ContractProgress>]: never; })[] & { [K_71 in Exclude<keyof I_1["contract_progress"], keyof {
            guild_id?: number;
            event_id?: number;
            challenge_instance_id?: number;
            challenge_parameter?: number;
            contract_stars?: number;
            contract_slot?: number;
            completed?: boolean;
        }[]>]: never; };
        guild_ids?: number[] & number[] & { [K_72 in Exclude<keyof I_1["guild_ids"], keyof number[]>]: never; };
        graph_hero_damage?: number[] & number[] & { [K_73 in Exclude<keyof I_1["graph_hero_damage"], keyof number[]>]: never; };
        team_number?: DOTA_GC_TEAM;
        team_slot?: number;
        featured_gamemode_progress?: {
            start_value?: number;
            end_value?: number;
            max_value?: number;
        } & {
            start_value?: number;
            end_value?: number;
            max_value?: number;
        } & { [K_74 in Exclude<keyof I_1["featured_gamemode_progress"], keyof CDOTAMatchMetadata_Team_FeaturedGamemodeProgress>]: never; };
        featured_hero_sticker_index?: number;
        featured_hero_sticker_quality?: number;
        equipped_econ_items?: {
            def_index?: number;
            quality?: number;
            attribute?: {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            }[];
            style?: number;
            equipped_state?: {
                new_class?: number;
                new_slot?: number;
            }[];
        }[] & ({
            def_index?: number;
            quality?: number;
            attribute?: {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            }[];
            style?: number;
            equipped_state?: {
                new_class?: number;
                new_slot?: number;
            }[];
        } & {
            def_index?: number;
            quality?: number;
            attribute?: {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            }[] & ({
                def_index?: number;
                value?: number;
                value_bytes?: string;
            } & {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            } & { [K_75 in Exclude<keyof I_1["equipped_econ_items"][number]["attribute"][number], keyof CSOEconItemAttribute>]: never; })[] & { [K_76 in Exclude<keyof I_1["equipped_econ_items"][number]["attribute"], keyof {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            }[]>]: never; };
            style?: number;
            equipped_state?: {
                new_class?: number;
                new_slot?: number;
            }[] & ({
                new_class?: number;
                new_slot?: number;
            } & {
                new_class?: number;
                new_slot?: number;
            } & { [K_77 in Exclude<keyof I_1["equipped_econ_items"][number]["equipped_state"][number], keyof CSOEconItemEquipped>]: never; })[] & { [K_78 in Exclude<keyof I_1["equipped_econ_items"][number]["equipped_state"], keyof {
                new_class?: number;
                new_slot?: number;
            }[]>]: never; };
        } & { [K_79 in Exclude<keyof I_1["equipped_econ_items"][number], keyof CDOTAMatchMetadata_EconItem>]: never; })[] & { [K_80 in Exclude<keyof I_1["equipped_econ_items"], keyof {
            def_index?: number;
            quality?: number;
            attribute?: {
                def_index?: number;
                value?: number;
                value_bytes?: string;
            }[];
            style?: number;
            equipped_state?: {
                new_class?: number;
                new_slot?: number;
            }[];
        }[]>]: never; };
    } & { [K_81 in Exclude<keyof I_1, keyof CDOTAMatchMetadata_Team_Player>]: never; }>(object: I_1): CDOTAMatchMetadata_Team_Player;
};
export declare const CDOTAMatchMetadata_Team_Player_ContractProgress: {
    fromJSON(object: any): CDOTAMatchMetadata_Team_Player_ContractProgress;
    toJSON(message: CDOTAMatchMetadata_Team_Player_ContractProgress): unknown;
    create<I extends {
        guild_id?: number;
        event_id?: number;
        challenge_instance_id?: number;
        challenge_parameter?: number;
        contract_stars?: number;
        contract_slot?: number;
        completed?: boolean;
    } & {
        guild_id?: number;
        event_id?: number;
        challenge_instance_id?: number;
        challenge_parameter?: number;
        contract_stars?: number;
        contract_slot?: number;
        completed?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchMetadata_Team_Player_ContractProgress>]: never; }>(base?: I): CDOTAMatchMetadata_Team_Player_ContractProgress;
    fromPartial<I_1 extends {
        guild_id?: number;
        event_id?: number;
        challenge_instance_id?: number;
        challenge_parameter?: number;
        contract_stars?: number;
        contract_slot?: number;
        completed?: boolean;
    } & {
        guild_id?: number;
        event_id?: number;
        challenge_instance_id?: number;
        challenge_parameter?: number;
        contract_stars?: number;
        contract_slot?: number;
        completed?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchMetadata_Team_Player_ContractProgress>]: never; }>(object: I_1): CDOTAMatchMetadata_Team_Player_ContractProgress;
};
export declare const CDOTAMatchMetadata_GuildChallengeProgress: {
    fromJSON(object: any): CDOTAMatchMetadata_GuildChallengeProgress;
    toJSON(message: CDOTAMatchMetadata_GuildChallengeProgress): unknown;
    create<I extends {
        guild_id?: number;
        event_id?: EEvent;
        challenge_instance_id?: number;
        challenge_parameter?: number;
        challenge_timestamp?: number;
        challenge_progress_at_start?: number;
        challenge_progress_accumulated?: number;
        individual_progress?: {
            progress?: number;
            player_slot?: number;
        }[];
    } & {
        guild_id?: number;
        event_id?: EEvent;
        challenge_instance_id?: number;
        challenge_parameter?: number;
        challenge_timestamp?: number;
        challenge_progress_at_start?: number;
        challenge_progress_accumulated?: number;
        individual_progress?: {
            progress?: number;
            player_slot?: number;
        }[] & ({
            progress?: number;
            player_slot?: number;
        } & {
            progress?: number;
            player_slot?: number;
        } & { [K in Exclude<keyof I["individual_progress"][number], keyof CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress>]: never; })[] & { [K_1 in Exclude<keyof I["individual_progress"], keyof {
            progress?: number;
            player_slot?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CDOTAMatchMetadata_GuildChallengeProgress>]: never; }>(base?: I): CDOTAMatchMetadata_GuildChallengeProgress;
    fromPartial<I_1 extends {
        guild_id?: number;
        event_id?: EEvent;
        challenge_instance_id?: number;
        challenge_parameter?: number;
        challenge_timestamp?: number;
        challenge_progress_at_start?: number;
        challenge_progress_accumulated?: number;
        individual_progress?: {
            progress?: number;
            player_slot?: number;
        }[];
    } & {
        guild_id?: number;
        event_id?: EEvent;
        challenge_instance_id?: number;
        challenge_parameter?: number;
        challenge_timestamp?: number;
        challenge_progress_at_start?: number;
        challenge_progress_accumulated?: number;
        individual_progress?: {
            progress?: number;
            player_slot?: number;
        }[] & ({
            progress?: number;
            player_slot?: number;
        } & {
            progress?: number;
            player_slot?: number;
        } & { [K_3 in Exclude<keyof I_1["individual_progress"][number], keyof CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress>]: never; })[] & { [K_4 in Exclude<keyof I_1["individual_progress"], keyof {
            progress?: number;
            player_slot?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CDOTAMatchMetadata_GuildChallengeProgress>]: never; }>(object: I_1): CDOTAMatchMetadata_GuildChallengeProgress;
};
export declare const CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress: {
    fromJSON(object: any): CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress;
    toJSON(message: CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress): unknown;
    create<I extends {
        progress?: number;
        player_slot?: number;
    } & {
        progress?: number;
        player_slot?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress>]: never; }>(base?: I): CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress;
    fromPartial<I_1 extends {
        progress?: number;
        player_slot?: number;
    } & {
        progress?: number;
        player_slot?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress>]: never; }>(object: I_1): CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress;
};
export declare const CDOTAMatchMetadata_Tip: {
    fromJSON(object: any): CDOTAMatchMetadata_Tip;
    toJSON(message: CDOTAMatchMetadata_Tip): unknown;
    create<I extends {
        source_player_slot?: number;
        target_player_slot?: number;
        tip_amount?: number;
        event_id?: EEvent;
    } & {
        source_player_slot?: number;
        target_player_slot?: number;
        tip_amount?: number;
        event_id?: EEvent;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchMetadata_Tip>]: never; }>(base?: I): CDOTAMatchMetadata_Tip;
    fromPartial<I_1 extends {
        source_player_slot?: number;
        target_player_slot?: number;
        tip_amount?: number;
        event_id?: EEvent;
    } & {
        source_player_slot?: number;
        target_player_slot?: number;
        tip_amount?: number;
        event_id?: EEvent;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchMetadata_Tip>]: never; }>(object: I_1): CDOTAMatchMetadata_Tip;
};
export declare const CDOTAMatchPrivateMetadata: {
    fromJSON(object: any): CDOTAMatchPrivateMetadata;
    toJSON(message: CDOTAMatchPrivateMetadata): unknown;
    create<I extends {
        teams?: {
            dota_team?: number;
            players?: {
                player_slot?: number;
                position_stream?: string;
                combat_segments?: {
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[];
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[];
                }[];
                damage_unit_names?: string[];
                buff_records?: {
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[];
                }[];
                graph_kills?: number[];
                graph_deaths?: number[];
                graph_assists?: number[];
                graph_lasthits?: number[];
                graph_denies?: number[];
                gold_received?: {
                    creep?: number;
                    heroes?: number;
                    bounty_runes?: number;
                    passive?: number;
                    buildings?: number;
                    abilities?: number;
                    wards?: number;
                    other?: number;
                };
                xp_received?: {
                    creep?: number;
                    heroes?: number;
                    roshan?: number;
                    tome_of_knowledge?: number;
                    outpost?: number;
                    other?: number;
                };
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
            }[];
            buildings?: {
                unit_name?: string;
                position_quant_x?: number;
                position_quant_y?: number;
                death_time?: number;
            }[];
        }[];
        graph_win_probability?: number[];
        string_names?: {
            id?: number;
            name?: string;
        }[];
    } & {
        teams?: {
            dota_team?: number;
            players?: {
                player_slot?: number;
                position_stream?: string;
                combat_segments?: {
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[];
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[];
                }[];
                damage_unit_names?: string[];
                buff_records?: {
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[];
                }[];
                graph_kills?: number[];
                graph_deaths?: number[];
                graph_assists?: number[];
                graph_lasthits?: number[];
                graph_denies?: number[];
                gold_received?: {
                    creep?: number;
                    heroes?: number;
                    bounty_runes?: number;
                    passive?: number;
                    buildings?: number;
                    abilities?: number;
                    wards?: number;
                    other?: number;
                };
                xp_received?: {
                    creep?: number;
                    heroes?: number;
                    roshan?: number;
                    tome_of_knowledge?: number;
                    outpost?: number;
                    other?: number;
                };
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
            }[];
            buildings?: {
                unit_name?: string;
                position_quant_x?: number;
                position_quant_y?: number;
                death_time?: number;
            }[];
        }[] & ({
            dota_team?: number;
            players?: {
                player_slot?: number;
                position_stream?: string;
                combat_segments?: {
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[];
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[];
                }[];
                damage_unit_names?: string[];
                buff_records?: {
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[];
                }[];
                graph_kills?: number[];
                graph_deaths?: number[];
                graph_assists?: number[];
                graph_lasthits?: number[];
                graph_denies?: number[];
                gold_received?: {
                    creep?: number;
                    heroes?: number;
                    bounty_runes?: number;
                    passive?: number;
                    buildings?: number;
                    abilities?: number;
                    wards?: number;
                    other?: number;
                };
                xp_received?: {
                    creep?: number;
                    heroes?: number;
                    roshan?: number;
                    tome_of_knowledge?: number;
                    outpost?: number;
                    other?: number;
                };
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
            }[];
            buildings?: {
                unit_name?: string;
                position_quant_x?: number;
                position_quant_y?: number;
                death_time?: number;
            }[];
        } & {
            dota_team?: number;
            players?: {
                player_slot?: number;
                position_stream?: string;
                combat_segments?: {
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[];
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[];
                }[];
                damage_unit_names?: string[];
                buff_records?: {
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[];
                }[];
                graph_kills?: number[];
                graph_deaths?: number[];
                graph_assists?: number[];
                graph_lasthits?: number[];
                graph_denies?: number[];
                gold_received?: {
                    creep?: number;
                    heroes?: number;
                    bounty_runes?: number;
                    passive?: number;
                    buildings?: number;
                    abilities?: number;
                    wards?: number;
                    other?: number;
                };
                xp_received?: {
                    creep?: number;
                    heroes?: number;
                    roshan?: number;
                    tome_of_knowledge?: number;
                    outpost?: number;
                    other?: number;
                };
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
            }[] & ({
                player_slot?: number;
                position_stream?: string;
                combat_segments?: {
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[];
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[];
                }[];
                damage_unit_names?: string[];
                buff_records?: {
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[];
                }[];
                graph_kills?: number[];
                graph_deaths?: number[];
                graph_assists?: number[];
                graph_lasthits?: number[];
                graph_denies?: number[];
                gold_received?: {
                    creep?: number;
                    heroes?: number;
                    bounty_runes?: number;
                    passive?: number;
                    buildings?: number;
                    abilities?: number;
                    wards?: number;
                    other?: number;
                };
                xp_received?: {
                    creep?: number;
                    heroes?: number;
                    roshan?: number;
                    tome_of_knowledge?: number;
                    outpost?: number;
                    other?: number;
                };
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
            } & {
                player_slot?: number;
                position_stream?: string;
                combat_segments?: {
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[];
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[];
                }[] & ({
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[];
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[];
                } & {
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[] & ({
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    } & {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[] & ({
                            hero_id?: number;
                            damage?: number;
                        } & {
                            hero_id?: number;
                            damage?: number;
                        } & { [K in Exclude<keyof I["teams"][number]["players"][number]["combat_segments"][number]["damage_by_ability"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget>]: never; })[] & { [K_1 in Exclude<keyof I["teams"][number]["players"][number]["combat_segments"][number]["damage_by_ability"][number]["by_hero_targets"], keyof {
                            hero_id?: number;
                            damage?: number;
                        }[]>]: never; };
                    } & { [K_2 in Exclude<keyof I["teams"][number]["players"][number]["combat_segments"][number]["damage_by_ability"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility>]: never; })[] & { [K_3 in Exclude<keyof I["teams"][number]["players"][number]["combat_segments"][number]["damage_by_ability"], keyof {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[]>]: never; };
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[] & ({
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    } & {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[] & ({
                            hero_id?: number;
                            healing?: number;
                        } & {
                            hero_id?: number;
                            healing?: number;
                        } & { [K_4 in Exclude<keyof I["teams"][number]["players"][number]["combat_segments"][number]["healing_by_ability"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget>]: never; })[] & { [K_5 in Exclude<keyof I["teams"][number]["players"][number]["combat_segments"][number]["healing_by_ability"][number]["by_hero_targets"], keyof {
                            hero_id?: number;
                            healing?: number;
                        }[]>]: never; };
                    } & { [K_6 in Exclude<keyof I["teams"][number]["players"][number]["combat_segments"][number]["healing_by_ability"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility>]: never; })[] & { [K_7 in Exclude<keyof I["teams"][number]["players"][number]["combat_segments"][number]["healing_by_ability"], keyof {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[]>]: never; };
                } & { [K_8 in Exclude<keyof I["teams"][number]["players"][number]["combat_segments"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment>]: never; })[] & { [K_9 in Exclude<keyof I["teams"][number]["players"][number]["combat_segments"], keyof {
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[];
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[];
                }[]>]: never; };
                damage_unit_names?: string[] & string[] & { [K_10 in Exclude<keyof I["teams"][number]["players"][number]["damage_unit_names"], keyof string[]>]: never; };
                buff_records?: {
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[];
                }[] & ({
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[];
                } & {
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[] & ({
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    } & {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    } & { [K_11 in Exclude<keyof I["teams"][number]["players"][number]["buff_records"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget>]: never; })[] & { [K_12 in Exclude<keyof I["teams"][number]["players"][number]["buff_records"][number]["by_hero_targets"], keyof {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[]>]: never; };
                } & { [K_13 in Exclude<keyof I["teams"][number]["players"][number]["buff_records"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_BuffRecord>]: never; })[] & { [K_14 in Exclude<keyof I["teams"][number]["players"][number]["buff_records"], keyof {
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[];
                }[]>]: never; };
                graph_kills?: number[] & number[] & { [K_15 in Exclude<keyof I["teams"][number]["players"][number]["graph_kills"], keyof number[]>]: never; };
                graph_deaths?: number[] & number[] & { [K_16 in Exclude<keyof I["teams"][number]["players"][number]["graph_deaths"], keyof number[]>]: never; };
                graph_assists?: number[] & number[] & { [K_17 in Exclude<keyof I["teams"][number]["players"][number]["graph_assists"], keyof number[]>]: never; };
                graph_lasthits?: number[] & number[] & { [K_18 in Exclude<keyof I["teams"][number]["players"][number]["graph_lasthits"], keyof number[]>]: never; };
                graph_denies?: number[] & number[] & { [K_19 in Exclude<keyof I["teams"][number]["players"][number]["graph_denies"], keyof number[]>]: never; };
                gold_received?: {
                    creep?: number;
                    heroes?: number;
                    bounty_runes?: number;
                    passive?: number;
                    buildings?: number;
                    abilities?: number;
                    wards?: number;
                    other?: number;
                } & {
                    creep?: number;
                    heroes?: number;
                    bounty_runes?: number;
                    passive?: number;
                    buildings?: number;
                    abilities?: number;
                    wards?: number;
                    other?: number;
                } & { [K_20 in Exclude<keyof I["teams"][number]["players"][number]["gold_received"], keyof CDOTAMatchPrivateMetadata_Team_Player_GoldReceived>]: never; };
                xp_received?: {
                    creep?: number;
                    heroes?: number;
                    roshan?: number;
                    tome_of_knowledge?: number;
                    outpost?: number;
                    other?: number;
                } & {
                    creep?: number;
                    heroes?: number;
                    roshan?: number;
                    tome_of_knowledge?: number;
                    outpost?: number;
                    other?: number;
                } & { [K_21 in Exclude<keyof I["teams"][number]["players"][number]["xp_received"], keyof CDOTAMatchPrivateMetadata_Team_Player_XPReceived>]: never; };
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
            } & { [K_22 in Exclude<keyof I["teams"][number]["players"][number], keyof CDOTAMatchPrivateMetadata_Team_Player>]: never; })[] & { [K_23 in Exclude<keyof I["teams"][number]["players"], keyof {
                player_slot?: number;
                position_stream?: string;
                combat_segments?: {
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[];
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[];
                }[];
                damage_unit_names?: string[];
                buff_records?: {
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[];
                }[];
                graph_kills?: number[];
                graph_deaths?: number[];
                graph_assists?: number[];
                graph_lasthits?: number[];
                graph_denies?: number[];
                gold_received?: {
                    creep?: number;
                    heroes?: number;
                    bounty_runes?: number;
                    passive?: number;
                    buildings?: number;
                    abilities?: number;
                    wards?: number;
                    other?: number;
                };
                xp_received?: {
                    creep?: number;
                    heroes?: number;
                    roshan?: number;
                    tome_of_knowledge?: number;
                    outpost?: number;
                    other?: number;
                };
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
            }[]>]: never; };
            buildings?: {
                unit_name?: string;
                position_quant_x?: number;
                position_quant_y?: number;
                death_time?: number;
            }[] & ({
                unit_name?: string;
                position_quant_x?: number;
                position_quant_y?: number;
                death_time?: number;
            } & {
                unit_name?: string;
                position_quant_x?: number;
                position_quant_y?: number;
                death_time?: number;
            } & { [K_24 in Exclude<keyof I["teams"][number]["buildings"][number], keyof CDOTAMatchPrivateMetadata_Team_Building>]: never; })[] & { [K_25 in Exclude<keyof I["teams"][number]["buildings"], keyof {
                unit_name?: string;
                position_quant_x?: number;
                position_quant_y?: number;
                death_time?: number;
            }[]>]: never; };
        } & { [K_26 in Exclude<keyof I["teams"][number], keyof CDOTAMatchPrivateMetadata_Team>]: never; })[] & { [K_27 in Exclude<keyof I["teams"], keyof {
            dota_team?: number;
            players?: {
                player_slot?: number;
                position_stream?: string;
                combat_segments?: {
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[];
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[];
                }[];
                damage_unit_names?: string[];
                buff_records?: {
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[];
                }[];
                graph_kills?: number[];
                graph_deaths?: number[];
                graph_assists?: number[];
                graph_lasthits?: number[];
                graph_denies?: number[];
                gold_received?: {
                    creep?: number;
                    heroes?: number;
                    bounty_runes?: number;
                    passive?: number;
                    buildings?: number;
                    abilities?: number;
                    wards?: number;
                    other?: number;
                };
                xp_received?: {
                    creep?: number;
                    heroes?: number;
                    roshan?: number;
                    tome_of_knowledge?: number;
                    outpost?: number;
                    other?: number;
                };
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
            }[];
            buildings?: {
                unit_name?: string;
                position_quant_x?: number;
                position_quant_y?: number;
                death_time?: number;
            }[];
        }[]>]: never; };
        graph_win_probability?: number[] & number[] & { [K_28 in Exclude<keyof I["graph_win_probability"], keyof number[]>]: never; };
        string_names?: {
            id?: number;
            name?: string;
        }[] & ({
            id?: number;
            name?: string;
        } & {
            id?: number;
            name?: string;
        } & { [K_29 in Exclude<keyof I["string_names"][number], keyof CDOTAMatchPrivateMetadata_StringName>]: never; })[] & { [K_30 in Exclude<keyof I["string_names"], keyof {
            id?: number;
            name?: string;
        }[]>]: never; };
    } & { [K_31 in Exclude<keyof I, keyof CDOTAMatchPrivateMetadata>]: never; }>(base?: I): CDOTAMatchPrivateMetadata;
    fromPartial<I_1 extends {
        teams?: {
            dota_team?: number;
            players?: {
                player_slot?: number;
                position_stream?: string;
                combat_segments?: {
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[];
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[];
                }[];
                damage_unit_names?: string[];
                buff_records?: {
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[];
                }[];
                graph_kills?: number[];
                graph_deaths?: number[];
                graph_assists?: number[];
                graph_lasthits?: number[];
                graph_denies?: number[];
                gold_received?: {
                    creep?: number;
                    heroes?: number;
                    bounty_runes?: number;
                    passive?: number;
                    buildings?: number;
                    abilities?: number;
                    wards?: number;
                    other?: number;
                };
                xp_received?: {
                    creep?: number;
                    heroes?: number;
                    roshan?: number;
                    tome_of_knowledge?: number;
                    outpost?: number;
                    other?: number;
                };
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
            }[];
            buildings?: {
                unit_name?: string;
                position_quant_x?: number;
                position_quant_y?: number;
                death_time?: number;
            }[];
        }[];
        graph_win_probability?: number[];
        string_names?: {
            id?: number;
            name?: string;
        }[];
    } & {
        teams?: {
            dota_team?: number;
            players?: {
                player_slot?: number;
                position_stream?: string;
                combat_segments?: {
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[];
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[];
                }[];
                damage_unit_names?: string[];
                buff_records?: {
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[];
                }[];
                graph_kills?: number[];
                graph_deaths?: number[];
                graph_assists?: number[];
                graph_lasthits?: number[];
                graph_denies?: number[];
                gold_received?: {
                    creep?: number;
                    heroes?: number;
                    bounty_runes?: number;
                    passive?: number;
                    buildings?: number;
                    abilities?: number;
                    wards?: number;
                    other?: number;
                };
                xp_received?: {
                    creep?: number;
                    heroes?: number;
                    roshan?: number;
                    tome_of_knowledge?: number;
                    outpost?: number;
                    other?: number;
                };
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
            }[];
            buildings?: {
                unit_name?: string;
                position_quant_x?: number;
                position_quant_y?: number;
                death_time?: number;
            }[];
        }[] & ({
            dota_team?: number;
            players?: {
                player_slot?: number;
                position_stream?: string;
                combat_segments?: {
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[];
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[];
                }[];
                damage_unit_names?: string[];
                buff_records?: {
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[];
                }[];
                graph_kills?: number[];
                graph_deaths?: number[];
                graph_assists?: number[];
                graph_lasthits?: number[];
                graph_denies?: number[];
                gold_received?: {
                    creep?: number;
                    heroes?: number;
                    bounty_runes?: number;
                    passive?: number;
                    buildings?: number;
                    abilities?: number;
                    wards?: number;
                    other?: number;
                };
                xp_received?: {
                    creep?: number;
                    heroes?: number;
                    roshan?: number;
                    tome_of_knowledge?: number;
                    outpost?: number;
                    other?: number;
                };
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
            }[];
            buildings?: {
                unit_name?: string;
                position_quant_x?: number;
                position_quant_y?: number;
                death_time?: number;
            }[];
        } & {
            dota_team?: number;
            players?: {
                player_slot?: number;
                position_stream?: string;
                combat_segments?: {
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[];
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[];
                }[];
                damage_unit_names?: string[];
                buff_records?: {
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[];
                }[];
                graph_kills?: number[];
                graph_deaths?: number[];
                graph_assists?: number[];
                graph_lasthits?: number[];
                graph_denies?: number[];
                gold_received?: {
                    creep?: number;
                    heroes?: number;
                    bounty_runes?: number;
                    passive?: number;
                    buildings?: number;
                    abilities?: number;
                    wards?: number;
                    other?: number;
                };
                xp_received?: {
                    creep?: number;
                    heroes?: number;
                    roshan?: number;
                    tome_of_knowledge?: number;
                    outpost?: number;
                    other?: number;
                };
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
            }[] & ({
                player_slot?: number;
                position_stream?: string;
                combat_segments?: {
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[];
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[];
                }[];
                damage_unit_names?: string[];
                buff_records?: {
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[];
                }[];
                graph_kills?: number[];
                graph_deaths?: number[];
                graph_assists?: number[];
                graph_lasthits?: number[];
                graph_denies?: number[];
                gold_received?: {
                    creep?: number;
                    heroes?: number;
                    bounty_runes?: number;
                    passive?: number;
                    buildings?: number;
                    abilities?: number;
                    wards?: number;
                    other?: number;
                };
                xp_received?: {
                    creep?: number;
                    heroes?: number;
                    roshan?: number;
                    tome_of_knowledge?: number;
                    outpost?: number;
                    other?: number;
                };
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
            } & {
                player_slot?: number;
                position_stream?: string;
                combat_segments?: {
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[];
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[];
                }[] & ({
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[];
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[];
                } & {
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[] & ({
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    } & {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[] & ({
                            hero_id?: number;
                            damage?: number;
                        } & {
                            hero_id?: number;
                            damage?: number;
                        } & { [K_32 in Exclude<keyof I_1["teams"][number]["players"][number]["combat_segments"][number]["damage_by_ability"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget>]: never; })[] & { [K_33 in Exclude<keyof I_1["teams"][number]["players"][number]["combat_segments"][number]["damage_by_ability"][number]["by_hero_targets"], keyof {
                            hero_id?: number;
                            damage?: number;
                        }[]>]: never; };
                    } & { [K_34 in Exclude<keyof I_1["teams"][number]["players"][number]["combat_segments"][number]["damage_by_ability"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility>]: never; })[] & { [K_35 in Exclude<keyof I_1["teams"][number]["players"][number]["combat_segments"][number]["damage_by_ability"], keyof {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[]>]: never; };
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[] & ({
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    } & {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[] & ({
                            hero_id?: number;
                            healing?: number;
                        } & {
                            hero_id?: number;
                            healing?: number;
                        } & { [K_36 in Exclude<keyof I_1["teams"][number]["players"][number]["combat_segments"][number]["healing_by_ability"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget>]: never; })[] & { [K_37 in Exclude<keyof I_1["teams"][number]["players"][number]["combat_segments"][number]["healing_by_ability"][number]["by_hero_targets"], keyof {
                            hero_id?: number;
                            healing?: number;
                        }[]>]: never; };
                    } & { [K_38 in Exclude<keyof I_1["teams"][number]["players"][number]["combat_segments"][number]["healing_by_ability"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility>]: never; })[] & { [K_39 in Exclude<keyof I_1["teams"][number]["players"][number]["combat_segments"][number]["healing_by_ability"], keyof {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[]>]: never; };
                } & { [K_40 in Exclude<keyof I_1["teams"][number]["players"][number]["combat_segments"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment>]: never; })[] & { [K_41 in Exclude<keyof I_1["teams"][number]["players"][number]["combat_segments"], keyof {
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[];
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[];
                }[]>]: never; };
                damage_unit_names?: string[] & string[] & { [K_42 in Exclude<keyof I_1["teams"][number]["players"][number]["damage_unit_names"], keyof string[]>]: never; };
                buff_records?: {
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[];
                }[] & ({
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[];
                } & {
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[] & ({
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    } & {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    } & { [K_43 in Exclude<keyof I_1["teams"][number]["players"][number]["buff_records"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget>]: never; })[] & { [K_44 in Exclude<keyof I_1["teams"][number]["players"][number]["buff_records"][number]["by_hero_targets"], keyof {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[]>]: never; };
                } & { [K_45 in Exclude<keyof I_1["teams"][number]["players"][number]["buff_records"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_BuffRecord>]: never; })[] & { [K_46 in Exclude<keyof I_1["teams"][number]["players"][number]["buff_records"], keyof {
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[];
                }[]>]: never; };
                graph_kills?: number[] & number[] & { [K_47 in Exclude<keyof I_1["teams"][number]["players"][number]["graph_kills"], keyof number[]>]: never; };
                graph_deaths?: number[] & number[] & { [K_48 in Exclude<keyof I_1["teams"][number]["players"][number]["graph_deaths"], keyof number[]>]: never; };
                graph_assists?: number[] & number[] & { [K_49 in Exclude<keyof I_1["teams"][number]["players"][number]["graph_assists"], keyof number[]>]: never; };
                graph_lasthits?: number[] & number[] & { [K_50 in Exclude<keyof I_1["teams"][number]["players"][number]["graph_lasthits"], keyof number[]>]: never; };
                graph_denies?: number[] & number[] & { [K_51 in Exclude<keyof I_1["teams"][number]["players"][number]["graph_denies"], keyof number[]>]: never; };
                gold_received?: {
                    creep?: number;
                    heroes?: number;
                    bounty_runes?: number;
                    passive?: number;
                    buildings?: number;
                    abilities?: number;
                    wards?: number;
                    other?: number;
                } & {
                    creep?: number;
                    heroes?: number;
                    bounty_runes?: number;
                    passive?: number;
                    buildings?: number;
                    abilities?: number;
                    wards?: number;
                    other?: number;
                } & { [K_52 in Exclude<keyof I_1["teams"][number]["players"][number]["gold_received"], keyof CDOTAMatchPrivateMetadata_Team_Player_GoldReceived>]: never; };
                xp_received?: {
                    creep?: number;
                    heroes?: number;
                    roshan?: number;
                    tome_of_knowledge?: number;
                    outpost?: number;
                    other?: number;
                } & {
                    creep?: number;
                    heroes?: number;
                    roshan?: number;
                    tome_of_knowledge?: number;
                    outpost?: number;
                    other?: number;
                } & { [K_53 in Exclude<keyof I_1["teams"][number]["players"][number]["xp_received"], keyof CDOTAMatchPrivateMetadata_Team_Player_XPReceived>]: never; };
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
            } & { [K_54 in Exclude<keyof I_1["teams"][number]["players"][number], keyof CDOTAMatchPrivateMetadata_Team_Player>]: never; })[] & { [K_55 in Exclude<keyof I_1["teams"][number]["players"], keyof {
                player_slot?: number;
                position_stream?: string;
                combat_segments?: {
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[];
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[];
                }[];
                damage_unit_names?: string[];
                buff_records?: {
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[];
                }[];
                graph_kills?: number[];
                graph_deaths?: number[];
                graph_assists?: number[];
                graph_lasthits?: number[];
                graph_denies?: number[];
                gold_received?: {
                    creep?: number;
                    heroes?: number;
                    bounty_runes?: number;
                    passive?: number;
                    buildings?: number;
                    abilities?: number;
                    wards?: number;
                    other?: number;
                };
                xp_received?: {
                    creep?: number;
                    heroes?: number;
                    roshan?: number;
                    tome_of_knowledge?: number;
                    outpost?: number;
                    other?: number;
                };
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
            }[]>]: never; };
            buildings?: {
                unit_name?: string;
                position_quant_x?: number;
                position_quant_y?: number;
                death_time?: number;
            }[] & ({
                unit_name?: string;
                position_quant_x?: number;
                position_quant_y?: number;
                death_time?: number;
            } & {
                unit_name?: string;
                position_quant_x?: number;
                position_quant_y?: number;
                death_time?: number;
            } & { [K_56 in Exclude<keyof I_1["teams"][number]["buildings"][number], keyof CDOTAMatchPrivateMetadata_Team_Building>]: never; })[] & { [K_57 in Exclude<keyof I_1["teams"][number]["buildings"], keyof {
                unit_name?: string;
                position_quant_x?: number;
                position_quant_y?: number;
                death_time?: number;
            }[]>]: never; };
        } & { [K_58 in Exclude<keyof I_1["teams"][number], keyof CDOTAMatchPrivateMetadata_Team>]: never; })[] & { [K_59 in Exclude<keyof I_1["teams"], keyof {
            dota_team?: number;
            players?: {
                player_slot?: number;
                position_stream?: string;
                combat_segments?: {
                    game_time?: number;
                    damage_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            damage?: number;
                        }[];
                    }[];
                    healing_by_ability?: {
                        source_unit_index?: number;
                        ability_id?: number;
                        by_hero_targets?: {
                            hero_id?: number;
                            healing?: number;
                        }[];
                    }[];
                }[];
                damage_unit_names?: string[];
                buff_records?: {
                    buff_ability_id?: number;
                    buff_modifier_name?: string;
                    by_hero_targets?: {
                        hero_id?: number;
                        elapsed_duration?: number;
                        is_hidden?: boolean;
                    }[];
                }[];
                graph_kills?: number[];
                graph_deaths?: number[];
                graph_assists?: number[];
                graph_lasthits?: number[];
                graph_denies?: number[];
                gold_received?: {
                    creep?: number;
                    heroes?: number;
                    bounty_runes?: number;
                    passive?: number;
                    buildings?: number;
                    abilities?: number;
                    wards?: number;
                    other?: number;
                };
                xp_received?: {
                    creep?: number;
                    heroes?: number;
                    roshan?: number;
                    tome_of_knowledge?: number;
                    outpost?: number;
                    other?: number;
                };
                team_number?: DOTA_GC_TEAM;
                team_slot?: number;
            }[];
            buildings?: {
                unit_name?: string;
                position_quant_x?: number;
                position_quant_y?: number;
                death_time?: number;
            }[];
        }[]>]: never; };
        graph_win_probability?: number[] & number[] & { [K_60 in Exclude<keyof I_1["graph_win_probability"], keyof number[]>]: never; };
        string_names?: {
            id?: number;
            name?: string;
        }[] & ({
            id?: number;
            name?: string;
        } & {
            id?: number;
            name?: string;
        } & { [K_61 in Exclude<keyof I_1["string_names"][number], keyof CDOTAMatchPrivateMetadata_StringName>]: never; })[] & { [K_62 in Exclude<keyof I_1["string_names"], keyof {
            id?: number;
            name?: string;
        }[]>]: never; };
    } & { [K_63 in Exclude<keyof I_1, keyof CDOTAMatchPrivateMetadata>]: never; }>(object: I_1): CDOTAMatchPrivateMetadata;
};
export declare const CDOTAMatchPrivateMetadata_StringName: {
    fromJSON(object: any): CDOTAMatchPrivateMetadata_StringName;
    toJSON(message: CDOTAMatchPrivateMetadata_StringName): unknown;
    create<I extends {
        id?: number;
        name?: string;
    } & {
        id?: number;
        name?: string;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchPrivateMetadata_StringName>]: never; }>(base?: I): CDOTAMatchPrivateMetadata_StringName;
    fromPartial<I_1 extends {
        id?: number;
        name?: string;
    } & {
        id?: number;
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchPrivateMetadata_StringName>]: never; }>(object: I_1): CDOTAMatchPrivateMetadata_StringName;
};
export declare const CDOTAMatchPrivateMetadata_Team: {
    fromJSON(object: any): CDOTAMatchPrivateMetadata_Team;
    toJSON(message: CDOTAMatchPrivateMetadata_Team): unknown;
    create<I extends {
        dota_team?: number;
        players?: {
            player_slot?: number;
            position_stream?: string;
            combat_segments?: {
                game_time?: number;
                damage_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[];
                }[];
                healing_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[];
                }[];
            }[];
            damage_unit_names?: string[];
            buff_records?: {
                buff_ability_id?: number;
                buff_modifier_name?: string;
                by_hero_targets?: {
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                }[];
            }[];
            graph_kills?: number[];
            graph_deaths?: number[];
            graph_assists?: number[];
            graph_lasthits?: number[];
            graph_denies?: number[];
            gold_received?: {
                creep?: number;
                heroes?: number;
                bounty_runes?: number;
                passive?: number;
                buildings?: number;
                abilities?: number;
                wards?: number;
                other?: number;
            };
            xp_received?: {
                creep?: number;
                heroes?: number;
                roshan?: number;
                tome_of_knowledge?: number;
                outpost?: number;
                other?: number;
            };
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
        }[];
        buildings?: {
            unit_name?: string;
            position_quant_x?: number;
            position_quant_y?: number;
            death_time?: number;
        }[];
    } & {
        dota_team?: number;
        players?: {
            player_slot?: number;
            position_stream?: string;
            combat_segments?: {
                game_time?: number;
                damage_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[];
                }[];
                healing_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[];
                }[];
            }[];
            damage_unit_names?: string[];
            buff_records?: {
                buff_ability_id?: number;
                buff_modifier_name?: string;
                by_hero_targets?: {
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                }[];
            }[];
            graph_kills?: number[];
            graph_deaths?: number[];
            graph_assists?: number[];
            graph_lasthits?: number[];
            graph_denies?: number[];
            gold_received?: {
                creep?: number;
                heroes?: number;
                bounty_runes?: number;
                passive?: number;
                buildings?: number;
                abilities?: number;
                wards?: number;
                other?: number;
            };
            xp_received?: {
                creep?: number;
                heroes?: number;
                roshan?: number;
                tome_of_knowledge?: number;
                outpost?: number;
                other?: number;
            };
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
        }[] & ({
            player_slot?: number;
            position_stream?: string;
            combat_segments?: {
                game_time?: number;
                damage_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[];
                }[];
                healing_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[];
                }[];
            }[];
            damage_unit_names?: string[];
            buff_records?: {
                buff_ability_id?: number;
                buff_modifier_name?: string;
                by_hero_targets?: {
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                }[];
            }[];
            graph_kills?: number[];
            graph_deaths?: number[];
            graph_assists?: number[];
            graph_lasthits?: number[];
            graph_denies?: number[];
            gold_received?: {
                creep?: number;
                heroes?: number;
                bounty_runes?: number;
                passive?: number;
                buildings?: number;
                abilities?: number;
                wards?: number;
                other?: number;
            };
            xp_received?: {
                creep?: number;
                heroes?: number;
                roshan?: number;
                tome_of_knowledge?: number;
                outpost?: number;
                other?: number;
            };
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
        } & {
            player_slot?: number;
            position_stream?: string;
            combat_segments?: {
                game_time?: number;
                damage_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[];
                }[];
                healing_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[];
                }[];
            }[] & ({
                game_time?: number;
                damage_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[];
                }[];
                healing_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[];
                }[];
            } & {
                game_time?: number;
                damage_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[];
                }[] & ({
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[];
                } & {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[] & ({
                        hero_id?: number;
                        damage?: number;
                    } & {
                        hero_id?: number;
                        damage?: number;
                    } & { [K in Exclude<keyof I["players"][number]["combat_segments"][number]["damage_by_ability"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget>]: never; })[] & { [K_1 in Exclude<keyof I["players"][number]["combat_segments"][number]["damage_by_ability"][number]["by_hero_targets"], keyof {
                        hero_id?: number;
                        damage?: number;
                    }[]>]: never; };
                } & { [K_2 in Exclude<keyof I["players"][number]["combat_segments"][number]["damage_by_ability"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility>]: never; })[] & { [K_3 in Exclude<keyof I["players"][number]["combat_segments"][number]["damage_by_ability"], keyof {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[];
                }[]>]: never; };
                healing_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[];
                }[] & ({
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[];
                } & {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[] & ({
                        hero_id?: number;
                        healing?: number;
                    } & {
                        hero_id?: number;
                        healing?: number;
                    } & { [K_4 in Exclude<keyof I["players"][number]["combat_segments"][number]["healing_by_ability"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget>]: never; })[] & { [K_5 in Exclude<keyof I["players"][number]["combat_segments"][number]["healing_by_ability"][number]["by_hero_targets"], keyof {
                        hero_id?: number;
                        healing?: number;
                    }[]>]: never; };
                } & { [K_6 in Exclude<keyof I["players"][number]["combat_segments"][number]["healing_by_ability"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility>]: never; })[] & { [K_7 in Exclude<keyof I["players"][number]["combat_segments"][number]["healing_by_ability"], keyof {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[];
                }[]>]: never; };
            } & { [K_8 in Exclude<keyof I["players"][number]["combat_segments"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment>]: never; })[] & { [K_9 in Exclude<keyof I["players"][number]["combat_segments"], keyof {
                game_time?: number;
                damage_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[];
                }[];
                healing_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[];
                }[];
            }[]>]: never; };
            damage_unit_names?: string[] & string[] & { [K_10 in Exclude<keyof I["players"][number]["damage_unit_names"], keyof string[]>]: never; };
            buff_records?: {
                buff_ability_id?: number;
                buff_modifier_name?: string;
                by_hero_targets?: {
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                }[];
            }[] & ({
                buff_ability_id?: number;
                buff_modifier_name?: string;
                by_hero_targets?: {
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                }[];
            } & {
                buff_ability_id?: number;
                buff_modifier_name?: string;
                by_hero_targets?: {
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                }[] & ({
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                } & {
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                } & { [K_11 in Exclude<keyof I["players"][number]["buff_records"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget>]: never; })[] & { [K_12 in Exclude<keyof I["players"][number]["buff_records"][number]["by_hero_targets"], keyof {
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                }[]>]: never; };
            } & { [K_13 in Exclude<keyof I["players"][number]["buff_records"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_BuffRecord>]: never; })[] & { [K_14 in Exclude<keyof I["players"][number]["buff_records"], keyof {
                buff_ability_id?: number;
                buff_modifier_name?: string;
                by_hero_targets?: {
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                }[];
            }[]>]: never; };
            graph_kills?: number[] & number[] & { [K_15 in Exclude<keyof I["players"][number]["graph_kills"], keyof number[]>]: never; };
            graph_deaths?: number[] & number[] & { [K_16 in Exclude<keyof I["players"][number]["graph_deaths"], keyof number[]>]: never; };
            graph_assists?: number[] & number[] & { [K_17 in Exclude<keyof I["players"][number]["graph_assists"], keyof number[]>]: never; };
            graph_lasthits?: number[] & number[] & { [K_18 in Exclude<keyof I["players"][number]["graph_lasthits"], keyof number[]>]: never; };
            graph_denies?: number[] & number[] & { [K_19 in Exclude<keyof I["players"][number]["graph_denies"], keyof number[]>]: never; };
            gold_received?: {
                creep?: number;
                heroes?: number;
                bounty_runes?: number;
                passive?: number;
                buildings?: number;
                abilities?: number;
                wards?: number;
                other?: number;
            } & {
                creep?: number;
                heroes?: number;
                bounty_runes?: number;
                passive?: number;
                buildings?: number;
                abilities?: number;
                wards?: number;
                other?: number;
            } & { [K_20 in Exclude<keyof I["players"][number]["gold_received"], keyof CDOTAMatchPrivateMetadata_Team_Player_GoldReceived>]: never; };
            xp_received?: {
                creep?: number;
                heroes?: number;
                roshan?: number;
                tome_of_knowledge?: number;
                outpost?: number;
                other?: number;
            } & {
                creep?: number;
                heroes?: number;
                roshan?: number;
                tome_of_knowledge?: number;
                outpost?: number;
                other?: number;
            } & { [K_21 in Exclude<keyof I["players"][number]["xp_received"], keyof CDOTAMatchPrivateMetadata_Team_Player_XPReceived>]: never; };
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
        } & { [K_22 in Exclude<keyof I["players"][number], keyof CDOTAMatchPrivateMetadata_Team_Player>]: never; })[] & { [K_23 in Exclude<keyof I["players"], keyof {
            player_slot?: number;
            position_stream?: string;
            combat_segments?: {
                game_time?: number;
                damage_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[];
                }[];
                healing_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[];
                }[];
            }[];
            damage_unit_names?: string[];
            buff_records?: {
                buff_ability_id?: number;
                buff_modifier_name?: string;
                by_hero_targets?: {
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                }[];
            }[];
            graph_kills?: number[];
            graph_deaths?: number[];
            graph_assists?: number[];
            graph_lasthits?: number[];
            graph_denies?: number[];
            gold_received?: {
                creep?: number;
                heroes?: number;
                bounty_runes?: number;
                passive?: number;
                buildings?: number;
                abilities?: number;
                wards?: number;
                other?: number;
            };
            xp_received?: {
                creep?: number;
                heroes?: number;
                roshan?: number;
                tome_of_knowledge?: number;
                outpost?: number;
                other?: number;
            };
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
        }[]>]: never; };
        buildings?: {
            unit_name?: string;
            position_quant_x?: number;
            position_quant_y?: number;
            death_time?: number;
        }[] & ({
            unit_name?: string;
            position_quant_x?: number;
            position_quant_y?: number;
            death_time?: number;
        } & {
            unit_name?: string;
            position_quant_x?: number;
            position_quant_y?: number;
            death_time?: number;
        } & { [K_24 in Exclude<keyof I["buildings"][number], keyof CDOTAMatchPrivateMetadata_Team_Building>]: never; })[] & { [K_25 in Exclude<keyof I["buildings"], keyof {
            unit_name?: string;
            position_quant_x?: number;
            position_quant_y?: number;
            death_time?: number;
        }[]>]: never; };
    } & { [K_26 in Exclude<keyof I, keyof CDOTAMatchPrivateMetadata_Team>]: never; }>(base?: I): CDOTAMatchPrivateMetadata_Team;
    fromPartial<I_1 extends {
        dota_team?: number;
        players?: {
            player_slot?: number;
            position_stream?: string;
            combat_segments?: {
                game_time?: number;
                damage_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[];
                }[];
                healing_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[];
                }[];
            }[];
            damage_unit_names?: string[];
            buff_records?: {
                buff_ability_id?: number;
                buff_modifier_name?: string;
                by_hero_targets?: {
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                }[];
            }[];
            graph_kills?: number[];
            graph_deaths?: number[];
            graph_assists?: number[];
            graph_lasthits?: number[];
            graph_denies?: number[];
            gold_received?: {
                creep?: number;
                heroes?: number;
                bounty_runes?: number;
                passive?: number;
                buildings?: number;
                abilities?: number;
                wards?: number;
                other?: number;
            };
            xp_received?: {
                creep?: number;
                heroes?: number;
                roshan?: number;
                tome_of_knowledge?: number;
                outpost?: number;
                other?: number;
            };
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
        }[];
        buildings?: {
            unit_name?: string;
            position_quant_x?: number;
            position_quant_y?: number;
            death_time?: number;
        }[];
    } & {
        dota_team?: number;
        players?: {
            player_slot?: number;
            position_stream?: string;
            combat_segments?: {
                game_time?: number;
                damage_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[];
                }[];
                healing_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[];
                }[];
            }[];
            damage_unit_names?: string[];
            buff_records?: {
                buff_ability_id?: number;
                buff_modifier_name?: string;
                by_hero_targets?: {
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                }[];
            }[];
            graph_kills?: number[];
            graph_deaths?: number[];
            graph_assists?: number[];
            graph_lasthits?: number[];
            graph_denies?: number[];
            gold_received?: {
                creep?: number;
                heroes?: number;
                bounty_runes?: number;
                passive?: number;
                buildings?: number;
                abilities?: number;
                wards?: number;
                other?: number;
            };
            xp_received?: {
                creep?: number;
                heroes?: number;
                roshan?: number;
                tome_of_knowledge?: number;
                outpost?: number;
                other?: number;
            };
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
        }[] & ({
            player_slot?: number;
            position_stream?: string;
            combat_segments?: {
                game_time?: number;
                damage_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[];
                }[];
                healing_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[];
                }[];
            }[];
            damage_unit_names?: string[];
            buff_records?: {
                buff_ability_id?: number;
                buff_modifier_name?: string;
                by_hero_targets?: {
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                }[];
            }[];
            graph_kills?: number[];
            graph_deaths?: number[];
            graph_assists?: number[];
            graph_lasthits?: number[];
            graph_denies?: number[];
            gold_received?: {
                creep?: number;
                heroes?: number;
                bounty_runes?: number;
                passive?: number;
                buildings?: number;
                abilities?: number;
                wards?: number;
                other?: number;
            };
            xp_received?: {
                creep?: number;
                heroes?: number;
                roshan?: number;
                tome_of_knowledge?: number;
                outpost?: number;
                other?: number;
            };
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
        } & {
            player_slot?: number;
            position_stream?: string;
            combat_segments?: {
                game_time?: number;
                damage_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[];
                }[];
                healing_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[];
                }[];
            }[] & ({
                game_time?: number;
                damage_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[];
                }[];
                healing_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[];
                }[];
            } & {
                game_time?: number;
                damage_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[];
                }[] & ({
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[];
                } & {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[] & ({
                        hero_id?: number;
                        damage?: number;
                    } & {
                        hero_id?: number;
                        damage?: number;
                    } & { [K_27 in Exclude<keyof I_1["players"][number]["combat_segments"][number]["damage_by_ability"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget>]: never; })[] & { [K_28 in Exclude<keyof I_1["players"][number]["combat_segments"][number]["damage_by_ability"][number]["by_hero_targets"], keyof {
                        hero_id?: number;
                        damage?: number;
                    }[]>]: never; };
                } & { [K_29 in Exclude<keyof I_1["players"][number]["combat_segments"][number]["damage_by_ability"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility>]: never; })[] & { [K_30 in Exclude<keyof I_1["players"][number]["combat_segments"][number]["damage_by_ability"], keyof {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[];
                }[]>]: never; };
                healing_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[];
                }[] & ({
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[];
                } & {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[] & ({
                        hero_id?: number;
                        healing?: number;
                    } & {
                        hero_id?: number;
                        healing?: number;
                    } & { [K_31 in Exclude<keyof I_1["players"][number]["combat_segments"][number]["healing_by_ability"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget>]: never; })[] & { [K_32 in Exclude<keyof I_1["players"][number]["combat_segments"][number]["healing_by_ability"][number]["by_hero_targets"], keyof {
                        hero_id?: number;
                        healing?: number;
                    }[]>]: never; };
                } & { [K_33 in Exclude<keyof I_1["players"][number]["combat_segments"][number]["healing_by_ability"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility>]: never; })[] & { [K_34 in Exclude<keyof I_1["players"][number]["combat_segments"][number]["healing_by_ability"], keyof {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[];
                }[]>]: never; };
            } & { [K_35 in Exclude<keyof I_1["players"][number]["combat_segments"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment>]: never; })[] & { [K_36 in Exclude<keyof I_1["players"][number]["combat_segments"], keyof {
                game_time?: number;
                damage_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[];
                }[];
                healing_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[];
                }[];
            }[]>]: never; };
            damage_unit_names?: string[] & string[] & { [K_37 in Exclude<keyof I_1["players"][number]["damage_unit_names"], keyof string[]>]: never; };
            buff_records?: {
                buff_ability_id?: number;
                buff_modifier_name?: string;
                by_hero_targets?: {
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                }[];
            }[] & ({
                buff_ability_id?: number;
                buff_modifier_name?: string;
                by_hero_targets?: {
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                }[];
            } & {
                buff_ability_id?: number;
                buff_modifier_name?: string;
                by_hero_targets?: {
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                }[] & ({
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                } & {
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                } & { [K_38 in Exclude<keyof I_1["players"][number]["buff_records"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget>]: never; })[] & { [K_39 in Exclude<keyof I_1["players"][number]["buff_records"][number]["by_hero_targets"], keyof {
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                }[]>]: never; };
            } & { [K_40 in Exclude<keyof I_1["players"][number]["buff_records"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_BuffRecord>]: never; })[] & { [K_41 in Exclude<keyof I_1["players"][number]["buff_records"], keyof {
                buff_ability_id?: number;
                buff_modifier_name?: string;
                by_hero_targets?: {
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                }[];
            }[]>]: never; };
            graph_kills?: number[] & number[] & { [K_42 in Exclude<keyof I_1["players"][number]["graph_kills"], keyof number[]>]: never; };
            graph_deaths?: number[] & number[] & { [K_43 in Exclude<keyof I_1["players"][number]["graph_deaths"], keyof number[]>]: never; };
            graph_assists?: number[] & number[] & { [K_44 in Exclude<keyof I_1["players"][number]["graph_assists"], keyof number[]>]: never; };
            graph_lasthits?: number[] & number[] & { [K_45 in Exclude<keyof I_1["players"][number]["graph_lasthits"], keyof number[]>]: never; };
            graph_denies?: number[] & number[] & { [K_46 in Exclude<keyof I_1["players"][number]["graph_denies"], keyof number[]>]: never; };
            gold_received?: {
                creep?: number;
                heroes?: number;
                bounty_runes?: number;
                passive?: number;
                buildings?: number;
                abilities?: number;
                wards?: number;
                other?: number;
            } & {
                creep?: number;
                heroes?: number;
                bounty_runes?: number;
                passive?: number;
                buildings?: number;
                abilities?: number;
                wards?: number;
                other?: number;
            } & { [K_47 in Exclude<keyof I_1["players"][number]["gold_received"], keyof CDOTAMatchPrivateMetadata_Team_Player_GoldReceived>]: never; };
            xp_received?: {
                creep?: number;
                heroes?: number;
                roshan?: number;
                tome_of_knowledge?: number;
                outpost?: number;
                other?: number;
            } & {
                creep?: number;
                heroes?: number;
                roshan?: number;
                tome_of_knowledge?: number;
                outpost?: number;
                other?: number;
            } & { [K_48 in Exclude<keyof I_1["players"][number]["xp_received"], keyof CDOTAMatchPrivateMetadata_Team_Player_XPReceived>]: never; };
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
        } & { [K_49 in Exclude<keyof I_1["players"][number], keyof CDOTAMatchPrivateMetadata_Team_Player>]: never; })[] & { [K_50 in Exclude<keyof I_1["players"], keyof {
            player_slot?: number;
            position_stream?: string;
            combat_segments?: {
                game_time?: number;
                damage_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        damage?: number;
                    }[];
                }[];
                healing_by_ability?: {
                    source_unit_index?: number;
                    ability_id?: number;
                    by_hero_targets?: {
                        hero_id?: number;
                        healing?: number;
                    }[];
                }[];
            }[];
            damage_unit_names?: string[];
            buff_records?: {
                buff_ability_id?: number;
                buff_modifier_name?: string;
                by_hero_targets?: {
                    hero_id?: number;
                    elapsed_duration?: number;
                    is_hidden?: boolean;
                }[];
            }[];
            graph_kills?: number[];
            graph_deaths?: number[];
            graph_assists?: number[];
            graph_lasthits?: number[];
            graph_denies?: number[];
            gold_received?: {
                creep?: number;
                heroes?: number;
                bounty_runes?: number;
                passive?: number;
                buildings?: number;
                abilities?: number;
                wards?: number;
                other?: number;
            };
            xp_received?: {
                creep?: number;
                heroes?: number;
                roshan?: number;
                tome_of_knowledge?: number;
                outpost?: number;
                other?: number;
            };
            team_number?: DOTA_GC_TEAM;
            team_slot?: number;
        }[]>]: never; };
        buildings?: {
            unit_name?: string;
            position_quant_x?: number;
            position_quant_y?: number;
            death_time?: number;
        }[] & ({
            unit_name?: string;
            position_quant_x?: number;
            position_quant_y?: number;
            death_time?: number;
        } & {
            unit_name?: string;
            position_quant_x?: number;
            position_quant_y?: number;
            death_time?: number;
        } & { [K_51 in Exclude<keyof I_1["buildings"][number], keyof CDOTAMatchPrivateMetadata_Team_Building>]: never; })[] & { [K_52 in Exclude<keyof I_1["buildings"], keyof {
            unit_name?: string;
            position_quant_x?: number;
            position_quant_y?: number;
            death_time?: number;
        }[]>]: never; };
    } & { [K_53 in Exclude<keyof I_1, keyof CDOTAMatchPrivateMetadata_Team>]: never; }>(object: I_1): CDOTAMatchPrivateMetadata_Team;
};
export declare const CDOTAMatchPrivateMetadata_Team_Player: {
    fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Player;
    toJSON(message: CDOTAMatchPrivateMetadata_Team_Player): unknown;
    create<I extends {
        player_slot?: number;
        position_stream?: string;
        combat_segments?: {
            game_time?: number;
            damage_by_ability?: {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    damage?: number;
                }[];
            }[];
            healing_by_ability?: {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    healing?: number;
                }[];
            }[];
        }[];
        damage_unit_names?: string[];
        buff_records?: {
            buff_ability_id?: number;
            buff_modifier_name?: string;
            by_hero_targets?: {
                hero_id?: number;
                elapsed_duration?: number;
                is_hidden?: boolean;
            }[];
        }[];
        graph_kills?: number[];
        graph_deaths?: number[];
        graph_assists?: number[];
        graph_lasthits?: number[];
        graph_denies?: number[];
        gold_received?: {
            creep?: number;
            heroes?: number;
            bounty_runes?: number;
            passive?: number;
            buildings?: number;
            abilities?: number;
            wards?: number;
            other?: number;
        };
        xp_received?: {
            creep?: number;
            heroes?: number;
            roshan?: number;
            tome_of_knowledge?: number;
            outpost?: number;
            other?: number;
        };
        team_number?: DOTA_GC_TEAM;
        team_slot?: number;
    } & {
        player_slot?: number;
        position_stream?: string;
        combat_segments?: {
            game_time?: number;
            damage_by_ability?: {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    damage?: number;
                }[];
            }[];
            healing_by_ability?: {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    healing?: number;
                }[];
            }[];
        }[] & ({
            game_time?: number;
            damage_by_ability?: {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    damage?: number;
                }[];
            }[];
            healing_by_ability?: {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    healing?: number;
                }[];
            }[];
        } & {
            game_time?: number;
            damage_by_ability?: {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    damage?: number;
                }[];
            }[] & ({
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    damage?: number;
                }[];
            } & {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    damage?: number;
                }[] & ({
                    hero_id?: number;
                    damage?: number;
                } & {
                    hero_id?: number;
                    damage?: number;
                } & { [K in Exclude<keyof I["combat_segments"][number]["damage_by_ability"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget>]: never; })[] & { [K_1 in Exclude<keyof I["combat_segments"][number]["damage_by_ability"][number]["by_hero_targets"], keyof {
                    hero_id?: number;
                    damage?: number;
                }[]>]: never; };
            } & { [K_2 in Exclude<keyof I["combat_segments"][number]["damage_by_ability"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility>]: never; })[] & { [K_3 in Exclude<keyof I["combat_segments"][number]["damage_by_ability"], keyof {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    damage?: number;
                }[];
            }[]>]: never; };
            healing_by_ability?: {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    healing?: number;
                }[];
            }[] & ({
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    healing?: number;
                }[];
            } & {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    healing?: number;
                }[] & ({
                    hero_id?: number;
                    healing?: number;
                } & {
                    hero_id?: number;
                    healing?: number;
                } & { [K_4 in Exclude<keyof I["combat_segments"][number]["healing_by_ability"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget>]: never; })[] & { [K_5 in Exclude<keyof I["combat_segments"][number]["healing_by_ability"][number]["by_hero_targets"], keyof {
                    hero_id?: number;
                    healing?: number;
                }[]>]: never; };
            } & { [K_6 in Exclude<keyof I["combat_segments"][number]["healing_by_ability"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility>]: never; })[] & { [K_7 in Exclude<keyof I["combat_segments"][number]["healing_by_ability"], keyof {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    healing?: number;
                }[];
            }[]>]: never; };
        } & { [K_8 in Exclude<keyof I["combat_segments"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment>]: never; })[] & { [K_9 in Exclude<keyof I["combat_segments"], keyof {
            game_time?: number;
            damage_by_ability?: {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    damage?: number;
                }[];
            }[];
            healing_by_ability?: {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    healing?: number;
                }[];
            }[];
        }[]>]: never; };
        damage_unit_names?: string[] & string[] & { [K_10 in Exclude<keyof I["damage_unit_names"], keyof string[]>]: never; };
        buff_records?: {
            buff_ability_id?: number;
            buff_modifier_name?: string;
            by_hero_targets?: {
                hero_id?: number;
                elapsed_duration?: number;
                is_hidden?: boolean;
            }[];
        }[] & ({
            buff_ability_id?: number;
            buff_modifier_name?: string;
            by_hero_targets?: {
                hero_id?: number;
                elapsed_duration?: number;
                is_hidden?: boolean;
            }[];
        } & {
            buff_ability_id?: number;
            buff_modifier_name?: string;
            by_hero_targets?: {
                hero_id?: number;
                elapsed_duration?: number;
                is_hidden?: boolean;
            }[] & ({
                hero_id?: number;
                elapsed_duration?: number;
                is_hidden?: boolean;
            } & {
                hero_id?: number;
                elapsed_duration?: number;
                is_hidden?: boolean;
            } & { [K_11 in Exclude<keyof I["buff_records"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget>]: never; })[] & { [K_12 in Exclude<keyof I["buff_records"][number]["by_hero_targets"], keyof {
                hero_id?: number;
                elapsed_duration?: number;
                is_hidden?: boolean;
            }[]>]: never; };
        } & { [K_13 in Exclude<keyof I["buff_records"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_BuffRecord>]: never; })[] & { [K_14 in Exclude<keyof I["buff_records"], keyof {
            buff_ability_id?: number;
            buff_modifier_name?: string;
            by_hero_targets?: {
                hero_id?: number;
                elapsed_duration?: number;
                is_hidden?: boolean;
            }[];
        }[]>]: never; };
        graph_kills?: number[] & number[] & { [K_15 in Exclude<keyof I["graph_kills"], keyof number[]>]: never; };
        graph_deaths?: number[] & number[] & { [K_16 in Exclude<keyof I["graph_deaths"], keyof number[]>]: never; };
        graph_assists?: number[] & number[] & { [K_17 in Exclude<keyof I["graph_assists"], keyof number[]>]: never; };
        graph_lasthits?: number[] & number[] & { [K_18 in Exclude<keyof I["graph_lasthits"], keyof number[]>]: never; };
        graph_denies?: number[] & number[] & { [K_19 in Exclude<keyof I["graph_denies"], keyof number[]>]: never; };
        gold_received?: {
            creep?: number;
            heroes?: number;
            bounty_runes?: number;
            passive?: number;
            buildings?: number;
            abilities?: number;
            wards?: number;
            other?: number;
        } & {
            creep?: number;
            heroes?: number;
            bounty_runes?: number;
            passive?: number;
            buildings?: number;
            abilities?: number;
            wards?: number;
            other?: number;
        } & { [K_20 in Exclude<keyof I["gold_received"], keyof CDOTAMatchPrivateMetadata_Team_Player_GoldReceived>]: never; };
        xp_received?: {
            creep?: number;
            heroes?: number;
            roshan?: number;
            tome_of_knowledge?: number;
            outpost?: number;
            other?: number;
        } & {
            creep?: number;
            heroes?: number;
            roshan?: number;
            tome_of_knowledge?: number;
            outpost?: number;
            other?: number;
        } & { [K_21 in Exclude<keyof I["xp_received"], keyof CDOTAMatchPrivateMetadata_Team_Player_XPReceived>]: never; };
        team_number?: DOTA_GC_TEAM;
        team_slot?: number;
    } & { [K_22 in Exclude<keyof I, keyof CDOTAMatchPrivateMetadata_Team_Player>]: never; }>(base?: I): CDOTAMatchPrivateMetadata_Team_Player;
    fromPartial<I_1 extends {
        player_slot?: number;
        position_stream?: string;
        combat_segments?: {
            game_time?: number;
            damage_by_ability?: {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    damage?: number;
                }[];
            }[];
            healing_by_ability?: {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    healing?: number;
                }[];
            }[];
        }[];
        damage_unit_names?: string[];
        buff_records?: {
            buff_ability_id?: number;
            buff_modifier_name?: string;
            by_hero_targets?: {
                hero_id?: number;
                elapsed_duration?: number;
                is_hidden?: boolean;
            }[];
        }[];
        graph_kills?: number[];
        graph_deaths?: number[];
        graph_assists?: number[];
        graph_lasthits?: number[];
        graph_denies?: number[];
        gold_received?: {
            creep?: number;
            heroes?: number;
            bounty_runes?: number;
            passive?: number;
            buildings?: number;
            abilities?: number;
            wards?: number;
            other?: number;
        };
        xp_received?: {
            creep?: number;
            heroes?: number;
            roshan?: number;
            tome_of_knowledge?: number;
            outpost?: number;
            other?: number;
        };
        team_number?: DOTA_GC_TEAM;
        team_slot?: number;
    } & {
        player_slot?: number;
        position_stream?: string;
        combat_segments?: {
            game_time?: number;
            damage_by_ability?: {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    damage?: number;
                }[];
            }[];
            healing_by_ability?: {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    healing?: number;
                }[];
            }[];
        }[] & ({
            game_time?: number;
            damage_by_ability?: {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    damage?: number;
                }[];
            }[];
            healing_by_ability?: {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    healing?: number;
                }[];
            }[];
        } & {
            game_time?: number;
            damage_by_ability?: {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    damage?: number;
                }[];
            }[] & ({
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    damage?: number;
                }[];
            } & {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    damage?: number;
                }[] & ({
                    hero_id?: number;
                    damage?: number;
                } & {
                    hero_id?: number;
                    damage?: number;
                } & { [K_23 in Exclude<keyof I_1["combat_segments"][number]["damage_by_ability"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget>]: never; })[] & { [K_24 in Exclude<keyof I_1["combat_segments"][number]["damage_by_ability"][number]["by_hero_targets"], keyof {
                    hero_id?: number;
                    damage?: number;
                }[]>]: never; };
            } & { [K_25 in Exclude<keyof I_1["combat_segments"][number]["damage_by_ability"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility>]: never; })[] & { [K_26 in Exclude<keyof I_1["combat_segments"][number]["damage_by_ability"], keyof {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    damage?: number;
                }[];
            }[]>]: never; };
            healing_by_ability?: {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    healing?: number;
                }[];
            }[] & ({
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    healing?: number;
                }[];
            } & {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    healing?: number;
                }[] & ({
                    hero_id?: number;
                    healing?: number;
                } & {
                    hero_id?: number;
                    healing?: number;
                } & { [K_27 in Exclude<keyof I_1["combat_segments"][number]["healing_by_ability"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget>]: never; })[] & { [K_28 in Exclude<keyof I_1["combat_segments"][number]["healing_by_ability"][number]["by_hero_targets"], keyof {
                    hero_id?: number;
                    healing?: number;
                }[]>]: never; };
            } & { [K_29 in Exclude<keyof I_1["combat_segments"][number]["healing_by_ability"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility>]: never; })[] & { [K_30 in Exclude<keyof I_1["combat_segments"][number]["healing_by_ability"], keyof {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    healing?: number;
                }[];
            }[]>]: never; };
        } & { [K_31 in Exclude<keyof I_1["combat_segments"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment>]: never; })[] & { [K_32 in Exclude<keyof I_1["combat_segments"], keyof {
            game_time?: number;
            damage_by_ability?: {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    damage?: number;
                }[];
            }[];
            healing_by_ability?: {
                source_unit_index?: number;
                ability_id?: number;
                by_hero_targets?: {
                    hero_id?: number;
                    healing?: number;
                }[];
            }[];
        }[]>]: never; };
        damage_unit_names?: string[] & string[] & { [K_33 in Exclude<keyof I_1["damage_unit_names"], keyof string[]>]: never; };
        buff_records?: {
            buff_ability_id?: number;
            buff_modifier_name?: string;
            by_hero_targets?: {
                hero_id?: number;
                elapsed_duration?: number;
                is_hidden?: boolean;
            }[];
        }[] & ({
            buff_ability_id?: number;
            buff_modifier_name?: string;
            by_hero_targets?: {
                hero_id?: number;
                elapsed_duration?: number;
                is_hidden?: boolean;
            }[];
        } & {
            buff_ability_id?: number;
            buff_modifier_name?: string;
            by_hero_targets?: {
                hero_id?: number;
                elapsed_duration?: number;
                is_hidden?: boolean;
            }[] & ({
                hero_id?: number;
                elapsed_duration?: number;
                is_hidden?: boolean;
            } & {
                hero_id?: number;
                elapsed_duration?: number;
                is_hidden?: boolean;
            } & { [K_34 in Exclude<keyof I_1["buff_records"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget>]: never; })[] & { [K_35 in Exclude<keyof I_1["buff_records"][number]["by_hero_targets"], keyof {
                hero_id?: number;
                elapsed_duration?: number;
                is_hidden?: boolean;
            }[]>]: never; };
        } & { [K_36 in Exclude<keyof I_1["buff_records"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_BuffRecord>]: never; })[] & { [K_37 in Exclude<keyof I_1["buff_records"], keyof {
            buff_ability_id?: number;
            buff_modifier_name?: string;
            by_hero_targets?: {
                hero_id?: number;
                elapsed_duration?: number;
                is_hidden?: boolean;
            }[];
        }[]>]: never; };
        graph_kills?: number[] & number[] & { [K_38 in Exclude<keyof I_1["graph_kills"], keyof number[]>]: never; };
        graph_deaths?: number[] & number[] & { [K_39 in Exclude<keyof I_1["graph_deaths"], keyof number[]>]: never; };
        graph_assists?: number[] & number[] & { [K_40 in Exclude<keyof I_1["graph_assists"], keyof number[]>]: never; };
        graph_lasthits?: number[] & number[] & { [K_41 in Exclude<keyof I_1["graph_lasthits"], keyof number[]>]: never; };
        graph_denies?: number[] & number[] & { [K_42 in Exclude<keyof I_1["graph_denies"], keyof number[]>]: never; };
        gold_received?: {
            creep?: number;
            heroes?: number;
            bounty_runes?: number;
            passive?: number;
            buildings?: number;
            abilities?: number;
            wards?: number;
            other?: number;
        } & {
            creep?: number;
            heroes?: number;
            bounty_runes?: number;
            passive?: number;
            buildings?: number;
            abilities?: number;
            wards?: number;
            other?: number;
        } & { [K_43 in Exclude<keyof I_1["gold_received"], keyof CDOTAMatchPrivateMetadata_Team_Player_GoldReceived>]: never; };
        xp_received?: {
            creep?: number;
            heroes?: number;
            roshan?: number;
            tome_of_knowledge?: number;
            outpost?: number;
            other?: number;
        } & {
            creep?: number;
            heroes?: number;
            roshan?: number;
            tome_of_knowledge?: number;
            outpost?: number;
            other?: number;
        } & { [K_44 in Exclude<keyof I_1["xp_received"], keyof CDOTAMatchPrivateMetadata_Team_Player_XPReceived>]: never; };
        team_number?: DOTA_GC_TEAM;
        team_slot?: number;
    } & { [K_45 in Exclude<keyof I_1, keyof CDOTAMatchPrivateMetadata_Team_Player>]: never; }>(object: I_1): CDOTAMatchPrivateMetadata_Team_Player;
};
export declare const CDOTAMatchPrivateMetadata_Team_Player_CombatSegment: {
    fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment;
    toJSON(message: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment): unknown;
    create<I extends {
        game_time?: number;
        damage_by_ability?: {
            source_unit_index?: number;
            ability_id?: number;
            by_hero_targets?: {
                hero_id?: number;
                damage?: number;
            }[];
        }[];
        healing_by_ability?: {
            source_unit_index?: number;
            ability_id?: number;
            by_hero_targets?: {
                hero_id?: number;
                healing?: number;
            }[];
        }[];
    } & {
        game_time?: number;
        damage_by_ability?: {
            source_unit_index?: number;
            ability_id?: number;
            by_hero_targets?: {
                hero_id?: number;
                damage?: number;
            }[];
        }[] & ({
            source_unit_index?: number;
            ability_id?: number;
            by_hero_targets?: {
                hero_id?: number;
                damage?: number;
            }[];
        } & {
            source_unit_index?: number;
            ability_id?: number;
            by_hero_targets?: {
                hero_id?: number;
                damage?: number;
            }[] & ({
                hero_id?: number;
                damage?: number;
            } & {
                hero_id?: number;
                damage?: number;
            } & { [K in Exclude<keyof I["damage_by_ability"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget>]: never; })[] & { [K_1 in Exclude<keyof I["damage_by_ability"][number]["by_hero_targets"], keyof {
                hero_id?: number;
                damage?: number;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["damage_by_ability"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility>]: never; })[] & { [K_3 in Exclude<keyof I["damage_by_ability"], keyof {
            source_unit_index?: number;
            ability_id?: number;
            by_hero_targets?: {
                hero_id?: number;
                damage?: number;
            }[];
        }[]>]: never; };
        healing_by_ability?: {
            source_unit_index?: number;
            ability_id?: number;
            by_hero_targets?: {
                hero_id?: number;
                healing?: number;
            }[];
        }[] & ({
            source_unit_index?: number;
            ability_id?: number;
            by_hero_targets?: {
                hero_id?: number;
                healing?: number;
            }[];
        } & {
            source_unit_index?: number;
            ability_id?: number;
            by_hero_targets?: {
                hero_id?: number;
                healing?: number;
            }[] & ({
                hero_id?: number;
                healing?: number;
            } & {
                hero_id?: number;
                healing?: number;
            } & { [K_4 in Exclude<keyof I["healing_by_ability"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget>]: never; })[] & { [K_5 in Exclude<keyof I["healing_by_ability"][number]["by_hero_targets"], keyof {
                hero_id?: number;
                healing?: number;
            }[]>]: never; };
        } & { [K_6 in Exclude<keyof I["healing_by_ability"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility>]: never; })[] & { [K_7 in Exclude<keyof I["healing_by_ability"], keyof {
            source_unit_index?: number;
            ability_id?: number;
            by_hero_targets?: {
                hero_id?: number;
                healing?: number;
            }[];
        }[]>]: never; };
    } & { [K_8 in Exclude<keyof I, keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment>]: never; }>(base?: I): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment;
    fromPartial<I_1 extends {
        game_time?: number;
        damage_by_ability?: {
            source_unit_index?: number;
            ability_id?: number;
            by_hero_targets?: {
                hero_id?: number;
                damage?: number;
            }[];
        }[];
        healing_by_ability?: {
            source_unit_index?: number;
            ability_id?: number;
            by_hero_targets?: {
                hero_id?: number;
                healing?: number;
            }[];
        }[];
    } & {
        game_time?: number;
        damage_by_ability?: {
            source_unit_index?: number;
            ability_id?: number;
            by_hero_targets?: {
                hero_id?: number;
                damage?: number;
            }[];
        }[] & ({
            source_unit_index?: number;
            ability_id?: number;
            by_hero_targets?: {
                hero_id?: number;
                damage?: number;
            }[];
        } & {
            source_unit_index?: number;
            ability_id?: number;
            by_hero_targets?: {
                hero_id?: number;
                damage?: number;
            }[] & ({
                hero_id?: number;
                damage?: number;
            } & {
                hero_id?: number;
                damage?: number;
            } & { [K_9 in Exclude<keyof I_1["damage_by_ability"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget>]: never; })[] & { [K_10 in Exclude<keyof I_1["damage_by_ability"][number]["by_hero_targets"], keyof {
                hero_id?: number;
                damage?: number;
            }[]>]: never; };
        } & { [K_11 in Exclude<keyof I_1["damage_by_ability"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility>]: never; })[] & { [K_12 in Exclude<keyof I_1["damage_by_ability"], keyof {
            source_unit_index?: number;
            ability_id?: number;
            by_hero_targets?: {
                hero_id?: number;
                damage?: number;
            }[];
        }[]>]: never; };
        healing_by_ability?: {
            source_unit_index?: number;
            ability_id?: number;
            by_hero_targets?: {
                hero_id?: number;
                healing?: number;
            }[];
        }[] & ({
            source_unit_index?: number;
            ability_id?: number;
            by_hero_targets?: {
                hero_id?: number;
                healing?: number;
            }[];
        } & {
            source_unit_index?: number;
            ability_id?: number;
            by_hero_targets?: {
                hero_id?: number;
                healing?: number;
            }[] & ({
                hero_id?: number;
                healing?: number;
            } & {
                hero_id?: number;
                healing?: number;
            } & { [K_13 in Exclude<keyof I_1["healing_by_ability"][number]["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget>]: never; })[] & { [K_14 in Exclude<keyof I_1["healing_by_ability"][number]["by_hero_targets"], keyof {
                hero_id?: number;
                healing?: number;
            }[]>]: never; };
        } & { [K_15 in Exclude<keyof I_1["healing_by_ability"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility>]: never; })[] & { [K_16 in Exclude<keyof I_1["healing_by_ability"], keyof {
            source_unit_index?: number;
            ability_id?: number;
            by_hero_targets?: {
                hero_id?: number;
                healing?: number;
            }[];
        }[]>]: never; };
    } & { [K_17 in Exclude<keyof I_1, keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment>]: never; }>(object: I_1): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment;
};
export declare const CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility: {
    fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility;
    toJSON(message: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility): unknown;
    create<I extends {
        source_unit_index?: number;
        ability_id?: number;
        by_hero_targets?: {
            hero_id?: number;
            damage?: number;
        }[];
    } & {
        source_unit_index?: number;
        ability_id?: number;
        by_hero_targets?: {
            hero_id?: number;
            damage?: number;
        }[] & ({
            hero_id?: number;
            damage?: number;
        } & {
            hero_id?: number;
            damage?: number;
        } & { [K in Exclude<keyof I["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget>]: never; })[] & { [K_1 in Exclude<keyof I["by_hero_targets"], keyof {
            hero_id?: number;
            damage?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility>]: never; }>(base?: I): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility;
    fromPartial<I_1 extends {
        source_unit_index?: number;
        ability_id?: number;
        by_hero_targets?: {
            hero_id?: number;
            damage?: number;
        }[];
    } & {
        source_unit_index?: number;
        ability_id?: number;
        by_hero_targets?: {
            hero_id?: number;
            damage?: number;
        }[] & ({
            hero_id?: number;
            damage?: number;
        } & {
            hero_id?: number;
            damage?: number;
        } & { [K_3 in Exclude<keyof I_1["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget>]: never; })[] & { [K_4 in Exclude<keyof I_1["by_hero_targets"], keyof {
            hero_id?: number;
            damage?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility>]: never; }>(object: I_1): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility;
};
export declare const CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget: {
    fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget;
    toJSON(message: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget): unknown;
    create<I extends {
        hero_id?: number;
        damage?: number;
    } & {
        hero_id?: number;
        damage?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget>]: never; }>(base?: I): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget;
    fromPartial<I_1 extends {
        hero_id?: number;
        damage?: number;
    } & {
        hero_id?: number;
        damage?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget>]: never; }>(object: I_1): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget;
};
export declare const CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility: {
    fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility;
    toJSON(message: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility): unknown;
    create<I extends {
        source_unit_index?: number;
        ability_id?: number;
        by_hero_targets?: {
            hero_id?: number;
            healing?: number;
        }[];
    } & {
        source_unit_index?: number;
        ability_id?: number;
        by_hero_targets?: {
            hero_id?: number;
            healing?: number;
        }[] & ({
            hero_id?: number;
            healing?: number;
        } & {
            hero_id?: number;
            healing?: number;
        } & { [K in Exclude<keyof I["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget>]: never; })[] & { [K_1 in Exclude<keyof I["by_hero_targets"], keyof {
            hero_id?: number;
            healing?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility>]: never; }>(base?: I): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility;
    fromPartial<I_1 extends {
        source_unit_index?: number;
        ability_id?: number;
        by_hero_targets?: {
            hero_id?: number;
            healing?: number;
        }[];
    } & {
        source_unit_index?: number;
        ability_id?: number;
        by_hero_targets?: {
            hero_id?: number;
            healing?: number;
        }[] & ({
            hero_id?: number;
            healing?: number;
        } & {
            hero_id?: number;
            healing?: number;
        } & { [K_3 in Exclude<keyof I_1["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget>]: never; })[] & { [K_4 in Exclude<keyof I_1["by_hero_targets"], keyof {
            hero_id?: number;
            healing?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility>]: never; }>(object: I_1): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility;
};
export declare const CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget: {
    fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget;
    toJSON(message: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget): unknown;
    create<I extends {
        hero_id?: number;
        healing?: number;
    } & {
        hero_id?: number;
        healing?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget>]: never; }>(base?: I): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget;
    fromPartial<I_1 extends {
        hero_id?: number;
        healing?: number;
    } & {
        hero_id?: number;
        healing?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget>]: never; }>(object: I_1): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget;
};
export declare const CDOTAMatchPrivateMetadata_Team_Player_BuffRecord: {
    fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Player_BuffRecord;
    toJSON(message: CDOTAMatchPrivateMetadata_Team_Player_BuffRecord): unknown;
    create<I extends {
        buff_ability_id?: number;
        buff_modifier_name?: string;
        by_hero_targets?: {
            hero_id?: number;
            elapsed_duration?: number;
            is_hidden?: boolean;
        }[];
    } & {
        buff_ability_id?: number;
        buff_modifier_name?: string;
        by_hero_targets?: {
            hero_id?: number;
            elapsed_duration?: number;
            is_hidden?: boolean;
        }[] & ({
            hero_id?: number;
            elapsed_duration?: number;
            is_hidden?: boolean;
        } & {
            hero_id?: number;
            elapsed_duration?: number;
            is_hidden?: boolean;
        } & { [K in Exclude<keyof I["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget>]: never; })[] & { [K_1 in Exclude<keyof I["by_hero_targets"], keyof {
            hero_id?: number;
            elapsed_duration?: number;
            is_hidden?: boolean;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CDOTAMatchPrivateMetadata_Team_Player_BuffRecord>]: never; }>(base?: I): CDOTAMatchPrivateMetadata_Team_Player_BuffRecord;
    fromPartial<I_1 extends {
        buff_ability_id?: number;
        buff_modifier_name?: string;
        by_hero_targets?: {
            hero_id?: number;
            elapsed_duration?: number;
            is_hidden?: boolean;
        }[];
    } & {
        buff_ability_id?: number;
        buff_modifier_name?: string;
        by_hero_targets?: {
            hero_id?: number;
            elapsed_duration?: number;
            is_hidden?: boolean;
        }[] & ({
            hero_id?: number;
            elapsed_duration?: number;
            is_hidden?: boolean;
        } & {
            hero_id?: number;
            elapsed_duration?: number;
            is_hidden?: boolean;
        } & { [K_3 in Exclude<keyof I_1["by_hero_targets"][number], keyof CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget>]: never; })[] & { [K_4 in Exclude<keyof I_1["by_hero_targets"], keyof {
            hero_id?: number;
            elapsed_duration?: number;
            is_hidden?: boolean;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CDOTAMatchPrivateMetadata_Team_Player_BuffRecord>]: never; }>(object: I_1): CDOTAMatchPrivateMetadata_Team_Player_BuffRecord;
};
export declare const CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget: {
    fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget;
    toJSON(message: CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget): unknown;
    create<I extends {
        hero_id?: number;
        elapsed_duration?: number;
        is_hidden?: boolean;
    } & {
        hero_id?: number;
        elapsed_duration?: number;
        is_hidden?: boolean;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget>]: never; }>(base?: I): CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget;
    fromPartial<I_1 extends {
        hero_id?: number;
        elapsed_duration?: number;
        is_hidden?: boolean;
    } & {
        hero_id?: number;
        elapsed_duration?: number;
        is_hidden?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget>]: never; }>(object: I_1): CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget;
};
export declare const CDOTAMatchPrivateMetadata_Team_Player_GoldReceived: {
    fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Player_GoldReceived;
    toJSON(message: CDOTAMatchPrivateMetadata_Team_Player_GoldReceived): unknown;
    create<I extends {
        creep?: number;
        heroes?: number;
        bounty_runes?: number;
        passive?: number;
        buildings?: number;
        abilities?: number;
        wards?: number;
        other?: number;
    } & {
        creep?: number;
        heroes?: number;
        bounty_runes?: number;
        passive?: number;
        buildings?: number;
        abilities?: number;
        wards?: number;
        other?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchPrivateMetadata_Team_Player_GoldReceived>]: never; }>(base?: I): CDOTAMatchPrivateMetadata_Team_Player_GoldReceived;
    fromPartial<I_1 extends {
        creep?: number;
        heroes?: number;
        bounty_runes?: number;
        passive?: number;
        buildings?: number;
        abilities?: number;
        wards?: number;
        other?: number;
    } & {
        creep?: number;
        heroes?: number;
        bounty_runes?: number;
        passive?: number;
        buildings?: number;
        abilities?: number;
        wards?: number;
        other?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchPrivateMetadata_Team_Player_GoldReceived>]: never; }>(object: I_1): CDOTAMatchPrivateMetadata_Team_Player_GoldReceived;
};
export declare const CDOTAMatchPrivateMetadata_Team_Player_XPReceived: {
    fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Player_XPReceived;
    toJSON(message: CDOTAMatchPrivateMetadata_Team_Player_XPReceived): unknown;
    create<I extends {
        creep?: number;
        heroes?: number;
        roshan?: number;
        tome_of_knowledge?: number;
        outpost?: number;
        other?: number;
    } & {
        creep?: number;
        heroes?: number;
        roshan?: number;
        tome_of_knowledge?: number;
        outpost?: number;
        other?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchPrivateMetadata_Team_Player_XPReceived>]: never; }>(base?: I): CDOTAMatchPrivateMetadata_Team_Player_XPReceived;
    fromPartial<I_1 extends {
        creep?: number;
        heroes?: number;
        roshan?: number;
        tome_of_knowledge?: number;
        outpost?: number;
        other?: number;
    } & {
        creep?: number;
        heroes?: number;
        roshan?: number;
        tome_of_knowledge?: number;
        outpost?: number;
        other?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchPrivateMetadata_Team_Player_XPReceived>]: never; }>(object: I_1): CDOTAMatchPrivateMetadata_Team_Player_XPReceived;
};
export declare const CDOTAMatchPrivateMetadata_Team_Building: {
    fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Building;
    toJSON(message: CDOTAMatchPrivateMetadata_Team_Building): unknown;
    create<I extends {
        unit_name?: string;
        position_quant_x?: number;
        position_quant_y?: number;
        death_time?: number;
    } & {
        unit_name?: string;
        position_quant_x?: number;
        position_quant_y?: number;
        death_time?: number;
    } & { [K in Exclude<keyof I, keyof CDOTAMatchPrivateMetadata_Team_Building>]: never; }>(base?: I): CDOTAMatchPrivateMetadata_Team_Building;
    fromPartial<I_1 extends {
        unit_name?: string;
        position_quant_x?: number;
        position_quant_y?: number;
        death_time?: number;
    } & {
        unit_name?: string;
        position_quant_x?: number;
        position_quant_y?: number;
        death_time?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CDOTAMatchPrivateMetadata_Team_Building>]: never; }>(object: I_1): CDOTAMatchPrivateMetadata_Team_Building;
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
