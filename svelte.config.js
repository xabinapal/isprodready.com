import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapter({
			platformProxy: {
				configPath: "wrangler.jsonc",
			},
		}),
		env: {
			publicPrefix: "ISPRODREADY_",
		},
	},
};
