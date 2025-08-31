declare interface KeyEventObject
{
	event: Enum.KeyEvent;
	key: Enum.ButtonCode;
	keyStr: string;
}

declare class FireEventObject
{
	name: string;
	id: number;
	keyValue: { [key: string]: any; };

	GetBool(key: string): boolean;

	GetInt(key: string): number;

	GetFloat(key: string): number;

	GetString(key: string): string;

	/** @internal */
	constructor(name: string, id: number, keyValue: { [key: string]: any; });
}

declare interface CreateClickEffectObject
{
	position: Vector;
	color: Color;
	order: Enum.UnitOrder;
	queue: boolean;
}

declare class ProtobufLiteObject
{
	name: string;

	GetFull(): any;

	GetFullBinded(): any;

	/** @internal */
	constructor(name: string, data: any);
}

declare interface PreparedOrder
{
	player: Player;
	order: Enum.UnitOrder;
	target: NPC | null;
	targetIndex: Number | null;
	position: Vector | null;
	ability: Ability | null;
	abilityIndex: Number | null;
	orderIssuer: Enum.PlayerOrderIssuer;
	npc: NPC | null;
	npcIndex: Number | null;
	queue: boolean;
	showEffects: boolean;
}

declare interface UnitAnimationCallbackObject
{
	unit: NPC | null;

	/**
	 * @return Attack animation index 2
	 */
	sequenceVariant: number;

	/**
	 * @return Animation speed scales
	 */
	playbackRate: number;

	/**
	 * @return Time from start to the poke
	 */
	castpoint: number;


	type: number;

	/**
	 * @return Dota 2 action variant
	 */
	activity: number;

	/**
	 * @return Attack animation index
	 */
	sequence: number;

	/**
	 * @return Attack animation name
	 */
	sequenceName: string;
}

declare interface UnitAnimationEndCallbackObject
{
	unit: NPC | null;

	/**
	 * @return I don't fucking know
	 */
	snap: any;
}

declare interface Projectile
{
	source: NPC | null;
	sourceIndex: number;
	target: NPC | null;
	targetIndex: number;
	ability: Ability | null;
	abilityIndex: number;
	moveSpeed: number;
	sourceAttachment: Enum.ParticleAttachment;
	particleSystemHandle: bigint;
	dodgeable: boolean;
	isAttack: boolean;
	isEvaded: boolean;
	expireTime: number;
	maxImpactTime: number;
	colorGemColor: number;
	fullName: string;
	name: string;
	handle: number;
	index: number;
}

declare interface OnChatEventObject
{
	type: Enum.DOTA_CHAT_MESSAGE;
	values: number[];
	playerIDs: number[];
}

declare interface OnSayMsgObject
{
	entity: Entity;
	chat: boolean;
	messageName: string;
	param1: string;
	param2: string;
	param3: string;
	param4: string;
}

declare interface OnChatWriteObject
{
	channelType: number;
	messageText: string;
}

declare interface OnChatMessageObject
{
	sourcePlayerID: number;
	channelType: number;
	messageText: string;
}

declare interface UpdatedParticleForward
{
	index: number;
	position: Vector;
	controlPoint: number;
}

declare interface OnOverheadEventFallback
{
	type: Enum.OverheadAlert;
	value: number;
	targetIndex: number;
	target: NPC | null;
	sourcePlayerIndex: number;
	targetPlayerIndex: number;
}

declare interface UpdatedParticleFallback
{
	index: number;
	position: Vector;
	controlPoint: number;
}

declare interface UnitAddGestureObject
{
	unit: NPC | null;
	unitIndex: number;
	sequenceVariant: number;
	playbackRate: number;
	fadeIn: number;
	fadeOut: number;
	slot: number;
	activity: number;
	sequence: number;
	sequenceName: string;
}

declare interface OnProjectileLocObject
{
	source: NPC | null;
	sourceIndex: number;
	target: NPC | null;
	targetIndex: number;
	sourceLoc: Vector;
	targetLoc: Vector;
	moveSpeed: number;
	particleSystemHandle: bigint;
	dodgeable: boolean;
	isAttack: boolean;
	expireTime: number;
	colorGemColor: number;
	launchTick: number;
	handle: number;
	fullName: string;
	name: string;
}

declare class LinearProjectile
{
	maxDist: number;
	fowRadius: number;
	source: NPC | Entity | Hero | null;
	origin: Vector;
	velocity: Vector;
	particleIndex: bigint;
	handle: number;
	acceleration: Vector;
	latency: number;
	maxSpeed: number;
	fullName: string;
	name: string;
}

