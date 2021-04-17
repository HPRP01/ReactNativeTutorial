import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

function OpeningScreen(props) {
    return (
        <View style={styles.background}>
            <Image 
                source={require('../assets/badger1.png')}
                style={styles.logo}    
            ></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#25A9E0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 200
    }
})
export default OpeningScreen;