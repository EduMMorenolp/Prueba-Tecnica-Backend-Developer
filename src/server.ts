import app from "./app.js";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server as IOServer } from "socket.io";
import { setupSocket } from "./socket.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.BASE_URL || "localhost:3000";

const server = createServer(app);
const io = new IOServer(server, {
  cors: {
    origin: "*",
  },
});

setupSocket(io);

// Función para arrancar el servidor
async function startServer() {
  app.listen(PORT, () => {
    console.log("==================================================");
    console.log(`🚀 Servidor corriendo en: http://${HOST}`);
    console.log("==================================================\n");
  });
}

// Iniciar el servidor
startServer();
