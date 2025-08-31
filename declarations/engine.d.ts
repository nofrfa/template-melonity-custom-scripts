declare interface OriginInfo
{
	fileName: string;
	row: number;
	column: number;
}

declare namespace Engine
{
	// Cheat functions

	/**
	 * Retrieves state of Safe Mode toggle.
	 * 
	 * @remarks
	 * If Safe Mode is enabled, all potentially dangerous functions should be not used, like RegisterFireEvent, uncommon requests to GC, etc.
	 * 
	 * @returns True if Safe Mode is enabled, false otherwise.
	 */
	function IsSafeMode(): boolean;

	/**
	 * Returns false while script is initializing (before any callbacks called), true otherwise.
	 * 
	 * @returns True if script is initialized, false otherwise.
	 */
	function IsInitialized(): boolean;

	/**
	 * Returns true if script is local (is not server script) and false otherwise.
	 * 
	 * @returns True if script is local, false otherwise.
	 */
	function IsLocalScript(): boolean;

	/**
	 * Retrieves state of developer mode toggle.
	 * 
	 * @returns True if developer mode is enabled, false otherwise.
	 */
	function IsDevMode(): boolean;

	/**
	 * Retrieves state of verbose logs toggle.
	 *
	 * @returns True if verbose logs are enabled, false otherwise.
	 */
	function IsVeboseLogs(): boolean;

	/**
	 * Retrieves a VDF (Valve Data Format) file and parses it into a JSON object.
	 * 
	 * @param path - The path to the VDF file.
	 * @returns The parsed JSON object.
	 */
	function GetVDF(path: string): any;

	/**
	 * Retrieves the current user's name.
	 * 
	 * @returns The user's name.
	 */
	function GetUserName(): string;

	/**
	 * Retrieves the current user's ID.
	 * 
	 * @returns The user's ID.
	 */
	function GetUserID(): number;

	/**
	 * Retrieves the end date of the current user's subscription.
	 * 
	 * @returns The end date of the user's subscription.
	 */
	function GetUserSubEnd(): string;

	/**
	 * Retrieves the source map for a given file.
	 * 
	 * @param fileName - The name of the file.
	 * @returns The source map for the file.
	 */
	function GetSourceMap(fileName: string): string;

	/**
	 * Maps a position in a file to its original source.
	 * 
	 * @param fileName - The name of the file.
	 * @param row - The row in the file.
	 * @param column - The column in the file.
	 * @returns The original source information.
	 * @todo Implement this function.
	 */
	function MapToSource(fileName: string, row: number, column: number): OriginInfo;

	/**
	 * Checks if a timer has expired and resets it if it has.
	 * 
	 * @remarks
	 * Version of OnceAt without usage stacktrace (faster), but need usage unique key
	 * If key first time used, timer will be reseted and function will return true.
	 * Key should be unique for all scripts.
	 * 
	 * @param timeInS - The time in seconds for the timer.
	 * @param key - The key of the timer.
	 * @param realTime - A boolean indicating whether the timer is based on real time.
	 * @returns A boolean indicating whether the timer has expired.
	 * 
	 * @example
	 * ```ts
	 * if (Engine.OnceAtByKey(1, "OneSecondTimer"))
	 * {
	 *    // do something every second
	 * }
	 * ```
	 */
	function OnceAtByKey(timeInS: number, key: string, realTime?: boolean): boolean;

	/**
	 * Checks if a timer has expired and resets it if it has.
	 * 
	 * @remarks
	 * If key first time used, timer will be reseted and function will return true.
	 * Uses {@link OnceAtByKey} with file position as key.
	 * 
	 * @param timeInS - The time in seconds for the timer.
	 * @param realTime - A boolean indicating whether the timer is based on real time.
	 * @returns A boolean indicating whether the timer has expired.
	 * 
	 * @example
	 * ```ts
	 * if (Engine.OnceAt(1))
	 * {
	 *   // do something every second
	 * }
	 */
	function OnceAt(timeInS: number, realTime?: boolean): boolean;

	/**
	 * Opens a URL in the default web browser.
	 * 
	 * @param fullURL - The URL to open.
	 */
	function OpenURL(fullURL: string): void;

	/**
	 * Enables or disables visibility of particles in fog.
	 * 
	 * @param enable - A boolean indicating whether to enable particle fog.
	 */
	function SetUseParticleFow(enabled: boolean): void;

	/**
	 * Enables or disables white fog (not fog of war).
	 * 
	 * @param enable - A boolean indicating whether to enable fog.
	 */
	function SetFogEnable(enabled: boolean): void;

	/**
	 * Sets the far clipping plane distance for the rendering engine.
	 * 
	 * @remarks
	 * For bigger camera distance use bigger value. 5000 is good for common cases.
	 * 
	 * @param value - The distance to the far clipping plane.
	 */
	function SetRFarz(value: number): void;

	/**
	 * Causes the game to crash. This is useful for debugging.
	 */
	function Crash(): void;

	/**
	 * Shows the game window.
	 */
	function ShowWindow(): void;

	// Changer functions

	/**
	 * Checks if the profile changer is available.
	 * 
	 * @deprecated use ProfileChanger.HasProfileChanger instead
	 * @returns A boolean indicating whether the profile changer is available.
	 */
	function HasProfileChanger(): boolean;

