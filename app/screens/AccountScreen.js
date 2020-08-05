import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import { StyleSheet, View, FlatList } from 'react-native';
import Icon from '../components/Icon';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
    {
        title: "My Listing",
        icon: "format-list-bulleted",
        backgroundColor: colors.primary,

    },
    {
        title: "My Messages",
        icon: "email",
        backgroundColor: colors.secondary
        
    }
];

const AccountScreen = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title="Nazmul Hossain" 
                    subTitle="wall.mate@gmail.com" 
                    image={require('../assets/cms.jpg')} 
                />
            </View>

            <View style={styles.container}>
                <FlatList data={menuItems} 
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({item}) => <ListItem title={item.title} 
                    IconComponent={<Icon name={item.icon} backgroundColor={item.backgroundColor} />} 
                    ItemSeparatorComponent={() => <ListItemSeparator />}
                />}/>
            </View>

            <ListItem title="Logout"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />} 
            />

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen:{
        backgroundColor: colors.light
    }
});

export default AccountScreen;