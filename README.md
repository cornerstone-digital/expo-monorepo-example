# Expo Monorepo Example

An example NX monorepo for an Expo React Native project demonstrating best practices for organizing shared libraries, feature packages, and mobile applications.

## 📁 Project Structure

```
expo-monorepo-example/
├── apps/
│   └── mobile/              # Expo React Native application
│       ├── App.tsx          # Main app component
│       ├── app.json         # Expo configuration
│       └── package.json
├── libs/
│   ├── ui/                  # Shared UI component library
│   │   └── src/
│   │       ├── Button.tsx   # Reusable button component
│   │       ├── Card.tsx     # Reusable card component
│   │       └── index.ts     # Library exports
│   └── features/
│       └── auth/            # Authentication feature package
│           └── src/
│               ├── LoginForm.tsx
│               └── index.ts
├── nx.json                  # NX workspace configuration
├── tsconfig.base.json       # Base TypeScript configuration
└── package.json             # Root workspace configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Expo CLI
- iOS Simulator (for iOS development) or Android Emulator (for Android development)

### Installation

```bash
# Install dependencies
npm install

# Install dependencies in the mobile app
cd apps/mobile && npm install
```

### Running the Mobile App

```bash
# Start the Expo development server
npm run mobile

# Or run directly with NX
nx start mobile

# Run on iOS
npm run mobile:ios

# Run on Android
npm run mobile:android
```

## 📦 Packages

### Apps

- **mobile** (`apps/mobile`) - Main Expo React Native application demonstrating the use of shared libraries

### Libraries

#### UI Components (`@expo-monorepo/ui`)

Shared UI component library containing reusable React Native components.

**Components:**
- `Button` - Customizable button with primary/secondary variants
- `Card` - Card container component

**Usage:**
```typescript
import { Button, Card } from '@expo-monorepo/ui';
```

#### Feature Packages

##### Auth (`@expo-monorepo/features/auth`)

Authentication feature package with login functionality.

**Components:**
- `LoginForm` - Complete login form with email and password inputs

**Usage:**
```typescript
import { LoginForm } from '@expo-monorepo/features/auth';
```

## 🛠️ Development

### Available Scripts

- `npm run mobile` - Start the mobile app development server
- `npm run build` - Build all packages
- `npm run lint` - Lint all packages
- `npm run test` - Run tests for all packages

### NX Commands

```bash
# Run a specific target for a project
nx [target] [project]

# Examples:
nx start mobile
nx lint ui
nx test features-auth

# Run a target for all projects
nx run-many --target=lint --all

# View project graph
nx graph
```

## 🏗️ Architecture

This monorepo uses:

- **NX** - Build system and monorepo management
- **npm workspaces** - Package management and linking
- **TypeScript** - Type safety across all packages
- **Expo** - React Native development platform
- **React Native** - Cross-platform mobile development

### Package Dependencies

```
mobile (app)
  ├── @expo-monorepo/ui
  └── @expo-monorepo/features/auth
      └── @expo-monorepo/ui
```

## 📝 Adding New Packages

### Creating a New Library

```bash
# Create a new library directory
mkdir -p libs/my-library/src

# Add package.json, tsconfig.json, and source files
# Update tsconfig.base.json paths
# Create project.json for NX configuration
```

### Creating a New Feature Package

```bash
# Create a new feature directory
mkdir -p libs/features/my-feature/src

# Follow the same structure as libs/features/auth
```

## 🔗 TypeScript Path Mapping

The monorepo uses TypeScript path mapping for clean imports:

```typescript
// Instead of relative imports:
import { Button } from '../../../libs/ui/src/Button';

// Use absolute imports:
import { Button } from '@expo-monorepo/ui';
```

Path mappings are configured in `tsconfig.base.json`.

## 📄 License

ISC

