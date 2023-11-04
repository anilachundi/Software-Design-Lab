import React from 'react';

//react navigation for navigating between pages
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import RecipeScreen from '../pages/Recipes';
import CalendarScreen from '../pages/Calendar';
import WelcomeScreen from '../pages/Welcome';

const Stack = createNativeStackNavigator();

const RootStack = () =>  {
    return (
      
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component = {WelcomeScreen}  />
          <Stack.Screen name="Recipe" component = {RecipeScreen}  />
          <Stack.Screen name="Calendar" component = {CalendarScreen} />
        </Stack.Navigator>
    );
  }
  
  export default RootStack;