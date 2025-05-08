import { Server as IOServer, Socket } from "socket.io";

let io: IOServer;

export const setupSocket = (server: any) => {
  io = new IOServer(server);
  io.on("connection", (socket: Socket) => {
    console.log(`🟢 New client connected: ${socket.id}`);

    socket.on("join_chat", (chatId: string) => {
      socket.join(chatId);
      console.log(`Socket ${socket.id} joined chat ${chatId}`);
    });

    socket.on("disconnect", () => {
      console.log(`🔴 Client disconnected: ${socket.id}`);
    });
  });
};

export const getIO = () => io;
