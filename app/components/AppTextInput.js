import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import colors from '../config/colors';

const AppTextInput = ({ icon, width='100%', ...otherProps }) => {
    return (
        <View style={[styles.container, {width}]}>
            {icon && <MaterialCommunityIcons name={icon} size={25} color={colors.medium}  style={styles.icon} />}
            <TextInput {...otherProps} style={styles.textInput} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10
    },

    icon: {
        marginRight: 10
    },

    textInput: {
        color: colors.dark,
        fontSize: 18 
    }
});

export default AppTextInput;