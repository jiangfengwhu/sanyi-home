import { Hono } from "hono";
import { createRequestHandler } from "react-router";

const app = new Hono();

// React Router request handler
const requestHandler = createRequestHandler(
	() => import("virtual:react-router/server-build"),
	import.meta.env.MODE,
);

// Ignore well-known requests (e.g. Chrome DevTools)
app.get("/.well-known/*", (c) => {
	return c.json({ error: "Not found" }, 404);
});

function detectLang(request) {
	const accept = request.headers.get("accept-language") || "";
	const primary = accept.split(",")[0] || "";
	return primary.toLowerCase().startsWith("zh") ? "zh" : "en";
}

// Handle React Router requests
app.get("*", async (c) => {
	return requestHandler(c.req.raw, {
		cloudflare: { env: c.env, ctx: c.executionCtx },
		detectedLang: detectLang(c.req.raw),
	});
});

// Catch-all route for static assets
app.all("*", async (c) => {
	return c.env.ASSETS.fetch(c.req.raw);
});

export default {
	fetch: app.fetch,
};
