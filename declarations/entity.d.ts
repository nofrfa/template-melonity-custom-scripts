declare class MemoryAccessor
{
	IsExist(): boolean;

	ExistCheck(): void;

	GetPointer(): DataView;

	/**
	 * supported types:
	 * bool
	 * uint8
	 * uint16
	 * uint32
	 * uint64
	 * int8
	 * int16
	 * int32
	 * int64
	 * float32
	 * Vector
	 * QAngle
	 * CEntityIndex
	 * CHandle
	 * GameTime_t
	 */
	GetProperty<T>(className: string, fieldPath: string): T;

	/** @internal */
	constructor(typeName: string);
}

declare class TargetProjectileObject extends MemoryAccessor
{
	index: number;
	speed: number;
	originalSpeed: number;
	currentPosition: Vector;
	targetPosition: Vector;
	source: NPC | null;
	sourceIndex: number;
	target: NPC | null;
	targetIndex: number;
	ability: Ability | null;
	abilityIndex: number;
	dodgeable: boolean;
	isattack: boolean;
	isevaded: boolean;
	expireTime: number;
	maxImpactTime: number;

	/** @internal */
	constructor(dataView: DataView, handle: number);

	/** @internal */
	OnDestroy(): void;
}

declare class LinearProjectileObject extends MemoryAccessor
{
	index: number;
	currentPosition: Vector;
	startPosition: Vector;
	velocity: Vector;
	originalVelocity: Vector;
	acceleration: Vector;
	maxSpeed: number;
	maxDist: number;
	fowRadius: number;
	stickyFoWReveal: boolean;
	source: NPC | null;
	sourceIndex: number;

	/** @internal */
	constructor(dataView: DataView, handle: number);

	/** @internal */
	OnDestroy(): void;
}

declare class Entity extends MemoryAccessor
{
	static GetClassNameStatic(): string;

	GetIndex(): number;

	GetHandle(): number;

	GetGameSceneNode(): DataView | null;

	GetInheritance(): string[];

	GetClassName(): string;

	InheritFrom(className: string): boolean;

	GetHealth(): number;

	GetMaxHealth(): number;

	IsAlive(): boolean;

	GetAbsOrigin(): Vector;

	GetOrigin(): Vector;

	GetRotation(): Angle;

	GetAbsRotation(): Angle;

	GetScale(): number;

	SetScale(scale: number): void;

	GetDistance(point: Vector): number;

	GetDistance2D(point: Vector): number;

	GetDistanceToEntity(ent: Entity): number;

	GetDistance2DToEntity(ent: Entity): number;

	IsOnScreen(): boolean;

	WorldToScreen(onScreenCheck?: boolean): [number, number, boolean];

	GetTeamNum(): number;

	IsSameTeam(other: Entity): boolean;

	IsDormant(): boolean;

	IsEntity(): boolean;

	IsNPC(): this is NPC;

	IsHero(): this is Hero;

	IsPlayer(): this is Player;

	IsAbility(): this is Ability;

	IsItem(): this is Item;

	IsPhysicalItem(): this is PhysicalItem;

	IsTree(): this is Tree;

	IsTempTree(): this is TempTree;

	IsRune(): this is Rune;

	IsPositionInRange(position: Vector, range: number, hull?: number): boolean;

	IsEntityInRange(entity: Entity, range: number): boolean;

	HasModel(): this is ModelEntity;

	GetOwner<T = NPC>(): T | null;

	GetOwnerRecursive(): Entity | null;

	IsRecursiveOwnedByIndex(index: number): boolean;

	IsRecursiveOwnedByHandle(handle: number): boolean;

	IsOwnedByIndex(index: number): boolean;

	IsOwnedByHandle(handle: number): boolean;

	IsOwnedBy(entity: Entity): boolean;

	GetEntityName(): string;

	GetDesignerName(): string;

	GetCreationTick(): number;

	/**
	 * equivalent to ent.GetCreationTick() != GameRules.GetTickCount()
	 * @returns returns true if entity was created in not current tick
	 */
	IsUpdated(): boolean;

