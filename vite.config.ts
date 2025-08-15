import { defineConfig } from "vite";
import { default as devtoolsJson } from "vite-plugin-devtools-json";

import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig(({ mode }) => ({
	server: { host: true, port: 5173 },
	preview: { host: true, port: 4173 },
	plugins: [sveltekit(), devtoolsJson()],

	envPrefix: "ISPRODREADY_",
}));
