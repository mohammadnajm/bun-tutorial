export const errorMiddleware = async (c, next) => {
    try {
      await next();
    } catch (e) {
      console.error(e);
      return c.json({ error: e.message || "Internal Error" }, 500);
    }
  };
  