import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText.android';

const ListItem = ({title, subTitle, image}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View style={styles.userContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
            
       </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    userContainer: {
        marginVertical: 7,
        paddingLeft: 20,
    },

    title: {
        marginBottom: 7,
        fontWeight: '500',
        color: colors.primary
    },

    subTitle: {
        color: colors.medium,
    },
});

export default ListItem;