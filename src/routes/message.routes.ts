import { Router } from "express";
import * as MessageController from "@/controllers/message.controller";

const messageRoutes = Router();

messageRoutes.post("/", MessageController.create);
messageRoutes.get("/chat/:chatId", MessageController.listByChat);
messageRoutes.get("/search", MessageController.search);

export default messageRoutes;
