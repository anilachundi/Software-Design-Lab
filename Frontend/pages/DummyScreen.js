
import React from 'react';
import { View, Text } from 'react-native';



function DummyScreen() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <View>
            <Text onChange ={doSomething}>Dummy screen is here {loggedIn}</Text>
        </View>
    )
}
  
  export default DummyScreen;