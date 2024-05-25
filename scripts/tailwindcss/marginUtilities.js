module.exports = ({ matchUtilities, theme }) => {
	matchUtilities(
		{
			mi: (value) => ({
				marginInline: value,
			}),
			mis: (value) => ({
				marginInlineStart: value,
			}),
			mie: (value) => ({
				marginInlineEnd: value,
			}),
			mk: (value) => ({
				marginBlock: value,
			}),
			mks: (value) => ({
				marginBlockStart: value,
			}),
			mke: (value) => ({
				marginBlockEnd: value,
			}),
		},
		{
			supportsNegativeValues: true,
			values: theme("margin"),
		}
	);
};
