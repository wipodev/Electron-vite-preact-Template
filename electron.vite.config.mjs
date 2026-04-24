import { defineConfig } from "electron-vite";
import preact from "@preact/preset-vite";
import { resolve } from "path";

export default defineConfig({
	main: {},
	preload: {},
	renderer: {
		plugins: [preact()],
		resolve: {
			alias: {
				"@renderer": resolve("src/renderer/src"),
			},
		},
	},
});
