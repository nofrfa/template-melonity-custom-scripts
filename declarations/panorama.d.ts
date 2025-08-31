declare class PanoramaPanel
{
	handle: number;
	is_valid: boolean;

	SetOpacity(val: number): void;

	GetOpacity(): number;

	GetID(): string;

	GetPosition(): [number, number];

	GetChilds(): PanoramaPanel[];

	FindChild(name: string): PanoramaPanel | null;

	FindChildFromPath(path: string[]): PanoramaPanel | null;

	GetSize(): [number, number];

	GetOffset(): [number, number];

	SetForceDraw(val: boolean): void;

	Invalidate(): void;

	IsValid(): boolean;

	LoadLayout(layoutFile: string, option1: boolean, option2: boolean): void;

	// LoadLayoutFromString(layoutString: string, option1: boolean, option2: boolean): void;

	RunScript(script: string, scriptLocation?: string): void;

	/** @internal */
	constructor(handle: number);
}

declare namespace Panorama
{
	function FindByNameAll(name: string): PanoramaPanel[];
	
	function FindByName(name: string): PanoramaPanel | null;

	function GetDashboardRoot(): PanoramaPanel | null;

	function GetDotaHudRoot(): PanoramaPanel | null;

	function CreatePanel(type: string, parent: PanoramaPanel, id: string): PanoramaPanel;
	
	/** @internal */
	function IdToPanel(id: number): PanoramaPanel;

	/** @internal */
	function ProcessEncodedData(cmd: InternalEnum.InEvents, buffer: CmdBufferReader): boolean;
}