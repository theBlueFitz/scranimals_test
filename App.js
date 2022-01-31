import React, { useEffect } from 'react';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef, navigate } from './routeNavigation';
import { HomeScreen } from './components/HomeScreen.js';
import { LoginForm } from './components/LoginForm';
import { PickPet } from './components/PickPet';
import { Shop } from './components/Shop';
import { TrackingMain } from './components/TrackingMain';
import { TrackingWater } from './components/TrackingWater';
import { NavMenu } from './components/NavMenu.js';
import { Scranimal } from './components/Scranimal';
const Stack = createNativeStackNavigator();
import { UserProvider } from './contexts/User.js';
import app from './firebase';
import { Pedometer } from './components/Pedometer';

export default function App() {
  const registerForPushNotificationsAsync = async () => {
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
      this.setState({ expoPushToken: token });
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  };
  registerForPushNotificationsAsync();
  return (
    <UserProvider>
      <NavigationContainer ref={navigationRef}>
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
          <Stack.Screen
            name='Shop'
            component={Shop}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='TrackingMain'
            component={TrackingMain}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='TrackingWater'
            component={TrackingWater}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Scranimal'
            component={Scranimal}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Pedometer'
            component={Pedometer}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
