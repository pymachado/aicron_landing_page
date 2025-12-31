# AICRON Landing Page

## Overview

This is a Spanish-language landing page for AICRON, a business automation consulting service that helps small and medium businesses implement AI-powered automation solutions. The primary goal is to capture leads through a diagnostic form where business owners can schedule an automation assessment.

The application is a full-stack TypeScript project using React on the frontend and Express on the backend, with PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **Animations**: Framer Motion for scroll animations and page transitions
- **State Management**: TanStack Query for server state and form handling
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with path aliases (`@/` for client/src, `@shared/` for shared code)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Validation**: Zod schemas generated from Drizzle using drizzle-zod
- **API Pattern**: REST endpoints defined in shared/routes.ts with typed request/response schemas

### Project Structure
```
├── client/           # React frontend
│   └── src/
│       ├── components/   # UI components (shadcn/ui)
│       ├── hooks/        # Custom React hooks
│       ├── lib/          # Utilities and query client
│       └── pages/        # Page components
├── server/           # Express backend
│   ├── db.ts         # Database connection
│   ├── routes.ts     # API route handlers
│   └── storage.ts    # Data access layer
├── shared/           # Shared code between frontend/backend
│   ├── schema.ts     # Drizzle database schemas
│   └── routes.ts     # API route definitions with Zod schemas
└── migrations/       # Drizzle database migrations
```

### Key Design Decisions

1. **Shared Schema Pattern**: Database schemas and API contracts are defined once in `/shared` and used by both frontend and backend, ensuring type safety across the stack.

2. **Storage Abstraction**: Database operations are encapsulated in `storage.ts` with an interface, allowing for easier testing and potential storage backend changes.

3. **Component Library**: Uses shadcn/ui components which are copied into the project (not imported as a package), allowing full customization.

4. **Development/Production Split**: Vite handles development with HMR; production builds are compiled with esbuild for the server and Vite for the client.

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries and schema management
- **connect-pg-simple**: PostgreSQL session store (available but session not currently implemented)

### Key npm Packages
- `@tanstack/react-query`: Data fetching and caching
- `framer-motion`: Animation library
- `lucide-react`: Icon library
- `react-hook-form` + `@hookform/resolvers`: Form handling with Zod validation
- `wouter`: Client-side routing
- `zod`: Runtime type validation

### Build & Development
- Database migrations: `npm run db:push` (uses Drizzle Kit)
- Development: `npm run dev` (runs tsx with hot reload)
- Production build: `npm run build` (Vite for client, esbuild for server)
- Production start: `npm run start`