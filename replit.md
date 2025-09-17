# Overview

This is a modern full-stack portfolio website built for Fastino Mateteva, an AI Research Scientist and Machine Learning graduate. The application showcases professional experience, projects, skills, and achievements in artificial intelligence and language technology. The portfolio is built with React on the frontend and Express.js on the backend, featuring a clean, responsive design using shadcn/ui components and Tailwind CSS.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side application is built with React 18 using TypeScript and follows a component-based architecture. The frontend uses Vite for development and building, with React Router (wouter) for navigation. The UI is constructed using shadcn/ui components built on top of Radix UI primitives, providing a consistent and accessible design system. Styling is handled through Tailwind CSS with CSS custom properties for theming.

**Key Frontend Components:**
- **Component Structure**: Modular React components organized by feature (hero, about, skills, projects, experience, achievements, contact)
- **State Management**: React Query (TanStack Query) for server state management with custom query client configuration
- **Styling System**: Tailwind CSS with custom CSS variables for theming, using the "new-york" style variant from shadcn/ui
- **Form Handling**: React Hook Form with Zod validation schemas for type-safe form processing
- **Icons**: Lucide React for consistent iconography

## Backend Architecture
The server-side application uses Express.js with TypeScript, following a clean separation of concerns with dedicated modules for routing, storage, and Vite integration during development.

**Key Backend Components:**
- **Express Server**: RESTful API structure with middleware for JSON parsing, CORS handling, and request logging
- **Storage Layer**: Abstracted storage interface with in-memory implementation, designed to be easily replaceable with database persistence
- **Development Integration**: Vite middleware integration for hot module replacement during development
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Data Storage Solutions
The application currently uses an in-memory storage implementation with plans for PostgreSQL integration via Drizzle ORM. The storage layer is abstracted through interfaces to allow easy database migration.

**Database Schema Design:**
- **User Management**: Basic user entity with UUID primary keys, username/password authentication
- **Drizzle Integration**: Configured for PostgreSQL with Neon Database serverless connections
- **Migration System**: Drizzle Kit for schema migrations and database management

## Authentication and Authorization
The current implementation includes basic user schema and storage interfaces for authentication, though full authentication flow is not yet implemented. The system is designed to support session-based authentication with PostgreSQL session storage.

# External Dependencies

## Core Framework Dependencies
- **React 18**: Frontend framework with TypeScript support
- **Express.js**: Backend web application framework
- **Vite**: Frontend build tool and development server
- **Node.js**: Server-side JavaScript runtime

## Database and ORM
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL database provider
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## UI and Styling
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Low-level UI primitives for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets for social media and technology logos

## Development Tools
- **TypeScript**: Static type checking for JavaScript
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing tool with Autoprefixer

## State Management and Forms
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form handling with minimal re-renders
- **Zod**: TypeScript-first schema validation
- **Wouter**: Lightweight React router alternative

## Additional Libraries
- **date-fns**: Date manipulation and formatting utility
- **clsx & tailwind-merge**: Utility for conditional CSS class names
- **class-variance-authority**: Utility for component variant management
- **cmdk**: Command palette component for search functionality