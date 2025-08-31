/**
 * Represents a 3D vector.
 */
declare class Vector
{
	/**
	 * The x component of the vector.
	 */
	x: number;

	/**
	 * The y component of the vector.
	 */
	y: number;

	/**
	 * The z component of the vector.
	 */
	z: number;

	/**
	 * Creates a new vector.
	 *
	 * @param x - The x component of the vector. Defaults to 0.
	 * @param y - The y component of the vector. Defaults to 0.
	 * @param z - The z component of the vector. Defaults to 0.
	 */
	constructor(x?: number, y?: number, z?: number);

	/**
	 * Adds another vector to this vector.
	 *
	 * @param v - The vector to add.
	 * @returns A new vector that is the result of the addition.
	 */
	add(v: Vector): Vector;

	/**
	 * Subtracts another vector from this vector.
	 *
	 * @param v - The vector to subtract.
	 * @returns A new vector that is the result of the subtraction.
	 */
	sub(v: Vector): Vector;

	/**
	 * Multiplies this vector by another vector.
	 *
	 * @param v - The vector to multiply by.
	 * @returns A new vector that is the result of the multiplication.
	 */
	mul(v: Vector): Vector;

	/**
	 * Divides this vector by another vector.
	 *
	 * @param v - The vector to divide by.
	 * @returns A new vector that is the result of the division.
	 */
	div(v: Vector): Vector;

	/**
	 * Scales this vector by a factor.
	 *
	 * @param factor - The factor to scale by.
	 */
	Scale(factor: number): void;

	/**
	 * Scales this vector by a factor.
	 *
	 * @param factor - The factor to scale by.
	 * @returns A new vector that is the result of the scaling.
	 */
	Scaled(factor: number): Vector;

	/**
	 * Returns the length of this vector.
	 *
	 * @returns The length of this vector.
	 */
	Length(): number;

	/**
	 * Returns the length of this vector in the x and y plane.
	 *
	 * @returns The length of this vector in the x and y plane.
	 */
	Length2D(): number;

	/**
	 * Returns the squared length of this vector.
	 *
	 * @returns The squared length of this vector.
	 */
	LengthSqr(): number;

	/**
	 * Returns the squared length of this vector in the x and y plane.
	 *
	 * @returns The squared length of this vector in the x and y plane.
	 */
	Length2DSqr(): number;

	/**
	 * Normalizes this vector.
	 *
	 * @remarks
	 * This vector is modified.
	 */
	Normalize(): void;

	/**
	 * Normalizes this vector in the x and y plane.
	 *
	 * @remarks
	 * This vector is modified.
	 * Z is set to 0.
	 */
	Normalize2D(): void;

	/**
	 * Returns a normalized copy of this vector.
	 *
	 * @returns A normalized copy of this vector.
	 */
	Normalized(): Vector;

	/**
	 * Returns a normalized copy of this vector in the x and y plane.
	 *
	 * @returns A normalized copy of this vector in the x and y plane.
	 */
	Normalized2D(): Vector;

	/**
	 * Returns the dot product of this vector and another vector.
	 *
	 * @param v - The vector to dot with.
	 * @returns The dot product of this vector and another vector.
	 */
	Dot(v: Vector): number;

	/**
	 * Returns the dot product of this vector and another vector in the x and y plane.
	 *
	 * @param v - The vector to dot with.
	 * @returns The dot product of this vector and another vector in the x and y plane.
	 */
	Dot2D(v: Vector): number;

	/**
	 * Rotates the vector by an angle. Uses the yaw component of the angle.
	 *
	 * @param angle - The angle object or yaw value in degrees.
	 */
	Rotate(angle: number | Angle): void;

	/**
	 * Rotates the vector by an angle. Uses the yaw component of the angle.
	 *
	 * @param angle - The angle object or yaw value in degrees.
	 * @returns A new vector that is the result of the rotation.
	 */
	Rotated(angle: number | Angle): Vector;

	/**
	 * Returns the angle between this vector and another vector.
	 *
	 * @param v - The vector to get the angle to.
	 * @returns The angle between this vector and another vector.
	 */
	Angle(v: Vector): number;

	/**
	 * Returns the angle between this vector and another vector in the x and y plane.
	 *
	 * @param v - The vector to get the angle to.
	 * @returns The angle between this vector and another vector in the x and y plane.
	 */
	Angle2D(v?: Vector): number;

	/**
	 * Returns the distance between this vector and another vector.
	 *
	 * @param v - The vector to get the distance to.
	 * @returns The distance between this vector and another vector.
	 */
	Distance(v: Vector): number;

