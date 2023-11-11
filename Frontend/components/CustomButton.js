import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
const constStyles = StyleSheet.create({
    text: {
        fontSize: 15    
    }
})

function createStylesTextButton(inputWidth, inputColor) {
    return StyleSheet.create({
        horizontalContainer : {
            flex: 2,
            flexDirection: "row",
            backgroundColor: inputColor,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            padding: 10,
            width: inputWidth
        }
        
    })
}

function createStylesIconButton(inputColor) {
    return StyleSheet.create({
        horizontalContainer : {
            backgroundColor: inputColor,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 40,
        }
        
    })
}
export function TextButton(props) {
    const propStyles = createStylesTextButton(props.width, props.color);

    return (
        <TouchableOpacity style={propStyles.horizontalContainer} onPress={() => props.pressFunc()}>
            <Ionicons name={props.ioniconsName} size={24} color="black" />            
            <Text style={constStyles.text}>{props.buttonText}</Text>
        </TouchableOpacity>
    )
}

export function IconButton(props) {
    const propStyles = createStylesIconButton(props.color);
    return (
        <TouchableOpacity style={propStyles.horizontalContainer} onPress={() => props.pressFunc()}>
            <Ionicons name={props.ioniconsName} size={24} color="black"/>            
        </TouchableOpacity>
    )
}