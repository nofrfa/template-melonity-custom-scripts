declare class GCRequest
{
	IsResolved(): boolean;

	GetResponse(): object;

	GetID(): number;
}

declare interface GCResponseInfo
{
	responseEmsg: number;
	responseName: string;
	onResolve?: (obj: GCRequest) => void;
}

declare namespace GC
{
	function Request(obj: object, requestEmsg: number, requestName: string, respInfo?: GCResponseInfo): GCRequest;

	/** @internal */
	function ProcessEncodedData(cmd: InternalEnum.InEvents, buffer: CmdBufferReader): boolean;
}