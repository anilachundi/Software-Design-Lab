import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#10B981',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  
const Welcome = ({ navigation }) => {
  console.log('Welcome component rendered');
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
    </View>
  );
}


const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <Text>Start Tracking Your Meals</Text>
      <Button
        title="Go to My Recipes"
        onPress={() => navigation.navigate('Recipe')}
      />
      <Text>aaalajsdflk</Text>
    </View>
  );
}

export default WelcomeScreen;