import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import TableExample from '../components/DataTable'; 
import NavBar from '../components/Navbar'
import { useNavigation } from '@react-navigation/native';


const RecipeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button title="Add Recipe" onPress={() => navigation.navigate('AddRecipe')}> </Button>
      <Text>Your Recipes</Text>
      <TableExample props={recipeList}/>
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