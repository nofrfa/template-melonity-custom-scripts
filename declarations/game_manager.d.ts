declare namespace GameManager
{
	function GetDataManager(): DataView | null;

	function GetGameManagerProxy(): GameManagerProxy | null;

	function IsCustomGame(): boolean;

	function IsEventGame(): boolean;

	function GetHeroesKeyValues(): KeyValue | null;

	function GetUnitsKeyValues(): KeyValue | null;

	function GetAddOnGame(): string;

	function GetAddOnMap(): string;
}