	GetModelName(): string;

	IsTeamSuitable(ent: Entity, teamType: Enum.TeamType): boolean;

	GetEntitiesInRadiusByClass<T extends Entity = Entity>(radius: number, teamType: Enum.TeamType, className: string): Array<T>;

	GetEntitiesInRadius(radius: number, teamType: Enum.TeamType): Entity[];

	GetHeroesInRadius(radius: number, teamType: Enum.TeamType): Hero[];

	GetUnitsInRadius(radius: number, teamType: Enum.TeamType): NPC[];

	GetTreesInRadius(radius: number, isActive?: boolean): Tree[];

	GetTempTreeInRadius(radius: number): TempTree[];

	GetTreeOrTempTreeInRadius(radius: number): (Tree | TempTree)[];

	DrawDebugRadius(radius: number, color: Color, segments?: number): void;

	/** @internal */
	constructor(index: number, inheritance: string[]);

	/** @internal */
	OnEntityDestroy(): void;

	/** @internal */
	OnGameSceneNodeUpdate(rotation: number): void;
}

/** @deprecated */
declare interface EntityState
{
	health?: number;
	mana?: number;
	shield?: number;
	visageShields?: number;
	templarShields?: number;
	calculateDamage?: number;
	aeonEnabled?: boolean;
	flags?: number;
	precalcResist?: number;
}

declare class ModelEntity extends Entity
{
	SetModel(modelPath: string): void;

	SetScale(size: number): void;

	SetModelColor(color: Color): void;

	GetMeshGroupMask(): bigint;

	SetMeshGroupMask(mask: bigint): void;

	SetGlow(enabled: boolean, r?: number, g?: number, b?: number, a?: number): void;
}

declare class NPC extends ModelEntity
{
	GetMaxPhysicBarrier(): number;

	GetMaxMagicBarrier(): number;

	GetMaxAllBarrier(): number;

	GetPhysicBarrier(): number;

	GetMagicBarrier(): number;

	GetAllBarrier(): number;

	GetStartSequenceCycle(): number;

	GetKeyValues(): KeyValue | null;

	FindKey(key: string): KeyValue | null;

	GetProjectileSpeed(): number;

	SetHasColorGem(val: boolean): void;

	HasColorGem(): boolean;

	SetGemColor(color: Color): void;

	GetGemColor(): Color;

	GetGoldBountyMin(): number;

	GetGoldBountyMax(): number;

	IsControllableByPlayer(player: Player): boolean;

	IsInRangeOfShop(shopType: Enum.ShopType): boolean;

	GetTurnAngleDiff(): number;

	GetUnitState(): bigint;

	SetUnitState(state: bigint | number): void;

	HasState(state: Enum.ModifierState): boolean;

	GetAttackRange(): number;

	GetAttackRangeWithBonus(): number;

	GetAttackRangeBonus(): number;

	GetCastRangeBonus(): number;

	GetCombatClassDefend(): number;

	GetCombatClassAttack(): number;

	GetDamageMultiplierVersus(entity: NPC): number;

	GetPhysicalArmorValue(): number;

	GetPhysicalDamageReduction(): number;

	GetArmorDamageMultiplier(): number;

	GetMagicalArmorValue(): number;

	GetMagicalArmorDamageMultiplier(): number;

	/**
	 * Returns base attack speed + attack speed bonus
	 */
	GetIncreasedAttackSpeed(): number;

	GetBaseAttackSpeed(): number;

	GetAttackSpeedBonus(): number;

	GetAttackTime(): number;

	GetAttacksPerSecond(): number;

	GetHullRadius(): number;

	GetProjectileCollisionSize(): number;

	GetTurnRate(): number;

	IsTurning(): boolean;

	IsWaitingToSpawn(): boolean;

	GetTimeToFace(entity: Entity): number;

	FindRotationAngle(position: Vector, useAngleDiff?: boolean): Angle;

	GetTimeToFacePosition(position: Vector): number;