declare interface CreatedParticle
{
	index: number;
	entity: Entity | null;
	entityIndex: number;
	particleNameIndex: bigint;
	attachType: number;
	entityForModifiers: Entity | null;
	entityForModifiersIndex: number;
	fullName: string;
	name: string;
}

declare interface UpdatedParticle
{
	index: number;
	position: Vector;
	controlPoint: number;
}

declare interface UpdatedParticleForward
{
	index: number;
	position: Vector;
	controlPoint: number;
}

declare interface UpdatedParticleFallback
{
	index: number;
	position: Vector;
	controlPoint: number;
}

declare interface ParticleUpdateEntity
{
	index: number;
	controlPoint: number;
	entity: NPC | Entity | Hero | null;
	entityIndex: number;
	attachType: number;
	attachment: Enum.ParticleAttachment;
	position: Vector;
	includeWearables: boolean;
}

declare interface DestroyedParticle
{
	index: number;
	destroyImmediately: boolean;
}

declare class OnStartSoundObject
{
	source: Entity | null;
	sourceIndex: number;
	name: string;
	hash: number;
	guid: number;
	seed: number;
	position: Vector;
}

declare enum DOTA_MODIFIER_ENTRY_TYPE
{
	DOTA_MODIFIER_ENTRY_TYPE_ACTIVE = 1,
	DOTA_MODIFIER_ENTRY_TYPE_REMOVED = 2,
	UNRECOGNIZED = -1
}

interface CMsgVector
{
	x: number;
	y: number;
	z: number;
	w: number;
}

interface CDOTAModifierBuffTableEntry
{
	entry_type: DOTA_MODIFIER_ENTRY_TYPE;
	parent: number;
	index: number;
	serial_num: number;
	modifier_class: number;
	ability_level: number;
	stack_count: number;
	creation_time: number;
	duration: number;
	caster: number;
	ability: number;
	armor: number;
	fade_time: number;
	subtle: boolean;
	channel_time: number;
	v_start: CMsgVector | undefined;
	v_end: CMsgVector | undefined;
	portal_loop_appear: string;
	portal_loop_disappear: string;
	hero_loop_appear: string;
	hero_loop_disappear: string;
	movement_speed: number;
	aura: boolean;
	activity: number;
	damage: number;
	range: number;
	dd_modifier_index: number;
	dd_ability_id: number;
	illusion_label: string;
	active: boolean;
	player_ids: string;
	lua_name: string;
	attack_speed: number;
	aura_owner: number;
	bonus_all_stats: number;
	bonus_health: number;
	bonus_mana: number;
	custom_entity: number;
}

declare interface ScriptDescription
{
	OnLocalPlayerCreate?: () => void;

	OnLocalPlayerDestroy?: () => void;

	OnLocalHeroCreate?: () => void;

	OnLocalHeroDestroy?: () => void;

	/** 
	 * @remarks
	 * Same as OnLocalHeroCreate 
	 */
	OnGameStart?: () => void;

	/**
	 * @remarks
	 * Same as OnLocalHeroDestroy
	 */
	OnGameEnd?: () => void;

	OnScriptLoad?: () => void;

	OnScriptUnload?: () => void;

	OnDraw?: () => void;

	OnDrawOverUI?: () => void;

	OnUpdate?: () => void;

	OnKeyEvent?: (event: KeyEventObject) => void;

	OnEntityCreate?: (entity: Entity, index: number) => void;

	OnEntityCreateUpdated?: (entity: Entity, index: number) => void;

	OnEntityDestroy?: (entity: Entity, index: number) => void;

	OnModifierCreate?: (entity: NPC, modifier: Modifier) => void;

	OnModifierDestroy?: (entity: NPC, modifier: Modifier) => void;

	OnScreenSizeChange?: (width: number, height: number) => void;

	OnFireEvent?: (event: FireEventObject) => void;

	OnCreateClickEffect?: (obj: CreateClickEffectObject) => boolean | Vector | void;

	OnPrepareUnitOrders?: (order: PreparedOrder) => boolean | void;

	OnScriptPrepareUnitOrders?: (order: PreparedOrder, caller: string) => boolean | void;

	OnUnitAnimation?: (animation: UnitAnimationCallbackObject) => void;

	OnUnitAnimationEnd?: (animation: UnitAnimationEndCallbackObject) => void;

	/**
	 * @deprecated use NetMessages.RegisterSend instead
	 */
	OnSendNetMessage?: (obj: ProtobufLiteObject) => Enum.ProtobufBehavior | object | void;

