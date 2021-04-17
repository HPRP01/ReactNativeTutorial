import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View, Text, Button,  } from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';

function ScrollSCreen(props) {
    return (
        

        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>Notes</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>Here is a lot of text I am gonig to keep writing until this turns into a scroll cview because that is the best way to test</Text>
            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        elevation: 5,
        backgroundColor: '#25a9e0',
        borderRadius: 75,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        zIndex: 1,
        position: 'absolute',
        bottom: 20,
        right: 20,
        
    },
    buttonText: {
        color:'white', 
        fontSize: 50
    },
    container: {   
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#25A9E0',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: 35,
        backgroundColor: '#25A9E0',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        color: 'white',
    },
    scrollView: {
        backgroundColor: 'white',
    },
    text: {
        fontSize: 100,
    },
}) 
export default ScrollSCreen;