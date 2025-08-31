declare interface MenuOptionChange<T>
{
	index: MenuOption<T>;
	oldValue: T;
	newValue: T;
}

declare type LocaleVariant = "en" | "ru" | "cn" | "es";

declare type MenuOptionChangeCallback<T> = (state: MenuOptionChange<T>) => void;

declare class MenuOption<T>
{
	GetOptionID(): number;

	GetType(): Enum.MenuOptionType;

	IsFolder(): boolean;

	/**
	 * Register a function to be called when the option value changes.
	 * @param func function to call when option value changes
	 * @param initCall if true, function will be called with current value for initialization 
	 * 	useful if your chain registration not end with GetValue (default is false) 
	 * @return this instance, allowing method chaining
	 * @remarks useful if your chain registration not end with GetValue
	 */
	OnChange(func: MenuOptionChangeCallback<T>, initCall?: boolean): this;

	GetValue(): T;

	SetValue(value: T): this;

	/**
	 * @remarks can only be used with ToggleBlock, MultiSelect or MultiComboBox
	 */
	GetSlotValueByIndex(index: number): boolean;

	/**
	 * @remarks can only be used with ToggleBlock, MultiSelect or MultiComboBox
	 */
	SetSlotValueByIndex(index: number, value: boolean): this;

	/**
	 * @remarks can only be used with ToggleBlock, MultiSelect or MultiComboBox
	 */
	GetSlotValueByKey(key: string): boolean;

	/**
	 * @remarks can only be used with ToggleBlock, MultiSelect or MultiComboBox
	 */
	SetSlotValueByKey(key: string, value: boolean): this;

	/**
	 * Return object with value that will be updated when option value changes, will help to avoid explicit registration of OnChange
	 * @example
	 * 
	 * let optionEnable = Menu.AddToggle([...], "Enable", true).GetBindedValue();
	 * ...
	 * desc.OnUpdate = () => {
	 *   if (!optionEnable.value)
	 *     return;
	 *  ...
	 */
	GetBindedValue(): { value: T };

	GetPrioritySelectValue(): string[];

	/**
	 * Set text that will be shown under the option
	 * @param text text to show
	 * @param locale text locale, default is "en"
	 * @return this instance, allowing method chaining
	 */
	SetTip(text: string, locale?: LocaleVariant): this;

	/**
	 * Set text that will be shown if you hover over the option
	 * @param text text to show
	 * @param locale text locale, default is "en"
	 * @return this instance, allowing method chaining
	 */
	SetTip2(text: string, locale?: LocaleVariant): this;

	/**
	 * Set title that will be shown if you hover over the option
	 * @param text text to show
	 * @param locale text locale, default is "en"
	 * @return this instance, allowing method chaining
	 */
	SetTip2Title(text: string, locale?: LocaleVariant): this;

	/**
	 * Set image that will be shown if you hover over the option
	 * @param imagePath path to the image
	 * @return this instance, allowing method chaining
	 */
	SetTip2Image(imagePath: string): this;

	/**
	 * @param value 0 - left, 1 - right 
	 * @remarks This will not work if used MergeWithNext
	 * @return this instance, allowing method chaining
	 */
	SetColumn(value: number): this;

	GetColumn(): number;

	SetMergeWithNext(value: boolean): this;

	/**
	 * Merges this option with the next one in one group.
	 * @return this instance, allowing method chaining
	 */
	MergeWithNext(): this;

	IsMergedWithNext(): boolean;

	/** 
	 * @remarks do same as SetTip
	 */
	SetTipLocale(locale: LocaleVariant, text: string): this;

	/**
	 * Set translated string values for combobox
	 * @param locale locale of the values
	 * @param values array of translated values
	 * @return this instance, allowing method chaining
	 */
	SetComboBoxLocale(locale: LocaleVariant, values: string[]): this;

	/**
	 * Set translated option name
	 * @param locale locale of the name
	 * @param name translated name
	 * @return this instance, allowing method chaining
	 */
	SetNameLocale(locale: LocaleVariant, name: string): this;

	/**
	 * Set the option as general for their group, if this option is toggled off, all other options in the group will be disabled
	 * @remarks works only with toggle options, this option should be the first one in the group
	 * @return this instance, allowing method chaining
	 */
	SetGeneral(value: boolean): this;

	/**
	 * @remarks See SetGeneral
	 */
	IsGeneral(): boolean;

	SetGeneralForTab(value: boolean): this;

	IsGeneralForTab(): boolean;

	SetHidden(value: boolean): this;

	IsHidden(): boolean;

	SetSlotHiddenByIndex(slot: number, value: boolean): this;

	IsSlotHiddenByIndex(slot: number): boolean;

	SetSlotHiddenByKey(key: string, value: boolean): this;

	IsSlotHiddenByKey(key: string): boolean;

	GetName(): string;

	GetNameTranslated(): string;

	GetChilds(): MenuOption<any>[];

	/** @internal */
	OnKeyBindPressed(value: boolean): void;

	IsKeyDownOnce(checkInputCapture?: boolean): boolean;

	IsKeyDown(checkInputCapture?: boolean): boolean;

	GetKeyString(): string;

	SetImage(imagePath: string): this;

	SetDisabled(value: boolean): this;

	IsDisabled(): boolean;

	SetSlotDisabledByIndex(slot: number, value: boolean): this;

	IsSlotDisabledByIndex(slot: number): boolean;

	SetSlotDisabledByKey(key: string, value: boolean): this;

	IsSlotDisabledByKey(key: string): boolean;

	SetNoTitle(value: boolean): this;

	IsNoTitle(): boolean;

