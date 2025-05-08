// src/scripts/seed.ts

import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

// Función auxiliar para crear usuarios con UUID opcional
async function createUser(userId?: string) {
  const id = userId || uuidv4();
  return prisma.user.upsert({
    where: { id },
    update: {},
    create: {
      id,
      email: `${id}@example.com`,
      name: `Usuario ${id}`,
    },
  });
}

// Función auxiliar para crear chats con UUID opcional
async function createChat(chatId?: string) {
  const id = chatId || uuidv4();
  return prisma.chat.upsert({
    where: { id },
    update: {},
    create: {
      id,
      name: `Grupo ${id}`,
      type: "GROUP",
    },
  });
}

// Función para vincular usuario y chat como participante
async function addParticipant(userId: string, chatId: string) {
  return prisma.participant.upsert({
    where: { id: uuidv4() },
    update: {},
    create: {
      id: uuidv4(),
      userId,
      chatId,
    },
  });
}

// --- Ejecución principal ---
async function main() {
  // Crear dos usuarios con UUID automáticos
  const user1 = await createUser(); // Genera ID aleatorio
  const user2 = await createUser();

  // Crear un chat con UUID automático
  const chat1 = await createChat();

  // Vincular al chat
  await addParticipant(user1.id, chat1.id);
  await addParticipant(user2.id, chat1.id);

  console.log("🌱 Datos iniciales creados con UUIDs");
  console.log("👤 Usuario 1:", user1.id);
  console.log("👥 Chat creado:", chat1.id);
  console.log("[Github]: https://github.com/EduMMorenolp");
}

main()
  .catch((e) => {
    console.error("❌ Error ejecutando el seed:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
