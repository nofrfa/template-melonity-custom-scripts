declare namespace ConVar
{
	function SetValue(name: string, value: number | string): void;

	function GetValue(name: string): number | string;
}