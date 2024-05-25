const prefix = "--tw-color";
function extractColorVars(colorObj, colorGroup = "") {
	return Object.keys(colorObj).reduce((vars, colorKey) => {
		const value = colorObj[colorKey];

		const newVars =
			typeof value === "string"
				? { [`${prefix}${colorGroup}-${colorKey}`]: value }
				: extractColorVars(value, `-${colorKey}`);

		return { ...vars, ...newVars };
	}, {});
}

module.exports = ({ addBase, theme }) => {
	const colorObj = theme("colors");
	// ThemeConfig
	const colorVars = extractColorVars(colorObj);

	addBase({
		":root": colorVars,
	});
};
