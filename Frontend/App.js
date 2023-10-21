import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
//import Button from './components/Button';
import React from 'react';
import RootStack from './navigators/RootStack'; //React navigation stack

//import * as React from 'react';
//import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './pages/Welcome';
import RecipeScreen from './pages/Recipes';
import CalendarScreen from './pages/Calendar';




function App() {
  return (
    <RootStack></RootStack>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
{/* <Text>Test text here</Text>
<StatusBar style="auto" /> */}

