import type { RequestHandler } from "./$types";
import { dev } from "$app/environment";

import { api } from "$lib/api";
import { getRandomReason } from "$lib/reasons";

export const GET: RequestHandler = api(async () => {
	// In development, randomly throw errors to test error handling
	if (dev && Math.random() < 0.8) {
		throw new Error("Random development error for testing!");
	}

	return { reason: getRandomReason() };
});
