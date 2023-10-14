import React from 'react'; 
import { StyleSheet } from 'react-native'; 
import { DataTable } from 'react-native-paper'; 

const TableExample = () => { 
    return ( 
      <DataTable style={styles.container}> 
        <DataTable.Header style={styles.tableHeader}> 
          <DataTable.Title>Item</DataTable.Title> 
          <DataTable.Title>Main Ingredient</DataTable.Title> 
          <DataTable.Title>Calories</DataTable.Title> 
        </DataTable.Header> 
        <DataTable.Row> 
          <DataTable.Cell>Pizza</DataTable.Cell> 
          <DataTable.Cell>Cheese</DataTable.Cell> 
          <DataTable.Cell>100</DataTable.Cell> 
        </DataTable.Row> 
    
        <DataTable.Row> 
          <DataTable.Cell>Sandwich</DataTable.Cell> 
          <DataTable.Cell>Bread</DataTable.Cell> 
          <DataTable.Cell>500</DataTable.Cell> 
        </DataTable.Row> 
        <DataTable.Row> 
          <DataTable.Cell>Salad</DataTable.Cell> 
          <DataTable.Cell>Lettuce</DataTable.Cell> 
          <DataTable.Cell>20</DataTable.Cell> 
        </DataTable.Row> 
      </DataTable> 
    ); 
  }; 
    
  export default TableExample; 
    
  const styles = StyleSheet.create({ 
    container: { 
      padding: 15, 
    }, 
    tableHeader: { 
      backgroundColor: '#DCDCDC', 
    }, 
  });
