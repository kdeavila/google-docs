README - Google Docs Clone

Clon de Google Docs construido con tecnologías modernas de desarrollo web, proporcionando edición de documentos en tiempo real.

🚀 Stack Tecnológico

Frontend

Next.js 15.5.4 con App Router

React 19.1.0

TypeScript

Tailwind CSS 4

Tiptap 3.6.5 (Editor WYSIWYG)

Backend

Convex 1.28.2 (Base de datos en tiempo real y backend serverless)

Autenticación

Clerk 6.34.2 (Gestión de usuarios y JWT)

UI & Estado

Radix UI (Componentes accesibles)

Zustand 5.0.8 (Gestión de estado)

🏗️ Arquitectura

El proyecto sigue una arquitectura de tres capas:

Frontend (Next.js)

App Router en src/app/ para enrutamiento basado en archivos

Componentes React en src/components/ reutilizables

Páginas: Home (/) y Editor (/documents/[documentId])

Backend (Convex)

Funciones serverless en convex/ con type-safety

Base de datos con indexación automática y búsqueda

Sincronización en tiempo real automática

Autenticación (Clerk)

ClerkProvider proporciona contexto de autenticación

Middleware protege rutas y valida JWT

Integración Convex-Clerk para verificación backend

Configuración JWT en Convex

✨ Características Destacadas

✅ Edición de texto enriquecido en tiempo real

✅ Exportación múltiple (JSON, HTML, PDF, Text)

✅ Soporte para tablas, imágenes y listas de tareas

✅ Autenticación segura con Clerk

✅ Interfaz similar a Google Docs

✅ Atajos de teclado (Ctrl+B, Ctrl+I, Ctrl+Z, etc.)

✅ Búsqueda y paginación de documentos

✅ Diseño responsive y optimizado para impresión

🌐 Variables de Entorno

NEXT_PUBLIC_CONVEX_URL=           # URL del backend Convex
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= # Clave pública de Clerk
CLERK_JWT_ISSUER_DOMAIN=          # Dominio emisor JWT de Clerk

📦 Instalación

# Clonar repositorio
git clone https://github.com/kdeavila/google-docs.git

# Instalar dependencias
npm install

# Configurar variables de entorno
# Crear archivo .env.local con las variables requeridas

# Iniciar desarrollo
npm run dev

👨‍💻 Autor

Keyner de Ávila Gutiérrez