	SetToggleBlockTipsTranslated(locale: LocaleVariant, hints: string[]): this;

	SetNotStrictAlign(value: boolean): this;

	SetToggleBlockLocale(locale: LocaleVariant, values: string[]): this;

	SetFolderTitleTranslated(locale: LocaleVariant, title: string): this;

	SetNotDrawLabelAndHint(value: boolean): this;

	NotDrawLabelAndHint(): this;

	GetNotDrawLabelAndHint(): boolean;

	SetTabModeForFolder(value: boolean): this;

	GetTabModeForFolder(): boolean;

	AddAliases(aliases: Array<string>): this;

	SaveValue(): this;

	LoadValue(processCallbacks?: boolean): this;

	GetConfigKey(): string;

	GetGeneratedConfigKey(): string;

	SetOverridenConfigKey(key: string): this;

	SetOrdering(value: number): this;

	GetOrdering(): number;

	SetKeyDown(value: boolean): this;

	SetWheelStopReason(stopReason: Enum.WheelStopReason, maxTimePressInS?: number): this;

	RemoveOption(): void;

	/** @internal */
	Update(data: string | object): void;

	/** @internal */
	OnOptionChanged(newValue: any): void;

	/** @internal */
	constructor(data: string | object);
}

declare namespace Menu
{
	function GetOptionById(id: number): MenuOption<any> | null;

	function IsNewMenu(): boolean;

	function GetLocale(): LocaleVariant;

	function SetVisible(value: boolean): void;

	function IsVisible(): boolean;

	function AddToggle(whereAt: string[], name: string, defaultValue: boolean): MenuOption<boolean>;

	function AddSlider(whereAt: string[], name: string, minValue: number, maxValue: number, defaultValue: number, step?: number): MenuOption<number>;

	function AddInputBox(whereAt: string[], name: string, defaultValue: string): MenuOption<string>;

	function AddComboBox(whereAt: string[], name: string, values: string[], defaultValueIndex: number): MenuOption<number>;

	function AddMultiComboBox(whereAt: string[], name: string, values: string[], defaultState: boolean[] | boolean): MenuOption<boolean[]>;

	function AddMultiSelect(whereAt: string[], name: string, images: string[], defaultState: boolean[] | boolean, reservedSlots?: number): MenuOption<boolean[]>;

	function AddPrioritySelect(whereAt: string[], name: string, images: string[], defaultState: boolean[] | boolean, reservedSlots?: number): MenuOption<number[]>;

	function AddColorPicker(whereAt: string[], name: string, color: Color): MenuOption<Color>;

	function AddColorPickerBlock(whereAt: string[], color: Color): MenuOption<Color>;

	function AddKeyBind(whereAt: string[], name: string, defaultKey: number): MenuOption<number>;

	function AddToggleBlock(whereAt: string[], names: string[], state: boolean[] | boolean, vertical?: boolean): MenuOption<boolean[]>;

	/**
	 * defaultValue is array of string of heroes names like npc_dota_hero_techies, npc_dota_hero_pudge
	 */
	function AddHeroSelect(whereAt: string[], name: string, defaultValue: string[]): MenuOption<string[]>;

	function AddButton(whereAt: string[], name: string, callback: () => void): MenuOption<void>;

	function AddLabel(whereAt: string[], name: string): MenuOption<void>;

	function SetPathLocale(whereAt: string[], locale: LocaleVariant, whereAtNew: string[]): void;

	function OpenFolder(path: string[]): void;

	function HighlightOption(path: string[]): void;

	function GetFolder(whereAt: string[]): MenuOption<void> | null;

	function GetOption<T = any>(whereAt: string[]): MenuOption<T> | null;

	function SetImage(whereAt: string[], imagePath: string): void;

	function OnOptionAdded(func: (option: MenuOption<any>) => void): void;

	/** @deprecated use option.IsKeyDownOnce instead */
	function IsKeyDownOnce(handle: MenuKeyBindHandler, checkInputCapture?: boolean): boolean;

	/** @deprecated use option.IsKeyDown instead */
	function IsKeyDown(handle: MenuKeyBindHandler, checkInputCapture?: boolean): boolean;

	/** @deprecated use option.GetValue instead */
	function GetValue<T>(handle: MenuOption<T>): T;

	/** @deprecated use option.SetTipLocale instead */
	function SetTipLocale(handle: MenuOptionHandler, locale: LocaleVariant, tip: string): void;

	/** @deprecated use option.GetChildrens instead */
	function GetFolderOptions(whereAt: string[]): MenuOption<any>[] | null;

	/** @internal */
	function ProcessEncodedData(cmd: number, buffer: CmdBufferReader): boolean;
}

declare type MenuKeyBindHandler = MenuOption<number>;

declare type MenuOptionHandler = MenuOption<any>;

declare type MenuToggleHandler = MenuOption<boolean>;

declare type MenuSliderHandler = MenuOption<number>;

declare type MenuComboBoxHandler = MenuOption<number>;

declare type MenuMultiSelectHandler = MenuOption<boolean[]>;

declare type MenuPrioritySelectHandler = MenuOption<number[]>;

declare type MenuInputBoxHandler = MenuOption<string>;

declare type MenuColorPickerHandler = MenuOption<[number, number, number, number]>;

declare type MenuHeroSelectHandler = MenuOption<string[]>;

declare type MenuToggleBlockHandler = MenuOption<boolean[]>;

declare type MenuButtonHandler = MenuOption<void>;

declare type MenuLabelHandler = MenuOption<void>;

declare type MenuMultiComboBoxHandler = MenuOption<boolean[]>;