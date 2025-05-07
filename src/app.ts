import express from "express";
import dotenv from "dotenv";

// Importar rutas
import messageRoutes from "./routes/message.routes";

// Configuracion
dotenv.config();
const app = express();
app.use(express.json());

// Middlewares
app.use(express.json());

// Rutas
app.use("/api/messages", messageRoutes);

// Ruta base
app.get("/", (req, res) => {
  res.send("🚀 API de Comunicación Interna - REST");
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

export default app;
