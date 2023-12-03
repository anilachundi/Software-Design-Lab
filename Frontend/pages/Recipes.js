import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from "react";
import React from 'react';
import TableExample from '../components/DataTable'; 
import NavBar from '../components/Navbar'
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

const RecipeScreen = () => {
    // const recipeList = [{name: "Tiramisu", calories: 2000, id: 0}, {name: "fried rice", calories: 100, id: 1},];
    const [recipeList, setRecipeList] = useState([]);
    useEffect(() => {
      const getAllRecipes = async () => {
        const result = await SecureStore.getItemAsync('username');
        console.log("username: " + result);
        try {
          const params = {
              username : result
          }
          const headers = {
              'Content-Type' : 'application/json'
          }
          const endpoint = 'http://localhost:8080/getAllRecipes';
          const response = await axios.post(endpoint, params, headers);
          for (let i = 0; i < response.data.length; i++) {
            let sum = 0;
            nutrition_array = response.data[i].nutrition_data;
            for (let j = 0; j < nutrition_array.length; j++) {
              sum += nutrition_array[j];
            }
            response.data[i].calories = parseInt(sum);
          }
          setRecipeList(response.data);
          console.log(response.data);
        } catch (err) {
          console.error('error retrieving recipes:', err);
        }
      };
      getAllRecipes();
    }, []);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <Text>Recipe List</Text>
        <TableExample props={recipeList}/>
        <Button title="Add Recipe" onPress={() => navigation.navigate('AddRecipe')}> </Button>
        <NavBar></NavBar>
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


  export default RecipeScreen;