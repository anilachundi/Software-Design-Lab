import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import TableExample from '../components/DataTable'; 
import NavBar from '../components/Navbar'
import { useNavigation } from '@react-navigation/native';


const RecipeScreen = () => {
  const recipeList = [{name: "Tiramisu", calories: 2000, id: 0}, {name: "fried rice", calories: 100, id: 1},];
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