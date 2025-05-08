import { z } from "zod";

export const createMessageSchema = z.object({
  content: z.string().min(1),
  senderId: z.string().uuid(),
  chatId: z.string().uuid(),
  replyToId: z.string().uuid().optional(),
});

export type CreateMessageInput = z.infer<typeof createMessageSchema>;
