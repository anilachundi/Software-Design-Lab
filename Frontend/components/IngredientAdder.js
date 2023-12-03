import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import SelectDropdown from 'react-native-select-dropdown'


const styles = StyleSheet.create({
    container: {
      padding: 5,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: "100%"
    },
    longInput: {
        height: 40,
        width: 150,
        borderWidth: 1,
        padding: 10,
    },
    shortInput: {
        height: 40,
        width: 50,
        padding: 10,
        borderWidth: 1,
    },
    deleteButton: {
        color:"#FF0000",
        fontSize: 13,
    },
    dropdownBtnStyle: {
        width: '30%',
        height: 40,
        backgroundColor: '#FFF',
        // borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black',
    },
    dropdownBtnTxtStyle: {
        color: 'gray', 
        textAlign: 'left',
        fontSize: 13,
    },
    dropdownRowStyle: {
        backgroundColor: '#EFEFEF',
        borderBottomColor: '#C5C5C5'},
    dropdownRowTxtStyle: {
        color: 'black', 
        textAlign: 'center',
        fontSize: 13,
    },
  });


export default function IngredientAdder(props) {
    const id = props.ingredient.id;
    const units = ["grams", "tablespoons", "teaspoon", "items", "cups"];

    return (
        <View style= {styles.container}>
            <TextInput style = {styles.longInput} onChangeText={(e)=>{props.editFunc(id, "name", e)}} placeholder="Name"></TextInput>
            <TextInput style = {styles.shortInput} onChangeText={(e)=>{props.editFunc(id, "quantity", e)}} placeholder="0" keyboardType="numeric"></TextInput>
            <SelectDropdown
                data={units} onSelect={(e) => {props.editFunc(id, "unit", e)}} buttonStyle={styles.dropdownBtnStyle} buttonTextStyle={styles.dropdownBtnTxtStyle}
                rowStyle={styles.dropdownRowStyle} rowTextStyle={styles.dropdownRowTxtStyle} defaultButtonText="Select unit"
            />
            <Button color="#FF0000" title="Delete" onPress={(e)=>{props.deleteFunc(id)}}></Button>
            
        </View>
    )
}