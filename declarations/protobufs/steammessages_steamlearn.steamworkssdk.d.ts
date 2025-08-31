export declare const protobufPackage = "";
export declare enum ESteamLearnDataType {
    STEAMLEARN_DATATYPE_INVALID = 0,
    STEAMLEARN_DATATYPE_INT32 = 1,
    STEAMLEARN_DATATYPE_FLOAT32 = 2,
    STEAMLEARN_DATATYPE_BOOL = 3,
    STEAMLEARN_DATATYPE_STRING = 4,
    STEAMLEARN_DATATYPE_OBJECT = 5,
    UNRECOGNIZED = -1
}
export declare function eSteamLearnDataTypeFromJSON(object: any): ESteamLearnDataType;
export declare function eSteamLearnDataTypeToJSON(object: ESteamLearnDataType): string;
export declare enum ESteammLearnRegisterDataSourceResult {
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR = 0,
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_SUCCESS_CREATED = 1,
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_SUCCESS_FOUND = 2,
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_GENERIC = 3,
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_NAME = 4,
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_VERSION = 5,
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_DATA_CHANGED = 6,
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_DATA_INVALID = 7,
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_FORBIDDEN = 8,
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_TIMESTAMP = 9,
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_DISABLED = 10,
    UNRECOGNIZED = -1
}
export declare function eSteammLearnRegisterDataSourceResultFromJSON(object: any): ESteammLearnRegisterDataSourceResult;
export declare function eSteammLearnRegisterDataSourceResultToJSON(object: ESteammLearnRegisterDataSourceResult): string;
export declare enum ESteamLearnCacheDataResult {
    STEAMLEARN_CACHE_DATA_ERROR = 0,
    STEAMLEARN_CACHE_DATA_SUCCESS = 1,
    STEAMLEARN_CACHE_DATA_ERROR_UNKNOWN_DATA_SOURCE = 2,
    STEAMLEARN_CACHE_DATA_ERROR_UNCACHED_DATA_SOURCE = 3,
    STEAMLEARN_CACHE_DATA_ERROR_INVALID_KEYS = 4,
    STEAMLEARN_CACHE_DATA_ERROR_FORBIDDEN = 5,
    STEAMLEARN_CACHE_DATA_ERROR_INVALID_TIMESTAMP = 6,
    STEAMLEARN_CACHE_DATA_DISABLED = 7,
    UNRECOGNIZED = -1
}
export declare function eSteamLearnCacheDataResultFromJSON(object: any): ESteamLearnCacheDataResult;
export declare function eSteamLearnCacheDataResultToJSON(object: ESteamLearnCacheDataResult): string;
export declare enum ESteamLearnSnapshotProjectResult {
    STEAMLEARN_SNAPSHOT_PROJECT_ERROR = 0,
    STEAMLEARN_SNAPSHOT_PROJECT_SUCCESS_STORED = 1,
    STEAMLEARN_SNAPSHOT_PROJECT_SUCCESS_QUEUED = 2,
    STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_PROJECT_ID = 3,
    STEAMLEARN_SNAPSHOT_PROJECT_ERROR_UNKNOWN_DATA_SOURCE = 4,
    STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_DATA_SOURCE_KEY = 5,
    STEAMLEARN_SNAPSHOT_PROJECT_ERROR_MISSING_CACHE_DURATION = 6,
    STEAMLEARN_SNAPSHOT_PROJECT_ERROR_NO_PUBLISHED_CONFIG = 7,
    STEAMLEARN_SNAPSHOT_PROJECT_ERROR_FORBIDDEN = 8,
    STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_TIMESTAMP = 9,
    STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INTERNAL_DATA_SOURCE_ERROR = 10,
    STEAMLEARN_SNAPSHOT_PROJECT_DISABLED = 11,
    STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_PUBLISHED_VERSION = 12,
    UNRECOGNIZED = -1
}
export declare function eSteamLearnSnapshotProjectResultFromJSON(object: any): ESteamLearnSnapshotProjectResult;
export declare function eSteamLearnSnapshotProjectResultToJSON(object: ESteamLearnSnapshotProjectResult): string;
export declare enum ESteamLearnGetHMACKeysResult {
    STEAMLEARN_GET_HMAC_KEYS_SUCCESS = 0,
    UNRECOGNIZED = -1
}
export declare function eSteamLearnGetHMACKeysResultFromJSON(object: any): ESteamLearnGetHMACKeysResult;
export declare function eSteamLearnGetHMACKeysResultToJSON(object: ESteamLearnGetHMACKeysResult): string;
export interface CMsgSteamLearnDataSourceDescObject {
    elements: CMsgSteamLearnDataSourceDescElement[];
}
export interface CMsgSteamLearnDataSourceDescElement {
    name: string;
    data_type: ESteamLearnDataType;
    object: CMsgSteamLearnDataSourceDescObject | undefined;
    count: number;
}
export interface CMsgSteamLearnDataSource {
    id: number;
    name: string;
    version: number;
    source_description: string;
    structure: CMsgSteamLearnDataSourceDescObject | undefined;
    structure_crc: number;
    cache_duration_seconds: number;
}
export interface CMsgSteamLearnDataObject {
    elements: CMsgSteamLearnDataElement[];
}
export interface CMsgSteamLearnDataElement {
    name: string;
    data_int32s: number[];
    data_floats: number[];
    data_bools: boolean[];
    data_strings: string[];
    data_objects: CMsgSteamLearnDataObject[];
}
export interface CMsgSteamLearnData {
    data_source_id: number;
    keys: string[];
    data_object: CMsgSteamLearnDataObject | undefined;
}
export interface CMsgSteamLearnDataList {
    data: CMsgSteamLearnData[];
}
export interface CMsgSteamLearn_AccessData {
    publisher_id: number;
    timestamp: number;
    random_value: string;
}
export interface CMsgSteamLearn_RegisterDataSource_Request {
    access_token: string;
    access_data: CMsgSteamLearn_AccessData | undefined;
    data_source: CMsgSteamLearnDataSource | undefined;
}
export interface CMsgSteamLearn_RegisterDataSource_Response {
    result: ESteammLearnRegisterDataSourceResult;
    data_source: CMsgSteamLearnDataSource | undefined;
}
export interface CMsgSteamLearn_CacheData_Request {
    access_token: string;
    access_data: CMsgSteamLearn_AccessData | undefined;
    data: CMsgSteamLearnData | undefined;
}
export interface CMsgSteamLearn_CacheData_Response {
    cache_data_result: ESteamLearnCacheDataResult;
}
export interface CMsgSteamLearn_SnapshotProject_Request {
    access_token: string;
    access_data: CMsgSteamLearn_AccessData | undefined;
    project_id: number;
    published_version: number;
    keys: string[];
    data: CMsgSteamLearnData[];
    pending_data_limit_seconds: number;
}
export interface CMsgSteamLearn_SnapshotProject_Response {
    snapshot_result: ESteamLearnSnapshotProjectResult;
}
export interface CMsgSteamLearn_BatchOperation_Request {
    cache_data_requests: CMsgSteamLearn_CacheData_Request[];
    snapshot_requests: CMsgSteamLearn_SnapshotProject_Request[];
}
export interface CMsgSteamLearn_BatchOperation_Response {
    cache_data_responses: CMsgSteamLearn_CacheData_Response[];
    snapshot_responses: CMsgSteamLearn_SnapshotProject_Response[];
}
export interface CMsgSteamLearnHMACKeys {
    register_data_source_key: string;
    cache_data_keys: CMsgSteamLearnHMACKeys_CacheDataKeys[];
    snapshot_project_keys: CMsgSteamLearnHMACKeys_SnapshotProjectKeys[];
}
export interface CMsgSteamLearnHMACKeys_CacheDataKeys {
    data_source_id: number;
    version: number;
    key: string;
}
export interface CMsgSteamLearnHMACKeys_SnapshotProjectKeys {
    project_id: number;
    published_version: number;
    key: string;
}
export interface CMsgSteamLearn_GetHMACKeys_Request {
    appid: number;
}
export interface CMsgSteamLearn_GetHMACKeys_Response {
    result: ESteamLearnGetHMACKeysResult;
    keys: CMsgSteamLearnHMACKeys | undefined;
}
export declare const CMsgSteamLearnDataSourceDescObject: {
    fromJSON(object: any): CMsgSteamLearnDataSourceDescObject;
    toJSON(message: CMsgSteamLearnDataSourceDescObject): unknown;
    create<I extends {
        elements?: {
            name?: string;
            data_type?: ESteamLearnDataType;
            object?: any;
            count?: number;
        }[];
    } & {
        elements?: {
            name?: string;
            data_type?: ESteamLearnDataType;
            object?: any;
            count?: number;
        }[] & ({
            name?: string;
            data_type?: ESteamLearnDataType;
            object?: any;
            count?: number;
        } & {
            name?: string;
            data_type?: ESteamLearnDataType;
            object?: {
                elements?: {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[];
            } & {
                elements?: {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[] & ({
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                } & {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: {
                        elements?: {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        }[];
                    } & {
                        elements?: {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        }[] & ({
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        } & {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: {
                                elements?: {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                }[];
                            } & {
                                elements?: {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                }[] & ({
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                } & {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: {
                                        elements?: {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        }[];
                                    } & {
                                        elements?: {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        }[] & ({
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        } & {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: {
                                                elements?: {
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                }[];
                                            } & {
                                                elements?: {
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                }[] & ({
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                } & any & { [K in Exclude<keyof I["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_1 in Exclude<keyof I["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                }[]>]: never; };
                                            } & { [K_2 in Exclude<keyof I["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                            count?: number;
                                        } & { [K_3 in Exclude<keyof I["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_4 in Exclude<keyof I["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        }[]>]: never; };
                                    } & { [K_5 in Exclude<keyof I["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                    count?: number;
                                } & { [K_6 in Exclude<keyof I["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_7 in Exclude<keyof I["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                }[]>]: never; };
                            } & { [K_8 in Exclude<keyof I["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                            count?: number;
                        } & { [K_9 in Exclude<keyof I["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_10 in Exclude<keyof I["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        }[]>]: never; };
                    } & { [K_11 in Exclude<keyof I["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                    count?: number;
                } & { [K_12 in Exclude<keyof I["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_13 in Exclude<keyof I["elements"][number]["object"]["elements"], keyof {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[]>]: never; };
            } & { [K_14 in Exclude<keyof I["elements"][number]["object"], "elements">]: never; };
            count?: number;
        } & { [K_15 in Exclude<keyof I["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_16 in Exclude<keyof I["elements"], keyof {
            name?: string;
            data_type?: ESteamLearnDataType;
            object?: any;
            count?: number;
        }[]>]: never; };
    } & { [K_17 in Exclude<keyof I, "elements">]: never; }>(base?: I): CMsgSteamLearnDataSourceDescObject;
    fromPartial<I_1 extends {
        elements?: {
            name?: string;
            data_type?: ESteamLearnDataType;
            object?: any;
            count?: number;
        }[];
    } & {
        elements?: {
            name?: string;
            data_type?: ESteamLearnDataType;
            object?: any;
            count?: number;
        }[] & ({
            name?: string;
            data_type?: ESteamLearnDataType;
            object?: any;
            count?: number;
        } & {
            name?: string;
            data_type?: ESteamLearnDataType;
            object?: {
                elements?: {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[];
            } & {
                elements?: {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[] & ({
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                } & {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: {
                        elements?: {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        }[];
                    } & {
                        elements?: {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        }[] & ({
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        } & {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: {
                                elements?: {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                }[];
                            } & {
                                elements?: {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                }[] & ({
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                } & {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: {
                                        elements?: {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        }[];
                                    } & {
                                        elements?: {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        }[] & ({
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        } & {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: {
                                                elements?: {
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                }[];
                                            } & {
                                                elements?: {
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                }[] & ({
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                } & any & { [K_18 in Exclude<keyof I_1["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_19 in Exclude<keyof I_1["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                }[]>]: never; };
                                            } & { [K_20 in Exclude<keyof I_1["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                            count?: number;
                                        } & { [K_21 in Exclude<keyof I_1["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_22 in Exclude<keyof I_1["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        }[]>]: never; };
                                    } & { [K_23 in Exclude<keyof I_1["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                    count?: number;
                                } & { [K_24 in Exclude<keyof I_1["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_25 in Exclude<keyof I_1["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                }[]>]: never; };
                            } & { [K_26 in Exclude<keyof I_1["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                            count?: number;
                        } & { [K_27 in Exclude<keyof I_1["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_28 in Exclude<keyof I_1["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        }[]>]: never; };
                    } & { [K_29 in Exclude<keyof I_1["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                    count?: number;
                } & { [K_30 in Exclude<keyof I_1["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_31 in Exclude<keyof I_1["elements"][number]["object"]["elements"], keyof {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[]>]: never; };
            } & { [K_32 in Exclude<keyof I_1["elements"][number]["object"], "elements">]: never; };
            count?: number;
        } & { [K_33 in Exclude<keyof I_1["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_34 in Exclude<keyof I_1["elements"], keyof {
            name?: string;
            data_type?: ESteamLearnDataType;
            object?: any;
            count?: number;
        }[]>]: never; };
    } & { [K_35 in Exclude<keyof I_1, "elements">]: never; }>(object: I_1): CMsgSteamLearnDataSourceDescObject;
};
export declare const CMsgSteamLearnDataSourceDescElement: {
    fromJSON(object: any): CMsgSteamLearnDataSourceDescElement;
    toJSON(message: CMsgSteamLearnDataSourceDescElement): unknown;
    create<I extends {
        name?: string;
        data_type?: ESteamLearnDataType;
        object?: any;
        count?: number;
    } & {
        name?: string;
        data_type?: ESteamLearnDataType;
        object?: {
            elements?: {
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: any;
                count?: number;
            }[];
        } & {
            elements?: {
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: any;
                count?: number;
            }[] & ({
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: any;
                count?: number;
            } & {
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: {
                    elements?: {
                        name?: string;
                        data_type?: ESteamLearnDataType;
                        object?: any;
                        count?: number;
                    }[];
                } & {
                    elements?: {
                        name?: string;
                        data_type?: ESteamLearnDataType;
                        object?: any;
                        count?: number;
                    }[] & ({
                        name?: string;
                        data_type?: ESteamLearnDataType;
                        object?: any;
                        count?: number;
                    } & {
                        name?: string;
                        data_type?: ESteamLearnDataType;
                        object?: {
                            elements?: {
                                name?: string;
                                data_type?: ESteamLearnDataType;
                                object?: any;
                                count?: number;
                            }[];
                        } & {
                            elements?: {
                                name?: string;
                                data_type?: ESteamLearnDataType;
                                object?: any;
                                count?: number;
                            }[] & ({
                                name?: string;
                                data_type?: ESteamLearnDataType;
                                object?: any;
                                count?: number;
                            } & {
                                name?: string;
                                data_type?: ESteamLearnDataType;
                                object?: {
                                    elements?: {
                                        name?: string;
                                        data_type?: ESteamLearnDataType;
                                        object?: any;
                                        count?: number;
                                    }[];
                                } & {
                                    elements?: {
                                        name?: string;
                                        data_type?: ESteamLearnDataType;
                                        object?: any;
                                        count?: number;
                                    }[] & ({
                                        name?: string;
                                        data_type?: ESteamLearnDataType;
                                        object?: any;
                                        count?: number;
                                    } & {
                                        name?: string;
                                        data_type?: ESteamLearnDataType;
                                        object?: {
                                            elements?: {
                                                name?: string;
                                                data_type?: ESteamLearnDataType;
                                                object?: any;
                                                count?: number;
                                            }[];
                                        } & {
                                            elements?: {
                                                name?: string;
                                                data_type?: ESteamLearnDataType;
                                                object?: any;
                                                count?: number;
                                            }[] & ({
                                                name?: string;
                                                data_type?: ESteamLearnDataType;
                                                object?: any;
                                                count?: number;
                                            } & {
                                                name?: string;
                                                data_type?: ESteamLearnDataType;
                                                object?: {
                                                    elements?: {
                                                        name?: string;
                                                        data_type?: ESteamLearnDataType;
                                                        object?: any;
                                                        count?: number;
                                                    }[];
                                                } & any & { [K in Exclude<keyof I["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                                count?: number;
                                            } & { [K_1 in Exclude<keyof I["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_2 in Exclude<keyof I["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                                name?: string;
                                                data_type?: ESteamLearnDataType;
                                                object?: any;
                                                count?: number;
                                            }[]>]: never; };
                                        } & { [K_3 in Exclude<keyof I["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                        count?: number;
                                    } & { [K_4 in Exclude<keyof I["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_5 in Exclude<keyof I["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                        name?: string;
                                        data_type?: ESteamLearnDataType;
                                        object?: any;
                                        count?: number;
                                    }[]>]: never; };
                                } & { [K_6 in Exclude<keyof I["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                count?: number;
                            } & { [K_7 in Exclude<keyof I["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_8 in Exclude<keyof I["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                name?: string;
                                data_type?: ESteamLearnDataType;
                                object?: any;
                                count?: number;
                            }[]>]: never; };
                        } & { [K_9 in Exclude<keyof I["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                        count?: number;
                    } & { [K_10 in Exclude<keyof I["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_11 in Exclude<keyof I["object"]["elements"][number]["object"]["elements"], keyof {
                        name?: string;
                        data_type?: ESteamLearnDataType;
                        object?: any;
                        count?: number;
                    }[]>]: never; };
                } & { [K_12 in Exclude<keyof I["object"]["elements"][number]["object"], "elements">]: never; };
                count?: number;
            } & { [K_13 in Exclude<keyof I["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_14 in Exclude<keyof I["object"]["elements"], keyof {
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: any;
                count?: number;
            }[]>]: never; };
        } & { [K_15 in Exclude<keyof I["object"], "elements">]: never; };
        count?: number;
    } & { [K_16 in Exclude<keyof I, keyof CMsgSteamLearnDataSourceDescElement>]: never; }>(base?: I): CMsgSteamLearnDataSourceDescElement;
    fromPartial<I_1 extends {
        name?: string;
        data_type?: ESteamLearnDataType;
        object?: any;
        count?: number;
    } & {
        name?: string;
        data_type?: ESteamLearnDataType;
        object?: {
            elements?: {
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: any;
                count?: number;
            }[];
        } & {
            elements?: {
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: any;
                count?: number;
            }[] & ({
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: any;
                count?: number;
            } & {
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: {
                    elements?: {
                        name?: string;
                        data_type?: ESteamLearnDataType;
                        object?: any;
                        count?: number;
                    }[];
                } & {
                    elements?: {
                        name?: string;
                        data_type?: ESteamLearnDataType;
                        object?: any;
                        count?: number;
                    }[] & ({
                        name?: string;
                        data_type?: ESteamLearnDataType;
                        object?: any;
                        count?: number;
                    } & {
                        name?: string;
                        data_type?: ESteamLearnDataType;
                        object?: {
                            elements?: {
                                name?: string;
                                data_type?: ESteamLearnDataType;
                                object?: any;
                                count?: number;
                            }[];
                        } & {
                            elements?: {
                                name?: string;
                                data_type?: ESteamLearnDataType;
                                object?: any;
                                count?: number;
                            }[] & ({
                                name?: string;
                                data_type?: ESteamLearnDataType;
                                object?: any;
                                count?: number;
                            } & {
                                name?: string;
                                data_type?: ESteamLearnDataType;
                                object?: {
                                    elements?: {
                                        name?: string;
                                        data_type?: ESteamLearnDataType;
                                        object?: any;
                                        count?: number;
                                    }[];
                                } & {
                                    elements?: {
                                        name?: string;
                                        data_type?: ESteamLearnDataType;
                                        object?: any;
                                        count?: number;
                                    }[] & ({
                                        name?: string;
                                        data_type?: ESteamLearnDataType;
                                        object?: any;
                                        count?: number;
                                    } & {
                                        name?: string;
                                        data_type?: ESteamLearnDataType;
                                        object?: {
                                            elements?: {
                                                name?: string;
                                                data_type?: ESteamLearnDataType;
                                                object?: any;
                                                count?: number;
                                            }[];
                                        } & {
                                            elements?: {
                                                name?: string;
                                                data_type?: ESteamLearnDataType;
                                                object?: any;
                                                count?: number;
                                            }[] & ({
                                                name?: string;
                                                data_type?: ESteamLearnDataType;
                                                object?: any;
                                                count?: number;
                                            } & {
                                                name?: string;
                                                data_type?: ESteamLearnDataType;
                                                object?: {
                                                    elements?: {
                                                        name?: string;
                                                        data_type?: ESteamLearnDataType;
                                                        object?: any;
                                                        count?: number;
                                                    }[];
                                                } & any & { [K_17 in Exclude<keyof I_1["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                                count?: number;
                                            } & { [K_18 in Exclude<keyof I_1["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_19 in Exclude<keyof I_1["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                                name?: string;
                                                data_type?: ESteamLearnDataType;
                                                object?: any;
                                                count?: number;
                                            }[]>]: never; };
                                        } & { [K_20 in Exclude<keyof I_1["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                        count?: number;
                                    } & { [K_21 in Exclude<keyof I_1["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_22 in Exclude<keyof I_1["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                        name?: string;
                                        data_type?: ESteamLearnDataType;
                                        object?: any;
                                        count?: number;
                                    }[]>]: never; };
                                } & { [K_23 in Exclude<keyof I_1["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                count?: number;
                            } & { [K_24 in Exclude<keyof I_1["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_25 in Exclude<keyof I_1["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                name?: string;
                                data_type?: ESteamLearnDataType;
                                object?: any;
                                count?: number;
                            }[]>]: never; };
                        } & { [K_26 in Exclude<keyof I_1["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                        count?: number;
                    } & { [K_27 in Exclude<keyof I_1["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_28 in Exclude<keyof I_1["object"]["elements"][number]["object"]["elements"], keyof {
                        name?: string;
                        data_type?: ESteamLearnDataType;
                        object?: any;
                        count?: number;
                    }[]>]: never; };
                } & { [K_29 in Exclude<keyof I_1["object"]["elements"][number]["object"], "elements">]: never; };
                count?: number;
            } & { [K_30 in Exclude<keyof I_1["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_31 in Exclude<keyof I_1["object"]["elements"], keyof {
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: any;
                count?: number;
            }[]>]: never; };
        } & { [K_32 in Exclude<keyof I_1["object"], "elements">]: never; };
        count?: number;
    } & { [K_33 in Exclude<keyof I_1, keyof CMsgSteamLearnDataSourceDescElement>]: never; }>(object: I_1): CMsgSteamLearnDataSourceDescElement;
};
export declare const CMsgSteamLearnDataSource: {
    fromJSON(object: any): CMsgSteamLearnDataSource;
    toJSON(message: CMsgSteamLearnDataSource): unknown;
    create<I extends {
        id?: number;
        name?: string;
        version?: number;
        source_description?: string;
        structure?: {
            elements?: {
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: any;
                count?: number;
            }[];
        };
        structure_crc?: number;
        cache_duration_seconds?: number;
    } & {
        id?: number;
        name?: string;
        version?: number;
        source_description?: string;
        structure?: {
            elements?: {
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: any;
                count?: number;
            }[];
        } & {
            elements?: {
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: any;
                count?: number;
            }[] & ({
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: any;
                count?: number;
            } & {
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: {
                    elements?: {
                        name?: string;
                        data_type?: ESteamLearnDataType;
                        object?: any;
                        count?: number;
                    }[];
                } & {
                    elements?: {
                        name?: string;
                        data_type?: ESteamLearnDataType;
                        object?: any;
                        count?: number;
                    }[] & ({
                        name?: string;
                        data_type?: ESteamLearnDataType;
                        object?: any;
                        count?: number;
                    } & {
                        name?: string;
                        data_type?: ESteamLearnDataType;
                        object?: {
                            elements?: {
                                name?: string;
                                data_type?: ESteamLearnDataType;
                                object?: any;
                                count?: number;
                            }[];
                        } & {
                            elements?: {
                                name?: string;
                                data_type?: ESteamLearnDataType;
                                object?: any;
                                count?: number;
                            }[] & ({
                                name?: string;
                                data_type?: ESteamLearnDataType;
                                object?: any;
                                count?: number;
                            } & {
                                name?: string;
                                data_type?: ESteamLearnDataType;
                                object?: {
                                    elements?: {
                                        name?: string;
                                        data_type?: ESteamLearnDataType;
                                        object?: any;
                                        count?: number;
                                    }[];
                                } & {
                                    elements?: {
                                        name?: string;
                                        data_type?: ESteamLearnDataType;
                                        object?: any;
                                        count?: number;
                                    }[] & ({
                                        name?: string;
                                        data_type?: ESteamLearnDataType;
                                        object?: any;
                                        count?: number;
                                    } & {
                                        name?: string;
                                        data_type?: ESteamLearnDataType;
                                        object?: {
                                            elements?: {
                                                name?: string;
                                                data_type?: ESteamLearnDataType;
                                                object?: any;
                                                count?: number;
                                            }[];
                                        } & {
                                            elements?: {
                                                name?: string;
                                                data_type?: ESteamLearnDataType;
                                                object?: any;
                                                count?: number;
                                            }[] & ({
                                                name?: string;
                                                data_type?: ESteamLearnDataType;
                                                object?: any;
                                                count?: number;
                                            } & {
                                                name?: string;
                                                data_type?: ESteamLearnDataType;
                                                object?: {
                                                    elements?: {
                                                        name?: string;
                                                        data_type?: ESteamLearnDataType;
                                                        object?: any;
                                                        count?: number;
                                                    }[];
                                                } & any & { [K in Exclude<keyof I["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                                count?: number;
                                            } & { [K_1 in Exclude<keyof I["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_2 in Exclude<keyof I["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                                name?: string;
                                                data_type?: ESteamLearnDataType;
                                                object?: any;
                                                count?: number;
                                            }[]>]: never; };
                                        } & { [K_3 in Exclude<keyof I["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                        count?: number;
                                    } & { [K_4 in Exclude<keyof I["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_5 in Exclude<keyof I["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                        name?: string;
                                        data_type?: ESteamLearnDataType;
                                        object?: any;
                                        count?: number;
                                    }[]>]: never; };
                                } & { [K_6 in Exclude<keyof I["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                count?: number;
                            } & { [K_7 in Exclude<keyof I["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_8 in Exclude<keyof I["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                name?: string;
                                data_type?: ESteamLearnDataType;
                                object?: any;
                                count?: number;
                            }[]>]: never; };
                        } & { [K_9 in Exclude<keyof I["structure"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                        count?: number;
                    } & { [K_10 in Exclude<keyof I["structure"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_11 in Exclude<keyof I["structure"]["elements"][number]["object"]["elements"], keyof {
                        name?: string;
                        data_type?: ESteamLearnDataType;
                        object?: any;
                        count?: number;
                    }[]>]: never; };
                } & { [K_12 in Exclude<keyof I["structure"]["elements"][number]["object"], "elements">]: never; };
                count?: number;
            } & { [K_13 in Exclude<keyof I["structure"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_14 in Exclude<keyof I["structure"]["elements"], keyof {
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: any;
                count?: number;
            }[]>]: never; };
        } & { [K_15 in Exclude<keyof I["structure"], "elements">]: never; };
        structure_crc?: number;
        cache_duration_seconds?: number;
    } & { [K_16 in Exclude<keyof I, keyof CMsgSteamLearnDataSource>]: never; }>(base?: I): CMsgSteamLearnDataSource;
    fromPartial<I_1 extends {
        id?: number;
        name?: string;
        version?: number;
        source_description?: string;
        structure?: {
            elements?: {
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: any;
                count?: number;
            }[];
        };
        structure_crc?: number;
        cache_duration_seconds?: number;
    } & {
        id?: number;
        name?: string;
        version?: number;
        source_description?: string;
        structure?: {
            elements?: {
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: any;
                count?: number;
            }[];
        } & {
            elements?: {
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: any;
                count?: number;
            }[] & ({
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: any;
                count?: number;
            } & {
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: {
                    elements?: {
                        name?: string;
                        data_type?: ESteamLearnDataType;
                        object?: any;
                        count?: number;
                    }[];
                } & {
                    elements?: {
                        name?: string;
                        data_type?: ESteamLearnDataType;
                        object?: any;
                        count?: number;
                    }[] & ({
                        name?: string;
                        data_type?: ESteamLearnDataType;
                        object?: any;
                        count?: number;
                    } & {
                        name?: string;
                        data_type?: ESteamLearnDataType;
                        object?: {
                            elements?: {
                                name?: string;
                                data_type?: ESteamLearnDataType;
                                object?: any;
                                count?: number;
                            }[];
                        } & {
                            elements?: {
                                name?: string;
                                data_type?: ESteamLearnDataType;
                                object?: any;
                                count?: number;
                            }[] & ({
                                name?: string;
                                data_type?: ESteamLearnDataType;
                                object?: any;
                                count?: number;
                            } & {
                                name?: string;
                                data_type?: ESteamLearnDataType;
                                object?: {
                                    elements?: {
                                        name?: string;
                                        data_type?: ESteamLearnDataType;
                                        object?: any;
                                        count?: number;
                                    }[];
                                } & {
                                    elements?: {
                                        name?: string;
                                        data_type?: ESteamLearnDataType;
                                        object?: any;
                                        count?: number;
                                    }[] & ({
                                        name?: string;
                                        data_type?: ESteamLearnDataType;
                                        object?: any;
                                        count?: number;
                                    } & {
                                        name?: string;
                                        data_type?: ESteamLearnDataType;
                                        object?: {
                                            elements?: {
                                                name?: string;
                                                data_type?: ESteamLearnDataType;
                                                object?: any;
                                                count?: number;
                                            }[];
                                        } & {
                                            elements?: {
                                                name?: string;
                                                data_type?: ESteamLearnDataType;
                                                object?: any;
                                                count?: number;
                                            }[] & ({
                                                name?: string;
                                                data_type?: ESteamLearnDataType;
                                                object?: any;
                                                count?: number;
                                            } & {
                                                name?: string;
                                                data_type?: ESteamLearnDataType;
                                                object?: {
                                                    elements?: {
                                                        name?: string;
                                                        data_type?: ESteamLearnDataType;
                                                        object?: any;
                                                        count?: number;
                                                    }[];
                                                } & any & { [K_17 in Exclude<keyof I_1["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                                count?: number;
                                            } & { [K_18 in Exclude<keyof I_1["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_19 in Exclude<keyof I_1["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                                name?: string;
                                                data_type?: ESteamLearnDataType;
                                                object?: any;
                                                count?: number;
                                            }[]>]: never; };
                                        } & { [K_20 in Exclude<keyof I_1["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                        count?: number;
                                    } & { [K_21 in Exclude<keyof I_1["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_22 in Exclude<keyof I_1["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                        name?: string;
                                        data_type?: ESteamLearnDataType;
                                        object?: any;
                                        count?: number;
                                    }[]>]: never; };
                                } & { [K_23 in Exclude<keyof I_1["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                count?: number;
                            } & { [K_24 in Exclude<keyof I_1["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_25 in Exclude<keyof I_1["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                name?: string;
                                data_type?: ESteamLearnDataType;
                                object?: any;
                                count?: number;
                            }[]>]: never; };
                        } & { [K_26 in Exclude<keyof I_1["structure"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                        count?: number;
                    } & { [K_27 in Exclude<keyof I_1["structure"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_28 in Exclude<keyof I_1["structure"]["elements"][number]["object"]["elements"], keyof {
                        name?: string;
                        data_type?: ESteamLearnDataType;
                        object?: any;
                        count?: number;
                    }[]>]: never; };
                } & { [K_29 in Exclude<keyof I_1["structure"]["elements"][number]["object"], "elements">]: never; };
                count?: number;
            } & { [K_30 in Exclude<keyof I_1["structure"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_31 in Exclude<keyof I_1["structure"]["elements"], keyof {
                name?: string;
                data_type?: ESteamLearnDataType;
                object?: any;
                count?: number;
            }[]>]: never; };
        } & { [K_32 in Exclude<keyof I_1["structure"], "elements">]: never; };
        structure_crc?: number;
        cache_duration_seconds?: number;
    } & { [K_33 in Exclude<keyof I_1, keyof CMsgSteamLearnDataSource>]: never; }>(object: I_1): CMsgSteamLearnDataSource;
};
export declare const CMsgSteamLearnDataObject: {
    fromJSON(object: any): CMsgSteamLearnDataObject;
    toJSON(message: CMsgSteamLearnDataObject): unknown;
    create<I extends {
        elements?: {
            name?: string;
            data_int32s?: number[];
            data_floats?: number[];
            data_bools?: boolean[];
            data_strings?: string[];
            data_objects?: any[];
        }[];
    } & {
        elements?: {
            name?: string;
            data_int32s?: number[];
            data_floats?: number[];
            data_bools?: boolean[];
            data_strings?: string[];
            data_objects?: any[];
        }[] & ({
            name?: string;
            data_int32s?: number[];
            data_floats?: number[];
            data_bools?: boolean[];
            data_strings?: string[];
            data_objects?: any[];
        } & {
            name?: string;
            data_int32s?: number[] & number[] & { [K in Exclude<keyof I["elements"][number]["data_int32s"], keyof number[]>]: never; };
            data_floats?: number[] & number[] & { [K_1 in Exclude<keyof I["elements"][number]["data_floats"], keyof number[]>]: never; };
            data_bools?: boolean[] & boolean[] & { [K_2 in Exclude<keyof I["elements"][number]["data_bools"], keyof boolean[]>]: never; };
            data_strings?: string[] & string[] & { [K_3 in Exclude<keyof I["elements"][number]["data_strings"], keyof string[]>]: never; };
            data_objects?: any[] & ({
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            } & {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[] & ({
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                } & {
                    name?: string;
                    data_int32s?: number[] & number[] & { [K_4 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                    data_floats?: number[] & number[] & { [K_5 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                    data_bools?: boolean[] & boolean[] & { [K_6 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                    data_strings?: string[] & string[] & { [K_7 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                    data_objects?: any[] & ({
                        elements?: {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[];
                    } & {
                        elements?: {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[] & ({
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        } & {
                            name?: string;
                            data_int32s?: number[] & number[] & { [K_8 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                            data_floats?: number[] & number[] & { [K_9 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                            data_bools?: boolean[] & boolean[] & { [K_10 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                            data_strings?: string[] & string[] & { [K_11 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                            data_objects?: any[] & ({
                                elements?: {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[];
                            } & {
                                elements?: {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[] & ({
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                } & {
                                    name?: string;
                                    data_int32s?: number[] & number[] & { [K_12 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                    data_floats?: number[] & number[] & { [K_13 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                    data_bools?: boolean[] & boolean[] & { [K_14 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                    data_strings?: string[] & string[] & { [K_15 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                    data_objects?: any[] & ({
                                        elements?: {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[];
                                    } & {
                                        elements?: {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[] & ({
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        } & {
                                            name?: string;
                                            data_int32s?: number[] & number[] & { [K_16 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                            data_floats?: number[] & number[] & { [K_17 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                            data_bools?: boolean[] & boolean[] & { [K_18 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                            data_strings?: string[] & string[] & { [K_19 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                            data_objects?: any[] & ({
                                                elements?: {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[];
                                            } & {
                                                elements?: {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[] & ({
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                } & any & { [K_20 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_21 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[]>]: never; };
                                            } & { [K_22 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_23 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                        } & { [K_24 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_25 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[]>]: never; };
                                    } & { [K_26 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_27 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                } & { [K_28 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_29 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[]>]: never; };
                            } & { [K_30 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_31 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                        } & { [K_32 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_33 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[]>]: never; };
                    } & { [K_34 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_35 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                } & { [K_36 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_37 in Exclude<keyof I["elements"][number]["data_objects"][number]["elements"], keyof {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[]>]: never; };
            } & { [K_38 in Exclude<keyof I["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_39 in Exclude<keyof I["elements"][number]["data_objects"], keyof any[]>]: never; };
        } & { [K_40 in Exclude<keyof I["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_41 in Exclude<keyof I["elements"], keyof {
            name?: string;
            data_int32s?: number[];
            data_floats?: number[];
            data_bools?: boolean[];
            data_strings?: string[];
            data_objects?: any[];
        }[]>]: never; };
    } & { [K_42 in Exclude<keyof I, "elements">]: never; }>(base?: I): CMsgSteamLearnDataObject;
    fromPartial<I_1 extends {
        elements?: {
            name?: string;
            data_int32s?: number[];
            data_floats?: number[];
            data_bools?: boolean[];
            data_strings?: string[];
            data_objects?: any[];
        }[];
    } & {
        elements?: {
            name?: string;
            data_int32s?: number[];
            data_floats?: number[];
            data_bools?: boolean[];
            data_strings?: string[];
            data_objects?: any[];
        }[] & ({
            name?: string;
            data_int32s?: number[];
            data_floats?: number[];
            data_bools?: boolean[];
            data_strings?: string[];
            data_objects?: any[];
        } & {
            name?: string;
            data_int32s?: number[] & number[] & { [K_43 in Exclude<keyof I_1["elements"][number]["data_int32s"], keyof number[]>]: never; };
            data_floats?: number[] & number[] & { [K_44 in Exclude<keyof I_1["elements"][number]["data_floats"], keyof number[]>]: never; };
            data_bools?: boolean[] & boolean[] & { [K_45 in Exclude<keyof I_1["elements"][number]["data_bools"], keyof boolean[]>]: never; };
            data_strings?: string[] & string[] & { [K_46 in Exclude<keyof I_1["elements"][number]["data_strings"], keyof string[]>]: never; };
            data_objects?: any[] & ({
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            } & {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[] & ({
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                } & {
                    name?: string;
                    data_int32s?: number[] & number[] & { [K_47 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                    data_floats?: number[] & number[] & { [K_48 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                    data_bools?: boolean[] & boolean[] & { [K_49 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                    data_strings?: string[] & string[] & { [K_50 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                    data_objects?: any[] & ({
                        elements?: {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[];
                    } & {
                        elements?: {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[] & ({
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        } & {
                            name?: string;
                            data_int32s?: number[] & number[] & { [K_51 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                            data_floats?: number[] & number[] & { [K_52 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                            data_bools?: boolean[] & boolean[] & { [K_53 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                            data_strings?: string[] & string[] & { [K_54 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                            data_objects?: any[] & ({
                                elements?: {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[];
                            } & {
                                elements?: {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[] & ({
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                } & {
                                    name?: string;
                                    data_int32s?: number[] & number[] & { [K_55 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                    data_floats?: number[] & number[] & { [K_56 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                    data_bools?: boolean[] & boolean[] & { [K_57 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                    data_strings?: string[] & string[] & { [K_58 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                    data_objects?: any[] & ({
                                        elements?: {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[];
                                    } & {
                                        elements?: {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[] & ({
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        } & {
                                            name?: string;
                                            data_int32s?: number[] & number[] & { [K_59 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                            data_floats?: number[] & number[] & { [K_60 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                            data_bools?: boolean[] & boolean[] & { [K_61 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                            data_strings?: string[] & string[] & { [K_62 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                            data_objects?: any[] & ({
                                                elements?: {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[];
                                            } & {
                                                elements?: {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[] & ({
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                } & any & { [K_63 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_64 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[]>]: never; };
                                            } & { [K_65 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_66 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                        } & { [K_67 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_68 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[]>]: never; };
                                    } & { [K_69 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_70 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                } & { [K_71 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_72 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[]>]: never; };
                            } & { [K_73 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_74 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                        } & { [K_75 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_76 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[]>]: never; };
                    } & { [K_77 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_78 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                } & { [K_79 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_80 in Exclude<keyof I_1["elements"][number]["data_objects"][number]["elements"], keyof {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[]>]: never; };
            } & { [K_81 in Exclude<keyof I_1["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_82 in Exclude<keyof I_1["elements"][number]["data_objects"], keyof any[]>]: never; };
        } & { [K_83 in Exclude<keyof I_1["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_84 in Exclude<keyof I_1["elements"], keyof {
            name?: string;
            data_int32s?: number[];
            data_floats?: number[];
            data_bools?: boolean[];
            data_strings?: string[];
            data_objects?: any[];
        }[]>]: never; };
    } & { [K_85 in Exclude<keyof I_1, "elements">]: never; }>(object: I_1): CMsgSteamLearnDataObject;
};
export declare const CMsgSteamLearnDataElement: {
    fromJSON(object: any): CMsgSteamLearnDataElement;
    toJSON(message: CMsgSteamLearnDataElement): unknown;
    create<I extends {
        name?: string;
        data_int32s?: number[];
        data_floats?: number[];
        data_bools?: boolean[];
        data_strings?: string[];
        data_objects?: any[];
    } & {
        name?: string;
        data_int32s?: number[] & number[] & { [K in Exclude<keyof I["data_int32s"], keyof number[]>]: never; };
        data_floats?: number[] & number[] & { [K_1 in Exclude<keyof I["data_floats"], keyof number[]>]: never; };
        data_bools?: boolean[] & boolean[] & { [K_2 in Exclude<keyof I["data_bools"], keyof boolean[]>]: never; };
        data_strings?: string[] & string[] & { [K_3 in Exclude<keyof I["data_strings"], keyof string[]>]: never; };
        data_objects?: any[] & ({
            elements?: {
                name?: string;
                data_int32s?: number[];
                data_floats?: number[];
                data_bools?: boolean[];
                data_strings?: string[];
                data_objects?: any[];
            }[];
        } & {
            elements?: {
                name?: string;
                data_int32s?: number[];
                data_floats?: number[];
                data_bools?: boolean[];
                data_strings?: string[];
                data_objects?: any[];
            }[] & ({
                name?: string;
                data_int32s?: number[];
                data_floats?: number[];
                data_bools?: boolean[];
                data_strings?: string[];
                data_objects?: any[];
            } & {
                name?: string;
                data_int32s?: number[] & number[] & { [K_4 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                data_floats?: number[] & number[] & { [K_5 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                data_bools?: boolean[] & boolean[] & { [K_6 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                data_strings?: string[] & string[] & { [K_7 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                data_objects?: any[] & ({
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                } & {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[] & ({
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    } & {
                        name?: string;
                        data_int32s?: number[] & number[] & { [K_8 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                        data_floats?: number[] & number[] & { [K_9 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                        data_bools?: boolean[] & boolean[] & { [K_10 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                        data_strings?: string[] & string[] & { [K_11 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                        data_objects?: any[] & ({
                            elements?: {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[];
                        } & {
                            elements?: {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[] & ({
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            } & {
                                name?: string;
                                data_int32s?: number[] & number[] & { [K_12 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                data_floats?: number[] & number[] & { [K_13 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                data_bools?: boolean[] & boolean[] & { [K_14 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                data_strings?: string[] & string[] & { [K_15 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                data_objects?: any[] & ({
                                    elements?: {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[];
                                } & {
                                    elements?: {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[] & ({
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    } & {
                                        name?: string;
                                        data_int32s?: number[] & number[] & { [K_16 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                        data_floats?: number[] & number[] & { [K_17 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                        data_bools?: boolean[] & boolean[] & { [K_18 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                        data_strings?: string[] & string[] & { [K_19 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                        data_objects?: any[] & ({
                                            elements?: {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[];
                                        } & {
                                            elements?: {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[] & ({
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            } & {
                                                name?: string;
                                                data_int32s?: number[] & number[] & { [K_20 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                                data_floats?: number[] & number[] & { [K_21 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                                data_bools?: boolean[] & boolean[] & { [K_22 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                                data_strings?: string[] & string[] & { [K_23 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                                data_objects?: any[] & ({
                                                    elements?: {
                                                        name?: string;
                                                        data_int32s?: number[];
                                                        data_floats?: number[];
                                                        data_bools?: boolean[];
                                                        data_strings?: string[];
                                                        data_objects?: any[];
                                                    }[];
                                                } & any & { [K_24 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_25 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                            } & { [K_26 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_27 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[]>]: never; };
                                        } & { [K_28 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_29 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                    } & { [K_30 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_31 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[]>]: never; };
                                } & { [K_32 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_33 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                            } & { [K_34 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_35 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[]>]: never; };
                        } & { [K_36 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_37 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                    } & { [K_38 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_39 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[]>]: never; };
                } & { [K_40 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_41 in Exclude<keyof I["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
            } & { [K_42 in Exclude<keyof I["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_43 in Exclude<keyof I["data_objects"][number]["elements"], keyof {
                name?: string;
                data_int32s?: number[];
                data_floats?: number[];
                data_bools?: boolean[];
                data_strings?: string[];
                data_objects?: any[];
            }[]>]: never; };
        } & { [K_44 in Exclude<keyof I["data_objects"][number], "elements">]: never; })[] & { [K_45 in Exclude<keyof I["data_objects"], keyof any[]>]: never; };
    } & { [K_46 in Exclude<keyof I, keyof CMsgSteamLearnDataElement>]: never; }>(base?: I): CMsgSteamLearnDataElement;
    fromPartial<I_1 extends {
        name?: string;
        data_int32s?: number[];
        data_floats?: number[];
        data_bools?: boolean[];
        data_strings?: string[];
        data_objects?: any[];
    } & {
        name?: string;
        data_int32s?: number[] & number[] & { [K_47 in Exclude<keyof I_1["data_int32s"], keyof number[]>]: never; };
        data_floats?: number[] & number[] & { [K_48 in Exclude<keyof I_1["data_floats"], keyof number[]>]: never; };
        data_bools?: boolean[] & boolean[] & { [K_49 in Exclude<keyof I_1["data_bools"], keyof boolean[]>]: never; };
        data_strings?: string[] & string[] & { [K_50 in Exclude<keyof I_1["data_strings"], keyof string[]>]: never; };
        data_objects?: any[] & ({
            elements?: {
                name?: string;
                data_int32s?: number[];
                data_floats?: number[];
                data_bools?: boolean[];
                data_strings?: string[];
                data_objects?: any[];
            }[];
        } & {
            elements?: {
                name?: string;
                data_int32s?: number[];
                data_floats?: number[];
                data_bools?: boolean[];
                data_strings?: string[];
                data_objects?: any[];
            }[] & ({
                name?: string;
                data_int32s?: number[];
                data_floats?: number[];
                data_bools?: boolean[];
                data_strings?: string[];
                data_objects?: any[];
            } & {
                name?: string;
                data_int32s?: number[] & number[] & { [K_51 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                data_floats?: number[] & number[] & { [K_52 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                data_bools?: boolean[] & boolean[] & { [K_53 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                data_strings?: string[] & string[] & { [K_54 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                data_objects?: any[] & ({
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                } & {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[] & ({
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    } & {
                        name?: string;
                        data_int32s?: number[] & number[] & { [K_55 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                        data_floats?: number[] & number[] & { [K_56 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                        data_bools?: boolean[] & boolean[] & { [K_57 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                        data_strings?: string[] & string[] & { [K_58 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                        data_objects?: any[] & ({
                            elements?: {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[];
                        } & {
                            elements?: {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[] & ({
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            } & {
                                name?: string;
                                data_int32s?: number[] & number[] & { [K_59 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                data_floats?: number[] & number[] & { [K_60 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                data_bools?: boolean[] & boolean[] & { [K_61 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                data_strings?: string[] & string[] & { [K_62 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                data_objects?: any[] & ({
                                    elements?: {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[];
                                } & {
                                    elements?: {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[] & ({
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    } & {
                                        name?: string;
                                        data_int32s?: number[] & number[] & { [K_63 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                        data_floats?: number[] & number[] & { [K_64 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                        data_bools?: boolean[] & boolean[] & { [K_65 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                        data_strings?: string[] & string[] & { [K_66 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                        data_objects?: any[] & ({
                                            elements?: {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[];
                                        } & {
                                            elements?: {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[] & ({
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            } & {
                                                name?: string;
                                                data_int32s?: number[] & number[] & { [K_67 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                                data_floats?: number[] & number[] & { [K_68 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                                data_bools?: boolean[] & boolean[] & { [K_69 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                                data_strings?: string[] & string[] & { [K_70 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                                data_objects?: any[] & ({
                                                    elements?: {
                                                        name?: string;
                                                        data_int32s?: number[];
                                                        data_floats?: number[];
                                                        data_bools?: boolean[];
                                                        data_strings?: string[];
                                                        data_objects?: any[];
                                                    }[];
                                                } & any & { [K_71 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_72 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                            } & { [K_73 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_74 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[]>]: never; };
                                        } & { [K_75 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_76 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                    } & { [K_77 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_78 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[]>]: never; };
                                } & { [K_79 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_80 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                            } & { [K_81 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_82 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[]>]: never; };
                        } & { [K_83 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_84 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                    } & { [K_85 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_86 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[]>]: never; };
                } & { [K_87 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_88 in Exclude<keyof I_1["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
            } & { [K_89 in Exclude<keyof I_1["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_90 in Exclude<keyof I_1["data_objects"][number]["elements"], keyof {
                name?: string;
                data_int32s?: number[];
                data_floats?: number[];
                data_bools?: boolean[];
                data_strings?: string[];
                data_objects?: any[];
            }[]>]: never; };
        } & { [K_91 in Exclude<keyof I_1["data_objects"][number], "elements">]: never; })[] & { [K_92 in Exclude<keyof I_1["data_objects"], keyof any[]>]: never; };
    } & { [K_93 in Exclude<keyof I_1, keyof CMsgSteamLearnDataElement>]: never; }>(object: I_1): CMsgSteamLearnDataElement;
};
export declare const CMsgSteamLearnData: {
    fromJSON(object: any): CMsgSteamLearnData;
    toJSON(message: CMsgSteamLearnData): unknown;
    create<I extends {
        data_source_id?: number;
        keys?: string[];
        data_object?: {
            elements?: {
                name?: string;
                data_int32s?: number[];
                data_floats?: number[];
                data_bools?: boolean[];
                data_strings?: string[];
                data_objects?: any[];
            }[];
        };
    } & {
        data_source_id?: number;
        keys?: string[] & string[] & { [K in Exclude<keyof I["keys"], keyof string[]>]: never; };
        data_object?: {
            elements?: {
                name?: string;
                data_int32s?: number[];
                data_floats?: number[];
                data_bools?: boolean[];
                data_strings?: string[];
                data_objects?: any[];
            }[];
        } & {
            elements?: {
                name?: string;
                data_int32s?: number[];
                data_floats?: number[];
                data_bools?: boolean[];
                data_strings?: string[];
                data_objects?: any[];
            }[] & ({
                name?: string;
                data_int32s?: number[];
                data_floats?: number[];
                data_bools?: boolean[];
                data_strings?: string[];
                data_objects?: any[];
            } & {
                name?: string;
                data_int32s?: number[] & number[] & { [K_1 in Exclude<keyof I["data_object"]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                data_floats?: number[] & number[] & { [K_2 in Exclude<keyof I["data_object"]["elements"][number]["data_floats"], keyof number[]>]: never; };
                data_bools?: boolean[] & boolean[] & { [K_3 in Exclude<keyof I["data_object"]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                data_strings?: string[] & string[] & { [K_4 in Exclude<keyof I["data_object"]["elements"][number]["data_strings"], keyof string[]>]: never; };
                data_objects?: any[] & ({
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                } & {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[] & ({
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    } & {
                        name?: string;
                        data_int32s?: number[] & number[] & { [K_5 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                        data_floats?: number[] & number[] & { [K_6 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                        data_bools?: boolean[] & boolean[] & { [K_7 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                        data_strings?: string[] & string[] & { [K_8 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                        data_objects?: any[] & ({
                            elements?: {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[];
                        } & {
                            elements?: {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[] & ({
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            } & {
                                name?: string;
                                data_int32s?: number[] & number[] & { [K_9 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                data_floats?: number[] & number[] & { [K_10 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                data_bools?: boolean[] & boolean[] & { [K_11 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                data_strings?: string[] & string[] & { [K_12 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                data_objects?: any[] & ({
                                    elements?: {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[];
                                } & {
                                    elements?: {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[] & ({
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    } & {
                                        name?: string;
                                        data_int32s?: number[] & number[] & { [K_13 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                        data_floats?: number[] & number[] & { [K_14 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                        data_bools?: boolean[] & boolean[] & { [K_15 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                        data_strings?: string[] & string[] & { [K_16 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                        data_objects?: any[] & ({
                                            elements?: {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[];
                                        } & {
                                            elements?: {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[] & ({
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            } & {
                                                name?: string;
                                                data_int32s?: number[] & number[] & { [K_17 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                                data_floats?: number[] & number[] & { [K_18 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                                data_bools?: boolean[] & boolean[] & { [K_19 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                                data_strings?: string[] & string[] & { [K_20 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                                data_objects?: any[] & ({
                                                    elements?: {
                                                        name?: string;
                                                        data_int32s?: number[];
                                                        data_floats?: number[];
                                                        data_bools?: boolean[];
                                                        data_strings?: string[];
                                                        data_objects?: any[];
                                                    }[];
                                                } & any & { [K_21 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_22 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                            } & { [K_23 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_24 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[]>]: never; };
                                        } & { [K_25 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_26 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                    } & { [K_27 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_28 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[]>]: never; };
                                } & { [K_29 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_30 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                            } & { [K_31 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_32 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[]>]: never; };
                        } & { [K_33 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_34 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                    } & { [K_35 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_36 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number]["elements"], keyof {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[]>]: never; };
                } & { [K_37 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_38 in Exclude<keyof I["data_object"]["elements"][number]["data_objects"], keyof any[]>]: never; };
            } & { [K_39 in Exclude<keyof I["data_object"]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_40 in Exclude<keyof I["data_object"]["elements"], keyof {
                name?: string;
                data_int32s?: number[];
                data_floats?: number[];
                data_bools?: boolean[];
                data_strings?: string[];
                data_objects?: any[];
            }[]>]: never; };
        } & { [K_41 in Exclude<keyof I["data_object"], "elements">]: never; };
    } & { [K_42 in Exclude<keyof I, keyof CMsgSteamLearnData>]: never; }>(base?: I): CMsgSteamLearnData;
    fromPartial<I_1 extends {
        data_source_id?: number;
        keys?: string[];
        data_object?: {
            elements?: {
                name?: string;
                data_int32s?: number[];
                data_floats?: number[];
                data_bools?: boolean[];
                data_strings?: string[];
                data_objects?: any[];
            }[];
        };
    } & {
        data_source_id?: number;
        keys?: string[] & string[] & { [K_43 in Exclude<keyof I_1["keys"], keyof string[]>]: never; };
        data_object?: {
            elements?: {
                name?: string;
                data_int32s?: number[];
                data_floats?: number[];
                data_bools?: boolean[];
                data_strings?: string[];
                data_objects?: any[];
            }[];
        } & {
            elements?: {
                name?: string;
                data_int32s?: number[];
                data_floats?: number[];
                data_bools?: boolean[];
                data_strings?: string[];
                data_objects?: any[];
            }[] & ({
                name?: string;
                data_int32s?: number[];
                data_floats?: number[];
                data_bools?: boolean[];
                data_strings?: string[];
                data_objects?: any[];
            } & {
                name?: string;
                data_int32s?: number[] & number[] & { [K_44 in Exclude<keyof I_1["data_object"]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                data_floats?: number[] & number[] & { [K_45 in Exclude<keyof I_1["data_object"]["elements"][number]["data_floats"], keyof number[]>]: never; };
                data_bools?: boolean[] & boolean[] & { [K_46 in Exclude<keyof I_1["data_object"]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                data_strings?: string[] & string[] & { [K_47 in Exclude<keyof I_1["data_object"]["elements"][number]["data_strings"], keyof string[]>]: never; };
                data_objects?: any[] & ({
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                } & {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[] & ({
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    } & {
                        name?: string;
                        data_int32s?: number[] & number[] & { [K_48 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                        data_floats?: number[] & number[] & { [K_49 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                        data_bools?: boolean[] & boolean[] & { [K_50 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                        data_strings?: string[] & string[] & { [K_51 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                        data_objects?: any[] & ({
                            elements?: {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[];
                        } & {
                            elements?: {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[] & ({
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            } & {
                                name?: string;
                                data_int32s?: number[] & number[] & { [K_52 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                data_floats?: number[] & number[] & { [K_53 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                data_bools?: boolean[] & boolean[] & { [K_54 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                data_strings?: string[] & string[] & { [K_55 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                data_objects?: any[] & ({
                                    elements?: {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[];
                                } & {
                                    elements?: {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[] & ({
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    } & {
                                        name?: string;
                                        data_int32s?: number[] & number[] & { [K_56 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                        data_floats?: number[] & number[] & { [K_57 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                        data_bools?: boolean[] & boolean[] & { [K_58 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                        data_strings?: string[] & string[] & { [K_59 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                        data_objects?: any[] & ({
                                            elements?: {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[];
                                        } & {
                                            elements?: {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[] & ({
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            } & {
                                                name?: string;
                                                data_int32s?: number[] & number[] & { [K_60 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                                data_floats?: number[] & number[] & { [K_61 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                                data_bools?: boolean[] & boolean[] & { [K_62 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                                data_strings?: string[] & string[] & { [K_63 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                                data_objects?: any[] & ({
                                                    elements?: {
                                                        name?: string;
                                                        data_int32s?: number[];
                                                        data_floats?: number[];
                                                        data_bools?: boolean[];
                                                        data_strings?: string[];
                                                        data_objects?: any[];
                                                    }[];
                                                } & any & { [K_64 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_65 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                            } & { [K_66 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_67 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[]>]: never; };
                                        } & { [K_68 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_69 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                    } & { [K_70 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_71 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[]>]: never; };
                                } & { [K_72 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_73 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                            } & { [K_74 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_75 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[]>]: never; };
                        } & { [K_76 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_77 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                    } & { [K_78 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_79 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number]["elements"], keyof {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[]>]: never; };
                } & { [K_80 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_81 in Exclude<keyof I_1["data_object"]["elements"][number]["data_objects"], keyof any[]>]: never; };
            } & { [K_82 in Exclude<keyof I_1["data_object"]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_83 in Exclude<keyof I_1["data_object"]["elements"], keyof {
                name?: string;
                data_int32s?: number[];
                data_floats?: number[];
                data_bools?: boolean[];
                data_strings?: string[];
                data_objects?: any[];
            }[]>]: never; };
        } & { [K_84 in Exclude<keyof I_1["data_object"], "elements">]: never; };
    } & { [K_85 in Exclude<keyof I_1, keyof CMsgSteamLearnData>]: never; }>(object: I_1): CMsgSteamLearnData;
};
export declare const CMsgSteamLearnDataList: {
    fromJSON(object: any): CMsgSteamLearnDataList;
    toJSON(message: CMsgSteamLearnDataList): unknown;
    create<I extends {
        data?: {
            data_source_id?: number;
            keys?: string[];
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            };
        }[];
    } & {
        data?: {
            data_source_id?: number;
            keys?: string[];
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            };
        }[] & ({
            data_source_id?: number;
            keys?: string[];
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            };
        } & {
            data_source_id?: number;
            keys?: string[] & string[] & { [K in Exclude<keyof I["data"][number]["keys"], keyof string[]>]: never; };
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            } & {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[] & ({
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                } & {
                    name?: string;
                    data_int32s?: number[] & number[] & { [K_1 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                    data_floats?: number[] & number[] & { [K_2 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_floats"], keyof number[]>]: never; };
                    data_bools?: boolean[] & boolean[] & { [K_3 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                    data_strings?: string[] & string[] & { [K_4 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_strings"], keyof string[]>]: never; };
                    data_objects?: any[] & ({
                        elements?: {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[];
                    } & {
                        elements?: {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[] & ({
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        } & {
                            name?: string;
                            data_int32s?: number[] & number[] & { [K_5 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                            data_floats?: number[] & number[] & { [K_6 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                            data_bools?: boolean[] & boolean[] & { [K_7 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                            data_strings?: string[] & string[] & { [K_8 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                            data_objects?: any[] & ({
                                elements?: {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[];
                            } & {
                                elements?: {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[] & ({
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                } & {
                                    name?: string;
                                    data_int32s?: number[] & number[] & { [K_9 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                    data_floats?: number[] & number[] & { [K_10 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                    data_bools?: boolean[] & boolean[] & { [K_11 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                    data_strings?: string[] & string[] & { [K_12 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                    data_objects?: any[] & ({
                                        elements?: {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[];
                                    } & {
                                        elements?: {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[] & ({
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        } & {
                                            name?: string;
                                            data_int32s?: number[] & number[] & { [K_13 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                            data_floats?: number[] & number[] & { [K_14 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                            data_bools?: boolean[] & boolean[] & { [K_15 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                            data_strings?: string[] & string[] & { [K_16 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                            data_objects?: any[] & ({
                                                elements?: {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[];
                                            } & {
                                                elements?: {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[] & ({
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                } & any & { [K_17 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_18 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[]>]: never; };
                                            } & { [K_19 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_20 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                        } & { [K_21 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_22 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[]>]: never; };
                                    } & { [K_23 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_24 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                } & { [K_25 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_26 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[]>]: never; };
                            } & { [K_27 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_28 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                        } & { [K_29 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_30 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"], keyof {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[]>]: never; };
                    } & { [K_31 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_32 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"], keyof any[]>]: never; };
                } & { [K_33 in Exclude<keyof I["data"][number]["data_object"]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_34 in Exclude<keyof I["data"][number]["data_object"]["elements"], keyof {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[]>]: never; };
            } & { [K_35 in Exclude<keyof I["data"][number]["data_object"], "elements">]: never; };
        } & { [K_36 in Exclude<keyof I["data"][number], keyof CMsgSteamLearnData>]: never; })[] & { [K_37 in Exclude<keyof I["data"], keyof {
            data_source_id?: number;
            keys?: string[];
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            };
        }[]>]: never; };
    } & { [K_38 in Exclude<keyof I, "data">]: never; }>(base?: I): CMsgSteamLearnDataList;
    fromPartial<I_1 extends {
        data?: {
            data_source_id?: number;
            keys?: string[];
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            };
        }[];
    } & {
        data?: {
            data_source_id?: number;
            keys?: string[];
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            };
        }[] & ({
            data_source_id?: number;
            keys?: string[];
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            };
        } & {
            data_source_id?: number;
            keys?: string[] & string[] & { [K_39 in Exclude<keyof I_1["data"][number]["keys"], keyof string[]>]: never; };
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            } & {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[] & ({
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                } & {
                    name?: string;
                    data_int32s?: number[] & number[] & { [K_40 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                    data_floats?: number[] & number[] & { [K_41 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_floats"], keyof number[]>]: never; };
                    data_bools?: boolean[] & boolean[] & { [K_42 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                    data_strings?: string[] & string[] & { [K_43 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_strings"], keyof string[]>]: never; };
                    data_objects?: any[] & ({
                        elements?: {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[];
                    } & {
                        elements?: {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[] & ({
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        } & {
                            name?: string;
                            data_int32s?: number[] & number[] & { [K_44 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                            data_floats?: number[] & number[] & { [K_45 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                            data_bools?: boolean[] & boolean[] & { [K_46 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                            data_strings?: string[] & string[] & { [K_47 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                            data_objects?: any[] & ({
                                elements?: {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[];
                            } & {
                                elements?: {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[] & ({
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                } & {
                                    name?: string;
                                    data_int32s?: number[] & number[] & { [K_48 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                    data_floats?: number[] & number[] & { [K_49 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                    data_bools?: boolean[] & boolean[] & { [K_50 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                    data_strings?: string[] & string[] & { [K_51 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                    data_objects?: any[] & ({
                                        elements?: {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[];
                                    } & {
                                        elements?: {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[] & ({
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        } & {
                                            name?: string;
                                            data_int32s?: number[] & number[] & { [K_52 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                            data_floats?: number[] & number[] & { [K_53 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                            data_bools?: boolean[] & boolean[] & { [K_54 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                            data_strings?: string[] & string[] & { [K_55 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                            data_objects?: any[] & ({
                                                elements?: {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[];
                                            } & {
                                                elements?: {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[] & ({
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                } & any & { [K_56 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_57 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[]>]: never; };
                                            } & { [K_58 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_59 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                        } & { [K_60 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_61 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[]>]: never; };
                                    } & { [K_62 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_63 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                } & { [K_64 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_65 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[]>]: never; };
                            } & { [K_66 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_67 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                        } & { [K_68 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_69 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"], keyof {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[]>]: never; };
                    } & { [K_70 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_71 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"], keyof any[]>]: never; };
                } & { [K_72 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_73 in Exclude<keyof I_1["data"][number]["data_object"]["elements"], keyof {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[]>]: never; };
            } & { [K_74 in Exclude<keyof I_1["data"][number]["data_object"], "elements">]: never; };
        } & { [K_75 in Exclude<keyof I_1["data"][number], keyof CMsgSteamLearnData>]: never; })[] & { [K_76 in Exclude<keyof I_1["data"], keyof {
            data_source_id?: number;
            keys?: string[];
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            };
        }[]>]: never; };
    } & { [K_77 in Exclude<keyof I_1, "data">]: never; }>(object: I_1): CMsgSteamLearnDataList;
};
export declare const CMsgSteamLearn_AccessData: {
    fromJSON(object: any): CMsgSteamLearn_AccessData;
    toJSON(message: CMsgSteamLearn_AccessData): unknown;
    create<I extends {
        publisher_id?: number;
        timestamp?: number;
        random_value?: string;
    } & {
        publisher_id?: number;
        timestamp?: number;
        random_value?: string;
    } & { [K in Exclude<keyof I, keyof CMsgSteamLearn_AccessData>]: never; }>(base?: I): CMsgSteamLearn_AccessData;
    fromPartial<I_1 extends {
        publisher_id?: number;
        timestamp?: number;
        random_value?: string;
    } & {
        publisher_id?: number;
        timestamp?: number;
        random_value?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgSteamLearn_AccessData>]: never; }>(object: I_1): CMsgSteamLearn_AccessData;
};
export declare const CMsgSteamLearn_RegisterDataSource_Request: {
    fromJSON(object: any): CMsgSteamLearn_RegisterDataSource_Request;
    toJSON(message: CMsgSteamLearn_RegisterDataSource_Request): unknown;
    create<I extends {
        access_token?: string;
        access_data?: {
            publisher_id?: number;
            timestamp?: number;
            random_value?: string;
        };
        data_source?: {
            id?: number;
            name?: string;
            version?: number;
            source_description?: string;
            structure?: {
                elements?: {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[];
            };
            structure_crc?: number;
            cache_duration_seconds?: number;
        };
    } & {
        access_token?: string;
        access_data?: {
            publisher_id?: number;
            timestamp?: number;
            random_value?: string;
        } & {
            publisher_id?: number;
            timestamp?: number;
            random_value?: string;
        } & { [K in Exclude<keyof I["access_data"], keyof CMsgSteamLearn_AccessData>]: never; };
        data_source?: {
            id?: number;
            name?: string;
            version?: number;
            source_description?: string;
            structure?: {
                elements?: {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[];
            };
            structure_crc?: number;
            cache_duration_seconds?: number;
        } & {
            id?: number;
            name?: string;
            version?: number;
            source_description?: string;
            structure?: {
                elements?: {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[];
            } & {
                elements?: {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[] & ({
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                } & {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: {
                        elements?: {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        }[];
                    } & {
                        elements?: {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        }[] & ({
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        } & {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: {
                                elements?: {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                }[];
                            } & {
                                elements?: {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                }[] & ({
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                } & {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: {
                                        elements?: {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        }[];
                                    } & {
                                        elements?: {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        }[] & ({
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        } & {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: {
                                                elements?: {
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                }[];
                                            } & {
                                                elements?: {
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                }[] & ({
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                } & any & { [K_1 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_2 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                }[]>]: never; };
                                            } & { [K_3 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                            count?: number;
                                        } & { [K_4 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_5 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        }[]>]: never; };
                                    } & { [K_6 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                    count?: number;
                                } & { [K_7 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_8 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                }[]>]: never; };
                            } & { [K_9 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                            count?: number;
                        } & { [K_10 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_11 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"], keyof {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        }[]>]: never; };
                    } & { [K_12 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"], "elements">]: never; };
                    count?: number;
                } & { [K_13 in Exclude<keyof I["data_source"]["structure"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_14 in Exclude<keyof I["data_source"]["structure"]["elements"], keyof {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[]>]: never; };
            } & { [K_15 in Exclude<keyof I["data_source"]["structure"], "elements">]: never; };
            structure_crc?: number;
            cache_duration_seconds?: number;
        } & { [K_16 in Exclude<keyof I["data_source"], keyof CMsgSteamLearnDataSource>]: never; };
    } & { [K_17 in Exclude<keyof I, keyof CMsgSteamLearn_RegisterDataSource_Request>]: never; }>(base?: I): CMsgSteamLearn_RegisterDataSource_Request;
    fromPartial<I_1 extends {
        access_token?: string;
        access_data?: {
            publisher_id?: number;
            timestamp?: number;
            random_value?: string;
        };
        data_source?: {
            id?: number;
            name?: string;
            version?: number;
            source_description?: string;
            structure?: {
                elements?: {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[];
            };
            structure_crc?: number;
            cache_duration_seconds?: number;
        };
    } & {
        access_token?: string;
        access_data?: {
            publisher_id?: number;
            timestamp?: number;
            random_value?: string;
        } & {
            publisher_id?: number;
            timestamp?: number;
            random_value?: string;
        } & { [K_18 in Exclude<keyof I_1["access_data"], keyof CMsgSteamLearn_AccessData>]: never; };
        data_source?: {
            id?: number;
            name?: string;
            version?: number;
            source_description?: string;
            structure?: {
                elements?: {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[];
            };
            structure_crc?: number;
            cache_duration_seconds?: number;
        } & {
            id?: number;
            name?: string;
            version?: number;
            source_description?: string;
            structure?: {
                elements?: {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[];
            } & {
                elements?: {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[] & ({
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                } & {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: {
                        elements?: {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        }[];
                    } & {
                        elements?: {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        }[] & ({
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        } & {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: {
                                elements?: {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                }[];
                            } & {
                                elements?: {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                }[] & ({
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                } & {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: {
                                        elements?: {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        }[];
                                    } & {
                                        elements?: {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        }[] & ({
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        } & {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: {
                                                elements?: {
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                }[];
                                            } & {
                                                elements?: {
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                }[] & ({
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                } & any & { [K_19 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_20 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                }[]>]: never; };
                                            } & { [K_21 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                            count?: number;
                                        } & { [K_22 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_23 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        }[]>]: never; };
                                    } & { [K_24 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                    count?: number;
                                } & { [K_25 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_26 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                }[]>]: never; };
                            } & { [K_27 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                            count?: number;
                        } & { [K_28 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_29 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"], keyof {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        }[]>]: never; };
                    } & { [K_30 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"], "elements">]: never; };
                    count?: number;
                } & { [K_31 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_32 in Exclude<keyof I_1["data_source"]["structure"]["elements"], keyof {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[]>]: never; };
            } & { [K_33 in Exclude<keyof I_1["data_source"]["structure"], "elements">]: never; };
            structure_crc?: number;
            cache_duration_seconds?: number;
        } & { [K_34 in Exclude<keyof I_1["data_source"], keyof CMsgSteamLearnDataSource>]: never; };
    } & { [K_35 in Exclude<keyof I_1, keyof CMsgSteamLearn_RegisterDataSource_Request>]: never; }>(object: I_1): CMsgSteamLearn_RegisterDataSource_Request;
};
export declare const CMsgSteamLearn_RegisterDataSource_Response: {
    fromJSON(object: any): CMsgSteamLearn_RegisterDataSource_Response;
    toJSON(message: CMsgSteamLearn_RegisterDataSource_Response): unknown;
    create<I extends {
        result?: ESteammLearnRegisterDataSourceResult;
        data_source?: {
            id?: number;
            name?: string;
            version?: number;
            source_description?: string;
            structure?: {
                elements?: {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[];
            };
            structure_crc?: number;
            cache_duration_seconds?: number;
        };
    } & {
        result?: ESteammLearnRegisterDataSourceResult;
        data_source?: {
            id?: number;
            name?: string;
            version?: number;
            source_description?: string;
            structure?: {
                elements?: {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[];
            };
            structure_crc?: number;
            cache_duration_seconds?: number;
        } & {
            id?: number;
            name?: string;
            version?: number;
            source_description?: string;
            structure?: {
                elements?: {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[];
            } & {
                elements?: {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[] & ({
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                } & {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: {
                        elements?: {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        }[];
                    } & {
                        elements?: {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        }[] & ({
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        } & {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: {
                                elements?: {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                }[];
                            } & {
                                elements?: {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                }[] & ({
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                } & {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: {
                                        elements?: {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        }[];
                                    } & {
                                        elements?: {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        }[] & ({
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        } & {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: {
                                                elements?: {
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                }[];
                                            } & {
                                                elements?: {
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                }[] & ({
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                } & any & { [K in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_1 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                }[]>]: never; };
                                            } & { [K_2 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                            count?: number;
                                        } & { [K_3 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_4 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        }[]>]: never; };
                                    } & { [K_5 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                    count?: number;
                                } & { [K_6 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_7 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                }[]>]: never; };
                            } & { [K_8 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                            count?: number;
                        } & { [K_9 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_10 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"]["elements"], keyof {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        }[]>]: never; };
                    } & { [K_11 in Exclude<keyof I["data_source"]["structure"]["elements"][number]["object"], "elements">]: never; };
                    count?: number;
                } & { [K_12 in Exclude<keyof I["data_source"]["structure"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_13 in Exclude<keyof I["data_source"]["structure"]["elements"], keyof {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[]>]: never; };
            } & { [K_14 in Exclude<keyof I["data_source"]["structure"], "elements">]: never; };
            structure_crc?: number;
            cache_duration_seconds?: number;
        } & { [K_15 in Exclude<keyof I["data_source"], keyof CMsgSteamLearnDataSource>]: never; };
    } & { [K_16 in Exclude<keyof I, keyof CMsgSteamLearn_RegisterDataSource_Response>]: never; }>(base?: I): CMsgSteamLearn_RegisterDataSource_Response;
    fromPartial<I_1 extends {
        result?: ESteammLearnRegisterDataSourceResult;
        data_source?: {
            id?: number;
            name?: string;
            version?: number;
            source_description?: string;
            structure?: {
                elements?: {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[];
            };
            structure_crc?: number;
            cache_duration_seconds?: number;
        };
    } & {
        result?: ESteammLearnRegisterDataSourceResult;
        data_source?: {
            id?: number;
            name?: string;
            version?: number;
            source_description?: string;
            structure?: {
                elements?: {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[];
            };
            structure_crc?: number;
            cache_duration_seconds?: number;
        } & {
            id?: number;
            name?: string;
            version?: number;
            source_description?: string;
            structure?: {
                elements?: {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[];
            } & {
                elements?: {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[] & ({
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                } & {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: {
                        elements?: {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        }[];
                    } & {
                        elements?: {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        }[] & ({
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        } & {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: {
                                elements?: {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                }[];
                            } & {
                                elements?: {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                }[] & ({
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                } & {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: {
                                        elements?: {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        }[];
                                    } & {
                                        elements?: {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        }[] & ({
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        } & {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: {
                                                elements?: {
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                }[];
                                            } & {
                                                elements?: {
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                }[] & ({
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                } & any & { [K_17 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_18 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                                    name?: string;
                                                    data_type?: ESteamLearnDataType;
                                                    object?: any;
                                                    count?: number;
                                                }[]>]: never; };
                                            } & { [K_19 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                            count?: number;
                                        } & { [K_20 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_21 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                            name?: string;
                                            data_type?: ESteamLearnDataType;
                                            object?: any;
                                            count?: number;
                                        }[]>]: never; };
                                    } & { [K_22 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                                    count?: number;
                                } & { [K_23 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_24 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"]["elements"], keyof {
                                    name?: string;
                                    data_type?: ESteamLearnDataType;
                                    object?: any;
                                    count?: number;
                                }[]>]: never; };
                            } & { [K_25 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"][number]["object"], "elements">]: never; };
                            count?: number;
                        } & { [K_26 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_27 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"]["elements"], keyof {
                            name?: string;
                            data_type?: ESteamLearnDataType;
                            object?: any;
                            count?: number;
                        }[]>]: never; };
                    } & { [K_28 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number]["object"], "elements">]: never; };
                    count?: number;
                } & { [K_29 in Exclude<keyof I_1["data_source"]["structure"]["elements"][number], keyof CMsgSteamLearnDataSourceDescElement>]: never; })[] & { [K_30 in Exclude<keyof I_1["data_source"]["structure"]["elements"], keyof {
                    name?: string;
                    data_type?: ESteamLearnDataType;
                    object?: any;
                    count?: number;
                }[]>]: never; };
            } & { [K_31 in Exclude<keyof I_1["data_source"]["structure"], "elements">]: never; };
            structure_crc?: number;
            cache_duration_seconds?: number;
        } & { [K_32 in Exclude<keyof I_1["data_source"], keyof CMsgSteamLearnDataSource>]: never; };
    } & { [K_33 in Exclude<keyof I_1, keyof CMsgSteamLearn_RegisterDataSource_Response>]: never; }>(object: I_1): CMsgSteamLearn_RegisterDataSource_Response;
};
export declare const CMsgSteamLearn_CacheData_Request: {
    fromJSON(object: any): CMsgSteamLearn_CacheData_Request;
    toJSON(message: CMsgSteamLearn_CacheData_Request): unknown;
    create<I extends {
        access_token?: string;
        access_data?: {
            publisher_id?: number;
            timestamp?: number;
            random_value?: string;
        };
        data?: {
            data_source_id?: number;
            keys?: string[];
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            };
        };
    } & {
        access_token?: string;
        access_data?: {
            publisher_id?: number;
            timestamp?: number;
            random_value?: string;
        } & {
            publisher_id?: number;
            timestamp?: number;
            random_value?: string;
        } & { [K in Exclude<keyof I["access_data"], keyof CMsgSteamLearn_AccessData>]: never; };
        data?: {
            data_source_id?: number;
            keys?: string[];
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            };
        } & {
            data_source_id?: number;
            keys?: string[] & string[] & { [K_1 in Exclude<keyof I["data"]["keys"], keyof string[]>]: never; };
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            } & {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[] & ({
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                } & {
                    name?: string;
                    data_int32s?: number[] & number[] & { [K_2 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                    data_floats?: number[] & number[] & { [K_3 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_floats"], keyof number[]>]: never; };
                    data_bools?: boolean[] & boolean[] & { [K_4 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                    data_strings?: string[] & string[] & { [K_5 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_strings"], keyof string[]>]: never; };
                    data_objects?: any[] & ({
                        elements?: {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[];
                    } & {
                        elements?: {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[] & ({
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        } & {
                            name?: string;
                            data_int32s?: number[] & number[] & { [K_6 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                            data_floats?: number[] & number[] & { [K_7 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                            data_bools?: boolean[] & boolean[] & { [K_8 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                            data_strings?: string[] & string[] & { [K_9 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                            data_objects?: any[] & ({
                                elements?: {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[];
                            } & {
                                elements?: {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[] & ({
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                } & {
                                    name?: string;
                                    data_int32s?: number[] & number[] & { [K_10 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                    data_floats?: number[] & number[] & { [K_11 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                    data_bools?: boolean[] & boolean[] & { [K_12 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                    data_strings?: string[] & string[] & { [K_13 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                    data_objects?: any[] & ({
                                        elements?: {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[];
                                    } & {
                                        elements?: {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[] & ({
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        } & {
                                            name?: string;
                                            data_int32s?: number[] & number[] & { [K_14 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                            data_floats?: number[] & number[] & { [K_15 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                            data_bools?: boolean[] & boolean[] & { [K_16 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                            data_strings?: string[] & string[] & { [K_17 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                            data_objects?: any[] & ({
                                                elements?: {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[];
                                            } & {
                                                elements?: {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[] & ({
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                } & any & { [K_18 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_19 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[]>]: never; };
                                            } & { [K_20 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_21 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                        } & { [K_22 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_23 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[]>]: never; };
                                    } & { [K_24 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_25 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                } & { [K_26 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_27 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[]>]: never; };
                            } & { [K_28 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_29 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                        } & { [K_30 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_31 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"], keyof {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[]>]: never; };
                    } & { [K_32 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_33 in Exclude<keyof I["data"]["data_object"]["elements"][number]["data_objects"], keyof any[]>]: never; };
                } & { [K_34 in Exclude<keyof I["data"]["data_object"]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_35 in Exclude<keyof I["data"]["data_object"]["elements"], keyof {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[]>]: never; };
            } & { [K_36 in Exclude<keyof I["data"]["data_object"], "elements">]: never; };
        } & { [K_37 in Exclude<keyof I["data"], keyof CMsgSteamLearnData>]: never; };
    } & { [K_38 in Exclude<keyof I, keyof CMsgSteamLearn_CacheData_Request>]: never; }>(base?: I): CMsgSteamLearn_CacheData_Request;
    fromPartial<I_1 extends {
        access_token?: string;
        access_data?: {
            publisher_id?: number;
            timestamp?: number;
            random_value?: string;
        };
        data?: {
            data_source_id?: number;
            keys?: string[];
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            };
        };
    } & {
        access_token?: string;
        access_data?: {
            publisher_id?: number;
            timestamp?: number;
            random_value?: string;
        } & {
            publisher_id?: number;
            timestamp?: number;
            random_value?: string;
        } & { [K_39 in Exclude<keyof I_1["access_data"], keyof CMsgSteamLearn_AccessData>]: never; };
        data?: {
            data_source_id?: number;
            keys?: string[];
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            };
        } & {
            data_source_id?: number;
            keys?: string[] & string[] & { [K_40 in Exclude<keyof I_1["data"]["keys"], keyof string[]>]: never; };
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            } & {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[] & ({
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                } & {
                    name?: string;
                    data_int32s?: number[] & number[] & { [K_41 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                    data_floats?: number[] & number[] & { [K_42 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_floats"], keyof number[]>]: never; };
                    data_bools?: boolean[] & boolean[] & { [K_43 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                    data_strings?: string[] & string[] & { [K_44 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_strings"], keyof string[]>]: never; };
                    data_objects?: any[] & ({
                        elements?: {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[];
                    } & {
                        elements?: {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[] & ({
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        } & {
                            name?: string;
                            data_int32s?: number[] & number[] & { [K_45 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                            data_floats?: number[] & number[] & { [K_46 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                            data_bools?: boolean[] & boolean[] & { [K_47 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                            data_strings?: string[] & string[] & { [K_48 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                            data_objects?: any[] & ({
                                elements?: {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[];
                            } & {
                                elements?: {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[] & ({
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                } & {
                                    name?: string;
                                    data_int32s?: number[] & number[] & { [K_49 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                    data_floats?: number[] & number[] & { [K_50 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                    data_bools?: boolean[] & boolean[] & { [K_51 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                    data_strings?: string[] & string[] & { [K_52 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                    data_objects?: any[] & ({
                                        elements?: {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[];
                                    } & {
                                        elements?: {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[] & ({
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        } & {
                                            name?: string;
                                            data_int32s?: number[] & number[] & { [K_53 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                            data_floats?: number[] & number[] & { [K_54 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                            data_bools?: boolean[] & boolean[] & { [K_55 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                            data_strings?: string[] & string[] & { [K_56 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                            data_objects?: any[] & ({
                                                elements?: {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[];
                                            } & {
                                                elements?: {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[] & ({
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                } & any & { [K_57 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_58 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[]>]: never; };
                                            } & { [K_59 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_60 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                        } & { [K_61 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_62 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[]>]: never; };
                                    } & { [K_63 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_64 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                } & { [K_65 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_66 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[]>]: never; };
                            } & { [K_67 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_68 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                        } & { [K_69 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_70 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"], keyof {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[]>]: never; };
                    } & { [K_71 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_72 in Exclude<keyof I_1["data"]["data_object"]["elements"][number]["data_objects"], keyof any[]>]: never; };
                } & { [K_73 in Exclude<keyof I_1["data"]["data_object"]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_74 in Exclude<keyof I_1["data"]["data_object"]["elements"], keyof {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[]>]: never; };
            } & { [K_75 in Exclude<keyof I_1["data"]["data_object"], "elements">]: never; };
        } & { [K_76 in Exclude<keyof I_1["data"], keyof CMsgSteamLearnData>]: never; };
    } & { [K_77 in Exclude<keyof I_1, keyof CMsgSteamLearn_CacheData_Request>]: never; }>(object: I_1): CMsgSteamLearn_CacheData_Request;
};
export declare const CMsgSteamLearn_CacheData_Response: {
    fromJSON(object: any): CMsgSteamLearn_CacheData_Response;
    toJSON(message: CMsgSteamLearn_CacheData_Response): unknown;
    create<I extends {
        cache_data_result?: ESteamLearnCacheDataResult;
    } & {
        cache_data_result?: ESteamLearnCacheDataResult;
    } & { [K in Exclude<keyof I, "cache_data_result">]: never; }>(base?: I): CMsgSteamLearn_CacheData_Response;
    fromPartial<I_1 extends {
        cache_data_result?: ESteamLearnCacheDataResult;
    } & {
        cache_data_result?: ESteamLearnCacheDataResult;
    } & { [K_1 in Exclude<keyof I_1, "cache_data_result">]: never; }>(object: I_1): CMsgSteamLearn_CacheData_Response;
};
export declare const CMsgSteamLearn_SnapshotProject_Request: {
    fromJSON(object: any): CMsgSteamLearn_SnapshotProject_Request;
    toJSON(message: CMsgSteamLearn_SnapshotProject_Request): unknown;
    create<I extends {
        access_token?: string;
        access_data?: {
            publisher_id?: number;
            timestamp?: number;
            random_value?: string;
        };
        project_id?: number;
        published_version?: number;
        keys?: string[];
        data?: {
            data_source_id?: number;
            keys?: string[];
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            };
        }[];
        pending_data_limit_seconds?: number;
    } & {
        access_token?: string;
        access_data?: {
            publisher_id?: number;
            timestamp?: number;
            random_value?: string;
        } & {
            publisher_id?: number;
            timestamp?: number;
            random_value?: string;
        } & { [K in Exclude<keyof I["access_data"], keyof CMsgSteamLearn_AccessData>]: never; };
        project_id?: number;
        published_version?: number;
        keys?: string[] & string[] & { [K_1 in Exclude<keyof I["keys"], keyof string[]>]: never; };
        data?: {
            data_source_id?: number;
            keys?: string[];
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            };
        }[] & ({
            data_source_id?: number;
            keys?: string[];
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            };
        } & {
            data_source_id?: number;
            keys?: string[] & string[] & { [K_2 in Exclude<keyof I["data"][number]["keys"], keyof string[]>]: never; };
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            } & {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[] & ({
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                } & {
                    name?: string;
                    data_int32s?: number[] & number[] & { [K_3 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                    data_floats?: number[] & number[] & { [K_4 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_floats"], keyof number[]>]: never; };
                    data_bools?: boolean[] & boolean[] & { [K_5 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                    data_strings?: string[] & string[] & { [K_6 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_strings"], keyof string[]>]: never; };
                    data_objects?: any[] & ({
                        elements?: {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[];
                    } & {
                        elements?: {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[] & ({
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        } & {
                            name?: string;
                            data_int32s?: number[] & number[] & { [K_7 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                            data_floats?: number[] & number[] & { [K_8 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                            data_bools?: boolean[] & boolean[] & { [K_9 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                            data_strings?: string[] & string[] & { [K_10 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                            data_objects?: any[] & ({
                                elements?: {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[];
                            } & {
                                elements?: {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[] & ({
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                } & {
                                    name?: string;
                                    data_int32s?: number[] & number[] & { [K_11 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                    data_floats?: number[] & number[] & { [K_12 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                    data_bools?: boolean[] & boolean[] & { [K_13 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                    data_strings?: string[] & string[] & { [K_14 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                    data_objects?: any[] & ({
                                        elements?: {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[];
                                    } & {
                                        elements?: {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[] & ({
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        } & {
                                            name?: string;
                                            data_int32s?: number[] & number[] & { [K_15 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                            data_floats?: number[] & number[] & { [K_16 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                            data_bools?: boolean[] & boolean[] & { [K_17 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                            data_strings?: string[] & string[] & { [K_18 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                            data_objects?: any[] & ({
                                                elements?: {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[];
                                            } & {
                                                elements?: {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[] & ({
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                } & any & { [K_19 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_20 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[]>]: never; };
                                            } & { [K_21 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_22 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                        } & { [K_23 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_24 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[]>]: never; };
                                    } & { [K_25 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_26 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                } & { [K_27 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_28 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[]>]: never; };
                            } & { [K_29 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_30 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                        } & { [K_31 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_32 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"], keyof {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[]>]: never; };
                    } & { [K_33 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_34 in Exclude<keyof I["data"][number]["data_object"]["elements"][number]["data_objects"], keyof any[]>]: never; };
                } & { [K_35 in Exclude<keyof I["data"][number]["data_object"]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_36 in Exclude<keyof I["data"][number]["data_object"]["elements"], keyof {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[]>]: never; };
            } & { [K_37 in Exclude<keyof I["data"][number]["data_object"], "elements">]: never; };
        } & { [K_38 in Exclude<keyof I["data"][number], keyof CMsgSteamLearnData>]: never; })[] & { [K_39 in Exclude<keyof I["data"], keyof {
            data_source_id?: number;
            keys?: string[];
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            };
        }[]>]: never; };
        pending_data_limit_seconds?: number;
    } & { [K_40 in Exclude<keyof I, keyof CMsgSteamLearn_SnapshotProject_Request>]: never; }>(base?: I): CMsgSteamLearn_SnapshotProject_Request;
    fromPartial<I_1 extends {
        access_token?: string;
        access_data?: {
            publisher_id?: number;
            timestamp?: number;
            random_value?: string;
        };
        project_id?: number;
        published_version?: number;
        keys?: string[];
        data?: {
            data_source_id?: number;
            keys?: string[];
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            };
        }[];
        pending_data_limit_seconds?: number;
    } & {
        access_token?: string;
        access_data?: {
            publisher_id?: number;
            timestamp?: number;
            random_value?: string;
        } & {
            publisher_id?: number;
            timestamp?: number;
            random_value?: string;
        } & { [K_41 in Exclude<keyof I_1["access_data"], keyof CMsgSteamLearn_AccessData>]: never; };
        project_id?: number;
        published_version?: number;
        keys?: string[] & string[] & { [K_42 in Exclude<keyof I_1["keys"], keyof string[]>]: never; };
        data?: {
            data_source_id?: number;
            keys?: string[];
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            };
        }[] & ({
            data_source_id?: number;
            keys?: string[];
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            };
        } & {
            data_source_id?: number;
            keys?: string[] & string[] & { [K_43 in Exclude<keyof I_1["data"][number]["keys"], keyof string[]>]: never; };
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            } & {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[] & ({
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                } & {
                    name?: string;
                    data_int32s?: number[] & number[] & { [K_44 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                    data_floats?: number[] & number[] & { [K_45 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_floats"], keyof number[]>]: never; };
                    data_bools?: boolean[] & boolean[] & { [K_46 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                    data_strings?: string[] & string[] & { [K_47 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_strings"], keyof string[]>]: never; };
                    data_objects?: any[] & ({
                        elements?: {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[];
                    } & {
                        elements?: {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[] & ({
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        } & {
                            name?: string;
                            data_int32s?: number[] & number[] & { [K_48 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                            data_floats?: number[] & number[] & { [K_49 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                            data_bools?: boolean[] & boolean[] & { [K_50 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                            data_strings?: string[] & string[] & { [K_51 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                            data_objects?: any[] & ({
                                elements?: {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[];
                            } & {
                                elements?: {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[] & ({
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                } & {
                                    name?: string;
                                    data_int32s?: number[] & number[] & { [K_52 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                    data_floats?: number[] & number[] & { [K_53 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                    data_bools?: boolean[] & boolean[] & { [K_54 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                    data_strings?: string[] & string[] & { [K_55 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                    data_objects?: any[] & ({
                                        elements?: {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[];
                                    } & {
                                        elements?: {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[] & ({
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        } & {
                                            name?: string;
                                            data_int32s?: number[] & number[] & { [K_56 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                            data_floats?: number[] & number[] & { [K_57 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                            data_bools?: boolean[] & boolean[] & { [K_58 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                            data_strings?: string[] & string[] & { [K_59 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                            data_objects?: any[] & ({
                                                elements?: {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[];
                                            } & {
                                                elements?: {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[] & ({
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                } & any & { [K_60 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_61 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                                    name?: string;
                                                    data_int32s?: number[];
                                                    data_floats?: number[];
                                                    data_bools?: boolean[];
                                                    data_strings?: string[];
                                                    data_objects?: any[];
                                                }[]>]: never; };
                                            } & { [K_62 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_63 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                        } & { [K_64 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_65 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                            name?: string;
                                            data_int32s?: number[];
                                            data_floats?: number[];
                                            data_bools?: boolean[];
                                            data_strings?: string[];
                                            data_objects?: any[];
                                        }[]>]: never; };
                                    } & { [K_66 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_67 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                } & { [K_68 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_69 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                    name?: string;
                                    data_int32s?: number[];
                                    data_floats?: number[];
                                    data_bools?: boolean[];
                                    data_strings?: string[];
                                    data_objects?: any[];
                                }[]>]: never; };
                            } & { [K_70 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_71 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                        } & { [K_72 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_73 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"], keyof {
                            name?: string;
                            data_int32s?: number[];
                            data_floats?: number[];
                            data_bools?: boolean[];
                            data_strings?: string[];
                            data_objects?: any[];
                        }[]>]: never; };
                    } & { [K_74 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_75 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number]["data_objects"], keyof any[]>]: never; };
                } & { [K_76 in Exclude<keyof I_1["data"][number]["data_object"]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_77 in Exclude<keyof I_1["data"][number]["data_object"]["elements"], keyof {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[]>]: never; };
            } & { [K_78 in Exclude<keyof I_1["data"][number]["data_object"], "elements">]: never; };
        } & { [K_79 in Exclude<keyof I_1["data"][number], keyof CMsgSteamLearnData>]: never; })[] & { [K_80 in Exclude<keyof I_1["data"], keyof {
            data_source_id?: number;
            keys?: string[];
            data_object?: {
                elements?: {
                    name?: string;
                    data_int32s?: number[];
                    data_floats?: number[];
                    data_bools?: boolean[];
                    data_strings?: string[];
                    data_objects?: any[];
                }[];
            };
        }[]>]: never; };
        pending_data_limit_seconds?: number;
    } & { [K_81 in Exclude<keyof I_1, keyof CMsgSteamLearn_SnapshotProject_Request>]: never; }>(object: I_1): CMsgSteamLearn_SnapshotProject_Request;
};
export declare const CMsgSteamLearn_SnapshotProject_Response: {
    fromJSON(object: any): CMsgSteamLearn_SnapshotProject_Response;
    toJSON(message: CMsgSteamLearn_SnapshotProject_Response): unknown;
    create<I extends {
        snapshot_result?: ESteamLearnSnapshotProjectResult;
    } & {
        snapshot_result?: ESteamLearnSnapshotProjectResult;
    } & { [K in Exclude<keyof I, "snapshot_result">]: never; }>(base?: I): CMsgSteamLearn_SnapshotProject_Response;
    fromPartial<I_1 extends {
        snapshot_result?: ESteamLearnSnapshotProjectResult;
    } & {
        snapshot_result?: ESteamLearnSnapshotProjectResult;
    } & { [K_1 in Exclude<keyof I_1, "snapshot_result">]: never; }>(object: I_1): CMsgSteamLearn_SnapshotProject_Response;
};
export declare const CMsgSteamLearn_BatchOperation_Request: {
    fromJSON(object: any): CMsgSteamLearn_BatchOperation_Request;
    toJSON(message: CMsgSteamLearn_BatchOperation_Request): unknown;
    create<I extends {
        cache_data_requests?: {
            access_token?: string;
            access_data?: {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            };
            data?: {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            };
        }[];
        snapshot_requests?: {
            access_token?: string;
            access_data?: {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            };
            project_id?: number;
            published_version?: number;
            keys?: string[];
            data?: {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            }[];
            pending_data_limit_seconds?: number;
        }[];
    } & {
        cache_data_requests?: {
            access_token?: string;
            access_data?: {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            };
            data?: {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            };
        }[] & ({
            access_token?: string;
            access_data?: {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            };
            data?: {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            };
        } & {
            access_token?: string;
            access_data?: {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            } & {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            } & { [K in Exclude<keyof I["cache_data_requests"][number]["access_data"], keyof CMsgSteamLearn_AccessData>]: never; };
            data?: {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            } & {
                data_source_id?: number;
                keys?: string[] & string[] & { [K_1 in Exclude<keyof I["cache_data_requests"][number]["data"]["keys"], keyof string[]>]: never; };
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                } & {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[] & ({
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    } & {
                        name?: string;
                        data_int32s?: number[] & number[] & { [K_2 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                        data_floats?: number[] & number[] & { [K_3 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_floats"], keyof number[]>]: never; };
                        data_bools?: boolean[] & boolean[] & { [K_4 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                        data_strings?: string[] & string[] & { [K_5 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_strings"], keyof string[]>]: never; };
                        data_objects?: any[] & ({
                            elements?: {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[];
                        } & {
                            elements?: {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[] & ({
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            } & {
                                name?: string;
                                data_int32s?: number[] & number[] & { [K_6 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                data_floats?: number[] & number[] & { [K_7 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                data_bools?: boolean[] & boolean[] & { [K_8 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                data_strings?: string[] & string[] & { [K_9 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                data_objects?: any[] & ({
                                    elements?: {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[];
                                } & {
                                    elements?: {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[] & ({
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    } & {
                                        name?: string;
                                        data_int32s?: number[] & number[] & { [K_10 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                        data_floats?: number[] & number[] & { [K_11 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                        data_bools?: boolean[] & boolean[] & { [K_12 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                        data_strings?: string[] & string[] & { [K_13 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                        data_objects?: any[] & ({
                                            elements?: {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[];
                                        } & {
                                            elements?: {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[] & ({
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            } & {
                                                name?: string;
                                                data_int32s?: number[] & number[] & { [K_14 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                                data_floats?: number[] & number[] & { [K_15 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                                data_bools?: boolean[] & boolean[] & { [K_16 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                                data_strings?: string[] & string[] & { [K_17 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                                data_objects?: any[] & ({
                                                    elements?: {
                                                        name?: string;
                                                        data_int32s?: number[];
                                                        data_floats?: number[];
                                                        data_bools?: boolean[];
                                                        data_strings?: string[];
                                                        data_objects?: any[];
                                                    }[];
                                                } & any & { [K_18 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_19 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                            } & { [K_20 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_21 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[]>]: never; };
                                        } & { [K_22 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_23 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                    } & { [K_24 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_25 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[]>]: never; };
                                } & { [K_26 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_27 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                            } & { [K_28 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_29 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"], keyof {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[]>]: never; };
                        } & { [K_30 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_31 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"], keyof any[]>]: never; };
                    } & { [K_32 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_33 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"]["elements"], keyof {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[]>]: never; };
                } & { [K_34 in Exclude<keyof I["cache_data_requests"][number]["data"]["data_object"], "elements">]: never; };
            } & { [K_35 in Exclude<keyof I["cache_data_requests"][number]["data"], keyof CMsgSteamLearnData>]: never; };
        } & { [K_36 in Exclude<keyof I["cache_data_requests"][number], keyof CMsgSteamLearn_CacheData_Request>]: never; })[] & { [K_37 in Exclude<keyof I["cache_data_requests"], keyof {
            access_token?: string;
            access_data?: {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            };
            data?: {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            };
        }[]>]: never; };
        snapshot_requests?: {
            access_token?: string;
            access_data?: {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            };
            project_id?: number;
            published_version?: number;
            keys?: string[];
            data?: {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            }[];
            pending_data_limit_seconds?: number;
        }[] & ({
            access_token?: string;
            access_data?: {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            };
            project_id?: number;
            published_version?: number;
            keys?: string[];
            data?: {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            }[];
            pending_data_limit_seconds?: number;
        } & {
            access_token?: string;
            access_data?: {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            } & {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            } & { [K_38 in Exclude<keyof I["snapshot_requests"][number]["access_data"], keyof CMsgSteamLearn_AccessData>]: never; };
            project_id?: number;
            published_version?: number;
            keys?: string[] & string[] & { [K_39 in Exclude<keyof I["snapshot_requests"][number]["keys"], keyof string[]>]: never; };
            data?: {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            }[] & ({
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            } & {
                data_source_id?: number;
                keys?: string[] & string[] & { [K_40 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["keys"], keyof string[]>]: never; };
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                } & {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[] & ({
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    } & {
                        name?: string;
                        data_int32s?: number[] & number[] & { [K_41 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                        data_floats?: number[] & number[] & { [K_42 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_floats"], keyof number[]>]: never; };
                        data_bools?: boolean[] & boolean[] & { [K_43 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                        data_strings?: string[] & string[] & { [K_44 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_strings"], keyof string[]>]: never; };
                        data_objects?: any[] & ({
                            elements?: {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[];
                        } & {
                            elements?: {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[] & ({
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            } & {
                                name?: string;
                                data_int32s?: number[] & number[] & { [K_45 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                data_floats?: number[] & number[] & { [K_46 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                data_bools?: boolean[] & boolean[] & { [K_47 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                data_strings?: string[] & string[] & { [K_48 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                data_objects?: any[] & ({
                                    elements?: {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[];
                                } & {
                                    elements?: {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[] & ({
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    } & {
                                        name?: string;
                                        data_int32s?: number[] & number[] & { [K_49 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                        data_floats?: number[] & number[] & { [K_50 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                        data_bools?: boolean[] & boolean[] & { [K_51 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                        data_strings?: string[] & string[] & { [K_52 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                        data_objects?: any[] & ({
                                            elements?: {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[];
                                        } & {
                                            elements?: {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[] & ({
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            } & {
                                                name?: string;
                                                data_int32s?: number[] & number[] & { [K_53 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                                data_floats?: number[] & number[] & { [K_54 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                                data_bools?: boolean[] & boolean[] & { [K_55 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                                data_strings?: string[] & string[] & { [K_56 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                                data_objects?: any[] & ({
                                                    elements?: {
                                                        name?: string;
                                                        data_int32s?: number[];
                                                        data_floats?: number[];
                                                        data_bools?: boolean[];
                                                        data_strings?: string[];
                                                        data_objects?: any[];
                                                    }[];
                                                } & any & { [K_57 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_58 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                            } & { [K_59 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_60 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[]>]: never; };
                                        } & { [K_61 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_62 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                    } & { [K_63 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_64 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[]>]: never; };
                                } & { [K_65 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_66 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                            } & { [K_67 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_68 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"], keyof {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[]>]: never; };
                        } & { [K_69 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_70 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"], keyof any[]>]: never; };
                    } & { [K_71 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_72 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"]["elements"], keyof {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[]>]: never; };
                } & { [K_73 in Exclude<keyof I["snapshot_requests"][number]["data"][number]["data_object"], "elements">]: never; };
            } & { [K_74 in Exclude<keyof I["snapshot_requests"][number]["data"][number], keyof CMsgSteamLearnData>]: never; })[] & { [K_75 in Exclude<keyof I["snapshot_requests"][number]["data"], keyof {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            }[]>]: never; };
            pending_data_limit_seconds?: number;
        } & { [K_76 in Exclude<keyof I["snapshot_requests"][number], keyof CMsgSteamLearn_SnapshotProject_Request>]: never; })[] & { [K_77 in Exclude<keyof I["snapshot_requests"], keyof {
            access_token?: string;
            access_data?: {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            };
            project_id?: number;
            published_version?: number;
            keys?: string[];
            data?: {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            }[];
            pending_data_limit_seconds?: number;
        }[]>]: never; };
    } & { [K_78 in Exclude<keyof I, keyof CMsgSteamLearn_BatchOperation_Request>]: never; }>(base?: I): CMsgSteamLearn_BatchOperation_Request;
    fromPartial<I_1 extends {
        cache_data_requests?: {
            access_token?: string;
            access_data?: {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            };
            data?: {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            };
        }[];
        snapshot_requests?: {
            access_token?: string;
            access_data?: {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            };
            project_id?: number;
            published_version?: number;
            keys?: string[];
            data?: {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            }[];
            pending_data_limit_seconds?: number;
        }[];
    } & {
        cache_data_requests?: {
            access_token?: string;
            access_data?: {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            };
            data?: {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            };
        }[] & ({
            access_token?: string;
            access_data?: {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            };
            data?: {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            };
        } & {
            access_token?: string;
            access_data?: {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            } & {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            } & { [K_79 in Exclude<keyof I_1["cache_data_requests"][number]["access_data"], keyof CMsgSteamLearn_AccessData>]: never; };
            data?: {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            } & {
                data_source_id?: number;
                keys?: string[] & string[] & { [K_80 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["keys"], keyof string[]>]: never; };
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                } & {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[] & ({
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    } & {
                        name?: string;
                        data_int32s?: number[] & number[] & { [K_81 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                        data_floats?: number[] & number[] & { [K_82 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_floats"], keyof number[]>]: never; };
                        data_bools?: boolean[] & boolean[] & { [K_83 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                        data_strings?: string[] & string[] & { [K_84 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_strings"], keyof string[]>]: never; };
                        data_objects?: any[] & ({
                            elements?: {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[];
                        } & {
                            elements?: {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[] & ({
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            } & {
                                name?: string;
                                data_int32s?: number[] & number[] & { [K_85 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                data_floats?: number[] & number[] & { [K_86 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                data_bools?: boolean[] & boolean[] & { [K_87 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                data_strings?: string[] & string[] & { [K_88 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                data_objects?: any[] & ({
                                    elements?: {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[];
                                } & {
                                    elements?: {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[] & ({
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    } & {
                                        name?: string;
                                        data_int32s?: number[] & number[] & { [K_89 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                        data_floats?: number[] & number[] & { [K_90 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                        data_bools?: boolean[] & boolean[] & { [K_91 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                        data_strings?: string[] & string[] & { [K_92 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                        data_objects?: any[] & ({
                                            elements?: {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[];
                                        } & {
                                            elements?: {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[] & ({
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            } & {
                                                name?: string;
                                                data_int32s?: number[] & number[] & { [K_93 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                                data_floats?: number[] & number[] & { [K_94 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                                data_bools?: boolean[] & boolean[] & { [K_95 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                                data_strings?: string[] & string[] & { [K_96 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                                data_objects?: any[] & ({
                                                    elements?: {
                                                        name?: string;
                                                        data_int32s?: number[];
                                                        data_floats?: number[];
                                                        data_bools?: boolean[];
                                                        data_strings?: string[];
                                                        data_objects?: any[];
                                                    }[];
                                                } & any & { [K_97 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_98 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                            } & { [K_99 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_100 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[]>]: never; };
                                        } & { [K_101 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_102 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                    } & { [K_103 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_104 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[]>]: never; };
                                } & { [K_105 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_106 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                            } & { [K_107 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_108 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number]["elements"], keyof {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[]>]: never; };
                        } & { [K_109 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_110 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number]["data_objects"], keyof any[]>]: never; };
                    } & { [K_111 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_112 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"]["elements"], keyof {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[]>]: never; };
                } & { [K_113 in Exclude<keyof I_1["cache_data_requests"][number]["data"]["data_object"], "elements">]: never; };
            } & { [K_114 in Exclude<keyof I_1["cache_data_requests"][number]["data"], keyof CMsgSteamLearnData>]: never; };
        } & { [K_115 in Exclude<keyof I_1["cache_data_requests"][number], keyof CMsgSteamLearn_CacheData_Request>]: never; })[] & { [K_116 in Exclude<keyof I_1["cache_data_requests"], keyof {
            access_token?: string;
            access_data?: {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            };
            data?: {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            };
        }[]>]: never; };
        snapshot_requests?: {
            access_token?: string;
            access_data?: {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            };
            project_id?: number;
            published_version?: number;
            keys?: string[];
            data?: {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            }[];
            pending_data_limit_seconds?: number;
        }[] & ({
            access_token?: string;
            access_data?: {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            };
            project_id?: number;
            published_version?: number;
            keys?: string[];
            data?: {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            }[];
            pending_data_limit_seconds?: number;
        } & {
            access_token?: string;
            access_data?: {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            } & {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            } & { [K_117 in Exclude<keyof I_1["snapshot_requests"][number]["access_data"], keyof CMsgSteamLearn_AccessData>]: never; };
            project_id?: number;
            published_version?: number;
            keys?: string[] & string[] & { [K_118 in Exclude<keyof I_1["snapshot_requests"][number]["keys"], keyof string[]>]: never; };
            data?: {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            }[] & ({
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            } & {
                data_source_id?: number;
                keys?: string[] & string[] & { [K_119 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["keys"], keyof string[]>]: never; };
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                } & {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[] & ({
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    } & {
                        name?: string;
                        data_int32s?: number[] & number[] & { [K_120 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                        data_floats?: number[] & number[] & { [K_121 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_floats"], keyof number[]>]: never; };
                        data_bools?: boolean[] & boolean[] & { [K_122 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                        data_strings?: string[] & string[] & { [K_123 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_strings"], keyof string[]>]: never; };
                        data_objects?: any[] & ({
                            elements?: {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[];
                        } & {
                            elements?: {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[] & ({
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            } & {
                                name?: string;
                                data_int32s?: number[] & number[] & { [K_124 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                data_floats?: number[] & number[] & { [K_125 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                data_bools?: boolean[] & boolean[] & { [K_126 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                data_strings?: string[] & string[] & { [K_127 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                data_objects?: any[] & ({
                                    elements?: {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[];
                                } & {
                                    elements?: {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[] & ({
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    } & {
                                        name?: string;
                                        data_int32s?: number[] & number[] & { [K_128 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                        data_floats?: number[] & number[] & { [K_129 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                        data_bools?: boolean[] & boolean[] & { [K_130 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                        data_strings?: string[] & string[] & { [K_131 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                        data_objects?: any[] & ({
                                            elements?: {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[];
                                        } & {
                                            elements?: {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[] & ({
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            } & {
                                                name?: string;
                                                data_int32s?: number[] & number[] & { [K_132 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_int32s"], keyof number[]>]: never; };
                                                data_floats?: number[] & number[] & { [K_133 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_floats"], keyof number[]>]: never; };
                                                data_bools?: boolean[] & boolean[] & { [K_134 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_bools"], keyof boolean[]>]: never; };
                                                data_strings?: string[] & string[] & { [K_135 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_strings"], keyof string[]>]: never; };
                                                data_objects?: any[] & ({
                                                    elements?: {
                                                        name?: string;
                                                        data_int32s?: number[];
                                                        data_floats?: number[];
                                                        data_bools?: boolean[];
                                                        data_strings?: string[];
                                                        data_objects?: any[];
                                                    }[];
                                                } & any & { [K_136 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_137 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                            } & { [K_138 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_139 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                                name?: string;
                                                data_int32s?: number[];
                                                data_floats?: number[];
                                                data_bools?: boolean[];
                                                data_strings?: string[];
                                                data_objects?: any[];
                                            }[]>]: never; };
                                        } & { [K_140 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_141 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                                    } & { [K_142 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_143 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number]["elements"], keyof {
                                        name?: string;
                                        data_int32s?: number[];
                                        data_floats?: number[];
                                        data_bools?: boolean[];
                                        data_strings?: string[];
                                        data_objects?: any[];
                                    }[]>]: never; };
                                } & { [K_144 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_145 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number]["data_objects"], keyof any[]>]: never; };
                            } & { [K_146 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_147 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number]["elements"], keyof {
                                name?: string;
                                data_int32s?: number[];
                                data_floats?: number[];
                                data_bools?: boolean[];
                                data_strings?: string[];
                                data_objects?: any[];
                            }[]>]: never; };
                        } & { [K_148 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"][number], "elements">]: never; })[] & { [K_149 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number]["data_objects"], keyof any[]>]: never; };
                    } & { [K_150 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"][number], keyof CMsgSteamLearnDataElement>]: never; })[] & { [K_151 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"]["elements"], keyof {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[]>]: never; };
                } & { [K_152 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number]["data_object"], "elements">]: never; };
            } & { [K_153 in Exclude<keyof I_1["snapshot_requests"][number]["data"][number], keyof CMsgSteamLearnData>]: never; })[] & { [K_154 in Exclude<keyof I_1["snapshot_requests"][number]["data"], keyof {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            }[]>]: never; };
            pending_data_limit_seconds?: number;
        } & { [K_155 in Exclude<keyof I_1["snapshot_requests"][number], keyof CMsgSteamLearn_SnapshotProject_Request>]: never; })[] & { [K_156 in Exclude<keyof I_1["snapshot_requests"], keyof {
            access_token?: string;
            access_data?: {
                publisher_id?: number;
                timestamp?: number;
                random_value?: string;
            };
            project_id?: number;
            published_version?: number;
            keys?: string[];
            data?: {
                data_source_id?: number;
                keys?: string[];
                data_object?: {
                    elements?: {
                        name?: string;
                        data_int32s?: number[];
                        data_floats?: number[];
                        data_bools?: boolean[];
                        data_strings?: string[];
                        data_objects?: any[];
                    }[];
                };
            }[];
            pending_data_limit_seconds?: number;
        }[]>]: never; };
    } & { [K_157 in Exclude<keyof I_1, keyof CMsgSteamLearn_BatchOperation_Request>]: never; }>(object: I_1): CMsgSteamLearn_BatchOperation_Request;
};
export declare const CMsgSteamLearn_BatchOperation_Response: {
    fromJSON(object: any): CMsgSteamLearn_BatchOperation_Response;
    toJSON(message: CMsgSteamLearn_BatchOperation_Response): unknown;
    create<I extends {
        cache_data_responses?: {
            cache_data_result?: ESteamLearnCacheDataResult;
        }[];
        snapshot_responses?: {
            snapshot_result?: ESteamLearnSnapshotProjectResult;
        }[];
    } & {
        cache_data_responses?: {
            cache_data_result?: ESteamLearnCacheDataResult;
        }[] & ({
            cache_data_result?: ESteamLearnCacheDataResult;
        } & {
            cache_data_result?: ESteamLearnCacheDataResult;
        } & { [K in Exclude<keyof I["cache_data_responses"][number], "cache_data_result">]: never; })[] & { [K_1 in Exclude<keyof I["cache_data_responses"], keyof {
            cache_data_result?: ESteamLearnCacheDataResult;
        }[]>]: never; };
        snapshot_responses?: {
            snapshot_result?: ESteamLearnSnapshotProjectResult;
        }[] & ({
            snapshot_result?: ESteamLearnSnapshotProjectResult;
        } & {
            snapshot_result?: ESteamLearnSnapshotProjectResult;
        } & { [K_2 in Exclude<keyof I["snapshot_responses"][number], "snapshot_result">]: never; })[] & { [K_3 in Exclude<keyof I["snapshot_responses"], keyof {
            snapshot_result?: ESteamLearnSnapshotProjectResult;
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof CMsgSteamLearn_BatchOperation_Response>]: never; }>(base?: I): CMsgSteamLearn_BatchOperation_Response;
    fromPartial<I_1 extends {
        cache_data_responses?: {
            cache_data_result?: ESteamLearnCacheDataResult;
        }[];
        snapshot_responses?: {
            snapshot_result?: ESteamLearnSnapshotProjectResult;
        }[];
    } & {
        cache_data_responses?: {
            cache_data_result?: ESteamLearnCacheDataResult;
        }[] & ({
            cache_data_result?: ESteamLearnCacheDataResult;
        } & {
            cache_data_result?: ESteamLearnCacheDataResult;
        } & { [K_5 in Exclude<keyof I_1["cache_data_responses"][number], "cache_data_result">]: never; })[] & { [K_6 in Exclude<keyof I_1["cache_data_responses"], keyof {
            cache_data_result?: ESteamLearnCacheDataResult;
        }[]>]: never; };
        snapshot_responses?: {
            snapshot_result?: ESteamLearnSnapshotProjectResult;
        }[] & ({
            snapshot_result?: ESteamLearnSnapshotProjectResult;
        } & {
            snapshot_result?: ESteamLearnSnapshotProjectResult;
        } & { [K_7 in Exclude<keyof I_1["snapshot_responses"][number], "snapshot_result">]: never; })[] & { [K_8 in Exclude<keyof I_1["snapshot_responses"], keyof {
            snapshot_result?: ESteamLearnSnapshotProjectResult;
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof CMsgSteamLearn_BatchOperation_Response>]: never; }>(object: I_1): CMsgSteamLearn_BatchOperation_Response;
};
export declare const CMsgSteamLearnHMACKeys: {
    fromJSON(object: any): CMsgSteamLearnHMACKeys;
    toJSON(message: CMsgSteamLearnHMACKeys): unknown;
    create<I extends {
        register_data_source_key?: string;
        cache_data_keys?: {
            data_source_id?: number;
            version?: number;
            key?: string;
        }[];
        snapshot_project_keys?: {
            project_id?: number;
            published_version?: number;
            key?: string;
        }[];
    } & {
        register_data_source_key?: string;
        cache_data_keys?: {
            data_source_id?: number;
            version?: number;
            key?: string;
        }[] & ({
            data_source_id?: number;
            version?: number;
            key?: string;
        } & {
            data_source_id?: number;
            version?: number;
            key?: string;
        } & { [K in Exclude<keyof I["cache_data_keys"][number], keyof CMsgSteamLearnHMACKeys_CacheDataKeys>]: never; })[] & { [K_1 in Exclude<keyof I["cache_data_keys"], keyof {
            data_source_id?: number;
            version?: number;
            key?: string;
        }[]>]: never; };
        snapshot_project_keys?: {
            project_id?: number;
            published_version?: number;
            key?: string;
        }[] & ({
            project_id?: number;
            published_version?: number;
            key?: string;
        } & {
            project_id?: number;
            published_version?: number;
            key?: string;
        } & { [K_2 in Exclude<keyof I["snapshot_project_keys"][number], keyof CMsgSteamLearnHMACKeys_SnapshotProjectKeys>]: never; })[] & { [K_3 in Exclude<keyof I["snapshot_project_keys"], keyof {
            project_id?: number;
            published_version?: number;
            key?: string;
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof CMsgSteamLearnHMACKeys>]: never; }>(base?: I): CMsgSteamLearnHMACKeys;
    fromPartial<I_1 extends {
        register_data_source_key?: string;
        cache_data_keys?: {
            data_source_id?: number;
            version?: number;
            key?: string;
        }[];
        snapshot_project_keys?: {
            project_id?: number;
            published_version?: number;
            key?: string;
        }[];
    } & {
        register_data_source_key?: string;
        cache_data_keys?: {
            data_source_id?: number;
            version?: number;
            key?: string;
        }[] & ({
            data_source_id?: number;
            version?: number;
            key?: string;
        } & {
            data_source_id?: number;
            version?: number;
            key?: string;
        } & { [K_5 in Exclude<keyof I_1["cache_data_keys"][number], keyof CMsgSteamLearnHMACKeys_CacheDataKeys>]: never; })[] & { [K_6 in Exclude<keyof I_1["cache_data_keys"], keyof {
            data_source_id?: number;
            version?: number;
            key?: string;
        }[]>]: never; };
        snapshot_project_keys?: {
            project_id?: number;
            published_version?: number;
            key?: string;
        }[] & ({
            project_id?: number;
            published_version?: number;
            key?: string;
        } & {
            project_id?: number;
            published_version?: number;
            key?: string;
        } & { [K_7 in Exclude<keyof I_1["snapshot_project_keys"][number], keyof CMsgSteamLearnHMACKeys_SnapshotProjectKeys>]: never; })[] & { [K_8 in Exclude<keyof I_1["snapshot_project_keys"], keyof {
            project_id?: number;
            published_version?: number;
            key?: string;
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof CMsgSteamLearnHMACKeys>]: never; }>(object: I_1): CMsgSteamLearnHMACKeys;
};
export declare const CMsgSteamLearnHMACKeys_CacheDataKeys: {
    fromJSON(object: any): CMsgSteamLearnHMACKeys_CacheDataKeys;
    toJSON(message: CMsgSteamLearnHMACKeys_CacheDataKeys): unknown;
    create<I extends {
        data_source_id?: number;
        version?: number;
        key?: string;
    } & {
        data_source_id?: number;
        version?: number;
        key?: string;
    } & { [K in Exclude<keyof I, keyof CMsgSteamLearnHMACKeys_CacheDataKeys>]: never; }>(base?: I): CMsgSteamLearnHMACKeys_CacheDataKeys;
    fromPartial<I_1 extends {
        data_source_id?: number;
        version?: number;
        key?: string;
    } & {
        data_source_id?: number;
        version?: number;
        key?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgSteamLearnHMACKeys_CacheDataKeys>]: never; }>(object: I_1): CMsgSteamLearnHMACKeys_CacheDataKeys;
};
export declare const CMsgSteamLearnHMACKeys_SnapshotProjectKeys: {
    fromJSON(object: any): CMsgSteamLearnHMACKeys_SnapshotProjectKeys;
    toJSON(message: CMsgSteamLearnHMACKeys_SnapshotProjectKeys): unknown;
    create<I extends {
        project_id?: number;
        published_version?: number;
        key?: string;
    } & {
        project_id?: number;
        published_version?: number;
        key?: string;
    } & { [K in Exclude<keyof I, keyof CMsgSteamLearnHMACKeys_SnapshotProjectKeys>]: never; }>(base?: I): CMsgSteamLearnHMACKeys_SnapshotProjectKeys;
    fromPartial<I_1 extends {
        project_id?: number;
        published_version?: number;
        key?: string;
    } & {
        project_id?: number;
        published_version?: number;
        key?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CMsgSteamLearnHMACKeys_SnapshotProjectKeys>]: never; }>(object: I_1): CMsgSteamLearnHMACKeys_SnapshotProjectKeys;
};
export declare const CMsgSteamLearn_GetHMACKeys_Request: {
    fromJSON(object: any): CMsgSteamLearn_GetHMACKeys_Request;
    toJSON(message: CMsgSteamLearn_GetHMACKeys_Request): unknown;
    create<I extends {
        appid?: number;
    } & {
        appid?: number;
    } & { [K in Exclude<keyof I, "appid">]: never; }>(base?: I): CMsgSteamLearn_GetHMACKeys_Request;
    fromPartial<I_1 extends {
        appid?: number;
    } & {
        appid?: number;
    } & { [K_1 in Exclude<keyof I_1, "appid">]: never; }>(object: I_1): CMsgSteamLearn_GetHMACKeys_Request;
};
export declare const CMsgSteamLearn_GetHMACKeys_Response: {
    fromJSON(object: any): CMsgSteamLearn_GetHMACKeys_Response;
    toJSON(message: CMsgSteamLearn_GetHMACKeys_Response): unknown;
    create<I extends {
        result?: ESteamLearnGetHMACKeysResult;
        keys?: {
            register_data_source_key?: string;
            cache_data_keys?: {
                data_source_id?: number;
                version?: number;
                key?: string;
            }[];
            snapshot_project_keys?: {
                project_id?: number;
                published_version?: number;
                key?: string;
            }[];
        };
    } & {
        result?: ESteamLearnGetHMACKeysResult;
        keys?: {
            register_data_source_key?: string;
            cache_data_keys?: {
                data_source_id?: number;
                version?: number;
                key?: string;
            }[];
            snapshot_project_keys?: {
                project_id?: number;
                published_version?: number;
                key?: string;
            }[];
        } & {
            register_data_source_key?: string;
            cache_data_keys?: {
                data_source_id?: number;
                version?: number;
                key?: string;
            }[] & ({
                data_source_id?: number;
                version?: number;
                key?: string;
            } & {
                data_source_id?: number;
                version?: number;
                key?: string;
            } & { [K in Exclude<keyof I["keys"]["cache_data_keys"][number], keyof CMsgSteamLearnHMACKeys_CacheDataKeys>]: never; })[] & { [K_1 in Exclude<keyof I["keys"]["cache_data_keys"], keyof {
                data_source_id?: number;
                version?: number;
                key?: string;
            }[]>]: never; };
            snapshot_project_keys?: {
                project_id?: number;
                published_version?: number;
                key?: string;
            }[] & ({
                project_id?: number;
                published_version?: number;
                key?: string;
            } & {
                project_id?: number;
                published_version?: number;
                key?: string;
            } & { [K_2 in Exclude<keyof I["keys"]["snapshot_project_keys"][number], keyof CMsgSteamLearnHMACKeys_SnapshotProjectKeys>]: never; })[] & { [K_3 in Exclude<keyof I["keys"]["snapshot_project_keys"], keyof {
                project_id?: number;
                published_version?: number;
                key?: string;
            }[]>]: never; };
        } & { [K_4 in Exclude<keyof I["keys"], keyof CMsgSteamLearnHMACKeys>]: never; };
    } & { [K_5 in Exclude<keyof I, keyof CMsgSteamLearn_GetHMACKeys_Response>]: never; }>(base?: I): CMsgSteamLearn_GetHMACKeys_Response;
    fromPartial<I_1 extends {
        result?: ESteamLearnGetHMACKeysResult;
        keys?: {
            register_data_source_key?: string;
            cache_data_keys?: {
                data_source_id?: number;
                version?: number;
                key?: string;
            }[];
            snapshot_project_keys?: {
                project_id?: number;
                published_version?: number;
                key?: string;
            }[];
        };
    } & {
        result?: ESteamLearnGetHMACKeysResult;
        keys?: {
            register_data_source_key?: string;
            cache_data_keys?: {
                data_source_id?: number;
                version?: number;
                key?: string;
            }[];
            snapshot_project_keys?: {
                project_id?: number;
                published_version?: number;
                key?: string;
            }[];
        } & {
            register_data_source_key?: string;
            cache_data_keys?: {
                data_source_id?: number;
                version?: number;
                key?: string;
            }[] & ({
                data_source_id?: number;
                version?: number;
                key?: string;
            } & {
                data_source_id?: number;
                version?: number;
                key?: string;
            } & { [K_6 in Exclude<keyof I_1["keys"]["cache_data_keys"][number], keyof CMsgSteamLearnHMACKeys_CacheDataKeys>]: never; })[] & { [K_7 in Exclude<keyof I_1["keys"]["cache_data_keys"], keyof {
                data_source_id?: number;
                version?: number;
                key?: string;
            }[]>]: never; };
            snapshot_project_keys?: {
                project_id?: number;
                published_version?: number;
                key?: string;
            }[] & ({
                project_id?: number;
                published_version?: number;
                key?: string;
            } & {
                project_id?: number;
                published_version?: number;
                key?: string;
            } & { [K_8 in Exclude<keyof I_1["keys"]["snapshot_project_keys"][number], keyof CMsgSteamLearnHMACKeys_SnapshotProjectKeys>]: never; })[] & { [K_9 in Exclude<keyof I_1["keys"]["snapshot_project_keys"], keyof {
                project_id?: number;
                published_version?: number;
                key?: string;
            }[]>]: never; };
        } & { [K_10 in Exclude<keyof I_1["keys"], keyof CMsgSteamLearnHMACKeys>]: never; };
    } & { [K_11 in Exclude<keyof I_1, keyof CMsgSteamLearn_GetHMACKeys_Response>]: never; }>(object: I_1): CMsgSteamLearn_GetHMACKeys_Response;
};
export interface SteamLearn {
    RegisterDataSource(request: CMsgSteamLearn_RegisterDataSource_Request): Promise<CMsgSteamLearn_RegisterDataSource_Response>;
    CacheData(request: CMsgSteamLearn_CacheData_Request): Promise<CMsgSteamLearn_CacheData_Response>;
    SnapshotProject(request: CMsgSteamLearn_SnapshotProject_Request): Promise<CMsgSteamLearn_SnapshotProject_Response>;
    BatchOperation(request: CMsgSteamLearn_BatchOperation_Request): Promise<CMsgSteamLearn_BatchOperation_Response>;
    GetHMACKeys(request: CMsgSteamLearn_GetHMACKeys_Request): Promise<CMsgSteamLearn_GetHMACKeys_Response>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
