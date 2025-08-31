declare interface LogValue
{
	str: string;
	obj: any;
}

declare interface LogMessage
{
	index: number;
	time: number;
	values: LogValue[];
	str: string;
}

declare namespace Log
{
	// variadic function
	function Write(...args: any[]): void;

	/** @deprecated */
	function GetLog(lineNun?: number): LogMessage[];
}

declare function print(...args: any[]): void;

declare function warn(...args: any[]): void;

declare function error(...args: any[]): void;