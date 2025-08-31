declare namespace Enum
{
	export enum RoundCorners
	{
		TopLeft,
		TopRight,
		BottomLeft,
		BottomRight,
		None,
		Top,
		Bottom,
		Left,
		Right,
		All
	}

	export enum FontWeight
	{
		ULTRALIGHT,
		LIGHT,
		NORMAL,
		MEDIUM,
		BOLD,
		EXTRABOLD,
	}

	export enum FontFlags
	{
		NONE,
		OUTLINE,
		ITALIC,
		/* @deprecated do nothing */
		ANTIALIAS,
		/* @deprecated do nothing */
		GAUSSIANBLUR,
		/* @deprecated do nothing */
		DROPSHADOW,
	}

	export enum CirclePathType
	{
		OpenPath,
		ClosedPath,
		ClosedPathWithCenterPoint,
	}
}

declare interface ClipRect
{
	min: Vector;
	max: Vector;
	// if true, intersect with current clip rect
	intersect?: boolean;
}

declare interface DrawOptions
{
	align?: Enum.ContentAlign;
	// in s
	time?: number;
	// if bigger than 0 will be draw on top of any rendering, if less, then under
	priority?: number;
	clipRect?: ClipRect;
	isOnDraw?: boolean;
	drawOverUI?: boolean;
}

declare interface LoadFontOptions
{
	// range: 1 - 1000 def: 400
	Weight?: number;
	// range: 25 200 def: 100
	Width?: number;
	// range: 6 - 144 def: 14
	OpticalSize?: number;
	// range: -1000 - 1000 def: 0
	GRAD?: number;
	// range: -90 - 90 def: 0
	Slant?: number;
	// range: -1000 - 2000, def: 400
	XTRA?: number;

	XOPQ?: number;
	YOPQ?: number;
	YTLC?: number;
	YTUC?: number;
	YTAS?: number;
	YTDE?: number;
	YTFI?: number;

	// spacing between letters in percent of font size
	spacingEM?: number;
	// spacing between letters in pixels, this param overrides spacingEM
	spacingPX?: number;

	Flags?: Enum.FontFlags;
	Size?: number;
}

declare interface LoadImageOptions
{
	svgWidth?: number;
	svgHeight?: number;
}


declare class Font
{
	constructor(name: string, options?: LoadFontOptions);

	GetTextSize(text: string): [number, number];

	GetAlignmentOffset(text: string, alignment?: Enum.ContentAlign): [number, number];

	DrawText(x: number, y: number, text: string): void;

	DrawWorldText(vec: Vector, text: string, xOffset?: number, yOffset?: number): void;
}

declare class Image
{
	constructor(name: string, options?: LoadImageOptions);

	GetSize(): [number, number];

	GetPath(): string;

	GetIndex(): number;

	DrawImage(x: number, y: number, width: number, height: number, rounding?: number, corners?: Enum.RoundCorners,
		uv1?: [number, number], uv2?: [number, number]): void;

	DrawImageQuad(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number,
		x4: number, y4: number, uv1?: [number, number], uv2?: [number, number],
		uv3?: [number, number], uv4?: [number, number]): void;

	DrawWorldImage(vec: Vector, width: number, height: number, xOffset?: number, yOffset?: number, rounding?: number, corners?: Enum.RoundCorners,
		uvMin?: [number, number], uvMax?: [number, number]): void;

	IsLoaded(): boolean;

	Load(): void;

	IsValid(): boolean;
}

/** @deprecated use Image class instead */
type LoadedImage = Image;

declare interface Vertex
{
	position: Vector;
	texCoord: Vector;
}

declare class Vertexes
{
	constructor(array?: Vertex[]);

	Push(vert: Vertex): this;

	Pop(): this;

	Set(index: number, vert: Vertex): void;

	Get(index: number): Vertex;

	Length(): number;

	Reserve(newSize: number): this;

	/**
	 * @param startAngle 0
	 * @param endAngle 360
	 * @param segmentCount 20
	 */
	PushCircle(centerX: number, centerY: number, radius: number, startAngle?: number, endAngle?: number, segmentCount?: number): this;

	/**
	 * @param roundSize corner rounding size in pixels, does not change the width and height
	 */
	PushRoundRect(x: number, y: number, w: number, h: number, roundSize: number, segmentCount: number): this;

	PushRect(x: number, y: number, w: number, h: number): this;

	ScaleUV(valX: number, valY: number): this;

	//Scale();

