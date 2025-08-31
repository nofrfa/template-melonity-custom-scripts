
interface GlobalInterface
{
	System: typeof System;
	Particle: typeof Particle;
	MemoryAccessor: typeof MemoryAccessor;
	TargetProjectileObject: typeof TargetProjectileObject;
	LinearProjectileObject: typeof LinearProjectileObject;
	Entity: typeof Entity;
	Modifier: typeof Modifier;
	NPC: typeof NPC;
	Hero: typeof Hero;
	Player: typeof Player;
	Courier: typeof Courier;
	Tower: typeof Tower;
	Rune: typeof Rune;
	PhysicalItem: typeof PhysicalItem;
	Ability: typeof Ability;
	Item: typeof Item;
	Tree: typeof Tree;
	TempTree: typeof TempTree;
	PowerTreads: typeof PowerTreads;
	LightInfo: typeof LightInfo;
	GameManagerProxy: typeof GameManagerProxy;
	GameRulesProxy: typeof GameRulesProxy;
	ModelEntity: typeof ModelEntity;
	Vector: typeof Vector;
	Vector2: typeof Vector2;
	Angle: typeof Angle;
	Color: typeof Color;
	PanoramaPanel: typeof PanoramaPanel;
	MiniMapIconHandle: typeof MiniMapIconHandle;
	Font: typeof Font;
	Image: typeof Image;
	Vertexes: typeof Vertexes;
	Texture: typeof Texture;
	Shader: typeof Shader;
	BlendState: typeof BlendState;
	MenuOption: typeof MenuOption;
	Config: typeof Config;
	ProfileChanger: typeof ProfileChanger;
	GameRules: typeof GameRules;
	GameManager: typeof GameManager;
	Matchmaking: typeof Matchmaking;
	HTTP: typeof HTTP;
	GC: typeof GC;
	NetMessages: typeof NetMessages;
	KeyValue: typeof KeyValue;
	Renderer: typeof Renderer;
	Input: typeof Input;
	EntitySystem: typeof EntitySystem;
	EntityList: typeof EntitySystem;
	Log: typeof Log;
	Enum: typeof EnumImpl;
	Tracy: typeof Tracy;
	Menu: typeof Menu;
	Engine: typeof Engine;
	Camera: typeof Camera;
	NetChannel: typeof NetChannel;
	Panorama: typeof Panorama;
	ConVar: typeof ConVar;
	MiniMap: typeof MiniMap;
	GridNav: typeof GridNav;
	Humanizer: typeof Humanizer;
	Chat: typeof Chat;
	Schema: typeof Schema;
	Script: typeof Script;
	Timer: typeof Timer;
	ProtobufLiteObject: typeof ProtobufLiteObject;
	TimerObject: typeof TimerObject;

	RegisterScript(scriptDeclaration: ScriptDescription, scriptName?: string): void;

	UnregisterScript(scriptDeclaration: ScriptDescription): void;

	RegisterFunction(callbackName: string, fn: Function, scriptName?: string): void;

	UnregisterFunction(callbackName: string, fn: Function): void;

	CallCallback(name: string, ...args: any[]): any;

	CallCallbackEncoded(name: string, encodedArgs?: string, encodedPreCallbackInfo?: SharedArrayBuffer): any;

	onerror(error: Error): void;

	setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): number;

	clearTimeout(id: number): void;

	setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): number;

	clearInterval(id: number): void;

	setPreCallback(callback: () => void): void;

	setPostCallback(callback: () => void): void;

	print(...args: any[]): void;

	warn(...args: any[]): void;

	error(...args: any[]): void;

	CmdBuffer: typeof CmdBuffer;
	CmdBufferWriter: typeof CmdBufferWriter;
	CmdBufferReader: typeof CmdBufferReader;
	InternalEnum: typeof InternalEnum;
}

declare var global: GlobalInterface;

type Pointer = object;

/** @internal */
declare function __PrintInternal(level: number, ...args: any[]): void;

/** @internal */
declare function todo(...args: any[]): void;

/** @internal */
declare function TraceHash(): number;

/** @internal */
declare function TraceHashSlow(): number;

/** @internal */
declare function IsShouldVerifyCmd(): boolean;

// Entity

/** @internal */
declare function Entity_GetPointer(entityIndex: number): DataView;

