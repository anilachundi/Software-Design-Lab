import { StyleSheet, Text, View, Button } from 'react-native';
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
        try {
          const response = await axios.get('http://localhost:8080/getAllRecipes', {
            params: {
              username: {result},
            },
          });
          setRecipeList(response.data);
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