	//MoveVertexes();?
}

// Render target
declare class Texture
{
	constructor(w: number, h: number);

	SetSize(w: number, h: number): void;

	GetSize(): [number, number];

	/**
	 * default color is transparent black, image should be loaded
	 */
	Clear(color?: Color): this;

	GetIndex(): number;

	GetImage(): Image;

	ApplyBlur(blurRadius: number, textureCompressionScale: number): this;
}

// Shader
declare class Shader
{
	constructor(code: string, isVertexShader: boolean);

	GetIndex(): number;
}

// Blend state
declare interface BlendStateValue
{
	alpha_to_coverage_enabled: boolean;
	independent_blend_enable: boolean;
	blend_enabled: boolean;
	src_blend: Enum.BlendStateBlend;
	dest_blend: Enum.BlendStateBlend;
	blend_op: Enum.BlendStateBlendOp;
	src_blend_alpha: Enum.BlendStateBlend;
	dest_blend_alpha: Enum.BlendStateBlend;
	blend_op_alpha: Enum.BlendStateBlendOp;
	render_target_write_mask: number;
}

declare class BlendState
{
	constructor(value: BlendStateValue);

	GetIndex(): number;
}

declare namespace Renderer
{
	/////////////////////////
	// Primitives Drawing
	/////////////////////////

	/**
	 * Draws an outlined rectangle to the screen at the specified x and y coordinates, with the specified width and height.
	 * 
	 * @param x The x coordinate of the top-left corner of the rectangle.
	 * @param y The y coordinate of the top-left corner of the rectangle.
	 * @param width The width of the rectangle.
	 * @param height The height of the rectangle.
	 * @param rounding The radius of the rounded corners of the rectangle, in pixels. (optional)
	 * @param corners The corners of the rectangle that should be rounded. (optional)
	 * @param thickness The thickness of the outline, in pixels. (optional)
	 * 
	 * @example
	 * // sets the color to blue
	 * Renderer.SetDrawColor(0, 0, 255, 255);
	 * // draws an outlined rectangle at (10,10) with a width of 100 and a height of 50
	 * Renderer.DrawOutlineRect(10, 10, 100, 50);
	 * 
	 * // sets the color to green
	 * Renderer.SetDrawColor(0, 255, 0, 255);
	 * // draws an outlined rectangle with rounded bottom corners and a thickness of 3 pixels
	 * Renderer.DrawOutlineRect(10, 10, 100, 50, 5, Enum.RoundCorners.Bottom, 3);
	 */
	function DrawOutlineRect(x: number, y: number, width: number, height: number, rounding?: number, corners?: Enum.RoundCorners, thickness?: number): void;

	function DrawOutlineQuad(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number, thickness: number): void;

	/**
	 * Draws an outlined rectangle to the screen at the specified position in the world.
	 * The xOffset and yOffset parameters can be used to adjust the position of the rectangle on the screen after it has been projected into 2D space.
	 * x - xOffset = resultX and y - yOffset = resultY
	 * 
	 * @param vec The position of the top-left corner of the rectangle in the world.
	 * @param width The width of the rectangle.
	 * @param height The height of the rectangle.
	 * @param xOffset The amount to offset the x coordinate by. (optional)
	 * @param yOffset The amount to offset the y coordinate by. (optional)
	 * @param rounding The radius of the rounded corners of the rectangle, in pixels. (optional)
	 * @param corners The corners of the rectangle that should be rounded. (optional)
	 * @param thickness The thickness of the outline, in pixels. (optional)
	 * 
	 * @example
	 * // sets the color to blue
	 * Renderer.SetDrawColor(0, 0, 255, 255);
	 * // draws an outlined rectangle at the position (10,10,10) with a width of 100 and a height of 50
	 * Renderer.DrawWorldOutlineRect(new Vector(10, 10, 10), 100, 50);
	 * 
	 * // sets the color to green
	 * Renderer.SetDrawColor(0, 255, 0, 255);
	 * // draws an outlined rectangle at the position (10,10,10) with a width of 100 and a height of 50, offset by 10 pixels in the x and y direction
	 * // and rounded bottom corners with a thickness of 3 pixels
	 * Renderer.DrawWorldOutlineRect(new Vector(10, 10, 10), 100, 50, 10, 10, 5, Enum.RoundCorners.Bottom, 3);
	 */
	function DrawWorldOutlineRect(vec: Vector, width: number, height: number, xOffset?: number, yOffset?: number, rounding?: number, corners?: Enum.RoundCorners, thickness?: number): void;