/** @internal */
declare function Entity_GetSequenceNameAndSequence(entityIndex: number, sequenceVariant: number, activity: number): [string, number];

/** @internal */
declare function Entity_GetModelName(entityIndex: number): string;

/** @internal */
declare function Entity_Init(entityIndex: number, obj: object): void;

/** @internal */
declare function Entity_CheckSafeToRead(pointer: DataView, offset: number, size: number): void;

/** @internal */
declare function Modifier_GetPointer(modifierIndex: bigint): DataView;

/** @internal */
declare function Modifier_GetTexture(modifierIndex: bigint): string;

/** @internal */
declare function Modifier_IsHidden(modifierIndex: bigint): boolean;

/** @internal */
declare function Ability_GetSpecialValueFor(abilityIndex: number, key: string): number;

/** @internal */
declare function Ability_GetAOERadius(abilityIndex: number): number;

/** @internal */
declare function Ability_GetKeyBind(abilityIndex: number): string;

/** @internal */
declare function Ability_CanBeExecuted(abilityIndex: number): number;

/** @internal */
declare function Ability_GetDamage(abilityIndex: number): number;

/** @internal */
declare function Ability_GetCastPoint(abilityIndex: number): number;

/** @internal */
declare function Ability_GetCastRange(abilityIndex: number): number;

/** @internal */
declare function Ability_GetBehavior(abilityIndex: number): bigint;

/** @internal */
declare function Ability_GetCooldownLength(abilityIndex: number): number;

/** @internal */
declare function Ability_GetAbilityChargeRestoreTime(abilityIndex: number): number;

/** @internal */
declare function NPC_IsInRangeOfShop(npcIndex: number, shopIndex: number, physical: boolean): boolean;

/** @internal */
declare function NPC_GetAttackRange(npcIndex: number): number;

/** @internal */
declare function NPC_GetCastRangeBonus(npcIndex: number): number;

/** @internal */
declare function NPC_GetPhysicalArmorValue(npcIndex: number): number;

/** @internal */
declare function NPC_GetMagicalArmorValue(npcIndex: number): number;

/** @internal */
declare function NPC_GetAttackSpeed(npcIndex: number): number;

/** @internal */
declare function NPC_GetBaseAttackTime(npcIndex: number): number;

/** @internal */
declare function NPC_GetIdealSpeed(npcIndex: number): number;

/** @internal */
declare function NPC_GetAttachment(npcIndex: number, attachmentName: string): [number, number, number];

/** @internal */
declare function NPC_GetHealthThinkRegen(npcIndex: number): number;

/** @internal */
declare function Player_GetSelectedHeroName(playerEntityIndex: number): string;

/** @internal */
declare function Player_IsMuted(playerEntityIndex: number): boolean;

/** @internal */
declare function Player_PrepareUnitOrders(order: number, targetIndex: number, x: number, y: number, z: number, abilityIndex: number, orderIssuer: number, entityIndex: number, entityIndexes: number[], queueBehavior: number, forcedType: number, queueType: number, showEffects: boolean, callbackId: number, maxTime: number, stackTrace: string): void;

/** @internal */
declare function Player_AddSelectedUnit(unitHandle: number): void;

/** @internal */
declare function Player_ClearSelectedUnits(): void;

/** @internal */
declare function Player_GetColor(playerID: number): number;

// Memory

/** @internal */
declare function Memory_GetOffset(className: string, propertyName: string): number;

/** @internal */
declare function Memory_GetType(className: string, propertyName: string): string;

/** @internal */
declare function Memory_PointerToDataView(ptrLow: number, ptrHigh: number, className: string): DataView;

/** @internal */
declare function Memory_ReadString(ptrLow: number, ptrHigh: number): string;

/** @internal */
declare function Memory_ReadKeyValue(ptrLow: number, ptrHigh: number): string;

/** @internal */
declare function Memory_GetFixedArraySize(className: string, propertyName: string): number;

/** @internal */
declare function Memory_GetTypeSize(type: string): number;

// Renderer

/** @internal */
declare function _Render_LoadFont(name: string, options: LoadFontOptions): number;

/** @internal */
declare function _Render_GetTextSize(font: number, text: string): [number, number];

/** @internal */
declare function _Render_LoadImage(path: string, options: LoadImageOptions): [number, number, number, number];

