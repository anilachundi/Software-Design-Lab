import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import GridExample from '../components/Grid';
import { useNavigation } from '@react-navigation/native';
import NavBar from '../components/Navbar'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  
const CalendarScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Calendar</Text>
      <GridExample />{}
      <NavBar></NavBar>
    </View>
  );
}

export default CalendarScreen;