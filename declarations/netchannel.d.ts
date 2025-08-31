declare namespace NetChannel
{
	function GetLatency(type: Enum.Flow): number;

	function GetAvgLatency(type: Enum.Flow): number;

	function GetLatencyMs(type: Enum.Flow): number;

	function GetAvgLatencyMs(type: Enum.Flow): number;
}