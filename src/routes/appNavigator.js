import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainNavigation from './MainNavigation';
import Splash from '../screens/Splash';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="main" component={MainNavigation} />
      <Stack.Screen name="details" component={Details} />
    </Stack.Navigator>
  );
}
