import { Request, Response } from "express";
import {
  createMessage,
  getMessagesByChatId,
  searchMessages,
} from "@/services/message.service";
import { createMessageSchema } from "@/schemas/message.schema";

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const parsed = createMessageSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json(parsed.error);
      return;
    }

    const parsedData = {
      content: parsed.data.content || "",
      chatId: parsed.data.chatId,
      senderId: parsed.data.senderId,
      repliedToId: parsed.data.repliedToId,
    };

    const message = await createMessage(parsedData);
    res.status(201).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el mensaje" });
  }
};

export const listByChat = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { chatId } = req.params;
    if (!chatId) {
      res.status(400).json({ error: "Missing chatId parameter" });
      return;
    }

    const messages = await getMessagesByChatId(chatId);
    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los mensajes del chat" });
  }
};

export const search = async (req: Request, res: Response): Promise<void> => {
  try {
    const { query, userId } = req.query;
    if (!query || typeof query !== "string") {
      res.status(400).json({ error: "Missing or invalid query parameter" });
      return;
    }

    const results = await searchMessages(query, userId?.toString());
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al buscar los mensajes" });
  }
};
