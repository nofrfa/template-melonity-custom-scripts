declare namespace NetMessages
{
	type Callback<T> = (obj: T) => boolean | void;
	type CallbackReadOnly<T> = (obj: T) => void;

	/** force client to send a passed message.
	 * @param obj - The object to receive the message.
	 * @param msgName - The name of the message to receive.
	 * @param reliable - Whether the message should be sent reliably. Default is true.
	 */
	function Send<T>(obj: T, msgName: string, reliable?: boolean): void;

	/** force client to receive a passed message.
	 * @param obj - The object to receive the message.
	 * @param msgName - The name of the message to receive.
	 * @param reliable - Whether the message should be sent reliably. Default is true.
	 */
	function Recv<T>(obj: T, msgName: string, reliable?: boolean): void;

	/**
	 * Register a callback to be called when a message is received. Message will be received on the next main loop update.
	 */
	function RegisterRecv<T>(msgName: string, callback: Callback<T>): void;

	/**
	 * Register a callback to be called when a message is received. Message can be already received.
	 */
	function RegisterRecvReadOnly<T>(msgName: string, callback: CallbackReadOnly<T>): void;

	function UnregisterRecv<T>(callback: Callback<T>): void;

	function UnregisterRecvReadOnly<T>(callback: Callback<T>): void;

	/**
	 * Register a callback to be called when a message is sent. Message will be sent on the next main loop update.
	 */
	function RegisterSend<T>(msgName: string, callback: Callback<T>): void;

	/**
	 * Register a callback to be called when a message is sent. Message can be already sent.
	 */
	function RegisterSendReadOnly<T>(msgName: string, callback: CallbackReadOnly<T>): void;

	function UnregisterSend<T>(callback: Callback<T>): void;

	function UnregisterSendReadOnly<T>(callback: Callback<T>): void;

	function ToDataView(data: string): DataView;

	function FromDataView(data: DataView): string;

	/** @internal */
	function ProcessEncodedData(cmd: InternalEnum.InEvents, buffer: CmdBufferReader): boolean;
}