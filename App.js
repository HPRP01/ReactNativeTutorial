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

export default function App() {
  
  const handlePress = () => console.log("Test pressed");
  
  return (

    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello
      </Text>
      <TouchableHighlight onPress={() => console.log("ImagePressed")}>
        <Image  
          source={{ 
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"}}
        />
      </TouchableHighlight>
      <StatusBar style="auto" />
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
