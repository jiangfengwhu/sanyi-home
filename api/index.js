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

// Handle React Router requests
app.get("*", async (c) => {
	return requestHandler(c.req.raw, {
		cloudflare: { env: c.env, ctx: c.executionCtx },
	});
});

// Catch-all route for static assets
app.all("*", async (c) => {
	return c.env.ASSETS.fetch(c.req.raw);
});

export default {
	fetch: app.fetch,
};
