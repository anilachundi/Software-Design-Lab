import React from 'react';

//react navigation for navigating between pages
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import LoginScreen from '../pages/Login';


const Stack = createNativeStackNavigator();

const AuthStack = () =>  {
    return (
        <Stack.Navigator>
          <Stack.Screen name= "Login" component = {LoginScreen}  />
        </Stack.Navigator>
    );
  }
  
  export default AuthStack;