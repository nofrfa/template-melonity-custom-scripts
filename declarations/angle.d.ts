/**
 * Represents a 3D angle.
 */
declare class Angle
{
	/**
	 * The pitch component of the angle.
	 */
	pitch: number;
	/**
	 * The yaw component of the angle.
	 */
	yaw: number;
	/**
	 * The roll component of the angle.
	 */
	roll: number;
	/**
	 * Creates a new angle.
	 *
	 * @param pitch - The pitch component of the angle. Defaults to 0.
	 * @param yaw - The yaw component of the angle. Defaults to 0.
	 * @param roll - The roll component of the angle. Defaults to 0.
	 */
	constructor(pitch?: number, yaw?: number, roll?: number);
	/**
	 * Gets the pitch component of the angle.
	 */
	get x(): number;
	/**
	 * Sets the pitch component of the angle.
	 */
	set x(value: number);
	/**
	 * Gets the yaw component of the angle.
	 */
	get y(): number;
	/**
	 * Sets the yaw component of the angle.
	 */
	set y(value: number);
	/**
	 * Gets the roll component of the angle.
	 */
	get z(): number;
	/**
	 * Sets the roll component of the angle.
	 */
	set z(value: number);
	/**
	 * Returns a forward-facing vector from this angle.
	 *
	 * @returns A forward-facing vector from this angle.
	 */
	GetForward(): Vector;
	/**
	 * Adds another angle to this angle.
	 *
	 * @param other - The angle to add.
	 * @returns A new angle that is the result of the addition.
	 */
	add(other: Angle): Angle;
	/**
	 * Subtracts another angle from this angle.
	 *
	 * @param other - The angle to subtract.
	 * @returns A new angle that is the result of the subtraction.
	 */
	sub(other: Angle): Angle;
	/**
	 * Returns a string representation of the angle.
	 *
	 * @returns A string representation of the angle.
	 */
	toString(): string;
}
