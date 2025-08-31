declare interface MoveCursorResultObject
{
	result: Boolean;
}

declare namespace Humanizer
{
	function CalculateTimeForOrder(pos?: Vector): number;

	function GetRandom(): number;

	function SetMaxCursorTime(val: number): void;

	function GetMaxCursorTime(): number;

	function SetBaseCursorTime(val: number): void;

	function GetBaseCursorTime(): number;

	function SetReturnTime(val: number): void;

	function GetReturnTime(): number;

	function SetLingerTime(val: number): void;

	function GetLingerTime(): number;

	function SetRandomAddTime(val: number): void;

	function GetRandomAddTime(): number;

	function MoveCursorTo(position: Vector, func: (state: MoveCursorResultObject) => void): void;
}