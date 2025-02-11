# React Native Navigation with Stack Navigator

## Overview

This guide covers implementing navigation in a React Native application using React Navigation's Stack Navigator. Stack Navigator provides a way to transition between screens where each new screen is placed on top of a stack.

## Prerequisites

- React Native
- React Navigation library
- `@react-navigation/native`
- `@react-navigation/stack`

## Installation

```bash
npm install @react-navigation/native @react-navigation/stack
npm install react-native-screens react-native-safe-area-context
```

## Project Structure

```
/src
├── screens/
│   ├── HomeScreen.tsx
│   ├── DetailScreen.tsx
│   └── ProfileScreen.tsx
│   
└── App.tsx
```



## Key Navigation Methods

- `navigation.navigate('ScreenName')`: Navigate to a new screen
- `navigation.goBack()`: Return to previous screen
- `navigation.push('ScreenName')`: Push a new instance of a screen
- `navigation.pop()`: Remove the top screen from the stack


### Screen Options

```typescript
<Stack.Screen 
  name="Details" 
  component={DetailScreen} 
  options={{ 
    title: 'Details Page',
    headerStyle: { backgroundColor: '#f4511e' },
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold' }
  }}
/>
```

### Passing Parameters

```typescript
// Sending parameters
navigation.navigate('Details', { itemId: 86 });

// Receiving parameters
const DetailScreen = ({ route }) => {
  const { itemId } = route.params;
  // Use itemId
};
```



## Best Practices

- Keep navigation logic separate from screen components
- Use TypeScript for type-safe navigation
- Implement proper error handling
- Consider lazy loading for complex applications

## Common Pitfalls

- Forgetting to wrap app with `NavigationContainer`
- Not handling navigation state properly
- Overcomplicating navigation structure

