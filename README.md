# Online Booking System

A modern, responsive online booking system built with Next.js and React. This application provides a seamless booking experience with a clean, intuitive interface powered by Ant Design components.

## ✨ Features

- 🚀 **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- 🎨 **Beautiful UI**: Styled with Ant Design components and Tailwind CSS
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🔧 **State Management**: Zustand for efficient and simple state management
- 🌐 **API Integration**: Axios for robust HTTP client functionality
- 🔍 **Code Quality**: ESLint and Prettier configured for consistent code style
- ⚡ **Performance**: Optimized with Next.js App Router and modern React features

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Ant Design
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Fonts**: Geist Sans & Geist Mono
- **Development Tools**: ESLint, Prettier

## 📦 Installation

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd booking
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🚀 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint to check for code issues |
| `npm run lint:fix` | Fix auto-fixable ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check if code needs formatting |
| `npm run type-check` | Run TypeScript type checking |

## 📁 Project Structure

```
booking/
├── src/
│   └── app/
│       ├── globals.css      # Global styles with Tailwind
│       ├── layout.tsx       # Root layout component
│       └── page.tsx         # Home page component
├── public/                  # Static assets
├── .prettierrc             # Prettier configuration
├── .prettierignore         # Prettier ignore patterns
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── postcss.config.mjs      # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies and scripts
```

## ⚙️ Configuration

### ESLint

The project uses ESLint with Next.js core rules and custom TypeScript configurations:
- Unused variables detection
- TypeScript strict rules
- React best practices

### Prettier

Code formatting is configured with:
- Semicolons enabled
- Double quotes
- 80-character line width
- 2-space indentation

### TypeScript

Strict TypeScript configuration with:
- Path aliases (`@/*` for `./src/*`)
- Next.js plugin integration
- Modern ES2017 target

## 🎨 Styling

The project uses a combination of:
- **Tailwind CSS v4**: For utility-first styling
- **Ant Design**: For pre-built React components
- **CSS Variables**: For theming support (light/dark mode ready)

## 🔧 Development Workflow

1. **Code Style**: Automatic formatting with Prettier and linting with ESLint
2. **Type Safety**: Full TypeScript support with strict configuration
3. **Hot Reload**: Instant updates during development
4. **Build Optimization**: Next.js automatic optimization for production

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - Learn React concepts and patterns
- [TypeScript Documentation](https://www.typescriptlang.org/docs) - TypeScript language reference
- [Ant Design](https://ant.design/docs/react/introduce) - UI component library
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Zustand](https://zustand-demo.pmnd.rs) - State management library

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

This Next.js application can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by the Pebbble team**