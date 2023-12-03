import React from 'react'; 
import { StyleSheet } from 'react-native'; 
import { DataTable } from 'react-native-paper'; 

const TableExample = ({props}) => { 
  const recipeItems = props.map(recipe => (
    <DataTable.Row key={recipe.id}>
      <DataTable.Cell> {recipe.name} </DataTable.Cell>
      <DataTable.Cell> {recipe.calories} </DataTable.Cell>
    </DataTable.Row>
  ));
  return ( 
      <DataTable style={styles.container}> 
        <DataTable.Header style={styles.tableHeader}> 
          <DataTable.Title>Item</DataTable.Title> 
          <DataTable.Title>Calories</DataTable.Title> 
        </DataTable.Header> 
        {recipeItems}
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