/** @internal */
declare function _RenderTarget_Create(): { id: number; };

/** @internal */
declare function _RenderTarget_SetSize(texture: number, width: number, height: number): number;

/** @internal */
declare function Shader_Create(code: string, isVertexShader: boolean): { id: number; };

/** @internal */
declare function BlendState_Create(): { id: number; };

/** @internal */
declare function _Render_ScreenToWorld(x: number, y: number): [number, number, number] | null;

/** @internal */
declare function _Render_GetScreenSize(): [number, number];

// Tracy

/** @internal */
declare function Tracy_ZoneBegin(string: string): void;

/** @internal */
declare function Tracy_ZoneEnd(): void;

/** @internal */
declare function Tracy_Time(): number;

/** @internal */
declare function Tracy_Message(message: string): void;

/** @internal */
declare function Tracy_Enabled(): boolean;

// Menu

/** @internal */
declare function Menu_AddToggle(whereAt: string[], name: string, defaultValue: boolean): string;

/** @internal */
declare function Menu_AddInputBox(whereAt: string[], name: string, defaultValue: string): string;

/** @internal */
declare function Menu_AddComboBox(whereAt: string[], name: string, values: string[], defaultValueIndex: number): string;

/** @internal */
declare function Menu_AddMultiComboBox(whereAt: string[], name: string, values: string[], defaultState: boolean[]): string;

/** @internal */
declare function Menu_AddMultiSelect(whereAt: string[], name: string, values: string[], defaultState: boolean[], reservedSlots: number): string;

/** @internal */
declare function Menu_AddPrioritySelect(whereAt: string[], name: string, images: string[], defaultState: boolean[], reservedSlots: number): string;

/** @internal */
declare function Menu_AddSlider(whereAt: string[], name: string, minValue: number, maxValue: number, defaultValue: number, step: number): string;

/** @internal */
declare function Menu_AddColorPicker(whereAt: string[], name: string, rgba: number): string;

/** @internal */
declare function Menu_AddKeyBind(whereAt: string[], name: string, defaultKey: number): string;

/** @internal */
declare function Menu_AddToggleBlock(whereAt: string[], names: string[], defaultValue: boolean[], vertical: boolean): string;

/** @internal */
declare function Menu_AddHeroSelect(whereAt: string[], name: string, defaultState: string[]): string;

/** @internal */
declare function Menu_AddButton(whereAt: string[], name: string): string;

/** @internal */
declare function Menu_AddLabel(whereAt: string[], name: string): string;

/** @internal */
declare function MenuOption_GetValue(option: number): number | string | boolean | number[];

/** @internal */
declare function Menu_GetOption(option: number): string | null;

/** @internal */
declare function Menu_GetOptionByPath(whereAt: string[]): string | null;

// Config

/** @internal */
declare function Config_Get(configName: string): string;

// HTTP

/** @internal */
declare function HTTP_Request(data: string): number;

/** @internal */
declare function HTTP_RequestGet(id: number): string;

// GC

/** @internal */
declare function GC_Request(obj: object, requestEmsg: number, requestProtoName: string, responseEMsg: number, responseProtoName: string): number;

// Engine

/** @internal */
declare function Engine_GetSystemInfo(): string;

/** @internal */
declare function Engine_GetVDF(path: string): any;

declare function Engine_GetVDF2(path: string): string;

/** @internal */
declare function Engine_IsSafeMode(): boolean;

/** @internal */
declare function Engine_IsShopOpen(): boolean;

/** @internal */
declare function Engine_IsPointVisible(x: number, y: number, z: number): boolean;

/** @internal */
declare function Engine_GetMapName(): string;

/** @internal */
declare function Engine_GetPlayerRank(): number;

/** @internal */
declare function Engine_GetSOCache(id: number): string | null;

/** @internal */
declare function Engine_SetSOCache(id: number, data: string): void;

/** @internal */
declare function Engine_GetDotaVersion(): number;

/** @internal */
declare function Engine_SetClipboardText(text: string): void;

/** @internal */
declare function Engine_GetClipboardText(): string;

/** @internal */
declare function Matchmaking_GetParty(): string | null;

/** @internal */
declare function Matchmaking_GetLobby(): string | null;

/** @internal */
declare function Matchmaking_StartSearchMatch(skipPingMenu: boolean): void;

