declare namespace Schema
{
	/**
	 * Retrieves the memory offset of a field in a class.
	 * 
	 * @param className - The name of the class. Can be found in Entity section in debug menu [F11].
	 * @param propertyName - The name of the field.
	 * @returns The memory offset of the field.
	 */
	function GetFieldOffset(className: string, propertyName: string): number;

	/**
	 * Retrieves the type of a field in a class.
	 * 
	 * @param className - The name of the class. Can be found in Entity section in debug menu [F11].
	 * @param propertyName - The name of the field.
	 * @returns The type of the field.
	 */
	function GetFieldType(className: string, propertyName: string): string;

	/**
	 * Retrieves the size of a type in a class.
	 * 
	 * @param className - The name of the class. Can be found in Entity section in debug menu [F11].
	 * @returns The size of the type.
	 */
	function GetTypeSize(className: string): number;
}