import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './components/HomeScreen.js';
import { NavMenu } from './components/NavMenu.js';
import { LoginForm } from './components/LoginForm';
import { PickPet } from './components/PickPet';
const Stack = createNativeStackNavigator();
import app from './firebase';

export default function App() {
  return (
    <NavigationContainer>
      <NavMenu />
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='LoginForm'
          component={LoginForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='PickPet'
          component={PickPet}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
