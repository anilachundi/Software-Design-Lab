import React from 'react';
//react navigation for navigating between pages
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Recipes from './../pages/Recipes';
import Calendar from './../pages/Calendar';
import Welcome from './../pages/Welcome';

const Stack = createNativeStackNavigator();

const RootStack = () =>  {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Recipes" component={Recipes} />
          <Stack.Screen name="Calendar" component={Calendar} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default RootStack;