	/**
	 *
	 * @param teamType
	 * @param minRange -1
	 * @param minAngle -1
	 */
	FindFacingNPC(teamType: Enum.TeamType, minRange?: number, minAngle?: number, useAngleDiff?: boolean): NPC | null;

	GetMoveSpeed(): number;

	GetBaseSpeed(): number;

	IsMoving(): boolean;

	GetMana(): number;

	GetMaxMana(): number;

	GetManaRegen(): number;

	GetHealthRegen(): number;

	GetBaseHealthRegen(): number;

	GetBaseManaRegen(): number;

	GetCurrentLevel(): number;

	GetDayTimeVisionRange(): number;

	GetNightTimeVisionRange(): number;

	IsIllusion(): boolean;

	GetHealthBarOffset(): number;

	GetUnitName(): string;

	GetImage(needIcon?: boolean): Image;

	GetFountainPosition(): Vector;

	HasAghanimScepter(): boolean;

	GetAttackDelay(): number;

	GetAttackAnimationPoint(): number;

	GetAnimationSequence(): number;

	GetAnimationCycle(): number;

	SetZDelta(height: number): void;

	GetUltimate(): Ability | null;

	IsVisible(): boolean;

	HasTrueSight(): boolean;

	GetUnitType(): number;

	SetUnitType(unitType: number): void;

	/**
	 * @param type -2 - default, -1 - no health bar, 0 - creep, up to 17 - undocumented
	 */
	SetHealthBar(type: number): void;

	GetAttackCapabilities(): number;

	IsUnitType(unitType: Enum.UnitType): boolean;

	IsRanged(): boolean;

	IsCreep(): boolean;

	IsLaneCreep(): boolean;

	IsRoshan(): boolean;

	IsNeutral(): boolean;

	IsStructure(): boolean;

	IsTower(): this is Tower;

	IsAncient(): boolean;

	IsCourier(): this is Courier;

	IsShrine(): boolean;

	IsMeepoClone(): boolean;

	IsVisibleByEnemy(): boolean;

	GetModifiers(): Modifier[];

	GetModifier(modifierName: string): Modifier | null;

	HasModifier(modifierName: string): boolean;

	HasInventorySlotFree(inRealInventory?: boolean): boolean;

	/** @internal */
	GetItemsIndexes(): number[];

	GetItems(inRealInventory?: boolean): Item[];

	GetItemByIndex(index: number): Item | null;

	GetItem(itemName: string, realInventory?: boolean): Item | null;

	HasItem(itemName: string, inRealInventory?: boolean): boolean;

	/** @internal */
	GetAbilitiesIndexes(): number[];

	GetAbilities(): Ability[];

	GetAbilityByIndex(index: number): Ability | null;

	GetAbility(abilityName: string): Ability | null;

	HasAbility(abilityName: string): boolean;

	IsLinkensProtected(): boolean;

	IsChannellingAbility(): boolean;

	GetActivity(): Enum.GameActivity;

	IsRunning(): boolean;

	IsAttacking(): boolean;

	IsSilenced(): boolean;

	IsStunned(): boolean;

	HasAegis(): boolean;

	IsKillable(): boolean;

	GetMinDamage(): number;

	GetMaxDamage(): number;

	GetBonusDamage(): number;

	GetTrueDamage(): number;

	GetTrueMaximumDamage(): number;

	GetAttachment(attachmentName: string): Vector;

	GetAttachmentByIndex(attachmentIndex: number): Vector;

	GetMagicalDamageMultiplier(): number;

	GetLastAttackTime(): number;

	/** @deprecated */
	GetStateAfterDamage(state: null | EntityState, damage: number): EntityState;

	MoveTo(position: Vector, queue?: boolean, showEffects?: boolean): void;

	GetTaggedAsVisibleByTeam(): number;

	/** @internal */
	SetTaggedAsVisibleByTeam(value: number): void;

	/** @internal */
	AddModifier(modifier: Modifier): void;

