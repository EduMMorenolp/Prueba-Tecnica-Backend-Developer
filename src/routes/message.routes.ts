import express from "express";
import { create, listByChat, search } from "@/controllers/message.controller";

const router = express.Router();

// Definir las rutas correctamente
router.post("/", create);
router.get("/search", search);
router.get("/:chatId", listByChat);

export default router;
