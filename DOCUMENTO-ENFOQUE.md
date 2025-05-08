# 📝 Enfoque Técnico – Prueba Backend Developer

## 🎯 Objetivo del Proyecto

Desarrollar una API REST para gestionar comunicación interna entre usuarios, permitiendo crear y consultar mensajes por chat, usuario o tipo de conversación.

## ✅ Funcionalidades Implementadas

### Crear mensaje entre usuarios

Permite enviar un mensaje especificando:

- Contenido del mensaje
- ID del remitente (`senderId`)
- ID del chat (`chatId`)
- (Opcional) ID del mensaje al que responde (`replyToId`)

Este endpoint garantiza que los mensajes se almacenen con estructura limpia y relaciones claras.

### Consultar mensajes por tipo de chat

Permite obtener todos los mensajes asociados a un tipo de chat específico:

```bash
ONE_TO_ONE, GROUP, SUBGROUP.
```

Ideal para sistemas de análisis posterior, ya que permite segmentar el contenido según el contexto de la conversación.

## 🛠 Tecnologías Utilizadas

| Herramienta       | Descripción                                |
| ----------------- | ------------------------------------------ |
| Node.js + Express | Requisito                                  |
| TypeScript        | Requisito                                  |
| Prisma            | Requisito                                  |
| Zod               | Validación de datos |
| Socket.IO         | Comunicación en tiempo real                |
| Thunder Client    | Testing manual sin framework adicional     |

## 🔐 Decisiones de Diseño

| Decisión                               | Justificación                                                     |
| -------------------------------------- | ----------------------------------------------------------------- |
| UUIDs como identificadores             | Mayor seguridad y evita colisiones en entornos distribuidos       |
| Relaciones explícitas en Prisma        | Garantiza integridad referencial entre mensajes, usuarios y chats |
| Validación con Zod                     | Mejora la experiencia de desarrollo y ofrece errores claros       |
| Seed script con UUIDs                  | Permite probar funcionalidades rápidamente                        |
| Socket.IO integrado                    | Preparado para notificaciones en tiempo real                      |
| Sin dependencias externas para testing | Use Thunder Client para pruebas manuales simples y rápidas        |

## 📦 ¿Por qué este enfoque?

He elegido una estructura modular y clara, usando las herramientas necesarias para cumplir con la consigna. Esto asegura:

- ✅ Facilidad de lectura y mantenimiento
- ✅ Escalabilidad futura
- ✅ Buenas prácticas de validación, relaciones y documentación
- ✅ Listo para integrarse con frontend o IA