	/** @internal */
	RemoveModifier(modifier: Modifier): void;

	/** @internal */
	OnVisibleTrigger(): void;

	/** @internal */
	OnTrueSightTrigger(): void;

	/** @internal */
	OnTrueSightLost(): void;
}

declare class Hero extends NPC
{
	GetTalentsMask(): number;

	GetTalents(): Array<Ability>;

	GetPlayerID(): number;

	GetImageIcon(): Image;

	GetCurrentXP(): number;

	GetAbilityPoints(): number;

	GetRespawnTime(): number;

	GetRespawnTimePenalty(): number;

	GetPrimaryAttribute(): Enum.Attributes;

	GetStrength(): number;

	GetAgility(): number;

	GetIntellect(): number;

	GetStrengthTotal(): number;

	GetAgilityTotal(): number;

	GetIntellectTotal(): number;

	GetRecentDamage(): number;

	GetPainFactor(): number;

	GetTargetPainFactor(): number;

	GetLifeState(): boolean;

	GetReplicatingOtherHeroModelIndex(): number;

	GetReplicatingOtherHeroModel(): Hero | null;

	IsReplicatingOtherHeroModel(): boolean;

	GetHeroFacetID(): number;
}

declare interface OrderID
{
	id: number;
}

declare interface PrepareUnitOrdersInfo
{
	orderType: Enum.UnitOrder;
	// default null
	target?: Entity | number;
	// default null
	ability?: Ability | number;
	// default null
	position?: Vector;
	// default null
	entity?: Entity[] | Entity;
	/**
	 * default
	 * Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_PASSED_UNIT_ONLY if you passing in entity property only one entity,
	 * Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_SELECTED_UNITS if you passing array of entities,
	 * Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_HERO_ONLY if you don't passing entity
	 */
	orderIssuer?: Enum.PlayerOrderIssuer;
	// default Enum.ForcedType.None
	forcedType?: Enum.ForcedType;
	// default Enum.QueuePriority.Normal
	queuePriority?: Enum.QueuePriority;
	// default false
	queue?: boolean;
	// default true
	showEffects?: boolean;
	// default null
	callback?: (info: OrderID) => void;
	// default -1
	maxTimeS?: number;
}

declare class Player extends Entity
{
	/** @internal */
	static ProcessOrderCallback(callbackId: number): void;

	/** @internal */
	GetDataNonSpectator(): Entity | null;

	/** @internal */
	GetDataTeamPointer(): DataView | null;

	/** @internal */
	GetPlayerTeamDataPointer(): DataView | null;

	/** @internal */
	GetPlayerDataPointer(): DataView | null;

	GetDenyCount(): number;

	GetLastHitCount(): number;

	GetAssignedHeroIndex(): number;

	GetAssignedHero(): Hero | null;

	GetActiveAbilityIndex(): number;

	GetActiveAbility(): Ability | null;

	GetQuickBuyItems(): number[];

	GetAttachedQuickBuyItem(): number;

	GetQuickBuyIsPurchasable(): boolean[];

	GetPossibleHeroSelection(): number;

	GetPlayerSelectedHeroName(): string;

	GetSelectedHeroID(): number;

	GetSelectedHeroFacetID(): number;

	GetTeamSlot(): number;

	GetReliableGold(): number;

	GetUnreliableGold(): number;

	GetTotalGold(): number;

	GetNetWorth(): number;

	GetCommandsIssued(): number;

	IsValid(): boolean;

	IsFullyJoined(): boolean;

	IsFakeClient(): boolean;

	GetConnectionState(): number;

	GetRankTier(): number;

	GetSteamID(): bigint;

	GetSteamID32(): number;

	GetPlayerID(): number;

	GetName(): string;

	GetKills(): number;

	GetAssists(): number;

	GetDeaths(): number;

	GetStreak(): number;

	GetRespawnTime(): number;

	GetLaneSelectionFlags(): number;

	IsMuted(): boolean;

	GetLastBuybackTime(): number;

	GetBuybackCooldownTime(): number;

