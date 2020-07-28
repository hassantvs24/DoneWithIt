import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import ListItem from '../components/ListItem';

const MessageScreen = () => {

    const messages = [
        {
            id: 1,
            title: 'Lorem Ipsum is simply',
            description: 'Comes from a line in section 1.10.32',
            image: require('../assets/msg.jpg')
        },
        {
            id: 2,
            title: 'Contrary to popular belief',
            description: 'If you are going to use a passage of Lorem Ipsum',
            image: require('../assets/myimg.jpg')
        },
        {
            id: 3,
            title: 'There are many variations',
            description: 'Lorem Ipsum is that it has a more-or-less normal',
            image: require('../assets/cms.jpg')
        },
    ];

    return (
        <SafeAreaView style={styles.screen}>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => <ListItem title={item.title} subTitle={item.description} image={item.image} />}
            />
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
});

export default MessageScreen;