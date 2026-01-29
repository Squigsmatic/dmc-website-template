# DMC Website Template

A professional, modern React website template for Destination Management Companies (DMCs). Built with React Router 7, TypeScript, and clean, customizable styling.

## 🎯 Features

- **Modern React Stack**: Built with React Router 7 and TypeScript
- **Responsive Design**: Mobile-first approach, looks great on all devices
- **Professional Layout**: Header, footer, navigation with mobile menu
- **Complete Page Structure**:
  - Home page with hero, services, features, destinations, testimonials
  - About Us page
  - Services overview page
  - Destinations page (placeholder)
  - Portfolio page (placeholder)
  - Contact page with form
- **Customizable Styling**: CSS variables for easy theming
- **SEO Ready**: Meta tags, semantic HTML, accessible markup
- **Fast Performance**: Optimized build with Vite

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

### Development

The site will be available at `http://localhost:5173`

## 📁 Project Structure

```
dmc-website-template/
├── app/
│   ├── components/
│   │   └── Layout.tsx          # Main layout with header/footer
│   ├── routes/
│   │   ├── home.tsx            # Home page
│   │   ├── about.tsx           # About page
│   │   ├── services.tsx        # Services page
│   │   ├── contact.tsx         # Contact page
│   │   ├── destinations.tsx    # Destinations (placeholder)
│   │   └── portfolio.tsx       # Portfolio (placeholder)
│   ├── styles/
│   │   ├── global.css          # Global styles & variables
│   │   ├── layout.css          # Header/footer styles
│   │   ├── home.css            # Home page specific styles
│   │   └── pages.css           # Generic page styles
│   └── root.tsx                # App root
├── public/                     # Static assets
└── package.json
```

## 🎨 Customization

### Brand Colors

Edit CSS variables in `app/styles/global.css`:

```css
:root {
  --color-primary: #1a365d;        /* Main brand color */
  --color-accent: #d4af37;         /* Accent/CTA color */
  --color-primary-light: #2d5a8f;  /* Light variant */
  --color-primary-dark: #0f2744;   /* Dark variant */
  /* ... more variables */
}
```

### Company Info

1. **Navigation**: Edit `app/components/Layout.tsx`
2. **Company Name**: Search for "YourDMC" and replace throughout
3. **Contact Details**: Update in `app/components/Layout.tsx` (footer) and `app/routes/contact.tsx`
4. **Meta Tags**: Update in each route file's `meta()` function

### Content

- **Home Page**: `app/routes/home.tsx` - Update hero text, services, features, testimonials
- **About Page**: `app/routes/about.tsx` - Add your company story, mission, team info
- **Services**: `app/routes/services.tsx` - Customize service offerings
- **Contact Form**: `app/routes/contact.tsx` - Connect to your backend/email service

### Images

Replace placeholder images with your own:
- Hero backgrounds
- Destination images
- Team photos
- Portfolio gallery

## 🛠️ Tech Stack

- **Framework**: React Router 7
- **Language**: TypeScript
- **Styling**: CSS (with CSS variables)
- **Build Tool**: Vite
- **Icons**: Font Awesome (CDN)
- **Fonts**: Google Fonts (Inter & Playfair Display)

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the project and deploy the `build/` directory:

```bash
npm run build
# Upload build/ folder to your hosting provider
```

## 🔧 Configuration

### Environment Variables

Create `.env` file for configuration:

```env
# Example: Email service API key
VITE_EMAIL_API_KEY=your_key_here

# Example: Google Maps API
VITE_MAPS_API_KEY=your_key_here
```

### SEO & Meta Tags

Update meta tags in each route's `meta()` function:

```typescript
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Your Page Title" },
    { name: "description", content: "Your description" },
    // Add more meta tags as needed
  ];
}
```

## 📱 Mobile Menu

The mobile menu automatically activates on screens < 768px width. Customize breakpoint in `app/styles/layout.css`.

## 🎯 Next Steps

1. Replace "YourDMC" with your company name
2. Update all contact information
3. Customize colors in `global.css`
4. Add your real content and images
5. Connect contact form to your backend
6. Add your logo
7. Set up analytics (Google Analytics, etc.)
8. Configure SEO properly
9. Test on multiple devices
10. Deploy!

## 📄 License

This template is provided as-is for your projects. Customize freely!

## 💼 Created By

DevForge Agency - Professional web development services

---

**Need help customizing this template?** Contact us at hello@devforgeagency.com
