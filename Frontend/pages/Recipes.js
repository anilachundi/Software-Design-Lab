import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import TableExample from '../components/DataTable'; 
import NavBar from '../components/Navbar'
import { useNavigation } from '@react-navigation/native';


const RecipeScreen = () => {
<<<<<<< HEAD
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button title="Add Recipe" onPress={() => navigation.navigate('AddRecipe')}> </Button>
      <Text>Your Recipes</Text>
      <TableExample />{}
=======
  const recipeList = [{name: "Tiramisu", calories: 2000, id: 0}, {name: "fried rice", calories: 100, id: 1},];
  return (
    <View style={styles.container}>
      <Text>Recipe List</Text>
      <TableExample props={recipeList}/>
>>>>>>> 60852dd (Working on DataTable)
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