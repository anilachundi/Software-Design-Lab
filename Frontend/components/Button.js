import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label }) {
  return (
    <View style={styles.footerContainer}>
      <Pressable size={50} onPress={() => alert('You pressed a button.')}></Pressable>
    </View>
  );
}