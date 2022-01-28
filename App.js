import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './components/HomeScreen.js';
import { LoginForm } from './components/LoginForm';
import { PickPet } from './components/PickPet';
import { Shop } from './components/Shop';
import { TrackingMain } from './components/TrackingMain';
import { TrackingWater } from './components/TrackingWater';
const Stack = createNativeStackNavigator();
import { UserProvider } from './contexts/User.js';
import app from './firebase';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='LoginForm' component={LoginForm} />
          <Stack.Screen name='PickPet' component={PickPet} />
          <Stack.Screen name='Shop' component={Shop} />
          <Stack.Screen name='TrackingMain' component={TrackingMain} />
          <Stack.Screen name='TrackingWater' component={TrackingWater} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
