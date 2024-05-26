import "vitest/config";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
const plugins = [react(), tsconfigPaths()];

export default defineConfig({
	plugins: plugins,
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./vitest.setup.ts"],
	},
});
