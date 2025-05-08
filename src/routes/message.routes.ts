import { Router } from "express";
import {
  createMessage,
  getMessagesByChat,
  getMessagesByUser,
  getMessagesByChatType,
} from "../controllers/message.controller.js";
import { validate } from "../middlewares/validate.js";
import { createMessageSchema } from "../validators/message.schema.js";

const router = Router();

router.post("/", validate(createMessageSchema), createMessage);
router.get("/chat/:chatId", getMessagesByChat);
router.get("/user/:userId", getMessagesByUser);
router.get("/chat-type/:type", getMessagesByChatType);

export default router;
