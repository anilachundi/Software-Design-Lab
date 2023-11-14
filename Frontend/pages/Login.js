import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, {useState} from 'react';
import { useLoginContext } from '../components/LoginContext';
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
    errorMessage:{
        height:50,
        color:"red"
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
    const { updateLoginState } = useLoginContext();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [validUser, setValidUser] = useState(true);
    const navigation = useNavigation();
    const isnewUser = false;

    async function pressLoginUpdate() {
        const newLoginState = {username : username, password : password};
        try {
            const isValidUser = await updateLoginState(newLoginState, isnewUser);
            setValidUser(isValidUser);        
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={styles.container}> 
            <Text style={styles.title}> Ready to login? </Text>
            <View style ={styles.inputView}> 
                <TextInput style={styles.inputText} placeholder="netid" placeholderTextColor="#003f5c" onChangeText={text => setUsername(text)}/>
            </View>
            <View style ={styles.inputView}> 
                <TextInput style={styles.inputText} placeholder="password" placeholderTextColor="#003f5c" onChangeText={text => setPassword(text)}/>
            </View>
            <Button title="Login" style={styles.loginButton} onPress={pressLoginUpdate}> </Button>
            <Button title="Create a new account" style={styles.loginButton} onPress={() => navigation.navigate('Account')}></Button>
            <View>
                {!(validUser) && <Text style={styles.errorMessage}> wrong username or password </Text>}
            </View>
        </View>

    );
}

export default LoginScreen;