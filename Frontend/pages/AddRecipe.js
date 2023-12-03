import { ScrollView, TextInput, StyleSheet, View } from "react-native";
import { useState } from "react";
import IngredientAdder from "../components/IngredientAdder";
import {TextButton, IconButton} from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

/*
{
    "name" : "green onion",
    "quantity" : 10,
    "unit" : 'g'
}
*/
const AddRecipeScreen = () =>  {
    const [recipe, setRecipe] = useState({
        recipeName : undefined,
        ingredientList : []
    });
    const [nextId, setNextId] = useState(0)
    const [loginState, setLoginState] = useState(false);
    const unitList = ['cups', 'oz', 'g', 'tbsp'];
    const navigation = useNavigation();

    /*
    General planning form: 
        "Recipe Name" header text input - delete button
        for every element:
            checkbox, text entry for name, small text entry for quantity, dropdown for unit
        add button
    */
    function filterList(itemId) {
        setRecipe({
            ...recipe,
            ingredientList : recipe.ingredientList.filter(i => i.id !== itemId)
        });
    }

    async function addRecipe() {
        try {
            const result = await SecureStore.getItemAsync('username');
            console.log(recipe.ingredientList);
            console.log("username: " + result);
            const data = {
                recipe : {
                    user_id : result,
                    name : recipe.recipeName,
                    ingredient_list : recipe.ingredientList,
                },
                username : result
            }
            const headers = {
                'Content-Type' : 'application/json'
            }
            const endpoint = 'http://localhost:8080/add-recipe';
            await axios.post(endpoint, data, headers);
           console.log("recipe added");
        } catch(err) {
            console.log(err);
        }
        navigateBack();
    }

    function navigateBack() {
        navigation.navigate('Recipe');
    }

    function addIngredient() {
        console.log(nextId);
        const newIngredient = {id : nextId, name : undefined, quantity : undefined, unit : undefined}
        const newIngredientList = recipe.ingredientList;
        newIngredientList.push(newIngredient); 
        setRecipe({
            ...recipe,
            ingredientList : newIngredientList
        })
        console.log("ingredient added");
        setNextId(nextId + 1);
    }
    function editIngredient(ingredientId, type, value) {
        setRecipe({
            ...recipe,
            ingredientList: recipe.ingredientList.map((ingredient) => {
                if (ingredient.id === ingredientId) {
                    switch(type) {
                        case "name":
                            ingredient.name = value
                            break;
                        case "quantity":
                            ingredient.quantity = value
                            break
                        case "unit": 
                            ingredient.unit = value
                            break
                    }
                }
                return ingredient;
            })
        })
    }
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.flexItem}>
                <IconButton color="#00FF00" ioniconsName= "add" pressFunc={addIngredient}></IconButton>
                <TextInput style={styles.longInput} onChangeText={(e)=>{setRecipe({...recipe, recipeName: e});}} placeholder="Recipe Name"></TextInput>
            </View>
            <View>
                {recipe.ingredientList.map((ingredient, i) => {
                    return (<IngredientAdder key={i} ingredient={ingredient} deleteFunc={filterList} editFunc={editIngredient}></IngredientAdder>)
                })}
            </View>
            <View style={styles.flexItem}>
                <TextButton color="#FF0000" width={150} buttonText="Exit" ioniconsName="arrow-back" pressFunc={navigateBack}></TextButton>
                <TextButton color="#00FF00" width={150} buttonText="Submit Recipe" ioniconsName="add" pressFunc={addRecipe}></TextButton>
            </View>
            
        </ScrollView>
        
    );
  }
  
  const styles = StyleSheet.create({
    scrollContainer : {
        marginTop: 50,
    },
    flexItem: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center"
    },
    longInput: {
        height: 40,
        width: 150,
        borderWidth: 1,
        padding: 10,
    },
  })


  export default AddRecipeScreen;