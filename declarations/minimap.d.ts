declare class MiniMapIconHandle
{
	/* @internal */
	constructor(index: number);

	/* @internal */
	GetIndex(): number;
}

declare namespace MiniMap
{
	function Ping(position: Vector, type: Enum.PingType, clientSide?: boolean): void;

	function DrawLine(start: Vector, end: Vector, clientSide?: boolean): void;

	function BeginLine(start: Vector, clientSide?: boolean): void;

	function ContinueLine(end: Vector, clientSide?: boolean): void;

	function AddIconByName(handle: MiniMapIconHandle | null, iconName: string, position: Vector, size: number | [number, number], timeInS?: number, color?: Color): MiniMapIconHandle;

	function AddIconByImage(handle: MiniMapIconHandle | null, image: Image, position: Vector, size: number | [number, number], timeInS?: number, color?: Color): MiniMapIconHandle;
}