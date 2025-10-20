export const asyncHandler = (fn) => async (c) => {
  try {
    return await fn(c);
  } catch (err) {
    c.req.raw?.method &&
      console.error(`[${c.req.raw.method}] ${c.req.raw.url}`, err);
    return c.json({ error: err.message || "Internal Error" }, 500);
  }
};
