declare namespace Timer
{
	/**
	 * Checks if a timer has expired.
	 * 
	 * @param key - The key of the timer.
	 * @returns A boolean indicating whether the timer has expired.
	 */
	function IsExpired(key: string): boolean;

	/**
	 * Sets a timer.
	 * 
	 * @param key - The key of the timer.
	 * @param timeInS - The time in seconds for the timer.
	 * @param realTime - A boolean indicating whether the timer is based on real time. Defaults to false.
	 */
	function Set(key: string, timeInS: number, realTime?: boolean): void;

	/**
	 * Clears a timer.
	 * 
	 * @param key - The key of the timer.
	 */
	function Clear(key: string): void;
}

declare class TimerObject
{
	/**
	 * Checks if a timer has expired.
	 * 
	 * @returns A boolean indicating whether the timer has expired.
	 */
	IsExpired(): boolean;

	/**
	 * Sets a timer.
	 * =
	 * @param timeInS - The time in seconds for the timer.
	 * @param realTime - A boolean indicating whether the timer is based on real time. Defaults to false.
	 * @returns This timer object.
	 */
	Set(timeInS: number, realTime?: boolean): this;

	/**
	 * Clears a timer.
	 * 
	 * @returns This timer object.
	 */
	Clear(): this;

	constructor();
}