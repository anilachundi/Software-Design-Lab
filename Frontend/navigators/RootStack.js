import React from 'react';

//react navigation for navigating between pages
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import RecipeScreen from '../pages/Recipes';
import CalendarScreen from '../pages/Calendar';
import WelcomeScreen from '../pages/Welcome';
import AddRecipeScreen from '../pages/AddRecipe';

const Stack = createNativeStackNavigator();

const RootStack = () =>  {
    return (
      
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component = {WelcomeScreen}  />
          <Stack.Screen name="Recipe" component = {RecipeScreen}  />
          <Stack.Screen name="Calendar" component = {CalendarScreen} />
          <Stack.Screen name="AddRecipe" component = {AddRecipeScreen} />
        </Stack.Navigator>
    );
  }
  
  export default RootStack;