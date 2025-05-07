import { z } from "zod";

export const createMessageSchema = z.object({
  content: z.string().min(1),
  chatId: z.string().uuid(),
  senderId: z.string().uuid(),
  repliedToId: z.string().uuid().optional(),
});
