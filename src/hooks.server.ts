import type { Handle } from "@sveltejs/kit";
import { minify } from "html-minifier-next";

const opts = {
	html5: true,
	minifyCSS: true,
	minifyJS: true,

	decodeEntities: true,
	keepClosingSlash: true,
	removeComments: false,
	removeRedundantAttributes: true,
	removeEmptyAttributes: true,
};

export const handle: Handle = async ({ event, resolve }) => {
	return resolve(event, {
		transformPageChunk: async ({ html }) => {
			return minify(html, opts);
		},
	});
};
