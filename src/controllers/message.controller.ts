import { Request, Response, NextFunction } from "express";
import * as messageService from "../services/message.service.js";
import { getIO } from "../socket.js";

export const createMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { content, senderId, chatId, replyToId } = req.body;
    const message = await messageService.createMessage({
      content,
      senderId,
      chatId,
      replyToId,
    });

    // Emitir a los sockets en la sala del chat
    const io = getIO();
    io.to(chatId).emit("new_message", message);

    res.status(201).json({ message: "Message created", data: message });
  } catch (error: any) {
    console.error("Error creating message:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

export const getMessagesByChat = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { chatId } = req.params;
    const messages = await messageService.getMessagesByChat(chatId);
    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};

export const getMessagesByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { userId } = req.params;
    const messages = await messageService.getMessagesByUser(userId);
    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};

export const getMessagesByChatType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { type } = req.params;
    const messages = await messageService.getMessagesByChatType(type);
    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al buscar los mensajes" });
  }
};
