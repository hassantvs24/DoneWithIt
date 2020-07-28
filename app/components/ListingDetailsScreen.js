import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText.android';
import ListItem from './ListItem';

const ListingDetailsScreen = () => {
    return (
        <View>
            <Image source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jacket for Sales</AppText>
                <AppText style={styles.price}>$100</AppText>
                <ListItem image={require('../assets/myimg.jpg')} title="Bilkis Begum" subTitle="5 listings" />
                <ListItem image={require('../assets/myimg.jpg')} title="Bilkis Begum" subTitle="5 listings" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer: {
        padding: 20,
    },

    description: {
        color: 'gray',
        fontSize: 18
    },
    title: {
        color: colors.primary,
        fontSize: 24
    },

    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
});

export default ListingDetailsScreen;