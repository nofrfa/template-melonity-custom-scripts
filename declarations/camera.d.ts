declare namespace Camera
{
	/** 
	 * @param val default 1200
	 */
	function SetDistance(val: number): void;

	function GetDistance(): number;

	function ToggleFollowLocalHero(val: boolean): void;
}