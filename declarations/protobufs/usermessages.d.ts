import { CEntityMsg, CMsgQAngle, CMsgQuaternion, CMsgVector } from "./networkbasetypes";
export declare const protobufPackage = "";
export declare enum EBaseUserMessages {
    UM_AchievementEvent = 101,
    UM_CloseCaption = 102,
    UM_CloseCaptionDirect = 103,
    UM_CurrentTimescale = 104,
    UM_DesiredTimescale = 105,
    UM_Fade = 106,
    UM_GameTitle = 107,
    UM_HudMsg = 110,
    UM_HudText = 111,
    UM_ColoredText = 113,
    UM_RequestState = 114,
    UM_ResetHUD = 115,
    UM_Rumble = 116,
    UM_SayText = 117,
    UM_SayText2 = 118,
    UM_SayTextChannel = 119,
    UM_Shake = 120,
    UM_ShakeDir = 121,
    UM_TextMsg = 124,
    UM_ScreenTilt = 125,
    UM_VoiceMask = 128,
    UM_SendAudio = 130,
    UM_ItemPickup = 131,
    UM_AmmoDenied = 132,
    UM_ShowMenu = 134,
    UM_CreditsMsg = 135,
    UM_CloseCaptionPlaceholder = 142,
    UM_CameraTransition = 143,
    UM_AudioParameter = 144,
    UM_ParticleManager = 145,
    UM_HudError = 146,
    UM_CustomGameEvent = 148,
    UM_AnimGraphUpdate = 149,
    UM_HapticsManagerPulse = 150,
    UM_HapticsManagerEffect = 151,
    UM_CommandQueueState = 152,
    UM_UpdateCssClasses = 153,
    UM_ServerFrameTime = 154,
    UM_LagCompensationError = 155,
    UM_RequestDllStatus = 156,
    UM_RequestUtilAction = 157,
    UM_UtilActionResponse = 158,
    UM_DllStatusResponse = 159,
    UM_RequestInventory = 160,
    UM_InventoryResponse = 161,
    UM_MAX_BASE = 200,
    UNRECOGNIZED = -1
}
export declare function eBaseUserMessagesFromJSON(object: any): EBaseUserMessages;
export declare function eBaseUserMessagesToJSON(object: EBaseUserMessages): string;
export declare enum EBaseEntityMessages {
    EM_PlayJingle = 136,
    EM_ScreenOverlay = 137,
    EM_RemoveAllDecals = 138,
    EM_PropagateForce = 139,
    EM_DoSpark = 140,
    EM_FixAngle = 141,
    UNRECOGNIZED = -1
}
export declare function eBaseEntityMessagesFromJSON(object: any): EBaseEntityMessages;
export declare function eBaseEntityMessagesToJSON(object: EBaseEntityMessages): string;
export declare enum eRollType {
    ROLL_NONE = -1,
    ROLL_STATS = 0,
    ROLL_CREDITS = 1,
    ROLL_LATE_JOIN_LOGO = 2,
    ROLL_OUTTRO = 3,
    UNRECOGNIZED = -1
}
export declare function eRollTypeFromJSON(object: any): eRollType;
export declare function eRollTypeToJSON(object: eRollType): string;
export declare enum PARTICLE_MESSAGE {
    GAME_PARTICLE_MANAGER_EVENT_CREATE = 0,
    GAME_PARTICLE_MANAGER_EVENT_UPDATE = 1,
    GAME_PARTICLE_MANAGER_EVENT_UPDATE_FORWARD = 2,
    GAME_PARTICLE_MANAGER_EVENT_UPDATE_ORIENTATION = 3,
    GAME_PARTICLE_MANAGER_EVENT_UPDATE_FALLBACK = 4,
    GAME_PARTICLE_MANAGER_EVENT_UPDATE_ENT = 5,
    GAME_PARTICLE_MANAGER_EVENT_UPDATE_OFFSET = 6,
    GAME_PARTICLE_MANAGER_EVENT_DESTROY = 7,
    GAME_PARTICLE_MANAGER_EVENT_DESTROY_INVOLVING = 8,
    GAME_PARTICLE_MANAGER_EVENT_RELEASE = 9,
    GAME_PARTICLE_MANAGER_EVENT_LATENCY = 10,
    GAME_PARTICLE_MANAGER_EVENT_SHOULD_DRAW = 11,
    GAME_PARTICLE_MANAGER_EVENT_FROZEN = 12,
    GAME_PARTICLE_MANAGER_EVENT_CHANGE_CONTROL_POINT_ATTACHMENT = 13,
    GAME_PARTICLE_MANAGER_EVENT_UPDATE_ENTITY_POSITION = 14,
    GAME_PARTICLE_MANAGER_EVENT_SET_FOW_PROPERTIES = 15,
    GAME_PARTICLE_MANAGER_EVENT_SET_TEXT = 16,
    GAME_PARTICLE_MANAGER_EVENT_SET_SHOULD_CHECK_FOW = 17,
    GAME_PARTICLE_MANAGER_EVENT_SET_CONTROL_POINT_MODEL = 18,
    GAME_PARTICLE_MANAGER_EVENT_SET_CONTROL_POINT_SNAPSHOT = 19,
    GAME_PARTICLE_MANAGER_EVENT_SET_TEXTURE_ATTRIBUTE = 20,
    GAME_PARTICLE_MANAGER_EVENT_SET_SCENE_OBJECT_GENERIC_FLAG = 21,
    GAME_PARTICLE_MANAGER_EVENT_SET_SCENE_OBJECT_TINT_AND_DESAT = 22,
    GAME_PARTICLE_MANAGER_EVENT_DESTROY_NAMED = 23,
    GAME_PARTICLE_MANAGER_EVENT_SKIP_TO_TIME = 24,
    GAME_PARTICLE_MANAGER_EVENT_CAN_FREEZE = 25,
    GAME_PARTICLE_MANAGER_EVENT_SET_NAMED_VALUE_CONTEXT = 26,
    GAME_PARTICLE_MANAGER_EVENT_UPDATE_TRANSFORM = 27,
    GAME_PARTICLE_MANAGER_EVENT_FREEZE_TRANSITION_OVERRIDE = 28,
    UNRECOGNIZED = -1
}
export declare function pARTICLE_MESSAGEFromJSON(object: any): PARTICLE_MESSAGE;
export declare function pARTICLE_MESSAGEToJSON(object: PARTICLE_MESSAGE): string;
export declare enum EHapticPulseType {
    VR_HAND_HAPTIC_PULSE_LIGHT = 0,
    VR_HAND_HAPTIC_PULSE_MEDIUM = 1,
    VR_HAND_HAPTIC_PULSE_STRONG = 2,
    UNRECOGNIZED = -1
}
export declare function eHapticPulseTypeFromJSON(object: any): EHapticPulseType;
export declare function eHapticPulseTypeToJSON(object: EHapticPulseType): string;
export interface CUserMessageAchievementEvent {
    achievement: number;
}
export interface CUserMessageCloseCaption {
    hash: number;
    duration: number;
    from_player: boolean;
    ent_index: number;
}
export interface CUserMessageCloseCaptionDirect {
    hash: number;
    duration: number;
    from_player: boolean;
    ent_index: number;
}
export interface CUserMessageCloseCaptionPlaceholder {
    string: string;
    duration: number;
    from_player: boolean;
    ent_index: number;
}
export interface CUserMessageCurrentTimescale {
    current: number;
}
export interface CUserMessageDesiredTimescale {
    desired: number;
    acceleration: number;
    minblendrate: number;
    blenddeltamultiplier: number;
}
export interface CUserMessageFade {
    duration: number;
    hold_time: number;
    flags: number;
    color: number;
}
export interface CUserMessageShake {
    command: number;
    amplitude: number;
    frequency: number;
    duration: number;
}
export interface CUserMessageShakeDir {
    shake: CUserMessageShake | undefined;
    direction: CMsgVector | undefined;
}
export interface CUserMessageScreenTilt {
    command: number;
    ease_in_out: boolean;
    angle: CMsgVector | undefined;
    duration: number;
    time: number;
}
export interface CUserMessageSayText {
    playerindex: number;
    text: string;
    chat: boolean;
}
export interface CUserMessageSayText2 {
    entityindex: number;
    chat: boolean;
    messagename: string;
    param1: string;
    param2: string;
    param3: string;
    param4: string;
}
export interface CUserMessageHudMsg {
    channel: number;
    x: number;
    y: number;
    color1: number;
    color2: number;
    effect: number;
    message: string;
}
export interface CUserMessageHudText {
    message: string;
}
export interface CUserMessageTextMsg {
    dest: number;
    param: string[];
}
export interface CUserMessageGameTitle {
}
export interface CUserMessageResetHUD {
}
export interface CUserMessageSendAudio {
    soundname: string;
    stop: boolean;
}
export interface CUserMessageAudioParameter {
    parameter_type: number;
    name_hash_code: number;
    value: number;
    int_value: number;
}
export interface CUserMessageVoiceMask {
    gamerules_masks: number[];
    ban_masks: number[];
    mod_enable: boolean;
}
export interface CUserMessageRequestState {
}
export interface CUserMessageRumble {
    index: number;
    data: number;
    flags: number;
}
export interface CUserMessageSayTextChannel {
    player: number;
    channel: number;
    text: string;
}
export interface CUserMessageColoredText {
    color: number;
    text: string;
    reset: boolean;
    context_player_slot: number;
    context_value: number;
    context_team_id: number;
}
export interface CUserMessageItemPickup {
    itemname: string;
}
export interface CUserMessageAmmoDenied {
    ammo_id: number;
}
export interface CUserMessageShowMenu {
    validslots: number;
    displaytime: number;
    needmore: boolean;
    menustring: string;
}
export interface CUserMessageCreditsMsg {
    rolltype: eRollType;
    logo_length: number;
}
export interface CEntityMessagePlayJingle {
    entity_msg: CEntityMsg | undefined;
}
export interface CEntityMessageScreenOverlay {
    start_effect: boolean;
    entity_msg: CEntityMsg | undefined;
}
export interface CEntityMessageRemoveAllDecals {
    remove_decals: boolean;
    entity_msg: CEntityMsg | undefined;
}
export interface CEntityMessagePropagateForce {
    impulse: CMsgVector | undefined;
    entity_msg: CEntityMsg | undefined;
}
export interface CEntityMessageDoSpark {
    origin: CMsgVector | undefined;
    entityindex: number;
    radius: number;
    color: number;
    beams: number;
    thick: number;
    duration: number;
    entity_msg: CEntityMsg | undefined;
}
export interface CEntityMessageFixAngle {
    relative: boolean;
    angle: CMsgQAngle | undefined;
    entity_msg: CEntityMsg | undefined;
}
export interface CUserMessageCameraTransition {
    camera_type: number;
    duration: number;
    params_data_driven: CUserMessageCameraTransition_Transition_DataDriven | undefined;
}
export interface CUserMessageCameraTransition_Transition_DataDriven {
    filename: string;
    attach_ent_index: number;
    duration: number;
}
export interface CUserMsg_ParticleManager {
    type: PARTICLE_MESSAGE;
    index: number;
    release_particle_index: CUserMsg_ParticleManager_ReleaseParticleIndex | undefined;
    create_particle: CUserMsg_ParticleManager_CreateParticle | undefined;
    destroy_particle: CUserMsg_ParticleManager_DestroyParticle | undefined;
    destroy_particle_involving: CUserMsg_ParticleManager_DestroyParticleInvolving | undefined;
    update_particle: CUserMsg_ParticleManager_UpdateParticle_OBSOLETE | undefined;
    update_particle_fwd: CUserMsg_ParticleManager_UpdateParticleFwd_OBSOLETE | undefined;
    update_particle_orient: CUserMsg_ParticleManager_UpdateParticleOrient_OBSOLETE | undefined;
    update_particle_fallback: CUserMsg_ParticleManager_UpdateParticleFallback | undefined;
    update_particle_offset: CUserMsg_ParticleManager_UpdateParticleOffset | undefined;
    update_particle_ent: CUserMsg_ParticleManager_UpdateParticleEnt | undefined;
    update_particle_should_draw: CUserMsg_ParticleManager_UpdateParticleShouldDraw | undefined;
    update_particle_set_frozen: CUserMsg_ParticleManager_UpdateParticleSetFrozen | undefined;
    change_control_point_attachment: CUserMsg_ParticleManager_ChangeControlPointAttachment | undefined;
    update_entity_position: CUserMsg_ParticleManager_UpdateEntityPosition | undefined;
    set_particle_fow_properties: CUserMsg_ParticleManager_SetParticleFoWProperties | undefined;
    set_particle_text: CUserMsg_ParticleManager_SetParticleText | undefined;
    set_particle_should_check_fow: CUserMsg_ParticleManager_SetParticleShouldCheckFoW | undefined;
    set_control_point_model: CUserMsg_ParticleManager_SetControlPointModel | undefined;
    set_control_point_snapshot: CUserMsg_ParticleManager_SetControlPointSnapshot | undefined;
    set_texture_attribute: CUserMsg_ParticleManager_SetTextureAttribute | undefined;
    set_scene_object_generic_flag: CUserMsg_ParticleManager_SetSceneObjectGenericFlag | undefined;
    set_scene_object_tint_and_desat: CUserMsg_ParticleManager_SetSceneObjectTintAndDesat | undefined;
    destroy_particle_named: CUserMsg_ParticleManager_DestroyParticleNamed | undefined;
    particle_skip_to_time: CUserMsg_ParticleManager_ParticleSkipToTime | undefined;
    particle_can_freeze: CUserMsg_ParticleManager_ParticleCanFreeze | undefined;
    set_named_value_context: CUserMsg_ParticleManager_SetParticleNamedValueContext | undefined;
    update_particle_transform: CUserMsg_ParticleManager_UpdateParticleTransform | undefined;
    particle_freeze_transition_override: CUserMsg_ParticleManager_ParticleFreezeTransitionOverride | undefined;
}
export interface CUserMsg_ParticleManager_ReleaseParticleIndex {
}
export interface CUserMsg_ParticleManager_CreateParticle {
    particle_name_index: string;
    attach_type: number;
    entity_handle: number;
    entity_handle_for_modifiers: number;
    apply_voice_ban_rules: boolean;
    team_behavior: number;
    control_point_configuration: string;
}
export interface CUserMsg_ParticleManager_DestroyParticle {
    destroy_immediately: boolean;
}
export interface CUserMsg_ParticleManager_DestroyParticleInvolving {
    destroy_immediately: boolean;
    entity_handle: number;
}
export interface CUserMsg_ParticleManager_DestroyParticleNamed {
    particle_name_index: string;
    entity_handle: number;
    destroy_immediately: boolean;
    play_endcap: boolean;
}
export interface CUserMsg_ParticleManager_UpdateParticle_OBSOLETE {
    control_point: number;
    position: CMsgVector | undefined;
}
export interface CUserMsg_ParticleManager_UpdateParticleFwd_OBSOLETE {
    control_point: number;
    forward: CMsgVector | undefined;
}
export interface CUserMsg_ParticleManager_UpdateParticleOrient_OBSOLETE {
    control_point: number;
    forward: CMsgVector | undefined;
    deprecated_right: CMsgVector | undefined;
    up: CMsgVector | undefined;
    left: CMsgVector | undefined;
}
export interface CUserMsg_ParticleManager_UpdateParticleTransform {
    control_point: number;
    position: CMsgVector | undefined;
    orientation: CMsgQuaternion | undefined;
    interpolation_interval: number;
}
export interface CUserMsg_ParticleManager_UpdateParticleFallback {
    control_point: number;
    position: CMsgVector | undefined;
}
export interface CUserMsg_ParticleManager_UpdateParticleOffset {
    control_point: number;
    origin_offset: CMsgVector | undefined;
    angle_offset: CMsgQAngle | undefined;
}
export interface CUserMsg_ParticleManager_UpdateParticleEnt {
    control_point: number;
    entity_handle: number;
    attach_type: number;
    attachment: number;
    fallback_position: CMsgVector | undefined;
    include_wearables: boolean;
    offset_position: CMsgVector | undefined;
    offset_angles: CMsgQAngle | undefined;
}
export interface CUserMsg_ParticleManager_UpdateParticleSetFrozen {
    set_frozen: boolean;
    transition_duration: number;
}
export interface CUserMsg_ParticleManager_UpdateParticleShouldDraw {
    should_draw: boolean;
}
export interface CUserMsg_ParticleManager_ChangeControlPointAttachment {
    attachment_old: number;
    attachment_new: number;
    entity_handle: number;
}
export interface CUserMsg_ParticleManager_UpdateEntityPosition {
    entity_handle: number;
    position: CMsgVector | undefined;
}
export interface CUserMsg_ParticleManager_SetParticleFoWProperties {
    fow_control_point: number;
    fow_control_point2: number;
    fow_radius: number;
}
export interface CUserMsg_ParticleManager_SetParticleShouldCheckFoW {
    check_fow: boolean;
}
export interface CUserMsg_ParticleManager_SetControlPointModel {
    control_point: number;
    model_name: string;
}
export interface CUserMsg_ParticleManager_SetControlPointSnapshot {
    control_point: number;
    snapshot_name: string;
}
export interface CUserMsg_ParticleManager_SetParticleText {
    text: string;
}
export interface CUserMsg_ParticleManager_SetTextureAttribute {
    attribute_name: string;
    texture_name: string;
}
export interface CUserMsg_ParticleManager_SetSceneObjectGenericFlag {
    flag_value: boolean;
}
export interface CUserMsg_ParticleManager_SetSceneObjectTintAndDesat {
    tint: number;
    desat: number;
}
export interface CUserMsg_ParticleManager_ParticleSkipToTime {
    skip_to_time: number;
}
export interface CUserMsg_ParticleManager_ParticleCanFreeze {
    can_freeze: boolean;
}
export interface CUserMsg_ParticleManager_ParticleFreezeTransitionOverride {
    freeze_transition_override: number;
}
export interface CUserMsg_ParticleManager_SetParticleNamedValueContext {
    float_values: CUserMsg_ParticleManager_SetParticleNamedValueContext_FloatContextValue[];
    vector_values: CUserMsg_ParticleManager_SetParticleNamedValueContext_VectorContextValue[];
    transform_values: CUserMsg_ParticleManager_SetParticleNamedValueContext_TransformContextValue[];
}
export interface CUserMsg_ParticleManager_SetParticleNamedValueContext_FloatContextValue {
    value_name: string;
    value: number;
}
export interface CUserMsg_ParticleManager_SetParticleNamedValueContext_VectorContextValue {
    value_name: string;
    value: CMsgVector | undefined;
    ent_index: number;
    attachment_name: string;
}
export interface CUserMsg_ParticleManager_SetParticleNamedValueContext_TransformContextValue {
    value_name: string;
    angles: CMsgQAngle | undefined;
    translation: CMsgVector | undefined;
    ent_index: number;
    attachment_name: string;
}
export interface CUserMsg_HudError {
    order_id: number;
}
export interface CUserMsg_CustomGameEvent {
    event_name: string;
    data: string;
}
export interface CUserMessageHapticsManagerPulse {
    hand_id: number;
    effect_amplitude: number;
    effect_frequency: number;
    effect_duration: number;
}
export interface CUserMessageHapticsManagerEffect {
    hand_id: number;
    effect_name_hash_code: number;
    effect_scale: number;
}
export interface CUserMessageAnimStateGraphState {
    entity_index: number;
    data: string;
}
export interface CUserMessageCommandQueueState {
    player_slot: number;
    command_queue_info: CUserMessageCommandQueueState_command_queue_info_t | undefined;
}
export interface CUserMessageCommandQueueState_command_queue_info_t {
    commands_queued: number;
    command_queue_desired_size: number;
    starved_command_ticks: number;
    time_dilation_percent: number;
}
export interface CUserMessageUpdateCssClasses {
    target_world_panel: number;
    css_classes: string;
    is_add: boolean;
}
export interface CUserMessageServerFrameTime {
    frame_time: number;
}
export interface CUserMessageLagCompensationError {
    distance: number;
}
export interface CUserMessageRequestDllStatus {
    dll_action: string;
    full_report: boolean;
}
export interface CUserMessageRequestUtilAction {
    util1: number;
    util2: number;
    util3: number;
    util4: number;
    util5: number;
}
export interface CUserMessage_UtilMsg_Response {
    crc: number;
    item_count: number;
    crc2: number;
    item_count2: number;
    crc_part: number[];
    crc_part2: number[];
    client_timestamp: number;
    platform: number;
    itemdetails: CUserMessage_UtilMsg_Response_ItemDetail[];
    itemgroup: number;
}
export interface CUserMessage_UtilMsg_Response_ItemDetail {
    index: number;
    hash: number;
    crc: number;
    name: string;
}
export interface CUserMessage_DllStatus {
    file_report: string;
    command_line: string;
    total_files: number;
    process_id: number;
    osversion: number;
    client_time: string;
    diagnostics: CUserMessage_DllStatus_CVDiagnostic[];
}
export interface CUserMessage_DllStatus_CVDiagnostic {
    id: number;
    extended: number;
    value: string;
    string_value: string;
}
export interface CUserMessageRequestInventory {
    inventory: number;
    offset: number;
    options: number;
}
export interface CUserMessage_Inventory_Response {
    crc: number;
    item_count: number;
    osversion: number;
    perf_time: number;
    client_timestamp: number;
    platform: number;
    inventories: CUserMessage_Inventory_Response_InventoryDetail[];
    inventories2: CUserMessage_Inventory_Response_InventoryDetail[];
    inv_type: number;
    build_version: number;
}
export interface CUserMessage_Inventory_Response_InventoryDetail {
    index: number;
    primary: string;
    offset: string;
    first: string;
    base: string;
    name: string;
    base_name: string;
    base_detail: number;
    base_time: number;
    base_hash: number;
}
export declare const CUserMessageAchievementEvent: {
    fromJSON(object: any): CUserMessageAchievementEvent;
    toJSON(message: CUserMessageAchievementEvent): unknown;
    create<I extends {
        achievement?: number;
    } & {
        achievement?: number;
    } & { [K in Exclude<keyof I, "achievement">]: never; }>(base?: I): CUserMessageAchievementEvent;
    fromPartial<I_1 extends {
        achievement?: number;
    } & {
        achievement?: number;
    } & { [K_1 in Exclude<keyof I_1, "achievement">]: never; }>(object: I_1): CUserMessageAchievementEvent;
};
export declare const CUserMessageCloseCaption: {
    fromJSON(object: any): CUserMessageCloseCaption;
    toJSON(message: CUserMessageCloseCaption): unknown;
    create<I extends {
        hash?: number;
        duration?: number;
        from_player?: boolean;
        ent_index?: number;
    } & {
        hash?: number;
        duration?: number;
        from_player?: boolean;
        ent_index?: number;
    } & { [K in Exclude<keyof I, keyof CUserMessageCloseCaption>]: never; }>(base?: I): CUserMessageCloseCaption;
    fromPartial<I_1 extends {
        hash?: number;
        duration?: number;
        from_player?: boolean;
        ent_index?: number;
    } & {
        hash?: number;
        duration?: number;
        from_player?: boolean;
        ent_index?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageCloseCaption>]: never; }>(object: I_1): CUserMessageCloseCaption;
};
export declare const CUserMessageCloseCaptionDirect: {
    fromJSON(object: any): CUserMessageCloseCaptionDirect;
    toJSON(message: CUserMessageCloseCaptionDirect): unknown;
    create<I extends {
        hash?: number;
        duration?: number;
        from_player?: boolean;
        ent_index?: number;
    } & {
        hash?: number;
        duration?: number;
        from_player?: boolean;
        ent_index?: number;
    } & { [K in Exclude<keyof I, keyof CUserMessageCloseCaptionDirect>]: never; }>(base?: I): CUserMessageCloseCaptionDirect;
    fromPartial<I_1 extends {
        hash?: number;
        duration?: number;
        from_player?: boolean;
        ent_index?: number;
    } & {
        hash?: number;
        duration?: number;
        from_player?: boolean;
        ent_index?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageCloseCaptionDirect>]: never; }>(object: I_1): CUserMessageCloseCaptionDirect;
};
export declare const CUserMessageCloseCaptionPlaceholder: {
    fromJSON(object: any): CUserMessageCloseCaptionPlaceholder;
    toJSON(message: CUserMessageCloseCaptionPlaceholder): unknown;
    create<I extends {
        string?: string;
        duration?: number;
        from_player?: boolean;
        ent_index?: number;
    } & {
        string?: string;
        duration?: number;
        from_player?: boolean;
        ent_index?: number;
    } & { [K in Exclude<keyof I, keyof CUserMessageCloseCaptionPlaceholder>]: never; }>(base?: I): CUserMessageCloseCaptionPlaceholder;
    fromPartial<I_1 extends {
        string?: string;
        duration?: number;
        from_player?: boolean;
        ent_index?: number;
    } & {
        string?: string;
        duration?: number;
        from_player?: boolean;
        ent_index?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageCloseCaptionPlaceholder>]: never; }>(object: I_1): CUserMessageCloseCaptionPlaceholder;
};
export declare const CUserMessageCurrentTimescale: {
    fromJSON(object: any): CUserMessageCurrentTimescale;
    toJSON(message: CUserMessageCurrentTimescale): unknown;
    create<I extends {
        current?: number;
    } & {
        current?: number;
    } & { [K in Exclude<keyof I, "current">]: never; }>(base?: I): CUserMessageCurrentTimescale;
    fromPartial<I_1 extends {
        current?: number;
    } & {
        current?: number;
    } & { [K_1 in Exclude<keyof I_1, "current">]: never; }>(object: I_1): CUserMessageCurrentTimescale;
};
export declare const CUserMessageDesiredTimescale: {
    fromJSON(object: any): CUserMessageDesiredTimescale;
    toJSON(message: CUserMessageDesiredTimescale): unknown;
    create<I extends {
        desired?: number;
        acceleration?: number;
        minblendrate?: number;
        blenddeltamultiplier?: number;
    } & {
        desired?: number;
        acceleration?: number;
        minblendrate?: number;
        blenddeltamultiplier?: number;
    } & { [K in Exclude<keyof I, keyof CUserMessageDesiredTimescale>]: never; }>(base?: I): CUserMessageDesiredTimescale;
    fromPartial<I_1 extends {
        desired?: number;
        acceleration?: number;
        minblendrate?: number;
        blenddeltamultiplier?: number;
    } & {
        desired?: number;
        acceleration?: number;
        minblendrate?: number;
        blenddeltamultiplier?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageDesiredTimescale>]: never; }>(object: I_1): CUserMessageDesiredTimescale;
};
export declare const CUserMessageFade: {
    fromJSON(object: any): CUserMessageFade;
    toJSON(message: CUserMessageFade): unknown;
    create<I extends {
        duration?: number;
        hold_time?: number;
        flags?: number;
        color?: number;
    } & {
        duration?: number;
        hold_time?: number;
        flags?: number;
        color?: number;
    } & { [K in Exclude<keyof I, keyof CUserMessageFade>]: never; }>(base?: I): CUserMessageFade;
    fromPartial<I_1 extends {
        duration?: number;
        hold_time?: number;
        flags?: number;
        color?: number;
    } & {
        duration?: number;
        hold_time?: number;
        flags?: number;
        color?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageFade>]: never; }>(object: I_1): CUserMessageFade;
};
export declare const CUserMessageShake: {
    fromJSON(object: any): CUserMessageShake;
    toJSON(message: CUserMessageShake): unknown;
    create<I extends {
        command?: number;
        amplitude?: number;
        frequency?: number;
        duration?: number;
    } & {
        command?: number;
        amplitude?: number;
        frequency?: number;
        duration?: number;
    } & { [K in Exclude<keyof I, keyof CUserMessageShake>]: never; }>(base?: I): CUserMessageShake;
    fromPartial<I_1 extends {
        command?: number;
        amplitude?: number;
        frequency?: number;
        duration?: number;
    } & {
        command?: number;
        amplitude?: number;
        frequency?: number;
        duration?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageShake>]: never; }>(object: I_1): CUserMessageShake;
};
export declare const CUserMessageShakeDir: {
    fromJSON(object: any): CUserMessageShakeDir;
    toJSON(message: CUserMessageShakeDir): unknown;
    create<I extends {
        shake?: {
            command?: number;
            amplitude?: number;
            frequency?: number;
            duration?: number;
        };
        direction?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
    } & {
        shake?: {
            command?: number;
            amplitude?: number;
            frequency?: number;
            duration?: number;
        } & {
            command?: number;
            amplitude?: number;
            frequency?: number;
            duration?: number;
        } & { [K in Exclude<keyof I["shake"], keyof CUserMessageShake>]: never; };
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
        } & { [K_1 in Exclude<keyof I["direction"], keyof CMsgVector>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CUserMessageShakeDir>]: never; }>(base?: I): CUserMessageShakeDir;
    fromPartial<I_1 extends {
        shake?: {
            command?: number;
            amplitude?: number;
            frequency?: number;
            duration?: number;
        };
        direction?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
    } & {
        shake?: {
            command?: number;
            amplitude?: number;
            frequency?: number;
            duration?: number;
        } & {
            command?: number;
            amplitude?: number;
            frequency?: number;
            duration?: number;
        } & { [K_3 in Exclude<keyof I_1["shake"], keyof CUserMessageShake>]: never; };
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
        } & { [K_4 in Exclude<keyof I_1["direction"], keyof CMsgVector>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CUserMessageShakeDir>]: never; }>(object: I_1): CUserMessageShakeDir;
};
export declare const CUserMessageScreenTilt: {
    fromJSON(object: any): CUserMessageScreenTilt;
    toJSON(message: CUserMessageScreenTilt): unknown;
    create<I extends {
        command?: number;
        ease_in_out?: boolean;
        angle?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        duration?: number;
        time?: number;
    } & {
        command?: number;
        ease_in_out?: boolean;
        angle?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["angle"], keyof CMsgVector>]: never; };
        duration?: number;
        time?: number;
    } & { [K_1 in Exclude<keyof I, keyof CUserMessageScreenTilt>]: never; }>(base?: I): CUserMessageScreenTilt;
    fromPartial<I_1 extends {
        command?: number;
        ease_in_out?: boolean;
        angle?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        duration?: number;
        time?: number;
    } & {
        command?: number;
        ease_in_out?: boolean;
        angle?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_2 in Exclude<keyof I_1["angle"], keyof CMsgVector>]: never; };
        duration?: number;
        time?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CUserMessageScreenTilt>]: never; }>(object: I_1): CUserMessageScreenTilt;
};
export declare const CUserMessageSayText: {
    fromJSON(object: any): CUserMessageSayText;
    toJSON(message: CUserMessageSayText): unknown;
    create<I extends {
        playerindex?: number;
        text?: string;
        chat?: boolean;
    } & {
        playerindex?: number;
        text?: string;
        chat?: boolean;
    } & { [K in Exclude<keyof I, keyof CUserMessageSayText>]: never; }>(base?: I): CUserMessageSayText;
    fromPartial<I_1 extends {
        playerindex?: number;
        text?: string;
        chat?: boolean;
    } & {
        playerindex?: number;
        text?: string;
        chat?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageSayText>]: never; }>(object: I_1): CUserMessageSayText;
};
export declare const CUserMessageSayText2: {
    fromJSON(object: any): CUserMessageSayText2;
    toJSON(message: CUserMessageSayText2): unknown;
    create<I extends {
        entityindex?: number;
        chat?: boolean;
        messagename?: string;
        param1?: string;
        param2?: string;
        param3?: string;
        param4?: string;
    } & {
        entityindex?: number;
        chat?: boolean;
        messagename?: string;
        param1?: string;
        param2?: string;
        param3?: string;
        param4?: string;
    } & { [K in Exclude<keyof I, keyof CUserMessageSayText2>]: never; }>(base?: I): CUserMessageSayText2;
    fromPartial<I_1 extends {
        entityindex?: number;
        chat?: boolean;
        messagename?: string;
        param1?: string;
        param2?: string;
        param3?: string;
        param4?: string;
    } & {
        entityindex?: number;
        chat?: boolean;
        messagename?: string;
        param1?: string;
        param2?: string;
        param3?: string;
        param4?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageSayText2>]: never; }>(object: I_1): CUserMessageSayText2;
};
export declare const CUserMessageHudMsg: {
    fromJSON(object: any): CUserMessageHudMsg;
    toJSON(message: CUserMessageHudMsg): unknown;
    create<I extends {
        channel?: number;
        x?: number;
        y?: number;
        color1?: number;
        color2?: number;
        effect?: number;
        message?: string;
    } & {
        channel?: number;
        x?: number;
        y?: number;
        color1?: number;
        color2?: number;
        effect?: number;
        message?: string;
    } & { [K in Exclude<keyof I, keyof CUserMessageHudMsg>]: never; }>(base?: I): CUserMessageHudMsg;
    fromPartial<I_1 extends {
        channel?: number;
        x?: number;
        y?: number;
        color1?: number;
        color2?: number;
        effect?: number;
        message?: string;
    } & {
        channel?: number;
        x?: number;
        y?: number;
        color1?: number;
        color2?: number;
        effect?: number;
        message?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageHudMsg>]: never; }>(object: I_1): CUserMessageHudMsg;
};
export declare const CUserMessageHudText: {
    fromJSON(object: any): CUserMessageHudText;
    toJSON(message: CUserMessageHudText): unknown;
    create<I extends {
        message?: string;
    } & {
        message?: string;
    } & { [K in Exclude<keyof I, "message">]: never; }>(base?: I): CUserMessageHudText;
    fromPartial<I_1 extends {
        message?: string;
    } & {
        message?: string;
    } & { [K_1 in Exclude<keyof I_1, "message">]: never; }>(object: I_1): CUserMessageHudText;
};
export declare const CUserMessageTextMsg: {
    fromJSON(object: any): CUserMessageTextMsg;
    toJSON(message: CUserMessageTextMsg): unknown;
    create<I extends {
        dest?: number;
        param?: string[];
    } & {
        dest?: number;
        param?: string[] & string[] & { [K in Exclude<keyof I["param"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CUserMessageTextMsg>]: never; }>(base?: I): CUserMessageTextMsg;
    fromPartial<I_1 extends {
        dest?: number;
        param?: string[];
    } & {
        dest?: number;
        param?: string[] & string[] & { [K_2 in Exclude<keyof I_1["param"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CUserMessageTextMsg>]: never; }>(object: I_1): CUserMessageTextMsg;
};
export declare const CUserMessageGameTitle: {
    fromJSON(_: any): CUserMessageGameTitle;
    toJSON(_: CUserMessageGameTitle): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CUserMessageGameTitle;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CUserMessageGameTitle;
};
export declare const CUserMessageResetHUD: {
    fromJSON(_: any): CUserMessageResetHUD;
    toJSON(_: CUserMessageResetHUD): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CUserMessageResetHUD;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CUserMessageResetHUD;
};
export declare const CUserMessageSendAudio: {
    fromJSON(object: any): CUserMessageSendAudio;
    toJSON(message: CUserMessageSendAudio): unknown;
    create<I extends {
        soundname?: string;
        stop?: boolean;
    } & {
        soundname?: string;
        stop?: boolean;
    } & { [K in Exclude<keyof I, keyof CUserMessageSendAudio>]: never; }>(base?: I): CUserMessageSendAudio;
    fromPartial<I_1 extends {
        soundname?: string;
        stop?: boolean;
    } & {
        soundname?: string;
        stop?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageSendAudio>]: never; }>(object: I_1): CUserMessageSendAudio;
};
export declare const CUserMessageAudioParameter: {
    fromJSON(object: any): CUserMessageAudioParameter;
    toJSON(message: CUserMessageAudioParameter): unknown;
    create<I extends {
        parameter_type?: number;
        name_hash_code?: number;
        value?: number;
        int_value?: number;
    } & {
        parameter_type?: number;
        name_hash_code?: number;
        value?: number;
        int_value?: number;
    } & { [K in Exclude<keyof I, keyof CUserMessageAudioParameter>]: never; }>(base?: I): CUserMessageAudioParameter;
    fromPartial<I_1 extends {
        parameter_type?: number;
        name_hash_code?: number;
        value?: number;
        int_value?: number;
    } & {
        parameter_type?: number;
        name_hash_code?: number;
        value?: number;
        int_value?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageAudioParameter>]: never; }>(object: I_1): CUserMessageAudioParameter;
};
export declare const CUserMessageVoiceMask: {
    fromJSON(object: any): CUserMessageVoiceMask;
    toJSON(message: CUserMessageVoiceMask): unknown;
    create<I extends {
        gamerules_masks?: number[];
        ban_masks?: number[];
        mod_enable?: boolean;
    } & {
        gamerules_masks?: number[] & number[] & { [K in Exclude<keyof I["gamerules_masks"], keyof number[]>]: never; };
        ban_masks?: number[] & number[] & { [K_1 in Exclude<keyof I["ban_masks"], keyof number[]>]: never; };
        mod_enable?: boolean;
    } & { [K_2 in Exclude<keyof I, keyof CUserMessageVoiceMask>]: never; }>(base?: I): CUserMessageVoiceMask;
    fromPartial<I_1 extends {
        gamerules_masks?: number[];
        ban_masks?: number[];
        mod_enable?: boolean;
    } & {
        gamerules_masks?: number[] & number[] & { [K_3 in Exclude<keyof I_1["gamerules_masks"], keyof number[]>]: never; };
        ban_masks?: number[] & number[] & { [K_4 in Exclude<keyof I_1["ban_masks"], keyof number[]>]: never; };
        mod_enable?: boolean;
    } & { [K_5 in Exclude<keyof I_1, keyof CUserMessageVoiceMask>]: never; }>(object: I_1): CUserMessageVoiceMask;
};
export declare const CUserMessageRequestState: {
    fromJSON(_: any): CUserMessageRequestState;
    toJSON(_: CUserMessageRequestState): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CUserMessageRequestState;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CUserMessageRequestState;
};
export declare const CUserMessageRumble: {
    fromJSON(object: any): CUserMessageRumble;
    toJSON(message: CUserMessageRumble): unknown;
    create<I extends {
        index?: number;
        data?: number;
        flags?: number;
    } & {
        index?: number;
        data?: number;
        flags?: number;
    } & { [K in Exclude<keyof I, keyof CUserMessageRumble>]: never; }>(base?: I): CUserMessageRumble;
    fromPartial<I_1 extends {
        index?: number;
        data?: number;
        flags?: number;
    } & {
        index?: number;
        data?: number;
        flags?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageRumble>]: never; }>(object: I_1): CUserMessageRumble;
};
export declare const CUserMessageSayTextChannel: {
    fromJSON(object: any): CUserMessageSayTextChannel;
    toJSON(message: CUserMessageSayTextChannel): unknown;
    create<I extends {
        player?: number;
        channel?: number;
        text?: string;
    } & {
        player?: number;
        channel?: number;
        text?: string;
    } & { [K in Exclude<keyof I, keyof CUserMessageSayTextChannel>]: never; }>(base?: I): CUserMessageSayTextChannel;
    fromPartial<I_1 extends {
        player?: number;
        channel?: number;
        text?: string;
    } & {
        player?: number;
        channel?: number;
        text?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageSayTextChannel>]: never; }>(object: I_1): CUserMessageSayTextChannel;
};
export declare const CUserMessageColoredText: {
    fromJSON(object: any): CUserMessageColoredText;
    toJSON(message: CUserMessageColoredText): unknown;
    create<I extends {
        color?: number;
        text?: string;
        reset?: boolean;
        context_player_slot?: number;
        context_value?: number;
        context_team_id?: number;
    } & {
        color?: number;
        text?: string;
        reset?: boolean;
        context_player_slot?: number;
        context_value?: number;
        context_team_id?: number;
    } & { [K in Exclude<keyof I, keyof CUserMessageColoredText>]: never; }>(base?: I): CUserMessageColoredText;
    fromPartial<I_1 extends {
        color?: number;
        text?: string;
        reset?: boolean;
        context_player_slot?: number;
        context_value?: number;
        context_team_id?: number;
    } & {
        color?: number;
        text?: string;
        reset?: boolean;
        context_player_slot?: number;
        context_value?: number;
        context_team_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageColoredText>]: never; }>(object: I_1): CUserMessageColoredText;
};
export declare const CUserMessageItemPickup: {
    fromJSON(object: any): CUserMessageItemPickup;
    toJSON(message: CUserMessageItemPickup): unknown;
    create<I extends {
        itemname?: string;
    } & {
        itemname?: string;
    } & { [K in Exclude<keyof I, "itemname">]: never; }>(base?: I): CUserMessageItemPickup;
    fromPartial<I_1 extends {
        itemname?: string;
    } & {
        itemname?: string;
    } & { [K_1 in Exclude<keyof I_1, "itemname">]: never; }>(object: I_1): CUserMessageItemPickup;
};
export declare const CUserMessageAmmoDenied: {
    fromJSON(object: any): CUserMessageAmmoDenied;
    toJSON(message: CUserMessageAmmoDenied): unknown;
    create<I extends {
        ammo_id?: number;
    } & {
        ammo_id?: number;
    } & { [K in Exclude<keyof I, "ammo_id">]: never; }>(base?: I): CUserMessageAmmoDenied;
    fromPartial<I_1 extends {
        ammo_id?: number;
    } & {
        ammo_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "ammo_id">]: never; }>(object: I_1): CUserMessageAmmoDenied;
};
export declare const CUserMessageShowMenu: {
    fromJSON(object: any): CUserMessageShowMenu;
    toJSON(message: CUserMessageShowMenu): unknown;
    create<I extends {
        validslots?: number;
        displaytime?: number;
        needmore?: boolean;
        menustring?: string;
    } & {
        validslots?: number;
        displaytime?: number;
        needmore?: boolean;
        menustring?: string;
    } & { [K in Exclude<keyof I, keyof CUserMessageShowMenu>]: never; }>(base?: I): CUserMessageShowMenu;
    fromPartial<I_1 extends {
        validslots?: number;
        displaytime?: number;
        needmore?: boolean;
        menustring?: string;
    } & {
        validslots?: number;
        displaytime?: number;
        needmore?: boolean;
        menustring?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageShowMenu>]: never; }>(object: I_1): CUserMessageShowMenu;
};
export declare const CUserMessageCreditsMsg: {
    fromJSON(object: any): CUserMessageCreditsMsg;
    toJSON(message: CUserMessageCreditsMsg): unknown;
    create<I extends {
        rolltype?: eRollType;
        logo_length?: number;
    } & {
        rolltype?: eRollType;
        logo_length?: number;
    } & { [K in Exclude<keyof I, keyof CUserMessageCreditsMsg>]: never; }>(base?: I): CUserMessageCreditsMsg;
    fromPartial<I_1 extends {
        rolltype?: eRollType;
        logo_length?: number;
    } & {
        rolltype?: eRollType;
        logo_length?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageCreditsMsg>]: never; }>(object: I_1): CUserMessageCreditsMsg;
};
export declare const CEntityMessagePlayJingle: {
    fromJSON(object: any): CEntityMessagePlayJingle;
    toJSON(message: CEntityMessagePlayJingle): unknown;
    create<I extends {
        entity_msg?: {
            target_entity?: number;
        };
    } & {
        entity_msg?: {
            target_entity?: number;
        } & {
            target_entity?: number;
        } & { [K in Exclude<keyof I["entity_msg"], "target_entity">]: never; };
    } & { [K_1 in Exclude<keyof I, "entity_msg">]: never; }>(base?: I): CEntityMessagePlayJingle;
    fromPartial<I_1 extends {
        entity_msg?: {
            target_entity?: number;
        };
    } & {
        entity_msg?: {
            target_entity?: number;
        } & {
            target_entity?: number;
        } & { [K_2 in Exclude<keyof I_1["entity_msg"], "target_entity">]: never; };
    } & { [K_3 in Exclude<keyof I_1, "entity_msg">]: never; }>(object: I_1): CEntityMessagePlayJingle;
};
export declare const CEntityMessageScreenOverlay: {
    fromJSON(object: any): CEntityMessageScreenOverlay;
    toJSON(message: CEntityMessageScreenOverlay): unknown;
    create<I extends {
        start_effect?: boolean;
        entity_msg?: {
            target_entity?: number;
        };
    } & {
        start_effect?: boolean;
        entity_msg?: {
            target_entity?: number;
        } & {
            target_entity?: number;
        } & { [K in Exclude<keyof I["entity_msg"], "target_entity">]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CEntityMessageScreenOverlay>]: never; }>(base?: I): CEntityMessageScreenOverlay;
    fromPartial<I_1 extends {
        start_effect?: boolean;
        entity_msg?: {
            target_entity?: number;
        };
    } & {
        start_effect?: boolean;
        entity_msg?: {
            target_entity?: number;
        } & {
            target_entity?: number;
        } & { [K_2 in Exclude<keyof I_1["entity_msg"], "target_entity">]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CEntityMessageScreenOverlay>]: never; }>(object: I_1): CEntityMessageScreenOverlay;
};
export declare const CEntityMessageRemoveAllDecals: {
    fromJSON(object: any): CEntityMessageRemoveAllDecals;
    toJSON(message: CEntityMessageRemoveAllDecals): unknown;
    create<I extends {
        remove_decals?: boolean;
        entity_msg?: {
            target_entity?: number;
        };
    } & {
        remove_decals?: boolean;
        entity_msg?: {
            target_entity?: number;
        } & {
            target_entity?: number;
        } & { [K in Exclude<keyof I["entity_msg"], "target_entity">]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CEntityMessageRemoveAllDecals>]: never; }>(base?: I): CEntityMessageRemoveAllDecals;
    fromPartial<I_1 extends {
        remove_decals?: boolean;
        entity_msg?: {
            target_entity?: number;
        };
    } & {
        remove_decals?: boolean;
        entity_msg?: {
            target_entity?: number;
        } & {
            target_entity?: number;
        } & { [K_2 in Exclude<keyof I_1["entity_msg"], "target_entity">]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CEntityMessageRemoveAllDecals>]: never; }>(object: I_1): CEntityMessageRemoveAllDecals;
};
export declare const CEntityMessagePropagateForce: {
    fromJSON(object: any): CEntityMessagePropagateForce;
    toJSON(message: CEntityMessagePropagateForce): unknown;
    create<I extends {
        impulse?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        entity_msg?: {
            target_entity?: number;
        };
    } & {
        impulse?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["impulse"], keyof CMsgVector>]: never; };
        entity_msg?: {
            target_entity?: number;
        } & {
            target_entity?: number;
        } & { [K_1 in Exclude<keyof I["entity_msg"], "target_entity">]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CEntityMessagePropagateForce>]: never; }>(base?: I): CEntityMessagePropagateForce;
    fromPartial<I_1 extends {
        impulse?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        entity_msg?: {
            target_entity?: number;
        };
    } & {
        impulse?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_3 in Exclude<keyof I_1["impulse"], keyof CMsgVector>]: never; };
        entity_msg?: {
            target_entity?: number;
        } & {
            target_entity?: number;
        } & { [K_4 in Exclude<keyof I_1["entity_msg"], "target_entity">]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CEntityMessagePropagateForce>]: never; }>(object: I_1): CEntityMessagePropagateForce;
};
export declare const CEntityMessageDoSpark: {
    fromJSON(object: any): CEntityMessageDoSpark;
    toJSON(message: CEntityMessageDoSpark): unknown;
    create<I extends {
        origin?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        entityindex?: number;
        radius?: number;
        color?: number;
        beams?: number;
        thick?: number;
        duration?: number;
        entity_msg?: {
            target_entity?: number;
        };
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
        entityindex?: number;
        radius?: number;
        color?: number;
        beams?: number;
        thick?: number;
        duration?: number;
        entity_msg?: {
            target_entity?: number;
        } & {
            target_entity?: number;
        } & { [K_1 in Exclude<keyof I["entity_msg"], "target_entity">]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CEntityMessageDoSpark>]: never; }>(base?: I): CEntityMessageDoSpark;
    fromPartial<I_1 extends {
        origin?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        entityindex?: number;
        radius?: number;
        color?: number;
        beams?: number;
        thick?: number;
        duration?: number;
        entity_msg?: {
            target_entity?: number;
        };
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
        } & { [K_3 in Exclude<keyof I_1["origin"], keyof CMsgVector>]: never; };
        entityindex?: number;
        radius?: number;
        color?: number;
        beams?: number;
        thick?: number;
        duration?: number;
        entity_msg?: {
            target_entity?: number;
        } & {
            target_entity?: number;
        } & { [K_4 in Exclude<keyof I_1["entity_msg"], "target_entity">]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CEntityMessageDoSpark>]: never; }>(object: I_1): CEntityMessageDoSpark;
};
export declare const CEntityMessageFixAngle: {
    fromJSON(object: any): CEntityMessageFixAngle;
    toJSON(message: CEntityMessageFixAngle): unknown;
    create<I extends {
        relative?: boolean;
        angle?: {
            x?: number;
            y?: number;
            z?: number;
        };
        entity_msg?: {
            target_entity?: number;
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
        entity_msg?: {
            target_entity?: number;
        } & {
            target_entity?: number;
        } & { [K_1 in Exclude<keyof I["entity_msg"], "target_entity">]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CEntityMessageFixAngle>]: never; }>(base?: I): CEntityMessageFixAngle;
    fromPartial<I_1 extends {
        relative?: boolean;
        angle?: {
            x?: number;
            y?: number;
            z?: number;
        };
        entity_msg?: {
            target_entity?: number;
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
        } & { [K_3 in Exclude<keyof I_1["angle"], keyof CMsgQAngle>]: never; };
        entity_msg?: {
            target_entity?: number;
        } & {
            target_entity?: number;
        } & { [K_4 in Exclude<keyof I_1["entity_msg"], "target_entity">]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CEntityMessageFixAngle>]: never; }>(object: I_1): CEntityMessageFixAngle;
};
export declare const CUserMessageCameraTransition: {
    fromJSON(object: any): CUserMessageCameraTransition;
    toJSON(message: CUserMessageCameraTransition): unknown;
    create<I extends {
        camera_type?: number;
        duration?: number;
        params_data_driven?: {
            filename?: string;
            attach_ent_index?: number;
            duration?: number;
        };
    } & {
        camera_type?: number;
        duration?: number;
        params_data_driven?: {
            filename?: string;
            attach_ent_index?: number;
            duration?: number;
        } & {
            filename?: string;
            attach_ent_index?: number;
            duration?: number;
        } & { [K in Exclude<keyof I["params_data_driven"], keyof CUserMessageCameraTransition_Transition_DataDriven>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CUserMessageCameraTransition>]: never; }>(base?: I): CUserMessageCameraTransition;
    fromPartial<I_1 extends {
        camera_type?: number;
        duration?: number;
        params_data_driven?: {
            filename?: string;
            attach_ent_index?: number;
            duration?: number;
        };
    } & {
        camera_type?: number;
        duration?: number;
        params_data_driven?: {
            filename?: string;
            attach_ent_index?: number;
            duration?: number;
        } & {
            filename?: string;
            attach_ent_index?: number;
            duration?: number;
        } & { [K_2 in Exclude<keyof I_1["params_data_driven"], keyof CUserMessageCameraTransition_Transition_DataDriven>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CUserMessageCameraTransition>]: never; }>(object: I_1): CUserMessageCameraTransition;
};
export declare const CUserMessageCameraTransition_Transition_DataDriven: {
    fromJSON(object: any): CUserMessageCameraTransition_Transition_DataDriven;
    toJSON(message: CUserMessageCameraTransition_Transition_DataDriven): unknown;
    create<I extends {
        filename?: string;
        attach_ent_index?: number;
        duration?: number;
    } & {
        filename?: string;
        attach_ent_index?: number;
        duration?: number;
    } & { [K in Exclude<keyof I, keyof CUserMessageCameraTransition_Transition_DataDriven>]: never; }>(base?: I): CUserMessageCameraTransition_Transition_DataDriven;
    fromPartial<I_1 extends {
        filename?: string;
        attach_ent_index?: number;
        duration?: number;
    } & {
        filename?: string;
        attach_ent_index?: number;
        duration?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageCameraTransition_Transition_DataDriven>]: never; }>(object: I_1): CUserMessageCameraTransition_Transition_DataDriven;
};
export declare const CUserMsg_ParticleManager: {
    fromJSON(object: any): CUserMsg_ParticleManager;
    toJSON(message: CUserMsg_ParticleManager): unknown;
    create<I extends {
        type?: PARTICLE_MESSAGE;
        index?: number;
        release_particle_index?: {};
        create_particle?: {
            particle_name_index?: string;
            attach_type?: number;
            entity_handle?: number;
            entity_handle_for_modifiers?: number;
            apply_voice_ban_rules?: boolean;
            team_behavior?: number;
            control_point_configuration?: string;
        };
        destroy_particle?: {
            destroy_immediately?: boolean;
        };
        destroy_particle_involving?: {
            destroy_immediately?: boolean;
            entity_handle?: number;
        };
        update_particle?: {
            control_point?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        };
        update_particle_fwd?: {
            control_point?: number;
            forward?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        };
        update_particle_orient?: {
            control_point?: number;
            forward?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            deprecated_right?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            up?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            left?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        };
        update_particle_fallback?: {
            control_point?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        };
        update_particle_offset?: {
            control_point?: number;
            origin_offset?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            angle_offset?: {
                x?: number;
                y?: number;
                z?: number;
            };
        };
        update_particle_ent?: {
            control_point?: number;
            entity_handle?: number;
            attach_type?: number;
            attachment?: number;
            fallback_position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            include_wearables?: boolean;
            offset_position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            offset_angles?: {
                x?: number;
                y?: number;
                z?: number;
            };
        };
        update_particle_should_draw?: {
            should_draw?: boolean;
        };
        update_particle_set_frozen?: {
            set_frozen?: boolean;
            transition_duration?: number;
        };
        change_control_point_attachment?: {
            attachment_old?: number;
            attachment_new?: number;
            entity_handle?: number;
        };
        update_entity_position?: {
            entity_handle?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        };
        set_particle_fow_properties?: {
            fow_control_point?: number;
            fow_control_point2?: number;
            fow_radius?: number;
        };
        set_particle_text?: {
            text?: string;
        };
        set_particle_should_check_fow?: {
            check_fow?: boolean;
        };
        set_control_point_model?: {
            control_point?: number;
            model_name?: string;
        };
        set_control_point_snapshot?: {
            control_point?: number;
            snapshot_name?: string;
        };
        set_texture_attribute?: {
            attribute_name?: string;
            texture_name?: string;
        };
        set_scene_object_generic_flag?: {
            flag_value?: boolean;
        };
        set_scene_object_tint_and_desat?: {
            tint?: number;
            desat?: number;
        };
        destroy_particle_named?: {
            particle_name_index?: string;
            entity_handle?: number;
            destroy_immediately?: boolean;
            play_endcap?: boolean;
        };
        particle_skip_to_time?: {
            skip_to_time?: number;
        };
        particle_can_freeze?: {
            can_freeze?: boolean;
        };
        set_named_value_context?: {
            float_values?: {
                value_name?: string;
                value?: number;
            }[];
            vector_values?: {
                value_name?: string;
                value?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                ent_index?: number;
                attachment_name?: string;
            }[];
            transform_values?: {
                value_name?: string;
                angles?: {
                    x?: number;
                    y?: number;
                    z?: number;
                };
                translation?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                ent_index?: number;
                attachment_name?: string;
            }[];
        };
        update_particle_transform?: {
            control_point?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            orientation?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            interpolation_interval?: number;
        };
        particle_freeze_transition_override?: {
            freeze_transition_override?: number;
        };
    } & {
        type?: PARTICLE_MESSAGE;
        index?: number;
        release_particle_index?: {} & {} & { [K in Exclude<keyof I["release_particle_index"], never>]: never; };
        create_particle?: {
            particle_name_index?: string;
            attach_type?: number;
            entity_handle?: number;
            entity_handle_for_modifiers?: number;
            apply_voice_ban_rules?: boolean;
            team_behavior?: number;
            control_point_configuration?: string;
        } & {
            particle_name_index?: string;
            attach_type?: number;
            entity_handle?: number;
            entity_handle_for_modifiers?: number;
            apply_voice_ban_rules?: boolean;
            team_behavior?: number;
            control_point_configuration?: string;
        } & { [K_1 in Exclude<keyof I["create_particle"], keyof CUserMsg_ParticleManager_CreateParticle>]: never; };
        destroy_particle?: {
            destroy_immediately?: boolean;
        } & {
            destroy_immediately?: boolean;
        } & { [K_2 in Exclude<keyof I["destroy_particle"], "destroy_immediately">]: never; };
        destroy_particle_involving?: {
            destroy_immediately?: boolean;
            entity_handle?: number;
        } & {
            destroy_immediately?: boolean;
            entity_handle?: number;
        } & { [K_3 in Exclude<keyof I["destroy_particle_involving"], keyof CUserMsg_ParticleManager_DestroyParticleInvolving>]: never; };
        update_particle?: {
            control_point?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        } & {
            control_point?: number;
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
            } & { [K_4 in Exclude<keyof I["update_particle"]["position"], keyof CMsgVector>]: never; };
        } & { [K_5 in Exclude<keyof I["update_particle"], keyof CUserMsg_ParticleManager_UpdateParticle_OBSOLETE>]: never; };
        update_particle_fwd?: {
            control_point?: number;
            forward?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        } & {
            control_point?: number;
            forward?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_6 in Exclude<keyof I["update_particle_fwd"]["forward"], keyof CMsgVector>]: never; };
        } & { [K_7 in Exclude<keyof I["update_particle_fwd"], keyof CUserMsg_ParticleManager_UpdateParticleFwd_OBSOLETE>]: never; };
        update_particle_orient?: {
            control_point?: number;
            forward?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            deprecated_right?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            up?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            left?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        } & {
            control_point?: number;
            forward?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_8 in Exclude<keyof I["update_particle_orient"]["forward"], keyof CMsgVector>]: never; };
            deprecated_right?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_9 in Exclude<keyof I["update_particle_orient"]["deprecated_right"], keyof CMsgVector>]: never; };
            up?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_10 in Exclude<keyof I["update_particle_orient"]["up"], keyof CMsgVector>]: never; };
            left?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_11 in Exclude<keyof I["update_particle_orient"]["left"], keyof CMsgVector>]: never; };
        } & { [K_12 in Exclude<keyof I["update_particle_orient"], keyof CUserMsg_ParticleManager_UpdateParticleOrient_OBSOLETE>]: never; };
        update_particle_fallback?: {
            control_point?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        } & {
            control_point?: number;
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
            } & { [K_13 in Exclude<keyof I["update_particle_fallback"]["position"], keyof CMsgVector>]: never; };
        } & { [K_14 in Exclude<keyof I["update_particle_fallback"], keyof CUserMsg_ParticleManager_UpdateParticleFallback>]: never; };
        update_particle_offset?: {
            control_point?: number;
            origin_offset?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            angle_offset?: {
                x?: number;
                y?: number;
                z?: number;
            };
        } & {
            control_point?: number;
            origin_offset?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_15 in Exclude<keyof I["update_particle_offset"]["origin_offset"], keyof CMsgVector>]: never; };
            angle_offset?: {
                x?: number;
                y?: number;
                z?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
            } & { [K_16 in Exclude<keyof I["update_particle_offset"]["angle_offset"], keyof CMsgQAngle>]: never; };
        } & { [K_17 in Exclude<keyof I["update_particle_offset"], keyof CUserMsg_ParticleManager_UpdateParticleOffset>]: never; };
        update_particle_ent?: {
            control_point?: number;
            entity_handle?: number;
            attach_type?: number;
            attachment?: number;
            fallback_position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            include_wearables?: boolean;
            offset_position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            offset_angles?: {
                x?: number;
                y?: number;
                z?: number;
            };
        } & {
            control_point?: number;
            entity_handle?: number;
            attach_type?: number;
            attachment?: number;
            fallback_position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_18 in Exclude<keyof I["update_particle_ent"]["fallback_position"], keyof CMsgVector>]: never; };
            include_wearables?: boolean;
            offset_position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_19 in Exclude<keyof I["update_particle_ent"]["offset_position"], keyof CMsgVector>]: never; };
            offset_angles?: {
                x?: number;
                y?: number;
                z?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
            } & { [K_20 in Exclude<keyof I["update_particle_ent"]["offset_angles"], keyof CMsgQAngle>]: never; };
        } & { [K_21 in Exclude<keyof I["update_particle_ent"], keyof CUserMsg_ParticleManager_UpdateParticleEnt>]: never; };
        update_particle_should_draw?: {
            should_draw?: boolean;
        } & {
            should_draw?: boolean;
        } & { [K_22 in Exclude<keyof I["update_particle_should_draw"], "should_draw">]: never; };
        update_particle_set_frozen?: {
            set_frozen?: boolean;
            transition_duration?: number;
        } & {
            set_frozen?: boolean;
            transition_duration?: number;
        } & { [K_23 in Exclude<keyof I["update_particle_set_frozen"], keyof CUserMsg_ParticleManager_UpdateParticleSetFrozen>]: never; };
        change_control_point_attachment?: {
            attachment_old?: number;
            attachment_new?: number;
            entity_handle?: number;
        } & {
            attachment_old?: number;
            attachment_new?: number;
            entity_handle?: number;
        } & { [K_24 in Exclude<keyof I["change_control_point_attachment"], keyof CUserMsg_ParticleManager_ChangeControlPointAttachment>]: never; };
        update_entity_position?: {
            entity_handle?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        } & {
            entity_handle?: number;
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
            } & { [K_25 in Exclude<keyof I["update_entity_position"]["position"], keyof CMsgVector>]: never; };
        } & { [K_26 in Exclude<keyof I["update_entity_position"], keyof CUserMsg_ParticleManager_UpdateEntityPosition>]: never; };
        set_particle_fow_properties?: {
            fow_control_point?: number;
            fow_control_point2?: number;
            fow_radius?: number;
        } & {
            fow_control_point?: number;
            fow_control_point2?: number;
            fow_radius?: number;
        } & { [K_27 in Exclude<keyof I["set_particle_fow_properties"], keyof CUserMsg_ParticleManager_SetParticleFoWProperties>]: never; };
        set_particle_text?: {
            text?: string;
        } & {
            text?: string;
        } & { [K_28 in Exclude<keyof I["set_particle_text"], "text">]: never; };
        set_particle_should_check_fow?: {
            check_fow?: boolean;
        } & {
            check_fow?: boolean;
        } & { [K_29 in Exclude<keyof I["set_particle_should_check_fow"], "check_fow">]: never; };
        set_control_point_model?: {
            control_point?: number;
            model_name?: string;
        } & {
            control_point?: number;
            model_name?: string;
        } & { [K_30 in Exclude<keyof I["set_control_point_model"], keyof CUserMsg_ParticleManager_SetControlPointModel>]: never; };
        set_control_point_snapshot?: {
            control_point?: number;
            snapshot_name?: string;
        } & {
            control_point?: number;
            snapshot_name?: string;
        } & { [K_31 in Exclude<keyof I["set_control_point_snapshot"], keyof CUserMsg_ParticleManager_SetControlPointSnapshot>]: never; };
        set_texture_attribute?: {
            attribute_name?: string;
            texture_name?: string;
        } & {
            attribute_name?: string;
            texture_name?: string;
        } & { [K_32 in Exclude<keyof I["set_texture_attribute"], keyof CUserMsg_ParticleManager_SetTextureAttribute>]: never; };
        set_scene_object_generic_flag?: {
            flag_value?: boolean;
        } & {
            flag_value?: boolean;
        } & { [K_33 in Exclude<keyof I["set_scene_object_generic_flag"], "flag_value">]: never; };
        set_scene_object_tint_and_desat?: {
            tint?: number;
            desat?: number;
        } & {
            tint?: number;
            desat?: number;
        } & { [K_34 in Exclude<keyof I["set_scene_object_tint_and_desat"], keyof CUserMsg_ParticleManager_SetSceneObjectTintAndDesat>]: never; };
        destroy_particle_named?: {
            particle_name_index?: string;
            entity_handle?: number;
            destroy_immediately?: boolean;
            play_endcap?: boolean;
        } & {
            particle_name_index?: string;
            entity_handle?: number;
            destroy_immediately?: boolean;
            play_endcap?: boolean;
        } & { [K_35 in Exclude<keyof I["destroy_particle_named"], keyof CUserMsg_ParticleManager_DestroyParticleNamed>]: never; };
        particle_skip_to_time?: {
            skip_to_time?: number;
        } & {
            skip_to_time?: number;
        } & { [K_36 in Exclude<keyof I["particle_skip_to_time"], "skip_to_time">]: never; };
        particle_can_freeze?: {
            can_freeze?: boolean;
        } & {
            can_freeze?: boolean;
        } & { [K_37 in Exclude<keyof I["particle_can_freeze"], "can_freeze">]: never; };
        set_named_value_context?: {
            float_values?: {
                value_name?: string;
                value?: number;
            }[];
            vector_values?: {
                value_name?: string;
                value?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                ent_index?: number;
                attachment_name?: string;
            }[];
            transform_values?: {
                value_name?: string;
                angles?: {
                    x?: number;
                    y?: number;
                    z?: number;
                };
                translation?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                ent_index?: number;
                attachment_name?: string;
            }[];
        } & {
            float_values?: {
                value_name?: string;
                value?: number;
            }[] & ({
                value_name?: string;
                value?: number;
            } & {
                value_name?: string;
                value?: number;
            } & { [K_38 in Exclude<keyof I["set_named_value_context"]["float_values"][number], keyof CUserMsg_ParticleManager_SetParticleNamedValueContext_FloatContextValue>]: never; })[] & { [K_39 in Exclude<keyof I["set_named_value_context"]["float_values"], keyof {
                value_name?: string;
                value?: number;
            }[]>]: never; };
            vector_values?: {
                value_name?: string;
                value?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                ent_index?: number;
                attachment_name?: string;
            }[] & ({
                value_name?: string;
                value?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                ent_index?: number;
                attachment_name?: string;
            } & {
                value_name?: string;
                value?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                } & {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                } & { [K_40 in Exclude<keyof I["set_named_value_context"]["vector_values"][number]["value"], keyof CMsgVector>]: never; };
                ent_index?: number;
                attachment_name?: string;
            } & { [K_41 in Exclude<keyof I["set_named_value_context"]["vector_values"][number], keyof CUserMsg_ParticleManager_SetParticleNamedValueContext_VectorContextValue>]: never; })[] & { [K_42 in Exclude<keyof I["set_named_value_context"]["vector_values"], keyof {
                value_name?: string;
                value?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                ent_index?: number;
                attachment_name?: string;
            }[]>]: never; };
            transform_values?: {
                value_name?: string;
                angles?: {
                    x?: number;
                    y?: number;
                    z?: number;
                };
                translation?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                ent_index?: number;
                attachment_name?: string;
            }[] & ({
                value_name?: string;
                angles?: {
                    x?: number;
                    y?: number;
                    z?: number;
                };
                translation?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                ent_index?: number;
                attachment_name?: string;
            } & {
                value_name?: string;
                angles?: {
                    x?: number;
                    y?: number;
                    z?: number;
                } & {
                    x?: number;
                    y?: number;
                    z?: number;
                } & { [K_43 in Exclude<keyof I["set_named_value_context"]["transform_values"][number]["angles"], keyof CMsgQAngle>]: never; };
                translation?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                } & {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                } & { [K_44 in Exclude<keyof I["set_named_value_context"]["transform_values"][number]["translation"], keyof CMsgVector>]: never; };
                ent_index?: number;
                attachment_name?: string;
            } & { [K_45 in Exclude<keyof I["set_named_value_context"]["transform_values"][number], keyof CUserMsg_ParticleManager_SetParticleNamedValueContext_TransformContextValue>]: never; })[] & { [K_46 in Exclude<keyof I["set_named_value_context"]["transform_values"], keyof {
                value_name?: string;
                angles?: {
                    x?: number;
                    y?: number;
                    z?: number;
                };
                translation?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                ent_index?: number;
                attachment_name?: string;
            }[]>]: never; };
        } & { [K_47 in Exclude<keyof I["set_named_value_context"], keyof CUserMsg_ParticleManager_SetParticleNamedValueContext>]: never; };
        update_particle_transform?: {
            control_point?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            orientation?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            interpolation_interval?: number;
        } & {
            control_point?: number;
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
            } & { [K_48 in Exclude<keyof I["update_particle_transform"]["position"], keyof CMsgVector>]: never; };
            orientation?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_49 in Exclude<keyof I["update_particle_transform"]["orientation"], keyof CMsgQuaternion>]: never; };
            interpolation_interval?: number;
        } & { [K_50 in Exclude<keyof I["update_particle_transform"], keyof CUserMsg_ParticleManager_UpdateParticleTransform>]: never; };
        particle_freeze_transition_override?: {
            freeze_transition_override?: number;
        } & {
            freeze_transition_override?: number;
        } & { [K_51 in Exclude<keyof I["particle_freeze_transition_override"], "freeze_transition_override">]: never; };
    } & { [K_52 in Exclude<keyof I, keyof CUserMsg_ParticleManager>]: never; }>(base?: I): CUserMsg_ParticleManager;
    fromPartial<I_1 extends {
        type?: PARTICLE_MESSAGE;
        index?: number;
        release_particle_index?: {};
        create_particle?: {
            particle_name_index?: string;
            attach_type?: number;
            entity_handle?: number;
            entity_handle_for_modifiers?: number;
            apply_voice_ban_rules?: boolean;
            team_behavior?: number;
            control_point_configuration?: string;
        };
        destroy_particle?: {
            destroy_immediately?: boolean;
        };
        destroy_particle_involving?: {
            destroy_immediately?: boolean;
            entity_handle?: number;
        };
        update_particle?: {
            control_point?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        };
        update_particle_fwd?: {
            control_point?: number;
            forward?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        };
        update_particle_orient?: {
            control_point?: number;
            forward?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            deprecated_right?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            up?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            left?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        };
        update_particle_fallback?: {
            control_point?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        };
        update_particle_offset?: {
            control_point?: number;
            origin_offset?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            angle_offset?: {
                x?: number;
                y?: number;
                z?: number;
            };
        };
        update_particle_ent?: {
            control_point?: number;
            entity_handle?: number;
            attach_type?: number;
            attachment?: number;
            fallback_position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            include_wearables?: boolean;
            offset_position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            offset_angles?: {
                x?: number;
                y?: number;
                z?: number;
            };
        };
        update_particle_should_draw?: {
            should_draw?: boolean;
        };
        update_particle_set_frozen?: {
            set_frozen?: boolean;
            transition_duration?: number;
        };
        change_control_point_attachment?: {
            attachment_old?: number;
            attachment_new?: number;
            entity_handle?: number;
        };
        update_entity_position?: {
            entity_handle?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        };
        set_particle_fow_properties?: {
            fow_control_point?: number;
            fow_control_point2?: number;
            fow_radius?: number;
        };
        set_particle_text?: {
            text?: string;
        };
        set_particle_should_check_fow?: {
            check_fow?: boolean;
        };
        set_control_point_model?: {
            control_point?: number;
            model_name?: string;
        };
        set_control_point_snapshot?: {
            control_point?: number;
            snapshot_name?: string;
        };
        set_texture_attribute?: {
            attribute_name?: string;
            texture_name?: string;
        };
        set_scene_object_generic_flag?: {
            flag_value?: boolean;
        };
        set_scene_object_tint_and_desat?: {
            tint?: number;
            desat?: number;
        };
        destroy_particle_named?: {
            particle_name_index?: string;
            entity_handle?: number;
            destroy_immediately?: boolean;
            play_endcap?: boolean;
        };
        particle_skip_to_time?: {
            skip_to_time?: number;
        };
        particle_can_freeze?: {
            can_freeze?: boolean;
        };
        set_named_value_context?: {
            float_values?: {
                value_name?: string;
                value?: number;
            }[];
            vector_values?: {
                value_name?: string;
                value?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                ent_index?: number;
                attachment_name?: string;
            }[];
            transform_values?: {
                value_name?: string;
                angles?: {
                    x?: number;
                    y?: number;
                    z?: number;
                };
                translation?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                ent_index?: number;
                attachment_name?: string;
            }[];
        };
        update_particle_transform?: {
            control_point?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            orientation?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            interpolation_interval?: number;
        };
        particle_freeze_transition_override?: {
            freeze_transition_override?: number;
        };
    } & {
        type?: PARTICLE_MESSAGE;
        index?: number;
        release_particle_index?: {} & {} & { [K_53 in Exclude<keyof I_1["release_particle_index"], never>]: never; };
        create_particle?: {
            particle_name_index?: string;
            attach_type?: number;
            entity_handle?: number;
            entity_handle_for_modifiers?: number;
            apply_voice_ban_rules?: boolean;
            team_behavior?: number;
            control_point_configuration?: string;
        } & {
            particle_name_index?: string;
            attach_type?: number;
            entity_handle?: number;
            entity_handle_for_modifiers?: number;
            apply_voice_ban_rules?: boolean;
            team_behavior?: number;
            control_point_configuration?: string;
        } & { [K_54 in Exclude<keyof I_1["create_particle"], keyof CUserMsg_ParticleManager_CreateParticle>]: never; };
        destroy_particle?: {
            destroy_immediately?: boolean;
        } & {
            destroy_immediately?: boolean;
        } & { [K_55 in Exclude<keyof I_1["destroy_particle"], "destroy_immediately">]: never; };
        destroy_particle_involving?: {
            destroy_immediately?: boolean;
            entity_handle?: number;
        } & {
            destroy_immediately?: boolean;
            entity_handle?: number;
        } & { [K_56 in Exclude<keyof I_1["destroy_particle_involving"], keyof CUserMsg_ParticleManager_DestroyParticleInvolving>]: never; };
        update_particle?: {
            control_point?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        } & {
            control_point?: number;
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
            } & { [K_57 in Exclude<keyof I_1["update_particle"]["position"], keyof CMsgVector>]: never; };
        } & { [K_58 in Exclude<keyof I_1["update_particle"], keyof CUserMsg_ParticleManager_UpdateParticle_OBSOLETE>]: never; };
        update_particle_fwd?: {
            control_point?: number;
            forward?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        } & {
            control_point?: number;
            forward?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_59 in Exclude<keyof I_1["update_particle_fwd"]["forward"], keyof CMsgVector>]: never; };
        } & { [K_60 in Exclude<keyof I_1["update_particle_fwd"], keyof CUserMsg_ParticleManager_UpdateParticleFwd_OBSOLETE>]: never; };
        update_particle_orient?: {
            control_point?: number;
            forward?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            deprecated_right?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            up?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            left?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        } & {
            control_point?: number;
            forward?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_61 in Exclude<keyof I_1["update_particle_orient"]["forward"], keyof CMsgVector>]: never; };
            deprecated_right?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_62 in Exclude<keyof I_1["update_particle_orient"]["deprecated_right"], keyof CMsgVector>]: never; };
            up?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_63 in Exclude<keyof I_1["update_particle_orient"]["up"], keyof CMsgVector>]: never; };
            left?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_64 in Exclude<keyof I_1["update_particle_orient"]["left"], keyof CMsgVector>]: never; };
        } & { [K_65 in Exclude<keyof I_1["update_particle_orient"], keyof CUserMsg_ParticleManager_UpdateParticleOrient_OBSOLETE>]: never; };
        update_particle_fallback?: {
            control_point?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        } & {
            control_point?: number;
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
            } & { [K_66 in Exclude<keyof I_1["update_particle_fallback"]["position"], keyof CMsgVector>]: never; };
        } & { [K_67 in Exclude<keyof I_1["update_particle_fallback"], keyof CUserMsg_ParticleManager_UpdateParticleFallback>]: never; };
        update_particle_offset?: {
            control_point?: number;
            origin_offset?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            angle_offset?: {
                x?: number;
                y?: number;
                z?: number;
            };
        } & {
            control_point?: number;
            origin_offset?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_68 in Exclude<keyof I_1["update_particle_offset"]["origin_offset"], keyof CMsgVector>]: never; };
            angle_offset?: {
                x?: number;
                y?: number;
                z?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
            } & { [K_69 in Exclude<keyof I_1["update_particle_offset"]["angle_offset"], keyof CMsgQAngle>]: never; };
        } & { [K_70 in Exclude<keyof I_1["update_particle_offset"], keyof CUserMsg_ParticleManager_UpdateParticleOffset>]: never; };
        update_particle_ent?: {
            control_point?: number;
            entity_handle?: number;
            attach_type?: number;
            attachment?: number;
            fallback_position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            include_wearables?: boolean;
            offset_position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            offset_angles?: {
                x?: number;
                y?: number;
                z?: number;
            };
        } & {
            control_point?: number;
            entity_handle?: number;
            attach_type?: number;
            attachment?: number;
            fallback_position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_71 in Exclude<keyof I_1["update_particle_ent"]["fallback_position"], keyof CMsgVector>]: never; };
            include_wearables?: boolean;
            offset_position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_72 in Exclude<keyof I_1["update_particle_ent"]["offset_position"], keyof CMsgVector>]: never; };
            offset_angles?: {
                x?: number;
                y?: number;
                z?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
            } & { [K_73 in Exclude<keyof I_1["update_particle_ent"]["offset_angles"], keyof CMsgQAngle>]: never; };
        } & { [K_74 in Exclude<keyof I_1["update_particle_ent"], keyof CUserMsg_ParticleManager_UpdateParticleEnt>]: never; };
        update_particle_should_draw?: {
            should_draw?: boolean;
        } & {
            should_draw?: boolean;
        } & { [K_75 in Exclude<keyof I_1["update_particle_should_draw"], "should_draw">]: never; };
        update_particle_set_frozen?: {
            set_frozen?: boolean;
            transition_duration?: number;
        } & {
            set_frozen?: boolean;
            transition_duration?: number;
        } & { [K_76 in Exclude<keyof I_1["update_particle_set_frozen"], keyof CUserMsg_ParticleManager_UpdateParticleSetFrozen>]: never; };
        change_control_point_attachment?: {
            attachment_old?: number;
            attachment_new?: number;
            entity_handle?: number;
        } & {
            attachment_old?: number;
            attachment_new?: number;
            entity_handle?: number;
        } & { [K_77 in Exclude<keyof I_1["change_control_point_attachment"], keyof CUserMsg_ParticleManager_ChangeControlPointAttachment>]: never; };
        update_entity_position?: {
            entity_handle?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
        } & {
            entity_handle?: number;
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
            } & { [K_78 in Exclude<keyof I_1["update_entity_position"]["position"], keyof CMsgVector>]: never; };
        } & { [K_79 in Exclude<keyof I_1["update_entity_position"], keyof CUserMsg_ParticleManager_UpdateEntityPosition>]: never; };
        set_particle_fow_properties?: {
            fow_control_point?: number;
            fow_control_point2?: number;
            fow_radius?: number;
        } & {
            fow_control_point?: number;
            fow_control_point2?: number;
            fow_radius?: number;
        } & { [K_80 in Exclude<keyof I_1["set_particle_fow_properties"], keyof CUserMsg_ParticleManager_SetParticleFoWProperties>]: never; };
        set_particle_text?: {
            text?: string;
        } & {
            text?: string;
        } & { [K_81 in Exclude<keyof I_1["set_particle_text"], "text">]: never; };
        set_particle_should_check_fow?: {
            check_fow?: boolean;
        } & {
            check_fow?: boolean;
        } & { [K_82 in Exclude<keyof I_1["set_particle_should_check_fow"], "check_fow">]: never; };
        set_control_point_model?: {
            control_point?: number;
            model_name?: string;
        } & {
            control_point?: number;
            model_name?: string;
        } & { [K_83 in Exclude<keyof I_1["set_control_point_model"], keyof CUserMsg_ParticleManager_SetControlPointModel>]: never; };
        set_control_point_snapshot?: {
            control_point?: number;
            snapshot_name?: string;
        } & {
            control_point?: number;
            snapshot_name?: string;
        } & { [K_84 in Exclude<keyof I_1["set_control_point_snapshot"], keyof CUserMsg_ParticleManager_SetControlPointSnapshot>]: never; };
        set_texture_attribute?: {
            attribute_name?: string;
            texture_name?: string;
        } & {
            attribute_name?: string;
            texture_name?: string;
        } & { [K_85 in Exclude<keyof I_1["set_texture_attribute"], keyof CUserMsg_ParticleManager_SetTextureAttribute>]: never; };
        set_scene_object_generic_flag?: {
            flag_value?: boolean;
        } & {
            flag_value?: boolean;
        } & { [K_86 in Exclude<keyof I_1["set_scene_object_generic_flag"], "flag_value">]: never; };
        set_scene_object_tint_and_desat?: {
            tint?: number;
            desat?: number;
        } & {
            tint?: number;
            desat?: number;
        } & { [K_87 in Exclude<keyof I_1["set_scene_object_tint_and_desat"], keyof CUserMsg_ParticleManager_SetSceneObjectTintAndDesat>]: never; };
        destroy_particle_named?: {
            particle_name_index?: string;
            entity_handle?: number;
            destroy_immediately?: boolean;
            play_endcap?: boolean;
        } & {
            particle_name_index?: string;
            entity_handle?: number;
            destroy_immediately?: boolean;
            play_endcap?: boolean;
        } & { [K_88 in Exclude<keyof I_1["destroy_particle_named"], keyof CUserMsg_ParticleManager_DestroyParticleNamed>]: never; };
        particle_skip_to_time?: {
            skip_to_time?: number;
        } & {
            skip_to_time?: number;
        } & { [K_89 in Exclude<keyof I_1["particle_skip_to_time"], "skip_to_time">]: never; };
        particle_can_freeze?: {
            can_freeze?: boolean;
        } & {
            can_freeze?: boolean;
        } & { [K_90 in Exclude<keyof I_1["particle_can_freeze"], "can_freeze">]: never; };
        set_named_value_context?: {
            float_values?: {
                value_name?: string;
                value?: number;
            }[];
            vector_values?: {
                value_name?: string;
                value?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                ent_index?: number;
                attachment_name?: string;
            }[];
            transform_values?: {
                value_name?: string;
                angles?: {
                    x?: number;
                    y?: number;
                    z?: number;
                };
                translation?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                ent_index?: number;
                attachment_name?: string;
            }[];
        } & {
            float_values?: {
                value_name?: string;
                value?: number;
            }[] & ({
                value_name?: string;
                value?: number;
            } & {
                value_name?: string;
                value?: number;
            } & { [K_91 in Exclude<keyof I_1["set_named_value_context"]["float_values"][number], keyof CUserMsg_ParticleManager_SetParticleNamedValueContext_FloatContextValue>]: never; })[] & { [K_92 in Exclude<keyof I_1["set_named_value_context"]["float_values"], keyof {
                value_name?: string;
                value?: number;
            }[]>]: never; };
            vector_values?: {
                value_name?: string;
                value?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                ent_index?: number;
                attachment_name?: string;
            }[] & ({
                value_name?: string;
                value?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                ent_index?: number;
                attachment_name?: string;
            } & {
                value_name?: string;
                value?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                } & {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                } & { [K_93 in Exclude<keyof I_1["set_named_value_context"]["vector_values"][number]["value"], keyof CMsgVector>]: never; };
                ent_index?: number;
                attachment_name?: string;
            } & { [K_94 in Exclude<keyof I_1["set_named_value_context"]["vector_values"][number], keyof CUserMsg_ParticleManager_SetParticleNamedValueContext_VectorContextValue>]: never; })[] & { [K_95 in Exclude<keyof I_1["set_named_value_context"]["vector_values"], keyof {
                value_name?: string;
                value?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                ent_index?: number;
                attachment_name?: string;
            }[]>]: never; };
            transform_values?: {
                value_name?: string;
                angles?: {
                    x?: number;
                    y?: number;
                    z?: number;
                };
                translation?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                ent_index?: number;
                attachment_name?: string;
            }[] & ({
                value_name?: string;
                angles?: {
                    x?: number;
                    y?: number;
                    z?: number;
                };
                translation?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                ent_index?: number;
                attachment_name?: string;
            } & {
                value_name?: string;
                angles?: {
                    x?: number;
                    y?: number;
                    z?: number;
                } & {
                    x?: number;
                    y?: number;
                    z?: number;
                } & { [K_96 in Exclude<keyof I_1["set_named_value_context"]["transform_values"][number]["angles"], keyof CMsgQAngle>]: never; };
                translation?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                } & {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                } & { [K_97 in Exclude<keyof I_1["set_named_value_context"]["transform_values"][number]["translation"], keyof CMsgVector>]: never; };
                ent_index?: number;
                attachment_name?: string;
            } & { [K_98 in Exclude<keyof I_1["set_named_value_context"]["transform_values"][number], keyof CUserMsg_ParticleManager_SetParticleNamedValueContext_TransformContextValue>]: never; })[] & { [K_99 in Exclude<keyof I_1["set_named_value_context"]["transform_values"], keyof {
                value_name?: string;
                angles?: {
                    x?: number;
                    y?: number;
                    z?: number;
                };
                translation?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                ent_index?: number;
                attachment_name?: string;
            }[]>]: never; };
        } & { [K_100 in Exclude<keyof I_1["set_named_value_context"], keyof CUserMsg_ParticleManager_SetParticleNamedValueContext>]: never; };
        update_particle_transform?: {
            control_point?: number;
            position?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            orientation?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            interpolation_interval?: number;
        } & {
            control_point?: number;
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
            } & { [K_101 in Exclude<keyof I_1["update_particle_transform"]["position"], keyof CMsgVector>]: never; };
            orientation?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_102 in Exclude<keyof I_1["update_particle_transform"]["orientation"], keyof CMsgQuaternion>]: never; };
            interpolation_interval?: number;
        } & { [K_103 in Exclude<keyof I_1["update_particle_transform"], keyof CUserMsg_ParticleManager_UpdateParticleTransform>]: never; };
        particle_freeze_transition_override?: {
            freeze_transition_override?: number;
        } & {
            freeze_transition_override?: number;
        } & { [K_104 in Exclude<keyof I_1["particle_freeze_transition_override"], "freeze_transition_override">]: never; };
    } & { [K_105 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager>]: never; }>(object: I_1): CUserMsg_ParticleManager;
};
export declare const CUserMsg_ParticleManager_ReleaseParticleIndex: {
    fromJSON(_: any): CUserMsg_ParticleManager_ReleaseParticleIndex;
    toJSON(_: CUserMsg_ParticleManager_ReleaseParticleIndex): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CUserMsg_ParticleManager_ReleaseParticleIndex;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CUserMsg_ParticleManager_ReleaseParticleIndex;
};
export declare const CUserMsg_ParticleManager_CreateParticle: {
    fromJSON(object: any): CUserMsg_ParticleManager_CreateParticle;
    toJSON(message: CUserMsg_ParticleManager_CreateParticle): unknown;
    create<I extends {
        particle_name_index?: string;
        attach_type?: number;
        entity_handle?: number;
        entity_handle_for_modifiers?: number;
        apply_voice_ban_rules?: boolean;
        team_behavior?: number;
        control_point_configuration?: string;
    } & {
        particle_name_index?: string;
        attach_type?: number;
        entity_handle?: number;
        entity_handle_for_modifiers?: number;
        apply_voice_ban_rules?: boolean;
        team_behavior?: number;
        control_point_configuration?: string;
    } & { [K in Exclude<keyof I, keyof CUserMsg_ParticleManager_CreateParticle>]: never; }>(base?: I): CUserMsg_ParticleManager_CreateParticle;
    fromPartial<I_1 extends {
        particle_name_index?: string;
        attach_type?: number;
        entity_handle?: number;
        entity_handle_for_modifiers?: number;
        apply_voice_ban_rules?: boolean;
        team_behavior?: number;
        control_point_configuration?: string;
    } & {
        particle_name_index?: string;
        attach_type?: number;
        entity_handle?: number;
        entity_handle_for_modifiers?: number;
        apply_voice_ban_rules?: boolean;
        team_behavior?: number;
        control_point_configuration?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_CreateParticle>]: never; }>(object: I_1): CUserMsg_ParticleManager_CreateParticle;
};
export declare const CUserMsg_ParticleManager_DestroyParticle: {
    fromJSON(object: any): CUserMsg_ParticleManager_DestroyParticle;
    toJSON(message: CUserMsg_ParticleManager_DestroyParticle): unknown;
    create<I extends {
        destroy_immediately?: boolean;
    } & {
        destroy_immediately?: boolean;
    } & { [K in Exclude<keyof I, "destroy_immediately">]: never; }>(base?: I): CUserMsg_ParticleManager_DestroyParticle;
    fromPartial<I_1 extends {
        destroy_immediately?: boolean;
    } & {
        destroy_immediately?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "destroy_immediately">]: never; }>(object: I_1): CUserMsg_ParticleManager_DestroyParticle;
};
export declare const CUserMsg_ParticleManager_DestroyParticleInvolving: {
    fromJSON(object: any): CUserMsg_ParticleManager_DestroyParticleInvolving;
    toJSON(message: CUserMsg_ParticleManager_DestroyParticleInvolving): unknown;
    create<I extends {
        destroy_immediately?: boolean;
        entity_handle?: number;
    } & {
        destroy_immediately?: boolean;
        entity_handle?: number;
    } & { [K in Exclude<keyof I, keyof CUserMsg_ParticleManager_DestroyParticleInvolving>]: never; }>(base?: I): CUserMsg_ParticleManager_DestroyParticleInvolving;
    fromPartial<I_1 extends {
        destroy_immediately?: boolean;
        entity_handle?: number;
    } & {
        destroy_immediately?: boolean;
        entity_handle?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_DestroyParticleInvolving>]: never; }>(object: I_1): CUserMsg_ParticleManager_DestroyParticleInvolving;
};
export declare const CUserMsg_ParticleManager_DestroyParticleNamed: {
    fromJSON(object: any): CUserMsg_ParticleManager_DestroyParticleNamed;
    toJSON(message: CUserMsg_ParticleManager_DestroyParticleNamed): unknown;
    create<I extends {
        particle_name_index?: string;
        entity_handle?: number;
        destroy_immediately?: boolean;
        play_endcap?: boolean;
    } & {
        particle_name_index?: string;
        entity_handle?: number;
        destroy_immediately?: boolean;
        play_endcap?: boolean;
    } & { [K in Exclude<keyof I, keyof CUserMsg_ParticleManager_DestroyParticleNamed>]: never; }>(base?: I): CUserMsg_ParticleManager_DestroyParticleNamed;
    fromPartial<I_1 extends {
        particle_name_index?: string;
        entity_handle?: number;
        destroy_immediately?: boolean;
        play_endcap?: boolean;
    } & {
        particle_name_index?: string;
        entity_handle?: number;
        destroy_immediately?: boolean;
        play_endcap?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_DestroyParticleNamed>]: never; }>(object: I_1): CUserMsg_ParticleManager_DestroyParticleNamed;
};
export declare const CUserMsg_ParticleManager_UpdateParticle_OBSOLETE: {
    fromJSON(object: any): CUserMsg_ParticleManager_UpdateParticle_OBSOLETE;
    toJSON(message: CUserMsg_ParticleManager_UpdateParticle_OBSOLETE): unknown;
    create<I extends {
        control_point?: number;
        position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
    } & {
        control_point?: number;
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
        } & { [K in Exclude<keyof I["position"], keyof CMsgVector>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CUserMsg_ParticleManager_UpdateParticle_OBSOLETE>]: never; }>(base?: I): CUserMsg_ParticleManager_UpdateParticle_OBSOLETE;
    fromPartial<I_1 extends {
        control_point?: number;
        position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
    } & {
        control_point?: number;
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
        } & { [K_2 in Exclude<keyof I_1["position"], keyof CMsgVector>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_UpdateParticle_OBSOLETE>]: never; }>(object: I_1): CUserMsg_ParticleManager_UpdateParticle_OBSOLETE;
};
export declare const CUserMsg_ParticleManager_UpdateParticleFwd_OBSOLETE: {
    fromJSON(object: any): CUserMsg_ParticleManager_UpdateParticleFwd_OBSOLETE;
    toJSON(message: CUserMsg_ParticleManager_UpdateParticleFwd_OBSOLETE): unknown;
    create<I extends {
        control_point?: number;
        forward?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
    } & {
        control_point?: number;
        forward?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["forward"], keyof CMsgVector>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CUserMsg_ParticleManager_UpdateParticleFwd_OBSOLETE>]: never; }>(base?: I): CUserMsg_ParticleManager_UpdateParticleFwd_OBSOLETE;
    fromPartial<I_1 extends {
        control_point?: number;
        forward?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
    } & {
        control_point?: number;
        forward?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_2 in Exclude<keyof I_1["forward"], keyof CMsgVector>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_UpdateParticleFwd_OBSOLETE>]: never; }>(object: I_1): CUserMsg_ParticleManager_UpdateParticleFwd_OBSOLETE;
};
export declare const CUserMsg_ParticleManager_UpdateParticleOrient_OBSOLETE: {
    fromJSON(object: any): CUserMsg_ParticleManager_UpdateParticleOrient_OBSOLETE;
    toJSON(message: CUserMsg_ParticleManager_UpdateParticleOrient_OBSOLETE): unknown;
    create<I extends {
        control_point?: number;
        forward?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        deprecated_right?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        up?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        left?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
    } & {
        control_point?: number;
        forward?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["forward"], keyof CMsgVector>]: never; };
        deprecated_right?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_1 in Exclude<keyof I["deprecated_right"], keyof CMsgVector>]: never; };
        up?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_2 in Exclude<keyof I["up"], keyof CMsgVector>]: never; };
        left?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_3 in Exclude<keyof I["left"], keyof CMsgVector>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof CUserMsg_ParticleManager_UpdateParticleOrient_OBSOLETE>]: never; }>(base?: I): CUserMsg_ParticleManager_UpdateParticleOrient_OBSOLETE;
    fromPartial<I_1 extends {
        control_point?: number;
        forward?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        deprecated_right?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        up?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        left?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
    } & {
        control_point?: number;
        forward?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_5 in Exclude<keyof I_1["forward"], keyof CMsgVector>]: never; };
        deprecated_right?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_6 in Exclude<keyof I_1["deprecated_right"], keyof CMsgVector>]: never; };
        up?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_7 in Exclude<keyof I_1["up"], keyof CMsgVector>]: never; };
        left?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_8 in Exclude<keyof I_1["left"], keyof CMsgVector>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_UpdateParticleOrient_OBSOLETE>]: never; }>(object: I_1): CUserMsg_ParticleManager_UpdateParticleOrient_OBSOLETE;
};
export declare const CUserMsg_ParticleManager_UpdateParticleTransform: {
    fromJSON(object: any): CUserMsg_ParticleManager_UpdateParticleTransform;
    toJSON(message: CUserMsg_ParticleManager_UpdateParticleTransform): unknown;
    create<I extends {
        control_point?: number;
        position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        orientation?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        interpolation_interval?: number;
    } & {
        control_point?: number;
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
        } & { [K in Exclude<keyof I["position"], keyof CMsgVector>]: never; };
        orientation?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_1 in Exclude<keyof I["orientation"], keyof CMsgQuaternion>]: never; };
        interpolation_interval?: number;
    } & { [K_2 in Exclude<keyof I, keyof CUserMsg_ParticleManager_UpdateParticleTransform>]: never; }>(base?: I): CUserMsg_ParticleManager_UpdateParticleTransform;
    fromPartial<I_1 extends {
        control_point?: number;
        position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        orientation?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        interpolation_interval?: number;
    } & {
        control_point?: number;
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
        } & { [K_3 in Exclude<keyof I_1["position"], keyof CMsgVector>]: never; };
        orientation?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_4 in Exclude<keyof I_1["orientation"], keyof CMsgQuaternion>]: never; };
        interpolation_interval?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_UpdateParticleTransform>]: never; }>(object: I_1): CUserMsg_ParticleManager_UpdateParticleTransform;
};
export declare const CUserMsg_ParticleManager_UpdateParticleFallback: {
    fromJSON(object: any): CUserMsg_ParticleManager_UpdateParticleFallback;
    toJSON(message: CUserMsg_ParticleManager_UpdateParticleFallback): unknown;
    create<I extends {
        control_point?: number;
        position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
    } & {
        control_point?: number;
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
        } & { [K in Exclude<keyof I["position"], keyof CMsgVector>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CUserMsg_ParticleManager_UpdateParticleFallback>]: never; }>(base?: I): CUserMsg_ParticleManager_UpdateParticleFallback;
    fromPartial<I_1 extends {
        control_point?: number;
        position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
    } & {
        control_point?: number;
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
        } & { [K_2 in Exclude<keyof I_1["position"], keyof CMsgVector>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_UpdateParticleFallback>]: never; }>(object: I_1): CUserMsg_ParticleManager_UpdateParticleFallback;
};
export declare const CUserMsg_ParticleManager_UpdateParticleOffset: {
    fromJSON(object: any): CUserMsg_ParticleManager_UpdateParticleOffset;
    toJSON(message: CUserMsg_ParticleManager_UpdateParticleOffset): unknown;
    create<I extends {
        control_point?: number;
        origin_offset?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        angle_offset?: {
            x?: number;
            y?: number;
            z?: number;
        };
    } & {
        control_point?: number;
        origin_offset?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["origin_offset"], keyof CMsgVector>]: never; };
        angle_offset?: {
            x?: number;
            y?: number;
            z?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
        } & { [K_1 in Exclude<keyof I["angle_offset"], keyof CMsgQAngle>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CUserMsg_ParticleManager_UpdateParticleOffset>]: never; }>(base?: I): CUserMsg_ParticleManager_UpdateParticleOffset;
    fromPartial<I_1 extends {
        control_point?: number;
        origin_offset?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        angle_offset?: {
            x?: number;
            y?: number;
            z?: number;
        };
    } & {
        control_point?: number;
        origin_offset?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_3 in Exclude<keyof I_1["origin_offset"], keyof CMsgVector>]: never; };
        angle_offset?: {
            x?: number;
            y?: number;
            z?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
        } & { [K_4 in Exclude<keyof I_1["angle_offset"], keyof CMsgQAngle>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_UpdateParticleOffset>]: never; }>(object: I_1): CUserMsg_ParticleManager_UpdateParticleOffset;
};
export declare const CUserMsg_ParticleManager_UpdateParticleEnt: {
    fromJSON(object: any): CUserMsg_ParticleManager_UpdateParticleEnt;
    toJSON(message: CUserMsg_ParticleManager_UpdateParticleEnt): unknown;
    create<I extends {
        control_point?: number;
        entity_handle?: number;
        attach_type?: number;
        attachment?: number;
        fallback_position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        include_wearables?: boolean;
        offset_position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        offset_angles?: {
            x?: number;
            y?: number;
            z?: number;
        };
    } & {
        control_point?: number;
        entity_handle?: number;
        attach_type?: number;
        attachment?: number;
        fallback_position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["fallback_position"], keyof CMsgVector>]: never; };
        include_wearables?: boolean;
        offset_position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_1 in Exclude<keyof I["offset_position"], keyof CMsgVector>]: never; };
        offset_angles?: {
            x?: number;
            y?: number;
            z?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
        } & { [K_2 in Exclude<keyof I["offset_angles"], keyof CMsgQAngle>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof CUserMsg_ParticleManager_UpdateParticleEnt>]: never; }>(base?: I): CUserMsg_ParticleManager_UpdateParticleEnt;
    fromPartial<I_1 extends {
        control_point?: number;
        entity_handle?: number;
        attach_type?: number;
        attachment?: number;
        fallback_position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        include_wearables?: boolean;
        offset_position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        offset_angles?: {
            x?: number;
            y?: number;
            z?: number;
        };
    } & {
        control_point?: number;
        entity_handle?: number;
        attach_type?: number;
        attachment?: number;
        fallback_position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_4 in Exclude<keyof I_1["fallback_position"], keyof CMsgVector>]: never; };
        include_wearables?: boolean;
        offset_position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_5 in Exclude<keyof I_1["offset_position"], keyof CMsgVector>]: never; };
        offset_angles?: {
            x?: number;
            y?: number;
            z?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
        } & { [K_6 in Exclude<keyof I_1["offset_angles"], keyof CMsgQAngle>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_UpdateParticleEnt>]: never; }>(object: I_1): CUserMsg_ParticleManager_UpdateParticleEnt;
};
export declare const CUserMsg_ParticleManager_UpdateParticleSetFrozen: {
    fromJSON(object: any): CUserMsg_ParticleManager_UpdateParticleSetFrozen;
    toJSON(message: CUserMsg_ParticleManager_UpdateParticleSetFrozen): unknown;
    create<I extends {
        set_frozen?: boolean;
        transition_duration?: number;
    } & {
        set_frozen?: boolean;
        transition_duration?: number;
    } & { [K in Exclude<keyof I, keyof CUserMsg_ParticleManager_UpdateParticleSetFrozen>]: never; }>(base?: I): CUserMsg_ParticleManager_UpdateParticleSetFrozen;
    fromPartial<I_1 extends {
        set_frozen?: boolean;
        transition_duration?: number;
    } & {
        set_frozen?: boolean;
        transition_duration?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_UpdateParticleSetFrozen>]: never; }>(object: I_1): CUserMsg_ParticleManager_UpdateParticleSetFrozen;
};
export declare const CUserMsg_ParticleManager_UpdateParticleShouldDraw: {
    fromJSON(object: any): CUserMsg_ParticleManager_UpdateParticleShouldDraw;
    toJSON(message: CUserMsg_ParticleManager_UpdateParticleShouldDraw): unknown;
    create<I extends {
        should_draw?: boolean;
    } & {
        should_draw?: boolean;
    } & { [K in Exclude<keyof I, "should_draw">]: never; }>(base?: I): CUserMsg_ParticleManager_UpdateParticleShouldDraw;
    fromPartial<I_1 extends {
        should_draw?: boolean;
    } & {
        should_draw?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "should_draw">]: never; }>(object: I_1): CUserMsg_ParticleManager_UpdateParticleShouldDraw;
};
export declare const CUserMsg_ParticleManager_ChangeControlPointAttachment: {
    fromJSON(object: any): CUserMsg_ParticleManager_ChangeControlPointAttachment;
    toJSON(message: CUserMsg_ParticleManager_ChangeControlPointAttachment): unknown;
    create<I extends {
        attachment_old?: number;
        attachment_new?: number;
        entity_handle?: number;
    } & {
        attachment_old?: number;
        attachment_new?: number;
        entity_handle?: number;
    } & { [K in Exclude<keyof I, keyof CUserMsg_ParticleManager_ChangeControlPointAttachment>]: never; }>(base?: I): CUserMsg_ParticleManager_ChangeControlPointAttachment;
    fromPartial<I_1 extends {
        attachment_old?: number;
        attachment_new?: number;
        entity_handle?: number;
    } & {
        attachment_old?: number;
        attachment_new?: number;
        entity_handle?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_ChangeControlPointAttachment>]: never; }>(object: I_1): CUserMsg_ParticleManager_ChangeControlPointAttachment;
};
export declare const CUserMsg_ParticleManager_UpdateEntityPosition: {
    fromJSON(object: any): CUserMsg_ParticleManager_UpdateEntityPosition;
    toJSON(message: CUserMsg_ParticleManager_UpdateEntityPosition): unknown;
    create<I extends {
        entity_handle?: number;
        position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
    } & {
        entity_handle?: number;
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
        } & { [K in Exclude<keyof I["position"], keyof CMsgVector>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CUserMsg_ParticleManager_UpdateEntityPosition>]: never; }>(base?: I): CUserMsg_ParticleManager_UpdateEntityPosition;
    fromPartial<I_1 extends {
        entity_handle?: number;
        position?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
    } & {
        entity_handle?: number;
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
        } & { [K_2 in Exclude<keyof I_1["position"], keyof CMsgVector>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_UpdateEntityPosition>]: never; }>(object: I_1): CUserMsg_ParticleManager_UpdateEntityPosition;
};
export declare const CUserMsg_ParticleManager_SetParticleFoWProperties: {
    fromJSON(object: any): CUserMsg_ParticleManager_SetParticleFoWProperties;
    toJSON(message: CUserMsg_ParticleManager_SetParticleFoWProperties): unknown;
    create<I extends {
        fow_control_point?: number;
        fow_control_point2?: number;
        fow_radius?: number;
    } & {
        fow_control_point?: number;
        fow_control_point2?: number;
        fow_radius?: number;
    } & { [K in Exclude<keyof I, keyof CUserMsg_ParticleManager_SetParticleFoWProperties>]: never; }>(base?: I): CUserMsg_ParticleManager_SetParticleFoWProperties;
    fromPartial<I_1 extends {
        fow_control_point?: number;
        fow_control_point2?: number;
        fow_radius?: number;
    } & {
        fow_control_point?: number;
        fow_control_point2?: number;
        fow_radius?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_SetParticleFoWProperties>]: never; }>(object: I_1): CUserMsg_ParticleManager_SetParticleFoWProperties;
};
export declare const CUserMsg_ParticleManager_SetParticleShouldCheckFoW: {
    fromJSON(object: any): CUserMsg_ParticleManager_SetParticleShouldCheckFoW;
    toJSON(message: CUserMsg_ParticleManager_SetParticleShouldCheckFoW): unknown;
    create<I extends {
        check_fow?: boolean;
    } & {
        check_fow?: boolean;
    } & { [K in Exclude<keyof I, "check_fow">]: never; }>(base?: I): CUserMsg_ParticleManager_SetParticleShouldCheckFoW;
    fromPartial<I_1 extends {
        check_fow?: boolean;
    } & {
        check_fow?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "check_fow">]: never; }>(object: I_1): CUserMsg_ParticleManager_SetParticleShouldCheckFoW;
};
export declare const CUserMsg_ParticleManager_SetControlPointModel: {
    fromJSON(object: any): CUserMsg_ParticleManager_SetControlPointModel;
    toJSON(message: CUserMsg_ParticleManager_SetControlPointModel): unknown;
    create<I extends {
        control_point?: number;
        model_name?: string;
    } & {
        control_point?: number;
        model_name?: string;
    } & { [K in Exclude<keyof I, keyof CUserMsg_ParticleManager_SetControlPointModel>]: never; }>(base?: I): CUserMsg_ParticleManager_SetControlPointModel;
    fromPartial<I_1 extends {
        control_point?: number;
        model_name?: string;
    } & {
        control_point?: number;
        model_name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_SetControlPointModel>]: never; }>(object: I_1): CUserMsg_ParticleManager_SetControlPointModel;
};
export declare const CUserMsg_ParticleManager_SetControlPointSnapshot: {
    fromJSON(object: any): CUserMsg_ParticleManager_SetControlPointSnapshot;
    toJSON(message: CUserMsg_ParticleManager_SetControlPointSnapshot): unknown;
    create<I extends {
        control_point?: number;
        snapshot_name?: string;
    } & {
        control_point?: number;
        snapshot_name?: string;
    } & { [K in Exclude<keyof I, keyof CUserMsg_ParticleManager_SetControlPointSnapshot>]: never; }>(base?: I): CUserMsg_ParticleManager_SetControlPointSnapshot;
    fromPartial<I_1 extends {
        control_point?: number;
        snapshot_name?: string;
    } & {
        control_point?: number;
        snapshot_name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_SetControlPointSnapshot>]: never; }>(object: I_1): CUserMsg_ParticleManager_SetControlPointSnapshot;
};
export declare const CUserMsg_ParticleManager_SetParticleText: {
    fromJSON(object: any): CUserMsg_ParticleManager_SetParticleText;
    toJSON(message: CUserMsg_ParticleManager_SetParticleText): unknown;
    create<I extends {
        text?: string;
    } & {
        text?: string;
    } & { [K in Exclude<keyof I, "text">]: never; }>(base?: I): CUserMsg_ParticleManager_SetParticleText;
    fromPartial<I_1 extends {
        text?: string;
    } & {
        text?: string;
    } & { [K_1 in Exclude<keyof I_1, "text">]: never; }>(object: I_1): CUserMsg_ParticleManager_SetParticleText;
};
export declare const CUserMsg_ParticleManager_SetTextureAttribute: {
    fromJSON(object: any): CUserMsg_ParticleManager_SetTextureAttribute;
    toJSON(message: CUserMsg_ParticleManager_SetTextureAttribute): unknown;
    create<I extends {
        attribute_name?: string;
        texture_name?: string;
    } & {
        attribute_name?: string;
        texture_name?: string;
    } & { [K in Exclude<keyof I, keyof CUserMsg_ParticleManager_SetTextureAttribute>]: never; }>(base?: I): CUserMsg_ParticleManager_SetTextureAttribute;
    fromPartial<I_1 extends {
        attribute_name?: string;
        texture_name?: string;
    } & {
        attribute_name?: string;
        texture_name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_SetTextureAttribute>]: never; }>(object: I_1): CUserMsg_ParticleManager_SetTextureAttribute;
};
export declare const CUserMsg_ParticleManager_SetSceneObjectGenericFlag: {
    fromJSON(object: any): CUserMsg_ParticleManager_SetSceneObjectGenericFlag;
    toJSON(message: CUserMsg_ParticleManager_SetSceneObjectGenericFlag): unknown;
    create<I extends {
        flag_value?: boolean;
    } & {
        flag_value?: boolean;
    } & { [K in Exclude<keyof I, "flag_value">]: never; }>(base?: I): CUserMsg_ParticleManager_SetSceneObjectGenericFlag;
    fromPartial<I_1 extends {
        flag_value?: boolean;
    } & {
        flag_value?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "flag_value">]: never; }>(object: I_1): CUserMsg_ParticleManager_SetSceneObjectGenericFlag;
};
export declare const CUserMsg_ParticleManager_SetSceneObjectTintAndDesat: {
    fromJSON(object: any): CUserMsg_ParticleManager_SetSceneObjectTintAndDesat;
    toJSON(message: CUserMsg_ParticleManager_SetSceneObjectTintAndDesat): unknown;
    create<I extends {
        tint?: number;
        desat?: number;
    } & {
        tint?: number;
        desat?: number;
    } & { [K in Exclude<keyof I, keyof CUserMsg_ParticleManager_SetSceneObjectTintAndDesat>]: never; }>(base?: I): CUserMsg_ParticleManager_SetSceneObjectTintAndDesat;
    fromPartial<I_1 extends {
        tint?: number;
        desat?: number;
    } & {
        tint?: number;
        desat?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_SetSceneObjectTintAndDesat>]: never; }>(object: I_1): CUserMsg_ParticleManager_SetSceneObjectTintAndDesat;
};
export declare const CUserMsg_ParticleManager_ParticleSkipToTime: {
    fromJSON(object: any): CUserMsg_ParticleManager_ParticleSkipToTime;
    toJSON(message: CUserMsg_ParticleManager_ParticleSkipToTime): unknown;
    create<I extends {
        skip_to_time?: number;
    } & {
        skip_to_time?: number;
    } & { [K in Exclude<keyof I, "skip_to_time">]: never; }>(base?: I): CUserMsg_ParticleManager_ParticleSkipToTime;
    fromPartial<I_1 extends {
        skip_to_time?: number;
    } & {
        skip_to_time?: number;
    } & { [K_1 in Exclude<keyof I_1, "skip_to_time">]: never; }>(object: I_1): CUserMsg_ParticleManager_ParticleSkipToTime;
};
export declare const CUserMsg_ParticleManager_ParticleCanFreeze: {
    fromJSON(object: any): CUserMsg_ParticleManager_ParticleCanFreeze;
    toJSON(message: CUserMsg_ParticleManager_ParticleCanFreeze): unknown;
    create<I extends {
        can_freeze?: boolean;
    } & {
        can_freeze?: boolean;
    } & { [K in Exclude<keyof I, "can_freeze">]: never; }>(base?: I): CUserMsg_ParticleManager_ParticleCanFreeze;
    fromPartial<I_1 extends {
        can_freeze?: boolean;
    } & {
        can_freeze?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "can_freeze">]: never; }>(object: I_1): CUserMsg_ParticleManager_ParticleCanFreeze;
};
export declare const CUserMsg_ParticleManager_ParticleFreezeTransitionOverride: {
    fromJSON(object: any): CUserMsg_ParticleManager_ParticleFreezeTransitionOverride;
    toJSON(message: CUserMsg_ParticleManager_ParticleFreezeTransitionOverride): unknown;
    create<I extends {
        freeze_transition_override?: number;
    } & {
        freeze_transition_override?: number;
    } & { [K in Exclude<keyof I, "freeze_transition_override">]: never; }>(base?: I): CUserMsg_ParticleManager_ParticleFreezeTransitionOverride;
    fromPartial<I_1 extends {
        freeze_transition_override?: number;
    } & {
        freeze_transition_override?: number;
    } & { [K_1 in Exclude<keyof I_1, "freeze_transition_override">]: never; }>(object: I_1): CUserMsg_ParticleManager_ParticleFreezeTransitionOverride;
};
export declare const CUserMsg_ParticleManager_SetParticleNamedValueContext: {
    fromJSON(object: any): CUserMsg_ParticleManager_SetParticleNamedValueContext;
    toJSON(message: CUserMsg_ParticleManager_SetParticleNamedValueContext): unknown;
    create<I extends {
        float_values?: {
            value_name?: string;
            value?: number;
        }[];
        vector_values?: {
            value_name?: string;
            value?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            ent_index?: number;
            attachment_name?: string;
        }[];
        transform_values?: {
            value_name?: string;
            angles?: {
                x?: number;
                y?: number;
                z?: number;
            };
            translation?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            ent_index?: number;
            attachment_name?: string;
        }[];
    } & {
        float_values?: {
            value_name?: string;
            value?: number;
        }[] & ({
            value_name?: string;
            value?: number;
        } & {
            value_name?: string;
            value?: number;
        } & { [K in Exclude<keyof I["float_values"][number], keyof CUserMsg_ParticleManager_SetParticleNamedValueContext_FloatContextValue>]: never; })[] & { [K_1 in Exclude<keyof I["float_values"], keyof {
            value_name?: string;
            value?: number;
        }[]>]: never; };
        vector_values?: {
            value_name?: string;
            value?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            ent_index?: number;
            attachment_name?: string;
        }[] & ({
            value_name?: string;
            value?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            ent_index?: number;
            attachment_name?: string;
        } & {
            value_name?: string;
            value?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_2 in Exclude<keyof I["vector_values"][number]["value"], keyof CMsgVector>]: never; };
            ent_index?: number;
            attachment_name?: string;
        } & { [K_3 in Exclude<keyof I["vector_values"][number], keyof CUserMsg_ParticleManager_SetParticleNamedValueContext_VectorContextValue>]: never; })[] & { [K_4 in Exclude<keyof I["vector_values"], keyof {
            value_name?: string;
            value?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            ent_index?: number;
            attachment_name?: string;
        }[]>]: never; };
        transform_values?: {
            value_name?: string;
            angles?: {
                x?: number;
                y?: number;
                z?: number;
            };
            translation?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            ent_index?: number;
            attachment_name?: string;
        }[] & ({
            value_name?: string;
            angles?: {
                x?: number;
                y?: number;
                z?: number;
            };
            translation?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            ent_index?: number;
            attachment_name?: string;
        } & {
            value_name?: string;
            angles?: {
                x?: number;
                y?: number;
                z?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
            } & { [K_5 in Exclude<keyof I["transform_values"][number]["angles"], keyof CMsgQAngle>]: never; };
            translation?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_6 in Exclude<keyof I["transform_values"][number]["translation"], keyof CMsgVector>]: never; };
            ent_index?: number;
            attachment_name?: string;
        } & { [K_7 in Exclude<keyof I["transform_values"][number], keyof CUserMsg_ParticleManager_SetParticleNamedValueContext_TransformContextValue>]: never; })[] & { [K_8 in Exclude<keyof I["transform_values"], keyof {
            value_name?: string;
            angles?: {
                x?: number;
                y?: number;
                z?: number;
            };
            translation?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            ent_index?: number;
            attachment_name?: string;
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I, keyof CUserMsg_ParticleManager_SetParticleNamedValueContext>]: never; }>(base?: I): CUserMsg_ParticleManager_SetParticleNamedValueContext;
    fromPartial<I_1 extends {
        float_values?: {
            value_name?: string;
            value?: number;
        }[];
        vector_values?: {
            value_name?: string;
            value?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            ent_index?: number;
            attachment_name?: string;
        }[];
        transform_values?: {
            value_name?: string;
            angles?: {
                x?: number;
                y?: number;
                z?: number;
            };
            translation?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            ent_index?: number;
            attachment_name?: string;
        }[];
    } & {
        float_values?: {
            value_name?: string;
            value?: number;
        }[] & ({
            value_name?: string;
            value?: number;
        } & {
            value_name?: string;
            value?: number;
        } & { [K_10 in Exclude<keyof I_1["float_values"][number], keyof CUserMsg_ParticleManager_SetParticleNamedValueContext_FloatContextValue>]: never; })[] & { [K_11 in Exclude<keyof I_1["float_values"], keyof {
            value_name?: string;
            value?: number;
        }[]>]: never; };
        vector_values?: {
            value_name?: string;
            value?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            ent_index?: number;
            attachment_name?: string;
        }[] & ({
            value_name?: string;
            value?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            ent_index?: number;
            attachment_name?: string;
        } & {
            value_name?: string;
            value?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_12 in Exclude<keyof I_1["vector_values"][number]["value"], keyof CMsgVector>]: never; };
            ent_index?: number;
            attachment_name?: string;
        } & { [K_13 in Exclude<keyof I_1["vector_values"][number], keyof CUserMsg_ParticleManager_SetParticleNamedValueContext_VectorContextValue>]: never; })[] & { [K_14 in Exclude<keyof I_1["vector_values"], keyof {
            value_name?: string;
            value?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            ent_index?: number;
            attachment_name?: string;
        }[]>]: never; };
        transform_values?: {
            value_name?: string;
            angles?: {
                x?: number;
                y?: number;
                z?: number;
            };
            translation?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            ent_index?: number;
            attachment_name?: string;
        }[] & ({
            value_name?: string;
            angles?: {
                x?: number;
                y?: number;
                z?: number;
            };
            translation?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            ent_index?: number;
            attachment_name?: string;
        } & {
            value_name?: string;
            angles?: {
                x?: number;
                y?: number;
                z?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
            } & { [K_15 in Exclude<keyof I_1["transform_values"][number]["angles"], keyof CMsgQAngle>]: never; };
            translation?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_16 in Exclude<keyof I_1["transform_values"][number]["translation"], keyof CMsgVector>]: never; };
            ent_index?: number;
            attachment_name?: string;
        } & { [K_17 in Exclude<keyof I_1["transform_values"][number], keyof CUserMsg_ParticleManager_SetParticleNamedValueContext_TransformContextValue>]: never; })[] & { [K_18 in Exclude<keyof I_1["transform_values"], keyof {
            value_name?: string;
            angles?: {
                x?: number;
                y?: number;
                z?: number;
            };
            translation?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            ent_index?: number;
            attachment_name?: string;
        }[]>]: never; };
    } & { [K_19 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_SetParticleNamedValueContext>]: never; }>(object: I_1): CUserMsg_ParticleManager_SetParticleNamedValueContext;
};
export declare const CUserMsg_ParticleManager_SetParticleNamedValueContext_FloatContextValue: {
    fromJSON(object: any): CUserMsg_ParticleManager_SetParticleNamedValueContext_FloatContextValue;
    toJSON(message: CUserMsg_ParticleManager_SetParticleNamedValueContext_FloatContextValue): unknown;
    create<I extends {
        value_name?: string;
        value?: number;
    } & {
        value_name?: string;
        value?: number;
    } & { [K in Exclude<keyof I, keyof CUserMsg_ParticleManager_SetParticleNamedValueContext_FloatContextValue>]: never; }>(base?: I): CUserMsg_ParticleManager_SetParticleNamedValueContext_FloatContextValue;
    fromPartial<I_1 extends {
        value_name?: string;
        value?: number;
    } & {
        value_name?: string;
        value?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_SetParticleNamedValueContext_FloatContextValue>]: never; }>(object: I_1): CUserMsg_ParticleManager_SetParticleNamedValueContext_FloatContextValue;
};
export declare const CUserMsg_ParticleManager_SetParticleNamedValueContext_VectorContextValue: {
    fromJSON(object: any): CUserMsg_ParticleManager_SetParticleNamedValueContext_VectorContextValue;
    toJSON(message: CUserMsg_ParticleManager_SetParticleNamedValueContext_VectorContextValue): unknown;
    create<I extends {
        value_name?: string;
        value?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        ent_index?: number;
        attachment_name?: string;
    } & {
        value_name?: string;
        value?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["value"], keyof CMsgVector>]: never; };
        ent_index?: number;
        attachment_name?: string;
    } & { [K_1 in Exclude<keyof I, keyof CUserMsg_ParticleManager_SetParticleNamedValueContext_VectorContextValue>]: never; }>(base?: I): CUserMsg_ParticleManager_SetParticleNamedValueContext_VectorContextValue;
    fromPartial<I_1 extends {
        value_name?: string;
        value?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        ent_index?: number;
        attachment_name?: string;
    } & {
        value_name?: string;
        value?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_2 in Exclude<keyof I_1["value"], keyof CMsgVector>]: never; };
        ent_index?: number;
        attachment_name?: string;
    } & { [K_3 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_SetParticleNamedValueContext_VectorContextValue>]: never; }>(object: I_1): CUserMsg_ParticleManager_SetParticleNamedValueContext_VectorContextValue;
};
export declare const CUserMsg_ParticleManager_SetParticleNamedValueContext_TransformContextValue: {
    fromJSON(object: any): CUserMsg_ParticleManager_SetParticleNamedValueContext_TransformContextValue;
    toJSON(message: CUserMsg_ParticleManager_SetParticleNamedValueContext_TransformContextValue): unknown;
    create<I extends {
        value_name?: string;
        angles?: {
            x?: number;
            y?: number;
            z?: number;
        };
        translation?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        ent_index?: number;
        attachment_name?: string;
    } & {
        value_name?: string;
        angles?: {
            x?: number;
            y?: number;
            z?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
        } & { [K in Exclude<keyof I["angles"], keyof CMsgQAngle>]: never; };
        translation?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_1 in Exclude<keyof I["translation"], keyof CMsgVector>]: never; };
        ent_index?: number;
        attachment_name?: string;
    } & { [K_2 in Exclude<keyof I, keyof CUserMsg_ParticleManager_SetParticleNamedValueContext_TransformContextValue>]: never; }>(base?: I): CUserMsg_ParticleManager_SetParticleNamedValueContext_TransformContextValue;
    fromPartial<I_1 extends {
        value_name?: string;
        angles?: {
            x?: number;
            y?: number;
            z?: number;
        };
        translation?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        ent_index?: number;
        attachment_name?: string;
    } & {
        value_name?: string;
        angles?: {
            x?: number;
            y?: number;
            z?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
        } & { [K_3 in Exclude<keyof I_1["angles"], keyof CMsgQAngle>]: never; };
        translation?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_4 in Exclude<keyof I_1["translation"], keyof CMsgVector>]: never; };
        ent_index?: number;
        attachment_name?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof CUserMsg_ParticleManager_SetParticleNamedValueContext_TransformContextValue>]: never; }>(object: I_1): CUserMsg_ParticleManager_SetParticleNamedValueContext_TransformContextValue;
};
export declare const CUserMsg_HudError: {
    fromJSON(object: any): CUserMsg_HudError;
    toJSON(message: CUserMsg_HudError): unknown;
    create<I extends {
        order_id?: number;
    } & {
        order_id?: number;
    } & { [K in Exclude<keyof I, "order_id">]: never; }>(base?: I): CUserMsg_HudError;
    fromPartial<I_1 extends {
        order_id?: number;
    } & {
        order_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "order_id">]: never; }>(object: I_1): CUserMsg_HudError;
};
export declare const CUserMsg_CustomGameEvent: {
    fromJSON(object: any): CUserMsg_CustomGameEvent;
    toJSON(message: CUserMsg_CustomGameEvent): unknown;
    create<I extends {
        event_name?: string;
        data?: string;
    } & {
        event_name?: string;
        data?: string;
    } & { [K in Exclude<keyof I, keyof CUserMsg_CustomGameEvent>]: never; }>(base?: I): CUserMsg_CustomGameEvent;
    fromPartial<I_1 extends {
        event_name?: string;
        data?: string;
    } & {
        event_name?: string;
        data?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMsg_CustomGameEvent>]: never; }>(object: I_1): CUserMsg_CustomGameEvent;
};
export declare const CUserMessageHapticsManagerPulse: {
    fromJSON(object: any): CUserMessageHapticsManagerPulse;
    toJSON(message: CUserMessageHapticsManagerPulse): unknown;
    create<I extends {
        hand_id?: number;
        effect_amplitude?: number;
        effect_frequency?: number;
        effect_duration?: number;
    } & {
        hand_id?: number;
        effect_amplitude?: number;
        effect_frequency?: number;
        effect_duration?: number;
    } & { [K in Exclude<keyof I, keyof CUserMessageHapticsManagerPulse>]: never; }>(base?: I): CUserMessageHapticsManagerPulse;
    fromPartial<I_1 extends {
        hand_id?: number;
        effect_amplitude?: number;
        effect_frequency?: number;
        effect_duration?: number;
    } & {
        hand_id?: number;
        effect_amplitude?: number;
        effect_frequency?: number;
        effect_duration?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageHapticsManagerPulse>]: never; }>(object: I_1): CUserMessageHapticsManagerPulse;
};
export declare const CUserMessageHapticsManagerEffect: {
    fromJSON(object: any): CUserMessageHapticsManagerEffect;
    toJSON(message: CUserMessageHapticsManagerEffect): unknown;
    create<I extends {
        hand_id?: number;
        effect_name_hash_code?: number;
        effect_scale?: number;
    } & {
        hand_id?: number;
        effect_name_hash_code?: number;
        effect_scale?: number;
    } & { [K in Exclude<keyof I, keyof CUserMessageHapticsManagerEffect>]: never; }>(base?: I): CUserMessageHapticsManagerEffect;
    fromPartial<I_1 extends {
        hand_id?: number;
        effect_name_hash_code?: number;
        effect_scale?: number;
    } & {
        hand_id?: number;
        effect_name_hash_code?: number;
        effect_scale?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageHapticsManagerEffect>]: never; }>(object: I_1): CUserMessageHapticsManagerEffect;
};
export declare const CUserMessageAnimStateGraphState: {
    fromJSON(object: any): CUserMessageAnimStateGraphState;
    toJSON(message: CUserMessageAnimStateGraphState): unknown;
    create<I extends {
        entity_index?: number;
        data?: string;
    } & {
        entity_index?: number;
        data?: string;
    } & { [K in Exclude<keyof I, keyof CUserMessageAnimStateGraphState>]: never; }>(base?: I): CUserMessageAnimStateGraphState;
    fromPartial<I_1 extends {
        entity_index?: number;
        data?: string;
    } & {
        entity_index?: number;
        data?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageAnimStateGraphState>]: never; }>(object: I_1): CUserMessageAnimStateGraphState;
};
export declare const CUserMessageCommandQueueState: {
    fromJSON(object: any): CUserMessageCommandQueueState;
    toJSON(message: CUserMessageCommandQueueState): unknown;
    create<I extends {
        player_slot?: number;
        command_queue_info?: {
            commands_queued?: number;
            command_queue_desired_size?: number;
            starved_command_ticks?: number;
            time_dilation_percent?: number;
        };
    } & {
        player_slot?: number;
        command_queue_info?: {
            commands_queued?: number;
            command_queue_desired_size?: number;
            starved_command_ticks?: number;
            time_dilation_percent?: number;
        } & {
            commands_queued?: number;
            command_queue_desired_size?: number;
            starved_command_ticks?: number;
            time_dilation_percent?: number;
        } & { [K in Exclude<keyof I["command_queue_info"], keyof CUserMessageCommandQueueState_command_queue_info_t>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CUserMessageCommandQueueState>]: never; }>(base?: I): CUserMessageCommandQueueState;
    fromPartial<I_1 extends {
        player_slot?: number;
        command_queue_info?: {
            commands_queued?: number;
            command_queue_desired_size?: number;
            starved_command_ticks?: number;
            time_dilation_percent?: number;
        };
    } & {
        player_slot?: number;
        command_queue_info?: {
            commands_queued?: number;
            command_queue_desired_size?: number;
            starved_command_ticks?: number;
            time_dilation_percent?: number;
        } & {
            commands_queued?: number;
            command_queue_desired_size?: number;
            starved_command_ticks?: number;
            time_dilation_percent?: number;
        } & { [K_2 in Exclude<keyof I_1["command_queue_info"], keyof CUserMessageCommandQueueState_command_queue_info_t>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CUserMessageCommandQueueState>]: never; }>(object: I_1): CUserMessageCommandQueueState;
};
export declare const CUserMessageCommandQueueState_command_queue_info_t: {
    fromJSON(object: any): CUserMessageCommandQueueState_command_queue_info_t;
    toJSON(message: CUserMessageCommandQueueState_command_queue_info_t): unknown;
    create<I extends {
        commands_queued?: number;
        command_queue_desired_size?: number;
        starved_command_ticks?: number;
        time_dilation_percent?: number;
    } & {
        commands_queued?: number;
        command_queue_desired_size?: number;
        starved_command_ticks?: number;
        time_dilation_percent?: number;
    } & { [K in Exclude<keyof I, keyof CUserMessageCommandQueueState_command_queue_info_t>]: never; }>(base?: I): CUserMessageCommandQueueState_command_queue_info_t;
    fromPartial<I_1 extends {
        commands_queued?: number;
        command_queue_desired_size?: number;
        starved_command_ticks?: number;
        time_dilation_percent?: number;
    } & {
        commands_queued?: number;
        command_queue_desired_size?: number;
        starved_command_ticks?: number;
        time_dilation_percent?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageCommandQueueState_command_queue_info_t>]: never; }>(object: I_1): CUserMessageCommandQueueState_command_queue_info_t;
};
export declare const CUserMessageUpdateCssClasses: {
    fromJSON(object: any): CUserMessageUpdateCssClasses;
    toJSON(message: CUserMessageUpdateCssClasses): unknown;
    create<I extends {
        target_world_panel?: number;
        css_classes?: string;
        is_add?: boolean;
    } & {
        target_world_panel?: number;
        css_classes?: string;
        is_add?: boolean;
    } & { [K in Exclude<keyof I, keyof CUserMessageUpdateCssClasses>]: never; }>(base?: I): CUserMessageUpdateCssClasses;
    fromPartial<I_1 extends {
        target_world_panel?: number;
        css_classes?: string;
        is_add?: boolean;
    } & {
        target_world_panel?: number;
        css_classes?: string;
        is_add?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageUpdateCssClasses>]: never; }>(object: I_1): CUserMessageUpdateCssClasses;
};
export declare const CUserMessageServerFrameTime: {
    fromJSON(object: any): CUserMessageServerFrameTime;
    toJSON(message: CUserMessageServerFrameTime): unknown;
    create<I extends {
        frame_time?: number;
    } & {
        frame_time?: number;
    } & { [K in Exclude<keyof I, "frame_time">]: never; }>(base?: I): CUserMessageServerFrameTime;
    fromPartial<I_1 extends {
        frame_time?: number;
    } & {
        frame_time?: number;
    } & { [K_1 in Exclude<keyof I_1, "frame_time">]: never; }>(object: I_1): CUserMessageServerFrameTime;
};
export declare const CUserMessageLagCompensationError: {
    fromJSON(object: any): CUserMessageLagCompensationError;
    toJSON(message: CUserMessageLagCompensationError): unknown;
    create<I extends {
        distance?: number;
    } & {
        distance?: number;
    } & { [K in Exclude<keyof I, "distance">]: never; }>(base?: I): CUserMessageLagCompensationError;
    fromPartial<I_1 extends {
        distance?: number;
    } & {
        distance?: number;
    } & { [K_1 in Exclude<keyof I_1, "distance">]: never; }>(object: I_1): CUserMessageLagCompensationError;
};
export declare const CUserMessageRequestDllStatus: {
    fromJSON(object: any): CUserMessageRequestDllStatus;
    toJSON(message: CUserMessageRequestDllStatus): unknown;
    create<I extends {
        dll_action?: string;
        full_report?: boolean;
    } & {
        dll_action?: string;
        full_report?: boolean;
    } & { [K in Exclude<keyof I, keyof CUserMessageRequestDllStatus>]: never; }>(base?: I): CUserMessageRequestDllStatus;
    fromPartial<I_1 extends {
        dll_action?: string;
        full_report?: boolean;
    } & {
        dll_action?: string;
        full_report?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageRequestDllStatus>]: never; }>(object: I_1): CUserMessageRequestDllStatus;
};
export declare const CUserMessageRequestUtilAction: {
    fromJSON(object: any): CUserMessageRequestUtilAction;
    toJSON(message: CUserMessageRequestUtilAction): unknown;
    create<I extends {
        util1?: number;
        util2?: number;
        util3?: number;
        util4?: number;
        util5?: number;
    } & {
        util1?: number;
        util2?: number;
        util3?: number;
        util4?: number;
        util5?: number;
    } & { [K in Exclude<keyof I, keyof CUserMessageRequestUtilAction>]: never; }>(base?: I): CUserMessageRequestUtilAction;
    fromPartial<I_1 extends {
        util1?: number;
        util2?: number;
        util3?: number;
        util4?: number;
        util5?: number;
    } & {
        util1?: number;
        util2?: number;
        util3?: number;
        util4?: number;
        util5?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageRequestUtilAction>]: never; }>(object: I_1): CUserMessageRequestUtilAction;
};
export declare const CUserMessage_UtilMsg_Response: {
    fromJSON(object: any): CUserMessage_UtilMsg_Response;
    toJSON(message: CUserMessage_UtilMsg_Response): unknown;
    create<I extends {
        crc?: number;
        item_count?: number;
        crc2?: number;
        item_count2?: number;
        crc_part?: number[];
        crc_part2?: number[];
        client_timestamp?: number;
        platform?: number;
        itemdetails?: {
            index?: number;
            hash?: number;
            crc?: number;
            name?: string;
        }[];
        itemgroup?: number;
    } & {
        crc?: number;
        item_count?: number;
        crc2?: number;
        item_count2?: number;
        crc_part?: number[] & number[] & { [K in Exclude<keyof I["crc_part"], keyof number[]>]: never; };
        crc_part2?: number[] & number[] & { [K_1 in Exclude<keyof I["crc_part2"], keyof number[]>]: never; };
        client_timestamp?: number;
        platform?: number;
        itemdetails?: {
            index?: number;
            hash?: number;
            crc?: number;
            name?: string;
        }[] & ({
            index?: number;
            hash?: number;
            crc?: number;
            name?: string;
        } & {
            index?: number;
            hash?: number;
            crc?: number;
            name?: string;
        } & { [K_2 in Exclude<keyof I["itemdetails"][number], keyof CUserMessage_UtilMsg_Response_ItemDetail>]: never; })[] & { [K_3 in Exclude<keyof I["itemdetails"], keyof {
            index?: number;
            hash?: number;
            crc?: number;
            name?: string;
        }[]>]: never; };
        itemgroup?: number;
    } & { [K_4 in Exclude<keyof I, keyof CUserMessage_UtilMsg_Response>]: never; }>(base?: I): CUserMessage_UtilMsg_Response;
    fromPartial<I_1 extends {
        crc?: number;
        item_count?: number;
        crc2?: number;
        item_count2?: number;
        crc_part?: number[];
        crc_part2?: number[];
        client_timestamp?: number;
        platform?: number;
        itemdetails?: {
            index?: number;
            hash?: number;
            crc?: number;
            name?: string;
        }[];
        itemgroup?: number;
    } & {
        crc?: number;
        item_count?: number;
        crc2?: number;
        item_count2?: number;
        crc_part?: number[] & number[] & { [K_5 in Exclude<keyof I_1["crc_part"], keyof number[]>]: never; };
        crc_part2?: number[] & number[] & { [K_6 in Exclude<keyof I_1["crc_part2"], keyof number[]>]: never; };
        client_timestamp?: number;
        platform?: number;
        itemdetails?: {
            index?: number;
            hash?: number;
            crc?: number;
            name?: string;
        }[] & ({
            index?: number;
            hash?: number;
            crc?: number;
            name?: string;
        } & {
            index?: number;
            hash?: number;
            crc?: number;
            name?: string;
        } & { [K_7 in Exclude<keyof I_1["itemdetails"][number], keyof CUserMessage_UtilMsg_Response_ItemDetail>]: never; })[] & { [K_8 in Exclude<keyof I_1["itemdetails"], keyof {
            index?: number;
            hash?: number;
            crc?: number;
            name?: string;
        }[]>]: never; };
        itemgroup?: number;
    } & { [K_9 in Exclude<keyof I_1, keyof CUserMessage_UtilMsg_Response>]: never; }>(object: I_1): CUserMessage_UtilMsg_Response;
};
export declare const CUserMessage_UtilMsg_Response_ItemDetail: {
    fromJSON(object: any): CUserMessage_UtilMsg_Response_ItemDetail;
    toJSON(message: CUserMessage_UtilMsg_Response_ItemDetail): unknown;
    create<I extends {
        index?: number;
        hash?: number;
        crc?: number;
        name?: string;
    } & {
        index?: number;
        hash?: number;
        crc?: number;
        name?: string;
    } & { [K in Exclude<keyof I, keyof CUserMessage_UtilMsg_Response_ItemDetail>]: never; }>(base?: I): CUserMessage_UtilMsg_Response_ItemDetail;
    fromPartial<I_1 extends {
        index?: number;
        hash?: number;
        crc?: number;
        name?: string;
    } & {
        index?: number;
        hash?: number;
        crc?: number;
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessage_UtilMsg_Response_ItemDetail>]: never; }>(object: I_1): CUserMessage_UtilMsg_Response_ItemDetail;
};
export declare const CUserMessage_DllStatus: {
    fromJSON(object: any): CUserMessage_DllStatus;
    toJSON(message: CUserMessage_DllStatus): unknown;
    create<I extends {
        file_report?: string;
        command_line?: string;
        total_files?: number;
        process_id?: number;
        osversion?: number;
        client_time?: string;
        diagnostics?: {
            id?: number;
            extended?: number;
            value?: string;
            string_value?: string;
        }[];
    } & {
        file_report?: string;
        command_line?: string;
        total_files?: number;
        process_id?: number;
        osversion?: number;
        client_time?: string;
        diagnostics?: {
            id?: number;
            extended?: number;
            value?: string;
            string_value?: string;
        }[] & ({
            id?: number;
            extended?: number;
            value?: string;
            string_value?: string;
        } & {
            id?: number;
            extended?: number;
            value?: string;
            string_value?: string;
        } & { [K in Exclude<keyof I["diagnostics"][number], keyof CUserMessage_DllStatus_CVDiagnostic>]: never; })[] & { [K_1 in Exclude<keyof I["diagnostics"], keyof {
            id?: number;
            extended?: number;
            value?: string;
            string_value?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CUserMessage_DllStatus>]: never; }>(base?: I): CUserMessage_DllStatus;
    fromPartial<I_1 extends {
        file_report?: string;
        command_line?: string;
        total_files?: number;
        process_id?: number;
        osversion?: number;
        client_time?: string;
        diagnostics?: {
            id?: number;
            extended?: number;
            value?: string;
            string_value?: string;
        }[];
    } & {
        file_report?: string;
        command_line?: string;
        total_files?: number;
        process_id?: number;
        osversion?: number;
        client_time?: string;
        diagnostics?: {
            id?: number;
            extended?: number;
            value?: string;
            string_value?: string;
        }[] & ({
            id?: number;
            extended?: number;
            value?: string;
            string_value?: string;
        } & {
            id?: number;
            extended?: number;
            value?: string;
            string_value?: string;
        } & { [K_3 in Exclude<keyof I_1["diagnostics"][number], keyof CUserMessage_DllStatus_CVDiagnostic>]: never; })[] & { [K_4 in Exclude<keyof I_1["diagnostics"], keyof {
            id?: number;
            extended?: number;
            value?: string;
            string_value?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CUserMessage_DllStatus>]: never; }>(object: I_1): CUserMessage_DllStatus;
};
export declare const CUserMessage_DllStatus_CVDiagnostic: {
    fromJSON(object: any): CUserMessage_DllStatus_CVDiagnostic;
    toJSON(message: CUserMessage_DllStatus_CVDiagnostic): unknown;
    create<I extends {
        id?: number;
        extended?: number;
        value?: string;
        string_value?: string;
    } & {
        id?: number;
        extended?: number;
        value?: string;
        string_value?: string;
    } & { [K in Exclude<keyof I, keyof CUserMessage_DllStatus_CVDiagnostic>]: never; }>(base?: I): CUserMessage_DllStatus_CVDiagnostic;
    fromPartial<I_1 extends {
        id?: number;
        extended?: number;
        value?: string;
        string_value?: string;
    } & {
        id?: number;
        extended?: number;
        value?: string;
        string_value?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessage_DllStatus_CVDiagnostic>]: never; }>(object: I_1): CUserMessage_DllStatus_CVDiagnostic;
};
export declare const CUserMessageRequestInventory: {
    fromJSON(object: any): CUserMessageRequestInventory;
    toJSON(message: CUserMessageRequestInventory): unknown;
    create<I extends {
        inventory?: number;
        offset?: number;
        options?: number;
    } & {
        inventory?: number;
        offset?: number;
        options?: number;
    } & { [K in Exclude<keyof I, keyof CUserMessageRequestInventory>]: never; }>(base?: I): CUserMessageRequestInventory;
    fromPartial<I_1 extends {
        inventory?: number;
        offset?: number;
        options?: number;
    } & {
        inventory?: number;
        offset?: number;
        options?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessageRequestInventory>]: never; }>(object: I_1): CUserMessageRequestInventory;
};
export declare const CUserMessage_Inventory_Response: {
    fromJSON(object: any): CUserMessage_Inventory_Response;
    toJSON(message: CUserMessage_Inventory_Response): unknown;
    create<I extends {
        crc?: number;
        item_count?: number;
        osversion?: number;
        perf_time?: number;
        client_timestamp?: number;
        platform?: number;
        inventories?: {
            index?: number;
            primary?: string;
            offset?: string;
            first?: string;
            base?: string;
            name?: string;
            base_name?: string;
            base_detail?: number;
            base_time?: number;
            base_hash?: number;
        }[];
        inventories2?: {
            index?: number;
            primary?: string;
            offset?: string;
            first?: string;
            base?: string;
            name?: string;
            base_name?: string;
            base_detail?: number;
            base_time?: number;
            base_hash?: number;
        }[];
        inv_type?: number;
        build_version?: number;
    } & {
        crc?: number;
        item_count?: number;
        osversion?: number;
        perf_time?: number;
        client_timestamp?: number;
        platform?: number;
        inventories?: {
            index?: number;
            primary?: string;
            offset?: string;
            first?: string;
            base?: string;
            name?: string;
            base_name?: string;
            base_detail?: number;
            base_time?: number;
            base_hash?: number;
        }[] & ({
            index?: number;
            primary?: string;
            offset?: string;
            first?: string;
            base?: string;
            name?: string;
            base_name?: string;
            base_detail?: number;
            base_time?: number;
            base_hash?: number;
        } & {
            index?: number;
            primary?: string;
            offset?: string;
            first?: string;
            base?: string;
            name?: string;
            base_name?: string;
            base_detail?: number;
            base_time?: number;
            base_hash?: number;
        } & { [K in Exclude<keyof I["inventories"][number], keyof CUserMessage_Inventory_Response_InventoryDetail>]: never; })[] & { [K_1 in Exclude<keyof I["inventories"], keyof {
            index?: number;
            primary?: string;
            offset?: string;
            first?: string;
            base?: string;
            name?: string;
            base_name?: string;
            base_detail?: number;
            base_time?: number;
            base_hash?: number;
        }[]>]: never; };
        inventories2?: {
            index?: number;
            primary?: string;
            offset?: string;
            first?: string;
            base?: string;
            name?: string;
            base_name?: string;
            base_detail?: number;
            base_time?: number;
            base_hash?: number;
        }[] & ({
            index?: number;
            primary?: string;
            offset?: string;
            first?: string;
            base?: string;
            name?: string;
            base_name?: string;
            base_detail?: number;
            base_time?: number;
            base_hash?: number;
        } & {
            index?: number;
            primary?: string;
            offset?: string;
            first?: string;
            base?: string;
            name?: string;
            base_name?: string;
            base_detail?: number;
            base_time?: number;
            base_hash?: number;
        } & { [K_2 in Exclude<keyof I["inventories2"][number], keyof CUserMessage_Inventory_Response_InventoryDetail>]: never; })[] & { [K_3 in Exclude<keyof I["inventories2"], keyof {
            index?: number;
            primary?: string;
            offset?: string;
            first?: string;
            base?: string;
            name?: string;
            base_name?: string;
            base_detail?: number;
            base_time?: number;
            base_hash?: number;
        }[]>]: never; };
        inv_type?: number;
        build_version?: number;
    } & { [K_4 in Exclude<keyof I, keyof CUserMessage_Inventory_Response>]: never; }>(base?: I): CUserMessage_Inventory_Response;
    fromPartial<I_1 extends {
        crc?: number;
        item_count?: number;
        osversion?: number;
        perf_time?: number;
        client_timestamp?: number;
        platform?: number;
        inventories?: {
            index?: number;
            primary?: string;
            offset?: string;
            first?: string;
            base?: string;
            name?: string;
            base_name?: string;
            base_detail?: number;
            base_time?: number;
            base_hash?: number;
        }[];
        inventories2?: {
            index?: number;
            primary?: string;
            offset?: string;
            first?: string;
            base?: string;
            name?: string;
            base_name?: string;
            base_detail?: number;
            base_time?: number;
            base_hash?: number;
        }[];
        inv_type?: number;
        build_version?: number;
    } & {
        crc?: number;
        item_count?: number;
        osversion?: number;
        perf_time?: number;
        client_timestamp?: number;
        platform?: number;
        inventories?: {
            index?: number;
            primary?: string;
            offset?: string;
            first?: string;
            base?: string;
            name?: string;
            base_name?: string;
            base_detail?: number;
            base_time?: number;
            base_hash?: number;
        }[] & ({
            index?: number;
            primary?: string;
            offset?: string;
            first?: string;
            base?: string;
            name?: string;
            base_name?: string;
            base_detail?: number;
            base_time?: number;
            base_hash?: number;
        } & {
            index?: number;
            primary?: string;
            offset?: string;
            first?: string;
            base?: string;
            name?: string;
            base_name?: string;
            base_detail?: number;
            base_time?: number;
            base_hash?: number;
        } & { [K_5 in Exclude<keyof I_1["inventories"][number], keyof CUserMessage_Inventory_Response_InventoryDetail>]: never; })[] & { [K_6 in Exclude<keyof I_1["inventories"], keyof {
            index?: number;
            primary?: string;
            offset?: string;
            first?: string;
            base?: string;
            name?: string;
            base_name?: string;
            base_detail?: number;
            base_time?: number;
            base_hash?: number;
        }[]>]: never; };
        inventories2?: {
            index?: number;
            primary?: string;
            offset?: string;
            first?: string;
            base?: string;
            name?: string;
            base_name?: string;
            base_detail?: number;
            base_time?: number;
            base_hash?: number;
        }[] & ({
            index?: number;
            primary?: string;
            offset?: string;
            first?: string;
            base?: string;
            name?: string;
            base_name?: string;
            base_detail?: number;
            base_time?: number;
            base_hash?: number;
        } & {
            index?: number;
            primary?: string;
            offset?: string;
            first?: string;
            base?: string;
            name?: string;
            base_name?: string;
            base_detail?: number;
            base_time?: number;
            base_hash?: number;
        } & { [K_7 in Exclude<keyof I_1["inventories2"][number], keyof CUserMessage_Inventory_Response_InventoryDetail>]: never; })[] & { [K_8 in Exclude<keyof I_1["inventories2"], keyof {
            index?: number;
            primary?: string;
            offset?: string;
            first?: string;
            base?: string;
            name?: string;
            base_name?: string;
            base_detail?: number;
            base_time?: number;
            base_hash?: number;
        }[]>]: never; };
        inv_type?: number;
        build_version?: number;
    } & { [K_9 in Exclude<keyof I_1, keyof CUserMessage_Inventory_Response>]: never; }>(object: I_1): CUserMessage_Inventory_Response;
};
export declare const CUserMessage_Inventory_Response_InventoryDetail: {
    fromJSON(object: any): CUserMessage_Inventory_Response_InventoryDetail;
    toJSON(message: CUserMessage_Inventory_Response_InventoryDetail): unknown;
    create<I extends {
        index?: number;
        primary?: string;
        offset?: string;
        first?: string;
        base?: string;
        name?: string;
        base_name?: string;
        base_detail?: number;
        base_time?: number;
        base_hash?: number;
    } & {
        index?: number;
        primary?: string;
        offset?: string;
        first?: string;
        base?: string;
        name?: string;
        base_name?: string;
        base_detail?: number;
        base_time?: number;
        base_hash?: number;
    } & { [K in Exclude<keyof I, keyof CUserMessage_Inventory_Response_InventoryDetail>]: never; }>(base?: I): CUserMessage_Inventory_Response_InventoryDetail;
    fromPartial<I_1 extends {
        index?: number;
        primary?: string;
        offset?: string;
        first?: string;
        base?: string;
        name?: string;
        base_name?: string;
        base_detail?: number;
        base_time?: number;
        base_hash?: number;
    } & {
        index?: number;
        primary?: string;
        offset?: string;
        first?: string;
        base?: string;
        name?: string;
        base_name?: string;
        base_detail?: number;
        base_time?: number;
        base_hash?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CUserMessage_Inventory_Response_InventoryDetail>]: never; }>(object: I_1): CUserMessage_Inventory_Response_InventoryDetail;
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
