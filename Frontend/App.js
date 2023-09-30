import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import React from 'react';
import RootStack from './navigators/RootStack'; //React navigation stack

export default function App() {
  return (
    <View>
    <RootStack />
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Test text here</Text>
      <StatusBar style="auto" />
      <Button label="Next" />    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

