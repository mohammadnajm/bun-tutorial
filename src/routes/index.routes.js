import { Hono } from "hono";
import users from "./users.routes.js";

const router = new Hono();

router.get("/", (c) => c.json({ status: "ok", service: "bun-hono-mongo" }));
router.route("/users", users);

export default router;
