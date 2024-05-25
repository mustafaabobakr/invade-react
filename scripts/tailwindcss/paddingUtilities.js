module.exports = ({ matchUtilities, theme }) => {
	matchUtilities(
		{
			pi: (value) => ({
				paddingInline: value,
			}),
			pis: (value) => ({
				paddingInlineStart: value,
			}),
			pie: (value) => ({
				paddingInlineEnd: value,
			}),
			pk: (value) => ({
				paddingBlock: value,
			}),
			pks: (value) => ({
				paddingBlockStart: value,
			}),
			pke: (value) => ({
				paddingBlockEnd: value,
			}),
		},
		{
			supportsNegativeValues: true,
			values: theme("padding"),
		}
	);
};
