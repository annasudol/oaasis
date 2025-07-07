# Oaasis - Product Management Dashboard

🌐 **[Live Demo](https://oaasis.vercel.app/)**

A modern, feature-rich product management dashboard built with Next.js, React, and TypeScript. Oaasis provides an intuitive interface for managing products, categories, and inventory with advanced search and filtering capabilities.

## 🚀 Features

- **Product Dashboard**: Comprehensive product overview with categorized views
- **Advanced Search**: Real-time search functionality across all products
- **Interactive UI**: Modern interface with drag-and-drop capabilities
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modular Components**: Reusable UI components with Radix UI

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with Turbopack
- **Language**: TypeScript
- **Styling**: CSS Modules
- **UI Components**: Radix UI primitives

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/annasudol/oaasis_io.git
cd oaasis_io
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🌍 Live Demo

The application is deployed and available at: **[https://oaasis.vercel.app/](https://oaasis.vercel.app/)**

## 🏗️ Project Structure

```
oaasis_io/
├── app/                    # Next.js app directory
│   ├── favicon.ico        # App favicon
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.module.css    # Page-specific styles
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── shared/            # Shared components
│   │   ├── app-sidebar/   # Application sidebar
│   │   ├── dropdown-btn/  # Dropdown button component
│   │   ├── nav-main/      # Main navigation
│   │   ├── nav-sidebar/   # Sidebar navigation
│   │   ├── nav-user/      # User navigation
│   │   ├── product-dashboard/ # Product dashboard
│   │   ├── product-list/  # Product list component
│   │   └── search-bar/    # Search functionality
│   └── ui/               # UI primitives (Radix UI)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── icons/            # Icon assets
│   └── *.svg             # SVG assets
├── tests/                # Test files
├── components.json       # Component configuration
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies
├── playwright.config.ts  # E2E test configuration
├── prettier.config.js    # Code formatting
└── tsconfig.json         # TypeScript configuration
```

## 🧩 Key Components

- **ProductDashboard**: Main dashboard interface with tabbed navigation
- **ProductList**: Sortable and filterable product listings
- **SearchBar**: Real-time search with advanced filtering
- **Navigation**: Sidebar and main navigation components
- **UI Components**: Reusable components built on Radix UI

## 📝 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🧪 Testing

The project includes Playwright for end-to-end testing:

```bash
npx playwright test
```

