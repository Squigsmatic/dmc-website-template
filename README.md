# Data Made Clear - Website

Professional business website for Data Made Clear - a data analytics and business intelligence company. Built with React Router 7, TypeScript, and modern web standards.

## 🎯 About Data Made Clear

Data Made Clear transforms complex data into clear, actionable insights. We provide:
- Data Analytics & Insights
- Business Intelligence & Dashboards
- Data Strategy & Consulting
- Data Visualization
- Data Engineering & Infrastructure
- AI & Machine Learning

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
│   │   ├── destinations.tsx    # Industries (placeholder)
│   │   └── portfolio.tsx       # Case studies (placeholder)
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
  --color-primary: #1a365d;        /* Navy blue - main brand color */
  --color-accent: #d4af37;         /* Gold - accent/CTA color */
  --color-primary-light: #2d5a8f;  /* Light blue variant */
  --color-primary-dark: #0f2744;   /* Dark navy variant */
}
```

### Company Info

1. **Navigation**: Edit `app/components/Layout.tsx`
2. **Company Name**: Currently "Data Made Clear" throughout
3. **Contact Details**: Update in `app/components/Layout.tsx` (footer) and `app/routes/contact.tsx`
4. **Meta Tags**: Update in each route file's `meta()` function

### Content

- **Home Page**: `app/routes/home.tsx` - Update hero text, services, features, testimonials
- **About Page**: `app/routes/about.tsx` - Add your company story, mission, team info
- **Services**: `app/routes/services.tsx` - Customize service offerings
- **Contact Form**: `app/routes/contact.tsx` - Connect to your backend/email service

### Images

Replace placeholder Unsplash images with your own:
- Hero backgrounds
- Industry/client images
- Team photos
- Case study gallery

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

### Netlify

```bash
# Build
npm run build

# Deploy build/ folder
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
# Email service API key (for contact form)
VITE_EMAIL_API_KEY=your_key_here

# Analytics
VITE_GA_TRACKING_ID=your_ga_id
```

### SEO & Meta Tags

Update meta tags in each route's `meta()` function:

```typescript
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Your Page Title | Data Made Clear" },
    { name: "description", content: "Your description" },
  ];
}
```

## 📱 Mobile Responsive

- Fully responsive design
- Mobile menu automatically activates on screens < 768px
- Customize breakpoint in `app/styles/layout.css`

## 🎯 Next Steps

1. ✅ Branding complete (Data Made Clear)
2. ✅ Core pages implemented
3. ⏳ Add real content and images
4. ⏳ Connect contact form to backend/email service
5. ⏳ Add logo and brand assets
6. ⏳ Set up analytics
7. ⏳ Add case studies/portfolio
8. ⏳ Test on multiple devices
9. ⏳ Deploy to production

## 📄 License

Copyright © 2026 Data Made Clear. All rights reserved.

## 💼 Built By

DevForge Agency - Professional web development services
www.devforgeagency.com

---

**Need customization help?** Contact: matthew@devforgeagency.com