	GetBuybackCostTime(): number;

	GetBuybackGoldLimitTime(): number;

	GetColor(): Color;

	GetSelectedUnits(): Array<NPC>;

	AddSelectedUnit(unit: NPC): void;

	RemoveSelectedUnit(unit: NPC): void;

	ClearSelectedUnits(): void;

	CreateClickEffect(position: Vector, color: Color, orderType: Enum.UnitOrder, queue: boolean): void;

	PrepareUnitOrdersStructed(info: PrepareUnitOrdersInfo): OrderID;

	PrepareUnitOrdersUnsafe(orderType: Enum.UnitOrder,
		target: Entity | number | null,
		position: Vector | null,
		ability: Ability | number | null,
		units: NPC[],
		queue?: boolean,
		showEffects?: boolean): void;

	PrepareUnitOrders(orderType: Enum.UnitOrder,
		target: Entity | number | null,
		position: Vector | null,
		ability: Ability | number | null,
		orderIssuer: Enum.PlayerOrderIssuer,
		unit: Entity | null,
		queue?: boolean,
		showEffects?: boolean): void;

	HoldPosition(unit: Entity | null, queue?: boolean): void;

	AttackTarget(unit: Entity | null,
		target: Entity | null,
		queue?: boolean): void;
}

declare class Courier extends NPC
{
	IsFlyingCourier(): boolean;

	GetRespawnTime(): number;

	GetCourierState(): Enum.CourierState;

	GetCourierStateEntityIndex(): number;

	GetCourierStateEntity(): Hero | null;
}

declare class Tower extends NPC
{
	GetAttackTargetIndex(): number;

	GetAttackTarget(): NPC | null;
}

declare class Rune extends ModelEntity
{
	GetRuneType(): Enum.RuneType;
}

declare class PhysicalItem extends ModelEntity
{
	GetItemIndex(): number;

	GetItem(): Item | null;
}

declare class Ability extends Entity
{
	GetAbilityDefinition(): DataView | null;

	GetAbilityDefinitionProperty(propertyName: string): string | number | boolean | null;

	GetName(): string;

	GetAbilityChargeRestoreTimeRemaining(): number;

	GetAbilityChargeRestoreTime(): number;

	GetAbilityCurrentCharges(): number;

	GetCandyCount(): number;

	GetAbilityIndex(): number;

	IsHidden(): boolean;

	IsDisplayed(): boolean;

	GetAOERadius(): number;

	GetMaxLevel(): number;

	GetImagePath(): string;

	IsStealable(): boolean;

	GetKeyBind(): string;

	GetChannelStartTime(): number;

	GetKeyValues(): KeyValue | null;

	FindKey(key: string): KeyValue | null;

	IsTalent(): boolean;

	GetImage(): Image;

	GetCooldown(): number;

	GetCooldownLength(): number;

	GetManaCost(): number;

	GetLevel(): number;

	GetType(): Enum.AbilityTypes;

	GetBehavior(): Enum.AbilityBehavior;

	GetTargetTeam(): Enum.TargetTeam;

	GetTargetType(): Enum.TargetType;

	GetTargetFlags(): Enum.TargetFlags;

	GetDamageType(): Enum.DamageTypes;

	GetImmunityType(): Enum.ImmunityTypes;

	GetDispellableType(): Enum.DispellableTypes;

	IsPassive(): boolean;

	/* return true if ability is learned and not in cooldown and owner has enough mana and is not silenced */
	CanCast(): boolean;

	/* dota version of function CanCast() */
	CanBeExecuted(): boolean;

	IsBasic(): boolean;

	IsUltimate(): boolean;

	IsAttributes(): boolean;

	GetLevelSpecialValueFor(key: string): number;

	GetLevelSpecialValueForFloat(key: string): number;

	SecondsSinceLastUse(): number;

	GetDamage(): number;

	GetCastPoint(): number;

	GetCastRange(): number;

	IsCastable(mana: number, passiveOk?: boolean): boolean;

