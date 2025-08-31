declare namespace Config
{
	/**
	 * Retrieves a config object by its name.
	 * 
	 * @remarks
	 * After changing the config object, you must call {@link SaveConfig} to save the changes.
	 * 
	 * @param configName - The name of the configuration object.
	 * @returns The configuration object.
	 */
	function GetConfig(configName: string): { [key: string]: any; };

	/**
	* Saves a configuration object by its name.
	* 
	* @param configName - The name of the configuration object.
	*/
	function SaveConfig(configName: string): void

	/**
	 * Reads a value from a configuration object. If the value does not exist, it returns a default value.
	 * 
	 * @remarks
	 * If the value is a string, it will be parsed as JSON.
	 * 
	 * @param configName - The name of the configuration object.
	 * @param key - The key of the value to read.
	 * @param defaultValue - The default value to return if the key does not exist.
	 * @returns The value from the configuration object or the default value.
	 */
	function Read(configName: string, key: string, defaultValue: any): any;

	/**
	 * Reads a raw value from a configuration object. If the value does not exist, it returns a default value.
	 * 
	 * @remarks
	 * If the value is a string, it will not be parsed as JSON.
	 * 
	 * @param configName - The name of the configuration object.
	 * @param key - The key of the value to read.
	 * @param defaultValue - The default value to return if the key does not exist.
	 * @returns The raw value from the configuration object or the default value.
	 */
	function ReadRaw(configName: string, key: string, defaultValue: any): any

	/**
	 * Reads an integer value from a configuration object. If the value does not exist, it returns a default value.
	 * 
	 * @param configName - The name of the configuration object.
	 * @param key - The key of the value to read.
	 * @param defaultValue - The default value to return if the key does not exist.
	 * @returns The integer value from the configuration object or the default value.
	 */
	function ReadInt(configName: string, key: string, defaultValue: number): number;

	/**
	 * Reads a floating point value from a configuration object. If the value does not exist, it returns a default value.
	 * 
	 * @param configName - The name of the configuration object.
	 * @param key - The key of the value to read.
	 * @param defaultValue - The default value to return if the key does not exist.
	 * @returns The floating point value from the configuration object or the default value.
	 */
	function ReadFloat(configName: string, key: string, defaultValue: number): number;

	/**
	 * Reads a string value from a configuration object. If the value does not exist, it returns a default value.
	 * 
	 * @param configName - The name of the configuration object.
	 * @param key - The key of the value to read.
	 * @param defaultValue - The default value to return if the key does not exist.
	 * @returns The string value from the configuration object or the default value.
	 */
	function ReadString(configName: string, key: string, defaultValue: string): string;

	/**
	 * Writes a value to a configuration object and saves it.
	 * 
	 * @param configName - The name of the configuration object.
	 * @param key - The key of the value to write.
	 * @param value - The value to write.
	 */
	function Write(configName: string, key: string, value: any): void;

	/**
	 * Writes a raw value to a configuration object and saves it.
	 * 
	 * @remarks
	 * Directly writes the value to the configuration object.
	 * 
	 * @param configName - The name of the configuration object.
	 * @param key - The key of the value to write.
	 * @param value - The value to write.
	 */
	function WriteRaw(configName: string, key: string, value: any): void

	/**
	 * Writes an integer value to a configuration object and saves it.
	 * 
	 * @param configName - The name of the configuration object.
	 * @param key - The key of the value to write.
	 * @param value - The integer value to write.
	 * @throws {Error} If the value is not a number.
	 */
	function WriteInt(configName: string, key: string, value: number): void;

	/**
	 * Writes a floating point value to a configuration object and saves it.
	 * 
	 * @param configName - The name of the configuration object.
	 * @param key - The key of the value to write.
	 * @param value - The floating point value to write.
	 * @throws {Error} If the value is not a number.
	 */
	function WriteFloat(configName: string, key: string, value: number): void;

	/**
	 * Writes a string value to a configuration object and saves it.
	 * 
	 * @param configName - The name of the configuration object.
	 * @param key - The key of the value to write.
	 * @param value - The string value to write.
	 * @throws {Error} If the value is not a string.
	 */
	function WriteString(configName: string, key: string, value: string): void;
}