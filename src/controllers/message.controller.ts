import { Request, Response } from "express";
import * as MessageService from "@/services/message.service";
import { createMessageSchema } from "@/schemas/message.schema";

export const create = async (req: Request, res: Response) => {
  const parsed = createMessageSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error);

  const message = await MessageService.createMessage(parsed.data);
  res.status(201).json(message);
};

export const listByChat = async (req: Request, res: Response) => {
  const { chatId } = req.params;
  const messages = await MessageService.getMessagesByChatId(chatId);
  res.json(messages);
};

export const search = async (req: Request, res: Response) => {
  const { query, userId } = req.query;
  if (!query || typeof query !== "string")
    return res.status(400).json({ error: "Missing query parameter" });

  const results = await MessageService.searchMessages(
    query,
    userId?.toString()
  );
  res.json(results);
};
