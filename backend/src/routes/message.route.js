import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getMessages,
  getUsersForSidebar,
  sendMessages,
} from "../controllers/message.controller.js";

const router = express.Router();

// This route will now correctly respond to '/api/messages/users'
router.get("/users", protectRoute, getUsersForSidebar);

// Get messages between two users
router.get("/:id", protectRoute, getMessages);

// Send a message to a user
router.post("/send/:id", protectRoute, sendMessages);

export default router;
