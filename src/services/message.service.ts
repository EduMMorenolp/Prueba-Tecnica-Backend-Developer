import prisma from "@/lib/prisma";
import { CreateMessageDTO } from "@/types/message.types";

export const createMessage = async (data: CreateMessageDTO) => {
  return prisma.message.create({ data });
};

export const getMessagesByChatId = async (chatId: string) => {
  return prisma.message.findMany({
    where: { chatId },
    orderBy: { createdAt: "asc" },
    include: {
      sender: true,
      replyTo: true,
    },
  });
};

export const searchMessages = async (query: string, userId?: string) => {
  return prisma.message.findMany({
    where: {
      content: { contains: query, mode: "insensitive" },
      ...(userId && { senderId: userId }),
    },
    orderBy: { createdAt: "desc" },
  });
};
