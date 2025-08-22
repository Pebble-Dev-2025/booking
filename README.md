# Pebbble Booking System

A modern, responsive booking system built with React and TypeScript, designed for both PC and mobile devices. This application provides a seamless reservation experience with automatic device detection and adaptive UI.

## ✨ Features

- **📱 Responsive Design**: Automatic PC/Mobile detection with optimized UI for each platform
- **🎨 Modern UI Components**: Built with Ant Design for professional user interface
- **📐 Mobile Adaptation**: PostCSS px-to-viewport for perfect mobile scaling
- **⚡ Fast Development**: Vite for lightning-fast builds and HMR
- **🔧 TypeScript**: Full type safety and enhanced development experience
- **✅ Code Quality**: ESLint + Prettier with Airbnb configuration
- **🔄 State Management**: Zustand for lightweight and efficient state handling
- **🛡️ Git Hooks**: Automated code formatting and linting before commits

## 🛠️ Tech Stack

### Frontend Framework

- **React 19** - Latest React with modern features
- **TypeScript 5.9** - Type-safe development
- **Vite 7** - Next-generation frontend tooling

### UI & Styling

- **Ant Design 5.27** - Enterprise-class UI components
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **PostCSS** - CSS preprocessing with px-to-viewport plugin

### Development Tools

- **ESLint** - Code linting with Airbnb configuration
- **Prettier** - Code formatting
- **Husky** - Git hooks for code quality
- **lint-staged** - Run linters on staged files

### State & Routing

- **Zustand 5.0** - Lightweight state management
- **React Router DOM 7.8** - Client-side routing
- **Axios 1.11** - HTTP client for API communication

## 📁 Project Structure

```
src/
├── assets/         # Static assets (images, icons)
├── App.tsx         # Main application component
├── App.css         # Application styles
├── main.tsx        # Application entry point
└── index.css       # Global styles

public/
├── pb.jpg          # Project favicon/logo
└── vite.svg        # Vite logo

Config Files:
├── tsconfig.json           # TypeScript configuration
├── tsconfig.node.json      # Node.js TypeScript config
├── vite.config.js          # Vite build configuration
├── postcss.config.js       # PostCSS configuration
├── eslint.config.js        # ESLint rules
├── .prettierrc             # Prettier formatting rules
├── .prettierignore         # Prettier ignore patterns
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd booking
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📜 Available Scripts

### Development

```bash
npm run dev          # Start development server
npm run preview      # Preview production build
```

### Building

```bash
npm run build        # Build for production
npm run type-check   # TypeScript type checking
```

### Code Quality

```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## ⚙️ Configuration Details

### Mobile Adaptation

- **Design Width**: 375px (iPhone standard)
- **Viewport Conversion**: Automatic px to vw conversion
- **Precision**: 3 decimal places
- **Minimum Value**: 1px (values ≤1px won't be converted)

### Code Standards

- **ESLint**: Airbnb configuration with TypeScript support
- **Prettier**: Consistent code formatting
- **Git Hooks**: Pre-commit code quality checks
- **Import Sorting**: Automatic import organization

### Build Optimization

- **Path Aliases**: `@/*` maps to `src/*`
- **TypeScript**: Strict mode enabled
- **Tree Shaking**: Automatic dead code elimination
- **Asset Optimization**: Automatic image and asset optimization

## 🎯 Responsive Design

The application automatically detects device type and provides optimized experiences:

### PC Version

- Full-width layout with sidebar navigation
- Desktop-optimized component sizes
- Hover effects and desktop interactions

### Mobile Version

- Touch-friendly interface
- Optimized for thumb navigation
- Responsive typography and spacing
- Mobile-specific UI patterns

## 🔧 Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow Airbnb ESLint configuration
- Prefer functional components with hooks
- Use absolute imports with `@/` prefix

### Commit Process

1. Stage your changes: `git add .`
2. Commit with message: `git commit -m "your message"`
3. Automatic formatting and linting will run
4. Push to repository: `git push`

### Adding New Features

1. Create TypeScript interfaces in appropriate files
2. Use Zustand for state management
3. Follow existing component patterns
4. Ensure mobile responsiveness
5. Add proper TypeScript types

## 📱 Device Support

- **Desktop**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Tablets**: iPad, Android tablets
- **Screen Sizes**: 320px - 1920px+ width

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Ant Design** - For the excellent UI component library
- **Vite** - For the fast and efficient build tool
- **React Team** - For the amazing frontend framework
- **TypeScript** - For making JavaScript development more robust
