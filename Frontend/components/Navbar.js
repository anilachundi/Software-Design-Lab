import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

const NavBar = () => {
    const navigation = useNavigation()
    return (
      <View style={styles.horizontalContainer}>
        <TouchableOpacity style={styles.verticalContainer} onPress={() => navigation.navigate('Welcome')}>
            <Ionicons name="home-outline" size={24} color="black" />            
            <Text style={styles.text}>Welcome</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.verticalContainer} onPress={() => navigation.navigate('Recipe')}>
            <MaterialCommunityIcons name="format-list-bulleted" size={24} color="black" />
            <Text style={styles.text}>Recipes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.verticalContainer} onPress={() => navigation.navigate('Calendar')}>
            <MaterialCommunityIcons name="calendar-blank-outline" size={24} color="black" />
            <Text style={styles.text}>Calendar</Text>
        </TouchableOpacity>
        
        
      </View>
    );
}

const styles = StyleSheet.create({
    horizontalContainer: {
        flex: 3,
        flexDirection: 'row',

        padding: 20,
        columnGap: 20,
        alignItems: "center",
        backgroundColor: 'darkturquoise',
        position: 'absolute',
        bottom: 20,
        borderRadius: 50
    },
    verticalContainer: {
        alignItems: "center"
    },
    text: {
        fontSize: 10
    }
    
})
export default NavBar;