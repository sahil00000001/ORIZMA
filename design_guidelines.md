# ORIZMA eCommerce Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium tech brands like Apple's product showcases, Samsung's cinematic presentations, and Tesla's futuristic interfaces, combined with luxury eCommerce experiences from brands like Bang & Olufsen and Sony's premium line.

**Core Principle**: Luxury meets innovation — cinematic, elegant, and immersive with high-tech aesthetic.

## Typography System
- **Primary Font**: Space Grotesk or Urbanist (futuristic, clean, modern)
- **Headings**: Bold weights (700-800), large scale for hero (text-5xl to text-7xl)
- **Body**: Regular/Medium weights (400-500), text-base to text-lg
- **Product Titles**: Semi-bold (600), text-2xl to text-4xl
- **Feature Labels**: Medium (500), uppercase tracking-wide, text-sm

## Layout & Spacing System
**Tailwind spacing units**: 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 to gap-12 for grids
- Content max-width: max-w-7xl for full sections, max-w-4xl for text content

## Homepage Structure

### Hero Section (100vh)
Full-viewport immersive experience with looping video background showing glowing ORIZMA TVs in cinematic environments. Center-aligned content with:
- Large ORIZMA logo with subtle glow effect
- Tagline "CRAFTED TO ENDURE" in elegant spacing
- Premium "Shop Now" CTA button with animated glow border
- Buttons over video: semi-transparent backdrop blur (backdrop-blur-md bg-white/10)

### Navigation Bar
Transparent sticky header (fixed top-0) with:
- Minimal navigation items: Home, Products, About, Contact
- On scroll: transitions to solid background with glowing underline hover effects
- Logo positioned left, nav items right

### Product Categories Grid (4-column on desktop, 2-column tablet, 1-column mobile)
Category cards for 32", 43", 55", 65" with:
- Large product imagery showing TVs in premium settings
- Hover zoom animation (scale-105 transition)
- "View Models" button with neon border glow
- Model count indicator per category

### Feature Highlights Section
Horizontal scrolling showcase featuring:
- Animated icons for: Bezel-less Design, Voice Assistant, Dolby Audio, 4K UHD, Dual Band Wi-Fi
- Short animated text reveals
- Card-based layout with glassmorphism effect

### Brand Story Section
Two-column layout (text left, lifestyle image right) with:
- Fade-in animated paragraphs about precision, performance, trust
- Premium lifestyle photography with grayscale overlay and subtle gradient
- "About ORIZMA" content integrated naturally

### Footer
Minimalist design with:
- Contact information (email, website, address)
- Social media icons (monochrome with glow on hover)
- Quick links and newsletter signup
- Brand tagline

## Product Detail Page

### Product Hero
Large product image (60% viewport width) with:
- Zoom on hover functionality
- Model number, price, tier badge prominently displayed
- Glowing separator lines between sections

### Feature Cards Section
Grid layout (3-column desktop, 2-column tablet, 1-column mobile):
- Slide-in animation on scroll
- Cards for: Built-in Wi-Fi, BT Remote, Bezel-less Design, Voice Assistant, etc.
- Icon + title + brief description format

### App Support Carousel
Horizontal scrolling showcase of supported apps:
- Colorful app logos: Netflix, Prime Video, YouTube, Sony Liv, Google Play, Google TV
- Glowing card effect on hover
- Smooth infinite scroll animation

### Specifications Section
Tabular presentation with:
- Screen size, resolution, features in organized rows
- Collapsible detailed specs
- Comparison link to other models

### Floating CTA
Sticky "Buy Now" button that appears on scroll:
- Fixed bottom-right position
- Animated glow pulse effect
- Smooth entrance animation

## Product Comparison Tool
Side-by-side comparison grid:
- Select up to 3 models to compare
- Highlight differences with accent colors
- Feature checkmarks and spec differences clearly visible

## Component Library

### Buttons
- Primary CTA: Solid with neon glow border animation on hover
- Secondary: Outline with fill transition
- Buttons on images: backdrop-blur-md with semi-transparent background

### Cards
- Glassmorphism effect: backdrop-blur-lg with subtle border glow
- Hover state: lift effect (translate-y-1) with enhanced glow
- Product cards: image + title + price + quick view button

### Navigation
- Sticky with transparency-to-solid transition
- Glowing underline on hover (gradient border-b)
- Mobile: hamburger menu with slide-in panel

## Animation Guidelines
- **Page Transitions**: Smooth fade with directional slide (duration-500)
- **Scroll Triggers**: Fade-in and slide-up for sections (intersection observer)
- **Hover Effects**: Glow intensification, subtle scale transforms (scale-105)
- **Micro-animations**: Background gradient movement (very subtle), icon pulse on feature cards
- **Product Images**: Gentle tilt parallax on mouse move (product detail pages only)
- Keep animations smooth and premium—avoid excessive motion

## Images

### Hero Section
**Large Hero Image/Video**: Yes - Full-width looping video background showing ORIZMA TVs in cinematic, premium environments (modern living rooms, entertainment spaces) with dramatic lighting and glowing screens. Fallback: High-resolution image of flagship 65" model with neon accent lighting.

### Product Category Images
High-quality lifestyle shots of each TV size in premium settings:
- 32" series: Bedroom or kitchen environment
- 43" series: Cozy living room setup  
- 55" series: Modern entertainment center
- 65" series: Luxury home theater

### Product Detail Images
- Hero: Large product shot on pure black background with subtle glow/reflection
- Gallery: Multiple angles showing bezel-less design, remote control, wall-mounted view
- Context shots: TV in premium interior settings

### Brand Story Section
Premium lifestyle photography showing ORIZMA TVs in sophisticated interiors, grayscale with gradient overlay to maintain dark aesthetic.

### Feature Icons
Use icon library (Heroicons) for: Wi-Fi, Bluetooth, Display, Audio, Voice Control, Wall Mount, Apps

## Accessibility
- Maintain WCAG AA contrast ratios even with dark theme
- Focus states with visible glow rings
- Keyboard navigation for all interactive elements
- Alt text for all product images
- ARIA labels for animated/interactive components