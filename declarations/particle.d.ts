declare class Particle
{
	/**
	 * Creates a circle particle (green circle).
	 * 
	 * @remarks
	 * Using "particles/ui_mouseactions/range_display.vpcf" particle.
	 * Cant change the radius of the particle after creation.
	 * 
	 * @param particle - The particle to update position. If null, a new particle will be created.
	 * @param position - The position or entity to create the circle at.
	 * @param radius - The radius of the circle.
	 * @returns A Particle object representing the circle.
	 */
	static CreateCircle(particle: Particle | null, position: Vector | Entity, radius: number): Particle;

	/**
	 * Creates a colored circle particle.
	 * 
	 * @remarks
	 * Using "particles/ui_mouseactions/drag_selected_ring.vpcf" particle.
	 * Cant change the radius and color of the particle after creation.
	 * 
	 * @param particle - The particle to create the colored circle from. Can be null.
	 * @param position - The position or entity to create the colored circle at.
	 * @param radius - The radius of the circle.
	 * @param color - The color of the circle.
	 * @param dashAlpha - The alpha value for the dash.
	 * @returns A Particle object representing the colored circle.
	 */
	static CreateColoredCircle(particle: Particle | null, position: Vector | Entity, radius: number, color: Color, dashAlpha: number): Particle;

	/**
	 * Creates a new particle.
	 * 
	 * @param particlePath - The path of the particle. like "particles/ui_mouseactions/range_display.vpcf"
	 * @param attachmentType - The type of attachment for the particle.
	 * @param attachmentEntity - The entity to attach the particle to. Optional.
	 * @returns A new Particle object.
	 */
	static Create(particlePath: string, attachmentType: Enum.ParticleAttachment, attachmentEntity?: Entity | null): Particle;

	static GetParticleName(nameIndex: bigint): string;
	
	/**
	 * Sets the control of a particle.
	 * 
	 * @param controlIndex - The index of the control.
	 * @param vector - The vector to set the control to.
	 */
	SetControl(controlIndex: number, vector: Vector): void;

	/**
	 * Destroys a particle.
	 */
	Destroy(): void;

	/** @internal */
	constructor(index: number);
}