import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigators/RootStack'; //React navigation stack
import AuthStack from './navigators/AuthStack';



async function isLoggedIn() {
  try {
    const username = await SecureStore.getItemAsync('username');
    const password = await SecureStore.getItemAsync('password');
    // TODO: Validate username and password are actually ok by checking the backend database
    const dummyVar = await SecureStore.getItemAsync('dummyVar');
    return dummyVar;
    // return username && password;
  } catch(err) {
    return false;
  }
}




function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect (() => {
    
  })
  return (
    <NavigationContainer>
      {loggedIn ? <RootStack></RootStack> : <AuthStack></AuthStack>}
    </NavigationContainer>
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

