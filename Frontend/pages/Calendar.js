import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import GridExample from './components/Grid';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  
const CalendarScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Calendar</Text>
      <Text>ajsdl;kfjlkasjfdl</Text>
      <GridExample />{}
      <Button
        title="Return to Home"
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  );
}

export default CalendarScreen;