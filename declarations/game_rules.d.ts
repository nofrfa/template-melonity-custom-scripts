declare namespace GameRules
{
	// return C_DOTAGamerules
	function GetPointer(): DataView | null;

	function GetDayTimeStart(): number;

	function GetNightTimeStart(): number;

	function IsDayTime(): boolean;

	function GetNetTimeOfDay(): number;

	function GetTickCount(): number;

	function GetItemKeyValue(itemName: string): KeyValue | null;

	function GetItemCost(itemName: string): number;

	function GetItemId(itemName: string): number;

	function GetHeroKeyValue(heroName: string): KeyValue | null;

	function GetHeroKeyValueById(heroId: number): KeyValue | null;

	function GetHeroesKeyValue(): KeyValue | null;

	function SelectItemInShop(itemName: string): void;

	function SetItemToQuickBuy(itemName: string): void;

	function AddItemToQuickBuy(itemName: string): void;

	function ClearQuickBuy(): void;

	function IsHeroAvailableByName(name: string): boolean;

	function GetStateTransitionTime(): number;

	function CanPurchaseItem(name: string): boolean;

	function SetRiverType(type: number): void;

	function GetServerGameState(): number;

	function GetGameState(): Enum.GameState;

	function GetGameMode(): number;

	function GetPreGameStartTime(): number;

	function GetGameStartTime(): number;

	function GetGameEndTime(): number;

	function GetGameLoadTime(): number;

	function GetGameTime(): number;

	function IsPaused(): boolean;

	function IsTemporaryDay(): boolean;

	function IsTemporaryNight(): boolean;

	function IsNightstalkerNight(): boolean;

	function IsActiveGame(): boolean;

	function GetMatchID(): bigint;
}