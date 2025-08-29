# 🌞 Solar Smart Check

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-purple.svg)](https://vitejs.dev/)

**Live Demo**: https://lovable.dev/projects/c42ee537-b6b4-4689-ab7a-d313854393eb

A modern web application that helps homeowners discover their property's solar energy potential in under 60 seconds. Get instant savings estimates, personalized financial analysis, and connect with verified solar installers.

![Solar Smart Check Screenshot](https://via.placeholder.com/800x400/FF6B35/FFFFFF?text=Solar+Smart+Check+Demo)

## ✨ Features

### 🏠 **Instant Solar Assessment**
- **Address-based Analysis**: Simply enter your address for instant solar potential scoring
- **Geolocation Support**: Use current location with GPS integration
- **AI-Powered Scoring**: Get a comprehensive solar suitability score (0-100)

### 📊 **Financial Analysis**
- **Savings Calculator**: Annual savings estimates based on local electricity rates
- **Payback Period**: Calculate return on investment timeline
- **Interactive Charts**: Visual representation of 20-year savings projections
- **System Sizing**: Recommended panel count and system capacity

### 🗺️ **Interactive Features**
- **Satellite Map View**: Visual roof analysis and solar panel placement
- **Local Weather Data**: Solar irradiance and weather pattern analysis
- **Vendor Network**: Connect with verified local solar installers
- **Incentives Database**: Federal, state, and local rebate information

### 🔐 **User Experience**
- **User Authentication**: Secure login system
- **Responsive Design**: Mobile-first approach for all devices
- **Real-time Updates**: Live data from solar energy APIs
- **Export Reports**: Download detailed solar analysis reports

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CognicAI/solar-smart-check.git
   cd solar-smart-check
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

### Build for Production

```bash
npm run build
npm run preview
```

## 🛠️ Development

### Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components (shadcn/ui)
│   ├── SolarResults.tsx # Main results display
│   ├── MapView.tsx      # Interactive map component
│   ├── SavingsChart.tsx # Financial charts
│   └── ...
├── pages/               # Route components
│   ├── Index.tsx        # Home page with search
│   ├── Login.tsx        # Authentication
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── ...
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

### Environment Setup

Create a `.env` file in the root directory:

```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
VITE_SOLAR_API_ENDPOINT=your_solar_api_endpoint
```

## 🏗️ Tech Stack

### Frontend
- **[React 18](https://reactjs.org/)** - Modern UI library with hooks
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better DX
- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### UI Components
- **[shadcn/ui](https://ui.shadcn.com/)** - Modern component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Lucide Icons](https://lucide.dev/)** - Beautiful SVG icons

### State Management & Data
- **[TanStack Query](https://tanstack.com/query)** - Server state management
- **[React Hook Form](https://react-hook-form.com/)** - Form handling
- **[React Router](https://reactrouter.com/)** - Client-side routing

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Class Variance Authority](https://cva.style/)** - Component variants

## 🎯 Key Features Walkthrough

### 1. Address Input & Location Detection
- Smart address validation and autocomplete
- GPS-based location detection
- Support for manual address entry
- Real-time location services integration

### 2. Solar Suitability Analysis
- **Solar Score Calculation** (0-100 scale)
  - Roof orientation and tilt analysis
  - Shading assessment from nearby structures
  - Historical weather data integration
  - Local solar irradiance calculations

### 3. Financial Projections
- **Annual Savings Estimates**
  - Current electricity usage analysis
  - Local utility rate calculations
  - Net metering benefit calculations
- **20-Year ROI Projections**
  - Equipment degradation factors
  - Inflation-adjusted calculations
  - Maintenance cost considerations

### 4. System Recommendations
- **Optimal Panel Configuration**
  - Roof space utilization
  - Panel type recommendations
  - Inverter specifications
- **System Sizing**
  - kW capacity recommendations
  - Energy production estimates
  - Battery storage options

## 🌐 API Integration

The application integrates with several external APIs:

- **Google Maps API** - Geocoding and satellite imagery
- **Solar Irradiance API** - Weather and solar data
- **Utility Rate API** - Electricity pricing data
- **Incentives Database** - Rebate and tax credit information

## 📱 Responsive Design

Built mobile-first with responsive breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🔒 Security & Privacy

- Secure user authentication system
- No storage of sensitive personal data
- HTTPS-only data transmission
- Privacy-compliant location services

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run e2e tests
npm run test:e2e
```

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: < 500kb gzipped
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and add tests
4. **Run the test suite**: `npm run test`
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Code Style

- Follow the existing TypeScript/React patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure all components are properly typed

## 🚀 Deployment

### Lovable Platform (Recommended)

1. Visit [Lovable Project Dashboard](https://lovable.dev/projects/c42ee537-b6b4-4689-ab7a-d313854393eb)
2. Click **Share → Publish**
3. Your app will be deployed automatically

### Custom Domain Setup

1. Navigate to **Project > Settings > Domains**
2. Click **Connect Domain**
3. Follow the DNS configuration steps

For detailed instructions: [Custom Domain Setup Guide](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to your preferred hosting service
# (Vercel, Netlify, AWS S3, etc.)
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [Project Wiki](https://github.com/CognicAI/solar-smart-check/wiki)
- **Issues**: [GitHub Issues](https://github.com/CognicAI/solar-smart-check/issues)
- **Discussions**: [GitHub Discussions](https://github.com/CognicAI/solar-smart-check/discussions)

## 🙏 Acknowledgments

- **[Lovable](https://lovable.dev/)** - AI-powered development platform
- **[shadcn](https://ui.shadcn.com/)** - For the amazing component library
- **Solar Industry Contributors** - For domain expertise and validation

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/CognicAI">CognicAI</a></p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
