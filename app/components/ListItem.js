import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText.android';


const ListItem = ({title, subTitle, image, IconComponent, onPress, renderRightActions}) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.userContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View> 
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 1,
        padding: 10,
        backgroundColor: colors.white
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    userContainer: {
        marginVertical: 1,
        paddingLeft: 20,
        justifyContent: 'center'
    },

    title: {
        marginBottom: 7,
        fontWeight: '500',
        color: colors.primary
    },

    subTitle: {
        color: colors.medium,
        fontSize: 16
    },
});

export default ListItem;