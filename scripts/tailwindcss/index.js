import plugin from "tailwindcss/plugin";

import paddingUtilities from "./paddingUtilities";
import marginUtilities from "./marginUtilities";
import extractColorVars from "./extractColorVars";
/**
 * @description - inspired by tailwindcss-rtl plugin.
 * { @link  https://github.com/20lives/tailwindcss-rtl/blob/master/src/index.js }
 */
export default plugin((helpers) => {
	paddingUtilities(helpers);
	marginUtilities(helpers);
	extractColorVars(helpers);
});
