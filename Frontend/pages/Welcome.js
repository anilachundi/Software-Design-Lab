import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import NavBar from '../components/Navbar';

  

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <Text>Start Tracking Your Meals</Text>
     <NavBar></NavBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WelcomeScreen;