	/**
	 * @deprecated use NetMessages.RegisterRecv instead
	 */
	OnRecvNetMessage?: (obj: ProtobufLiteObject) => Enum.ProtobufBehavior | object | void;

	/**
	 * @deprecated disabled
	 */
	OnFrameStageNotify?: (stage: number) => void;

	/**
	 * Return Enum.ProtobufBehavior.Ignore to ignore the message or
	 * object to modify the message
	 */
	OnSendGCMessage?: (obj: ProtobufLiteObject, type: number) => Enum.ProtobufBehavior | object | void;

	/**
	 * Return Enum.ProtobufBehavior.Ignore to ignore the message or
	 * object to modify the message
	 */
	OnRecvGCMessage?: (obj: ProtobufLiteObject, type: number) => Enum.ProtobufBehavior | object | void;

	/**
	 * @deprecated disabled
	 */
	OnDrawCreepCampIcon?: (position: Vector) => boolean | void;

	OnChatEvent?: (event: OnChatEventObject) => void;

	OnVisibilityUpdate?: (ent: NPC, reason: string, visible: boolean) => void;

	OnTeamVisablityChange?: (npc: NPC, oldValue: number, newValue: number) => void;

	OnSayMsg?: (obj: OnSayMsgObject) => boolean | void;

	OnChatWrite?: (obj: OnChatWriteObject) => boolean | void;

	OnChatMessage?: (obj: OnChatMessageObject) => void;

	OnGCSOCreated?: (obj: ProtobufLiteObject) => void;

	OnGCSOUpdated?: (obj: ProtobufLiteObject) => void;

	OnGCSOChanged?: (obj: ProtobufLiteObject, reason: number) => void;

	OnOverheadEvent?: (obj: OnOverheadEventFallback) => void;

	OnUnitAddGesture?: (anim: UnitAddGestureObject) => void;

	OnProjectile?: (projectile: Projectile) => void;

	OnProjectileLoc?: (projectile: OnProjectileLocObject) => void;

	OnLinearProjectileCreate?: (projectile: LinearProjectile) => void;

	OnLinearProjectileDestroy?: (handle: number) => void;

	OnTargetProjectileObjectCreate?: (targetProjectile: TargetProjectileObject) => void;

	OnTargetProjectileObjectDestroy?: (targetProjectile: TargetProjectileObject) => void;

	OnLinearProjectileObjectCreate?: (linearProjectile: LinearProjectileObject) => void;

	OnLinearProjectileObjectDestroy?: (linearProjectile: LinearProjectileObject) => void;

	OnParticleCreate?: (particle: CreatedParticle) => void;

	OnParticleUpdate?: (particle: UpdatedParticle) => void;

	OnParticleUpdateEntity?: (particle: ParticleUpdateEntity) => void;

	OnParticleUpdateForward?: (obj: UpdatedParticleForward) => void;

	OnParticleUpdateFallback?: (obj: UpdatedParticleFallback) => void;

	OnParticleDestroy?: (particle: DestroyedParticle) => void;

	OnStartSound?: (sound: OnStartSoundObject) => void;

	OnActiveModifiersUpdate?: (obj: CDOTAModifierBuffTableEntry) => void;

	// called only if name containt "Callback_" prefix
	OnSetDialogVariableStr?(name: string, value: string): void;
}

/**
 * Registers a script with a given set of callbacks.
 * 
 * @param scriptDeclaration - An object where each key is the name of a callback and the value is the function to be called.
 * @param scriptName - An optional name for the script. If provided, it will be used to group the callbacks.
 */
declare function RegisterScript(scriptDeclaration: ScriptDescription, scriptName: string): void;

/**
 * Unregisters a script with a given set of callbacks.
 * 
 * @param scriptDeclaration - An object where each key is the name of a callback and the value is the function to be called.
 */
declare function UnregisterScript(scriptDeclaration: ScriptDescription): void;
/**
 * Registers a function with a given callback name and an optional script name.
 * 
 * @param callbackName - The name of the callback.
 * @param fn - The function to be called.
 * @param scriptName - An optional name for the script. If provided, it will be used to group the callbacks.
 */
declare function RegisterFunction(callbackName: string, fn: Function, scriptName?: string): void;

/**
 * Unregisters a function with a given callback name.
 * 
 * @param callbackName - The name of the callback.
 * @param fn - The function to be unregistered.
 */
declare function UnregisterFunction(callbackName: string, fn: Function): void;

/** @internal */
declare function CallCallbackEncoded(name: string, encodedArgs?: string, encodedPreCallbackInfo?: SharedArrayBuffer): string;

/** @internal */
declare function CallCallback(name: string, ...args: any[]): string;