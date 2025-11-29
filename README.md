# README - Google Docs Clone

Clon de Google Docs construido con tecnologías modernas de desarrollo web, proporcionando edición de documentos en tiempo real con funcionalidades de colaboración.

## 🚀 Stack Tecnológico

**Frontend**
- Next.js 15.5.4 con App Router  
- React 19.1.0  
- TypeScript  
- Tailwind CSS 4  
- Tiptap 3.6.5 (Editor WYSIWYG)  

**Backend**
- Convex 1.28.2 (Base de datos en tiempo real y backend serverless)  
- Liveblocks 3.10.1 (Colaboración en tiempo real)

**Autenticación**
- Clerk 6.34.2 (Gestión de usuarios y JWT)  

**UI & Estado**
- Shadcn/ui (Componentes accesibles)  
- Zustand 5.0.8 (Gestión de estado global)  
- Liveblocks React (Estado colaborativo)

## 🏗️ Arquitectura

El proyecto sigue una arquitectura basada en características (feature-based) con una clara separación de responsabilidades.

### Estructura del Proyecto

```
src/
├── app/                     # Rutas de Next.js
│   ├── (home)/             # Página principal
│   ├── documents/          # Rutas de documentos
│   └── api/                # Endpoints de API
├── components/
│   ├── editor/             # Componentes del editor de documentos
│   │   ├── toolbar/        # Componentes de la barra de herramientas
│   │   └── ...             # Otros componentes del editor
│   ├── home/               # Componentes de la página de inicio
│   ├── shared/             # Componentes compartidos
│   └── ui/                 # Componentes de UI reutilizables (shadcn/ui)
├── providers/              # Proveedores de contexto
├── store/                  # Estado global con Zustand
├── hooks/                  # Hooks personalizados
└── lib/                    # Utilidades y configuraciones
```

### Características Principales

1. **Autenticación y Autorización**
   - Autenticación segura con Clerk
   - Control de acceso a documentos
   - Gestión de sesiones

2. **Editor de Documentos**
   - Edición en tiempo real con Tiptap
   - Formato de texto avanzado
   - Colaboración en tiempo real con múltiples usuarios
   - Historial de cambios

3. **Gestión de Documentos**
   - Creación, edición y eliminación de documentos
   - Búsqueda y filtrado
   - Plantillas predefinidas

## 🆕 Últimas actualizaciones (29/11/2025)

- **Refactorización completa** de la estructura del proyecto a un enfoque basado en características
- **Mejora en la organización** de componentes por dominio funcional
- **Optimización de imports** y rutas con alias (@/)
- **Mejora en la mantenibilidad** del código con una estructura más clara
- **Actualización de dependencias** a sus últimas versiones estables

---

## 🌐 Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto y añade las siguientes variables:

```env
NEXT_PUBLIC_CONVEX_URL=           # URL del backend Convex
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= # Clave pública de Clerk
CLERK_JWT_ISSUER_DOMAIN=          # Dominio emisor JWT de Clerk
```

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/kdeavila/google-docs.git
cd google-docs

# Instalar dependencias
npm install

# Crear archivo .env.local y configurar variables de entorno

# Iniciar servidor de desarrollo
npm run dev
```

## 📁 Estructura detallada

```
.
├── src/
│   ├── app/                    # Rutas de la aplicación
│   │   ├── (home)/            # Página principal con listado de documentos
│   │   ├── documents/         # Rutas relacionadas con documentos
│   │   └── api/               # Endpoints de API
│   │
│   ├── components/
│   │   ├── editor/            # Componentes del editor de documentos
│   │   │   ├── toolbar/       # Barra de herramientas del editor
│   │   │   ├── navbar.tsx     # Barra de navegación del editor
│   │   │   └── ...
│   │   │
│   │   ├── home/              # Componentes de la página de inicio
│   │   │   ├── documents-table.tsx  # Tabla de documentos
│   │   │   └── ...
│   │   │
│   │   ├── shared/            # Componentes compartidos
│   │   └── ui/                # Componentes UI reutilizables (shadcn/ui)
│   │
│   ├── providers/             # Proveedores de contexto (Convex, Liveblocks, etc.)
│   ├── store/                 # Estado global con Zustand
│   ├── hooks/                 # Hooks personalizados
│   └── lib/                   # Utilidades y configuraciones
│
├── convex/                   # Backend con Convex
│   ├── schema.ts             # Definición del esquema de la base de datos
│   └── documents.ts          # Funciones relacionadas con documentos
│
├── public/                   # Archivos estáticos
└── package.json              # Dependencias y scripts
```

### � Dependencias principales

- **Next.js**: Framework React para renderizado híbrido
- **Convex**: Backend como servicio con base de datos en tiempo real
- **Liveblocks**: Para colaboración en tiempo real
- **Clerk**: Autenticación y gestión de usuarios
- **Tiptap**: Editor de texto enriquecido
- **Shadcn/ui**: Componentes UI accesibles y personalizables
- **Zustand**: Gestión de estado global
- **Tailwind CSS**: Utilidades CSS para estilos rápidos

## 🛠️ Guía de desarrollo

### Configuración inicial

1. Clona el repositorio:
   ```bash
   git clone https://github.com/kdeavila/google-docs.git
   cd google-docs
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno (ver sección correspondiente)

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### Estructura de componentes

- **Componentes del Editor**: Ubicados en `src/components/editor/`
  - `editor.tsx`: Componente principal del editor
  - `toolbar/`: Componentes de la barra de herramientas
  - `navbar.tsx`: Barra de navegación superior
  - `ruler.tsx`: Regla para márgenes del documento

- **Componentes de la Página de Inicio**: En `src/components/home/`
  - `documents-table.tsx`: Tabla de documentos
  - `templates-gallery.tsx`: Galería de plantillas

- **Componentes Compartidos**: En `src/components/shared/`
  - `fullscreen-loader.tsx`: Cargador a pantalla completa

### Convenciones de código

- Usar TypeScript estricto
- Seguir la estructura de carpetas por características
- Mantener los componentes pequeños y enfocados en una sola responsabilidad
- Usar nombres descriptivos para variables y funciones
- Documentar componentes y funciones complejas

## 👨‍💻 Autor

**Keyner de Ávila Gutiérrez**

[LinkedIn](https://www.linkedin.com/in/kdeavila9/)
[GitHub](https://github.com/kdeavila)

Última actualización: 29/11/2025