	/**
	 * Draws a filled rectangle to the screen at the specified x and y coordinates, with the specified width and height. 
	 * The optional rounding parameter can be used to round the corners of the rectangle, and the corners parameter can be used to specify which corners to round.
	 * The color of the rectangle can be set by calling the SetDrawColor function before calling this function.
	 * 
	 * @param x The x coordinate of the top-left corner of the rectangle.
	 * @param y The y coordinate of the top-left corner of the rectangle.
	 * @param width The width of the rectangle.
	 * @param height The height of the rectangle.
	 * @param rounding The radius of the rounded corners of the rectangle, in pixels. (optional)
	 * @param corners The corners of the rectangle that should be rounded. (optional)
	 * 
	 * @example
	 * // sets the color to blue
	 * Renderer.SetDrawColor(0, 0, 255, 255);
	 * // draws a filled rectangle at (10,10) with a width of 100 and a height of 50
	 * Renderer.DrawFilledRect(10, 10, 100, 50);
	 * 
	 * // sets the color to green
	 * Renderer.SetDrawColor(0, 255, 0, 255);
	 * // draws a filled rectangle with rounded bottom corners
	 * Renderer.DrawFilledRect(10, 10, 100, 50, 5, Enum.RoundCorners.Bottom);
	 */
	function DrawFilledRect(x: number, y: number, width: number, height: number, rounding?: number, corners?: Enum.RoundCorners): void;

	function DrawFilledQuad(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): void;

	function DrawWorldFilledRect(vec: Vector, width: number, height: number, xOffset?: number, yOffset?: number, rounding?: number, corners?: Enum.RoundCorners): void;

	/**
	 * Draws a filled rectangle to the screen at the specified x and y coordinates, with the specified width and height. 
	 * The colors of the rectangle's corners can be specified using the uprLeft, uprRight, botRight, and botLeft parameters.
	 * The optional rounding and corners parameters work the same as in the DrawFilledRect function.
	 * 
	 * @param x The x coordinate of the top-left corner of the rectangle.
	 * @param y The y coordinate of the top-left corner of the rectangle.
	 * @param width The width of the rectangle.
	 * @param height The height of the rectangle.
	 * @param uprLeft The color of the top-left corner of the rectangle.
	 * @param uprRight The color of the top-right corner of the rectangle.
	 * @param botRight The color of the bottom-right corner of the rectangle.
	 * @param botLeft The color of the bottom-left corner of the rectangle.
	 * @param rounding The radius of the rounded corners of the rectangle, in pixels. (optional)
	 * @param corners The corners of the rectangle that should be rounded. (optional)
	 * 
	 * @example
	 * DrawFilledRectMultiColor(10, 10, 100, 50, 0xFF0000FF, 0x00FF00FF, 0x0000FFFF, 0xFFFF00FF);
	 * // draws a rectangle with red top-left, green top-right, blue bottom-right, and yellow bottom-left corners
	 */
	function DrawFilledRectMultiColor(x: number, y: number, width: number, height: number, uprLeft: number, uprRight: number, botRight: number, botLeft: number, rounding?: number, corners?: Enum.RoundCorners): void;

	/** @param flag 0 - not closed, 1 - closed, 2 - closed with point in center */
	function DrawOutlineCircle(centerX: number, centerY: number, radius: number, thickness?: number, segments?: number, startAngleInDegrees?: number, endAngleInDegrees?: number, pathType?: Enum.CirclePathType): void;

	function DrawFilledCircle(centerX: number, centerY: number, radius: number, segments?: number, startAngleInDegrees?: number, endAngleInDegrees?: number): void;

	function DrawLine(x1: number, y1: number, x2: number, y2: number, thickness?: number): void;

	function DrawWorldLine(vec1: Vector, vec2: Vector, thickness?: number): void;

	/////////////////////////
	// Text Drawing
	/////////////////////////

	function LoadFont(name: string, size: number, weight: Enum.FontWeight, flags?: Enum.FontFlags, options?: LoadFontOptions): Font;

	function GetTextSize(font: Font, text: string): [number, number];

	function DrawText(font: Font, x: number, y: number, text: string): void;

	function DrawTextInRect(font: Font, x: number, y: number, width: number, height: number, text: string): void;

	function DrawTextCentered(font: Font, x: number, y: number, text: string, time?: number): void;

