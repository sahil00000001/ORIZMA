# ORIZMA E-Commerce Website

## Overview
ORIZMA is a premium television e-commerce website featuring a stunning, futuristic, ultra-modern design with a dark minimalistic theme. The application showcases ORIZMA's complete product catalog with 16 TV models across 4 sizes (32", 43", 55", 65") and 4 tiers (PRO, PRIME, MAX, GT).

**Brand Tagline**: "CRAFTED TO ENDURE"

## Recent Changes (November 8, 2025)

### Database & Backend Integration
- Created PostgreSQL database schema with three tables: `products`, `cart_items`, and `orders`
- Implemented full CRUD API routes for products, cart management, and order processing
- Migrated all 16 ORIZMA TV models from mock data to PostgreSQL database
- Using neon-http driver for database connectivity to avoid WebSocket issues
- Created seed endpoint (/api/seed) to populate database with product catalog

### Frontend Updates
- Updated Products.tsx and ProductDetail.tsx to fetch data from API using React Query
- Maintained existing futuristic design with neon blue/gold gradient aesthetics
- Added loading states for better UX during data fetching
- Fixed Link component issues in Navigation and Footer to remove nested anchor warnings

### Technical Stack
- **Frontend**: React + Vite, TailwindCSS, shadcn/ui, Framer Motion, Wouter (routing), TanStack Query
- **Backend**: Express.js, Drizzle ORM
- **Database**: PostgreSQL (Neon)
- **Design**: Dark theme with neon gradients, glassmorphism effects, Space Grotesk font

## Project Architecture

### Database Schema
- **products**: Full ORIZMA catalog (id, name, price, image, size, resolution, tier, features[])
- **cart_items**: Shopping cart persistence (id, productId, quantity, sessionId, createdAt)
- **orders**: Order history (id, customerInfo, items, totalAmount, status, createdAt)

### API Routes
- `GET /api/products` - List all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin)
- `PATCH /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)
- `GET /api/cart` - Get cart items
- `POST /api/cart` - Add to cart
- `PATCH /api/cart/:id` - Update cart item quantity
- `DELETE /api/cart/:id` - Remove from cart
- `DELETE /api/cart` - Clear cart
- `POST /api/orders` - Create order
- `GET /api/orders` - List orders (admin)
- `GET /api/orders/:id` - Get order
- `PATCH /api/orders/:id` - Update order status (admin)
- `POST /api/seed` - Seed database with products

### Frontend Pages
- **Home** (`/`): Hero section, category cards (32", 43", 55", 65"), premium features, brand story
- **Products** (`/products` or `/products/:size`): Product grid with filtering by size
- **ProductDetail** (`/product/:id`): Detailed product view with specifications, features carousel, add to cart
- **About** (`/about`): Brand story and company information (to be implemented)
- **Contact** (`/contact`): Contact form and information (to be implemented)

## Product Catalog

### 32" Series (HD 1366x768)
- **ORT32 PRO** - ₹15,999
- **ORT32 PRIME** - ₹16,999
- **ORT32 MAX** - ₹18,999
- **ORT32 GT** - ₹20,999

### 43" Series (FHD 1920x1080)
- **ORT43 PRO** - ₹30,990
- **ORT43 PRIME** - ₹31,990
- **ORT43 MAX** - ₹33,990
- **ORT43 GT** - ₹35,990

### 55" Series (4K UHD 3840x2160)
- **ORT55 PRO** - ₹55,990
- **ORT55 PRIME** - ₹56,990
- **ORT55 MAX** - ₹58,990
- **ORT55 GT** - ₹60,990

### 65" Series (4K UHD 3840x2160)
- **ORT65 PRO** - ₹75,990
- **ORT65 PRIME** - ₹76,990
- **ORT65 MAX** - ₹78,990
- **ORT65 GT** - ₹80,990

## Design System

### Colors (defined in index.css)
- **Primary**: Electric Blue (210° 100% 60%) - Main brand color, CTAs, accents
- **Accent**: Gold (45° 100% 55%) - Secondary highlights, premium feel
- **Background**: Dark charcoal (#0a0a0a) - Main background
- **Card**: Slightly elevated dark (#111111) - Surface elements
- **Foreground**: Near white (#fafafa) - Primary text

### Typography
- **Font Family**: Space Grotesk (Google Fonts)
- Modern, geometric, tech-forward aesthetic

### Effects
- Glow effects on hover/focus states
- Glassmorphism with backdrop-blur
- Smooth animations with Framer Motion
- Neon gradient borders and text

## User Preferences
- Dark mode is the default and primary theme
- Futuristic, premium, high-tech aesthetic
- Minimal use of borders, emphasis on elevation and glow
- Professional product presentation with clean layouts

## Next Steps
1. ✅ Database schema and API routes created
2. ✅ Products migrated to database  
3. ⏳ Frontend integrated with API
4. ⏳ Shopping cart functionality
5. ⏳ Checkout flow implementation
6. ⏳ Admin dashboard for product/order management
7. ⏳ About and Contact pages
8. ⏳ Product search and filtering
9. ⏳ Testing and deployment
