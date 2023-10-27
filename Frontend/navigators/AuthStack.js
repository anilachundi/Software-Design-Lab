import React from 'react';

//react navigation for navigating between pages
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import DummyScreen from '../pages/DummyScreen';


const Stack = createNativeStackNavigator();

const AuthStack = () =>  {
    return (
        <Stack.Navigator>
          <Stack.Screen name= "Dummy" component = {DummyScreen}  />
        </Stack.Navigator>
    );
  }
  
  export default AuthStack;