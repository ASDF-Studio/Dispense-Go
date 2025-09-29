# Dispense Go 🛒

> Modern e-commerce platform built with Next.js and TypeScript - Delivering seamless shopping experiences with cutting-edge technology

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.0-blue.svg)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.2-purple.svg)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8.svg)](https://tailwindcss.com/)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [State Management](#state-management)
- [UI Components](#ui-components)
- [Available Scripts](#available-scripts)
- [Build & Deployment](#build--deployment)
- [Performance Optimization](#performance-optimization)
- [SEO & Analytics](#seo--analytics)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

**Dispense Go** is a modern, full-featured e-commerce platform designed to provide exceptional shopping experiences for both customers and administrators. Built with Next.js 14 and powered by cutting-edge web technologies, it offers lightning-fast performance, seamless user interactions, and robust state management.

The platform combines the power of server-side rendering, progressive web app capabilities, and modern React patterns to deliver a scalable e-commerce solution that works flawlessly across all devices.

## ✨ Features

### Customer Features
- **Product Catalog**: Advanced product browsing with filtering and search
- **Shopping Cart**: Persistent cart with real-time updates
- **User Authentication**: Secure login, registration, and profile management
- **Wishlist**: Save favorite products for later
- **Order Management**: Track orders and view purchase history
- **Reviews & Ratings**: Customer feedback and product reviews
- **Location Services**: Store locator with Google Maps integration
- **Responsive Design**: Optimized for mobile, tablet, and desktop

### Technical Features
- **Server-Side Rendering**: Fast initial page loads with Next.js
- **Progressive Web App**: Offline capabilities and app-like experience
- **State Management**: Redux Toolkit for predictable state updates
- **Interactive UI**: Smooth animations with Framer Motion
- **Maps Integration**: Google Maps for store locations
- **Icon Library**: Comprehensive FontAwesome icon set
- **Image Optimization**: Next.js automatic image optimization
- **SEO Optimized**: Built-in SEO best practices

## 🛠️ Tech Stack

### Core Framework
- **Framework**: [Next.js](https://nextjs.org/) 14.0.1
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5.0
- **UI Library**: [React](https://reactjs.org/) 18.0
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.3.0

### State Management
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) 2.2.3
- **React Integration**: [React Redux](https://react-redux.js.org/) 9.1.1
- **Middleware**: [Redux Thunk](https://github.com/reduxjs/redux-thunk) 3.1.0
- **DevTools**: [@redux-devtools/extension](https://github.com/reduxjs/redux-devtools) 3.3.0

### UI Components & Animations
- **Icons**: [FontAwesome](https://fontawesome.com/) 6.4.2
- **Animations**: [Framer Motion](https://www.framer.com/motion/) 10.16.16
- **Carousel**: [Swiper](https://swiperjs.com/) 11.0.5
- **Modals**: [React Modal](https://reactcommunity.org/react-modal/) 3.16.1
- **Tooltips**: [React Tooltip](https://react-tooltip.com/) 5.25.1
- **Styling Utilities**: [Class Variance Authority](https://cva.style/docs) 0.7.0

### External Services
- **HTTP Client**: [Axios](https://axios-http.com/) 1.6.8
- **Maps**: [Google Map React](https://github.com/google-map-react/google-map-react) 2.2.1
- **Utilities**: [Lodash](https://lodash.com/) 4.17.21

### Development Tools
- **Build Tools**: [PostCSS](https://postcss.org/), [Autoprefixer](https://github.com/postcss/autoprefixer)
- **Linting**: [ESLint](https://eslint.org/) with Next.js config
- **Type Definitions**: Comprehensive TypeScript definitions

## 📋 Prerequisites

Before setting up Dispense Go, ensure you have:

### Required Software
- **Node.js**: Version 18.0 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn**: Latest version (comes with Node.js)
- **Git**: Latest version ([Download](https://git-scm.com/))

### Required API Keys
- **Google Maps API**: For store locator functionality
- **Payment Gateway**: Stripe, PayPal, or similar
- **Email Service**: For order confirmations and notifications
- **Analytics**: Google Analytics, Mixpanel, etc.

### Recommended Tools
- **VS Code**: With React, TypeScript, and Tailwind extensions
- **Redux DevTools**: Browser extension for debugging
- **Postman**: For API testing
- **Figma**: For design collaboration

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/dispense-go.git
   cd dispense-go
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Configure all required environment variables (see [Environment Configuration](#environment-configuration)).

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Variable Descriptions

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | ✅ |
| `DATABASE_URL` | Database connection string | ✅ |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe public key for payments | ✅ |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps API key | ✅ |
| `NEXTAUTH_SECRET` | NextAuth.js secret for sessions | ✅ |
| `SMTP_*` | Email configuration for notifications | ✅ |
| `NEXT_PUBLIC_GA_ID` | Google Analytics tracking ID | ⚠️ |

## 🏃 Running the Application

### Development Mode

```bash
# Start development server with hot reload
npm run dev

# Access at http://localhost:3000
```

Features in development mode:
- Hot module replacement
- Redux DevTools integration
- Detailed error messages
- Source maps for debugging

### Production Mode

```bash
# Build for production
npm run build

# Start production server
npm start

# Access at http://localhost:3000
```

### Development Utilities

```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit

# Analyze bundle size
npm run analyze

# Generate sitemap
npm run sitemap
```

## 🏗️ Project Structure

```
├── public/                     # Static files
│   ├── images/                # Product images, logos, etc.
│   ├── icons/                 # App icons and favicons
│   ├── manifest.json          # PWA manifest
│   └── robots.txt             # SEO robots file
│
├── src/
│   ├── app/                   # Next.js 14 App Router
│   │   ├── (auth)/           # Authentication pages
│   │   ├── (shop)/           # Shop pages (products, cart)
│   │   ├── (account)/        # User account pages
│   │   ├── admin/            # Admin dashboard
│   │   ├── api/              # API routes
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Homepage
│   │
│   ├── components/            # Reusable components
│   │   ├── ui/               # Base UI components
│   │   │   ├── Button/       # Button component
│   │   │   ├── Modal/        # Modal component
│   │   │   ├── Input/        # Input component
│   │   │   └── Card/         # Card component
│   │   ├── layout/           # Layout components
│   │   │   ├── Header/       # Site header
│   │   │   ├── Footer/       # Site footer
│   │   │   └── Navigation/   # Navigation components
│   │   ├── shop/             # Shop-specific components
│   │   │   ├── ProductCard/  # Product display card
│   │   │   ├── Cart/         # Shopping cart
│   │   │   ├── Checkout/     # Checkout process
│   │   │   └── Filters/      # Product filters
│   │   └── admin/            # Admin components
│   │       ├── Dashboard/    # Admin dashboard
│   │       ├── ProductForm/  # Product management
│   │       └── OrderList/    # Order management
│   │
│   ├── store/                 # Redux store configuration
│   │   ├── index.ts          # Store configuration
│   │   ├── slices/           # Redux slices
│   │   │   ├── authSlice.ts  # Authentication state
│   │   │   ├── cartSlice.ts  # Shopping cart state
│   │   │   ├── productSlice.ts # Products state
│   │   │   └── uiSlice.ts    # UI state (modals, loading)
│   │   └── middleware/       # Custom middleware
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── useAuth.ts        # Authentication hook
│   │   ├── useCart.ts        # Shopping cart hook
│   │   ├── useLocalStorage.ts # Local storage hook
│   │   └── useDebounce.ts    # Debounce hook
│   │
│   ├── types/                 # TypeScript definitions
│   │   ├── product.ts        # Product types
│   │   ├── user.ts           # User types
│   │   ├── order.ts          # Order types
│   │   └── api.ts            # API response types
│   │
│   ├── lib/                   # Utility libraries
│   │   ├── api.ts            # API client configuration
│   │   ├── auth.ts           # Authentication utilities
│   │   ├── validation.ts     # Form validation schemas
│   │   └── utils.ts          # General utilities
│   │
│   ├── styles/                # Styling files
│   │   ├── components.css    # Component-specific styles
│   │   └── utilities.css     # Custom Tailwind utilities
│   │
│   └── constants/             # App constants
│       ├── routes.ts         # Route definitions
│       ├── config.ts         # App configuration
│       └── api.ts            # API endpoints
│
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── .eslintrc.json            # ESLint configuration
└── package.json              # Dependencies and scripts
```

## 🔄 State Management

### Redux Store Structure

### Key Redux Slices

#### Auth Slice

#### Cart Slice

#### Product Slice

### Redux Toolkit Usage

## 🎨 UI Components

### Component Architecture

### Animation Components

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Run ESLint

# Type Checking
npm run type-check       # TypeScript type checking

# Testing
npm run test             # Run tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Generate test coverage

# Analysis
npm run lighthouse       # Run Lighthouse audit

# Utilities
npm run clean            # Clean build artifacts
npm run prettier         # Format code
npm run update-deps      # Update dependencies
```

## 🚀 Build & Deployment

### Production Build

### Deployment Options

#### Vercel (Recommended)

#### Docker Deployment

## 🤝 Contributing

We welcome contributions to Dispense Go! Please follow these guidelines:

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests**
   ```bash
   npm run test
   npm run type-check
   npm run lint
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Code Standards

- Follow TypeScript best practices
- Use Prettier for code formatting
- Write meaningful commit messages
- Include tests for new features
- Update documentation as needed

```

## 🙏 Acknowledgments

- Next.js team for the powerful React framework
- Redux Toolkit team for simplified state management
- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations
- FontAwesome for comprehensive icons
- All contributors and the open-source community

## 📞 Support & Contact

- **Website**: [https://dispensego.com](https://dispensego.com)
- **Email**: support@dispensego.com
- **Documentation**: [https://docs.dispensego.com](https://docs.dispensego.com)
- **GitHub Issues**: For bug reports and feature requests

For technical support, feature requests, or partnership inquiries, please reach out through our official channels.

---

⚡ **Built with modern web technologies**
