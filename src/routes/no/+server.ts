import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

import { dev } from "$app/environment";
import { getRandomReason } from "$lib/reasons";

export const GET: RequestHandler = async () => {
	// In development, randomly throw errors to test error handling
	if (dev && Math.random() < 0.8) {
		throw new Error("Random development error for testing!");
	}

	const randomReason = getRandomReason();
	return json(
		{ reason: randomReason },
		{
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Cache-Control": "no-cache, no-store, must-revalidate",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET",
				"Access-Control-Allow-Headers": "Content-Type",
			},
		},
	);
};
