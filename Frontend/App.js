import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigators/RootStack'; //React navigation stack
import AuthStack from './navigators/AuthStack';
import { LoginProvider, useLoginContext } from './components/LoginContext';


// wrapper component needed to access the LoginContext provided by the LoginProvider
function StackChooser() {
  const { loginState } = useLoginContext();
  return (
    <NavigationContainer>
        {!loginState ?  <AuthStack></AuthStack> : <RootStack></RootStack>}
    </NavigationContainer>
  )
}



function App() {
  return (
    <LoginProvider>
      <StackChooser/>
    </LoginProvider>
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

