export * from "./api";

export const LIST_API_URL = "http://universities.hipolabs.com/search?country=United%20Arab%20Emirates";

export const QUERY_KEYS = Object.freeze({
	LIST: ["list"],
	UNIVERSITY: ["university"],
} as const);
