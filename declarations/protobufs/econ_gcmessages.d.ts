import { EGCMsgResponse } from "./econ_shared_enums";
import { CExtraMsgBlock } from "./gcsdk_gcmessages";
export declare const protobufPackage = "";
export declare enum EGCItemMsg {
    k_EMsgGCBase = 1000,
    k_EMsgGCSetItemPosition = 1001,
    k_EMsgGCDelete = 1004,
    k_EMsgGCVerifyCacheSubscription = 1005,
    k_EMsgClientToGCNameItem = 1006,
    k_EMsgGCPaintItem = 1009,
    k_EMsgGCPaintItemResponse = 1010,
    k_EMsgGCNameBaseItem = 1019,
    k_EMsgGCNameBaseItemResponse = 1020,
    k_EMsgGCUseItemRequest = 1025,
    k_EMsgGCUseItemResponse = 1026,
    k_EMsgGCGiftedItems = 1027,
    k_EMsgGCUnwrapGiftRequest = 1037,
    k_EMsgGCUnwrapGiftResponse = 1038,
    k_EMsgGCSortItems = 1041,
    k_EMsgGCBackpackSortFinished = 1058,
    k_EMsgGCAdjustItemEquippedState = 1059,
    k_EMsgGCItemAcknowledged = 1062,
    k_EMsgClientToGCNameItemResponse = 1068,
    k_EMsgGCApplyStrangePart = 1073,
    k_EMsgGCApplyPennantUpgrade = 1076,
    k_EMsgGCSetItemPositions = 1077,
    k_EMsgGCApplyEggEssence = 1078,
    k_EMsgGCNameEggEssenceResponse = 1079,
    k_EMsgGCExtractGems = 1086,
    k_EMsgGCAddSocket = 1087,
    k_EMsgGCAddItemToSocket = 1088,
    k_EMsgGCAddItemToSocketResponse = 1089,
    k_EMsgGCAddSocketResponse = 1090,
    k_EMsgGCResetStrangeGemCount = 1091,
    k_EMsgGCRequestCrateItems = 1092,
    k_EMsgGCRequestCrateItemsResponse = 1093,
    k_EMsgGCExtractGemsResponse = 1094,
    k_EMsgGCResetStrangeGemCountResponse = 1095,
    k_EMsgGCServerUseItemRequest = 1103,
    k_EMsgGCAddGiftItem = 1104,
    k_EMsgClientToGCRemoveItemGifterAttributes = 1109,
    k_EMsgClientToGCRemoveItemName = 1110,
    k_EMsgClientToGCRemoveItemDescription = 1111,
    k_EMsgClientToGCRemoveItemAttributeResponse = 1112,
    k_EMsgGCDev_NewItemRequest = 2001,
    k_EMsgGCDev_NewItemRequestResponse = 2002,
    k_EMsgGCDev_UnlockAllItemStylesRequest = 2003,
    k_EMsgGCDev_UnlockAllItemStylesResponse = 2004,
    k_EMsgGCStorePurchaseFinalize = 2504,
    k_EMsgGCStorePurchaseFinalizeResponse = 2505,
    k_EMsgGCStorePurchaseCancel = 2506,
    k_EMsgGCStorePurchaseCancelResponse = 2507,
    k_EMsgGCStorePurchaseInit = 2510,
    k_EMsgGCStorePurchaseInitResponse = 2511,
    k_EMsgGCToGCBannedWordListUpdated = 2515,
    k_EMsgGCToGCDirtySDOCache = 2516,
    k_EMsgGCToGCUpdateSQLKeyValue = 2518,
    k_EMsgGCToGCBroadcastConsoleCommand = 2521,
    k_EMsgGCServerVersionUpdated = 2522,
    k_EMsgGCApplyAutograph = 2523,
    k_EMsgGCToGCWebAPIAccountChanged = 2524,
    k_EMsgGCClientVersionUpdated = 2528,
    k_EMsgGCToGCUpdateWelcomeMsg = 2529,
    k_EMsgGCToGCPlayerStrangeCountAdjustments = 2535,
    k_EMsgGCRequestStoreSalesData = 2536,
    k_EMsgGCRequestStoreSalesDataResponse = 2537,
    k_EMsgGCRequestStoreSalesDataUpToDateResponse = 2538,
    k_EMsgGCToGCPingRequest = 2539,
    k_EMsgGCToGCPingResponse = 2540,
    k_EMsgGCToGCGetUserSessionServer = 2541,
    k_EMsgGCToGCGetUserSessionServerResponse = 2542,
    k_EMsgGCToGCGetUserServerMembers = 2543,
    k_EMsgGCToGCGetUserServerMembersResponse = 2544,
    k_EMsgGCToGCCanUseDropRateBonus = 2547,
    k_EMsgSQLAddDropRateBonus = 2548,
    k_EMsgGCToGCRefreshSOCache = 2549,
    k_EMsgGCToGCGrantAccountRolledItems = 2554,
    k_EMsgGCToGCGrantSelfMadeItemToAccount = 2555,
    k_EMsgGCStatueCraft = 2561,
    k_EMsgGCRedeemCode = 2562,
    k_EMsgGCRedeemCodeResponse = 2563,
    k_EMsgGCToGCItemConsumptionRollback = 2564,
    k_EMsgClientToGCWrapAndDeliverGift = 2565,
    k_EMsgClientToGCWrapAndDeliverGiftResponse = 2566,
    k_EMsgClientToGCUnpackBundleResponse = 2567,
    k_EMsgGCToClientStoreTransactionCompleted = 2568,
    k_EMsgClientToGCEquipItems = 2569,
    k_EMsgClientToGCEquipItemsResponse = 2570,
    k_EMsgClientToGCUnlockItemStyle = 2571,
    k_EMsgClientToGCUnlockItemStyleResponse = 2572,
    k_EMsgClientToGCSetItemInventoryCategory = 2573,
    k_EMsgClientToGCUnlockCrate = 2574,
    k_EMsgClientToGCUnlockCrateResponse = 2575,
    k_EMsgClientToGCUnpackBundle = 2576,
    k_EMsgClientToGCSetItemStyle = 2577,
    k_EMsgClientToGCSetItemStyleResponse = 2578,
    k_EMsgSQLGCToGCGrantBackpackSlots = 2580,
    k_EMsgClientToGCLookupAccountName = 2581,
    k_EMsgClientToGCLookupAccountNameResponse = 2582,
    k_EMsgClientToGCCreateStaticRecipe = 2584,
    k_EMsgClientToGCCreateStaticRecipeResponse = 2585,
    k_EMsgGCToGCStoreProcessCDKeyTransaction = 2586,
    k_EMsgGCToGCStoreProcessCDKeyTransactionResponse = 2587,
    k_EMsgGCToGCStoreProcessSettlement = 2588,
    k_EMsgGCToGCStoreProcessSettlementResponse = 2589,
    k_EMsgGCToGCConsoleOutput = 2590,
    k_EMsgGCToClientItemAges = 2591,
    k_EMsgGCToGCInternalTestMsg = 2592,
    k_EMsgGCToGCClientServerVersionsUpdated = 2593,
    k_EMsgGCUseMultipleItemsRequest = 2594,
    k_EMsgGCGetAccountSubscriptionItem = 2595,
    k_EMsgGCGetAccountSubscriptionItemResponse = 2596,
    k_EMsgGCToGCBroadcastMessageFromSub = 2598,
    k_EMsgGCToClientCurrencyPricePoints = 2599,
    k_EMsgGCToGCAddSubscriptionTime = 2600,
    k_EMsgGCToGCFlushSteamInventoryCache = 2601,
    k_EMsgGCRequestCrateEscalationLevel = 2602,
    k_EMsgGCRequestCrateEscalationLevelResponse = 2603,
    k_EMsgGCToGCUpdateSubscriptionItems = 2604,
    k_EMsgGCToGCSelfPing = 2605,
    k_EMsgGCToGCGetInfuxIntervalStats = 2606,
    k_EMsgGCToGCGetInfuxIntervalStatsResponse = 2607,
    k_EMsgGCToGCPurchaseSucceeded = 2608,
    k_EMsgClientToGCGetLimitedItemPurchaseQuantity = 2609,
    k_EMsgClientToGCGetLimitedItemPurchaseQuantityResponse = 2610,
    k_EMsgGCToGCBetaDeleteItems = 2611,
    UNRECOGNIZED = -1
}
export declare function eGCItemMsgFromJSON(object: any): EGCItemMsg;
export declare function eGCItemMsgToJSON(object: EGCItemMsg): string;
export declare enum EGCMsgInitiateTradeResponse {
    k_EGCMsgInitiateTradeResponse_Accepted = 0,
    k_EGCMsgInitiateTradeResponse_Declined = 1,
    k_EGCMsgInitiateTradeResponse_VAC_Banned_Initiator = 2,
    k_EGCMsgInitiateTradeResponse_VAC_Banned_Target = 3,
    k_EGCMsgInitiateTradeResponse_Target_Already_Trading = 4,
    k_EGCMsgInitiateTradeResponse_Disabled = 5,
    k_EGCMsgInitiateTradeResponse_NotLoggedIn = 6,
    k_EGCMsgInitiateTradeResponse_Cancel = 7,
    k_EGCMsgInitiateTradeResponse_TooSoon = 8,
    k_EGCMsgInitiateTradeResponse_TooSoonPenalty = 9,
    k_EGCMsgInitiateTradeResponse_Trade_Banned_Initiator = 10,
    k_EGCMsgInitiateTradeResponse_Trade_Banned_Target = 11,
    k_EGCMsgInitiateTradeResponse_Free_Account_Initiator_DEPRECATED = 12,
    k_EGCMsgInitiateTradeResponse_Shared_Account_Initiator = 13,
    k_EGCMsgInitiateTradeResponse_Service_Unavailable = 14,
    k_EGCMsgInitiateTradeResponse_Target_Blocked = 15,
    k_EGCMsgInitiateTradeResponse_NeedVerifiedEmail = 16,
    k_EGCMsgInitiateTradeResponse_NeedSteamGuard = 17,
    k_EGCMsgInitiateTradeResponse_SteamGuardDuration = 18,
    k_EGCMsgInitiateTradeResponse_TheyCannotTrade = 19,
    k_EGCMsgInitiateTradeResponse_Recent_Password_Reset = 20,
    k_EGCMsgInitiateTradeResponse_Using_New_Device = 21,
    k_EGCMsgInitiateTradeResponse_Sent_Invalid_Cookie = 22,
    k_EGCMsgInitiateTradeResponse_TooRecentFriend = 23,
    k_EGCMsgInitiateTradeResponse_WalledFundsNotTrusted = 24,
    UNRECOGNIZED = -1
}
export declare function eGCMsgInitiateTradeResponseFromJSON(object: any): EGCMsgInitiateTradeResponse;
export declare function eGCMsgInitiateTradeResponseToJSON(object: EGCMsgInitiateTradeResponse): string;
export interface CMsgApplyAutograph {
    autograph_item_id: string;
    item_item_id: string;
}
export interface CMsgAdjustItemEquippedState {
    item_id: string;
    new_class: number;
    new_slot: number;
    style_index: number;
}
export interface CMsgEconPlayerStrangeCountAdjustment {
    account_id: number;
    strange_count_adjustments: CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment[];
    turbo_mode: boolean;
}
export interface CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment {
    event_type: number;
    item_id: string;
    adjustment: number;
}
export interface CMsgCraftingResponse {
    item_ids: string[];
}
export interface CMsgGCRequestStoreSalesData {
    version: number;
    currency: number;
}
export interface CMsgGCRequestStoreSalesDataResponse {
    sale_price: CMsgGCRequestStoreSalesDataResponse_Price[];
    version: number;
    expiration_time: number;
}
export interface CMsgGCRequestStoreSalesDataResponse_Price {
    item_def: number;
    price: number;
}
export interface CMsgGCRequestStoreSalesDataUpToDateResponse {
    version: number;
    expiration_time: number;
}
export interface CMsgGCToGCPingRequest {
}
export interface CMsgGCToGCPingResponse {
}
export interface CMsgGCToGCGetUserSessionServer {
    account_id: number;
}
export interface CMsgGCToGCGetUserSessionServerResponse {
    server_steam_id: string;
    is_online: boolean;
}
export interface CMsgGCToGCGetUserServerMembers {
    account_id: number;
    max_spectators: number;
}
export interface CMsgGCToGCGetUserServerMembersResponse {
    member_account_id: number[];
}
export interface CMsgLookupMultipleAccountNames {
    accountids: number[];
}
export interface CMsgLookupMultipleAccountNamesResponse {
    accounts: CMsgLookupMultipleAccountNamesResponse_Account[];
}
export interface CMsgLookupMultipleAccountNamesResponse_Account {
    accountid: number;
    persona: string;
}
export interface CMsgRequestCrateItems {
    crate_item_def: number;
}
export interface CMsgRequestCrateItemsResponse {
    response: number;
    item_defs: number[];
    peek_item_defs: number[];
}
export declare enum CMsgRequestCrateItemsResponse_EResult {
    k_Succeeded = 0,
    k_Failed = 1,
    UNRECOGNIZED = -1
}
export declare function cMsgRequestCrateItemsResponse_EResultFromJSON(object: any): CMsgRequestCrateItemsResponse_EResult;
export declare function cMsgRequestCrateItemsResponse_EResultToJSON(object: CMsgRequestCrateItemsResponse_EResult): string;
export interface CMsgRequestCrateEscalationLevel {
    crate_item_def: number;
}
export interface CMsgRequestCrateEscalationLevelResponse {
    response: number;
    escalation_level0: number;
    escalation_level1: number;
    escalation_level2: number;
    escalation_level3: number;
}
export declare enum CMsgRequestCrateEscalationLevelResponse_EResult {
    k_Succeeded = 0,
    k_Failed = 1,
    UNRECOGNIZED = -1
}
export declare function cMsgRequestCrateEscalationLevelResponse_EResultFromJSON(object: any): CMsgRequestCrateEscalationLevelResponse_EResult;
export declare function cMsgRequestCrateEscalationLevelResponse_EResultToJSON(object: CMsgRequestCrateEscalationLevelResponse_EResult): string;
export interface CMsgGCToGCCanUseDropRateBonus {
    account_id: number;
    drop_rate_bonus: number;
    booster_type: number;
    exclusive_item_def: number;
    allow_equal_rate: boolean;
}
export interface CMsgSQLAddDropRateBonus {
    account_id: number;
    item_id: string;
    item_def: number;
    drop_rate_bonus: number;
    booster_type: number;
    seconds_duration: number;
    end_time_stamp: number;
}
export interface CMsgSQLUpgradeBattleBooster {
    account_id: number;
    item_def: number;
    bonus_to_add: number;
    booster_type: number;
}
export interface CMsgGCToGCRefreshSOCache {
    account_id: number;
    reload: boolean;
}
export interface CMsgGCToGCAddSubscriptionTime {
    account_id: number;
    matching_subscription_def_indexes: number[];
    additional_seconds: number;
}
export interface CMsgGCToGCGrantAccountRolledItems {
    account_id: number;
    items: CMsgGCToGCGrantAccountRolledItems_Item[];
    audit_action: number;
    audit_data: string;
}
export interface CMsgGCToGCGrantAccountRolledItems_Item {
    item_def: number;
    loot_lists: string[];
    ignore_limit: boolean;
    origin: number;
    dynamic_attributes: CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute[];
    additional_audit_entries: CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry[];
    inventory_token: number;
}
export interface CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute {
    name: string;
    value_uint32: number;
    value_float: number;
    value_string: string;
}
export interface CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry {
    owner_account_id: number;
    audit_action: number;
    audit_data: string;
}
export interface CMsgGCToGCBetaDeleteItems {
    account_id: number;
    item_ids: string[];
    item_defs: number[];
}
export interface CMsgGCToGCGrantSelfMadeItemToAccount {
    item_def_index: number;
    accountid: number;
}
export interface CMsgUseItem {
    item_id: string;
    target_steam_id: string;
    gift__potential_targets: number[];
    duel__class_lock: number;
    initiator_steam_id: string;
    itempack__ack_immediately: boolean;
}
export interface CMsgServerUseItem {
    initiator_account_id: number;
    use_item_msg: CMsgUseItem | undefined;
}
export interface CMsgUseMultipleItems {
    item_ids: string[];
}
export interface CGCStoreRechargeRedirect_LineItem {
    item_def_id: number;
    quantity: number;
}
export interface CMsgGCEconSQLWorkItemEmbeddedRollbackData {
    account_id: number;
    deleted_item_id: string;
    old_audit_action: number;
    new_audit_action: number;
    expected_audit_action: number;
}
export interface CMsgCraftStatue {
    heroid: number;
    sequencename: string;
    cycle: number;
    description: string;
    pedestal_itemdef: number;
    toolid: string;
}
export interface CMsgRedeemCode {
    code: string;
}
export interface CMsgRedeemCodeResponse {
    response: number;
    item_id: string;
}
export declare enum CMsgRedeemCodeResponse_EResultCode {
    k_Succeeded = 0,
    k_Failed_CodeNotFound = 1,
    k_Failed_CodeAlreadyUsed = 2,
    k_Failed_OtherError = 3,
    UNRECOGNIZED = -1
}
export declare function cMsgRedeemCodeResponse_EResultCodeFromJSON(object: any): CMsgRedeemCodeResponse_EResultCode;
export declare function cMsgRedeemCodeResponse_EResultCodeToJSON(object: CMsgRedeemCodeResponse_EResultCode): string;
export interface CMsgDevNewItemRequest {
    item_def_name: string;
    loot_list_name: string;
    attr_def_name: string[];
    attr_value: string[];
    item_quality: number;
}
export interface CMsgDevNewItemRequestResponse {
    success: boolean;
}
export interface CMsgDevUnlockAllItemStyles {
    item_id: string;
}
export interface CMsgDevUnlockAllItemStylesResponse {
    success: boolean;
}
export interface CMsgGCGetAccountSubscriptionItem {
    account_id: number;
}
export interface CMsgGCGetAccountSubscriptionItemResponse {
    def_index: number;
}
export interface CMsgGCAddGiftItem {
    account_id: number;
    item_id: string;
}
export interface CMsgClientToGCWrapAndDeliverGift {
    item_id: string;
    give_to_account_id: number;
    gift_message: string;
}
export interface CMsgClientToGCWrapAndDeliverGiftResponse {
    response: EGCMsgResponse;
    gifting_charge_uses: number;
    gifting_charge_max: number;
    gifting_uses: number;
    gifting_max: number;
    gifting_window_hours: number;
    trade_restriction: EGCMsgInitiateTradeResponse;
}
export interface CMsgClientToGCUnwrapGift {
    item_id: string;
}
export interface CMsgClientToGCGetGiftPermissions {
}
export interface CMsgClientToGCGetGiftPermissionsResponse {
    is_unlimited: boolean;
    has_two_factor: boolean;
    sender_permission: EGCMsgInitiateTradeResponse;
    friendship_age_requirement: number;
    friendship_age_requirement_two_factor: number;
    friend_permissions: CMsgClientToGCGetGiftPermissionsResponse_FriendPermission[];
}
export interface CMsgClientToGCGetGiftPermissionsResponse_FriendPermission {
    account_id: number;
    permission: EGCMsgInitiateTradeResponse;
}
export interface CMsgClientToGCUnpackBundle {
    item_id: string;
}
export interface CMsgClientToGCUnpackBundleResponse {
    unpacked_item_ids: string[];
    response: CMsgClientToGCUnpackBundleResponse_EUnpackBundle;
    unpacked_item_def_indexes: number[];
}
export declare enum CMsgClientToGCUnpackBundleResponse_EUnpackBundle {
    k_UnpackBundle_Succeeded = 0,
    k_UnpackBundle_Failed_ItemIsNotBundle = 1,
    k_UnpackBundle_Failed_UnableToCreateContainedItem = 2,
    k_UnpackBundle_Failed_SOCacheError = 3,
    k_UnpackBundle_Failed_ItemIsInvalid = 4,
    k_UnpackBundle_Failed_BadItemQuantity = 5,
    k_UnpackBundle_Failed_UnableToDeleteItem = 6,
    UNRECOGNIZED = -1
}
export declare function cMsgClientToGCUnpackBundleResponse_EUnpackBundleFromJSON(object: any): CMsgClientToGCUnpackBundleResponse_EUnpackBundle;
export declare function cMsgClientToGCUnpackBundleResponse_EUnpackBundleToJSON(object: CMsgClientToGCUnpackBundleResponse_EUnpackBundle): string;
export interface CMsgGCToClientStoreTransactionCompleted {
    txn_id: string;
    item_ids: string[];
}
export interface CMsgClientToGCEquipItems {
    equips: CMsgAdjustItemEquippedState[];
}
export interface CMsgClientToGCEquipItemsResponse {
    so_cache_version_id: string;
}
export interface CMsgClientToGCSetItemStyle {
    item_id: string;
    style_index: number;
}
export interface CMsgClientToGCSetItemStyleResponse {
    response: CMsgClientToGCSetItemStyleResponse_ESetStyle;
}
export declare enum CMsgClientToGCSetItemStyleResponse_ESetStyle {
    k_SetStyle_Succeeded = 0,
    k_SetStyle_Failed = 1,
    k_SetStyle_Failed_StyleIsLocked = 2,
    UNRECOGNIZED = -1
}
export declare function cMsgClientToGCSetItemStyleResponse_ESetStyleFromJSON(object: any): CMsgClientToGCSetItemStyleResponse_ESetStyle;
export declare function cMsgClientToGCSetItemStyleResponse_ESetStyleToJSON(object: CMsgClientToGCSetItemStyleResponse_ESetStyle): string;
export interface CMsgClientToGCUnlockItemStyle {
    item_to_unlock: string;
    style_index: number;
    consumable_item_ids: string[];
}
export interface CMsgClientToGCUnlockItemStyleResponse {
    response: CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle;
    item_id: string;
    style_index: number;
    style_prereq: number;
}
export declare enum CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle {
    k_UnlockStyle_Succeeded = 0,
    k_UnlockStyle_Failed_PreReq = 1,
    k_UnlockStyle_Failed_CantAfford = 2,
    k_UnlockStyle_Failed_CantCommit = 3,
    k_UnlockStyle_Failed_CantLockCache = 4,
    k_UnlockStyle_Failed_CantAffordAttrib = 5,
    k_UnlockStyle_Failed_CantAffordGem = 6,
    k_UnlockStyle_Failed_NoCompendiumLevel = 7,
    k_UnlockStyle_Failed_AlreadyUnlocked = 8,
    k_UnlockStyle_Failed_OtherError = 9,
    k_UnlockStyle_Failed_ItemIsInvalid = 10,
    k_UnlockStyle_Failed_ToolIsInvalid = 11,
    UNRECOGNIZED = -1
}
export declare function cMsgClientToGCUnlockItemStyleResponse_EUnlockStyleFromJSON(object: any): CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle;
export declare function cMsgClientToGCUnlockItemStyleResponse_EUnlockStyleToJSON(object: CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle): string;
export interface CMsgClientToGCSetItemInventoryCategory {
    item_ids: string[];
    set_to_value: number;
    remove_categories: number;
    add_categories: number;
}
export interface CMsgClientToGCUnlockCrate {
    crate_item_id: string;
    key_item_id: string;
}
export interface CMsgClientToGCUnlockCrateResponse {
    result: EGCMsgResponse;
    granted_items: CMsgClientToGCUnlockCrateResponse_Item[];
}
export interface CMsgClientToGCUnlockCrateResponse_Item {
    item_id: string;
    def_index: number;
}
export interface CMsgClientToGCRemoveItemAttribute {
    item_id: string;
}
export interface CMsgClientToGCRemoveItemAttributeResponse {
    response: CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute;
    item_id: string;
}
export declare enum CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute {
    k_RemoveItemAttribute_Succeeded = 0,
    k_RemoveItemAttribute_Failed = 1,
    k_RemoveItemAttribute_Failed_ItemIsInvalid = 2,
    k_RemoveItemAttribute_Failed_AttributeCannotBeRemoved = 3,
    k_RemoveItemAttribute_Failed_AttributeDoesntExist = 4,
    UNRECOGNIZED = -1
}
export declare function cMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttributeFromJSON(object: any): CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute;
export declare function cMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttributeToJSON(object: CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute): string;
export interface CMsgClientToGCNameItem {
    subject_item_id: string;
    tool_item_id: string;
    name: string;
}
export interface CMsgClientToGCNameItemResponse {
    response: CMsgClientToGCNameItemResponse_ENameItem;
    item_id: string;
}
export declare enum CMsgClientToGCNameItemResponse_ENameItem {
    k_NameItem_Succeeded = 0,
    k_NameItem_Failed = 1,
    k_NameItem_Failed_ToolIsInvalid = 2,
    k_NameItem_Failed_ItemIsInvalid = 3,
    k_NameItem_Failed_NameIsInvalid = 4,
    UNRECOGNIZED = -1
}
export declare function cMsgClientToGCNameItemResponse_ENameItemFromJSON(object: any): CMsgClientToGCNameItemResponse_ENameItem;
export declare function cMsgClientToGCNameItemResponse_ENameItemToJSON(object: CMsgClientToGCNameItemResponse_ENameItem): string;
export interface CMsgGCSetItemPosition {
    item_id: string;
    new_position: number;
}
export interface CAttribute_ItemDynamicRecipeComponent {
    item_def: number;
    item_quality: number;
    item_flags: number;
    attributes_string: string;
    item_count: number;
    items_fulfilled: number;
    item_rarity: number;
    lootlist: string;
    fulfilled_item_id: string;
    associated_item_def: number;
}
export interface CProtoItemSocket {
    item_id: string;
    attr_def_index: number;
    required_type: number;
    required_hero: string;
    gem_def_index: number;
    not_tradable: boolean;
    required_item_slot: string;
}
export interface CProtoItemSocket_Empty {
    socket: CProtoItemSocket | undefined;
}
export interface CProtoItemSocket_Effect {
    socket: CProtoItemSocket | undefined;
    effect: number;
}
export interface CProtoItemSocket_Color {
    socket: CProtoItemSocket | undefined;
    red: number;
    green: number;
    blue: number;
}
export interface CProtoItemSocket_Strange {
    socket: CProtoItemSocket | undefined;
    strange_type: number;
    strange_value: number;
}
export interface CProtoItemSocket_Strange_DESERIALIZE_FROM_STRING_ONLY {
    socket: CProtoItemSocket | undefined;
    strange_type: number;
    strange_value: number;
    ability_effect: number;
}
export interface CProtoItemSocket_Spectator {
    socket: CProtoItemSocket | undefined;
    games_viewed: number;
    corporation_id: number;
    league_id: number;
    team_id: number;
}
export interface CProtoItemSocket_AssetModifier {
    socket: CProtoItemSocket | undefined;
    asset_modifier: number;
}
export interface CProtoItemSocket_AssetModifier_DESERIALIZE_FROM_STRING_ONLY {
    socket: CProtoItemSocket | undefined;
    asset_modifier: number;
    anim_modifier: number;
    ability_effect: number;
}
export interface CProtoItemSocket_Autograph {
    socket: CProtoItemSocket | undefined;
    autograph: string;
    autograph_id: number;
    autograph_score: number;
}
export interface CProtoItemSocket_StaticVisuals {
    socket: CProtoItemSocket | undefined;
}
export interface CAttribute_String {
    value: string;
}
export interface CWorkshop_GetItemDailyRevenue_Request {
    appid: number;
    item_id: number;
    date_start: number;
    date_end: number;
}
export interface CWorkshop_GetItemDailyRevenue_Response {
    country_revenue: CWorkshop_GetItemDailyRevenue_Response_CountryDailyRevenue[];
}
export interface CWorkshop_GetItemDailyRevenue_Response_CountryDailyRevenue {
    country_code: string;
    date: number;
    revenue_usd: string;
    units: number;
}
export interface CWorkshop_GetPackageDailyRevenue_Request {
    packageid: number;
    date_start: number;
    date_end: number;
}
export interface CWorkshop_GetPackageDailyRevenue_Response {
    country_revenue: CWorkshop_GetPackageDailyRevenue_Response_CountryDailyRevenue[];
}
export interface CWorkshop_GetPackageDailyRevenue_Response_CountryDailyRevenue {
    country_code: string;
    date: number;
    revenue_usd: string;
    units: number;
}
export interface CMsgSQLGCToGCGrantBackpackSlots {
    account_id: number;
    add_slots: number;
}
export interface CMsgClientToGCLookupAccountName {
    account_id: number;
}
export interface CMsgClientToGCLookupAccountNameResponse {
    account_id: number;
    account_name: string;
}
export interface CMsgClientToGCCreateStaticRecipe {
    items: CMsgClientToGCCreateStaticRecipe_Item[];
    recipe_def_index: number;
}
export interface CMsgClientToGCCreateStaticRecipe_Item {
    item_id: string;
    slot_id: number;
}
export interface CMsgClientToGCCreateStaticRecipeResponse {
    response: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
    output_items: CMsgClientToGCCreateStaticRecipeResponse_OutputItem[];
    input_errors: CMsgClientToGCCreateStaticRecipeResponse_InputError[];
    additional_outputs: CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput[];
}
export declare enum CMsgClientToGCCreateStaticRecipeResponse_EResponse {
    eResponse_Success = 0,
    eResponse_OfferingDisabled = 1,
    eResponse_InvalidItems = 2,
    eResponse_InternalError = 3,
    eResponse_MissingLeague = 4,
    eResponse_MissingEvent = 5,
    UNRECOGNIZED = -1
}
export declare function cMsgClientToGCCreateStaticRecipeResponse_EResponseFromJSON(object: any): CMsgClientToGCCreateStaticRecipeResponse_EResponse;
export declare function cMsgClientToGCCreateStaticRecipeResponse_EResponseToJSON(object: CMsgClientToGCCreateStaticRecipeResponse_EResponse): string;
export interface CMsgClientToGCCreateStaticRecipeResponse_OutputItem {
    def_index: number;
    item_id: string;
    slot_id: number;
}
export interface CMsgClientToGCCreateStaticRecipeResponse_InputError {
    slot_id: number;
    error: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
}
export interface CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput {
    slot_id: number;
    value: string;
}
export interface CMsgProcessTransactionOrder {
    txn_id: string;
    steam_txn_id: string;
    partner_txn_id: string;
    steam_id: string;
    time_stamp: number;
    watermark: string;
    purchase_report_status: number;
    currency: number;
    items: CMsgProcessTransactionOrder_Item[];
}
export interface CMsgProcessTransactionOrder_Item {
    item_def_index: number;
    item_price: number;
    quantity: number;
    category_desc: string;
    store_purchase_type: number;
    source_reference_id: string;
    parent_stack_index: number;
    default_price: boolean;
    is_user_facing: boolean;
}
export interface CMsgGCToGCStoreProcessCDKeyTransaction {
    order: CMsgProcessTransactionOrder | undefined;
    reason_code: number;
    partner: number;
}
export interface CMsgGCToGCStoreProcessCDKeyTransactionResponse {
    success: boolean;
}
export interface CMsgGCToGCStoreProcessSettlement {
    order: CMsgProcessTransactionOrder | undefined;
}
export interface CMsgGCToGCStoreProcessSettlementResponse {
    success: boolean;
}
export interface CMsgGCToGCBroadcastConsoleCommand {
    con_command: string;
    report_output: boolean;
    sending_gc: number;
    output_initiator: string;
}
export interface CMsgGCToGCConsoleOutput {
    initiator: string;
    sending_gc: number;
    msgs: CMsgGCToGCConsoleOutput_OutputLine[];
    is_last_for_source_job: boolean;
}
export interface CMsgGCToGCConsoleOutput_OutputLine {
    text: string;
    spew_level: number;
}
export interface CMsgItemAges {
    max_item_id_timestamps: CMsgItemAges_MaxItemIDTimestamp[];
}
export interface CMsgItemAges_MaxItemIDTimestamp {
    timestamp: number;
    max_item_id: string;
}
export interface CMsgGCToGCInternalTestMsg {
    sending_gc: number;
    sender_id: string;
    context: number;
    message_id: number;
    message_body: string;
    job_id_source: string;
    job_id_target: string;
}
export interface CMsgGCToGCClientServerVersionsUpdated {
    client_min_allowed_version: number;
    client_active_version: number;
    server_active_version: number;
    server_deployed_version: number;
    what_changed: number;
}
export interface CMsgGCToGCBroadcastMessageFromSub {
    msg_id: number;
    serialized_msg: string;
    account_id_list: number[];
    steam_id_list: string[];
}
export interface CMsgGCToClientCurrencyPricePoints {
    price_key: string[];
    currencies: CMsgGCToClientCurrencyPricePoints_Currency[];
}
export interface CMsgGCToClientCurrencyPricePoints_Currency {
    currency_id: number;
    currency_price: string[];
}
export interface CMsgBannedWordList {
    version: number;
    banned_words: string[];
}
export interface CMsgGCToGCFlushSteamInventoryCache {
    keys: CMsgGCToGCFlushSteamInventoryCache_Key[];
}
export interface CMsgGCToGCFlushSteamInventoryCache_Key {
    steamid: string;
    contextid: string;
}
export interface CMsgGCToGCUpdateSubscriptionItems {
    account_id: number;
    always_notify: boolean;
}
export interface CMsgGCToGCSelfPing {
    sample_id: number;
}
export interface CMsgGCToGCGetInfuxIntervalStats {
}
export interface CMsgGCToGCGetInfuxIntervalStatsResponse {
    stat_ids: number[];
    stat_total: string[];
    stat_samples: number[];
    stat_max: number[];
    sample_duration_ms: number;
}
export interface CMsgGCToGCPurchaseSucceeded {
}
export interface CMsgClientToGCGetLimitedItemPurchaseQuantity {
    item_def: number;
}
export interface CMsgClientToGCGetLimitedItemPurchaseQuantityResponse {
    result: CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse;
    quantity_purchased: number;
}
export declare enum CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidItemDef = 5,
    k_eItemDefNotLimited = 6,
    UNRECOGNIZED = -1
}
export declare function cMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponseFromJSON(object: any): CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse;
export declare function cMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponseToJSON(object: CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse): string;
export interface CMsgGCToGCUpdateWelcomeMsg {
    server: boolean;
    new_msg: CExtraMsgBlock | undefined;
    broadcast: boolean;
}
export declare const CMsgApplyAutograph: {
    fromJSON(object: any): CMsgApplyAutograph;
    toJSON(message: CMsgApplyAutograph): unknown;
    create<I extends {
        autograph_item_id?: string;
        item_item_id?: string;
    } & {
        autograph_item_id?: string;
        item_item_id?: string;
    } & { [K in Exclude<keyof I, keyof CMsgApplyAutograph>]: never; }>(base?: I): CMsgApplyAutograph;
    fromPartial<I_1 extends {
        autograph_item_id?: string;
        item_item_id?: string;
    } & {
        autograph_item_id?: string;
        item_item_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgApplyAutograph>]: never; }>(object: I_1): CMsgApplyAutograph;
};
export declare const CMsgAdjustItemEquippedState: {
    fromJSON(object: any): CMsgAdjustItemEquippedState;
    toJSON(message: CMsgAdjustItemEquippedState): unknown;
    create<I extends {
        item_id?: string;
        new_class?: number;
        new_slot?: number;
        style_index?: number;
    } & {
        item_id?: string;
        new_class?: number;
        new_slot?: number;
        style_index?: number;
    } & { [K in Exclude<keyof I, keyof CMsgAdjustItemEquippedState>]: never; }>(base?: I): CMsgAdjustItemEquippedState;
    fromPartial<I_1 extends {
        item_id?: string;
        new_class?: number;
        new_slot?: number;
        style_index?: number;
    } & {
        item_id?: string;
        new_class?: number;
        new_slot?: number;
        style_index?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgAdjustItemEquippedState>]: never; }>(object: I_1): CMsgAdjustItemEquippedState;
};
export declare const CMsgEconPlayerStrangeCountAdjustment: {
    fromJSON(object: any): CMsgEconPlayerStrangeCountAdjustment;
    toJSON(message: CMsgEconPlayerStrangeCountAdjustment): unknown;
    create<I extends {
        account_id?: number;
        strange_count_adjustments?: {
            event_type?: number;
            item_id?: string;
            adjustment?: number;
        }[];
        turbo_mode?: boolean;
    } & {
        account_id?: number;
        strange_count_adjustments?: {
            event_type?: number;
            item_id?: string;
            adjustment?: number;
        }[] & ({
            event_type?: number;
            item_id?: string;
            adjustment?: number;
        } & {
            event_type?: number;
            item_id?: string;
            adjustment?: number;
        } & { [K in Exclude<keyof I["strange_count_adjustments"][number], keyof CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment>]: never; })[] & { [K_1 in Exclude<keyof I["strange_count_adjustments"], keyof {
            event_type?: number;
            item_id?: string;
            adjustment?: number;
        }[]>]: never; };
        turbo_mode?: boolean;
    } & { [K_2 in Exclude<keyof I, keyof CMsgEconPlayerStrangeCountAdjustment>]: never; }>(base?: I): CMsgEconPlayerStrangeCountAdjustment;
    fromPartial<I_1 extends {
        account_id?: number;
        strange_count_adjustments?: {
            event_type?: number;
            item_id?: string;
            adjustment?: number;
        }[];
        turbo_mode?: boolean;
    } & {
        account_id?: number;
        strange_count_adjustments?: {
            event_type?: number;
            item_id?: string;
            adjustment?: number;
        }[] & ({
            event_type?: number;
            item_id?: string;
            adjustment?: number;
        } & {
            event_type?: number;
            item_id?: string;
            adjustment?: number;
        } & { [K_3 in Exclude<keyof I_1["strange_count_adjustments"][number], keyof CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment>]: never; })[] & { [K_4 in Exclude<keyof I_1["strange_count_adjustments"], keyof {
            event_type?: number;
            item_id?: string;
            adjustment?: number;
        }[]>]: never; };
        turbo_mode?: boolean;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgEconPlayerStrangeCountAdjustment>]: never; }>(object: I_1): CMsgEconPlayerStrangeCountAdjustment;
};
export declare const CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment: {
    fromJSON(object: any): CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment;
    toJSON(message: CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment): unknown;
    create<I extends {
        event_type?: number;
        item_id?: string;
        adjustment?: number;
    } & {
        event_type?: number;
        item_id?: string;
        adjustment?: number;
    } & { [K in Exclude<keyof I, keyof CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment>]: never; }>(base?: I): CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment;
    fromPartial<I_1 extends {
        event_type?: number;
        item_id?: string;
        adjustment?: number;
    } & {
        event_type?: number;
        item_id?: string;
        adjustment?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment>]: never; }>(object: I_1): CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment;
};
export declare const CMsgCraftingResponse: {
    fromJSON(object: any): CMsgCraftingResponse;
    toJSON(message: CMsgCraftingResponse): unknown;
    create<I extends {
        item_ids?: string[];
    } & {
        item_ids?: string[] & string[] & { [K in Exclude<keyof I["item_ids"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, "item_ids">]: never; }>(base?: I): CMsgCraftingResponse;
    fromPartial<I_1 extends {
        item_ids?: string[];
    } & {
        item_ids?: string[] & string[] & { [K_2 in Exclude<keyof I_1["item_ids"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "item_ids">]: never; }>(object: I_1): CMsgCraftingResponse;
};
export declare const CMsgGCRequestStoreSalesData: {
    fromJSON(object: any): CMsgGCRequestStoreSalesData;
    toJSON(message: CMsgGCRequestStoreSalesData): unknown;
    create<I extends {
        version?: number;
        currency?: number;
    } & {
        version?: number;
        currency?: number;
    } & { [K in Exclude<keyof I, keyof CMsgGCRequestStoreSalesData>]: never; }>(base?: I): CMsgGCRequestStoreSalesData;
    fromPartial<I_1 extends {
        version?: number;
        currency?: number;
    } & {
        version?: number;
        currency?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCRequestStoreSalesData>]: never; }>(object: I_1): CMsgGCRequestStoreSalesData;
};
export declare const CMsgGCRequestStoreSalesDataResponse: {
    fromJSON(object: any): CMsgGCRequestStoreSalesDataResponse;
    toJSON(message: CMsgGCRequestStoreSalesDataResponse): unknown;
    create<I extends {
        sale_price?: {
            item_def?: number;
            price?: number;
        }[];
        version?: number;
        expiration_time?: number;
    } & {
        sale_price?: {
            item_def?: number;
            price?: number;
        }[] & ({
            item_def?: number;
            price?: number;
        } & {
            item_def?: number;
            price?: number;
        } & { [K in Exclude<keyof I["sale_price"][number], keyof CMsgGCRequestStoreSalesDataResponse_Price>]: never; })[] & { [K_1 in Exclude<keyof I["sale_price"], keyof {
            item_def?: number;
            price?: number;
        }[]>]: never; };
        version?: number;
        expiration_time?: number;
    } & { [K_2 in Exclude<keyof I, keyof CMsgGCRequestStoreSalesDataResponse>]: never; }>(base?: I): CMsgGCRequestStoreSalesDataResponse;
    fromPartial<I_1 extends {
        sale_price?: {
            item_def?: number;
            price?: number;
        }[];
        version?: number;
        expiration_time?: number;
    } & {
        sale_price?: {
            item_def?: number;
            price?: number;
        }[] & ({
            item_def?: number;
            price?: number;
        } & {
            item_def?: number;
            price?: number;
        } & { [K_3 in Exclude<keyof I_1["sale_price"][number], keyof CMsgGCRequestStoreSalesDataResponse_Price>]: never; })[] & { [K_4 in Exclude<keyof I_1["sale_price"], keyof {
            item_def?: number;
            price?: number;
        }[]>]: never; };
        version?: number;
        expiration_time?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgGCRequestStoreSalesDataResponse>]: never; }>(object: I_1): CMsgGCRequestStoreSalesDataResponse;
};
export declare const CMsgGCRequestStoreSalesDataResponse_Price: {
    fromJSON(object: any): CMsgGCRequestStoreSalesDataResponse_Price;
    toJSON(message: CMsgGCRequestStoreSalesDataResponse_Price): unknown;
    create<I extends {
        item_def?: number;
        price?: number;
    } & {
        item_def?: number;
        price?: number;
    } & { [K in Exclude<keyof I, keyof CMsgGCRequestStoreSalesDataResponse_Price>]: never; }>(base?: I): CMsgGCRequestStoreSalesDataResponse_Price;
    fromPartial<I_1 extends {
        item_def?: number;
        price?: number;
    } & {
        item_def?: number;
        price?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCRequestStoreSalesDataResponse_Price>]: never; }>(object: I_1): CMsgGCRequestStoreSalesDataResponse_Price;
};
export declare const CMsgGCRequestStoreSalesDataUpToDateResponse: {
    fromJSON(object: any): CMsgGCRequestStoreSalesDataUpToDateResponse;
    toJSON(message: CMsgGCRequestStoreSalesDataUpToDateResponse): unknown;
    create<I extends {
        version?: number;
        expiration_time?: number;
    } & {
        version?: number;
        expiration_time?: number;
    } & { [K in Exclude<keyof I, keyof CMsgGCRequestStoreSalesDataUpToDateResponse>]: never; }>(base?: I): CMsgGCRequestStoreSalesDataUpToDateResponse;
    fromPartial<I_1 extends {
        version?: number;
        expiration_time?: number;
    } & {
        version?: number;
        expiration_time?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCRequestStoreSalesDataUpToDateResponse>]: never; }>(object: I_1): CMsgGCRequestStoreSalesDataUpToDateResponse;
};
export declare const CMsgGCToGCPingRequest: {
    fromJSON(_: any): CMsgGCToGCPingRequest;
    toJSON(_: CMsgGCToGCPingRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgGCToGCPingRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgGCToGCPingRequest;
};
export declare const CMsgGCToGCPingResponse: {
    fromJSON(_: any): CMsgGCToGCPingResponse;
    toJSON(_: CMsgGCToGCPingResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgGCToGCPingResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgGCToGCPingResponse;
};
export declare const CMsgGCToGCGetUserSessionServer: {
    fromJSON(object: any): CMsgGCToGCGetUserSessionServer;
    toJSON(message: CMsgGCToGCGetUserSessionServer): unknown;
    create<I extends {
        account_id?: number;
    } & {
        account_id?: number;
    } & { [K in Exclude<keyof I, "account_id">]: never; }>(base?: I): CMsgGCToGCGetUserSessionServer;
    fromPartial<I_1 extends {
        account_id?: number;
    } & {
        account_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "account_id">]: never; }>(object: I_1): CMsgGCToGCGetUserSessionServer;
};
export declare const CMsgGCToGCGetUserSessionServerResponse: {
    fromJSON(object: any): CMsgGCToGCGetUserSessionServerResponse;
    toJSON(message: CMsgGCToGCGetUserSessionServerResponse): unknown;
    create<I extends {
        server_steam_id?: string;
        is_online?: boolean;
    } & {
        server_steam_id?: string;
        is_online?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCGetUserSessionServerResponse>]: never; }>(base?: I): CMsgGCToGCGetUserSessionServerResponse;
    fromPartial<I_1 extends {
        server_steam_id?: string;
        is_online?: boolean;
    } & {
        server_steam_id?: string;
        is_online?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCGetUserSessionServerResponse>]: never; }>(object: I_1): CMsgGCToGCGetUserSessionServerResponse;
};
export declare const CMsgGCToGCGetUserServerMembers: {
    fromJSON(object: any): CMsgGCToGCGetUserServerMembers;
    toJSON(message: CMsgGCToGCGetUserServerMembers): unknown;
    create<I extends {
        account_id?: number;
        max_spectators?: number;
    } & {
        account_id?: number;
        max_spectators?: number;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCGetUserServerMembers>]: never; }>(base?: I): CMsgGCToGCGetUserServerMembers;
    fromPartial<I_1 extends {
        account_id?: number;
        max_spectators?: number;
    } & {
        account_id?: number;
        max_spectators?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCGetUserServerMembers>]: never; }>(object: I_1): CMsgGCToGCGetUserServerMembers;
};
export declare const CMsgGCToGCGetUserServerMembersResponse: {
    fromJSON(object: any): CMsgGCToGCGetUserServerMembersResponse;
    toJSON(message: CMsgGCToGCGetUserServerMembersResponse): unknown;
    create<I extends {
        member_account_id?: number[];
    } & {
        member_account_id?: number[] & number[] & { [K in Exclude<keyof I["member_account_id"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, "member_account_id">]: never; }>(base?: I): CMsgGCToGCGetUserServerMembersResponse;
    fromPartial<I_1 extends {
        member_account_id?: number[];
    } & {
        member_account_id?: number[] & number[] & { [K_2 in Exclude<keyof I_1["member_account_id"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "member_account_id">]: never; }>(object: I_1): CMsgGCToGCGetUserServerMembersResponse;
};
export declare const CMsgLookupMultipleAccountNames: {
    fromJSON(object: any): CMsgLookupMultipleAccountNames;
    toJSON(message: CMsgLookupMultipleAccountNames): unknown;
    create<I extends {
        accountids?: number[];
    } & {
        accountids?: number[] & number[] & { [K in Exclude<keyof I["accountids"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, "accountids">]: never; }>(base?: I): CMsgLookupMultipleAccountNames;
    fromPartial<I_1 extends {
        accountids?: number[];
    } & {
        accountids?: number[] & number[] & { [K_2 in Exclude<keyof I_1["accountids"], keyof number[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "accountids">]: never; }>(object: I_1): CMsgLookupMultipleAccountNames;
};
export declare const CMsgLookupMultipleAccountNamesResponse: {
    fromJSON(object: any): CMsgLookupMultipleAccountNamesResponse;
    toJSON(message: CMsgLookupMultipleAccountNamesResponse): unknown;
    create<I extends {
        accounts?: {
            accountid?: number;
            persona?: string;
        }[];
    } & {
        accounts?: {
            accountid?: number;
            persona?: string;
        }[] & ({
            accountid?: number;
            persona?: string;
        } & {
            accountid?: number;
            persona?: string;
        } & { [K in Exclude<keyof I["accounts"][number], keyof CMsgLookupMultipleAccountNamesResponse_Account>]: never; })[] & { [K_1 in Exclude<keyof I["accounts"], keyof {
            accountid?: number;
            persona?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "accounts">]: never; }>(base?: I): CMsgLookupMultipleAccountNamesResponse;
    fromPartial<I_1 extends {
        accounts?: {
            accountid?: number;
            persona?: string;
        }[];
    } & {
        accounts?: {
            accountid?: number;
            persona?: string;
        }[] & ({
            accountid?: number;
            persona?: string;
        } & {
            accountid?: number;
            persona?: string;
        } & { [K_3 in Exclude<keyof I_1["accounts"][number], keyof CMsgLookupMultipleAccountNamesResponse_Account>]: never; })[] & { [K_4 in Exclude<keyof I_1["accounts"], keyof {
            accountid?: number;
            persona?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "accounts">]: never; }>(object: I_1): CMsgLookupMultipleAccountNamesResponse;
};
export declare const CMsgLookupMultipleAccountNamesResponse_Account: {
    fromJSON(object: any): CMsgLookupMultipleAccountNamesResponse_Account;
    toJSON(message: CMsgLookupMultipleAccountNamesResponse_Account): unknown;
    create<I extends {
        accountid?: number;
        persona?: string;
    } & {
        accountid?: number;
        persona?: string;
    } & { [K in Exclude<keyof I, keyof CMsgLookupMultipleAccountNamesResponse_Account>]: never; }>(base?: I): CMsgLookupMultipleAccountNamesResponse_Account;
    fromPartial<I_1 extends {
        accountid?: number;
        persona?: string;
    } & {
        accountid?: number;
        persona?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgLookupMultipleAccountNamesResponse_Account>]: never; }>(object: I_1): CMsgLookupMultipleAccountNamesResponse_Account;
};
export declare const CMsgRequestCrateItems: {
    fromJSON(object: any): CMsgRequestCrateItems;
    toJSON(message: CMsgRequestCrateItems): unknown;
    create<I extends {
        crate_item_def?: number;
    } & {
        crate_item_def?: number;
    } & { [K in Exclude<keyof I, "crate_item_def">]: never; }>(base?: I): CMsgRequestCrateItems;
    fromPartial<I_1 extends {
        crate_item_def?: number;
    } & {
        crate_item_def?: number;
    } & { [K_1 in Exclude<keyof I_1, "crate_item_def">]: never; }>(object: I_1): CMsgRequestCrateItems;
};
export declare const CMsgRequestCrateItemsResponse: {
    fromJSON(object: any): CMsgRequestCrateItemsResponse;
    toJSON(message: CMsgRequestCrateItemsResponse): unknown;
    create<I extends {
        response?: number;
        item_defs?: number[];
        peek_item_defs?: number[];
    } & {
        response?: number;
        item_defs?: number[] & number[] & { [K in Exclude<keyof I["item_defs"], keyof number[]>]: never; };
        peek_item_defs?: number[] & number[] & { [K_1 in Exclude<keyof I["peek_item_defs"], keyof number[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgRequestCrateItemsResponse>]: never; }>(base?: I): CMsgRequestCrateItemsResponse;
    fromPartial<I_1 extends {
        response?: number;
        item_defs?: number[];
        peek_item_defs?: number[];
    } & {
        response?: number;
        item_defs?: number[] & number[] & { [K_3 in Exclude<keyof I_1["item_defs"], keyof number[]>]: never; };
        peek_item_defs?: number[] & number[] & { [K_4 in Exclude<keyof I_1["peek_item_defs"], keyof number[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgRequestCrateItemsResponse>]: never; }>(object: I_1): CMsgRequestCrateItemsResponse;
};
export declare const CMsgRequestCrateEscalationLevel: {
    fromJSON(object: any): CMsgRequestCrateEscalationLevel;
    toJSON(message: CMsgRequestCrateEscalationLevel): unknown;
    create<I extends {
        crate_item_def?: number;
    } & {
        crate_item_def?: number;
    } & { [K in Exclude<keyof I, "crate_item_def">]: never; }>(base?: I): CMsgRequestCrateEscalationLevel;
    fromPartial<I_1 extends {
        crate_item_def?: number;
    } & {
        crate_item_def?: number;
    } & { [K_1 in Exclude<keyof I_1, "crate_item_def">]: never; }>(object: I_1): CMsgRequestCrateEscalationLevel;
};
export declare const CMsgRequestCrateEscalationLevelResponse: {
    fromJSON(object: any): CMsgRequestCrateEscalationLevelResponse;
    toJSON(message: CMsgRequestCrateEscalationLevelResponse): unknown;
    create<I extends {
        response?: number;
        escalation_level0?: number;
        escalation_level1?: number;
        escalation_level2?: number;
        escalation_level3?: number;
    } & {
        response?: number;
        escalation_level0?: number;
        escalation_level1?: number;
        escalation_level2?: number;
        escalation_level3?: number;
    } & { [K in Exclude<keyof I, keyof CMsgRequestCrateEscalationLevelResponse>]: never; }>(base?: I): CMsgRequestCrateEscalationLevelResponse;
    fromPartial<I_1 extends {
        response?: number;
        escalation_level0?: number;
        escalation_level1?: number;
        escalation_level2?: number;
        escalation_level3?: number;
    } & {
        response?: number;
        escalation_level0?: number;
        escalation_level1?: number;
        escalation_level2?: number;
        escalation_level3?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgRequestCrateEscalationLevelResponse>]: never; }>(object: I_1): CMsgRequestCrateEscalationLevelResponse;
};
export declare const CMsgGCToGCCanUseDropRateBonus: {
    fromJSON(object: any): CMsgGCToGCCanUseDropRateBonus;
    toJSON(message: CMsgGCToGCCanUseDropRateBonus): unknown;
    create<I extends {
        account_id?: number;
        drop_rate_bonus?: number;
        booster_type?: number;
        exclusive_item_def?: number;
        allow_equal_rate?: boolean;
    } & {
        account_id?: number;
        drop_rate_bonus?: number;
        booster_type?: number;
        exclusive_item_def?: number;
        allow_equal_rate?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCCanUseDropRateBonus>]: never; }>(base?: I): CMsgGCToGCCanUseDropRateBonus;
    fromPartial<I_1 extends {
        account_id?: number;
        drop_rate_bonus?: number;
        booster_type?: number;
        exclusive_item_def?: number;
        allow_equal_rate?: boolean;
    } & {
        account_id?: number;
        drop_rate_bonus?: number;
        booster_type?: number;
        exclusive_item_def?: number;
        allow_equal_rate?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCCanUseDropRateBonus>]: never; }>(object: I_1): CMsgGCToGCCanUseDropRateBonus;
};
export declare const CMsgSQLAddDropRateBonus: {
    fromJSON(object: any): CMsgSQLAddDropRateBonus;
    toJSON(message: CMsgSQLAddDropRateBonus): unknown;
    create<I extends {
        account_id?: number;
        item_id?: string;
        item_def?: number;
        drop_rate_bonus?: number;
        booster_type?: number;
        seconds_duration?: number;
        end_time_stamp?: number;
    } & {
        account_id?: number;
        item_id?: string;
        item_def?: number;
        drop_rate_bonus?: number;
        booster_type?: number;
        seconds_duration?: number;
        end_time_stamp?: number;
    } & { [K in Exclude<keyof I, keyof CMsgSQLAddDropRateBonus>]: never; }>(base?: I): CMsgSQLAddDropRateBonus;
    fromPartial<I_1 extends {
        account_id?: number;
        item_id?: string;
        item_def?: number;
        drop_rate_bonus?: number;
        booster_type?: number;
        seconds_duration?: number;
        end_time_stamp?: number;
    } & {
        account_id?: number;
        item_id?: string;
        item_def?: number;
        drop_rate_bonus?: number;
        booster_type?: number;
        seconds_duration?: number;
        end_time_stamp?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgSQLAddDropRateBonus>]: never; }>(object: I_1): CMsgSQLAddDropRateBonus;
};
export declare const CMsgSQLUpgradeBattleBooster: {
    fromJSON(object: any): CMsgSQLUpgradeBattleBooster;
    toJSON(message: CMsgSQLUpgradeBattleBooster): unknown;
    create<I extends {
        account_id?: number;
        item_def?: number;
        bonus_to_add?: number;
        booster_type?: number;
    } & {
        account_id?: number;
        item_def?: number;
        bonus_to_add?: number;
        booster_type?: number;
    } & { [K in Exclude<keyof I, keyof CMsgSQLUpgradeBattleBooster>]: never; }>(base?: I): CMsgSQLUpgradeBattleBooster;
    fromPartial<I_1 extends {
        account_id?: number;
        item_def?: number;
        bonus_to_add?: number;
        booster_type?: number;
    } & {
        account_id?: number;
        item_def?: number;
        bonus_to_add?: number;
        booster_type?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgSQLUpgradeBattleBooster>]: never; }>(object: I_1): CMsgSQLUpgradeBattleBooster;
};
export declare const CMsgGCToGCRefreshSOCache: {
    fromJSON(object: any): CMsgGCToGCRefreshSOCache;
    toJSON(message: CMsgGCToGCRefreshSOCache): unknown;
    create<I extends {
        account_id?: number;
        reload?: boolean;
    } & {
        account_id?: number;
        reload?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCRefreshSOCache>]: never; }>(base?: I): CMsgGCToGCRefreshSOCache;
    fromPartial<I_1 extends {
        account_id?: number;
        reload?: boolean;
    } & {
        account_id?: number;
        reload?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCRefreshSOCache>]: never; }>(object: I_1): CMsgGCToGCRefreshSOCache;
};
export declare const CMsgGCToGCAddSubscriptionTime: {
    fromJSON(object: any): CMsgGCToGCAddSubscriptionTime;
    toJSON(message: CMsgGCToGCAddSubscriptionTime): unknown;
    create<I extends {
        account_id?: number;
        matching_subscription_def_indexes?: number[];
        additional_seconds?: number;
    } & {
        account_id?: number;
        matching_subscription_def_indexes?: number[] & number[] & { [K in Exclude<keyof I["matching_subscription_def_indexes"], keyof number[]>]: never; };
        additional_seconds?: number;
    } & { [K_1 in Exclude<keyof I, keyof CMsgGCToGCAddSubscriptionTime>]: never; }>(base?: I): CMsgGCToGCAddSubscriptionTime;
    fromPartial<I_1 extends {
        account_id?: number;
        matching_subscription_def_indexes?: number[];
        additional_seconds?: number;
    } & {
        account_id?: number;
        matching_subscription_def_indexes?: number[] & number[] & { [K_2 in Exclude<keyof I_1["matching_subscription_def_indexes"], keyof number[]>]: never; };
        additional_seconds?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgGCToGCAddSubscriptionTime>]: never; }>(object: I_1): CMsgGCToGCAddSubscriptionTime;
};
export declare const CMsgGCToGCGrantAccountRolledItems: {
    fromJSON(object: any): CMsgGCToGCGrantAccountRolledItems;
    toJSON(message: CMsgGCToGCGrantAccountRolledItems): unknown;
    create<I extends {
        account_id?: number;
        items?: {
            item_def?: number;
            loot_lists?: string[];
            ignore_limit?: boolean;
            origin?: number;
            dynamic_attributes?: {
                name?: string;
                value_uint32?: number;
                value_float?: number;
                value_string?: string;
            }[];
            additional_audit_entries?: {
                owner_account_id?: number;
                audit_action?: number;
                audit_data?: string;
            }[];
            inventory_token?: number;
        }[];
        audit_action?: number;
        audit_data?: string;
    } & {
        account_id?: number;
        items?: {
            item_def?: number;
            loot_lists?: string[];
            ignore_limit?: boolean;
            origin?: number;
            dynamic_attributes?: {
                name?: string;
                value_uint32?: number;
                value_float?: number;
                value_string?: string;
            }[];
            additional_audit_entries?: {
                owner_account_id?: number;
                audit_action?: number;
                audit_data?: string;
            }[];
            inventory_token?: number;
        }[] & ({
            item_def?: number;
            loot_lists?: string[];
            ignore_limit?: boolean;
            origin?: number;
            dynamic_attributes?: {
                name?: string;
                value_uint32?: number;
                value_float?: number;
                value_string?: string;
            }[];
            additional_audit_entries?: {
                owner_account_id?: number;
                audit_action?: number;
                audit_data?: string;
            }[];
            inventory_token?: number;
        } & {
            item_def?: number;
            loot_lists?: string[] & string[] & { [K in Exclude<keyof I["items"][number]["loot_lists"], keyof string[]>]: never; };
            ignore_limit?: boolean;
            origin?: number;
            dynamic_attributes?: {
                name?: string;
                value_uint32?: number;
                value_float?: number;
                value_string?: string;
            }[] & ({
                name?: string;
                value_uint32?: number;
                value_float?: number;
                value_string?: string;
            } & {
                name?: string;
                value_uint32?: number;
                value_float?: number;
                value_string?: string;
            } & { [K_1 in Exclude<keyof I["items"][number]["dynamic_attributes"][number], keyof CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute>]: never; })[] & { [K_2 in Exclude<keyof I["items"][number]["dynamic_attributes"], keyof {
                name?: string;
                value_uint32?: number;
                value_float?: number;
                value_string?: string;
            }[]>]: never; };
            additional_audit_entries?: {
                owner_account_id?: number;
                audit_action?: number;
                audit_data?: string;
            }[] & ({
                owner_account_id?: number;
                audit_action?: number;
                audit_data?: string;
            } & {
                owner_account_id?: number;
                audit_action?: number;
                audit_data?: string;
            } & { [K_3 in Exclude<keyof I["items"][number]["additional_audit_entries"][number], keyof CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry>]: never; })[] & { [K_4 in Exclude<keyof I["items"][number]["additional_audit_entries"], keyof {
                owner_account_id?: number;
                audit_action?: number;
                audit_data?: string;
            }[]>]: never; };
            inventory_token?: number;
        } & { [K_5 in Exclude<keyof I["items"][number], keyof CMsgGCToGCGrantAccountRolledItems_Item>]: never; })[] & { [K_6 in Exclude<keyof I["items"], keyof {
            item_def?: number;
            loot_lists?: string[];
            ignore_limit?: boolean;
            origin?: number;
            dynamic_attributes?: {
                name?: string;
                value_uint32?: number;
                value_float?: number;
                value_string?: string;
            }[];
            additional_audit_entries?: {
                owner_account_id?: number;
                audit_action?: number;
                audit_data?: string;
            }[];
            inventory_token?: number;
        }[]>]: never; };
        audit_action?: number;
        audit_data?: string;
    } & { [K_7 in Exclude<keyof I, keyof CMsgGCToGCGrantAccountRolledItems>]: never; }>(base?: I): CMsgGCToGCGrantAccountRolledItems;
    fromPartial<I_1 extends {
        account_id?: number;
        items?: {
            item_def?: number;
            loot_lists?: string[];
            ignore_limit?: boolean;
            origin?: number;
            dynamic_attributes?: {
                name?: string;
                value_uint32?: number;
                value_float?: number;
                value_string?: string;
            }[];
            additional_audit_entries?: {
                owner_account_id?: number;
                audit_action?: number;
                audit_data?: string;
            }[];
            inventory_token?: number;
        }[];
        audit_action?: number;
        audit_data?: string;
    } & {
        account_id?: number;
        items?: {
            item_def?: number;
            loot_lists?: string[];
            ignore_limit?: boolean;
            origin?: number;
            dynamic_attributes?: {
                name?: string;
                value_uint32?: number;
                value_float?: number;
                value_string?: string;
            }[];
            additional_audit_entries?: {
                owner_account_id?: number;
                audit_action?: number;
                audit_data?: string;
            }[];
            inventory_token?: number;
        }[] & ({
            item_def?: number;
            loot_lists?: string[];
            ignore_limit?: boolean;
            origin?: number;
            dynamic_attributes?: {
                name?: string;
                value_uint32?: number;
                value_float?: number;
                value_string?: string;
            }[];
            additional_audit_entries?: {
                owner_account_id?: number;
                audit_action?: number;
                audit_data?: string;
            }[];
            inventory_token?: number;
        } & {
            item_def?: number;
            loot_lists?: string[] & string[] & { [K_8 in Exclude<keyof I_1["items"][number]["loot_lists"], keyof string[]>]: never; };
            ignore_limit?: boolean;
            origin?: number;
            dynamic_attributes?: {
                name?: string;
                value_uint32?: number;
                value_float?: number;
                value_string?: string;
            }[] & ({
                name?: string;
                value_uint32?: number;
                value_float?: number;
                value_string?: string;
            } & {
                name?: string;
                value_uint32?: number;
                value_float?: number;
                value_string?: string;
            } & { [K_9 in Exclude<keyof I_1["items"][number]["dynamic_attributes"][number], keyof CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute>]: never; })[] & { [K_10 in Exclude<keyof I_1["items"][number]["dynamic_attributes"], keyof {
                name?: string;
                value_uint32?: number;
                value_float?: number;
                value_string?: string;
            }[]>]: never; };
            additional_audit_entries?: {
                owner_account_id?: number;
                audit_action?: number;
                audit_data?: string;
            }[] & ({
                owner_account_id?: number;
                audit_action?: number;
                audit_data?: string;
            } & {
                owner_account_id?: number;
                audit_action?: number;
                audit_data?: string;
            } & { [K_11 in Exclude<keyof I_1["items"][number]["additional_audit_entries"][number], keyof CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry>]: never; })[] & { [K_12 in Exclude<keyof I_1["items"][number]["additional_audit_entries"], keyof {
                owner_account_id?: number;
                audit_action?: number;
                audit_data?: string;
            }[]>]: never; };
            inventory_token?: number;
        } & { [K_13 in Exclude<keyof I_1["items"][number], keyof CMsgGCToGCGrantAccountRolledItems_Item>]: never; })[] & { [K_14 in Exclude<keyof I_1["items"], keyof {
            item_def?: number;
            loot_lists?: string[];
            ignore_limit?: boolean;
            origin?: number;
            dynamic_attributes?: {
                name?: string;
                value_uint32?: number;
                value_float?: number;
                value_string?: string;
            }[];
            additional_audit_entries?: {
                owner_account_id?: number;
                audit_action?: number;
                audit_data?: string;
            }[];
            inventory_token?: number;
        }[]>]: never; };
        audit_action?: number;
        audit_data?: string;
    } & { [K_15 in Exclude<keyof I_1, keyof CMsgGCToGCGrantAccountRolledItems>]: never; }>(object: I_1): CMsgGCToGCGrantAccountRolledItems;
};
export declare const CMsgGCToGCGrantAccountRolledItems_Item: {
    fromJSON(object: any): CMsgGCToGCGrantAccountRolledItems_Item;
    toJSON(message: CMsgGCToGCGrantAccountRolledItems_Item): unknown;
    create<I extends {
        item_def?: number;
        loot_lists?: string[];
        ignore_limit?: boolean;
        origin?: number;
        dynamic_attributes?: {
            name?: string;
            value_uint32?: number;
            value_float?: number;
            value_string?: string;
        }[];
        additional_audit_entries?: {
            owner_account_id?: number;
            audit_action?: number;
            audit_data?: string;
        }[];
        inventory_token?: number;
    } & {
        item_def?: number;
        loot_lists?: string[] & string[] & { [K in Exclude<keyof I["loot_lists"], keyof string[]>]: never; };
        ignore_limit?: boolean;
        origin?: number;
        dynamic_attributes?: {
            name?: string;
            value_uint32?: number;
            value_float?: number;
            value_string?: string;
        }[] & ({
            name?: string;
            value_uint32?: number;
            value_float?: number;
            value_string?: string;
        } & {
            name?: string;
            value_uint32?: number;
            value_float?: number;
            value_string?: string;
        } & { [K_1 in Exclude<keyof I["dynamic_attributes"][number], keyof CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute>]: never; })[] & { [K_2 in Exclude<keyof I["dynamic_attributes"], keyof {
            name?: string;
            value_uint32?: number;
            value_float?: number;
            value_string?: string;
        }[]>]: never; };
        additional_audit_entries?: {
            owner_account_id?: number;
            audit_action?: number;
            audit_data?: string;
        }[] & ({
            owner_account_id?: number;
            audit_action?: number;
            audit_data?: string;
        } & {
            owner_account_id?: number;
            audit_action?: number;
            audit_data?: string;
        } & { [K_3 in Exclude<keyof I["additional_audit_entries"][number], keyof CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry>]: never; })[] & { [K_4 in Exclude<keyof I["additional_audit_entries"], keyof {
            owner_account_id?: number;
            audit_action?: number;
            audit_data?: string;
        }[]>]: never; };
        inventory_token?: number;
    } & { [K_5 in Exclude<keyof I, keyof CMsgGCToGCGrantAccountRolledItems_Item>]: never; }>(base?: I): CMsgGCToGCGrantAccountRolledItems_Item;
    fromPartial<I_1 extends {
        item_def?: number;
        loot_lists?: string[];
        ignore_limit?: boolean;
        origin?: number;
        dynamic_attributes?: {
            name?: string;
            value_uint32?: number;
            value_float?: number;
            value_string?: string;
        }[];
        additional_audit_entries?: {
            owner_account_id?: number;
            audit_action?: number;
            audit_data?: string;
        }[];
        inventory_token?: number;
    } & {
        item_def?: number;
        loot_lists?: string[] & string[] & { [K_6 in Exclude<keyof I_1["loot_lists"], keyof string[]>]: never; };
        ignore_limit?: boolean;
        origin?: number;
        dynamic_attributes?: {
            name?: string;
            value_uint32?: number;
            value_float?: number;
            value_string?: string;
        }[] & ({
            name?: string;
            value_uint32?: number;
            value_float?: number;
            value_string?: string;
        } & {
            name?: string;
            value_uint32?: number;
            value_float?: number;
            value_string?: string;
        } & { [K_7 in Exclude<keyof I_1["dynamic_attributes"][number], keyof CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute>]: never; })[] & { [K_8 in Exclude<keyof I_1["dynamic_attributes"], keyof {
            name?: string;
            value_uint32?: number;
            value_float?: number;
            value_string?: string;
        }[]>]: never; };
        additional_audit_entries?: {
            owner_account_id?: number;
            audit_action?: number;
            audit_data?: string;
        }[] & ({
            owner_account_id?: number;
            audit_action?: number;
            audit_data?: string;
        } & {
            owner_account_id?: number;
            audit_action?: number;
            audit_data?: string;
        } & { [K_9 in Exclude<keyof I_1["additional_audit_entries"][number], keyof CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry>]: never; })[] & { [K_10 in Exclude<keyof I_1["additional_audit_entries"], keyof {
            owner_account_id?: number;
            audit_action?: number;
            audit_data?: string;
        }[]>]: never; };
        inventory_token?: number;
    } & { [K_11 in Exclude<keyof I_1, keyof CMsgGCToGCGrantAccountRolledItems_Item>]: never; }>(object: I_1): CMsgGCToGCGrantAccountRolledItems_Item;
};
export declare const CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute: {
    fromJSON(object: any): CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute;
    toJSON(message: CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute): unknown;
    create<I extends {
        name?: string;
        value_uint32?: number;
        value_float?: number;
        value_string?: string;
    } & {
        name?: string;
        value_uint32?: number;
        value_float?: number;
        value_string?: string;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute>]: never; }>(base?: I): CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute;
    fromPartial<I_1 extends {
        name?: string;
        value_uint32?: number;
        value_float?: number;
        value_string?: string;
    } & {
        name?: string;
        value_uint32?: number;
        value_float?: number;
        value_string?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute>]: never; }>(object: I_1): CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute;
};
export declare const CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry: {
    fromJSON(object: any): CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry;
    toJSON(message: CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry): unknown;
    create<I extends {
        owner_account_id?: number;
        audit_action?: number;
        audit_data?: string;
    } & {
        owner_account_id?: number;
        audit_action?: number;
        audit_data?: string;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry>]: never; }>(base?: I): CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry;
    fromPartial<I_1 extends {
        owner_account_id?: number;
        audit_action?: number;
        audit_data?: string;
    } & {
        owner_account_id?: number;
        audit_action?: number;
        audit_data?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry>]: never; }>(object: I_1): CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry;
};
export declare const CMsgGCToGCBetaDeleteItems: {
    fromJSON(object: any): CMsgGCToGCBetaDeleteItems;
    toJSON(message: CMsgGCToGCBetaDeleteItems): unknown;
    create<I extends {
        account_id?: number;
        item_ids?: string[];
        item_defs?: number[];
    } & {
        account_id?: number;
        item_ids?: string[] & string[] & { [K in Exclude<keyof I["item_ids"], keyof string[]>]: never; };
        item_defs?: number[] & number[] & { [K_1 in Exclude<keyof I["item_defs"], keyof number[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgGCToGCBetaDeleteItems>]: never; }>(base?: I): CMsgGCToGCBetaDeleteItems;
    fromPartial<I_1 extends {
        account_id?: number;
        item_ids?: string[];
        item_defs?: number[];
    } & {
        account_id?: number;
        item_ids?: string[] & string[] & { [K_3 in Exclude<keyof I_1["item_ids"], keyof string[]>]: never; };
        item_defs?: number[] & number[] & { [K_4 in Exclude<keyof I_1["item_defs"], keyof number[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgGCToGCBetaDeleteItems>]: never; }>(object: I_1): CMsgGCToGCBetaDeleteItems;
};
export declare const CMsgGCToGCGrantSelfMadeItemToAccount: {
    fromJSON(object: any): CMsgGCToGCGrantSelfMadeItemToAccount;
    toJSON(message: CMsgGCToGCGrantSelfMadeItemToAccount): unknown;
    create<I extends {
        item_def_index?: number;
        accountid?: number;
    } & {
        item_def_index?: number;
        accountid?: number;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCGrantSelfMadeItemToAccount>]: never; }>(base?: I): CMsgGCToGCGrantSelfMadeItemToAccount;
    fromPartial<I_1 extends {
        item_def_index?: number;
        accountid?: number;
    } & {
        item_def_index?: number;
        accountid?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCGrantSelfMadeItemToAccount>]: never; }>(object: I_1): CMsgGCToGCGrantSelfMadeItemToAccount;
};
export declare const CMsgUseItem: {
    fromJSON(object: any): CMsgUseItem;
    toJSON(message: CMsgUseItem): unknown;
    create<I extends {
        item_id?: string;
        target_steam_id?: string;
        gift__potential_targets?: number[];
        duel__class_lock?: number;
        initiator_steam_id?: string;
        itempack__ack_immediately?: boolean;
    } & {
        item_id?: string;
        target_steam_id?: string;
        gift__potential_targets?: number[] & number[] & { [K in Exclude<keyof I["gift__potential_targets"], keyof number[]>]: never; };
        duel__class_lock?: number;
        initiator_steam_id?: string;
        itempack__ack_immediately?: boolean;
    } & { [K_1 in Exclude<keyof I, keyof CMsgUseItem>]: never; }>(base?: I): CMsgUseItem;
    fromPartial<I_1 extends {
        item_id?: string;
        target_steam_id?: string;
        gift__potential_targets?: number[];
        duel__class_lock?: number;
        initiator_steam_id?: string;
        itempack__ack_immediately?: boolean;
    } & {
        item_id?: string;
        target_steam_id?: string;
        gift__potential_targets?: number[] & number[] & { [K_2 in Exclude<keyof I_1["gift__potential_targets"], keyof number[]>]: never; };
        duel__class_lock?: number;
        initiator_steam_id?: string;
        itempack__ack_immediately?: boolean;
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgUseItem>]: never; }>(object: I_1): CMsgUseItem;
};
export declare const CMsgServerUseItem: {
    fromJSON(object: any): CMsgServerUseItem;
    toJSON(message: CMsgServerUseItem): unknown;
    create<I extends {
        initiator_account_id?: number;
        use_item_msg?: {
            item_id?: string;
            target_steam_id?: string;
            gift__potential_targets?: number[];
            duel__class_lock?: number;
            initiator_steam_id?: string;
            itempack__ack_immediately?: boolean;
        };
    } & {
        initiator_account_id?: number;
        use_item_msg?: {
            item_id?: string;
            target_steam_id?: string;
            gift__potential_targets?: number[];
            duel__class_lock?: number;
            initiator_steam_id?: string;
            itempack__ack_immediately?: boolean;
        } & {
            item_id?: string;
            target_steam_id?: string;
            gift__potential_targets?: number[] & number[] & { [K in Exclude<keyof I["use_item_msg"]["gift__potential_targets"], keyof number[]>]: never; };
            duel__class_lock?: number;
            initiator_steam_id?: string;
            itempack__ack_immediately?: boolean;
        } & { [K_1 in Exclude<keyof I["use_item_msg"], keyof CMsgUseItem>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgServerUseItem>]: never; }>(base?: I): CMsgServerUseItem;
    fromPartial<I_1 extends {
        initiator_account_id?: number;
        use_item_msg?: {
            item_id?: string;
            target_steam_id?: string;
            gift__potential_targets?: number[];
            duel__class_lock?: number;
            initiator_steam_id?: string;
            itempack__ack_immediately?: boolean;
        };
    } & {
        initiator_account_id?: number;
        use_item_msg?: {
            item_id?: string;
            target_steam_id?: string;
            gift__potential_targets?: number[];
            duel__class_lock?: number;
            initiator_steam_id?: string;
            itempack__ack_immediately?: boolean;
        } & {
            item_id?: string;
            target_steam_id?: string;
            gift__potential_targets?: number[] & number[] & { [K_3 in Exclude<keyof I_1["use_item_msg"]["gift__potential_targets"], keyof number[]>]: never; };
            duel__class_lock?: number;
            initiator_steam_id?: string;
            itempack__ack_immediately?: boolean;
        } & { [K_4 in Exclude<keyof I_1["use_item_msg"], keyof CMsgUseItem>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgServerUseItem>]: never; }>(object: I_1): CMsgServerUseItem;
};
export declare const CMsgUseMultipleItems: {
    fromJSON(object: any): CMsgUseMultipleItems;
    toJSON(message: CMsgUseMultipleItems): unknown;
    create<I extends {
        item_ids?: string[];
    } & {
        item_ids?: string[] & string[] & { [K in Exclude<keyof I["item_ids"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, "item_ids">]: never; }>(base?: I): CMsgUseMultipleItems;
    fromPartial<I_1 extends {
        item_ids?: string[];
    } & {
        item_ids?: string[] & string[] & { [K_2 in Exclude<keyof I_1["item_ids"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "item_ids">]: never; }>(object: I_1): CMsgUseMultipleItems;
};
export declare const CGCStoreRechargeRedirect_LineItem: {
    fromJSON(object: any): CGCStoreRechargeRedirect_LineItem;
    toJSON(message: CGCStoreRechargeRedirect_LineItem): unknown;
    create<I extends {
        item_def_id?: number;
        quantity?: number;
    } & {
        item_def_id?: number;
        quantity?: number;
    } & { [K in Exclude<keyof I, keyof CGCStoreRechargeRedirect_LineItem>]: never; }>(base?: I): CGCStoreRechargeRedirect_LineItem;
    fromPartial<I_1 extends {
        item_def_id?: number;
        quantity?: number;
    } & {
        item_def_id?: number;
        quantity?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CGCStoreRechargeRedirect_LineItem>]: never; }>(object: I_1): CGCStoreRechargeRedirect_LineItem;
};
export declare const CMsgGCEconSQLWorkItemEmbeddedRollbackData: {
    fromJSON(object: any): CMsgGCEconSQLWorkItemEmbeddedRollbackData;
    toJSON(message: CMsgGCEconSQLWorkItemEmbeddedRollbackData): unknown;
    create<I extends {
        account_id?: number;
        deleted_item_id?: string;
        old_audit_action?: number;
        new_audit_action?: number;
        expected_audit_action?: number;
    } & {
        account_id?: number;
        deleted_item_id?: string;
        old_audit_action?: number;
        new_audit_action?: number;
        expected_audit_action?: number;
    } & { [K in Exclude<keyof I, keyof CMsgGCEconSQLWorkItemEmbeddedRollbackData>]: never; }>(base?: I): CMsgGCEconSQLWorkItemEmbeddedRollbackData;
    fromPartial<I_1 extends {
        account_id?: number;
        deleted_item_id?: string;
        old_audit_action?: number;
        new_audit_action?: number;
        expected_audit_action?: number;
    } & {
        account_id?: number;
        deleted_item_id?: string;
        old_audit_action?: number;
        new_audit_action?: number;
        expected_audit_action?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCEconSQLWorkItemEmbeddedRollbackData>]: never; }>(object: I_1): CMsgGCEconSQLWorkItemEmbeddedRollbackData;
};
export declare const CMsgCraftStatue: {
    fromJSON(object: any): CMsgCraftStatue;
    toJSON(message: CMsgCraftStatue): unknown;
    create<I extends {
        heroid?: number;
        sequencename?: string;
        cycle?: number;
        description?: string;
        pedestal_itemdef?: number;
        toolid?: string;
    } & {
        heroid?: number;
        sequencename?: string;
        cycle?: number;
        description?: string;
        pedestal_itemdef?: number;
        toolid?: string;
    } & { [K in Exclude<keyof I, keyof CMsgCraftStatue>]: never; }>(base?: I): CMsgCraftStatue;
    fromPartial<I_1 extends {
        heroid?: number;
        sequencename?: string;
        cycle?: number;
        description?: string;
        pedestal_itemdef?: number;
        toolid?: string;
    } & {
        heroid?: number;
        sequencename?: string;
        cycle?: number;
        description?: string;
        pedestal_itemdef?: number;
        toolid?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgCraftStatue>]: never; }>(object: I_1): CMsgCraftStatue;
};
export declare const CMsgRedeemCode: {
    fromJSON(object: any): CMsgRedeemCode;
    toJSON(message: CMsgRedeemCode): unknown;
    create<I extends {
        code?: string;
    } & {
        code?: string;
    } & { [K in Exclude<keyof I, "code">]: never; }>(base?: I): CMsgRedeemCode;
    fromPartial<I_1 extends {
        code?: string;
    } & {
        code?: string;
    } & { [K_1 in Exclude<keyof I_1, "code">]: never; }>(object: I_1): CMsgRedeemCode;
};
export declare const CMsgRedeemCodeResponse: {
    fromJSON(object: any): CMsgRedeemCodeResponse;
    toJSON(message: CMsgRedeemCodeResponse): unknown;
    create<I extends {
        response?: number;
        item_id?: string;
    } & {
        response?: number;
        item_id?: string;
    } & { [K in Exclude<keyof I, keyof CMsgRedeemCodeResponse>]: never; }>(base?: I): CMsgRedeemCodeResponse;
    fromPartial<I_1 extends {
        response?: number;
        item_id?: string;
    } & {
        response?: number;
        item_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgRedeemCodeResponse>]: never; }>(object: I_1): CMsgRedeemCodeResponse;
};
export declare const CMsgDevNewItemRequest: {
    fromJSON(object: any): CMsgDevNewItemRequest;
    toJSON(message: CMsgDevNewItemRequest): unknown;
    create<I extends {
        item_def_name?: string;
        loot_list_name?: string;
        attr_def_name?: string[];
        attr_value?: string[];
        item_quality?: number;
    } & {
        item_def_name?: string;
        loot_list_name?: string;
        attr_def_name?: string[] & string[] & { [K in Exclude<keyof I["attr_def_name"], keyof string[]>]: never; };
        attr_value?: string[] & string[] & { [K_1 in Exclude<keyof I["attr_value"], keyof string[]>]: never; };
        item_quality?: number;
    } & { [K_2 in Exclude<keyof I, keyof CMsgDevNewItemRequest>]: never; }>(base?: I): CMsgDevNewItemRequest;
    fromPartial<I_1 extends {
        item_def_name?: string;
        loot_list_name?: string;
        attr_def_name?: string[];
        attr_value?: string[];
        item_quality?: number;
    } & {
        item_def_name?: string;
        loot_list_name?: string;
        attr_def_name?: string[] & string[] & { [K_3 in Exclude<keyof I_1["attr_def_name"], keyof string[]>]: never; };
        attr_value?: string[] & string[] & { [K_4 in Exclude<keyof I_1["attr_value"], keyof string[]>]: never; };
        item_quality?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgDevNewItemRequest>]: never; }>(object: I_1): CMsgDevNewItemRequest;
};
export declare const CMsgDevNewItemRequestResponse: {
    fromJSON(object: any): CMsgDevNewItemRequestResponse;
    toJSON(message: CMsgDevNewItemRequestResponse): unknown;
    create<I extends {
        success?: boolean;
    } & {
        success?: boolean;
    } & { [K in Exclude<keyof I, "success">]: never; }>(base?: I): CMsgDevNewItemRequestResponse;
    fromPartial<I_1 extends {
        success?: boolean;
    } & {
        success?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "success">]: never; }>(object: I_1): CMsgDevNewItemRequestResponse;
};
export declare const CMsgDevUnlockAllItemStyles: {
    fromJSON(object: any): CMsgDevUnlockAllItemStyles;
    toJSON(message: CMsgDevUnlockAllItemStyles): unknown;
    create<I extends {
        item_id?: string;
    } & {
        item_id?: string;
    } & { [K in Exclude<keyof I, "item_id">]: never; }>(base?: I): CMsgDevUnlockAllItemStyles;
    fromPartial<I_1 extends {
        item_id?: string;
    } & {
        item_id?: string;
    } & { [K_1 in Exclude<keyof I_1, "item_id">]: never; }>(object: I_1): CMsgDevUnlockAllItemStyles;
};
export declare const CMsgDevUnlockAllItemStylesResponse: {
    fromJSON(object: any): CMsgDevUnlockAllItemStylesResponse;
    toJSON(message: CMsgDevUnlockAllItemStylesResponse): unknown;
    create<I extends {
        success?: boolean;
    } & {
        success?: boolean;
    } & { [K in Exclude<keyof I, "success">]: never; }>(base?: I): CMsgDevUnlockAllItemStylesResponse;
    fromPartial<I_1 extends {
        success?: boolean;
    } & {
        success?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "success">]: never; }>(object: I_1): CMsgDevUnlockAllItemStylesResponse;
};
export declare const CMsgGCGetAccountSubscriptionItem: {
    fromJSON(object: any): CMsgGCGetAccountSubscriptionItem;
    toJSON(message: CMsgGCGetAccountSubscriptionItem): unknown;
    create<I extends {
        account_id?: number;
    } & {
        account_id?: number;
    } & { [K in Exclude<keyof I, "account_id">]: never; }>(base?: I): CMsgGCGetAccountSubscriptionItem;
    fromPartial<I_1 extends {
        account_id?: number;
    } & {
        account_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "account_id">]: never; }>(object: I_1): CMsgGCGetAccountSubscriptionItem;
};
export declare const CMsgGCGetAccountSubscriptionItemResponse: {
    fromJSON(object: any): CMsgGCGetAccountSubscriptionItemResponse;
    toJSON(message: CMsgGCGetAccountSubscriptionItemResponse): unknown;
    create<I extends {
        def_index?: number;
    } & {
        def_index?: number;
    } & { [K in Exclude<keyof I, "def_index">]: never; }>(base?: I): CMsgGCGetAccountSubscriptionItemResponse;
    fromPartial<I_1 extends {
        def_index?: number;
    } & {
        def_index?: number;
    } & { [K_1 in Exclude<keyof I_1, "def_index">]: never; }>(object: I_1): CMsgGCGetAccountSubscriptionItemResponse;
};
export declare const CMsgGCAddGiftItem: {
    fromJSON(object: any): CMsgGCAddGiftItem;
    toJSON(message: CMsgGCAddGiftItem): unknown;
    create<I extends {
        account_id?: number;
        item_id?: string;
    } & {
        account_id?: number;
        item_id?: string;
    } & { [K in Exclude<keyof I, keyof CMsgGCAddGiftItem>]: never; }>(base?: I): CMsgGCAddGiftItem;
    fromPartial<I_1 extends {
        account_id?: number;
        item_id?: string;
    } & {
        account_id?: number;
        item_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCAddGiftItem>]: never; }>(object: I_1): CMsgGCAddGiftItem;
};
export declare const CMsgClientToGCWrapAndDeliverGift: {
    fromJSON(object: any): CMsgClientToGCWrapAndDeliverGift;
    toJSON(message: CMsgClientToGCWrapAndDeliverGift): unknown;
    create<I extends {
        item_id?: string;
        give_to_account_id?: number;
        gift_message?: string;
    } & {
        item_id?: string;
        give_to_account_id?: number;
        gift_message?: string;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCWrapAndDeliverGift>]: never; }>(base?: I): CMsgClientToGCWrapAndDeliverGift;
    fromPartial<I_1 extends {
        item_id?: string;
        give_to_account_id?: number;
        gift_message?: string;
    } & {
        item_id?: string;
        give_to_account_id?: number;
        gift_message?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCWrapAndDeliverGift>]: never; }>(object: I_1): CMsgClientToGCWrapAndDeliverGift;
};
export declare const CMsgClientToGCWrapAndDeliverGiftResponse: {
    fromJSON(object: any): CMsgClientToGCWrapAndDeliverGiftResponse;
    toJSON(message: CMsgClientToGCWrapAndDeliverGiftResponse): unknown;
    create<I extends {
        response?: EGCMsgResponse;
        gifting_charge_uses?: number;
        gifting_charge_max?: number;
        gifting_uses?: number;
        gifting_max?: number;
        gifting_window_hours?: number;
        trade_restriction?: EGCMsgInitiateTradeResponse;
    } & {
        response?: EGCMsgResponse;
        gifting_charge_uses?: number;
        gifting_charge_max?: number;
        gifting_uses?: number;
        gifting_max?: number;
        gifting_window_hours?: number;
        trade_restriction?: EGCMsgInitiateTradeResponse;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCWrapAndDeliverGiftResponse>]: never; }>(base?: I): CMsgClientToGCWrapAndDeliverGiftResponse;
    fromPartial<I_1 extends {
        response?: EGCMsgResponse;
        gifting_charge_uses?: number;
        gifting_charge_max?: number;
        gifting_uses?: number;
        gifting_max?: number;
        gifting_window_hours?: number;
        trade_restriction?: EGCMsgInitiateTradeResponse;
    } & {
        response?: EGCMsgResponse;
        gifting_charge_uses?: number;
        gifting_charge_max?: number;
        gifting_uses?: number;
        gifting_max?: number;
        gifting_window_hours?: number;
        trade_restriction?: EGCMsgInitiateTradeResponse;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCWrapAndDeliverGiftResponse>]: never; }>(object: I_1): CMsgClientToGCWrapAndDeliverGiftResponse;
};
export declare const CMsgClientToGCUnwrapGift: {
    fromJSON(object: any): CMsgClientToGCUnwrapGift;
    toJSON(message: CMsgClientToGCUnwrapGift): unknown;
    create<I extends {
        item_id?: string;
    } & {
        item_id?: string;
    } & { [K in Exclude<keyof I, "item_id">]: never; }>(base?: I): CMsgClientToGCUnwrapGift;
    fromPartial<I_1 extends {
        item_id?: string;
    } & {
        item_id?: string;
    } & { [K_1 in Exclude<keyof I_1, "item_id">]: never; }>(object: I_1): CMsgClientToGCUnwrapGift;
};
export declare const CMsgClientToGCGetGiftPermissions: {
    fromJSON(_: any): CMsgClientToGCGetGiftPermissions;
    toJSON(_: CMsgClientToGCGetGiftPermissions): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgClientToGCGetGiftPermissions;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgClientToGCGetGiftPermissions;
};
export declare const CMsgClientToGCGetGiftPermissionsResponse: {
    fromJSON(object: any): CMsgClientToGCGetGiftPermissionsResponse;
    toJSON(message: CMsgClientToGCGetGiftPermissionsResponse): unknown;
    create<I extends {
        is_unlimited?: boolean;
        has_two_factor?: boolean;
        sender_permission?: EGCMsgInitiateTradeResponse;
        friendship_age_requirement?: number;
        friendship_age_requirement_two_factor?: number;
        friend_permissions?: {
            account_id?: number;
            permission?: EGCMsgInitiateTradeResponse;
        }[];
    } & {
        is_unlimited?: boolean;
        has_two_factor?: boolean;
        sender_permission?: EGCMsgInitiateTradeResponse;
        friendship_age_requirement?: number;
        friendship_age_requirement_two_factor?: number;
        friend_permissions?: {
            account_id?: number;
            permission?: EGCMsgInitiateTradeResponse;
        }[] & ({
            account_id?: number;
            permission?: EGCMsgInitiateTradeResponse;
        } & {
            account_id?: number;
            permission?: EGCMsgInitiateTradeResponse;
        } & { [K in Exclude<keyof I["friend_permissions"][number], keyof CMsgClientToGCGetGiftPermissionsResponse_FriendPermission>]: never; })[] & { [K_1 in Exclude<keyof I["friend_permissions"], keyof {
            account_id?: number;
            permission?: EGCMsgInitiateTradeResponse;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgClientToGCGetGiftPermissionsResponse>]: never; }>(base?: I): CMsgClientToGCGetGiftPermissionsResponse;
    fromPartial<I_1 extends {
        is_unlimited?: boolean;
        has_two_factor?: boolean;
        sender_permission?: EGCMsgInitiateTradeResponse;
        friendship_age_requirement?: number;
        friendship_age_requirement_two_factor?: number;
        friend_permissions?: {
            account_id?: number;
            permission?: EGCMsgInitiateTradeResponse;
        }[];
    } & {
        is_unlimited?: boolean;
        has_two_factor?: boolean;
        sender_permission?: EGCMsgInitiateTradeResponse;
        friendship_age_requirement?: number;
        friendship_age_requirement_two_factor?: number;
        friend_permissions?: {
            account_id?: number;
            permission?: EGCMsgInitiateTradeResponse;
        }[] & ({
            account_id?: number;
            permission?: EGCMsgInitiateTradeResponse;
        } & {
            account_id?: number;
            permission?: EGCMsgInitiateTradeResponse;
        } & { [K_3 in Exclude<keyof I_1["friend_permissions"][number], keyof CMsgClientToGCGetGiftPermissionsResponse_FriendPermission>]: never; })[] & { [K_4 in Exclude<keyof I_1["friend_permissions"], keyof {
            account_id?: number;
            permission?: EGCMsgInitiateTradeResponse;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgClientToGCGetGiftPermissionsResponse>]: never; }>(object: I_1): CMsgClientToGCGetGiftPermissionsResponse;
};
export declare const CMsgClientToGCGetGiftPermissionsResponse_FriendPermission: {
    fromJSON(object: any): CMsgClientToGCGetGiftPermissionsResponse_FriendPermission;
    toJSON(message: CMsgClientToGCGetGiftPermissionsResponse_FriendPermission): unknown;
    create<I extends {
        account_id?: number;
        permission?: EGCMsgInitiateTradeResponse;
    } & {
        account_id?: number;
        permission?: EGCMsgInitiateTradeResponse;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCGetGiftPermissionsResponse_FriendPermission>]: never; }>(base?: I): CMsgClientToGCGetGiftPermissionsResponse_FriendPermission;
    fromPartial<I_1 extends {
        account_id?: number;
        permission?: EGCMsgInitiateTradeResponse;
    } & {
        account_id?: number;
        permission?: EGCMsgInitiateTradeResponse;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCGetGiftPermissionsResponse_FriendPermission>]: never; }>(object: I_1): CMsgClientToGCGetGiftPermissionsResponse_FriendPermission;
};
export declare const CMsgClientToGCUnpackBundle: {
    fromJSON(object: any): CMsgClientToGCUnpackBundle;
    toJSON(message: CMsgClientToGCUnpackBundle): unknown;
    create<I extends {
        item_id?: string;
    } & {
        item_id?: string;
    } & { [K in Exclude<keyof I, "item_id">]: never; }>(base?: I): CMsgClientToGCUnpackBundle;
    fromPartial<I_1 extends {
        item_id?: string;
    } & {
        item_id?: string;
    } & { [K_1 in Exclude<keyof I_1, "item_id">]: never; }>(object: I_1): CMsgClientToGCUnpackBundle;
};
export declare const CMsgClientToGCUnpackBundleResponse: {
    fromJSON(object: any): CMsgClientToGCUnpackBundleResponse;
    toJSON(message: CMsgClientToGCUnpackBundleResponse): unknown;
    create<I extends {
        unpacked_item_ids?: string[];
        response?: CMsgClientToGCUnpackBundleResponse_EUnpackBundle;
        unpacked_item_def_indexes?: number[];
    } & {
        unpacked_item_ids?: string[] & string[] & { [K in Exclude<keyof I["unpacked_item_ids"], keyof string[]>]: never; };
        response?: CMsgClientToGCUnpackBundleResponse_EUnpackBundle;
        unpacked_item_def_indexes?: number[] & number[] & { [K_1 in Exclude<keyof I["unpacked_item_def_indexes"], keyof number[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgClientToGCUnpackBundleResponse>]: never; }>(base?: I): CMsgClientToGCUnpackBundleResponse;
    fromPartial<I_1 extends {
        unpacked_item_ids?: string[];
        response?: CMsgClientToGCUnpackBundleResponse_EUnpackBundle;
        unpacked_item_def_indexes?: number[];
    } & {
        unpacked_item_ids?: string[] & string[] & { [K_3 in Exclude<keyof I_1["unpacked_item_ids"], keyof string[]>]: never; };
        response?: CMsgClientToGCUnpackBundleResponse_EUnpackBundle;
        unpacked_item_def_indexes?: number[] & number[] & { [K_4 in Exclude<keyof I_1["unpacked_item_def_indexes"], keyof number[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgClientToGCUnpackBundleResponse>]: never; }>(object: I_1): CMsgClientToGCUnpackBundleResponse;
};
export declare const CMsgGCToClientStoreTransactionCompleted: {
    fromJSON(object: any): CMsgGCToClientStoreTransactionCompleted;
    toJSON(message: CMsgGCToClientStoreTransactionCompleted): unknown;
    create<I extends {
        txn_id?: string;
        item_ids?: string[];
    } & {
        txn_id?: string;
        item_ids?: string[] & string[] & { [K in Exclude<keyof I["item_ids"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CMsgGCToClientStoreTransactionCompleted>]: never; }>(base?: I): CMsgGCToClientStoreTransactionCompleted;
    fromPartial<I_1 extends {
        txn_id?: string;
        item_ids?: string[];
    } & {
        txn_id?: string;
        item_ids?: string[] & string[] & { [K_2 in Exclude<keyof I_1["item_ids"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgGCToClientStoreTransactionCompleted>]: never; }>(object: I_1): CMsgGCToClientStoreTransactionCompleted;
};
export declare const CMsgClientToGCEquipItems: {
    fromJSON(object: any): CMsgClientToGCEquipItems;
    toJSON(message: CMsgClientToGCEquipItems): unknown;
    create<I extends {
        equips?: {
            item_id?: string;
            new_class?: number;
            new_slot?: number;
            style_index?: number;
        }[];
    } & {
        equips?: {
            item_id?: string;
            new_class?: number;
            new_slot?: number;
            style_index?: number;
        }[] & ({
            item_id?: string;
            new_class?: number;
            new_slot?: number;
            style_index?: number;
        } & {
            item_id?: string;
            new_class?: number;
            new_slot?: number;
            style_index?: number;
        } & { [K in Exclude<keyof I["equips"][number], keyof CMsgAdjustItemEquippedState>]: never; })[] & { [K_1 in Exclude<keyof I["equips"], keyof {
            item_id?: string;
            new_class?: number;
            new_slot?: number;
            style_index?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "equips">]: never; }>(base?: I): CMsgClientToGCEquipItems;
    fromPartial<I_1 extends {
        equips?: {
            item_id?: string;
            new_class?: number;
            new_slot?: number;
            style_index?: number;
        }[];
    } & {
        equips?: {
            item_id?: string;
            new_class?: number;
            new_slot?: number;
            style_index?: number;
        }[] & ({
            item_id?: string;
            new_class?: number;
            new_slot?: number;
            style_index?: number;
        } & {
            item_id?: string;
            new_class?: number;
            new_slot?: number;
            style_index?: number;
        } & { [K_3 in Exclude<keyof I_1["equips"][number], keyof CMsgAdjustItemEquippedState>]: never; })[] & { [K_4 in Exclude<keyof I_1["equips"], keyof {
            item_id?: string;
            new_class?: number;
            new_slot?: number;
            style_index?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "equips">]: never; }>(object: I_1): CMsgClientToGCEquipItems;
};
export declare const CMsgClientToGCEquipItemsResponse: {
    fromJSON(object: any): CMsgClientToGCEquipItemsResponse;
    toJSON(message: CMsgClientToGCEquipItemsResponse): unknown;
    create<I extends {
        so_cache_version_id?: string;
    } & {
        so_cache_version_id?: string;
    } & { [K in Exclude<keyof I, "so_cache_version_id">]: never; }>(base?: I): CMsgClientToGCEquipItemsResponse;
    fromPartial<I_1 extends {
        so_cache_version_id?: string;
    } & {
        so_cache_version_id?: string;
    } & { [K_1 in Exclude<keyof I_1, "so_cache_version_id">]: never; }>(object: I_1): CMsgClientToGCEquipItemsResponse;
};
export declare const CMsgClientToGCSetItemStyle: {
    fromJSON(object: any): CMsgClientToGCSetItemStyle;
    toJSON(message: CMsgClientToGCSetItemStyle): unknown;
    create<I extends {
        item_id?: string;
        style_index?: number;
    } & {
        item_id?: string;
        style_index?: number;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCSetItemStyle>]: never; }>(base?: I): CMsgClientToGCSetItemStyle;
    fromPartial<I_1 extends {
        item_id?: string;
        style_index?: number;
    } & {
        item_id?: string;
        style_index?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCSetItemStyle>]: never; }>(object: I_1): CMsgClientToGCSetItemStyle;
};
export declare const CMsgClientToGCSetItemStyleResponse: {
    fromJSON(object: any): CMsgClientToGCSetItemStyleResponse;
    toJSON(message: CMsgClientToGCSetItemStyleResponse): unknown;
    create<I extends {
        response?: CMsgClientToGCSetItemStyleResponse_ESetStyle;
    } & {
        response?: CMsgClientToGCSetItemStyleResponse_ESetStyle;
    } & { [K in Exclude<keyof I, "response">]: never; }>(base?: I): CMsgClientToGCSetItemStyleResponse;
    fromPartial<I_1 extends {
        response?: CMsgClientToGCSetItemStyleResponse_ESetStyle;
    } & {
        response?: CMsgClientToGCSetItemStyleResponse_ESetStyle;
    } & { [K_1 in Exclude<keyof I_1, "response">]: never; }>(object: I_1): CMsgClientToGCSetItemStyleResponse;
};
export declare const CMsgClientToGCUnlockItemStyle: {
    fromJSON(object: any): CMsgClientToGCUnlockItemStyle;
    toJSON(message: CMsgClientToGCUnlockItemStyle): unknown;
    create<I extends {
        item_to_unlock?: string;
        style_index?: number;
        consumable_item_ids?: string[];
    } & {
        item_to_unlock?: string;
        style_index?: number;
        consumable_item_ids?: string[] & string[] & { [K in Exclude<keyof I["consumable_item_ids"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CMsgClientToGCUnlockItemStyle>]: never; }>(base?: I): CMsgClientToGCUnlockItemStyle;
    fromPartial<I_1 extends {
        item_to_unlock?: string;
        style_index?: number;
        consumable_item_ids?: string[];
    } & {
        item_to_unlock?: string;
        style_index?: number;
        consumable_item_ids?: string[] & string[] & { [K_2 in Exclude<keyof I_1["consumable_item_ids"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgClientToGCUnlockItemStyle>]: never; }>(object: I_1): CMsgClientToGCUnlockItemStyle;
};
export declare const CMsgClientToGCUnlockItemStyleResponse: {
    fromJSON(object: any): CMsgClientToGCUnlockItemStyleResponse;
    toJSON(message: CMsgClientToGCUnlockItemStyleResponse): unknown;
    create<I extends {
        response?: CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle;
        item_id?: string;
        style_index?: number;
        style_prereq?: number;
    } & {
        response?: CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle;
        item_id?: string;
        style_index?: number;
        style_prereq?: number;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCUnlockItemStyleResponse>]: never; }>(base?: I): CMsgClientToGCUnlockItemStyleResponse;
    fromPartial<I_1 extends {
        response?: CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle;
        item_id?: string;
        style_index?: number;
        style_prereq?: number;
    } & {
        response?: CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle;
        item_id?: string;
        style_index?: number;
        style_prereq?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCUnlockItemStyleResponse>]: never; }>(object: I_1): CMsgClientToGCUnlockItemStyleResponse;
};
export declare const CMsgClientToGCSetItemInventoryCategory: {
    fromJSON(object: any): CMsgClientToGCSetItemInventoryCategory;
    toJSON(message: CMsgClientToGCSetItemInventoryCategory): unknown;
    create<I extends {
        item_ids?: string[];
        set_to_value?: number;
        remove_categories?: number;
        add_categories?: number;
    } & {
        item_ids?: string[] & string[] & { [K in Exclude<keyof I["item_ids"], keyof string[]>]: never; };
        set_to_value?: number;
        remove_categories?: number;
        add_categories?: number;
    } & { [K_1 in Exclude<keyof I, keyof CMsgClientToGCSetItemInventoryCategory>]: never; }>(base?: I): CMsgClientToGCSetItemInventoryCategory;
    fromPartial<I_1 extends {
        item_ids?: string[];
        set_to_value?: number;
        remove_categories?: number;
        add_categories?: number;
    } & {
        item_ids?: string[] & string[] & { [K_2 in Exclude<keyof I_1["item_ids"], keyof string[]>]: never; };
        set_to_value?: number;
        remove_categories?: number;
        add_categories?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgClientToGCSetItemInventoryCategory>]: never; }>(object: I_1): CMsgClientToGCSetItemInventoryCategory;
};
export declare const CMsgClientToGCUnlockCrate: {
    fromJSON(object: any): CMsgClientToGCUnlockCrate;
    toJSON(message: CMsgClientToGCUnlockCrate): unknown;
    create<I extends {
        crate_item_id?: string;
        key_item_id?: string;
    } & {
        crate_item_id?: string;
        key_item_id?: string;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCUnlockCrate>]: never; }>(base?: I): CMsgClientToGCUnlockCrate;
    fromPartial<I_1 extends {
        crate_item_id?: string;
        key_item_id?: string;
    } & {
        crate_item_id?: string;
        key_item_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCUnlockCrate>]: never; }>(object: I_1): CMsgClientToGCUnlockCrate;
};
export declare const CMsgClientToGCUnlockCrateResponse: {
    fromJSON(object: any): CMsgClientToGCUnlockCrateResponse;
    toJSON(message: CMsgClientToGCUnlockCrateResponse): unknown;
    create<I extends {
        result?: EGCMsgResponse;
        granted_items?: {
            item_id?: string;
            def_index?: number;
        }[];
    } & {
        result?: EGCMsgResponse;
        granted_items?: {
            item_id?: string;
            def_index?: number;
        }[] & ({
            item_id?: string;
            def_index?: number;
        } & {
            item_id?: string;
            def_index?: number;
        } & { [K in Exclude<keyof I["granted_items"][number], keyof CMsgClientToGCUnlockCrateResponse_Item>]: never; })[] & { [K_1 in Exclude<keyof I["granted_items"], keyof {
            item_id?: string;
            def_index?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgClientToGCUnlockCrateResponse>]: never; }>(base?: I): CMsgClientToGCUnlockCrateResponse;
    fromPartial<I_1 extends {
        result?: EGCMsgResponse;
        granted_items?: {
            item_id?: string;
            def_index?: number;
        }[];
    } & {
        result?: EGCMsgResponse;
        granted_items?: {
            item_id?: string;
            def_index?: number;
        }[] & ({
            item_id?: string;
            def_index?: number;
        } & {
            item_id?: string;
            def_index?: number;
        } & { [K_3 in Exclude<keyof I_1["granted_items"][number], keyof CMsgClientToGCUnlockCrateResponse_Item>]: never; })[] & { [K_4 in Exclude<keyof I_1["granted_items"], keyof {
            item_id?: string;
            def_index?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgClientToGCUnlockCrateResponse>]: never; }>(object: I_1): CMsgClientToGCUnlockCrateResponse;
};
export declare const CMsgClientToGCUnlockCrateResponse_Item: {
    fromJSON(object: any): CMsgClientToGCUnlockCrateResponse_Item;
    toJSON(message: CMsgClientToGCUnlockCrateResponse_Item): unknown;
    create<I extends {
        item_id?: string;
        def_index?: number;
    } & {
        item_id?: string;
        def_index?: number;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCUnlockCrateResponse_Item>]: never; }>(base?: I): CMsgClientToGCUnlockCrateResponse_Item;
    fromPartial<I_1 extends {
        item_id?: string;
        def_index?: number;
    } & {
        item_id?: string;
        def_index?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCUnlockCrateResponse_Item>]: never; }>(object: I_1): CMsgClientToGCUnlockCrateResponse_Item;
};
export declare const CMsgClientToGCRemoveItemAttribute: {
    fromJSON(object: any): CMsgClientToGCRemoveItemAttribute;
    toJSON(message: CMsgClientToGCRemoveItemAttribute): unknown;
    create<I extends {
        item_id?: string;
    } & {
        item_id?: string;
    } & { [K in Exclude<keyof I, "item_id">]: never; }>(base?: I): CMsgClientToGCRemoveItemAttribute;
    fromPartial<I_1 extends {
        item_id?: string;
    } & {
        item_id?: string;
    } & { [K_1 in Exclude<keyof I_1, "item_id">]: never; }>(object: I_1): CMsgClientToGCRemoveItemAttribute;
};
export declare const CMsgClientToGCRemoveItemAttributeResponse: {
    fromJSON(object: any): CMsgClientToGCRemoveItemAttributeResponse;
    toJSON(message: CMsgClientToGCRemoveItemAttributeResponse): unknown;
    create<I extends {
        response?: CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute;
        item_id?: string;
    } & {
        response?: CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute;
        item_id?: string;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCRemoveItemAttributeResponse>]: never; }>(base?: I): CMsgClientToGCRemoveItemAttributeResponse;
    fromPartial<I_1 extends {
        response?: CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute;
        item_id?: string;
    } & {
        response?: CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute;
        item_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCRemoveItemAttributeResponse>]: never; }>(object: I_1): CMsgClientToGCRemoveItemAttributeResponse;
};
export declare const CMsgClientToGCNameItem: {
    fromJSON(object: any): CMsgClientToGCNameItem;
    toJSON(message: CMsgClientToGCNameItem): unknown;
    create<I extends {
        subject_item_id?: string;
        tool_item_id?: string;
        name?: string;
    } & {
        subject_item_id?: string;
        tool_item_id?: string;
        name?: string;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCNameItem>]: never; }>(base?: I): CMsgClientToGCNameItem;
    fromPartial<I_1 extends {
        subject_item_id?: string;
        tool_item_id?: string;
        name?: string;
    } & {
        subject_item_id?: string;
        tool_item_id?: string;
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCNameItem>]: never; }>(object: I_1): CMsgClientToGCNameItem;
};
export declare const CMsgClientToGCNameItemResponse: {
    fromJSON(object: any): CMsgClientToGCNameItemResponse;
    toJSON(message: CMsgClientToGCNameItemResponse): unknown;
    create<I extends {
        response?: CMsgClientToGCNameItemResponse_ENameItem;
        item_id?: string;
    } & {
        response?: CMsgClientToGCNameItemResponse_ENameItem;
        item_id?: string;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCNameItemResponse>]: never; }>(base?: I): CMsgClientToGCNameItemResponse;
    fromPartial<I_1 extends {
        response?: CMsgClientToGCNameItemResponse_ENameItem;
        item_id?: string;
    } & {
        response?: CMsgClientToGCNameItemResponse_ENameItem;
        item_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCNameItemResponse>]: never; }>(object: I_1): CMsgClientToGCNameItemResponse;
};
export declare const CMsgGCSetItemPosition: {
    fromJSON(object: any): CMsgGCSetItemPosition;
    toJSON(message: CMsgGCSetItemPosition): unknown;
    create<I extends {
        item_id?: string;
        new_position?: number;
    } & {
        item_id?: string;
        new_position?: number;
    } & { [K in Exclude<keyof I, keyof CMsgGCSetItemPosition>]: never; }>(base?: I): CMsgGCSetItemPosition;
    fromPartial<I_1 extends {
        item_id?: string;
        new_position?: number;
    } & {
        item_id?: string;
        new_position?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCSetItemPosition>]: never; }>(object: I_1): CMsgGCSetItemPosition;
};
export declare const CAttribute_ItemDynamicRecipeComponent: {
    fromJSON(object: any): CAttribute_ItemDynamicRecipeComponent;
    toJSON(message: CAttribute_ItemDynamicRecipeComponent): unknown;
    create<I extends {
        item_def?: number;
        item_quality?: number;
        item_flags?: number;
        attributes_string?: string;
        item_count?: number;
        items_fulfilled?: number;
        item_rarity?: number;
        lootlist?: string;
        fulfilled_item_id?: string;
        associated_item_def?: number;
    } & {
        item_def?: number;
        item_quality?: number;
        item_flags?: number;
        attributes_string?: string;
        item_count?: number;
        items_fulfilled?: number;
        item_rarity?: number;
        lootlist?: string;
        fulfilled_item_id?: string;
        associated_item_def?: number;
    } & { [K in Exclude<keyof I, keyof CAttribute_ItemDynamicRecipeComponent>]: never; }>(base?: I): CAttribute_ItemDynamicRecipeComponent;
    fromPartial<I_1 extends {
        item_def?: number;
        item_quality?: number;
        item_flags?: number;
        attributes_string?: string;
        item_count?: number;
        items_fulfilled?: number;
        item_rarity?: number;
        lootlist?: string;
        fulfilled_item_id?: string;
        associated_item_def?: number;
    } & {
        item_def?: number;
        item_quality?: number;
        item_flags?: number;
        attributes_string?: string;
        item_count?: number;
        items_fulfilled?: number;
        item_rarity?: number;
        lootlist?: string;
        fulfilled_item_id?: string;
        associated_item_def?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CAttribute_ItemDynamicRecipeComponent>]: never; }>(object: I_1): CAttribute_ItemDynamicRecipeComponent;
};
export declare const CProtoItemSocket: {
    fromJSON(object: any): CProtoItemSocket;
    toJSON(message: CProtoItemSocket): unknown;
    create<I extends {
        item_id?: string;
        attr_def_index?: number;
        required_type?: number;
        required_hero?: string;
        gem_def_index?: number;
        not_tradable?: boolean;
        required_item_slot?: string;
    } & {
        item_id?: string;
        attr_def_index?: number;
        required_type?: number;
        required_hero?: string;
        gem_def_index?: number;
        not_tradable?: boolean;
        required_item_slot?: string;
    } & { [K in Exclude<keyof I, keyof CProtoItemSocket>]: never; }>(base?: I): CProtoItemSocket;
    fromPartial<I_1 extends {
        item_id?: string;
        attr_def_index?: number;
        required_type?: number;
        required_hero?: string;
        gem_def_index?: number;
        not_tradable?: boolean;
        required_item_slot?: string;
    } & {
        item_id?: string;
        attr_def_index?: number;
        required_type?: number;
        required_hero?: string;
        gem_def_index?: number;
        not_tradable?: boolean;
        required_item_slot?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CProtoItemSocket>]: never; }>(object: I_1): CProtoItemSocket;
};
export declare const CProtoItemSocket_Empty: {
    fromJSON(object: any): CProtoItemSocket_Empty;
    toJSON(message: CProtoItemSocket_Empty): unknown;
    create<I extends {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        };
    } & {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & { [K in Exclude<keyof I["socket"], keyof CProtoItemSocket>]: never; };
    } & { [K_1 in Exclude<keyof I, "socket">]: never; }>(base?: I): CProtoItemSocket_Empty;
    fromPartial<I_1 extends {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        };
    } & {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & { [K_2 in Exclude<keyof I_1["socket"], keyof CProtoItemSocket>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "socket">]: never; }>(object: I_1): CProtoItemSocket_Empty;
};
export declare const CProtoItemSocket_Effect: {
    fromJSON(object: any): CProtoItemSocket_Effect;
    toJSON(message: CProtoItemSocket_Effect): unknown;
    create<I extends {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        };
        effect?: number;
    } & {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & { [K in Exclude<keyof I["socket"], keyof CProtoItemSocket>]: never; };
        effect?: number;
    } & { [K_1 in Exclude<keyof I, keyof CProtoItemSocket_Effect>]: never; }>(base?: I): CProtoItemSocket_Effect;
    fromPartial<I_1 extends {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        };
        effect?: number;
    } & {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & { [K_2 in Exclude<keyof I_1["socket"], keyof CProtoItemSocket>]: never; };
        effect?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CProtoItemSocket_Effect>]: never; }>(object: I_1): CProtoItemSocket_Effect;
};
export declare const CProtoItemSocket_Color: {
    fromJSON(object: any): CProtoItemSocket_Color;
    toJSON(message: CProtoItemSocket_Color): unknown;
    create<I extends {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        };
        red?: number;
        green?: number;
        blue?: number;
    } & {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & { [K in Exclude<keyof I["socket"], keyof CProtoItemSocket>]: never; };
        red?: number;
        green?: number;
        blue?: number;
    } & { [K_1 in Exclude<keyof I, keyof CProtoItemSocket_Color>]: never; }>(base?: I): CProtoItemSocket_Color;
    fromPartial<I_1 extends {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        };
        red?: number;
        green?: number;
        blue?: number;
    } & {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & { [K_2 in Exclude<keyof I_1["socket"], keyof CProtoItemSocket>]: never; };
        red?: number;
        green?: number;
        blue?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CProtoItemSocket_Color>]: never; }>(object: I_1): CProtoItemSocket_Color;
};
export declare const CProtoItemSocket_Strange: {
    fromJSON(object: any): CProtoItemSocket_Strange;
    toJSON(message: CProtoItemSocket_Strange): unknown;
    create<I extends {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        };
        strange_type?: number;
        strange_value?: number;
    } & {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & { [K in Exclude<keyof I["socket"], keyof CProtoItemSocket>]: never; };
        strange_type?: number;
        strange_value?: number;
    } & { [K_1 in Exclude<keyof I, keyof CProtoItemSocket_Strange>]: never; }>(base?: I): CProtoItemSocket_Strange;
    fromPartial<I_1 extends {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        };
        strange_type?: number;
        strange_value?: number;
    } & {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & { [K_2 in Exclude<keyof I_1["socket"], keyof CProtoItemSocket>]: never; };
        strange_type?: number;
        strange_value?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CProtoItemSocket_Strange>]: never; }>(object: I_1): CProtoItemSocket_Strange;
};
export declare const CProtoItemSocket_Strange_DESERIALIZE_FROM_STRING_ONLY: {
    fromJSON(object: any): CProtoItemSocket_Strange_DESERIALIZE_FROM_STRING_ONLY;
    toJSON(message: CProtoItemSocket_Strange_DESERIALIZE_FROM_STRING_ONLY): unknown;
    create<I extends {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        };
        strange_type?: number;
        strange_value?: number;
        ability_effect?: number;
    } & {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & { [K in Exclude<keyof I["socket"], keyof CProtoItemSocket>]: never; };
        strange_type?: number;
        strange_value?: number;
        ability_effect?: number;
    } & { [K_1 in Exclude<keyof I, keyof CProtoItemSocket_Strange_DESERIALIZE_FROM_STRING_ONLY>]: never; }>(base?: I): CProtoItemSocket_Strange_DESERIALIZE_FROM_STRING_ONLY;
    fromPartial<I_1 extends {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        };
        strange_type?: number;
        strange_value?: number;
        ability_effect?: number;
    } & {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & { [K_2 in Exclude<keyof I_1["socket"], keyof CProtoItemSocket>]: never; };
        strange_type?: number;
        strange_value?: number;
        ability_effect?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CProtoItemSocket_Strange_DESERIALIZE_FROM_STRING_ONLY>]: never; }>(object: I_1): CProtoItemSocket_Strange_DESERIALIZE_FROM_STRING_ONLY;
};
export declare const CProtoItemSocket_Spectator: {
    fromJSON(object: any): CProtoItemSocket_Spectator;
    toJSON(message: CProtoItemSocket_Spectator): unknown;
    create<I extends {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        };
        games_viewed?: number;
        corporation_id?: number;
        league_id?: number;
        team_id?: number;
    } & {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & { [K in Exclude<keyof I["socket"], keyof CProtoItemSocket>]: never; };
        games_viewed?: number;
        corporation_id?: number;
        league_id?: number;
        team_id?: number;
    } & { [K_1 in Exclude<keyof I, keyof CProtoItemSocket_Spectator>]: never; }>(base?: I): CProtoItemSocket_Spectator;
    fromPartial<I_1 extends {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        };
        games_viewed?: number;
        corporation_id?: number;
        league_id?: number;
        team_id?: number;
    } & {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & { [K_2 in Exclude<keyof I_1["socket"], keyof CProtoItemSocket>]: never; };
        games_viewed?: number;
        corporation_id?: number;
        league_id?: number;
        team_id?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CProtoItemSocket_Spectator>]: never; }>(object: I_1): CProtoItemSocket_Spectator;
};
export declare const CProtoItemSocket_AssetModifier: {
    fromJSON(object: any): CProtoItemSocket_AssetModifier;
    toJSON(message: CProtoItemSocket_AssetModifier): unknown;
    create<I extends {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        };
        asset_modifier?: number;
    } & {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & { [K in Exclude<keyof I["socket"], keyof CProtoItemSocket>]: never; };
        asset_modifier?: number;
    } & { [K_1 in Exclude<keyof I, keyof CProtoItemSocket_AssetModifier>]: never; }>(base?: I): CProtoItemSocket_AssetModifier;
    fromPartial<I_1 extends {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        };
        asset_modifier?: number;
    } & {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & { [K_2 in Exclude<keyof I_1["socket"], keyof CProtoItemSocket>]: never; };
        asset_modifier?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CProtoItemSocket_AssetModifier>]: never; }>(object: I_1): CProtoItemSocket_AssetModifier;
};
export declare const CProtoItemSocket_AssetModifier_DESERIALIZE_FROM_STRING_ONLY: {
    fromJSON(object: any): CProtoItemSocket_AssetModifier_DESERIALIZE_FROM_STRING_ONLY;
    toJSON(message: CProtoItemSocket_AssetModifier_DESERIALIZE_FROM_STRING_ONLY): unknown;
    create<I extends {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        };
        asset_modifier?: number;
        anim_modifier?: number;
        ability_effect?: number;
    } & {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & { [K in Exclude<keyof I["socket"], keyof CProtoItemSocket>]: never; };
        asset_modifier?: number;
        anim_modifier?: number;
        ability_effect?: number;
    } & { [K_1 in Exclude<keyof I, keyof CProtoItemSocket_AssetModifier_DESERIALIZE_FROM_STRING_ONLY>]: never; }>(base?: I): CProtoItemSocket_AssetModifier_DESERIALIZE_FROM_STRING_ONLY;
    fromPartial<I_1 extends {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        };
        asset_modifier?: number;
        anim_modifier?: number;
        ability_effect?: number;
    } & {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & { [K_2 in Exclude<keyof I_1["socket"], keyof CProtoItemSocket>]: never; };
        asset_modifier?: number;
        anim_modifier?: number;
        ability_effect?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CProtoItemSocket_AssetModifier_DESERIALIZE_FROM_STRING_ONLY>]: never; }>(object: I_1): CProtoItemSocket_AssetModifier_DESERIALIZE_FROM_STRING_ONLY;
};
export declare const CProtoItemSocket_Autograph: {
    fromJSON(object: any): CProtoItemSocket_Autograph;
    toJSON(message: CProtoItemSocket_Autograph): unknown;
    create<I extends {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        };
        autograph?: string;
        autograph_id?: number;
        autograph_score?: number;
    } & {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & { [K in Exclude<keyof I["socket"], keyof CProtoItemSocket>]: never; };
        autograph?: string;
        autograph_id?: number;
        autograph_score?: number;
    } & { [K_1 in Exclude<keyof I, keyof CProtoItemSocket_Autograph>]: never; }>(base?: I): CProtoItemSocket_Autograph;
    fromPartial<I_1 extends {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        };
        autograph?: string;
        autograph_id?: number;
        autograph_score?: number;
    } & {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & { [K_2 in Exclude<keyof I_1["socket"], keyof CProtoItemSocket>]: never; };
        autograph?: string;
        autograph_id?: number;
        autograph_score?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof CProtoItemSocket_Autograph>]: never; }>(object: I_1): CProtoItemSocket_Autograph;
};
export declare const CProtoItemSocket_StaticVisuals: {
    fromJSON(object: any): CProtoItemSocket_StaticVisuals;
    toJSON(message: CProtoItemSocket_StaticVisuals): unknown;
    create<I extends {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        };
    } & {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & { [K in Exclude<keyof I["socket"], keyof CProtoItemSocket>]: never; };
    } & { [K_1 in Exclude<keyof I, "socket">]: never; }>(base?: I): CProtoItemSocket_StaticVisuals;
    fromPartial<I_1 extends {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        };
    } & {
        socket?: {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & {
            item_id?: string;
            attr_def_index?: number;
            required_type?: number;
            required_hero?: string;
            gem_def_index?: number;
            not_tradable?: boolean;
            required_item_slot?: string;
        } & { [K_2 in Exclude<keyof I_1["socket"], keyof CProtoItemSocket>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "socket">]: never; }>(object: I_1): CProtoItemSocket_StaticVisuals;
};
export declare const CAttribute_String: {
    fromJSON(object: any): CAttribute_String;
    toJSON(message: CAttribute_String): unknown;
    create<I extends {
        value?: string;
    } & {
        value?: string;
    } & { [K in Exclude<keyof I, "value">]: never; }>(base?: I): CAttribute_String;
    fromPartial<I_1 extends {
        value?: string;
    } & {
        value?: string;
    } & { [K_1 in Exclude<keyof I_1, "value">]: never; }>(object: I_1): CAttribute_String;
};
export declare const CWorkshop_GetItemDailyRevenue_Request: {
    fromJSON(object: any): CWorkshop_GetItemDailyRevenue_Request;
    toJSON(message: CWorkshop_GetItemDailyRevenue_Request): unknown;
    create<I extends {
        appid?: number;
        item_id?: number;
        date_start?: number;
        date_end?: number;
    } & {
        appid?: number;
        item_id?: number;
        date_start?: number;
        date_end?: number;
    } & { [K in Exclude<keyof I, keyof CWorkshop_GetItemDailyRevenue_Request>]: never; }>(base?: I): CWorkshop_GetItemDailyRevenue_Request;
    fromPartial<I_1 extends {
        appid?: number;
        item_id?: number;
        date_start?: number;
        date_end?: number;
    } & {
        appid?: number;
        item_id?: number;
        date_start?: number;
        date_end?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CWorkshop_GetItemDailyRevenue_Request>]: never; }>(object: I_1): CWorkshop_GetItemDailyRevenue_Request;
};
export declare const CWorkshop_GetItemDailyRevenue_Response: {
    fromJSON(object: any): CWorkshop_GetItemDailyRevenue_Response;
    toJSON(message: CWorkshop_GetItemDailyRevenue_Response): unknown;
    create<I extends {
        country_revenue?: {
            country_code?: string;
            date?: number;
            revenue_usd?: string;
            units?: number;
        }[];
    } & {
        country_revenue?: {
            country_code?: string;
            date?: number;
            revenue_usd?: string;
            units?: number;
        }[] & ({
            country_code?: string;
            date?: number;
            revenue_usd?: string;
            units?: number;
        } & {
            country_code?: string;
            date?: number;
            revenue_usd?: string;
            units?: number;
        } & { [K in Exclude<keyof I["country_revenue"][number], keyof CWorkshop_GetItemDailyRevenue_Response_CountryDailyRevenue>]: never; })[] & { [K_1 in Exclude<keyof I["country_revenue"], keyof {
            country_code?: string;
            date?: number;
            revenue_usd?: string;
            units?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "country_revenue">]: never; }>(base?: I): CWorkshop_GetItemDailyRevenue_Response;
    fromPartial<I_1 extends {
        country_revenue?: {
            country_code?: string;
            date?: number;
            revenue_usd?: string;
            units?: number;
        }[];
    } & {
        country_revenue?: {
            country_code?: string;
            date?: number;
            revenue_usd?: string;
            units?: number;
        }[] & ({
            country_code?: string;
            date?: number;
            revenue_usd?: string;
            units?: number;
        } & {
            country_code?: string;
            date?: number;
            revenue_usd?: string;
            units?: number;
        } & { [K_3 in Exclude<keyof I_1["country_revenue"][number], keyof CWorkshop_GetItemDailyRevenue_Response_CountryDailyRevenue>]: never; })[] & { [K_4 in Exclude<keyof I_1["country_revenue"], keyof {
            country_code?: string;
            date?: number;
            revenue_usd?: string;
            units?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "country_revenue">]: never; }>(object: I_1): CWorkshop_GetItemDailyRevenue_Response;
};
export declare const CWorkshop_GetItemDailyRevenue_Response_CountryDailyRevenue: {
    fromJSON(object: any): CWorkshop_GetItemDailyRevenue_Response_CountryDailyRevenue;
    toJSON(message: CWorkshop_GetItemDailyRevenue_Response_CountryDailyRevenue): unknown;
    create<I extends {
        country_code?: string;
        date?: number;
        revenue_usd?: string;
        units?: number;
    } & {
        country_code?: string;
        date?: number;
        revenue_usd?: string;
        units?: number;
    } & { [K in Exclude<keyof I, keyof CWorkshop_GetItemDailyRevenue_Response_CountryDailyRevenue>]: never; }>(base?: I): CWorkshop_GetItemDailyRevenue_Response_CountryDailyRevenue;
    fromPartial<I_1 extends {
        country_code?: string;
        date?: number;
        revenue_usd?: string;
        units?: number;
    } & {
        country_code?: string;
        date?: number;
        revenue_usd?: string;
        units?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CWorkshop_GetItemDailyRevenue_Response_CountryDailyRevenue>]: never; }>(object: I_1): CWorkshop_GetItemDailyRevenue_Response_CountryDailyRevenue;
};
export declare const CWorkshop_GetPackageDailyRevenue_Request: {
    fromJSON(object: any): CWorkshop_GetPackageDailyRevenue_Request;
    toJSON(message: CWorkshop_GetPackageDailyRevenue_Request): unknown;
    create<I extends {
        packageid?: number;
        date_start?: number;
        date_end?: number;
    } & {
        packageid?: number;
        date_start?: number;
        date_end?: number;
    } & { [K in Exclude<keyof I, keyof CWorkshop_GetPackageDailyRevenue_Request>]: never; }>(base?: I): CWorkshop_GetPackageDailyRevenue_Request;
    fromPartial<I_1 extends {
        packageid?: number;
        date_start?: number;
        date_end?: number;
    } & {
        packageid?: number;
        date_start?: number;
        date_end?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CWorkshop_GetPackageDailyRevenue_Request>]: never; }>(object: I_1): CWorkshop_GetPackageDailyRevenue_Request;
};
export declare const CWorkshop_GetPackageDailyRevenue_Response: {
    fromJSON(object: any): CWorkshop_GetPackageDailyRevenue_Response;
    toJSON(message: CWorkshop_GetPackageDailyRevenue_Response): unknown;
    create<I extends {
        country_revenue?: {
            country_code?: string;
            date?: number;
            revenue_usd?: string;
            units?: number;
        }[];
    } & {
        country_revenue?: {
            country_code?: string;
            date?: number;
            revenue_usd?: string;
            units?: number;
        }[] & ({
            country_code?: string;
            date?: number;
            revenue_usd?: string;
            units?: number;
        } & {
            country_code?: string;
            date?: number;
            revenue_usd?: string;
            units?: number;
        } & { [K in Exclude<keyof I["country_revenue"][number], keyof CWorkshop_GetPackageDailyRevenue_Response_CountryDailyRevenue>]: never; })[] & { [K_1 in Exclude<keyof I["country_revenue"], keyof {
            country_code?: string;
            date?: number;
            revenue_usd?: string;
            units?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "country_revenue">]: never; }>(base?: I): CWorkshop_GetPackageDailyRevenue_Response;
    fromPartial<I_1 extends {
        country_revenue?: {
            country_code?: string;
            date?: number;
            revenue_usd?: string;
            units?: number;
        }[];
    } & {
        country_revenue?: {
            country_code?: string;
            date?: number;
            revenue_usd?: string;
            units?: number;
        }[] & ({
            country_code?: string;
            date?: number;
            revenue_usd?: string;
            units?: number;
        } & {
            country_code?: string;
            date?: number;
            revenue_usd?: string;
            units?: number;
        } & { [K_3 in Exclude<keyof I_1["country_revenue"][number], keyof CWorkshop_GetPackageDailyRevenue_Response_CountryDailyRevenue>]: never; })[] & { [K_4 in Exclude<keyof I_1["country_revenue"], keyof {
            country_code?: string;
            date?: number;
            revenue_usd?: string;
            units?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "country_revenue">]: never; }>(object: I_1): CWorkshop_GetPackageDailyRevenue_Response;
};
export declare const CWorkshop_GetPackageDailyRevenue_Response_CountryDailyRevenue: {
    fromJSON(object: any): CWorkshop_GetPackageDailyRevenue_Response_CountryDailyRevenue;
    toJSON(message: CWorkshop_GetPackageDailyRevenue_Response_CountryDailyRevenue): unknown;
    create<I extends {
        country_code?: string;
        date?: number;
        revenue_usd?: string;
        units?: number;
    } & {
        country_code?: string;
        date?: number;
        revenue_usd?: string;
        units?: number;
    } & { [K in Exclude<keyof I, keyof CWorkshop_GetPackageDailyRevenue_Response_CountryDailyRevenue>]: never; }>(base?: I): CWorkshop_GetPackageDailyRevenue_Response_CountryDailyRevenue;
    fromPartial<I_1 extends {
        country_code?: string;
        date?: number;
        revenue_usd?: string;
        units?: number;
    } & {
        country_code?: string;
        date?: number;
        revenue_usd?: string;
        units?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CWorkshop_GetPackageDailyRevenue_Response_CountryDailyRevenue>]: never; }>(object: I_1): CWorkshop_GetPackageDailyRevenue_Response_CountryDailyRevenue;
};
export declare const CMsgSQLGCToGCGrantBackpackSlots: {
    fromJSON(object: any): CMsgSQLGCToGCGrantBackpackSlots;
    toJSON(message: CMsgSQLGCToGCGrantBackpackSlots): unknown;
    create<I extends {
        account_id?: number;
        add_slots?: number;
    } & {
        account_id?: number;
        add_slots?: number;
    } & { [K in Exclude<keyof I, keyof CMsgSQLGCToGCGrantBackpackSlots>]: never; }>(base?: I): CMsgSQLGCToGCGrantBackpackSlots;
    fromPartial<I_1 extends {
        account_id?: number;
        add_slots?: number;
    } & {
        account_id?: number;
        add_slots?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgSQLGCToGCGrantBackpackSlots>]: never; }>(object: I_1): CMsgSQLGCToGCGrantBackpackSlots;
};
export declare const CMsgClientToGCLookupAccountName: {
    fromJSON(object: any): CMsgClientToGCLookupAccountName;
    toJSON(message: CMsgClientToGCLookupAccountName): unknown;
    create<I extends {
        account_id?: number;
    } & {
        account_id?: number;
    } & { [K in Exclude<keyof I, "account_id">]: never; }>(base?: I): CMsgClientToGCLookupAccountName;
    fromPartial<I_1 extends {
        account_id?: number;
    } & {
        account_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "account_id">]: never; }>(object: I_1): CMsgClientToGCLookupAccountName;
};
export declare const CMsgClientToGCLookupAccountNameResponse: {
    fromJSON(object: any): CMsgClientToGCLookupAccountNameResponse;
    toJSON(message: CMsgClientToGCLookupAccountNameResponse): unknown;
    create<I extends {
        account_id?: number;
        account_name?: string;
    } & {
        account_id?: number;
        account_name?: string;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCLookupAccountNameResponse>]: never; }>(base?: I): CMsgClientToGCLookupAccountNameResponse;
    fromPartial<I_1 extends {
        account_id?: number;
        account_name?: string;
    } & {
        account_id?: number;
        account_name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCLookupAccountNameResponse>]: never; }>(object: I_1): CMsgClientToGCLookupAccountNameResponse;
};
export declare const CMsgClientToGCCreateStaticRecipe: {
    fromJSON(object: any): CMsgClientToGCCreateStaticRecipe;
    toJSON(message: CMsgClientToGCCreateStaticRecipe): unknown;
    create<I extends {
        items?: {
            item_id?: string;
            slot_id?: number;
        }[];
        recipe_def_index?: number;
    } & {
        items?: {
            item_id?: string;
            slot_id?: number;
        }[] & ({
            item_id?: string;
            slot_id?: number;
        } & {
            item_id?: string;
            slot_id?: number;
        } & { [K in Exclude<keyof I["items"][number], keyof CMsgClientToGCCreateStaticRecipe_Item>]: never; })[] & { [K_1 in Exclude<keyof I["items"], keyof {
            item_id?: string;
            slot_id?: number;
        }[]>]: never; };
        recipe_def_index?: number;
    } & { [K_2 in Exclude<keyof I, keyof CMsgClientToGCCreateStaticRecipe>]: never; }>(base?: I): CMsgClientToGCCreateStaticRecipe;
    fromPartial<I_1 extends {
        items?: {
            item_id?: string;
            slot_id?: number;
        }[];
        recipe_def_index?: number;
    } & {
        items?: {
            item_id?: string;
            slot_id?: number;
        }[] & ({
            item_id?: string;
            slot_id?: number;
        } & {
            item_id?: string;
            slot_id?: number;
        } & { [K_3 in Exclude<keyof I_1["items"][number], keyof CMsgClientToGCCreateStaticRecipe_Item>]: never; })[] & { [K_4 in Exclude<keyof I_1["items"], keyof {
            item_id?: string;
            slot_id?: number;
        }[]>]: never; };
        recipe_def_index?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgClientToGCCreateStaticRecipe>]: never; }>(object: I_1): CMsgClientToGCCreateStaticRecipe;
};
export declare const CMsgClientToGCCreateStaticRecipe_Item: {
    fromJSON(object: any): CMsgClientToGCCreateStaticRecipe_Item;
    toJSON(message: CMsgClientToGCCreateStaticRecipe_Item): unknown;
    create<I extends {
        item_id?: string;
        slot_id?: number;
    } & {
        item_id?: string;
        slot_id?: number;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCCreateStaticRecipe_Item>]: never; }>(base?: I): CMsgClientToGCCreateStaticRecipe_Item;
    fromPartial<I_1 extends {
        item_id?: string;
        slot_id?: number;
    } & {
        item_id?: string;
        slot_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCCreateStaticRecipe_Item>]: never; }>(object: I_1): CMsgClientToGCCreateStaticRecipe_Item;
};
export declare const CMsgClientToGCCreateStaticRecipeResponse: {
    fromJSON(object: any): CMsgClientToGCCreateStaticRecipeResponse;
    toJSON(message: CMsgClientToGCCreateStaticRecipeResponse): unknown;
    create<I extends {
        response?: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
        output_items?: {
            def_index?: number;
            item_id?: string;
            slot_id?: number;
        }[];
        input_errors?: {
            slot_id?: number;
            error?: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
        }[];
        additional_outputs?: {
            slot_id?: number;
            value?: string;
        }[];
    } & {
        response?: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
        output_items?: {
            def_index?: number;
            item_id?: string;
            slot_id?: number;
        }[] & ({
            def_index?: number;
            item_id?: string;
            slot_id?: number;
        } & {
            def_index?: number;
            item_id?: string;
            slot_id?: number;
        } & { [K in Exclude<keyof I["output_items"][number], keyof CMsgClientToGCCreateStaticRecipeResponse_OutputItem>]: never; })[] & { [K_1 in Exclude<keyof I["output_items"], keyof {
            def_index?: number;
            item_id?: string;
            slot_id?: number;
        }[]>]: never; };
        input_errors?: {
            slot_id?: number;
            error?: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
        }[] & ({
            slot_id?: number;
            error?: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
        } & {
            slot_id?: number;
            error?: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
        } & { [K_2 in Exclude<keyof I["input_errors"][number], keyof CMsgClientToGCCreateStaticRecipeResponse_InputError>]: never; })[] & { [K_3 in Exclude<keyof I["input_errors"], keyof {
            slot_id?: number;
            error?: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
        }[]>]: never; };
        additional_outputs?: {
            slot_id?: number;
            value?: string;
        }[] & ({
            slot_id?: number;
            value?: string;
        } & {
            slot_id?: number;
            value?: string;
        } & { [K_4 in Exclude<keyof I["additional_outputs"][number], keyof CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput>]: never; })[] & { [K_5 in Exclude<keyof I["additional_outputs"], keyof {
            slot_id?: number;
            value?: string;
        }[]>]: never; };
    } & { [K_6 in Exclude<keyof I, keyof CMsgClientToGCCreateStaticRecipeResponse>]: never; }>(base?: I): CMsgClientToGCCreateStaticRecipeResponse;
    fromPartial<I_1 extends {
        response?: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
        output_items?: {
            def_index?: number;
            item_id?: string;
            slot_id?: number;
        }[];
        input_errors?: {
            slot_id?: number;
            error?: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
        }[];
        additional_outputs?: {
            slot_id?: number;
            value?: string;
        }[];
    } & {
        response?: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
        output_items?: {
            def_index?: number;
            item_id?: string;
            slot_id?: number;
        }[] & ({
            def_index?: number;
            item_id?: string;
            slot_id?: number;
        } & {
            def_index?: number;
            item_id?: string;
            slot_id?: number;
        } & { [K_7 in Exclude<keyof I_1["output_items"][number], keyof CMsgClientToGCCreateStaticRecipeResponse_OutputItem>]: never; })[] & { [K_8 in Exclude<keyof I_1["output_items"], keyof {
            def_index?: number;
            item_id?: string;
            slot_id?: number;
        }[]>]: never; };
        input_errors?: {
            slot_id?: number;
            error?: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
        }[] & ({
            slot_id?: number;
            error?: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
        } & {
            slot_id?: number;
            error?: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
        } & { [K_9 in Exclude<keyof I_1["input_errors"][number], keyof CMsgClientToGCCreateStaticRecipeResponse_InputError>]: never; })[] & { [K_10 in Exclude<keyof I_1["input_errors"], keyof {
            slot_id?: number;
            error?: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
        }[]>]: never; };
        additional_outputs?: {
            slot_id?: number;
            value?: string;
        }[] & ({
            slot_id?: number;
            value?: string;
        } & {
            slot_id?: number;
            value?: string;
        } & { [K_11 in Exclude<keyof I_1["additional_outputs"][number], keyof CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput>]: never; })[] & { [K_12 in Exclude<keyof I_1["additional_outputs"], keyof {
            slot_id?: number;
            value?: string;
        }[]>]: never; };
    } & { [K_13 in Exclude<keyof I_1, keyof CMsgClientToGCCreateStaticRecipeResponse>]: never; }>(object: I_1): CMsgClientToGCCreateStaticRecipeResponse;
};
export declare const CMsgClientToGCCreateStaticRecipeResponse_OutputItem: {
    fromJSON(object: any): CMsgClientToGCCreateStaticRecipeResponse_OutputItem;
    toJSON(message: CMsgClientToGCCreateStaticRecipeResponse_OutputItem): unknown;
    create<I extends {
        def_index?: number;
        item_id?: string;
        slot_id?: number;
    } & {
        def_index?: number;
        item_id?: string;
        slot_id?: number;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCCreateStaticRecipeResponse_OutputItem>]: never; }>(base?: I): CMsgClientToGCCreateStaticRecipeResponse_OutputItem;
    fromPartial<I_1 extends {
        def_index?: number;
        item_id?: string;
        slot_id?: number;
    } & {
        def_index?: number;
        item_id?: string;
        slot_id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCCreateStaticRecipeResponse_OutputItem>]: never; }>(object: I_1): CMsgClientToGCCreateStaticRecipeResponse_OutputItem;
};
export declare const CMsgClientToGCCreateStaticRecipeResponse_InputError: {
    fromJSON(object: any): CMsgClientToGCCreateStaticRecipeResponse_InputError;
    toJSON(message: CMsgClientToGCCreateStaticRecipeResponse_InputError): unknown;
    create<I extends {
        slot_id?: number;
        error?: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
    } & {
        slot_id?: number;
        error?: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCCreateStaticRecipeResponse_InputError>]: never; }>(base?: I): CMsgClientToGCCreateStaticRecipeResponse_InputError;
    fromPartial<I_1 extends {
        slot_id?: number;
        error?: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
    } & {
        slot_id?: number;
        error?: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCCreateStaticRecipeResponse_InputError>]: never; }>(object: I_1): CMsgClientToGCCreateStaticRecipeResponse_InputError;
};
export declare const CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput: {
    fromJSON(object: any): CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput;
    toJSON(message: CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput): unknown;
    create<I extends {
        slot_id?: number;
        value?: string;
    } & {
        slot_id?: number;
        value?: string;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput>]: never; }>(base?: I): CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput;
    fromPartial<I_1 extends {
        slot_id?: number;
        value?: string;
    } & {
        slot_id?: number;
        value?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput>]: never; }>(object: I_1): CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput;
};
export declare const CMsgProcessTransactionOrder: {
    fromJSON(object: any): CMsgProcessTransactionOrder;
    toJSON(message: CMsgProcessTransactionOrder): unknown;
    create<I extends {
        txn_id?: string;
        steam_txn_id?: string;
        partner_txn_id?: string;
        steam_id?: string;
        time_stamp?: number;
        watermark?: string;
        purchase_report_status?: number;
        currency?: number;
        items?: {
            item_def_index?: number;
            item_price?: number;
            quantity?: number;
            category_desc?: string;
            store_purchase_type?: number;
            source_reference_id?: string;
            parent_stack_index?: number;
            default_price?: boolean;
            is_user_facing?: boolean;
        }[];
    } & {
        txn_id?: string;
        steam_txn_id?: string;
        partner_txn_id?: string;
        steam_id?: string;
        time_stamp?: number;
        watermark?: string;
        purchase_report_status?: number;
        currency?: number;
        items?: {
            item_def_index?: number;
            item_price?: number;
            quantity?: number;
            category_desc?: string;
            store_purchase_type?: number;
            source_reference_id?: string;
            parent_stack_index?: number;
            default_price?: boolean;
            is_user_facing?: boolean;
        }[] & ({
            item_def_index?: number;
            item_price?: number;
            quantity?: number;
            category_desc?: string;
            store_purchase_type?: number;
            source_reference_id?: string;
            parent_stack_index?: number;
            default_price?: boolean;
            is_user_facing?: boolean;
        } & {
            item_def_index?: number;
            item_price?: number;
            quantity?: number;
            category_desc?: string;
            store_purchase_type?: number;
            source_reference_id?: string;
            parent_stack_index?: number;
            default_price?: boolean;
            is_user_facing?: boolean;
        } & { [K in Exclude<keyof I["items"][number], keyof CMsgProcessTransactionOrder_Item>]: never; })[] & { [K_1 in Exclude<keyof I["items"], keyof {
            item_def_index?: number;
            item_price?: number;
            quantity?: number;
            category_desc?: string;
            store_purchase_type?: number;
            source_reference_id?: string;
            parent_stack_index?: number;
            default_price?: boolean;
            is_user_facing?: boolean;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgProcessTransactionOrder>]: never; }>(base?: I): CMsgProcessTransactionOrder;
    fromPartial<I_1 extends {
        txn_id?: string;
        steam_txn_id?: string;
        partner_txn_id?: string;
        steam_id?: string;
        time_stamp?: number;
        watermark?: string;
        purchase_report_status?: number;
        currency?: number;
        items?: {
            item_def_index?: number;
            item_price?: number;
            quantity?: number;
            category_desc?: string;
            store_purchase_type?: number;
            source_reference_id?: string;
            parent_stack_index?: number;
            default_price?: boolean;
            is_user_facing?: boolean;
        }[];
    } & {
        txn_id?: string;
        steam_txn_id?: string;
        partner_txn_id?: string;
        steam_id?: string;
        time_stamp?: number;
        watermark?: string;
        purchase_report_status?: number;
        currency?: number;
        items?: {
            item_def_index?: number;
            item_price?: number;
            quantity?: number;
            category_desc?: string;
            store_purchase_type?: number;
            source_reference_id?: string;
            parent_stack_index?: number;
            default_price?: boolean;
            is_user_facing?: boolean;
        }[] & ({
            item_def_index?: number;
            item_price?: number;
            quantity?: number;
            category_desc?: string;
            store_purchase_type?: number;
            source_reference_id?: string;
            parent_stack_index?: number;
            default_price?: boolean;
            is_user_facing?: boolean;
        } & {
            item_def_index?: number;
            item_price?: number;
            quantity?: number;
            category_desc?: string;
            store_purchase_type?: number;
            source_reference_id?: string;
            parent_stack_index?: number;
            default_price?: boolean;
            is_user_facing?: boolean;
        } & { [K_3 in Exclude<keyof I_1["items"][number], keyof CMsgProcessTransactionOrder_Item>]: never; })[] & { [K_4 in Exclude<keyof I_1["items"], keyof {
            item_def_index?: number;
            item_price?: number;
            quantity?: number;
            category_desc?: string;
            store_purchase_type?: number;
            source_reference_id?: string;
            parent_stack_index?: number;
            default_price?: boolean;
            is_user_facing?: boolean;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgProcessTransactionOrder>]: never; }>(object: I_1): CMsgProcessTransactionOrder;
};
export declare const CMsgProcessTransactionOrder_Item: {
    fromJSON(object: any): CMsgProcessTransactionOrder_Item;
    toJSON(message: CMsgProcessTransactionOrder_Item): unknown;
    create<I extends {
        item_def_index?: number;
        item_price?: number;
        quantity?: number;
        category_desc?: string;
        store_purchase_type?: number;
        source_reference_id?: string;
        parent_stack_index?: number;
        default_price?: boolean;
        is_user_facing?: boolean;
    } & {
        item_def_index?: number;
        item_price?: number;
        quantity?: number;
        category_desc?: string;
        store_purchase_type?: number;
        source_reference_id?: string;
        parent_stack_index?: number;
        default_price?: boolean;
        is_user_facing?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgProcessTransactionOrder_Item>]: never; }>(base?: I): CMsgProcessTransactionOrder_Item;
    fromPartial<I_1 extends {
        item_def_index?: number;
        item_price?: number;
        quantity?: number;
        category_desc?: string;
        store_purchase_type?: number;
        source_reference_id?: string;
        parent_stack_index?: number;
        default_price?: boolean;
        is_user_facing?: boolean;
    } & {
        item_def_index?: number;
        item_price?: number;
        quantity?: number;
        category_desc?: string;
        store_purchase_type?: number;
        source_reference_id?: string;
        parent_stack_index?: number;
        default_price?: boolean;
        is_user_facing?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgProcessTransactionOrder_Item>]: never; }>(object: I_1): CMsgProcessTransactionOrder_Item;
};
export declare const CMsgGCToGCStoreProcessCDKeyTransaction: {
    fromJSON(object: any): CMsgGCToGCStoreProcessCDKeyTransaction;
    toJSON(message: CMsgGCToGCStoreProcessCDKeyTransaction): unknown;
    create<I extends {
        order?: {
            txn_id?: string;
            steam_txn_id?: string;
            partner_txn_id?: string;
            steam_id?: string;
            time_stamp?: number;
            watermark?: string;
            purchase_report_status?: number;
            currency?: number;
            items?: {
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            }[];
        };
        reason_code?: number;
        partner?: number;
    } & {
        order?: {
            txn_id?: string;
            steam_txn_id?: string;
            partner_txn_id?: string;
            steam_id?: string;
            time_stamp?: number;
            watermark?: string;
            purchase_report_status?: number;
            currency?: number;
            items?: {
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            }[];
        } & {
            txn_id?: string;
            steam_txn_id?: string;
            partner_txn_id?: string;
            steam_id?: string;
            time_stamp?: number;
            watermark?: string;
            purchase_report_status?: number;
            currency?: number;
            items?: {
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            }[] & ({
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            } & {
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            } & { [K in Exclude<keyof I["order"]["items"][number], keyof CMsgProcessTransactionOrder_Item>]: never; })[] & { [K_1 in Exclude<keyof I["order"]["items"], keyof {
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["order"], keyof CMsgProcessTransactionOrder>]: never; };
        reason_code?: number;
        partner?: number;
    } & { [K_3 in Exclude<keyof I, keyof CMsgGCToGCStoreProcessCDKeyTransaction>]: never; }>(base?: I): CMsgGCToGCStoreProcessCDKeyTransaction;
    fromPartial<I_1 extends {
        order?: {
            txn_id?: string;
            steam_txn_id?: string;
            partner_txn_id?: string;
            steam_id?: string;
            time_stamp?: number;
            watermark?: string;
            purchase_report_status?: number;
            currency?: number;
            items?: {
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            }[];
        };
        reason_code?: number;
        partner?: number;
    } & {
        order?: {
            txn_id?: string;
            steam_txn_id?: string;
            partner_txn_id?: string;
            steam_id?: string;
            time_stamp?: number;
            watermark?: string;
            purchase_report_status?: number;
            currency?: number;
            items?: {
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            }[];
        } & {
            txn_id?: string;
            steam_txn_id?: string;
            partner_txn_id?: string;
            steam_id?: string;
            time_stamp?: number;
            watermark?: string;
            purchase_report_status?: number;
            currency?: number;
            items?: {
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            }[] & ({
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            } & {
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            } & { [K_4 in Exclude<keyof I_1["order"]["items"][number], keyof CMsgProcessTransactionOrder_Item>]: never; })[] & { [K_5 in Exclude<keyof I_1["order"]["items"], keyof {
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            }[]>]: never; };
        } & { [K_6 in Exclude<keyof I_1["order"], keyof CMsgProcessTransactionOrder>]: never; };
        reason_code?: number;
        partner?: number;
    } & { [K_7 in Exclude<keyof I_1, keyof CMsgGCToGCStoreProcessCDKeyTransaction>]: never; }>(object: I_1): CMsgGCToGCStoreProcessCDKeyTransaction;
};
export declare const CMsgGCToGCStoreProcessCDKeyTransactionResponse: {
    fromJSON(object: any): CMsgGCToGCStoreProcessCDKeyTransactionResponse;
    toJSON(message: CMsgGCToGCStoreProcessCDKeyTransactionResponse): unknown;
    create<I extends {
        success?: boolean;
    } & {
        success?: boolean;
    } & { [K in Exclude<keyof I, "success">]: never; }>(base?: I): CMsgGCToGCStoreProcessCDKeyTransactionResponse;
    fromPartial<I_1 extends {
        success?: boolean;
    } & {
        success?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "success">]: never; }>(object: I_1): CMsgGCToGCStoreProcessCDKeyTransactionResponse;
};
export declare const CMsgGCToGCStoreProcessSettlement: {
    fromJSON(object: any): CMsgGCToGCStoreProcessSettlement;
    toJSON(message: CMsgGCToGCStoreProcessSettlement): unknown;
    create<I extends {
        order?: {
            txn_id?: string;
            steam_txn_id?: string;
            partner_txn_id?: string;
            steam_id?: string;
            time_stamp?: number;
            watermark?: string;
            purchase_report_status?: number;
            currency?: number;
            items?: {
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            }[];
        };
    } & {
        order?: {
            txn_id?: string;
            steam_txn_id?: string;
            partner_txn_id?: string;
            steam_id?: string;
            time_stamp?: number;
            watermark?: string;
            purchase_report_status?: number;
            currency?: number;
            items?: {
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            }[];
        } & {
            txn_id?: string;
            steam_txn_id?: string;
            partner_txn_id?: string;
            steam_id?: string;
            time_stamp?: number;
            watermark?: string;
            purchase_report_status?: number;
            currency?: number;
            items?: {
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            }[] & ({
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            } & {
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            } & { [K in Exclude<keyof I["order"]["items"][number], keyof CMsgProcessTransactionOrder_Item>]: never; })[] & { [K_1 in Exclude<keyof I["order"]["items"], keyof {
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["order"], keyof CMsgProcessTransactionOrder>]: never; };
    } & { [K_3 in Exclude<keyof I, "order">]: never; }>(base?: I): CMsgGCToGCStoreProcessSettlement;
    fromPartial<I_1 extends {
        order?: {
            txn_id?: string;
            steam_txn_id?: string;
            partner_txn_id?: string;
            steam_id?: string;
            time_stamp?: number;
            watermark?: string;
            purchase_report_status?: number;
            currency?: number;
            items?: {
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            }[];
        };
    } & {
        order?: {
            txn_id?: string;
            steam_txn_id?: string;
            partner_txn_id?: string;
            steam_id?: string;
            time_stamp?: number;
            watermark?: string;
            purchase_report_status?: number;
            currency?: number;
            items?: {
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            }[];
        } & {
            txn_id?: string;
            steam_txn_id?: string;
            partner_txn_id?: string;
            steam_id?: string;
            time_stamp?: number;
            watermark?: string;
            purchase_report_status?: number;
            currency?: number;
            items?: {
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            }[] & ({
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            } & {
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            } & { [K_4 in Exclude<keyof I_1["order"]["items"][number], keyof CMsgProcessTransactionOrder_Item>]: never; })[] & { [K_5 in Exclude<keyof I_1["order"]["items"], keyof {
                item_def_index?: number;
                item_price?: number;
                quantity?: number;
                category_desc?: string;
                store_purchase_type?: number;
                source_reference_id?: string;
                parent_stack_index?: number;
                default_price?: boolean;
                is_user_facing?: boolean;
            }[]>]: never; };
        } & { [K_6 in Exclude<keyof I_1["order"], keyof CMsgProcessTransactionOrder>]: never; };
    } & { [K_7 in Exclude<keyof I_1, "order">]: never; }>(object: I_1): CMsgGCToGCStoreProcessSettlement;
};
export declare const CMsgGCToGCStoreProcessSettlementResponse: {
    fromJSON(object: any): CMsgGCToGCStoreProcessSettlementResponse;
    toJSON(message: CMsgGCToGCStoreProcessSettlementResponse): unknown;
    create<I extends {
        success?: boolean;
    } & {
        success?: boolean;
    } & { [K in Exclude<keyof I, "success">]: never; }>(base?: I): CMsgGCToGCStoreProcessSettlementResponse;
    fromPartial<I_1 extends {
        success?: boolean;
    } & {
        success?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "success">]: never; }>(object: I_1): CMsgGCToGCStoreProcessSettlementResponse;
};
export declare const CMsgGCToGCBroadcastConsoleCommand: {
    fromJSON(object: any): CMsgGCToGCBroadcastConsoleCommand;
    toJSON(message: CMsgGCToGCBroadcastConsoleCommand): unknown;
    create<I extends {
        con_command?: string;
        report_output?: boolean;
        sending_gc?: number;
        output_initiator?: string;
    } & {
        con_command?: string;
        report_output?: boolean;
        sending_gc?: number;
        output_initiator?: string;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCBroadcastConsoleCommand>]: never; }>(base?: I): CMsgGCToGCBroadcastConsoleCommand;
    fromPartial<I_1 extends {
        con_command?: string;
        report_output?: boolean;
        sending_gc?: number;
        output_initiator?: string;
    } & {
        con_command?: string;
        report_output?: boolean;
        sending_gc?: number;
        output_initiator?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCBroadcastConsoleCommand>]: never; }>(object: I_1): CMsgGCToGCBroadcastConsoleCommand;
};
export declare const CMsgGCToGCConsoleOutput: {
    fromJSON(object: any): CMsgGCToGCConsoleOutput;
    toJSON(message: CMsgGCToGCConsoleOutput): unknown;
    create<I extends {
        initiator?: string;
        sending_gc?: number;
        msgs?: {
            text?: string;
            spew_level?: number;
        }[];
        is_last_for_source_job?: boolean;
    } & {
        initiator?: string;
        sending_gc?: number;
        msgs?: {
            text?: string;
            spew_level?: number;
        }[] & ({
            text?: string;
            spew_level?: number;
        } & {
            text?: string;
            spew_level?: number;
        } & { [K in Exclude<keyof I["msgs"][number], keyof CMsgGCToGCConsoleOutput_OutputLine>]: never; })[] & { [K_1 in Exclude<keyof I["msgs"], keyof {
            text?: string;
            spew_level?: number;
        }[]>]: never; };
        is_last_for_source_job?: boolean;
    } & { [K_2 in Exclude<keyof I, keyof CMsgGCToGCConsoleOutput>]: never; }>(base?: I): CMsgGCToGCConsoleOutput;
    fromPartial<I_1 extends {
        initiator?: string;
        sending_gc?: number;
        msgs?: {
            text?: string;
            spew_level?: number;
        }[];
        is_last_for_source_job?: boolean;
    } & {
        initiator?: string;
        sending_gc?: number;
        msgs?: {
            text?: string;
            spew_level?: number;
        }[] & ({
            text?: string;
            spew_level?: number;
        } & {
            text?: string;
            spew_level?: number;
        } & { [K_3 in Exclude<keyof I_1["msgs"][number], keyof CMsgGCToGCConsoleOutput_OutputLine>]: never; })[] & { [K_4 in Exclude<keyof I_1["msgs"], keyof {
            text?: string;
            spew_level?: number;
        }[]>]: never; };
        is_last_for_source_job?: boolean;
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgGCToGCConsoleOutput>]: never; }>(object: I_1): CMsgGCToGCConsoleOutput;
};
export declare const CMsgGCToGCConsoleOutput_OutputLine: {
    fromJSON(object: any): CMsgGCToGCConsoleOutput_OutputLine;
    toJSON(message: CMsgGCToGCConsoleOutput_OutputLine): unknown;
    create<I extends {
        text?: string;
        spew_level?: number;
    } & {
        text?: string;
        spew_level?: number;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCConsoleOutput_OutputLine>]: never; }>(base?: I): CMsgGCToGCConsoleOutput_OutputLine;
    fromPartial<I_1 extends {
        text?: string;
        spew_level?: number;
    } & {
        text?: string;
        spew_level?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCConsoleOutput_OutputLine>]: never; }>(object: I_1): CMsgGCToGCConsoleOutput_OutputLine;
};
export declare const CMsgItemAges: {
    fromJSON(object: any): CMsgItemAges;
    toJSON(message: CMsgItemAges): unknown;
    create<I extends {
        max_item_id_timestamps?: {
            timestamp?: number;
            max_item_id?: string;
        }[];
    } & {
        max_item_id_timestamps?: {
            timestamp?: number;
            max_item_id?: string;
        }[] & ({
            timestamp?: number;
            max_item_id?: string;
        } & {
            timestamp?: number;
            max_item_id?: string;
        } & { [K in Exclude<keyof I["max_item_id_timestamps"][number], keyof CMsgItemAges_MaxItemIDTimestamp>]: never; })[] & { [K_1 in Exclude<keyof I["max_item_id_timestamps"], keyof {
            timestamp?: number;
            max_item_id?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "max_item_id_timestamps">]: never; }>(base?: I): CMsgItemAges;
    fromPartial<I_1 extends {
        max_item_id_timestamps?: {
            timestamp?: number;
            max_item_id?: string;
        }[];
    } & {
        max_item_id_timestamps?: {
            timestamp?: number;
            max_item_id?: string;
        }[] & ({
            timestamp?: number;
            max_item_id?: string;
        } & {
            timestamp?: number;
            max_item_id?: string;
        } & { [K_3 in Exclude<keyof I_1["max_item_id_timestamps"][number], keyof CMsgItemAges_MaxItemIDTimestamp>]: never; })[] & { [K_4 in Exclude<keyof I_1["max_item_id_timestamps"], keyof {
            timestamp?: number;
            max_item_id?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "max_item_id_timestamps">]: never; }>(object: I_1): CMsgItemAges;
};
export declare const CMsgItemAges_MaxItemIDTimestamp: {
    fromJSON(object: any): CMsgItemAges_MaxItemIDTimestamp;
    toJSON(message: CMsgItemAges_MaxItemIDTimestamp): unknown;
    create<I extends {
        timestamp?: number;
        max_item_id?: string;
    } & {
        timestamp?: number;
        max_item_id?: string;
    } & { [K in Exclude<keyof I, keyof CMsgItemAges_MaxItemIDTimestamp>]: never; }>(base?: I): CMsgItemAges_MaxItemIDTimestamp;
    fromPartial<I_1 extends {
        timestamp?: number;
        max_item_id?: string;
    } & {
        timestamp?: number;
        max_item_id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgItemAges_MaxItemIDTimestamp>]: never; }>(object: I_1): CMsgItemAges_MaxItemIDTimestamp;
};
export declare const CMsgGCToGCInternalTestMsg: {
    fromJSON(object: any): CMsgGCToGCInternalTestMsg;
    toJSON(message: CMsgGCToGCInternalTestMsg): unknown;
    create<I extends {
        sending_gc?: number;
        sender_id?: string;
        context?: number;
        message_id?: number;
        message_body?: string;
        job_id_source?: string;
        job_id_target?: string;
    } & {
        sending_gc?: number;
        sender_id?: string;
        context?: number;
        message_id?: number;
        message_body?: string;
        job_id_source?: string;
        job_id_target?: string;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCInternalTestMsg>]: never; }>(base?: I): CMsgGCToGCInternalTestMsg;
    fromPartial<I_1 extends {
        sending_gc?: number;
        sender_id?: string;
        context?: number;
        message_id?: number;
        message_body?: string;
        job_id_source?: string;
        job_id_target?: string;
    } & {
        sending_gc?: number;
        sender_id?: string;
        context?: number;
        message_id?: number;
        message_body?: string;
        job_id_source?: string;
        job_id_target?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCInternalTestMsg>]: never; }>(object: I_1): CMsgGCToGCInternalTestMsg;
};
export declare const CMsgGCToGCClientServerVersionsUpdated: {
    fromJSON(object: any): CMsgGCToGCClientServerVersionsUpdated;
    toJSON(message: CMsgGCToGCClientServerVersionsUpdated): unknown;
    create<I extends {
        client_min_allowed_version?: number;
        client_active_version?: number;
        server_active_version?: number;
        server_deployed_version?: number;
        what_changed?: number;
    } & {
        client_min_allowed_version?: number;
        client_active_version?: number;
        server_active_version?: number;
        server_deployed_version?: number;
        what_changed?: number;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCClientServerVersionsUpdated>]: never; }>(base?: I): CMsgGCToGCClientServerVersionsUpdated;
    fromPartial<I_1 extends {
        client_min_allowed_version?: number;
        client_active_version?: number;
        server_active_version?: number;
        server_deployed_version?: number;
        what_changed?: number;
    } & {
        client_min_allowed_version?: number;
        client_active_version?: number;
        server_active_version?: number;
        server_deployed_version?: number;
        what_changed?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCClientServerVersionsUpdated>]: never; }>(object: I_1): CMsgGCToGCClientServerVersionsUpdated;
};
export declare const CMsgGCToGCBroadcastMessageFromSub: {
    fromJSON(object: any): CMsgGCToGCBroadcastMessageFromSub;
    toJSON(message: CMsgGCToGCBroadcastMessageFromSub): unknown;
    create<I extends {
        msg_id?: number;
        serialized_msg?: string;
        account_id_list?: number[];
        steam_id_list?: string[];
    } & {
        msg_id?: number;
        serialized_msg?: string;
        account_id_list?: number[] & number[] & { [K in Exclude<keyof I["account_id_list"], keyof number[]>]: never; };
        steam_id_list?: string[] & string[] & { [K_1 in Exclude<keyof I["steam_id_list"], keyof string[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof CMsgGCToGCBroadcastMessageFromSub>]: never; }>(base?: I): CMsgGCToGCBroadcastMessageFromSub;
    fromPartial<I_1 extends {
        msg_id?: number;
        serialized_msg?: string;
        account_id_list?: number[];
        steam_id_list?: string[];
    } & {
        msg_id?: number;
        serialized_msg?: string;
        account_id_list?: number[] & number[] & { [K_3 in Exclude<keyof I_1["account_id_list"], keyof number[]>]: never; };
        steam_id_list?: string[] & string[] & { [K_4 in Exclude<keyof I_1["steam_id_list"], keyof string[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof CMsgGCToGCBroadcastMessageFromSub>]: never; }>(object: I_1): CMsgGCToGCBroadcastMessageFromSub;
};
export declare const CMsgGCToClientCurrencyPricePoints: {
    fromJSON(object: any): CMsgGCToClientCurrencyPricePoints;
    toJSON(message: CMsgGCToClientCurrencyPricePoints): unknown;
    create<I extends {
        price_key?: string[];
        currencies?: {
            currency_id?: number;
            currency_price?: string[];
        }[];
    } & {
        price_key?: string[] & string[] & { [K in Exclude<keyof I["price_key"], keyof string[]>]: never; };
        currencies?: {
            currency_id?: number;
            currency_price?: string[];
        }[] & ({
            currency_id?: number;
            currency_price?: string[];
        } & {
            currency_id?: number;
            currency_price?: string[] & string[] & { [K_1 in Exclude<keyof I["currencies"][number]["currency_price"], keyof string[]>]: never; };
        } & { [K_2 in Exclude<keyof I["currencies"][number], keyof CMsgGCToClientCurrencyPricePoints_Currency>]: never; })[] & { [K_3 in Exclude<keyof I["currencies"], keyof {
            currency_id?: number;
            currency_price?: string[];
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof CMsgGCToClientCurrencyPricePoints>]: never; }>(base?: I): CMsgGCToClientCurrencyPricePoints;
    fromPartial<I_1 extends {
        price_key?: string[];
        currencies?: {
            currency_id?: number;
            currency_price?: string[];
        }[];
    } & {
        price_key?: string[] & string[] & { [K_5 in Exclude<keyof I_1["price_key"], keyof string[]>]: never; };
        currencies?: {
            currency_id?: number;
            currency_price?: string[];
        }[] & ({
            currency_id?: number;
            currency_price?: string[];
        } & {
            currency_id?: number;
            currency_price?: string[] & string[] & { [K_6 in Exclude<keyof I_1["currencies"][number]["currency_price"], keyof string[]>]: never; };
        } & { [K_7 in Exclude<keyof I_1["currencies"][number], keyof CMsgGCToClientCurrencyPricePoints_Currency>]: never; })[] & { [K_8 in Exclude<keyof I_1["currencies"], keyof {
            currency_id?: number;
            currency_price?: string[];
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof CMsgGCToClientCurrencyPricePoints>]: never; }>(object: I_1): CMsgGCToClientCurrencyPricePoints;
};
export declare const CMsgGCToClientCurrencyPricePoints_Currency: {
    fromJSON(object: any): CMsgGCToClientCurrencyPricePoints_Currency;
    toJSON(message: CMsgGCToClientCurrencyPricePoints_Currency): unknown;
    create<I extends {
        currency_id?: number;
        currency_price?: string[];
    } & {
        currency_id?: number;
        currency_price?: string[] & string[] & { [K in Exclude<keyof I["currency_price"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CMsgGCToClientCurrencyPricePoints_Currency>]: never; }>(base?: I): CMsgGCToClientCurrencyPricePoints_Currency;
    fromPartial<I_1 extends {
        currency_id?: number;
        currency_price?: string[];
    } & {
        currency_id?: number;
        currency_price?: string[] & string[] & { [K_2 in Exclude<keyof I_1["currency_price"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgGCToClientCurrencyPricePoints_Currency>]: never; }>(object: I_1): CMsgGCToClientCurrencyPricePoints_Currency;
};
export declare const CMsgBannedWordList: {
    fromJSON(object: any): CMsgBannedWordList;
    toJSON(message: CMsgBannedWordList): unknown;
    create<I extends {
        version?: number;
        banned_words?: string[];
    } & {
        version?: number;
        banned_words?: string[] & string[] & { [K in Exclude<keyof I["banned_words"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof CMsgBannedWordList>]: never; }>(base?: I): CMsgBannedWordList;
    fromPartial<I_1 extends {
        version?: number;
        banned_words?: string[];
    } & {
        version?: number;
        banned_words?: string[] & string[] & { [K_2 in Exclude<keyof I_1["banned_words"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgBannedWordList>]: never; }>(object: I_1): CMsgBannedWordList;
};
export declare const CMsgGCToGCFlushSteamInventoryCache: {
    fromJSON(object: any): CMsgGCToGCFlushSteamInventoryCache;
    toJSON(message: CMsgGCToGCFlushSteamInventoryCache): unknown;
    create<I extends {
        keys?: {
            steamid?: string;
            contextid?: string;
        }[];
    } & {
        keys?: {
            steamid?: string;
            contextid?: string;
        }[] & ({
            steamid?: string;
            contextid?: string;
        } & {
            steamid?: string;
            contextid?: string;
        } & { [K in Exclude<keyof I["keys"][number], keyof CMsgGCToGCFlushSteamInventoryCache_Key>]: never; })[] & { [K_1 in Exclude<keyof I["keys"], keyof {
            steamid?: string;
            contextid?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "keys">]: never; }>(base?: I): CMsgGCToGCFlushSteamInventoryCache;
    fromPartial<I_1 extends {
        keys?: {
            steamid?: string;
            contextid?: string;
        }[];
    } & {
        keys?: {
            steamid?: string;
            contextid?: string;
        }[] & ({
            steamid?: string;
            contextid?: string;
        } & {
            steamid?: string;
            contextid?: string;
        } & { [K_3 in Exclude<keyof I_1["keys"][number], keyof CMsgGCToGCFlushSteamInventoryCache_Key>]: never; })[] & { [K_4 in Exclude<keyof I_1["keys"], keyof {
            steamid?: string;
            contextid?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "keys">]: never; }>(object: I_1): CMsgGCToGCFlushSteamInventoryCache;
};
export declare const CMsgGCToGCFlushSteamInventoryCache_Key: {
    fromJSON(object: any): CMsgGCToGCFlushSteamInventoryCache_Key;
    toJSON(message: CMsgGCToGCFlushSteamInventoryCache_Key): unknown;
    create<I extends {
        steamid?: string;
        contextid?: string;
    } & {
        steamid?: string;
        contextid?: string;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCFlushSteamInventoryCache_Key>]: never; }>(base?: I): CMsgGCToGCFlushSteamInventoryCache_Key;
    fromPartial<I_1 extends {
        steamid?: string;
        contextid?: string;
    } & {
        steamid?: string;
        contextid?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCFlushSteamInventoryCache_Key>]: never; }>(object: I_1): CMsgGCToGCFlushSteamInventoryCache_Key;
};
export declare const CMsgGCToGCUpdateSubscriptionItems: {
    fromJSON(object: any): CMsgGCToGCUpdateSubscriptionItems;
    toJSON(message: CMsgGCToGCUpdateSubscriptionItems): unknown;
    create<I extends {
        account_id?: number;
        always_notify?: boolean;
    } & {
        account_id?: number;
        always_notify?: boolean;
    } & { [K in Exclude<keyof I, keyof CMsgGCToGCUpdateSubscriptionItems>]: never; }>(base?: I): CMsgGCToGCUpdateSubscriptionItems;
    fromPartial<I_1 extends {
        account_id?: number;
        always_notify?: boolean;
    } & {
        account_id?: number;
        always_notify?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgGCToGCUpdateSubscriptionItems>]: never; }>(object: I_1): CMsgGCToGCUpdateSubscriptionItems;
};
export declare const CMsgGCToGCSelfPing: {
    fromJSON(object: any): CMsgGCToGCSelfPing;
    toJSON(message: CMsgGCToGCSelfPing): unknown;
    create<I extends {
        sample_id?: number;
    } & {
        sample_id?: number;
    } & { [K in Exclude<keyof I, "sample_id">]: never; }>(base?: I): CMsgGCToGCSelfPing;
    fromPartial<I_1 extends {
        sample_id?: number;
    } & {
        sample_id?: number;
    } & { [K_1 in Exclude<keyof I_1, "sample_id">]: never; }>(object: I_1): CMsgGCToGCSelfPing;
};
export declare const CMsgGCToGCGetInfuxIntervalStats: {
    fromJSON(_: any): CMsgGCToGCGetInfuxIntervalStats;
    toJSON(_: CMsgGCToGCGetInfuxIntervalStats): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgGCToGCGetInfuxIntervalStats;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgGCToGCGetInfuxIntervalStats;
};
export declare const CMsgGCToGCGetInfuxIntervalStatsResponse: {
    fromJSON(object: any): CMsgGCToGCGetInfuxIntervalStatsResponse;
    toJSON(message: CMsgGCToGCGetInfuxIntervalStatsResponse): unknown;
    create<I extends {
        stat_ids?: number[];
        stat_total?: string[];
        stat_samples?: number[];
        stat_max?: number[];
        sample_duration_ms?: number;
    } & {
        stat_ids?: number[] & number[] & { [K in Exclude<keyof I["stat_ids"], keyof number[]>]: never; };
        stat_total?: string[] & string[] & { [K_1 in Exclude<keyof I["stat_total"], keyof string[]>]: never; };
        stat_samples?: number[] & number[] & { [K_2 in Exclude<keyof I["stat_samples"], keyof number[]>]: never; };
        stat_max?: number[] & number[] & { [K_3 in Exclude<keyof I["stat_max"], keyof number[]>]: never; };
        sample_duration_ms?: number;
    } & { [K_4 in Exclude<keyof I, keyof CMsgGCToGCGetInfuxIntervalStatsResponse>]: never; }>(base?: I): CMsgGCToGCGetInfuxIntervalStatsResponse;
    fromPartial<I_1 extends {
        stat_ids?: number[];
        stat_total?: string[];
        stat_samples?: number[];
        stat_max?: number[];
        sample_duration_ms?: number;
    } & {
        stat_ids?: number[] & number[] & { [K_5 in Exclude<keyof I_1["stat_ids"], keyof number[]>]: never; };
        stat_total?: string[] & string[] & { [K_6 in Exclude<keyof I_1["stat_total"], keyof string[]>]: never; };
        stat_samples?: number[] & number[] & { [K_7 in Exclude<keyof I_1["stat_samples"], keyof number[]>]: never; };
        stat_max?: number[] & number[] & { [K_8 in Exclude<keyof I_1["stat_max"], keyof number[]>]: never; };
        sample_duration_ms?: number;
    } & { [K_9 in Exclude<keyof I_1, keyof CMsgGCToGCGetInfuxIntervalStatsResponse>]: never; }>(object: I_1): CMsgGCToGCGetInfuxIntervalStatsResponse;
};
export declare const CMsgGCToGCPurchaseSucceeded: {
    fromJSON(_: any): CMsgGCToGCPurchaseSucceeded;
    toJSON(_: CMsgGCToGCPurchaseSucceeded): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CMsgGCToGCPurchaseSucceeded;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CMsgGCToGCPurchaseSucceeded;
};
export declare const CMsgClientToGCGetLimitedItemPurchaseQuantity: {
    fromJSON(object: any): CMsgClientToGCGetLimitedItemPurchaseQuantity;
    toJSON(message: CMsgClientToGCGetLimitedItemPurchaseQuantity): unknown;
    create<I extends {
        item_def?: number;
    } & {
        item_def?: number;
    } & { [K in Exclude<keyof I, "item_def">]: never; }>(base?: I): CMsgClientToGCGetLimitedItemPurchaseQuantity;
    fromPartial<I_1 extends {
        item_def?: number;
    } & {
        item_def?: number;
    } & { [K_1 in Exclude<keyof I_1, "item_def">]: never; }>(object: I_1): CMsgClientToGCGetLimitedItemPurchaseQuantity;
};
export declare const CMsgClientToGCGetLimitedItemPurchaseQuantityResponse: {
    fromJSON(object: any): CMsgClientToGCGetLimitedItemPurchaseQuantityResponse;
    toJSON(message: CMsgClientToGCGetLimitedItemPurchaseQuantityResponse): unknown;
    create<I extends {
        result?: CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse;
        quantity_purchased?: number;
    } & {
        result?: CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse;
        quantity_purchased?: number;
    } & { [K in Exclude<keyof I, keyof CMsgClientToGCGetLimitedItemPurchaseQuantityResponse>]: never; }>(base?: I): CMsgClientToGCGetLimitedItemPurchaseQuantityResponse;
    fromPartial<I_1 extends {
        result?: CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse;
        quantity_purchased?: number;
    } & {
        result?: CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse;
        quantity_purchased?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgClientToGCGetLimitedItemPurchaseQuantityResponse>]: never; }>(object: I_1): CMsgClientToGCGetLimitedItemPurchaseQuantityResponse;
};
export declare const CMsgGCToGCUpdateWelcomeMsg: {
    fromJSON(object: any): CMsgGCToGCUpdateWelcomeMsg;
    toJSON(message: CMsgGCToGCUpdateWelcomeMsg): unknown;
    create<I extends {
        server?: boolean;
        new_msg?: {
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        };
        broadcast?: boolean;
    } & {
        server?: boolean;
        new_msg?: {
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        } & {
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        } & { [K in Exclude<keyof I["new_msg"], keyof CExtraMsgBlock>]: never; };
        broadcast?: boolean;
    } & { [K_1 in Exclude<keyof I, keyof CMsgGCToGCUpdateWelcomeMsg>]: never; }>(base?: I): CMsgGCToGCUpdateWelcomeMsg;
    fromPartial<I_1 extends {
        server?: boolean;
        new_msg?: {
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        };
        broadcast?: boolean;
    } & {
        server?: boolean;
        new_msg?: {
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        } & {
            msg_type?: number;
            contents?: string;
            msg_key?: string;
            is_compressed?: boolean;
        } & { [K_2 in Exclude<keyof I_1["new_msg"], keyof CExtraMsgBlock>]: never; };
        broadcast?: boolean;
    } & { [K_3 in Exclude<keyof I_1, keyof CMsgGCToGCUpdateWelcomeMsg>]: never; }>(object: I_1): CMsgGCToGCUpdateWelcomeMsg;
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
