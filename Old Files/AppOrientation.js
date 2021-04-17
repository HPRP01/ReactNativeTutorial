//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  View, 
  SafeAreaView, 
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';

//UPDATE
export default function App() {
  
  const {landscape} = useDeviceOrientation();
  return (

    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: "100%",
        height: landscape ? "100%": "30%",
      }}></View>
    </SafeAreaView>


  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
