import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useState } from "react";

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
        color:"#FF0000"
    }

  });

export default function IngredientAdder(props) {
    const id = props.ingredient.id;

    return (
        <View style= {styles.container}>
            <TextInput style = {styles.longInput} onChangeText={(e)=>{props.editFunc(id, "name"), e}} placeholder="Name"></TextInput>
            <TextInput style = {styles.shortInput} onChangeText={(e)=>{props.editFunc(id, "quantity", e)}} placeholder="0" keyboardType="numeric"></TextInput>
            
            <Button color="#FF0000" title="Delete" onPress={(e)=>{props.deleteFunc(id)}}></Button>
            
        </View>
    )
}