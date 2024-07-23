import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import {Colors} from '../utils/Themes';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function mainNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: Colors.primary,
        },
      }}
      initialRouteName="home">
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
