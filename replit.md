# ORIZMA E-Commerce Website

## Overview
ORIZMA is a premium television e-commerce website featuring a stunning, futuristic, ultra-modern design with a dark minimalistic theme. The application showcases ORIZMA's complete product catalog with 16 TV models across 4 sizes (32", 43", 55", 65") and 4 tiers (PRO, PRIME, MAX, GT).

**Brand Tagline**: "CRAFTED TO ENDURE"

## Recent Changes (November 9, 2025)

### Product Images & Visuals
- Generated 12 unique, professional product images for each TV model
- Each image features a TV displaying unique, beautiful scenery (tropical beaches, mountains, zen gardens, aurora borealis, savannas, coral reefs, waterfalls, fjords, etc.)
- No heavy lightning effects - focused on clean, well-lit product photography with subtle ambient lighting
- Updated productData.ts to assign unique images to all 12 products (no image repetition)

### Enhanced Product Card Animations
- Added smooth hover animation to ProductCard component
- Hover effect creates a subtle gradient glow (blue to gold) around the TV image
- Enhanced gradient overlay intensifies on hover with smooth 700ms transition
- Maintains the premium, futuristic aesthetic without overwhelming the design

### TV Comparison Feature
- Created new Compare page (`/compare`) for side-by-side TV comparison
- Users can select any 2 TVs from dropdown menus to compare
- Comparison displays: product images, prices, screen sizes, resolutions, tiers, features, and apps
- Prevents selecting the same TV twice
- Includes "Clear Selection" button and intuitive empty state messaging
- Added "Compare" link to main navigation

## Previous Changes (November 8, 2025)

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
- **Products** (`/products` or `/products/:size`): Product grid with filtering by size, unique product images with hover effects
- **ProductDetail** (`/product/:id`): Detailed product view with specifications, features carousel, add to cart
- **Compare** (`/compare`): Side-by-side TV comparison with dropdown selectors for any 2 models
- **About** (`/about`): Brand story and company information (to be implemented)
- **Contact** (`/contact`): Contact form and information (to be implemented)

## Product Catalog (12 Models with Unique Images)

### 32" Series (HD 1366x768)
- **ORT32 PRO** - ₹15,999 - Image: Tropical sunset beach
- **ORT32 PRIME** - ₹16,999 - Image: Mountain landscape
- **ORT32 MAX** - ₹18,999 - Image: Japanese zen garden
- **ORT32 GT** - ₹20,999 - Image: Aurora borealis

### 43" Series (FHD 1920x1080)
- **ORT43 PRO** - ₹30,990 - Image: African savanna sunset
- **ORT43 PRIME** - ₹31,990 - Image: Underwater coral reef
- **ORT43 MAX** - ₹33,990 - Image: Forest waterfall
- **ORT43 GT** - ₹35,990 - Image: Iceland waterfall

### 55" Series (4K UHD 3840x2160)
- **ORT55 MAX** - ₹55,999 - Image: Grand Canyon sunset
- **ORT55 GT** - ₹58,999 - Image: Maldives paradise

### 65" Series (4K UHD 3840x2160)
- **ORT65 MAX** - ₹65,999 - Image: Swiss Alps panorama
- **ORT65 GT** - ₹68,999 - Image: New Zealand fjords

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
- Product card hover: Subtle gradient glow (primary to accent) with 700ms smooth transition
- Glassmorphism with backdrop-blur
- Smooth animations with Framer Motion
- Neon gradient borders and text

## User Preferences
- Dark mode is the default and primary theme
- Futuristic, premium, high-tech aesthetic
- Minimal use of borders, emphasis on elevation and glow
- Professional product presentation with clean layouts
- Unique product imagery with natural scenery (no heavy lightning effects)
- Smooth, subtle hover animations for premium feel

## Next Steps
1. ✅ Database schema and API routes created
2. ✅ Products migrated to database  
3. ✅ Unique product images generated and integrated
4. ✅ Product card hover animations implemented
5. ✅ TV comparison feature created
6. ⏳ Shopping cart functionality
7. ⏳ Checkout flow implementation
8. ⏳ Admin dashboard for product/order management
9. ⏳ About and Contact pages
10. ⏳ Product search and filtering
11. ⏳ Testing and deployment
