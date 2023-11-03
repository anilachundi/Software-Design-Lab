import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TableExample from '../components/DataTable'; 
import NavBar from '../components/Navbar'


const RecipeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Your Recipes</Text>
      <TableExample />{}
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