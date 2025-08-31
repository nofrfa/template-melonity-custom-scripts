declare class KeyValue
{
	key: string;
	value: any;

	GetName(): string;

	Count(): number;

	Element(index: number): KeyValue | null;

	GetRawFloat(): number;

	FindKey(key: string): KeyValue | null;

	GetString(): string;

	GetRawNumber(): number;

	GetNumber(): number;

	GetValue(): number | string;

	static FromBinary(data: string): KeyValue | null;

	ToBinary(): string;

	/** @internal */
	constructor(key: string, value: { [key: string]: any; });
}