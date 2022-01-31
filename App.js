import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef, navigate } from './routeNavigation'
import { HomeScreen } from './components/HomeScreen.js'
import { LoginForm } from './components/LoginForm'
import { PickPet } from './components/PickPet'
import { Shop } from './components/Shop'
import { TrackingMain } from './components/TrackingMain'
import { TrackingWater } from './components/TrackingWater'
import { NavMenu } from './components/NavMenu.js'
import { Scranimal } from './components/Scranimal'
const Stack = createNativeStackNavigator()
import { UserProvider } from './contexts/User.js'
import app from './firebase'

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer ref={navigationRef}>
        <NavMenu />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginForm"
            component={LoginForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PickPet"
            component={PickPet}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Shop"
            component={Shop}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TrackingMain"
            component={TrackingMain}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TrackingWater"
            component={TrackingWater}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Scranimal"
            component={Scranimal}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  )
}
