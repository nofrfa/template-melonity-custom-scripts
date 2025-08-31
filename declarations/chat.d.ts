declare namespace Chat
{
	/**
	 * Sends a roll message to a team or global chat.
	 * 
	 * @param min - The minimum number that can be rolled.
	 * @param max - The maximum number that can be rolled.
	 * @param ally - Whether the roll should be sent to the team chat or global chat.
	 */
	function Roll(min: number, max: number, ally: boolean): void;

	/**
	 * Returns an array of chat channel names.
	 * 
	 * @returns An array of strings representing the names of the chat channels.
	 */
	function GetChannels(): string[];

	/**
	 * Sends a message to a specified chat channel. The message will be visible to all players in the channel.
	 * 
	 * @remarks
	 * Can be used to send chat commands like "-lvlmax", "-refresh", etc.
	 * 
	 * @param channel - The name of the chat channel.
	 * @param msg - The message to be sent.
	 */
	function Say(channel: string, msg: string): void;

	/**
	 * Prints a message from the specified chat channel, visible only to the local player.
	 * 
	 * @param channel - The name of the chat channel.
	 * @param msg - The message to be printed.
	 */
	function Print(channel: string, msg: string): void;
}