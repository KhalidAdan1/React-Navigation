import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Details from './components/Details';
import Profile from './components/Profile';
import Home from './components/Home';


export type RootStackParamList = {
  Home: undefined;
  Details: { itemId?: number };
  Profile: { name: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}