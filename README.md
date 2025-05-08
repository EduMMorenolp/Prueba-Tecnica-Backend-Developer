# 🚀 API de Comunicación Interna - REST

Este es un sistema backend desarrollado en **Node.js con Express y TypeScript**, orientado a la comunicación interna entre usuarios (1 a 1, subgrupal y grupal). Los mensajes se almacenan en una base de datos estructurada, permitiendo consultas avanzadas por usuario, chat o tipo de conversación, todo listo para análisis posterior con IA.

Además, incluye soporte para notificaciones en tiempo real usando **Socket.IO**, y está preparado para escalar y evolucionar fácilmente.

## ✅ Funcionalidades principales

- ✅ Enviar mensajes entre usuarios
- ✅ Guardar mensajes con estructura escalable usando Prisma ORM
- ✅ Consultar mensajes:
  - Por ID de chat
  - Por ID de usuario
  - Por tipo de chat
- ✅ Responder a mensajes específicos (`replyTo`)
- ✅ Notificaciones en tiempo real con Socket.IO
- ✅ Timestamps automáticos

## 🧱 Tecnologías utilizadas

| Herramienta | Descripción                                |
| ----------- | ------------------------------------------ |
| Node.js     | Entorno de ejecución JavaScript            |
| Express     | Framework web minimalista                  |
| TypeScript  | Tipado estático y mejor mantenimiento      |
| Prisma      | ORM para gestión de base de datos          |
| Zod         | Validación de datos en tiempo de ejecución |
| Socket.IO   | Comunicación en tiempo real                |

🧱 Estructura del proyecto

```bash
src/
├── controllers/
├── lib/
├── middlewares/
├── routes/
├── services/
├── types/
├── validators/
├── socket.ts
├── server.ts
└── app.ts
```

## 🚀 Instalación y uso

### 1. Clonar el repositorio

```bash
git clone https://github.com/EduMMorenolp/Prueba-Tecnica-Backend-Developer.git
cd Prueba-Tecnica-Backend-Developer
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

- Crea un archivo .env en la raíz usando el .env.example.

### 4. Generar cliente Prisma

```bash
npx prisma generate
```

### 5. Migrar base de datos (Prisma)

```bash
npx prisma migrate dev --name init
```

### 6. Ejecutar el servidor

```bash
npm run build
npm start
```

### 7. Crear datos iniciales con el script de seed

```bash
npx tsx src/scripts/seed.ts
```

### 8. Probar los endpoints con Thunder Client

Con el servidor corriendo, puedes usar Thunder Client (extensión de VS Code) o cualquier cliente HTTP para probar los endpoints.

- Ejemplo:
```bash
  "content": "Este es un mensaje de prueba",
  "senderId": "5cc7821e-afa6-4e80-b564-a0bd02c7e7eb",
  "chatId": "5379c163-a950-4851-b2b7-cf49946ed50e"
```

## 🌐 Endpoints disponibles

| Método | Endpoint                        | Descripción                                           |
| ------ | ------------------------------- | ----------------------------------------------------- |
| POST   | `/api/messages`                 | Crea un nuevo mensaje entre usuarios                  |
| GET    | `/api/messages/chat/:chatId`    | Obtiene todos los mensajes de un chat específico      |
| GET    | `/api/messages/user/:userId`    | Obtiene todos los mensajes enviados por un usuario    |
| GET    | `/api/messages/chat-type/:type` | Obtiene todos los mensajes filtrados por tipo de chat |

## 📝 Mejoras futuras

- 🔒 Agregar autenticación JWT
- 📑 Documentación con Swagger
- 📊 Paginación en búsquedas
- 🧽 Tests unitarios
