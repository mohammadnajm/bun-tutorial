import { User } from "../models/user.model.js";

// GET /users?page=1&limit=10
export async function listUsers(c) {
  const users = await User.find();
  return c.json(users);
}

// GET /users/:id
export async function getUser(c) {
  const { id } = c.req.param();
  const user = await User.findOne({ _id: id });
  if (!user) return c.json({ error: "Not found" }, 404);
  return c.json(user);
}

// POST /users
export async function createUser(c) {
  const body = await c.req.json();
  const user = await User.create(body);
  return c.json(user, 201);
}

// PATCH /users/:id
export async function updateUser(c) {
  const { id } = c.req.param();
  const body = await c.req.json();

  let user = await User.findOneAndUpdate(
    { _id: id },
    { $set: { ...body, updatedAt: new Date() } },
    { returnDocument: "after" }
  );

  if (!user) return c.json({ error: "Not found" }, 404);
  return c.json(user);
}

// DELETE /users/:id
export async function deleteUser(c) {
  const { id } = c.req.param();

  const deletedCount = await User.deleteOne({ _id: id });

  if (!deletedCount) return c.json({ error: "Not found" }, 404);
  return c.json({ ok: true });
}
