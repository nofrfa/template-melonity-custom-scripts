declare namespace EntitySystem
{
	/**
	 * Retrieves a list of entities by their class name. Class names can be found in the Entities section in debug menu [F11].
	 * 
	 * @remarks
	 * Do not modify the returned array. It is a reference to the internal array.
	 *
	 * @template T - The type of the Entity.
	 * @param className - The class name of the entities to retrieve.
	 * @returns An array of entities that match the provided class name. If no entities are found, an empty array is returned.
	 *
	 * @example
	 * // get lone druid bear
	 * let bear = EntitySystem.GetListByClassName<Hero>('C_DOTA_Unit_SpiritBear');
	 * // filter out illusions
	 * let realBear = bear.filter(x => !x.IsIllusion());
	 * if (realBear.length > 0)
	 * {
	 *    // do something with real bear
	 *   ...
	 * }
	 */
	function GetListByClassName<T extends Entity = Entity>(type: string): T[];

	/**
	 * Retrieves a list of all entities.
	 * 
	 * @remarks
	 * Do not modify the returned array. It is a reference to the internal array.
	 *
	 * @returns An array of all entities.
	 */
	function GetEntitiesList(): Entity[];

	/**
	 * Retrieves a list of all npc entities.
	 * 
	 * @remarks
	 * Do not modify the returned array. It is a reference to the internal array.
	 * 
	 * @returns An array of all npc entities.
	 */
	function GetNPCsList(): NPC[];

	/**
	 * Retrieves a list of all hero entities.
	 * 
	 * @remarks
	 * Do not modify the returned array. It is a reference to the internal array.
	 * 
	 * @returns An array of all hero entities.
	 */
	function GetHeroesList(): Hero[];

	/**
	 * Retrieves a list of all player entities.
	 * 
	 * @remarks
	 * Do not modify the returned array. It is a reference to the internal array.
	 * 
	 * @returns An array of all player entities.
	 */
	function GetPlayersList(): Player[];

	/**
	 * Retrieves a list of all courier entities.
	 * 
	 * @remarks
	 * Do not modify the returned array. It is a reference to the internal array.
	 * 
	 * @returns An array of all courier entities.
	 */
	function GetCouriersList(): Courier[];

	/**
	 * Retrieves a list of all rune entities.
	 * 
	 * @remarks
	 * Do not modify the returned array. It is a reference to the internal array.
	 * 
	 * @returns An array of all rune entities.
	 */
	function GetRunesList(): Rune[];

	/**
	 * Retrieves a list of all physical item entities.
	 * 
	 * @remarks
	 * Do not modify the returned array. It is a reference to the internal array.
	 * 
	 * @returns An array of all physical item entities.
	 */
	function GetPhysicalItemsList(): PhysicalItem[];

	/**
	 * Retrieves a list of all target projectile entities.
	 * 
	 * @remarks
	 * Do not modify the returned array. It is a reference to the internal array.
	 * 
	 * @returns An array of all target projectile objects.
	 */
	function GetTargetProjectileList(): TargetProjectileObject[];

	/**
	 * Retrieves a list of all linear projectile entities.
	 * 
	 * @remarks
	 * Do not modify the returned array. It is a reference to the internal array.
	 * 
	 * @returns An array of all linear projectile objects.
	 */
	function GetLinearProjectileList(): LinearProjectileObject[];

	/**
	 * Retrieves an entity by its index.
	 * 
	 * @template T - The type of the Entity.
	 * @param index - The index of the entity to retrieve.
	 * @returns The entity that matches the provided index. If no entity is found, null is returned.
	 */
	function GetByIndex<T = Entity>(index: number): T | null;

	/**
	 * Retrieves an entity by its handle.
	 * 
	 * @template T - The type of the Entity.
	 * @param handle - The handle of the entity to retrieve.
	 * @returns The entity that matches the provided handle. If no entity is found, null is returned
	 */
	function GetByHandle<T = Entity>(handle: number): T | null;

	/** @internal */
	function GetModifierByInternalIndex(modifierInternalIndex: bigint): Modifier | null;

	/**
	 * Retrieves the index of the local player.
	 * 
	 * @returns The index of the local player. If local player is not exists, -1 is returned.
	 */
	function GetLocalPlayerIndex(): number;

	/**
	 * Retrieves the local player entity.
	 * 
	 * @returns The local player entity. If local player is not exists, null is returned.
	 */
	function GetLocalPlayer(): Player | null;

	/**
	 * Retrieves the index of the local hero.
	 * 
	 * @returns The index of the local hero. If local hero is not exists, -1 is returned.
	 */
	function GetLocalHeroIndex(): number;

	/**
	 * Retrieves the local hero entity.
	 * 
	 * @returns The local hero entity. If local hero is not exists, null is returned.
	 */
	function GetLocalHero(): Hero | null;

	/**
	 * Retrieves a singleton entity by its class name. Class names can be found in the Entities section in debug menu [F11].
	 * 
	 * @remarks
	 * Used for entities that only have one instance in the game.
	 * 
	 * @template T - The type of the Entity.
	 * @param type - The class name of the entity to retrieve.
	 * @returns The entity that matches the provided class name. If no entity is found, null is returned.
	 * 
	 * @example
	 * // get game rules proxy
	 * let gameRules = EntitySystem.GetSingleton('C_DOTAGamerulesProxy');
	 * if (gameRules)
	 * {
	 *   // do something with game rules
	 *  ...
	 * }
	 */
	function GetSingleton<T = Entity>(type: string): T | null;

	/**
	 * Retrieves the number of binary objects in the game.
	 * 
	 * @returns The number of binary objects in the game.
	 */
	function GetBinaryObjectCount(): number;

	/** @internal */
	function GetLastInfo(): { index: bigint, path: string, type: string; };

	/** @internal */
	function ProcessEncodedData(cmd: InternalEnum.InEvents, buffer: CmdBufferReader): boolean;
}

// make alias for EntitySystem as EntityList
declare const EntityList: typeof EntitySystem;