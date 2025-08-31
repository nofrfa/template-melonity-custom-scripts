declare namespace Enum
{
	export enum DropdownMenuStat
	{
		kWins,
		kCommends,
		kGamesPlayed,
		kFirstMatchDate,
		kGamesMVP
	}

	export enum SpiderGraph
	{
		kFightScore,
		kFarmScore,
		kSupportScore,
		kPushScore,
		kVersatilityScore
	}
}

declare namespace ProfileChanger
{
	function HasProfileChanger(): boolean;

	/**
	 * @param heroName npc_dota_hero_techies format
	 * @param level 0 - 30
	 */
	function SetPlusLVL(heroName: string, level: number): void;

	// used in SetDropdownMenuStat kFirstMatchDate
	function DateToSysTime(day: number, month: number, year: number): number;

	/**
	 * @param level 0 - 30
	 */
	function SetDropdownMenuStat(type: Enum.DropdownMenuStat, val: number): void;

	function ResetDropdownMenuStat(type: Enum.DropdownMenuStat): void;

	function SetOnlyWinsMode(val: boolean): void;

	/**
	 * @param level 0 - 1
	 */
	function SetSpiderGraph(type: Enum.SpiderGraph, val: number): void;

	function ResetSpiderGraph(type: Enum.SpiderGraph): void;

	function SetEnable(val: boolean): void;

	function SetAccountLvl(val: number): void;

	function ResetAccountLvl(): void;

	/**
	 * @param rank - 80 - Imortal | 70 - divine | 60 - Ancient | 50 - Legend | 40 - Archon | 30 - Crusader | 20 - Guardian | 10 - Herald | 0 - none?
	 */
	function SetRankTier(rank: number, stars: number): void;

	function ResetRankTier(): void;

	function SetLeaderboardRank(val: number): void;

	function ResetLeaderboardRank(): void;

	function SetMMR(val: number): void;

	function ResetMMR(): void;

	function SetBehaviorScore(val: number): void;

	function ResetBehaviorScore(): void;

	function SetAccountID(val: string): void;

	function ResetAccountID(): void;
}