import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import GridExample from '../components/Grid';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  
const CalendarScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Calendar</Text>
      <GridExample />{}
      <Button
        title="Return to Home"
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  );
}

export default CalendarScreen;