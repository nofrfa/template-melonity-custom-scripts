/**
 * Represents a color.
 */
declare class Color
{
	/**
	 * The red component of the color.
	 */
	r: number;

	/**
	 * The green component of the color.
	 */
	g: number;

	/**
	 * The blue component of the color.
	 */
	b: number;

	/**
	 * The alpha component of the color.
	 */
	a: number;

	/**
	 * Creates a new color.
	 * 
	 * @param r - The red component of the color. Defaults to 255.
	 * @param g - The green component of the color. Defaults to 255.
	 * @param b - The blue component of the color. Defaults to 255.
	 * @param a - The alpha component of the color. Defaults to 255.
	 */
	constructor(r?: number, g?: number, b?: number, a?: number);

	/**
	 * Creates a new color from a number.
	 * 
	 * @param value - The number to create the color from.
	 * @returns This object.
	 */
	static FromNumber(value: number): Color;

	/**
	 * Converts the color to a number.
	 *	
	 * @returns The number representing the color.
	 */
	ToNumber(): number;

	/**
	 * Sets the color to a random color.
	 *
	 * @returns This object.
	 */
	SetRandom(): this;

	SetR(value: number): this;

	SetG(value: number): this;

	SetB(value: number): this;

	SetA(value: number): this;

	/**
	 * Clones the color.
	 * 
	 * @returns The cloned color.
	 */
	Clone(): Color;

	ToVector(): Vector;

	static readonly BLACK: Color; // 0, 0, 0, 255
	static readonly RED: Color; // 255, 0, 0, 255
	static readonly GREEN: Color; // 0, 255, 0, 255
	static readonly BLUE: Color; // 0, 0, 255, 255
	static readonly YELLOW: Color; // 255, 255, 0, 255
	static readonly CYAN: Color; // 0, 255, 255, 255
	static readonly MAGENTA: Color; // 255, 0, 255, 255
	static readonly WHITE: Color; // 255, 255, 255, 255
	static readonly TRANSPARENT: Color; // 0, 0, 0, 0
}