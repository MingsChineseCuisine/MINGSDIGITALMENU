# Replit.md

## Overview

This is a luxurious, royal-themed restaurant menu web application called "Mings Chinese Cuisine". It features an elegant, interactive UI with deep midnight blue and golden accents, designed to provide a premium dining experience through a sophisticated menu browsing and ordering system.

## User Preferences

Preferred communication style: Simple, everyday language.
UI/UX Preference: Modern, authentic design with sophisticated animations and orange, black, white brand theming. Focus on easy-to-use features like one-click rating system.

## System Architecture

### Frontend Architecture

- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS with custom royal theme variables
- **UI Components**: Radix UI primitives with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth transitions and interactions

### Backend Architecture

- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: PostgreSQL-based sessions using connect-pg-simple
- **API**: RESTful API with JSON responses

### Key Design Decisions

1. **Monorepo Structure**: Client, server, and shared code in one repository for easier development
2. **TypeScript Throughout**: Full type safety across frontend, backend, and shared schemas
3. **Component-Based UI**: Reusable components following shadcn/ui patterns
4. **Premium Royal Theme**: Enhanced luxury branding with sophisticated animations, premium gradients, and multi-layered visual effects
5. **Advanced Animation System**: Framer Motion with custom keyframes for premium user experience

## Key Components

### Database Schema (shared/schema.ts)

- **MongoDB Integration**: Connected to MongoDB Atlas with production database
- **Menu Items**: Products with name, description, price, category, veg/non-veg status, images, restaurantId, and availability
- **Cart Items**: User's selected items with quantities and timestamps
- **Users**: Basic user authentication schema with timestamps
- **ObjectId Support**: All database operations use MongoDB ObjectId for proper document identification

### Frontend Components

- **Welcome Page**: Landing page with restaurant information and royal branding
- **Menu Page**: Interactive menu browser with category filtering and search
- **Dish Cards**: Individual menu item displays with add-to-cart functionality
- **UI Components**: Complete shadcn/ui component library for consistent styling

### Backend Routes

- **Menu Management**: GET endpoints for retrieving menu items by category or ID
- **Cart Management**: CRUD operations for shopping cart functionality
- **Error Handling**: Centralized error handling middleware

## Data Flow

1. **Menu Display**: Frontend fetches menu items from `/api/menu-items` endpoint
2. **Category Filtering**: Client-side filtering by category and dietary preferences
3. **Search Functionality**: Real-time search across item names and descriptions
4. **Cart Operations**: Add/remove items via `/api/cart` endpoints
5. **State Management**: TanStack Query handles caching and synchronization

## External Dependencies

### Frontend Dependencies

- **UI Framework**: React, React DOM
- **State Management**: TanStack React Query
- **Styling**: Tailwind CSS, Radix UI primitives
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Routing**: Wouter
- **Utilities**: clsx, class-variance-authority

### Backend Dependencies

- **Server**: Express.js
- **Database**: Drizzle ORM with @neondatabase/serverless
- **Validation**: Zod schemas
- **Session Management**: connect-pg-simple
- **Development**: tsx for TypeScript execution

### Development Tools

- **Build**: Vite, esbuild
- **Database**: Drizzle Kit for migrations
- **Linting**: TypeScript compiler checks
- **Replit Integration**: Cartographer and error overlay plugins

## Deployment Strategy

### Development

- **Dev Server**: `npm run dev` runs both frontend (Vite) and backend (tsx)
- **Database**: Uses MongoDB database via MONGODB_URI environment variable
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend

### Production - Replit

- **Build Process**:
  1. `vite build` compiles frontend to `dist/public`
  2. `esbuild` bundles backend to `dist/index.js`
- **Deployment**: Single Node.js process serving both static files and API
- **Database**: Production MongoDB database required

### Production - Vercel (New)

- **Frontend**: Static files built to `dist/public` and served via CDN
- **Backend**: Serverless functions in `api/` directory using Express.js
- **Database**: MongoDB Atlas with external connections enabled
- **Configuration**: `vercel.json` handles routing and build configuration

### Configuration

