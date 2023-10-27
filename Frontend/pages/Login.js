import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, {useState} from 'react';
import GridExample from '../components/Grid';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        fontWeight: "bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom: 40,
    },
    inputView:{
        width:"80%",
        backgroundColor:"#5b8d9f",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:"white"
    },
    loginButton:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
});

const LoginScreen = () => {
    const navigation = useNavigation()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    return (
        <View style={styles.container}> 
            <Text style={styles.title}> Ready to login? </Text>
            <View style ={styles.inputView}> 
                <TextInput style={styles.inputText} placeholder="netid" placeholderTextColor="#003f5c" onChangeText={text => setUsername(text)}/>
            </View>
            <View style ={styles.inputView}> 
                <TextInput style={styles.inputText} placeholder="password" placeholderTextColor="#003f5c" onChangeText={text => setPassword(text)}/>
            </View>
            <Button title="Login" style={styles.loginButton}> </Button>
            <Text style= {styles.inputText}> username: {username} password: {password} </Text>
        </View>

    );
}

export default LoginScreen;