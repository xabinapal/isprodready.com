import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import svelte from "eslint-plugin-svelte";
import prettier from "eslint-config-prettier";
import { fileURLToPath } from "node:url";

export default [
	js.configs.recommended,
	...svelte.configs["flat/recommended"],
	...svelte.configs.prettier,
	prettier,
	...svelte.configs["flat/prettier"],
	{
		languageOptions: { globals: { NodeJS: true, App: true } },
	},
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: fileURLToPath(new URL(".", import.meta.url)),
			},
		},
		plugins: { "@typescript-eslint": ts },
		rules: {
			...ts.configs.recommended.rules,
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/prefer-const": "error",
			quotes: ["error", "single", { avoidEscape: true }],
		},
	},
	{
		files: ["**/*.svelte"],
		languageOptions: {
			parser: svelte.parser,
			parserOptions: {
				parser: tsParser,
				project: "./tsconfig.json",
				tsconfigRootDir: fileURLToPath(new URL(".", import.meta.url)),
				extraFileExtensions: [".svelte"],
			},
		},
		rules: {
			quotes: ["error", "single", { avoidEscape: true }],
		},
	},
	{
		ignores: [
			"build/",
			".svelte-kit/",
			"dist/",
			"node_modules/",
			".env",
			".env.*",
			"!.env.example",
			"pnpm-lock.yaml",
			"package-lock.json",
			"yarn.lock",
		],
	},
];