	function DrawWorldText(font: Font, vec: Vector, text: string, xOffset?: number, yOffset?: number): void;

	/////////////////////////
	// Image Drawing
	/////////////////////////

	function LoadImage(fileName: string, svgWidth?: number, svgHeight?: number): Image;

	function DrawImage(image: Image, x: number, y: number, width: number, height: number,
		rounding?: number, corners?: Enum.RoundCorners, uvMin?: [number, number], uvMax?: [number, number]): void;

	function DrawImageQuad(image: Image, x1: number, y1: number, x2: number, y2: number,
		x3: number, y3: number, x4: number, y4: number,
		uv1?: [number, number], uv2?: [number, number],
		uv3?: [number, number], uv4?: [number, number]): void;

	function DrawWorldImage(image: Image, vec1: Vector, width: number, height: number, xOffset?: number, yOffset?: number): void;

	/////////////////////////
	// State Management
	/////////////////////////

	function SetDrawColor(r: number, g: number, b: number, a: number): void;

	function SetDrawColor(color: Color): void;

	function PushDrawOptions(options: DrawOptions): void;

	function PopDrawOptions(count?: number): void;

	/** alias for PushDrawOptions({priority: val}) */
	function PushDrawPriority(val: number): void;

	/** alias for PushDrawOptions({time: time}) */
	function PushDrawTime(timeInS: number): void;

	/** alias for PushDrawOptions({align: align}) */
	function PushDrawAlign(align: Enum.ContentAlign): void;

	/** alias for PushDrawOptions({align: Enum.ContentAlign.CenterXY}) */
	function PushDrawCentered(): void;

	/** @deprecated use PushDrawPriority */
	function SetTopMost(enable: boolean): void;

	/////////////////////////
	// Checks
	/////////////////////////

	function IsOnScreen(x: number, y: number): boolean;

	/////////////////////////
	// Getters
	/////////////////////////

	function GetScreenSize(): [number, number];

	function GetFullScreenClipRect(): ClipRect;

	function GetMiniMapRect(): [number, number, number, number];

	function GetImagePath(image: Image): string;

	function GetAlignment(): Enum.ContentAlign;

	function GetPriority(): number;

	/////////////////////////
	// Transformations
	/////////////////////////

	function WorldToScreen(pos: Vector, onScreenCheck?: boolean): [number, number, boolean];

	function ScreenToWorld(x: number, y: number): Vector | null;

	function MapToWorld(x: number, y: number): [number, number];

	function WorldToMap(x: number, y: number): [number, number];

	function GetAlignmentOffset(width: number, height: number, align?: Enum.ContentAlign): [number, number];

	/////////////////////////
	// Vertexes
	/////////////////////////

	/**
	 * @param x if pass x argument function will apply x offset for all vertexes before draw
	 * @param y if pass y argument function will apply y offset for all vertexes before draw
	 */
	function DrawPolygon(vertexes: Vertexes, x?: number, y?: number): void;

	/**
	 * @param x if pass x argument function will apply x offset for all vertexes before draw
	 * @param y if pass y argument function will apply y offset for all vertexes before draw
	 */
	function DrawTexturedPolygon(vertexes: Vertexes, image: Image, x?: number, y?: number): void;

	/////////////////////////
	// Render Targets
	/////////////////////////

	function PushRenderTarget(texture: Texture): void;

	/** @deprecated use PushRenderTarget instead */
	function SetRenderTarget(texture: Texture): void;

	function PopRenderTarget(): void;

	/** @deprecated use PopRenderTarget instead */
	function SetOriginalRenderTarget(): void;

	function PushShader(shader: Shader): void;

	function PopShader(): void;

	function PushBlendState(blendState: BlendState): void;

	function PopBlendState(): void;

	function DrawScreenRegion(screenX: number, screenY: number, screenW: number, screenH: number, drawX: number, drawY: number, drawW: number, drawH: number): void;

	/** @internal */
	function ColorPicker(x: number, y: number, color: number[], scale: number, lang: string): number[];

	/** @internal */
	function ProcessEncodedData(cmd: InternalEnum.InEvents, buffer: CmdBufferReader): boolean;

	/** @internal */
	function OnCallbackEncodedStart(): void;

	/** @internal */
	function OnCallbackEncodedEnd(): void;

	/** @internal */
	function DumpState(): void;

	/** @internal */
	function OnCallbackStart(isOnDraw: boolean): void;

	/** @internal */
	function OnCallbackEnd(isOnDraw: boolean, name: string): void;
}