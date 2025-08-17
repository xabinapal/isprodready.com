import type { RequestHandler } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";

export function api(handler: RequestHandler | any): RequestHandler {
	return async (event) => {
		try {
			const result = await handler(event);

			if (result instanceof Response) {
				return result;
			}

			return json(result, {
				status: 200,
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"Cache-Control": "no-cache, no-store, must-revalidate",
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET",
					"Access-Control-Allow-Headers": "Content-Type",
				},
			});
		} catch (error) {
			const message = error instanceof Error ? error.message : "Internal Server Error";

			return json(
				{ error: message },
				{
					status: 500,
					headers: {
						"Content-Type": "application/json; charset=utf-8",
						"Cache-Control": "no-cache, no-store, must-revalidate",
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Methods": "GET",
						"Access-Control-Allow-Headers": "Content-Type",
					},
				},
			);
		}
	};
}