- **Environment Variables**: MONGODB_URI for database connection
- **Static Files**: Frontend served as static assets
- **API Routes**: Backend handles `/api/*` routes, frontend handles client-side routing
- **Vercel Setup**: Serverless architecture with separate frontend/backend deployment

## Recent Changes (August 2025)

- ✅ **Vercel Deployment Preparation**: Added `vercel.json`, serverless API functions, and deployment documentation
- ✅ **Serverless API Structure**: Created `/api/menu-items/` and `/api/cart/` functions for Vercel compatibility
- ✅ **MongoDB Integration**: Fixed database name ("mingsdb") and collection references for Vercel
- ✅ **Environment Configuration**: Added `.env.example` and MongoDB URI setup with proper error handling
- ✅ **Deployment Guide**: Comprehensive `DEPLOYMENT.md` with step-by-step instructions
- ✅ **Frontend Successfully Deployed**: Vite build working correctly on Vercel with proper asset routing
- ✅ **API Dependencies**: Added `api/package.json` to ensure MongoDB driver availability in serverless functions
- ✅ **Replit Migration Completed**: Successfully migrated from Replit Agent to Replit environment (July 15, 2025)
- ✅ **Database Structure Restructured**: Created separate collections for each category (Chef Special, Starters, Soups, Main Course, Rice & Biryani, Bread, Desserts, drinks, Combos)
- ✅ **Storage System Updated**: Modified MongoStorage to work with category-based collections instead of single menuitems collection
- ✅ **Data Seeding**: Populated all category collections with 19 menu items total including Chef Special category
- ✅ **Database Cleanup**: Removed old categories and menuitems collections as requested
- ✅ **Auto-Detection System**: Implemented automatic collection creation for new categories
- ✅ **Vercel API Functions Updated**: Fixed serverless functions to use new category-based collection structure
- ✅ **Category Mapping**: Updated frontend-backend category mapping for proper data display
- ✅ **MongoDB Connection Fix**: Provided complete solution for Vercel environment variable configuration
- ✅ **Google Review Integration**: Added comprehensive Google review system with direct link to restaurant's Google listing (https://g.co/kgs/7e6k6y2)
- ✅ **Royal-Themed Review Components**: Implemented both full Google review section on welcome page and compact header review button on menu page
- ✅ **Replit Environment Migration**: Successfully completed migration from Replit Agent to standard Replit environment (August 4, 2025)
- ✅ **Brand Redesign Complete**: Implemented new orange, black, and white restaurant theme (August 13, 2025)
- ✅ **Logo Integration**: Added restaurant logo in circular white background with elegant shadow effects
- ✅ **One-Click Rating System**: Implemented quick 5-star Google rating functionality for instant customer feedback
- ✅ **Social Media Integration**: Added Instagram and Facebook icons in top-right corner with hover animations
- ✅ **Typography Updates**: Changed all main text to white for better contrast against orange background
- ✅ **Enhanced User Experience**: Streamlined rating process with interactive star animations
- ✅ **Vercel Audio Fix**: Resolved welcome audio playback issues on Vercel deployment with enhanced error handling, proper file serving headers, HTML preloading, and comprehensive fallback mechanisms (August 13, 2025)
- ✅ **Replit Migration Completed**: Successfully migrated from Replit Agent to Replit environment with full functionality (August 14, 2025)
- ✅ **Mobile Responsiveness Enhanced**: Improved text sizing and responsive design for better mobile experience (August 14, 2025)
- ✅ **Contact Information Updated**: Updated phone number to 75069 69333 and address to Shop no 2&3, ganga godavari apartment, katemanivali naka, Prabhuram Nagar, Kalyan East, Thane, Kalyan, Maharashtra 421306 (August 14, 2025)
- ✅ **Golden Star Rating**: Changed star colors to golden (#FFD700) for better visual appeal (August 14, 2025)
- ✅ **Content Updates**: Updated heritage section with new description and improved typography (August 14, 2025)
- ✅ **Media Loading Enhancement**: Implemented comprehensive media preloader with multiple fallback sources for audio/video across all deployment environments (August 14, 2025)
- ✅ **Cross-Platform Audio System**: Enhanced audio loading with intelligent source detection for Replit, Vercel, desktop, and mobile environments (August 14, 2025)
- ✅ **Video Playback Optimization**: Added multiple video sources and proper error handling for seamless playback across all platforms (August 14, 2025)
- ✅ **Replit Migration Completed**: Successfully migrated from Replit Agent to Replit environment with all functionality intact (August 15, 2025)
- ✅ **UI Improvements**: Replaced glowing particle background with solid white circles and moved buttons higher for better visual layout (August 15, 2025)
- ✅ **Background Enhancement**: Removed floating particles completely and changed page background from black to clean white for better contrast (August 15, 2025)
- ✅ **Replit Migration Completed**: Successfully migrated from Replit Agent to Replit environment with full functionality (August 16, 2025)
- ✅ **Menu Sorting Implementation**: Added custom sorting logic for menu items across all categories - Veg items first, then Chicken, then Prawns, then others, applied to both Replit and Vercel deployments (August 16, 2025)
- ✅ **Header Logo Update**: Replaced "Mings Chinese Cuisine" text with centered restaurant logo image in menu page header (August 16, 2025)
- ✅ **Header Enhancement**: Increased logo size and removed black border line for cleaner appearance (August 16, 2025)
- ✅ **Typography Update**: Changed category names and menu item names to use Open Sans font while keeping descriptions unchanged (August 16, 2025)
- ✅ **Hamburger Menu Font Update**: Applied Open Sans font to all hamburger menu text including "Menu Categories", category buttons, and "Restaurant Information" section (August 16, 2025)
- ✅ **Restaurant Information Update**: Updated address to "Shop no 2&3, ganga godavari apartment, katemanivali naka, Prabhuram Nagar, Kalyan East, Thane, Kalyan, Maharashtra 421306" and phone number to "07506969333" (August 16, 2025)
- ✅ **Enhanced Menu Sorting**: Updated sorting logic to prioritize vegetarian items before non-vegetarian items within each category for both Replit and Vercel deployments (August 16, 2025)
- ✅ **Replit Migration Completed**: Successfully migrated from Replit Agent to Replit environment with full functionality and improved footer layout (August 19, 2025)
- ✅ **Footer Layout Enhancement**: Fixed mobile and desktop footer spacing with proper positioning of website URL and developer credit, improved typography and responsive design (August 19, 2025)
- ✅ **Button Animation Optimization**: Implemented proper lazy animations with staggered timing for social media buttons, menu button, and rating section (August 19, 2025)
- ✅ **Social Media Button Fix**: Resolved orange state persistence issue when clicking social media buttons and returning to page (August 19, 2025)
- ✅ **Performance Optimization**: Added hardware acceleration, proper focus management, and animation optimizations for smooth user experience (August 19, 2025)
- ✅ **Replit Migration Completed**: Successfully migrated from Replit Agent to Replit environment with full functionality and improved footer layout (August 19, 2025)
- ✅ **Footer Layout Enhancement**: Fixed mobile and desktop footer spacing with proper positioning of website URL and developer credit, improved typography and responsive design (August 19, 2025)

- ✅ **Background Video Replacement**: Replaced welcome page background video with elegant static image background for improved performance and visual appeal (August 26, 2025)
- ✅ **Replit Migration Completed**: Successfully migrated from Replit Agent to Replit environment with background image optimization (August 26, 2025)

- ✅ **Background Video Replacement**: Replaced welcome page background video with elegant static image background for improved performance and visual appeal (August 26, 2025)
- ✅ **Replit Migration Completed**: Successfully migrated from Replit Agent to Replit environment with background image optimization (August 26, 2025)
- ✅ **Welcome Page Redesign**: Completely redesigned welcome page to match exact carbon copy of provided design with Ming's logo, social media icons, menu button, rating section, address and contact information (August 26, 2025)

The application follows a traditional client-server architecture with a clear separation between frontend and backend, unified by shared TypeScript schemas and a modern orange, black, and white brand theme throughout the user experience. Now supports both Replit and Vercel deployment strategies with integrated customer review system, one-click rating functionality, robust audio/video playback optimized for all deployment environments including mobile devices, consistent menu item sorting across all platforms, and an elegant static background image for enhanced performance with a completely redesigned welcome page matching the exact specifications provided.
