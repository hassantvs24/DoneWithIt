import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';
import styles from '../components/style';

const WelcomeScreen = () => {
    return (
        <ImageBackground blurRadius={5} style={styles.background}source={require("../assets/bg-welcome.jpg")}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                <Text style={styles.tagLine}>Selling Items</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="login" onPress={() => console.log('press login btn')} />
                <AppButton title="register"  onPress={() => console.log('press register btn')} color="secondary" />
            </View>
            
        </ImageBackground>
    );
}

export default WelcomeScreen;