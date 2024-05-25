import tailwindcssPlugins from "./scripts/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				headerBg: "#1f2937",
			},
			gridTemplateColumns: {
				list: "repeat(auto-fit, minmax(300px, 1fr))",
			},
			gridTemplateRows: {
				list: "repeat(auto-fit, minmax(150px, 1fr))",
			},
		},
		screens: {
			xs: { max: "400px" },
			// => @media screen and  (max-width: 400px) { }
			sm: { max: "767px" },
			// => @media screen and  (max-width: 767px) { }
			md: { min: "768px", max: "921px" },
			// => @media screen and  (min-width: 768px) and (max-width: 921px) { }
			lg: { min: "922px", max: "1279px" },
			// => @media (min-width: 922px) and (max-width: 1279px) { }
			xl: { min: "1280px", max: "1550px" },
			// => @media screen and  (min-width: 1280px) and (max-width: 1550px) { }
			"2xl": "1551px",
			// => @media screen and  (min-width: 1551px) { }
			"3xl": "1920px",
			// => @media screen and  (min-width: 1920px) { }
		},
	},

	plugins: [tailwindcssPlugins],
};