	/** 
	 * Sets the level of a hero in Dota Plus.
	 * 
	 * @deprecated use ProfileChanger.SetPlusLVL instead
	 * @param heroName npc_dota_hero_techies format
	 * @param level 0 - 30
	 */
	function SetPlusLVL(heroName: string, level: number): void;

	/**
	 * Sets whether the gem color is available.
	 * 
	 * @param val - A boolean indicating whether the gem color is available.
	 */
	function SetHasGemColor(val: boolean): void;

	/**
	 * Sets the color of the gem.
	 * 
	 * @param r - The red component of the color.
	 * @param g - The green component of the color.
	 * @param b - The blue component of the color.
	 * @param a - The alpha component of the color.
	 */
	function SetGemColor(r: number, g: number, b: number, a: number): void;

	// Dota functions

	/**
	 * Checks if the match can be accepted.
	 * 
	 * @returns A boolean indicating whether the match can be accepted.
	 */
	function CanAcceptMatch(): boolean;

	/**
	 * Accepts the match.
	 * @param state - The state of the match. Default - 1 See DOTALobbyReadyState.
	 */
	function AcceptMatch(state?: number): void;

	/**
	 * Checks if the shop is open.
	 * 
	 * @returns A boolean indicating whether the shop is open.
	 */
	function IsShopOpen(): boolean;

	/**
	 * Checks if the scoreboard is open.
	 * 
	 * @returns A boolean indicating whether the scoreboard is open.
	 */
	function IsScoreboardOpen(): boolean;

	/**
	 * Checks if the menu is open.
	 * 
	 * @returns A boolean indicating whether the menu is open.
	 */
	function IsMenuOpen(): boolean;

	/**
	 * Checks if the user is in game.
	 * 
	 * @returns A boolean indicating whether the user is in game.
	 */
	function IsInGame(): boolean;

	/**
	 * Checks if the user is searching for a match.
	 * 
	 * @returns A boolean indicating whether the user is searching for a match.
	 */
	function IsSearchMatch(): boolean;

	/**
	 * Checks if a point is visible (not in fog of war).
	 * 
	 * @param position - The position vector of the point.
	 * @returns A boolean indicating whether the point is visible.
	 */
	function IsPointVisible(position: Vector): boolean;

	/**
	 * Retrieves the name of the current map.
	 * 
	 * @returns The name of the current map.
	 * @todo Add cache.
	 */
	function GetMapName(): string;

	/**
	 * Retrieves the ground Z coordinate at a given position.
	 * 
	 * @param position - The position vector.
	 * @returns The ground Z coordinate.
	 */
	function GetGroundZ(position: Vector): number;

	/**
	 * Retrieves the competitive MMR of the player.
	 * 
	 * @returns The competitive MMR of the player.
	 */
	function GetCompetitiveMMR(): number;

	/**
	 * Retrieves the Steam ID of the player.
	 * 
	 * @returns The Steam ID of the player.
	 */
	function GetSteamID(): string;

	/**
	 * Registers a fire event.
	 * 
	 * @remarks
	 * Used to add some events to OnFireEvent callback (like entity_hurt, etc).
	 * Do not use if Safe Mode is enabled. (See {@link IsSafeMode})
	 * 
	 * @param eventName - The name of the event.
	 */
	function RegisterFireEvent(eventName: string): void;

	/**
	 * This function executes a command like in the console.
	 * 
	 * @param command - The command to execute.
	 */
	function ExecuteCommand(command: string): void;

	/**
	 * This function requests a profile.
	 * 
	 * @remarks
	 * Sends to GC CMsgProfileRequest message.
	 * 
	 * @param steamID32 - The Steam ID of the profile.
	 * @param callback - The callback function to execute when the profile is retrieved.
	 */
	function RequestProfile(steamID32: number, callback: (obj: any) => void): void;

	/**
	 * This function requests a profile card.
	 * 
	 * @remarks
	 * Sends to GC CMsgClientToGCGetProfileCard message.
	 * 
	 * @param steamID32 - The Steam ID of the profile card.
	 * @param callback - The callback function to execute when the profile card is retrieved.
	 * @todo Implement this function.
	 */
	function RequestProfileCard(steamID32: number, callback: (obj: any) => void): void;

	/**
	 * Returns current Dota version. Example: 6123
	 */
	function GetDotaVersion(): number;

	function DrawWorldLine(start: Vector, end: Vector): void;

	function BeginWorldLine(start: Vector): void;

	function ContinueWorldLine(end: Vector): void;

	function EndWorldLine(): void;

	/**
	 * Copies a given text to the clipboard.
	 * 
	 * @param text - The text to be copied to the clipboard.
	 */
	function SetClipboardText(text: string): void;

	/**
	 * Retrieves the text from the clipboard.
	 * 
	 * @returns The text from the clipboard.
	 */
	function GetClipboardText(): string;

	function EnableExecuteCommand(enable: boolean): void;

	function IsExecuteCommandEnabled(): boolean;

	function EnablePrepareUnitOrders(enable: boolean): void;

	function IsPrepareUnitOrdersEnabled(): boolean;

	function EnableParticles(enable: boolean): void;

	function IsParticlesEnabled(): boolean;

	function ReloadScripts(): void;

	/** @internal */
	function SetInfo(key: Enum.CloudType, jsonData: string): void;

	/** @internal */
	function PushNotification(jsonData: string): void;

	/** @internal */
	function ProcessEncodedData(cmd: number, buffer: CmdBufferReader): boolean;
}