/** @internal */
declare function Matchmaking_GetStartFindingMatchMessage(): string;

/** @internal */
declare function Matchmaking_GetMatchType(): number;

/** @internal */
declare function Matchmaking_SetMatchType(val: number): void;

/** @internal */
declare function Matchmaking_StartLobby(): void;

/** @internal */
declare function Matchmaking_Reconnect(): void;

/** @internal */
declare function Matchmaking_InviteToParty(steamID: bigint): void;

/** @internal */
declare function Matchmaking_AcceptInviteToParty(partyID: bigint): void;

/** @internal */
declare function Matchmaking_RejectInviteToParty(partyID: bigint): void;

/** @internal */
declare function Engine_GetGlobals(): DataView;

/** @internal */
declare function Engine_GetGroundZ(x: number, y: number): number;

/** @internal */
declare function StringTable_GetUserDataByKey(tableName: string, key: string): string;

/** @internal */
declare function StringTable_GetUserDataByIndex(tableName: string, index: number): string;

/** @internal */
declare function StringTable_GetKeyByIndex(tableName: string, index: number): string;

/** @internal */
declare function StringTable_GetIndexByKey(tableName: string, key: string): number;

/** @internal */
declare function StringTable_GetFullAsMap(tableName: string): { [key: string]: string; };

/** @internal */
declare function StringTable_GetFullAsArray(tableName: string): { key: string; userdata: string; }[];

/** @internal */
declare function ConVar_GetValue(name: string): number | string;

/** @internal */
declare function ConVar_SetValue(name: string, value: number | string): void;

/** @internal */
declare function GridNav_GetCellFlags(x: number, y: number): number;

/** @internal */
declare function GridNav_FindPath(x0: number, y0: number, x1: number, y1: number, noTreeMode: boolean, allowIncomplete: boolean): number[];

// Particle

/** @internal */
declare function Particle_Create(name: string, attachType: number, entityHandle: number): number;

/** @internal */
declare function Particle_GetParticleName(particleNameIndex: bigint): string;

// Audio

/** @internal */
declare function Audio_GetSoundName(soundHash: number): string;

// NetChannel

/** @internal */
declare function NetChannel_GetLatency(flow: Enum.Flow): number;

/** @internal */
declare function NetChannel_GetAvgLatency(flow: Enum.Flow): number;

// Panorama

/** @internal */
declare function Panorama_FindByName(name: string): number[];

/** @internal */
declare function Panorama_GetName(id: number): string;

/** @internal */
declare function Panorama_GetParent(id: number): number;

/** @internal */
declare function Panorama_GetChilds(id: number): number[];

/** @internal */
declare function Panorama_FindChild(id: number, name: string): number | null;

/** @internal */
declare function Panorama_GetPosition(id: number): [number, number];

/** @internal */
declare function Panorama_GetOpacity(id: number): number;

/** @internal */
declare function Panorama_SetOpacity(id: number, opacity: number): void;

/** @internal */
declare function Panorama_GetSize(id: number): [number, number];

/** @internal */
declare function Panorama_GetOffset(id: number): [number, number];

/** @internal */
declare function Panorama_Invalidate(id: number): void;

/** @internal */
declare function Panorama_CreatePanel(type: string, parent: number, name: string): number;

/** @internal */
declare function Panorama_LoadLayout(id: number, layoutFile: string, option1: boolean, option2: boolean): void;

/** @internal */
declare function Panorama_LoadLayoutFromString(id: number, layoutString: string, option1: boolean, option2: boolean): void;

/** @internal */
declare function Panorama_RunScript(id: number, script: string, scriptName: string): void;

// etc

/** @internal */
declare function Script_FixLocation(str: string): string;

/** @internal */
declare function Shop_SelectItem(itemId: number): void;

/** @internal */
declare function QuickBuy_AddItem(itemName: string, add: boolean): void;

/** @internal */
declare function QuickBuy_Clear(): void;

/** @internal */
declare function NetMessages_Recv(obj: object, msgName: string, reliable: boolean): void;

/** @internal */
declare function NetMessages_Send(obj: object, msgName: string, reliable: boolean): void;

/** @internal */
declare function Chat_GetChannels(): string[];

/** @internal */
declare function Chat_Say(channel: string, msg: string): void;

/** @internal */
declare function Chat_Print(channel: string, msg: string): void;