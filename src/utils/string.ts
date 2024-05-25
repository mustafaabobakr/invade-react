/**
 * @description - slugify a string by replacing spaces with hyphens.
 * @param {string} str - string to slugify
 * @returns {string} - slugged string
 * @throws {Error} - if string is not provided
 * @example
 * slugify(" mostafa abobakr ") => "mostafa-abobakr"
 */
export const slugify = (str: string): string => {
	if (!str) throw new Error("string is required");
	return str.trim().toLowerCase().replace(/\s/g, "-");
};
