import express from "express";

import dotenv from "dotenv";
import messageRoutes from "./routes/message.routes";

dotenv.config();
const app = express();

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

// Inicializar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});