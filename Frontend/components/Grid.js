import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

const data = [
    [
        { day: 'S'},
        { day: 'M'},
        { day: 'T'},
        { day: 'W'},
        { day: 'R'},
        { day: 'F'},
        { day: 'S'},
    ],
    [
        { day: '1'},
        { day: '2'},
        { day: '3'},
        { day: '4'},
        { day: '5'},
        { day: '6'},
        { day: '7'},
    ],
    [
        { day: '8'},
        { day: '9'},
        { day: '10'},
        { day: '11'},
        { day: '12'},
        { day: '13'},
        { day: '14'},
    ],
    [
        { day: '15'},
        { day: '16'},
        { day: '17'},
        { day: '18'},
        { day: '19'},
        { day: '20'},
        { day: '21'},
    ],
    [
        { day: '22'},
        { day: '23'},
        { day: '24'},
        { day: '25'},
        { day: '26'},
        { day: '27'},
        { day: '28'},
    ],
    [
        { day: '29'},
        { day: '30'},
        { day: '31'},
        { },
        { },
        { },
        { },
    ],
  ];
  
  const GridExample = () => {
    return (
      <View style={styles.container}> 
        {data.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((item, index) => (
              <View key={index} style={styles.gridItem}>
                <Text style={styles.gridItemText}>{item.day}</Text>
                <Text style={styles.gridItemText}>{item.name}</Text>
                <Text style={styles.gridItemText}>{item.favoriteFood}</Text>
                <Text style={styles.gridItemText}>{item.age}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    gridItem: {
      width: 50, // Adjust the width as needed
      padding: 1,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    gridItemText: {
      textAlign: 'center',
    },
  });
  
  export default GridExample;