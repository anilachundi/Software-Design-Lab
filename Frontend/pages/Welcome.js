import { StyleSheet, Text, View } from 'react-native';
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

export default Welcome;