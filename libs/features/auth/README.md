# Auth Feature Package

A shared authentication feature package for the Expo monorepo.

## Components

- **LoginForm**: A complete login form with email and password inputs

## Usage

```typescript
import { LoginForm } from '@expo-monorepo/features/auth';

<LoginForm 
  onLogin={(email, password) => {
    console.log('Logging in with:', email);
    // Handle authentication
  }}
/>
```

## Dependencies

This package depends on `@expo-monorepo/ui` for shared UI components.
