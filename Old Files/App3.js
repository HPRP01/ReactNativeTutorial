//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableHighlight, 
  View, 
  Image, 
  SafeAreaView, 
  Button,
  Alert,
  Platform,
  StatusBar,
} from 'react-native';

//UPDATE
export default function App() {
  
  const handlePress = () => console.log("Test pressed");
  
  return (

    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button 
        color="teal"
        title="Click Me" 
        onPress={() => Alert.alert("System Files Corrupted", "Delete system?", [
          {text: "Yes", onPress: () => console.log("yes")},
          {text: "no", onPress: () => console.log("no")},
        ])}
        
      />
    </SafeAreaView>


  );
}


const containerStyle = {backgroundColor:"salmon"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(130, 242, 255)',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight:0,
    //alignItems: 'center',
    //justifyContent: 'center',
    
  },

  stretch: {
    //width: 320,
    height: 200,
    resizeMode: 'contain',
  },
});
