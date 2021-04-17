//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  View
} from 'react-native';


//UPDATE
export default function App() {
  return (
    <View 
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", // horizontal
        justifyContent: "center", // main
        alignItems: "center", // secondary
      }}
    >
      <View style={{
        backgroundColor: "dodgerblue",
        //flexBasis: 100, // width or height depedning on flex direction
        //flexGrow: 1, // similar to flex
        width: 400,
        flexShrink: 1, // shriks if there is overflowing (like setting flex to negative number)
        height: 100,
      }}/>
      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100,
      
      }}/>
      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100,
      
      }}/>
      
    </View>
  );
}


