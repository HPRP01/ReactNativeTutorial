//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image
} from 'react-native';

//const backgroundImage = <Image source={require('./assets/background.jpg')}/>;
//UPDATE
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background.jpg')} style={styles.image}>
        
        <View style={styles.logoview}> 
          <Image 
            style={styles.logo}
            source={require('./assets/logo-red.png')} 
            />
        </View>
    

        <View style={styles.controls}>
          <View style= {{
            backgroundColor: '#fc5c65',
            height: 100,
          }}/>
          <View style= {{
            backgroundColor: '#4eCDC4',
            height: 100,
          }}/>
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  controls: {
    flex: 1,
    justifyContent: "flex-end"
  },
  logo: {
    //flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    //alignContent: "center",
    width: "10%",
    height: "10%",
  },
  logoView: {
    flex: 1,
    justifyContent: "center"
  }
});


