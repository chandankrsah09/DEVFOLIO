# Overview

This is a full-stack web application for a developer portfolio website built with modern web technologies. The application features a single-page portfolio with sections for hero introduction, about, skills, projects, and contact form. It uses a React frontend with TypeScript, Express.js backend, and PostgreSQL database for contact form submissions. The application is designed with a dark theme and responsive design using Tailwind CSS and shadcn/ui components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming and shadcn/ui component system
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

## Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API server
- **Database ORM**: Drizzle ORM for type-safe database operations and schema management
- **Session Storage**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot module replacement with Vite integration for seamless development experience
- **Error Handling**: Centralized error handling middleware with structured error responses

## Database Design
- **Database**: PostgreSQL with Drizzle schema definitions
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **Tables**: Users table for future authentication and contacts table for form submissions
- **Type Safety**: Generated TypeScript types from database schema using drizzle-zod

## Data Storage Strategy
- **Production**: PostgreSQL database via Neon serverless platform
- **Development**: In-memory storage fallback for development environments
- **Storage Interface**: Abstract storage interface allowing for easy switching between storage implementations

## Authentication & Security
- **Session Management**: Express sessions with PostgreSQL backing store
- **Input Validation**: Zod schemas for runtime type checking and validation
- **CORS**: Configured for cross-origin requests in development and production

## Development & Deployment
- **Build Process**: Separate client (Vite) and server (esbuild) build processes
- **Environment**: Dual-mode development with hot reloading and production optimization
- **Asset Management**: Vite handles client assets, Express serves API and static files in production
- **Type Checking**: Comprehensive TypeScript configuration across client, server, and shared code

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database platform
- **drizzle-orm**: TypeScript ORM with excellent type safety and performance
- **@tanstack/react-query**: Powerful data synchronization for React applications

## UI & Design System
- **@radix-ui/***: Comprehensive set of low-level UI primitives (20+ components)
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Type-safe variant API for component styling
- **clsx**: Utility for constructing className strings conditionally

## Form & Validation
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Integration layer for external validation libraries
- **zod**: TypeScript-first schema validation library
- **drizzle-zod**: Bridge between Drizzle schema and Zod validation

## Development Tools
- **tsx**: TypeScript execution environment for development
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-***: Replit-specific development enhancements
- **vite**: Next-generation frontend build tool with excellent DX

## Additional Libraries
- **date-fns**: Modern JavaScript date utility library
- **lucide-react**: Beautiful and consistent icon library
- **embla-carousel-react**: Lightweight carousel library for project showcases
- **cmdk**: Command palette component for enhanced UX