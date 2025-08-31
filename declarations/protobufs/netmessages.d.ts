import { CMsgQAngle, CMsgVector, CSVCMsg_GameSessionConfiguration } from "./networkbasetypes";
export declare const protobufPackage = "";
export declare enum CLC_Messages {
    clc_ClientInfo = 20,
    clc_Move = 21,
    clc_VoiceData = 22,
    clc_BaselineAck = 23,
    clc_ListenEvents = 24,
    clc_RespondCvarValue = 25,
    clc_FileCRCCheck = 26,
    clc_LoadingProgress = 27,
    clc_SplitPlayerConnect = 28,
    clc_ClientMessage = 29,
    clc_SplitPlayerDisconnect = 30,
    clc_ServerStatus = 31,
    clc_ServerPing = 32,
    clc_RequestPause = 33,
    clc_CmdKeyValues = 34,
    clc_RconServerDetails = 35,
    clc_HltvReplay = 36,
    UNRECOGNIZED = -1
}
export declare function cLC_MessagesFromJSON(object: any): CLC_Messages;
export declare function cLC_MessagesToJSON(object: CLC_Messages): string;
export declare enum SVC_Messages {
    svc_ServerInfo = 40,
    svc_FlattenedSerializer = 41,
    svc_ClassInfo = 42,
    svc_SetPause = 43,
    svc_CreateStringTable = 44,
    svc_UpdateStringTable = 45,
    svc_VoiceInit = 46,
    svc_VoiceData = 47,
    svc_Print = 48,
    svc_Sounds = 49,
    svc_SetView = 50,
    svc_ClearAllStringTables = 51,
    svc_CmdKeyValues = 52,
    svc_BSPDecal = 53,
    svc_SplitScreen = 54,
    svc_PacketEntities = 55,
    svc_Prefetch = 56,
    svc_Menu = 57,
    svc_GetCvarValue = 58,
    svc_StopSound = 59,
    svc_PeerList = 60,
    svc_PacketReliable = 61,
    svc_HLTVStatus = 62,
    svc_ServerSteamID = 63,
    svc_FullFrameSplit = 70,
    svc_RconServerDetails = 71,
    svc_UserMessage = 72,
    svc_HltvReplay = 73,
    svc_Broadcast_Command = 74,
    svc_HltvFixupOperatorStatus = 75,
    UNRECOGNIZED = -1
}
export declare function sVC_MessagesFromJSON(object: any): SVC_Messages;
export declare function sVC_MessagesToJSON(object: SVC_Messages): string;
export declare enum VoiceDataFormat_t {
    VOICEDATA_FORMAT_STEAM = 0,
    VOICEDATA_FORMAT_ENGINE = 1,
    UNRECOGNIZED = -1
}
export declare function voiceDataFormat_tFromJSON(object: any): VoiceDataFormat_t;
export declare function voiceDataFormat_tToJSON(object: VoiceDataFormat_t): string;
export declare enum RequestPause_t {
    RP_PAUSE = 0,
    RP_UNPAUSE = 1,
    RP_TOGGLEPAUSE = 2,
    UNRECOGNIZED = -1
}
export declare function requestPause_tFromJSON(object: any): RequestPause_t;
export declare function requestPause_tToJSON(object: RequestPause_t): string;
export declare enum PrefetchType {
    PFT_SOUND = 0,
    UNRECOGNIZED = -1
}
export declare function prefetchTypeFromJSON(object: any): PrefetchType;
export declare function prefetchTypeToJSON(object: PrefetchType): string;
export declare enum ESplitScreenMessageType {
    MSG_SPLITSCREEN_ADDUSER = 0,
    MSG_SPLITSCREEN_REMOVEUSER = 1,
    UNRECOGNIZED = -1
}
export declare function eSplitScreenMessageTypeFromJSON(object: any): ESplitScreenMessageType;
export declare function eSplitScreenMessageTypeToJSON(object: ESplitScreenMessageType): string;
export declare enum EQueryCvarValueStatus {
    eQueryCvarValueStatus_ValueIntact = 0,
    eQueryCvarValueStatus_CvarNotFound = 1,
    eQueryCvarValueStatus_NotACvar = 2,
    eQueryCvarValueStatus_CvarProtected = 3,
    UNRECOGNIZED = -1
}
export declare function eQueryCvarValueStatusFromJSON(object: any): EQueryCvarValueStatus;
export declare function eQueryCvarValueStatusToJSON(object: EQueryCvarValueStatus): string;
export declare enum DIALOG_TYPE {
    DIALOG_MSG = 0,
    DIALOG_MENU = 1,
    DIALOG_TEXT = 2,
    DIALOG_ENTRY = 3,
    DIALOG_ASKCONNECT = 4,
    UNRECOGNIZED = -1
}
export declare function dIALOG_TYPEFromJSON(object: any): DIALOG_TYPE;
export declare function dIALOG_TYPEToJSON(object: DIALOG_TYPE): string;
export declare enum SVC_Messages_LowFrequency {
    svc_dummy = 600,
    UNRECOGNIZED = -1
}
export declare function sVC_Messages_LowFrequencyFromJSON(object: any): SVC_Messages_LowFrequency;
export declare function sVC_Messages_LowFrequencyToJSON(object: SVC_Messages_LowFrequency): string;
export declare enum Bidirectional_Messages {
    bi_RebroadcastGameEvent = 16,
    bi_RebroadcastSource = 17,
    bi_GameEvent = 18,
    UNRECOGNIZED = -1
}
export declare function bidirectional_MessagesFromJSON(object: any): Bidirectional_Messages;
export declare function bidirectional_MessagesToJSON(object: Bidirectional_Messages): string;
export declare enum Bidirectional_Messages_LowFrequency {
    bi_RelayInfo = 700,
    bi_RelayPacket = 701,
    UNRECOGNIZED = -1
}
export declare function bidirectional_Messages_LowFrequencyFromJSON(object: any): Bidirectional_Messages_LowFrequency;
export declare function bidirectional_Messages_LowFrequencyToJSON(object: Bidirectional_Messages_LowFrequency): string;
export declare enum ReplayEventType_t {
    REPLAY_EVENT_CANCEL = 0,
    REPLAY_EVENT_DEATH = 1,
    REPLAY_EVENT_GENERIC = 2,
    REPLAY_EVENT_STUCK_NEED_FULL_UPDATE = 3,
    REPLAY_EVENT_VICTORY = 4,
    UNRECOGNIZED = -1
}
export declare function replayEventType_tFromJSON(object: any): ReplayEventType_t;
export declare function replayEventType_tToJSON(object: ReplayEventType_t): string;
export interface CCLCMsg_ClientInfo {
    send_table_crc: number;
    server_count: number;
    is_hltv: boolean;
    friends_id: number;
    friends_name: string;
}
export interface CCLCMsg_Move {
    data: string;
    command_number: number;
    num_commands: number;
}
export interface CMsgVoiceAudio {
    format: VoiceDataFormat_t;
    voice_data: string;
    sequence_bytes: number;
    section_number: number;
    sample_rate: number;
    uncompressed_sample_offset: number;
}
export interface CCLCMsg_VoiceData {
    audio: CMsgVoiceAudio | undefined;
    xuid: string;
    tick: number;
}
export interface CCLCMsg_BaselineAck {
    baseline_tick: number;
    baseline_nr: number;
}
export interface CCLCMsg_ListenEvents {
    event_mask: number[];
}
export interface CCLCMsg_RespondCvarValue {
    cookie: number;
    status_code: number;
    name: string;
    value: string;
}
export interface CCLCMsg_FileCRCCheck {
    code_path: number;
    path: string;
    code_filename: number;
    filename: string;
    crc: number;
}
export interface CCLCMsg_LoadingProgress {
    progress: number;
}
export interface CCLCMsg_SplitPlayerConnect {
    playername: string;
}
export interface CCLCMsg_ClientMessage {
    msg_type: number;
    data: string;
}
export interface CCLCMsg_SplitPlayerDisconnect {
    slot: number;
}
export interface CCLCMsg_ServerStatus {
    simplified: boolean;
}
export interface CCLCMsg_ServerPing {
}
export interface CCLCMsg_RequestPause {
    pause_type: RequestPause_t;
    pause_group: number;
}
export interface CCLCMsg_CmdKeyValues {
    data: string;
}
export interface CCLCMsg_RconServerDetails {
    token: string;
}
export interface CSVCMsg_ServerInfo {
    protocol: number;
    server_count: number;
    is_dedicated: boolean;
    is_hltv: boolean;
    c_os: number;
    max_clients: number;
    max_classes: number;
    player_slot: number;
    tick_interval: number;
    game_dir: string;
    map_name: string;
    sky_name: string;
    host_name: string;
    addon_name: string;
    game_session_config: CSVCMsg_GameSessionConfiguration | undefined;
    game_session_manifest: string;
}
export interface CSVCMsg_ClassInfo {
    create_on_client: boolean;
    classes: CSVCMsg_ClassInfo_class_t[];
}
export interface CSVCMsg_ClassInfo_class_t {
    class_id: number;
    data_table_name: string;
    class_name: string;
}
export interface CSVCMsg_SetPause {
    paused: boolean;
}
export interface CSVCMsg_VoiceInit {
    quality: number;
    codec: string;
    version: number;
}
export interface CSVCMsg_Print {
    text: string;
}
export interface CSVCMsg_Sounds {
    reliable_sound: boolean;
    sounds: CSVCMsg_Sounds_sounddata_t[];
}
export interface CSVCMsg_Sounds_sounddata_t {
    origin_x: number;
    origin_y: number;
    origin_z: number;
    volume: number;
    delay_value: number;
    sequence_number: number;
    entity_index: number;
    channel: number;
    pitch: number;
    flags: number;
    sound_num: number;
    sound_num_handle: number;
    speaker_entity: number;
    random_seed: number;
    sound_level: number;
    is_sentence: boolean;
    is_ambient: boolean;
    guid: number;
    sound_resource_id: string;
}
export interface CSVCMsg_Prefetch {
    sound_index: number;
    resource_type: PrefetchType;
}
export interface CSVCMsg_SetView {
    entity_index: number;
    slot: number;
}
export interface CSVCMsg_FixAngle {
    relative: boolean;
    angle: CMsgQAngle | undefined;
}
export interface CSVCMsg_CrosshairAngle {
    angle: CMsgQAngle | undefined;
}
export interface CSVCMsg_BSPDecal {
    pos: CMsgVector | undefined;
    decal_texture_index: number;
    entity_index: number;
    model_index: number;
    low_priority: boolean;
}
export interface CSVCMsg_SplitScreen {
    type: ESplitScreenMessageType;
    slot: number;
    player_index: number;
}
export interface CSVCMsg_GetCvarValue {
    cookie: number;
    cvar_name: string;
}
export interface CSVCMsg_Menu {
    dialog_type: number;
    menu_key_values: string;
}
export interface CSVCMsg_UserMessage {
    msg_type: number;
    msg_data: string;
    passthrough: number;
}
export interface CSVCMsg_SendTable {
    is_end: boolean;
    net_table_name: string;
    needs_decoder: boolean;
    props: CSVCMsg_SendTable_sendprop_t[];
}
export interface CSVCMsg_SendTable_sendprop_t {
    type: number;
    var_name: string;
    flags: number;
    priority: number;
    dt_name: string;
    num_elements: number;
    low_value: number;
    high_value: number;
    num_bits: number;
}
export interface CSVCMsg_GameEventList {
    descriptors: CSVCMsg_GameEventList_descriptor_t[];
}
export interface CSVCMsg_GameEventList_key_t {
    type: number;
    name: string;
}
export interface CSVCMsg_GameEventList_descriptor_t {
    eventid: number;
    name: string;
    keys: CSVCMsg_GameEventList_key_t[];
}
export interface CSVCMsg_PacketEntities {
    max_entries: number;
    updated_entries: number;
    is_delta: boolean;
    update_baseline: boolean;
    baseline: number;
    delta_from: number;
    entity_data: string;
    pending_full_frame: boolean;
    active_spawngroup_handle: number;
    max_spawngroup_creationsequence: number;
    last_cmd_number: number;
    server_tick: number;
    serialized_entities: string;
    command_queue_info: CSVCMsg_PacketEntities_command_queue_info_t | undefined;
    alternate_baselines: CSVCMsg_PacketEntities_alternate_baseline_t[];
}
export interface CSVCMsg_PacketEntities_command_queue_info_t {
    commands_queued: number;
    command_queue_desired_size: number;
    starved_command_ticks: number;
    time_dilation_percent: number;
    discarded_command_ticks: number;
}
export interface CSVCMsg_PacketEntities_alternate_baseline_t {
    entity_index: number;
    baseline_index: number;
}
export interface CSVCMsg_TempEntities {
    reliable: boolean;
    num_entries: number;
    entity_data: string;
}
export interface CSVCMsg_CreateStringTable {
    name: string;
    num_entries: number;
    user_data_fixed_size: boolean;
    user_data_size: number;
    user_data_size_bits: number;
    flags: number;
    string_data: string;
    uncompressed_size: number;
    data_compressed: boolean;
}
export interface CSVCMsg_UpdateStringTable {
    table_id: number;
    num_changed_entries: number;
    string_data: string;
}
export interface CSVCMsg_VoiceData {
    audio: CMsgVoiceAudio | undefined;
    client: number;
    proximity: boolean;
    xuid: string;
    audible_mask: number;
    tick: number;
}
export interface CSVCMsg_PacketReliable {
    tick: number;
    messagessize: number;
    state: boolean;
}
export interface CSVCMsg_FullFrameSplit {
    tick: number;
    section: number;
    total: number;
    data: string;
}
export interface CSVCMsg_HLTVStatus {
    master: string;
    clients: number;
    slots: number;
    proxies: number;
}
export interface CSVCMsg_ServerSteamID {
    steam_id: string;
}
export interface CSVCMsg_CmdKeyValues {
    data: string;
}
export interface CSVCMsg_RconServerDetails {
    token: string;
    details: string;
}
export interface CMsgIPCAddress {
    computer_guid: string;
    process_id: number;
}
export interface CMsgServerPeer {
    player_slot: number;
    steamid: string;
    ipc: CMsgIPCAddress | undefined;
    they_hear_you: boolean;
    you_hear_them: boolean;
    is_listenserver_host: boolean;
}
export interface CSVCMsg_PeerList {
    peer: CMsgServerPeer[];
}
export interface CSVCMsg_ClearAllStringTables {
    mapname: string;
}
export interface ProtoFlattenedSerializerField_t {
    var_type_sym: number;
    var_name_sym: number;
    bit_count: number;
    low_value: number;
    high_value: number;
    encode_flags: number;
    field_serializer_name_sym: number;
    field_serializer_version: number;
    send_node_sym: number;
    var_encoder_sym: number;
}
export interface ProtoFlattenedSerializer_t {
    serializer_name_sym: number;
    serializer_version: number;
    fields_index: number[];
}
export interface CSVCMsg_FlattenedSerializer {
    serializers: ProtoFlattenedSerializer_t[];
    symbols: string[];
    fields: ProtoFlattenedSerializerField_t[];
}
export interface CSVCMsg_StopSound {
    guid: number;
}
export interface CBidirMsg_RebroadcastGameEvent {
    posttoserver: boolean;
    buftype: number;
    clientbitcount: number;
    receivingclients: string;
}
export interface CBidirMsg_RebroadcastSource {
    eventsource: number;
}
export interface CMsgServerNetworkStats {
    dedicated: boolean;
    cpu_usage: number;
    memory_used_mb: number;
    memory_free_mb: number;
    uptime: number;
    spawn_count: number;
    num_clients: number;
    num_bots: number;
    num_spectators: number;
    num_tv_relays: number;
    fps: number;
    ports: CMsgServerNetworkStats_Port[];
    avg_latency_out: number;
    avg_latency_in: number;
    avg_packets_out: number;
    avg_packets_in: number;
    avg_loss_out: number;
    avg_loss_in: number;
    avg_data_out: number;
    avg_data_in: number;
    total_data_in: string;
    total_packets_in: string;
    total_data_out: string;
    total_packets_out: string;
    players: CMsgServerNetworkStats_Player[];
}
export interface CMsgServerNetworkStats_Port {
    port: number;
    name: string;
}
export interface CMsgServerNetworkStats_Player {
    steamid: string;
    remote_addr: string;
    ping_stddev_ms: number;
    ping_avg_ms: number;
    packet_loss_pct: number;
    is_bot: boolean;
}
export interface CSVCMsg_HltvReplay {
    delay: number;
    primary_target: number;
    replay_stop_at: number;
    replay_start_at: number;
    replay_slowdown_begin: number;
    replay_slowdown_end: number;
    replay_slowdown_rate: number;
    reason: number;
}
export interface CCLCMsg_HltvReplay {
    request: number;
    slowdown_length: number;
    slowdown_rate: number;
    primary_target: number;
    event_time: number;
}
export interface CSVCMsg_Broadcast_Command {
    cmd: string;
}
export interface CCLCMsg_HltvFixupOperatorTick {
    tick: number;
    props_data: string;
    origin: CMsgVector | undefined;
    eye_angles: CMsgQAngle | undefined;
    observer_mode: number;
    cameraman_scoreboard: boolean;
    observer_target: number;
    view_offset: CMsgVector | undefined;
}
export interface CSVCMsg_HltvFixupOperatorStatus {
    mode: number;
    override_operator_name: string;
}
export declare const CCLCMsg_ClientInfo: {
    fromJSON(object: any): CCLCMsg_ClientInfo;
    toJSON(message: CCLCMsg_ClientInfo): unknown;
    create<I extends {
        send_table_crc?: number;
        server_count?: number;
        is_hltv?: boolean;
        friends_id?: number;
        friends_name?: string;
    } & {
        send_table_crc?: number;
        server_count?: number;
        is_hltv?: boolean;
        friends_id?: number;
        friends_name?: string;
    } & { [K in Exclude<keyof I, keyof CCLCMsg_ClientInfo>]: never; }>(base?: I): CCLCMsg_ClientInfo;
    fromPartial<I_1 extends {
        send_table_crc?: number;
        server_count?: number;
        is_hltv?: boolean;
        friends_id?: number;
        friends_name?: string;
    } & {
        send_table_crc?: number;
        server_count?: number;
        is_hltv?: boolean;
        friends_id?: number;
        friends_name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CCLCMsg_ClientInfo>]: never; }>(object: I_1): CCLCMsg_ClientInfo;
};
export declare const CCLCMsg_Move: {
    fromJSON(object: any): CCLCMsg_Move;
    toJSON(message: CCLCMsg_Move): unknown;
    create<I extends {
        data?: string;
        command_number?: number;
        num_commands?: number;
    } & {
        data?: string;
        command_number?: number;
        num_commands?: number;
    } & { [K in Exclude<keyof I, keyof CCLCMsg_Move>]: never; }>(base?: I): CCLCMsg_Move;
    fromPartial<I_1 extends {
        data?: string;
        command_number?: number;
        num_commands?: number;
    } & {
        data?: string;
        command_number?: number;
        num_commands?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CCLCMsg_Move>]: never; }>(object: I_1): CCLCMsg_Move;
};
export declare const CMsgVoiceAudio: {
    fromJSON(object: any): CMsgVoiceAudio;
    toJSON(message: CMsgVoiceAudio): unknown;
    create<I extends {
        format?: VoiceDataFormat_t;
        voice_data?: string;
        sequence_bytes?: number;
        section_number?: number;
        sample_rate?: number;
        uncompressed_sample_offset?: number;
    } & {
        format?: VoiceDataFormat_t;
        voice_data?: string;
        sequence_bytes?: number;
        section_number?: number;
        sample_rate?: number;
        uncompressed_sample_offset?: number;
    } & { [K in Exclude<keyof I, keyof CMsgVoiceAudio>]: never; }>(base?: I): CMsgVoiceAudio;
    fromPartial<I_1 extends {
        format?: VoiceDataFormat_t;
        voice_data?: string;
        sequence_bytes?: number;
        section_number?: number;
        sample_rate?: number;
        uncompressed_sample_offset?: number;
    } & {
        format?: VoiceDataFormat_t;
        voice_data?: string;
        sequence_bytes?: number;
        section_number?: number;
        sample_rate?: number;
        uncompressed_sample_offset?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgVoiceAudio>]: never; }>(object: I_1): CMsgVoiceAudio;
};
export declare const CCLCMsg_VoiceData: {
    fromJSON(object: any): CCLCMsg_VoiceData;
    toJSON(message: CCLCMsg_VoiceData): unknown;
    create<I extends {
        audio?: {
            format?: VoiceDataFormat_t;
            voice_data?: string;
            sequence_bytes?: number;
            section_number?: number;
            sample_rate?: number;
            uncompressed_sample_offset?: number;
        };
        xuid?: string;
        tick?: number;
    } & {
        audio?: {
            format?: VoiceDataFormat_t;
            voice_data?: string;
            sequence_bytes?: number;
            section_number?: number;
            sample_rate?: number;
            uncompressed_sample_offset?: number;
        } & {
            format?: VoiceDataFormat_t;
            voice_data?: string;
            sequence_bytes?: number;
            section_number?: number;
            sample_rate?: number;
            uncompressed_sample_offset?: number;
        } & { [K in Exclude<keyof I["audio"], keyof CMsgVoiceAudio>]: never; };
        xuid?: string;
        tick?: number;
    } & { [K_1 in Exclude<keyof I, keyof CCLCMsg_VoiceData>]: never; }>(base?: I): CCLCMsg_VoiceData;
    fromPartial<I_1 extends {
        audio?: {
            format?: VoiceDataFormat_t;
            voice_data?: string;
            sequence_bytes?: number;
            section_number?: number;
            sample_rate?: number;
            uncompressed_sample_offset?: number;
        };
        xuid?: string;
        tick?: number;
    } & {
        audio?: {
            format?: VoiceDataFormat_t;
            voice_data?: string;
            sequence_bytes?: number;
            section_number?: number;
            sample_rate?: number;
            uncompressed_sample_offset?: number;
        } & {
            format?: VoiceDataFormat_t;
            voice_data?: string;
            sequence_bytes?: number;
            section_number?: number;
            sample_rate?: number;
            uncompressed_sample_offset?: number;
        } & { [K_2 in Exclude<keyof I_1["audio"], keyof CMsgVoiceAudio>]: never; };
        xuid?: string;
        tick?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CCLCMsg_VoiceData>]: never; }>(object: I_1): CCLCMsg_VoiceData;
};
export declare const CCLCMsg_BaselineAck: {
    fromJSON(object: any): CCLCMsg_BaselineAck;
    toJSON(message: CCLCMsg_BaselineAck): unknown;
    create<I extends {
        baseline_tick?: number;
        baseline_nr?: number;
    } & {
        baseline_tick?: number;
        baseline_nr?: number;
    } & { [K in Exclude<keyof I, keyof CCLCMsg_BaselineAck>]: never; }>(base?: I): CCLCMsg_BaselineAck;
    fromPartial<I_1 extends {
        baseline_tick?: number;
        baseline_nr?: number;
    } & {
        baseline_tick?: number;
        baseline_nr?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CCLCMsg_BaselineAck>]: never; }>(object: I_1): CCLCMsg_BaselineAck;
};
export declare const CCLCMsg_ListenEvents: {
    fromJSON(object: any): CCLCMsg_ListenEvents;
    toJSON(message: CCLCMsg_ListenEvents): unknown;
    create<I extends {
        event_mask?: number[];
    } & {
        event_mask?: number[] & number[] & { [K in Exclude<keyof I["event_mask"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, "event_mask">]: never; }>(base?: I): CCLCMsg_ListenEvents;
    fromPartial<I_1 extends {
        event_mask?: number[];
    } & {
        event_mask?: number[] & number[] & { [K_2 in Exclude<keyof I_1["event_mask"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "event_mask">]: never; }>(object: I_1): CCLCMsg_ListenEvents;
};
export declare const CCLCMsg_RespondCvarValue: {
    fromJSON(object: any): CCLCMsg_RespondCvarValue;
    toJSON(message: CCLCMsg_RespondCvarValue): unknown;
    create<I extends {
        cookie?: number;
        status_code?: number;
        name?: string;
        value?: string;
    } & {
        cookie?: number;
        status_code?: number;
        name?: string;
        value?: string;
    } & { [K in Exclude<keyof I, keyof CCLCMsg_RespondCvarValue>]: never; }>(base?: I): CCLCMsg_RespondCvarValue;
    fromPartial<I_1 extends {
        cookie?: number;
        status_code?: number;
        name?: string;
        value?: string;
    } & {
        cookie?: number;
        status_code?: number;
        name?: string;
        value?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CCLCMsg_RespondCvarValue>]: never; }>(object: I_1): CCLCMsg_RespondCvarValue;
};
export declare const CCLCMsg_FileCRCCheck: {
    fromJSON(object: any): CCLCMsg_FileCRCCheck;
    toJSON(message: CCLCMsg_FileCRCCheck): unknown;
    create<I extends {
        code_path?: number;
        path?: string;
        code_filename?: number;
        filename?: string;
        crc?: number;
    } & {
        code_path?: number;
        path?: string;
        code_filename?: number;
        filename?: string;
        crc?: number;
    } & { [K in Exclude<keyof I, keyof CCLCMsg_FileCRCCheck>]: never; }>(base?: I): CCLCMsg_FileCRCCheck;
    fromPartial<I_1 extends {
        code_path?: number;
        path?: string;
        code_filename?: number;
        filename?: string;
        crc?: number;
    } & {
        code_path?: number;
        path?: string;
        code_filename?: number;
        filename?: string;
        crc?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CCLCMsg_FileCRCCheck>]: never; }>(object: I_1): CCLCMsg_FileCRCCheck;
};
export declare const CCLCMsg_LoadingProgress: {
    fromJSON(object: any): CCLCMsg_LoadingProgress;
    toJSON(message: CCLCMsg_LoadingProgress): unknown;
    create<I extends {
        progress?: number;
    } & {
        progress?: number;
    } & { [K in Exclude<keyof I, "progress">]: never; }>(base?: I): CCLCMsg_LoadingProgress;
    fromPartial<I_1 extends {
        progress?: number;
    } & {
        progress?: number;
    } & { [K_1 in Exclude<keyof I_1, "progress">]: never; }>(object: I_1): CCLCMsg_LoadingProgress;
};
export declare const CCLCMsg_SplitPlayerConnect: {
    fromJSON(object: any): CCLCMsg_SplitPlayerConnect;
    toJSON(message: CCLCMsg_SplitPlayerConnect): unknown;
    create<I extends {
        playername?: string;
    } & {
        playername?: string;
    } & { [K in Exclude<keyof I, "playername">]: never; }>(base?: I): CCLCMsg_SplitPlayerConnect;
    fromPartial<I_1 extends {
        playername?: string;
    } & {
        playername?: string;
    } & { [K_1 in Exclude<keyof I_1, "playername">]: never; }>(object: I_1): CCLCMsg_SplitPlayerConnect;
};
export declare const CCLCMsg_ClientMessage: {
    fromJSON(object: any): CCLCMsg_ClientMessage;
    toJSON(message: CCLCMsg_ClientMessage): unknown;
    create<I extends {
        msg_type?: number;
        data?: string;
    } & {
        msg_type?: number;
        data?: string;
    } & { [K in Exclude<keyof I, keyof CCLCMsg_ClientMessage>]: never; }>(base?: I): CCLCMsg_ClientMessage;
    fromPartial<I_1 extends {
        msg_type?: number;
        data?: string;
    } & {
        msg_type?: number;
        data?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CCLCMsg_ClientMessage>]: never; }>(object: I_1): CCLCMsg_ClientMessage;
};
export declare const CCLCMsg_SplitPlayerDisconnect: {
    fromJSON(object: any): CCLCMsg_SplitPlayerDisconnect;
    toJSON(message: CCLCMsg_SplitPlayerDisconnect): unknown;
    create<I extends {
        slot?: number;
    } & {
        slot?: number;
    } & { [K in Exclude<keyof I, "slot">]: never; }>(base?: I): CCLCMsg_SplitPlayerDisconnect;
    fromPartial<I_1 extends {
        slot?: number;
    } & {
        slot?: number;
    } & { [K_1 in Exclude<keyof I_1, "slot">]: never; }>(object: I_1): CCLCMsg_SplitPlayerDisconnect;
};
export declare const CCLCMsg_ServerStatus: {
    fromJSON(object: any): CCLCMsg_ServerStatus;
    toJSON(message: CCLCMsg_ServerStatus): unknown;
    create<I extends {
        simplified?: boolean;
    } & {
        simplified?: boolean;
    } & { [K in Exclude<keyof I, "simplified">]: never; }>(base?: I): CCLCMsg_ServerStatus;
    fromPartial<I_1 extends {
        simplified?: boolean;
    } & {
        simplified?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "simplified">]: never; }>(object: I_1): CCLCMsg_ServerStatus;
};
export declare const CCLCMsg_ServerPing: {
    fromJSON(_: any): CCLCMsg_ServerPing;
    toJSON(_: CCLCMsg_ServerPing): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CCLCMsg_ServerPing;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CCLCMsg_ServerPing;
};
export declare const CCLCMsg_RequestPause: {
    fromJSON(object: any): CCLCMsg_RequestPause;
    toJSON(message: CCLCMsg_RequestPause): unknown;
    create<I extends {
        pause_type?: RequestPause_t;
        pause_group?: number;
    } & {
        pause_type?: RequestPause_t;
        pause_group?: number;
    } & { [K in Exclude<keyof I, keyof CCLCMsg_RequestPause>]: never; }>(base?: I): CCLCMsg_RequestPause;
    fromPartial<I_1 extends {
        pause_type?: RequestPause_t;
        pause_group?: number;
    } & {
        pause_type?: RequestPause_t;
        pause_group?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CCLCMsg_RequestPause>]: never; }>(object: I_1): CCLCMsg_RequestPause;
};
export declare const CCLCMsg_CmdKeyValues: {
    fromJSON(object: any): CCLCMsg_CmdKeyValues;
    toJSON(message: CCLCMsg_CmdKeyValues): unknown;
    create<I extends {
        data?: string;
    } & {
        data?: string;
    } & { [K in Exclude<keyof I, "data">]: never; }>(base?: I): CCLCMsg_CmdKeyValues;
    fromPartial<I_1 extends {
        data?: string;
    } & {
        data?: string;
    } & { [K_1 in Exclude<keyof I_1, "data">]: never; }>(object: I_1): CCLCMsg_CmdKeyValues;
};
export declare const CCLCMsg_RconServerDetails: {
    fromJSON(object: any): CCLCMsg_RconServerDetails;
    toJSON(message: CCLCMsg_RconServerDetails): unknown;
    create<I extends {
        token?: string;
    } & {
        token?: string;
    } & { [K in Exclude<keyof I, "token">]: never; }>(base?: I): CCLCMsg_RconServerDetails;
    fromPartial<I_1 extends {
        token?: string;
    } & {
        token?: string;
    } & { [K_1 in Exclude<keyof I_1, "token">]: never; }>(object: I_1): CCLCMsg_RconServerDetails;
};
export declare const CSVCMsg_ServerInfo: {
    fromJSON(object: any): CSVCMsg_ServerInfo;
    toJSON(message: CSVCMsg_ServerInfo): unknown;
    create<I extends {
        protocol?: number;
        server_count?: number;
        is_dedicated?: boolean;
        is_hltv?: boolean;
        c_os?: number;
        max_clients?: number;
        max_classes?: number;
        player_slot?: number;
        tick_interval?: number;
        game_dir?: string;
        map_name?: string;
        sky_name?: string;
        host_name?: string;
        addon_name?: string;
        game_session_config?: {
            is_multiplayer?: boolean;
            is_loadsavegame?: boolean;
            is_background_map?: boolean;
            is_headless?: boolean;
            min_client_limit?: number;
            max_client_limit?: number;
            max_clients?: number;
            tick_interval?: number;
            hostname?: string;
            savegamename?: string;
            s1_mapname?: string;
            gamemode?: string;
            server_ip_address?: string;
            data?: string;
            is_localonly?: boolean;
            no_steam_server?: boolean;
            is_transition?: boolean;
            previouslevel?: string;
            landmarkname?: string;
        };
        game_session_manifest?: string;
    } & {
        protocol?: number;
        server_count?: number;
        is_dedicated?: boolean;
        is_hltv?: boolean;
        c_os?: number;
        max_clients?: number;
        max_classes?: number;
        player_slot?: number;
        tick_interval?: number;
        game_dir?: string;
        map_name?: string;
        sky_name?: string;
        host_name?: string;
        addon_name?: string;
        game_session_config?: {
            is_multiplayer?: boolean;
            is_loadsavegame?: boolean;
            is_background_map?: boolean;
            is_headless?: boolean;
            min_client_limit?: number;
            max_client_limit?: number;
            max_clients?: number;
            tick_interval?: number;
            hostname?: string;
            savegamename?: string;
            s1_mapname?: string;
            gamemode?: string;
            server_ip_address?: string;
            data?: string;
            is_localonly?: boolean;
            no_steam_server?: boolean;
            is_transition?: boolean;
            previouslevel?: string;
            landmarkname?: string;
        } & {
            is_multiplayer?: boolean;
            is_loadsavegame?: boolean;
            is_background_map?: boolean;
            is_headless?: boolean;
            min_client_limit?: number;
            max_client_limit?: number;
            max_clients?: number;
            tick_interval?: number;
            hostname?: string;
            savegamename?: string;
            s1_mapname?: string;
            gamemode?: string;
            server_ip_address?: string;
            data?: string;
            is_localonly?: boolean;
            no_steam_server?: boolean;
            is_transition?: boolean;
            previouslevel?: string;
            landmarkname?: string;
        } & { [K in Exclude<keyof I["game_session_config"], keyof CSVCMsg_GameSessionConfiguration>]: never; };
        game_session_manifest?: string;
    } & { [K_1 in Exclude<keyof I, keyof CSVCMsg_ServerInfo>]: never; }>(base?: I): CSVCMsg_ServerInfo;
    fromPartial<I_1 extends {
        protocol?: number;
        server_count?: number;
        is_dedicated?: boolean;
        is_hltv?: boolean;
        c_os?: number;
        max_clients?: number;
        max_classes?: number;
        player_slot?: number;
        tick_interval?: number;
        game_dir?: string;
        map_name?: string;
        sky_name?: string;
        host_name?: string;
        addon_name?: string;
        game_session_config?: {
            is_multiplayer?: boolean;
            is_loadsavegame?: boolean;
            is_background_map?: boolean;
            is_headless?: boolean;
            min_client_limit?: number;
            max_client_limit?: number;
            max_clients?: number;
            tick_interval?: number;
            hostname?: string;
            savegamename?: string;
            s1_mapname?: string;
            gamemode?: string;
            server_ip_address?: string;
            data?: string;
            is_localonly?: boolean;
            no_steam_server?: boolean;
            is_transition?: boolean;
            previouslevel?: string;
            landmarkname?: string;
        };
        game_session_manifest?: string;
    } & {
        protocol?: number;
        server_count?: number;
        is_dedicated?: boolean;
        is_hltv?: boolean;
        c_os?: number;
        max_clients?: number;
        max_classes?: number;
        player_slot?: number;
        tick_interval?: number;
        game_dir?: string;
        map_name?: string;
        sky_name?: string;
        host_name?: string;
        addon_name?: string;
        game_session_config?: {
            is_multiplayer?: boolean;
            is_loadsavegame?: boolean;
            is_background_map?: boolean;
            is_headless?: boolean;
            min_client_limit?: number;
            max_client_limit?: number;
            max_clients?: number;
            tick_interval?: number;
            hostname?: string;
            savegamename?: string;
            s1_mapname?: string;
            gamemode?: string;
            server_ip_address?: string;
            data?: string;
            is_localonly?: boolean;
            no_steam_server?: boolean;
            is_transition?: boolean;
            previouslevel?: string;
            landmarkname?: string;
        } & {
            is_multiplayer?: boolean;
            is_loadsavegame?: boolean;
            is_background_map?: boolean;
            is_headless?: boolean;
            min_client_limit?: number;
            max_client_limit?: number;
            max_clients?: number;
            tick_interval?: number;
            hostname?: string;
            savegamename?: string;
            s1_mapname?: string;
            gamemode?: string;
            server_ip_address?: string;
            data?: string;
            is_localonly?: boolean;
            no_steam_server?: boolean;
            is_transition?: boolean;
            previouslevel?: string;
            landmarkname?: string;
        } & { [K_2 in Exclude<keyof I_1["game_session_config"], keyof CSVCMsg_GameSessionConfiguration>]: never; };
        game_session_manifest?: string;
    } & { [K_3 in Exclude<keyof I_1, keyof CSVCMsg_ServerInfo>]: never; }>(object: I_1): CSVCMsg_ServerInfo;
};
export declare const CSVCMsg_ClassInfo: {
    fromJSON(object: any): CSVCMsg_ClassInfo;
    toJSON(message: CSVCMsg_ClassInfo): unknown;
    create<I extends {
        create_on_client?: boolean;
        classes?: {
            class_id?: number;
            data_table_name?: string;
            class_name?: string;
        }[];
    } & {
        create_on_client?: boolean;
        classes?: {
            class_id?: number;
            data_table_name?: string;
            class_name?: string;
        }[] & ({
            class_id?: number;
            data_table_name?: string;
            class_name?: string;
        } & {
            class_id?: number;
            data_table_name?: string;
            class_name?: string;
        } & { [K in Exclude<keyof I["classes"][number], keyof CSVCMsg_ClassInfo_class_t>]: never; })[] & { [K_1 in Exclude<keyof I["classes"], keyof {
            class_id?: number;
            data_table_name?: string;
            class_name?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CSVCMsg_ClassInfo>]: never; }>(base?: I): CSVCMsg_ClassInfo;
    fromPartial<I_1 extends {
        create_on_client?: boolean;
        classes?: {
            class_id?: number;
            data_table_name?: string;
            class_name?: string;
        }[];
    } & {
        create_on_client?: boolean;
        classes?: {
            class_id?: number;
            data_table_name?: string;
            class_name?: string;
        }[] & ({
            class_id?: number;
            data_table_name?: string;
            class_name?: string;
        } & {
            class_id?: number;
            data_table_name?: string;
            class_name?: string;
        } & { [K_3 in Exclude<keyof I_1["classes"][number], keyof CSVCMsg_ClassInfo_class_t>]: never; })[] & { [K_4 in Exclude<keyof I_1["classes"], keyof {
            class_id?: number;
            data_table_name?: string;
            class_name?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CSVCMsg_ClassInfo>]: never; }>(object: I_1): CSVCMsg_ClassInfo;
};
export declare const CSVCMsg_ClassInfo_class_t: {
    fromJSON(object: any): CSVCMsg_ClassInfo_class_t;
    toJSON(message: CSVCMsg_ClassInfo_class_t): unknown;
    create<I extends {
        class_id?: number;
        data_table_name?: string;
        class_name?: string;
    } & {
        class_id?: number;
        data_table_name?: string;
        class_name?: string;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_ClassInfo_class_t>]: never; }>(base?: I): CSVCMsg_ClassInfo_class_t;
    fromPartial<I_1 extends {
        class_id?: number;
        data_table_name?: string;
        class_name?: string;
    } & {
        class_id?: number;
        data_table_name?: string;
        class_name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_ClassInfo_class_t>]: never; }>(object: I_1): CSVCMsg_ClassInfo_class_t;
};
export declare const CSVCMsg_SetPause: {
    fromJSON(object: any): CSVCMsg_SetPause;
    toJSON(message: CSVCMsg_SetPause): unknown;
    create<I extends {
        paused?: boolean;
    } & {
        paused?: boolean;
    } & { [K in Exclude<keyof I, "paused">]: never; }>(base?: I): CSVCMsg_SetPause;
    fromPartial<I_1 extends {
        paused?: boolean;
    } & {
        paused?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "paused">]: never; }>(object: I_1): CSVCMsg_SetPause;
};
export declare const CSVCMsg_VoiceInit: {
    fromJSON(object: any): CSVCMsg_VoiceInit;
    toJSON(message: CSVCMsg_VoiceInit): unknown;
    create<I extends {
        quality?: number;
        codec?: string;
        version?: number;
    } & {
        quality?: number;
        codec?: string;
        version?: number;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_VoiceInit>]: never; }>(base?: I): CSVCMsg_VoiceInit;
    fromPartial<I_1 extends {
        quality?: number;
        codec?: string;
        version?: number;
    } & {
        quality?: number;
        codec?: string;
        version?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_VoiceInit>]: never; }>(object: I_1): CSVCMsg_VoiceInit;
};
export declare const CSVCMsg_Print: {
    fromJSON(object: any): CSVCMsg_Print;
    toJSON(message: CSVCMsg_Print): unknown;
    create<I extends {
        text?: string;
    } & {
        text?: string;
    } & { [K in Exclude<keyof I, "text">]: never; }>(base?: I): CSVCMsg_Print;
    fromPartial<I_1 extends {
        text?: string;
    } & {
        text?: string;
    } & { [K_1 in Exclude<keyof I_1, "text">]: never; }>(object: I_1): CSVCMsg_Print;
};
export declare const CSVCMsg_Sounds: {
    fromJSON(object: any): CSVCMsg_Sounds;
    toJSON(message: CSVCMsg_Sounds): unknown;
    create<I extends {
        reliable_sound?: boolean;
        sounds?: {
            origin_x?: number;
            origin_y?: number;
            origin_z?: number;
            volume?: number;
            delay_value?: number;
            sequence_number?: number;
            entity_index?: number;
            channel?: number;
            pitch?: number;
            flags?: number;
            sound_num?: number;
            sound_num_handle?: number;
            speaker_entity?: number;
            random_seed?: number;
            sound_level?: number;
            is_sentence?: boolean;
            is_ambient?: boolean;
            guid?: number;
            sound_resource_id?: string;
        }[];
    } & {
        reliable_sound?: boolean;
        sounds?: {
            origin_x?: number;
            origin_y?: number;
            origin_z?: number;
            volume?: number;
            delay_value?: number;
            sequence_number?: number;
            entity_index?: number;
            channel?: number;
            pitch?: number;
            flags?: number;
            sound_num?: number;
            sound_num_handle?: number;
            speaker_entity?: number;
            random_seed?: number;
            sound_level?: number;
            is_sentence?: boolean;
            is_ambient?: boolean;
            guid?: number;
            sound_resource_id?: string;
        }[] & ({
            origin_x?: number;
            origin_y?: number;
            origin_z?: number;
            volume?: number;
            delay_value?: number;
            sequence_number?: number;
            entity_index?: number;
            channel?: number;
            pitch?: number;
            flags?: number;
            sound_num?: number;
            sound_num_handle?: number;
            speaker_entity?: number;
            random_seed?: number;
            sound_level?: number;
            is_sentence?: boolean;
            is_ambient?: boolean;
            guid?: number;
            sound_resource_id?: string;
        } & {
            origin_x?: number;
            origin_y?: number;
            origin_z?: number;
            volume?: number;
            delay_value?: number;
            sequence_number?: number;
            entity_index?: number;
            channel?: number;
            pitch?: number;
            flags?: number;
            sound_num?: number;
            sound_num_handle?: number;
            speaker_entity?: number;
            random_seed?: number;
            sound_level?: number;
            is_sentence?: boolean;
            is_ambient?: boolean;
            guid?: number;
            sound_resource_id?: string;
        } & { [K in Exclude<keyof I["sounds"][number], keyof CSVCMsg_Sounds_sounddata_t>]: never; })[] & { [K_1 in Exclude<keyof I["sounds"], keyof {
            origin_x?: number;
            origin_y?: number;
            origin_z?: number;
            volume?: number;
            delay_value?: number;
            sequence_number?: number;
            entity_index?: number;
            channel?: number;
            pitch?: number;
            flags?: number;
            sound_num?: number;
            sound_num_handle?: number;
            speaker_entity?: number;
            random_seed?: number;
            sound_level?: number;
            is_sentence?: boolean;
            is_ambient?: boolean;
            guid?: number;
            sound_resource_id?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CSVCMsg_Sounds>]: never; }>(base?: I): CSVCMsg_Sounds;
    fromPartial<I_1 extends {
        reliable_sound?: boolean;
        sounds?: {
            origin_x?: number;
            origin_y?: number;
            origin_z?: number;
            volume?: number;
            delay_value?: number;
            sequence_number?: number;
            entity_index?: number;
            channel?: number;
            pitch?: number;
            flags?: number;
            sound_num?: number;
            sound_num_handle?: number;
            speaker_entity?: number;
            random_seed?: number;
            sound_level?: number;
            is_sentence?: boolean;
            is_ambient?: boolean;
            guid?: number;
            sound_resource_id?: string;
        }[];
    } & {
        reliable_sound?: boolean;
        sounds?: {
            origin_x?: number;
            origin_y?: number;
            origin_z?: number;
            volume?: number;
            delay_value?: number;
            sequence_number?: number;
            entity_index?: number;
            channel?: number;
            pitch?: number;
            flags?: number;
            sound_num?: number;
            sound_num_handle?: number;
            speaker_entity?: number;
            random_seed?: number;
            sound_level?: number;
            is_sentence?: boolean;
            is_ambient?: boolean;
            guid?: number;
            sound_resource_id?: string;
        }[] & ({
            origin_x?: number;
            origin_y?: number;
            origin_z?: number;
            volume?: number;
            delay_value?: number;
            sequence_number?: number;
            entity_index?: number;
            channel?: number;
            pitch?: number;
            flags?: number;
            sound_num?: number;
            sound_num_handle?: number;
            speaker_entity?: number;
            random_seed?: number;
            sound_level?: number;
            is_sentence?: boolean;
            is_ambient?: boolean;
            guid?: number;
            sound_resource_id?: string;
        } & {
            origin_x?: number;
            origin_y?: number;
            origin_z?: number;
            volume?: number;
            delay_value?: number;
            sequence_number?: number;
            entity_index?: number;
            channel?: number;
            pitch?: number;
            flags?: number;
            sound_num?: number;
            sound_num_handle?: number;
            speaker_entity?: number;
            random_seed?: number;
            sound_level?: number;
            is_sentence?: boolean;
            is_ambient?: boolean;
            guid?: number;
            sound_resource_id?: string;
        } & { [K_3 in Exclude<keyof I_1["sounds"][number], keyof CSVCMsg_Sounds_sounddata_t>]: never; })[] & { [K_4 in Exclude<keyof I_1["sounds"], keyof {
            origin_x?: number;
            origin_y?: number;
            origin_z?: number;
            volume?: number;
            delay_value?: number;
            sequence_number?: number;
            entity_index?: number;
            channel?: number;
            pitch?: number;
            flags?: number;
            sound_num?: number;
            sound_num_handle?: number;
            speaker_entity?: number;
            random_seed?: number;
            sound_level?: number;
            is_sentence?: boolean;
            is_ambient?: boolean;
            guid?: number;
            sound_resource_id?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CSVCMsg_Sounds>]: never; }>(object: I_1): CSVCMsg_Sounds;
};
export declare const CSVCMsg_Sounds_sounddata_t: {
    fromJSON(object: any): CSVCMsg_Sounds_sounddata_t;
    toJSON(message: CSVCMsg_Sounds_sounddata_t): unknown;
    create<I extends {
        origin_x?: number;
        origin_y?: number;
        origin_z?: number;
        volume?: number;
        delay_value?: number;
        sequence_number?: number;
        entity_index?: number;
        channel?: number;
        pitch?: number;
        flags?: number;
        sound_num?: number;
        sound_num_handle?: number;
        speaker_entity?: number;
        random_seed?: number;
        sound_level?: number;
        is_sentence?: boolean;
        is_ambient?: boolean;
        guid?: number;
        sound_resource_id?: string;
    } & {
        origin_x?: number;
        origin_y?: number;
        origin_z?: number;
        volume?: number;
        delay_value?: number;
        sequence_number?: number;
        entity_index?: number;
        channel?: number;
        pitch?: number;
        flags?: number;
        sound_num?: number;
        sound_num_handle?: number;
        speaker_entity?: number;
        random_seed?: number;
        sound_level?: number;
        is_sentence?: boolean;
        is_ambient?: boolean;
        guid?: number;
        sound_resource_id?: string;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_Sounds_sounddata_t>]: never; }>(base?: I): CSVCMsg_Sounds_sounddata_t;
    fromPartial<I_1 extends {
        origin_x?: number;
        origin_y?: number;
        origin_z?: number;
        volume?: number;
        delay_value?: number;
        sequence_number?: number;
        entity_index?: number;
        channel?: number;
        pitch?: number;
        flags?: number;
        sound_num?: number;
        sound_num_handle?: number;
        speaker_entity?: number;
        random_seed?: number;
        sound_level?: number;
        is_sentence?: boolean;
        is_ambient?: boolean;
        guid?: number;
        sound_resource_id?: string;
    } & {
        origin_x?: number;
        origin_y?: number;
        origin_z?: number;
        volume?: number;
        delay_value?: number;
        sequence_number?: number;
        entity_index?: number;
        channel?: number;
        pitch?: number;
        flags?: number;
        sound_num?: number;
        sound_num_handle?: number;
        speaker_entity?: number;
        random_seed?: number;
        sound_level?: number;
        is_sentence?: boolean;
        is_ambient?: boolean;
        guid?: number;
        sound_resource_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_Sounds_sounddata_t>]: never; }>(object: I_1): CSVCMsg_Sounds_sounddata_t;
};
export declare const CSVCMsg_Prefetch: {
    fromJSON(object: any): CSVCMsg_Prefetch;
    toJSON(message: CSVCMsg_Prefetch): unknown;
    create<I extends {
        sound_index?: number;
        resource_type?: PrefetchType;
    } & {
        sound_index?: number;
        resource_type?: PrefetchType;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_Prefetch>]: never; }>(base?: I): CSVCMsg_Prefetch;
    fromPartial<I_1 extends {
        sound_index?: number;
        resource_type?: PrefetchType;
    } & {
        sound_index?: number;
        resource_type?: PrefetchType;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_Prefetch>]: never; }>(object: I_1): CSVCMsg_Prefetch;
};
export declare const CSVCMsg_SetView: {
    fromJSON(object: any): CSVCMsg_SetView;
    toJSON(message: CSVCMsg_SetView): unknown;
    create<I extends {
        entity_index?: number;
        slot?: number;
    } & {
        entity_index?: number;
        slot?: number;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_SetView>]: never; }>(base?: I): CSVCMsg_SetView;
    fromPartial<I_1 extends {
        entity_index?: number;
        slot?: number;
    } & {
        entity_index?: number;
        slot?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_SetView>]: never; }>(object: I_1): CSVCMsg_SetView;
};
export declare const CSVCMsg_FixAngle: {
    fromJSON(object: any): CSVCMsg_FixAngle;
    toJSON(message: CSVCMsg_FixAngle): unknown;
    create<I extends {
        relative?: boolean;
        angle?: {
            x?: number;
            y?: number;
            z?: number;
        };
    } & {
        relative?: boolean;
        angle?: {
            x?: number;
            y?: number;
            z?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
        } & { [K in Exclude<keyof I["angle"], keyof CMsgQAngle>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CSVCMsg_FixAngle>]: never; }>(base?: I): CSVCMsg_FixAngle;
    fromPartial<I_1 extends {
        relative?: boolean;
        angle?: {
            x?: number;
            y?: number;
            z?: number;
        };
    } & {
        relative?: boolean;
        angle?: {
            x?: number;
            y?: number;
            z?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
        } & { [K_2 in Exclude<keyof I_1["angle"], keyof CMsgQAngle>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CSVCMsg_FixAngle>]: never; }>(object: I_1): CSVCMsg_FixAngle;
};
export declare const CSVCMsg_CrosshairAngle: {
    fromJSON(object: any): CSVCMsg_CrosshairAngle;
    toJSON(message: CSVCMsg_CrosshairAngle): unknown;
    create<I extends {
        angle?: {
            x?: number;
            y?: number;
            z?: number;
        };
    } & {
        angle?: {
            x?: number;
            y?: number;
            z?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
        } & { [K in Exclude<keyof I["angle"], keyof CMsgQAngle>]: never; };
    } & { [K_1 in Exclude<keyof I, "angle">]: never; }>(base?: I): CSVCMsg_CrosshairAngle;
    fromPartial<I_1 extends {
        angle?: {
            x?: number;
            y?: number;
            z?: number;
        };
    } & {
        angle?: {
            x?: number;
            y?: number;
            z?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
        } & { [K_2 in Exclude<keyof I_1["angle"], keyof CMsgQAngle>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "angle">]: never; }>(object: I_1): CSVCMsg_CrosshairAngle;
};
export declare const CSVCMsg_BSPDecal: {
    fromJSON(object: any): CSVCMsg_BSPDecal;
    toJSON(message: CSVCMsg_BSPDecal): unknown;
    create<I extends {
        pos?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        decal_texture_index?: number;
        entity_index?: number;
        model_index?: number;
        low_priority?: boolean;
    } & {
        pos?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["pos"], keyof CMsgVector>]: never; };
        decal_texture_index?: number;
        entity_index?: number;
        model_index?: number;
        low_priority?: boolean;
    } & { [K_1 in Exclude<keyof I, keyof CSVCMsg_BSPDecal>]: never; }>(base?: I): CSVCMsg_BSPDecal;
    fromPartial<I_1 extends {
        pos?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        decal_texture_index?: number;
        entity_index?: number;
        model_index?: number;
        low_priority?: boolean;
    } & {
        pos?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_2 in Exclude<keyof I_1["pos"], keyof CMsgVector>]: never; };
        decal_texture_index?: number;
        entity_index?: number;
        model_index?: number;
        low_priority?: boolean;
    } & { [K_3 in Exclude<keyof I_1, keyof CSVCMsg_BSPDecal>]: never; }>(object: I_1): CSVCMsg_BSPDecal;
};
export declare const CSVCMsg_SplitScreen: {
    fromJSON(object: any): CSVCMsg_SplitScreen;
    toJSON(message: CSVCMsg_SplitScreen): unknown;
    create<I extends {
        type?: ESplitScreenMessageType;
        slot?: number;
        player_index?: number;
    } & {
        type?: ESplitScreenMessageType;
        slot?: number;
        player_index?: number;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_SplitScreen>]: never; }>(base?: I): CSVCMsg_SplitScreen;
    fromPartial<I_1 extends {
        type?: ESplitScreenMessageType;
        slot?: number;
        player_index?: number;
    } & {
        type?: ESplitScreenMessageType;
        slot?: number;
        player_index?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_SplitScreen>]: never; }>(object: I_1): CSVCMsg_SplitScreen;
};
export declare const CSVCMsg_GetCvarValue: {
    fromJSON(object: any): CSVCMsg_GetCvarValue;
    toJSON(message: CSVCMsg_GetCvarValue): unknown;
    create<I extends {
        cookie?: number;
        cvar_name?: string;
    } & {
        cookie?: number;
        cvar_name?: string;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_GetCvarValue>]: never; }>(base?: I): CSVCMsg_GetCvarValue;
    fromPartial<I_1 extends {
        cookie?: number;
        cvar_name?: string;
    } & {
        cookie?: number;
        cvar_name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_GetCvarValue>]: never; }>(object: I_1): CSVCMsg_GetCvarValue;
};
export declare const CSVCMsg_Menu: {
    fromJSON(object: any): CSVCMsg_Menu;
    toJSON(message: CSVCMsg_Menu): unknown;
    create<I extends {
        dialog_type?: number;
        menu_key_values?: string;
    } & {
        dialog_type?: number;
        menu_key_values?: string;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_Menu>]: never; }>(base?: I): CSVCMsg_Menu;
    fromPartial<I_1 extends {
        dialog_type?: number;
        menu_key_values?: string;
    } & {
        dialog_type?: number;
        menu_key_values?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_Menu>]: never; }>(object: I_1): CSVCMsg_Menu;
};
export declare const CSVCMsg_UserMessage: {
    fromJSON(object: any): CSVCMsg_UserMessage;
    toJSON(message: CSVCMsg_UserMessage): unknown;
    create<I extends {
        msg_type?: number;
        msg_data?: string;
        passthrough?: number;
    } & {
        msg_type?: number;
        msg_data?: string;
        passthrough?: number;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_UserMessage>]: never; }>(base?: I): CSVCMsg_UserMessage;
    fromPartial<I_1 extends {
        msg_type?: number;
        msg_data?: string;
        passthrough?: number;
    } & {
        msg_type?: number;
        msg_data?: string;
        passthrough?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_UserMessage>]: never; }>(object: I_1): CSVCMsg_UserMessage;
};
export declare const CSVCMsg_SendTable: {
    fromJSON(object: any): CSVCMsg_SendTable;
    toJSON(message: CSVCMsg_SendTable): unknown;
    create<I extends {
        is_end?: boolean;
        net_table_name?: string;
        needs_decoder?: boolean;
        props?: {
            type?: number;
            var_name?: string;
            flags?: number;
            priority?: number;
            dt_name?: string;
            num_elements?: number;
            low_value?: number;
            high_value?: number;
            num_bits?: number;
        }[];
    } & {
        is_end?: boolean;
        net_table_name?: string;
        needs_decoder?: boolean;
        props?: {
            type?: number;
            var_name?: string;
            flags?: number;
            priority?: number;
            dt_name?: string;
            num_elements?: number;
            low_value?: number;
            high_value?: number;
            num_bits?: number;
        }[] & ({
            type?: number;
            var_name?: string;
            flags?: number;
            priority?: number;
            dt_name?: string;
            num_elements?: number;
            low_value?: number;
            high_value?: number;
            num_bits?: number;
        } & {
            type?: number;
            var_name?: string;
            flags?: number;
            priority?: number;
            dt_name?: string;
            num_elements?: number;
            low_value?: number;
            high_value?: number;
            num_bits?: number;
        } & { [K in Exclude<keyof I["props"][number], keyof CSVCMsg_SendTable_sendprop_t>]: never; })[] & { [K_1 in Exclude<keyof I["props"], keyof {
            type?: number;
            var_name?: string;
            flags?: number;
            priority?: number;
            dt_name?: string;
            num_elements?: number;
            low_value?: number;
            high_value?: number;
            num_bits?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CSVCMsg_SendTable>]: never; }>(base?: I): CSVCMsg_SendTable;
    fromPartial<I_1 extends {
        is_end?: boolean;
        net_table_name?: string;
        needs_decoder?: boolean;
        props?: {
            type?: number;
            var_name?: string;
            flags?: number;
            priority?: number;
            dt_name?: string;
            num_elements?: number;
            low_value?: number;
            high_value?: number;
            num_bits?: number;
        }[];
    } & {
        is_end?: boolean;
        net_table_name?: string;
        needs_decoder?: boolean;
        props?: {
            type?: number;
            var_name?: string;
            flags?: number;
            priority?: number;
            dt_name?: string;
            num_elements?: number;
            low_value?: number;
            high_value?: number;
            num_bits?: number;
        }[] & ({
            type?: number;
            var_name?: string;
            flags?: number;
            priority?: number;
            dt_name?: string;
            num_elements?: number;
            low_value?: number;
            high_value?: number;
            num_bits?: number;
        } & {
            type?: number;
            var_name?: string;
            flags?: number;
            priority?: number;
            dt_name?: string;
            num_elements?: number;
            low_value?: number;
            high_value?: number;
            num_bits?: number;
        } & { [K_3 in Exclude<keyof I_1["props"][number], keyof CSVCMsg_SendTable_sendprop_t>]: never; })[] & { [K_4 in Exclude<keyof I_1["props"], keyof {
            type?: number;
            var_name?: string;
            flags?: number;
            priority?: number;
            dt_name?: string;
            num_elements?: number;
            low_value?: number;
            high_value?: number;
            num_bits?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CSVCMsg_SendTable>]: never; }>(object: I_1): CSVCMsg_SendTable;
};
export declare const CSVCMsg_SendTable_sendprop_t: {
    fromJSON(object: any): CSVCMsg_SendTable_sendprop_t;
    toJSON(message: CSVCMsg_SendTable_sendprop_t): unknown;
    create<I extends {
        type?: number;
        var_name?: string;
        flags?: number;
        priority?: number;
        dt_name?: string;
        num_elements?: number;
        low_value?: number;
        high_value?: number;
        num_bits?: number;
    } & {
        type?: number;
        var_name?: string;
        flags?: number;
        priority?: number;
        dt_name?: string;
        num_elements?: number;
        low_value?: number;
        high_value?: number;
        num_bits?: number;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_SendTable_sendprop_t>]: never; }>(base?: I): CSVCMsg_SendTable_sendprop_t;
    fromPartial<I_1 extends {
        type?: number;
        var_name?: string;
        flags?: number;
        priority?: number;
        dt_name?: string;
        num_elements?: number;
        low_value?: number;
        high_value?: number;
        num_bits?: number;
    } & {
        type?: number;
        var_name?: string;
        flags?: number;
        priority?: number;
        dt_name?: string;
        num_elements?: number;
        low_value?: number;
        high_value?: number;
        num_bits?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_SendTable_sendprop_t>]: never; }>(object: I_1): CSVCMsg_SendTable_sendprop_t;
};
export declare const CSVCMsg_GameEventList: {
    fromJSON(object: any): CSVCMsg_GameEventList;
    toJSON(message: CSVCMsg_GameEventList): unknown;
    create<I extends {
        descriptors?: {
            eventid?: number;
            name?: string;
            keys?: {
                type?: number;
                name?: string;
            }[];
        }[];
    } & {
        descriptors?: {
            eventid?: number;
            name?: string;
            keys?: {
                type?: number;
                name?: string;
            }[];
        }[] & ({
            eventid?: number;
            name?: string;
            keys?: {
                type?: number;
                name?: string;
            }[];
        } & {
            eventid?: number;
            name?: string;
            keys?: {
                type?: number;
                name?: string;
            }[] & ({
                type?: number;
                name?: string;
            } & {
                type?: number;
                name?: string;
            } & { [K in Exclude<keyof I["descriptors"][number]["keys"][number], keyof CSVCMsg_GameEventList_key_t>]: never; })[] & { [K_1 in Exclude<keyof I["descriptors"][number]["keys"], keyof {
                type?: number;
                name?: string;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["descriptors"][number], keyof CSVCMsg_GameEventList_descriptor_t>]: never; })[] & { [K_3 in Exclude<keyof I["descriptors"], keyof {
            eventid?: number;
            name?: string;
            keys?: {
                type?: number;
                name?: string;
            }[];
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, "descriptors">]: never; }>(base?: I): CSVCMsg_GameEventList;
    fromPartial<I_1 extends {
        descriptors?: {
            eventid?: number;
            name?: string;
            keys?: {
                type?: number;
                name?: string;
            }[];
        }[];
    } & {
        descriptors?: {
            eventid?: number;
            name?: string;
            keys?: {
                type?: number;
                name?: string;
            }[];
        }[] & ({
            eventid?: number;
            name?: string;
            keys?: {
                type?: number;
                name?: string;
            }[];
        } & {
            eventid?: number;
            name?: string;
            keys?: {
                type?: number;
                name?: string;
            }[] & ({
                type?: number;
                name?: string;
            } & {
                type?: number;
                name?: string;
            } & { [K_5 in Exclude<keyof I_1["descriptors"][number]["keys"][number], keyof CSVCMsg_GameEventList_key_t>]: never; })[] & { [K_6 in Exclude<keyof I_1["descriptors"][number]["keys"], keyof {
                type?: number;
                name?: string;
            }[]>]: never; };
        } & { [K_7 in Exclude<keyof I_1["descriptors"][number], keyof CSVCMsg_GameEventList_descriptor_t>]: never; })[] & { [K_8 in Exclude<keyof I_1["descriptors"], keyof {
            eventid?: number;
            name?: string;
            keys?: {
                type?: number;
                name?: string;
            }[];
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "descriptors">]: never; }>(object: I_1): CSVCMsg_GameEventList;
};
export declare const CSVCMsg_GameEventList_key_t: {
    fromJSON(object: any): CSVCMsg_GameEventList_key_t;
    toJSON(message: CSVCMsg_GameEventList_key_t): unknown;
    create<I extends {
        type?: number;
        name?: string;
    } & {
        type?: number;
        name?: string;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_GameEventList_key_t>]: never; }>(base?: I): CSVCMsg_GameEventList_key_t;
    fromPartial<I_1 extends {
        type?: number;
        name?: string;
    } & {
        type?: number;
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_GameEventList_key_t>]: never; }>(object: I_1): CSVCMsg_GameEventList_key_t;
};
export declare const CSVCMsg_GameEventList_descriptor_t: {
    fromJSON(object: any): CSVCMsg_GameEventList_descriptor_t;
    toJSON(message: CSVCMsg_GameEventList_descriptor_t): unknown;
    create<I extends {
        eventid?: number;
        name?: string;
        keys?: {
            type?: number;
            name?: string;
        }[];
    } & {
        eventid?: number;
        name?: string;
        keys?: {
            type?: number;
            name?: string;
        }[] & ({
            type?: number;
            name?: string;
        } & {
            type?: number;
            name?: string;
        } & { [K in Exclude<keyof I["keys"][number], keyof CSVCMsg_GameEventList_key_t>]: never; })[] & { [K_1 in Exclude<keyof I["keys"], keyof {
            type?: number;
            name?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CSVCMsg_GameEventList_descriptor_t>]: never; }>(base?: I): CSVCMsg_GameEventList_descriptor_t;
    fromPartial<I_1 extends {
        eventid?: number;
        name?: string;
        keys?: {
            type?: number;
            name?: string;
        }[];
    } & {
        eventid?: number;
        name?: string;
        keys?: {
            type?: number;
            name?: string;
        }[] & ({
            type?: number;
            name?: string;
        } & {
            type?: number;
            name?: string;
        } & { [K_3 in Exclude<keyof I_1["keys"][number], keyof CSVCMsg_GameEventList_key_t>]: never; })[] & { [K_4 in Exclude<keyof I_1["keys"], keyof {
            type?: number;
            name?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CSVCMsg_GameEventList_descriptor_t>]: never; }>(object: I_1): CSVCMsg_GameEventList_descriptor_t;
};
export declare const CSVCMsg_PacketEntities: {
    fromJSON(object: any): CSVCMsg_PacketEntities;
    toJSON(message: CSVCMsg_PacketEntities): unknown;
    create<I extends {
        max_entries?: number;
        updated_entries?: number;
        is_delta?: boolean;
        update_baseline?: boolean;
        baseline?: number;
        delta_from?: number;
        entity_data?: string;
        pending_full_frame?: boolean;
        active_spawngroup_handle?: number;
        max_spawngroup_creationsequence?: number;
        last_cmd_number?: number;
        server_tick?: number;
        serialized_entities?: string;
        command_queue_info?: {
            commands_queued?: number;
            command_queue_desired_size?: number;
            starved_command_ticks?: number;
            time_dilation_percent?: number;
            discarded_command_ticks?: number;
        };
        alternate_baselines?: {
            entity_index?: number;
            baseline_index?: number;
        }[];
    } & {
        max_entries?: number;
        updated_entries?: number;
        is_delta?: boolean;
        update_baseline?: boolean;
        baseline?: number;
        delta_from?: number;
        entity_data?: string;
        pending_full_frame?: boolean;
        active_spawngroup_handle?: number;
        max_spawngroup_creationsequence?: number;
        last_cmd_number?: number;
        server_tick?: number;
        serialized_entities?: string;
        command_queue_info?: {
            commands_queued?: number;
            command_queue_desired_size?: number;
            starved_command_ticks?: number;
            time_dilation_percent?: number;
            discarded_command_ticks?: number;
        } & {
            commands_queued?: number;
            command_queue_desired_size?: number;
            starved_command_ticks?: number;
            time_dilation_percent?: number;
            discarded_command_ticks?: number;
        } & { [K in Exclude<keyof I["command_queue_info"], keyof CSVCMsg_PacketEntities_command_queue_info_t>]: never; };
        alternate_baselines?: {
            entity_index?: number;
            baseline_index?: number;
        }[] & ({
            entity_index?: number;
            baseline_index?: number;
        } & {
            entity_index?: number;
            baseline_index?: number;
        } & { [K_1 in Exclude<keyof I["alternate_baselines"][number], keyof CSVCMsg_PacketEntities_alternate_baseline_t>]: never; })[] & { [K_2 in Exclude<keyof I["alternate_baselines"], keyof {
            entity_index?: number;
            baseline_index?: number;
        }[]>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof CSVCMsg_PacketEntities>]: never; }>(base?: I): CSVCMsg_PacketEntities;
    fromPartial<I_1 extends {
        max_entries?: number;
        updated_entries?: number;
        is_delta?: boolean;
        update_baseline?: boolean;
        baseline?: number;
        delta_from?: number;
        entity_data?: string;
        pending_full_frame?: boolean;
        active_spawngroup_handle?: number;
        max_spawngroup_creationsequence?: number;
        last_cmd_number?: number;
        server_tick?: number;
        serialized_entities?: string;
        command_queue_info?: {
            commands_queued?: number;
            command_queue_desired_size?: number;
            starved_command_ticks?: number;
            time_dilation_percent?: number;
            discarded_command_ticks?: number;
        };
        alternate_baselines?: {
            entity_index?: number;
            baseline_index?: number;
        }[];
    } & {
        max_entries?: number;
        updated_entries?: number;
        is_delta?: boolean;
        update_baseline?: boolean;
        baseline?: number;
        delta_from?: number;
        entity_data?: string;
        pending_full_frame?: boolean;
        active_spawngroup_handle?: number;
        max_spawngroup_creationsequence?: number;
        last_cmd_number?: number;
        server_tick?: number;
        serialized_entities?: string;
        command_queue_info?: {
            commands_queued?: number;
            command_queue_desired_size?: number;
            starved_command_ticks?: number;
            time_dilation_percent?: number;
            discarded_command_ticks?: number;
        } & {
            commands_queued?: number;
            command_queue_desired_size?: number;
            starved_command_ticks?: number;
            time_dilation_percent?: number;
            discarded_command_ticks?: number;
        } & { [K_4 in Exclude<keyof I_1["command_queue_info"], keyof CSVCMsg_PacketEntities_command_queue_info_t>]: never; };
        alternate_baselines?: {
            entity_index?: number;
            baseline_index?: number;
        }[] & ({
            entity_index?: number;
            baseline_index?: number;
        } & {
            entity_index?: number;
            baseline_index?: number;
        } & { [K_5 in Exclude<keyof I_1["alternate_baselines"][number], keyof CSVCMsg_PacketEntities_alternate_baseline_t>]: never; })[] & { [K_6 in Exclude<keyof I_1["alternate_baselines"], keyof {
            entity_index?: number;
            baseline_index?: number;
        }[]>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof CSVCMsg_PacketEntities>]: never; }>(object: I_1): CSVCMsg_PacketEntities;
};
export declare const CSVCMsg_PacketEntities_command_queue_info_t: {
    fromJSON(object: any): CSVCMsg_PacketEntities_command_queue_info_t;
    toJSON(message: CSVCMsg_PacketEntities_command_queue_info_t): unknown;
    create<I extends {
        commands_queued?: number;
        command_queue_desired_size?: number;
        starved_command_ticks?: number;
        time_dilation_percent?: number;
        discarded_command_ticks?: number;
    } & {
        commands_queued?: number;
        command_queue_desired_size?: number;
        starved_command_ticks?: number;
        time_dilation_percent?: number;
        discarded_command_ticks?: number;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_PacketEntities_command_queue_info_t>]: never; }>(base?: I): CSVCMsg_PacketEntities_command_queue_info_t;
    fromPartial<I_1 extends {
        commands_queued?: number;
        command_queue_desired_size?: number;
        starved_command_ticks?: number;
        time_dilation_percent?: number;
        discarded_command_ticks?: number;
    } & {
        commands_queued?: number;
        command_queue_desired_size?: number;
        starved_command_ticks?: number;
        time_dilation_percent?: number;
        discarded_command_ticks?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_PacketEntities_command_queue_info_t>]: never; }>(object: I_1): CSVCMsg_PacketEntities_command_queue_info_t;
};
export declare const CSVCMsg_PacketEntities_alternate_baseline_t: {
    fromJSON(object: any): CSVCMsg_PacketEntities_alternate_baseline_t;
    toJSON(message: CSVCMsg_PacketEntities_alternate_baseline_t): unknown;
    create<I extends {
        entity_index?: number;
        baseline_index?: number;
    } & {
        entity_index?: number;
        baseline_index?: number;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_PacketEntities_alternate_baseline_t>]: never; }>(base?: I): CSVCMsg_PacketEntities_alternate_baseline_t;
    fromPartial<I_1 extends {
        entity_index?: number;
        baseline_index?: number;
    } & {
        entity_index?: number;
        baseline_index?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_PacketEntities_alternate_baseline_t>]: never; }>(object: I_1): CSVCMsg_PacketEntities_alternate_baseline_t;
};
export declare const CSVCMsg_TempEntities: {
    fromJSON(object: any): CSVCMsg_TempEntities;
    toJSON(message: CSVCMsg_TempEntities): unknown;
    create<I extends {
        reliable?: boolean;
        num_entries?: number;
        entity_data?: string;
    } & {
        reliable?: boolean;
        num_entries?: number;
        entity_data?: string;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_TempEntities>]: never; }>(base?: I): CSVCMsg_TempEntities;
    fromPartial<I_1 extends {
        reliable?: boolean;
        num_entries?: number;
        entity_data?: string;
    } & {
        reliable?: boolean;
        num_entries?: number;
        entity_data?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_TempEntities>]: never; }>(object: I_1): CSVCMsg_TempEntities;
};
export declare const CSVCMsg_CreateStringTable: {
    fromJSON(object: any): CSVCMsg_CreateStringTable;
    toJSON(message: CSVCMsg_CreateStringTable): unknown;
    create<I extends {
        name?: string;
        num_entries?: number;
        user_data_fixed_size?: boolean;
        user_data_size?: number;
        user_data_size_bits?: number;
        flags?: number;
        string_data?: string;
        uncompressed_size?: number;
        data_compressed?: boolean;
    } & {
        name?: string;
        num_entries?: number;
        user_data_fixed_size?: boolean;
        user_data_size?: number;
        user_data_size_bits?: number;
        flags?: number;
        string_data?: string;
        uncompressed_size?: number;
        data_compressed?: boolean;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_CreateStringTable>]: never; }>(base?: I): CSVCMsg_CreateStringTable;
    fromPartial<I_1 extends {
        name?: string;
        num_entries?: number;
        user_data_fixed_size?: boolean;
        user_data_size?: number;
        user_data_size_bits?: number;
        flags?: number;
        string_data?: string;
        uncompressed_size?: number;
        data_compressed?: boolean;
    } & {
        name?: string;
        num_entries?: number;
        user_data_fixed_size?: boolean;
        user_data_size?: number;
        user_data_size_bits?: number;
        flags?: number;
        string_data?: string;
        uncompressed_size?: number;
        data_compressed?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_CreateStringTable>]: never; }>(object: I_1): CSVCMsg_CreateStringTable;
};
export declare const CSVCMsg_UpdateStringTable: {
    fromJSON(object: any): CSVCMsg_UpdateStringTable;
    toJSON(message: CSVCMsg_UpdateStringTable): unknown;
    create<I extends {
        table_id?: number;
        num_changed_entries?: number;
        string_data?: string;
    } & {
        table_id?: number;
        num_changed_entries?: number;
        string_data?: string;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_UpdateStringTable>]: never; }>(base?: I): CSVCMsg_UpdateStringTable;
    fromPartial<I_1 extends {
        table_id?: number;
        num_changed_entries?: number;
        string_data?: string;
    } & {
        table_id?: number;
        num_changed_entries?: number;
        string_data?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_UpdateStringTable>]: never; }>(object: I_1): CSVCMsg_UpdateStringTable;
};
export declare const CSVCMsg_VoiceData: {
    fromJSON(object: any): CSVCMsg_VoiceData;
    toJSON(message: CSVCMsg_VoiceData): unknown;
    create<I extends {
        audio?: {
            format?: VoiceDataFormat_t;
            voice_data?: string;
            sequence_bytes?: number;
            section_number?: number;
            sample_rate?: number;
            uncompressed_sample_offset?: number;
        };
        client?: number;
        proximity?: boolean;
        xuid?: string;
        audible_mask?: number;
        tick?: number;
    } & {
        audio?: {
            format?: VoiceDataFormat_t;
            voice_data?: string;
            sequence_bytes?: number;
            section_number?: number;
            sample_rate?: number;
            uncompressed_sample_offset?: number;
        } & {
            format?: VoiceDataFormat_t;
            voice_data?: string;
            sequence_bytes?: number;
            section_number?: number;
            sample_rate?: number;
            uncompressed_sample_offset?: number;
        } & { [K in Exclude<keyof I["audio"], keyof CMsgVoiceAudio>]: never; };
        client?: number;
        proximity?: boolean;
        xuid?: string;
        audible_mask?: number;
        tick?: number;
    } & { [K_1 in Exclude<keyof I, keyof CSVCMsg_VoiceData>]: never; }>(base?: I): CSVCMsg_VoiceData;
    fromPartial<I_1 extends {
        audio?: {
            format?: VoiceDataFormat_t;
            voice_data?: string;
            sequence_bytes?: number;
            section_number?: number;
            sample_rate?: number;
            uncompressed_sample_offset?: number;
        };
        client?: number;
        proximity?: boolean;
        xuid?: string;
        audible_mask?: number;
        tick?: number;
    } & {
        audio?: {
            format?: VoiceDataFormat_t;
            voice_data?: string;
            sequence_bytes?: number;
            section_number?: number;
            sample_rate?: number;
            uncompressed_sample_offset?: number;
        } & {
            format?: VoiceDataFormat_t;
            voice_data?: string;
            sequence_bytes?: number;
            section_number?: number;
            sample_rate?: number;
            uncompressed_sample_offset?: number;
        } & { [K_2 in Exclude<keyof I_1["audio"], keyof CMsgVoiceAudio>]: never; };
        client?: number;
        proximity?: boolean;
        xuid?: string;
        audible_mask?: number;
        tick?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CSVCMsg_VoiceData>]: never; }>(object: I_1): CSVCMsg_VoiceData;
};
export declare const CSVCMsg_PacketReliable: {
    fromJSON(object: any): CSVCMsg_PacketReliable;
    toJSON(message: CSVCMsg_PacketReliable): unknown;
    create<I extends {
        tick?: number;
        messagessize?: number;
        state?: boolean;
    } & {
        tick?: number;
        messagessize?: number;
        state?: boolean;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_PacketReliable>]: never; }>(base?: I): CSVCMsg_PacketReliable;
    fromPartial<I_1 extends {
        tick?: number;
        messagessize?: number;
        state?: boolean;
    } & {
        tick?: number;
        messagessize?: number;
        state?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_PacketReliable>]: never; }>(object: I_1): CSVCMsg_PacketReliable;
};
export declare const CSVCMsg_FullFrameSplit: {
    fromJSON(object: any): CSVCMsg_FullFrameSplit;
    toJSON(message: CSVCMsg_FullFrameSplit): unknown;
    create<I extends {
        tick?: number;
        section?: number;
        total?: number;
        data?: string;
    } & {
        tick?: number;
        section?: number;
        total?: number;
        data?: string;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_FullFrameSplit>]: never; }>(base?: I): CSVCMsg_FullFrameSplit;
    fromPartial<I_1 extends {
        tick?: number;
        section?: number;
        total?: number;
        data?: string;
    } & {
        tick?: number;
        section?: number;
        total?: number;
        data?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_FullFrameSplit>]: never; }>(object: I_1): CSVCMsg_FullFrameSplit;
};
export declare const CSVCMsg_HLTVStatus: {
    fromJSON(object: any): CSVCMsg_HLTVStatus;
    toJSON(message: CSVCMsg_HLTVStatus): unknown;
    create<I extends {
        master?: string;
        clients?: number;
        slots?: number;
        proxies?: number;
    } & {
        master?: string;
        clients?: number;
        slots?: number;
        proxies?: number;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_HLTVStatus>]: never; }>(base?: I): CSVCMsg_HLTVStatus;
    fromPartial<I_1 extends {
        master?: string;
        clients?: number;
        slots?: number;
        proxies?: number;
    } & {
        master?: string;
        clients?: number;
        slots?: number;
        proxies?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_HLTVStatus>]: never; }>(object: I_1): CSVCMsg_HLTVStatus;
};
export declare const CSVCMsg_ServerSteamID: {
    fromJSON(object: any): CSVCMsg_ServerSteamID;
    toJSON(message: CSVCMsg_ServerSteamID): unknown;
    create<I extends {
        steam_id?: string;
    } & {
        steam_id?: string;
    } & { [K in Exclude<keyof I, "steam_id">]: never; }>(base?: I): CSVCMsg_ServerSteamID;
    fromPartial<I_1 extends {
        steam_id?: string;
    } & {
        steam_id?: string;
    } & { [K_1 in Exclude<keyof I_1, "steam_id">]: never; }>(object: I_1): CSVCMsg_ServerSteamID;
};
export declare const CSVCMsg_CmdKeyValues: {
    fromJSON(object: any): CSVCMsg_CmdKeyValues;
    toJSON(message: CSVCMsg_CmdKeyValues): unknown;
    create<I extends {
        data?: string;
    } & {
        data?: string;
    } & { [K in Exclude<keyof I, "data">]: never; }>(base?: I): CSVCMsg_CmdKeyValues;
    fromPartial<I_1 extends {
        data?: string;
    } & {
        data?: string;
    } & { [K_1 in Exclude<keyof I_1, "data">]: never; }>(object: I_1): CSVCMsg_CmdKeyValues;
};
export declare const CSVCMsg_RconServerDetails: {
    fromJSON(object: any): CSVCMsg_RconServerDetails;
    toJSON(message: CSVCMsg_RconServerDetails): unknown;
    create<I extends {
        token?: string;
        details?: string;
    } & {
        token?: string;
        details?: string;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_RconServerDetails>]: never; }>(base?: I): CSVCMsg_RconServerDetails;
    fromPartial<I_1 extends {
        token?: string;
        details?: string;
    } & {
        token?: string;
        details?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_RconServerDetails>]: never; }>(object: I_1): CSVCMsg_RconServerDetails;
};
export declare const CMsgIPCAddress: {
    fromJSON(object: any): CMsgIPCAddress;
    toJSON(message: CMsgIPCAddress): unknown;
    create<I extends {
        computer_guid?: string;
        process_id?: number;
    } & {
        computer_guid?: string;
        process_id?: number;
    } & { [K in Exclude<keyof I, keyof CMsgIPCAddress>]: never; }>(base?: I): CMsgIPCAddress;
    fromPartial<I_1 extends {
        computer_guid?: string;
        process_id?: number;
    } & {
        computer_guid?: string;
        process_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgIPCAddress>]: never; }>(object: I_1): CMsgIPCAddress;
};
export declare const CMsgServerPeer: {
    fromJSON(object: any): CMsgServerPeer;
    toJSON(message: CMsgServerPeer): unknown;
    create<I extends {
        player_slot?: number;
        steamid?: string;
        ipc?: {
            computer_guid?: string;
            process_id?: number;
        };
        they_hear_you?: boolean;
        you_hear_them?: boolean;
        is_listenserver_host?: boolean;
    } & {
        player_slot?: number;
        steamid?: string;
        ipc?: {
            computer_guid?: string;
            process_id?: number;
        } & {
            computer_guid?: string;
            process_id?: number;
        } & { [K in Exclude<keyof I["ipc"], keyof CMsgIPCAddress>]: never; };
        they_hear_you?: boolean;
        you_hear_them?: boolean;
        is_listenserver_host?: boolean;
    } & { [K_1 in Exclude<keyof I, keyof CMsgServerPeer>]: never; }>(base?: I): CMsgServerPeer;
    fromPartial<I_1 extends {
        player_slot?: number;
        steamid?: string;
        ipc?: {
            computer_guid?: string;
            process_id?: number;
        };
        they_hear_you?: boolean;
        you_hear_them?: boolean;
        is_listenserver_host?: boolean;
    } & {
        player_slot?: number;
        steamid?: string;
        ipc?: {
            computer_guid?: string;
            process_id?: number;
        } & {
            computer_guid?: string;
            process_id?: number;
        } & { [K_2 in Exclude<keyof I_1["ipc"], keyof CMsgIPCAddress>]: never; };
        they_hear_you?: boolean;
        you_hear_them?: boolean;
        is_listenserver_host?: boolean;
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgServerPeer>]: never; }>(object: I_1): CMsgServerPeer;
};
export declare const CSVCMsg_PeerList: {
    fromJSON(object: any): CSVCMsg_PeerList;
    toJSON(message: CSVCMsg_PeerList): unknown;
    create<I extends {
        peer?: {
            player_slot?: number;
            steamid?: string;
            ipc?: {
                computer_guid?: string;
                process_id?: number;
            };
            they_hear_you?: boolean;
            you_hear_them?: boolean;
            is_listenserver_host?: boolean;
        }[];
    } & {
        peer?: {
            player_slot?: number;
            steamid?: string;
            ipc?: {
                computer_guid?: string;
                process_id?: number;
            };
            they_hear_you?: boolean;
            you_hear_them?: boolean;
            is_listenserver_host?: boolean;
        }[] & ({
            player_slot?: number;
            steamid?: string;
            ipc?: {
                computer_guid?: string;
                process_id?: number;
            };
            they_hear_you?: boolean;
            you_hear_them?: boolean;
            is_listenserver_host?: boolean;
        } & {
            player_slot?: number;
            steamid?: string;
            ipc?: {
                computer_guid?: string;
                process_id?: number;
            } & {
                computer_guid?: string;
                process_id?: number;
            } & { [K in Exclude<keyof I["peer"][number]["ipc"], keyof CMsgIPCAddress>]: never; };
            they_hear_you?: boolean;
            you_hear_them?: boolean;
            is_listenserver_host?: boolean;
        } & { [K_1 in Exclude<keyof I["peer"][number], keyof CMsgServerPeer>]: never; })[] & { [K_2 in Exclude<keyof I["peer"], keyof {
            player_slot?: number;
            steamid?: string;
            ipc?: {
                computer_guid?: string;
                process_id?: number;
            };
            they_hear_you?: boolean;
            you_hear_them?: boolean;
            is_listenserver_host?: boolean;
        }[]>]: never; };
    } & { [K_3 in Exclude<keyof I, "peer">]: never; }>(base?: I): CSVCMsg_PeerList;
    fromPartial<I_1 extends {
        peer?: {
            player_slot?: number;
            steamid?: string;
            ipc?: {
                computer_guid?: string;
                process_id?: number;
            };
            they_hear_you?: boolean;
            you_hear_them?: boolean;
            is_listenserver_host?: boolean;
        }[];
    } & {
        peer?: {
            player_slot?: number;
            steamid?: string;
            ipc?: {
                computer_guid?: string;
                process_id?: number;
            };
            they_hear_you?: boolean;
            you_hear_them?: boolean;
            is_listenserver_host?: boolean;
        }[] & ({
            player_slot?: number;
            steamid?: string;
            ipc?: {
                computer_guid?: string;
                process_id?: number;
            };
            they_hear_you?: boolean;
            you_hear_them?: boolean;
            is_listenserver_host?: boolean;
        } & {
            player_slot?: number;
            steamid?: string;
            ipc?: {
                computer_guid?: string;
                process_id?: number;
            } & {
                computer_guid?: string;
                process_id?: number;
            } & { [K_4 in Exclude<keyof I_1["peer"][number]["ipc"], keyof CMsgIPCAddress>]: never; };
            they_hear_you?: boolean;
            you_hear_them?: boolean;
            is_listenserver_host?: boolean;
        } & { [K_5 in Exclude<keyof I_1["peer"][number], keyof CMsgServerPeer>]: never; })[] & { [K_6 in Exclude<keyof I_1["peer"], keyof {
            player_slot?: number;
            steamid?: string;
            ipc?: {
                computer_guid?: string;
                process_id?: number;
            };
            they_hear_you?: boolean;
            you_hear_them?: boolean;
            is_listenserver_host?: boolean;
        }[]>]: never; };
    } & { [K_7 in Exclude<keyof I_1, "peer">]: never; }>(object: I_1): CSVCMsg_PeerList;
};
export declare const CSVCMsg_ClearAllStringTables: {
    fromJSON(object: any): CSVCMsg_ClearAllStringTables;
    toJSON(message: CSVCMsg_ClearAllStringTables): unknown;
    create<I extends {
        mapname?: string;
    } & {
        mapname?: string;
    } & { [K in Exclude<keyof I, "mapname">]: never; }>(base?: I): CSVCMsg_ClearAllStringTables;
    fromPartial<I_1 extends {
        mapname?: string;
    } & {
        mapname?: string;
    } & { [K_1 in Exclude<keyof I_1, "mapname">]: never; }>(object: I_1): CSVCMsg_ClearAllStringTables;
};
export declare const ProtoFlattenedSerializerField_t: {
    fromJSON(object: any): ProtoFlattenedSerializerField_t;
    toJSON(message: ProtoFlattenedSerializerField_t): unknown;
    create<I extends {
        var_type_sym?: number;
        var_name_sym?: number;
        bit_count?: number;
        low_value?: number;
        high_value?: number;
        encode_flags?: number;
        field_serializer_name_sym?: number;
        field_serializer_version?: number;
        send_node_sym?: number;
        var_encoder_sym?: number;
    } & {
        var_type_sym?: number;
        var_name_sym?: number;
        bit_count?: number;
        low_value?: number;
        high_value?: number;
        encode_flags?: number;
        field_serializer_name_sym?: number;
        field_serializer_version?: number;
        send_node_sym?: number;
        var_encoder_sym?: number;
    } & { [K in Exclude<keyof I, keyof ProtoFlattenedSerializerField_t>]: never; }>(base?: I): ProtoFlattenedSerializerField_t;
    fromPartial<I_1 extends {
        var_type_sym?: number;
        var_name_sym?: number;
        bit_count?: number;
        low_value?: number;
        high_value?: number;
        encode_flags?: number;
        field_serializer_name_sym?: number;
        field_serializer_version?: number;
        send_node_sym?: number;
        var_encoder_sym?: number;
    } & {
        var_type_sym?: number;
        var_name_sym?: number;
        bit_count?: number;
        low_value?: number;
        high_value?: number;
        encode_flags?: number;
        field_serializer_name_sym?: number;
        field_serializer_version?: number;
        send_node_sym?: number;
        var_encoder_sym?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof ProtoFlattenedSerializerField_t>]: never; }>(object: I_1): ProtoFlattenedSerializerField_t;
};
export declare const ProtoFlattenedSerializer_t: {
    fromJSON(object: any): ProtoFlattenedSerializer_t;
    toJSON(message: ProtoFlattenedSerializer_t): unknown;
    create<I extends {
        serializer_name_sym?: number;
        serializer_version?: number;
        fields_index?: number[];
    } & {
        serializer_name_sym?: number;
        serializer_version?: number;
        fields_index?: number[] & number[] & { [K in Exclude<keyof I["fields_index"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof ProtoFlattenedSerializer_t>]: never; }>(base?: I): ProtoFlattenedSerializer_t;
    fromPartial<I_1 extends {
        serializer_name_sym?: number;
        serializer_version?: number;
        fields_index?: number[];
    } & {
        serializer_name_sym?: number;
        serializer_version?: number;
        fields_index?: number[] & number[] & { [K_2 in Exclude<keyof I_1["fields_index"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof ProtoFlattenedSerializer_t>]: never; }>(object: I_1): ProtoFlattenedSerializer_t;
};
export declare const CSVCMsg_FlattenedSerializer: {
    fromJSON(object: any): CSVCMsg_FlattenedSerializer;
    toJSON(message: CSVCMsg_FlattenedSerializer): unknown;
    create<I extends {
        serializers?: {
            serializer_name_sym?: number;
            serializer_version?: number;
            fields_index?: number[];
        }[];
        symbols?: string[];
        fields?: {
            var_type_sym?: number;
            var_name_sym?: number;
            bit_count?: number;
            low_value?: number;
            high_value?: number;
            encode_flags?: number;
            field_serializer_name_sym?: number;
            field_serializer_version?: number;
            send_node_sym?: number;
            var_encoder_sym?: number;
        }[];
    } & {
        serializers?: {
            serializer_name_sym?: number;
            serializer_version?: number;
            fields_index?: number[];
        }[] & ({
            serializer_name_sym?: number;
            serializer_version?: number;
            fields_index?: number[];
        } & {
            serializer_name_sym?: number;
            serializer_version?: number;
            fields_index?: number[] & number[] & { [K in Exclude<keyof I["serializers"][number]["fields_index"], keyof number[]>]: never; };
        } & { [K_1 in Exclude<keyof I["serializers"][number], keyof ProtoFlattenedSerializer_t>]: never; })[] & { [K_2 in Exclude<keyof I["serializers"], keyof {
            serializer_name_sym?: number;
            serializer_version?: number;
            fields_index?: number[];
        }[]>]: never; };
        symbols?: string[] & string[] & { [K_3 in Exclude<keyof I["symbols"], keyof string[]>]: never; };
        fields?: {
            var_type_sym?: number;
            var_name_sym?: number;
            bit_count?: number;
            low_value?: number;
            high_value?: number;
            encode_flags?: number;
            field_serializer_name_sym?: number;
            field_serializer_version?: number;
            send_node_sym?: number;
            var_encoder_sym?: number;
        }[] & ({
            var_type_sym?: number;
            var_name_sym?: number;
            bit_count?: number;
            low_value?: number;
            high_value?: number;
            encode_flags?: number;
            field_serializer_name_sym?: number;
            field_serializer_version?: number;
            send_node_sym?: number;
            var_encoder_sym?: number;
        } & {
            var_type_sym?: number;
            var_name_sym?: number;
            bit_count?: number;
            low_value?: number;
            high_value?: number;
            encode_flags?: number;
            field_serializer_name_sym?: number;
            field_serializer_version?: number;
            send_node_sym?: number;
            var_encoder_sym?: number;
        } & { [K_4 in Exclude<keyof I["fields"][number], keyof ProtoFlattenedSerializerField_t>]: never; })[] & { [K_5 in Exclude<keyof I["fields"], keyof {
            var_type_sym?: number;
            var_name_sym?: number;
            bit_count?: number;
            low_value?: number;
            high_value?: number;
            encode_flags?: number;
            field_serializer_name_sym?: number;
            field_serializer_version?: number;
            send_node_sym?: number;
            var_encoder_sym?: number;
        }[]>]: never; };
    } & { [K_6 in Exclude<keyof I, keyof CSVCMsg_FlattenedSerializer>]: never; }>(base?: I): CSVCMsg_FlattenedSerializer;
    fromPartial<I_1 extends {
        serializers?: {
            serializer_name_sym?: number;
            serializer_version?: number;
            fields_index?: number[];
        }[];
        symbols?: string[];
        fields?: {
            var_type_sym?: number;
            var_name_sym?: number;
            bit_count?: number;
            low_value?: number;
            high_value?: number;
            encode_flags?: number;
            field_serializer_name_sym?: number;
            field_serializer_version?: number;
            send_node_sym?: number;
            var_encoder_sym?: number;
        }[];
    } & {
        serializers?: {
            serializer_name_sym?: number;
            serializer_version?: number;
            fields_index?: number[];
        }[] & ({
            serializer_name_sym?: number;
            serializer_version?: number;
            fields_index?: number[];
        } & {
            serializer_name_sym?: number;
            serializer_version?: number;
            fields_index?: number[] & number[] & { [K_7 in Exclude<keyof I_1["serializers"][number]["fields_index"], keyof number[]>]: never; };
        } & { [K_8 in Exclude<keyof I_1["serializers"][number], keyof ProtoFlattenedSerializer_t>]: never; })[] & { [K_9 in Exclude<keyof I_1["serializers"], keyof {
            serializer_name_sym?: number;
            serializer_version?: number;
            fields_index?: number[];
        }[]>]: never; };
        symbols?: string[] & string[] & { [K_10 in Exclude<keyof I_1["symbols"], keyof string[]>]: never; };
        fields?: {
            var_type_sym?: number;
            var_name_sym?: number;
            bit_count?: number;
            low_value?: number;
            high_value?: number;
            encode_flags?: number;
            field_serializer_name_sym?: number;
            field_serializer_version?: number;
            send_node_sym?: number;
            var_encoder_sym?: number;
        }[] & ({
            var_type_sym?: number;
            var_name_sym?: number;
            bit_count?: number;
            low_value?: number;
            high_value?: number;
            encode_flags?: number;
            field_serializer_name_sym?: number;
            field_serializer_version?: number;
            send_node_sym?: number;
            var_encoder_sym?: number;
        } & {
            var_type_sym?: number;
            var_name_sym?: number;
            bit_count?: number;
            low_value?: number;
            high_value?: number;
            encode_flags?: number;
            field_serializer_name_sym?: number;
            field_serializer_version?: number;
            send_node_sym?: number;
            var_encoder_sym?: number;
        } & { [K_11 in Exclude<keyof I_1["fields"][number], keyof ProtoFlattenedSerializerField_t>]: never; })[] & { [K_12 in Exclude<keyof I_1["fields"], keyof {
            var_type_sym?: number;
            var_name_sym?: number;
            bit_count?: number;
            low_value?: number;
            high_value?: number;
            encode_flags?: number;
            field_serializer_name_sym?: number;
            field_serializer_version?: number;
            send_node_sym?: number;
            var_encoder_sym?: number;
        }[]>]: never; };
    } & { [K_13 in Exclude<keyof I_1, keyof CSVCMsg_FlattenedSerializer>]: never; }>(object: I_1): CSVCMsg_FlattenedSerializer;
};
export declare const CSVCMsg_StopSound: {
    fromJSON(object: any): CSVCMsg_StopSound;
    toJSON(message: CSVCMsg_StopSound): unknown;
    create<I extends {
        guid?: number;
    } & {
        guid?: number;
    } & { [K in Exclude<keyof I, "guid">]: never; }>(base?: I): CSVCMsg_StopSound;
    fromPartial<I_1 extends {
        guid?: number;
    } & {
        guid?: number;
    } & { [K_1 in Exclude<keyof I_1, "guid">]: never; }>(object: I_1): CSVCMsg_StopSound;
};
export declare const CBidirMsg_RebroadcastGameEvent: {
    fromJSON(object: any): CBidirMsg_RebroadcastGameEvent;
    toJSON(message: CBidirMsg_RebroadcastGameEvent): unknown;
    create<I extends {
        posttoserver?: boolean;
        buftype?: number;
        clientbitcount?: number;
        receivingclients?: string;
    } & {
        posttoserver?: boolean;
        buftype?: number;
        clientbitcount?: number;
        receivingclients?: string;
    } & { [K in Exclude<keyof I, keyof CBidirMsg_RebroadcastGameEvent>]: never; }>(base?: I): CBidirMsg_RebroadcastGameEvent;
    fromPartial<I_1 extends {
        posttoserver?: boolean;
        buftype?: number;
        clientbitcount?: number;
        receivingclients?: string;
    } & {
        posttoserver?: boolean;
        buftype?: number;
        clientbitcount?: number;
        receivingclients?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CBidirMsg_RebroadcastGameEvent>]: never; }>(object: I_1): CBidirMsg_RebroadcastGameEvent;
};
export declare const CBidirMsg_RebroadcastSource: {
    fromJSON(object: any): CBidirMsg_RebroadcastSource;
    toJSON(message: CBidirMsg_RebroadcastSource): unknown;
    create<I extends {
        eventsource?: number;
    } & {
        eventsource?: number;
    } & { [K in Exclude<keyof I, "eventsource">]: never; }>(base?: I): CBidirMsg_RebroadcastSource;
    fromPartial<I_1 extends {
        eventsource?: number;
    } & {
        eventsource?: number;
    } & { [K_1 in Exclude<keyof I_1, "eventsource">]: never; }>(object: I_1): CBidirMsg_RebroadcastSource;
};
export declare const CMsgServerNetworkStats: {
    fromJSON(object: any): CMsgServerNetworkStats;
    toJSON(message: CMsgServerNetworkStats): unknown;
    create<I extends {
        dedicated?: boolean;
        cpu_usage?: number;
        memory_used_mb?: number;
        memory_free_mb?: number;
        uptime?: number;
        spawn_count?: number;
        num_clients?: number;
        num_bots?: number;
        num_spectators?: number;
        num_tv_relays?: number;
        fps?: number;
        ports?: {
            port?: number;
            name?: string;
        }[];
        avg_latency_out?: number;
        avg_latency_in?: number;
        avg_packets_out?: number;
        avg_packets_in?: number;
        avg_loss_out?: number;
        avg_loss_in?: number;
        avg_data_out?: number;
        avg_data_in?: number;
        total_data_in?: string;
        total_packets_in?: string;
        total_data_out?: string;
        total_packets_out?: string;
        players?: {
            steamid?: string;
            remote_addr?: string;
            ping_stddev_ms?: number;
            ping_avg_ms?: number;
            packet_loss_pct?: number;
            is_bot?: boolean;
        }[];
    } & {
        dedicated?: boolean;
        cpu_usage?: number;
        memory_used_mb?: number;
        memory_free_mb?: number;
        uptime?: number;
        spawn_count?: number;
        num_clients?: number;
        num_bots?: number;
        num_spectators?: number;
        num_tv_relays?: number;
        fps?: number;
        ports?: {
            port?: number;
            name?: string;
        }[] & ({
            port?: number;
            name?: string;
        } & {
            port?: number;
            name?: string;
        } & { [K in Exclude<keyof I["ports"][number], keyof CMsgServerNetworkStats_Port>]: never; })[] & { [K_1 in Exclude<keyof I["ports"], keyof {
            port?: number;
            name?: string;
        }[]>]: never; };
        avg_latency_out?: number;
        avg_latency_in?: number;
        avg_packets_out?: number;
        avg_packets_in?: number;
        avg_loss_out?: number;
        avg_loss_in?: number;
        avg_data_out?: number;
        avg_data_in?: number;
        total_data_in?: string;
        total_packets_in?: string;
        total_data_out?: string;
        total_packets_out?: string;
        players?: {
            steamid?: string;
            remote_addr?: string;
            ping_stddev_ms?: number;
            ping_avg_ms?: number;
            packet_loss_pct?: number;
            is_bot?: boolean;
        }[] & ({
            steamid?: string;
            remote_addr?: string;
            ping_stddev_ms?: number;
            ping_avg_ms?: number;
            packet_loss_pct?: number;
            is_bot?: boolean;
        } & {
            steamid?: string;
            remote_addr?: string;
            ping_stddev_ms?: number;
            ping_avg_ms?: number;
            packet_loss_pct?: number;
            is_bot?: boolean;
        } & { [K_2 in Exclude<keyof I["players"][number], keyof CMsgServerNetworkStats_Player>]: never; })[] & { [K_3 in Exclude<keyof I["players"], keyof {
            steamid?: string;
            remote_addr?: string;
            ping_stddev_ms?: number;
            ping_avg_ms?: number;
            packet_loss_pct?: number;
            is_bot?: boolean;
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof CMsgServerNetworkStats>]: never; }>(base?: I): CMsgServerNetworkStats;
    fromPartial<I_1 extends {
        dedicated?: boolean;
        cpu_usage?: number;
        memory_used_mb?: number;
        memory_free_mb?: number;
        uptime?: number;
        spawn_count?: number;
        num_clients?: number;
        num_bots?: number;
        num_spectators?: number;
        num_tv_relays?: number;
        fps?: number;
        ports?: {
            port?: number;
            name?: string;
        }[];
        avg_latency_out?: number;
        avg_latency_in?: number;
        avg_packets_out?: number;
        avg_packets_in?: number;
        avg_loss_out?: number;
        avg_loss_in?: number;
        avg_data_out?: number;
        avg_data_in?: number;
        total_data_in?: string;
        total_packets_in?: string;
        total_data_out?: string;
        total_packets_out?: string;
        players?: {
            steamid?: string;
            remote_addr?: string;
            ping_stddev_ms?: number;
            ping_avg_ms?: number;
            packet_loss_pct?: number;
            is_bot?: boolean;
        }[];
    } & {
        dedicated?: boolean;
        cpu_usage?: number;
        memory_used_mb?: number;
        memory_free_mb?: number;
        uptime?: number;
        spawn_count?: number;
        num_clients?: number;
        num_bots?: number;
        num_spectators?: number;
        num_tv_relays?: number;
        fps?: number;
        ports?: {
            port?: number;
            name?: string;
        }[] & ({
            port?: number;
            name?: string;
        } & {
            port?: number;
            name?: string;
        } & { [K_5 in Exclude<keyof I_1["ports"][number], keyof CMsgServerNetworkStats_Port>]: never; })[] & { [K_6 in Exclude<keyof I_1["ports"], keyof {
            port?: number;
            name?: string;
        }[]>]: never; };
        avg_latency_out?: number;
        avg_latency_in?: number;
        avg_packets_out?: number;
        avg_packets_in?: number;
        avg_loss_out?: number;
        avg_loss_in?: number;
        avg_data_out?: number;
        avg_data_in?: number;
        total_data_in?: string;
        total_packets_in?: string;
        total_data_out?: string;
        total_packets_out?: string;
        players?: {
            steamid?: string;
            remote_addr?: string;
            ping_stddev_ms?: number;
            ping_avg_ms?: number;
            packet_loss_pct?: number;
            is_bot?: boolean;
        }[] & ({
            steamid?: string;
            remote_addr?: string;
            ping_stddev_ms?: number;
            ping_avg_ms?: number;
            packet_loss_pct?: number;
            is_bot?: boolean;
        } & {
            steamid?: string;
            remote_addr?: string;
            ping_stddev_ms?: number;
            ping_avg_ms?: number;
            packet_loss_pct?: number;
            is_bot?: boolean;
        } & { [K_7 in Exclude<keyof I_1["players"][number], keyof CMsgServerNetworkStats_Player>]: never; })[] & { [K_8 in Exclude<keyof I_1["players"], keyof {
            steamid?: string;
            remote_addr?: string;
            ping_stddev_ms?: number;
            ping_avg_ms?: number;
            packet_loss_pct?: number;
            is_bot?: boolean;
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof CMsgServerNetworkStats>]: never; }>(object: I_1): CMsgServerNetworkStats;
};
export declare const CMsgServerNetworkStats_Port: {
    fromJSON(object: any): CMsgServerNetworkStats_Port;
    toJSON(message: CMsgServerNetworkStats_Port): unknown;
    create<I extends {
        port?: number;
        name?: string;
    } & {
        port?: number;
        name?: string;
    } & { [K in Exclude<keyof I, keyof CMsgServerNetworkStats_Port>]: never; }>(base?: I): CMsgServerNetworkStats_Port;
    fromPartial<I_1 extends {
        port?: number;
        name?: string;
    } & {
        port?: number;
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgServerNetworkStats_Port>]: never; }>(object: I_1): CMsgServerNetworkStats_Port;
};
export declare const CMsgServerNetworkStats_Player: {
    fromJSON(object: any): CMsgServerNetworkStats_Player;
    toJSON(message: CMsgServerNetworkStats_Player): unknown;
    create<I extends {
        steamid?: string;
        remote_addr?: string;
        ping_stddev_ms?: number;
        ping_avg_ms?: number;
        packet_loss_pct?: number;
        is_bot?: boolean;
    } & {
        steamid?: string;
        remote_addr?: string;
        ping_stddev_ms?: number;
        ping_avg_ms?: number;
        packet_loss_pct?: number;
        is_bot?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgServerNetworkStats_Player>]: never; }>(base?: I): CMsgServerNetworkStats_Player;
    fromPartial<I_1 extends {
        steamid?: string;
        remote_addr?: string;
        ping_stddev_ms?: number;
        ping_avg_ms?: number;
        packet_loss_pct?: number;
        is_bot?: boolean;
    } & {
        steamid?: string;
        remote_addr?: string;
        ping_stddev_ms?: number;
        ping_avg_ms?: number;
        packet_loss_pct?: number;
        is_bot?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgServerNetworkStats_Player>]: never; }>(object: I_1): CMsgServerNetworkStats_Player;
};
export declare const CSVCMsg_HltvReplay: {
    fromJSON(object: any): CSVCMsg_HltvReplay;
    toJSON(message: CSVCMsg_HltvReplay): unknown;
    create<I extends {
        delay?: number;
        primary_target?: number;
        replay_stop_at?: number;
        replay_start_at?: number;
        replay_slowdown_begin?: number;
        replay_slowdown_end?: number;
        replay_slowdown_rate?: number;
        reason?: number;
    } & {
        delay?: number;
        primary_target?: number;
        replay_stop_at?: number;
        replay_start_at?: number;
        replay_slowdown_begin?: number;
        replay_slowdown_end?: number;
        replay_slowdown_rate?: number;
        reason?: number;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_HltvReplay>]: never; }>(base?: I): CSVCMsg_HltvReplay;
    fromPartial<I_1 extends {
        delay?: number;
        primary_target?: number;
        replay_stop_at?: number;
        replay_start_at?: number;
        replay_slowdown_begin?: number;
        replay_slowdown_end?: number;
        replay_slowdown_rate?: number;
        reason?: number;
    } & {
        delay?: number;
        primary_target?: number;
        replay_stop_at?: number;
        replay_start_at?: number;
        replay_slowdown_begin?: number;
        replay_slowdown_end?: number;
        replay_slowdown_rate?: number;
        reason?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_HltvReplay>]: never; }>(object: I_1): CSVCMsg_HltvReplay;
};
export declare const CCLCMsg_HltvReplay: {
    fromJSON(object: any): CCLCMsg_HltvReplay;
    toJSON(message: CCLCMsg_HltvReplay): unknown;
    create<I extends {
        request?: number;
        slowdown_length?: number;
        slowdown_rate?: number;
        primary_target?: number;
        event_time?: number;
    } & {
        request?: number;
        slowdown_length?: number;
        slowdown_rate?: number;
        primary_target?: number;
        event_time?: number;
    } & { [K in Exclude<keyof I, keyof CCLCMsg_HltvReplay>]: never; }>(base?: I): CCLCMsg_HltvReplay;
    fromPartial<I_1 extends {
        request?: number;
        slowdown_length?: number;
        slowdown_rate?: number;
        primary_target?: number;
        event_time?: number;
    } & {
        request?: number;
        slowdown_length?: number;
        slowdown_rate?: number;
        primary_target?: number;
        event_time?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CCLCMsg_HltvReplay>]: never; }>(object: I_1): CCLCMsg_HltvReplay;
};
export declare const CSVCMsg_Broadcast_Command: {
    fromJSON(object: any): CSVCMsg_Broadcast_Command;
    toJSON(message: CSVCMsg_Broadcast_Command): unknown;
    create<I extends {
        cmd?: string;
    } & {
        cmd?: string;
    } & { [K in Exclude<keyof I, "cmd">]: never; }>(base?: I): CSVCMsg_Broadcast_Command;
    fromPartial<I_1 extends {
        cmd?: string;
    } & {
        cmd?: string;
    } & { [K_1 in Exclude<keyof I_1, "cmd">]: never; }>(object: I_1): CSVCMsg_Broadcast_Command;
};
export declare const CCLCMsg_HltvFixupOperatorTick: {
    fromJSON(object: any): CCLCMsg_HltvFixupOperatorTick;
    toJSON(message: CCLCMsg_HltvFixupOperatorTick): unknown;
    create<I extends {
        tick?: number;
        props_data?: string;
        origin?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        eye_angles?: {
            x?: number;
            y?: number;
            z?: number;
        };
        observer_mode?: number;
        cameraman_scoreboard?: boolean;
        observer_target?: number;
        view_offset?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
    } & {
        tick?: number;
        props_data?: string;
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
        eye_angles?: {
            x?: number;
            y?: number;
            z?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
        } & { [K_1 in Exclude<keyof I["eye_angles"], keyof CMsgQAngle>]: never; };
        observer_mode?: number;
        cameraman_scoreboard?: boolean;
        observer_target?: number;
        view_offset?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_2 in Exclude<keyof I["view_offset"], keyof CMsgVector>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof CCLCMsg_HltvFixupOperatorTick>]: never; }>(base?: I): CCLCMsg_HltvFixupOperatorTick;
    fromPartial<I_1 extends {
        tick?: number;
        props_data?: string;
        origin?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        eye_angles?: {
            x?: number;
            y?: number;
            z?: number;
        };
        observer_mode?: number;
        cameraman_scoreboard?: boolean;
        observer_target?: number;
        view_offset?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
    } & {
        tick?: number;
        props_data?: string;
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
        } & { [K_4 in Exclude<keyof I_1["origin"], keyof CMsgVector>]: never; };
        eye_angles?: {
            x?: number;
            y?: number;
            z?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
        } & { [K_5 in Exclude<keyof I_1["eye_angles"], keyof CMsgQAngle>]: never; };
        observer_mode?: number;
        cameraman_scoreboard?: boolean;
        observer_target?: number;
        view_offset?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_6 in Exclude<keyof I_1["view_offset"], keyof CMsgVector>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof CCLCMsg_HltvFixupOperatorTick>]: never; }>(object: I_1): CCLCMsg_HltvFixupOperatorTick;
};
export declare const CSVCMsg_HltvFixupOperatorStatus: {
    fromJSON(object: any): CSVCMsg_HltvFixupOperatorStatus;
    toJSON(message: CSVCMsg_HltvFixupOperatorStatus): unknown;
    create<I extends {
        mode?: number;
        override_operator_name?: string;
    } & {
        mode?: number;
        override_operator_name?: string;
    } & { [K in Exclude<keyof I, keyof CSVCMsg_HltvFixupOperatorStatus>]: never; }>(base?: I): CSVCMsg_HltvFixupOperatorStatus;
    fromPartial<I_1 extends {
        mode?: number;
        override_operator_name?: string;
    } & {
        mode?: number;
        override_operator_name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CSVCMsg_HltvFixupOperatorStatus>]: never; }>(object: I_1): CSVCMsg_HltvFixupOperatorStatus;
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
