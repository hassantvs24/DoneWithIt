import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import { EvilIcons } from '@expo/vector-icons';

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}><EvilIcons name="close" size={35} color="white" /></View>
            <View style={styles.deleteIcon}><EvilIcons name="trash" size={35} color="white" /></View>
            <Image resizeMode="contain" style={styles.image} source={require('../assets/bg-2.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon:{
        position: 'absolute',
        top: 40,
        left: 30,
        zIndex: 1000
    },
    deleteIcon:{
        position: 'absolute',
        top: 40,
        right: 30,
        zIndex: 1000
    },
    container:{
        backgroundColor: colors.black,
        flex: 1
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default ViewImageScreen;