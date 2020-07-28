import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../config/colors';

const AppButton = ({title, onPress, color = 'primary'}) => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} colors={color} onPress={onPress}>

            <Text style={styles.btnText} >{title}</Text>    
   
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10
    },

    btnText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    }
})

export default AppButton;