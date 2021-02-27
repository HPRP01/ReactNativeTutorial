import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableHighlight, 
  View, 
  Image, 
  SafeAreaView 
} from 'react-native';
//UPDATE
export default function App() {
  
  const handlePress = () => console.log("Test pressed");
  
  return (

    <SafeAreaView style={styles.container}>
      
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(197, 242, 250)',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  stretch: {
    //width: 320,
    height: 200,
    resizeMode: 'contain',
  },
});