	IsChannelling(): boolean;

	IsActivated(): boolean;

	GetDirtyButtons(): number;

	GetToggleState(): boolean;

	GetCastStartTime(): number;

	IsInAbilityPhase(): boolean;

	GetAutoCastState(): boolean;

	IsInIndefinateCooldown(): boolean;

	GetOverrideCastPoint(): number;

	IsStolen(): boolean;

	CastTarget(target: Entity, queue?: boolean): void;

	CastNoTarget(queue?: boolean): void;

	CastPosition(position: Vector, queue?: boolean): void;

	Toggle(queue?: boolean): void;

	ToggleMod(queue?: boolean): void;
}

declare class Item extends Ability
{
	GetCost(): number;

	IsPermanent(): boolean;

	IsStackable(): boolean;

	HasRecipe(): boolean;

	GetSharability(): number;

	IsDroppable(): boolean;

	IsPurchasable(): boolean;

	IsSellable(): boolean;

	/**
	 * @remarks for wards return false
	 */
	IsRequireCharges(): boolean;

	IsKillable(): boolean;

	IsDisassemblable(): boolean;

	IsAlertable(): boolean;

	GetInitialCharges(): number;

	CastsOnPickup(): boolean;

	GetCurrentCharges(): number;

	GetSecondaryCharges(): number;

	IsCombineLocked(): boolean;

	GetPurchaseTime(): number;

	GetAssembledTime(): number;

	IsPurchasedWhileWasDead(): boolean;

	CanBeUsedOutOfInventory(): boolean;

	IsItemEnabled(): boolean;

	GetEnableTime(): number;

	GetPlayerOwnerID(): number;

	GetPowerTreadsState(): Enum.PowerTreadsAttributes;
}

declare class Tree extends ModelEntity
{
	IsActive(): boolean;

	GetBinaryID(): number;
}

declare class TempTree extends ModelEntity
{
	GetTempTreeIndex(): number;
}

declare class PowerTreads extends Item
{
	GetPowerTreadsState(): Enum.PowerTreadsAttributes;
}

declare class LightInfo extends Entity
{
	GetColorArray(field: string, index: number): Color;

	SetColorArray(field: string, index: number, color: Color): void;

	GetFloatArray(field: string, index: number): number;

	SetFloatArray(field: string, index: number, value: number): void;

	GetFloat(field: string): number;

	SetFloat(field: string, value: number): void;

	GetColor(field: string): Color;

	SetColor(field: string, color: Color): void;
}

declare class GameManagerProxy extends Entity
{
}

declare class GameRulesProxy extends Entity
{
}

declare class Modifier extends MemoryAccessor
{
	static GetClassNameStatic(): string;

	GetName(): string;

	GetInheritance(): string[];

	GetOwnerIndex(): number;

	GetOwner(): NPC | null;

	GetTeam(): number;

	IsDebuff(): boolean;

	GetCreationTime(): number;

	GetCreationFrame(): number;

	GetDieTime(): number;

	GetElapsedTime(): number;

	GetRemainingTime(): number;

	GetClass(): string;

	GetModifierAuraName(): string;

	GetSerialNumber(): number;

	GetIndex(): number;

	GetLastAppliedTime(): number;

	GetDuration(): number;

	GetStackCount(): number;

	GetAuraSearchTeam(): number;

	GetAuraSearchType(): number;

	GetAuraSearchFlags(): number;

	GetAuraRadius(): number;

	GetAttributes(): number;

	IsAura(): boolean;

	IsAuraActiveOnDeath(): boolean;

	GetMarkedForDeletion(): boolean;

	IsHealingAura(): boolean;

	GetConstantByIndex(index: number): number;

	GetAbilityIndex(): number;

	GetAbility(): Ability | null;

	GetTexture(): string;

	IsHidden(): boolean;

	/** @internal */
	constructor(index: bigint, name: string, inheritance: string[]);

	/** @internal */
	OnModifierDestroy(): void;

	/** @internal */
	GetInternalIndex(): bigint;
}