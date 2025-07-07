# Oaasis - Product Management Dashboard

A modern, feature-rich product management dashboard built with Next.js, React, and TypeScript. Oaasis provides an intuitive interface for managing products, categories, and inventory with advanced search and filtering capabilities.

## 🚀 Features

- **Product Dashboard**: Comprehensive product overview with categorized views
- **Advanced Search**: Real-time search functionality across all products
- **Interactive UI**: Modern interface with drag-and-drop capabilities
- **Responsive Design**: Optimized for desktop and mobile devices
- **Data Visualization**: Charts and analytics powered by Recharts
- **Dark/Light Theme**: Theme switching with next-themes
- **Modular Components**: Reusable UI components with Radix UI

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS Modules
- **UI Components**: Radix UI primitives
- **Icons**: Tabler Icons & Lucide React
- **Data Tables**: TanStack Table
- **Charts**: Recharts
- **Drag & Drop**: @dnd-kit
- **Theming**: next-themes
- **Validation**: Zod

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
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

## 🏗️ Project Structure

```
oaasis_io/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── app-sidebar/       # Application sidebar
│   ├── dropdown-btn/      # Dropdown button component
│   ├── nav-main/          # Main navigation
│   ├── nav-sidebar/       # Sidebar navigation
│   ├── product-dashboard/ # Product dashboard
│   ├── product-list/      # Product list component
│   ├── search-bar/        # Search functionality
│   └── ui/               # UI primitives
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
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

## 🎨 Styling

Oaasis uses a combination of:
- **Tailwind CSS** for utility-first styling
- **CSS Modules** for component-specific styles
- **Radix UI** for accessible, unstyled components
- **Custom CSS variables** for theme consistency

## 🌙 Theme Support

The application supports both light and dark themes using `next-themes`. Theme switching is available through the UI.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Support

For support and questions, please open an issue in the repository.

---

Built with ❤️ using Next.js and modern web technologies.
