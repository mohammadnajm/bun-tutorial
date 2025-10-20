import { serve } from "bun";

serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    // --- GET /hello ---
    if (req.method === "GET" && url.pathname === "/hello") {
      return new Response(JSON.stringify({ message: "Hello from Bun (JS)!" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // --- POST /echo ---
    if (req.method === "POST" && url.pathname === "/echo") {
      return req.json().then((body) => {
        return new Response(JSON.stringify({ youSent: body }), {
          headers: { "Content-Type": "application/json" },
        });
      });
    }

    // --- fallback ---
    return new Response("Not found", { status: 404 });
  },
});
