import React from 'react';
import { Text, StyleSheet } from 'react-native';
import styles from './style';

const AppText = ({children, style, ...otherProps}) => {
    return (
        <Text style={[styles.text, style]} {...otherProps} >{children}</Text>
    );
}

export default AppText;