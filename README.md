# EconNav - Economics Navigation Platform

A modern, elegant economics resource navigation platform built with Next.js 14, featuring a clean iPhone-inspired design and comprehensive resource curation.

## 🌟 Features

### Modern Design
- **iPhone-inspired UI**: Clean, minimal, and elegant design language
- **Responsive Design**: Optimized for all screen sizes and devices
- **Smooth Animations**: Micro-interactions and transitions for enhanced UX
- **Dark Mode Ready**: Built-in support for light/dark themes

### Comprehensive Resource Collection
- **Curated Economics Resources**: Hand-selected high-quality resources
- **Smart Search & Filtering**: Advanced search with tag-based filtering
- **Multiple Categories**: Organized by both function and resource type
- **German Economics Focus**: Special section for German economic institutions

### User Experience
- **Intuitive Navigation**: Clean header with smooth scrolling
- **Hero Section**: Compelling introduction with search functionality
- **Features Showcase**: Highlight platform capabilities
- **FAQ Section**: Comprehensive answers to common questions
- **Professional Footer**: Contact information and quick links

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with modern design tokens
- **UI Components**: Shadcn/ui component library
- **Icons**: Lucide React icons
- **TypeScript**: Full type safety
- **Deployment**: Optimized for Vercel

## 📦 Quick Start

### Prerequisites
- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd EconWeb
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Project Structure

```
EconWeb/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Main homepage
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   └── admin/               # Admin section
├── components/              # Reusable components
│   ├── ui/                  # Shadcn/ui components
│   ├── Header.tsx           # Site header
│   ├── HeroSection.tsx      # Hero component
│   └── LanguageSwitcher.tsx # Language selector
├── lib/                     # Utility functions
│   ├── data.ts              # Resource data
│   └── i18n.ts              # Internationalization
├── public/                  # Static assets
└── hooks/                   # Custom React hooks
```

## 📊 Resource Categories

### Functional Navigation
- **Find Data**: Economic databases and statistical resources
- **Read Policy**: Policy papers and government reports
- **Do Research**: Academic papers and research tools
- **Watch Market**: Market analysis and industry reports

### Resource Types
- **Authorities**: Official reports from institutions
- **Academic Papers**: Research publications and journals
- **Data & Statistics**: Economic databases
- **Online Learning**: Educational resources and courses
- **Practical Tools**: Analysis tools and calculators

## 🎨 Design Philosophy

### Visual Design
- **Minimalist Aesthetic**: Clean, uncluttered interface
- **Typography**: Carefully selected fonts with proper hierarchy
- **Color Palette**: Professional blue and indigo gradients
- **Spacing**: Generous whitespace for better readability
- **Icons**: Consistent iconography throughout

### User Experience
- **Progressive Disclosure**: Information revealed as needed
- **Intuitive Navigation**: Clear pathways to resources
- **Search-First Approach**: Prominent search functionality
- **Mobile Optimization**: Touch-friendly interactions

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Configure Settings**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Environment Variables**
   - None required for basic functionality

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 📝 Content Management

### Adding New Resources

1. **Edit data file**
   ```typescript
   // lib/data.ts
   export const economicsCategories = {
     // Add your resources here
   }
   ```

2. **Update categories**
   - Add new resource objects with required fields
   - Include proper tags for filtering
   - Ensure all URLs are valid

### Customizing Content

- **FAQ Section**: Update `faqItems` array in `page.tsx`
- **Features**: Modify `features` array in `page.tsx`
- **Hero Content**: Edit hero section text directly in component

## 🌐 Internationalization

The platform supports multiple languages:

- **English** (default)
- **Chinese** (中文)
- **Korean** (한국어)
- **Japanese** (日本語)

Language switching is handled via the `LanguageSwitcher` component.

## 📧 Contact & Support

- **Owner**: fangxin
- **Email**: [fangin1230@gmail.com](mailto:fangin1230@gmail.com)
- **Year**: 2025

## 📄 License

© 2025 EconNav. All rights reserved. Created by fangxin.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 🎯 Roadmap

- [ ] Advanced search filters
- [ ] User accounts and favorites
- [ ] Resource submission system
- [ ] Newsletter integration
- [ ] Mobile app companion

---

Built with ❤️ for the economics community 