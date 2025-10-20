import { Hono } from "hono";
import routes from "./routes/index.routes.js";
import { errorMiddleware } from "./../src/middlewares/error.js";

const app = new Hono();

// نمونه‌ی CORS ساده (در صورت نیاز)
// app.use("*", (c, next) => {
//   c.header("Access-Control-Allow-Origin", "*");
//   c.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   if (c.req.method === "OPTIONS") return c.text("", 204);
//   return next();
// });

app.onError((err, c) => {
  console.error(err);
  return c.json({ error: "Internal Error", message: err.message }, 500);
});

// 2) 404 سفارشی
app.notFound((c) => {
  // گزینه A: JSON
  return c.json(
    { error: "Route Not Found", path: new URL(c.req.url).pathname },
    404
  );

  // گزینه B: HTML (اگر خواستی)
  // return c.html("<h1>صفحه پیدا نشد</h1>", 404);

  // گزینه C: ریدایرکت به صفحه اصلی
  // return c.redirect("/", 302);
});

app.use("*", errorMiddleware); // اختیاری
app.route("/", routes);

export default app;
