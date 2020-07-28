import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';

const AppButton = ({title, onPress, btnStyle}) => {
    return (
        <TouchableOpacity style={btnStyle} onPress={onPress}>

            <Text style={styles.btnText} >{title}</Text>    
   
        </TouchableOpacity>
        
    );
}

export default AppButton;