import app from "@/app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.BASE_URL || "localhost:3000";

// Función para arrancar el servidor
async function startServer() {
  app.listen(PORT, () => {
    console.log("==================================================");
    console.log(`🚀 Servidor corriendo en: http://${HOST}`);
    // console.log(`📃 Swagger Docs: http://${HOST}/api-docs`);
    console.log("==================================================\n");
  });
}

// Iniciar el servidor
startServer();
