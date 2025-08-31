declare interface PathInfo
{
	hasPath: boolean;
	path: Vector[];
}

declare namespace GridNav
{
	function IsTraversable(pos: Vector, noTreeMode?: boolean): boolean;

	function FindPath(start: Vector, end: Vector, noTreeMode?: boolean, allowIncomplete?: boolean): PathInfo;
}