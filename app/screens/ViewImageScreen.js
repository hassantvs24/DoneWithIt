import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import babelConfig from '../../babel.config';
import colors from '../config/colors';

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image resizeMode="contain" style={styles.image} source={require('../assets/bg-2.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon:{
        height: 50,
        width: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        left: 30,
        zIndex: 1000
    },
    deleteIcon:{
        height: 50,
        width: 50,
        backgroundColor: colors.secondary,
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