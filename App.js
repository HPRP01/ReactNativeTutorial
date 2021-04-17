//import { StatusBar } from 'expo-status-bar';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import { 
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import OpeningScreen from './app/screens/OpeningScreen';
import ScrollSCreen from './app/screens/ScrollSCreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { startClock } from 'react-native-reanimated';


//const backgroundImage = <Image source={require('./assets/background.jpg')}/>;
//UPDATE
export default function App() {
  return <ScrollSCreen/>;
 
}
