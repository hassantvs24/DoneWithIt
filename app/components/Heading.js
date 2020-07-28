import React from 'react';
import { Text, StyleSheet } from 'react-native';
import styles from './style';

const Heading = ({children}) => {
    return (
        <Text style={styles.heading}>{children}</Text>
    );
}

export default Heading;