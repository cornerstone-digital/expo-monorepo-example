# UI Component Library

A shared UI component library for the Expo monorepo.

## Components

- **Button**: A customizable button component with primary and secondary variants
- **Card**: A card container component with title and content areas

## Usage

```typescript
import { Button, Card } from '@expo-monorepo/ui';

<Button title="Click me" onPress={() => console.log('pressed')} variant="primary" />

<Card title="My Card">
  <Text>Card content goes here</Text>
</Card>
```
