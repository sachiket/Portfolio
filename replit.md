# replit.md

## Overview

This is a professional portfolio web application for Sachiket Behera, a Senior Software Engineer. The application is built as a full-stack TypeScript project using a modern React frontend with Express.js backend, showcasing professional experience, skills, and contact information through a clean, responsive interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React 18 with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but minimal usage)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

## Key Components

### Frontend Architecture
- **Component Structure**: Modern React functional components with hooks
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling Strategy**: Tailwind CSS with CSS custom properties for theming
- **Build System**: Vite with TypeScript support and React plugin

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL dialect
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **API Structure**: RESTful API design (routes currently minimal)

### Database Schema
- **Users Table**: Basic user entity with id, username, and password fields
- **Schema Management**: Drizzle migrations in `./migrations` directory
- **Type Safety**: Full TypeScript integration with Drizzle-generated types

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express.js routes handle requests and interact with storage
3. **Data Processing**: Storage interface abstracts database operations
4. **Response Handling**: JSON responses with proper error handling middleware
5. **State Management**: Client-side state managed through React Query cache

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database ORM
- **@radix-ui/***: Headless UI components
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **Vite**: Frontend build tool and dev server
- **TypeScript**: Static type checking
- **Drizzle Kit**: Database schema management
- **ESBuild**: Backend bundling for production

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx for TypeScript execution in development
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Production
- **Build Process**: 
  - Frontend built with Vite to `dist/public`
  - Backend bundled with ESBuild to `dist/index.js`
- **Static Assets**: Served by Express in production
- **Environment**: NODE_ENV-based configuration

### Key Configuration Files
- **vite.config.ts**: Frontend build configuration with path aliases
- **drizzle.config.ts**: Database connection and migration settings
- **tsconfig.json**: TypeScript configuration with path mapping
- **tailwind.config.ts**: Styling configuration with custom theme

### Special Features
- **Replit Integration**: Custom plugins for development environment
- **Error Handling**: Runtime error overlay in development
- **Session Management**: PostgreSQL session store configured
- **Type Safety**: End-to-end TypeScript with shared types

The application is designed as a portfolio showcase with potential for user authentication and content management features, though currently focused on static content presentation with a clean, professional design.