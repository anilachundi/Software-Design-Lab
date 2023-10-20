import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TableExample from './components/DataTable'; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

const RecipeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Your Recipes</Text>
      <TableExample />{}
      <Button
        title="Calendar View"
        onPress={() => navigation.navigate('Calendar')}
      />
    </View>
  );
}


export default RecipeScreen;