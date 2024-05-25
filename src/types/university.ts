/**
 * http://universities.hipolabs.com/search?country=United%20Arab%20Emirates
 */
export interface University {
	country: string;
	web_pages: string[];
	alpha_two_code: string;
	domains: string[];
	"state-province": null | string;
	name: string;
}
