import { CMsgDOTAMatch } from "./dota_gcmessages_common";
import { CDOTAMatchMetadata } from "./dota_match_metadata";
import { ELeagueDivision, ELeagueRegion } from "./dota_shared_enums";
export declare const protobufPackage = "";
export declare enum ETeamFanContentStatus {
    TEAM_FAN_CONTENT_STATUS_INVALID = 0,
    TEAM_FAN_CONTENT_STATUS_PENDING = 1,
    TEAM_FAN_CONTENT_STATUS_EVALUATED = 2,
    UNRECOGNIZED = -1
}
export declare function eTeamFanContentStatusFromJSON(object: any): ETeamFanContentStatus;
export declare function eTeamFanContentStatusToJSON(object: ETeamFanContentStatus): string;
export declare enum ETeamFanContentAssetType {
    k_eFanContentAssetType_LogoPNG = 1,
    k_eFanContentAssetType_LogoSVG = 2,
    k_eFanContentAssetType_Logo3D = 3,
    k_eFanContentAssetType_Players = 4,
    k_eFanContentAssetType_Sprays = 5,
    k_eFanContentAssetType_Wallpapers = 6,
    k_eFanContentAssetType_Emoticons = 7,
    k_eFanContentAssetType_VoiceLines = 8,
    k_eFanContentAssetType_Localization = 9,
    UNRECOGNIZED = -1
}
export declare function eTeamFanContentAssetTypeFromJSON(object: any): ETeamFanContentAssetType;
export declare function eTeamFanContentAssetTypeToJSON(object: ETeamFanContentAssetType): string;
export declare enum ETeamFanContentAssetStatus {
    k_eFanContentAssetStatus_None = 0,
    k_eFanContentAssetStatus_Approved = 1,
    k_eFanContentAssetStatus_Rejected = 2,
    UNRECOGNIZED = -1
}
export declare function eTeamFanContentAssetStatusFromJSON(object: any): ETeamFanContentAssetStatus;
export declare function eTeamFanContentAssetStatusToJSON(object: ETeamFanContentAssetStatus): string;
export interface CMsgArcanaVotes {
    matches: CMsgArcanaVotes_Match[];
    round_time_remaining: number;
    round_number: number;
    voting_state: number;
    is_current_round_calibrating: boolean;
    closest_active_match_id: number;
    event_id: number;
    voting_start_time: number;
}
export declare enum CMsgArcanaVotes_VotingState {
    FINISHED = 0,
    IN_PROGRESS = 1,
    IN_FUTURE = 2,
    UNRECOGNIZED = -1
}
export declare function cMsgArcanaVotes_VotingStateFromJSON(object: any): CMsgArcanaVotes_VotingState;
export declare function cMsgArcanaVotes_VotingStateToJSON(object: CMsgArcanaVotes_VotingState): string;
export interface CMsgArcanaVotes_Match {
    match_id: number;
    hero_id_0: number;
    hero_id_1: number;
    hero_seeding_0: number;
    hero_seeding_1: number;
    vote_count_0: number;
    vote_count_1: number;
    voting_state: number;
    round_number: number;
    is_votes_hidden: boolean;
    calibration_time_remaining: number;
}
export interface CMsgDOTADPCFeed {
    elements: CMsgDOTADPCFeed_Element[];
}
export declare enum CMsgDOTADPCFeed_EFeedElementType {
    FEED_SERIES_RESULT = 1,
    FEED_MATCH_POPULAR = 2,
    FEED_TEAM_UPCOMING_MATCH = 3,
    FEED_TEAM_LEAGUE_RESULT = 4,
    FEED_TEAM_ADD_PLAYER = 5,
    FEED_TEAM_REMOVE_PLAYER = 6,
    FEED_TEAM_DISBAND = 7,
    FEED_LEAGUE_UPCOMING = 8,
    FEED_LEAGUE_CONCLUDED = 9,
    FEED_DPC_STANDINGS = 10,
    FEED_ALERT_PREDICTIONS = 11,
    FEED_ALERT_FANTASY = 12,
    FEED_LEAGUE_LIVE_MATCH = 13,
    FEED_LEAGUE_INPROGRESS_SERIES = 14,
    UNRECOGNIZED = -1
}
export declare function cMsgDOTADPCFeed_EFeedElementTypeFromJSON(object: any): CMsgDOTADPCFeed_EFeedElementType;
export declare function cMsgDOTADPCFeed_EFeedElementTypeToJSON(object: CMsgDOTADPCFeed_EFeedElementType): string;
export interface CMsgDOTADPCFeed_Element {
    type: CMsgDOTADPCFeed_EFeedElementType;
    timestamp: number;
    series_id: number;
    match_id: string;
    team_id: number;
    account_id: number;
    league_id: number;
    node_id: number;
    server_steam_id: string;
    data_1: number;
    data_2: number;
    data_3: number;
    data_4: number;
}
export interface CMsgDOTADPCUserInfo {
    is_plus_subscriber: boolean;
}
export interface CMsgDraftTrivia {
    has_valid_match: boolean;
    match_hero_info: CMsgDraftTrivia_DraftTriviaMatchInfo | undefined;
    match_rank_tier: number;
    end_time: number;
    event_id: number;
    current_match_voted_radiant: boolean;
    previous_result: CMsgDraftTrivia_PreviousResult | undefined;
    current_streak: number;
}
export interface CMsgDraftTrivia_DraftTriviaHeroInfo {
    hero_id: number;
    role: number;
}
export interface CMsgDraftTrivia_DraftTriviaMatchInfo {
    radiant_heroes: CMsgDraftTrivia_DraftTriviaHeroInfo[];
    dire_heroes: CMsgDraftTrivia_DraftTriviaHeroInfo[];
}
export interface CMsgDraftTrivia_PreviousResult {
    voted_correctly: boolean;
    voted_radiant: boolean;
    match_hero_info: CMsgDraftTrivia_DraftTriviaMatchInfo | undefined;
    match_rank_tier: number;
    end_time: number;
    match_id: string;
}
export interface CMsgTeamFanContentAssetStatus {
    asset_type: ETeamFanContentAssetType;
    asset_index: number;
    asset_status: ETeamFanContentAssetStatus;
    crc: number;
}
export interface CMsgTeamFanContentAssetStatusResponse {
    result: CMsgTeamFanContentAssetStatusResponse_EResult;
}
export declare enum CMsgTeamFanContentAssetStatusResponse_EResult {
    k_eSuccess = 0,
    k_eInternalError = 1,
    UNRECOGNIZED = -1
}
export declare function cMsgTeamFanContentAssetStatusResponse_EResultFromJSON(object: any): CMsgTeamFanContentAssetStatusResponse_EResult;
export declare function cMsgTeamFanContentAssetStatusResponse_EResultToJSON(object: CMsgTeamFanContentAssetStatusResponse_EResult): string;
export interface CMsgTeamFanContentStatus {
    team_status_list: CMsgTeamFanContentStatus_TeamStatus[];
}
export interface CMsgTeamFanContentStatus_TeamStatus {
    name: string;
    team_id: number;
    logo_url: string;
    status: ETeamFanContentStatus;
    timestamp: number;
    ugc_logo: string;
    workshop_account_id: number;
    abbreviation: string;
    voiceline_count: number;
    spray_count: number;
    emoticon_count: number;
    wallpaper_count: number;
    comment: string;
    comment_timestamp: number;
    asset_status: CMsgTeamFanContentAssetStatus[];
    email_timestamp: number;
    email_tier: number;
    languages: string;
}
export interface CMsgTeamFanContentAutographStatus {
    team_autographs: CMsgTeamFanContentAutographStatus_TeamStatus[];
}
export interface CMsgTeamFanContentAutographStatus_AutographStatus {
    pro_name: string;
    account_id: number;
    timestamp: number;
    file: string;
}
export interface CMsgTeamFanContentAutographStatus_TeamStatus {
    name: string;
    team_id: number;
    autographs: CMsgTeamFanContentAutographStatus_AutographStatus[];
    workshop_account_id: number;
}
export interface CMsgDPCEvent {
    event: CMsgDPCEvent_ELeagueEvent;
    event_type: CMsgDPCEvent_ELeagueEventType;
    leagues: CMsgDPCEvent_League[];
    registration_period: number;
    is_event_upcoming: boolean;
    is_event_completed: boolean;
    event_name: string;
    multicast_league_id: number;
    multicast_streams: number[];
    tour: CMsgDPCEvent_ETour;
    timestamp_drop_lock: number;
    timestamp_add_lock: number;
    timestamp_content_deadline: number;
}
export declare enum CMsgDPCEvent_ELeagueEvent {
    EVENT_INVALID = 0,
    SPRING_2021_LEAGUE = 1,
    SPRING_2021_MAJOR = 2,
    INTERNATIONAL_2021_QUALIFIERS = 3,
    INTERNATIONAL_2021 = 4,
    WINTER_2021_LEAGUE = 5,
    WINTER_2021_LEAGUE_FINALS = 6,
    SPRING_2022_LEAGUE = 7,
    SPRING_2022_MAJOR = 8,
    SUMMER_2022_LEAGUE = 9,
    SUMMER_2022_MAJOR = 10,
    INTERNATIONAL_2022 = 11,
    CHINA_REGIONAL_FINALS = 12,
    INTERNATIONAL_2022_REGIONAL_QUALIFIERS = 13,
    INTERNATIONAL_2022_LAST_CHANCE_QUALIFIERS = 14,
    WINTER_2023_LEAGUE = 15,
    WINTER_2023_MAJOR = 16,
    SPRING_2023_LEAGUE = 17,
    SPRING_2023_MAJOR = 18,
    SUMMER_2023_LEAGUE = 19,
    SUMMER_2023_MAJOR = 20,
    INTERNATIONAL_2023 = 21,
    UNRECOGNIZED = -1
}
export declare function cMsgDPCEvent_ELeagueEventFromJSON(object: any): CMsgDPCEvent_ELeagueEvent;
export declare function cMsgDPCEvent_ELeagueEventToJSON(object: CMsgDPCEvent_ELeagueEvent): string;
export declare enum CMsgDPCEvent_ELeagueEventPhase {
    PHASE_INVALID = 0,
    WILD_CARD = 1,
    GROUP_STAGE = 2,
    GROUP_A = 3,
    GROUP_B = 4,
    OVERALL = 5,
    PLAYOFF = 6,
    RESULTS = 7,
    UNRECOGNIZED = -1
}
export declare function cMsgDPCEvent_ELeagueEventPhaseFromJSON(object: any): CMsgDPCEvent_ELeagueEventPhase;
export declare function cMsgDPCEvent_ELeagueEventPhaseToJSON(object: CMsgDPCEvent_ELeagueEventPhase): string;
export declare enum CMsgDPCEvent_ELeagueEventType {
    UNKNOWN = 0,
    LEAGUE = 1,
    MAJOR = 2,
    INTERNATIONAL_QUALIFIERS = 3,
    INTERNATIONAL = 4,
    LEAGUE_FINALS = 5,
    UNRECOGNIZED = -1
}
export declare function cMsgDPCEvent_ELeagueEventTypeFromJSON(object: any): CMsgDPCEvent_ELeagueEventType;
export declare function cMsgDPCEvent_ELeagueEventTypeToJSON(object: CMsgDPCEvent_ELeagueEventType): string;
export declare enum CMsgDPCEvent_ETour {
    TOUR_NONE = 0,
    TOUR_1 = 1,
    TOUR_2 = 2,
    TOUR_3 = 3,
    UNRECOGNIZED = -1
}
export declare function cMsgDPCEvent_ETourFromJSON(object: any): CMsgDPCEvent_ETour;
export declare function cMsgDPCEvent_ETourToJSON(object: CMsgDPCEvent_ETour): string;
export interface CMsgDPCEvent_PhaseInfo {
    phase: CMsgDPCEvent_ELeagueEventPhase;
    node_group_id: number;
}
export interface CMsgDPCEvent_League {
    region: ELeagueRegion;
    division: ELeagueDivision;
    league_id: number;
    phases: CMsgDPCEvent_PhaseInfo[];
}
export interface CMsgDPCEventList {
    events: CMsgDPCEvent[];
}
export interface CMsgDOTAFantasyCardLineup {
    periods: CMsgDOTAFantasyCardLineup_Period[];
}
export interface CMsgDOTAFantasyCardLineup_CardBonus {
    bonus_stat: number;
    bonus_value: number;
}
export interface CMsgDOTAFantasyCardLineup_Card {
    player_account_id: number;
    player_name: string;
    team_id: number;
    team_name: string;
    role: number;
    bonuses: CMsgDOTAFantasyCardLineup_CardBonus[];
    score: number;
    finalized: boolean;
    item_id: string;
}
export interface CMsgDOTAFantasyCardLineup_League {
    league_id: number;
    cards: CMsgDOTAFantasyCardLineup_Card[];
    score: number;
}
export interface CMsgDOTAFantasyCardLineup_Period {
    fantasy_period: number;
    timestamp_start: number;
    timestamp_end: number;
    leagues: CMsgDOTAFantasyCardLineup_League[];
}
export interface CMsgDOTAFantasyCardList {
    cards: CMsgDOTAFantasyCardList_Card[];
}
export interface CMsgDOTAFantasyCardList_CardBonus {
    bonus_stat: number;
    bonus_value: number;
}
export interface CMsgDOTAFantasyCardList_Card {
    player_account_id: number;
    player_name: string;
    team_id: number;
    team_name: string;
    role: number;
    bonuses: CMsgDOTAFantasyCardList_CardBonus[];
    item_id: string;
}
export interface CMsgChatToxicityReport {
    num_matches_seen: number;
    num_messages: number;
    num_messages_human_thinks_toxic: number;
    num_messages_ml_thinks_toxic: number;
    status: string;
    result: number;
    message: string;
}
export interface CMsgGetTeamAuditInformation {
    team_id: number;
    team_name: string;
    actions: CMsgGetTeamAuditInformation_Action[];
    last_updated: number;
}
export interface CMsgGetTeamAuditInformation_Action {
    registration_period: number;
    account_id: number;
    action: number;
    timestamp: number;
    player_name: string;
    player_real_name: string;
}
export interface CMsgDOTADPCMatch {
    match: CMsgDOTAMatch | undefined;
    metadata: CDOTAMatchMetadata | undefined;
}
export declare const CMsgArcanaVotes: {
    fromJSON(object: any): CMsgArcanaVotes;
    toJSON(message: CMsgArcanaVotes): unknown;
    create<I extends {
        matches?: {
            match_id?: number;
            hero_id_0?: number;
            hero_id_1?: number;
            hero_seeding_0?: number;
            hero_seeding_1?: number;
            vote_count_0?: number;
            vote_count_1?: number;
            voting_state?: number;
            round_number?: number;
            is_votes_hidden?: boolean;
            calibration_time_remaining?: number;
        }[];
        round_time_remaining?: number;
        round_number?: number;
        voting_state?: number;
        is_current_round_calibrating?: boolean;
        closest_active_match_id?: number;
        event_id?: number;
        voting_start_time?: number;
    } & {
        matches?: {
            match_id?: number;
            hero_id_0?: number;
            hero_id_1?: number;
            hero_seeding_0?: number;
            hero_seeding_1?: number;
            vote_count_0?: number;
            vote_count_1?: number;
            voting_state?: number;
            round_number?: number;
            is_votes_hidden?: boolean;
            calibration_time_remaining?: number;
        }[] & ({
            match_id?: number;
            hero_id_0?: number;
            hero_id_1?: number;
            hero_seeding_0?: number;
            hero_seeding_1?: number;
            vote_count_0?: number;
            vote_count_1?: number;
            voting_state?: number;
            round_number?: number;
            is_votes_hidden?: boolean;
            calibration_time_remaining?: number;
        } & {
            match_id?: number;
            hero_id_0?: number;
            hero_id_1?: number;
            hero_seeding_0?: number;
            hero_seeding_1?: number;
            vote_count_0?: number;
            vote_count_1?: number;
            voting_state?: number;
            round_number?: number;
            is_votes_hidden?: boolean;
            calibration_time_remaining?: number;
        } & { [K in Exclude<keyof I["matches"][number], keyof CMsgArcanaVotes_Match>]: never; })[] & { [K_1 in Exclude<keyof I["matches"], keyof {
            match_id?: number;
            hero_id_0?: number;
            hero_id_1?: number;
            hero_seeding_0?: number;
            hero_seeding_1?: number;
            vote_count_0?: number;
            vote_count_1?: number;
            voting_state?: number;
            round_number?: number;
            is_votes_hidden?: boolean;
            calibration_time_remaining?: number;
        }[]>]: never; };
        round_time_remaining?: number;
        round_number?: number;
        voting_state?: number;
        is_current_round_calibrating?: boolean;
        closest_active_match_id?: number;
        event_id?: number;
        voting_start_time?: number;
    } & { [K_2 in Exclude<keyof I, keyof CMsgArcanaVotes>]: never; }>(base?: I): CMsgArcanaVotes;
    fromPartial<I_1 extends {
        matches?: {
            match_id?: number;
            hero_id_0?: number;
            hero_id_1?: number;
            hero_seeding_0?: number;
            hero_seeding_1?: number;
            vote_count_0?: number;
            vote_count_1?: number;
            voting_state?: number;
            round_number?: number;
            is_votes_hidden?: boolean;
            calibration_time_remaining?: number;
        }[];
        round_time_remaining?: number;
        round_number?: number;
        voting_state?: number;
        is_current_round_calibrating?: boolean;
        closest_active_match_id?: number;
        event_id?: number;
        voting_start_time?: number;
    } & {
        matches?: {
            match_id?: number;
            hero_id_0?: number;
            hero_id_1?: number;
            hero_seeding_0?: number;
            hero_seeding_1?: number;
            vote_count_0?: number;
            vote_count_1?: number;
            voting_state?: number;
            round_number?: number;
            is_votes_hidden?: boolean;
            calibration_time_remaining?: number;
        }[] & ({
            match_id?: number;
            hero_id_0?: number;
            hero_id_1?: number;
            hero_seeding_0?: number;
            hero_seeding_1?: number;
            vote_count_0?: number;
            vote_count_1?: number;
            voting_state?: number;
            round_number?: number;
            is_votes_hidden?: boolean;
            calibration_time_remaining?: number;
        } & {
            match_id?: number;
            hero_id_0?: number;
            hero_id_1?: number;
            hero_seeding_0?: number;
            hero_seeding_1?: number;
            vote_count_0?: number;
            vote_count_1?: number;
            voting_state?: number;
            round_number?: number;
            is_votes_hidden?: boolean;
            calibration_time_remaining?: number;
        } & { [K_3 in Exclude<keyof I_1["matches"][number], keyof CMsgArcanaVotes_Match>]: never; })[] & { [K_4 in Exclude<keyof I_1["matches"], keyof {
            match_id?: number;
            hero_id_0?: number;
            hero_id_1?: number;
            hero_seeding_0?: number;
            hero_seeding_1?: number;
            vote_count_0?: number;
            vote_count_1?: number;
            voting_state?: number;
            round_number?: number;
            is_votes_hidden?: boolean;
            calibration_time_remaining?: number;
        }[]>]: never; };
        round_time_remaining?: number;
        round_number?: number;
        voting_state?: number;
        is_current_round_calibrating?: boolean;
        closest_active_match_id?: number;
        event_id?: number;
        voting_start_time?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgArcanaVotes>]: never; }>(object: I_1): CMsgArcanaVotes;
};
export declare const CMsgArcanaVotes_Match: {
    fromJSON(object: any): CMsgArcanaVotes_Match;
    toJSON(message: CMsgArcanaVotes_Match): unknown;
    create<I extends {
        match_id?: number;
        hero_id_0?: number;
        hero_id_1?: number;
        hero_seeding_0?: number;
        hero_seeding_1?: number;
        vote_count_0?: number;
        vote_count_1?: number;
        voting_state?: number;
        round_number?: number;
        is_votes_hidden?: boolean;
        calibration_time_remaining?: number;
    } & {
        match_id?: number;
        hero_id_0?: number;
        hero_id_1?: number;
        hero_seeding_0?: number;
        hero_seeding_1?: number;
        vote_count_0?: number;
        vote_count_1?: number;
        voting_state?: number;
        round_number?: number;
        is_votes_hidden?: boolean;
        calibration_time_remaining?: number;
    } & { [K in Exclude<keyof I, keyof CMsgArcanaVotes_Match>]: never; }>(base?: I): CMsgArcanaVotes_Match;
    fromPartial<I_1 extends {
        match_id?: number;
        hero_id_0?: number;
        hero_id_1?: number;
        hero_seeding_0?: number;
        hero_seeding_1?: number;
        vote_count_0?: number;
        vote_count_1?: number;
        voting_state?: number;
        round_number?: number;
        is_votes_hidden?: boolean;
        calibration_time_remaining?: number;
    } & {
        match_id?: number;
        hero_id_0?: number;
        hero_id_1?: number;
        hero_seeding_0?: number;
        hero_seeding_1?: number;
        vote_count_0?: number;
        vote_count_1?: number;
        voting_state?: number;
        round_number?: number;
        is_votes_hidden?: boolean;
        calibration_time_remaining?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgArcanaVotes_Match>]: never; }>(object: I_1): CMsgArcanaVotes_Match;
};
export declare const CMsgDOTADPCFeed: {
    fromJSON(object: any): CMsgDOTADPCFeed;
    toJSON(message: CMsgDOTADPCFeed): unknown;
    create<I extends {
        elements?: {
            type?: CMsgDOTADPCFeed_EFeedElementType;
            timestamp?: number;
            series_id?: number;
            match_id?: string;
            team_id?: number;
            account_id?: number;
            league_id?: number;
            node_id?: number;
            server_steam_id?: string;
            data_1?: number;
            data_2?: number;
            data_3?: number;
            data_4?: number;
        }[];
    } & {
        elements?: {
            type?: CMsgDOTADPCFeed_EFeedElementType;
            timestamp?: number;
            series_id?: number;
            match_id?: string;
            team_id?: number;
            account_id?: number;
            league_id?: number;
            node_id?: number;
            server_steam_id?: string;
            data_1?: number;
            data_2?: number;
            data_3?: number;
            data_4?: number;
        }[] & ({
            type?: CMsgDOTADPCFeed_EFeedElementType;
            timestamp?: number;
            series_id?: number;
            match_id?: string;
            team_id?: number;
            account_id?: number;
            league_id?: number;
            node_id?: number;
            server_steam_id?: string;
            data_1?: number;
            data_2?: number;
            data_3?: number;
            data_4?: number;
        } & {
            type?: CMsgDOTADPCFeed_EFeedElementType;
            timestamp?: number;
            series_id?: number;
            match_id?: string;
            team_id?: number;
            account_id?: number;
            league_id?: number;
            node_id?: number;
            server_steam_id?: string;
            data_1?: number;
            data_2?: number;
            data_3?: number;
            data_4?: number;
        } & { [K in Exclude<keyof I["elements"][number], keyof CMsgDOTADPCFeed_Element>]: never; })[] & { [K_1 in Exclude<keyof I["elements"], keyof {
            type?: CMsgDOTADPCFeed_EFeedElementType;
            timestamp?: number;
            series_id?: number;
            match_id?: string;
            team_id?: number;
            account_id?: number;
            league_id?: number;
            node_id?: number;
            server_steam_id?: string;
            data_1?: number;
            data_2?: number;
            data_3?: number;
            data_4?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "elements">]: never; }>(base?: I): CMsgDOTADPCFeed;
    fromPartial<I_1 extends {
        elements?: {
            type?: CMsgDOTADPCFeed_EFeedElementType;
            timestamp?: number;
            series_id?: number;
            match_id?: string;
            team_id?: number;
            account_id?: number;
            league_id?: number;
            node_id?: number;
            server_steam_id?: string;
            data_1?: number;
            data_2?: number;
            data_3?: number;
            data_4?: number;
        }[];
    } & {
        elements?: {
            type?: CMsgDOTADPCFeed_EFeedElementType;
            timestamp?: number;
            series_id?: number;
            match_id?: string;
            team_id?: number;
            account_id?: number;
            league_id?: number;
            node_id?: number;
            server_steam_id?: string;
            data_1?: number;
            data_2?: number;
            data_3?: number;
            data_4?: number;
        }[] & ({
            type?: CMsgDOTADPCFeed_EFeedElementType;
            timestamp?: number;
            series_id?: number;
            match_id?: string;
            team_id?: number;
            account_id?: number;
            league_id?: number;
            node_id?: number;
            server_steam_id?: string;
            data_1?: number;
            data_2?: number;
            data_3?: number;
            data_4?: number;
        } & {
            type?: CMsgDOTADPCFeed_EFeedElementType;
            timestamp?: number;
            series_id?: number;
            match_id?: string;
            team_id?: number;
            account_id?: number;
            league_id?: number;
            node_id?: number;
            server_steam_id?: string;
            data_1?: number;
            data_2?: number;
            data_3?: number;
            data_4?: number;
        } & { [K_3 in Exclude<keyof I_1["elements"][number], keyof CMsgDOTADPCFeed_Element>]: never; })[] & { [K_4 in Exclude<keyof I_1["elements"], keyof {
            type?: CMsgDOTADPCFeed_EFeedElementType;
            timestamp?: number;
            series_id?: number;
            match_id?: string;
            team_id?: number;
            account_id?: number;
            league_id?: number;
            node_id?: number;
            server_steam_id?: string;
            data_1?: number;
            data_2?: number;
            data_3?: number;
            data_4?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "elements">]: never; }>(object: I_1): CMsgDOTADPCFeed;
};
export declare const CMsgDOTADPCFeed_Element: {
    fromJSON(object: any): CMsgDOTADPCFeed_Element;
    toJSON(message: CMsgDOTADPCFeed_Element): unknown;
    create<I extends {
        type?: CMsgDOTADPCFeed_EFeedElementType;
        timestamp?: number;
        series_id?: number;
        match_id?: string;
        team_id?: number;
        account_id?: number;
        league_id?: number;
        node_id?: number;
        server_steam_id?: string;
        data_1?: number;
        data_2?: number;
        data_3?: number;
        data_4?: number;
    } & {
        type?: CMsgDOTADPCFeed_EFeedElementType;
        timestamp?: number;
        series_id?: number;
        match_id?: string;
        team_id?: number;
        account_id?: number;
        league_id?: number;
        node_id?: number;
        server_steam_id?: string;
        data_1?: number;
        data_2?: number;
        data_3?: number;
        data_4?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTADPCFeed_Element>]: never; }>(base?: I): CMsgDOTADPCFeed_Element;
    fromPartial<I_1 extends {
        type?: CMsgDOTADPCFeed_EFeedElementType;
        timestamp?: number;
        series_id?: number;
        match_id?: string;
        team_id?: number;
        account_id?: number;
        league_id?: number;
        node_id?: number;
        server_steam_id?: string;
        data_1?: number;
        data_2?: number;
        data_3?: number;
        data_4?: number;
    } & {
        type?: CMsgDOTADPCFeed_EFeedElementType;
        timestamp?: number;
        series_id?: number;
        match_id?: string;
        team_id?: number;
        account_id?: number;
        league_id?: number;
        node_id?: number;
        server_steam_id?: string;
        data_1?: number;
        data_2?: number;
        data_3?: number;
        data_4?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTADPCFeed_Element>]: never; }>(object: I_1): CMsgDOTADPCFeed_Element;
};
export declare const CMsgDOTADPCUserInfo: {
    fromJSON(object: any): CMsgDOTADPCUserInfo;
    toJSON(message: CMsgDOTADPCUserInfo): unknown;
    create<I extends {
        is_plus_subscriber?: boolean;
    } & {
        is_plus_subscriber?: boolean;
    } & { [K in Exclude<keyof I, "is_plus_subscriber">]: never; }>(base?: I): CMsgDOTADPCUserInfo;
    fromPartial<I_1 extends {
        is_plus_subscriber?: boolean;
    } & {
        is_plus_subscriber?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "is_plus_subscriber">]: never; }>(object: I_1): CMsgDOTADPCUserInfo;
};
export declare const CMsgDraftTrivia: {
    fromJSON(object: any): CMsgDraftTrivia;
    toJSON(message: CMsgDraftTrivia): unknown;
    create<I extends {
        has_valid_match?: boolean;
        match_hero_info?: {
            radiant_heroes?: {
                hero_id?: number;
                role?: number;
            }[];
            dire_heroes?: {
                hero_id?: number;
                role?: number;
            }[];
        };
        match_rank_tier?: number;
        end_time?: number;
        event_id?: number;
        current_match_voted_radiant?: boolean;
        previous_result?: {
            voted_correctly?: boolean;
            voted_radiant?: boolean;
            match_hero_info?: {
                radiant_heroes?: {
                    hero_id?: number;
                    role?: number;
                }[];
                dire_heroes?: {
                    hero_id?: number;
                    role?: number;
                }[];
            };
            match_rank_tier?: number;
            end_time?: number;
            match_id?: string;
        };
        current_streak?: number;
    } & {
        has_valid_match?: boolean;
        match_hero_info?: {
            radiant_heroes?: {
                hero_id?: number;
                role?: number;
            }[];
            dire_heroes?: {
                hero_id?: number;
                role?: number;
            }[];
        } & {
            radiant_heroes?: {
                hero_id?: number;
                role?: number;
            }[] & ({
                hero_id?: number;
                role?: number;
            } & {
                hero_id?: number;
                role?: number;
            } & { [K in Exclude<keyof I["match_hero_info"]["radiant_heroes"][number], keyof CMsgDraftTrivia_DraftTriviaHeroInfo>]: never; })[] & { [K_1 in Exclude<keyof I["match_hero_info"]["radiant_heroes"], keyof {
                hero_id?: number;
                role?: number;
            }[]>]: never; };
            dire_heroes?: {
                hero_id?: number;
                role?: number;
            }[] & ({
                hero_id?: number;
                role?: number;
            } & {
                hero_id?: number;
                role?: number;
            } & { [K_2 in Exclude<keyof I["match_hero_info"]["dire_heroes"][number], keyof CMsgDraftTrivia_DraftTriviaHeroInfo>]: never; })[] & { [K_3 in Exclude<keyof I["match_hero_info"]["dire_heroes"], keyof {
                hero_id?: number;
                role?: number;
            }[]>]: never; };
        } & { [K_4 in Exclude<keyof I["match_hero_info"], keyof CMsgDraftTrivia_DraftTriviaMatchInfo>]: never; };
        match_rank_tier?: number;
        end_time?: number;
        event_id?: number;
        current_match_voted_radiant?: boolean;
        previous_result?: {
            voted_correctly?: boolean;
            voted_radiant?: boolean;
            match_hero_info?: {
                radiant_heroes?: {
                    hero_id?: number;
                    role?: number;
                }[];
                dire_heroes?: {
                    hero_id?: number;
                    role?: number;
                }[];
            };
            match_rank_tier?: number;
            end_time?: number;
            match_id?: string;
        } & {
            voted_correctly?: boolean;
            voted_radiant?: boolean;
            match_hero_info?: {
                radiant_heroes?: {
                    hero_id?: number;
                    role?: number;
                }[];
                dire_heroes?: {
                    hero_id?: number;
                    role?: number;
                }[];
            } & {
                radiant_heroes?: {
                    hero_id?: number;
                    role?: number;
                }[] & ({
                    hero_id?: number;
                    role?: number;
                } & {
                    hero_id?: number;
                    role?: number;
                } & { [K_5 in Exclude<keyof I["previous_result"]["match_hero_info"]["radiant_heroes"][number], keyof CMsgDraftTrivia_DraftTriviaHeroInfo>]: never; })[] & { [K_6 in Exclude<keyof I["previous_result"]["match_hero_info"]["radiant_heroes"], keyof {
                    hero_id?: number;
                    role?: number;
                }[]>]: never; };
                dire_heroes?: {
                    hero_id?: number;
                    role?: number;
                }[] & ({
                    hero_id?: number;
                    role?: number;
                } & {
                    hero_id?: number;
                    role?: number;
                } & { [K_7 in Exclude<keyof I["previous_result"]["match_hero_info"]["dire_heroes"][number], keyof CMsgDraftTrivia_DraftTriviaHeroInfo>]: never; })[] & { [K_8 in Exclude<keyof I["previous_result"]["match_hero_info"]["dire_heroes"], keyof {
                    hero_id?: number;
                    role?: number;
                }[]>]: never; };
            } & { [K_9 in Exclude<keyof I["previous_result"]["match_hero_info"], keyof CMsgDraftTrivia_DraftTriviaMatchInfo>]: never; };
            match_rank_tier?: number;
            end_time?: number;
            match_id?: string;
        } & { [K_10 in Exclude<keyof I["previous_result"], keyof CMsgDraftTrivia_PreviousResult>]: never; };
        current_streak?: number;
    } & { [K_11 in Exclude<keyof I, keyof CMsgDraftTrivia>]: never; }>(base?: I): CMsgDraftTrivia;
    fromPartial<I_1 extends {
        has_valid_match?: boolean;
        match_hero_info?: {
            radiant_heroes?: {
                hero_id?: number;
                role?: number;
            }[];
            dire_heroes?: {
                hero_id?: number;
                role?: number;
            }[];
        };
        match_rank_tier?: number;
        end_time?: number;
        event_id?: number;
        current_match_voted_radiant?: boolean;
        previous_result?: {
            voted_correctly?: boolean;
            voted_radiant?: boolean;
            match_hero_info?: {
                radiant_heroes?: {
                    hero_id?: number;
                    role?: number;
                }[];
                dire_heroes?: {
                    hero_id?: number;
                    role?: number;
                }[];
            };
            match_rank_tier?: number;
            end_time?: number;
            match_id?: string;
        };
        current_streak?: number;
    } & {
        has_valid_match?: boolean;
        match_hero_info?: {
            radiant_heroes?: {
                hero_id?: number;
                role?: number;
            }[];
            dire_heroes?: {
                hero_id?: number;
                role?: number;
            }[];
        } & {
            radiant_heroes?: {
                hero_id?: number;
                role?: number;
            }[] & ({
                hero_id?: number;
                role?: number;
            } & {
                hero_id?: number;
                role?: number;
            } & { [K_12 in Exclude<keyof I_1["match_hero_info"]["radiant_heroes"][number], keyof CMsgDraftTrivia_DraftTriviaHeroInfo>]: never; })[] & { [K_13 in Exclude<keyof I_1["match_hero_info"]["radiant_heroes"], keyof {
                hero_id?: number;
                role?: number;
            }[]>]: never; };
            dire_heroes?: {
                hero_id?: number;
                role?: number;
            }[] & ({
                hero_id?: number;
                role?: number;
            } & {
                hero_id?: number;
                role?: number;
            } & { [K_14 in Exclude<keyof I_1["match_hero_info"]["dire_heroes"][number], keyof CMsgDraftTrivia_DraftTriviaHeroInfo>]: never; })[] & { [K_15 in Exclude<keyof I_1["match_hero_info"]["dire_heroes"], keyof {
                hero_id?: number;
                role?: number;
            }[]>]: never; };
        } & { [K_16 in Exclude<keyof I_1["match_hero_info"], keyof CMsgDraftTrivia_DraftTriviaMatchInfo>]: never; };
        match_rank_tier?: number;
        end_time?: number;
        event_id?: number;
        current_match_voted_radiant?: boolean;
        previous_result?: {
            voted_correctly?: boolean;
            voted_radiant?: boolean;
            match_hero_info?: {
                radiant_heroes?: {
                    hero_id?: number;
                    role?: number;
                }[];
                dire_heroes?: {
                    hero_id?: number;
                    role?: number;
                }[];
            };
            match_rank_tier?: number;
            end_time?: number;
            match_id?: string;
        } & {
            voted_correctly?: boolean;
            voted_radiant?: boolean;
            match_hero_info?: {
                radiant_heroes?: {
                    hero_id?: number;
                    role?: number;
                }[];
                dire_heroes?: {
                    hero_id?: number;
                    role?: number;
                }[];
            } & {
                radiant_heroes?: {
                    hero_id?: number;
                    role?: number;
                }[] & ({
                    hero_id?: number;
                    role?: number;
                } & {
                    hero_id?: number;
                    role?: number;
                } & { [K_17 in Exclude<keyof I_1["previous_result"]["match_hero_info"]["radiant_heroes"][number], keyof CMsgDraftTrivia_DraftTriviaHeroInfo>]: never; })[] & { [K_18 in Exclude<keyof I_1["previous_result"]["match_hero_info"]["radiant_heroes"], keyof {
                    hero_id?: number;
                    role?: number;
                }[]>]: never; };
                dire_heroes?: {
                    hero_id?: number;
                    role?: number;
                }[] & ({
                    hero_id?: number;
                    role?: number;
                } & {
                    hero_id?: number;
                    role?: number;
                } & { [K_19 in Exclude<keyof I_1["previous_result"]["match_hero_info"]["dire_heroes"][number], keyof CMsgDraftTrivia_DraftTriviaHeroInfo>]: never; })[] & { [K_20 in Exclude<keyof I_1["previous_result"]["match_hero_info"]["dire_heroes"], keyof {
                    hero_id?: number;
                    role?: number;
                }[]>]: never; };
            } & { [K_21 in Exclude<keyof I_1["previous_result"]["match_hero_info"], keyof CMsgDraftTrivia_DraftTriviaMatchInfo>]: never; };
            match_rank_tier?: number;
            end_time?: number;
            match_id?: string;
        } & { [K_22 in Exclude<keyof I_1["previous_result"], keyof CMsgDraftTrivia_PreviousResult>]: never; };
        current_streak?: number;
    } & { [K_23 in Exclude<keyof I_1, keyof CMsgDraftTrivia>]: never; }>(object: I_1): CMsgDraftTrivia;
};
export declare const CMsgDraftTrivia_DraftTriviaHeroInfo: {
    fromJSON(object: any): CMsgDraftTrivia_DraftTriviaHeroInfo;
    toJSON(message: CMsgDraftTrivia_DraftTriviaHeroInfo): unknown;
    create<I extends {
        hero_id?: number;
        role?: number;
    } & {
        hero_id?: number;
        role?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDraftTrivia_DraftTriviaHeroInfo>]: never; }>(base?: I): CMsgDraftTrivia_DraftTriviaHeroInfo;
    fromPartial<I_1 extends {
        hero_id?: number;
        role?: number;
    } & {
        hero_id?: number;
        role?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDraftTrivia_DraftTriviaHeroInfo>]: never; }>(object: I_1): CMsgDraftTrivia_DraftTriviaHeroInfo;
};
export declare const CMsgDraftTrivia_DraftTriviaMatchInfo: {
    fromJSON(object: any): CMsgDraftTrivia_DraftTriviaMatchInfo;
    toJSON(message: CMsgDraftTrivia_DraftTriviaMatchInfo): unknown;
    create<I extends {
        radiant_heroes?: {
            hero_id?: number;
            role?: number;
        }[];
        dire_heroes?: {
            hero_id?: number;
            role?: number;
        }[];
    } & {
        radiant_heroes?: {
            hero_id?: number;
            role?: number;
        }[] & ({
            hero_id?: number;
            role?: number;
        } & {
            hero_id?: number;
            role?: number;
        } & { [K in Exclude<keyof I["radiant_heroes"][number], keyof CMsgDraftTrivia_DraftTriviaHeroInfo>]: never; })[] & { [K_1 in Exclude<keyof I["radiant_heroes"], keyof {
            hero_id?: number;
            role?: number;
        }[]>]: never; };
        dire_heroes?: {
            hero_id?: number;
            role?: number;
        }[] & ({
            hero_id?: number;
            role?: number;
        } & {
            hero_id?: number;
            role?: number;
        } & { [K_2 in Exclude<keyof I["dire_heroes"][number], keyof CMsgDraftTrivia_DraftTriviaHeroInfo>]: never; })[] & { [K_3 in Exclude<keyof I["dire_heroes"], keyof {
            hero_id?: number;
            role?: number;
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof CMsgDraftTrivia_DraftTriviaMatchInfo>]: never; }>(base?: I): CMsgDraftTrivia_DraftTriviaMatchInfo;
    fromPartial<I_1 extends {
        radiant_heroes?: {
            hero_id?: number;
            role?: number;
        }[];
        dire_heroes?: {
            hero_id?: number;
            role?: number;
        }[];
    } & {
        radiant_heroes?: {
            hero_id?: number;
            role?: number;
        }[] & ({
            hero_id?: number;
            role?: number;
        } & {
            hero_id?: number;
            role?: number;
        } & { [K_5 in Exclude<keyof I_1["radiant_heroes"][number], keyof CMsgDraftTrivia_DraftTriviaHeroInfo>]: never; })[] & { [K_6 in Exclude<keyof I_1["radiant_heroes"], keyof {
            hero_id?: number;
            role?: number;
        }[]>]: never; };
        dire_heroes?: {
            hero_id?: number;
            role?: number;
        }[] & ({
            hero_id?: number;
            role?: number;
        } & {
            hero_id?: number;
            role?: number;
        } & { [K_7 in Exclude<keyof I_1["dire_heroes"][number], keyof CMsgDraftTrivia_DraftTriviaHeroInfo>]: never; })[] & { [K_8 in Exclude<keyof I_1["dire_heroes"], keyof {
            hero_id?: number;
            role?: number;
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof CMsgDraftTrivia_DraftTriviaMatchInfo>]: never; }>(object: I_1): CMsgDraftTrivia_DraftTriviaMatchInfo;
};
export declare const CMsgDraftTrivia_PreviousResult: {
    fromJSON(object: any): CMsgDraftTrivia_PreviousResult;
    toJSON(message: CMsgDraftTrivia_PreviousResult): unknown;
    create<I extends {
        voted_correctly?: boolean;
        voted_radiant?: boolean;
        match_hero_info?: {
            radiant_heroes?: {
                hero_id?: number;
                role?: number;
            }[];
            dire_heroes?: {
                hero_id?: number;
                role?: number;
            }[];
        };
        match_rank_tier?: number;
        end_time?: number;
        match_id?: string;
    } & {
        voted_correctly?: boolean;
        voted_radiant?: boolean;
        match_hero_info?: {
            radiant_heroes?: {
                hero_id?: number;
                role?: number;
            }[];
            dire_heroes?: {
                hero_id?: number;
                role?: number;
            }[];
        } & {
            radiant_heroes?: {
                hero_id?: number;
                role?: number;
            }[] & ({
                hero_id?: number;
                role?: number;
            } & {
                hero_id?: number;
                role?: number;
            } & { [K in Exclude<keyof I["match_hero_info"]["radiant_heroes"][number], keyof CMsgDraftTrivia_DraftTriviaHeroInfo>]: never; })[] & { [K_1 in Exclude<keyof I["match_hero_info"]["radiant_heroes"], keyof {
                hero_id?: number;
                role?: number;
            }[]>]: never; };
            dire_heroes?: {
                hero_id?: number;
                role?: number;
            }[] & ({
                hero_id?: number;
                role?: number;
            } & {
                hero_id?: number;
                role?: number;
            } & { [K_2 in Exclude<keyof I["match_hero_info"]["dire_heroes"][number], keyof CMsgDraftTrivia_DraftTriviaHeroInfo>]: never; })[] & { [K_3 in Exclude<keyof I["match_hero_info"]["dire_heroes"], keyof {
                hero_id?: number;
                role?: number;
            }[]>]: never; };
        } & { [K_4 in Exclude<keyof I["match_hero_info"], keyof CMsgDraftTrivia_DraftTriviaMatchInfo>]: never; };
        match_rank_tier?: number;
        end_time?: number;
        match_id?: string;
    } & { [K_5 in Exclude<keyof I, keyof CMsgDraftTrivia_PreviousResult>]: never; }>(base?: I): CMsgDraftTrivia_PreviousResult;
    fromPartial<I_1 extends {
        voted_correctly?: boolean;
        voted_radiant?: boolean;
        match_hero_info?: {
            radiant_heroes?: {
                hero_id?: number;
                role?: number;
            }[];
            dire_heroes?: {
                hero_id?: number;
                role?: number;
            }[];
        };
        match_rank_tier?: number;
        end_time?: number;
        match_id?: string;
    } & {
        voted_correctly?: boolean;
        voted_radiant?: boolean;
        match_hero_info?: {
            radiant_heroes?: {
                hero_id?: number;
                role?: number;
            }[];
            dire_heroes?: {
                hero_id?: number;
                role?: number;
            }[];
        } & {
            radiant_heroes?: {
                hero_id?: number;
                role?: number;
            }[] & ({
                hero_id?: number;
                role?: number;
            } & {
                hero_id?: number;
                role?: number;
            } & { [K_6 in Exclude<keyof I_1["match_hero_info"]["radiant_heroes"][number], keyof CMsgDraftTrivia_DraftTriviaHeroInfo>]: never; })[] & { [K_7 in Exclude<keyof I_1["match_hero_info"]["radiant_heroes"], keyof {
                hero_id?: number;
                role?: number;
            }[]>]: never; };
            dire_heroes?: {
                hero_id?: number;
                role?: number;
            }[] & ({
                hero_id?: number;
                role?: number;
            } & {
                hero_id?: number;
                role?: number;
            } & { [K_8 in Exclude<keyof I_1["match_hero_info"]["dire_heroes"][number], keyof CMsgDraftTrivia_DraftTriviaHeroInfo>]: never; })[] & { [K_9 in Exclude<keyof I_1["match_hero_info"]["dire_heroes"], keyof {
                hero_id?: number;
                role?: number;
            }[]>]: never; };
        } & { [K_10 in Exclude<keyof I_1["match_hero_info"], keyof CMsgDraftTrivia_DraftTriviaMatchInfo>]: never; };
        match_rank_tier?: number;
        end_time?: number;
        match_id?: string;
    } & { [K_11 in Exclude<keyof I_1, keyof CMsgDraftTrivia_PreviousResult>]: never; }>(object: I_1): CMsgDraftTrivia_PreviousResult;
};
export declare const CMsgTeamFanContentAssetStatus: {
    fromJSON(object: any): CMsgTeamFanContentAssetStatus;
    toJSON(message: CMsgTeamFanContentAssetStatus): unknown;
    create<I extends {
        asset_type?: ETeamFanContentAssetType;
        asset_index?: number;
        asset_status?: ETeamFanContentAssetStatus;
        crc?: number;
    } & {
        asset_type?: ETeamFanContentAssetType;
        asset_index?: number;
        asset_status?: ETeamFanContentAssetStatus;
        crc?: number;
    } & { [K in Exclude<keyof I, keyof CMsgTeamFanContentAssetStatus>]: never; }>(base?: I): CMsgTeamFanContentAssetStatus;
    fromPartial<I_1 extends {
        asset_type?: ETeamFanContentAssetType;
        asset_index?: number;
        asset_status?: ETeamFanContentAssetStatus;
        crc?: number;
    } & {
        asset_type?: ETeamFanContentAssetType;
        asset_index?: number;
        asset_status?: ETeamFanContentAssetStatus;
        crc?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgTeamFanContentAssetStatus>]: never; }>(object: I_1): CMsgTeamFanContentAssetStatus;
};
export declare const CMsgTeamFanContentAssetStatusResponse: {
    fromJSON(object: any): CMsgTeamFanContentAssetStatusResponse;
    toJSON(message: CMsgTeamFanContentAssetStatusResponse): unknown;
    create<I extends {
        result?: CMsgTeamFanContentAssetStatusResponse_EResult;
    } & {
        result?: CMsgTeamFanContentAssetStatusResponse_EResult;
    } & { [K in Exclude<keyof I, "result">]: never; }>(base?: I): CMsgTeamFanContentAssetStatusResponse;
    fromPartial<I_1 extends {
        result?: CMsgTeamFanContentAssetStatusResponse_EResult;
    } & {
        result?: CMsgTeamFanContentAssetStatusResponse_EResult;
    } & { [K_1 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CMsgTeamFanContentAssetStatusResponse;
};
export declare const CMsgTeamFanContentStatus: {
    fromJSON(object: any): CMsgTeamFanContentStatus;
    toJSON(message: CMsgTeamFanContentStatus): unknown;
    create<I extends {
        team_status_list?: {
            name?: string;
            team_id?: number;
            logo_url?: string;
            status?: ETeamFanContentStatus;
            timestamp?: number;
            ugc_logo?: string;
            workshop_account_id?: number;
            abbreviation?: string;
            voiceline_count?: number;
            spray_count?: number;
            emoticon_count?: number;
            wallpaper_count?: number;
            comment?: string;
            comment_timestamp?: number;
            asset_status?: {
                asset_type?: ETeamFanContentAssetType;
                asset_index?: number;
                asset_status?: ETeamFanContentAssetStatus;
                crc?: number;
            }[];
            email_timestamp?: number;
            email_tier?: number;
            languages?: string;
        }[];
    } & {
        team_status_list?: {
            name?: string;
            team_id?: number;
            logo_url?: string;
            status?: ETeamFanContentStatus;
            timestamp?: number;
            ugc_logo?: string;
            workshop_account_id?: number;
            abbreviation?: string;
            voiceline_count?: number;
            spray_count?: number;
            emoticon_count?: number;
            wallpaper_count?: number;
            comment?: string;
            comment_timestamp?: number;
            asset_status?: {
                asset_type?: ETeamFanContentAssetType;
                asset_index?: number;
                asset_status?: ETeamFanContentAssetStatus;
                crc?: number;
            }[];
            email_timestamp?: number;
            email_tier?: number;
            languages?: string;
        }[] & ({
            name?: string;
            team_id?: number;
            logo_url?: string;
            status?: ETeamFanContentStatus;
            timestamp?: number;
            ugc_logo?: string;
            workshop_account_id?: number;
            abbreviation?: string;
            voiceline_count?: number;
            spray_count?: number;
            emoticon_count?: number;
            wallpaper_count?: number;
            comment?: string;
            comment_timestamp?: number;
            asset_status?: {
                asset_type?: ETeamFanContentAssetType;
                asset_index?: number;
                asset_status?: ETeamFanContentAssetStatus;
                crc?: number;
            }[];
            email_timestamp?: number;
            email_tier?: number;
            languages?: string;
        } & {
            name?: string;
            team_id?: number;
            logo_url?: string;
            status?: ETeamFanContentStatus;
            timestamp?: number;
            ugc_logo?: string;
            workshop_account_id?: number;
            abbreviation?: string;
            voiceline_count?: number;
            spray_count?: number;
            emoticon_count?: number;
            wallpaper_count?: number;
            comment?: string;
            comment_timestamp?: number;
            asset_status?: {
                asset_type?: ETeamFanContentAssetType;
                asset_index?: number;
                asset_status?: ETeamFanContentAssetStatus;
                crc?: number;
            }[] & ({
                asset_type?: ETeamFanContentAssetType;
                asset_index?: number;
                asset_status?: ETeamFanContentAssetStatus;
                crc?: number;
            } & {
                asset_type?: ETeamFanContentAssetType;
                asset_index?: number;
                asset_status?: ETeamFanContentAssetStatus;
                crc?: number;
            } & { [K in Exclude<keyof I["team_status_list"][number]["asset_status"][number], keyof CMsgTeamFanContentAssetStatus>]: never; })[] & { [K_1 in Exclude<keyof I["team_status_list"][number]["asset_status"], keyof {
                asset_type?: ETeamFanContentAssetType;
                asset_index?: number;
                asset_status?: ETeamFanContentAssetStatus;
                crc?: number;
            }[]>]: never; };
            email_timestamp?: number;
            email_tier?: number;
            languages?: string;
        } & { [K_2 in Exclude<keyof I["team_status_list"][number], keyof CMsgTeamFanContentStatus_TeamStatus>]: never; })[] & { [K_3 in Exclude<keyof I["team_status_list"], keyof {
            name?: string;
            team_id?: number;
            logo_url?: string;
            status?: ETeamFanContentStatus;
            timestamp?: number;
            ugc_logo?: string;
            workshop_account_id?: number;
            abbreviation?: string;
            voiceline_count?: number;
            spray_count?: number;
            emoticon_count?: number;
            wallpaper_count?: number;
            comment?: string;
            comment_timestamp?: number;
            asset_status?: {
                asset_type?: ETeamFanContentAssetType;
                asset_index?: number;
                asset_status?: ETeamFanContentAssetStatus;
                crc?: number;
            }[];
            email_timestamp?: number;
            email_tier?: number;
            languages?: string;
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, "team_status_list">]: never; }>(base?: I): CMsgTeamFanContentStatus;
    fromPartial<I_1 extends {
        team_status_list?: {
            name?: string;
            team_id?: number;
            logo_url?: string;
            status?: ETeamFanContentStatus;
            timestamp?: number;
            ugc_logo?: string;
            workshop_account_id?: number;
            abbreviation?: string;
            voiceline_count?: number;
            spray_count?: number;
            emoticon_count?: number;
            wallpaper_count?: number;
            comment?: string;
            comment_timestamp?: number;
            asset_status?: {
                asset_type?: ETeamFanContentAssetType;
                asset_index?: number;
                asset_status?: ETeamFanContentAssetStatus;
                crc?: number;
            }[];
            email_timestamp?: number;
            email_tier?: number;
            languages?: string;
        }[];
    } & {
        team_status_list?: {
            name?: string;
            team_id?: number;
            logo_url?: string;
            status?: ETeamFanContentStatus;
            timestamp?: number;
            ugc_logo?: string;
            workshop_account_id?: number;
            abbreviation?: string;
            voiceline_count?: number;
            spray_count?: number;
            emoticon_count?: number;
            wallpaper_count?: number;
            comment?: string;
            comment_timestamp?: number;
            asset_status?: {
                asset_type?: ETeamFanContentAssetType;
                asset_index?: number;
                asset_status?: ETeamFanContentAssetStatus;
                crc?: number;
            }[];
            email_timestamp?: number;
            email_tier?: number;
            languages?: string;
        }[] & ({
            name?: string;
            team_id?: number;
            logo_url?: string;
            status?: ETeamFanContentStatus;
            timestamp?: number;
            ugc_logo?: string;
            workshop_account_id?: number;
            abbreviation?: string;
            voiceline_count?: number;
            spray_count?: number;
            emoticon_count?: number;
            wallpaper_count?: number;
            comment?: string;
            comment_timestamp?: number;
            asset_status?: {
                asset_type?: ETeamFanContentAssetType;
                asset_index?: number;
                asset_status?: ETeamFanContentAssetStatus;
                crc?: number;
            }[];
            email_timestamp?: number;
            email_tier?: number;
            languages?: string;
        } & {
            name?: string;
            team_id?: number;
            logo_url?: string;
            status?: ETeamFanContentStatus;
            timestamp?: number;
            ugc_logo?: string;
            workshop_account_id?: number;
            abbreviation?: string;
            voiceline_count?: number;
            spray_count?: number;
            emoticon_count?: number;
            wallpaper_count?: number;
            comment?: string;
            comment_timestamp?: number;
            asset_status?: {
                asset_type?: ETeamFanContentAssetType;
                asset_index?: number;
                asset_status?: ETeamFanContentAssetStatus;
                crc?: number;
            }[] & ({
                asset_type?: ETeamFanContentAssetType;
                asset_index?: number;
                asset_status?: ETeamFanContentAssetStatus;
                crc?: number;
            } & {
                asset_type?: ETeamFanContentAssetType;
                asset_index?: number;
                asset_status?: ETeamFanContentAssetStatus;
                crc?: number;
            } & { [K_5 in Exclude<keyof I_1["team_status_list"][number]["asset_status"][number], keyof CMsgTeamFanContentAssetStatus>]: never; })[] & { [K_6 in Exclude<keyof I_1["team_status_list"][number]["asset_status"], keyof {
                asset_type?: ETeamFanContentAssetType;
                asset_index?: number;
                asset_status?: ETeamFanContentAssetStatus;
                crc?: number;
            }[]>]: never; };
            email_timestamp?: number;
            email_tier?: number;
            languages?: string;
        } & { [K_7 in Exclude<keyof I_1["team_status_list"][number], keyof CMsgTeamFanContentStatus_TeamStatus>]: never; })[] & { [K_8 in Exclude<keyof I_1["team_status_list"], keyof {
            name?: string;
            team_id?: number;
            logo_url?: string;
            status?: ETeamFanContentStatus;
            timestamp?: number;
            ugc_logo?: string;
            workshop_account_id?: number;
            abbreviation?: string;
            voiceline_count?: number;
            spray_count?: number;
            emoticon_count?: number;
            wallpaper_count?: number;
            comment?: string;
            comment_timestamp?: number;
            asset_status?: {
                asset_type?: ETeamFanContentAssetType;
                asset_index?: number;
                asset_status?: ETeamFanContentAssetStatus;
                crc?: number;
            }[];
            email_timestamp?: number;
            email_tier?: number;
            languages?: string;
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "team_status_list">]: never; }>(object: I_1): CMsgTeamFanContentStatus;
};
export declare const CMsgTeamFanContentStatus_TeamStatus: {
    fromJSON(object: any): CMsgTeamFanContentStatus_TeamStatus;
    toJSON(message: CMsgTeamFanContentStatus_TeamStatus): unknown;
    create<I extends {
        name?: string;
        team_id?: number;
        logo_url?: string;
        status?: ETeamFanContentStatus;
        timestamp?: number;
        ugc_logo?: string;
        workshop_account_id?: number;
        abbreviation?: string;
        voiceline_count?: number;
        spray_count?: number;
        emoticon_count?: number;
        wallpaper_count?: number;
        comment?: string;
        comment_timestamp?: number;
        asset_status?: {
            asset_type?: ETeamFanContentAssetType;
            asset_index?: number;
            asset_status?: ETeamFanContentAssetStatus;
            crc?: number;
        }[];
        email_timestamp?: number;
        email_tier?: number;
        languages?: string;
    } & {
        name?: string;
        team_id?: number;
        logo_url?: string;
        status?: ETeamFanContentStatus;
        timestamp?: number;
        ugc_logo?: string;
        workshop_account_id?: number;
        abbreviation?: string;
        voiceline_count?: number;
        spray_count?: number;
        emoticon_count?: number;
        wallpaper_count?: number;
        comment?: string;
        comment_timestamp?: number;
        asset_status?: {
            asset_type?: ETeamFanContentAssetType;
            asset_index?: number;
            asset_status?: ETeamFanContentAssetStatus;
            crc?: number;
        }[] & ({
            asset_type?: ETeamFanContentAssetType;
            asset_index?: number;
            asset_status?: ETeamFanContentAssetStatus;
            crc?: number;
        } & {
            asset_type?: ETeamFanContentAssetType;
            asset_index?: number;
            asset_status?: ETeamFanContentAssetStatus;
            crc?: number;
        } & { [K in Exclude<keyof I["asset_status"][number], keyof CMsgTeamFanContentAssetStatus>]: never; })[] & { [K_1 in Exclude<keyof I["asset_status"], keyof {
            asset_type?: ETeamFanContentAssetType;
            asset_index?: number;
            asset_status?: ETeamFanContentAssetStatus;
            crc?: number;
        }[]>]: never; };
        email_timestamp?: number;
        email_tier?: number;
        languages?: string;
    } & { [K_2 in Exclude<keyof I, keyof CMsgTeamFanContentStatus_TeamStatus>]: never; }>(base?: I): CMsgTeamFanContentStatus_TeamStatus;
    fromPartial<I_1 extends {
        name?: string;
        team_id?: number;
        logo_url?: string;
        status?: ETeamFanContentStatus;
        timestamp?: number;
        ugc_logo?: string;
        workshop_account_id?: number;
        abbreviation?: string;
        voiceline_count?: number;
        spray_count?: number;
        emoticon_count?: number;
        wallpaper_count?: number;
        comment?: string;
        comment_timestamp?: number;
        asset_status?: {
            asset_type?: ETeamFanContentAssetType;
            asset_index?: number;
            asset_status?: ETeamFanContentAssetStatus;
            crc?: number;
        }[];
        email_timestamp?: number;
        email_tier?: number;
        languages?: string;
    } & {
        name?: string;
        team_id?: number;
        logo_url?: string;
        status?: ETeamFanContentStatus;
        timestamp?: number;
        ugc_logo?: string;
        workshop_account_id?: number;
        abbreviation?: string;
        voiceline_count?: number;
        spray_count?: number;
        emoticon_count?: number;
        wallpaper_count?: number;
        comment?: string;
        comment_timestamp?: number;
        asset_status?: {
            asset_type?: ETeamFanContentAssetType;
            asset_index?: number;
            asset_status?: ETeamFanContentAssetStatus;
            crc?: number;
        }[] & ({
            asset_type?: ETeamFanContentAssetType;
            asset_index?: number;
            asset_status?: ETeamFanContentAssetStatus;
            crc?: number;
        } & {
            asset_type?: ETeamFanContentAssetType;
            asset_index?: number;
            asset_status?: ETeamFanContentAssetStatus;
            crc?: number;
        } & { [K_3 in Exclude<keyof I_1["asset_status"][number], keyof CMsgTeamFanContentAssetStatus>]: never; })[] & { [K_4 in Exclude<keyof I_1["asset_status"], keyof {
            asset_type?: ETeamFanContentAssetType;
            asset_index?: number;
            asset_status?: ETeamFanContentAssetStatus;
            crc?: number;
        }[]>]: never; };
        email_timestamp?: number;
        email_tier?: number;
        languages?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgTeamFanContentStatus_TeamStatus>]: never; }>(object: I_1): CMsgTeamFanContentStatus_TeamStatus;
};
export declare const CMsgTeamFanContentAutographStatus: {
    fromJSON(object: any): CMsgTeamFanContentAutographStatus;
    toJSON(message: CMsgTeamFanContentAutographStatus): unknown;
    create<I extends {
        team_autographs?: {
            name?: string;
            team_id?: number;
            autographs?: {
                pro_name?: string;
                account_id?: number;
                timestamp?: number;
                file?: string;
            }[];
            workshop_account_id?: number;
        }[];
    } & {
        team_autographs?: {
            name?: string;
            team_id?: number;
            autographs?: {
                pro_name?: string;
                account_id?: number;
                timestamp?: number;
                file?: string;
            }[];
            workshop_account_id?: number;
        }[] & ({
            name?: string;
            team_id?: number;
            autographs?: {
                pro_name?: string;
                account_id?: number;
                timestamp?: number;
                file?: string;
            }[];
            workshop_account_id?: number;
        } & {
            name?: string;
            team_id?: number;
            autographs?: {
                pro_name?: string;
                account_id?: number;
                timestamp?: number;
                file?: string;
            }[] & ({
                pro_name?: string;
                account_id?: number;
                timestamp?: number;
                file?: string;
            } & {
                pro_name?: string;
                account_id?: number;
                timestamp?: number;
                file?: string;
            } & { [K in Exclude<keyof I["team_autographs"][number]["autographs"][number], keyof CMsgTeamFanContentAutographStatus_AutographStatus>]: never; })[] & { [K_1 in Exclude<keyof I["team_autographs"][number]["autographs"], keyof {
                pro_name?: string;
                account_id?: number;
                timestamp?: number;
                file?: string;
            }[]>]: never; };
            workshop_account_id?: number;
        } & { [K_2 in Exclude<keyof I["team_autographs"][number], keyof CMsgTeamFanContentAutographStatus_TeamStatus>]: never; })[] & { [K_3 in Exclude<keyof I["team_autographs"], keyof {
            name?: string;
            team_id?: number;
            autographs?: {
                pro_name?: string;
                account_id?: number;
                timestamp?: number;
                file?: string;
            }[];
            workshop_account_id?: number;
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, "team_autographs">]: never; }>(base?: I): CMsgTeamFanContentAutographStatus;
    fromPartial<I_1 extends {
        team_autographs?: {
            name?: string;
            team_id?: number;
            autographs?: {
                pro_name?: string;
                account_id?: number;
                timestamp?: number;
                file?: string;
            }[];
            workshop_account_id?: number;
        }[];
    } & {
        team_autographs?: {
            name?: string;
            team_id?: number;
            autographs?: {
                pro_name?: string;
                account_id?: number;
                timestamp?: number;
                file?: string;
            }[];
            workshop_account_id?: number;
        }[] & ({
            name?: string;
            team_id?: number;
            autographs?: {
                pro_name?: string;
                account_id?: number;
                timestamp?: number;
                file?: string;
            }[];
            workshop_account_id?: number;
        } & {
            name?: string;
            team_id?: number;
            autographs?: {
                pro_name?: string;
                account_id?: number;
                timestamp?: number;
                file?: string;
            }[] & ({
                pro_name?: string;
                account_id?: number;
                timestamp?: number;
                file?: string;
            } & {
                pro_name?: string;
                account_id?: number;
                timestamp?: number;
                file?: string;
            } & { [K_5 in Exclude<keyof I_1["team_autographs"][number]["autographs"][number], keyof CMsgTeamFanContentAutographStatus_AutographStatus>]: never; })[] & { [K_6 in Exclude<keyof I_1["team_autographs"][number]["autographs"], keyof {
                pro_name?: string;
                account_id?: number;
                timestamp?: number;
                file?: string;
            }[]>]: never; };
            workshop_account_id?: number;
        } & { [K_7 in Exclude<keyof I_1["team_autographs"][number], keyof CMsgTeamFanContentAutographStatus_TeamStatus>]: never; })[] & { [K_8 in Exclude<keyof I_1["team_autographs"], keyof {
            name?: string;
            team_id?: number;
            autographs?: {
                pro_name?: string;
                account_id?: number;
                timestamp?: number;
                file?: string;
            }[];
            workshop_account_id?: number;
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "team_autographs">]: never; }>(object: I_1): CMsgTeamFanContentAutographStatus;
};
export declare const CMsgTeamFanContentAutographStatus_AutographStatus: {
    fromJSON(object: any): CMsgTeamFanContentAutographStatus_AutographStatus;
    toJSON(message: CMsgTeamFanContentAutographStatus_AutographStatus): unknown;
    create<I extends {
        pro_name?: string;
        account_id?: number;
        timestamp?: number;
        file?: string;
    } & {
        pro_name?: string;
        account_id?: number;
        timestamp?: number;
        file?: string;
    } & { [K in Exclude<keyof I, keyof CMsgTeamFanContentAutographStatus_AutographStatus>]: never; }>(base?: I): CMsgTeamFanContentAutographStatus_AutographStatus;
    fromPartial<I_1 extends {
        pro_name?: string;
        account_id?: number;
        timestamp?: number;
        file?: string;
    } & {
        pro_name?: string;
        account_id?: number;
        timestamp?: number;
        file?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgTeamFanContentAutographStatus_AutographStatus>]: never; }>(object: I_1): CMsgTeamFanContentAutographStatus_AutographStatus;
};
export declare const CMsgTeamFanContentAutographStatus_TeamStatus: {
    fromJSON(object: any): CMsgTeamFanContentAutographStatus_TeamStatus;
    toJSON(message: CMsgTeamFanContentAutographStatus_TeamStatus): unknown;
    create<I extends {
        name?: string;
        team_id?: number;
        autographs?: {
            pro_name?: string;
            account_id?: number;
            timestamp?: number;
            file?: string;
        }[];
        workshop_account_id?: number;
    } & {
        name?: string;
        team_id?: number;
        autographs?: {
            pro_name?: string;
            account_id?: number;
            timestamp?: number;
            file?: string;
        }[] & ({
            pro_name?: string;
            account_id?: number;
            timestamp?: number;
            file?: string;
        } & {
            pro_name?: string;
            account_id?: number;
            timestamp?: number;
            file?: string;
        } & { [K in Exclude<keyof I["autographs"][number], keyof CMsgTeamFanContentAutographStatus_AutographStatus>]: never; })[] & { [K_1 in Exclude<keyof I["autographs"], keyof {
            pro_name?: string;
            account_id?: number;
            timestamp?: number;
            file?: string;
        }[]>]: never; };
        workshop_account_id?: number;
    } & { [K_2 in Exclude<keyof I, keyof CMsgTeamFanContentAutographStatus_TeamStatus>]: never; }>(base?: I): CMsgTeamFanContentAutographStatus_TeamStatus;
    fromPartial<I_1 extends {
        name?: string;
        team_id?: number;
        autographs?: {
            pro_name?: string;
            account_id?: number;
            timestamp?: number;
            file?: string;
        }[];
        workshop_account_id?: number;
    } & {
        name?: string;
        team_id?: number;
        autographs?: {
            pro_name?: string;
            account_id?: number;
            timestamp?: number;
            file?: string;
        }[] & ({
            pro_name?: string;
            account_id?: number;
            timestamp?: number;
            file?: string;
        } & {
            pro_name?: string;
            account_id?: number;
            timestamp?: number;
            file?: string;
        } & { [K_3 in Exclude<keyof I_1["autographs"][number], keyof CMsgTeamFanContentAutographStatus_AutographStatus>]: never; })[] & { [K_4 in Exclude<keyof I_1["autographs"], keyof {
            pro_name?: string;
            account_id?: number;
            timestamp?: number;
            file?: string;
        }[]>]: never; };
        workshop_account_id?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgTeamFanContentAutographStatus_TeamStatus>]: never; }>(object: I_1): CMsgTeamFanContentAutographStatus_TeamStatus;
};
export declare const CMsgDPCEvent: {
    fromJSON(object: any): CMsgDPCEvent;
    toJSON(message: CMsgDPCEvent): unknown;
    create<I extends {
        event?: CMsgDPCEvent_ELeagueEvent;
        event_type?: CMsgDPCEvent_ELeagueEventType;
        leagues?: {
            region?: ELeagueRegion;
            division?: ELeagueDivision;
            league_id?: number;
            phases?: {
                phase?: CMsgDPCEvent_ELeagueEventPhase;
                node_group_id?: number;
            }[];
        }[];
        registration_period?: number;
        is_event_upcoming?: boolean;
        is_event_completed?: boolean;
        event_name?: string;
        multicast_league_id?: number;
        multicast_streams?: number[];
        tour?: CMsgDPCEvent_ETour;
        timestamp_drop_lock?: number;
        timestamp_add_lock?: number;
        timestamp_content_deadline?: number;
    } & {
        event?: CMsgDPCEvent_ELeagueEvent;
        event_type?: CMsgDPCEvent_ELeagueEventType;
        leagues?: {
            region?: ELeagueRegion;
            division?: ELeagueDivision;
            league_id?: number;
            phases?: {
                phase?: CMsgDPCEvent_ELeagueEventPhase;
                node_group_id?: number;
            }[];
        }[] & ({
            region?: ELeagueRegion;
            division?: ELeagueDivision;
            league_id?: number;
            phases?: {
                phase?: CMsgDPCEvent_ELeagueEventPhase;
                node_group_id?: number;
            }[];
        } & {
            region?: ELeagueRegion;
            division?: ELeagueDivision;
            league_id?: number;
            phases?: {
                phase?: CMsgDPCEvent_ELeagueEventPhase;
                node_group_id?: number;
            }[] & ({
                phase?: CMsgDPCEvent_ELeagueEventPhase;
                node_group_id?: number;
            } & {
                phase?: CMsgDPCEvent_ELeagueEventPhase;
                node_group_id?: number;
            } & { [K in Exclude<keyof I["leagues"][number]["phases"][number], keyof CMsgDPCEvent_PhaseInfo>]: never; })[] & { [K_1 in Exclude<keyof I["leagues"][number]["phases"], keyof {
                phase?: CMsgDPCEvent_ELeagueEventPhase;
                node_group_id?: number;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["leagues"][number], keyof CMsgDPCEvent_League>]: never; })[] & { [K_3 in Exclude<keyof I["leagues"], keyof {
            region?: ELeagueRegion;
            division?: ELeagueDivision;
            league_id?: number;
            phases?: {
                phase?: CMsgDPCEvent_ELeagueEventPhase;
                node_group_id?: number;
            }[];
        }[]>]: never; };
        registration_period?: number;
        is_event_upcoming?: boolean;
        is_event_completed?: boolean;
        event_name?: string;
        multicast_league_id?: number;
        multicast_streams?: number[] & number[] & { [K_4 in Exclude<keyof I["multicast_streams"], keyof number[]>]: never; };
        tour?: CMsgDPCEvent_ETour;
        timestamp_drop_lock?: number;
        timestamp_add_lock?: number;
        timestamp_content_deadline?: number;
    } & { [K_5 in Exclude<keyof I, keyof CMsgDPCEvent>]: never; }>(base?: I): CMsgDPCEvent;
    fromPartial<I_1 extends {
        event?: CMsgDPCEvent_ELeagueEvent;
        event_type?: CMsgDPCEvent_ELeagueEventType;
        leagues?: {
            region?: ELeagueRegion;
            division?: ELeagueDivision;
            league_id?: number;
            phases?: {
                phase?: CMsgDPCEvent_ELeagueEventPhase;
                node_group_id?: number;
            }[];
        }[];
        registration_period?: number;
        is_event_upcoming?: boolean;
        is_event_completed?: boolean;
        event_name?: string;
        multicast_league_id?: number;
        multicast_streams?: number[];
        tour?: CMsgDPCEvent_ETour;
        timestamp_drop_lock?: number;
        timestamp_add_lock?: number;
        timestamp_content_deadline?: number;
    } & {
        event?: CMsgDPCEvent_ELeagueEvent;
        event_type?: CMsgDPCEvent_ELeagueEventType;
        leagues?: {
            region?: ELeagueRegion;
            division?: ELeagueDivision;
            league_id?: number;
            phases?: {
                phase?: CMsgDPCEvent_ELeagueEventPhase;
                node_group_id?: number;
            }[];
        }[] & ({
            region?: ELeagueRegion;
            division?: ELeagueDivision;
            league_id?: number;
            phases?: {
                phase?: CMsgDPCEvent_ELeagueEventPhase;
                node_group_id?: number;
            }[];
        } & {
            region?: ELeagueRegion;
            division?: ELeagueDivision;
            league_id?: number;
            phases?: {
                phase?: CMsgDPCEvent_ELeagueEventPhase;
                node_group_id?: number;
            }[] & ({
                phase?: CMsgDPCEvent_ELeagueEventPhase;
                node_group_id?: number;
            } & {
                phase?: CMsgDPCEvent_ELeagueEventPhase;
                node_group_id?: number;
            } & { [K_6 in Exclude<keyof I_1["leagues"][number]["phases"][number], keyof CMsgDPCEvent_PhaseInfo>]: never; })[] & { [K_7 in Exclude<keyof I_1["leagues"][number]["phases"], keyof {
                phase?: CMsgDPCEvent_ELeagueEventPhase;
                node_group_id?: number;
            }[]>]: never; };
        } & { [K_8 in Exclude<keyof I_1["leagues"][number], keyof CMsgDPCEvent_League>]: never; })[] & { [K_9 in Exclude<keyof I_1["leagues"], keyof {
            region?: ELeagueRegion;
            division?: ELeagueDivision;
            league_id?: number;
            phases?: {
                phase?: CMsgDPCEvent_ELeagueEventPhase;
                node_group_id?: number;
            }[];
        }[]>]: never; };
        registration_period?: number;
        is_event_upcoming?: boolean;
        is_event_completed?: boolean;
        event_name?: string;
        multicast_league_id?: number;
        multicast_streams?: number[] & number[] & { [K_10 in Exclude<keyof I_1["multicast_streams"], keyof number[]>]: never; };
        tour?: CMsgDPCEvent_ETour;
        timestamp_drop_lock?: number;
        timestamp_add_lock?: number;
        timestamp_content_deadline?: number;
    } & { [K_11 in Exclude<keyof I_1, keyof CMsgDPCEvent>]: never; }>(object: I_1): CMsgDPCEvent;
};
export declare const CMsgDPCEvent_PhaseInfo: {
    fromJSON(object: any): CMsgDPCEvent_PhaseInfo;
    toJSON(message: CMsgDPCEvent_PhaseInfo): unknown;
    create<I extends {
        phase?: CMsgDPCEvent_ELeagueEventPhase;
        node_group_id?: number;
    } & {
        phase?: CMsgDPCEvent_ELeagueEventPhase;
        node_group_id?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDPCEvent_PhaseInfo>]: never; }>(base?: I): CMsgDPCEvent_PhaseInfo;
    fromPartial<I_1 extends {
        phase?: CMsgDPCEvent_ELeagueEventPhase;
        node_group_id?: number;
    } & {
        phase?: CMsgDPCEvent_ELeagueEventPhase;
        node_group_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDPCEvent_PhaseInfo>]: never; }>(object: I_1): CMsgDPCEvent_PhaseInfo;
};
export declare const CMsgDPCEvent_League: {
    fromJSON(object: any): CMsgDPCEvent_League;
    toJSON(message: CMsgDPCEvent_League): unknown;
    create<I extends {
        region?: ELeagueRegion;
        division?: ELeagueDivision;
        league_id?: number;
        phases?: {
            phase?: CMsgDPCEvent_ELeagueEventPhase;
            node_group_id?: number;
        }[];
    } & {
        region?: ELeagueRegion;
        division?: ELeagueDivision;
        league_id?: number;
        phases?: {
            phase?: CMsgDPCEvent_ELeagueEventPhase;
            node_group_id?: number;
        }[] & ({
            phase?: CMsgDPCEvent_ELeagueEventPhase;
            node_group_id?: number;
        } & {
            phase?: CMsgDPCEvent_ELeagueEventPhase;
            node_group_id?: number;
        } & { [K in Exclude<keyof I["phases"][number], keyof CMsgDPCEvent_PhaseInfo>]: never; })[] & { [K_1 in Exclude<keyof I["phases"], keyof {
            phase?: CMsgDPCEvent_ELeagueEventPhase;
            node_group_id?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgDPCEvent_League>]: never; }>(base?: I): CMsgDPCEvent_League;
    fromPartial<I_1 extends {
        region?: ELeagueRegion;
        division?: ELeagueDivision;
        league_id?: number;
        phases?: {
            phase?: CMsgDPCEvent_ELeagueEventPhase;
            node_group_id?: number;
        }[];
    } & {
        region?: ELeagueRegion;
        division?: ELeagueDivision;
        league_id?: number;
        phases?: {
            phase?: CMsgDPCEvent_ELeagueEventPhase;
            node_group_id?: number;
        }[] & ({
            phase?: CMsgDPCEvent_ELeagueEventPhase;
            node_group_id?: number;
        } & {
            phase?: CMsgDPCEvent_ELeagueEventPhase;
            node_group_id?: number;
        } & { [K_3 in Exclude<keyof I_1["phases"][number], keyof CMsgDPCEvent_PhaseInfo>]: never; })[] & { [K_4 in Exclude<keyof I_1["phases"], keyof {
            phase?: CMsgDPCEvent_ELeagueEventPhase;
            node_group_id?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgDPCEvent_League>]: never; }>(object: I_1): CMsgDPCEvent_League;
};
export declare const CMsgDPCEventList: {
    fromJSON(object: any): CMsgDPCEventList;
    toJSON(message: CMsgDPCEventList): unknown;
    create<I extends {
        events?: {
            event?: CMsgDPCEvent_ELeagueEvent;
            event_type?: CMsgDPCEvent_ELeagueEventType;
            leagues?: {
                region?: ELeagueRegion;
                division?: ELeagueDivision;
                league_id?: number;
                phases?: {
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                }[];
            }[];
            registration_period?: number;
            is_event_upcoming?: boolean;
            is_event_completed?: boolean;
            event_name?: string;
            multicast_league_id?: number;
            multicast_streams?: number[];
            tour?: CMsgDPCEvent_ETour;
            timestamp_drop_lock?: number;
            timestamp_add_lock?: number;
            timestamp_content_deadline?: number;
        }[];
    } & {
        events?: {
            event?: CMsgDPCEvent_ELeagueEvent;
            event_type?: CMsgDPCEvent_ELeagueEventType;
            leagues?: {
                region?: ELeagueRegion;
                division?: ELeagueDivision;
                league_id?: number;
                phases?: {
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                }[];
            }[];
            registration_period?: number;
            is_event_upcoming?: boolean;
            is_event_completed?: boolean;
            event_name?: string;
            multicast_league_id?: number;
            multicast_streams?: number[];
            tour?: CMsgDPCEvent_ETour;
            timestamp_drop_lock?: number;
            timestamp_add_lock?: number;
            timestamp_content_deadline?: number;
        }[] & ({
            event?: CMsgDPCEvent_ELeagueEvent;
            event_type?: CMsgDPCEvent_ELeagueEventType;
            leagues?: {
                region?: ELeagueRegion;
                division?: ELeagueDivision;
                league_id?: number;
                phases?: {
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                }[];
            }[];
            registration_period?: number;
            is_event_upcoming?: boolean;
            is_event_completed?: boolean;
            event_name?: string;
            multicast_league_id?: number;
            multicast_streams?: number[];
            tour?: CMsgDPCEvent_ETour;
            timestamp_drop_lock?: number;
            timestamp_add_lock?: number;
            timestamp_content_deadline?: number;
        } & {
            event?: CMsgDPCEvent_ELeagueEvent;
            event_type?: CMsgDPCEvent_ELeagueEventType;
            leagues?: {
                region?: ELeagueRegion;
                division?: ELeagueDivision;
                league_id?: number;
                phases?: {
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                }[];
            }[] & ({
                region?: ELeagueRegion;
                division?: ELeagueDivision;
                league_id?: number;
                phases?: {
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                }[];
            } & {
                region?: ELeagueRegion;
                division?: ELeagueDivision;
                league_id?: number;
                phases?: {
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                }[] & ({
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                } & {
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                } & { [K in Exclude<keyof I["events"][number]["leagues"][number]["phases"][number], keyof CMsgDPCEvent_PhaseInfo>]: never; })[] & { [K_1 in Exclude<keyof I["events"][number]["leagues"][number]["phases"], keyof {
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                }[]>]: never; };
            } & { [K_2 in Exclude<keyof I["events"][number]["leagues"][number], keyof CMsgDPCEvent_League>]: never; })[] & { [K_3 in Exclude<keyof I["events"][number]["leagues"], keyof {
                region?: ELeagueRegion;
                division?: ELeagueDivision;
                league_id?: number;
                phases?: {
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                }[];
            }[]>]: never; };
            registration_period?: number;
            is_event_upcoming?: boolean;
            is_event_completed?: boolean;
            event_name?: string;
            multicast_league_id?: number;
            multicast_streams?: number[] & number[] & { [K_4 in Exclude<keyof I["events"][number]["multicast_streams"], keyof number[]>]: never; };
            tour?: CMsgDPCEvent_ETour;
            timestamp_drop_lock?: number;
            timestamp_add_lock?: number;
            timestamp_content_deadline?: number;
        } & { [K_5 in Exclude<keyof I["events"][number], keyof CMsgDPCEvent>]: never; })[] & { [K_6 in Exclude<keyof I["events"], keyof {
            event?: CMsgDPCEvent_ELeagueEvent;
            event_type?: CMsgDPCEvent_ELeagueEventType;
            leagues?: {
                region?: ELeagueRegion;
                division?: ELeagueDivision;
                league_id?: number;
                phases?: {
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                }[];
            }[];
            registration_period?: number;
            is_event_upcoming?: boolean;
            is_event_completed?: boolean;
            event_name?: string;
            multicast_league_id?: number;
            multicast_streams?: number[];
            tour?: CMsgDPCEvent_ETour;
            timestamp_drop_lock?: number;
            timestamp_add_lock?: number;
            timestamp_content_deadline?: number;
        }[]>]: never; };
    } & { [K_7 in Exclude<keyof I, "events">]: never; }>(base?: I): CMsgDPCEventList;
    fromPartial<I_1 extends {
        events?: {
            event?: CMsgDPCEvent_ELeagueEvent;
            event_type?: CMsgDPCEvent_ELeagueEventType;
            leagues?: {
                region?: ELeagueRegion;
                division?: ELeagueDivision;
                league_id?: number;
                phases?: {
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                }[];
            }[];
            registration_period?: number;
            is_event_upcoming?: boolean;
            is_event_completed?: boolean;
            event_name?: string;
            multicast_league_id?: number;
            multicast_streams?: number[];
            tour?: CMsgDPCEvent_ETour;
            timestamp_drop_lock?: number;
            timestamp_add_lock?: number;
            timestamp_content_deadline?: number;
        }[];
    } & {
        events?: {
            event?: CMsgDPCEvent_ELeagueEvent;
            event_type?: CMsgDPCEvent_ELeagueEventType;
            leagues?: {
                region?: ELeagueRegion;
                division?: ELeagueDivision;
                league_id?: number;
                phases?: {
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                }[];
            }[];
            registration_period?: number;
            is_event_upcoming?: boolean;
            is_event_completed?: boolean;
            event_name?: string;
            multicast_league_id?: number;
            multicast_streams?: number[];
            tour?: CMsgDPCEvent_ETour;
            timestamp_drop_lock?: number;
            timestamp_add_lock?: number;
            timestamp_content_deadline?: number;
        }[] & ({
            event?: CMsgDPCEvent_ELeagueEvent;
            event_type?: CMsgDPCEvent_ELeagueEventType;
            leagues?: {
                region?: ELeagueRegion;
                division?: ELeagueDivision;
                league_id?: number;
                phases?: {
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                }[];
            }[];
            registration_period?: number;
            is_event_upcoming?: boolean;
            is_event_completed?: boolean;
            event_name?: string;
            multicast_league_id?: number;
            multicast_streams?: number[];
            tour?: CMsgDPCEvent_ETour;
            timestamp_drop_lock?: number;
            timestamp_add_lock?: number;
            timestamp_content_deadline?: number;
        } & {
            event?: CMsgDPCEvent_ELeagueEvent;
            event_type?: CMsgDPCEvent_ELeagueEventType;
            leagues?: {
                region?: ELeagueRegion;
                division?: ELeagueDivision;
                league_id?: number;
                phases?: {
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                }[];
            }[] & ({
                region?: ELeagueRegion;
                division?: ELeagueDivision;
                league_id?: number;
                phases?: {
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                }[];
            } & {
                region?: ELeagueRegion;
                division?: ELeagueDivision;
                league_id?: number;
                phases?: {
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                }[] & ({
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                } & {
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                } & { [K_8 in Exclude<keyof I_1["events"][number]["leagues"][number]["phases"][number], keyof CMsgDPCEvent_PhaseInfo>]: never; })[] & { [K_9 in Exclude<keyof I_1["events"][number]["leagues"][number]["phases"], keyof {
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                }[]>]: never; };
            } & { [K_10 in Exclude<keyof I_1["events"][number]["leagues"][number], keyof CMsgDPCEvent_League>]: never; })[] & { [K_11 in Exclude<keyof I_1["events"][number]["leagues"], keyof {
                region?: ELeagueRegion;
                division?: ELeagueDivision;
                league_id?: number;
                phases?: {
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                }[];
            }[]>]: never; };
            registration_period?: number;
            is_event_upcoming?: boolean;
            is_event_completed?: boolean;
            event_name?: string;
            multicast_league_id?: number;
            multicast_streams?: number[] & number[] & { [K_12 in Exclude<keyof I_1["events"][number]["multicast_streams"], keyof number[]>]: never; };
            tour?: CMsgDPCEvent_ETour;
            timestamp_drop_lock?: number;
            timestamp_add_lock?: number;
            timestamp_content_deadline?: number;
        } & { [K_13 in Exclude<keyof I_1["events"][number], keyof CMsgDPCEvent>]: never; })[] & { [K_14 in Exclude<keyof I_1["events"], keyof {
            event?: CMsgDPCEvent_ELeagueEvent;
            event_type?: CMsgDPCEvent_ELeagueEventType;
            leagues?: {
                region?: ELeagueRegion;
                division?: ELeagueDivision;
                league_id?: number;
                phases?: {
                    phase?: CMsgDPCEvent_ELeagueEventPhase;
                    node_group_id?: number;
                }[];
            }[];
            registration_period?: number;
            is_event_upcoming?: boolean;
            is_event_completed?: boolean;
            event_name?: string;
            multicast_league_id?: number;
            multicast_streams?: number[];
            tour?: CMsgDPCEvent_ETour;
            timestamp_drop_lock?: number;
            timestamp_add_lock?: number;
            timestamp_content_deadline?: number;
        }[]>]: never; };
    } & { [K_15 in Exclude<keyof I_1, "events">]: never; }>(object: I_1): CMsgDPCEventList;
};
export declare const CMsgDOTAFantasyCardLineup: {
    fromJSON(object: any): CMsgDOTAFantasyCardLineup;
    toJSON(message: CMsgDOTAFantasyCardLineup): unknown;
    create<I extends {
        periods?: {
            fantasy_period?: number;
            timestamp_start?: number;
            timestamp_end?: number;
            leagues?: {
                league_id?: number;
                cards?: {
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[];
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                }[];
                score?: number;
            }[];
        }[];
    } & {
        periods?: {
            fantasy_period?: number;
            timestamp_start?: number;
            timestamp_end?: number;
            leagues?: {
                league_id?: number;
                cards?: {
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[];
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                }[];
                score?: number;
            }[];
        }[] & ({
            fantasy_period?: number;
            timestamp_start?: number;
            timestamp_end?: number;
            leagues?: {
                league_id?: number;
                cards?: {
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[];
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                }[];
                score?: number;
            }[];
        } & {
            fantasy_period?: number;
            timestamp_start?: number;
            timestamp_end?: number;
            leagues?: {
                league_id?: number;
                cards?: {
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[];
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                }[];
                score?: number;
            }[] & ({
                league_id?: number;
                cards?: {
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[];
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                }[];
                score?: number;
            } & {
                league_id?: number;
                cards?: {
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[];
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                }[] & ({
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[];
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                } & {
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[] & ({
                        bonus_stat?: number;
                        bonus_value?: number;
                    } & {
                        bonus_stat?: number;
                        bonus_value?: number;
                    } & { [K in Exclude<keyof I["periods"][number]["leagues"][number]["cards"][number]["bonuses"][number], keyof CMsgDOTAFantasyCardLineup_CardBonus>]: never; })[] & { [K_1 in Exclude<keyof I["periods"][number]["leagues"][number]["cards"][number]["bonuses"], keyof {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[]>]: never; };
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                } & { [K_2 in Exclude<keyof I["periods"][number]["leagues"][number]["cards"][number], keyof CMsgDOTAFantasyCardLineup_Card>]: never; })[] & { [K_3 in Exclude<keyof I["periods"][number]["leagues"][number]["cards"], keyof {
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[];
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                }[]>]: never; };
                score?: number;
            } & { [K_4 in Exclude<keyof I["periods"][number]["leagues"][number], keyof CMsgDOTAFantasyCardLineup_League>]: never; })[] & { [K_5 in Exclude<keyof I["periods"][number]["leagues"], keyof {
                league_id?: number;
                cards?: {
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[];
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                }[];
                score?: number;
            }[]>]: never; };
        } & { [K_6 in Exclude<keyof I["periods"][number], keyof CMsgDOTAFantasyCardLineup_Period>]: never; })[] & { [K_7 in Exclude<keyof I["periods"], keyof {
            fantasy_period?: number;
            timestamp_start?: number;
            timestamp_end?: number;
            leagues?: {
                league_id?: number;
                cards?: {
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[];
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                }[];
                score?: number;
            }[];
        }[]>]: never; };
    } & { [K_8 in Exclude<keyof I, "periods">]: never; }>(base?: I): CMsgDOTAFantasyCardLineup;
    fromPartial<I_1 extends {
        periods?: {
            fantasy_period?: number;
            timestamp_start?: number;
            timestamp_end?: number;
            leagues?: {
                league_id?: number;
                cards?: {
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[];
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                }[];
                score?: number;
            }[];
        }[];
    } & {
        periods?: {
            fantasy_period?: number;
            timestamp_start?: number;
            timestamp_end?: number;
            leagues?: {
                league_id?: number;
                cards?: {
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[];
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                }[];
                score?: number;
            }[];
        }[] & ({
            fantasy_period?: number;
            timestamp_start?: number;
            timestamp_end?: number;
            leagues?: {
                league_id?: number;
                cards?: {
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[];
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                }[];
                score?: number;
            }[];
        } & {
            fantasy_period?: number;
            timestamp_start?: number;
            timestamp_end?: number;
            leagues?: {
                league_id?: number;
                cards?: {
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[];
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                }[];
                score?: number;
            }[] & ({
                league_id?: number;
                cards?: {
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[];
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                }[];
                score?: number;
            } & {
                league_id?: number;
                cards?: {
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[];
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                }[] & ({
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[];
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                } & {
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[] & ({
                        bonus_stat?: number;
                        bonus_value?: number;
                    } & {
                        bonus_stat?: number;
                        bonus_value?: number;
                    } & { [K_9 in Exclude<keyof I_1["periods"][number]["leagues"][number]["cards"][number]["bonuses"][number], keyof CMsgDOTAFantasyCardLineup_CardBonus>]: never; })[] & { [K_10 in Exclude<keyof I_1["periods"][number]["leagues"][number]["cards"][number]["bonuses"], keyof {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[]>]: never; };
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                } & { [K_11 in Exclude<keyof I_1["periods"][number]["leagues"][number]["cards"][number], keyof CMsgDOTAFantasyCardLineup_Card>]: never; })[] & { [K_12 in Exclude<keyof I_1["periods"][number]["leagues"][number]["cards"], keyof {
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[];
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                }[]>]: never; };
                score?: number;
            } & { [K_13 in Exclude<keyof I_1["periods"][number]["leagues"][number], keyof CMsgDOTAFantasyCardLineup_League>]: never; })[] & { [K_14 in Exclude<keyof I_1["periods"][number]["leagues"], keyof {
                league_id?: number;
                cards?: {
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[];
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                }[];
                score?: number;
            }[]>]: never; };
        } & { [K_15 in Exclude<keyof I_1["periods"][number], keyof CMsgDOTAFantasyCardLineup_Period>]: never; })[] & { [K_16 in Exclude<keyof I_1["periods"], keyof {
            fantasy_period?: number;
            timestamp_start?: number;
            timestamp_end?: number;
            leagues?: {
                league_id?: number;
                cards?: {
                    player_account_id?: number;
                    player_name?: string;
                    team_id?: number;
                    team_name?: string;
                    role?: number;
                    bonuses?: {
                        bonus_stat?: number;
                        bonus_value?: number;
                    }[];
                    score?: number;
                    finalized?: boolean;
                    item_id?: string;
                }[];
                score?: number;
            }[];
        }[]>]: never; };
    } & { [K_17 in Exclude<keyof I_1, "periods">]: never; }>(object: I_1): CMsgDOTAFantasyCardLineup;
};
export declare const CMsgDOTAFantasyCardLineup_CardBonus: {
    fromJSON(object: any): CMsgDOTAFantasyCardLineup_CardBonus;
    toJSON(message: CMsgDOTAFantasyCardLineup_CardBonus): unknown;
    create<I extends {
        bonus_stat?: number;
        bonus_value?: number;
    } & {
        bonus_stat?: number;
        bonus_value?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTAFantasyCardLineup_CardBonus>]: never; }>(base?: I): CMsgDOTAFantasyCardLineup_CardBonus;
    fromPartial<I_1 extends {
        bonus_stat?: number;
        bonus_value?: number;
    } & {
        bonus_stat?: number;
        bonus_value?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTAFantasyCardLineup_CardBonus>]: never; }>(object: I_1): CMsgDOTAFantasyCardLineup_CardBonus;
};
export declare const CMsgDOTAFantasyCardLineup_Card: {
    fromJSON(object: any): CMsgDOTAFantasyCardLineup_Card;
    toJSON(message: CMsgDOTAFantasyCardLineup_Card): unknown;
    create<I extends {
        player_account_id?: number;
        player_name?: string;
        team_id?: number;
        team_name?: string;
        role?: number;
        bonuses?: {
            bonus_stat?: number;
            bonus_value?: number;
        }[];
        score?: number;
        finalized?: boolean;
        item_id?: string;
    } & {
        player_account_id?: number;
        player_name?: string;
        team_id?: number;
        team_name?: string;
        role?: number;
        bonuses?: {
            bonus_stat?: number;
            bonus_value?: number;
        }[] & ({
            bonus_stat?: number;
            bonus_value?: number;
        } & {
            bonus_stat?: number;
            bonus_value?: number;
        } & { [K in Exclude<keyof I["bonuses"][number], keyof CMsgDOTAFantasyCardLineup_CardBonus>]: never; })[] & { [K_1 in Exclude<keyof I["bonuses"], keyof {
            bonus_stat?: number;
            bonus_value?: number;
        }[]>]: never; };
        score?: number;
        finalized?: boolean;
        item_id?: string;
    } & { [K_2 in Exclude<keyof I, keyof CMsgDOTAFantasyCardLineup_Card>]: never; }>(base?: I): CMsgDOTAFantasyCardLineup_Card;
    fromPartial<I_1 extends {
        player_account_id?: number;
        player_name?: string;
        team_id?: number;
        team_name?: string;
        role?: number;
        bonuses?: {
            bonus_stat?: number;
            bonus_value?: number;
        }[];
        score?: number;
        finalized?: boolean;
        item_id?: string;
    } & {
        player_account_id?: number;
        player_name?: string;
        team_id?: number;
        team_name?: string;
        role?: number;
        bonuses?: {
            bonus_stat?: number;
            bonus_value?: number;
        }[] & ({
            bonus_stat?: number;
            bonus_value?: number;
        } & {
            bonus_stat?: number;
            bonus_value?: number;
        } & { [K_3 in Exclude<keyof I_1["bonuses"][number], keyof CMsgDOTAFantasyCardLineup_CardBonus>]: never; })[] & { [K_4 in Exclude<keyof I_1["bonuses"], keyof {
            bonus_stat?: number;
            bonus_value?: number;
        }[]>]: never; };
        score?: number;
        finalized?: boolean;
        item_id?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgDOTAFantasyCardLineup_Card>]: never; }>(object: I_1): CMsgDOTAFantasyCardLineup_Card;
};
export declare const CMsgDOTAFantasyCardLineup_League: {
    fromJSON(object: any): CMsgDOTAFantasyCardLineup_League;
    toJSON(message: CMsgDOTAFantasyCardLineup_League): unknown;
    create<I extends {
        league_id?: number;
        cards?: {
            player_account_id?: number;
            player_name?: string;
            team_id?: number;
            team_name?: string;
            role?: number;
            bonuses?: {
                bonus_stat?: number;
                bonus_value?: number;
            }[];
            score?: number;
            finalized?: boolean;
            item_id?: string;
        }[];
        score?: number;
    } & {
        league_id?: number;
        cards?: {
            player_account_id?: number;
            player_name?: string;
            team_id?: number;
            team_name?: string;
            role?: number;
            bonuses?: {
                bonus_stat?: number;
                bonus_value?: number;
            }[];
            score?: number;
            finalized?: boolean;
            item_id?: string;
        }[] & ({
            player_account_id?: number;
            player_name?: string;
            team_id?: number;
            team_name?: string;
            role?: number;
            bonuses?: {
                bonus_stat?: number;
                bonus_value?: number;
            }[];
            score?: number;
            finalized?: boolean;
            item_id?: string;
        } & {
            player_account_id?: number;
            player_name?: string;
            team_id?: number;
            team_name?: string;
            role?: number;
            bonuses?: {
                bonus_stat?: number;
                bonus_value?: number;
            }[] & ({
                bonus_stat?: number;
                bonus_value?: number;
            } & {
                bonus_stat?: number;
                bonus_value?: number;
            } & { [K in Exclude<keyof I["cards"][number]["bonuses"][number], keyof CMsgDOTAFantasyCardLineup_CardBonus>]: never; })[] & { [K_1 in Exclude<keyof I["cards"][number]["bonuses"], keyof {
                bonus_stat?: number;
                bonus_value?: number;
            }[]>]: never; };
            score?: number;
            finalized?: boolean;
            item_id?: string;
        } & { [K_2 in Exclude<keyof I["cards"][number], keyof CMsgDOTAFantasyCardLineup_Card>]: never; })[] & { [K_3 in Exclude<keyof I["cards"], keyof {
            player_account_id?: number;
            player_name?: string;
            team_id?: number;
            team_name?: string;
            role?: number;
            bonuses?: {
                bonus_stat?: number;
                bonus_value?: number;
            }[];
            score?: number;
            finalized?: boolean;
            item_id?: string;
        }[]>]: never; };
        score?: number;
    } & { [K_4 in Exclude<keyof I, keyof CMsgDOTAFantasyCardLineup_League>]: never; }>(base?: I): CMsgDOTAFantasyCardLineup_League;
    fromPartial<I_1 extends {
        league_id?: number;
        cards?: {
            player_account_id?: number;
            player_name?: string;
            team_id?: number;
            team_name?: string;
            role?: number;
            bonuses?: {
                bonus_stat?: number;
                bonus_value?: number;
            }[];
            score?: number;
            finalized?: boolean;
            item_id?: string;
        }[];
        score?: number;
    } & {
        league_id?: number;
        cards?: {
            player_account_id?: number;
            player_name?: string;
            team_id?: number;
            team_name?: string;
            role?: number;
            bonuses?: {
                bonus_stat?: number;
                bonus_value?: number;
            }[];
            score?: number;
            finalized?: boolean;
            item_id?: string;
        }[] & ({
            player_account_id?: number;
            player_name?: string;
            team_id?: number;
            team_name?: string;
            role?: number;
            bonuses?: {
                bonus_stat?: number;
                bonus_value?: number;
            }[];
            score?: number;
            finalized?: boolean;
            item_id?: string;
        } & {
            player_account_id?: number;
            player_name?: string;
            team_id?: number;
            team_name?: string;
            role?: number;
            bonuses?: {
                bonus_stat?: number;
                bonus_value?: number;
            }[] & ({
                bonus_stat?: number;
                bonus_value?: number;
            } & {
                bonus_stat?: number;
                bonus_value?: number;
            } & { [K_5 in Exclude<keyof I_1["cards"][number]["bonuses"][number], keyof CMsgDOTAFantasyCardLineup_CardBonus>]: never; })[] & { [K_6 in Exclude<keyof I_1["cards"][number]["bonuses"], keyof {
                bonus_stat?: number;
                bonus_value?: number;
            }[]>]: never; };
            score?: number;
            finalized?: boolean;
            item_id?: string;
        } & { [K_7 in Exclude<keyof I_1["cards"][number], keyof CMsgDOTAFantasyCardLineup_Card>]: never; })[] & { [K_8 in Exclude<keyof I_1["cards"], keyof {
            player_account_id?: number;
            player_name?: string;
            team_id?: number;
            team_name?: string;
            role?: number;
            bonuses?: {
                bonus_stat?: number;
                bonus_value?: number;
            }[];
            score?: number;
            finalized?: boolean;
            item_id?: string;
        }[]>]: never; };
        score?: number;
    } & { [K_9 in Exclude<keyof I_1, keyof CMsgDOTAFantasyCardLineup_League>]: never; }>(object: I_1): CMsgDOTAFantasyCardLineup_League;
};
export declare const CMsgDOTAFantasyCardLineup_Period: {
    fromJSON(object: any): CMsgDOTAFantasyCardLineup_Period;
    toJSON(message: CMsgDOTAFantasyCardLineup_Period): unknown;
    create<I extends {
        fantasy_period?: number;
        timestamp_start?: number;
        timestamp_end?: number;
        leagues?: {
            league_id?: number;
            cards?: {
                player_account_id?: number;
                player_name?: string;
                team_id?: number;
                team_name?: string;
                role?: number;
                bonuses?: {
                    bonus_stat?: number;
                    bonus_value?: number;
                }[];
                score?: number;
                finalized?: boolean;
                item_id?: string;
            }[];
            score?: number;
        }[];
    } & {
        fantasy_period?: number;
        timestamp_start?: number;
        timestamp_end?: number;
        leagues?: {
            league_id?: number;
            cards?: {
                player_account_id?: number;
                player_name?: string;
                team_id?: number;
                team_name?: string;
                role?: number;
                bonuses?: {
                    bonus_stat?: number;
                    bonus_value?: number;
                }[];
                score?: number;
                finalized?: boolean;
                item_id?: string;
            }[];
            score?: number;
        }[] & ({
            league_id?: number;
            cards?: {
                player_account_id?: number;
                player_name?: string;
                team_id?: number;
                team_name?: string;
                role?: number;
                bonuses?: {
                    bonus_stat?: number;
                    bonus_value?: number;
                }[];
                score?: number;
                finalized?: boolean;
                item_id?: string;
            }[];
            score?: number;
        } & {
            league_id?: number;
            cards?: {
                player_account_id?: number;
                player_name?: string;
                team_id?: number;
                team_name?: string;
                role?: number;
                bonuses?: {
                    bonus_stat?: number;
                    bonus_value?: number;
                }[];
                score?: number;
                finalized?: boolean;
                item_id?: string;
            }[] & ({
                player_account_id?: number;
                player_name?: string;
                team_id?: number;
                team_name?: string;
                role?: number;
                bonuses?: {
                    bonus_stat?: number;
                    bonus_value?: number;
                }[];
                score?: number;
                finalized?: boolean;
                item_id?: string;
            } & {
                player_account_id?: number;
                player_name?: string;
                team_id?: number;
                team_name?: string;
                role?: number;
                bonuses?: {
                    bonus_stat?: number;
                    bonus_value?: number;
                }[] & ({
                    bonus_stat?: number;
                    bonus_value?: number;
                } & {
                    bonus_stat?: number;
                    bonus_value?: number;
                } & { [K in Exclude<keyof I["leagues"][number]["cards"][number]["bonuses"][number], keyof CMsgDOTAFantasyCardLineup_CardBonus>]: never; })[] & { [K_1 in Exclude<keyof I["leagues"][number]["cards"][number]["bonuses"], keyof {
                    bonus_stat?: number;
                    bonus_value?: number;
                }[]>]: never; };
                score?: number;
                finalized?: boolean;
                item_id?: string;
            } & { [K_2 in Exclude<keyof I["leagues"][number]["cards"][number], keyof CMsgDOTAFantasyCardLineup_Card>]: never; })[] & { [K_3 in Exclude<keyof I["leagues"][number]["cards"], keyof {
                player_account_id?: number;
                player_name?: string;
                team_id?: number;
                team_name?: string;
                role?: number;
                bonuses?: {
                    bonus_stat?: number;
                    bonus_value?: number;
                }[];
                score?: number;
                finalized?: boolean;
                item_id?: string;
            }[]>]: never; };
            score?: number;
        } & { [K_4 in Exclude<keyof I["leagues"][number], keyof CMsgDOTAFantasyCardLineup_League>]: never; })[] & { [K_5 in Exclude<keyof I["leagues"], keyof {
            league_id?: number;
            cards?: {
                player_account_id?: number;
                player_name?: string;
                team_id?: number;
                team_name?: string;
                role?: number;
                bonuses?: {
                    bonus_stat?: number;
                    bonus_value?: number;
                }[];
                score?: number;
                finalized?: boolean;
                item_id?: string;
            }[];
            score?: number;
        }[]>]: never; };
    } & { [K_6 in Exclude<keyof I, keyof CMsgDOTAFantasyCardLineup_Period>]: never; }>(base?: I): CMsgDOTAFantasyCardLineup_Period;
    fromPartial<I_1 extends {
        fantasy_period?: number;
        timestamp_start?: number;
        timestamp_end?: number;
        leagues?: {
            league_id?: number;
            cards?: {
                player_account_id?: number;
                player_name?: string;
                team_id?: number;
                team_name?: string;
                role?: number;
                bonuses?: {
                    bonus_stat?: number;
                    bonus_value?: number;
                }[];
                score?: number;
                finalized?: boolean;
                item_id?: string;
            }[];
            score?: number;
        }[];
    } & {
        fantasy_period?: number;
        timestamp_start?: number;
        timestamp_end?: number;
        leagues?: {
            league_id?: number;
            cards?: {
                player_account_id?: number;
                player_name?: string;
                team_id?: number;
                team_name?: string;
                role?: number;
                bonuses?: {
                    bonus_stat?: number;
                    bonus_value?: number;
                }[];
                score?: number;
                finalized?: boolean;
                item_id?: string;
            }[];
            score?: number;
        }[] & ({
            league_id?: number;
            cards?: {
                player_account_id?: number;
                player_name?: string;
                team_id?: number;
                team_name?: string;
                role?: number;
                bonuses?: {
                    bonus_stat?: number;
                    bonus_value?: number;
                }[];
                score?: number;
                finalized?: boolean;
                item_id?: string;
            }[];
            score?: number;
        } & {
            league_id?: number;
            cards?: {
                player_account_id?: number;
                player_name?: string;
                team_id?: number;
                team_name?: string;
                role?: number;
                bonuses?: {
                    bonus_stat?: number;
                    bonus_value?: number;
                }[];
                score?: number;
                finalized?: boolean;
                item_id?: string;
            }[] & ({
                player_account_id?: number;
                player_name?: string;
                team_id?: number;
                team_name?: string;
                role?: number;
                bonuses?: {
                    bonus_stat?: number;
                    bonus_value?: number;
                }[];
                score?: number;
                finalized?: boolean;
                item_id?: string;
            } & {
                player_account_id?: number;
                player_name?: string;
                team_id?: number;
                team_name?: string;
                role?: number;
                bonuses?: {
                    bonus_stat?: number;
                    bonus_value?: number;
                }[] & ({
                    bonus_stat?: number;
                    bonus_value?: number;
                } & {
                    bonus_stat?: number;
                    bonus_value?: number;
                } & { [K_7 in Exclude<keyof I_1["leagues"][number]["cards"][number]["bonuses"][number], keyof CMsgDOTAFantasyCardLineup_CardBonus>]: never; })[] & { [K_8 in Exclude<keyof I_1["leagues"][number]["cards"][number]["bonuses"], keyof {
                    bonus_stat?: number;
                    bonus_value?: number;
                }[]>]: never; };
                score?: number;
                finalized?: boolean;
                item_id?: string;
            } & { [K_9 in Exclude<keyof I_1["leagues"][number]["cards"][number], keyof CMsgDOTAFantasyCardLineup_Card>]: never; })[] & { [K_10 in Exclude<keyof I_1["leagues"][number]["cards"], keyof {
                player_account_id?: number;
                player_name?: string;
                team_id?: number;
                team_name?: string;
                role?: number;
                bonuses?: {
                    bonus_stat?: number;
                    bonus_value?: number;
                }[];
                score?: number;
                finalized?: boolean;
                item_id?: string;
            }[]>]: never; };
            score?: number;
        } & { [K_11 in Exclude<keyof I_1["leagues"][number], keyof CMsgDOTAFantasyCardLineup_League>]: never; })[] & { [K_12 in Exclude<keyof I_1["leagues"], keyof {
            league_id?: number;
            cards?: {
                player_account_id?: number;
                player_name?: string;
                team_id?: number;
                team_name?: string;
                role?: number;
                bonuses?: {
                    bonus_stat?: number;
                    bonus_value?: number;
                }[];
                score?: number;
                finalized?: boolean;
                item_id?: string;
            }[];
            score?: number;
        }[]>]: never; };
    } & { [K_13 in Exclude<keyof I_1, keyof CMsgDOTAFantasyCardLineup_Period>]: never; }>(object: I_1): CMsgDOTAFantasyCardLineup_Period;
};
export declare const CMsgDOTAFantasyCardList: {
    fromJSON(object: any): CMsgDOTAFantasyCardList;
    toJSON(message: CMsgDOTAFantasyCardList): unknown;
    create<I extends {
        cards?: {
            player_account_id?: number;
            player_name?: string;
            team_id?: number;
            team_name?: string;
            role?: number;
            bonuses?: {
                bonus_stat?: number;
                bonus_value?: number;
            }[];
            item_id?: string;
        }[];
    } & {
        cards?: {
            player_account_id?: number;
            player_name?: string;
            team_id?: number;
            team_name?: string;
            role?: number;
            bonuses?: {
                bonus_stat?: number;
                bonus_value?: number;
            }[];
            item_id?: string;
        }[] & ({
            player_account_id?: number;
            player_name?: string;
            team_id?: number;
            team_name?: string;
            role?: number;
            bonuses?: {
                bonus_stat?: number;
                bonus_value?: number;
            }[];
            item_id?: string;
        } & {
            player_account_id?: number;
            player_name?: string;
            team_id?: number;
            team_name?: string;
            role?: number;
            bonuses?: {
                bonus_stat?: number;
                bonus_value?: number;
            }[] & ({
                bonus_stat?: number;
                bonus_value?: number;
            } & {
                bonus_stat?: number;
                bonus_value?: number;
            } & { [K in Exclude<keyof I["cards"][number]["bonuses"][number], keyof CMsgDOTAFantasyCardList_CardBonus>]: never; })[] & { [K_1 in Exclude<keyof I["cards"][number]["bonuses"], keyof {
                bonus_stat?: number;
                bonus_value?: number;
            }[]>]: never; };
            item_id?: string;
        } & { [K_2 in Exclude<keyof I["cards"][number], keyof CMsgDOTAFantasyCardList_Card>]: never; })[] & { [K_3 in Exclude<keyof I["cards"], keyof {
            player_account_id?: number;
            player_name?: string;
            team_id?: number;
            team_name?: string;
            role?: number;
            bonuses?: {
                bonus_stat?: number;
                bonus_value?: number;
            }[];
            item_id?: string;
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, "cards">]: never; }>(base?: I): CMsgDOTAFantasyCardList;
    fromPartial<I_1 extends {
        cards?: {
            player_account_id?: number;
            player_name?: string;
            team_id?: number;
            team_name?: string;
            role?: number;
            bonuses?: {
                bonus_stat?: number;
                bonus_value?: number;
            }[];
            item_id?: string;
        }[];
    } & {
        cards?: {
            player_account_id?: number;
            player_name?: string;
            team_id?: number;
            team_name?: string;
            role?: number;
            bonuses?: {
                bonus_stat?: number;
                bonus_value?: number;
            }[];
            item_id?: string;
        }[] & ({
            player_account_id?: number;
            player_name?: string;
            team_id?: number;
            team_name?: string;
            role?: number;
            bonuses?: {
                bonus_stat?: number;
                bonus_value?: number;
            }[];
            item_id?: string;
        } & {
            player_account_id?: number;
            player_name?: string;
            team_id?: number;
            team_name?: string;
            role?: number;
            bonuses?: {
                bonus_stat?: number;
                bonus_value?: number;
            }[] & ({
                bonus_stat?: number;
                bonus_value?: number;
            } & {
                bonus_stat?: number;
                bonus_value?: number;
            } & { [K_5 in Exclude<keyof I_1["cards"][number]["bonuses"][number], keyof CMsgDOTAFantasyCardList_CardBonus>]: never; })[] & { [K_6 in Exclude<keyof I_1["cards"][number]["bonuses"], keyof {
                bonus_stat?: number;
                bonus_value?: number;
            }[]>]: never; };
            item_id?: string;
        } & { [K_7 in Exclude<keyof I_1["cards"][number], keyof CMsgDOTAFantasyCardList_Card>]: never; })[] & { [K_8 in Exclude<keyof I_1["cards"], keyof {
            player_account_id?: number;
            player_name?: string;
            team_id?: number;
            team_name?: string;
            role?: number;
            bonuses?: {
                bonus_stat?: number;
                bonus_value?: number;
            }[];
            item_id?: string;
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "cards">]: never; }>(object: I_1): CMsgDOTAFantasyCardList;
};
export declare const CMsgDOTAFantasyCardList_CardBonus: {
    fromJSON(object: any): CMsgDOTAFantasyCardList_CardBonus;
    toJSON(message: CMsgDOTAFantasyCardList_CardBonus): unknown;
    create<I extends {
        bonus_stat?: number;
        bonus_value?: number;
    } & {
        bonus_stat?: number;
        bonus_value?: number;
    } & { [K in Exclude<keyof I, keyof CMsgDOTAFantasyCardList_CardBonus>]: never; }>(base?: I): CMsgDOTAFantasyCardList_CardBonus;
    fromPartial<I_1 extends {
        bonus_stat?: number;
        bonus_value?: number;
    } & {
        bonus_stat?: number;
        bonus_value?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgDOTAFantasyCardList_CardBonus>]: never; }>(object: I_1): CMsgDOTAFantasyCardList_CardBonus;
};
export declare const CMsgDOTAFantasyCardList_Card: {
    fromJSON(object: any): CMsgDOTAFantasyCardList_Card;
    toJSON(message: CMsgDOTAFantasyCardList_Card): unknown;
    create<I extends {
        player_account_id?: number;
        player_name?: string;
        team_id?: number;
        team_name?: string;
        role?: number;
        bonuses?: {
            bonus_stat?: number;
            bonus_value?: number;
        }[];
        item_id?: string;
    } & {
        player_account_id?: number;
        player_name?: string;
        team_id?: number;
        team_name?: string;
        role?: number;
        bonuses?: {
            bonus_stat?: number;
            bonus_value?: number;
        }[] & ({
            bonus_stat?: number;
            bonus_value?: number;
        } & {
            bonus_stat?: number;
            bonus_value?: number;
        } & { [K in Exclude<keyof I["bonuses"][number], keyof CMsgDOTAFantasyCardList_CardBonus>]: never; })[] & { [K_1 in Exclude<keyof I["bonuses"], keyof {
            bonus_stat?: number;
            bonus_value?: number;
        }[]>]: never; };
        item_id?: string;
    } & { [K_2 in Exclude<keyof I, keyof CMsgDOTAFantasyCardList_Card>]: never; }>(base?: I): CMsgDOTAFantasyCardList_Card;
    fromPartial<I_1 extends {
        player_account_id?: number;
        player_name?: string;
        team_id?: number;
        team_name?: string;
        role?: number;
        bonuses?: {
            bonus_stat?: number;
            bonus_value?: number;
        }[];
        item_id?: string;
    } & {
        player_account_id?: number;
        player_name?: string;
        team_id?: number;
        team_name?: string;
        role?: number;
        bonuses?: {
            bonus_stat?: number;
            bonus_value?: number;
        }[] & ({
            bonus_stat?: number;
            bonus_value?: number;
        } & {
            bonus_stat?: number;
            bonus_value?: number;
        } & { [K_3 in Exclude<keyof I_1["bonuses"][number], keyof CMsgDOTAFantasyCardList_CardBonus>]: never; })[] & { [K_4 in Exclude<keyof I_1["bonuses"], keyof {
            bonus_stat?: number;
            bonus_value?: number;
        }[]>]: never; };
        item_id?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgDOTAFantasyCardList_Card>]: never; }>(object: I_1): CMsgDOTAFantasyCardList_Card;
};
export declare const CMsgChatToxicityReport: {
    fromJSON(object: any): CMsgChatToxicityReport;
    toJSON(message: CMsgChatToxicityReport): unknown;
    create<I extends {
        num_matches_seen?: number;
        num_messages?: number;
        num_messages_human_thinks_toxic?: number;
        num_messages_ml_thinks_toxic?: number;
        status?: string;
        result?: number;
        message?: string;
    } & {
        num_matches_seen?: number;
        num_messages?: number;
        num_messages_human_thinks_toxic?: number;
        num_messages_ml_thinks_toxic?: number;
        status?: string;
        result?: number;
        message?: string;
    } & { [K in Exclude<keyof I, keyof CMsgChatToxicityReport>]: never; }>(base?: I): CMsgChatToxicityReport;
    fromPartial<I_1 extends {
        num_matches_seen?: number;
        num_messages?: number;
        num_messages_human_thinks_toxic?: number;
        num_messages_ml_thinks_toxic?: number;
        status?: string;
        result?: number;
        message?: string;
    } & {
        num_matches_seen?: number;
        num_messages?: number;
        num_messages_human_thinks_toxic?: number;
        num_messages_ml_thinks_toxic?: number;
        status?: string;
        result?: number;
        message?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgChatToxicityReport>]: never; }>(object: I_1): CMsgChatToxicityReport;
};
export declare const CMsgGetTeamAuditInformation: {
    fromJSON(object: any): CMsgGetTeamAuditInformation;
    toJSON(message: CMsgGetTeamAuditInformation): unknown;
    create<I extends {
        team_id?: number;
        team_name?: string;
        actions?: {
            registration_period?: number;
            account_id?: number;
            action?: number;
            timestamp?: number;
            player_name?: string;
            player_real_name?: string;
        }[];
        last_updated?: number;
    } & {
        team_id?: number;
        team_name?: string;
        actions?: {
            registration_period?: number;
            account_id?: number;
            action?: number;
            timestamp?: number;
            player_name?: string;
            player_real_name?: string;
        }[] & ({
            registration_period?: number;
            account_id?: number;
            action?: number;
            timestamp?: number;
            player_name?: string;
            player_real_name?: string;
        } & {
            registration_period?: number;
            account_id?: number;
            action?: number;
            timestamp?: number;
            player_name?: string;
            player_real_name?: string;
        } & { [K in Exclude<keyof I["actions"][number], keyof CMsgGetTeamAuditInformation_Action>]: never; })[] & { [K_1 in Exclude<keyof I["actions"], keyof {
            registration_period?: number;
            account_id?: number;
            action?: number;
            timestamp?: number;
            player_name?: string;
            player_real_name?: string;
        }[]>]: never; };
        last_updated?: number;
    } & { [K_2 in Exclude<keyof I, keyof CMsgGetTeamAuditInformation>]: never; }>(base?: I): CMsgGetTeamAuditInformation;
    fromPartial<I_1 extends {
        team_id?: number;
        team_name?: string;
        actions?: {
            registration_period?: number;
            account_id?: number;
            action?: number;
            timestamp?: number;
            player_name?: string;
            player_real_name?: string;
        }[];
        last_updated?: number;
    } & {
        team_id?: number;
        team_name?: string;
        actions?: {
            registration_period?: number;
            account_id?: number;
            action?: number;
            timestamp?: number;
            player_name?: string;
            player_real_name?: string;
        }[] & ({
            registration_period?: number;
            account_id?: number;
            action?: number;
            timestamp?: number;
            player_name?: string;
            player_real_name?: string;
        } & {
            registration_period?: number;
            account_id?: number;
            action?: number;
            timestamp?: number;
            player_name?: string;
            player_real_name?: string;
        } & { [K_3 in Exclude<keyof I_1["actions"][number], keyof CMsgGetTeamAuditInformation_Action>]: never; })[] & { [K_4 in Exclude<keyof I_1["actions"], keyof {
            registration_period?: number;
            account_id?: number;
            action?: number;
            timestamp?: number;
            player_name?: string;
            player_real_name?: string;
        }[]>]: never; };
        last_updated?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgGetTeamAuditInformation>]: never; }>(object: I_1): CMsgGetTeamAuditInformation;
};
export declare const CMsgGetTeamAuditInformation_Action: {
    fromJSON(object: any): CMsgGetTeamAuditInformation_Action;
    toJSON(message: CMsgGetTeamAuditInformation_Action): unknown;
    create<I extends {
        registration_period?: number;
        account_id?: number;
        action?: number;
        timestamp?: number;
        player_name?: string;
        player_real_name?: string;
    } & {
        registration_period?: number;
        account_id?: number;
        action?: number;
        timestamp?: number;
        player_name?: string;
        player_real_name?: string;
    } & { [K in Exclude<keyof I, keyof CMsgGetTeamAuditInformation_Action>]: never; }>(base?: I): CMsgGetTeamAuditInformation_Action;
    fromPartial<I_1 extends {
        registration_period?: number;
        account_id?: number;
        action?: number;
        timestamp?: number;
        player_name?: string;
        player_real_name?: string;
    } & {
        registration_period?: number;
        account_id?: number;
        action?: number;
        timestamp?: number;
        player_name?: string;
        player_real_name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGetTeamAuditInformation_Action>]: never; }>(object: I_1): CMsgGetTeamAuditInformation_Action;
};
export declare const CMsgDOTADPCMatch: {
    fromJSON(object: any): CMsgDOTADPCMatch;
    toJSON(message: CMsgDOTADPCMatch): unknown;
    create<I extends {
        match?: {
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
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[];
                hero_damage_dealt?: {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[];
                seconds_dead?: number;
                gold_lost_to_death?: number;
                lane_selection_flags?: number;
                bounty_runes?: number;
                outposts_captured?: number;
                team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
            game_mode?: import("./dota_shared_enums").DOTA_GameMode;
            picks_bans?: {
                is_pick?: boolean;
                team?: number;
                hero_id?: number;
            }[];
            match_seq_num?: string;
            replay_state?: import("./dota_gcmessages_common").CMsgDOTAMatch_ReplayState;
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
            match_outcome?: import("./dota_shared_enums").EMatchOutcome;
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
        };
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
                    rank_mmr_boost_type?: import("./dota_shared_enums").EDOTAMMRBoostType;
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
                    team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
                event_id?: import("./dota_shared_enums").EEvent;
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
                event_id?: import("./dota_shared_enums").EEvent;
            }[];
        };
    } & {
        match?: {
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
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[];
                hero_damage_dealt?: {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[];
                seconds_dead?: number;
                gold_lost_to_death?: number;
                lane_selection_flags?: number;
                bounty_runes?: number;
                outposts_captured?: number;
                team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
            game_mode?: import("./dota_shared_enums").DOTA_GameMode;
            picks_bans?: {
                is_pick?: boolean;
                team?: number;
                hero_id?: number;
            }[];
            match_seq_num?: string;
            replay_state?: import("./dota_gcmessages_common").CMsgDOTAMatch_ReplayState;
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
            match_outcome?: import("./dota_shared_enums").EMatchOutcome;
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
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[];
                hero_damage_dealt?: {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[];
                seconds_dead?: number;
                gold_lost_to_death?: number;
                lane_selection_flags?: number;
                bounty_runes?: number;
                outposts_captured?: number;
                team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[];
                hero_damage_dealt?: {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[];
                seconds_dead?: number;
                gold_lost_to_death?: number;
                lane_selection_flags?: number;
                bounty_runes?: number;
                outposts_captured?: number;
                team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
                } & { [K in Exclude<keyof I["match"]["players"][number]["ability_upgrades"][number], keyof import("./dota_gcmessages_common").CMatchPlayerAbilityUpgrade>]: never; })[] & { [K_1 in Exclude<keyof I["match"]["players"][number]["ability_upgrades"], keyof {
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
                    items?: number[] & number[] & { [K_2 in Exclude<keyof I["match"]["players"][number]["additional_units_inventory"][number]["items"], keyof number[]>]: never; };
                } & { [K_3 in Exclude<keyof I["match"]["players"][number]["additional_units_inventory"][number], keyof import("./dota_gcmessages_common").CMatchAdditionalUnitInventory>]: never; })[] & { [K_4 in Exclude<keyof I["match"]["players"][number]["additional_units_inventory"], keyof {
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
                } & { [K_5 in Exclude<keyof I["match"]["players"][number]["permanent_buffs"][number], keyof import("./dota_gcmessages_common").CMatchPlayerPermanentBuff>]: never; })[] & { [K_6 in Exclude<keyof I["match"]["players"][number]["permanent_buffs"], keyof {
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
                } & { [K_7 in Exclude<keyof I["match"]["players"][number]["custom_game_data"], keyof import("./dota_gcmessages_common").CMsgDOTAMatch_Player_CustomGameData>]: never; };
                active_plus_subscription?: boolean;
                net_worth?: number;
                bot_difficulty?: number;
                hero_pick_order?: number;
                hero_was_randomed?: boolean;
                hero_was_dota_plus_suggestion?: boolean;
                hero_damage_received?: {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[] & ({
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                } & {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                } & { [K_8 in Exclude<keyof I["match"]["players"][number]["hero_damage_received"][number], keyof import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageReceived>]: never; })[] & { [K_9 in Exclude<keyof I["match"]["players"][number]["hero_damage_received"], keyof {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[]>]: never; };
                hero_damage_dealt?: {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[] & ({
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                } & {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                } & { [K_10 in Exclude<keyof I["match"]["players"][number]["hero_damage_dealt"][number], keyof import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageReceived>]: never; })[] & { [K_11 in Exclude<keyof I["match"]["players"][number]["hero_damage_dealt"], keyof {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[]>]: never; };
                seconds_dead?: number;
                gold_lost_to_death?: number;
                lane_selection_flags?: number;
                bounty_runes?: number;
                outposts_captured?: number;
                team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
                team_slot?: number;
            } & { [K_12 in Exclude<keyof I["match"]["players"][number], keyof import("./dota_gcmessages_common").CMsgDOTAMatch_Player>]: never; })[] & { [K_13 in Exclude<keyof I["match"]["players"], keyof {
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
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[];
                hero_damage_dealt?: {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[];
                seconds_dead?: number;
                gold_lost_to_death?: number;
                lane_selection_flags?: number;
                bounty_runes?: number;
                outposts_captured?: number;
                team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
                team_slot?: number;
            }[]>]: never; };
            match_id?: string;
            tower_status?: number[] & number[] & { [K_14 in Exclude<keyof I["match"]["tower_status"], keyof number[]>]: never; };
            barracks_status?: number[] & number[] & { [K_15 in Exclude<keyof I["match"]["barracks_status"], keyof number[]>]: never; };
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
            game_mode?: import("./dota_shared_enums").DOTA_GameMode;
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
            } & { [K_16 in Exclude<keyof I["match"]["picks_bans"][number], keyof import("./dota_gcmessages_common").CMatchHeroSelectEvent>]: never; })[] & { [K_17 in Exclude<keyof I["match"]["picks_bans"], keyof {
                is_pick?: boolean;
                team?: number;
                hero_id?: number;
            }[]>]: never; };
            match_seq_num?: string;
            replay_state?: import("./dota_gcmessages_common").CMsgDOTAMatch_ReplayState;
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
                } & { [K_18 in Exclude<keyof I["match"]["broadcaster_channels"][number]["broadcaster_infos"][number], keyof import("./dota_gcmessages_common").CMsgDOTAMatch_BroadcasterInfo>]: never; })[] & { [K_19 in Exclude<keyof I["match"]["broadcaster_channels"][number]["broadcaster_infos"], keyof {
                    account_id?: number;
                    name?: string;
                }[]>]: never; };
                language_code?: string;
            } & { [K_20 in Exclude<keyof I["match"]["broadcaster_channels"][number], keyof import("./dota_gcmessages_common").CMsgDOTAMatch_BroadcasterChannel>]: never; })[] & { [K_21 in Exclude<keyof I["match"]["broadcaster_channels"], keyof {
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
            } & { [K_22 in Exclude<keyof I["match"]["custom_game_data"], keyof import("./dota_gcmessages_common").CMsgDOTAMatch_CustomGameData>]: never; };
            match_flags?: number;
            private_metadata_key?: number;
            radiant_team_score?: number;
            dire_team_score?: number;
            match_outcome?: import("./dota_shared_enums").EMatchOutcome;
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
            } & { [K_23 in Exclude<keyof I["match"]["coaches"][number], keyof import("./dota_gcmessages_common").CMsgDOTAMatch_Coach>]: never; })[] & { [K_24 in Exclude<keyof I["match"]["coaches"], keyof {
                account_id?: number;
                coach_name?: string;
                coach_rating?: number;
                coach_team?: number;
                coach_party_id?: string;
                is_private_coach?: boolean;
            }[]>]: never; };
        } & { [K_25 in Exclude<keyof I["match"], keyof CMsgDOTAMatch>]: never; };
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
                    rank_mmr_boost_type?: import("./dota_shared_enums").EDOTAMMRBoostType;
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
                    team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
                event_id?: import("./dota_shared_enums").EEvent;
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
                event_id?: import("./dota_shared_enums").EEvent;
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
                    rank_mmr_boost_type?: import("./dota_shared_enums").EDOTAMMRBoostType;
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
                    team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
                    rank_mmr_boost_type?: import("./dota_shared_enums").EDOTAMMRBoostType;
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
                    team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
                    rank_mmr_boost_type?: import("./dota_shared_enums").EDOTAMMRBoostType;
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
                    team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
                    rank_mmr_boost_type?: import("./dota_shared_enums").EDOTAMMRBoostType;
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
                    team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
                    ability_upgrades?: number[] & number[] & { [K_26 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["ability_upgrades"], keyof number[]>]: never; };
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
                    } & { [K_27 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["kills"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_PlayerKill>]: never; })[] & { [K_28 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["kills"], keyof {
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
                    } & { [K_29 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["items"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_ItemPurchase>]: never; })[] & { [K_30 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["items"], keyof {
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
                    level_up_times?: number[] & number[] & { [K_31 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["level_up_times"], keyof number[]>]: never; };
                    graph_net_worth?: number[] & number[] & { [K_32 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["graph_net_worth"], keyof number[]>]: never; };
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
                        item_id?: number[] & number[] & { [K_33 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["inventory_snapshot"][number]["item_id"], keyof number[]>]: never; };
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[] & number[] & { [K_34 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["inventory_snapshot"][number]["backpack_item_id"], keyof number[]>]: never; };
                        neutral_item_id?: number;
                    } & { [K_35 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["inventory_snapshot"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_InventorySnapshot>]: never; })[] & { [K_36 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["inventory_snapshot"], keyof {
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
                    } & { [K_37 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["auto_style_criteria"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_AutoStyleCriteria>]: never; })[] & { [K_38 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["auto_style_criteria"], keyof {
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
                        } & { [K_39 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number]["sub_challenges_with_progress"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_SubChallenge>]: never; })[] & { [K_40 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number]["sub_challenges_with_progress"], keyof {
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
                        } & { [K_41 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number]["cavern_challenge_map_results"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_CavernChallengeResult>]: never; })[] & { [K_42 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number]["cavern_challenge_map_results"], keyof {
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
                        } & { [K_43 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number]["actions_granted"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_ActionGrant>]: never; })[] & { [K_44 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number]["actions_granted"], keyof {
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
                        } & { [K_45 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number]["candy_points_granted"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_CandyGrant>]: never; })[] & { [K_46 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number]["candy_points_granted"], keyof {
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
                        } & { [K_47 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number]["periodic_resources"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_PeriodicResourceData>]: never; })[] & { [K_48 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number]["periodic_resources"], keyof {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[]>]: never; };
                    } & { [K_49 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_EventData>]: never; })[] & { [K_50 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["event_data"], keyof {
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
                    } & { [K_51 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["strange_gem_progress"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_StrangeGemProgress>]: never; })[] & { [K_52 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["strange_gem_progress"], keyof {
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
                    } & { [K_53 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["victory_prediction"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_VictoryPrediction>]: never; })[] & { [K_54 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["victory_prediction"], keyof {
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
                    rank_mmr_boost_type?: import("./dota_shared_enums").EDOTAMMRBoostType;
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
                    } & { [K_55 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["contract_progress"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_Player_ContractProgress>]: never; })[] & { [K_56 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["contract_progress"], keyof {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[]>]: never; };
                    guild_ids?: number[] & number[] & { [K_57 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["guild_ids"], keyof number[]>]: never; };
                    graph_hero_damage?: number[] & number[] & { [K_58 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["graph_hero_damage"], keyof number[]>]: never; };
                    team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
                    team_slot?: number;
                    featured_gamemode_progress?: {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    } & {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    } & { [K_59 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["featured_gamemode_progress"], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_FeaturedGamemodeProgress>]: never; };
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
                        } & { [K_60 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["equipped_econ_items"][number]["attribute"][number], keyof import("./base_gcmessages").CSOEconItemAttribute>]: never; })[] & { [K_61 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["equipped_econ_items"][number]["attribute"], keyof {
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
                        } & { [K_62 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["equipped_econ_items"][number]["equipped_state"][number], keyof import("./base_gcmessages").CSOEconItemEquipped>]: never; })[] & { [K_63 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["equipped_econ_items"][number]["equipped_state"], keyof {
                            new_class?: number;
                            new_slot?: number;
                        }[]>]: never; };
                    } & { [K_64 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["equipped_econ_items"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_EconItem>]: never; })[] & { [K_65 in Exclude<keyof I["metadata"]["teams"][number]["players"][number]["equipped_econ_items"], keyof {
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
                } & { [K_66 in Exclude<keyof I["metadata"]["teams"][number]["players"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_Player>]: never; })[] & { [K_67 in Exclude<keyof I["metadata"]["teams"][number]["players"], keyof {
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
                    rank_mmr_boost_type?: import("./dota_shared_enums").EDOTAMMRBoostType;
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
                    team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
                graph_experience?: number[] & number[] & { [K_68 in Exclude<keyof I["metadata"]["teams"][number]["graph_experience"], keyof number[]>]: never; };
                graph_gold_earned?: number[] & number[] & { [K_69 in Exclude<keyof I["metadata"]["teams"][number]["graph_gold_earned"], keyof number[]>]: never; };
                graph_net_worth?: number[] & number[] & { [K_70 in Exclude<keyof I["metadata"]["teams"][number]["graph_net_worth"], keyof number[]>]: never; };
                cm_first_pick?: boolean;
                cm_captain_player_id?: number;
                cm_penalty?: number;
            } & { [K_71 in Exclude<keyof I["metadata"]["teams"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team>]: never; })[] & { [K_72 in Exclude<keyof I["metadata"]["teams"], keyof {
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
                    rank_mmr_boost_type?: import("./dota_shared_enums").EDOTAMMRBoostType;
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
                    team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
            } & { [K_73 in Exclude<keyof I["metadata"]["matchmaking_stats"], keyof import("./dota_gcmessages_common_match_management").CMsgMatchMatchmakingStats>]: never; };
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
                    } & { [K_74 in Exclude<keyof I["metadata"]["mvp_data"]["mvps"][number]["accolades"][number], keyof import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade>]: never; })[] & { [K_75 in Exclude<keyof I["metadata"]["mvp_data"]["mvps"][number]["accolades"], keyof {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    }[]>]: never; };
                } & { [K_76 in Exclude<keyof I["metadata"]["mvp_data"]["mvps"][number], keyof import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum>]: never; })[] & { [K_77 in Exclude<keyof I["metadata"]["mvp_data"]["mvps"], keyof {
                    player_slot?: number;
                    accolades?: {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    }[];
                }[]>]: never; };
            } & { [K_78 in Exclude<keyof I["metadata"]["mvp_data"], "mvps">]: never; };
            guild_challenge_progress?: {
                guild_id?: number;
                event_id?: import("./dota_shared_enums").EEvent;
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
                event_id?: import("./dota_shared_enums").EEvent;
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
                event_id?: import("./dota_shared_enums").EEvent;
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
                } & { [K_79 in Exclude<keyof I["metadata"]["guild_challenge_progress"][number]["individual_progress"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress>]: never; })[] & { [K_80 in Exclude<keyof I["metadata"]["guild_challenge_progress"][number]["individual_progress"], keyof {
                    progress?: number;
                    player_slot?: number;
                }[]>]: never; };
            } & { [K_81 in Exclude<keyof I["metadata"]["guild_challenge_progress"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_GuildChallengeProgress>]: never; })[] & { [K_82 in Exclude<keyof I["metadata"]["guild_challenge_progress"], keyof {
                guild_id?: number;
                event_id?: import("./dota_shared_enums").EEvent;
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
                event_id?: import("./dota_shared_enums").EEvent;
            }[] & ({
                source_player_slot?: number;
                target_player_slot?: number;
                tip_amount?: number;
                event_id?: import("./dota_shared_enums").EEvent;
            } & {
                source_player_slot?: number;
                target_player_slot?: number;
                tip_amount?: number;
                event_id?: import("./dota_shared_enums").EEvent;
            } & { [K_83 in Exclude<keyof I["metadata"]["match_tips"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Tip>]: never; })[] & { [K_84 in Exclude<keyof I["metadata"]["match_tips"], keyof {
                source_player_slot?: number;
                target_player_slot?: number;
                tip_amount?: number;
                event_id?: import("./dota_shared_enums").EEvent;
            }[]>]: never; };
        } & { [K_85 in Exclude<keyof I["metadata"], keyof CDOTAMatchMetadata>]: never; };
    } & { [K_86 in Exclude<keyof I, keyof CMsgDOTADPCMatch>]: never; }>(base?: I): CMsgDOTADPCMatch;
    fromPartial<I_1 extends {
        match?: {
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
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[];
                hero_damage_dealt?: {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[];
                seconds_dead?: number;
                gold_lost_to_death?: number;
                lane_selection_flags?: number;
                bounty_runes?: number;
                outposts_captured?: number;
                team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
            game_mode?: import("./dota_shared_enums").DOTA_GameMode;
            picks_bans?: {
                is_pick?: boolean;
                team?: number;
                hero_id?: number;
            }[];
            match_seq_num?: string;
            replay_state?: import("./dota_gcmessages_common").CMsgDOTAMatch_ReplayState;
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
            match_outcome?: import("./dota_shared_enums").EMatchOutcome;
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
        };
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
                    rank_mmr_boost_type?: import("./dota_shared_enums").EDOTAMMRBoostType;
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
                    team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
                event_id?: import("./dota_shared_enums").EEvent;
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
                event_id?: import("./dota_shared_enums").EEvent;
            }[];
        };
    } & {
        match?: {
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
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[];
                hero_damage_dealt?: {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[];
                seconds_dead?: number;
                gold_lost_to_death?: number;
                lane_selection_flags?: number;
                bounty_runes?: number;
                outposts_captured?: number;
                team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
            game_mode?: import("./dota_shared_enums").DOTA_GameMode;
            picks_bans?: {
                is_pick?: boolean;
                team?: number;
                hero_id?: number;
            }[];
            match_seq_num?: string;
            replay_state?: import("./dota_gcmessages_common").CMsgDOTAMatch_ReplayState;
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
            match_outcome?: import("./dota_shared_enums").EMatchOutcome;
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
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[];
                hero_damage_dealt?: {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[];
                seconds_dead?: number;
                gold_lost_to_death?: number;
                lane_selection_flags?: number;
                bounty_runes?: number;
                outposts_captured?: number;
                team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[];
                hero_damage_dealt?: {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[];
                seconds_dead?: number;
                gold_lost_to_death?: number;
                lane_selection_flags?: number;
                bounty_runes?: number;
                outposts_captured?: number;
                team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
                } & { [K_87 in Exclude<keyof I_1["match"]["players"][number]["ability_upgrades"][number], keyof import("./dota_gcmessages_common").CMatchPlayerAbilityUpgrade>]: never; })[] & { [K_88 in Exclude<keyof I_1["match"]["players"][number]["ability_upgrades"], keyof {
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
                    items?: number[] & number[] & { [K_89 in Exclude<keyof I_1["match"]["players"][number]["additional_units_inventory"][number]["items"], keyof number[]>]: never; };
                } & { [K_90 in Exclude<keyof I_1["match"]["players"][number]["additional_units_inventory"][number], keyof import("./dota_gcmessages_common").CMatchAdditionalUnitInventory>]: never; })[] & { [K_91 in Exclude<keyof I_1["match"]["players"][number]["additional_units_inventory"], keyof {
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
                } & { [K_92 in Exclude<keyof I_1["match"]["players"][number]["permanent_buffs"][number], keyof import("./dota_gcmessages_common").CMatchPlayerPermanentBuff>]: never; })[] & { [K_93 in Exclude<keyof I_1["match"]["players"][number]["permanent_buffs"], keyof {
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
                } & { [K_94 in Exclude<keyof I_1["match"]["players"][number]["custom_game_data"], keyof import("./dota_gcmessages_common").CMsgDOTAMatch_Player_CustomGameData>]: never; };
                active_plus_subscription?: boolean;
                net_worth?: number;
                bot_difficulty?: number;
                hero_pick_order?: number;
                hero_was_randomed?: boolean;
                hero_was_dota_plus_suggestion?: boolean;
                hero_damage_received?: {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[] & ({
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                } & {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                } & { [K_95 in Exclude<keyof I_1["match"]["players"][number]["hero_damage_received"][number], keyof import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageReceived>]: never; })[] & { [K_96 in Exclude<keyof I_1["match"]["players"][number]["hero_damage_received"], keyof {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[]>]: never; };
                hero_damage_dealt?: {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[] & ({
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                } & {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                } & { [K_97 in Exclude<keyof I_1["match"]["players"][number]["hero_damage_dealt"][number], keyof import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageReceived>]: never; })[] & { [K_98 in Exclude<keyof I_1["match"]["players"][number]["hero_damage_dealt"], keyof {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[]>]: never; };
                seconds_dead?: number;
                gold_lost_to_death?: number;
                lane_selection_flags?: number;
                bounty_runes?: number;
                outposts_captured?: number;
                team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
                team_slot?: number;
            } & { [K_99 in Exclude<keyof I_1["match"]["players"][number], keyof import("./dota_gcmessages_common").CMsgDOTAMatch_Player>]: never; })[] & { [K_100 in Exclude<keyof I_1["match"]["players"], keyof {
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
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[];
                hero_damage_dealt?: {
                    pre_reduction?: number;
                    post_reduction?: number;
                    damage_type?: import("./dota_gcmessages_common").CMsgDOTAMatch_Player_HeroDamageType;
                }[];
                seconds_dead?: number;
                gold_lost_to_death?: number;
                lane_selection_flags?: number;
                bounty_runes?: number;
                outposts_captured?: number;
                team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
                team_slot?: number;
            }[]>]: never; };
            match_id?: string;
            tower_status?: number[] & number[] & { [K_101 in Exclude<keyof I_1["match"]["tower_status"], keyof number[]>]: never; };
            barracks_status?: number[] & number[] & { [K_102 in Exclude<keyof I_1["match"]["barracks_status"], keyof number[]>]: never; };
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
            game_mode?: import("./dota_shared_enums").DOTA_GameMode;
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
            } & { [K_103 in Exclude<keyof I_1["match"]["picks_bans"][number], keyof import("./dota_gcmessages_common").CMatchHeroSelectEvent>]: never; })[] & { [K_104 in Exclude<keyof I_1["match"]["picks_bans"], keyof {
                is_pick?: boolean;
                team?: number;
                hero_id?: number;
            }[]>]: never; };
            match_seq_num?: string;
            replay_state?: import("./dota_gcmessages_common").CMsgDOTAMatch_ReplayState;
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
                } & { [K_105 in Exclude<keyof I_1["match"]["broadcaster_channels"][number]["broadcaster_infos"][number], keyof import("./dota_gcmessages_common").CMsgDOTAMatch_BroadcasterInfo>]: never; })[] & { [K_106 in Exclude<keyof I_1["match"]["broadcaster_channels"][number]["broadcaster_infos"], keyof {
                    account_id?: number;
                    name?: string;
                }[]>]: never; };
                language_code?: string;
            } & { [K_107 in Exclude<keyof I_1["match"]["broadcaster_channels"][number], keyof import("./dota_gcmessages_common").CMsgDOTAMatch_BroadcasterChannel>]: never; })[] & { [K_108 in Exclude<keyof I_1["match"]["broadcaster_channels"], keyof {
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
            } & { [K_109 in Exclude<keyof I_1["match"]["custom_game_data"], keyof import("./dota_gcmessages_common").CMsgDOTAMatch_CustomGameData>]: never; };
            match_flags?: number;
            private_metadata_key?: number;
            radiant_team_score?: number;
            dire_team_score?: number;
            match_outcome?: import("./dota_shared_enums").EMatchOutcome;
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
            } & { [K_110 in Exclude<keyof I_1["match"]["coaches"][number], keyof import("./dota_gcmessages_common").CMsgDOTAMatch_Coach>]: never; })[] & { [K_111 in Exclude<keyof I_1["match"]["coaches"], keyof {
                account_id?: number;
                coach_name?: string;
                coach_rating?: number;
                coach_team?: number;
                coach_party_id?: string;
                is_private_coach?: boolean;
            }[]>]: never; };
        } & { [K_112 in Exclude<keyof I_1["match"], keyof CMsgDOTAMatch>]: never; };
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
                    rank_mmr_boost_type?: import("./dota_shared_enums").EDOTAMMRBoostType;
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
                    team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
                event_id?: import("./dota_shared_enums").EEvent;
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
                event_id?: import("./dota_shared_enums").EEvent;
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
                    rank_mmr_boost_type?: import("./dota_shared_enums").EDOTAMMRBoostType;
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
                    team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
                    rank_mmr_boost_type?: import("./dota_shared_enums").EDOTAMMRBoostType;
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
                    team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
                    rank_mmr_boost_type?: import("./dota_shared_enums").EDOTAMMRBoostType;
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
                    team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
                    rank_mmr_boost_type?: import("./dota_shared_enums").EDOTAMMRBoostType;
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
                    team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
                    ability_upgrades?: number[] & number[] & { [K_113 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["ability_upgrades"], keyof number[]>]: never; };
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
                    } & { [K_114 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["kills"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_PlayerKill>]: never; })[] & { [K_115 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["kills"], keyof {
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
                    } & { [K_116 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["items"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_ItemPurchase>]: never; })[] & { [K_117 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["items"], keyof {
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
                    level_up_times?: number[] & number[] & { [K_118 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["level_up_times"], keyof number[]>]: never; };
                    graph_net_worth?: number[] & number[] & { [K_119 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["graph_net_worth"], keyof number[]>]: never; };
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
                        item_id?: number[] & number[] & { [K_120 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["inventory_snapshot"][number]["item_id"], keyof number[]>]: never; };
                        game_time?: number;
                        kills?: number;
                        deaths?: number;
                        assists?: number;
                        level?: number;
                        backpack_item_id?: number[] & number[] & { [K_121 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["inventory_snapshot"][number]["backpack_item_id"], keyof number[]>]: never; };
                        neutral_item_id?: number;
                    } & { [K_122 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["inventory_snapshot"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_InventorySnapshot>]: never; })[] & { [K_123 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["inventory_snapshot"], keyof {
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
                    } & { [K_124 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["auto_style_criteria"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_AutoStyleCriteria>]: never; })[] & { [K_125 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["auto_style_criteria"], keyof {
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
                        } & { [K_126 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number]["sub_challenges_with_progress"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_SubChallenge>]: never; })[] & { [K_127 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number]["sub_challenges_with_progress"], keyof {
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
                        } & { [K_128 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number]["cavern_challenge_map_results"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_CavernChallengeResult>]: never; })[] & { [K_129 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number]["cavern_challenge_map_results"], keyof {
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
                        } & { [K_130 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number]["actions_granted"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_ActionGrant>]: never; })[] & { [K_131 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number]["actions_granted"], keyof {
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
                        } & { [K_132 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number]["candy_points_granted"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_CandyGrant>]: never; })[] & { [K_133 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number]["candy_points_granted"], keyof {
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
                        } & { [K_134 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number]["periodic_resources"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_PeriodicResourceData>]: never; })[] & { [K_135 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number]["periodic_resources"], keyof {
                            periodic_resource_id?: number;
                            remaining?: number;
                            max?: number;
                        }[]>]: never; };
                    } & { [K_136 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_EventData>]: never; })[] & { [K_137 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["event_data"], keyof {
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
                    } & { [K_138 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["strange_gem_progress"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_StrangeGemProgress>]: never; })[] & { [K_139 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["strange_gem_progress"], keyof {
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
                    } & { [K_140 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["victory_prediction"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_VictoryPrediction>]: never; })[] & { [K_141 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["victory_prediction"], keyof {
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
                    rank_mmr_boost_type?: import("./dota_shared_enums").EDOTAMMRBoostType;
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
                    } & { [K_142 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["contract_progress"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_Player_ContractProgress>]: never; })[] & { [K_143 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["contract_progress"], keyof {
                        guild_id?: number;
                        event_id?: number;
                        challenge_instance_id?: number;
                        challenge_parameter?: number;
                        contract_stars?: number;
                        contract_slot?: number;
                        completed?: boolean;
                    }[]>]: never; };
                    guild_ids?: number[] & number[] & { [K_144 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["guild_ids"], keyof number[]>]: never; };
                    graph_hero_damage?: number[] & number[] & { [K_145 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["graph_hero_damage"], keyof number[]>]: never; };
                    team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
                    team_slot?: number;
                    featured_gamemode_progress?: {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    } & {
                        start_value?: number;
                        end_value?: number;
                        max_value?: number;
                    } & { [K_146 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["featured_gamemode_progress"], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_FeaturedGamemodeProgress>]: never; };
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
                        } & { [K_147 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["equipped_econ_items"][number]["attribute"][number], keyof import("./base_gcmessages").CSOEconItemAttribute>]: never; })[] & { [K_148 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["equipped_econ_items"][number]["attribute"], keyof {
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
                        } & { [K_149 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["equipped_econ_items"][number]["equipped_state"][number], keyof import("./base_gcmessages").CSOEconItemEquipped>]: never; })[] & { [K_150 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["equipped_econ_items"][number]["equipped_state"], keyof {
                            new_class?: number;
                            new_slot?: number;
                        }[]>]: never; };
                    } & { [K_151 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["equipped_econ_items"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_EconItem>]: never; })[] & { [K_152 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number]["equipped_econ_items"], keyof {
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
                } & { [K_153 in Exclude<keyof I_1["metadata"]["teams"][number]["players"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team_Player>]: never; })[] & { [K_154 in Exclude<keyof I_1["metadata"]["teams"][number]["players"], keyof {
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
                    rank_mmr_boost_type?: import("./dota_shared_enums").EDOTAMMRBoostType;
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
                    team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
                graph_experience?: number[] & number[] & { [K_155 in Exclude<keyof I_1["metadata"]["teams"][number]["graph_experience"], keyof number[]>]: never; };
                graph_gold_earned?: number[] & number[] & { [K_156 in Exclude<keyof I_1["metadata"]["teams"][number]["graph_gold_earned"], keyof number[]>]: never; };
                graph_net_worth?: number[] & number[] & { [K_157 in Exclude<keyof I_1["metadata"]["teams"][number]["graph_net_worth"], keyof number[]>]: never; };
                cm_first_pick?: boolean;
                cm_captain_player_id?: number;
                cm_penalty?: number;
            } & { [K_158 in Exclude<keyof I_1["metadata"]["teams"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Team>]: never; })[] & { [K_159 in Exclude<keyof I_1["metadata"]["teams"], keyof {
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
                    rank_mmr_boost_type?: import("./dota_shared_enums").EDOTAMMRBoostType;
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
                    team_number?: import("./dota_shared_enums").DOTA_GC_TEAM;
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
            } & { [K_160 in Exclude<keyof I_1["metadata"]["matchmaking_stats"], keyof import("./dota_gcmessages_common_match_management").CMsgMatchMatchmakingStats>]: never; };
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
                    } & { [K_161 in Exclude<keyof I_1["metadata"]["mvp_data"]["mvps"][number]["accolades"][number], keyof import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade>]: never; })[] & { [K_162 in Exclude<keyof I_1["metadata"]["mvp_data"]["mvps"][number]["accolades"], keyof {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    }[]>]: never; };
                } & { [K_163 in Exclude<keyof I_1["metadata"]["mvp_data"]["mvps"][number], keyof import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum>]: never; })[] & { [K_164 in Exclude<keyof I_1["metadata"]["mvp_data"]["mvps"], keyof {
                    player_slot?: number;
                    accolades?: {
                        type?: import("./dota_gcmessages_common_match_management").CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
                        detail_value?: number;
                    }[];
                }[]>]: never; };
            } & { [K_165 in Exclude<keyof I_1["metadata"]["mvp_data"], "mvps">]: never; };
            guild_challenge_progress?: {
                guild_id?: number;
                event_id?: import("./dota_shared_enums").EEvent;
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
                event_id?: import("./dota_shared_enums").EEvent;
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
                event_id?: import("./dota_shared_enums").EEvent;
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
                } & { [K_166 in Exclude<keyof I_1["metadata"]["guild_challenge_progress"][number]["individual_progress"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress>]: never; })[] & { [K_167 in Exclude<keyof I_1["metadata"]["guild_challenge_progress"][number]["individual_progress"], keyof {
                    progress?: number;
                    player_slot?: number;
                }[]>]: never; };
            } & { [K_168 in Exclude<keyof I_1["metadata"]["guild_challenge_progress"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_GuildChallengeProgress>]: never; })[] & { [K_169 in Exclude<keyof I_1["metadata"]["guild_challenge_progress"], keyof {
                guild_id?: number;
                event_id?: import("./dota_shared_enums").EEvent;
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
                event_id?: import("./dota_shared_enums").EEvent;
            }[] & ({
                source_player_slot?: number;
                target_player_slot?: number;
                tip_amount?: number;
                event_id?: import("./dota_shared_enums").EEvent;
            } & {
                source_player_slot?: number;
                target_player_slot?: number;
                tip_amount?: number;
                event_id?: import("./dota_shared_enums").EEvent;
            } & { [K_170 in Exclude<keyof I_1["metadata"]["match_tips"][number], keyof import("./dota_match_metadata").CDOTAMatchMetadata_Tip>]: never; })[] & { [K_171 in Exclude<keyof I_1["metadata"]["match_tips"], keyof {
                source_player_slot?: number;
                target_player_slot?: number;
                tip_amount?: number;
                event_id?: import("./dota_shared_enums").EEvent;
            }[]>]: never; };
        } & { [K_172 in Exclude<keyof I_1["metadata"], keyof CDOTAMatchMetadata>]: never; };
    } & { [K_173 in Exclude<keyof I_1, keyof CMsgDOTADPCMatch>]: never; }>(object: I_1): CMsgDOTADPCMatch;
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