	/**
	 * Returns the distance between this vector and another vector in the x and y plane.
	 *
	 * @param v - The vector to get the distance to.
	 * @returns The distance between this vector and another vector in the x and y plane.
	 */
	Distance2D(v: Vector): number;

	/**
	 * Returns the squared distance between this vector and another vector.
	 *
	 * @param v - The vector to get the distance to.
	 * @returns The squared distance between this vector and another vector.
	 */
	DistanceSqr(v: Vector): number;

	/**
	 * Returns the squared distance between this vector and another vector in the x and y plane.
	 *
	 * @param v - The vector to get the distance to.
	 * @returns The squared distance between this vector and another vector in the x and y plane.
	 */
	Distance2DSqr(v: Vector): number;

	/**
	 * Clone the vector.
	 * 
	 * @returns The cloned vector.
	 */
	Clone(): Vector

	/**
	 * Converts this vector to a 2D vector.
	 * 
	 * @returns A 2D vector.
	 */
	ToVector2(): Vector2;

	/**
	 * Returns a string representation of this vector.
	 *
	 * @returns A string representation of this vector.
	 */
	toString(): string;
}

/**
 * Represents a 2D vector.
 */
declare class Vector2
{
	/**
	 * The x component of the vector.
	 */
	x: number;

	/**
	 * The y component of the vector.
	 */
	y: number;

	/**
	 * Creates a new vector.
	 * 
	 * @param x - The x component of the vector. Defaults to 0.
	 * @param y - The y component of the vector. Defaults to 0.
	 */
	constructor(x?: number, y?: number);

	/**
	 * Adds another vector to this vector.
	 * 
	 * @param v - The vector to add.
	 * @returns A new vector that is the result of the addition.
	 */
	add(v: Vector2): Vector2;

	/**
	 * Subtracts another vector from this vector.
	 * 
	 * @param v - The vector to subtract.
	 * @returns A new vector that is the result of the subtraction.
	 */
	sub(v: Vector2): Vector2;

	/**
	 * Multiplies this vector by another vector.
	 * 
	 * @param v - The vector to multiply by.
	 * @returns A new vector that is the result of the multiplication.
	 */
	mul(v: Vector2): Vector2;

	/**
	 * Divides this vector by another vector.
	 * 
	 * @param v - The vector to divide by.
	 * @returns A new vector that is the result of the division.
	 */
	div(v: Vector2): Vector2;

	/**
	 * Scales this vector by a factor.
	 * 
	 * @param factor - The factor to scale by.
	 */
	Scale(factor: number): void;

	/**
	 * Scales this vector by a factor.
	 * 
	 * @param factor - The factor to scale by.
	 * @returns A new vector that is the result of the scaling.
	 */
	Scaled(factor: number): Vector2;

	/**
	 * Returns the length of this vector.
	 * 
	 * @returns The length of this vector.
	 */
	Length(): number;
	/**
	 * Returns the squared length of this vector.
	 * 
	 * @returns The squared length of this vector.
	 */
	LengthSqr(): number;
	/**
	 * Normalizes this vector.
	 * 
	 * @remarks
	 * This vector is modified.
	 */
	Normalize(): void;

	/**
	 * Returns a normalized copy of this vector.
	 * 
	 * @returns A normalized copy of this vector.
	 */
	Normalized(): Vector2;

	/**
	 * Returns the dot product of this vector and another vector.
	 * 
	 * @param v - The vector to dot with.
	 * @returns The dot product of this vector and another vector.
	 */
	Dot(v: Vector2): number;

	/**
	 * Returns the angle between this vector and another vector.
	 * 
	 * @param v - The vector to get the angle to.
	 * @returns The angle between this vector and another vector.
	 */
	Angle(v: Vector2): number;

	/**
	 * Returns the distance between this vector and another vector.
	 * 
	 * @param v - The vector to get the distance to.
	 * @returns The distance between this vector and another vector.
	 */
	Distance(v: Vector2): number;

	/**
	 * Returns the squared distance between this vector and another vector.
	 * 
	 * @param v - The vector to get the distance to.
	 * @returns The squared distance between this vector and another vector.
	 */
	DistanceSqr(v: Vector2): number;

	/**
	 * Clone the vector.
	 * 
	 * @returns The cloned vector.
	 */
	Clone(): Vector2;

	/**
	 * Converts this vector to a 3D vector.
	 * 
	 * @returns A 3D vector.
	 */
	ToVector(): Vector;

	/**
	 * Returns a string representation of this vector.
	 * 
	 * @returns A string representation of this vector.
	 */
	toString(): string;
}