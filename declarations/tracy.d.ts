declare namespace Tracy
{
	/**
	* Begins a new zone for Tracy performance profiling.
	* 
	* @param name - The name of the zone.
	*/
	function ZoneBegin(name: string): void;

	/**
	 * Ends the current zone for Tracy performance profiling.
	 */
	function ZoneEnd(): void;

	/**
	 * Sends a message to the Tracy profiler.
	 * 
	 * @param message - The message to send.
	 */
	function Message(message: string): void;
}