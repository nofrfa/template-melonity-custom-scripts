declare namespace Input
{
	function GetCursorPos(): [number, number];

	function SetCursorPos(x: number, y: number): void;

	function IsCursorInBounds(x0: number, y0: number, x1: number, y1: number): boolean;

	function IsCursorInRect(x: number, y: number, width: number, height: number, align?: Enum.ContentAlign): boolean;

	function IsInputCaptured(): boolean;

	function IsKeyDown(key: Enum.ButtonCode, checkInputCapture?: boolean): boolean;

	function IsKeyDownOnce(key: Enum.ButtonCode, checkInputCapture?: boolean): boolean;

	function GetNearestEntityToCursorFromList<T extends Entity>(teamType: Enum.TeamType, unitList: T[]): T | null;

	function GetNearestHeroToCursor(teamType: Enum.TeamType): Hero | null;

	function GetNearestUnitToCursor(teamType: Enum.TeamType): NPC | null;

	function IsCursorOnMinimap(): boolean;

	function GetWorldCursorPos(): Vector;

	function GetHoveredEntityIndex(): number;

	function GetHoveredEntity(): Entity | null;

	/** @internal */
	function OnKeyEventInternal(key: InternalEnum.ImGuiKey, down: boolean): void;

	/** @internal */
	function ProcessEncodedData(cmd: InternalEnum.InEvents, buffer: CmdBufferReader): boolean;

	/** @internal */
	function IsKeyDownInternal(key: InternalEnum.ImGuiKey): boolean;

	/** @internal */
	function IsKeyDownOnceInternal(key: InternalEnum.ImGuiKey): boolean;
}