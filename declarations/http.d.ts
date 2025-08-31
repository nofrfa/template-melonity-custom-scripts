declare class HTTPConnection
{
	IsResolved(): boolean;

	GetBody(): string;

	GetStatusCode(): number;

	GetHeaders(): { [key: string]: string };

	GetID(): number;
}

declare interface HTTPRequestInfo
{
	headers?: { [key: string]: string; };
	parameters?: { [key: string]: string; };
	// used in POST
	data?: string;
	// default: false
	ssl?: boolean;
	// default: 80 or 443 (if ssl is true)
	port?: number;
	// default: 30, in seconds
	readTimeout?: number;
	// default: 30, in seconds
	writeTimeout?: number;
	onResolve?: (obj: HTTPConnection) => void;
}

declare namespace HTTP
{
	function Request(url: string, path: string, method: string, optInfo?: HTTPRequestInfo): HTTPConnection;

	/** @internal */
	function ProcessEncodedData(cmd: InternalEnum.InEvents, buffer: CmdBufferReader): boolean;
}