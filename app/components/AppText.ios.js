import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

const AppText = ({children, style}) => {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'red',

        ...Platform.select({
            ios: {
                fontSize: 20
            },
            android:{
                fontSize: 18,
                color: '#333'
            }
        })

    }
})

export default AppText;