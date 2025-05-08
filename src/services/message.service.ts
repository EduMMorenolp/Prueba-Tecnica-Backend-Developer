import { PrismaClient, ChatType } from "@prisma/client";

const prisma = new PrismaClient();

interface CreateMessageInput {
  content: string;
  senderId: string;
  chatId: string;
  replyToId?: string;
}

export const createMessage = async ({
  content,
  senderId,
  chatId,
  replyToId,
}: CreateMessageInput) => {
  return prisma.message.create({
    data: {
      content,
      senderId,
      chatId,
      replyToId,
    },
  });
};

export const getMessagesByChat = async (chatId: string) => {
  return prisma.message.findMany({
    where: { chatId },
    orderBy: { createdAt: "asc" },
    include: {
      sender: { select: { id: true, name: true } },
      replyTo: { select: { id: true, content: true } },
    },
  });
};

export const getMessagesByUser = async (userId: string) => {
  return prisma.message.findMany({
    where: { senderId: userId },
    orderBy: { createdAt: "desc" },
    include: {
      chat: { select: { id: true, name: true, type: true } },
    },
  });
};

export const getMessagesByChatType = async (type: string) => {
  return prisma.message.findMany({
    where: {
      chat: {
        type: type as ChatType,
      },
    },
    include: {
      chat: true,
      sender: true,
    },
    orderBy: { createdAt: "desc" },
  });
};
