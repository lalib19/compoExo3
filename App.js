import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>   
    <Image style={styles.image} source={require('./rover.jpg')} />
    <Text style={styles.text}>Le rover Opportunity</Text>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  flexDirection:"row",
  backgroundColor: '#fff',
  alignItems: 'center',
},
image: {
  flex: 3,
  // resizeMode: 'contain',
  height: 300, 
  width: "100%",
  borderRadius: 15,
  borderColor: "black",
  borderWidth: 1,
  
},
text: {
  flex: 1,
  color: "red",
  fontSize: 20,

}




});