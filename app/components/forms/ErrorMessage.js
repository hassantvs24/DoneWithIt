import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from '../AppText.android';

const ErrorMessage = ({error, visible}) => {
    if (!visible || !error) return null;
    return (
    <AppText style={styles.error} >{error}</AppText>
    );
}

const styles = StyleSheet.create({
    error: {
        fontSize: 14,
        color: 'red'
    }
});

export default ErrorMessage;