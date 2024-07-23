import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppNavigator from './src/routes/appNavigator';
         

function App()  {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}

export default App;
