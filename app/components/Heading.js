import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Heading = ({children}) => {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    }
})

export default Heading;