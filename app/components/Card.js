import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText.android';

const Card = ({title, subTitle, image}) => {
    return (
       <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
            
       </View> 
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        elevation: 1,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    detailsContainer: {
        padding: 20,
    },

    title: {
        marginBottom: 7,
        fontWeight: 'bold',
        color: colors.primary,
    },

    subTitle: {
        color: colors.secondary,
    },
});


export default Card;