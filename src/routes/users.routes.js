import { Hono } from "hono";
import { asyncHandler } from "../utils/asyncHandler.js";
import {
  listUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controller.js";

const router = new Hono();

// Dynamic routes
router.get("/", asyncHandler(listUsers));
router.get("/:id", asyncHandler(getUser));
router.post("/", asyncHandler(createUser));
router.patch("/:id", asyncHandler(updateUser));
router.delete("/:id", asyncHandler(deleteUser));

export default router;
