# EconWeb - EconNavigator by EconomicsWeb

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
- **Top Journal Collection**: Including premier economics journals like AER, QJE, JPE

### Optimized User Experience
- **Intuitive Navigation**: Clean header with smooth scrolling
- **Hero Section**: Compelling introduction with search functionality
- **Search Tips Optimization**: Unified search guidance interface, eliminating redundant information
- **Usage Guide**: Interactive platform navigation guidance
- **Features Showcase**: Highlighting platform core capabilities
- **Professional Footer**: Contact information and quick links

### Multi-language Support
- **5 Languages**: Chinese, English, Korean, Japanese, German
- **Complete Localization**: All UI elements and content fully translated
- **Smart Language Switching**: Seamless language switching experience

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with modern design tokens
- **UI Components**: Shadcn/ui component library
- **Icons**: Lucide React icons
- **TypeScript**: Full type safety
- **Internationalization**: Custom-built i18n solution
- **Deployment**: Optimized for Vercel

## 📦 Quick Start

### Prerequisites
- Node.js 18.0 or higher
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
│   ├── page.tsx             # Main page
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   └── admin/               # Admin backend
├── components/              # Reusable components
│   ├── ui/                  # Shadcn/ui components
│   ├── Header.tsx           # Site header
│   ├── HeroSection.tsx      # Hero section component
│   └── LanguageSwitcher.tsx # Language selector
├── lib/                     # Utility functions
│   ├── data.ts              # Resource data
│   ├── i18n.ts              # Internationalization config
│   ├── journalsI18n.ts      # Journal translations
│   └── resourcesI18n.ts     # Resource translations
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
- **Authorities**: Official institutional reports
- **Academic Papers**: Research publications and journals
- **Data & Statistics**: Economic databases
- **Online Learning**: Educational resources and courses
- **Practical Tools**: Analysis tools and calculators

### Special Sections
- **Top Journals**: Premier economics journals including AER, QJE, JPE, REStud
- **German Focus**: Specialized collection of German economic institutions and data resources

## 🧭 Usage Guide

The platform includes an interactive usage guide to help users choose the optimal navigation method:

### Guide Cards
- **Functional Navigation**: For users who know exactly what they want to do
  - Scenario-based guidance (need data → data sources, read policy → policy analysis)
- **Resource Categories**: For systematic browsing and exploration
  - Ideal for beginners and comprehensive learning paths
- **Top Journals**: For accessing high-quality academic resources
  - Direct access to prestigious economics journals
- **German Focus**: For specialized German economics research
  - Targeted resources for German economic institutions and data

### Quick Tips
- Search functionality for specific resource discovery
- Tag-based filtering for quick categorization
- Bookmark recommendations for frequent access

Each guide card is interactive and provides contextual navigation to help users efficiently find relevant economics resources.

## 🔍 Search Functionality

### Intelligent Search
- **Multi-language Search**: Support for Chinese, English, and other language keywords
- **Journal Abbreviation Recognition**: Automatic recognition of journal abbreviations like AER, QJE, JPE
- **Concept Expansion**: Smart keyword expansion (e.g., searching "macro" automatically matches "macroeconomics")
- **Regional Search**: Support for filtering resources by country and region

### Search Tips Optimization
- **Unified Interface**: Consolidated duplicate search tips into a single guidance interface
- **Smart Sorting**: Prioritize results matching multiple criteria
- **Real-time Filtering**: Support for dynamic clearing of search conditions and tag filters

## 🎨 Design Philosophy

### Visual Design
- **Minimalist Aesthetic**: Clean, uncluttered interface
- **Typography**: Carefully selected fonts with proper hierarchy
- **Color Palette**: Professional blue and indigo gradients
- **Spacing**: Generous whitespace for better readability
- **Icons**: Consistent iconography throughout the platform

### User Experience
- **Progressive Disclosure**: Information revealed as needed
- **Intuitive Navigation**: Clear pathways to resources
- **Search-First Approach**: Prominent search functionality
- **Mobile Optimization**: Touch-friendly interactions

## 🌐 Internationalization

The platform supports complete multi-language localization:

- **Chinese** (default)
- **English**
- **한국어** (Korean)
- **日本語** (Japanese)
- **Deutsch** (German)

All UI elements, including the new Usage Guide section, are fully translated. Language switching is handled via the `LanguageSwitcher` component with translations stored in `lib/i18n.ts`.

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
   - No additional configuration required for basic functionality

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
   - Include appropriate tags for filtering
   - Ensure all URLs are valid

### Customizing Content
- **Features**: Modify `features` array in `page.tsx`
- **Hero Content**: Edit hero section text directly in component

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

## 📧 Contact & Support

- **Owner**: fangxin
- **Email**: [fangin1230@gmail.com](mailto:fangin1230@gmail.com)
- **Year**: 2025

## 📄 License

© 2025 EconWeb. All rights reserved. Created by fangxin.

## 🎯 Roadmap

- [ ] Advanced search filters
- [ ] User accounts and favorites
- [ ] Resource submission system
- [ ] Newsletter integration
- [ ] Mobile app companion

## 📋 Changelog

### v1.1.0 (2025-06)
- ✨ Optimized search tips interface, removed duplicate content
- 🎨 Improved search box user experience
- 🐛 Fixed interface redundancy issues
- 📝 Updated documentation and usage guide

### v1.0.0 (2025-06)
- 🎉 Initial release
- ✨ Complete resource navigation platform
- 🌐 Multi-language support
- 📱 Responsive design

---

Built with ❤️ for the economics community 